"use client";

import { Button } from "@/components/ui/button";
import { NAVBAR_TRANSITION_POINT } from "@/global";
import useScrollProgress from "@/hooks/useScrollProgress";
import Link from "next/link";
import React, { useState } from "react";
import { NavLinkData } from "./data";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const { y } = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isScrolled = y > NAVBAR_TRANSITION_POINT;

  return (
    <header
      className={`fixed top-0 z-20 w-full border-b px-4 py-4 transition-all duration-200 sm:px-8 lg:px-[50px] ${isScrolled ? "border-gray-200 bg-white" : "border-transparent bg-white/10 backdrop-blur-sm"}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="max-w-[140px] sm:max-w-[200px]">
            <div className="flex w-full justify-center">
              <div className="size-[36px] rounded-sm bg-gray-200 sm:size-[40px]" />
            </div>
            <p className="mt-1 text-center text-[9px] font-semibold leading-tight sm:text-[10px]">
              Swami Keshvanand Institute of Technology, M&amp;G, Jaipur
            </p>
          </div>
          <div className="max-w-[140px] sm:max-w-[200px]">
            <div className="flex w-full justify-center">
              <div className="size-[36px] rounded-sm bg-gray-200 sm:size-[40px]" />
            </div>
            <p className="mt-1 text-center text-[9px] font-semibold leading-tight sm:text-[10px]">
              Indian Concrete Institute Rajasthan State Center
            </p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 md:flex">
          <ul className="flex items-center gap-5 text-sm font-semibold">
            {NavLinkData.map((data, index) => (
              <li key={index}>
                <Link href={data.href}>
                  <p className="border-primary px-[10px] uppercase duration-100 hover:border-b-[3px] hover:pb-[8px]">
                    {data.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="h-5 w-[1px] bg-black" aria-hidden="true" />
          <Button variant="default" size="lg" className="font-semibold">
            Register Now
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="rounded-md p-1 text-gray-700 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t pb-4 pt-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {NavLinkData.map((data, index) => (
              <Link
                key={index}
                href={data.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold uppercase text-gray-700 hover:bg-gray-100"
              >
                {data.label}
              </Link>
            ))}
            <Button
              variant="default"
              size="sm"
              className="mt-2 font-semibold"
            >
              Register Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
