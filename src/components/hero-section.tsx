'use client'

import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, TrendingUp, Shield, Globe } from 'lucide-react'
import { useRef, useEffect, useState, useMemo } from 'react'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const shouldReduceMotion = useReducedMotion()
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  // Optimized transforms with reduced calculations
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0])
  
  // Reduced spring config for better performance
  const springConfig = { stiffness: 60, damping: 20, restDelta: 0.01 }
  const smoothY = useSpring(y, springConfig)

  // Throttled mouse tracking for better performance
  useEffect(() => {
    let ticking = false
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePosition({
            x: (e.clientX / window.innerWidth) * 50, // Reduced range
            y: (e.clientY / window.innerHeight) * 50,
          })
          ticking = false
        })
        ticking = true
      }
    }

    if (!shouldReduceMotion) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true })
    }
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [shouldReduceMotion])

  const features = useMemo(() => [
    { icon: Shield, label: "Tax Compliance", color: "emerald" },
    { icon: Globe, label: "ERP Integration", color: "blue" },
    { icon: TrendingUp, label: "Business Growth", color: "purple" },
  ], [])
  return (
    <motion.section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 relative overflow-hidden"
      style={{ y: smoothY, opacity }}
    >
      {/* Optimized Background Animation */}
      <div className="absolute inset-0">
        {/* Reduced floating orbs - only 2 instead of 3 */}
        {!shouldReduceMotion && (
          <>
            <motion.div 
              className="absolute w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-15 blur-3xl"
              style={{
                left: `${20 + mousePosition.x * 0.1}%`,
                top: `${15 + mousePosition.y * 0.1}%`,
                willChange: 'transform'
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8, // Slower animation
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-10 blur-3xl"
              style={{
                right: `${20 + mousePosition.x * 0.05}%`,
                top: `${25 + mousePosition.y * 0.08}%`,
                willChange: 'transform'
              }}
              animate={{
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}

        {/* Simplified particles - reduced from 20 to 8 */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/20 dark:bg-blue-600/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  willChange: 'transform'
                }}
                animate={{
                  y: [0, -80, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 8 + Math.random() * 4, // Slower
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        )}

        {/* Static grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M0 20h40'/%3E%3Cpath d='M20 0v40'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          {/* SFS Title */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 dark:text-gray-100 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="block">SFS</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Financial Services
            </span>
          </motion.h1>

          {/* SFS Mission & Vision */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Your trusted partner for{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              Dutch bookkeeping, tax advisory, and business solutions
            </span>.
            We provide comprehensive financial services to businesses in the Netherlands,
            helping you achieve compliance, growth, and peace of mind.
          </motion.p>

          {/* Simplified Feature Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.8 + index * 0.1, 
                  duration: 0.3
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <feature.icon className={`w-5 h-5 text-${feature.color}-500`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Simplified Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-bold text-lg flex items-center space-x-3 transition-all duration-300 shadow-xl"
            >
              <Sparkles className="w-6 h-6" />
              <span>Start Your Partnership</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-2xl font-bold text-lg flex items-center space-x-3 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10"
            >
              <Play className="w-6 h-6" />
              <span>Our Services</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Simplified Scroll Indicator */}
        <motion.div
          className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
              <motion.div
                animate={{ 
                  y: [0, 12, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Removed floating indicators to reduce lag */}
      </div>
    </motion.section>
  )
}
