'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { 
  TrendingUp, Users, DollarSign, Clock, Globe, CheckCircle, 
  Building2, Zap, Target, FileText, Database,
  ArrowRight, Star, Award, Calendar, MapPin, ExternalLink, Shield,
  type LucideIcon
} from 'lucide-react'
import { useState } from 'react'

interface Metric {
  label: string;
  value: string;
  icon: LucideIcon;
}

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  location: string;
  timeline: string;
  featured: boolean;
  challenge: string;
  solution: string[];
  results: {
    savings: string;
    efficiency: string;
    compliance: string;
    growth: string;
  };
  metrics: Metric[];
  technologies: string[];
  testimonial: Testimonial;
  image: string;
}

const caseStudies = [
  {
    id: 1,
    title: "Dutch E-commerce Growth Story",
    client: "DirectSales B.V.",
    industry: "E-commerce",
    location: "Amsterdam, Netherlands",
    timeline: "4 months",
    featured: true,
    challenge: "A growing online retailer needed structured bookkeeping and VAT compliance for EU sales while managing inventory across multiple warehouses.",
    solution: [
      "Implemented Exact Online with inventory tracking",
      "Set up automated VAT filing for EU countries",
      "Established monthly financial reporting",
      "Created cost center tracking for warehouses"
    ],
    results: {
      savings: "€25K",
      efficiency: "70%",
      compliance: "100%",
      growth: "180%"
    },
    metrics: [
      { label: "Annual Cost Savings", value: "€25,000", icon: DollarSign },
      { label: "Processing Time Reduced", value: "70%", icon: Clock },
      { label: "VAT Compliance", value: "100%", icon: CheckCircle },
      { label: "Revenue Growth", value: "180%", icon: TrendingUp }
    ],
    technologies: ["Exact Online", "EU VAT Portal", "Inventory Management"],
    testimonial: {
      quote: "SFS helped us scale from a small webshop to a professional e-commerce business. Their Exact Online setup was exactly what we needed.",
      author: "Lisa van der Berg",
      position: "Founder, DirectSales B.V."
    },
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop&auto=format&q=80"
  },
  {
    id: 2,
    title: "Freelancer to BV Transition",
    client: "Creative Studios B.V.",
    industry: "Digital Services",
    location: "Utrecht, Netherlands",
    timeline: "2 months",
    featured: false,
    challenge: "A successful freelance designer needed to incorporate as a BV and establish proper bookkeeping while transitioning existing clients and contracts.",
    solution: [
      "Established BV registration with Chamber of Commerce",
      "Set up Twinfield for professional bookkeeping",
      "Managed client contract transitions",
      "Implemented quarterly tax planning"
    ],
    results: {
      savings: "€8K",
      efficiency: "60%",
      compliance: "100%",
      growth: "150%"
    },
    metrics: [
      { label: "Setup Time Saved", value: "60%", icon: Clock },
      { label: "Annual Tax Savings", value: "€8,000", icon: DollarSign },
      { label: "Client Retention", value: "100%", icon: Globe },
      { label: "Business Growth", value: "150%", icon: CheckCircle }
    ],
    technologies: ["Twinfield", "Chamber of Commerce Portal", "Contract Management"],
    testimonial: {
      quote: "SFS made my transition from freelancer to BV owner completely seamless. I could focus on my clients while they handled all the administrative work.",
      author: "Mark Janssen",
      position: "Owner, Creative Studios B.V."
    },
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=200&fit=crop&auto=format&q=80"
  },
  {
    id: 3,
    title: "Restaurant Chain Bookkeeping",
    client: "Local Flavors Group",
    industry: "Hospitality",
    location: "Rotterdam, Netherlands",
    timeline: "3 months",
    featured: false,
    challenge: "A growing restaurant chain with 3 locations needed centralized bookkeeping and proper cost control across all venues.",
    solution: [
      "Consolidated bookkeeping for all 3 locations",
      "Implemented AFAS for multi-location reporting",
      "Set up cost center tracking per restaurant",
      "Automated supplier invoice processing"
    ],
    results: {
      savings: "€15K",
      efficiency: "65%",
      compliance: "100%",
      growth: "120%"
    },
    metrics: [
      { label: "Cost Control Improved", value: "65%", icon: Zap },
      { label: "Annual Savings", value: "€15,000", icon: DollarSign },
      { label: "Locations Managed", value: "3 Sites", icon: Database },
      { label: "Owner Satisfaction", value: "100%", icon: Star }
    ],
    technologies: ["AFAS", "Multi-location Reporting", "Cost Center Management"],
    testimonial: {
      quote: "SFS gave us complete visibility across all our restaurants. Now we know exactly which location is most profitable and why.",
      author: "Peter van Dijk",
      position: "Owner, Local Flavors Group"
    },
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=200&fit=crop&auto=format&q=80"
  },
  {
    id: 4,
    title: "Tech Startup Financial Structure",
    client: "InnovateNL B.V.",
    industry: "Software Development",
    location: "Eindhoven, Netherlands",
    timeline: "6 months",
    featured: true,
    challenge: "A fast-growing tech startup needed professional bookkeeping, investor reporting, and preparation for Series A funding round.",
    solution: [
      "Implemented professional bookkeeping structure",
      "Created investor-ready financial reports",
      "Set up cash flow forecasting",
      "Prepared due diligence documentation"
    ],
    results: {
      savings: "€30K",
      efficiency: "80%",
      compliance: "100%",
      growth: "250%"
    },
    metrics: [
      { label: "Investor Confidence", value: "100%", icon: Shield },
      { label: "Reporting Speed", value: "80%", icon: Zap },
      { label: "Funding Preparation", value: "€30,000", icon: DollarSign },
      { label: "Growth Rate", value: "250%", icon: TrendingUp }
    ],
    technologies: ["Exact Online", "Investor Reporting", "Cash Flow Modeling"],
    testimonial: {
      quote: "SFS's professional approach to our financials was crucial for our Series A success. Investors were impressed with our financial transparency.",
      author: "Emma Bakker",
      position: "CFO, InnovateNL B.V."
    },
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&h=200&fit=crop&auto=format&q=80"
  },
  {
    id: 5,
    title: "Import/Export Business Compliance",
    client: "Global Trade Partners B.V.",
    industry: "Import/Export",
    location: "Amsterdam, Netherlands",
    timeline: "5 months",
    featured: false,
    challenge: "An import/export company needed specialized bookkeeping for international trade, customs documentation, and multi-currency transactions.",
    solution: [
      "Set up multi-currency bookkeeping system",
      "Implemented customs and duty tracking",
      "Created supplier payment automation",
      "Established currency hedging reporting"
    ],
    results: {
      savings: "€20K",
      efficiency: "70%",
      compliance: "100%",
      growth: "160%"
    },
    metrics: [
      { label: "Currency Management", value: "70%", icon: Clock },
      { label: "Annual Savings", value: "€20,000", icon: DollarSign },
      { label: "Countries Served", value: "12 Markets", icon: Building2 },
      { label: "Customs Compliance", value: "100%", icon: Target }
    ],
    technologies: ["Multi-currency ERP", "Customs Integration", "Payment Automation"],
    testimonial: {
      quote: "SFS understands the complexities of international trade. Their bookkeeping system handles all our multi-currency needs perfectly.",
      author: "David Hendriks",
      position: "Managing Director, Global Trade Partners B.V."
    },
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop&auto=format&q=80"
  },
  {
    id: 6,
    title: "Professional Services Firm",
    client: "Consultancy Pro B.V.",
    industry: "Professional Services",
    location: "The Hague, Netherlands",
    timeline: "3 months",
    featured: false,
    challenge: "A growing consultancy firm needed project-based accounting, time tracking integration, and professional invoicing for multiple clients.",
    solution: [
      "Implemented project-based cost tracking",
      "Integrated time tracking with invoicing",
      "Set up automated recurring billing",
      "Created client profitability reporting"
    ],
    results: {
      savings: "€12K",
      efficiency: "75%",
      compliance: "100%",
      growth: "200%"
    },
    metrics: [
      { label: "Billing Efficiency", value: "75%", icon: Zap },
      { label: "Project Tracking", value: "25+ Projects", icon: Users },
      { label: "Cost Savings", value: "€12,000", icon: DollarSign },
      { label: "Client Growth", value: "200%", icon: TrendingUp }
    ],
    technologies: ["Project Accounting", "Time Integration", "Automated Billing"],
    testimonial: {
      quote: "SFS's project accounting system gives us perfect visibility into which clients and projects are most profitable. Game changer for our business.",
      author: "Sophie de Vries",
      position: "Partner, Consultancy Pro B.V."
    },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&auto=format&q=80"
  }
]

