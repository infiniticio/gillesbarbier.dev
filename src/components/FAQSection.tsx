
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-warm-gray">
            Common questions from CTOs and VPs Engineering
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-navy hover:text-electric-blue transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-warm-gray leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
