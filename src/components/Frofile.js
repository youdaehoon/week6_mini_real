import React from "react";
import styled from "styled-components";

const Frofile = () => {
  return (
    <WrapFrofile>
      <ControlFrofileImg>
        <FrofileImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlmv-ZuA9KAj9yb4y7UwSBYx_PjnSrBQJY-A&usqp=CAU" />
      </ControlFrofileImg>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "90%",
          alignItems: "center",
        }}
      >
        <ControlNick>닉네임이 들어갑니다.</ControlNick>
      </div>
    </WrapFrofile>
  );
};

export default Frofile;

const WrapFrofile = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0 10px 0;
  height: 100%;
  background-color: white;
`;
const ControlFrofileImg = styled.div`
  width: 20px;
  height: 100%;
  border-radius: 25px;
  overflow: hidden;
`;
const ControlNick = styled.div`
  width: 90%;
  text-align: center;
  /* background-color: green; */
`;
const FrofileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
