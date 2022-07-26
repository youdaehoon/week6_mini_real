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

export const boardAction = {

};