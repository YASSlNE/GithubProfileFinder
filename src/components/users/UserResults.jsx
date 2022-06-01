import React from 'react'
import {useEffect, useState, useContext} from 'react'
import Spinner from './Spinner.jsx'
import UserItem from './UserItem.jsx'
import GithubContext from '../../context/GithubContext.js'
function UserResults() {
    const {users, loading, fetchUsers} = useContext(GithubContext)

    
    useEffect(()=>{
         fetchUsers()
    }, [])
    
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