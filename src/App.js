import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { AppHeader } from './components/Header/AppHeader';
import Login from './components/Login/Login';
import DeviceList from './components/DeviceList/DeviceList';
import { useDispatch, useSelector } from 'react-redux';
import { initThunk } from './redux/init/initThunk';
import { getIsInit } from './redux/init/initSelector';

function App() {
  const dispatch = useDispatch();
  const isInit = useSelector(getIsInit)

  useEffect(() => {
    dispatch(initThunk())  
  }, [dispatch])

  return (
    <>
    <BrowserRouter>
        <AppHeader />
    {isInit ? <div className="App">
        <div className="App-wrapper-content">
        <Routes>
          <Route path='/*' element={<Login />}/>
          <Route path='/devices' element={<DeviceList />}/>
        </Routes> 
        </div>
    </div> : <div>Loading...</div>}
    </BrowserRouter>
    </>
  );
}

export default App;
