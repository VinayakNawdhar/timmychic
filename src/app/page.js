"use client";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/bg-01.png"
          alt="Timmy Chic luxury fashion"
          className="w-full h-full object-cover object-center blur-sm brightness-50"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/60" />
      </div>

      <main className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-light mb-3 text-white tracking-wide">
            Timmy Chic
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto mb-6"
          />
          <p className="text-xl sm:text-2xl text-[#f8f6f0] font-light tracking-[0.2em] italic">
            Exclusively Yours. Distinctly Different.
          </p>
        </motion.div>

        {/* Redesigned Feature Section */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="max-w-4xl mx-auto mb-20"
        >
          {/* First Feature - Left Aligned */}
          <motion.div
            variants={slideUp}
            className="flex flex-col md:flex-row items-center mb-12 group"
          >
            <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <h3 className="font-serif text-3xl md:text-4xl text-[#c9a961] mb-4 tracking-wide">
                  Premium Craftsmanship
                </h3>
                <div className="w-16 h-[1px] bg-[#c9a961] mx-auto md:mx-0 mb-4" />
                <p className="text-gray-200 leading-relaxed text-base max-w-md mx-auto md:mx-0">
                  Meticulously tailored from the finest fabrics with uncompromising
                  attention to detail and luxury finishing.
                </p>
              </motion.div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-24 h-24 bg-gradient-to-br from-[#c9a961]/20 to-[#c9a961]/5 rounded-full border border-[#c9a961]/30 flex items-center justify-center backdrop-blur-sm"
              >
                <div className="w-8 h-8 bg-[#c9a961]/40 rounded-full" />
              </motion.div>
            </div>
          </motion.div>

          {/* Second Feature - Right Aligned */}
          <motion.div
            variants={slideUp}
            className="flex flex-col md:flex-row-reverse items-center mb-12 group"
          >
            <div className="md:w-1/2 text-center md:text-right mb-6 md:mb-0">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <h3 className="font-serif text-3xl md:text-4xl text-[#c9a961] mb-4 tracking-wide">
                  Exclusive Designs
                </h3>
                <div className="w-16 h-[1px] bg-[#c9a961] mx-auto md:ml-auto md:mr-0 mb-4" />
                <p className="text-gray-200 leading-relaxed text-base max-w-md mx-auto md:ml-auto md:mr-0">
                  Limited collections that embody contemporary style with
                  sophisticated elegance for the discerning individual.
                </p>
              </motion.div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                whileHover={{ rotate: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-24 h-24 bg-gradient-to-br from-[#c9a961]/20 to-[#c9a961]/5 rounded-full border border-[#c9a961]/30 flex items-center justify-center backdrop-blur-sm"
              >
                <div className="w-6 h-6 border-2 border-[#c9a961]/40 rounded-sm rotate-45" />
              </motion.div>
            </div>
          </motion.div>

          {/* Third Feature - Center Aligned */}
          <motion.div
            variants={slideUp}
            className="text-center group"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <h3 className="font-serif text-3xl md:text-4xl text-[#c9a961] mb-4 tracking-wide">
                Refined Luxury
              </h3>
              <div className="w-16 h-[1px] bg-[#c9a961] mx-auto mb-4" />
              <p className="text-gray-200 leading-relaxed text-base max-w-md mx-auto mb-6">
                A statement of taste and confidence, delivering understated
                luxury that sets you apart with quiet distinction.
              </p>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 bg-gradient-to-br from-[#c9a961]/20 to-[#c9a961]/5 rounded-full border border-[#c9a961]/30 flex items-center justify-center backdrop-blur-sm mx-auto"
              >
                <div className="w-4 h-4 bg-[#c9a961]/40 rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Launching Soon Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
          className="text-center relative"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(201, 169, 97, 0.3)",
                "0 0 40px rgba(201, 169, 97, 0.5)",
                "0 0 20px rgba(201, 169, 97, 0.3)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block"
          >
            <motion.span
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 50px rgba(201, 169, 97, 0.6)"
              }}
              className="inline-block px-12 py-6 rounded border border-[#c9a961]/40 bg-gradient-to-r from-black/40 to-black/30 backdrop-blur-lg text-2xl font-light text-white tracking-[0.15em] relative overflow-hidden"
            >
              <motion.div
                animate={{ x: [-100, 400] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              />
              <span className="font-serif text-[#c9a961] relative z-10">Launching Soon</span>
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16 text-white/60 text-center max-w-lg text-xs tracking-wider"
        >
          © {new Date().getFullYear()} Timmy Chic. Exclusive Fashion Label. All
          Rights Reserved.
        </motion.p>
      </main>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-to-bl from-[#c9a961]/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 1.8, duration: 2 }}
        className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-[#c9a961]/20 to-transparent rounded-full blur-3xl"
      />
    </div>
  );
}
