import React from "react";
import styled from "styled-components";

const MainNavi = () => {
  return (
    <NaviFrame>
      <NaviWrap>
        <a href="/">
          <h1>instagram</h1>
        </a>
        <span>
          <button>로그인</button>
          <button>로그아웃</button>
        </span>
      </NaviWrap>
    </NaviFrame>
  );
};

const NaviFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  width: 100%;
`;

const NaviWrap = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    margin-left: 10%;
    text-decoration: none;
    color: #black;
    > h1 {
      text-align: center;
      font-size: 25px;
      border: 0px solid transparent;
      background: transparent;
      color: black;
      transition: text-shadow 150ms ease-out;
      &:hover {
        text-shadow: 2px 2px 2px rgb(0, 173, 173, 1);
      }
    }
  }
`;

export default MainNavi;
