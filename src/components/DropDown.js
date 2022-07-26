import { useRef, useState } from "react";
import styled, { css } from "styled-components";
import useDetectClose from "../shared/useDetectCLose";

const DropDown = () => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  //   const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  return (
    <DropDownMenu>
      <button onClick={() => setIsOpen(!isOpen)}>메뉴 보기</button>

      <Menu
        ref={dropDownRef}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        className="menu active"
      >
        <li>마이페이지</li>
        <li>로그아웃</li>
      </Menu>
    </DropDownMenu>
  );
};

const DropDownMenu = styled.div`
  ${({ isOpen, setIsOpen }) => {
    return css`
      .active:hover {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      .active:not(:hover) {
        opacity: 0;
        visibility: hidden;
        transform: translateY(0);
      }
    `;
  }}
`;
const Menu = styled.ul`
  ${({ isOpen, setIsOpen }) => {
    return css`
      background: #fff;
      border-radius: 8px;
      position: absolute;
      top: 30px;
      right: 0;
      width: 150px;
      text-align: center;
      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-20px);
      transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
      padding: 10px;
    `;
  }}
`;

export default DropDown;
