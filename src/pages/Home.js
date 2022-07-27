import React from "react";
import PhotoCard from "../components/PhotoCard";
import styled from "styled-components";
import "../modal/modal.css";

const Home = ({
  ModalOpen,
  SetModalOpen,
  ModalRequiredName,
  SetModalRequiredName,
  SetKey,
  selectBoardData,
  setSelectBoardData,
  boardList,
}) => {
  console.log(boardList);
  return (
      <HomeWholeFrame>
        {boardList &&
          boardList.map((board, index) => (
            <PhotoCard
              key={index}
              boardImg={board.image}
              Cardkey={board.id}
              boardData={board}
              setSelectBoardData={setSelectBoardData}
              SetModalOpen={SetModalOpen}
              SetModalRequiredName={SetModalRequiredName}
              SetKey={SetKey}
            />
          ))}
      </HomeWholeFrame>
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
