"use client";

import { useFormContext } from "react-hook-form";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Upload, File, X } from "lucide-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export function FileUploadSection() {
  const { watch, setValue } = useFormContext();
  const supabase = createClientComponentClient();

  const downloadForms = async () => {
    try {
      const { data, error } = await supabase.storage
        .from("application-forms")
        .download("next-bootcamp-forms.zip");

      if (error) throw error;

      const url = window.URL.createObjectURL(data);
      const link = document.createElement("a");
      link.href = url;
      link.download = "NEXT부트캠프 입과서류 양식.zip";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading forms:", error);
      alert("양식 다운로드 중 오류가 발생했습니다.");
    }
  };

  const FileUploadField = ({ name, label }) => {
    const currentFile = watch(name);

    const onDrop = useCallback(
      (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
          // File 객체에 preview URL 추가
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          });
          setValue(name, file);
        }
      },
      [name, setValue]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: {
        "application/pdf": [".pdf"],
      },
      maxFiles: 1,
      multiple: false,
      onDropRejected: () => {
        alert("PDF 파일만 업로드 가능합니다.");
      }
    });

    const removeFile = (e) => {
      e.stopPropagation();
      if (currentFile?.preview) {
        URL.revokeObjectURL(currentFile.preview);
      }
      setValue(name, null);
    };

    return (
      <div className="space-y-2">
        <label className="text-sm font-medium">{label}</label>
        <div
          {...getRootProps()}
          className={`relative border-2 border-dashed rounded-lg p-4 transition-colors duration-200 ease-in-out cursor-pointer
            ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-400"}`}
        >
          <input {...getInputProps()} />

          {currentFile ? (
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <div className="flex items-center gap-2">
                <File className="w-4 h-4" />
                <span className="text-sm truncate max-w-[200px]">
                  {currentFile.name}
                </span>
              </div>
              <button
                type="button"
                onClick={removeFile}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="space-y-2 text-center">
              <Upload className="w-8 h-8 mx-auto text-gray-400" />
              <div className="text-sm text-gray-600">
                {isDragActive
                  ? "여기에 파일을 놓아주세요"
                  : "PDF 파일을 드래그하여 놓거나 클릭하여 선택하세요"}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>제출 서류</CardTitle>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
          <Button
            type="button"
            variant="outline"
            onClick={downloadForms}
            className="flex items-center gap-2 w-full sm:w-auto"
          >
            <Download className="w-4 h-4" />
            입과서류 양식 다운로드
          </Button>
          <div className="text-sm">
            <p className="text-red-500">* 모든 첨부 서류는 PDF로 변환하여 제출해 주세요.</p>
            <p className="text-gray-600 mt-1">이력서, 자기소개서, 추천서 양식이 다운로드됩니다.</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <FileUploadField name="resume" label="이력서" />
        <FileUploadField name="coverLetter" label="자기소개서" />
        <FileUploadField name="recommendation" label="추천서" />
        <FileUploadField name="militaryCertificate" label="병적증명서" />
      </CardContent>
    </Card>
  );
}