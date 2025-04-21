import Image from "next/image"
import Link from "next/link"

export default function CleaningServiceHero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <div>
            <p className="text-blue-800 font-medium uppercase tracking-wide text-sm">WHO WE ARE</p>
            <div className="h-0.5 w-16 bg-blue-500 mt-1"></div>

            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mt-6 leading-tight">
              Province's No #1 Best WaterProofing Company
            </h1>

            <p className="mt-6 text-gray-700 text-lg">
              Transform your space with our reliable and eco-friendly cleaning services. Let us handle the mess while
              you enjoy a pristine environment. We pride ourselves on delivering reliable and affordable cleaning
              solutions.
            </p>

            <Link href="/about" className="inline-block mt-8">
              <button className="border cursor-pointer border-blue-900 text-blue-900 px-8 py-2 rounded-md hover:bg-blue-900 hover:text-white transition-colors">
                Call us at: +977 9704607031
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="text-center sm:text-left">
              <p className="text-4xl font-bold text-blue-900">&gt;95%</p>
              <p className="text-gray-600 mt-2">Client satisfaction rate</p>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-4xl font-bold text-blue-900">1000+</p>
              <p className="text-gray-600 mt-2">Successful project</p>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-4xl font-bold text-blue-900">12+</p>
              <p className="text-gray-600 mt-2">Years expreance</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://framerusercontent.com/images/63s8Oom4TGhJC8QE9Z8EAsUG4zo.jpg?scale-down-to=1024"
              alt="Cleaning service in action"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute bottom-6 -left-8 w-64 h-48 rounded-lg overflow-hidden shadow-lg hidden md:block">
            <img src="https://framerusercontent.com/images/uTHtC3vYeYPyqYQJJ4BekTRkok.jpg?scale-down-to=512" alt="Cleaning supplies" fill className="object-cover" />
          </div>


        </div>
      </div>
    </div>
  )
}
