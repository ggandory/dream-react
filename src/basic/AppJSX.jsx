import logo from "./logo.svg";
import "./App.css";
//html이랑 비슷하게 쓸 수 있다 그러나 js 파일이라서 자바스크립트도 쓸 수 있음
//하나의 컴포넌트는 꼭 하나의 태그만 반환해야함 만약 여러개의 태그를 반환하고 싶으면 부모태그를 만들어야 한다. <div> <> 이런식으로 감싸줘야함
//class 대신에 className으로 표현해야함
//자바스크립트 코드를 html로 표현하려면 중괄호로 묶어줘야함
function AppJSX() {
  const name = "허건";
  const list = ["우유", "딸기", "바나나"];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
        ;
      </ul>
      <img style={{ width: "200px", height: "200px" }} src="" alt="" />
    </>
  );
}

export default AppJSX;
