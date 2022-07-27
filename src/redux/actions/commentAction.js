import { createAsyncThunk } from "@reduxjs/toolkit";
import { commentSliceAction } from "../reducers/commentReducer";
import api from "../api";

const DelComment = createAsyncThunk(
    'comment/delcomment',
    async (commentId) => {
      const response = await api
      .delete(`posts/comment/${commentId}`)
      return response
    }
  )

//   function DelComment(commentId) {
//     return async (dispatch) => {
//       await api
//         .delete(`posts/comment/${commentId}`)
//         .then((res) => {
//           console.log(res);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//   }

function GetCommentsList(postId) {
  return async (dispatch) => {
    dispatch(commentSliceAction.commentsRequest());
    await api
      .get(`posts/${postId}/comments`)
      .then((res) => {
        console.log(res.data.comments);
        dispatch(commentSliceAction.getCommentsList(res.data.comments));
      })
      .catch((err) => {
        dispatch(commentSliceAction.commentsRequestFail());
        console.log(err);
      });
  };
}

function PostComment(postId, content) {
  return async (dispatch) => {
    await api
      .post(`posts/${postId}/comments`, content)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export const commentAction = {
  GetCommentsList,
  PostComment,
  DelComment,
};
