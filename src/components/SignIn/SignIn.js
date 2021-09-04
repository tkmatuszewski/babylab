import React, {useState} from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const SignIn = () => {

    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <section className="signIn">
            <div className="signInLeft">
                <form className="signInForm">
                    <h1 className="signInFormTitle">Witaj ponownie!</h1>
                    <label className="signInFormLabel">
                        <input type="string" value ={login} placeholder="adres eamil" onChange={(e)=>{setLogin(e.target.value)}} />
                    </label>
                    <label className="signInFormLabel">
                        <input type="password" value={password} placeholder="hasło" onChange={(e)=>{setPassword(e.target.value)}}/>
                    </label>
                    <div className="signInFormLinks">
                        <p>
                            Jesteś tu po raz pierwszy?
                            <Link to='/signup'>Zarejestruj się</Link>                
                        </p>
                        <Link to='/reset'>
                             Zapomniałeś hasła?
                        </Link>        
                        </div>
                    <button type="submit" className="signInFormBtn">Zaloguj</button>
                </form>
            </div>
            <div className="signInRight">
                <Logo height={40} width={40} fontSize={20} lineHeight={40}>bl</Logo>
            </div>
        </section>
    )
}

export default SignIn