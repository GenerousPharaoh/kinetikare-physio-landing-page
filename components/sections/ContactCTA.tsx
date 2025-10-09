import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Container from '@/components/ui/Container';

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showImage?: boolean;
}

const ContactCTA: React.FC<ContactCTAProps> = ({
  title = "Ready to Move Forward?",
  subtitle = "Experience personalized physiotherapy care designed to help you feel your best.",
  className = '',
  showImage = true
}) => {
  return (
    <section className={`py-16 md:py-24 bg-primary-800 text-white relative overflow-hidden ${className}`}>
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-30"></div>
      
      <Container>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          
          <motion.p
            className="text-lg text-white/80 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Link 
                href="https://endorphinshealth.janeapp.com/#/staff_member/42" 
                target="_blank"
                className="bg-accent hover:bg-accent-dark text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 flex items-center shadow-lg"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Book an Appointment
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Link
                href="/#contact"
                className="bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 flex items-center border border-white/30 shadow-lg"
              >
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                Contact
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactCTA; 