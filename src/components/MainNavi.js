import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  BsPersonPlus,
  BsPersonPlusFill,
  BsPlusSquareFill,
  BsPlusSquare,
} from "react-icons/bs";
import { HiKey, HiOutlineKey } from "react-icons/hi";
import DropDown from "./DropDown";

const MainNavi = ({
  ModalOpen,
  SetModalOpen,
  ModalRequiredName,
  SetModalRequiredName,
  is_login,
  setIsLogin,
  profile,
}) => {
  console.log("회원가입 모달도", ModalOpen, ModalRequiredName);

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
            {ModalOpen && ModalRequiredName == "login" ? (
              <HiKey size={30} />
            ) : (
              <HiOutlineKey size={30} />
            )}
          </div>
          <div
            onClick={() => {
              SetModalOpen(true);
              SetModalRequiredName("signup");
            }}
          >
            {ModalOpen && ModalRequiredName == "signup" ? (
              <BsPersonPlusFill size={30} />
            ) : (
              <BsPersonPlus size={30} />
            )}
          </div>

          <div
            onClick={() => {
              SetModalOpen(true);
              SetModalRequiredName("makepost");
            }}
          >
            {ModalOpen && ModalRequiredName == "makepost" ? (
              <BsPlusSquareFill size={30} />
            ) : (
              <BsPlusSquare size={30} />
            )}
          </div>
          <DropDown/>
          <ProfilePhoto>
            <img src={profile} />
          </ProfilePhoto>
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
  z-index: 1;
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

const ProfilePhoto = styled.div`
  margin: 0.5rem 1rem;
  width: 35px;
  height: 35px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  img {
    display: block;
    width: 50px;
    height: auto;
  }
`;

export default MainNavi;
