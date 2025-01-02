import { ArrowRight } from "'lucide-react'"

const steps = [
  { title: "Sign Up", description: "Create your account in minutes" },
  { title: "Add Staff", description: "Input your household staff details" },
  { title: "Set Schedules", description: "Create and manage work schedules" },
  { title: "Assign Tasks", description: "Easily allocate tasks to your staff" },
  { title: "Track Progress", description: "Monitor task completion in real-time" },
  { title: "Process Payments", description: "Automate staff payments securely" },
]

export default function Workflow() {
  return (
    <section className="bg-gray-100 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

