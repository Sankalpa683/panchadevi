import Link from "next/link"
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Panchadevi Waterproofing Sewa</h3>
            <p className="text-blue-200 mb-6">
              Professional cleaning services tailored to meet your unique needs, ensuring a spotless and healthy
              environment for your home or business.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61575336808189"
                className="bg-blue-900 hover:bg-blue-800 transition-colors p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://www.tiktok.com/@panchadevi/"
                className="bg-blue-900 hover:bg-blue-800 transition-colors p-2 rounded-full"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://www.instagram.com/panchadevi_construction/"
                className="bg-blue-900 hover:bg-blue-800 transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sankalpa-dahal-a4950a1a4/"
                className="bg-blue-900 hover:bg-blue-800 transition-colors p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Services", "Work Proccess", "FAQs", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-blue-300 flex-shrink-0 mt-1" size={18} />
                <span className="text-blue-200">Traffic Chowk, Biratnagar, Nepal</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-blue-300 flex-shrink-0" size={18} />
                <span className="text-blue-200">+977 9704607031</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-blue-300 flex-shrink-0" size={18} />
                <span className="text-blue-200">sank.dahal@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Newsletter</h3>
            <p className="text-blue-200 mb-4">
              Subscribe to our newsletter for cleaning tips, special offers, and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-blue-900 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 transition-colors px-4 py-2 rounded-r-md flex items-center"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm">© {new Date().getFullYear()} Panchadevi Waterproofing Sewa. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link href="#" className="text-blue-300 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-300 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-300 hover:text-white text-sm transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
