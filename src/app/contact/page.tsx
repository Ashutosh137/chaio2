import { Button } from "'@/components/ui/button'"
import { Input } from "'@/components/ui/input'"
import { Textarea } from "'@/components/ui/textarea'"
import Link from "'next/link'"

export default function ContactPage() {
  return (
    <div className="bg-red-50 dark:bg-red-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-red-900 dark:text-red-100 mb-8">Contact Us</h1>
        <div className="bg-white dark:bg-red-900 shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-semibold text-red-800 dark:text-red-200">Get in Touch</h2>
            <p className="mt-1 max-w-2xl text-sm text-red-600 dark:text-red-400">We'd love to hear from you</p>
          </div>
          <div className="border-t border-red-200 dark:border-red-800">
            <form className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium text-red-700 dark:text-red-300">
                    First name
                  </label>
                  <Input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium text-red-700 dark:text-red-300">
                    Last name
                  </label>
                  <Input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="mt-1"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium text-red-700 dark:text-red-300">
                    Email address
                  </label>
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="mt-1"
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="message" className="block text-sm font-medium text-red-700 dark:text-red-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>
              <div className="mt-6">
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

