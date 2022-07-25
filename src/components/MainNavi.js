import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Signup from "../pages/Signup";

const MainNavi = (props) => {
  const [ModalLogin, SetModalLogin] = props.props.slice(0, 2);
  const [ModalLoginOrSignup, SetModalLoginOrSignup] = props.props.slice(2.2);

  console.log("회원가입 모달도", ModalLogin, ModalLoginOrSignup);

  const navigate = useNavigate();
  return (
    <NaviFrame>
      <NaviWrap>
        <a href="/">
          <h1>instagram</h1>
        </a>
        <span>
          <button
            onClick={() => {
              SetModalLogin(true);
              SetModalLoginOrSignup("login");
            }}
          >
            로그인
          </button>
          <button
            onClick={() => {
              SetModalLogin(true);
              SetModalLoginOrSignup("signup");
            }}
          >
            회원가입
          </button>
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
    color: black;
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

  span {
    margin-right: 10%;
    button {
      margin-left: 1rem;
      border: 2px solid black;
      background-color: transparent;
      outline: none;
    }
  }
`;

export default MainNavi;
