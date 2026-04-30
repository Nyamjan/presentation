import type { ReactNode } from "react";
import { DashboardFrame } from "@/components/DashboardFrame";

const staffNav = [
  { label: "Даалгавар", href: "/staff" },
  { label: "Мэдэгдэл", href: "/staff/announcements" },
];

export default function StaffLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardFrame
      brand="Ажилтны портал"
      description="Дотоод ажиллагаа"
      navItems={staffNav}
      user="Ажилтны баг"
      status="4 даалгавар идэвхтэй"
    >
      {children}
    </DashboardFrame>
  );
}
