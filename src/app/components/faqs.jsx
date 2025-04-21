"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function FAQSection() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of cleaning services including house cleaning, deep cleaning, commercial cleaning, industrial cleaning, window cleaning, and flood damage cleaning. Each service is tailored to meet your specific needs and requirements.",
    },
    {
      question: "How long does it take to process my laundry?",
      answer:
        "Our standard turnaround time for laundry services is 24-48 hours. However, we also offer express services that can be completed within the same day for an additional fee. The exact timing depends on the volume and type of items.",
    },
    {
      question: "How do I schedule a pickup and delivery?",
      answer:
        "You can easily schedule a pickup and delivery through our website, mobile app, or by calling our customer service. Simply select your preferred date and time slot, and our team will arrive within the scheduled window to collect or deliver your items.",
    },
    {
      question: "What should I do if an item is lost or damaged?",
      answer:
        "We take utmost care with all your belongings, but in the rare event that an item is lost or damaged, please contact our customer service within 48 hours. We have a comprehensive compensation policy and will work with you to resolve the issue promptly.",
    },
    {
      question: "Do you use eco-friendly cleaning products?",
      answer:
        "Yes, we prioritize the use of eco-friendly and non-toxic cleaning products that are safe for your family, pets, and the environment. Our professional team is trained to use these products effectively to ensure a thorough clean without harmful chemicals.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We currently serve the metropolitan area and surrounding suburbs within a 30-mile radius. If you're unsure whether we service your location, please enter your zip code on our website or contact our customer service for confirmation.",
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
            Got Questions? We've Got Answers
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Find answers to the most common questions about our cleaning services. If you can't find what you're looking
            for, feel free to contact our customer support team.
          </p>
          <div className="mt-8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors font-medium">
              Call us at: +977 9704607031
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-blue-200"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-blue-900">{faq.question}</span>
                <span className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-blue-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-blue-600" />
                  )}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
                aria-hidden={openIndex !== index}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
