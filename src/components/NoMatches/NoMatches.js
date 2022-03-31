import React, {useRef, useEffect} from 'react'
import gsap from 'gsap';

export default function NoMatches() {

    const text = useRef()
    const t = gsap.utils.selector(text);

    useEffect(() => {
        gsap.from(t(".noMatches__text__phrase"), {
            y: 150,
            ease: "power4.out",
            delay: 0.5,
            stagger: 0.3,
            duration: 1.5,
        })
    }, [])


    return (
      <div className="noMatches" ref={text}>
          <div className="noMatches__text__line">
            <span className="noMatches__text__phrase">Ups...</span>
          </div>
          <div className="noMatches__text__line">
            <span className="noMatches__text__phrase">Nie ma pasujących</span>
          </div>
          <div className="noMatches__text__line">
            <span className="noMatches__text__phrase">wyników.</span>
          </div>
      </div>
    );
}
