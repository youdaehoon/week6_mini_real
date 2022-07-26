import logo from "./logo.svg";
import "./App.css";
// package
import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
// page, components
import Home from "./pages/Home";
import MakePost from "./pages/MakePost";
import MainNavi from "./components/MainNavi";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { GrFormClose } from "react-icons/gr";
import { RiCloseLine } from "react-icons/ri";
import { faZ } from "@fortawesome/free-solid-svg-icons";
import { useSelector} from "react-redux"

function App() {
  const [ModalOpen, SetModalOpen] = React.useState(false);
  const [ModalRequiredName, SetModalRequiredName] = React.useState("login");
  const [is_login, setIsLogin] = React.useState(false);
  const [Cardkey, SetKey] = React.useState();
  const [selectBoardData,setSelectBoardData] = React.useState({});

  const boardList = useSelector((state)=>(state.boardReducer.board));
  console.log(boardList);
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
              {ModalRequiredName == "detail"||ModalRequiredName == "makepost" ? (
                <div className="close-modal">
                  <RiCloseLine
                    size={50}
                    color="#fff"
                    onClick={() => {
                      SetModalOpen(false);
                    }}
                  />
                </div>
              ) : (
                <></>
              )}
            </Overlay>

            <div>
              {ModalRequiredName == "login" ? (
                <div className="modal-content">
                  <Login SetModalOpen={SetModalOpen} />
                  <div className="close-modal">
                    <GrFormClose
                      size={35}
                      onClick={() => {
                        SetModalOpen(false);
                      }}
                    />
                  </div>
                </div>
              ) : ModalRequiredName == "makepost" ? (
                <div className="modal-content-makepost">
                  <MakePost />
                </div>
              ) : ModalRequiredName == "detail" ? (
                <div className="modal-content-detail">
                  <Detail selectBoardData={selectBoardData} />
                </div>
              ) : (
                <div className="modal-content">
                  <Signup />
                  <div className="close-modal">
                    <GrFormClose
                      size={35}
                      onClick={() => {
                        SetModalOpen(false);
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </Modal>
        )}
      </MainBody>
    </AppBody>
  );
}

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

export default App;
