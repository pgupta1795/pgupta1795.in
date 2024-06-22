'use client'

import siteMetadata from '@/data/siteMetadata'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import profile from '../public/static/images/avatar.png'
import SocialIcon from './social-icons'

const renderLetters = (name: string, key: string) => {
  if (!name) return
  return name.split('').map((letter, index) => (
    <span
      key={index}
      className={`name-animation name-animation-${key}-index inline-block opacity-0 `}
    >
      {letter}
    </span>
  ))
}

export default function Intro() {
  const component = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          '.name-animation',
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,

            ease: 'elastic.out(1,0.3)',
            duration: 1,
            transformOrigin: 'left top',
            stagger: { each: 0.1, from: 'random' },
          }
        )
        .fromTo(
          '.job-title',
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: 'elastic.out(1,0.3)',
          }
        )
    }, component)
    return () => ctx.revert()
  }, [])

  const name = siteMetadata.author.split(' ')

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0" ref={component}>
      <div className="grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2">
        <div className="row-span-1 row-start-1 -mt-9 aspect-square  md:col-span-1 md:col-start-2 md:mt-0">
          <Image
            src={profile}
            alt="Profile Image"
            className="h-auto rounded-full"
            sizes="20vw"
            priority
          />
        </div>
        <div className="col-start-1 md:row-start-1" data-speed=".2">
          <h1
            className="mb-8 text-[clamp(3rem,15vmin,8rem)] font-extrabold leading-none tracking-tighter"
            aria-label={name[0] + ' ' + name[1]}
          >
            <span className="block text-slate-300 ">{renderLetters(name[0], 'first')}</span>
            <span className="-mt-[.2em] block text-slate-500">
              {renderLetters(name[1], 'last')}
            </span>
          </h1>
          <span className="job-title mb-8 block bg-gradient-to-tr from-purple-500 via-purple-200 to-purple-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
            {siteMetadata.description}
          </span>
          <div className="mb-8 flex space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            <SocialIcon kind="resume" href={`/resume.pdf`} download="resume.pdf" size={6} />
          </div>
          <div className="text-base font-medium leading-6">
            <Link
              href={`/about`}
              className="hover-underline-animation text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              About me &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
