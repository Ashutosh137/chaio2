import { Star } from "lucide-react"

const maids = [
  {
    name: "Anita Sharma",
    image: "/maid1.jpg",
    role: "Housekeeper",
    rating: 4.8,
    description: "Experienced in general housekeeping and cooking Indian cuisine.",
  },
  {
    name: "Priya Patel",
    image: "/maid2.jpg",
    role: "Nanny",
    rating: 4.9,
    description: "Certified childcare professional with 5 years of experience.",
  },
  {
    name: "Rajesh Kumar",
    image: "/maid3.jpg",
    role: "Gardener",
    rating: 4.7,
    description: "Expert in maintaining both indoor and outdoor plants.",
  },
  {
    name: "Lakshmi Devi",
    image: "/maid4.jpg",
    role: "Elderly Care",
    rating: 4.9,
    description: "Specialized in providing compassionate care for seniors.",
  },
]

export default function MaidProfiles({ id }: { id?: string }) {
  return (
    <section id={id} className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Maid Profiles</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {maids.map((maid, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img src={maid.image} alt={maid.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{maid.name}</h3>
                <p className="text-gray-600 mb-2">{maid.role}</p>
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600">{maid.rating}</span>
                </div>
                <p className="text-sm text-gray-600">{maid.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

