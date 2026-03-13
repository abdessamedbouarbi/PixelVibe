import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    content: 'PixelVibe transformed our digital presence completely. Their team delivered a stunning website that increased our conversions by 150%. The attention to detail and professionalism exceeded all expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, GrowthLabs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    content: 'Working with PixelVibe was a game-changer for our startup. They understood our vision and built a platform that scales beautifully. Their technical expertise is unmatched in the industry.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GlobalBrand',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    content: 'The team at PixelVibe delivered exceptional results on time and within budget. Their creative approach to our marketing campaign generated a 300% increase in engagement. Highly recommended!',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Park',
    role: 'CTO, InnovateTech',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    content: 'PixelVibe built our cloud infrastructure from the ground up. Their expertise in DevOps and cloud architecture saved us thousands in operational costs while improving performance.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Product Manager, ScaleUp Co.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    content: 'The mobile app PixelVibe developed for us has a 4.9-star rating and over 100k downloads. Their UX team truly understands what users want. An incredible partnership!',
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play
  const paginateRef = useRef(paginate);
  paginateRef.current = paginate;

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      paginateRef.current(1);
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      paginate(1);
    }, 5000);
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative w-full py-24 md:py-32 bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-block px-4 py-2 rounded-full bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 text-sm font-semibold mb-4"
            >
              Testimonials
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Loved by Teams
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Worldwide
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              See what our clients say about working with us and the results we've achieved together.
            </p>
          </motion.div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative h-[400px] md:h-[350px] flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(_, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                    resetAutoPlay();
                  }}
                  className="absolute w-full max-w-4xl px-4"
                >
                  <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 dark:shadow-black/20 border border-slate-200 dark:border-slate-700">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Avatar */}
                      <div className="relative flex-shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-blue-500/20">
                          <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <Quote className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        {/* Rating */}
                        <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Quote */}
                        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                          "{testimonials[currentIndex].content}"
                        </p>

                        {/* Author */}
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-slate-500 dark:text-slate-400">
                            {testimonials[currentIndex].role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  paginate(-1);
                  resetAutoPlay();
                }}
                className="rounded-full w-12 h-12 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      goToSlide(index);
                      resetAutoPlay();
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-blue-600'
                        : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  paginate(1);
                  resetAutoPlay();
                }}
                className="rounded-full w-12 h-12 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-8">
              Trusted by industry leaders worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50">
              {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple'].map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-2xl font-bold text-slate-400 dark:text-slate-600"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
