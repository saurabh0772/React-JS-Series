import React, { useState, useEffect } from 'react'

function GitHubInfo() {

    // const getData = async () => {
    //     const data = await fetch('https://api.github.com/users/saurabh0772');
    //     data = data.json();
        
    // }
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/saurabh0772')
        .then(res => res.json())
        .then(res => {
            setData(res);
            return res;
        })
    }, [])

  return (
    <>
        <div className='text-white w-fit flex flex-col items-center p-4 mx-auto'>
            <h1 className='text-5xl mb-4'>GitHUB Info</h1>
            <div className='flex flex-row gap-2'>
                <img src={data.avatar_url} alt="" className='rounded-lg'/>
                
                <div className=' flex flex-col items-center justify-center'>
                    <h3 className='text-3xl'>Github Follower : </h3>
                    <h3 className='text-3xl'>{data.followers}</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default GitHubInfo