"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"


// Custom SVG icons for social media
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "All Parts", href: "/parts" },
  { label: "Performance", href: "/performance" },
  { label: "Restoration", href: "/restoration" },
  { label: "Shipping Info", href: "/shipping" },
  { label: "Track Order", href: "/track" },
]

const contactInfo = [
  { icon: MapPin, text: "1420 Motorway Blvd, Detroit, MI 48201" },
  { icon: Phone, text: "+1 (800) 555-0192" },
  { icon: Mail, text: "support@camaropartsdepot.com" },
]

const businessHours = [
  { day: "Mon – Fri", hours: "8:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

const socialLinks = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
]

const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 5000, suffix: "+", label: "Parts Sold" },
  { value: 2500, suffix: "+", label: "Satisfied Customers" },
  { value: 99, suffix: "%", label: "Customer Satisfaction" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        {/* Animated statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 py-14 border-b border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground tabular-nums">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="mt-2 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              href="/"
              className="inline-block mb-5 text-foreground font-bold text-lg tracking-[0.2em] uppercase"
            >
              Camaro Parts Depot
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Your premier destination for authentic Chevrolet Camaro parts and accessories since 1999.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-[var(--brand-red)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3">
            <h3 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wider">
              Contact Information
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 text-[var(--brand-red)] mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div className="lg:col-span-3">
            <h3 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--brand-red)]" />
              Business Hours
            </h3>
            <ul className="space-y-3 mb-8">
              {businessHours.map((item) => (
                <li key={item.day} className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground text-sm">{item.day}</span>
                  <span className="text-foreground text-sm font-medium">{item.hours}</span>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <h3 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">
              Social Media
            </h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-[var(--brand-red)] hover:bg-secondary/80 hover:scale-105 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Camaro Parts Depot. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
