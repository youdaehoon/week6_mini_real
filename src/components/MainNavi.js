import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonPlus, BsPersonPlusFill, BsPlusSquareFill,BsPlusSquare } from "react-icons/bs";
import { HiKey, HiOutlineKey } from "react-icons/hi"

const MainNavi = ({ ModalOpen, SetModalOpen,ModalRequiredName, SetModalRequiredName }) => {

  console.log("회원가입 모달도", ModalOpen, ModalRequiredName);

  const navigate = useNavigate();
  return (
    <NaviFrame>
      <NaviWrap>
        <a>
          <h1>instagram</h1>
        </a>
        <span>
          <div
            onClick={() => {
              SetModalOpen(true);
              SetModalRequiredName("login");
            }}
          >
            {ModalOpen&&ModalRequiredName=="login"?(<HiKey size={30}/>):(<HiOutlineKey size={30}/>)}
          </div>
          <div
            onClick={() => {
              SetModalOpen(true);
              SetModalRequiredName("makepost");
            }}
          >
            {ModalOpen&&ModalRequiredName=="makepost"?(<BsPlusSquareFill size={30}/>):(<BsPlusSquare size={30}/>)}
          </div>
          <div
            onClick={() => {
              SetModalOpen(true);
              SetModalRequiredName("signup");
            }}
          >
            {ModalOpen&&ModalRequiredName=="signup"?(<BsPersonPlusFill size={30}/>):(<BsPersonPlus size={30}/>)}
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
  z-index: 0;
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
      font-size: 32px;
      border: 0px solid transparent;
      background: transparent;
      color: black;
      transition: text-shadow 150ms ease-out;
    }
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 10%;
    div {
      margin-left: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s linear;
      &:hover {
        filter: drop-shadow(2px 2px 5px rgb(0 0 0 / 0.4));
      }
    }
  }
`;

export default MainNavi;
