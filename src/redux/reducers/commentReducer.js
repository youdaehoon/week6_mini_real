import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  commentsLoading: true,
  comments: [],
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    commentsRequest(state) {
      state.commentsLoading = true;
    },
    commentsRequestFail(state) {
      state.commentsLoading = false;
    },
    getCommentsList(state, action) {
      state.comments = action.payload
      state.commentsLoading = false;
    },
    // 리듀서 넣기
    // <액션1 함수 이름> (state,action){
    // 	// 내용
    // },
    // <액션2 함수 이름> (state,action){
    // 	// 내용
    // },
    // ......<액션 갯수만큼 계속 이어서 작성>
  },
});

export const commentSliceAction = commentSlice.actions;
export default commentSlice.reducer;
