"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GreetingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Image Section */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-8"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/ceo_image.jpg"
                  alt="NEXT 부트캠프 위원장 김윤성"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                  style={{ objectPosition: "center 15%" }}
                  priority
                />
              </div>
              <div className="mt-6 text-center">
                <h2 className="text-2xl font-bold text-blue-900">김윤성</h2>
                <p className="text-gray-600 mt-1">NEXT 부트캠프 위원장</p>
              </div>
            </motion.div>
          </div>

          {/* Message Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-7 space-y-6"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">위원장 인사말</h1>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                오늘날 보험산업은 그 어느 때보다 큰 변화의 기로에 서 있습니다. 세대 간 단절, 디지털
                전환, 그리고 새로운 금융 패러다임이라는 도전 앞에서, 우리는 혁신적인 해답을 찾아야
                할 시점에 와있습니다.
              </p>

              <p>
                NEXT 부트캠프는 이러한 시대적 요구에 대한 우리의 답변입니다. 우리는 '세대통합'이라는
                키워드에 주목합니다. 젊은 세대의 디지털 감각과 기성세대의 풍부한 경험이 만날 때,
                진정한 혁신이 시작된다고 믿기 때문입니다.
              </p>

              <p>
                이 곳은 단순한 교육 프로그램이 아닙니다. 세대와 세대를 잇고, 전통과 혁신을 연결하는
                플랫폼입니다. 우리는 보험의 본질인 '신뢰'와 '상호호혜'의 가치를 지키면서도, 디지털
                시대에 걸맞은 새로운 방식으로 이를 구현하고자 합니다.
              </p>

              <p>
                NEXT 부트캠프를 통해 우리는 세대를 아우르는 GA의 새로운 미래를 제시합니다. 여기서
                배출되는 인재들은 단순한 보험 전문가가 아닌, 세대 간 가교 역할을 하는 통합형 인재로
                성장할 것입니다.
              </p>

              <p>
                메타리치는 이들에게 최고의 교육 환경과 기술적 지원을 아끼지 않을 것입니다. 우리의
                플랫폼은 전통적인 보험 지식과 최신 디지털 기술이 조화롭게 어우러진 미래형 성장
                생태계입니다.
              </p>

              <p className="font-medium text-blue-900">
                이제 우리는 함께 보험의 새로운 장을 열어갈 것입니다. NEXT 부트캠프는 여러분의 도전을
                기다립니다.
              </p>

              <div className="text-right mt-12">
                <p className="text-xl font-bold text-blue-900">NEXT 부트캠프 위원장</p>
                <p className="text-2xl font-bold text-blue-900 mt-2">김윤성</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
