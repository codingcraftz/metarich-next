"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-[90vh] flex items-center justify-center bg-white relative overflow-hidden">
        {/* Curved background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-blue-100" />
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute right-0 top-0 w-3/4 h-full bg-[url('/pattern.png')] opacity-5"
            style={{
              clipPath: "ellipse(70% 100% at 70% 0%)",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center relative z-10 px-4 md:px-8 lg:px-12 xl:px-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 sm:mb-20"
          >
            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[8rem] font-bold tracking-tight leading-none text-blue-800">
              NEXT
            </h1>
            <h1 className="text-[3rem] sm:text-[4rem] md:text-[7rem] font-bold tracking-tight leading-none text-blue-900">
              Boot
            </h1>
            <h1 className="text-[3.2rem] sm:text-[4.5rem] md:text-[7.5rem] font-bold tracking-tight leading-none text-blue-950">
              Camp
            </h1>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            세대와 세대를 잇다, 보험의 미래를 잇다.
          </motion.p>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card className="bg-white/80 backdrop-blur border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl md:text-3xl text-blue-900 mb-3 sm:mb-4">
                  GI - Generation Integration (세대통합) 프로젝트
                </CardTitle>
                <CardDescription className="text-base sm:text-lg md:text-xl text-gray-700">
                  모든 세대를 아우르는 진짜 핵심인재 양성 과정
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  넥스트 부트캠프는 보험의 &apos;지금&apos;과 &apos;다음 세대&apos;를 연결하는
                  <br className="hidden sm:block" />
                  GA의 길, 메타리치의 미래형 성장 플랫폼입니다.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto py-12 sm:py-20 px-4 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-900 tracking-tight">
            NEXT·GENERATION·INTEGRATION
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            {
              title: "NEXT",
              desc: "다음 세대를 위한 혁신적인 보험 플랫폼",
              gradient: "from-[#2B4C8C] to-[#1E3A8A]",
            },
            {
              title: "GENERATION",
              desc: "세대를 아우르는 포용적인 성장",
              gradient: "from-[#1E40AF] to-[#1E3A8A]",
            },
            {
              title: "INTEGRATION",
              desc: "전통과 혁신의 조화로운 통합",
              gradient: "from-[#1E3A8A] to-[#172554]",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
              <div className="relative p-6 md:p-8 h-full flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-base md:text-lg text-blue-100">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
