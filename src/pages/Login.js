import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate();
  return (
    <WrapLogin>
      <Title>로그인</Title>
      <Margin_10px>
        <WrapInput>
          <MyInput  placeholder="이메일" />
          <MyInput  placeholder="비밀번호" />
        </WrapInput>
        <Mybtn onClick={()=>{navigate('/')}}>로그인</Mybtn>
        <WrapLinkText>
          <div style={{display:"flex",flexDirection:"row"}}>
            <LinkText>아이디/</LinkText><LinkText>비밀번호찾기</LinkText>
          </div>
          <LinkText onClick={()=>{navigate('/signup')}}>회원가입</LinkText>
        </WrapLinkText>
      </Margin_10px>
    </WrapLogin>
  );
};

export default Login;

const WrapLogin = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d6d0d0;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 70vh;
  padding: 20px 0 20px 0;
  border-radius: 10px;
  @media (max-width: 914px) {
    width: 90vw;
  }
`;
const Margin_10px = styled.div`
  margin: 0 10px 0 10px;
  width: 60%;
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
  border: 0px solid white;
  border-radius: 5px;
  height: 20px;
`;
const Mybtn = styled.button`
  background-color: #0d99ff;
  color: white;
  border: 0px solid white;
  border-radius: 4px;
  width: 100%;
  height: 3z0px;
  margin-bottom: 10px;
`;
const WrapLinkText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LinkText = styled.div`
  font-size: 12px;
`;
