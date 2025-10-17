import { motion } from "framer-motion";
import founder from "../assets/team/founder.webp";
import marketing from "../assets/team/marketing.webp";
import client from "../assets/team/client.webp";
import ui from "../assets/team/designer.webp";

const team = [
  {
    name: "Paresh Shrivastava",
    role: "Founder & CEO",
    img: founder,
  },
  {
    name: "Mayank Dahare",
    role: "Co-Founder | Marketing Head",
    img: marketing,
  },
  {
    name: "Himanshu Sonkusre",
    role: "Co-Founder | UI/UX Head",
    img: ui,
  },
  {
    name: "Prashant Lilhare",
    role: "Co-Founder | Client Relation Head",
    img: client,
  },
];

export default function AboutUs() {
  return (
    <section className="relative bg-gradient-to-b from-[#000000] via-[#1a1a1a] to-[#1f073b] text-white py-24 px-4 md:px-12 overflow-x-hidden">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-neue-light text-center mb-16 md:mb-24 bg-gradient-to-r from-[#fbfbfb] via-[#aeacac] to-[#4A1981] bg-clip-text text-transparent"
      >
        The <span className="bg-[#4a1981] px-3 text-white rounded-lg">Faces</span> Behind WebReal
      </motion.h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-12 md:gap-20">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.5, once: false }}
            className={`flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-10 bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-lg border border-white/10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-sm sm:text-lg md:text-lg text-white bg-[#4a1981] inline pl-3 pr-3 py-1 rounded-lg">
                {member.role}
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-shrink-0">
              <motion.img
                src={member.img}
                alt={member.name}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-[#4A1981] shadow-xl"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
