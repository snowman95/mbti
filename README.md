# mbti

재미로하는 성격유형검사 !

## Screens

- [ ] Home

  - [ ] Load된 Test Data 유형 수만큼 TestTypes 표시

- [ ] TestTypes

  - [ ] 이미지+제목 버튼 → TestBook 이동

- [ ] TestBook : 정보확인/시작

  - [ ] 테스트 정보 표시
  - [ ] 테스트 시작 버튼 → TestPage 1번부터 출력

- [ ] TestPage

  - [ ] 이전/다음 페이지 버튼
  - [ ] 테스트 진행도 표시
  - [ ] 내용 표시
  - [ ] 랜덤 배경 화면
  - [ ] 선택지에 따른 성격유형 가중치 계산
  - [ ] 테스트 완료 버튼 → TestResult 이동 or 미진행된 Page 이동

- [ ] TestResult
  - [ ] 결과 표시 (이미지+텍스트)
  - [ ] 테스트 재시도
  - [ ] Home 화면 돌아가기
  - [ ] 결과 공유 (카카오톡, 트위터, 페이스북)

## API

- [ ] Test Datas (object)
  - [ ] 이미지 (img)
  - [ ] 제목 텍스트 (text)
  - [ ] 테스트페이지 (list)
    - [ ] 선택지1 : 내용 텍스트 (text)
    - [ ] 선택지2 : 내용 텍스트 (text)
  - [ ] 성격 유형 가중치 (update 필요)

## Flow

- Home → TestTypes 이미지선택 → TestBook 시작버튼 → TestPage 테스트 완료버튼 → TestResult → Home

- 공유링크 → TestBook 시작버튼 → TestPage 테스트 완료버튼 → TestResult → Home
