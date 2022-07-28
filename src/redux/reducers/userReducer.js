import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  user:{
    username: null, 
    nickname: null, 
    profile: null, 
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    recodeUser(state,action){
      state.user = action.payload;
    },
    emptyuser(state){
      state.user = null;
    }
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

export const userSliceAction = userSlice.actions;
export default userSlice.reducer;
