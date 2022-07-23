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
          <input type="file" ref={RefImg} onChange={DetectImg} />
          <div>
            <input rows="14" cols="70"/>
          </div>
        </WrapText>
      </WrapPicAndReply>
      <div>지도api</div>
      <div>
        <MyBtn>글쓰기</MyBtn>
      </div>
    </WrapMakePost>
  );
};

export default Makepost;
const WrapMakePost=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const WrapPicAndReply = styled.div`
  display: flex;
  flex-direction: row;
  height: 500px;
  width: 1200px;
`;
const WrpaImg = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  
`;
const WrapText = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  
`;

const MyBtn=styled.button`
  width: 100%;
`
