import React from 'react'
import {useEffect, useContext} from 'react'
import Spinner from './Spinner.jsx'
import UserItem from './UserItem.jsx'
import GithubContext from '../../context/github/GithubContext.js'
function UserResults() {
    const {users, loading, searchUsers} = useContext(GithubContext)

    
    // useEffect(()=>{
    //     searchUsers()
    // }, [])
    
    if(loading){
        return <Spinner></Spinner>
    } 
    else{
    return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>

            {users.map((user)=>(
                <UserItem key={user.id} user={user}></UserItem>
            ))}
        </div>
    )
    }
}

export default UserResults