import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import KakaoMapForDetail from "../components/KakaoMapForDetail";
import gamsung_02 from "../image/gamsung_02.jpg"

const Detail = ({
  boardImg = gamsung_02,
  Cardkey,
}) => {
  console.log(Cardkey);
  const selectPosition = { La: 128.5459692503228, Ma: 35.826131559945495 };
  const [commentBt,setCommentBt] = useState(false);
  const commentInput= useRef();
  const btState = (e) =>{
    if (commentInput.current.value!=""){
      setCommentBt(true);
    } else{
      setCommentBt(false);
    }
  }
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
              <CommentsInput ref={commentInput} onChange={(e)=>btState()} placeholder="댓글 달기..."/>
              <CommentsButton className={commentBt?"active":"unactive"}>게시</CommentsButton>
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
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const PhotoArea = styled.div`
  width: 70%;
  max-height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 1200px) {
      width: 100%;
  }
`;

const CommentsArea = styled.div`
  width: 30%;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 700px;
  }
`;

const CommentsBox = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1200px) {
    border-radius: 0;
  }
`;

const CommentsInputArea = styled.div`
  width: 95%;
  height: 55px;
  background: transparent;
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  .active {
    cursor: pointer;
    color:#0c8ce9;
  }
  .unactive {
    cursor: auto;
    color:#8cbde1;
  }
`;

const CommentsInput = styled.input`
  font-size: 16px;
  outline: none;
  background-color: white;
  border-radius: 2rem 0 0 2rem;
  border: 1rem solid white;
  width: 80%;
  height: 25px;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

const CommentsButton = styled.button`
  outline: none;
  font-size: 15px;
  font-weight: bold;
  border-color: transparent;
  border-radius: 0 2rem 2rem 0;
  background: white;
  color: #0c8ce9;
  width: 20%;
  height: 107%;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    width: 10%;
  }
  @media screen and (max-width: 800px) {
    width: 20%;
    font-size: 12px;
  }
`;

const CommentsShowArea = styled.div`
  background: white;
  width: 95%;
  max-height: 1000px;
  border-radius: 0.5rem 0.5rem;
  overflow-y: scroll;
`;

const DatailBottomFrame = styled.div`
  width: 100%;
  height: auto;
  background-color: #d9d9d9;
  border-radius: 0 0 10px 10px;
`;

const DetailBottomArea = styled.div`
  margin: 0.5rem;
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
    margin: 0rem;
  }
`;

const DetailContextField = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  background: white;
  border-radius: 0 0.5rem 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    margin-top: 0.5rem;
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
