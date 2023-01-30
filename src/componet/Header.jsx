import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const handlenavigate = (path) => {
        navigate(path)
    }
    return (
        <div>
            <button onClick={() => handlenavigate('/mount')}>Mounting Phase</button>
            <button onClick={() => handlenavigate('/update')}>UnMounting Phase</button>
            <button onClick={() => handlenavigate('/unmount')}>Updating Phase</button>
        </div>
    )
}

export default Header