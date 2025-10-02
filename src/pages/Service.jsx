import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import webCreationImg from "../assets/images/landing-page.png";
import webMaintenanceImg from "../assets/images/main.png";
import seoImg from "../assets/images/seo.png";
import resImg from "../assets/images/responsive.png";
import dashboardImg from "../assets/images/dashboard.png";
import whatsappImg from "../assets/images/whatsapp.png";
import chatbotImg from "../assets/images/chatbot.png";

const aiToolsServices = [
  {
    title: "Dashboard of Website",
    desc: "Interactive and real-time dashboards to monitor your website performance.",
    img: dashboardImg,
  },
  {
    title: "WhatsApp Automation",
    desc: "Automate messaging, notifications, and customer interactions via WhatsApp.",
    img: whatsappImg,
  },
  {
    title: "Chatbot",
    desc: "Intelligent chatbots to engage users and provide instant support on your platform.",
    img: chatbotImg,
  },
];

const services = [
  {
    title: "Website Creation",
    desc: "We design and develop modern, responsive, and user-friendly websites tailored to your business needs.",
    img: webCreationImg,
  },
  {
    title: "Website Maintenance",
    desc: "We keep your website secure, updated, and fully functional so you never miss an opportunity.",
    img: webMaintenanceImg,
  },
  {
    title: "SEO",
    desc: "Our SEO strategies help your website rank higher in search engines and attract more visitors.",
    img: seoImg,
  },
  {
    title: "Responsive Design",
    desc: "We make sure your website looks good in mobile view as good as it looks in laptop/pc.",
    img: resImg,
  },
];

export default function Service({ pricingHover }) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // WhatsApp handler
  const openWhatsApp = () => {
    const number = "919302754600"; // India number with country code
    const message = encodeURIComponent("Hi! I want to know more about your services.");
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  };

  return (
    <div className="w-screen bg-black relative overflow-hidden">
      {/* Section Header */}
      <div className="w-full py-5 px-5 md:px-20 flex flex-col justify-center">
        <h1 id="we-offer" className="text-[#5331a1] text-5xl underline md:text-8xl">
          WE OFFER.
        </h1>
      </div>
      <hr className="w-[60%] h-[1px] bg-[#503379]" />

      <div className="w-full py-5 px-5 md:px-20 flex flex-col justify-center">
        <h1
          className="font-bold text-3xl mt-3 bg-clip-text text-transparent bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://st4.depositphotos.com/6239660/23724/i/450/depositphotos_237240892-stock-photo-liquid-abstract-pattern-proton-purple.jpg')",
          }}
        >
          WEB SERVICE
        </h1>

        {/* Service Cards */}
        <div className="cards mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              onClick={openWhatsApp} // Click opens WhatsApp
              className="group relative w-full h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              {!isMobile && (
                <div className="absolute inset-0 bg-purple-800/10 backdrop-blur-md border border-white/20 rounded-xl transition duration-500"></div>
              )}
              <div
                className={`absolute inset-0 bg-cover bg-center transition duration-700 ${
                  !isMobile ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
                style={{ backgroundImage: `url(${service.img})` }}
              ></div>
              <div
                className={`absolute inset-0 transition duration-700 ${
                  !isMobile
                    ? "bg-black/50 opacity-0 group-hover:opacity-100"
                    : "bg-black/40 opacity-100"
                }`}
              ></div>
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-2 opacity-90">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Tools Cards */}
      <div className="w-full py-5 px-5 md:px-20 flex flex-col justify-center">
        <h1
          className="font-bold text-3xl mt-3 bg-clip-text text-transparent bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://st4.depositphotos.com/6239660/23724/i/450/depositphotos_237240892-stock-photo-liquid-abstract-pattern-proton-purple.jpg')",
          }}
        >
          AI TOOLS SERVICE
        </h1>

        <div className="cards mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiToolsServices.map((service, i) => (
            <div
              key={i}
              onClick={openWhatsApp} // Click opens WhatsApp
              className="group relative w-full h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              {!isMobile && (
                <div className="absolute inset-0 bg-purple-800/10 backdrop-blur-md border border-white/20 rounded-xl transition duration-500"></div>
              )}
              <div
                className={`absolute inset-0 bg-cover bg-center transition duration-700 ${
                  !isMobile ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
                style={{ backgroundImage: `url(${service.img})` }}
              ></div>
              <div
                className={`absolute inset-0 transition duration-700 ${
                  !isMobile
                    ? "bg-black/50 opacity-0 group-hover:opacity-100"
                    : "bg-black/40 opacity-100"
                }`}
              ></div>
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-2 opacity-90">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Cursor */}
      {!isMobile && (
        <>
          <motion.div
            className="fixed top-0 left-0 pointer-events-none w-3 h-3 rounded-full bg-white z-50"
            animate={{ x: cursorPos.x - 1.5, y: cursorPos.y - 1.5 }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          />
          <motion.div
            className="fixed top-0 left-0 pointer-events-none flex items-center justify-center rounded-full text-white font-semibold z-50"
            animate={{
              x: pricingHover ? cursorPos.x - 24 : hovering ? cursorPos.x - 48 : cursorPos.x,
              y: pricingHover ? cursorPos.y - 24 : hovering ? cursorPos.y - 48 : cursorPos.y,
              width: pricingHover ? 48 : hovering ? 96 : 0,
              height: pricingHover ? 48 : hovering ? 96 : 0,
              opacity: pricingHover || hovering ? 1 : 0,
              borderRadius: "50%",
              backgroundColor: hovering && !pricingHover ? "black" : "transparent",
              border: "2px solid white",
            }}
            transition={{ type: "spring", stiffness: 80, damping: 18, mass: 0.5 }}
          >
            {hovering && !pricingHover && "Click Me"}
          </motion.div>
        </>
      )}
    </div>
  );
}
