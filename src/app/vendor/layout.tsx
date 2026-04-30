import type { ReactNode } from "react";
import { DashboardFrame } from "@/components/DashboardFrame";

const vendorNav = [
  { label: "Самбар", href: "/vendor" },
  { label: "Захиалга", href: "/vendor/orders", badge: "24" },
  { label: "Цэс", href: "/vendor/menu" },
  { label: "Нөөц", href: "/vendor/inventory" },
  { label: "Аналитик", href: "/vendor/analytics" },
];

export default function VendorLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardFrame
      brand="Худалдаачны портал"
      description="Хуушуурын гэрийн ажиллагаа"
      navItems={vendorNav}
      user="Khuushuur House"
      status="Дараалал: 8 мин"
    >
      {children}
    </DashboardFrame>
  );
}
