State
React에서는 props와 state라는 객체를 가지고 데이터를 다루게 됩니다. 두 객체 모두 View를 렌더링하는데 사용되는 데이터를 가지고 있다는 공통점을 가지고 있지만, 한 가지 중요한 차이점이 있습니다.

props는 함수의 매개변수처럼 부모 컴포넌트로부터 데이터를 전달받지만, state는 함수 내에서 선언된 변수처럼 컴포넌트 내에서 관리된다는 점입니다. 따라서 컴포넌트에서는 props의 값을 변경할 수 없지만, state의 값은 변경할 수 있게 됩니다.

React v16.8 이전까지는 함수 컴포넌트에서는 state를 사용할 수 없었습니다. 따라서 state를 사용하기 위해서는 어쩔 수 없이 클래스 컴포넌트를 사용해야 했지만, React v16.8 부터 도입된 useState Hook을 사용하면 함수 컴포넌트에서도 state를 사용할 수 있게 되었습니다.

useState Hook으로 state 관리하기
지금까지 우리는 사용자와의 상호작용이나 시간에 따라 일부 데이터가 변하는 동적인 부분이 전혀 없는 예제들만을 다루었습니다.

이번에는 state의 필요성을 알아보기 위해 버튼을 클릭하면 화면의 숫자가 증가하는 카운터 예제를 만들어보도록 합시다.

예제(Counter.js)
import { useState } from "react";

const Counter = () => {
// 0을 초기값으로 하는 state 생성
const [state, setState] = useState(0);

return (
<div>
<h1>State 값 : {state}</h1>
{/_ setState를 사용하여 state의 값을 1씩 증가시킴 _/}
<button onClick={() => setState(state + 1)}>1씩 증가</button>
</div>
);
};

export default Counter;

함수 컴포넌트에서는 useState Hook을 사용하여 state를 손쉽게 관리할 수 있습니다.

Hook은 React에서 제공하는 특별한 기능을 수행하는 함수들
