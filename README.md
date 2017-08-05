# ReactJS TUTORIAL.

> 본 내용은 VELOPERT 님 강좌를 참고하여 정리한 내용입니다.
- [VELOPERT 님 BLOG's ReactJS 강좌](https://velopert.com/reactjs-tutorials)

## React?
- 페이스북에서 개발한 **UI 라이브러리**
- **Virtual DOM** 의 개념을 이용하여 UI를 렌더링 → 최소한의 DOM 처리로 컴포넌트 업데이트

## Virtual DOM?
- DOM(Document Object Model)?
  - 객체를 통하여 구조화된 문서를 표현하는 방법
  - XML, HTML의 형태로 작성
  - 트리 구조 → 특정 Node 를 찾거나 수정하는 데에 용이

- DOM 의 문제
  - 동적 UI 에 최적화 되어있지 않음(HTML 이 정적이기 때문에)
  - Element 가 많아지는 최근 추세에서 DOM 에 접근하여 변화를 주는 것은 성능상의 이슈를 야기
  - Reflow(레이아웃을 새로 구성하며 계산하는 것), Repaint(색상변경과 같이 레이아웃과는 관계 없는 것) 로 인하여 시간이 허비
