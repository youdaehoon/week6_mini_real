import React from "react";
import styled, { css } from "styled-components";

const PhotoCard = ({ boardImg = "" , SetModalOpen, SetModalRequiredName, SetKey, Cardkey }) => {
  console.log(Cardkey);
  return (
    <ImageBox onClick={() => {
        SetKey(Cardkey);
        SetModalOpen(true);
        SetModalRequiredName("detail");
    }}>
      <img src={boardImg ? boardImg : "https://placehold.jp/400x400.png"} />
    </ImageBox>
  );
};

const ImageBox = styled.div`
  width: calc(100% / 3);
  height: calc(100vw / 3);
  max-width: 400px;
  max-height: 400px;
  margin-bottom: 0.1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s linear;
  &:hover {
    box-shadow: black 0px 5px 15px 0px;
    transform: scale(1.1);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default PhotoCard;
