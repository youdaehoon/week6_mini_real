import { commentSliceAction } from "../reducers/commentReducer";
import api from "../api";

function GetCommentsList(postId) {
  return async (dispatch) => {
    api
      .get(`posts/${postId}/comments`)
      .then((res) => {
        console.log(res.data.comments);
        dispatch(commentSliceAction.getCommentsList(res.data.comments))
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

function PostComment(postId) {
  return async (dispatch) => {
    //   api
    //     .post(`posts/${postId}/comment`,)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
  };
}

function DelComment(arrComment) {
  return async (dispatch) => {
    api
      .delete(`posts/comment`,arrComment)
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
  DelComment,
};
