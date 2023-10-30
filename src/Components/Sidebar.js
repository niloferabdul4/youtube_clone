import React,{useContext,useEffect} from 'react'
import { Stack } from '@mui/material';
import { AppContext } from '../Context/AppContextProvider';
import { menuItems } from '../Utils/Utils';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  
  const {state:{selectedMenu},dispatch}=useContext(AppContext)
  const navigate=useNavigate()

  const handleClick=(item)=>{
   dispatch({type:'SELECT_MENU',payload:item.name})
   navigate('/')
  }


  return (
    <>
            <Stack direction='row' sx={{overflowY:'auto', 
                                        p:{xs:2,sm:2},
                                        height:{sx:'auto',md:'95%'},
                                        flexDirection:{md:'column'}}}>
                      {menuItems.map(item=>{return <>            
                                    <button className='menu-btn' key={item.name} 
                                            style={{background:item.name===selectedMenu && '#dcdcdc'}}
                                            onClick={()=>handleClick(item)}
                                            >
                                      
                                            <span className='menu_icon'>{item.icon}</span>
                                            <p style={{opacity:item.name===selectedMenu ? '1' :'0.75'}}>{item.name}</p>
                                        
                                        </button>            
                                  </>})}        
                                      
            </Stack>
    </>
  )
}

export default Sidebar
