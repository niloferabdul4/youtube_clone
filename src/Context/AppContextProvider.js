import { createContext, useReducer } from "react"
import reducer from "./reducer"
export const AppContext=createContext()

const AppContextProvider = ({children}) => {
    const initialState={
      data:[],
      singleVideoDetails:null,
      channelVideos:[],
      relatedVideos:[],
      selectedMenu:'Home'
    }
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <>
      <AppContext.Provider value={{state,dispatch}}>
              {children}
      </AppContext.Provider>
    </>
  )
}

export default AppContextProvider