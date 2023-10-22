import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContextProvider'
import Sidebar from '../Components/Sidebar'
import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'

const VideoDetails = () => {
    const{state:{data,singleVideoDetails},dispatch}=useContext(AppContext)
    const {id}=useParams()
    
   // console.log(data)

    useEffect(()=>{
        const details=data?.find(item=>(item.id.videoId)===(id))
       const relatedVideos=[];
        dispatch({type:'LOAD_VIDEO_DETAILS',payload:details})
      /*
       //const currentKeywords=details.snippet.title.split(' ')
      console.log(currentKeywords.length)
      
        for(let i=0;i<data.length;i++)
        {
        
          for(let j=0;j<currentKeywords.length;j++)
          {
            if((data[i].title).split(' ')===currentKeywords[j])
            {
                   relatedVideos.push(data[i])
            }
          }
          return relatedVideos
        }
        console.log(relatedVideos)
     */
       // const relatedVideos=data.filter(element => currentVideoTags.includes(element.snippet.tags));        
        //console.log(relatedVideos)
       
     
    },[id])

  return (
    <>

       <Stack sx={{flexDirection:{sx:'column-reverse',md:'row'}}}>
        <Box sx={{flex:'1',p:10}}>
          <Card sx={{boxShadow:'none'}}>

             <CardMedia>
                
             <iframe width="900" 
                height="700" 
                src={`https://www.youtube.com/embed/${id}`} 
                title="YouTube video player" 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
         </iframe>
              </CardMedia> 
              <CardContent sx={{width:'500',height:'100'}}>
              <Typography variant='h5'>
                     {singleVideoDetails?.snippet.title}
                </Typography>
                <Typography variant='body1'>
                     {singleVideoDetails?.snippet.channelTitle}
                </Typography>

              </CardContent>
          </Card>
               
          
        </Box>
        <Box>
          Related Videos
        </Box>
        </Stack>     
     
        </>
    
  )
}

export default VideoDetails
