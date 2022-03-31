import React, {useRef} from 'react'
import gsap from 'gsap'

const Aside =({children})=> {

    const aside = useRef();

    const onEnter =()=> {
        gsap.to(aside.current, {width: "20vw", ease:"power4.inout", duration: 0.3})
    }

    const onLeave = () => {
      gsap.to(aside.current, {width:"65px", ease: "power4.inout", duration: 0.3 });
    };
    

    return (
        <aside className="aside" ref={aside} onMouseEnter={onEnter} onMouseLeave={onLeave}>
            {children}
        </aside>
    )
}

export default Aside