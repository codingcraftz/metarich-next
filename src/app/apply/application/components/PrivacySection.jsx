"use client";

import { useFormContext } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

export function PrivacySection() {
  const { control } = useFormContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle>개인정보 수집 및 이용 동의</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
            <p>
              1. 수집하는 개인정보 항목: 성명, 생년월일, 성별, 연락처, 이메일, 주소, 경력사항,
              자격사항
              <br />
              2. 개인정보의 수집 및 이용목적: 부트캠프 지원자 선발 및 관리
              <br />
              3. 개인정보의 보유 및 이용기간: 지원일로부터 1년
              <br />
              4. 동의를 거부할 권리가 있으며, 거부 시 부트캠프 지원이 제한될 수 있습니다.
            </p>
          </div>
          <FormField
            control={control}
            name="privacyAgreement"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-medium">
                    위 개인정보 수집 및 이용에 동의합니다. <span className="text-red-500">*</span>
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
