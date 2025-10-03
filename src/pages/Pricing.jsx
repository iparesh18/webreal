import React from "react";

const Pricing = React.memo(({ setPricingHover }) => {
  const plans = [
    {
      title: "Basic",
      price: "₹1,999",
      features: [
        "3 Page Website",
        "Basic SEO Set-up",
        "GitHub/Vercel Deployment",
        "1 Month Free Maintenance",
      ],
    },
    {
      title: "Pro",
      price: "₹4,999",
      features: [
        "6 Page Website",
        "Advanced SEO Set-up",
        "Custom Domain + Hosting",
        "3 Months Free Support",
      ],
    },
    {
      title: "Custom",
      price: "₹9,999",
      features: [
        "Custom Pages",
        "Premium SEO & Analytics",
        "Custom Dashboard/Features",
        "6 Months Free Support",
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
              className={`flex flex-col justify-between h-[550px] p-8 text-white backdrop-blur-lg border rounded-2xl shadow-lg
                ${
                  plan.title === "Pro"
                    ? "bg-purple-600/10 border-purple-400 shadow-2xl scale-105 transform transition-all duration-300"
                    : "bg-white/20 border-white"
                }`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-4xl font-bold mb-6">
                  {plan.price}
                  <span className="text-lg font-neue-light">/Pay-Once</span>
                </p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f, i) => (
                    <li key={i}>✔ {f}</li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/919302754600"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-[#000000] text-white py-3 px-6 rounded-lg hover:bg-[#8e3bc6] text-center"
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
