import Image from "next/image"
import { Check } from "lucide-react"

export default function WorkProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Book a Service",
      items: [
        "Choose your desired cleaning service online or give us a call.",
        "Share your specific cleaning needs for a tailored experience.",
        "Select your preferred date and time.",
      ],
    },
    {
      number: "02",
      title: "We Get to Work",
      items: [
        "Our professional team arrives fully equipped and on time.",
        "Using eco-friendly products.Clean every detail with precision",
        "From deep cleaning to specialty tasks, we handle it all.",
      ],
    },
    {
      number: "03",
      title: "Enjoy a Spotless Space",
      items: [
        "Inspect your freshly cleaned space and feel the difference.",
        "Our satisfaction guarantee ensures peace of mind.",
        "Relax and enjoy a cleaner, healthier environment.",
      ],
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-blue-500 font-medium text-sm">work process</p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-4 mb-6">Our Working process</h2>
          <p className="text-gray-600 mb-8">
            We believe in making the cleaning process simple, efficient, and hassle-free for our clients. Our
            streamlined approach ensures every step is handled with care and professionalism, from booking your service.
          </p>

          <div className="relative rounded-lg overflow-hidden h-[400px] md:h-[500px]">
            <img
              src="https://framerusercontent.com/images/Kvi19nDU0LMtwpMP8QEUJtEChI.jpg?scale-down-to=1024"
              alt="Professional cleaner at work"
              fill
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-blue-200"
            >
              <div className="bg-blue-100 text-blue-800 font-medium text-sm py-1 px-4 rounded-full inline-block mb-4">
                Step - {step.number}
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">{step.title}</h3>
              <ul className="space-y-3">
                {step.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="mr-2 mt-1 bg-blue-100 rounded-full p-0.5 flex-shrink-0">
                      <Check size={16} className="text-blue-600" />
                    </span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
