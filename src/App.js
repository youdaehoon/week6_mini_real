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

function App() {
  const [Modal, SetModal] = React.useState(false);
  const [ModalLoginOrSignup, SetModalLoginOrSignup]= React.useState("login");

  return (
    <div className="App">
      <MainNavi props={[Modal, SetModal,ModalLoginOrSignup, SetModalLoginOrSignup]} />
      <MainBody>
        <Routes>
          <Route
            path="/"
            element={<Home  />}
          />
          <Route path="/makepost" element={<MakePost />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        {Modal && (
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              <div>
              {ModalLoginOrSignup=="login"?<Login />:<Signup/>}
              </div>

              <div className="close-modal">
                <GrFormClose
                  size={35}
                  onClick={() => {
                    SetModal(false);
                    console.log("버튼작동하니?");
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </MainBody>
    </div>
  );
}

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
