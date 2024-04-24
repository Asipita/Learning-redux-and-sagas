import { ReactNode } from "react";

export function Heading({ children }: { children: ReactNode }) {
  return <h1 className="text-3xl font-semibold">{children}</h1>;
}
