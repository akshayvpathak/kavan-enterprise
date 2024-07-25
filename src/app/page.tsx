import { AuroraBackground } from "@/components/ui/aurora-background"
import { FlipWords } from "@/components/ui/flip-words"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"
import { SparklesCore } from "@/components/ui/sparkles"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Vortex } from "@/components/ui/vortex"
import Feedback from "@/components/common/Feedback"
import Location from "@/components/common/Location"
import { Navbar } from "@/components/common/NavBar"
import { ProductList } from "@/components/common/ProductList"

export default function Home() {
  const words = `Kavan Enterprise specializes in creating machinery, ceramic products, and agricultural red mitty products.`

  return (
    <div>
      <Navbar />

      <div className=" flex items-center justify-center px-4">
        <div className="relative mx-auto mb-8 mt-4 max-w-6xl text-center text-4xl font-bold !leading-snug text-zinc-700 md:text-4xl ">
          Buy
          <FlipWords words={["Machinery", "Ceramics", "Agriculture"]} />{" "}
          Products
          <br />
          <span className="relative z-10 bg-gradient-to-t from-emerald-600 to-emerald-600/[0.8] bg-clip-text text-transparent">
            with Kavan Enterprise
          </span>
        </div>
      </div>

      <div className="w-100 mt-12 flex w-full flex-col items-center justify-center overflow-hidden bg-transparent ">
        <h1 className="relative z-20 text-center text-3xl font-bold text-neutral-700 md:text-3xl lg:text-3xl">
          Kavan Enterprise
        </h1>
        <div className="relative h-20 w-[42rem]">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
          <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

          {/* Core component */}

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 h-full w-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="mx-auto mt-4 w-fit rounded-full bg-black px-6 py-2 text-base text-zinc-50 shadow-xl">
        ✨ Range of products ✨
      </div>
      <div className="mt-4">
        <ProductList />
      </div>
      <div className="pt-4">
        <div className="mx-auto mt-4 w-fit rounded-full bg-black px-6 py-2 text-base text-zinc-50 shadow-xl">
          ✨ Testimonials ✨
        </div>
        <h5 className="mt-3 text-center text-3xl text-neutral-700">
          Client’s Testimonials
        </h5>
      </div>
      <Feedback />
      <div>
        <div className="mx-auto mt-4 w-fit rounded-full bg-black px-6 py-2 text-base text-zinc-50 shadow-xl">
          ✨ Location ✨
        </div>
        <h5 className="mt-3 text-center text-3xl text-neutral-700">
          We deliver worldwide
        </h5>
        <Location />
      </div>
    </div>
  )
}
