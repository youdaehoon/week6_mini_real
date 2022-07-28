import React from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { commentAction } from "../redux/actions/commentAction";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

const CommentShowBox = ({ postId }) => {
  const { comments, commentsLoading } = useSelector(
    (state) => state.commentReducer
  );
  const username = useSelector(
    (state) => state.userReducer.user.username
  );
  const dispatch = useDispatch();


  console.log(comments);

  React.useEffect(() => {
    dispatch(commentAction.GetCommentsList(postId));
    //dispatch(commentAction.GetCommentsList(postId));
  }, []);

  console.log(commentsLoading);
  if (commentsLoading) {
    return (
      <SpinnerWrap>
        <ClipLoader
          color="black"
          commentsLoading={commentsLoading}
          size={100}
        />
      </SpinnerWrap>
    );
  } else
    return (
      <CommentsShowArea>
        {comments &&
          comments.map((commmentInfo, index) => (
            <Comment
              key={index}
              postId={postId}
              username={username}
              writer={commmentInfo.writer}
              content={commmentInfo.content}
              createdAt={commmentInfo.createdAt}
              commentId={commmentInfo.commentId}
            />
          ))}
      </CommentsShowArea>
    );
};

const SpinnerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  width: 100%;
  height: 100%;
  max-height: 1000px;
  border-radius: 0.5rem 0.5rem;
  overflow-y: auto;
`;

const CommentsShowArea = styled.div`
  background: white;
  width: 95%;
  height: 100%;
  max-height: 1000px;
  border-radius: 0.5rem 0.5rem;
  overflow-y: auto;
`;

export default CommentShowBox;
