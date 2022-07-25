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

function App() {
  const [ModalOpen, SetModalOpen] = React.useState(false);
  const [ModalRequiredName, SetModalRequiredName] = React.useState("login");
  const [is_login, setIsLogin] = React.useState(false);
  const [Cardkey, SetKey] = React.useState();

  return (
    <AppBody>
      <MainNavi
        ModalOpen={ModalOpen}
        SetModalOpen={SetModalOpen}
        ModalRequiredName={ModalRequiredName}
        SetModalRequiredName={SetModalRequiredName}
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
              />
            }
          />
        </Routes>
        {ModalOpen && (
          <Modal>
            <Overlay>
              {ModalRequiredName == "detail" ? (
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
                  <Login />
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
                <div className="modal-content">
                  <MakePost />
                  <div className="close-modal">
                    <GrFormClose
                      size={35}
                      onClick={() => {
                        SetModalOpen(false);
                      }}
                    />
                  </div>
                </div>
              ) : ModalRequiredName == "detail" ? (
                <div className="modal-content-detail">
                  <Detail Cardkey={Cardkey} />
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
