import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const floatingIcons = [
  { Icon: Sparkles, delay: 0, x: '10%', y: '20%' },
  { Icon: Zap, delay: 0.5, x: '85%', y: '15%' },
  { Icon: Shield, delay: 1, x: '75%', y: '75%' },
  { Icon: Sparkles, delay: 1.5, x: '15%', y: '70%' },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Defer non-critical animations until after LCP
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsLoaded(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Static Background - No animations on initial load */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static Gradient Orbs - Animated only after load */}
        {isLoaded && (
          <>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl"
            />
          </>
        )}
        
        {/* Static Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating Icons - Only animate after load */}
        {isLoaded && floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1], y: [0, -20, 0] }}
            transition={{ duration: 4, delay, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute text-blue-500/30"
            style={{ left: x, top: y }}
          >
            <Icon className="w-8 h-8 md:w-12 md:h-12" />
          </motion.div>
        ))}
      </div>

      {/* Content - Rendered immediately without animation delays */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-20"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge - No animation delay */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-8">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Welcome to the Future of Business
            </span>
          </div>

          {/* Main Heading - CRITICAL for LCP, no delay */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-slate-900 dark:text-white">Transform Your</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Digital Presence
            </span>
          </h1>

          {/* Subheading - No animation delay */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            We help businesses grow with cutting-edge technology solutions, 
            stunning designs, and data-driven strategies that deliver real results.
          </p>

          {/* CTA Buttons - No animation delay */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-xl shadow-blue-500/25"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection('#features')}
                variant="outline"
                size="lg"
                className="font-semibold px-8 py-6 text-lg rounded-xl border-2 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Stats - No staggered delays */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '50+', label: 'Team Experts' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent" />
    </section>
  );
}
