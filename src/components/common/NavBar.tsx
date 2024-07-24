"use client"

import React, { useState } from "react"

import { cn } from "@/lib/utils"

import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu"

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div className={cn("fixed  inset-x-0 z-50 mx-auto max-w-2xl", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Machinery">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/diya-making-machine">
              Diya Making Machine
            </HoveredLink>
            <HoveredLink href="/kullad-making-machine">
              Kullad Making Machine
            </HoveredLink>
            <HoveredLink href="/suraki-machine">Suraki Machine</HoveredLink>
            <HoveredLink href="/hydraulic-diya-making-machine">
              Hydraulic Diya Making Machine
            </HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Ceramic">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/ceramic-mug">Ceramic Mug</HoveredLink>
            <HoveredLink href="/one-piece">One Piece</HoveredLink>
            <HoveredLink href="/heater-plate">Heater Plate</HoveredLink>
            <HoveredLink href="/ceramic-foundary-filter">
              Ceramic Foundary Filter
            </HoveredLink>
            <HoveredLink href="/achar-jar">Achar Jar</HoveredLink>
            <HoveredLink href="/kunda">Kunda</HoveredLink>
            <HoveredLink href="/ceramic-toys">Ceramic Toys</HoveredLink>
            <HoveredLink href="/agarbatti-stand">Agarbatti Stand</HoveredLink>
            <HoveredLink href="/ceramic-damru">Ceramic Damru</HoveredLink>
            <HoveredLink href="/tulsi-kyara">Tulsi Kyara</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}
