"use client";

import { useFormContext } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Info } from "lucide-react";

export function QualificationSection() {
  const { register, control } = useFormContext();

  const qualificationItems = [
    { id: "age", label: "만 21세 이상 ~ 49세 미만" },
    { id: "credit", label: "신용상 결격사유가 없는 자" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          자격요건
          <span className="text-red-500">*</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex gap-2 items-start text-blue-700 mb-2">
            <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p className="text-sm">
              아래 자격요건을 모두 충족하는 경우에만 체크해 주세요. 모든 항목은 필수 체크사항입니다.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {qualificationItems.map((item) => (
            <div key={item.id} className="flex items-start space-x-2">
              <Checkbox
                id={`qualifications.${item.id}`}
                {...register(`qualifications.${item.id}`)}
              />
              <label
                htmlFor={`qualifications.${item.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium inline-flex items-center">
            보험영업 경력 (개월)
            <span className="text-red-500 ml-0.5">*</span>
          </label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              {...register("insurance_experience")}
              min="0"
              max="6"
              className="w-full"
              onInput={(e) => {
                let value = e.target.value.replace(/^0+/, "");
                if (value === "") value = "0";
                if (parseInt(value) > 6) value = "6";
                e.target.value = value;
              }}
            />
            <span className="text-sm text-gray-500 whitespace-nowrap">(6개월 미만)</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            * 보험영업 경력이 없는 경우 0을 입력해 주세요.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
