import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Mobile-first vertical "Our Process" with scroll-trigger reveal.
 * - Vertical on all screen sizes
 * - Line grows as you scroll to each step
 * - Each Step reports visibility to parent via onVisible callback
 */

const processSteps = [
  { title: "Analyze Requirements", desc: "We deeply analyze your needs and goals." },
  { title: "Select Technology", desc: "We choose the best stack for your project." },
  { title: "Gather Assets", desc: "Collecting visuals, logos, videos & content." },
  { title: "Design & Code", desc: "We design in Figma/Canva and bring it to life with code." },
];

function Step({ index, title, desc, onVisible }) {
  // threshold can be tweaked (0.45 works nicely for "when ~half visible")
  const [ref, inView] = useInView({ threshold: 0.45, triggerOnce: false });

  // report to parent when this step becomes in view
  React.useEffect(() => {
    if (inView) onVisible(index);
  }, [inView, index, onVisible]);

  return (
    <div ref={ref} className="w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-2xl p-5 mb-8 w-full sm:max-w-xl mx-auto shadow-md"
      >
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-pink-400 font-bold text-lg border border-zinc-800">
            {index + 1}
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-400 mt-1">{desc}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function OurProcessVertical() {
  // activeIndex = highest step index that is currently inView (0..n-1)
  const [activeIndex, setActiveIndex] = useState(-1);

  // callback from Step components
  const handleVisible = useCallback((index) => {
    // set to the largest index that reported visible to give progressive growth
    setActiveIndex((prev) => (index > prev ? index : index));
    // NOTE: if you want the line to shrink when scrolling back up, use:
    // setActiveIndex(index);
  }, []);

  // compute line fill percent (clamp between 0 and 100)
  const total = processSteps.length;
  const fillPercent = total > 0 ? Math.max(0, ((activeIndex + 1) / total) * 100) : 0;

  return (
    <section className="relative bg-black text-white py-16 px-4">
      <h2 className="text-5xl md:text-8xl md:text-center font-gilroy-light underline text-start text-white mb-12" >Our Process</h2>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line container (centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px]">
          {/* track */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[2px] bg-zinc-800 h-full rounded" />
          </div>

          {/* animated fill */}
          <motion.div
            style={{ height: `${fillPercent}%` }}
            initial={{ height: 0 }}
            animate={{ height: `${fillPercent}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[4px] bg-gradient-to-t from-pink-500 to-orange-400 rounded"
          />
        </div>

        {/* Steps list (stacked vertically) */}
        <div className="relative space-y-6">
          {processSteps.map((step, i) => (
            <div key={i} className="relative">
              {/* connector dot aligned with vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0">
                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    i <= activeIndex ? "bg-pink-400 border-pink-400" : "bg-zinc-900 border-zinc-700"
                  } transform -translate-x-1/2`}
                />
              </div>

              {/* Step card */}
              <Step index={i} title={step.title} desc={step.desc} onVisible={handleVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
