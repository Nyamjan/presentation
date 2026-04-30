import type { ReactNode } from "react";
import { DashboardFrame } from "@/components/DashboardFrame";

const organizerNav = [
  { label: "Товч", href: "/organizer" },
  { label: "Хуваарь", href: "/organizer/schedule" },
  { label: "Ослууд", href: "/organizer/incidents", badge: "6" },
  { label: "Ажилтан", href: "/organizer/staff" },
  { label: "Худалдаачин", href: "/organizer/vendors" },
  { label: "Ивээн тэтгэгч", href: "/organizer/sponsors" },
  { label: "Аналитик", href: "/organizer/analytics" },
  { label: "Мэдэгдэл", href: "/organizer/announcements" },
  { label: "Тайлан", href: "/organizer/report" },
];

export default function OrganizerLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardFrame
      brand="Зохион байгуулагчийн команд төв"
      description="Төв цэнгэлдэхийн үйл ажиллагаа"
      navItems={organizerNav}
      user="Үйл ажиллагааны төв"
      status="12 ажилтан ажиллаж байна"
    >
      {children}
    </DashboardFrame>
  );
}
