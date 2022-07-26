import { boardSliceAction } from "../reducers/boardReducer";
import api from "../api";




function CreateBoard(boardData) {
    return async (dispatch) => {
      console.log("create디스패치 잘됨???~", boardData);
    //   boardData.img
    const new_image=boardData.image.preview
       
        const new_data={...boardData,image:new_image};
        console.log(new_data)
        dispatch(boardSliceAction.createboard(new_data));
      
      // const testapi = await api
      //   .post("user/signup", userData)
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    };
  }


export const boardAction = {
CreateBoard
};