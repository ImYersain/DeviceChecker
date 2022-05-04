import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import { AppHeader } from './components/Header/AppHeader';
import Login from './components/Login/Login';
import DeviceList from './components/DeviceList/DeviceList';
import { useDispatch, useSelector } from 'react-redux';
import { initThunk } from './redux/init/initThunk';
import { getIsInit } from './redux/init/initSelector';
import { getIsAuth, getUser } from './redux/auth/authSelector';
import Preloader from './assets/Preloader';


function App() {
  const dispatch = useDispatch();
  const isInit = useSelector(getIsInit);
  const isAuth = useSelector(getIsAuth);
  const user = useSelector(getUser);

  useEffect(() => {
    dispatch(initThunk())  
  }, [dispatch])


  if(!isInit){
    return <Preloader />
  }
  return (
    <>
    <BrowserRouter>
        <AppHeader isAuth={isAuth} user={user} />
     <div className="App">
        <div className="App-wrapper-content">
        <Routes>
          <Route path='/login'  element={<Login isAuth={isAuth} />}/>
          <Route path='/devices' element={<DeviceList />}/>
          <Route exact path='/' element={<Navigate to='/login' /> }/>
        </Routes> 
      </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
