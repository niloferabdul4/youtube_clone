import React,{useContext,useEffect} from 'react'
import { Stack } from '@mui/material';
import { AppContext } from '../Context/AppContextProvider';
import { menuItems } from '../Utils/Utils';

const Sidebar = () => {

  
  const {state:{selectedMenu},dispatch}=useContext(AppContext)

  const handleClick=(item)=>{
   dispatch({type:'SELECT_MENU',payload:item.name})
  }


  return (
    <>
            <Stack direction='row' sx={{overflowY:'auto', 
                                        height:{sx:'auto',md:'95%'},
                                        flexDirection:{md:'column'}}}>
                      {menuItems.map(item=>{return <>            
                                    <button className='menu-btn' key={item.name} 
                                            style={{background:item.name===selectedMenu && '#dcdcdc'}}
                                            onClick={()=>handleClick(item)}
                                            >
                                      
                                            <span style={{marginRight:'15px'}}>{item.icon}</span>
                                            <p style={{opacity:item.name===selectedMenu ? '1' :'0.75'}}>{item.name}</p>
                                        
                                        </button>            
                                  </>})}        
                                      
            </Stack>
    </>
  )
}

export default Sidebar
