import { createSlice, current } from "@reduxjs/toolkit";

import gamsung_01 from "../../image/gamsung_01.jpg";
import gamsung_02 from "../../image/gamsung_02.jpg";
import gamsung_03 from "../../image/gamsung_03.jpg";
import gamsung_04 from "../../image/gamsung_04.jpg";



let initialState = {
  board: [
    {
      id: "dsadsacvxvreeeef",
      writeDate: "2022-07-22 18:55:28",
      contents: "디자이너님이 추천하신 1번사진 잘쓰고있습니다 꺼억",
      nickname: "케이오스",
      writerImage: "",
      image: gamsung_01,
      Lat: "위도",
      Lng: "경도",
    },
   
  ],

  comments: [
    {
      commentid: "댓글ID",
      writer: {
        nickname: "작성자 닉네임",
        username: "작성자 아이디",
        profile: gamsung_02,
      },
      content: "본문",
      createdAt: "댓글생성시간",
    },
   
  ],
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
      console.log(current(state))
      
    }
  },
});

export const boardSliceAction = boardSlice.actions;
export default boardSlice.reducer;
