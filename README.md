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


# JSX
- html 을 따옴표로 감싸서 반환하지 않아도 되는 javascript 확장문법
- 원래는 jsx 확장자를 썼으나, 현재는 js로 쓰는 추세

## Nested Elements
- 여러개의 Element 를 렌더링하여 반환할 경우에는 반드시 div 와 같은 container element 으로 감싸주어야 에러가 나지 않습니다.

      return (
        <div>
          <h1>Hello</h1>
          <h2>World!!</h2>
        </div>
      );

## Javascript in JSX
- JSX 안에서 js 표현을 사용해야 할 경우 {} 로 묶어 처리합니다.

      render(){
        return (
          <div>
            <h1>Hello</h1>
            <h2>World {text}</h2>
          </div>
        );    
      }

- 메서드 생성 및 사용에는 다른 것은 비슷하나 호출을 해서는 안됩니다.

      sayHey(){
        alert("hey");
      }

      render(){
        let text = "Dev-Server"
        return  (
          <div>
            <h1> Hello Velopert </h1>
            <h2> Welcome to {text}</h2>
            <button onClick={this.sayHey}>Click Me</button>
          </div>
        );
      }

  - JSX 내부에서는 if-else 문의 사용이 불가능 하기 때문에 3항 연산자로 대체합니다.
  - 주석의 경우에는 `{ /* comment */ }` 의 형식으로 작성합니다. 주석 역시도 container element 내부에 들어와야 합니다.

# props & state

## props
- 변동되지 않는 데이터를 다룰 때 props 를 이용하며, parent 컴포넌트에서 child 컴포넌트로 데이터를 전달할 때 이용됩니다.
- `render()` 메소드 안에 `{ this.props.propsName }` 과 같이 넣고 사용시에는 태그 안 쪽에 속성값으로 `propsName="value"` 와 같이 이용합니다.

## state
- 컴포넌트에서 유동적인 데이터를 다룰 때, state 를 사용
- state 를 사용하는 컴포넌트의 수는 최소화하는 것이 좋음
