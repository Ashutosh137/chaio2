import { CheckCircle } from "'lucide-react'"

const reasons = [
  "User-friendly interface",
  "24/7 customer support",
  "Secure and encrypted data",
  "Customizable to your needs",
  "Regular updates and improvements",
  "Affordable pricing plans",
]

export default function WhyChooseUs() {
  return (
    <section className="bg-emerald-700 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
            <img
              alt="Why Choose Us"
              src="/why-choose-us.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-8">Why Choose Us</h2>

            <ul className="mt-8 space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-emerald-300 mr-2" />
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

