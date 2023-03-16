# javascript-movie-review

FE 5기 레벨1 영화관 미션

## [🎬 데모 페이지](https://suyoungj.github.io/javascript-movie-review/)

## 실행 방법

```
// 저장소 클론
git clone -b step1 --single-branch https://github.com/suyoungj/javascript-movie-review.git

// 패키지 설치
npm i

// 애플리케이션 실행
npm start

// E2E 테스트 실행
npm run test-e2e
```

## 요구사항 목록

- [x] UI 공통 요구사항
  - [x] 한 번에 영화 목록 아이템 20개씩 화면에 출력한다.
  - [x] 페이지 끝에 도달한 경우 더 보기 버튼을 화면에 출력하지 않는다.
  - [x] 로딩 중에 보여줄 Skeleton UI를 구현한다.
  - [x] 이미지 파일이 존재하지 않는 경우 기본 이미지(텅)을 보여준다.
- [x] 영화 목록 조회 (인기순)
  - [x] 영화 목록의 1페이지를 불러오고, 더 보기 버튼을 누르면 다음 페이지를 불러온다.
- [x] 영화 검색 기능
  - [x] 엔터 키, 검색 버튼을 클릭하여 검색할 수 있다.
- [x] E2E 테스트 작성

## 디렉터리 구조

```
.
├── App.js
├── api
│   └── index.js
├── components
│   ├── MovieHeader.js
│   ├── MovieListItem.js
│   └── MovieListSection.js
├── constants.js
├── css
│   ├── app.css
│   ├── reset.css
│   └── util.css
├── dom.js
├── domain
│   └── movieService.ts
├── index.js
└── utils
    └── domUtils.js
```
