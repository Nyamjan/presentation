import type { ReactNode } from "react";
import { SpectatorShell } from "@/components/SpectatorShell";

export default function SpectatorLayout({ children }: { children: ReactNode }) {
  return <SpectatorShell>{children}</SpectatorShell>;
}
