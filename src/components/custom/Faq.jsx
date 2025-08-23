import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I use your service if I don’t live in the USA?",
    answer:
      "Yes, you can. FixThePhoto is an online photo editing service that works with people from all over the world. It doesn’t matter where you live in the USA, UK, Canada, India, or anywhere else. You just upload your photos through our website, explain what you need, and our team will take care of it.",
  },
  {
    question: "How do I send my photos for editing?",
    answer:
      "It’s easy. Just visit the FixThePhoto website and upload the images you want us to edit. There’s a place to write your instructions so we know exactly what you’re looking for. Once you submit your order, our editors will start working on it right away.",
  },
  {
    question: "Who edits my photos at FixThePhoto?",
    answer:
      "All photos are edited by real people, not machines. The FixThePhoto team includes skilled editors with years of experience. They handle each photo with care and make small, clean changes that keep the photo looking natural, not fake or overdone.",
  },
  {
    question: "What kinds of photos do you work on?",
    answer:
      "FixThePhoto works on many types of photos. We edit portraits, wedding pictures, product images, baby photos, model shots, and more. Whether it’s a personal memory or a business project, we help make your photos look their best.",
  },
  {
    question: "How long does it take to get my edited photos back?",
    answer:
      "Most orders at FixThePhoto are completed in 1 to 3 days. If the edits are simple, you might get them back even sooner. Bigger or more detailed jobs may take a bit longer, but we always try to deliver on time.",
  },
  {
    question: "How much does it cost to use FixThePhoto?",
    answer:
      "The price depends on the type of editing you need. On our website, you’ll see clear pricing before you place an order. FixThePhoto doesn’t charge hidden fees—you only pay for what you ask for.",
  },
  {
    question: "Can I ask for changes if I don’t like something?",
    answer:
      "Yes. FixThePhoto allows revisions if you’re not fully happy with the results. Just let us know what needs to be fixed, and we’ll do our best to make it right. Your satisfaction is important to us.",
  },
  {
    question: "Is it safe to send my personal photos to FixThePhoto?",
    answer:
      "Yes, it’s completely safe. FixThePhoto respects your privacy. We do not share, post, or use your photos anywhere without your permission. Your images stay private and secure at all times.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 px-4 container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about using FixThePhoto photo editing services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <Accordion key={index} type="single" collapsible className="w-full">
            <AccordionItem value={`faq-${index}`} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger className="flex justify-between items-center p-4 font-medium text-gray-800 hover:text-yellow-600 transition-all">
                {faq.question}
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </AccordionTrigger>
              <AccordionContent className="p-4 text-gray-600 text-sm border-t border-gray-200">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
