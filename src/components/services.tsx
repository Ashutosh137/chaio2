import { Calendar, Clock, ClipboardList, Bell, Users, CreditCard } from "'lucide-react'"

const services = [
  {
    title: "Smart Scheduling",
    description: "Effortlessly manage staff schedules with our AI-powered calendar.",
    icon: Calendar,
  },
  {
    title: "Time Tracking",
    description: "Accurately monitor working hours and tasks in real-time.",
    icon: Clock,
  },
  {
    title: "Task Management",
    description: "Create, assign, and track household tasks with ease.",
    icon: ClipboardList,
  },
  {
    title: "Instant Notifications",
    description: "Stay informed with real-time alerts for important events.",
    icon: Bell,
  },
  {
    title: "Staff Profiles",
    description: "Maintain detailed profiles for each household staff member.",
    icon: Users,
  },
  {
    title: "Payroll Management",
    description: "Streamline salary calculations and payments effortlessly.",
    icon: CreditCard,
  },
]

export default function Services({ id }: { id?: string }) {
  return (
    <section id={id} className="bg-gray-100 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="rounded-full bg-emerald-100 p-3 mb-4">
                <service.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

