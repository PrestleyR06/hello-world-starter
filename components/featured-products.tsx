"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "LS3 Performance Camshaft",
    category: "Engine",
    price: "$549.99",
    rating: 4.9,
    reviews: 128,
    badge: "Best Seller",
    partImage: "/images/prod-camshaft.png",
    carImage: "/images/cat-engine.png",
  },
  {
    id: 2,
    name: "SS Brembo Brake Kit",
    category: "Brakes",
    price: "$1,299.99",
    rating: 5.0,
    reviews: 87,
    badge: "Premium",
    partImage: "/images/prod-brakekit.png",
    carImage: "/images/cat-brakes.png",
  },
  {
    id: 3,
    name: "Borla Cat-Back Exhaust",
    category: "Exhaust",
    price: "$1,149.99",
    rating: 4.8,
    reviews: 203,
    badge: "Popular",
    partImage: "/images/prod-exhaust.png",
    carImage: "/images/cat-exhaust.png",
  },
  {
    id: 4,
    name: "Tremec T56 Rebuild Kit",
    category: "Transmission",
    price: "$899.99",
    rating: 4.7,
    reviews: 64,
    badge: "New",
    partImage: "/images/prod-transmission.png",
    carImage: "/images/cat-performance.png",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

function Rating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            className={`w-3.5 h-3.5 ${
              s <= Math.round(rating) ? "fill-[var(--brand-red)] text-[var(--brand-red)]" : "text-muted-foreground/40"
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-foreground">{rating.toFixed(1)}</span>
      <span className="text-sm text-muted-foreground">({reviews})</span>
    </div>
  )
}

export function FeaturedProducts() {
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
            Featured Products
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance">
            Top Picks
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <div className="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-foreground/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40">
                {/* Image area with crossfade */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.partImage || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <Image
                    src={product.carImage || "/placeholder.svg"}
                    alt={`${product.category} application`}
                    fill
                    className="object-cover opacity-0 scale-110 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-foreground text-background text-xs font-medium rounded-full">
                      {product.badge}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 space-y-2">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-foreground font-medium leading-snug line-clamp-1">
                    {product.name}
                  </h3>
                  <Rating rating={product.rating} reviews={product.reviews} />
                  <p className="text-lg font-semibold text-foreground pt-1">{product.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
