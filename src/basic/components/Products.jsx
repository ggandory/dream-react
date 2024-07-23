import React, { useEffect, useState } from "react";
//import할 때 왜 { useEffect, useState }이거 처리해주는지 그리고 그 둘의 차이가 헷갈림
//useEffect는 네트워크 그리고 비동기 처리할 때 쓰고 useState는 내부적으로 컴포넌트가 쓰일 때 적용하면 되는건지?
export default function Products() {
  //const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  //꼭 fetch 브라이저 api를 이용해서 json파일을 가져와야 하는건가? 이게 보통 통상적인건지. 왜냐하면 이거 좀 헷갈려서 이걸로 공부를 해야하는지 알아야함
  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      });
    return () => {
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
  }, [checked]);
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <lable htmlFor="checkbox">Show Only 🔥Sale</lable>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
