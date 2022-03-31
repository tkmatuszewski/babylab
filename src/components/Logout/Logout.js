import React, {useState} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router'

export default function Logout() {

    const [error, setError] = useState()
    const {currentUser, logout} = useAuth()
    const history = useHistory ()

    try{
        setError('')
        setLoading(true)
        logout
        history.push('/')
    } catch {
        setError('Wystąpił bład podczas próby wylogowania')
    }
    setLoading(false)
  }
    return (
        <div>
            
        </div>
    )
}
