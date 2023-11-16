import './App.css';
import Auth from './compnents/Auth/Auth';
import Header from './compnents/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllGames from './compnents/AllGames/AllGames'
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { useSelector } from 'react-redux';
import Notification from './compnents/Notification/Notification';
import { useEffect } from 'react';


function App() {
  const { isError, error } = useSelector(state => state.error)
  useEffect (() => {
    console.log('iss', isError);
  },[isError])

  
  return (

    <div className="App">
    <BrowserRouter>
      {/* <div className='bg'></div> */}
      {isError && <Notification text={error} mode='error'/>}
      
      <Header />
      <Routes>
        <Route path='/' 
          element={
            <PrivateRoute> <AllGames/> </PrivateRoute>
            }
            />
        <Route path='/auth' element={<Auth />} />
      </Routes>
      

    </BrowserRouter>
    </div>
  );
}

export default App;
