import React from "react";
import PhotoCard from "../components/PhotoCard";
import styled from "styled-components";
import "../modaltest/modal.css";
import Login from "./Login";
import { GrFormClose } from "react-icons/gr";
const Home = () => {
  const [ModalLogin, SetModalLogin] = React.useState(false);
  return (
    <div>
      <Btn
        className="btn-modal"
        onClick={() => {
          SetModalLogin(!ModalLogin);
        }}
      ></Btn>
      {ModalLogin && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <div>
              <Login />{" "}
            </div>

            <div
              className="close-modal"
              onClick={() => {
                SetModalLogin(!ModalLogin);
              }}
            >
              <GrFormClose size={35} />
            </div>
          </div>
        </div>
      )}

      <HomeWholeFrame>
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
      </HomeWholeFrame>
    </div>
  );
};

const HomeWholeFrame = styled.div`
  display: flex;
  max-width: calc(1206px);
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

const Btn = styled.div`
  position: fixed;
  right: 2em;
  bottom: 50%;
  background-color: #1b9cfc8c;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

export default Home;
