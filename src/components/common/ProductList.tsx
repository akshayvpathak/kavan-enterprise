"use client"

import React, { FC } from "react"
import Image from "next/image" // Assuming you are using Next.js

import { BackgroundGradient } from "../ui/background-gradient"

const products = [
  {
    id: 1,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Diya Making Machine",
    title: "Diya Making Machine",
    description: "High-efficiency machine for manufacturing clay diyas.",
    price: "$100",
  },
  {
    id: 2,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Kullad Making Machine",
    title: "Kullad Making Machine",
    description: "Automatic machine for creating traditional kullads.",
    price: "$150",
  },
  {
    id: 3,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Suraki Machine",
    title: "Suraki Machine",
    description: "Efficient machine for producing suraki.",
    price: "$120",
  },
  {
    id: 4,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Hydraulic Diya Making Machine",
    title: "Hydraulic Diya Making Machine",
    description: "Advanced hydraulic machine for manufacturing diyas.",
    price: "$200",
  },
  {
    id: 5,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Mitti Diya",
    title: "Mitti Diya",
    description: "Traditional clay diyas for festive occasions.",
    price: "$10",
  },
  {
    id: 6,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Matka",
    title: "Matka",
    description: "Handcrafted clay matka for water storage.",
    price: "$20",
  },
  {
    id: 7,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Kullad",
    title: "Kullad",
    description: "Traditional clay kullad for serving tea.",
    price: "$5",
  },
  {
    id: 8,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Ceramic Mug",
    title: "Ceramic Mug",
    description: "Stylish ceramic mugs for everyday use.",
    price: "$15",
  },
  {
    id: 9,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "One Piece",
    title: "One Piece",
    description: "Ceramic one piece for decoration.",
    price: "$25",
  },
  {
    id: 10,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Heater Plate",
    title: "Heater Plate",
    description: "Efficient ceramic heater plates.",
    price: "$30",
  },
  {
    id: 11,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Ceramic Foundary Filter",
    title: "Ceramic Foundary Filter",
    description: "High-quality ceramic foundary filters.",
    price: "$40",
  },
  {
    id: 12,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Achar Jar",
    title: "Achar Jar",
    description: "Ceramic jars for storing pickles.",
    price: "$12",
  },
  {
    id: 13,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Kunda",
    title: "Kunda",
    description: "Traditional ceramic kunda.",
    price: "$18",
  },
  {
    id: 14,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Ceramic Toys",
    title: "Ceramic Toys",
    description: "Handmade ceramic toys for kids.",
    price: "$22",
  },
  {
    id: 15,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Agarbatti Stand",
    title: "Agarbatti Stand",
    description: "Elegant ceramic agarbatti stands.",
    price: "$8",
  },
  {
    id: 16,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Ceramic Damru",
    title: "Ceramic Damru",
    description: "Decorative ceramic damrus.",
    price: "$14",
  },
  {
    id: 17,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Tulsi Kyara",
    title: "Tulsi Kyara",
    description: "Ceramic tulsi kyaras for homes.",
    price: "$16",
  },
  {
    id: 18,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Decorative Diyas",
    title: "Decorative Diyas",
    description: "Beautifully designed decorative diyas.",
    price: "$12",
  },
  {
    id: 19,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Decorative Matki",
    title: "Decorative Matki",
    description: "Artistic decorative matkis.",
    price: "$20",
  },
  {
    id: 20,
    image:
      "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75",
    alt: "Cultivator Blade",
    title: "Cultivator Blade (Farva)",
    description: "Durable cultivator blades for agriculture.",
    price: "$50",
  },
]

const ProductCard: FC<any> = ({ product }) => {
  return (
    <div
      className="mx-auto w-[15rem] rounded-[22px] bg-white p-4 dark:bg-zinc-900 sm:p-10 md:w-[17rem]"
    >
      <Image
        src={product.image}
        alt={product.alt}
        height="400"
        width="400"
        className="object-contain"
      />
      <p className="mb-2 mt-4 text-base text-black dark:text-neutral-200 sm:text-xl">
        {product.title}
      </p>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {product.description}
      </p>
      {/* <button className="mt-4 flex items-center space-x-1 rounded-full bg-black py-1 pl-4 pr-1 text-xs font-bold text-white dark:bg-zinc-800">
        <span>Send Inquiry</span>
      </button> */}
    </div>
  )
}

const ProductList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full p-2 text-center sm:w-1/2 md:w-1/3"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

export { ProductList }
