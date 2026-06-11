"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const generations = [
  {
    name: "1st Gen",
    years: "1967-1969",
    description: "The original muscle car icon",
    image: "/generations/1st-gen.jpg",
    href: "/generations/1st-gen",
  },
  {
    name: "2nd Gen",
    years: "1970-1981",
    description: "Bold styling and raw power",
    image: "/generations/2nd-gen.jpg",
    href: "/generations/2nd-gen",
  },
  {
    name: "3rd Gen",
    years: "1982-1992",
    description: "Aerodynamic evolution",
    image: "/generations/3rd-gen.jpg",
    href: "/generations/3rd-gen",
  },
  {
    name: "4th Gen",
    years: "1993-2002",
    description: "Modern performance refined",
    image: "/generations/4th-gen.jpg",
    href: "/generations/4th-gen",
  },
  {
    name: "5th Gen",
    years: "2010-2015",
    description: "Retro-modern resurrection",
    image: "/generations/5th-gen.jpg",
    href: "/generations/5th-gen",
  },
  {
    name: "6th Gen",
    years: "2016-Present",
    description: "Peak performance achieved",
    image: "/generations/6th-gen.jpg",
    href: "/generations/6th-gen",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

export function GenerationsSection() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            Shop by Generation
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance">
            Find Your Camaro
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Six generations of American muscle. Every part you need to restore, maintain, or upgrade your Camaro.
          </p>
        </motion.div>

        {/* Generation Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {generations.map((gen) => (
            <motion.div key={gen.name} variants={itemVariants}>
              <Link href={gen.href} className="group block">
                <div className="relative aspect-[4/3] bg-secondary rounded-2xl overflow-hidden">
                  {/* Placeholder gradient - replace with actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary via-muted to-secondary" />
                  
                  {/* Generation text overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div>
                      <span className="inline-block px-3 py-1 bg-background/20 backdrop-blur-sm rounded-full text-xs text-foreground/80">
                        {gen.years}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-semibold text-foreground mb-1 font-serif italic">
                        {gen.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {gen.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Arrow indicator */}
                  <div className="absolute bottom-6 right-6 w-10 h-10 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="w-4 h-4 text-foreground" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/generations"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
          >
            Explore All Generations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
