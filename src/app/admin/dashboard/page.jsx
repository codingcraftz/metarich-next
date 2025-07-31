"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase";
import Cookies from "js-cookie";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, LogOut } from "lucide-react";
import { ApplicantDetailModal } from "./components/ApplicantDetailModal";

export default function AdminDashboard() {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // 로그인 상태 체크
    const isLoggedIn = Cookies.get("isAdminLoggedIn");
    if (!isLoggedIn) {
      router.push("/admin");
      return;
    }
    fetchApplicants();
  }, [statusFilter]);

  const fetchApplicants = async () => {
    try {
      let query = supabase.from("applicants").select("*");

      if (statusFilter !== "all") {
        query = query.eq("status", statusFilter);
      }

      const { data, error } = await query.order("created_at", { ascending: false });

      if (error) throw error;
      setApplicants(data || []);
    } catch (error) {
      console.error("Error fetching applicants:", error);
      alert("지원자 목록을 불러오는데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (applicantId, newStatus) => {
    try {
      const { error } = await supabase
        .from("applicants")
        .update({ status: newStatus })
        .eq("id", applicantId);

      if (error) throw error;

      // 상태 업데이트 후 목록 새로고침
      fetchApplicants();
    } catch (error) {
      console.error("Error updating status:", error);
      alert("상태 변경에 실패했습니다.");
    }
  };

  const handleLogout = () => {
    Cookies.remove("isAdminLoggedIn");
    router.push("/admin");
  };

  const getFormattedDate = () => {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2);
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}${month}${day}`;
  };

  const getFileType = (url) => {
    if (url.includes("resume")) return "이력서";
    if (url.includes("cover_letter")) return "자기소개서";
    if (url.includes("recommendation")) return "추천서";
    if (url.includes("military_certificate")) return "병적증명서";
    return "첨부파일";
  };

  const downloadFile = async (url, applicantName) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;

      const date = getFormattedDate();
      const fileType = getFileType(url);
      const fileName = `${date}_${applicantName}_${fileType}.pdf`;

      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error downloading file:", error);
      alert("파일 다운로드에 실패했습니다.");
    }
  };

  const handleDetailClick = (applicant) => {
    setSelectedApplicant(applicant);
    setIsDetailModalOpen(true);
  };

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>NEXT 부트캠프 지원자 관리</CardTitle>
          <div className="flex items-center gap-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="상태 필터" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
                <SelectItem value="pending">검토중</SelectItem>
                <SelectItem value="accepted">합격</SelectItem>
                <SelectItem value="rejected">불합격</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              로그아웃
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">로딩중...</div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>이름</TableHead>
                    <TableHead>생년월일</TableHead>
                    <TableHead>연락처</TableHead>
                    <TableHead>이메일</TableHead>
                    <TableHead>제출서류</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>지원일</TableHead>
                    <TableHead>액션</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applicants.map((applicant) => (
                    <TableRow key={applicant.id}>
                      <TableCell>{applicant.name}</TableCell>
                      <TableCell>{applicant.birth_date}</TableCell>
                      <TableCell>{applicant.phone}</TableCell>
                      <TableCell>{applicant.email}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          {applicant.resume_url && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => downloadFile(applicant.resume_url, applicant.name)}
                            >
                              <Download className="w-4 h-4 mr-1" />
                              이력서
                            </Button>
                          )}
                          {applicant.cover_letter_url && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                downloadFile(applicant.cover_letter_url, applicant.name)
                              }
                            >
                              <Download className="w-4 h-4 mr-1" />
                              자소서
                            </Button>
                          )}
                          {applicant.recommendation_url && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                downloadFile(applicant.recommendation_url, applicant.name)
                              }
                            >
                              <Download className="w-4 h-4 mr-1" />
                              추천서
                            </Button>
                          )}
                          {applicant.military_certificate_url && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                downloadFile(applicant.military_certificate_url, applicant.name)
                              }
                            >
                              <Download className="w-4 h-4 mr-1" />
                              병적
                            </Button>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Select
                          value={applicant.status}
                          onValueChange={(value) => handleStatusChange(applicant.id, value)}
                        >
                          <SelectTrigger className="w-[100px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">검토중</SelectItem>
                            <SelectItem value="accepted">합격</SelectItem>
                            <SelectItem value="rejected">불합격</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>{new Date(applicant.created_at).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Button variant="link" onClick={() => handleDetailClick(applicant)}>
                          상세보기
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <ApplicantDetailModal
        applicant={selectedApplicant}
        open={isDetailModalOpen}
        onOpenChange={setIsDetailModalOpen}
        onDownload={downloadFile}
      />
    </div>
  );
}
