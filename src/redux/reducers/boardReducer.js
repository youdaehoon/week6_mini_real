import { createSlice } from "@reduxjs/toolkit";

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
      writer:{ 
        nickname: "작성자 닉네임",
        username: "작성자 아이디",
        profile: null
      },
      uploadImageUrl: gamsung_01,
      Lat: "33.450539704220056",
      Lng: "126.57101693441382",
    },

    {
      id: "werwerewcxvcxx23223",
      writeDate: "2022-07-22 18:55:28",
      contents: "디자이너님이 추천하신 2번사진 잘쓰고있습니다 꺼억",
      writer:{ 
        nickname: "작성자 닉네임",
        username: "작성자 아이디",
        profile: null
      },
      uploadImageUrl: gamsung_02,
      Lat: "35.87553268645352",
      Lng: "128.6057222910765",
    },
    {
      id: "vcxvqxewq232343sa",
      writeDate: "2022-07-22 18:55:28",
      contents: "디자이너님이 추천하신 3번사진 잘쓰고있습니다 꺼억",
      writer:{ 
        nickname: "작성자 닉네임",
        username: "작성자 아이디",
        profile: null
      },
      uploadImageUrl: gamsung_03,
      Lat: "35.885234406854465",
      Lng: "128.6333804903908",
    },
    {
      id: "hgfdhcscweew2",
      writeDate: "2022-07-22 18:55:28",
      contents:
        "이거는 엄청길어지면어떻게될지 테스트가 하고싶으신가봐요이거는 엄청길어지면어떻게될지 테스트가 하고싶으신가봐요이거는 엄청길어지면어떻게될지 테스트가 하고싶으신가봐요이거는 엄청길어지면어떻게될지 테스트가 하고싶으신가봐요이거는 엄청길어지면어떻게될지 테스트가 하고싶으신가봐요이거는 엄청길어지면어떻게될지 테스트가 하고싶으신가봐요이거는 엄청길어지면어떻게될지 테스트가 하고싶으신가봐요이거는 엄청길어지면어떻게될지 테스트가 하고싶으신가봐요이거는 엄청길어지면어떻게될지 테스트가 하고싶으신가봐요",
      writer:{ 
        nickname: "작성자 닉네임",
        username: "작성자 아이디",
        profile: null
      },
      uploadImageUrl: gamsung_04,
      Lat: "35.8260138539907",
      Lng: "128.61587781119",
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
      
      
    },
    loadboard(state,action){
      state.board = action.payload ;
    },
    
  },
});

export const boardSliceAction = boardSlice.actions;
export default boardSlice.reducer;
