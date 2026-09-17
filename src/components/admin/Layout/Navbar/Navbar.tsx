"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// Data
import { NavbarData } from "./data";

// Components
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui";
import { AdminProfile } from "../AdminProfile";
import { useSession } from "next-auth/react";

export const Navbar: React.FC = () => {
  const { data: session, status } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);

  const visibleLinks = NavbarData.filter(
    (data) => session || !data.isRestricted,
  );

  return (
    <header className="fixed top-0 z-20 w-full border-b bg-white">
      <div className="flex items-center justify-between px-4 py-4 sm:px-8 lg:px-[250px]">
        <div className="flex gap-5">
          <p className="text-2xl font-bold">
            <span data-highlighted-text>ICI</span> Fest
          </p>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {visibleLinks.map((data, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href={data.href}>{data.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          {session && <AdminProfile data={session} status={status} />}
        </nav>

        {/* Mobile right side */}
        <div className="flex items-center gap-3 md:hidden">
          {session && <AdminProfile data={session} status={status} />}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="rounded-md p-1 text-gray-700"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="border-t bg-white px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {visibleLinks.map((data, index) => (
              <Link
                key={index}
                href={data.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                {data.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
