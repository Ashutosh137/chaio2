import { Button } from "'@/components/ui/button'"
import Link from "'next/link'"

export default function AboutPage() {
  return (
    <div className="bg-red-50 dark:bg-red-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-red-900 dark:text-red-100 mb-8">About Ghar Ka Kaam</h1>
        <div className="bg-white dark:bg-red-900 shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-semibold text-red-800 dark:text-red-200">Our Mission</h2>
            <p className="mt-1 max-w-2xl text-sm text-red-600 dark:text-red-400">Simplifying household management for everyone</p>
          </div>
          <div className="border-t border-red-200 dark:border-red-800 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-red-200 dark:sm:divide-red-800">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-red-700 dark:text-red-300">Founded</dt>
                <dd className="mt-1 text-sm text-red-900 dark:text-red-100 sm:mt-0 sm:col-span-2">2023</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-red-700 dark:text-red-300">Headquarters</dt>
                <dd className="mt-1 text-sm text-red-900 dark:text-red-100 sm:mt-0 sm:col-span-2">Mumbai, India</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-red-700 dark:text-red-300">Employees</dt>
                <dd className="mt-1 text-sm text-red-900 dark:text-red-100 sm:mt-0 sm:col-span-2">50+</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-red-700 dark:text-red-300">About us</dt>
                <dd className="mt-1 text-sm text-red-900 dark:text-red-100 sm:mt-0 sm:col-span-2">
                  Ghar Ka Kaam is dedicated to revolutionizing household management through innovative technology. 
                  Our platform simplifies the process of managing domestic staff, streamlining tasks, and ensuring 
                  a harmonious home environment. We believe in empowering both homeowners and domestic workers by 
                  providing tools that enhance communication, efficiency, and job satisfaction.
                </dd>
              </div>
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

