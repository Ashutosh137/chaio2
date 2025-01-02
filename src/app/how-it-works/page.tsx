import { ArrowRight } from "'lucide-react'"
import Link from "'next/link'"
import { Button } from "'@/components/ui/button'"

const steps = [
  {
    title: "Sign Up",
    description: "Create your account and set up household profile with just a few clicks.",
  },
  {
    title: "Add Staff",
    description: "Input details of your household staff and create comprehensive profiles for each.",
  },
  {
    title: "Set Schedules",
    description: "Use our intuitive calendar to create and manage work schedules for your staff.",
  },
  {
    title: "Assign Tasks",
    description: "Easily define and allocate tasks to your household staff members.",
  },
  {
    title: "Track Progress",
    description: "Monitor task completion and staff performance in real-time through our dashboard.",
  },
  {
    title: "Process Payments",
    description: "Automatically calculate and process staff payments with our secure system.",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="bg-red-50 dark:bg-red-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-red-900 dark:text-red-100 mb-8">How Ghar Ka Kaam Works</h1>
        <div className="bg-white dark:bg-red-900 shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-semibold text-red-800 dark:text-red-200">Simple Steps to Efficient Household Management</h2>
            <p className="mt-1 max-w-2xl text-sm text-red-600 dark:text-red-400">Follow these easy steps to get started with Ghar Ka Kaam</p>
          </div>
          <div className="border-t border-red-200 dark:border-red-800">
            <dl>
              {steps.map((step, index) => (
                <div key={index} className={`${index % 2 === 0 ? "'bg-red-50 dark:bg-red-900'" : "'bg-white dark:bg-red-950'"} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                  <dt className="text-sm font-medium text-red-700 dark:text-red-300 flex items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white mr-3">
                      {index + 1}
                    </div>
                    {step.title}
                  </dt>
                  <dd className="mt-1 text-sm text-red-900 dark:text-red-100 sm:mt-0 sm:col-span-2">{step.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

