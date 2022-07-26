import React from "react";
import styled from "styled-components";
import instgramletter from "../image/InstagramLetter.png";
import {useDispatch}from"react-redux"
import { userSignUp } from "../redux/actions/UserAction";

const Signup = () => {
  const [MyFrofileImg, SetFrofileImg] = React.useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlmv-ZuA9KAj9yb4y7UwSBYx_PjnSrBQJY-A&usqp=CAU"
  );
  const [ImgForServerType,SetImgForServerType]=React.useState(null)
  const [Nickname, SetNickname] = React.useState("닉네임이 나타납니다.!");
  const RefNick = React.useRef(null);
  const RefProfileImg = React.useRef(null);
  const RefEmail=React.useRef(null);
  const RefPassword=React.useRef(null);
  const RefRePasswod=React.useRef(null);

  const dispatch=useDispatch();
 

  const Signup=()=>{
    dispatch(userSignUp(
      {
        username:RefEmail.current.value,
        password:RefPassword.current.value,
        rePassword:RefRePasswod.current.value,
        nickname:RefNick.current.value,
        profile:null,
      }
    ))
    
    

  }


  const PreviewFrofileImg = (e) => {
    SetFrofileImg(URL.createObjectURL(e.target.files[0]));
    SetImgForServerType(e.target.files[0])
    console.log(ImgForServerType)
  };
  const PreviewFrofileNick = (e) => {
    SetNickname(e.target.value);
    console.log(e.target.value);
  };
  const onCickImageUpload = () => {
    RefProfileImg.current.click();
  };

  return (
    <WrapLogin>
      <img src={instgramletter} width="50%" style={{ marginTop: "60px" }} />
      <Margin_10px>
        <WrapInput>
          <MyInput placeholder="이메일" ref={RefEmail} />
          <MyInput placeholder="비밀번호" ref={RefPassword} />

          <MyInput placeholder="비밀번호확인"ref={RefRePasswod} />
          <MyInput
            placeholder="닉네임"
            ref={RefNick}
            onChange={PreviewFrofileNick}
          />
          <input
            type="file"
            ref={RefProfileImg}
            style={{ display: "none" }}
            onChange={PreviewFrofileImg}
          />
          <button onClick={onCickImageUpload} style={{ marginTop: "10px" }}>
            프로필 선택
          </button>
          <WrapFrofile>
            <ControlFrofileImg>
              <FrofileImg src={MyFrofileImg} />
            </ControlFrofileImg>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "90%",
                alignItems: "center",
              }}
            >
              <ControlNick>{Nickname}</ControlNick>
            </div>
          </WrapFrofile>
        </WrapInput>
        <Mybtn onClick={Signup}>회원가입</Mybtn>
        <WrapLinkText>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <LinkText>아이디/</LinkText>
            <LinkText>비밀번호찾기</LinkText>
          </div>

          <p />
          <LinkText >회원가입</LinkText>
        </WrapLinkText>
      </Margin_10px>
    </WrapLogin>
  );
};

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

const WrapFrofile = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const ControlFrofileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
`;

const ControlNick = styled.div`
  width: 90%;
  font-weight: bold;
`;

const FrofileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

export default Signup;