import { Swiper, SwiperSlide } from "'swiper/react'"
import { Pagination, Autoplay } from "'swiper/modules'"
import "'swiper/css'"
import "'swiper/css/pagination'"

const testimonials = [
  {
    name: "Ravi Gupta",
    role: "Busy Professional",
    image: "/testimonial1.jpg",
    quote: "Ghar Ka Kaam has transformed how I manage my household. It's a game-changer for busy professionals like me!",
  },
  {
    name: "Meera Reddy",
    role: "Working Mother",
    image: "/testimonial2.jpg",
    quote: "The peace of mind this app gives me is priceless. I can focus on my work knowing home well-managed.",
  },
  {
    name: "Arjun Patel",
    role: "Property Manager",
    image: "/testimonial3.jpg",
    quote: "Managing multiple properties has never been easier. Ghar Ka Kaam streamlines everything beautifully.",
  },
]

export default function Testimonials({ id }: { id?: string }) {
  return (
    <section id={id} className="bg-emerald-700 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">What Our Clients Say</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

