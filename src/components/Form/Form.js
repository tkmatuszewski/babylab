import gsap from 'gsap';
import React, {useRef, useEffect} from 'react'

export default function Form({name, children, submit}) {

    const formRef = useRef();

    const submitHandler= (e)=> {
       e.preventDefault();
       return submit()
    }

    useEffect(() => {
        gsap.to(formRef.current, {y: 0, opacity:1, ease: "Power4.inout", duration: 1})
    },[])

    return (
        <form className="form" ref={formRef} onSubmit={submitHandler}>
            <h3 className="form__name">{name}</h3>
            {children}  
        </form>
    )
}
