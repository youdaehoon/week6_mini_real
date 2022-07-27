import { boardSliceAction } from "../reducers/boardReducer";
import axios from "axios";
import {api,apiLogout} from "../api";



function DeleteBoard(auth,boardData){
    return async (dispatch) => {
      console.log("삭제 디스패치 잘됨???~", '1',auth.authorization,'2',auth.refresh_token,'3',boardData);
        
    //   const apiDelete = axios.create({
    //       baseURL: "http://13.125.106.21:8080",
    //       headers: { "authorization": `Bearer ${auth.authorization}`,
    //       "refresh_token":`Bearer ${auth.refresh_token}` ,
    //       "Content-Type": "application/json"
    //     },
    //     });
    //     const DeleteBoardAX = await apiDelete
    // .delete("posts",boardData)
    // .then(function (response) {
    //   console.log(response,"에러안남!!!!!");
      
    // })
    // .catch(function (error) {
    //   console.log("에러났음.",error);
    // });



    }
}


function CreateBoard(auth,data) {
    return async (dispatch) => {
      console.log("create디스패치 잘됨???~", '1',auth.authorization,'2',auth.refresh_token,'3',data)
    //   boardData.img

 
    const apiImg = axios.create({
      baseURL: "http://13.125.106.21:8080",
      headers: { "authorization": `Bearer ${auth.authorization}`,
      "refresh_token":`Bearer ${auth.refresh_token}` ,
      "Content-Type": 'multipart/form-data'
    },
    });
    

 
  
    const CreateBoardAXImg = await apiImg
    .post("posts",data)
    .then(function (response) {
      console.log(response,"에러안남!!!!!");
      
    })
    .catch(function (error) {
      console.log("에러났음.",error);
    });

    // const new_image=boardData.image.preview
       
    //     const new_data={...boardData,image:new_image};
    //     console.log(new_data)
    //     dispatch(boardSliceAction.createboard(new_data));
      
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
    CreateBoard,
    DeleteBoard
};