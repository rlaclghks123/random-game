# 복불복 게임 만들기

# 목차

- [복불복 게임 만들기](#복불복-게임-만들기)
- [목차](#목차)
- [사용한 기술 스택](#사용한-기술-스택)
- [배운점](#배운점)
- [미리보기](#미리보기)
- [복불복 게임 만든 이유](#복불복-게임-만든-이유)
- [복불복 게임 하는법](#복불복-게임-하는법)

# 사용한 기술 스택

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled-Components](https://camo.githubusercontent.com/41326de293d3848e2ab0f29bf1680427128757fe6b586ceddf1097cb4eeb5ff7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374796c65642d2d636f6d706f6e656e74732d4442373039333f7374796c653d666f722d7468652d6261646765266c6f676f3d7374796c65642d636f6d706f6e656e7473266c6f676f436f6c6f723d7768697465)
<img src="https://img.shields.io/badge/MSW-%23007ACC.svg?style=for-the-badge&logo=msw&logoColor=white&color=#007ACC" alt="MSW Badge">
<img src="https://img.shields.io/badge/RTL-%2320232a.svg?style=for-the-badge&logo=rtl&logoColor=%2361DAFB" alt="RTL Badge">

# 배운점

[블로그에 작성 &larr;](https://velog.io/@rlaclghks123/%ED%9A%8C%EA%B3%A0-%EB%B3%B5%EB%B6%88%EB%B3%B5-%EA%B2%8C%EC%9E%84-%EB%A7%8C%EB%93%A4%EA%B8%B0)

1. Vite와 CRA의 차이점
2. 웹표준을 지키며 SEO 향상을 위한 노력
3. 에러처리
4. RTL, MSW를 통한 테스트
5. 배포 플랫폼을 Vercel로 한 이유
6. 서비스가 아직 사용자는 없지만 직접 친구들에게 피드백 받아보기

# 미리보기

![화면-기록-2023-07-30-오후-1 23 54](https://github.com/rlaclghks123/Learn_About_CSS/assets/55423198/5475714c-ea76-4122-af17-0d8574b67447)

# 복불복 게임 만든 이유

평소 친구들과 만나거나, 놀러 갈 때면 항상 소소하게 내기하곤 합니다. 예를 들어 피시방을 갔을 때 커피 내기, 카페에 갔을 때 케이크 내기, 계곡이나 바다에 갔을 때 입수하기 등

항상 가위바위보, 제로게임, 사다리 타기 등 같은 게임만 하다가 우연히 새로운 게임을 알게 되었습니다. 그것은 바로 티브이를 틀었을 때 혹은 유튜브를 켰을 때 사람이 몇 명이 있는지에 따라 내기를 하는 것입니다.

그러나 이 복불복 게임은 인터넷과 모바일앱에 없었고(제가 못 찾은 걸지도) 한번 만들어 보자! 해서 직접 만들게 되었습니다.

# 복불복 게임 하는법

게임 규칙은 사용자들끼리 미리 정해둡니다.
Ex) 사람 많이 나올 경우 벌칙 vs 사람 적게 나올 경우 벌칙

사용방법

1. 1부터 50까지의 번호를 입력합니다.
2. 사진속 사람이 몇 명 나왔는지 확인하고, 내기를 진행하는 사람들끼리 비교합니다.
3. 당첨된 사람은 벌칙을 수행합니다.

예를들어 보겠습니다.

A친구는 15번를 입력해 사람이 1명 나왔습니다.

B친구는 23번을 입력해 사람이 5명이 나왔습니다.

만약 사진 속 사람이 적게 나온 사람이 당첨 이라는 규칙을 정했다면 A친구가 당첨이고
사진 속 사람이 많이 나온 사람이 당첨이라는 규칙을 정한다면 B친구가 당첨인 게임입니다.

[게임하러가기](https://random-game-chiman.vercel.app/)
