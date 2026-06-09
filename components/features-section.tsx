"use client"

import { motion } from "framer-motion"
import { Truck, Shield, Wrench, Headphones } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $99. Fast delivery across the US.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "All parts meet or exceed OEM specifications.",
  },
  {
    icon: Wrench,
    title: "Expert Support",
    description: "Technical assistance from Camaro specialists.",
  },
  {
    icon: Headphones,
    title: "24/7 Service",
    description: "Customer support whenever you need us.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors duration-300 group-hover:bg-[var(--brand-red)]/10">
                <feature.icon className="w-6 h-6 text-[var(--brand-red)]" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
