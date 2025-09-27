'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react'
import { SiTiktok, SiFiverr } from 'react-icons/si'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Standard Financial Services B.V.</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your trusted partner for comprehensive financial services in the Netherlands.<br />
              <a href="https://www.sfsbv.com" className="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">www.sfsbv.com</a>
              <br />Specialized in bookkeeping, tax advisory, and ERP integration solutions.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4 pt-2">
              {/* Instagram */}
              <a href="https://www.instagram.com/sfsbv2024" 
                 className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                 target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61568880334106" 
                 className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                 target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5" />
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@standardfinancials" 
                 className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                 target="_blank" rel="noopener noreferrer">
                <SiTiktok className="w-5 h-5" />
              </a>
              {/* Twitter */}
              <a href="https://twitter.com/sfsbv5" 
                 className="text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                 target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
              {/* Fiverr */}
              <a href="https://www.fiverr.com/sfsbv5" 
                 className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                 target="_blank" rel="noopener noreferrer">
                <SiFiverr className="w-5 h-5" />
              </a>
              {/* Linkedin (kept) */}
              <a href="https://www.linkedin.com/company/sfs-services" 
                 className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                 target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Services</Link></li>
              <li><Link href="/cases" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Cases</Link></li>
              <li><Link href="/team" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Team</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Our Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-600 dark:text-gray-400">Bookkeeping Services</span></li>
              <li><span className="text-gray-600 dark:text-gray-400">Tax Advisory & Compliance</span></li>
              <li><span className="text-gray-600 dark:text-gray-400">ERP Integration</span></li>
              <li><span className="text-gray-600 dark:text-gray-400">Financial Consulting</span></li>
              <li><span className="text-gray-600 dark:text-gray-400">Payroll Management</span></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">info@sfsbv.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">+31 6 27855065</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gray-600 dark:text-gray-400 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Marten+Meesweg+25+G,+3068+AV"
                  className="text-gray-600 dark:text-gray-400 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  target="_blank" rel="noopener noreferrer"
                >
                  Marten Meesweg 25 G<br />
                  3068 AV<br />
                  Netherlands
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Standard Financial Services B.V. (SFS). All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
