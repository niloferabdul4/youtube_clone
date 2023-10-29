import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContextProvider'
import Sidebar from '../Components/Sidebar'
import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import RelatedVideos from '../Components/RelatedVideos'
import ReactPlayer from 'react-player'
import { fetchFromApi } from '../Utils/fetchFromApi'
import { CheckCircle } from '@mui/icons-material'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { updateDoc,doc } from '@firebase/firestore'
import { db } from '../firebase'

const VideoDetails = () => {
    const{state:{singleVideoDetails},dispatch}=useContext(AppContext)
    const [expand,setExpand]=useState(false)
    const [liked,setLiked]=useState(false)
    const {id}=useParams()

    //https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=7ghhRHRP6t4
  
    useEffect(()=>{
       fetchFromApi(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`)
      .then((data)=> dispatch({type:'LOAD_VIDEO_DETAILS',payload:data.items[0]}))
       
      .catch(error=>console.log(error.message))
   
    },[id])
    
    const handleLike=async()=>
    {
      setLiked(liked=>!liked)
    }
    
console.log(singleVideoDetails)
  return (
    <>
      <Box minHeight='95vh' >
       <Stack sx={{flexDirection:{sx:'column-reverse',md:'row'},p:{sm:0.5,md:10},textAlign:'justify'}}>
        <Box sx={{flex:'1' ,pr:{md:15}}}>

         
             <Box sx={{width:{sx:'100%' , md:'900'} }}>   
            
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
              </Box> 
              
              <Typography variant='h6' fontWeight={600} py={3} px={2}>
                     {singleVideoDetails?.snippet.title}
                </Typography> 
                <Stack direction="row" justifyContent="space-between"  alignItems='center' px={2} py={2}>              
                    <Typography variant={{ sm: "subtitle1", md: 'h6' }}  >
                        {singleVideoDetails?.snippet.channelTitle}
                        <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                    </Typography>
                      <Stack direction="row" gap="30px" alignItems="center">
                        <Typography variant="body1" sx={{ opacity: 0.7 }}>
                          {parseInt(singleVideoDetails?.statistics?.viewCount).toLocaleString()} views
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.7,display:'flex', alignItems:'center' }}>
                          {liked? (<ThumbUpIcon onClick={handleLike}  style={{marginRight:'4px' ,color:'blue'}}/> ): (<ThumbUpAltOutlinedIcon  onClick={handleLike} style={{marginRight:'4px'}}/>)}
                          {parseInt(singleVideoDetails?.statistics?.likeCount).toLocaleString()} likes
                        </Typography>
                       </Stack>
                  </Stack>
                      <Stack direction='column' overflow='auto' alignItems='flex-start' px={2} py={2} sx={{backgroundColor:'whitesmoke'}}>
                      <Typography variant='h7' width='100%' >
                         {expand? (singleVideoDetails?.snippet?.description) : (singleVideoDetails?.snippet?.description.slice(0,200))}...
                      </Typography>
                      <Button onClick={()=>setExpand(expand=>!expand)}>{expand? 'Show less' : 'Show more'}</Button>
                  </Stack>
                
        </Box>
        <Box sx={{alignItems:'flex-start'}}>
          <Box sx={{flexDirection:'column' }}>
           <Typography variant='h5' fontWeight='bold' sx={{px:{sm:2,xs:2},py:{sm:2.5,xs:2.5}}}>
            Related Videos
           </Typography>
        </Box>
       
          <Box sx={{flexDirection:'column' ,overflowY:'auto', 
                                          height:{sx:'auto',md:'95vh'},
                                          
                                          }}>
            <RelatedVideos id={id}/>
            </Box>
       
        </Box>
        </Stack>     
        </Box>
        </>
    
  )
}

export default VideoDetails
