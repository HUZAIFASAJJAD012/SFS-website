'use client'

import { motion } from 'framer-motion'
import { 
  Store, TrendingUp, FileText, Users, Globe, 
  AlertTriangle, Languages, Building2,
  ArrowRight, CheckCircle
} from 'lucide-react'

const challenges = [
  {
    id: 1,
    icon: Store,
    title: "Front Office Setup",
    description: "Many companies will set up front office operations in their new location"
  },
  {
    id: 2,
    icon: Users,
    title: "Staff Hiring",
    description: "They may hire sales or marketing staff"
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Back Office Gap",
    description: "But what about the back office tasks?"
  },
  {
    id: 4,
    icon: FileText,
    title: "Paperwork Overload",
    description: "Without local back office support your front facing employees will drown in paperwork"
  },
  {
    id: 5,
    icon: Globe,
    title: "Knowledge Gaps",
    description: "And your home team might not know the procedures of the new market"
  },
  {
    id: 6,
    icon: Languages,
    title: "Legal & Language Barriers",
    description: "Let alone the laws, codes, or the language..."
  }
]

export function ChallengesSection() {
  // Enhanced Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] as const }
  }

  const fadeInDown = {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] as const }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const slideInFromLeft = {
    initial: { opacity: 0, x: -80, scale: 0.9 },
    animate: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  }

  const slideInFromRight = {
    initial: { opacity: 0, x: 80, scale: 0.9 },
    animate: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 dark:bg-blue-900/10 rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 dark:bg-indigo-900/10 rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium mb-6"
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            UNFORESEEN CHALLENGES
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            The Challenge
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Even the most successful businesses run into unforeseen challenges when expanding internationally.
          </motion.p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Central Illustration */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInFromLeft}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Central Building with enhanced animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotateY: 0,
                  transition: { 
                    duration: 1.2, 
                    delay: 0.3,
                    type: "spring",
                    stiffness: 100
                  }
                }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -8, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
                className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl cursor-pointer"
              >
                <Building2 className="w-16 h-16 text-white" />
              </motion.div>

              {/* Floating Problem Icons with enhanced animations */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                animate={{
                  y: [-2, 2, -2],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="absolute -top-6 -left-6 w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center cursor-pointer"
              >
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0, duration: 0.6, type: "spring" }}
                animate={{
                  scale: [1, 1.05, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ scale: 1.3, y: -5 }}
                className="absolute -top-4 -right-8 w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center cursor-pointer"
              >
                <FileText className="w-5 h-5 text-orange-500" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0, x: -50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
                animate={{
                  rotate: [0, 5, -5, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ scale: 1.2, rotate: -10 }}
                className="absolute -bottom-4 -left-8 w-10 h-10 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center cursor-pointer"
              >
                <Languages className="w-5 h-5 text-yellow-600" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4, duration: 0.6, type: "spring" }}
                animate={{
                  rotate: [0, 360],
                  transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                whileHover={{ scale: 1.3, rotate: 180 }}
                className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center cursor-pointer"
              >
                <Globe className="w-6 h-6 text-purple-500" />
              </motion.div>

              {/* Enhanced Decorative Circles with animations */}
              <motion.div 
                className="absolute inset-0 -z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-blue-200 dark:border-blue-800 rounded-full opacity-30"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 180, 360],
                    transition: {
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                    }
                  }}
                />
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-100 dark:border-blue-900 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [360, 180, 0],
                    transition: {
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                    }
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Challenge List */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInFromRight}
            className="space-y-6"
          >
            <motion.div 
              className="mb-8"
              variants={fadeInDown}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Common International Expansion Challenges
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Here&apos;s what typically happens when businesses expand to new markets:
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="space-y-4"
            >
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.id}
                  variants={{
                    initial: { 
                      opacity: 0, 
                      x: 50, 
                      scale: 0.8,
                      filter: "blur(10px)"
                    },
                    animate: { 
                      opacity: 1, 
                      x: 0, 
                      scale: 1,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.8,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }
                    }
                  }}
                  whileHover={{ 
                    x: 12, 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg"
                >
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ 
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(59, 130, 246, 0)",
                          "0 0 0 10px rgba(59, 130, 246, 0.1)",
                          "0 0 0 0 rgba(59, 130, 246, 0)"
                        ],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5
                        }
                      }}
                    >
                      <challenge.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <motion.span 
                        className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3"
                        animate={{
                          scale: [1, 1.1, 1],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3
                          }
                        }}
                        whileHover={{ scale: 1.2 }}
                      >
                        {challenge.id}
                      </motion.span>
                      <motion.h4 
                        className="text-lg font-semibold text-gray-900 dark:text-white"
                        whileHover={{ color: "#2563eb" }}
                      >
                        {challenge.title}
                      </motion.h4>
                    </div>
                    <motion.p 
                      className="text-gray-600 dark:text-gray-300 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {challenge.description}
                    </motion.p>
                  </div>
                  <motion.div 
                    className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      x: [0, 5, 0],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Solution CTA */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              duration: 1,
              type: "spring",
              stiffness: 100
            }
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20"
        >
          <motion.div 
            className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-8 md:p-12 rounded-3xl border border-blue-100 dark:border-gray-600 relative overflow-hidden"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {/* Animated background elements */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 20, 0],
                y: [0, -10, 0],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -15, 0],
                y: [0, 15, 0],
                transition: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.8, delay: 0.2 }
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-center mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ 
                    scale: 1,
                    transition: { 
                      duration: 0.6, 
                      delay: 0.4,
                      type: "spring"
                    }
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      transition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                  >
                    <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  </motion.div>
                  <span className="text-green-600 dark:text-green-400 font-semibold">SFS Solution</span>
                </motion.div>
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: 0.6 }
                  }}
                  viewport={{ once: true }}
                >
                  Sound Familiar? We Have the Solution.
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: 0.8 }
                  }}
                  viewport={{ once: true }}
                >
                  Don&apos;t let these challenges slow down your international expansion. 
                  SFS provides comprehensive Dutch bookkeeping and tax advisory services 
                  that eliminate these pain points from day one.
                </motion.p>
                <motion.ul 
                  className="space-y-2 mb-8"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {[
                    "Local Dutch expertise and language support",
                    "Complete back-office operations setup", 
                    "Full compliance with Dutch laws and regulations"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                      variants={{
                        initial: { opacity: 0, x: -20 },
                        animate: { 
                          opacity: 1, 
                          x: 0,
                          transition: {
                            duration: 0.5,
                            delay: 1 + index * 0.1
                          }
                        }
                      }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3
                          }
                        }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      </motion.div>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div 
                className="text-center lg:text-right"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.8, delay: 0.4 }
                }}
                viewport={{ once: true }}
              >
                <motion.button
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ 
                    scale: 1, 
                    opacity: 1,
                    transition: { 
                      duration: 0.6, 
                      delay: 1.2,
                      type: "spring",
                      stiffness: 200
                    }
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, -5, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ 
                      x: "100%",
                      transition: { duration: 0.6 }
                    }}
                  />
                  <span className="relative z-10">Get Expert Help Today</span>
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    className="relative z-10"
                  >
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.div>
                </motion.button>
                <motion.p 
                  className="text-sm text-gray-500 dark:text-gray-400 mt-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ 
                    opacity: 1,
                    transition: { duration: 0.6, delay: 1.4 }
                  }}
                  viewport={{ once: true }}
                >
                  Free consultation • Fast setup • Proven results
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
