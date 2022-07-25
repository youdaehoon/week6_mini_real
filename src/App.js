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
import { GrFormClose } from "react-icons/gr";
import Makepost from "./pages/MakePost";

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
          <Route path="/makepost" element={<MakePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        {ModalOpen && (
          <div className="modal">
            <div className="overlay"></div>

            <div>
              {ModalRequiredName == "login" ? (
                <div className="modal-content">
                  <Login />
                  <div className="close-modal">
                    <GrFormClose
                      size={35}
                      onClick={() => {
                        SetModalOpen(false);
                        console.log("버튼작동하니?");
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
                        console.log("버튼작동하니?");
                      }}
                    />
                  </div>
                </div>
              ) : ModalRequiredName == "detail" ? (
                <div className="modal-content-detail">
                <Detail Cardkey={Cardkey} />
                <div className="close-modal">
                <GrFormClose
                  size={35}
                  onClick={() => {
                    SetModalOpen(false);
                    console.log("버튼작동하니?");
                  }}
                />
              </div>
            </div>
              ) : (
                <div className="modal-content">
                <Signup />
                <div className="close-modal">
                <GrFormClose
                  size={35}
                  onClick={() => {
                    SetModalOpen(false);
                    console.log("버튼작동하니?");
                  }}
                />
              </div>
            </div>
              )}
            </div>
          </div>
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

export default App;
