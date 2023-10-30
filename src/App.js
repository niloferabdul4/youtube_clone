import { Routes,Route } from 'react-router-dom';
import VideoDetails from './Pages/VideoDetails';
import ChannelDetails from './Pages/ChannelDetails';
import Home from './Pages/Home';
import FilteredVideos from './Pages/FilteredVideos';
import Login from './Pages/Login';


function App() {

  return ( 
   
    <div className="App">
      <Routes>
         <Route path='/login' element={<Login />} />
         <Route path='/' element={<Home/>} />
         <Route path='/filteredVideos/:searchText' element={<FilteredVideos/>} />
         <Route path='/videos/:id' element={<VideoDetails />} />
         <Route path='/channel/:id' element={<ChannelDetails />} />
      </Routes>
    </div>
  );
}

export default App;
