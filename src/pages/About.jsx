import React from "react";
import founder from "../assets/team/founder.webp"
import marketing from "../assets/team/marketing.webp"
import client from "../assets/team/client.webp"
import ui from "../assets/team/designer.webp"

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

export default function AboutSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#000000] via-[#1a1a1a] to-[#2b0a50] text-white py-24 px-6 md:px-12">
      <h2 className="text-4xl md:text-6xl font-neue-light text-center mb-24 bg-gradient-to-r from-[#fbfbfb] via-[#aeacac] to-[#4A1981] bg-clip-text text-transparent">
        The <span className="bg-[#4a1981] px-3 text-white rounded-lg">Faces</span> Behind WebReal
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-20">
        {team.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center justify-between gap-10 bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/10`}
          >
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-lg text-white bg-[#4a1981] inline pl-3 pr-3 rounded-lg ">{member.role}</p>
            </div>

            {/* Image Section */}
            <div className="flex-shrink-0">
              <img
                src={member.img}
                alt={member.name}
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-[#4A1981] shadow-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
