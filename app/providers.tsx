"use client";

import { AuthProvider } from "@/src/context/AuthContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
