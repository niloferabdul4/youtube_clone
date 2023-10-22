import React,{useContext} from 'react'
import { Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { AppContext } from '../Context/AppContextProvider';

const Sidebar = () => {
  const {state:{selectedMenu},dispatch}=useContext(AppContext)
  const menuItems=[{id:1,title:'Home',icon:<HomeIcon/>,path:'/'},
                    {id:2,title:'Subscriptions',icon:<SubscriptionsIcon/>,path:'/'},
                    {id:3,title:'Library',icon:<VideoLibraryOutlinedIcon/>,path:'/'},                   
                    {id:4,title:'Liked Videos',icon:<ThumbUpOffAltOutlinedIcon/>,path:'/'},
                    {id:5,title:'Watch Later',icon:<WatchLaterOutlinedIcon/>,path:'/'},
                    {id:6,title:'Logout',icon:<ExitToAppIcon/>,path:'/'}
                   ]
  return (
    <>
            <Stack direction='row' sx={{overflowY:'auto', 
                                        height:{sx:'auto',md:'95%'},
                                        flexDirection:{md:'column'}}}>
                      {menuItems.map(item=>{return <>            
                                    <button className='menu-btn' key={item.title} 
                                            style={{background:item.title===selectedMenu && '#dcdcdc'}}>
                                      
                                            <span style={{marginRight:'15px'}}>{item.icon}</span>
                                            <p style={{opacity:item.title===selectedMenu ? '1' :'0.75'}}>{item.title}</p>
                                        
                                        </button>            
                                  </>})}        
                                      
            </Stack>
    </>
  )
}

export default Sidebar
