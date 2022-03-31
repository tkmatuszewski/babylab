import React, {useRef, useEffect, useState} from "react";
import { Link, Navigate, useHistory, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
// import {auth} from "../Firebase/Firebase"
import { add, home, projects, signIn, stats } from "../../constants/routes";
import { gsap } from "gsap";

const Navigation = () => {

    // const [error, setError] = useState("")
    // const { currentUser, logout } = useAuth()
    // const history = useHistory()

    // const logOut = ()=> {
    //     return <Navigate to={signIn}/>
    // }
  
    // async function handleLogout() {
    //   setError("")
  
    //   try {
    //     await logout()
    //     logOut()
    //     // history.push(signIn)
    //   } catch {
    //     setError("Failed to log out")
    //   }
    // }

    const nav = useRef();
    const q = gsap.utils.selector(nav);
    
    const onEnter = () => {
      gsap.to(q(".navigationItem"), {
        display: "block",
        color: "white",
        opacity: 1,
        x: 0,
        ease: "power4.inout",
        delay: 0.2
      });
    
    };

    const onLeave = () => {
       gsap.to(q(".navigationItem"), {
         display: "none",
         x: -50,
         ease: "power4.inout",
         opacity: 0
       });
    };

    useEffect(() => {
       gsap.to(q(".navigation__icon"), {
         display: "block",
         opacity: 1,
         x: 0,
         ease: "power4.inout",
         stagger: 0.2
       });
    });

    return (
      <nav className="navigation" ref={nav} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <Link to={home}>
          <span className="navigation__icon" id="database" />
          <span className="navigationItem">Lista dzieci</span>
        </Link>
        <Link to={add}>
          <span className="navigation__icon" id="newChild" />
          <div className="navigationItem">Nowy badany</div>
        </Link>
        <Link to={projects}>
          <span className="navigation__icon" id="projects" />
          <div className="navigationItem">Projekty</div>
        </Link>
        <Link to={stats}>
          <span className="navigation__icon" id="stats"/>
          <div className="navigationItem">Statystyki</div>
        </Link>
        {/* <div onClick={()=>handleLogout()}>        
                <li className= "navigationItem">Wyloguj</li>
            </div> */}
        <Outlet />
      </nav>
    );
}

export default Navigation;