import logo from './logo.svg';
import './App.css';
// package
import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';
// page, components
import Home from './pages/Home';
import MakePost from './pages/MakePost';
import MainNavi from './components/MainNavi';
import Detail from './pages/Detail';



function App() {
  return (
    <div className="App">
      <MainNavi/>
      <MainBody>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/makepost" element={<MakePost/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
      </MainBody>
    </div>
  );
}

const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 100px;
  width: 100%;
  height: auto;
`;

export default App;
