"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <footer className="relative md:fixed md:bottom-0 md:left-0 md:right-0 bg-gradient-to-r from-blue-600/90 to-blue-700/90 backdrop-blur-sm text-white py-3 md:py-5 z-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-12 text-center">
          <motion.div animate={pulseAnimation} className="flex items-center gap-3">
            <span className="text-lg md:text-xl font-bold">1기 접수시작</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-base md:text-lg font-medium">
              2025년 08월 01일
            </span>
          </motion.div>
          <motion.div animate={pulseAnimation} className="flex items-center gap-3">
            <span className="text-lg md:text-xl font-bold">1기 접수마감</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-base md:text-lg font-medium">
              2025년 08월 29일
            </span>
          </motion.div>
        </div>
        <div className="text-center text-sm md:text-base text-white/70 mt-2">
          * 30명 모집 완료 시 조기 마감될 수 있습니다.
        </div>
      </div>
    </footer>
  );
}
