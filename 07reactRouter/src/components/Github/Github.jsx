import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom' // 2nd

function Github(){

    const data=useLoaderData() //2nd

    // 1st way
    /*
    const [data, setData]=useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/shubham4singh')
        .then(response=>response.json())
        .then(data=>{setData(data)

        })
    },[])
    */

    return(
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers:{data.followers} 
        <img src={data.avatar_url}></img>
        </div>
        
    )
}

export default Github


// 2nd way if we use loader
export const githubInfoLoader=async()=>{
    const response = await fetch('https://api.github.com/users/shubham4singh')
    return response.json()
}