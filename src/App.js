import { useState } from 'react';
import Header from './Components/Header';
import { Routes,Route } from 'react-router-dom';
import VideoDetails from './Pages/VideoDetails';
import ChannelDetails from './Pages/ChannelDetails';
import Home from './Pages/Home';


function App() {

  return ( 
   
    <div className="App">
      <Header/>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/videos/:id' element={<VideoDetails />} />
         <Route path='/channel/:id' element={<ChannelDetails />} />
      </Routes>
    </div>
  );
}

export default App;