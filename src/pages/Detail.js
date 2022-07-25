import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import KakaoMapForDetail from "../components/KakaoMapForDetail";

const Detail = ({
  boardImg = "https://cdn.imweb.me/thumbnail/20190903/8c6f0688b77c5.jpg",
}) => {
  const contextId = useParams();
  const selectPosition = { La: 128.5459692503228, Ma: 35.826131559945495 };
  return (
    <DatailFrame>
      <DatailTopFrame>
        <PhotoArea>
          <img
            src={
              boardImg ? boardImg : "https://www.ty-magnet.com/noimg/noimg.jpg"
            }
          />
        </PhotoArea>
        <CommentsArea>
          <CommentsBox>
            <CommentsInputArea>
              <CommentsInput />
              <CommentsButton>작성하기</CommentsButton>
            </CommentsInputArea>
            <CommentsShowArea>
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </CommentsShowArea>
          </CommentsBox>
        </CommentsArea>
      </DatailTopFrame>
      <DatailBottomFrame>
        <DetailBottomArea>
          <DetailMapField>
            <KakaoMapForDetail selectPosition={selectPosition} />
          </DetailMapField>
          <DetailContextFrame>
            <DetailContextField>
              <DetailContextArea>
                글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.
              </DetailContextArea>
            </DetailContextField>
          </DetailContextFrame>
        </DetailBottomArea>
      </DatailBottomFrame>
    </DatailFrame>
  );
};

const DatailFrame = styled.div`
  display: flex;
  max-width: calc(1206px);
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const DatailTopFrame = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const PhotoArea = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  img {
    width: 600px;
    height: 600px;
    object-fit: contain;
    @media screen and (max-width: 600px) {
      width: 100%;
      height: 100vw;
    }
  }
`;

const CommentsArea = styled.div`
  width: 50%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 1200px) {
    margin-top: 1rem;
    width: 100%;
    height: 600px;
  }
`;

const CommentsBox = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 100%;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommentsInputArea = styled.div`
  width: 90%;
  height: 55px;
  background: transparent;
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const CommentsInput = styled.input`
  font-size: 20px;
  outline: none;
  background-color: white;
  border-radius: 1rem 0 0 1rem;
  border: 1rem solid white;
  width: 70%;
  height: 25px;
`;

const CommentsButton = styled.button`
  outline: none;
  border: 1rem solid #0c8ce9;
  border-radius: 0 1rem 1rem 0;
  background: #0c8ce9;
  color: white;
  width: 30%;
  height: 107%;
  cursor: pointer;
`;

const CommentsShowArea = styled.div`
  background: white;
  width: 90%;
  max-height: 600px;
  height: 80%;
  border-radius: 0.5rem 0.5rem;
  overflow-y: scroll;
`;

const DatailBottomFrame = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  height: auto;
  background-color: #d9d9d9;
  border-radius: 0.5rem 0.5rem;
  @media screen and (max-width: 1200px) {
    margin-left: 2%;
    margin-right: 2%;
  }
`;

const DetailBottomArea = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const DetailMapField = styled.div`
  background: #d9d9d9;
  width: 60%;
  max-height: 500px;
  height: 100%;
  border-radius: 0.5rem 0.5rem;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const DetailContextFrame = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin: -0.5rem;
  }
`;

const DetailContextField = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem 0 1rem 1rem;
  background: white;
  border-radius: 0.5rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    margin-top: 2rem;
    width: 100%;
    height: 100%;
  }
`;

const DetailContextArea = styled.div`
  width: 90%;
  text-align: center;
  white-space: pre-line;
  word-break: keep-all;
  @media screen and (max-width: 800px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export default Detail;
