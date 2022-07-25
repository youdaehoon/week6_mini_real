import React from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import Frofile from "./Frofile";

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
  const images = files.map((file) => (
    <div
      key={file.name}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
        width: "50%",
      }}
    >
      <img src={file.preview} style={{ width: "100%" }} alt="preview" />
    </div>
  ));

  return (
    <div>
      <WrapMakeImgHead>
        새 게시물 만들기
        {files[0] && <HeadBtn onClick={() => {}}>공유하기</HeadBtn>}
      </WrapMakeImgHead>
      <hr style={{ border: "solid 1px black" }} />
      <div style={{ display: "flex" }}>
        <div
          {...getRootProps()}
          style={{
            width: "50%",
            height: "372px",
            backgroundImage: "url('https://placehold.jp/400x400.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <input {...getInputProps()} style={{ display: "none" }} />
          {files[0] && (
            <img
              src={files[0].preview}
              style={{ width: "100%", height: "372px", objectFit: "contain" }}
            />
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "372px",
            width: "50%",
          }}
        >
          <div style={{ height: "30px", marginTop: "-15px" }}>
            <Frofile />
          </div>

          <InputText
            placeholder="문구입력.."
            style={{ height: "340px", marginTop: "10px", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MakePostImg;

const WrapMakeImgHead = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 20px;
`;
const HeadBtn = styled.span`
  color: rgb(0, 149, 246);
  position: absolute;
  right: 20px;
`;
const InputText = styled.textarea`
  width: 50%;
  height: 200px;
  resize: none;
  margin-top: 10px;
`;
