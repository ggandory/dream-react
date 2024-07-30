import React, { useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentor() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev, current });
  };

  const handleAdd = () => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    dispatch({ type: "added", name, title });
  };

  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({ type: "deleted", name });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        //저기 위에 h1 안에 p태그 안에있는 mentor, index관련해서 이해가 안감 그리고 key에도 index넣어주는것도
        //리액트에서는 내부에 있는 객체나 배열의 내부를 직접적으로 바꾸면 안된다
        //참조를 하는걸 보기때문에 내부가 바뀌어도 변경된 것을 인지 못하고 새로운 객체나 배열을 만들어서 그걸 참조해야지 변경이 가능함(근데 뭔소리인지 모르겠네)
        //새로운 껍데기를 만들어야 한다고 함
        //질문
        //왜 객체 내부에서 값을 직접 변경해버리는 것은 업데이트가 되지 않는지
        //동일한 참조값에서 내용을 수정해봤자 리액트는 참조값을 가지고 새로운 업데이트가 일어났는지를 판단하므로 업데이트를 하지 않는다는데 이게 뭔소리임
        //참조값을 변경해도 업데이트로 인식 못하고 아예 새로운 참조값을 만들어서 거기에 변경내용을 적용해주면 리액트가 업데이트가 된다는 소리인지?

        //그리고 원래는 redux랑 mobx라이브러리를 사용을 했었다고 하는데 이거는 이제 사용안하는건지?
        onClick={handleUpdate}
      >
        멘토의 이름을 바꾸기
      </button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
