import { userSliceAction } from "../reducers/userReducer";
import api from "../api";
import axios from "axios";

function userSignUp(userData) {
  return async (dispatch) => {
    console.log("미들웨어에서잉~", userData);
    
    
    const testapi11 = await api
      .post("user/signup", userData)
      .then(function (response) {
       
      })
      .catch(function (error) {
        console.log(error);
      });
     

  };
 
  
}

function userLogin(userData) {
  return async (dispatch) => {
    console.log("미들웨어에서 로그인", userData);

    
    const apiLogin = await api
      .post("login", userData)
      .then(function (response) {
        api.defaults.headers.common["authorization"]="Bearer "+response.data.tokenBox.access_token;
        api.defaults.headers.common["refresh_token"]="Bearer "+response.data.tokenBox.refresh_token;
        
        let sessionStorageLogin=sessionStorage;
        sessionStorageLogin.setItem("authorization",response.data.tokenBox.access_token)
        sessionStorageLogin.setItem("refresh_token",response.data.tokenBox.refresh_token)

        console.log("api에서 확인!!!",response.data.tokenBox.access_token);
      })
      .catch(function (error) {
        console.log(error);
      });
   
  };
}
function userLogout(auth) {
  return async (dispatch) => {
    console.log('미들웨어에서 받는것!',auth);
    // const apiLogout = axios.create({
    //   baseURL: "http://13.125.106.21:8080",
    //   headers: { "authorization": `Bearer ${auth.authorization}`,
    //   "refresh_token":`Bearer ${auth.refresh_token}` },
    // });
    
    const LogoutAX = await api
    .post("logout")
    .then(function (response) {
      console.log(response,"에러안남!!!!!");
      
    })
    .catch(function (error) {
      console.log("에러났음.",error);
    });
   
    sessionStorage.clear();
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
  userLogout,
  findPassword,
};
