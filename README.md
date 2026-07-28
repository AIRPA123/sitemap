# AIRPALAB 사이트맵 (Sitemap)

AI와 웹 기술을 활용하여 일상을 더 즐겁고 스마트하게 만드는 **AIRPALAB**의 다양한 웹 서비스들을 한눈에 확인하고 바로 접속할 수 있는 메인 포털(게이트웨이) 페이지입니다.

## 🌐 서비스 바로가기
- **배포 주소:** [https://airpa123.github.io/sitemap/](https://airpa123.github.io/sitemap/) *(혹은 운영 중인 GitHub Pages 주소)*

---

## 🛠️ 제공하는 서비스 목록

AIRPALAB은 게임, 생활, 마케팅, 업무 생산성을 위한 10가지 웹 서비스를 제공하고 있으며, 모든 서비스는 별도의 설치 없이 웹 브라우저에서 즉시 실행 가능합니다.

### 1. 🎮 Fun Game (재미있는 게임)
*   **[오목 게임](https://airpa123.github.io/omok/)**: 클래식한 오목 웹게임입니다. 직관적인 UI로 언제 어디서나 쉽게 대국을 즐길 수 있습니다.
*   **[지뢰찾기 프리미엄](https://airpa123.github.io/Minesweeper/)**: 논리력과 집중력을 기를 수 있는 프리미엄 지뢰찾기 게임입니다.
*   **[기억력 매칭 게임](https://airpa123.github.io/Memory_Game/)**: 카드를 뒤집어 같은 그림의 짝을 맞추는 기억력 강화 게임입니다.

### 2. 😊 Happy Daily (일상 편의)
*   **[오늘의 할 일 관리](https://airpa123.github.io/TO-DO/)**: 일정 등록, 완료 처리, 검색 및 필터링 기능을 탑재한 직관적이고 깔끔한 To-Do 리스트 도구입니다.
*   **[로또 번호 추천기](https://airpa123.github.io/LOTTO/)**: 행운을 시험해 볼 수 있도록 로또 번호 조합을 자동으로 생성해 주는 번호 추천기입니다.
*   **[오늘의 운세 & 행운의 로또](https://airpa123.github.io/Daily_Horoscope/)**: 하루의 운세를 점치고, 그날의 운세에 어울리는 행운의 로또 번호를 함께 생성해 주는 오락용 서비스입니다.

### 3. 🚀 Smart Marketing (마케팅 & 퍼스널 브랜딩)
*   **[Flour & Bloom (Landing Page Maker)](https://airpa123.github.io/LandingPage_Maker/)**: 동네 빵집 및 소상공인 브랜드를 타겟으로 한 세련되고 감각적인 반응형 랜딩 페이지 템플릿입니다.
*   **[Profile Maker](https://airpa123.github.io/Profile_Maker/)**: 프로필 사진과 핵심 약력을 입력해 나만의 온라인 포트폴리오/프로필 페이지를 구성할 수 있는 제작 도구입니다.

### 4. 💼 Smart Working (업무 생산성)
*   **[CyberPomo Timer](https://timer.hjkhs.workers.dev/)**: 집중과 휴식 사이클을 체계적으로 분배하여 업무 효율을 높여주는 사이버 테마 스타일의 포모도로 타이머입니다.
*   **[AI 자기소개서 자동 작성기](https://job.hjkhs.workers.dev/)**: 지원하고자 하는 직무와 자신의 경험 키워드를 기반으로 AI가 자기소개서 초안을 작성해 주는 스마트 취업 도구입니다.

---

## ✨ 주요 기능 및 특징

*   **반응형 디자인 (Responsive Layout):** 데스크톱, 태블릿, 모바일 기기에 구애받지 않고 레이아웃이 유연하게 최적화됩니다.
*   **모던 UI/UX 적용:** CSS 변수 기반 시스템, 글래스모피즘(Backdrop-filter), 생동감 있는 그래디언트 배경, 그리고 호버 반응 마이크로 애니메이션을 통해 프리미엄 감성의 인터페이스를 선사합니다.
*   **검색엔진 최적화 (SEO):** 시맨틱 태그 구조와 Meta Title/Description, Open Graph 메타 정보가 기본 내장되어 있어 검색 노출에 효율적입니다.
*   **광고 레이아웃 탑재:** Google AdSense 등 광고 게재 승인을 위해 미리 설계된 광고 영역 슬롯을 제공합니다.
*   **편의성 컴포넌트:** 아코디언 기반 FAQ 리스트, 부드러운 페이지 스크롤, 문의 사항 데모 폼(Contact Form), 맨 위로 이동하는 퀵 액션 단추(Back to Top)를 지원합니다.

---

## 📂 파일 구조

```
사이트맵/
├── index.html       # 사이트맵 메인 마크업, CSS 스타일, 자바스크립트가 모두 포함된 단일 파일
└── README.md        # 프로젝트 설명 문서 (본 파일)
```

---

## 🚀 실행 및 배포 방법

### 1. 로컬에서 실행하기
*   `index.html` 파일을 더블클릭하여 브라우저에서 바로 열거나, VS Code의 **Live Server** 플러그인 또는 NodeJS 환경의 `http-server` 패키지 등을 통해 로컬 웹 서버로 손쉽게 구동할 수 있습니다.

### 2. 정적 웹 사이트 배포하기
*   **GitHub Pages:** 본 디렉토리를 원격 GitHub 저장소에 업로드하고, 저장소 설정(Settings) -> Pages 메뉴에서 빌드 브랜치를 지정하면 무료로 정적 배포를 완료할 수 있습니다.
*   **Netlify / Vercel:** 단일 HTML 파일 구조이기 때문에 추가 빌드 구성 없이 곧바로 초고속 CDN 정적 웹사이트로 배포할 수 있습니다.

---

## 📝 관리 및 수정 가이드

*   **운영자 정보 업데이트:** `index.html` 내 `#contact` 영역 및 하단 푸터(Footer)에 표기된 메일 주소(`your-email@example.com`)와 비즈니스 정보 등을 실제 운영 정보로 변경해 주어야 구글 애드센스 심사나 이용자 문의 수집 시 원활한 응대가 가능합니다.
*   **신규 서비스 링크 추가:** HTML 소스코드의 `#services` 아래에 해당하는 카테고리 그리드 내부에서 기존 `<article class="service-card">` 요소를 복사 및 수정하여 새로운 링크를 손쉽게 증설할 수 있습니다.
