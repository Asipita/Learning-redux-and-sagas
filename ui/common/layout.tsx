import { inter } from "@/fonts";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center border-4 p-24 ${inter.className}`}
    >
      {children}
    </main>
  );
}
