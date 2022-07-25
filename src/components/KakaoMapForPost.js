import React, {useState} from "react";
import KakaoMapForEdit from "./KakaoMapForEdit";

const KakaoMapForPost = () => {
    const [InputText, setInputText] = useState('')
    const [Place, setPlace] = useState('')
    const [selectPosition, setSelectPosition] = useState() // 위치정보 redux보낼얘
  
    const onChange = (e) => {
      setInputText(e.target.value)
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      setPlace(InputText)
      setInputText('')
    } 
  return (
    <div>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="검색어를 입력하세요"
          onChange={onChange}
          value={InputText}
        />
        <button type="submit">검색</button>
      </form>
      <button
        onClick={(e) => {
          console.log(selectPosition);
        }}
      >
        선택된위치좌표
      </button>
      <KakaoMapForEdit searchPlace={Place} setSelectPosition={setSelectPosition} />
    </div>
  );
};

export default KakaoMapForPost;
