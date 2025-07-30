"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export function QualificationGuide() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>지원자격 안내</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* 필수 자격요건 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">필수 자격요건</h3>
            <ul className="space-y-3">
              {[
                "만 21세 이상 ~ 49세 미만",
                "신용상 결격사유가 없는 자",
                "보험영업 경력 6개월 미만인 자",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* 제출서류 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">제출서류</h3>
            <ul className="space-y-3">
              {[
                "이력서 (당사양식)",
                "자기소개서 (당사양식)",
                "추천서 (선택사항)",
                "병적증명서 (해당자에 한함)",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <Check className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* 안내사항 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-6 p-4 bg-gray-50 rounded-lg"
          >
            <p className="text-sm text-gray-600">
              * 모든 제출 서류는 PDF 형식으로 제출해 주시기 바랍니다.
              <br />* 지원서 작성 시 허위사실 기재나 제출서류 위조 시 합격이 취소될 수 있습니다.
            </p>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
}
