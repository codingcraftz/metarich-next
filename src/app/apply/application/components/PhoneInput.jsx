import { Input } from "@/components/ui/input";

export function PhoneInput({ value, onChange, ...props }) {
  const formatPhoneNumber = (value) => {
    // 숫자만 추출
    const numbers = value.replace(/\D/g, "");

    // 숫자를 그룹으로 나누고 하이픈 추가
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handleChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    // 최대 13자리 (010-1234-5678)
    if (formatted.length <= 13) {
      onChange(formatted);
    }
  };

  return <Input {...props} value={value} onChange={handleChange} placeholder="010-1234-5678" />;
}
