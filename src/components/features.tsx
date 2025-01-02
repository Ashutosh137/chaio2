import { Calendar, Clock, CreditCard, Users, Clipboard, Bell } from "lucide-react"

const features = [
  {
    name: "Smart Scheduling",
    description: "Effortlessly manage and coordinate maid schedules with our AI-powered calendar interface.",
    icon: Calendar,
  },
  {
    name: "Time Tracking",
    description: "Accurately track working hours and tasks completed by your household staff in real-time.",
    icon: Clock,
  },
  {
    name: "Payroll Automation",
    description: "Streamline salary calculations and payments with our integrated payroll system.",
    icon: CreditCard,
  },
  {
    name: "Staff Profiles",
    description: "Maintain detailed profiles for each staff member, including skills, preferences, and performance history.",
    icon: Users,
  },
  {
    name: "Task Management",
    description: "Create, assign, and track household tasks with ease using our intuitive task management system.",
    icon: Clipboard,
  },
  {
    name: "Notifications",
    description: "Stay informed with real-time alerts and reminders for important events tasks.",
    icon: Bell,
  },
]

export default function Features() {
  return (
    <section className="bg-white dark:bg-red-950 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600 dark:text-red-400">Powerful Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-red-900 dark:text-red-100 sm:text-4xl">
            Simplify Your Household Management
          </p>
          <p className="mt-6 text-lg leading-8 text-red-700 dark:text-red-300">
            Ghar Ka Kaam offers a comprehensive set of tools to help you efficiently manage your household staff and tasks.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-red-900 dark:text-red-100">
                  <feature.icon className="h-5 w-5 flex-none text-red-600 dark:text-red-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-red-700 dark:text-red-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

