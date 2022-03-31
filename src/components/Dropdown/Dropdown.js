import React from 'react'

const Dropdown =({name, children})=> {
    return (
        <div className="dropdown">
            <button className="dropdown__btn">{name}</button>
            <div className="dropdown__content">
              {children}
            </div>
        </div>
    )
}

export default Dropdown
