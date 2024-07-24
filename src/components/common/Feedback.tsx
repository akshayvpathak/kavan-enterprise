"use client"

import React from "react"

import { InfiniteMovingCards } from "../ui/infinite-moving-cards"

export default function Feedback() {
  return (
    <div className="dark:bg-grid-white/[0.05] relative flex h-[20rem] flex-col items-center justify-center overflow-hidden rounded-md bg-transparent antialiased dark:bg-black">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

const testimonials = [
  {
    quote:
      "The diya making machine from Kavan Enterprise has revolutionized our production process. The efficiency and quality of the diyas are unparalleled. Highly recommend!",
    name: "Aarav Patel",
    title: "Head of Production, Bright Lights Inc.",
  },
  {
    quote:
      "Kavan Enterprise's mitti diyas are a staple in our store during festive seasons. The craftsmanship and durability are top-notch, making them a favorite among our customers.",
    name: "Meera Shah",
    title: "Owner, Tradition & Trends",
  },
  {
    quote:
      "As a farmer, I rely heavily on high-quality agricultural products. Kavan Enterprise has consistently provided us with the best tools and machinery, boosting our productivity and yield.",
    name: "Rohan Mehta",
    title: "Agriculturist, Green Acres Farm",
  },
  {
    quote:
      "The ceramic products from Kavan Enterprise are exquisite. Their attention to detail and commitment to quality are evident in every piece. Our clients love the uniqueness and durability of these products.",
    name: "Sanjana Kapoor",
    title: "Interior Designer, Elegant Spaces",
  },
  {
    quote:
      "Investing in the diya making machine from Kavan Enterprise was one of the best decisions for our business. The machine is easy to operate and has significantly improved our production speed.",
    name: "Vikram Desai",
    title: "Owner, Desai Handicrafts",
  },
]
