import React from "react";
import styled, { css } from "styled-components";

const PhotoCard = ({ boardImg = "" }) => {
  return (
    <ImageBox>
      <img src={boardImg ? boardImg : "https://placehold.jp/400x400.png"} />
    </ImageBox>
  );
};

const ImageBox = styled.div`
  width: calc(100% / 3);
  height: calc(100 / 3vw);
  max-width: 400px;
  max-height: 400px;
  margin-bottom: 0.1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 100%;
    object-fit: contain;
  }
`;

export default PhotoCard;
