import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { Box, IconButton, Paper, Stack } from '@mui/material';
import { Search } from '@mui/icons-material';
const Header = () => {
  return (
    <>
 

  <Stack direction='row' alignItems='center' justifyContent='space-between' p={2} sx={{position:'sticky',top:0,justifyContent:'space-between'}} >
       <Box sx={{flexDirection:'row'}}>
           <img src='/assets/logo1.png' alt='' height={45} />
             
       </Box>
       <Box>
           <Paper component='form' 
                  onSubmit={()=>{}}
                  sx={{width:{sx:100,md:500},boxShadow:'none',flexDirection:'row',justifyContent:'space-between',border:'1px solid #e3e3e3',borderRadius:20,pl:2,flex:'1'}}>
                 <input type='text' placeholder='Search' style={{border:'none'}} alt='' onChange={()=>{}} />
                 <IconButton type='submit' sx={{p:'10px'}}>
                       <Search />
                 </IconButton>
                
           </Paper>
       </Box>
       <Box sx={{gap:10}}>
               <span><NotificationsNoneIcon /></span>
                <span><AppsOutlinedIcon /> </span>
                <span><img src='assets/profilePic.png' alt='' height={40}/></span>
       </Box>

  </Stack>
  </>
  )
}

export default Header
