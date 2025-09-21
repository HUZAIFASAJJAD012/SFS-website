'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { CheckCircle, Globe, Users, Award, TrendingUp, Shield } from 'lucide-react'
import { useRef } from 'react'

const features = [
  {
    icon: CheckCircle,
    title: "Regulatory Compliance",
    description: "Full compliance with Dutch tax laws, VAT regulations, and financial reporting requirements",
    color: "emerald"
  },
  {
    icon: Globe,
    title: "ERP Integration",
    description: "Seamless integration with popular ERP systems like Exact Online, Twinfield, and AFAS",
    color: "blue"
  },
  {
    icon: Users,
    title: "Expert Consultancy",
    description: "Professional guidance from certified accountants and tax advisors with deep Dutch market knowledge",
    color: "purple"
  },
  {
    icon: Award,
    title: "Comprehensive Services",
    description: "From bookkeeping to strategic financial planning, we cover all aspects of your financial needs",
    color: "orange"
  }
]

const stats = [
  { number: "200+", label: "Active Clients", icon: Users },
  { number: "99.8%", label: "Compliance Rate", icon: CheckCircle },
  { number: "50+", label: "ERP Integrations", icon: Shield },
  { number: "10+", label: "Years Experience", icon: TrendingUp }
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400",
      blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
      purple: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
      orange: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950"
        style={{ y: backgroundY, opacity }}
      />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-20"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ 
            duration: 0.8,
            staggerChildren: 0.2,
            delayChildren: 0.1
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full mb-4">
              About Our Company
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SFS
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            SFS Financial Services is your trusted partner for comprehensive financial solutions in the Netherlands. 
            We specialize in bookkeeping, tax advisory, ERP integrations, and business consulting services, 
            helping businesses navigate Dutch regulations and achieve sustainable growth.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                  <Globe className="w-6 h-6 mr-2" />
                  Our Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To be the leading provider of comprehensive financial services, empowering businesses 
                  to achieve excellence in financial management and regulatory compliance while focusing 
                  on their core business growth.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-3 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To provide reliable, accurate, and innovative financial solutions that simplify 
                  business operations, ensure compliance with Dutch regulations, and support 
                  sustainable growth for our clients.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-6 rounded-2xl border border-blue-200 dark:border-blue-800"
            >
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed italic">
                "At SFS, we combine deep expertise in Dutch financial regulations with cutting-edge technology 
                to deliver seamless, accurate, and compliant solutions. Our commitment to excellence ensures 
                your business can focus on growth while we handle the complexities of financial management."
              </p>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer"
              >
                <motion.div 
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${getColorClasses(feature.color)} group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="w-7 h-7" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover effect indicator */}
                <motion.div
                  className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
