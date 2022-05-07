import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import { AppHeaderContainer } from './components/Header/AppHeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import DeviceListContainer from './components/DeviceList/DeviceListContainer';
import CreateDeviceContainer from './components/CreateDevice/CreateDeviceContainer';
import { useDispatch, useSelector } from 'react-redux';
import { initThunk } from './redux/init/initThunk';
import { getIsInit } from './redux/init/initSelector';
import Preloader from './assets/Preloader';


function App() {
  const dispatch = useDispatch();
  const isInit = useSelector(getIsInit);


  useEffect(() => {
    dispatch(initThunk())  
  }, [dispatch])


  if(!isInit){
    return <Preloader />
  }
  return (
    <>
    <BrowserRouter>  
     <div className="App">
     <AppHeaderContainer />
        <div className="App-wrapper-content">
        <Routes>
          <Route path='/login'  element={<LoginContainer />}/>
          <Route path='/devices' element={<DeviceListContainer />}/>
          <Route path='/create' element={<CreateDeviceContainer />}/>
          <Route exact path='/' element={<Navigate to='/login' /> }/>
        </Routes> 
      </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
