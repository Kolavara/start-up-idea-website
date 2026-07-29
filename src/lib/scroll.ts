
/**
 * Smart scroll handler that works across pages.
 * On the homepage, scrolls to the section directly.
 * On other pages, navigates to /#section-id using client-side routing.
 */
export function createScrollHandler(pathname: string, push?: (url: string) => void) {
  return function scrollToHash(href: string, offset = 80) {
    if (!href.startsWith('#')) return

    const sectionId = href.slice(1)

    // If we're not on the homepage, navigate there first with the anchor
    if (pathname !== '/') {
      if (push) {
        push(`/#${sectionId}`)
      } else {
        window.location.href = `/#${sectionId}`
      }
      return
    }

    // On homepage — smooth scroll to section with retry
    const scrollToElement = () => {
      const el = document.getElementById(sectionId)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
        return true
      }
      return false
    }

    // Try immediately
    if (!scrollToElement()) {
      // Retry after a short delay in case the section hasn't rendered yet
      const retry = setTimeout(() => scrollToElement(), 100)
      // Clean up if component unmounts
      return () => clearTimeout(retry)
    }
  }
}
