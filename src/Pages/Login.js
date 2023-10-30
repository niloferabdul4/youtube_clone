import { Box, Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { auth,provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { AppContext } from '../Context/AppContextProvider'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const {dispatch}=useContext(AppContext)
    const navigate=useNavigate()

  const handleLogin=async()=>{
        signInWithPopup(auth,provider)
        .then((authUser)=>{
            dispatch({type:'SET_USER',payload:authUser.user})
            navigate('/')
        }

)
    }
  return (
    <div>
        <Box sx={{display:'flex',justifyContent:'center', alignItems:'center',mt:'200px'}}>
            <Box sx={{height:'360px',width:{md:'460px',xs:'350px',sm:'380px'},backgroundColor:'whitesmoke',borderRadius:'10px',gap:'20px', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                 <Typography variant='h5'fontWeight='600'>Login</Typography>
                 <Button variant="contained" sx={{borderRadius:'10px',px:5,py:2.5,fontWeight:'600'}} onClick={handleLogin}>Sign In With Google </Button>
            </Box>
          
        </Box>
      
    </div>
  )
}

export default Login
