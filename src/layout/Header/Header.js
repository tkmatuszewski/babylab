import React from "react";

const Header = ({children}) => {
    return (
        <header className="header">
            <div className="headerCnt">
              {children}
            </div>
        </header>
    )
}

export default Header