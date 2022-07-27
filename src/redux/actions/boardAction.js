import { boardSliceAction } from "../reducers/boardReducer";
import axios from "axios";
import { api, apij } from "../api";
import apiJson from "../apiJson";
import gamsung_04 from"../../image/gamsung_01.jpg"

function LoadBoard() {
  return async (dispatch) => {
  
    const UploadBoardAX = await apiJson
    .get("posts?size=12&page=0")
    .then(function (response) {
      console.log(response, "에러안남!!!!!");
  

    })
    .catch(function (error) {
      console.log("에러났음.", error);
    });

    // dispatch(boardSliceAction.loadboard( [
    //   {
    //     id: "hgfdhcscweew2",
    //     writeDate: "2022-07-22 18:55:28",
    //     contents:
    //     "이거는 엄청길어지면어떻게될지 테스트가 하고싶으신가봐요이거는 엄청길어지면어떻게될지 테스트가 하고싶으신가봐요이거는 엄청길어지면어떻게될지 테스트가 하고싶으신가봐요이거는 엄청길어지면어떻게될지 테스트가 하고싶으신가봐요이거는 엄청길어지면어떻게될지 테스트가 하고싶으신가봐요이거는 엄청길어지면어떻게될지 테스트가 하고싶으신가봐요이거는 엄청길어지면어떻게될지 테스트가 하고싶으신가봐요이거는 엄청길어지면어떻게될지 테스트가 하고싶으신가봐요이거는 엄청길어지면어떻게될지 테스트가 하고싶으신가봐요",
    //     writer:{
    //     nickname: "작성자 닉네임",
    //     username: "작성자 아이디",
    //     profile: "작성자 프로필 사진"
    //     },
    //     uploadImageUrl: gamsung_04,
    //     Lat: "35.8260138539907",
    //     Lng: "128.61587781119",
    //     },]
    //   ))




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
      .delete('posts/2', boardData)
      .then(function (response) {
        console.log(response, "에러안남!!!!!");
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

function CreateBoard(auth, data) {
  return async (dispatch) => {
    console.log(
      "create디스패치 잘됨???~",
      "1",
      auth.authorization,
      "2",
      auth.refresh_token,
      "3",
      data
    );
    //   boardData.img

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
      })
      .catch(function (error) {
        console.log("에러났음.", error);
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
  LoadBoard,
  CreateBoard,
  DeleteBoard,
};
