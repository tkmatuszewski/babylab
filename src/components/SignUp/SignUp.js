import React, {useRef, useState} from "react";
import Logo from "../Logo/Logo";
import { Link, Navigate, useHistory } from "react-router-dom";
import {signIn, home} from "../../constants/routes";
import { useAuth } from "../../contexts/AuthContext";
// import { home } from "../../constants/routes";



const SignUp = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordRepRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState("")
    const {signup, home} = useAuth()
    // const history = useHistory ()
    const navigate = ()=> {
        return <Navigate to={"/"}/>
    }

    async function handleSubmit(e) {
    e.preventDefault();
   
    if (passwordRef.current.value !== passwordRepRef.current.value){
        return setError("Wpisane hasła nie są takie same")
    }

    try{
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        // history.push(home)
        // navigate()
    } catch {
        setError('Wystąpił bład podczas tworzenia konta')
    }
    setLoading(false)
  }

    return (
        <section className="signIn">
            <div className="signInLeft">
                <form className="signInForm" onSubmit={handleSubmit}>
                    <h1 className="signInFormTitle">Utwórz konto!</h1>
                    {error &&  <p className="signInError">{error}</p>}
                    <label className="signInFormLabel">
                        <input type="email" placeholder="adres email" ref = {emailRef}  required/>
                    </label>
                    <label className="signInFormLabel">
                        <input type="password" placeholder="hasło" ref = {passwordRef} required/>
                    </label>
                    <label className="signInFormLabel">
                        <input type="password" placeholder="powtórz hasło" ref = {passwordRepRef} required/>
                    </label>
                    <div className="signInFormLinks">
                        <p>
                            Masz już konto?
                            <Link to={signIn}>Zaloguj się</Link>                
                        </p> 
                    </div>
                   
                    <button type="submit" className="signInFormBtn" disabled={loading}>Zarejestruj</button>
                </form>
            </div>
            <div className="signInRight">
                <Logo height={40} width={40} fontSize={20} lineHeight={40}>bl</Logo>
            </div>
        </section>
    )
}

export default SignUp