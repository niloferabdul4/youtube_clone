const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'LOAD_DATA':
            return {...state,data:action.payload}
        case 'LOAD_VIDEO_DETAILS':
               
                return {...state,singleVideoDetails:action.payload}
        case 'LOAD_CHANNEL_VIDEOS':
               
                return {...state,channelVideos:action.payload}
        case 'SELECT_MENU':
              return {...state,selectedMenu:action.payload}
        default:
            return state
    }
}
export default reducer;