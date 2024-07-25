import { AuroraBackground } from "@/components/ui/aurora-background"
import { FlipWords } from "@/components/ui/flip-words"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"
import { SparklesCore } from "@/components/ui/sparkles"
import Feedback from "@/components/common/Feedback"
import Location from "@/components/common/Location"
import { Navbar } from "@/components/common/NavBar"
import { ProductList } from "@/components/common/ProductList"

export default function Home() {
  const words = `Kavan Enterprise specializes in creating machinery, ceramic products, and agricultural red mitty products.`

  return (
    <div>
      <Navbar />

      <div className="mx-auto mt-16 mt-4 w-fit rounded-full bg-black px-6 py-2 text-base text-zinc-50 shadow-xl">
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
