import { userSliceAction } from "../reducers/UserReducer";

function userSignUp(UserData) {
    return async (dispatch) =>{
        
    }
}

function userLogin(UserData) {
    return async (dispatch) =>{
        
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

export const UserAction = {};
