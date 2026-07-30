"use client";

/**
 * <ShareBar> — small "copy link" / "email" share affordance for the post
 * sidebar. Client component (clipboard + local "copied" feedback state)
 * kept separate from the (server) `BlogPostTemplate` page tree.
 */

import { useState } from "react";
import { CheckIcon, LinkIcon, MailIcon } from "../icons";

export function ShareBar({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (older browser/permissions) — no-op.
    }
  }

  // Built lazily on click (not as a static `href`) so we never need to read
  // `window.location` during render — that would differ between the
  // server-rendered markup (no `window`) and the client's first render,
  // causing a real hydration mismatch.
  function openMailShare() {
    const mailHref = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
      window.location.href
    )}`;
    window.location.href = mailHref;
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={copyLink}
        className="icon-badge h-10 w-10 transition-transform hover:scale-105"
        aria-label="Copy link to this article"
      >
        {copied ? <CheckIcon size={17} /> : <LinkIcon size={17} />}
      </button>
      <button
        type="button"
        onClick={openMailShare}
        className="icon-badge h-10 w-10 transition-transform hover:scale-105"
        aria-label="Share this article by email"
      >
        <MailIcon size={17} />
      </button>
      {copied && (
        <span className="text-xs font-semibold text-[color:var(--color-brand-blue)]">
          Link copied!
        </span>
      )}
    </div>
  );
}
