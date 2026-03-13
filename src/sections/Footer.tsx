import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Sparkles
} from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  services: [
    { name: 'Web Development', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Digital Marketing', href: '#services' },
    { name: 'Cloud Solutions', href: '#services' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-slate-950 text-slate-300">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <motion.a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="flex items-center gap-2 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  PixelVibe
                </span>
              </motion.a>
              <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
                Transforming businesses with cutting-edge technology solutions. 
                We help you build, grow, and scale in the digital age.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:hello@nexus.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  hello@PixelVibe.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +1 (234) 567-890
                </a>
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin className="w-5 h-5" />
                  San Francisco, CA
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} PixelVibe. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm text-slate-500 hover:text-blue-400 transition-colors"
            >
              Back to top ↑
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
