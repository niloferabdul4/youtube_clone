import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContextProvider'
import Sidebar from '../Components/Sidebar'
import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'

const VideoDetails = () => {
    const{state:{dataByCategory,data,singleVideoDetails,relatedVideos},dispatch}=useContext(AppContext)
    const {id}=useParams()
    
   console.log(data)

    useEffect(()=>{
        const details=dataByCategory?.find(item=>(item.id.videoId)===(id))
       //const relatedVideos=[];
        dispatch({type:'LOAD_VIDEO_DETAILS',payload:details})
      //console.log(details)
   
        const currentVideoTags=data.filter(item=>(item.id.videoId)===id? (item.snippet.tags.split(' ')):'')
        console.log(currentVideoTags)
      /*
        for(let i=0;i<data.length;i++)
        {
        
          for(let j=0;j<currentTags.length;j++)
          {
            if((data[i]?.snippet?.title.split(' ')).includes(currentTags[j]))
            {
                   
              console.log(data[i].snippet?.title.split(' '))
              relatedVideos.push(data[i])
                   
            }
          }
         
        }
        dispatch({type:'LOAD_RELATED_VIDEOS',payload:relatedVideos}) 
        console.log(relatedVideos)
     */
       // const relatedVideos=data.filter(element => currentVideoTags.includes(element.snippet.tags));        
        //console.log(relatedVideos)
      
     
    },[id])

  return (
    <>

       <Stack sx={{flexDirection:{sx:'column-reverse',md:'row'}}}>
        <Box sx={{flex:'0.6',p:10}}>
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
              <Typography variant='subHeading1'>
                     {singleVideoDetails?.snippet.title}
                </Typography>
                <Typography variant='body1'>
                     {singleVideoDetails?.snippet.channelTitle}
                </Typography>

              </CardContent>
          </Card>
               
          
        </Box>
        <Box sx={{flex:0.4,alignItems:'flex-start',p:10}}>
           <Typography variant='h5' fontWeight='bold'>
            Related Videos
           </Typography>
          
           <Stack direction='row' sx={{overflowY:'auto', 
                                        height:{sx:'auto',md:'95%'},
                                        flexDirection:{md:'column'}}}>
               <Stack direction='row' >
                {relatedVideos?.map(item=>{return <>
                  <CardMedia sx={{height:140, width:200,mr:3,mt:3}}image={item?.snippet?.thumbnails.default.url} alt='' />
                    <CardContent sx={{height:140, width:400,g:10}} >
                      <Typography variant='subHeading2'>
                        {item?.snippet?.title.slice(0,60)}
                      </Typography>
                      <Typography variant='body1'>
                        {item?.snippet?.channelTitle}
                      </Typography>
                     
                    </CardContent>
                  </>})}
               </Stack>
                
            
                   
           </Stack>
        </Box>
        </Stack>     
     
        </>
    
  )
}

export default VideoDetails
