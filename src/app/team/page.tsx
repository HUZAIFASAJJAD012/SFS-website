'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Mail, MapPin, Calendar, Award, Users, TrendingUp, Calculator, FileText, Database, ArrowRight } from 'lucide-react'
import { useState } from 'react'

interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: string;
  bio: string;
  experience: string;
  projects: string;
  specialties: string[];
  education: string;
  location: string;
  joinDate: string;
  image: string;
  social: {
    linkedin: string;
    email: string;
  };
  achievements: string[];
}

const teamMembers = [
  {
    id: 1,
    name: "Naveed Shah",
    position: "Senior Financial Accountant",
    department: "Financial Services",
    bio: "Naveed brings over 20 years of extensive experience in financial accounting across the EMEA region. He specializes in Dutch financial regulations and international business compliance.",
    experience: "20+ years",
    projects: "300+",
    specialties: ["Financial Accounting", "EMEA Region Expertise", "Dutch Regulations", "International Compliance"],
    education: "Master of Finance, Professional Accountant",
    location: "Rotterdam, Netherlands",
    joinDate: "2020",
    image: "/WhatsApp Image 2025-09-26 at 00.39.19 (2).jpeg",
    social: {
      linkedin: "#",
      email: "naveed@sfs-services.nl"
    },
    achievements: [
      "20+ years experience in EMEA region",
      "Expert in Dutch financial regulations",
      "Led financial operations for international companies"
    ]
  },
  {
    id: 2,
    name: "Qutaiba Nassar",
    position: "Senior Financial Accountant",
    department: "Financial Services",
    bio: "Qutaiba is a seasoned financial accountant with over 20 years of experience in the EMEA region. Based in Utrecht, he provides expert financial advisory and accounting services.",
    experience: "20+ years",
    projects: "250+",
    specialties: ["Financial Accounting", "EMEA Operations", "Tax Planning", "Financial Consulting"],
    education: "Master of Accounting, CPA",
    location: "Utrecht, Netherlands",
    joinDate: "2020",
    image: "/WhatsApp Image 2025-09-26 at 00.39.19 (3).jpeg",
    social: {
      linkedin: "#",
      email: "qutaiba@sfs-services.nl"
    },
    achievements: [
      "20+ years experience in EMEA region",
      "Expert in international financial standards",
      "Streamlined accounting processes for multiple clients"
    ]
  },
  {
    id: 3,
    name: "M Jamshaid",
    position: "Sales Associate",
    department: "Sales & Customer Relations",
    bio: "Jamshaid brings 10+ years of experience in sales and customer compliance. Based in Rotterdam, he ensures exceptional client service and maintains strong customer relationships.",
    experience: "10+ years",
    projects: "200+",
    specialties: ["Sales Management", "Customer Compliance", "Client Relations", "Business Development"],
    education: "Bachelor of Business Administration",
    location: "Rotterdam, Netherlands",
    joinDate: "2021",
    image: "/WhatsApp Image 2025-10-08 at 00.12.14.jpeg",
    social: {
      linkedin: "#",
      email: "jamshaid@sfs-services.nl"
    },
    achievements: [
      "10+ years in sales and customer compliance",
      "Built strong client relationships",
      "Expert in customer service excellence"
    ]
  },
  {
    id: 4,
    name: "Youas Ewketu",
    position: "Financial Consultant",
    department: "Financial Services",
    bio: "Youas is an experienced financial consultant who brings expertise in business advisory and financial planning. He helps clients navigate complex financial decisions and optimize their business operations.",
    experience: "8+ years",
    projects: "150+",
    specialties: ["Financial Consulting", "Business Advisory", "Financial Planning", "Risk Management"],
    education: "Master of Finance, CFA",
    location: "Amsterdam, Netherlands",
    joinDate: "2022",
    image: "/WhatsApp Image 2025-10-08 at 00.12.13.jpeg",
    social: {
      linkedin: "#",
      email: "youas@sfs-services.nl"
    },
    achievements: [
      "8+ years in financial consulting",
      "Expert in business advisory services",
      "Specialized in financial risk management"
    ]
  }
]

const companyStats = [
  { number: "10+", label: "Team Members", icon: Users },
  { number: "10+", label: "Years Experience", icon: Calendar },
  { number: "200+", label: "Clients Served", icon: Award },
  { number: "98%", label: "Client Satisfaction", icon: TrendingUp }
]

