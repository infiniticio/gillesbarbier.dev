import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "We already use Copilot. Why do we need training?",
      answer: "Most teams use 10% of what AI tools can do. Copilot autocomplete is just the beginning—training unlocks AI-assisted architecture design, code review, debugging, and documentation. The difference between using AI and being AI-native is enormous."
    },
    {
      question: "Will this work for our tech stack?",
      answer: "Yes. AI-first principles apply across languages and frameworks. Whether you're working in Python, TypeScript, Go, or Java—I customize all exercises for your specific technologies and codebase."
    },
    {
      question: "How do you measure success?",
      answer: "We establish baselines before training (cycle time, PR velocity, time-to-merge) and measure improvement at 30, 60, and 90 days. Teams typically report 40-60% productivity gains within the first month."
    },
    {
      question: "What about code quality and security?",
      answer: "A core module covers AI-safe coding practices. This includes review workflows for AI-generated code, security considerations, and quality gates. Your team learns to use AI as a multiplier without compromising standards."
    },
    {
      question: "Can we start with a pilot team?",
      answer: "Absolutely. Most organizations start with one team, measure results, then expand. The Executive Briefing is also a great low-commitment way to understand what AI-first development looks like before investing in full team training."
    }
  ];

  // Track which item is open for icon state
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#f4f8fc] rounded-3xl max-w-5xl mx-auto mt-24 mb-12 shadow-lg animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-navy mb-8">Frequently Asked Questions</h2>
        <p className="text-xl text-warm-gray">
          Common questions from engineering leaders
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
