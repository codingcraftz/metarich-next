import * as z from "zod";

export const formSchema = z.object({
  // 기본 정보
  name: z.string().min(2, "이름을 입력해주세요"),
  birthDate: z
    .string()
    .min(1, "생년월일을 입력해주세요")
    .refine((date) => {
      const datePattern = /^(\d{4})[-]?(\d{2})[-]?(\d{2})$/;
      if (!datePattern.test(date)) return false;

      const [_, year, month, day] = date.match(datePattern);
      const birthDate = new Date(year, month - 1, day);
      const today = new Date();

      if (
        birthDate.getFullYear() != year ||
        birthDate.getMonth() != month - 1 ||
        birthDate.getDate() != day
      ) {
        return false;
      }

      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age >= 21 && age <= 49;
    }, "생년월일이 올바르지 않거나, 21세 이상 49세 이하 지원 가능합니다"),
  gender: z.string().min(1, "성별을 선택해주세요"),
  militaryStatus: z.string().min(1, "병역사항을 선택해주세요"),
  phone: z.string().regex(/^010-\d{4}-\d{4}$/, "올바른 전화번호 형식이 아닙니다"),
  email: z.string().email("올바른 이메일 형식이 아닙니다"),
  address: z.string().min(1, "거주지역을 입력해주세요"),
  applicationRoute: z.string().min(1, "신청경로를 선택해주세요"),
  insuranceCertificates: z.string().optional(),

  // 자격 사항
  qualifications: z.object({
    age: z.boolean(),
    credit: z.boolean(),
  }),
  insuranceExperience: z.string().optional(),

  // 추천인 정보 (선택사항)
  referralManagerBranch: z.string().optional(),
  referralManagerName: z.string().optional(),
  referralManagerPosition: z.string().optional(),
  referralManagerPhone: z.string().optional(),
  referralPersonName: z.string().optional(),
  referralPersonPosition: z.string().optional(),
  referralPersonPhone: z.string().optional(),

  // 파일 업로드 (선택사항)
  resume: z.any().optional(),
  coverLetter: z.any().optional(),
  recommendation: z.any().optional(),
  militaryCertificate: z.any().optional(),

  // 개인정보 동의
  privacyAgreement: z
    .boolean()
    .refine((val) => val === true, "개인정보 수집 및 이용에 동의해주세요"),
});
