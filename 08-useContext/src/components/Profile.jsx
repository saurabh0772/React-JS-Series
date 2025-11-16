import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return <div>Not logged in, please Login</div>

    return (
        <div>
            <h3>Welcome Back, {user.username}</h3>
        </div>
    )
}

export default Profile