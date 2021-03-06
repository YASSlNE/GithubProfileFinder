import { createContext, useReducer} from "react";
import {Url} from "url";
import githubReducer from "./GithubReducer";
const GithubContext=createContext({
    users:"",
    loading:true
})

const GITHUB_URL=process.env.REACT_APP_GITHUB_URL


export const GithubProvider=({children})=>{
    const initialState = {
        users: [],
        loading: false,
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    const clearUsers=()=>dispatch({type:'CLEAR_USERS'})


    const searchUsers=async(text)=>{
        setLoading() 
        // const params=Url.searchParams.get("q")
        const response=await fetch(`${GITHUB_URL}/search/users?q=${encodeURIComponent(text)}`)
        console.log(response)
        const {items}=await response.json()
        dispatch({
            type:'GET_USERS',
            payload: items,
        })
    }
    const setLoading=()=>dispatch({type:'SET_LOADING'})
    return <GithubContext.Provider value={{users: state.users, loading: state.loading, searchUsers, clearUsers}}>
        {children}
    </GithubContext.Provider>
}
export default GithubContext