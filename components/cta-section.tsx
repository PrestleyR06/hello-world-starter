"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <span className="text-[var(--brand-red)] text-sm font-medium tracking-wider uppercase">
            Join the Community
          </span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance">
            Ready to Upgrade
            <br />
            Your Camaro?
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-pretty leading-relaxed">
            Join thousands of Camaro enthusiasts who trust us for their parts needs. 
            Get exclusive deals, expert advice, and first access to new products.
          </p>

          {/* Newsletter form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-card border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent transition-all"
            />
            <button className="px-8 py-4 bg-[var(--brand-red)] text-[var(--brand-red-foreground)] font-medium rounded-full hover:bg-[var(--brand-red)]/90 transition-colors flex items-center justify-center gap-2">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-sm text-muted-foreground">
            No spam, ever. Unsubscribe anytime.
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: "50K+", label: "Happy Customers" },
              { value: "100K+", label: "Parts in Stock" },
              { value: "25+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-semibold text-[var(--brand-red)]">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
