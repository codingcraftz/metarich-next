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
      className="mb-6"
    >
      <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="bg-gradient-to-r from-blue-500/90 to-blue-600/90 p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5" />
            <h3 className="text-lg font-bold">{day.date}</h3>
          </div>
          <p className="text-base text-white/90">{day.title}</p>
        </div>
        <CardContent className="p-4 bg-white">
          <div className="space-y-4">
            {day.schedule.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-blue-50">
                  <div className="md:w-36 flex-shrink-0">
                    <div className="flex items-center gap-2 text-blue-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.time}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    {item.instructor && (
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium text-gray-700">{item.instructor}</span>
                      </div>
                    )}
                    <ul className="space-y-2">
                      {item.contents.map((content, cidx) => (
                        <li
                          key={cidx}
                          className="flex items-start gap-2 text-gray-600 group-hover:text-gray-900"
                        >
                          <span className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-300 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{content}</span>
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
      <div className="container mx-auto py-8 px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">NEXT BOOTCAMP</h1>
              <h2 className="text-xl md:text-2xl font-bold text-blue-800">커리큘럼</h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-base text-gray-600 max-w-2xl mx-auto"
            >
              3주간의 체계적인 교육을 통해 보험영업의 전문가로 성장합니다
            </motion.p>
          </div>

          <Tabs value={activeWeek} onValueChange={setActiveWeek} className="space-y-6">
            <div className="sticky top-0 bg-white/80 backdrop-blur-sm py-2 z-10">
              <TabsList className="w-full grid grid-cols-3 h-auto p-1 bg-blue-50/50">
                {curriculumData.map((week) => (
                  <TabsTrigger
                    key={week.week}
                    value={week.week}
                    className="py-3 data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-300"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <WeekIcon week={week.week} />
                      <div className="text-center">
                        <div className="font-bold text-sm">{week.week}</div>
                        <div className="hidden md:block text-xs font-normal mt-0.5 px-1">
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
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-5 mb-6 shadow-lg">
                  <h2 className="text-lg md:text-xl font-bold mb-1">{week.title}</h2>
                  <p className="text-sm md:text-base text-white/90">{week.subtitle}</p>
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
