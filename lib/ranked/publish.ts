import { listRankedContent } from './client'
import { getRankedCoverImage } from './cover'
import { isBlogContentType, isRankedPostLive, slugFromTitle } from './html-to-post'
import { calendarBelongsToThisSite, isThisSiteArticle } from './this-site'

export async function generateLiveRankedCovers(projectId: string): Promise<string[]> {
  const configured = process.env.RANKED_PROJECT_ID
  if (!configured || projectId !== configured) {
    console.error('[ranked] refusing cover generation for a project other than RANKED_PROJECT_ID')
    return []
  }

  const items = await listRankedContent(projectId)
  const live = items.filter(
    (item) => isBlogContentType(item.content_type) && isRankedPostLive(item.status, item.scheduled_date),
  )
  if (!calendarBelongsToThisSite(live.map((item) => item.title))) {
    return []
  }

  const slugs: string[] = []
  const reservedUrls = new Set<string>()

  for (const item of live) {
    if (!isThisSiteArticle(item.title, item.description)) continue
    const slug = slugFromTitle(item.title)
    await getRankedCoverImage({
      contentId: item.id,
      title: item.title,
      slug,
      generate: true,
      reservedUrls,
    })
    slugs.push(slug)
  }

  return slugs
}
