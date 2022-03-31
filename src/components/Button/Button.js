import React from 'react';
import classNames from 'classnames';


const Button =({name, onClick, type, role})=> {

    const button =  classNames({ [`btn__${type}`]: true });

    const clickHandler = ()=> {
        // e.preventDefault();
        // if(onClick) {
            return onClick()
        }
    
        // if(onClick !==null || onClick !== undefined) {
        //     return onClick
        // }

    // const handleClick=(e)=>{
    //     e.preventDefault();
    //     if(action){
    //         return action
    //     }
    // }

    return (
        <button type= {role} className= {button} 
        onClick ={clickHandler}
        >
            {name}
        </button>
    )
}

export default Button
