'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { Calculator, FileText, Database, TrendingUp, Users, Building2, ArrowRight, Check } from 'lucide-react'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
}

const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 }
}

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 }
}

const services = [
  {
    icon: Calculator,
    title: 'Bookkeeping Services',
    description: 'Professional bookkeeping services ensuring accuracy and compliance with Dutch accounting standards.',
    features: ['Monthly financial statements', 'Transaction recording and categorization', 'Bank reconciliation', 'VAT calculations and reporting'],
    price: '€150 - €300/month'
  },
  {
    icon: FileText,
    title: 'Tax Advisory & Compliance',
    description: 'Expert tax services covering all aspects of Dutch taxation for businesses and individuals.',
    features: ['Annual tax return preparation', 'VAT return filing (quarterly)', 'Tax planning and optimization', 'Compliance consulting'],
    price: '€200 - €500/year'
  },
  {
    icon: Database,
    title: 'ERP Integration & Support',
    description: 'Seamless integration with popular ERP systems to streamline your financial operations.',
    features: ['Exact Online (free customer account)', 'Twinfield integration', 'AFAS system support', 'Custom API connections'],
    price: '€100 - €250/month'
  },
  {
    icon: TrendingUp,
    title: 'Financial Consulting',
    description: 'Strategic financial advice to help your business grow and achieve its goals.',
    features: ['Business plan development', 'Financial forecasting', 'Investment analysis', 'Performance optimization'],
    price: '€150 - €350/session'
  },
  {
    icon: Users,
    title: 'Payroll Management',
    description: 'Complete payroll processing ensuring compliance with Dutch employment regulations.',
    features: ['Monthly salary processing', 'Social security contributions', 'Holiday pay calculations', 'Annual reporting to authorities'],
    price: '€15 - €35/employee'
  },
  {
    icon: Building2,
    title: 'Business Setup Services',
    description: 'Comprehensive support for establishing and maintaining your Dutch business entity.',
    features: ['Company registration (BV/NV)', 'Chamber of Commerce filing', 'Bank account setup assistance', 'Regulatory compliance guidance'],
    price: '€500 - €1,500 one-time'
  },
]

export default function ServicesPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section with Enhanced Animations */}
      <section className="pt-24 pb-16 bg-white dark:bg-gray-900 transition-colors relative overflow-hidden">
        {/* Floating Background Elements */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-10 w-24 h-24 bg-purple-500/10 rounded-full"
        />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInScale}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
                Professional Financial Services
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              SFS <span className="text-blue-600 dark:text-blue-400">Services</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Comprehensive financial services for Dutch businesses - from bookkeeping and tax advisory 
              to ERP integration and strategic consulting. Your success is our priority.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                View Pricing
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our Professional Services
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Tailored financial solutions designed to help your business thrive in the Dutch market
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInScale}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col h-full relative overflow-hidden"
              >
                {/* Card Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Icon with Animation */}
                <motion.div 
                  className="relative w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </motion.div>
                
                <div className="relative">
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  {/* Enhanced Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <motion.div
                          className="w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0"
                          whileHover={{ scale: 1.2 }}
                        >
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </motion.div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Enhanced Pricing */}
                  <div className="mt-auto">
                    <motion.div 
                      className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      {service.price}
                    </motion.div>
                    <motion.button 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced ERP Systems Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full"
        />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={slideInLeft}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                ERP Integration Specialists
              </span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              ERP Systems We <span className="text-blue-600 dark:text-blue-400">Support</span>
            </motion.h2>
            
            <motion.p 
              variants={slideInRight}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              We work with leading ERP systems to ensure seamless integration with your existing business processes
            </motion.p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { name: 'Exact Online', subtitle: 'Free customer account included', color: 'from-blue-500 to-blue-600', icon: '🎯' },
              { name: 'Twinfield', subtitle: 'Professional accounting software', color: 'from-green-500 to-green-600', icon: '💼' },
              { name: 'AFAS', subtitle: 'Complete business solution', color: 'from-purple-500 to-purple-600', icon: '⚡' },
              { name: 'Custom APIs', subtitle: 'Tailored integrations', color: 'from-orange-500 to-orange-600', icon: '🔧' }
            ].map((erp) => (
              <motion.div
                key={erp.name}
                variants={fadeInScale}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                }}
                className="group bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${erp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Icon with Enhanced Animation */}
                <motion.div 
                  className={`relative w-20 h-20 bg-gradient-to-br ${erp.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1 
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Database className="w-10 h-10 text-white" />
                  {/* Floating Emoji */}
                  <motion.div
                    className="absolute -top-2 -right-2 text-lg"
                    animate={{
                      y: [-3, 3, -3],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {erp.icon}
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {erp.name}
                </motion.h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {erp.subtitle}
                </p>
                
                {/* Hover Action */}
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Call to Action */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              Schedule ERP Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
