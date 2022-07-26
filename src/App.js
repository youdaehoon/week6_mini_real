import logo from "./logo.svg";
import "./App.css";
// package
import React, { useEffect } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
// page, components
import Home from "./pages/Home";
import MakePost from "./pages/MakePost";
import MainNavi from "./components/MainNavi";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import api from "./redux/api";
import { GrFormClose } from "react-icons/gr";
import { RiCloseLine } from "react-icons/ri";
import { FaPenSquare } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { boardAction } from "./redux/actions/boardAction";
import ClipLoader from "react-spinners/ClipLoader";
import { userAction } from "./redux/actions/userAction";
import { userSliceAction } from "./redux/reducers/userReducer";

function App() {
  const [ModalOpen, SetModalOpen] = React.useState(false);
  const [ModalRequiredName, SetModalRequiredName] = React.useState("login");
  const [is_login, setIsLogin] = React.useState(false);
  const [Cardkey, SetKey] = React.useState();
  const [selectBoardData, setSelectBoardData] = React.useState({});
  const [SwitchCreateUpdate, SetSwitchCreateUpdate] = React.useState("create");

  useEffect(() => {
    console.log("이걸확인해야함", SwitchCreateUpdate);
  }, [SwitchCreateUpdate]);
  const is_authorization = sessionStorage.getItem("authorization")
    ? true
    : false;
  const is_refresh_token = sessionStorage.getItem("refresh_token")
    ? true
    : false;

  const boardList = useSelector((state) => state.boardReducer.board);
  const userdata = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();

  const DeleteBoard = (e, Cardkey) => {
    e.preventDefault();

    // console.log("삭제", Cardkey);
    let authorization = sessionStorage.getItem("authorization");
    let refresh_token = sessionStorage.getItem("refresh_token");

    if (window.confirm("정말로 게시물을 삭제하시겠습니까?")) {
      dispatch(
        boardAction.DeleteBoard(
          { authorization, refresh_token },
          {
            username: userdata.username,
            id: selectBoardData.id,
          }
        )
      );
      // console.log("삭제완료", Cardkey);
    }
  };

  const GoToMake = () => {
    SetModalRequiredName("makepost");
    SetSwitchCreateUpdate("update");
  };

 

  React.useEffect(() => {
    const escKeyModalClose = (e) => {
      if (e.keyCode === 27) {
        SetModalOpen(false);
        SetSwitchCreateUpdate("make");
      }
    };
    window.addEventListener("keydown", escKeyModalClose);

    return () => window.removeEventListener("keydown", escKeyModalClose);
  }, []);

  React.useEffect(() => {
    if (is_authorization && is_refresh_token) {
      api.defaults.headers.common["authorization"] =
        "Bearer " + sessionStorage.getItem("authorization");
      api.defaults.headers.common["refresh_token"] =
        "Bearer " + sessionStorage.getItem("refresh_token");
      dispatch(
        userSliceAction.recodeUser({
          username: sessionStorage.getItem("username"),
          nickname: sessionStorage.getItem("nickname"),
          profile: sessionStorage.getItem("profile"),
        })
      );
      setIsLogin(true);
    }
  }, []);

  // console.log(userdata);
  // console.log(selectBoardData.writer.username);

  return (
    <AppBody>
      <MainNavi
        ModalOpen={ModalOpen}
        SetModalOpen={SetModalOpen}
        ModalRequiredName={ModalRequiredName}
        SetModalRequiredName={SetModalRequiredName}
        is_login={is_login}
        setIsLogin={setIsLogin}
      />
      <MainBody>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                SetModalOpen={SetModalOpen}
                SetModalRequiredName={SetModalRequiredName}
                SetKey={SetKey}
                selectBoardData={selectBoardData}
                setSelectBoardData={setSelectBoardData}
                boardList={boardList}
              />
            }
          />
        </Routes>
        {ModalOpen && (
          <Modal>
            <Overlay>
              {ModalRequiredName == "makepost" ? (
                <div className="close-modal">
                  <RiCloseLine
                    size={50}
                    color="#fff"
                    onClick={() => {
                      SetModalOpen(false);
                      SetSwitchCreateUpdate("make");
                    }}
                  />
                </div>
              ) : (
                <></>
              )}
              {ModalRequiredName == "detail" ? (
                <BoardArea>
                  <div className="close-modal">
                    <RiCloseLine
                      size={50}
                      color="#fff"
                      onClick={() => {
                        SetModalOpen(false);
                        SetSwitchCreateUpdate("make");
                      }}
                    />
                  </div>
                  {userdata.username == selectBoardData.writer.username ? (
                    <BoardBottomArea>
                      <FaPenSquare color="#fff" size={50} onClick={GoToMake} />
                      <RiDeleteBin6Fill
                        color="#fff"
                        size={50}
                        onClick={(e) => {
                          DeleteBoard(e, Cardkey);
                        }}
                      />
                    </BoardBottomArea>
                  ) : (
                    <> </>
                  )}
                </BoardArea>
              ) : (
                <></>
              )}
            </Overlay>

            <ModalBody>
              {ModalRequiredName == "login" ? (
                <div className="modal-content">
                  <Login SetModalOpen={SetModalOpen} />
                  <div className="close-modal">
                    <GrFormClose
                      size={35}
                      onClick={() => {
                        SetModalOpen(false);
                        SetSwitchCreateUpdate("make");
                      }}
                    />
                  </div>
                </div>
              ) : ModalRequiredName == "makepost" ? (
                <div className="modal-content-makepost">
                  <MakePost
                    selectBoardData={selectBoardData}
                    SetModalOpen={SetModalOpen}
                    SwitchCreateUpdate={SwitchCreateUpdate}
                    SetSwitchCreateUpdate={SetSwitchCreateUpdate}
                  />
                </div>
              ) : ModalRequiredName == "detail" ? (
                <div className="modal-content-detail">
                  <Detail
                    is_login={is_login}
                    selectBoardData={selectBoardData}
                  />
                </div>
              ) : (
                <div className="modal-content">
                  <Signup />
                  <div className="close-modal">
                    <GrFormClose
                      size={35}
                      onClick={() => {
                        SetModalOpen(false);
                        SetSwitchCreateUpdate("make");
                      }}
                    />
                  </div>
                </div>
              )}
            </ModalBody>
          </Modal>
        )}
      </MainBody>
    </AppBody>
  );
}

const ModalBody = styled.div``;

const AppBody = styled.div`
  margin: 0;
  padding: 0;
`;

const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 100px;
  width: 100%;
  height: auto;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 1;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;

const BoardArea = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;

const BoardBottomArea = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 7px;
  gap: 2px;
  * {
    margin-left: 1rem;
  }
`;

export default App;
