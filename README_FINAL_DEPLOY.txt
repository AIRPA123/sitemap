AIRPALAB 최종 배포본
생성 기준일: 2026-08-08

포함 기능
- 메인 / About / 개인정보처리방침 / 이용약관
- 블로그 20편 + 블로그 목록
- Supabase 이메일 로그인
- Supabase 회원가입 + 이메일 확인
- 비밀번호 재설정 이메일
- Google OAuth 로그인
- 로그인 상태 표시 + 로그아웃
- Supabase 문의 저장 폼
- Google AdSense 코드
- ads.txt
- robots.txt / sitemap.xml
- 공통 반응형 CSS

배포 전에 반드시 할 일
1) config.js의 아래 2개 값을 현재 운영 중인 Supabase 값으로 교체
   SUPABASE_URL
   SUPABASE_KEY
   * 반드시 anon/public key만 사용하세요. service_role key 금지.

2) Supabase 문의 테이블
   기본값은 inquiries 입니다.
   기존 테이블명이 다르면 config.js의 CONTACT_TABLE 값을 변경하세요.
   신규 생성 시 SUPABASE_SETUP.sql을 참고하세요.

3) Supabase Authentication > URL Configuration
   Site URL:
   https://charming-gaufre-ebe320.netlify.app/
   Redirect URLs에도 실제 배포 URL을 등록하세요.

4) Google OAuth를 사용할 경우
   Supabase Authentication > Providers > Google에서 Google Provider를 구성하고
   Google Cloud OAuth의 승인된 리디렉션 URI도 Supabase가 안내하는 callback URL과 일치시켜야 합니다.

5) ads.txt
   루트 주소에서 아래가 열려야 합니다.
   https://charming-gaufre-ebe320.netlify.app/ads.txt
   내용:
   google.com, pub-5774158976002258, DIRECT, f08c47fec0942fa0

6) 독립 도메인으로 이전할 경우
   index/about/privacy/terms/blog 페이지의 canonical,
   sitemap.xml, robots.txt,
   Supabase Site URL/Redirect URL을 새 도메인으로 변경하세요.

보안
- config.js에 Supabase service_role 키를 넣지 마세요.
- 문의 테이블은 익명 사용자의 INSERT만 허용하고 SELECT/UPDATE/DELETE를 공개하지 않는 구성을 권장합니다.
- 관리자 문의 목록은 브라우저에서 이메일 문자열만 비교하는 방식으로 보호하지 마세요.
  Supabase Dashboard 또는 서버측 권한 검증 방식으로 관리하는 것이 안전합니다.

주의
- AdSense 승인은 특정 페이지 수, 문구, ads.txt 유무만으로 보장되지 않습니다.
- 개인정보처리방침은 실제 데이터 처리 방식과 반드시 일치해야 합니다.

추가 서비스 상세 페이지
- services/omok.html : 오목 README 기반 서비스 소개, 규칙, 기능, 기술 구현, 로드맵
- 메인 오목 카드와 blog/omok-basics.html에서 상호 연결됨

- services/minesweeper.html : 지뢰찾기 README 기반 서비스 소개, 난이도, 조작법, Safe Start, Flood Fill, 기술 설명

- services/memory-game.html : 기억력 게임 README 기반 접근성, TTS, 자동 난이도, 최근 성과 기록 상세 페이지
- services/todo.html : To-Do 작업 등록, 검색, 필터, 완료 정리, 남은 작업 수, 다크 모드 및 로그인 안내 상세 페이지
추가 서비스 상세 페이지
- services/lotto.html : 로또 번호 추천기
- services/daily-horoscope.html : 오늘의 운세 & 행운의 로또
- services/flour-bloom.html : Flour & Bloom 랜딩페이지
- services/profile-maker.html : Profile Maker
- services/cyberpomo.html : CyberPomo Timer
- services/ai-cover-letter.html : AI 자기소개서 자동 작성기