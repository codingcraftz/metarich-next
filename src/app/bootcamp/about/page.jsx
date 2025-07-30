"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const images = Array.from({ length: 9 }, (_, i) => ({
    src: `/bootcamp_${i + 1}.jpeg`,
    alt: `NEXT 부트캠프 이미지 ${i + 1}`,
  }));

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* 부트캠프 소개 내용 */}
        <Card>
          <CardContent className="pt-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl font-bold text-center mb-8">NEXT Boot Camp</h1>
              <p className="text-xl text-center text-gray-600 mb-4">
                "세대와 세대를 잇다, 보험의 미래를 잇다"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  Generation Integration(세대통합) 프로젝트
                </h2>
                <p className="text-gray-600">모든 세대를 아우르는 진짜 핵심인재 양성 과정</p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-700">
                  넥스트 부트캠프는 보험의 '지금'과 '다음 세대'를 연결하는 GA의 길,
                  <br />
                  메타리치의 미래형 성장 플랫폼입니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center p-6 bg-blue-50 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">NEXT</h3>
                  <p className="text-gray-600">미래를 향한 도약</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center p-6 bg-green-50 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-green-700 mb-2">GENERATION</h3>
                  <p className="text-gray-600">세대를 아우르는 통합</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="text-center p-6 bg-purple-50 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">INTEGRATION</h3>
                  <p className="text-gray-600">혁신적인 융합</p>
                </motion.div>
              </div>
            </motion.div>
          </CardContent>
        </Card>

        {/* 이미지 갤러리 */}
        <div className="space-y-8">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
