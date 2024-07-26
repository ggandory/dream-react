import React, { useState } from "react";

/**
  const obj= {
   name: '엘리
   title: '개발자',
   mentor: {
    name: '밥',
    title: '시니어개발자',
    },
  }; 

  const name =  '업데이트 이름';
  const update = {
  ...obj,       여기 ...뭐지? 스프레드연산자라고 하는데
  mentor: {...obj.mentor, name},
  };
 */

export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: "허건",
    title: "개발자",
    mentor: {
      name: "밥",
      title: "시니어개발자",
    },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name: name },
          })); //key인 name과 value인 name이 같으면 name으로 그냥 표현해도 됨 굳이 name: name이렇게 안하고
          //가로안에 가로 들어가고 안들어가고 헷갈리네 뭔차이인지
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, title: title },
          }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
