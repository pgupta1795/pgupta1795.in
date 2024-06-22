import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'
import {
  Blog,
  CircleDot,
  CurlyBraces,
  Facebook,
  Github,
  Hash,
  Instagram,
  Linkedin,
  Mail,
  Mastodon,
  Resume,
  Threads,
  Twitter,
  X,
  Youtube,
} from './icons'

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  x: X,
  mastodon: Mastodon,
  threads: Threads,
  instagram: Instagram,
  resume: Resume,
  hash: Hash,
  blog: Blog,
  circleDot: CircleDot,
  curlyBraces: CurlyBraces,
}

export type KindProps = keyof typeof components

type SocialIconProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  kind: KindProps
  href: string | undefined
  size?: number
}

const SocialIcon = ({ kind, href, size = 8, ...rest }: SocialIconProps) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="name-animation text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
