const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'LOAD_VIDEOS':
            return {...state,videos:action.payload}
        case 'LOAD_VIDEO_DETAILS':               
                return {...state,singleVideoDetails:action.payload}
        case 'LOAD_CHANNEL_DETAILS':               
                return {...state,channelDetails:action.payload}
        case 'LOAD_CHANNEL_VIDEOS':
               
                return {...state,channelVideos:action.payload}
        case 'SELECT_MENU':
              return {...state,selectedMenu:action.payload}
        case 'LOAD_RELATED_VIDEOS':
              return {...state,relatedVideos:action.payload}
        case 'SEARCH_TEXT':
                return {...state,searchText:action.payload}
        case 'LOAD_FILTERED_VIDEOS':
                return {...state,filteredVideos:action.payload}
        case 'SET_USER':
                        return {...state,user:action.payload}
              
        default:
            return state
    }
}
export default reducer;