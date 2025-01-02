import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat h-[calc(100vh-80px)]">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Ghar Ka Kaam
            <strong className="block font-extrabold text-emerald-700">
              Simplifying Home Management
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Effortlessly manage your household staff and tasks with our innovative platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Button className="block w-full rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring active:bg-emerald-500 sm:w-auto">
              Get Started
            </Button>

            <Button variant="outline" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-emerald-600 shadow hover:text-emerald-700 focus:outline-none focus:ring active:text-emerald-500 sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

