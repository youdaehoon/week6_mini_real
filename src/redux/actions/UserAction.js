import { userSliceAction } from "../reducers/UserReducer";
import api from "../api";
export function userSignUp(UserData) {
  return async (dispatch) => {
    console.log("미들웨어에서잉~", UserData);
    
    
    // const testapi = await api
    //   .post("user/signup", UserData)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
}

function userLogin(UserData) {
  return async (dispatch) => {};
}

// function userSignUp(UserData) {
//     return async (dispatch) => {
//       const user_doc = await addDoc(collection(db, "users"), {
//         user_id: UserData.user_id,
//         name: UserData.user_name,
//         user_uid: UserData.uid,
//         user_profile: null,
//       });
//       dispatch(userSliceAction.LoginUpdate(UserData));
//     };
//   }

export const UserAction = {};
