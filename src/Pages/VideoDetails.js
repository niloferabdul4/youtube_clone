import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContextProvider'
import Sidebar from '../Components/Sidebar'
import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import RelatedVideos from '../Components/RelatedVideos'
import ReactPlayer from 'react-player'
import { fetchFromApi } from '../Utils/fetchFromApi'
import { CheckCircle } from '@mui/icons-material'
import ReactShowMoreText from 'react-show-more-text'
const VideoDetails = () => {
    const{state:{data,singleVideoDetails},dispatch}=useContext(AppContext)
    const [expand,setExpand]=useState(false)
    const {id}=useParams()
    //https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=7ghhRHRP6t4


    useEffect(()=>{
       fetchFromApi(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`)
      .then((data)=> dispatch({type:'LOAD_VIDEO_DETAILS',payload:data.items[0]}))
       
      .catch(error=>console.log(error.message))
   
    },[id])
console.log(singleVideoDetails)
  return (
    <>
      <Box minHeight='95vh' >
       <Stack sx={{flexDirection:{sx:'column-reverse',md:'row'},p:{sx:2,md:10}}}>
        <Box sx={{flex:'1'}}>

         
             <Box sx={{width:{sx:'100%' , md:'800'} }}>   
            
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
              </Box> 
              
              <Typography variant='h6' fontWeight={600} p={3}>
                     {singleVideoDetails?.snippet.title}
                </Typography> 
                <Stack direction="row" justifyContent="space-between"  alignItems='center' px={2} py={2} >              
                    <Typography variant='body1' >
                        {singleVideoDetails?.snippet.channelTitle}
                        <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                    </Typography>
                      <Stack direction="row" gap="20px" alignItems="center">
                        <Typography variant="body1" sx={{ opacity: 0.7 }}>
                          {parseInt(singleVideoDetails?.statistics?.viewCount).toLocaleString()} views
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.7 }}>
                          {parseInt(singleVideoDetails?.statistics?.likeCount).toLocaleString()} likes
                        </Typography>
                       </Stack>
                </Stack>
                <ReactShowMoreText lines={3}
                                    more="Show more"
                                    less="Show less"
                                    className="content-css"
                                    anchorClass="my-anchor-css-class"
                                    onClick={()=>{}}
                                    expanded={false}
                                    width={280}
                                    truncatedEndingComponent={"... "}
                                    >
                      <Typography variant='body1' p={2.5}  sx={{backgroundColor:'whitesmoke',borderRadius:'10px'}} >
                         {singleVideoDetails?.snippet?.description}
                      </Typography>
                    </ReactShowMoreText>
                
        </Box>
        <Box sx={{alignItems:'flex-start'}}>
          <Box sx={{flexDirection:'column' }}>
           <Typography variant='h5' fontWeight='bold' p={2}>
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
