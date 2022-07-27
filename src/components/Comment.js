import React from "react";
import styled from "styled-components";

const Comment = ({ writer,content,createdAt }) => {
  return (
    <CommentFrame>
      <CommentLeft>
        <ProfilePhoto>
          <img src={writer.profile} />
        </ProfilePhoto>
      </CommentLeft>
      <CommentMainFrame>
        <CommentMainFrameTop>
          <WriterTextZone>{writer.nickname}</WriterTextZone>
          {content}
        </CommentMainFrameTop>
        <CommentMainFrameBottom>
          <CommentDateZone>{createdAt}</CommentDateZone>
        </CommentMainFrameBottom>
      </CommentMainFrame>
    </CommentFrame>
  );
};

const CommentFrame = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const CommentLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const WriterTextZone = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const CommentDateZone = styled.div`
  font-weight: lighter;
  color: gray;
`;

const ProfilePhoto = styled.div`
  margin: 0.5rem 1rem;
  width: 50px;
  height: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  img {
    display: block;
    width: 50px;
    height: auto;
  }
`;

const CommentMainFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
`;

const CommentMainFrameTop = styled.div``;

const CommentMainFrameBottom = styled.div``;

export default Comment;
