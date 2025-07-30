"use client";

import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "./PhoneInput";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ReferralSection() {
  const { control } = useFormContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle>추천인 정보 (선택 사항)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6">
          {/* 최상위관리자 정보 */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">최상위관리자 정보</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={control}
                name="referralManagerBranch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>본부</FormLabel>
                    <FormControl>
                      <Input placeholder="XX본부" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="referralManagerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>성함</FormLabel>
                    <FormControl>
                      <Input placeholder="김O수" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="referralManagerPosition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>직책</FormLabel>
                    <FormControl>
                      <Input placeholder="본부장" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="md:col-span-3">
                <FormField
                  control={control}
                  name="referralManagerPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>연락처</FormLabel>
                      <FormControl>
                        <PhoneInput placeholder="010-1234-5678" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          {/* 추천인 정보 */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">추천인 정보</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={control}
                name="referralPersonName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>성함</FormLabel>
                    <FormControl>
                      <Input placeholder="박O민" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="referralPersonPosition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>직책</FormLabel>
                    <FormControl>
                      <Input placeholder="팀장" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="md:col-span-2">
                <FormField
                  control={control}
                  name="referralPersonPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>연락처</FormLabel>
                      <FormControl>
                        <PhoneInput placeholder="010-1234-5678" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
