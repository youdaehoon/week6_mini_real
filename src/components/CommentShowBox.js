import React from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { commentAction } from "../redux/actions/commentAction";
import { useDispatch, useSelector } from "react-redux";

const CommentShowBox = ({postId}) => {
  const commmentsList = useSelector((state) => state.commentReducer.comments);
  const dispatch = useDispatch();

  console.log(commmentsList);

  React.useEffect(() => {
    dispatch(commentAction.GetCommentsList("2"));
  }, []);
  return (
    <CommentsShowArea>
      {commmentsList &&
        commmentsList.map((commmentInfo, index) => (
          <Comment
            key={index}
            writer={commmentInfo.writer}
            content={commmentInfo.content}
            createdAt={commmentInfo.createdAt}
            commentId={commmentInfo.commentId}
          />
        ))}
    </CommentsShowArea>
  );
};

const CommentsShowArea = styled.div`
  background: white;
  width: 95%;
  height: 100%;
  max-height: 1000px;
  border-radius: 0.5rem 0.5rem;
  overflow-y: auto;
`;

export default CommentShowBox;
