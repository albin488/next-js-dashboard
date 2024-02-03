export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/addUser",
    "/editUser",
    "/editAdmin",
    "/editAdmin/:path*",
    "/admin",
    "/editUser/:path*",
  ],
};
