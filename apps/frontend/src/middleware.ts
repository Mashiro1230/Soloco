import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "firebase/auth";
import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault()
  });
}

export async function middleware(req: NextRequest){
  const token = req.cookies.get("token");

  // 認可不要なページを判別
  const publicPaths = ["/", "login", "/register", "/lp"];
  if (publicPaths.includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect("/login");
  }

  return NextResponse.next();
}

// ミドルウェアを適用するURLパターンを指定
export const config = {
  // apiで始まるURLを除外する正規表現
  matcher: ['/((?!api/).*)'],
};