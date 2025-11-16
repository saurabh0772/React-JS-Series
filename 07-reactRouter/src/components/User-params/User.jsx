import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userid} = useParams()
  return (
    <>
        <h1 className='text-white text-4xl'>User : {userid}</h1>
    </>
  )
}

export default User