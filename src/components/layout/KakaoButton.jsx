"use client";

import { motion } from "framer-motion";

export default function KakaoButton() {
  return (
    <motion.a
      href="http://pf.kakao.com/_Bmixen"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 md:right-8 bottom-32 md:bottom-36 z-50 cursor-pointer"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="bg-[#FEE500] text-[#3A1D1D] font-medium rounded-full shadow-lg flex items-center justify-center px-5 py-3 gap-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.998 2.25c-5.386 0-9.748 3.438-9.748 7.678 0 2.696 1.794 5.065 4.488 6.417l-1.146 4.162c-.1.365.243.65.585.472l4.995-3.273c.264.027.533.04.804.04 5.386 0 9.748-3.438 9.748-7.678s-4.362-7.678-9.748-7.678h.022z" />
        </svg>
        <span className="text-sm md:text-base">문의하기</span>
      </div>
    </motion.a>
  );
}
