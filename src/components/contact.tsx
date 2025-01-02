import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section className="bg-red-50 dark:bg-red-900 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-red-900 dark:text-red-100 sm:text-4xl text-center">Get in touch</h2>
          <p className="mt-4 text-lg text-red-700 dark:text-red-300 text-center">
            Have questions about Ghar Ka Kaam? We&apos;re here to help.
          </p>
          <form className="mt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-red-700 dark:text-red-300">
                First name
              </label>
              <Input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 bg-white dark:bg-red-800 text-red-900 dark:text-red-100"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-red-700 dark:text-red-300">
                Last name
              </label>
              <Input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="mt-1 bg-white dark:bg-red-800 text-red-900 dark:text-red-100"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-red-700 dark:text-red-300">
                Email
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="mt-1 bg-white dark:bg-red-800 text-red-900 dark:text-red-100"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-red-700 dark:text-red-300">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 bg-white dark:bg-red-800 text-red-900 dark:text-red-100"
              />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                Send message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

