import { createSlice } from "@reduxjs/toolkit";

import gamsung_01 from "../../image/gamsung_01.jpg";
import gamsung_02 from "../../image/gamsung_02.jpg";
import gamsung_03 from "../../image/gamsung_03.jpg";
import gamsung_04 from "../../image/gamsung_04.jpg";

let initialState = {
  board: [],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    // 리듀서 넣기
    // <액션1 함수 이름> (state,action){
    // 	// 내용
    // },
    // <액션2 함수 이름> (state,action){
    // 	// 내용
    // },
    // ......<액션 갯수만큼 계속 이어서 작성>
    createboard(state,action){
      state.board.push(action.payload)
    },
    loadboard(state,action){
      state.board = action.payload ;
    },
    
  },
});

export const boardSliceAction = boardSlice.actions;
export default boardSlice.reducer;
