"use client"

import { useState } from "react"
import Link from "next/link"

// Define the links including the nested links for the "Products" and "Machinery" dropdowns
const links = [
  { href: "/", label: "Home" },
  {
    href: "/Machinery",
    label: "Machinery",
    submenu: [
      { href: "/Machinery/DiyaMakingMachine", label: "Diya Making Machine" },
      {
        href: "/Machinery/KulladMakingMachine",
        label: "Kullad Making Machine",
      },
      { href: "/Machinery/SurakiMachine", label: "Suraki Machine" },
      {
        href: "/Machinery/HydraulicDiyaMakingMachine",
        label: "Hydraulic Diya Making Machine",
      },
    ],
  },
  {
    href: "/Products",
    label: "Products",
    submenu: [
      { href: "/Products/RedMittiProducts", label: "Red Mitti Products" },
      { href: "/Products/CeramicProducts", label: "Ceramic Products" },
      { href: "/Products/DecorativeProducts", label: "Decorative Products" },
    ],
  },
  { href: "/contact", label: "Contact" },
]

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleMouseEnter = (label: string) => {
    setDropdown(label)
  }

  const handleMouseLeave = () => {
    setDropdown(null)
  }

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link href="/">Kavan Enterprise</Link>
        </div>
        <div className="hidden space-x-10 md:flex">
          {links.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={link.href} className="hover:text-gray-400">
                {link.label}
              </Link>
              {link.submenu && dropdown === link.label && (
                <div className="absolute left-0 w-48 bg-gray-800 shadow-lg">
                  {link.submenu.map((sublink) => (
                    <Link
                      key={sublink.href}
                      href={sublink.href}
                      className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="md:hidden">
          {/* Mobile menu toggle button */}
          <button
            type="button"
            className="rounded-md bg-gray-800 p-2 hover:bg-gray-700"
            onClick={handleToggleMenu}
          >
            Menu
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="bg-gray-800 p-4 md:hidden">
          {links.map((link) => (
            <div key={link.href}>
              <Link href={link.href} className="block py-2 hover:text-gray-400">
                {link.label}
              </Link>
              {link.submenu && (
                <div className="pl-4">
                  {link.submenu.map((sublink) => (
                    <Link
                      key={sublink.href}
                      href={sublink.href}
                      className="block py-2 hover:text-gray-400"
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
