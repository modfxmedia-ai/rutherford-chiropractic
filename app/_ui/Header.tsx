"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { businessInfo, primaryNav } from "./nav";
import {
  CalendarIcon,
  ChevronDownIcon,
  FacebookIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "./icons";
import { MobileMenu } from "./MobileMenu";
import { brandAssets } from "../_lib/theme";

/**
 * Global site header.
 *
 * Composition:
 *   1. Utility bar (Deep Navy) — email, phone, Facebook, address. Collapses
 *      smoothly (max-height + opacity) once the page scrolls, so the sticky
 *      header stays compact during reading.
 *   2. Main bar — a glassmorphism surface (translucent white + backdrop
 *      blur) at all scroll positions; gains a touch more opacity/blur and a
 *      soft shadow once scrolled, and shrinks slightly, for a premium
 *      "solidify on scroll" sticky-nav feel.
 *
 * Desktop dropdowns are still pure CSS (`group`/`group-hover`/
 * `group-focus-within`) so the nav itself needs no extra client state —
 * only the scroll-driven glass effect needs `useState`/`useEffect`, so the
 * whole file is a small client component. The dropdown panel is flush
 * against its trigger (no padding-created gap) with the visual "floating"
 * offset applied to the INNER card via margin instead — a padding/margin
 * gap on the absolutely-positioned, hover-driving panel itself creates a
 * dead zone the pointer can cross without being considered "still hovering
 * the group", which is what caused the old dropdown's open/close flicker.
 *
 * Palette: strictly the brand tokens defined in `app/globals.css`
 * (Primary Blue #004B99, Deep Navy #011149, Accent Orange #FC8F00, white).
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 24);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <UtilityBar />
      </div>

      <div
        className={`border-b transition-all duration-300 ease-out ${
          scrolled
            ? "border-[color:var(--color-border)] bg-white/90 shadow-[var(--shadow-elevated)] backdrop-blur-xl"
            : "border-white/0 bg-white/70 shadow-[var(--shadow-card)] backdrop-blur-md"
        }`}
      >
        <div
          className={`container-header flex items-center justify-between gap-4 transition-[height] duration-300 ease-out lg:gap-8 ${
            scrolled ? "h-16 lg:h-20" : "h-20 lg:h-24"
          }`}
        >
          <Link
            href="/"
            aria-label="Rutherford Spine &amp; Wellness Center - Home"
            className="shrink-0"
          >
            <Image
              src={brandAssets.logo}
              alt="Rutherford Spine &amp; Wellness Center"
              width={brandAssets.logoWidth}
              height={brandAssets.logoHeight}
              priority
              className={`w-auto transition-all duration-300 ease-out ${
                scrolled ? "h-8 lg:h-9" : "h-10 lg:h-12"
              }`}
            />
          </Link>

          <div className="hidden min-w-0 flex-1 justify-center lg:flex">
            <DesktopNav />
          </div>

          <div className="flex shrink-0 items-center gap-2.5">
            {/* TODO: swap the `#reviews` target for the client's Google reviews URL */}
            <a href="#reviews" className="btn btn-outline-orange btn-xs hidden 2xl:inline-flex">
              Read Reviews
            </a>
            <Link
              href="/contact-us/"
              className="btn btn-primary btn-xs hidden min-[1400px]:inline-flex"
            >
              Schedule Your Consultation
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

function UtilityBar() {
  return (
    <div className="utility-bar hidden md:block">
      <div className="container-header flex h-10 items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <a
            href={businessInfo.emailHref}
            className="inline-flex items-center gap-2 text-white/85 transition-colors hover:text-white"
          >
            <MailIcon size={16} />
            <span className="hidden lg:inline">{businessInfo.email}</span>
            <span className="lg:hidden">Email</span>
          </a>
          <a
            href={businessInfo.phoneHref}
            className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-brand-orange"
          >
            <PhoneIcon size={16} />
            {businessInfo.phone}
          </a>
          <a
            href={businessInfo.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rutherford Spine &amp; Wellness on Facebook"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-orange hover:text-white"
          >
            <FacebookIcon size={14} />
          </a>
        </div>
        <a
          href={businessInfo.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 text-white/85 transition-colors hover:text-white lg:inline-flex"
        >
          <MapPinIcon size={16} />
          <span>
            {businessInfo.address.line1}, {businessInfo.address.line2}
          </span>
        </a>
      </div>
    </div>
  );
}

function DesktopNav() {
  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-0.5 xl:gap-1.5">
        {primaryNav.map((item) =>
          item.children ? (
            <li key={item.label} className="group relative">
              <button
                type="button"
                aria-haspopup="menu"
                className="relative inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-2 text-[11.5px] font-semibold uppercase tracking-[0.01em] text-brand-navy transition-colors hover:text-brand-blue group-focus-within:text-brand-blue xl:px-2.5"
              >
                {item.label}
                <ChevronDownIcon
                  size={12}
                  className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                />
                <span className="pointer-events-none absolute inset-x-2 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-[color:var(--color-brand-orange)] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-within:scale-x-100 xl:inset-x-2.5" />
              </button>
              {/* Flush hoverable wrapper (no gap) - the visual "floating"
                  offset lives on the inner panel via `mt-2`, not on this
                  outer box, so the pointer never crosses dead space that
                  would drop out of `group-hover`. */}
              <div
                role="menu"
                aria-label={item.label}
                className="invisible absolute left-1/2 top-full z-50 min-w-[240px] -translate-x-1/2 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
              >
                <ul className="surface-card mt-2 origin-top scale-95 overflow-hidden p-2 opacity-0 transition-all duration-200 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100">
                  {item.children.map((c) =>
                    c.label === "Book Appointment" ? (
                      <li
                        key={c.label}
                        className="mt-1 border-t border-[color:var(--color-border)] pt-1"
                      >
                        <Link
                          href={c.href}
                          role="menuitem"
                          className="flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-bold text-[color:var(--color-brand-orange)] transition-colors hover:bg-[color:var(--color-brand-orange)]/10"
                        >
                          <CalendarIcon size={15} />
                          {c.label}
                        </Link>
                      </li>
                    ) : (
                      <li key={c.label}>
                        <Link
                          href={c.href}
                          role="menuitem"
                          className="block rounded-md px-4 py-2.5 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-blue/5 hover:text-brand-blue"
                        >
                          {c.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </li>
          ) : (
            <li key={item.href} className="group relative">
              <Link
                href={item.href}
                className="relative inline-block whitespace-nowrap rounded-md px-2 py-2 text-[11.5px] font-semibold uppercase tracking-[0.01em] text-brand-navy transition-colors hover:text-brand-blue xl:px-2.5"
              >
                {item.label}
                <span className="pointer-events-none absolute inset-x-2 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-[color:var(--color-brand-orange)] transition-transform duration-300 ease-out group-hover:scale-x-100 xl:inset-x-2.5" />
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
