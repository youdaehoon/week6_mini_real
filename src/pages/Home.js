import React, { useState, useEffect, useRef, useCallback } from "react";
import PhotoCard from "../components/PhotoCard";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import api from "../redux/api";

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

  // 무한스크롤 변수
  const obsRef = useRef(null); //observer Element
  const [List, setList] = useState(() => boardList); //Post List
  const [page, setPage] = useState(0); //현재 페이지
  const [load, setLoad] = useState(false); //로딩 스피너
  const preventRef = useRef(true); //옵저버 중복 실행 방지
  const endRef = useRef(false); //모든 글 로드 확인

  console.log(List)
  // 무한스크롤 변수 종료

  ////////////////////////////// 무한스크롤 체크 
  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    getBoardList();
    // 읽어오기
  }, [page]);

  const obsHandler = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage((prev) => prev + 1);
    }
  };

  const getBoardList = useCallback(async() => { //글 불러오기  
    console.log('사진페이지 불러오기');
    setLoad(true); //로딩 시작
    await api.get(`posts?size=12&page=${page}`).then((res)=>{
      console.log(res);
      if(res.data){
        console.log(res.data);
        setList(prev=> {
          console.log(prev);
          return [...prev, ...res.data ]
        }); //리스트 추가
        preventRef.current = true;
      }else{
        console.log(res); //에러
      }
    }).catch((error) => {
      console.log("에러났음.",error);
    });
    setLoad(false); //로딩 종료
  }, [page]);

  ////////////////////////////// 무한스크롤 종료

  return (
    <HomeWholeFrame>
      {
      List &&
        List.map((board, index) => {
          return (
            <PhotoCard
            key={index}
            boardImg={board.uploadImageUrl}
            Cardkey={board.id}
            boardData={board}
            setSelectBoardData={setSelectBoardData}
            SetModalOpen={SetModalOpen}
            SetModalRequiredName={SetModalRequiredName}
            SetKey={SetKey}
          />
          )
        }
        )}
      {
        load ? <SpinnerWithInfiniteScroll><ClipLoader
        color="black"
        size={50}
      /></SpinnerWithInfiniteScroll> : <></>
      }
      <Observer ref={obsRef}>
        
      </Observer>
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

const SpinnerWithInfiniteScroll = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`

const Observer = styled.div`
  height: 0px;
`

export default Home;
