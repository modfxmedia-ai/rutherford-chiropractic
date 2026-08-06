"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { primaryNav, businessInfo } from "./nav";
import {
  CalendarIcon,
  ChevronDownIcon,
  CloseIcon,
  FacebookIcon,
  MailIcon,
  MapPinIcon,
  MenuIcon,
  PhoneIcon,
} from "./icons";

/**
 * Slide-in mobile menu triggered by a hamburger button.
 *
 * All nav groups are expanded inline (no nested toggle-per-group) so users
 * on small screens can see every link at once. Body scroll is locked while
 * the menu is open and the Escape key closes it.
 *
 * The backdrop + slide-in panel are rendered through a `createPortal` into
 * `document.body` rather than in-place. Reason: the Header's glass surface
 * uses `backdrop-blur-*` (CSS `backdrop-filter`), which — like `transform`/
 * `filter`/`perspective` — establishes a new containing block for any
 * `position: fixed` DESCENDANT. Without the portal, the panel's `fixed
 * inset-y-0` was being sized/positioned relative to that blurred header
 * div's own (short) box instead of the viewport, squashing the whole menu
 * into a ~80px sliver at the top of the screen instead of a full-height
 * drawer. Portaling to `<body>` (which has no such ancestor) escapes that
 * containing block entirely.
 */
// `document.body` doesn't exist during SSR, so the portal can only render
// once mounted on the client. `useSyncExternalStore` (server snapshot =
// false) is the React-endorsed way to detect "client has mounted" without
// calling setState inside an effect.
function subscribeNoop() {
  return () => {};
}
function getClientSnapshot() {
  return true;
}
function getServerSnapshot() {
  return false;
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(
    subscribeNoop,
    getClientSnapshot,
    getServerSnapshot
  );

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-brand-navy hover:bg-brand-blue/5 focus-visible:bg-brand-blue/10"
      >
        {open ? <CloseIcon size={26} /> : <MenuIcon size={26} />}
      </button>

      {mounted &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              onClick={() => setOpen(false)}
              aria-hidden
              className={`lg:hidden fixed inset-0 z-40 bg-brand-navy/60 backdrop-blur-sm transition-opacity duration-200 ${
                open ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            />

            {/* Slide-in panel */}
            <div
              id="mobile-menu-panel"
              role="dialog"
              aria-modal={open}
              aria-label="Site navigation"
              className={`lg:hidden fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-elevated transition-transform duration-300 ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
            >
        <div className="flex h-16 items-center justify-between border-b border-[color:var(--color-border)] px-5">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
            Menu
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-navy hover:bg-brand-blue/5"
          >
            <CloseIcon size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="flex flex-col gap-1">
            {primaryNav.map((item) =>
              item.children ? (
                <li key={item.label} className="py-2">
                  <div className="flex items-center gap-1.5 pb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                    <span>{item.label}</span>
                    <ChevronDownIcon size={14} />
                  </div>
                  <ul className="flex flex-col gap-0.5 border-l-2 border-brand-blue/20 pl-4">
                    {item.children.map((c) =>
                      c.label === "Book Appointment" ? (
                        <li key={c.label} className="mt-1">
                          <Link
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 rounded-sm py-2 text-base font-bold text-[color:var(--color-brand-orange)] hover:text-[color:var(--color-brand-orange-700)]"
                          >
                            <CalendarIcon size={16} />
                            {c.label}
                          </Link>
                        </li>
                      ) : (
                        <li key={c.label}>
                          <Link
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-sm py-2 text-base font-medium text-brand-navy hover:text-brand-blue"
                          >
                            {c.label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-sm py-3 text-lg font-semibold text-brand-navy hover:text-brand-blue"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/contact-us/"
              onClick={() => setOpen(false)}
              className="btn btn-primary btn-lg w-full"
            >
              Schedule Your Consultation
            </Link>
            {/* TODO: swap the `#reviews` target for the client's Google reviews URL */}
            <a
              href="/#reviews"
              onClick={() => setOpen(false)}
              className="btn btn-outline-orange btn-lg w-full"
            >
              Read Reviews
            </a>
          </div>

          <div className="mt-10 space-y-4 border-t border-[color:var(--color-border)] pt-6 text-sm text-brand-gray">
            <a
              href={businessInfo.phoneHref}
              className="flex items-center gap-3 font-semibold text-brand-navy hover:text-brand-blue"
            >
              <PhoneIcon size={18} />
              {businessInfo.phone}
            </a>
            <a
              href={businessInfo.emailHref}
              className="flex items-center gap-3 break-all hover:text-brand-blue"
            >
              <MailIcon size={18} />
              {businessInfo.email}
            </a>
            <a
              href={businessInfo.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:text-brand-blue"
            >
              <MapPinIcon size={18} />
              <span>
                {businessInfo.address.line1}
                <br />
                {businessInfo.address.line2}
              </span>
            </a>
            <a
              href={businessInfo.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rutherford Spine &amp; Wellness on Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white hover:bg-brand-navy"
            >
              <FacebookIcon size={18} />
            </a>
          </div>
        </nav>
            </div>
          </>,
          document.body
        )}
    </>
  );
}
