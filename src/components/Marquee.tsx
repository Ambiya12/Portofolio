const WORDS = [
  'Build',
  'Learn',
  'Ship',
  'Iterate',
  'Collaborate',
  'Improve',
  'Architect',
  'Deploy',
  'Refactor',
  'Review',
  'Test',
  'Document',
]

export function Marquee() {
  // Duplicate 2× so the seamless loop has enough content
  const items = [...WORDS, ...WORDS]

  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {items.map((word, i) => (
          <span key={`${word}-${i}`} className="marquee-item">
            {word}
            <span className="marquee-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
