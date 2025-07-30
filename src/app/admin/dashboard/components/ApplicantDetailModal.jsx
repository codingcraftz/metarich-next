"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  GENDER_MAPPING,
  MILITARY_STATUS_MAPPING,
  APPLICATION_ROUTE_MAPPING,
} from "@/constants/mappings";

export function ApplicantDetailModal({ applicant, open, onOpenChange, onDownload }) {
  if (!applicant) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">지원자 상세 정보</DialogTitle>
        </DialogHeader>
        <div className="space-y-8">
          {/* 기본 정보 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2">기본 정보</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-gray-500">이름</p>
                <p className="text-base mt-1">{applicant.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">생년월일</p>
                <p className="text-base mt-1">{applicant.birth_date}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">성별</p>
                <p className="text-base mt-1">
                  {GENDER_MAPPING[applicant.gender] || applicant.gender}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">병역사항</p>
                <p className="text-base mt-1">
                  {MILITARY_STATUS_MAPPING[applicant.military_status] || applicant.military_status}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">연락처</p>
                <p className="text-base mt-1">{applicant.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">이메일</p>
                <p className="text-base mt-1">{applicant.email}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm font-medium text-gray-500">거주지역</p>
                <p className="text-base mt-1">{applicant.address}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">신청경로</p>
                <p className="text-base mt-1">
                  {APPLICATION_ROUTE_MAPPING[applicant.application_route] ||
                    applicant.application_route}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">보유자격증</p>
                <p className="text-base mt-1">{applicant.insurance_certificates || "없음"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">보험영업 경력</p>
                <p className="text-base mt-1">{applicant.insurance_experience || "0"}개월</p>
              </div>
            </div>
          </div>

          {/* 추천인 정보 */}
          {(applicant.referral_manager_name || applicant.referral_person_name) && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold border-b pb-2">추천인 정보</h3>
              {applicant.referral_manager_name && (
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">최상위관리자 정보</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-medium text-gray-500">본부/성함/직책</p>
                      <p className="text-base mt-1">
                        {[
                          applicant.referral_manager_branch,
                          applicant.referral_manager_name,
                          applicant.referral_manager_position,
                        ]
                          .filter(Boolean)
                          .join(" / ")}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">연락처</p>
                      <p className="text-base mt-1">{applicant.referral_manager_phone}</p>
                    </div>
                  </div>
                </div>
              )}
              {applicant.referral_person_name && (
                <div className="space-y-4 mt-4">
                  <h4 className="text-lg font-medium">추천인 정보</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-medium text-gray-500">성함/직책</p>
                      <p className="text-base mt-1">
                        {[applicant.referral_person_name, applicant.referral_person_position]
                          .filter(Boolean)
                          .join(" / ")}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">연락처</p>
                      <p className="text-base mt-1">{applicant.referral_person_phone}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 제출 서류 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2">제출 서류</h3>
            <div className="flex flex-wrap gap-3">
              {applicant.resume_url && (
                <Button variant="outline" onClick={() => onDownload(applicant.resume_url)}>
                  <Download className="w-4 h-4 mr-2" />
                  이력서
                </Button>
              )}
              {applicant.cover_letter_url && (
                <Button variant="outline" onClick={() => onDownload(applicant.cover_letter_url)}>
                  <Download className="w-4 h-4 mr-2" />
                  자기소개서
                </Button>
              )}
              {applicant.recommendation_url && (
                <Button variant="outline" onClick={() => onDownload(applicant.recommendation_url)}>
                  <Download className="w-4 h-4 mr-2" />
                  추천서
                </Button>
              )}
              {applicant.military_certificate_url && (
                <Button
                  variant="outline"
                  onClick={() => onDownload(applicant.military_certificate_url)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  병적증명서
                </Button>
              )}
            </div>
          </div>

          {/* 지원일 */}
          <div>
            <p className="text-sm font-medium text-gray-500">지원일</p>
            <p className="text-base mt-1">{new Date(applicant.created_at).toLocaleString()}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
