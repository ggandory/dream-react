import { useEffect, useState } from "react";

//훅은 외부인사람들과 교환할 데이터를 나타내주면 된다. jsx 컴포넌트 계열은 ui도 포함해서 나타내주는 스타일이고
//Hooks은 (함수들은) 값의 재사용이 아니라 로직의 재상용을 위한 것이다.(이해는 잘 안가네)
export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      })
      .catch((e) => setError("에러가 발생했음!"))
      .finally(() => setLoading(false));
    return () => {
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
  }, [salesOnly]);

  return [loading, error, products];
}
