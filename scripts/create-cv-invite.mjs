import { createHmac } from "node:crypto";

const args = process.argv.slice(2).filter((argument) => argument !== "--");
const company = args[0]?.trim();
const days = Number(args[1] ?? "7");
const secret = process.env.CV_ACCESS_SECRET;
const siteUrl = (process.env.CV_SITE_URL ?? "https://shinan.dev").replace(/\/$/, "");

if (!company) {
  console.error('Usage: npm run cv:invite -- "Company Name" 7');
  process.exit(1);
}

if (!secret || secret.length < 32) {
  console.error("CV_ACCESS_SECRET must be set and at least 32 characters long.");
  process.exit(1);
}

if (!Number.isFinite(days) || days <= 0 || days > 30) {
  console.error("Expiry must be between 1 and 30 days.");
  process.exit(1);
}

const payload = {
  company,
  exp: Math.floor(Date.now() / 1000) + Math.floor(days * 24 * 60 * 60),
  purpose: "invite"
};
const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64url");
const signature = createHmac("sha256", secret)
  .update(encodedPayload)
  .digest("base64url");
const token = `${encodedPayload}.${signature}`;

console.log(`${siteUrl}/api/cv/access?token=${token}`);
