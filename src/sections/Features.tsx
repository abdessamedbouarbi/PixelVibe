import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Rocket, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Globe,
  ArrowUpRight
} from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Lightning Fast',
    description: 'Optimized performance that keeps your users engaged with sub-second load times.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption and compliance certifications.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'AI-Powered',
    description: 'Leverage cutting-edge artificial intelligence to automate and optimize workflows.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Real-time insights and comprehensive reporting to drive data-driven decisions.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamless teamwork with integrated communication and project management tools.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy worldwide with our distributed infrastructure across 50+ regions.',
    color: 'from-indigo-500 to-violet-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

// Card hover animation
const cardHoverVariants = {
  rest: { 
    y: 0, 
    scale: 1,
    boxShadow: "0 0 0 rgba(0,0,0,0)"
  },
  hover: { 
    y: -8, 
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const
    }
  }
};

// Icon float animation
const iconFloatVariants = {
  rest: { y: 0 },
  hover: { 
    y: [-2, 2, -2],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

// Glow pulse animation
const glowVariants = {
  rest: { opacity: 0, scale: 0.8 },
  hover: { 
    opacity: [0.1, 0.2, 0.1],
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="features"
      className="relative w-full py-24 md:py-32 bg-white dark:bg-slate-950"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4"
            >
              Why Choose Us
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Powerful Features for
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Everything you need to scale your business, all in one platform. 
              Built with performance and security in mind.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group relative cursor-pointer"
              >
                <motion.div 
                  variants={cardHoverVariants}
                  className="relative p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                  {/* Animated Gradient Background */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color}`}
                    variants={glowVariants}
                  />
                  
                  {/* Corner Accent */}
                  <motion.div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full -translate-y-1/2 translate-x-1/2`}
                  />
                  
                  {/* Icon with float animation */}
                  <motion.div
                    variants={iconFloatVariants}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg relative z-10`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    {/* Icon glow effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.color} blur-xl -z-10`}
                      initial={{ opacity: 0.5 }}
                      whileHover={{ opacity: 0.8, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Title with slide effect */}
                  <motion.h3 
                    className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="bg-gradient-to-r from-slate-900 to-slate-900 dark:from-white dark:to-white bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {feature.title}
                    </span>
                  </motion.h3>
                  
                  {/* Description with fade effect */}
                  <motion.p 
                    className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 relative z-10 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300"
                  >
                    {feature.description}
                  </motion.p>

                  {/* Learn More Link with arrow animation */}
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 relative z-10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="group-hover:mr-2 transition-all duration-300">Learn more</span>
                    <motion.span
                      initial={{ x: -5, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="inline-block"
                    >
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </motion.span>
                  </motion.a>
                  
                  {/* Bottom border accent on hover */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-2xl`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
