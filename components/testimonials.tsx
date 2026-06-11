"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Patrick N.",
    role: "6th Gen SS Owner",
    image: "/images/customer-patrick.png",
    rating: 5,
    quote:
      "I ordered an LS3 camshaft and it arrived in just three days. Genuine Camaro part, perfectly packaged, and a flawless fit. These guys clearly know their stuff.",
  },
  {
    name: "Vanessa M.",
    role: "Restoration Builder",
    image: "/images/customer-vanessa.png",
    rating: 5,
    quote:
      "The ordering process was effortless and the customer support team answered every question I had. My restoration trim came exactly as described.",
  },
  {
    name: "Christian E.",
    role: "1st Gen Enthusiast",
    image: "/images/customer-christian.png",
    rating: 4.5,
    quote:
      "Hard-to-find original parts at fair prices. Shipping was fast and the packaging was solid, so everything arrived without a scratch.",
  },
  {
    name: "Brenda T.",
    role: "Daily Driver Camaro",
    image: "/images/customer-brenda.png",
    rating: 5,
    quote:
      "Reliable service every single time. I keep coming back for maintenance parts and they have never let me down. Truly excellent customer support.",
  },
  {
    name: "Serge K.",
    role: "Track Day Driver",
    image: "/images/customer-serge.png",
    rating: 4.5,
    quote:
      "My Brembo brake kit was shipped quickly and securely packaged. A genuine performance upgrade backed by a team that actually responds.",
  },
  {
    name: "Diane A.",
    role: "5th Gen Owner",
    image: "/images/customer-diane.png",
    rating: 4,
    quote:
      "Easy ordering, fast shipping, and authentic parts. The whole experience felt premium from start to finish. Highly recommended.",
  },
]

const AVERAGE_RATING = 4.8
const REVIEW_COUNT = 15

function Stars({ rating, size = "w-4 h-4" }: { rating: number; size?: string }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((s) => {
        const filled = s <= Math.floor(rating)
        const half = !filled && s - 0.5 <= rating
        return (
          <span key={s} className="relative inline-block">
            <Star className={`${size} text-muted-foreground/30`} />
            {(filled || half) && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: filled ? "100%" : "50%" }}
              >
                <Star className={`${size} fill-[var(--brand-red)] text-[var(--brand-red)]`} />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[var(--brand-red)] text-sm font-medium tracking-[0.2em] uppercase">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance">
            Trusted by Enthusiasts
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty leading-relaxed">
            Real feedback from the Camaro community we proudly serve every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Rating summary card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <div className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-2xl shadow-black/40 text-center lg:text-left">
              <div className="flex items-baseline gap-2 justify-center lg:justify-start">
                <span className="text-6xl md:text-7xl font-semibold tracking-tight text-foreground">
                  {AVERAGE_RATING}
                </span>
                <span className="text-xl text-muted-foreground">/ 5</span>
              </div>
              <div className="mt-4 flex justify-center lg:justify-start">
                <Stars rating={AVERAGE_RATING} size="w-6 h-6" />
              </div>
              <p className="mt-6 text-lg text-foreground/90 leading-relaxed text-pretty">
                Our average customer rating is{" "}
                <span className="font-semibold">{AVERAGE_RATING}/5</span> based on{" "}
                {REVIEW_COUNT} reviews.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Genuine Camaro parts, fast shipping, and dependable support that
                enthusiasts return to again and again.
              </p>
            </div>
          </motion.div>

          {/* Individual testimonials */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={itemVariants}
                className="group flex flex-col h-full p-6 bg-card border border-border rounded-2xl transition-all duration-300 hover:border-[var(--brand-red)]/40 hover:-translate-y-1"
              >
                <Stars rating={t.rating} />
                <p className="mt-4 text-foreground/90 leading-relaxed text-pretty flex-1">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border shrink-0">
                    <Image
                      src={t.image || "/placeholder.svg"}
                      alt={`Portrait of ${t.name}`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
