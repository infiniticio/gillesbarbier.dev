import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I know this investment will pay off?",
      answer: "Every audit comes with a 10x ROI guarantee. If I don't identify improvements worth at least 10x your investment, you get a full refund. Most clients see measurable results within 30 days."
    },
    {
      question: "Do you only work with specific tech stacks?",
      answer: "Gilles is technology-agnostic but opinionated about patterns. Whether you're on AWS/Azure/GCP, Node.js/Python/Java, or Kafka/Pulsar/EventBridge—good orchestration principles apply universally."
    },
    {
      question: "What if you're not available when we need ongoing support?",
      answer: "All projects include comprehensive documentation and team knowledge transfer. Plus, Gilles maintains a network of vetted specialists who can continue implementation using his blueprints."
    },
    {
      question: "How do you handle confidential/proprietary systems?",
      answer: "Full NDAs are standard. Gilles has worked with financial trading systems, healthcare data pipelines, and other highly sensitive environments. Security and confidentiality are non-negotiable."
    },
    {
      question: "What if my team lacks orchestration experience?",
      answer: "Gilles includes extensive knowledge transfer in every engagement. Your team will understand not just what we built, but why—so they can maintain and extend it confidently. Training materials and documentation included."
    }
  ];

  // Track which item is open for icon state
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#f7fafc] rounded-3xl max-w-5xl mx-auto mt-24 mb-12 shadow-lg animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-navy mb-8">Frequently Asked Questions</h2>
        <p className="text-xl text-warm-gray">
          Common questions from CTOs and VPs Engineering
        </p>
      </div>
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <Accordion
          type="single"
          collapsible
          className="space-y-6"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-b-0">
              <AccordionTrigger
                className="flex items-center w-full justify-between px-4 sm:px-8 py-6 rounded-xl text-lg font-bold text-navy bg-white hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-electric-blue transition-all cursor-pointer shadow-sm"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="flex-1 text-left">
                  {faq.question}
                </span>
                <span className="ml-auto flex-shrink-0 transition-transform duration-300">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-electric-blue" />
                  ) : (
                    <Plus className="w-6 h-6 text-warm-gray-400" />
                  )}
                </span>
              </AccordionTrigger>
              <AccordionContent
                className="px-4 sm:px-8 pb-7 pt-1 text-charcoal-600 text-lg leading-relaxed transition-all duration-400 ease-in-out animate-fade-in"
                style={{
                  transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s',
                }}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
