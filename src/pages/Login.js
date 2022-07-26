import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import instgramletter from "../image/InstagramLetter.png";
import { useDispatch } from "react-redux";
import { userAction } from "../redux/actions/userAction";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userIdRef = useRef();
  const validationState = useRef(false);
  const userPasswordIdRef = useRef();
  const [notificationText, setNotificationText] = useState("");
  const [userData, setUserData] = useState({});

  const validation = (e) => {
    e.preventDefault();
    const userID = userIdRef.current.value.trim();
    const userPW = userPasswordIdRef.current.value;
    const regEmail =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    const regPassword = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;

    if (!regEmail.test(userID)) {
      validationState.current = false;
      setNotificationText("이메일 형식에 맞게 기재해주세요.");
    } else if (!regPassword.test(userPW)) {
      validationState.current = false;
      setNotificationText("비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.");
    } else {
      validationState.current = true;
      setUserData({ userID: userID, userPW: userPW });
      setNotificationText("");
    }
  };

  const userLogin = (e,userData) => {
    e.preventDefault();
    console.log(userData);
    dispatch(userAction.userLogin(userData));
  }


  return (
    <WrapLogin>
      <img src={instgramletter} width="50%" style={{ marginTop: "60px" }} />
      <Margin_10px>
        <WrapInput>
          <MyInput
            placeholder="이메일"
            ref={userIdRef}
            onChange={(e) => validation(e)}
          />
          <MyInput
            type="password"
            placeholder="비밀번호"
            ref={userPasswordIdRef}
            onChange={(e) => validation(e)}
          />
          <LinkText>{notificationText}</LinkText>
          {validationState.current ? (
            <Mybtn validationState={validationState.current}
              onClick={(e) => {
                userLogin(e,userData)
              }}
            >
              로그인
            </Mybtn>
          ) : (
            <Mybtn onClick={(e) => {
              e.preventDefault();
            }} validationState={validationState.current}>
              로그인
            </Mybtn>
          )}
        </WrapInput>

        <WrapLinkText>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <LinkText>아이디/</LinkText>
            <LinkText onClick={{}}>비밀번호찾기</LinkText>
          </div>

          <p />
          <LinkText
            onClick={() => {
             
            }}
          >
            회원가입
          </LinkText>
        </WrapLinkText>
      </Margin_10px>
    </WrapLogin>
  );
};

export default Login;

const WrapLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding: 20px 0 20px 0;
  border-radius: 10px;
`;

const Margin_10px = styled.div`
  margin: 20px 10px;
  width: 80%;
`;

const WrapInput = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  div {
    color: red;
    height: 20px;
  }
`;

const MyInput = styled.input`
  margin-bottom: 10px;
  border: 0.1px solid #dbdbdb;
  border-radius: 5px;
  height: 40px;
`;

const Mybtn = styled.button`
  ${({ validationState }) => {
    return css`
      color: white;
      background-color:${validationState?"rgb(50,160,232);":"rgb(182 217 240);"} 
      font-size: 14px;
      border: 0px solid white;
      border-radius: 4px;
      width: 100%;
      height: 40px;
      margin-bottom: 10px;
      margin-top: 10px;
    `;
  }}
`;

const WrapLinkText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LinkText = styled.div`
  font-size: 12px;
`;
