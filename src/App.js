import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Auth from './compnents/Auth/Auth';
import Header from './compnents/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllGames from './compnents/AllGames/AllGames'
import { useQuery } from '@tanstack/react-query';
import authService from './services/authService';
import Loader from './compnents/Loader/Loader';


function App() {

  const dispatch = useDispatch()
  const { isPanelDisplayed } = useSelector(state => state.authPanel)

  const checkAuth = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      // throw new Error('User is not authorized')
      return
    }
    const {data} = await authService.checkToken(token)
    dispatch({type: 'SET_USER', payload: data})
    return data
    
  }

  const { isLoading } = useQuery({
    queryKey: 'auth',
    queryFn: checkAuth
  })
  return (

    <div className="App">
    <BrowserRouter>
      {/* <div className='bg'></div> */}
      {/* {isError && <Notification text={error.message}/>} */}
      {isLoading && <Loader/>}
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
