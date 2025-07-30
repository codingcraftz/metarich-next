"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Clock, Calendar, Users, BookOpen, GraduationCap, Target } from "lucide-react";
import { curriculumData } from "./data";

const WeekIcon = ({ week }) => {
  switch (week) {
    case "1WEEK":
      return <BookOpen className="w-4 h-4 md:w-5 md:h-5" />;
    case "2WEEK":
      return <Target className="w-4 h-4 md:w-5 md:h-5" />;
    case "3WEEK":
      return <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />;
    default:
      return null;
  }
};

const DaySchedule = ({ day }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="mb-6 md:mb-8"
    >
      <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="bg-gradient-to-r from-blue-500/90 to-blue-600/90 p-4 md:p-8 text-white">
          <div className="flex items-center gap-2 md:gap-3 mb-2">
            <Calendar className="w-5 h-5 md:w-6 md:h-6" />
            <h3 className="text-lg md:text-2xl font-bold">{day.date}</h3>
          </div>
          <p className="text-base md:text-xl text-white/90">{day.title}</p>
        </div>
        <CardContent className="p-4 md:p-8 bg-white">
          <div className="space-y-4 md:space-y-6">
            {day.schedule.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row gap-3 md:gap-8 p-4 md:p-6 rounded-xl transition-all duration-300 hover:bg-blue-50">
                  <div className="md:w-48 flex-shrink-0">
                    <div className="flex items-center gap-2 text-blue-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm md:text-base font-medium">{item.time}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    {item.instructor && (
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm md:text-base font-medium text-gray-700">
                          {item.instructor}
                        </span>
                      </div>
                    )}
                    <ul className="space-y-3">
                      {item.contents.map((content, cidx) => (
                        <li
                          key={cidx}
                          className="flex items-start gap-3 text-gray-600 group-hover:text-gray-900"
                        >
                          <span className="w-1.5 h-1.5 md:w-2 md:h-2 mt-2 rounded-full bg-blue-300 flex-shrink-0" />
                          <span className="text-sm md:text-base leading-relaxed">{content}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function CurriculumPage() {
  const [activeWeek, setActiveWeek] = useState("1WEEK");

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/50 to-blue-100/50">
      <div className="container mx-auto py-8 md:py-12 px-4 md:px-8 lg:px-12 xl:px-16 max-w-[1920px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto"
        >
          <div className="text-center mb-8 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">NEXT BOOTCAMP</h1>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800">커리큘럼</h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto"
            >
              3주간의 체계적인 교육을 통해 보험영업의 전문가로 성장합니다
            </motion.p>
          </div>

          <Tabs
            value={activeWeek}
            onValueChange={setActiveWeek}
            className="space-y-8 md:space-y-12"
          >
            <div className="sticky top-0 bg-white/80 backdrop-blur-sm py-2 md:py-4 z-10">
              <TabsList className="w-full grid grid-cols-3 h-auto p-1 bg-blue-50/50">
                {curriculumData.map((week) => (
                  <TabsTrigger
                    key={week.week}
                    value={week.week}
                    className="py-3 md:py-8 data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-300"
                  >
                    <div className="flex flex-col items-center gap-1 md:gap-3">
                      <WeekIcon week={week.week} />
                      <div className="text-center">
                        <div className="font-bold text-sm md:text-xl">{week.week}</div>
                        <div className="hidden md:block text-sm md:text-base font-normal mt-1 px-2">
                          {week.title}
                        </div>
                        <div className="md:hidden text-[10px] font-normal mt-0.5 px-1">
                          {week.week === "1WEEK" && "영업 DNA"}
                          {week.week === "2WEEK" && "경쟁력 확보"}
                          {week.week === "3WEEK" && "전문가 완성"}
                        </div>
                      </div>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {curriculumData.map((week) => (
              <TabsContent key={week.week} value={week.week}>
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl md:rounded-2xl p-6 md:p-8 mb-8 md:mb-12 shadow-lg">
                  <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">{week.title}</h2>
                  <p className="text-base md:text-lg text-white/90">{week.subtitle}</p>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={week.week}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {week.days.map((day) => (
                      <DaySchedule key={day.date} day={day} />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
