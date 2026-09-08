import { SITE_ORIGIN } from './config'
import type { RankedProject } from './types'

const THIS_SITE_MARKET_RE =
  /murfreesboro|rutherford\s+spine|rutherford\s+chiropractic|smyrna|woodbury|shelbyville|eagleville|la\s*vergne|lebanon,\s*tn|franklin,\s*tn|brentwood,\s*tn|nashville/i

const FOREIGN_MARKET_RE =
  /huntington\s+beach|orange\s+county|irvine|costa\s+mesa|newport\s+beach|laguna\s+beach|santa\s+ana|anaheim|tustin|fountain\s+valley|mission\s+viejo|houston\s+cool|living\s+light|justin\s+healthcare|\bcalifornia\b|\bca\b(?=\s*,)/i

function hostOf(url: string): string | null {
  try {
    return new URL(url).host.replace(/^www\./, '').toLowerCase()
  } catch {
    return null
  }
}

export function hostsMatch(a: string, b: string): boolean {
  const left = hostOf(a)
  const right = hostOf(b)
  if (left && right) return left === right
  return a.replace(/\/$/, '') === b.replace(/\/$/, '')
}

function projectWebsite(project: RankedProject): string | null {
  return project.websiteUrl || project.website_url || null
}

/** True when this Ranked project is Rutherford — never another client's calendar. */
export function projectBelongsToThisSite(project: RankedProject | undefined): boolean {
  if (!project) return true

  const website = projectWebsite(project)
  const thisHost = hostOf(SITE_ORIGIN)
  if (website) {
    const host = hostOf(website)
    if (host && thisHost && host === thisHost) return true
    if (host && /rutherfordchiropractic/.test(host)) return true
    if (host && thisHost && host !== thisHost) {
      console.error(`[ranked] project "${project.name}" website ${website} is not ${SITE_ORIGIN}`)
      return false
    }
  }

  const name = project.name || ''
  if (THIS_SITE_MARKET_RE.test(name)) return true
  if (FOREIGN_MARKET_RE.test(name)) {
    console.error(`[ranked] project "${project.name}" belongs to another market`)
    return false
  }

  return true
}

export function isThisSiteArticle(title: string, html: string | null): boolean {
  const text = `${title}\n${html ?? ''}`
  if (THIS_SITE_MARKET_RE.test(text)) return true
  if (FOREIGN_MARKET_RE.test(text)) return false
  return true
}

/** If the calendar is clearly another metro and never mentions this practice, drop it. */
export function calendarBelongsToThisSite(titles: string[]): boolean {
  const anyHere = titles.some((t) => THIS_SITE_MARKET_RE.test(t))
  const foreignCount = titles.filter((t) => FOREIGN_MARKET_RE.test(t)).length
  if (foreignCount >= 3 && !anyHere) {
    console.error('[ranked] content calendar is another client market; refusing to publish')
    return false
  }
  return true
}
