import React from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

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
    <div key={file.name}>
      <div
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
    </div>
  ));
  return (
    <div>
      <WrapMakeImgHead>
        새 게시물 만들기
        {files[0] && (
          <HeadBtn
            onClick={() => {
              SetMakeProcess("maketext");
            }}
          >
            다음
          </HeadBtn>
        )}
      </WrapMakeImgHead>
      <hr style={{ border: "solid 1px black" }} />
      <div {...getRootProps()} style={{ width: "100%", height: "726px" }}>
        <input {...getInputProps()} />
        <p>Drop files here</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {images}
          <InputText placeholder="문구입력.." />
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
