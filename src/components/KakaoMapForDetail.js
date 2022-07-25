import React, { useEffect } from "react";

const { kakao } = window;

const KakaoMapForDetail = ({ selectPosition }) => {
  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById("map");
    //,"Ma": 35.826131559945495
    const options = {
      center: new kakao.maps.LatLng(selectPosition.Ma, selectPosition.La),
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(
      selectPosition.Ma,
      selectPosition.La
    );

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(kakaoMap);

    var iwContent =
        '<div style="padding:5px;">위치<br><a href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwPosition = new kakao.maps.LatLng(selectPosition.Ma, selectPosition.La); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(kakaoMap, marker);
  }, [selectPosition]);

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
};

export default KakaoMapForDetail;