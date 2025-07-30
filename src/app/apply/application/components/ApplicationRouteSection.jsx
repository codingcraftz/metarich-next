"use client";

import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ApplicationRouteSection() {
  const { control } = useFormContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle>신청 경로</CardTitle>
      </CardHeader>
      <CardContent>
        <FormField
          control={control}
          name="applicationRoute"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <span className="inline-flex items-center">
                  신청경로<span className="text-red-500 ml-0.5">*</span>
                </span>
              </FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="신청경로를 선택하세요" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>추천</SelectLabel>
                    <SelectItem value="family">가족</SelectItem>
                    <SelectItem value="acquaintance">지인</SelectItem>
                    <SelectItem value="alumni">부트캠프 수료생</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>일반</SelectLabel>
                    <SelectItem value="sns">SNS</SelectItem>
                    <SelectItem value="advertisement">광고</SelectItem>
                    <SelectItem value="news">기사</SelectItem>
                    <SelectItem value="search">검색</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
