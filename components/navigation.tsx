"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Search, ShoppingBag } from "lucide-react"

const navItems = [
  {
    label: "Parts",
    href: "/parts",
    submenu: [
      { label: "Engine", href: "/parts/engine" },
      { label: "Transmission", href: "/parts/transmission" },
      { label: "Suspension", href: "/parts/suspension" },
      { label: "Brakes", href: "/parts/brakes" },
      { label: "Exhaust", href: "/parts/exhaust" },
      { label: "Interior", href: "/parts/interior" },
    ],
  },
  {
    label: "Generations",
    href: "/generations",
    submenu: [
      { label: "1st Gen (1967-1969)", href: "/generations/1st-gen" },
      { label: "2nd Gen (1970-1981)", href: "/generations/2nd-gen" },
      { label: "3rd Gen (1982-1992)", href: "/generations/3rd-gen" },
      { label: "4th Gen (1993-2002)", href: "/generations/4th-gen" },
      { label: "5th Gen (2010-2015)", href: "/generations/5th-gen" },
      { label: "6th Gen (2016-Present)", href: "/generations/6th-gen" },
    ],
  },
  { label: "Performance", href: "/performance" },
  { label: "Restoration", href: "/restoration" },
  { label: "About", href: "/about" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <nav className="w-full px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Left - Hamburger Menu */}
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2.5 text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Center - Brand Name */}
            <Link 
              href="/" 
              className="absolute left-1/2 -translate-x-1/2 text-white font-bold text-xl tracking-[0.2em] uppercase"
            >
              Camaro Parts Depot
            </Link>

            {/* Right - Search & Cart */}
            <div className="flex items-center gap-1">
              <button
                className="p-2.5 text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2.5 text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10 relative"
                aria-label="Shopping bag"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[var(--brand-red)] text-[var(--brand-red-foreground)] text-[10px] font-medium rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Full-Screen Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 left-6 p-2.5 text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10 z-10"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Navigation Content */}
            <div className="h-full flex flex-col items-center justify-center px-6">
              <nav className="flex flex-col items-center gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative"
                    onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group block text-center"
                    >
                      <span className="text-4xl md:text-6xl lg:text-7xl font-light text-white/90 hover:text-white transition-all duration-300 tracking-wide">
                        {item.label}
                      </span>
                      <span className="block h-0.5 w-0 group-hover:w-full bg-[var(--brand-red)] transition-all duration-500 mx-auto mt-2" />
                    </Link>

                    {/* Submenu */}
                    <AnimatePresence>
                      {item.submenu && activeSubmenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-4"
                        >
                          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                            {item.submenu.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.label}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                              >
                                <Link
                                  href={subItem.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="text-base md:text-lg text-white/50 hover:text-white/90 transition-colors duration-300"
                                >
                                  {subItem.label}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute bottom-10 left-0 right-0 flex justify-center gap-12 text-white/40 text-sm"
              >
                <span>Free Shipping Over $99</span>
                <span>Expert Support</span>
                <span>Quality Guaranteed</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
