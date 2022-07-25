import React from "react";
import PhotoCard from "../components/PhotoCard";
import styled from "styled-components";
import "../modaltest/modal.css";

const Home = ({ ModalOpen, SetModalOpen, ModalRequiredName, SetModalRequiredName, SetKey }) => {
  return(
    <div>
      <HomeWholeFrame>
        <PhotoCard SetModalOpen={SetModalOpen} SetModalRequiredName={SetModalRequiredName} Cardkey="1" SetKey={SetKey}/>
        <PhotoCard SetModalOpen={SetModalOpen} SetModalRequiredName={SetModalRequiredName} Cardkey="2" SetKey={SetKey}/>
        <PhotoCard SetModalOpen={SetModalOpen} SetModalRequiredName={SetModalRequiredName} Cardkey="3" SetKey={SetKey}/>
        <PhotoCard SetModalOpen={SetModalOpen} SetModalRequiredName={SetModalRequiredName} Cardkey="4" SetKey={SetKey}/>
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



export default Home;