const services = [
  { icon: Calculator, title: "Dutch Bookkeeping", description: "Complete bookkeeping services" },
  { icon: FileText, title: "Tax Advisory", description: "Expert tax planning & compliance" },
  { icon: Database, title: "ERP Integration", description: "Seamless system integration" }
]

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  // Enhanced scroll animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "backOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our Expert Team
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Meet the talented Dutch tax and bookkeeping professionals who ensure your business 
              stays compliant and financially optimized, wherever you&apos;re located globally.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400"
            >
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                25+ Professionals
              </span>
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Netherlands Based
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                Tax Law Experts
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {companyStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                  <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Expertise Areas
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our team specializes in comprehensive Dutch financial services
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Team Gallery */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Floating Background Elements */}
        <motion.div
          animate={{
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [15, -15, 15],
            transition: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }
          }}
          className="absolute bottom-20 right-10 w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [-10, 10, -10],
            transition: {
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }
          }}
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full opacity-20"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Meet Our Experts
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our dedicated team of Dutch financial experts brings years of experience and 
              deep knowledge to help your business thrive in the Netherlands
            </p>
          </motion.div>

          <motion.div
            layout
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member: TeamMember) => (
              <motion.div
                key={member.id}
                layout
                variants={fadeInScale}
                whileHover={{ 
                  y: -20, 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                className="group cursor-pointer perspective-1000"
                onClick={() => setSelectedMember(member)}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Gallery-Style Card */}
                <motion.div 
                  className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Profile Image with Gradient Overlay */}
                  <div className="relative h-80 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 overflow-hidden">
                    {/* Profile Image */}
                    {member.image ? (
                      <motion.div className="relative w-full h-full overflow-hidden">
                        <motion.img
                          src={member.image}
                          alt={member.name}
                          className="absolute inset-0 w-full h-full object-cover filter brightness-110"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          loading="lazy"
                          onError={(e) => {
                            // Fallback to initials if image fails to load
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        {/* Professional overlay for better quality look */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                      </motion.div>
                    ) : null}
                    
                    {/* Fallback: Image Placeholder with Initials (always shown as backup) */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      style={{ zIndex: member.image ? -1 : 1 }}
                    >
                      <motion.div 
                        className="w-32 h-32 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/40 shadow-2xl"
                        whileHover={{ rotate: 5 }}
                      >
                        <span className="text-3xl font-bold text-white">
                          {member.name.split(' ').map((n: string) => n[0]).join('')}
                        </span>
                      </motion.div>
                    </motion.div>
                    
                    {/* Gradient Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Floating Decoration */}
                    <motion.div
                      animate={{
                        y: [-5, 5, -5],
                        rotate: [0, 10, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-6 right-6 w-8 h-8 bg-white/20 rounded-full"
                    />
                    
                    {/* Experience Badge */}
                    <motion.div 
                      className="absolute top-6 left-6 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-white text-sm font-semibold">{member.experience}</span>
                    </motion.div>
                  </div>

                  {/* Profile Content */}
                  <div className="p-6 relative">
                    {/* Name and Position */}
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {member.name}
                    </motion.h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3 text-sm">
                      {member.position}
                    </p>
                    
                    {/* Skills/Specialties */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.specialties.slice(0, 2).map((specialty: string, idx: number) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium"
                          whileHover={{ scale: 1.1 }}
                        >
                          {specialty}
                        </motion.span>
                      ))}
                    </div>

                    {/* Location */}
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      {member.location}
                    </div>

                    {/* Hover Action */}
                    <motion.div 
                      className="absolute bottom-4 right-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  {/* Animated Bottom Border */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 w-full"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work with Our Expert Team?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get started with professional Dutch bookkeeping and tax advisory services. 
              Our team is ready to help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Free Consultation
                <Calendar className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Our Team
                <Mail className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal for detailed profile */}
      {selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedMember.name}
                </h2>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {selectedMember.position}
                </p>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">About</h3>
                <p className="text-gray-600 dark:text-gray-300">{selectedMember.bio}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.specialties.map((specialty: string) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements</h3>
                <ul className="space-y-2">
                  {selectedMember.achievements.map((achievement: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Award className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Education</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{selectedMember.education}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{selectedMember.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  )
}
