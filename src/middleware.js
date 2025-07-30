import { NextResponse } from "next/server";

export function middleware(request) {
  // 관리자 대시보드 페이지에 대한 접근 체크
  if (request.nextUrl.pathname.startsWith("/admin/dashboard")) {
    const isAdminLoggedIn = request.cookies.get("isAdminLoggedIn");

    if (!isAdminLoggedIn) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}
