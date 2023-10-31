import { createContext, useReducer } from "react"
import { auth } from "../firebase"
import reducer from "./reducer"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
export const AppContext=createContext()

const AppContextProvider = ({children}) => {
    const initialState={
      videos:[],
      singleVideoDetails:null,
      channelVideos:[],
      channelDetails:[],
      relatedVideos:[],
      selectedMenu:'NilasCuisine',
      searchText:'',
      filteredVideos:[],
      user:null
    
    }
    const [state,dispatch]=useReducer(reducer,initialState)

    useEffect(()=>{
      const unSub=onAuthStateChanged(auth,(user)=>{
        dispatch({type:'SET_USER',payload:user})
      });
        return ()=>{
            unSub();
        }
    },[])

  return (
    <>
      <AppContext.Provider value={{state,dispatch}}>
              {children}
      </AppContext.Provider>
    </>
  )
}

export default AppContextProvider
