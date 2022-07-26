import { userSliceAction } from "../reducers/userReducer";
import api from "../api";

function userSignUp(userData) {
  return async (dispatch) => {
    console.log("미들웨어에서잉~", userData);

    const testapi = await api
      .post("user/signup", userData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

function userLogin(userData) {
  return async (dispatch) => {
    console.log("미들웨어에서 로그인", userData);
    const testapi = await api
      .get("login", userData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(testapi);
  };
}

function findPassword(){
    return async (dispatch) => {
    }
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

export const userAction = {
  userSignUp,
  userLogin,
  findPassword,
};
