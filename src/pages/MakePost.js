import React, { useEffect } from "react";
import styled from "styled-components";

const Makepost = () => {
  const [UploadImg, SetUploadImg] = React.useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlmv-ZuA9KAj9yb4y7UwSBYx_PjnSrBQJY-A&usqp=CAU"
  );
  const RefImg = React.useRef(null);
  const DetectImg = (e) => {
    SetUploadImg(URL.createObjectURL(e.target.files[0]));
  };
  const onCickImageUpload=()=>{
    RefImg.current.click()
  }

  useEffect(() => {
    console.log(UploadImg);
  }, [UploadImg]);
  return (
    <WrapMakePost>
      <WrapPicAndReply>
        <WrpaImg>
          <img src={UploadImg} style={{ width: "100%" }} />
        </WrpaImg>

        <WrapText>
          <input type="file" ref={RefImg} onChange={DetectImg} style={{display:"none"}} />
          <div style={{width:"100%",height:"30px"}}><MyBtn onClick={onCickImageUpload}>파일 선택</MyBtn></div>
          <div>
            <InputText />
          </div>
        </WrapText>
      </WrapPicAndReply>
      <br />
      <div>지도 api</div>
      <div>
        <MyBtn>글쓰기</MyBtn>
      </div>
    </WrapMakePost>
  );
};

export default Makepost;
const WrapMakePost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70vw;

  /* background-color: green; */
`;

const WrapPicAndReply = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  @media (max-width: 914px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const WrpaImg = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  @media (max-width: 914px) {
    width: 70%;
  }
`;
const WrapText = styled.div`
  /* background-color: blue; */
  background-color: #d6d0d0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height:100%;
`;
const MyBtn = styled.button`
  background-color: #0d99ff;
  color: white;
  border: 0px solid white;
  border-radius: 4px;
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
`;
const InputText = styled.input`
  width: 50%;
`;


