const links = [
  ["About", "/#about"], ["Education & Research Interests", "/#research"],
  ["Publications", "/publications"], ["Awards", "/awards"],
  ["Conferences", "/conferences"], ["Books", "/books"],
  ["Patents", "/patents"], ["Teaching", "/teaching"],
  ["News", "/news"], ["Contact", "/#contact"],
] as const;

export function MobileNav(){return <details className="mobile-nav"><summary aria-label="Open website navigation"><span>Menu</span><i aria-hidden="true">☰</i></summary><nav aria-label="Mobile navigation">{links.map(([label,href])=><a href={href} key={href}>{label}</a>)}</nav></details>}
