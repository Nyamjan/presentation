import type { ReactNode } from "react";
import { DashboardFrame } from "@/components/DashboardFrame";

const sponsorNav = [
  { label: "Самбар", href: "/sponsor" },
  { label: "Кампанит ажил", href: "/sponsor/campaigns" },
];

export default function SponsorLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardFrame
      brand="Ивээн тэтгэгчийн портал"
      description="Кампанит ажлын үзүүлэлт"
      navItems={sponsorNav}
      user="СкайТэл маркетинг"
      status="3 идэвхтэй кампанит ажил"
    >
      {children}
    </DashboardFrame>
  );
}
