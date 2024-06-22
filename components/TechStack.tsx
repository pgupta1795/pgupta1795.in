'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'
import SectionContainer from './SectionContainer'

const stackItems = [
  { tech_name: 'Next.JS', tech_color: '#000000' },
  { tech_name: 'React', tech_color: '#61DAFB' },
  { tech_name: 'Typescript', tech_color: '#3178C6' },
  { tech_name: 'Javascript', tech_color: '#F7DF1E' },
  { tech_name: 'Node.JS', tech_color: '#339933' },
  { tech_name: 'Express.JS', tech_color: '#444444' },
  { tech_name: 'Java', tech_color: '#007396' },
  { tech_name: 'Spring Boot', tech_color: '#6DB33F' },
  { tech_name: 'C#', tech_color: '#38B2AC' },
  { tech_name: 'Python', tech_color: '#3776AB' },
  { tech_name: 'Docker', tech_color: '#0db7ed' },
  { tech_name: 'MongoDB', tech_color: '#47A248' },
  { tech_name: 'Postgresql', tech_color: '#336791' },
]

gsap.registerPlugin(ScrollTrigger)

const TechStack = () => {
  const component = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true, // pin the trigger element while active
          start: 'top bottom',
          end: 'bottom top',
          scrub: 4,
        },
      })

      tl.fromTo(
        '.tech-row',
        {
          x: (index) => {
            return index % 2 === 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400)
          },
        },
        {
          x: (index) => {
            return index % 2 === 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400)
          },
          ease: 'power1.inOut',
        }
      )
    }, component)
    return () => ctx.revert()
  }, [])

  return (
    <SectionContainer>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Tech Skills
        </h1>
      </div>
      <div ref={component} className="wrapper overflow-hidden">
        {stackItems.map(({ tech_color, tech_name }, index) => (
          <div
            key={index}
            className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
            aria-label={tech_name || ''}
          >
            {Array.from({ length: 15 }, (_, index) => (
              <React.Fragment key={index}>
                <span
                  className={'tech-item text-7xl font-extrabold uppercase tracking-tighter'}
                  style={{
                    color: index === 7 && tech_color ? tech_color : 'inherit',
                  }}
                >
                  {tech_name}
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}

export default TechStack
