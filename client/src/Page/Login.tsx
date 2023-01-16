// 7번째줄 ~ 47번째줄 까지를 컴포넌트(component)라고 말합니다. 제가 해당 컴포넌트 이름을 Login이라고 7번째줄에 설정해놓은게 보이시나요
// 컴포넌트 내 상단부분은 자바스크립트를 쓰고, 아래 return 부분엔 랜더링 되는 부분으로 HTML 코드를 써줍니다

import React, { useState } from 'react' // useState를 사용하기 위해 먼저 import를 진행 합니다
import styled from "styled-components";

const Login = () => {

  const [state, setState] = useState('red') // 내가 사용할 상태를 선언 해줍니다.
  // 첫번째 인자 (state)는 일반적인 변수라고 생각하시면 됩니다. 현재 상태? 라고 이해하시면 될거 같습니다?
  // 두번째 인자 (setState)는 첫번째 인자의 상태(혹은 값)를 변경시킬 수 있는 함수입니다. 첫번째 인자와 같은 이름을 쓰되 앞에 set을 붙여주고 camelCase로 표기해줍니다.
  // useState() 괄호 안에는 이 상태의 "초기값"을 설정해줄 값을 넣어줍니다  => (boolean number string null undefined)

  // ex ) const [apple, setApple] = useState(flase) 콘솔을 찍어보면 다음과 같은 결과를 도출합니다 console.log(apple) -> false

  // ex ) const [potato, setPotato] = useState(undefined) -> console.log(potato) 콘솔을 찍어보면 다음과 같은 결과를 도출합니다 undefined

  return (
    <LoginStyle> {/* 이 태그는 styled components 라는 CSS in JS 라이브러리 쓴거라 무시하셔도 좋습니다. */}
      <button onClick={() => setState('red')}>빨간 버튼</button>
      <button onClick={() => setState('blue')}>파란 버튼</button>
      {/* 
      태그 안에 camelCase 표기로 이벤트 핸들러를 적어주고 callback(함수를 호출하는 함수) 형식으로 함수와 argument(전달인자)룰 적어줍니다.
      위에서 언급했듯이 두번째인자인 set~~~ 함수는 상태값을 변경(재할당) 해줄 수 있는 함수라고 했습니다.
      즉, 현재 state 라는 변수는 초기값인 'red' 입니다. 그 후
      버튼 태그를 클릭 했을때 onClick 이벤트가 감지되어서 setState('blue')라는 함수가 실행되고 그로인해 state 라는 변수의 값을 'blue'로 바꿔주었습니다. (재할당)
      */}
      {state === 'red' ? 
      <div className='red'>빨간 버튼이 활성화 됐습니다.</div> :
      <div className='blue'>파란 버튼이 활성화 됐습니다.</div>}
      {/* 
      리액트에선 JSX 내부에서 JavaScript 문법이 사용 가능합니다. 단, 중괄호로 감싸줘야됨
      그로인해 "삼항연산자"를 사용하여 state라는 변수가 'red'이냐 아니냐를 따져서
      'red'가 맞다면 이것을 보여주고, 아니라면 저것을 보여줘라 라는 코드입니다. (조건부 랜더링)

      삼항연산자는 if, else와 비슷하나 코드량이 줄어들어 많이 채용 됩니다.

      삼항연산자 문법 =>

      (조건식) ? (앞에써준 조건식이 참일경우 실행될 함수, 혹은 보여줄 태그엘리먼트) : (거짓일 경우 실행될 함수 , 혹은 보여줄 태그앨리먼트)

      ex) 1+1 === 2 ? console.log('true') : alert('false')

      */}
    </LoginStyle>
  )
}

export default Login

const LoginStyle = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  button{
    width: 150px;
    height: 50px;
    margin: 0 30px;
  }

  .red{
    width: 50vw;
    height: 30vh;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 20px;
  }

  .blue{
    width: 50vw;
    height: 30vh;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 20px;
  }
`