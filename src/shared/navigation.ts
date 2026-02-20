export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'school', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'mindset', label: 'Mindset' },
  { id: 'contact', label: 'Contact' },
] as const

export type SectionId = (typeof NAV_ITEMS)[number]['id']

export const SECTION_IDS: ReadonlyArray<SectionId> = NAV_ITEMS.map((item) => item.id)
