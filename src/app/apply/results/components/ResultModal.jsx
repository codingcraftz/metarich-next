"use client";

import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PartyPopper, XCircle, Clock } from "lucide-react";

export function ResultModal({ isOpen, onClose, result }) {
  if (!result) return null;

  const getStatusContent = () => {
    switch (result.status) {
      case "accepted":
        return {
          icon: <PartyPopper className="w-16 h-16 text-green-500 animate-bounce" />,
          title: "축하합니다!",
          message: "NEXT 부트캠프 합격을 진심으로 축하드립니다.",
          description: "자세한 안내사항은 입력하신 연락처로 전달드릴 예정입니다.",
          color: "bg-green-50",
          borderColor: "border-green-200",
          textColor: "text-green-700",
        };
      case "rejected":
        return {
          icon: <XCircle className="w-16 h-16 text-red-500" />,
          title: "아쉽게도..",
          message: "이번에는 함께하지 못하게 되었습니다.",
          description: "더 좋은 기회로 다시 만나뵙기를 희망합니다.",
          color: "bg-red-50",
          borderColor: "border-red-200",
          textColor: "text-red-700",
        };
      case "pending":
        return {
          icon: <Clock className="w-16 h-16 text-blue-500" />,
          title: "검토중",
          message: "현재 지원서를 검토중입니다.",
          description: "결과 발표까지 조금만 더 기다려주세요.",
          color: "bg-blue-50",
          borderColor: "border-blue-200",
          textColor: "text-blue-700",
        };
      case "not_found":
        return {
          icon: <XCircle className="w-16 h-16 text-gray-500" />,
          title: "조회 결과",
          message: "지원 내역을 찾을 수 없습니다.",
          description: "입력하신 정보를 다시 한 번 확인해주세요.",
          color: "bg-gray-50",
          borderColor: "border-gray-200",
          textColor: "text-gray-700",
        };
      default:
        return null;
    }
  };

  const content = getStatusContent();
  if (!content) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="sr-only">지원 결과 조회</DialogTitle>
        </DialogHeader>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`p-6 rounded-lg ${content.color} border ${content.borderColor}`}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content.icon}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-2"
            >
              <h2 className={`text-2xl font-bold ${content.textColor}`}>{content.title}</h2>
              <p className={`text-xl font-semibold ${content.textColor}`}>{content.message}</p>
              <p className={`text-sm ${content.textColor}`}>{content.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4"
            >
              <p className="text-sm text-gray-500">지원일: {result.appliedAt}</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button onClick={onClose} variant="outline" className="mt-4">
                확인
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
