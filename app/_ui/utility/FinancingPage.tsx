/**
 * <FinancingPage> — body content for `/financing/`. Live page is a single
 * focused CareCredit promo: logo, heading, subheading, and an "Apply Now"
 * button linking to the live CareCredit provider-center login/application
 * URL. Content and CTA link reproduced verbatim.
 */

import Image from "next/image";
import { Reveal } from "../motion/primitives";
import { UtilityHero } from "./UtilityHero";

const CARECREDIT_APPLY_URL = "https://www.carecreditprovidercenter.com/portal/login";

export function FinancingPage() {
  return (
    <main>
      <UtilityHero eyebrow="Payment Options" h1="Financing" bgImage="/media/financing-banner.jpg" />

      <section className="section-y bg-white">
        <div className="container-narrow text-center">
          <Reveal>
            <Image
              src="/media/carecredit.png"
              alt="CareCredit"
              width={707}
              height={148}
              className="mx-auto h-auto w-56"
            />
            <h2 className="h-section mt-8">
              Focus on your health and wellness. CareCredit makes it possible.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[color:var(--color-body)]">
              Get an easy way to pay over time with the CareCredit credit card.
            </p>
            <a
              href={CARECREDIT_APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-8"
            >
              Apply Now
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
