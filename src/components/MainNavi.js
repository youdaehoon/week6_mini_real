import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsFillPersonPlusFill } from "react-icons/bs";

const MainNavi = (props) => {
  const [ModalLogin, SetModalLogin] = props.props;

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
            }}
          >
            Login
          </button>
          <div
            onClick={() => {
              navigate("/signup");
            }}
          >
            <BsFillPersonPlusFill size={55} />
          </div>
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 10%;
    button {
      margin-left: 1rem;
      border: 2px solid black;
      background-color: black;
      color: white;
      padding: 0 2rem 0 2rem;
      border-radius: 1rem;
      outline: none;
      font-size: 20px;
      border: 1px solid black;
      transition: all 150ms ease-out;
      &:hover {
        border: 1px solid black;
        box-shadow: 3px 5px 2px rgb(0, 0, 0, 0.4);
      }
    }
    div{
      margin-left: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s linear;
      &:hover {
        filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
      }
    }
  }
`;

export default MainNavi;
