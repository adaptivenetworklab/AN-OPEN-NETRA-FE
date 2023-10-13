import React, {useContext} from 'react'
import { link } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'


const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div>
            {user ? (
                <button onClick={logoutUser}>Logout</button> 
            ): (
                <link to="/login">Login</link>
            )}
        </div>
    )
}

export default Header