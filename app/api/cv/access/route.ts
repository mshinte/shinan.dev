import { NextRequest, NextResponse } from "next/server";
import {
  CV_SESSION_COOKIE,
  CV_SESSION_SECONDS,
  signCvToken,
  verifyCvToken
} from "../../../lib/cvAccess";

export const runtime = "nodejs";

export function GET(request: NextRequest) {
  const secret = process.env.CV_ACCESS_SECRET;
  const invitationToken = request.nextUrl.searchParams.get("token");
  const cvUrl = new URL("/cv", request.url);

  if (!secret) {
    cvUrl.searchParams.set("error", "configuration");
    return NextResponse.redirect(cvUrl);
  }

  if (!invitationToken) {
    cvUrl.searchParams.set("error", "missing");
    return NextResponse.redirect(cvUrl);
  }

  const invitation = verifyCvToken(invitationToken, secret, "invite");

  if (!invitation) {
    cvUrl.searchParams.set("error", "invalid");
    return NextResponse.redirect(cvUrl);
  }

  const sessionToken = signCvToken(
    {
      company: invitation.company,
      exp: Math.floor(Date.now() / 1000) + CV_SESSION_SECONDS,
      purpose: "session"
    },
    secret
  );

  const response = NextResponse.redirect(cvUrl);
  response.cookies.set(CV_SESSION_COOKIE, sessionToken, {
    httpOnly: true,
    maxAge: CV_SESSION_SECONDS,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production"
  });

  return response;
}
