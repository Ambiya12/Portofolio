/**
 * Splits a string like "Category: detail text" into { category, content }.
 * Points without a short category prefix are returned with category = null.
 */
export function parseCategoryString(text: string, maxCategoryLength: number = 28): { category: string | null; content: string } {
  const colonIdx = text.indexOf(':')
  if (colonIdx > 0 && colonIdx <= maxCategoryLength) {
    return { category: text.slice(0, colonIdx).trim(), content: text.slice(colonIdx + 1).trim() }
  }
  return { category: null, content: text }
}
