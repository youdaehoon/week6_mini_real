import React from "react";
import PhotoCard from "../components/PhotoCard";
import styled from "styled-components";
import "../modal/modal.css";
import gamsung_01 from "../image/gamsung_01.jpg";
import gamsung_02 from "../image/gamsung_02.jpg";
import gamsung_03 from "../image/gamsung_03.jpg";
import gamsung_04 from "../image/gamsung_04.jpg";

const Home = ({ ModalOpen, SetModalOpen, ModalRequiredName, SetModalRequiredName, SetKey }) => {
  return(
    <div>
      <HomeWholeFrame>
        <PhotoCard boardImg={gamsung_01} SetModalOpen={SetModalOpen} SetModalRequiredName={SetModalRequiredName} Cardkey="1" SetKey={SetKey}/>
        <PhotoCard boardImg={gamsung_02} SetModalOpen={SetModalOpen} SetModalRequiredName={SetModalRequiredName} Cardkey="2" SetKey={SetKey}/>
        <PhotoCard boardImg={gamsung_03} SetModalOpen={SetModalOpen} SetModalRequiredName={SetModalRequiredName} Cardkey="3" SetKey={SetKey}/>
        <PhotoCard boardImg={gamsung_04} SetModalOpen={SetModalOpen} SetModalRequiredName={SetModalRequiredName} Cardkey="4" SetKey={SetKey}/>
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
