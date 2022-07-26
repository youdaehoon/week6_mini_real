import { userSliceAction } from "../reducers/userReducer";

function userSignUp(UserData) {
    return async (dispatch) =>{
        
    }
}

function userLogin(userData) {
    return async (dispatch) =>{
        console.log(userData);
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
    userLogin,
};
