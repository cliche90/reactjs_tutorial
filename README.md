# ReactJS TUTORIAL

> 본 내용은 VELOPERT 님 강좌를 정리한 내용입니다.
- [VELOPERT 님 BLOG's ReactJS 강좌](https://velopert.com/reactjs-tutorials)

## React?
- 페이스북에서 개발한 **UI 라이브러리**
- **Virtual DOM** 의 개념을 이용하여 UI를 렌더링 → 최소한의 DOM 처리로 컴포넌트 업데이트

## Virtual DOM 의 작동
- **DOM(Document Object Model)?**
  - 객체를 통하여 구조화된 문서를 표현하는 방법
  - XML, HTML의 형태로 작성
  - 트리 구조 → 특정 Node 를 찾거나 수정하는 데에 용이

- **DOM 의 문제**
  - 동적 UI 에 최적화 되어있지 않음(HTML 이 정적이기 때문에)
  - Element 가 많아지는 최근 추세에서 DOM 에 접근하여 변화를 주는 것은 성능상의 이슈를 야기
  - Reflow(레이아웃을 새로 구성하며 계산하는 것), Repaint(색상변경과 같이 레이아웃과는 관계 없는 것) 로 인하여 시간이 허비됨

- **브라우저는 바보가 아니다**
  - 매 코드 수행마다 Reflow 를 할 경우 비효율적이기 때문에 브라우저가 Reflow 를 미뤄뒀다가 한번에 처리함
  - 그러나 최적화하지 못하는 경우는 Reflow 가 여러번 발생할 수밖에 없기 때문에, 코드의 최적화가 필요

- **Virtual DOM**
  - 실제 DOM 에 접근하여 조작하는 대신, 이를 추상화한 JS 객체를 사용(DOM의 사본)
  - React 의 DOM 업데이트 절차
    1. Data 업데이트 → 전체 UI 를 Virtual DOM 에 Re-Rendering
    2. Virtual DOM 에 있던 내용과, 현재의 내용을 비교
    3. 바뀐 부분만 실제 DOM 에 적용(컴포넌트 업데이트 시, 레이아웃 계산 한 번)

- **오해**
  - Virtual DOM 이 무조건 빠른 것은 아니다.
  - React 와 Virtual DOM 이 우리에게 제공하는 것은 업데이트 처리의 간결함

## 특징
- **Virtual DOM** 사용
- **JSX** : JavaScript 의 확장품법으로 DOM 을 만들때 XML 형태로 작성 가능
- **Component** 를 이용하여 높은 가독성과 쉬운 유지보수
- **라이브러리** 이기 때문에 타 프레임워크와 호환 가능

## 제한
- View 레이어에 제한된 사용 영역
- React 15 버전 이후로는 IE8 이하 버전을 지원하지 않습니다.

---

# 작업 환경 설정

## Package 설치
- Global Packages
  - bebel : ES6 를 지원하지 않는 환경에서 ES6 를 사용가능하도록 해주는 패키지
  - webpack : 모듈 번들러, 브라우저 위에서 import 할수 있도록 해주는 패키지
  - webpack-dev-server : 서버 구축 없이 웹서버를 열 수 있도록 해주는 개발서버 패키지. 코드 수정시마다 자동으로 리로드

- React Packages
  - React
  - react-dom

- Others
  - babel-dev
  - babel-core
  - babel-loader
  - babel-preset-react
  - babel-preset-es2015
  - webpack
  - webpack-dev-server

        npm install -g babel webpack webpack-dev-server
        npm install --save react react-dom
        npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-es2015 webpack webpack-dev-server
