"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BirthDateInput } from "../application/components/BirthDateInput";
import { PhoneInput } from "../application/components/PhoneInput";
import { ResultModal } from "./components/ResultModal";

const initialFormData = {
  name: "",
  birthDate: "",
  phone: "",
};

export default function ResultsPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const supabase = createClientComponentClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const { data, error } = await supabase
        .from("applicants")
        .select("status, created_at")
        .eq("name", formData.name)
        .eq("birth_date", formData.birthDate)
        .eq("phone", formData.phone)
        .single();

      if (error && error.code === "PGRST116") {
        setResult({ status: "not_found" });
      } else if (error) {
        throw error;
      } else {
        setResult({
          status: data.status,
          appliedAt: new Date(data.created_at).toLocaleDateString(),
        });
      }
      setIsModalOpen(true);
    } catch (err) {
      console.error("Error fetching application result:", err);
      setError("조회 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setResult(null);
    setError(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container max-w-md mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">합격 조회</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    성명<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <Input
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    생년월일<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <BirthDateInput
                    value={formData.birthDate}
                    onChange={(value) => setFormData((prev) => ({ ...prev, birthDate: value }))}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    연락처<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <PhoneInput
                    value={formData.phone}
                    onChange={(value) => setFormData((prev) => ({ ...prev, phone: value }))}
                  />
                </div>
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <div className="flex gap-2">
                <Button type="submit" className="flex-1" disabled={isLoading}>
                  {isLoading ? "조회 중..." : "조회하기"}
                </Button>
                <Button type="button" variant="outline" onClick={handleReset}>
                  초기화
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      <ResultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} result={result} />
    </div>
  );
}
