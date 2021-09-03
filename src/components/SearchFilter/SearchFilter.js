import React, {useState} from "react";
import classNames from "classnames";

const SearchFilter = ({name, children}) => {
    
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
      }

      const listEl = 
      classNames('searchFilterEl', {'active': active})
    return (
    <li className={listEl} id={name} onClick={()=>handleClick()}>
        <ul>{name}
        {children}
        </ul>
    </li>
    )
}

export default SearchFilter;