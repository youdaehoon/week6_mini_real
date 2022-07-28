import { boardSliceAction } from "../reducers/boardReducer";
import axios from "axios";
import apiJson from "../apiJson";

function LoadBoard() {
  return async (dispatch) => {
  
    const UploadBoardAX = await apiJson
    .get("posts?size=12&page=0")
    .then(function (response) {
      console.log(response.data, "에러안남!!!!!");
      dispatch(boardSliceAction.loadboard( 
        response.data
        ))

    })
    .catch(function (error) {
      console.log("에러났음.", error);
    });
  };
}

function DeleteBoard(auth, boardData) {
  return async (dispatch) => {
    console.log(
      "삭제 디스패치 잘됨???~",
      "1",
      auth.authorization,
      "2",
      auth.refresh_token,
      "3",
      boardData
    );

    const apiDelete = axios.create({
      baseURL: "http://13.125.106.21:8080",
      headers: {
        authorization: `Bearer ${auth.authorization}`,
        refresh_token: `Bearer ${auth.refresh_token}`,
      },
    });
    const DeleteBoardAX = await apiDelete
      .delete(`posts/${boardData.id}`, boardData)
      .then(function (response) {
        console.log(response, "에러안남!!!!!");
        window.location.reload();
      })
      .catch(function (error) {
        console.log("에러났음.", error);
      });
  };
}
// function UpdateBoard(auth,boardData){
//   return async (dispatch) => {
//     console.log("삭제 디스패치 잘됨???~", '1',auth.authorization,'2',auth.refresh_token,'3',boardData);

//     const apiUpdate = axios.create({
//         baseURL: "http://13.125.106.21:8080",
//         headers: { "authorization": `Bearer ${auth.authorization}`,
//         "refresh_token":`Bearer ${auth.refresh_token}` ,
//         "Content-Type": "application/json"
//       },
//       });
//       const UpdateBoardAX = await apiUpdate
//   .delete("posts",boardData)
//   .then(function (response) {
//     console.log(response,"에러안남!!!!!");

//   })
//   .catch(function (error) {
//     console.log("에러났음.",error);
//   });

//   }
// }

function CreateBoard(auth, data,SetModalOpen) {
  return async (dispatch) => {


    const apiImg = axios.create({
      baseURL: "http://13.125.106.21:8080",
      headers: {
        authorization: `Bearer ${auth.authorization}`,
        refresh_token: `Bearer ${auth.refresh_token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    const CreateBoardAXImg = await apiImg
      .post("posts", data)
      .then(function (response) {
        console.log(response, "에러안남!!!!!");
        SetModalOpen(false)
        window.location.reload();
      })
      .catch(function (error) {
        console.log("에러났음.", error);
      });

    
  };
}
function UpdateBoard(auth, data,SetModalOpen,id) {
  return async (dispatch) => {

    console.log("미들웨어에서 data확인",auth,data,SetModalOpen)
    const apiImg = axios.create({
      baseURL: "http://13.125.106.21:8080",
      headers: {
        authorization: `Bearer ${auth.authorization}`,
        refresh_token: `Bearer ${auth.refresh_token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    const UPdateBoardAXImg = await apiImg
      .put(`posts/${id}`, data)
      .then(function (response) {
        console.log(response, "에러안남!!!!!");
        SetModalOpen(false)
        window.location.reload();
      })
      .catch(function (error) {
        console.log("에러났음.", error);
      });

    
  };
}

export const boardAction = {
  LoadBoard,
  CreateBoard,
  DeleteBoard,
  UpdateBoard,
};
