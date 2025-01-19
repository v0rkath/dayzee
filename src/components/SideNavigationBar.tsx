"use client";

import { cn } from "@/utils/class-styling";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ROUTES = [
  { label: "WEAPONS", href: "/weapons" },
  { label: "CRAFTING", href: "/crafting" },
  { label: "LOOT MAP", href: "/loot-map" },
];

export default function SideNavigationBar() {
  const pathname = usePathname();

  const curRoute = ROUTES.find((route) => pathname.startsWith(route.href));

  return (
    <nav className="flex flex-col w-60 border-r border-gray-700 bg-dark-blue h-screen sticky bottom-0 left-0 top-0">
      <ul className="mt-1 flex flex-col">
        {ROUTES.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              prefetch={false}
              className={cn(
                "flex items-center px-5 py-4 text-sm text-stone-400 bg-dark-blue",
                curRoute?.href === route.href &&
                  "border-gray-700 border-y bg-gray bg-dark-blue-sec hover:bg-zinc-950 px-[1.625rem]"
              )}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
