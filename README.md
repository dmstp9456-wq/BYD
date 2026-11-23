# BYD 수원전시장 오은세 홈페이지

## GitHub Pages 배포
1. GitHub에서 `dmstp9456-wq/dmstp9456-wq.github.io` 저장소를 엽니다.
2. 기존 파일을 백업한 뒤 이 압축파일의 **내용물 전체**를 저장소 최상위(root)에 업로드합니다.
3. `index.html`, `reservation.html`, `success.html`, `robots.txt`, `sitemap.xml`, `assets/`가 최상위에 보여야 합니다.
4. Settings → Pages → Build and deployment에서 Deploy from a branch / `main` / `/(root)`를 선택하고 저장합니다.
5. 2~5분 후 `https://dmstp9456-wq.github.io/`에서 확인합니다.

## 상담 신청 폼
- EmailJS 설정은 `assets/js/config.js`에 있습니다.
- 현재 저장된 프로젝트 설정값을 연결했습니다. 실제 접수 전 EmailJS 대시보드에서 `service_j077khy`와 `template_0ttu5jm`이 활성화되어 있고, 템플릿 변수명이 아래와 일치하는지 확인하세요.
  - `customer_name`, `customer_phone`, `vehicle`, `consultation_type`, `visit_date`, `visit_time`, `message`, `privacy_consent`
- EmailJS 템플릿에서 수신 이메일 주소가 본인이 확인하는 메일로 설정되어 있어야 합니다.
- 배포 후 반드시 본인 연락처로 테스트 신청 1건을 보내고 실제 이메일 수신을 확인하세요.

## 수정 위치
- 메인 문구와 메뉴: `index.html`
- 색상/레이아웃: `assets/css/style.css`
- 차량 이미지: `assets/css/style.css`의 `.photo-sealion7` 등 background-image URL
- EmailJS: `assets/js/config.js`
- 상담 폼 항목: `reservation.html`

## 중요한 안내
- 차량 이미지 URL은 현재 디자인 시안을 위한 외부 이미지 예시입니다. 실제 광고 집행 전 BYD Korea 또는 사용 권한이 확인된 차량 사진으로 교체하세요.
- 프로모션 가격, 보조금, 재고, 출고일은 변동되므로 확인되지 않은 숫자를 고정 노출하지 않도록 구성했습니다.
- 이 사이트는 공식 BYD Korea 홈페이지가 아니라 전시장 영업 담당자의 상담 안내 사이트입니다. 공식 제휴·소속 표현은 회사의 광고 심의 및 사용 승인 기준에 맞게 확인하세요.
- 네이버 검색광고는 별도의 광고주/사이트 심사를 거치며, 사이트 제작만으로 승인이나 노출이 보장되지는 않습니다.
