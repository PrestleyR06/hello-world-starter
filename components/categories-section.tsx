"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const categories = [
  { name: "Engine Components", count: "2,400+ Parts", image: "/images/cat-engine.png" },
  { name: "Brake Systems", count: "600+ Parts", image: "/images/cat-brakes.png" },
  { name: "Suspension", count: "800+ Parts", image: "/images/cat-suspension.png" },
  { name: "Exhaust Systems", count: "450+ Parts", image: "/images/cat-exhaust.png" },
  { name: "Body Panels", count: "1,100+ Parts", image: "/images/cat-body.png" },
  { name: "Lighting", count: "520+ Parts", image: "/images/cat-lighting.png" },
  { name: "Wheels & Tires", count: "900+ Parts", image: "/images/cat-wheels.png" },
  { name: "Interior Parts", count: "1,800+ Parts", image: "/images/cat-interior.png" },
  { name: "Performance Upgrades", count: "1,300+ Parts", image: "/images/cat-performance.png" },
  { name: "Restoration Parts", count: "750+ Parts", image: "/images/cat-restoration.png" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export function CategoriesSection() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[var(--brand-red)] text-sm font-medium tracking-[0.2em] uppercase">
            Browse Categories
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance">
            Every Part You Need
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Comprehensive selection of OEM and aftermarket parts for every Camaro generation. Quality guaranteed.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {categories.map((category) => (
            <motion.div key={category.name} variants={itemVariants}>
              <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-card border border-border cursor-pointer">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="flex items-end justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white leading-tight text-balance">
                        {category.name}
                      </h3>
                      <p className="mt-1 text-xs text-white/60">{category.count}</p>
                    </div>
                    <div className="shrink-0 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
