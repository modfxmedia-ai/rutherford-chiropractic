"use client";

/**
 * <StickyBookBanner> — persistent "Book Now" bar pinned to the bottom of
 * the viewport, rendered globally (in `app/layout.tsx`) so the booking CTA
 * is always reachable while scrolling, on every page.
 *
 * Behavior:
 *   - Hidden until the user scrolls past roughly one hero-height (so it
 *     doesn't fight a page's own hero CTAs for attention immediately).
 *   - Dismissible via a close button; once dismissed it stays hidden for
 *     the rest of the session (component state only — reappears on a
 *     fresh page load, which is fine for this use case).
 *   - Hidden entirely on the Contact Us page — that page already IS the
 *     booking destination, so the floating CTA would just be redundant
 *     clutter on top of the contact form.
 *   - Hidden once the footer scrolls into view, via `IntersectionObserver`
 *     watching `#site-footer` (see `Footer.tsx`) — the footer has its own
 *     phone/booking links, so the floating bar would otherwise overlap it.
 *   - Respects the iOS safe-area inset so it never sits under the home
 *     indicator bar.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { businessInfo } from "./nav";
import { CalendarIcon, CloseIcon, PhoneIcon } from "./icons";

export function StickyBookBanner() {
  const pathname = usePathname();
  const [pastThreshold, setPastThreshold] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  // Reset the dismissal once the route changes, so a dismissal on one page
  // doesn't hide the banner forever on the next page — this is the
  // "adjust state when a prop changes" pattern (set state during render,
  // not inside an effect), so it doesn't trigger an extra render pass.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setDismissed(false);
  }

  const onContactPage = pathname?.startsWith("/contact-us") ?? false;

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const threshold = Math.min(window.innerHeight * 0.65, 520);
      setPastThreshold(window.scrollY > threshold);
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
  }, [pathname]);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { rootMargin: "0px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  const visible =
    pastThreshold && !dismissed && !onContactPage && !footerVisible;

  if (onContactPage) return null;

  return (
    <div
      role="region"
      aria-label="Book an appointment"
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[color:var(--color-brand-navy)]/95 backdrop-blur-md shadow-[0_-8px_30px_-8px_rgba(1,17,73,0.35)] transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex items-center gap-3 px-4 py-3 sm:px-6">
        <a
          href={businessInfo.phoneHref}
          aria-label={`Call ${businessInfo.phone}`}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <PhoneIcon size={19} />
        </a>

        <div className="hidden min-w-0 flex-1 sm:block">
          <p className="truncate text-xs font-bold uppercase tracking-[0.1em] text-white/60">
            Now Accepting New Patients
          </p>
          <p className="truncate text-sm font-semibold text-white">Murfreesboro, TN</p>
        </div>
        <p className="hidden min-w-0 flex-1 truncate text-sm font-semibold text-white min-[420px]:block sm:hidden">
          New Patients Welcome
        </p>

        <Link
          href="/contact-us/"
          tabIndex={visible ? 0 : -1}
          className="btn btn-primary-on-dark btn-sm shrink-0 !bg-[color:var(--color-brand-orange)] !border-[color:var(--color-brand-orange)] !text-white hover:!bg-[color:var(--color-brand-orange-700)] hover:!border-[color:var(--color-brand-orange-700)]"
        >
          <CalendarIcon size={15} />
          Book Now
        </Link>

        <button
          type="button"
          aria-label="Dismiss booking banner"
          tabIndex={visible ? 0 : -1}
          onClick={() => setDismissed(true)}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
        >
          <CloseIcon size={16} />
        </button>
      </div>
    </div>
  );
}
