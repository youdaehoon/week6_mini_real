import React, {useState} from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { boardAction } from "../redux/actions/boardAction";
import KakaoMapForPost from "./KakaoMapForPost";


const MakePostImg = ({ selectBoardData,files, setFiles, SetMakeProcess ,SetModalOpen,SetSwitchCreateUpdate,SwitchCreateUpdate}) => {
  const dispatch=useDispatch();
  const Refcontents=React.useRef("");
  const [Place, setPlace] = useState("");
  const [markAddress, setMarkAddress] = useState("");
  const [selectPosition, setSelectPosition] = useState();
  
  const userdata = useSelector((state) => state.userReducer.user);

  console.log("프로필을넣자!", userdata);
  React.useEffect(() => {
    console.log("이걸확인해야함", SwitchCreateUpdate);
  }, [SwitchCreateUpdate]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const formData = new FormData();

  const CreateBoard = () => {
    let authorization = sessionStorage.getItem("authorization");
    let refresh_token = sessionStorage.getItem("refresh_token");
    formData.append('contents',Refcontents.current.value)
    formData.append('nickname', userdata.nickname)
    formData.append('Lat', selectPosition?.Ma)
    formData.append('Lng', selectPosition?.La)
    formData.append('address', markAddress)
    formData.append('data', files[0]);

    dispatch(
      boardAction.CreateBoard(
        { authorization, refresh_token },
        formData,
        SetModalOpen
      )
    );
  };
  console.log(Refcontents.current.value=="","비었다고 판단함?")
  const UpdateBoard = () => {
    let authorization = sessionStorage.getItem("authorization");
    let refresh_token = sessionStorage.getItem("refresh_token");
   Refcontents.current.value==""?
      formData.append("contents", selectBoardData.contents): formData.append('contents',Refcontents.current.value);
      
    
    formData.append("nickname", userdata.nickname);
    formData.append('Lat', selectPosition?selectPosition.Ma:selectBoardData.lat);
    formData.append('Lng', selectPosition?selectPosition.La:selectBoardData.lng);
    formData.append('address', markAddress);
    formData.append("data", files[0]);
    const id = selectBoardData.id;
    dispatch(
      boardAction.UpdateBoard(
        { authorization, refresh_token },
        formData,
        SetModalOpen,
        id
      )
    );
  };
  if (SwitchCreateUpdate == "update") {
    console.log(Refcontents.current.value, selectBoardData.contents);
    // Refcontents.current.value=selectBoardData.contents
    console.log("데이터확인!", selectBoardData);

    // RefImgPreview.current.src=selectBoardData.imageFileName;
  }

  return (
    <div>
      <WrapMakeImgHead>
        <div style={{ width: "100%", height: "50px", fontWeight: "bold" }}>
          {SwitchCreateUpdate == "update"
            ? "게시물 수정하기"
            : "새 게시물 만들기"}
        </div>
        {SwitchCreateUpdate == "update" ? (
          <HeadBtn onClick={UpdateBoard}>수정하기</HeadBtn>
        ) : (
          <HeadBtn onClick={CreateBoard}>공유하기</HeadBtn>
        )}
      </WrapMakeImgHead>
      <div style={{ position: "relative", bottom: "70px" }}>
        <div style={{ display: "flex", borderTop: "1px solid black" }}>
          <div
            {...getRootProps()}
            style={{
              width: "70%",
              height: "561px",
              backgroundColor: "black",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <input
              {...getInputProps()}
              style={{ display: "none" }}
              type="file"
            />
            {SwitchCreateUpdate == "update" && !files[0] ? (
              <img
                alt=""
                src={selectBoardData.imageFileName}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            ) : files[0] &&(
              <img
                alt=""
                src={files[0].preview}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            )}
        
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "28%",
            }}
          >
            <WrapText>
              <WrapFrofile>
                <WrapImage>
                  <img
                    alt=""
                    src={userdata.profile}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </WrapImage>
                <div
                  style={{
                    fontSize: "20px",
                    marginLeft: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {userdata.nickname}
                </div>
              </WrapFrofile>
                  {SwitchCreateUpdate == "update"?<InputText
                 placeholder={selectBoardData.contents}
                style={{ height: "90%", marginTop: "10px", width: "100%" }}
                ref={Refcontents}
              />:<InputText
              placeholder="문구입력.."
              style={{ height: "90%", marginTop: "10px", width: "100%" }}
              ref={Refcontents}
            />}
          
            </WrapText>
          </div>
        </div>
      </div>

      <WrapMap >
      <KakaoMapForPost setMarkAddress={setMarkAddress} Place={Place} setPlace={setPlace} setSelectPosition={setSelectPosition} />
      </WrapMap>
    </div>
  );
};

export default MakePostImg;

const WrapMakeImgHead = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 18px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: -30px;
  font-size: 18px;
  /* border-top: 1px solid black; */
`;
const WrapText = styled.div`
  width: 30%;
  height: 600px;
  padding-top: 20px;
  min-width: 300px;
  /* border-top: 1px solid black; */
  /* border-bottom: 1px solid black; */
  margin-left: 0.5rem;
  /* background-color: green; */
`;
const WrapFrofile = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`;
const WrapImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
`;
const HeadBtn = styled.div`
  color: rgb(0, 149, 246);
  width: 100%;
  height: 50px;
  position: relative;
  bottom: 50px;
  margin-top: 2px;
  text-align: end;

  /* background-color: green; */
`;
const InputText = styled.textarea`
  width: 50%;
  height: 200px;
  resize: none;
  margin-top: 10px;
  border: none;
`;
const WrapMap = styled.div`
  width: 100%;
  height: 500px;
  margin-top: -70px;
  
`;
