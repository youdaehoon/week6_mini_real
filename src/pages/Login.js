import React from "react";
import styled from "styled-components";
import instgramletter from "../image/InstagramLetter.png";

const Login = () => {
  
  return (
    <WrapLogin>
      <img src={instgramletter} width="50%" style={{ marginTop: "60px" }} />
      <Margin_10px>
        <WrapInput>
          <MyInput placeholder="이메일" />
          <MyInput placeholder="비밀번호" />
          <Mybtn
            onClick={() => {
             
            }}
          >
            로그인
          </Mybtn>
        </WrapInput>

        <WrapLinkText>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <LinkText>아이디/</LinkText>
            <LinkText>비밀번호찾기</LinkText>
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
const Title = styled.div`
  font-weight: bold;
`;
const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const MyInput = styled.input`
  margin-bottom: 10px;
  border: 0.1px solid #dbdbdb;
  border-radius: 5px;
  height: 40px;
`;
const Mybtn = styled.button`
  color: white;
  background-color: rgb(182 217 240);
  font-size: 14px;
  border: 0px solid white;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  margin-top: 30px;
`;
const WrapLinkText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LinkText = styled.div`
  font-size: 12px;
`;
