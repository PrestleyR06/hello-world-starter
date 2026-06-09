"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate headline letters
      if (headlineRef.current) {
        const chars = headlineRef.current.querySelectorAll(".char")
        gsap.fromTo(
          chars,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.02,
            ease: "power3.out",
            delay: 0.5,
          }
        )
      }

      // Animate CTA
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 1.2,
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  // Split text into characters for animation
  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block" style={{ opacity: 0 }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ))
  }

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-workshop.jpeg"
          alt="Camaro parts workshop"
          fill
          priority
          quality={95}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-[12vh]">
        {/* Main Headline and CTA grouped together */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center flex flex-col items-center gap-6"
        >
          <h1
            ref={headlineRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight text-balance leading-tight"
          >
            {splitText("Precision Parts for Every Camaro")}
          </h1>

          {/* CTA Button - now alongside headline */}
          <div ref={ctaRef} style={{ opacity: 0 }}>
            <Link
              href="/parts"
              className="group relative inline-flex items-center justify-center overflow-hidden"
            >
              {/* Button background */}
              <span className="relative px-10 py-4 bg-[var(--brand-red)] text-[var(--brand-red-foreground)] font-medium text-base tracking-wide rounded-full transition-all duration-500 group-hover:bg-[var(--brand-red)]/90 group-hover:scale-105">
                Shop Parts
              </span>
              {/* Hover glow effect */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[var(--brand-red)]/30 blur-xl" />
            </Link>
          </div>
        </motion.div>

        {/* Supporting Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-16 flex items-center gap-8 text-white/60 text-sm tracking-wide"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
            <span>1967-Present</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
            <span>OEM & Aftermarket</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
            <span>Expert Support</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
