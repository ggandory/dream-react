import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//import AppProfile from "./AppProfile";
//import AppCounter from "./AppCounter";
import AppProducts from "./AppProducts";
//혹시 일일이 import를 써줘야 하는건지? 밑에 추가하면  <AppProducts />

//root의 첫번째 렌더링 되는 컴포넌트는 App인걸 알 수 있다. 그리고 StrictMode를 통해서 엄격한 규칙을 적용받음
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProducts />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
