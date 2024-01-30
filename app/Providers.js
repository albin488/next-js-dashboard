"use client";

import { SessionProvider } from "next-auth/react";

export const AutProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
