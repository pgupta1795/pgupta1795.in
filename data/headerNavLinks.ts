import { KindProps } from '@/components/social-icons'

const headerNavLinks: {
  href: string
  title: string
  kind: KindProps
}[] = [
  { href: '/', title: 'Home', kind: 'circleDot' },
  { href: '/blog', title: 'Blog', kind: 'blog' },
  { href: '/tags', title: 'Tags', kind: 'hash' },
  { href: '/projects', title: 'Projects', kind: 'curlyBraces' },
  { href: '/about', title: 'About', kind: 'circleDot' },
]

export default headerNavLinks
