import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to='/add'>
                <li className= "navigationItem">Nowy badany</li>
            </Link>
            <Link to='/projects'>        
                <li className= "navigationItem">Projekty</li>
            </Link>
            <Link to='/stats'>        
                <li className= "navigationItem">Statystyki</li>
            </Link>
            <Link to='/login'>        
                <li className= "navigationItem">Wyloguj</li>
            </Link>
        </nav>
    )
}

export default Navigation;