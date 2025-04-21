"use client"

import { motion } from "framer-motion"
import { Building2, Droplets, Factory, Home, Sparkles, AppWindowIcon as Window } from "lucide-react"

export default function CleaningServicesSection() {
  const services = [
    {
      icon: <Home className="h-5 w-5 text-blue-800" />,
      title: "House cleaning",
      description:
        "Our house cleaning services are designed to keep your home tidy, and healthy. We take care of all the essential cleaning tasks, from dusting.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-blue-800" />,
      title: "Deep Cleaning",
      description:
        "For those times when your home needs more than just a surface clean, our deep cleaning service offers a thorough, detailed approach.",
    },
    {
      icon: <Building2 className="h-5 w-5 text-blue-800" />,
      title: "Commercial Cleaning",
      description:
        "We understand the importance of maintaining a clean and professional environment for your business. Our commercial cleaning services ensure your office.",
    },
    {
      icon: <Factory className="h-5 w-5 text-blue-800" />,
      title: "Industrial Cleaning",
      description:
        "Our industrial cleaning services are tailored to meet the unique needs of warehouses, factories, and other large-scale facilities.",
    },
    {
      icon: <Window className="h-5 w-5 text-blue-800" />,
      title: "Window cleaning",
      description:
        "Our team delivers streak-free, sparkling clean windows that brighten up your space and enhance your curb appeal.",
    },
    {
      icon: <Droplets className="h-5 w-5 text-blue-800" />,
      title: "Flood Damage cleaning",
      description:
        "Our flood damage cleaning service focuses on water removal, drying, and sanitation to prevent mold growth and restore your property.",
    },
  ]

  return (
    <section className="py-16 bg-white text-black px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-blue-500 font-medium uppercase tracking-wide text-sm">OUR SERVICE</p>
        <div className="flex justify-center">
          <div className="h-1 w-24 bg-blue-200 mt-1 mb-6 relative">
            <div className="absolute -top-1.5 left-0 right-0">
              <svg
                width="100%"
                height="10"
                viewBox="0 0 100 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5C20 -1.66667 40 -1.66667 60 5C80 11.6667 100 11.6667 120 5"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-4">One-Stop Cleaning Solutions</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
          We offer a wide range of professional cleaning services tailored to meet your unique needs a one-time deep
          clean, or specialized services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
              borderColor: "rgba(59, 130, 246, 0.3)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: index * 0 }}
          >
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
