import { createHmac, timingSafeEqual } from "crypto";

export const CV_SESSION_COOKIE = "cv_session";
export const CV_SESSION_SECONDS = 60 * 60;

type CvTokenPurpose = "invite" | "session";

export type CvTokenPayload = {
  company: string;
  exp: number;
  purpose: CvTokenPurpose;
};

function createSignature(encodedPayload: string, secret: string) {
  return createHmac("sha256", secret)
    .update(encodedPayload)
    .digest("base64url");
}

export function signCvToken(payload: CvTokenPayload, secret: string) {
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = createSignature(encodedPayload, secret);

  return `${encodedPayload}.${signature}`;
}

export function verifyCvToken(
  token: string,
  secret: string,
  requiredPurpose: CvTokenPurpose
): CvTokenPayload | null {
  const [encodedPayload, signature, extra] = token.split(".");

  if (!encodedPayload || !signature || extra) {
    return null;
  }

  const expectedSignature = createSignature(encodedPayload, secret);
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);

  if (
    signatureBuffer.length !== expectedBuffer.length ||
    !timingSafeEqual(signatureBuffer, expectedBuffer)
  ) {
    return null;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8")
    ) as Partial<CvTokenPayload>;

    if (
      typeof payload.company !== "string" ||
      !payload.company.trim() ||
      typeof payload.exp !== "number" ||
      payload.exp <= Math.floor(Date.now() / 1000) ||
      payload.purpose !== requiredPurpose
    ) {
      return null;
    }

    return payload as CvTokenPayload;
  } catch {
    return null;
  }
}
