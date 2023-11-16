import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Auth from './compnents/Auth/Auth';
import Header from './compnents/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllGames from './compnents/AllGames/AllGames'
import { useMutation, useQuery } from '@tanstack/react-query';
import allGamesService from './services/allGamesService';
import { useEffect } from 'react';
import authService from './services/authService';


function App() {

  
  const { isPanelDisplayed } = useSelector(state => state.authPanel)
  return (

    <div className="App">
    <BrowserRouter>
      {/* <div className='bg'></div> */}
      <Header />
      {isPanelDisplayed && <Auth/>}
      <Routes>
        <Route path='/' element={<></>}/>
        <Route path='/allGames' element={<AllGames/>} />
      </Routes>
      

    </BrowserRouter>
    </div>
  );
}

export default App;
