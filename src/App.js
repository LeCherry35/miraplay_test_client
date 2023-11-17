import './App.css';
import Auth from './compnents/Auth/Auth';
import Header from './compnents/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllGames from './compnents/AllGames/AllGames'
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  
  return (

    <div className="App">
    <BrowserRouter>
      <div className='bg'></div>
      
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
