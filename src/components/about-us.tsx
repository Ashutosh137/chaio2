export default function AboutUs({ id }: { id?: string }) {
  return (
    <section id={id} className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="Team"
              src="/about-us.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">Who We Are</h2>

            <p className="mt-4 text-gray-600">
              At Ghar Ka Kaam, we're passionate about revolutionizing home management. Our team of
              dedicated professionals combines expertise in technology and household management to
              create a platform that simplifies your daily life.
            </p>

            <p className="mt-4 text-gray-600">
              We understand the challenges of managing a household, and we're here to provide
              innovative solutions that save you time, reduce stress, and create a harmonious home
              environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

