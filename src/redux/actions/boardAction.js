import { boardSliceAction } from "../reducers/boardReducer";
import api from "../api";

function test(){
    return async(dispatch) =>{
       
    }
}

// function getWords() {
//     return async (dispatch) => {
//       try {
//         dispatch(wordSliceActions.request());
//         const word_data = await getDocs(collection(db, "mydic"));
//         let wordData = [];
//         word_data.forEach((data) => {
//           wordData.push({ id: data.id, ...data.data() });
//         });
//         dispatch(wordSliceActions.getWordsList(wordData));
//       } catch (errer) {
//         // 에러 핸들링 받는 곳
//         dispatch(wordSliceActions.requestFail());
  
//       }
//     };
//   }


function CreateBoard(boardData) {
    return async (dispatch) => {
      console.log("create디스패치 잘됨???~", boardData);
    //   boardData.img

    // const createBoardAx = await api
    // .post("posts", boardData)
    // .then(function (response) {
    //   console.log(response)
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

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
CreateBoard
};