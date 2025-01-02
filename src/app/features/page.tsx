import { CheckCircle } from "'lucide-react'"
import Link from "'next/link'"
import { Button } from "'@/components/ui/button'"

const features = [
  "Smart Scheduling",
  "Real-time Time Tracking",
  "Automated Payroll",
  "Detailed Staff Profiles",
  "Task Management",
  "Instant Notifications",
  "Performance Analytics",
  "Mobile App Access",
  "Secure Data Encryption",
  "Multi-language Support",
  "Customizable Reporting",
]

export default function FeaturesPage() {
  return (
    <div className="bg-red-50 dark:bg-red-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-red-900 dark:text-red-100 mb-8">Ghar Ka Kaam Features</h1>
        <div className="bg-white dark:bg-red-900 shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-semibold text-red-800 dark:text-red-200">Comprehensive Household Management</h2>
            <p className="mt-1 max-w-2xl text-sm text-red-600 dark:text-red-400">Explore our powerful features designed to simplify your life</p>
          </div>
          <div className="border-t border-red-200 dark:border-red-800">
            <ul className="divide-y divide-red-200 dark:divide-red-800">
              {features.map((feature, index) => (
                <li key={index} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center">
                    <CheckCircle className="flex-shrink-0 mr-3 h-5 w-5 text-green-500" aria-hidden="true" />
                    <p className="text-sm font-medium text-red-900 dark:text-red-100">{feature}</p>
                  </div>
                </li>
              ))}
            </ul>
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

