# 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제

## 원티드 프리온보딩 챌린지 & 사전과제 안내
[원티드 프리온보딩 챌린지](https://www.wanted.co.kr/events/pre_challenge_fe_1)  
[사전과제(api)](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)

## 진행 기간
22.08.05~22.08.06

## 사용한 기술 스택
- react
- typescript
- formik & yup
- react-query
- styled-components

## 기능 소개
### `/auth` : 로그인/회원가입 페이지
![image](https://user-images.githubusercontent.com/28249915/183247779-62277727-1bfd-42ed-928b-02dcbde2109a.png)

- 로그인/회원가입을 하나의 form에서 처리합니다.
- yup을 이용해 입력받은 이메일과 비밀번호의 유효성 검사를 진행합니다.
- 회원가입이 완료되면 로그인 폼으로, 로그인이 완료되면 `/`로 이동합니다.

### `/` : 랜딩 페이지 & Todo CRUD

![image](https://user-images.githubusercontent.com/28249915/183247867-85e0cf8c-48b2-458f-99bd-20331268e014.png)

- 로그인 후 왼쪽에서 Todo 목록을 확인할 수 있습니다.
- 상단의 Todo 추가하기 버튼을 클릭하면 모달 창이 뜨고 Todo를 추가할 수 있습니다.
- 수정 버튼을 클릭하면 모달 창이 뜨고 선택한 Todo를 수정할 수 있습니다.
- 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- Todo의 개수가 많을 경우 컨테이너 안에서 스크롤이 가능합니다.

![image](https://user-images.githubusercontent.com/28249915/183247930-de8f41d8-ea86-44c9-bfb5-7135f55f57e6.png)

- 왼쪽의 Todo 목록을 클릭하면 오른쪽에서 Todo의 상세 정보를 확인할 수 있습니다.
- 상단의 로그아웃 버튼을 누르면 로그아웃되며 로그인 페이지로 이동합니다.

![word111](https://user-images.githubusercontent.com/28249915/183248018-e8aaf589-5b30-4dd4-865e-81e16d2742c0.gif)

- 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있습니다.

## 관련 포스팅
[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=rnrn99&slug=원티드-프리온보딩-프론트엔드-챌린지-사전과제-회고)](https://velog.io/@rnrn99/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%B1%8C%EB%A6%B0%EC%A7%80-%EC%82%AC%EC%A0%84%EA%B3%BC%EC%A0%9C-%ED%9A%8C%EA%B3%A0)  

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=rnrn99&slug=1주차-api-리팩토링)](https://velog.io/@rnrn99/1%EC%A3%BC%EC%B0%A8-api-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81)
