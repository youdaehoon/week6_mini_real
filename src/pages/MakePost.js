import React, { useEffect } from "react";
import styled from "styled-components";
import Frofile from "../components/Frofile";

const Makepost = () => {
  const [UploadImg, SetUploadImg] = React.useState(
    "https://www.ty-magnet.com/noimg/noimg.jpg"
  );
  const RefImg = React.useRef(null);
  const DetectImg = (e) => {
    SetUploadImg(URL.createObjectURL(e.target.files[0]));
  };
  const onCickImageUpload = () => {
    RefImg.current.click();
  };

  useEffect(() => {
    console.log(UploadImg);
  }, [UploadImg]);
  return (
    <WrapMakePost>
      <WrapPicAndReply>
        <WrpaImg>
        
          <Img src={UploadImg}  />
        
        </WrpaImg>

        <WrapText>
          <input
            type="file"
            ref={RefImg}
            onChange={DetectImg}
            style={{ display: "none" }}
          />
          <div style={{ width: "100%", height: "30px" }}>
            <MyBtn onClick={onCickImageUpload}>파일 선택</MyBtn>
          </div>
          <div style={{width:"100%"}}>
            <WrapFrofile>
              <Frofile />
            </WrapFrofile>
            <InputText placeholder="문구입력.."/>
          </div>
        </WrapText>
      </WrapPicAndReply>
      <br />

      <WrapMap></WrapMap>

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
  max-width: 1206px;
  width: 100%;
  margin-top: 40px;

  padding: 30px;


`;

const WrapPicAndReply = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: white;
  @media (max-width: 914px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const WrapMap=styled.div`
  width: 500px;
  height: 500px;
  background-color:green;
`
const Img=styled.img`
width:400px;
height: 400px;
object-fit: contain;
  
`
const WrpaImg = styled.div`
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* max-width: 400px; */
  height: 400px;
  width: 50%;
  @media (max-width: 914px) {
    width: 70%;
  }
`;
const WrapText = styled.div`
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 400px;
  padding: 0 20px 0 20px;
  margin-left: 10px;
`;
const MyBtn = styled.button`
  background-color: #0d99ff;
  color: white;
  border: 0px solid white;
  border-radius: 4px;
  width: 200px;
  height: 30px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const WrapFrofile=styled.div`
  height:20px;
`
const InputText = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  margin-top: 10px;
`;
