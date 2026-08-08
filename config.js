/*
AIRPALAB Supabase 설정
기존 운영 사이트에서 사용하던 SUPABASE_URL / SUPABASE_KEY 값을 아래에 넣으세요.
주의: 브라우저에는 Supabase anon/public key만 사용하세요. service_role key는 절대 넣지 마세요.

CONTACT_TABLE은 문의 저장 테이블명입니다.
기존 프로젝트에서 다른 이름을 사용 중이면 그 이름으로 변경하세요.
*/
window.ENV = {
  SUPABASE_URL: "YOUR_SUPABASE_PROJECT_URL",
  SUPABASE_KEY: "YOUR_SUPABASE_ANON_KEY",
  CONTACT_TABLE: "inquiries"
};
