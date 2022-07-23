import React from "react";
import styled from "styled-components";

const Signup = () => {
    const [MyFrofileImg,SetFrofileImg]=React.useState(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlmv-ZuA9KAj9yb4y7UwSBYx_PjnSrBQJY-A&usqp=CAU"
    );
    const UploadFrofileImg=(e)=>{
        SetFrofileImg(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <WrapLogin>
      <Title>회원가입</Title>
      <Margin_10px>
        <WrapInput>
          <MyInput placeholder="이메일" />
          <MyInput placeholder="비밀번호" />
          <MyInput placeholder="비밀번호확인" />
          <MyInput placeholder="닉네임" />
          <input type="file" onChange={UploadFrofileImg}/>
          <WrapFrofile>
            <ControlFrofileImg>
              <FrofileImg src={MyFrofileImg} />
            </ControlFrofileImg>
            <ControlNick>닉네임</ControlNick>
          </WrapFrofile>
        </WrapInput>
        <Mybtn>회원가입</Mybtn>
        <WrapLinkText>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <LinkText>아이디/</LinkText>
            <LinkText>비밀번호찾기</LinkText>
          </div>
          <LinkText>회원가입</LinkText>
        </WrapLinkText>
      </Margin_10px>
    </WrapLogin>
  );
};

export default Signup;

const WrapLogin = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d6d0d0;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 600px;
  padding: 20px 0 20px 0;
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
const WrapFrofile=styled.div`
    display: flex;
    flex-direction: row;
`
const ControlFrofileImg = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
  
`;
const ControlNick=styled.div`
    width : 90%;
    text-align: center;
   
`
const FrofileImg = styled.img`
   width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Mybtn = styled.button`
  background-color: #0d99ff;
  color: white;
  border: 0px solid white;
  border-radius: 4px;
  width: 100%;
`;
const WrapLinkText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LinkText = styled.div`
  font-size: 12px;
`;
