"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function BuySellSwap() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="text-[var(--brand-red)] text-sm font-medium tracking-[0.2em] uppercase">
            Marketplace
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance">
            We Buy, Sell and Swap
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty leading-relaxed">
            Buy, sell, or swap genuine Camaro parts with confidence. We help enthusiasts keep their builds moving forward every day.
          </p>
        </motion.div>

        {/* Split-screen composition */}
        <div className="relative rounded-3xl overflow-hidden border border-border bg-background">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Detached parts */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px]"
            >
              <Image
                src="/images/camaro-parts-exploded.jpeg"
                alt="Detached Camaro parts in exploded view"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white text-sm tracking-wide">
                  Parts
                </span>
              </div>
            </motion.div>

            {/* Right - Complete vehicle */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px]"
            >
              <Image
                src="/images/camaro-complete.jpeg"
                alt="Complete white Chevrolet Camaro"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-l" />
              <div className="absolute bottom-6 right-6">
                <span className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white text-sm tracking-wide">
                  Complete Builds
                </span>
              </div>
            </motion.div>
          </div>

          {/* Vertical divider line (desktop) */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent z-10" />

          {/* Center action chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col sm:flex-row gap-3"
          >
            {["Buy", "Sell", "Swap"].map((label) => (
              <span
                key={label}
                className="px-6 py-3 rounded-full bg-background/90 backdrop-blur-md border border-border text-foreground font-medium text-sm tracking-wide shadow-xl text-center"
              >
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
