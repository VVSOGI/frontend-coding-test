# 2021 11 20 프론트엔드 김우석 과제 완료.

<details>
  <summary>사진으로 미리보기</summary>
  <img width="720" alt="스크린샷 2021-11-20 오후 4 48 45" src="https://user-images.githubusercontent.com/76682009/142719352-e5611cf0-60bf-488b-9aba-9df10de554b4.png">

<img width="720" alt="스크린샷 2021-11-20 오후 4 49 01" src="https://user-images.githubusercontent.com/76682009/142719348-29b2906c-a379-4dcc-aada-ef14e4c0d4b6.png">

<img width="359" alt="스크린샷 2021-11-20 오후 5 11 13" src="https://user-images.githubusercontent.com/76682009/142719439-c1746a0f-8289-4407-9791-43fbedb127a9.png"> /n

<img width="360" alt="스크린샷 2021-11-20 오후 5 11 28" src="https://user-images.githubusercontent.com/76682009/142719441-7c6ace8f-bbe5-4ffa-989f-1014deacf2bc.png">

</details>

## 설명

src 폴더에 화면을 구성하는 데 필요한 폴더 components, data, pages, server, types 총 5개가 있습니다. 주어진 과제는 원하는 요청서를 찾을 수 있는 요청 페이지를 구성하는 것 이었습니다. 해당 목적에 맞춰서 우선적으로 페이지 폴더에 RequestPage라는 폴더와 파일을 생성했습니다.

### 1. Pages폴더에 목적에 맞는 폴더와 파일을 생성.

이 후 피그마에 그려진 화면을 보면서 가장 먼저 할 수 있는 것들을 분류하고, 만들어 놓았을 때 재 사용성이 높을만한 컴포넌트들을 선택했습니다. 따라서 components에 들어갈 아이템의 기준은 재 사용성입니다. 선택된 컴포넌트들은 components라는 폴더에 담겨서 다른 부분에서 호출이 되어도 바로 사용할 수 있도록 최대한 클린하게 작성하는 것을 목표로 했습니다.

### 2. 화면 구성을 본 후에 많이 쓰일 수 있을것 같은 컴포넌트들은 따로 분류해서 관리.

그 다음은 전체적은 틀을 먼저 잡는 것이었습니다. 저는 우선적으로 뼈대를 새워놓고 작업을 하는 것을 선호하기 때문에 먼저 프레임을 구축했습니다. 이 과정은 styled-components를 이용해서 작업을 했습니다.

### 3. 기본 프레임 구축.

틀을 잡는 과정이 어느정도 완료가 되었다면 이제 각각 버튼에 맞는 hover 이벤트와 클릭 이벤트의 작업을 진행합니다. 가공방식 버튼과 재료 버튼의 경우에는 클릭 시에 색깔도 바뀌고 밑에 안보였던 컴포넌트가 등장하기 때문에 프롭스로 이벤트를 넘겨줘야 하는데, 타입스크립트를 기반으로 하고 있기에 더 세밀하게 넘기기 위해서 types라는 폴더에 필요한 타입들만을 저장하는 파일을 생성하여 export를 이용해 필요한 곳에 간편하게 넘겨줍니다.

types를 따로 폴더를 내서 나눠놓은 이유는 코드의 가독성을 높이기 위해서 입니다.

### 4. 버튼 이벤트 구축, types파일을 생성

이제 실제 데이터를 map을 이용해서 뿌려줄 것이기 때문에 서버 폴더의 requests.json을 json-server를 이용해 받아와서 RequestCard로 뿌려준 후에 메인 기능인 필터 기능을 구현합니다.

### 5. 실제 데이터를 호출한 후에 맵을 이용해서 뿌려준 후 필터 기능을 구현.

마지막으로 화면이 줄어들었을 때에도 유저에게 잘 보이고 이질감이 느껴지는 부분이 있는 지 확인하기 위해서 반응형 웹을 구현합니다. 1024, 720, 480px을 기준으로 나눠놨습니다. 이 후에 메뉴 버튼을 클릭했을 때 왼쪽에서 숨겨진 화면이 나오게끔 만들어 준 후 마무리 했습니다.

## redux를 사용하지 않은 이유.

RequestPage에서 컴포넌트들을 통해 전달하는 props의 depth가 깊지 않았고, hooks를 이용한 직접 전달을 해도 큰 무리가 없을 것 같다는 판단을 해서 redux는 사용하지 않는 결정을 했습니다.

## 컴포넌트 폴더의 파일 중 ClickSwicth를 나눠놓은 이유.

클릭 스위치는 상담중인 내용만을 볼 수 있게끔 해주는 기능을 담고있는 UI 버튼입니다. 하지만 이러한 스위치는 필요에 따라 어딘가에 놓더라도 필터의 기능으로 사용할 수 있는 좋은 UI라고 생각해서
따로 컴포넌트로 만들어서 프로젝트 진행 중에 필요한 부분에 가져다 사용할 수 있게끔 분리해 놓았습니다.

## 화면 직접 보기

1. 원하는 폴더에 클론해서 폴더 가져가기.
2. 터미널에서 npm i 실행
3. 터미널에서 npm install json-server
4. src에 server폴더에 들어간 후 터미널에 json-server --watch db.json --port 3001
5. npm start
