import React from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import KakaoMapForPost from"./KakaoMapForPost"

const MakePostImg = ({ files, setFiles, SetMakeProcess }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  return (
    <div>
      <WrapMakeImgHead>
        <div style={{ width: "100%", height: "50px", fontWeight: "bold" }}>
          새 게시물 만들기
        </div>
        <HeadBtn onClick={() => {}}>공유하기</HeadBtn>
      </WrapMakeImgHead>
      <div style={{ position: "relative", bottom: "70px"}}>
        <div style={{ display: "flex",borderTop:"1px solid black" }}>
          <div
            {...getRootProps()}
            style={{
              width: "70%",
              height: "561px",
              backgroundColor:"black",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <input {...getInputProps()} style={{ display: "none" }} />
            {files[0] && (
              <img
                alt=""
                src={files[0].preview}
                style={{ width: "100%", height: "561px", objectFit: "contain" }}
              />
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "561px",
              width: "28%",
            }}
          >
            <WrapText>
              <WrapFrofile>
              <WrapImage>
                <img
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlmv-ZuA9KAj9yb4y7UwSBYx_PjnSrBQJY-A&usqp=CAU"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
                
              </WrapImage>
              <div style={{fontSize:"20px",marginLeft:"10px",fontWeight:"bold"}}>케이오스</div>
              </WrapFrofile>
            
             

              <InputText
                placeholder="문구입력.."
                style={{ height: "340px", marginTop: "10px", width: "100%" }}
              />
            </WrapText>
          </div>
        </div>
      </div>
      
      <WrapMap>
      <KakaoMapForPost/>
      </WrapMap>
     
      
    </div>
  );
};

export default MakePostImg;

const WrapMakeImgHead = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 18px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: -30px;
  font-size: 18px;
    /* border-top: 1px solid black; */

`;
const WrapText = styled.div`
  width: 100%;
  height: 600px;
  padding-top: 20px;
  /* border-top: 1px solid black; */
  /* border-bottom: 1px solid black; */
  margin-left: 0.5rem;
  /* background-color: green; */
`;
const WrapFrofile=styled.div`
display: flex;
align-items:center;
height: 30px;
`
const WrapImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
`;
const HeadBtn = styled.div`
  color: rgb(0, 149, 246);
  width: 100%;
  height: 50px;
  position: relative;
  bottom: 50px;
  margin-top: 2px;
  text-align: end;

  /* background-color: green; */
`;
const InputText = styled.textarea`
  width: 50%;
  height: 200px;
  resize: none;
  margin-top: 10px;
  border: none;

`;
const WrapMap=styled.div`
  width:100%;
  height: 500px;
  margin-top: -70px;
 
`
