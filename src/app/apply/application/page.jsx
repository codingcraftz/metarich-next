"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { formSchema } from "./schema";
import { BasicInfoSection } from "./components/BasicInfoSection";
import { QualificationSection } from "./components/QualificationSection";
import { ReferralSection } from "./components/ReferralSection";
import { FileUploadSection } from "./components/FileUploadSection";
import { PrivacySection } from "./components/PrivacySection";
import { QualificationGuide } from "./components/QualificationGuide";

export default function ApplicationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const supabase = createClientComponentClient();

  const generateSafeFileName = (originalName) => {
    const ext = originalName.split(".").pop().toLowerCase();
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    return `${timestamp}_${randomString}.${ext}`;
  };

  const generateSafeFolderName = (email) => {
    return email.replace(/[^a-zA-Z0-9]/g, "");
  };

  const methods = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      birthDate: "",
      gender: "",
      militaryStatus: "",
      phone: "",
      email: "",
      address: "",
      applicationRoute: "",
      insurance_certificates: "none",
      qualifications: { age: false, credit: false },
      insurance_experience: 0,
      referral_manager_branch: "",
      referral_manager_name: "",
      referral_manager_position: "",
      referral_manager_phone: "",
      referral_person_name: "",
      referral_person_position: "",
      referral_person_phone: "",
      resume: null,
      coverLetter: null,
      recommendation: null,
      militaryCertificate: null,
      privacyAgreement: false,
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const fileUrls = {};
      const filesToUpload = {
        resume: data.resume,
        coverLetter: data.coverLetter,
        recommendation: data.recommendation,
        militaryCertificate: data.militaryCertificate,
      };

      const folderName = generateSafeFolderName(data.email);

      for (const [key, file] of Object.entries(filesToUpload)) {
        if (file) {
          if (file.type !== "application/pdf") {
            throw new Error("PDF 파일만 업로드 가능합니다.");
          }
          const safeFileName = generateSafeFileName(file.name);
          const filePath = `${folderName}/${safeFileName}`;

          const { error: uploadError } = await supabase.storage
            .from("application-files")
            .upload(filePath, file, {
              contentType: "application/pdf",
              cacheControl: "3600",
            });

          if (uploadError) throw uploadError;
          fileUrls[`${key}_url`] = filePath;
        }
      }

      const { error: applicationError } = await supabase
        .from("applicants")
        .insert([
          {
            name: data.name,
            birth_date: data.birthDate,
            gender: data.gender,
            military_status: data.militaryStatus,
            phone: data.phone,
            email: data.email,
            address: data.address,
            application_route: data.applicationRoute,
            insurance_certificates: data.insuranceCertificates,
            qualifications: data.qualifications,
            insurance_experience: data.insuranceExperience,
            referral_manager_branch: data.referralManagerBranch,
            referral_manager_name: data.referralManagerName,
            referral_manager_position: data.referralManagerPosition,
            referral_manager_phone: data.referralManagerPhone,
            referral_person_name: data.referralPersonName,
            referral_person_position: data.referralPersonPosition,
            referral_person_phone: data.referralPersonPhone,
            resume_url: fileUrls.resume_url,
            cover_letter_url: fileUrls.cover_letter_url,
            recommendation_url: fileUrls.recommendation_url,
            military_certificate_url: fileUrls.military_certificate_url,
            privacy_agreement: data.privacyAgreement,
            status: "pending",
          },
        ])
        .select();

      if (applicationError) throw applicationError;

      alert("지원이 완료되었습니다.");
      methods.reset();
    } catch (error) {
      console.error("Error submitting application:", error);
      alert(`지원 중 오류가 발생했습니다: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h1 className="text-2xl font-bold text-center mb-4">NEXT 부트캠프 지원서</h1>
            <p className="text-gray-600 text-center">모든 필수 항목(*)을 작성해 주시기 바랍니다.</p>
          </CardContent>
        </Card>

        <div className="mb-8">
          <QualificationGuide />
        </div>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
            <BasicInfoSection />
            <QualificationSection />
            <ReferralSection />
            <FileUploadSection />
            <PrivacySection />

            <div className="flex flex-col items-end space-y-4">
              <Button
                type="submit"
                className="w-full md:w-auto"
                disabled={isSubmitting || !methods.formState.isValid}
              >
                {isSubmitting ? "제출 중..." : "지원서 제출"}
              </Button>
            </div>
          </form>
        </FormProvider>
      </motion.div>
    </div>
  );
}
