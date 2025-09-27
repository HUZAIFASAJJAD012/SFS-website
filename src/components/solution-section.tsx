'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Building2, Globe, ArrowRight, Zap, Target } from 'lucide-react'
import { useRef, useMemo } from 'react'

const offices = [
  {
    type: "Headquarters",
    color: "blue",
    roles: ["CEO", "CFO", "Recruitment", "Operations"],
    description: "Front office and Back office coordination"
  },
  {
    type: "Subsidiary", 
    color: "green",
    roles: ["Local Accountant", "Billing", "HR & Payroll", "Local Presence", "Legal", "Compliance"],
    description: "Local back office support in full compliance"
  }
]



export function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Simplified transforms for better performance
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  // Memoize static data
  const officesData = useMemo(() => offices, [])

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 dark:from-gray-900 dark:via-blue-950 dark:to-green-950">
      {/* Simplified Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-green-100/20 dark:from-blue-900/20 dark:to-green-900/20"
        style={{ y: backgroundY, opacity }}
      />

      {/* Reduced floating elements - only if motion is not reduced */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-blue-300/15 dark:bg-blue-700/15 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-28 h-28 bg-green-300/15 dark:bg-green-700/15 rounded-full blur-xl"
            animate={{
              y: [0, 15, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      )}

      {/* Static grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Simplified Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full mb-6 border border-blue-200 dark:border-blue-800 shadow-lg backdrop-blur-sm">
              CONNECTED OFFICES
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            The{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Solution
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            We help you translate the success you&apos;ve achieved into new markets without getting distracted by paperwork, tax codes and language barriers.
          </motion.p>
        </motion.div>

        {/* Simplified Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-16">
          {/* Headquarters */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="relative"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-200 dark:border-blue-800 hover:shadow-3xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full mb-4 shadow-lg">
                  Headquarters
                </div>
                
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900 rounded-full flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {officesData[0].roles.map((role, index) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    {role}
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Front office • Back office
                </p>
              </div>
            </div>
          </motion.div>

          {/* Simplified Connection Flow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center space-y-6"
          >
            {/* Simple Arrow */}
            <div className="flex justify-center items-center">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-8 h-8 text-blue-500" />
              </motion.div>
            </div>

            {/* Connection Text */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex justify-center mb-4">
                <Target className="w-8 h-8 text-blue-500" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">
                We coordinate between your home office and your office abroad for a seamless transition to new markets
              </p>
            </div>

            {/* Simplified Benefits List */}
          
          </motion.div>

          {/* Simplified Subsidiary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="relative"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-green-200 dark:border-green-800 hover:shadow-3xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full mb-4 shadow-lg">
                  Subsidiary
                </div>
                
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="relative w-full h-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-900 rounded-full flex items-center justify-center">
                    <Globe className="w-16 h-16 text-green-600 dark:text-green-400" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {officesData[1].roles.map((role, index) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    {role}
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                  Front office • Back office
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Simplified Bottom Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 rounded-3xl p-10 border border-blue-200 dark:border-blue-800 shadow-2xl backdrop-blur-sm">
            <div className="flex justify-center mb-6">
              <Zap className="w-12 h-12 text-blue-500" />
            </div>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
              <span className="font-bold text-blue-600 dark:text-blue-400">
                We help you establish local back office support
              </span>{" "}
              that is in full compliance with local regulations, enabling seamless business operations across international markets.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
