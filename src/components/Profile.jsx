import React from "react";
import Avatar from "./Avatar";
//props로 쓰면 일일이 props.name 이런식으로 써야 하는데 props에 {image, name, title} 이렇게 써주면 굳이 props 안써줘도 됨
export default function Profile({ image, name, title, isNew }) {
  return (
    <div className="profile">
      <Avatar image={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
