import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const WhyUs = () => {
  const faqs = [
    {
      question: "Why choose our web services?",
      answer:
        "We provide modern, responsive, and user-friendly websites with high performance and reliability tailored to your business needs.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes! We offer support and maintenance services to ensure your website runs smoothly and remains updated.",
    },
    {
      question: "Can I customize my plan?",
      answer:
        "Absolutely! Our services are flexible and can be tailored according to your business requirements and budget.",
    },
    {
      question: "Do you offer SEO and digital marketing?",
      answer:
        "Yes, our team implements advanced SEO strategies and digital marketing solutions to help your business grow online.",
    },
  ];

  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 md:px-20">
      <h2 className="text-5xl sm:text-5xl md:text-7xl font-neue-light underline mb-8 sm:mb-12 text-center sm:text-start">
        Why Choose Us?
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <Disclosure key={index} as="div" className="border border-white/20 rounded-xl">
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full text-left px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center font-semibold text-base sm:text-lg md:text-xl bg-purple-900/30 hover:bg-purple-900/50 transition">
                  {faq.question}
                  <ChevronUpIcon
                    className={`ml-2 h-5 w-5 text-white transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 sm:px-6 py-2 sm:py-4 text-white/90">
                  {faq.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
