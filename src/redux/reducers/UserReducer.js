import {createSlice} from '@reduxjs/toolkit';

let initialState = {};

const UserSlice = createSlice({
    name:"",
    initialState,
    reducers:{
        // 리듀서 넣기
		// <액션1 함수 이름> (state,action){
		// 	// 내용
		// },
		// <액션2 함수 이름> (state,action){
		// 	// 내용
		// },
		// ......<액션 갯수만큼 계속 이어서 작성>
    }
})

export const userSliceAction = UserSlice.actions;
export default UserSlice.reducer;
