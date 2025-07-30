"use client";

import { Input } from "@/components/ui/input";

export function BirthDateInput({ value, onChange, ...props }) {
  const formatBirthDate = (input) => {
    // 숫자만 추출
    const numbers = input.replace(/\D/g, "");

    // 자동으로 하이픈 추가
    if (numbers.length <= 4) {
      return numbers;
    } else if (numbers.length <= 6) {
      return numbers.replace(/(\d{4})(\d{0,2})/, "$1-$2");
    } else {
      return numbers.replace(/(\d{4})(\d{2})(\d{0,2})/, "$1-$2-$3");
    }
  };

  const handleChange = (e) => {
    let formatted = formatBirthDate(e.target.value);
    // 최대 10자리(YYYY-MM-DD)로 제한
    if (formatted.length > 10) {
      formatted = formatted.slice(0, 10);
    }
    onChange(formatted);
  };

  // 초기 표시를 위한 포맷팅
  const displayValue = value ? formatBirthDate(value) : "";

  return (
    <Input
      {...props}
      type="text"
      value={displayValue}
      onChange={handleChange}
      placeholder="1992-05-22"
      maxLength={10}
    />
  );
}
