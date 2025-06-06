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
      answer: "I am technology-agnostic but opinionated about patterns. Whether you're on AWS/Azure/GCP, Node.js/Python/Java, or Kafka/Pulsar/EventBridge—good orchestration principles apply universally."
    },
    {
      question: "What if you're not available when we need ongoing support?",
      answer: "All projects include comprehensive documentation and team knowledge transfer. Plus, I maintain a network of vetted specialists who can continue implementation using my blueprints."
    },
    {
      question: "How do you handle confidential/proprietary systems?",
      answer: "Full NDAs are standard. I have worked with financial trading systems, healthcare data pipelines, and other highly sensitive environments. Security and confidentiality are non-negotiable."
    },
    {
      question: "What if my team lacks orchestration experience?",
      answer: "I include extensive knowledge transfer in every engagement. Your team will understand not just what we built, but why—so they can maintain and extend it confidently. Training materials and documentation included."
    }
  ];

  // Track which item is open for icon state
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#f4f8fc] rounded-3xl max-w-5xl mx-auto mt-24 mb-12 shadow-lg animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-navy mb-8">Frequently Asked Questions</h2>
        <p className="text-xl text-warm-gray">
          Common questions from CTOs and VPs Engineering
        </p>
      </div>
      <div className="bg-[#f8fbff] border border-blue-100 rounded-3xl shadow-2xl overflow-hidden">
        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-blue-50 last:border-b-0">
              <AccordionTrigger
                className={`flex items-center w-full justify-between px-4 sm:px-8 py-7 rounded-xl text-xl font-bold text-navy bg-white hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-sky-300 transition-all cursor-pointer shadow-sm ${openIndex === index ? 'bg-blue-50' : ''}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="flex-1 text-left">
                  {faq.question}
                </span>
                <span className="ml-auto flex-shrink-0 transition-transform duration-300">
                  {openIndex === index ? (
                    <Minus className="w-7 h-7 text-sky-500" />
                  ) : (
                    <Plus className="w-7 h-7 text-gray-300" />
                  )}
                </span>
              </AccordionTrigger>
              <AccordionContent
                className="px-4 sm:px-8 pb-7 pt-1 text-gray-800 text-lg leading-relaxed border-l-4 border-blue-100 pl-6 transition-all duration-400 ease-in-out animate-fade-in"
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
