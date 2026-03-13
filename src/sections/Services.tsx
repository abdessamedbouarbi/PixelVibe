import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Megaphone, 
  LineChart, 
  Cloud,
  Smartphone,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies. From responsive websites to complex web apps, we deliver scalable solutions.',
    features: ['React & Next.js', 'Node.js Backend', 'API Integration', 'Database Design'],
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Stunning, user-centered designs that captivate your audience and drive conversions with intuitive interfaces.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that increase visibility, engagement, and ROI across all digital channels.',
    features: ['SEO Optimization', 'Social Media', 'Content Strategy', 'PPC Campaigns'],
    color: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    icon: LineChart,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with our advanced analytics and visualization solutions.',
    features: ['Business Intelligence', 'Custom Dashboards', 'Predictive Analytics', 'Data Visualization'],
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Secure, scalable cloud infrastructure and migration services to modernize your business operations.',
    features: ['AWS & Azure', 'Cloud Migration', 'DevOps', 'Serverless Architecture'],
    color: 'from-indigo-500 to-violet-500',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on any device.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
    color: 'from-yellow-500 to-amber-500',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      className="relative w-full py-24 md:py-32 bg-slate-50 dark:bg-slate-900/50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
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
              className="inline-block px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-4"
            >
              Our Services
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Solutions That Drive
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Real Results
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              From concept to launch, we provide end-to-end digital solutions 
              tailored to your unique business needs.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-transparent hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
                  {/* Image */}
                  <div className="relative w-full md:w-2/5 h-48 md:h-auto rounded-xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                      {service.description}
                    </p>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400"
                    >
                      Explore Service
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Need a custom solution? Let's discuss your project.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
