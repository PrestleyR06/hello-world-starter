"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "Premium Quality",
    description: "Every part is inspected to meet or exceed OEM standards before it reaches your build.",
    image: "/images/slide-premium-quality.png",
  },
  {
    title: "Affordable Prices",
    description: "Competitive pricing across thousands of parts, without compromising on quality.",
    image: "/images/slide-affordable.png",
  },
  {
    title: "Trusted",
    description: "Thousands of Camaro enthusiasts rely on our expertise and honest service.",
    image: "/images/slide-trusted.png",
    objectPosition: "object-top",
  },
  {
    title: "Reliable",
    description: "A professional workshop standard backed by decades of hands-on experience.",
    image: "/images/slide-reliable.png",
  },
  {
    title: "Wide Selection",
    description: "From restoration classics to performance upgrades — we have it all in stock.",
    image: "/images/slide-selection.png",
  },
]

const AUTOPLAY_MS = 5000

export function ValueSlideshow() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((next: number, dir: number) => {
    setDirection(dir)
    setIndex((next + slides.length) % slides.length)
  }, [])

  const next = useCallback(() => goTo(index + 1, 1), [index, goTo])
  const prev = useCallback(() => goTo(index - 1, -1), [index, goTo])

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  // reset timer on manual navigation
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [index])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta > 50) prev()
    else if (delta < -50) next()
    touchStartX.current = null
  }

  return (
    <section
      className="relative w-full h-[350px] md:h-[450px] lg:h-[560px] overflow-hidden bg-background"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={index}
          custom={direction}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ opacity: { duration: 1, ease: [0.16, 1, 0.3, 1] }, scale: { duration: 6, ease: "linear" } }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image || "/placeholder.svg"}
            alt={slides[index].title}
            fill
            priority={index === 0}
            quality={90}
            className={`object-cover ${slides[index].objectPosition ?? "object-center"}`}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Text content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-white/50">
              {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-balance">
              {slides[index].title}
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed text-pretty">
              {slides[index].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-6 md:bottom-8 right-6 lg:right-10 z-20 flex items-center gap-3">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-11 h-11 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-[var(--brand-red)] hover:border-[var(--brand-red)] hover:text-white transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-11 h-11 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-[var(--brand-red)] hover:border-[var(--brand-red)] hover:text-white transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 md:bottom-8 left-6 lg:left-10 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > index ? 1 : -1)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-1 rounded-full transition-all duration-500 bg-white/40 hover:bg-white/70"
            style={{
              width: i === index ? 40 : 12,
              backgroundColor: i === index ? "#E10613" : undefined,
            }}
          />
        ))}
      </div>
    </section>
  )
}
