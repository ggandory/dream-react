import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          name="Bob"
          size={200}
        />
      </Navbar>
    </div>
  );
}
//children이라는 prop으로 위에 Avatar안의 내용들이 들어간다 즉 위에 있는 Navbar안에 들어가는 내용에 따라 달라지는거임 기존 header의 기능은 사용을 하고
//이거 이해는 쉬운데 사용을 해봐야하지 괜찮을듯
function Navbar({ children }) {
  return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}