const statsOverview = [
  { number: "25+", label: "Success Stories", icon: FileText },
  { number: "€150K+", label: "Client Savings", icon: DollarSign },
  { number: "98%", label: "Client Satisfaction", icon: Star },
  { number: "100%", label: "Compliance Rate", icon: CheckCircle }
]

export default function CasesPage() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null)

  // Animation variants with enhanced scroll effects
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const slideInLeft = {
    initial: { opacity: 0, x: -80 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" }
  }

  const slideInRight = {
    initial: { opacity: 0, x: 80 },
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
              SFS Success Stories
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Discover how SFS has helped Dutch businesses achieve financial clarity, compliance, and growth through our expert bookkeeping and tax services
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400"
            >
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                Proven Results
              </span>
              <span className="flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                International Clients
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                100% Success Rate
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview with Enhanced Animation */}
      <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Floating Background Elements */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            y: [10, -10, 10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-10 right-10 w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full opacity-30"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {statsOverview.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInScale}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-all duration-300 shadow-lg"
                  whileHover={{ 
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                    y: -5
                  }}
                >
                  <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Cases with Enhanced Animations */}
      <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 0%, transparent 50%), 
                               radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%)`,
              backgroundSize: "100px 100px"
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
            >
              Featured Success Stories
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover how SFS has helped businesses achieve remarkable results
            </p>
          </motion.div>

          <motion.div
            layout
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8"
          >
            {caseStudies.filter((c: CaseStudy) => c.featured).map((caseStudy: CaseStudy) => (
              <motion.div
                key={caseStudy.id}
                layout
                variants={fadeInUp}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full">
                          Featured Case
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-3 mb-2">
                          {caseStudy.title}
                        </h3>
                        <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-4">
                          <Building2 className="w-4 h-4 mr-2" />
                          {caseStudy.client} • {caseStudy.industry}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {caseStudy.challenge}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {caseStudy.metrics.slice(0, 4).map((metric, idx) => (
                        <div key={idx} className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                          <metric.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedCase(caseStudy)}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Case Study Image */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        Client Testimonial
                      </h4>
                      <blockquote className="text-gray-600 dark:text-gray-300 italic mb-4">
                        &ldquo;{caseStudy.testimonial.quote}&rdquo;
                      </blockquote>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                            {caseStudy.testimonial.author.split(' ').map((n: string) => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            {caseStudy.testimonial.author}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {caseStudy.testimonial.position}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Cases Grid with Scroll Animations */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 h-full">
            {Array.from({ length: 32 }).map((_, i) => (
              <motion.div
                key={i}
                className="border-r border-b border-blue-200 dark:border-blue-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.01 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All Case Studies
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Browse our complete portfolio of successful projects
            </p>
          </motion.div>

          <motion.div
            layout
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {caseStudies.map((caseStudy: CaseStudy) => (
              <motion.div
                key={caseStudy.id}
                layout
                variants={fadeInUp}
                whileHover={{ 
                  y: -15, 
                  scale: 1.03,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer group perspective-1000"
                onClick={() => setSelectedCase(caseStudy)}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Header */}
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-indigo-600 overflow-hidden">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{
                      backgroundImage: `url('${caseStudy.image}')`
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {caseStudy.industry}
                      </span>
                      {caseStudy.featured && (
                        <Star className="w-5 h-5 text-yellow-300 fill-current" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                        {caseStudy.title}
                      </h3>
                      <div className="flex items-center text-white/80 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {caseStudy.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {caseStudy.client}
                    </span>
                    <span className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {caseStudy.timeline}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {caseStudy.challenge}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {caseStudy.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {caseStudy.technologies.slice(0, 2).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
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
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join the growing list of international businesses who trust SFS for their 
              Dutch bookkeeping and tax advisory needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Start Your Success Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View All Services
                <ExternalLink className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedCase && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedCase(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedCase.title}
                </h2>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Building2 className="w-5 h-5 mr-2" />
                  {selectedCase.client} • {selectedCase.industry}
                </div>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl ml-4"
              >
                ×
              </button>
            </div>

            {/* Case Study Image */}
            <div className="mb-8">
              <img 
                src={selectedCase.image} 
                alt={selectedCase.title}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>

            <div className="space-y-8">
              {/* Challenge */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  The Challenge
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedCase.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Our Solution
                </h3>
                <ul className="space-y-2">
                  {selectedCase.solution.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Results Achieved
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedCase.metrics.map((metric: Metric, index: number) => (
                    <div key={index} className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <metric.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                      <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Client Testimonial
                </h3>
                <blockquote className="text-gray-600 dark:text-gray-300 italic mb-4 text-lg leading-relaxed">
                  &ldquo;{selectedCase.testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 dark:text-blue-300 font-semibold">
                      {selectedCase.testimonial.author.split(' ').map((n: string) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {selectedCase.testimonial.author}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {selectedCase.testimonial.position}
                    </div>
                  </div>
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
