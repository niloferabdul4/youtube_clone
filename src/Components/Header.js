import React,{useContext,useState} from 'react'
import { Box, IconButton, Paper, Stack,Avatar, Menu } from '@mui/material';
import { Search } from '@mui/icons-material';
import { AppContext } from '../Context/AppContextProvider';
import { fetchFromApi } from '../Utils/fetchFromApi';
import { useNavigate,Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Header = () => {
  const {state:{searchText,user},dispatch}=useContext(AppContext)
  const [showDropdown,setShowDropdown]=useState(false)
  const navigate=useNavigate()

  const handleSubmit=(event)=>{
    event.preventDefault();
    if(searchText)
    {
    fetchFromApi(`search?part=snippet&q=${searchText}`) 
   .then((items)=>dispatch({type:'LOAD_FILTERED_VIDEOS',payload:items}))
    navigate(`/filteredVideos/${searchText}`)
  
    }
    dispatch({type:'SEARCH_TEXT',payload:null})
  }
 
const handleLogout=()=>{
  signOut(auth)
  .then((authUser)=>{  
         dispatch({type:'SET_USER',payload:null})
         navigate('/login')
      
         
          })
  .catch((error)=>alert(error.message))

}
  return (
    <>
 

  <Stack direction='row' alignItems='center' sx={{position:'sticky',px:2,py:2,top:0,justifyContent:'space-between',zIndex:'100',backgroundColor:'whitesmoke'}} >
       <Box sx={{flexDirection:'row'}}>
           <Avatar src='/assets/logo1.png' alt=''height={40} onClick={()=>navigate('/')} />
             
       </Box>
       <Box >
           <Paper component='form' 
                  onSubmit={handleSubmit}
                  sx={{
                  boxShadow:'none',
                  flexDirection:'row',
                  justifyContent:'space-between',
                  px:1,
                  border:'1px solid #e3e3e3',
                  borderRadius:20}}>
                 <input type='text' placeholder='Search...'  className='search-bar' alt='' onChange={(event)=>{dispatch({type:'SEARCH_TEXT',payload:event.target.value})}} />
                 <IconButton type='submit' sx={{p:{md:'10px',sm:'2px',xs:'2px'}}}>
                       <Search fontSize='small' color='grey'  />
                 </IconButton>
                
           </Paper>
        </Box>
        {user!==null && <Box>
          <Avatar src={user?.photoURL}  onClick={()=>{setShowDropdown(showDropdown=>!showDropdown)}}/>
          {showDropdown && 
              <Box sx={{position:'absolute',top:'58px',border:'0.1px solid grey',backgroundColor:'white',borderRadius: '10px',right:{md:'1.8em',xs:'1.4em'}}}>
                <ul style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                   
                      <li onClick={handleLogout}>
                  
                        Logout
                                  
                      </li>
                  </ul>
              </Box>
          
          }
        </Box>
}
  </Stack>
  </>
  )
}

export default Header
