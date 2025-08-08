"use client";

import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneInput } from "./PhoneInput";
import { BirthDateInput } from "./BirthDateInput";
import { INSURANCE_CERTIFICATES } from "@/constants/certificates";

export function BasicInfoSection() {
  const { control } = useFormContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle>기본 정보</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="inline-flex items-center">
                    성명<span className="text-red-500 ml-0.5">*</span>
                  </span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="홍길동" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="birthDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="inline-flex items-center">
                    생년월일<span className="text-red-500 ml-0.5">*</span>
                  </span>
                </FormLabel>
                <FormControl>
                  <BirthDateInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="inline-flex items-center">
                    성별<span className="text-red-500 ml-0.5">*</span>
                  </span>
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="성별을 선택해주세요" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">남성</SelectItem>
                    <SelectItem value="female">여성</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="militaryStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="inline-flex items-center">
                    병역사항<span className="text-red-500 ml-0.5">*</span>
                  </span>
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="병역사항을 선택해주세요" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="completed">군필</SelectItem>
                    <SelectItem value="serving">복무중</SelectItem>
                    <SelectItem value="exempted">면제</SelectItem>
                    <SelectItem value="none">해당없음</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="inline-flex items-center">
                    연락처<span className="text-red-500 ml-0.5">*</span>
                  </span>
                </FormLabel>
                <FormControl>
                  <PhoneInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="inline-flex items-center">
                    이메일<span className="text-red-500 ml-0.5">*</span>
                  </span>
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder="example@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="inline-flex items-center">
                    거주지역<span className="text-red-500 ml-0.5">*</span>
                  </span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="서울특별시 강남구" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                      <SelectValue placeholder="신청경로를 선택해주세요" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="family">가족</SelectItem>
                    <SelectItem value="friend">지인</SelectItem>
                    <SelectItem value="bootcamp_alumni">부트캠프 수료생</SelectItem>
                    <SelectItem value="sns">SNS</SelectItem>
                    <SelectItem value="advertisement">광고</SelectItem>
                    <SelectItem value="article">기사</SelectItem>
                    <SelectItem value="search">검색</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="insuranceCertificates"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="inline-flex items-center">보유자격증</span>
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="보유자격증을 선택해주세요" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {INSURANCE_CERTIFICATES.map((cert) => (
                      <SelectItem key={cert.value} value={cert.value}>
                        {cert.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
