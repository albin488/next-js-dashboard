export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard", "/addUser", "/editUser", "/editUser/:path*"],
};
