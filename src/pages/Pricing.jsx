import React from "react";
import { Globe, Rocket, Crown, CheckCircle2 } from "lucide-react";

const Pricing = React.memo(({ setPricingHover }) => {
  const plans = [
    {
      title: "Basic",
      icon: <Globe size={36} className="text-purple-400 mb-4" />,
      price: "$79",
      features: [
        "3 Page Responsive Website",
        "WhatsApp Chat Button Integration",
        "Business Email Setup (1 Email ID)",
        "Basic SEO + Google Analytics",
        "1 Free Revision",
        "7 Days Post-Launch Support",
        "Domain Cost Additional",
      ],
    },
    {
      title: "Gold",
      icon: <Rocket size={36} className="text-yellow-400 mb-4" />,
      price: "$199",
      features: [
        "6 Page Custom Website",
        "WhatsApp Chat + Contact Form",
        "Business Email Setup (2 Email IDs)",
        "Standard SEO + Google Analytics + Search Console",
        "2 Free Revisions",
        "30 Days Post-Launch Support",
        "Domain Cost Additional",
      ],
    },
    {
      title: "Pro",
      icon: <Crown size={36} className="text-pink-400 mb-4" />,
      price: "$499",
      features: [
        "Up to 10 Pages or Dynamic Website",
        "WhatsApp + Lead Capture Integration",
        "Business Email Setup (up to 5 IDs)",
        "Advanced SEO + Tag Manager + Analytics",
        "3 Free Revisions",
        "Priority Support (60 Days)",
        "Domain Cost Additional",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-tr from-[#5e22a3] via-[#000] to-[#37174f] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-8xl font-gilroy-light underline text-start text-white mb-12">
          Our Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              onMouseEnter={() => setPricingHover(true)}
              onMouseLeave={() => setPricingHover(false)}
              className={`flex flex-col justify-between h-full p-8 text-white backdrop-blur-lg border rounded-2xl shadow-lg transition-all duration-300
                ${
                  plan.title === "Pro"
                    ? "bg-purple-600/10 border-purple-400 shadow-2xl scale-105"
                    : "bg-white/20 border-white"
                }`}
            >
              {/* Card Top */}
              <div className="flex flex-col flex-grow">
                <div className="flex flex-col items-start">
                  {plan.icon}
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                </div>

                <p className="text-4xl font-bold mb-6">
                  {plan.price}
                  <span className="text-lg font-neue-light"> / Pay Once</span>
                </p>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-green-400 mt-1" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Bottom */}
              <a
                href="https://wa.me/919302754600"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#000000] text-white py-3 px-6 rounded-lg hover:bg-[#8e3bc6] text-center transition-all"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Pricing;
