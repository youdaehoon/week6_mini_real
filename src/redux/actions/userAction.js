import { userSliceAction } from "../reducers/userReducer";
import api from "../api";
import apiFormdata from"../apiFormdata";



function userAuthcheck(is_authorization,is_refresh_token) {

}

function userSignUp(formData) {
  return async (dispatch) => { 
    console.log("미들웨어에서잉~", formData);

    const SignUpAX = await apiFormdata
      .post("user/signup", formData)
      .then(function (response) {
        console.log(response, "에러안남!!!!!");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}



function userLogin(userData,SetModalOpen) {
  return async (dispatch) => {
    console.log("미들웨어에서 로그인", userData);
    
    await api
      .post("login", userData)
      .then(function (response) {
        api.defaults.headers.common["authorization"] =
          "Bearer " + response.data.tokenBox.access_token;
        api.defaults.headers.common["refresh_token"] =
          "Bearer " + response.data.tokenBox.refresh_token;

        let sessionStorageLogin = sessionStorage;
        sessionStorageLogin.setItem(
          "authorization",
          response.data.tokenBox.access_token
        );
        sessionStorageLogin.setItem(
          "refresh_token",
          response.data.tokenBox.refresh_token
        );
        dispatch(userSliceAction.recodeUser({...response.data.userInfoDto,username:userData.username}))
        console.log("api에서 확인!!!", response.data.tokenBox);
        SetModalOpen(false)
        
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}
function userLogout(auth) {
  return async (dispatch) => {
    console.log("미들웨어에서 받는것!", auth);

    
    const LogoutAX = await api
      .post("logout")
      .then(function (response) {
        console.log(response, "로그아웃이 완료되었습니다.!");
        api.defaults.headers.common["authorization"] = "";
        api.defaults.headers.common["refresh_token"] = "";
        dispatch(userSliceAction.emptyuser())
        
      })
      .catch(function (error) {
        console.log("로그아웃에 실패하였습니다!.", error);
      });

    sessionStorage.clear();
  };
}



export const userAction = {
  userSignUp,
  userLogin,
  userLogout,
  userAuthcheck,
};
