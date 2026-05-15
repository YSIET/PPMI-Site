"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import Logo from "@/components/Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-text/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Logo size={36} textClassName="text-text" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm transition-colors whitespace-nowrap ${
                    isActive ? "text-text font-semibold" : "text-text-soft hover:text-text"
                  }`}
                >
                  {link.label.ko}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-ppmi-red" />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 text-navy"
            aria-label="메뉴 열기"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* 모바일 메뉴 */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-text/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-md bg-background shadow-2xl transition-transform duration-500 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex items-center justify-between border-b border-border">
            <span className="text-display text-xl text-text">PPMI</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-text"
              aria-label="메뉴 닫기"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="p-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-4 text-lg border-b border-border transition-colors ${
                  pathname === link.href
                    ? "text-text font-semibold"
                    : "text-text-soft hover:text-text"
                }`}
              >
                <span className="block">{link.label.ko}</span>
                <span className="text-xs text-text-light tracking-widest uppercase mt-1 block">
                  {link.label.en}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}