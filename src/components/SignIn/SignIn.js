import React, {useRef, useState} from "react";
import Logo from "../Logo/Logo";
import { Link, Navigate, useHistory } from "react-router-dom";
import {signUp, home} from "../../constants/routes";
import { useAuth } from "../../contexts/AuthContext";
import {auth} from "../Firebase/Firebase"

const SignIn = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    // const history = useHistory()
    // const navigate = ()=> {
    //     return <Navigate to={home}/>
    // }

    function handleSubmit(e) {
    e.preventDefault()
    try{
        setError("")
        setLoading(true)
        login(auth, emailRef.current.value, passwordRef.current.value)
        // history.push("/")
        // navigate();
    } 
    catch {
        setError('Wystąpił bład podczas logowania')
    }
    setLoading(false)
  }

//   async function handleSubmit(e) {
//     e.preventDefault()

//     try {
//       setError("")
//       setLoading(true)
//       await login(emailRef.current.value, passwordRef.current.value)
//       history.push("/")
//     } catch {
//       setError("Failed to log in")
//     }

//     setLoading(false)
//   }

    return (
        <section className="signIn">
            <div className="signInLeft">
                <form className="signInForm" onSubmit={handleSubmit}>
                    <h1 className="signInFormTitle">Witaj ponownie!</h1>
                    {error && <p className="signInError">{error}</p>}
                    <label className="signInFormLabel">
                        <input type="email" placeholder="adres email" ref = {emailRef}  required/>
                    </label>
                    <label className="signInFormLabel">
                        <input type="password" placeholder="hasło" ref = {passwordRef} required/>
                    </label>
                    <div className="signInFormLinks">
                        <p>
                            Nie masz jeszcze konta?
                            <Link to={signUp}>Rejestracja</Link>                
                        </p> 
                    </div>
                    <button type="submit" className="signInFormBtn" disabled={loading}>Zaloguj</button>
                </form>
            </div>
            <div className="signInRight">
                <Logo sizeVh={40} fontSize={20}>bl</Logo>
            </div>
        </section>
    )
}

export default SignIn