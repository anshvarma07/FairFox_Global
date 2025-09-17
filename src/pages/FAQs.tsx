import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What shipping modes do you offer?',
      answer: 'We offer comprehensive shipping solutions including air freight, ocean freight, and ground transportation. Our services cover express air cargo for time-sensitive shipments, cost-effective sea freight for large volumes, and reliable ground transport for domestic and regional deliveries.'
    },
    {
      question: 'How do I track my shipment?',
      answer: 'Once your shipment is in our system, you\'ll receive a unique tracking number. You can track your cargo in real-time through our online portal, mobile app, or by contacting our customer service team. We provide proactive updates on key milestones throughout the journey.'
    },
    {
      question: 'What documents are required for international shipping?',
      answer: 'Required documents typically include commercial invoice, packing list, bill of lading or airway bill, and certificates of origin. Depending on your cargo and destination, additional documents like health certificates, permits, or specialized declarations may be needed. Our customs team will guide you through the requirements.'
    },
    {
      question: 'Do you provide customs clearance services?',
      answer: 'Yes, we offer comprehensive customs management services including documentation preparation, duty calculation, customs clearance, and compliance consulting. Our experienced customs brokers ensure smooth border crossings and regulatory compliance for all your international shipments.'
    },
    {
      question: 'What types of cargo can you handle?',
      answer: 'We handle a wide variety of cargo including general merchandise, automotive parts, aerospace components, healthcare products, perishables, hazardous materials (with proper certification), oversized equipment, and specialized project cargo. Each shipment type has specific handling protocols to ensure safety and compliance.'
    },
    {
      question: 'How do you ensure cargo safety and security?',
      answer: 'We maintain the highest security standards through GPS tracking, secured facilities, trained personnel, comprehensive insurance coverage, and partnerships with certified carriers. All our warehouses are equipped with 24/7 surveillance and climate control systems where needed.'
    },
    {
      question: 'What are your transit times?',
      answer: 'Transit times vary by service mode and destination. Express air freight typically takes 1-3 days, standard air freight 3-7 days, and ocean freight 15-45 days depending on the route. We provide accurate transit time estimates based on your specific origin-destination pair and service level.'
    },
    {
      question: 'Do you offer warehousing and distribution services?',
      answer: 'Yes, we provide comprehensive warehousing solutions including short and long-term storage, pick and pack services, cross-docking, inventory management, and distribution services. Our facilities are strategically located near major ports and airports for optimal efficiency.'
    },
    {
      question: 'How do you calculate shipping costs?',
      answer: 'Shipping costs are calculated based on factors including cargo weight, dimensions, destination, service type, handling requirements, and current market rates. We provide transparent pricing with no hidden fees. Contact us for a detailed quote tailored to your specific requirements.'
    },
    {
      question: 'What if my cargo is damaged or lost?',
      answer: 'We carry comprehensive cargo insurance and work with leading insurance providers to protect your shipments. In the unlikely event of damage or loss, we have a dedicated claims team to process your claim quickly and fairly. We also implement preventive measures to minimize risks throughout the supply chain.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <HelpCircle className="w-20 h-20 text-teal-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Find answers to common questions about our logistics services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left text-white hover:bg-white/5 transition-colors duration-200 flex justify-between items-center"
                >
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our logistics experts are here to help you find the perfect solution for your shipping needs.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-xl"
            >
              Contact Our Experts
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};