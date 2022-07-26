import React, { useEffect } from "react";
import styled from "styled-components";
import Frofile from "../components/Frofile";
import KakaoMapForPost from "../components/KakaoMapForPost";

import MakePostImg from "../components/MakePostImg";

const Makepost = ({
  selectBoardData,
  SetModalOpen,
  SwitchCreateUpdate,
  SetSwitchCreateUpdate,
}) => {
  const [UploadImg, SetUploadImg] = React.useState(
    "https://www.ty-magnet.com/noimg/noimg.jpg"
  );
  const [files, setFiles] = React.useState([]);
  return (
    <div>
      <WrapMakeImg>
        <MakePostImg
          files={files}
          setFiles={setFiles}
          SetModalOpen={SetModalOpen}
          SwitchCreateUpdate={SwitchCreateUpdate}
          SetSwitchCreateUpdate={SetSwitchCreateUpdate}
          selectBoardData={selectBoardData}
        />
      </WrapMakeImg>
    </div>
  );
};

const WrapMakeImg = styled.div`
  margin-top: 40px;
`;

export default Makepost;
