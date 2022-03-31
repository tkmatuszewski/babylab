import React, {useState, useRef, useEffect} from 'react';
import AddProgression from '../AddProgression/AddProgression';
import AddChildPart from '../AddChildPart/AddChildPart';
import AddParentPart from '../AddParentPart/AddParentPart';
import AddSummary from '../AddSummary/AddSummary';
import Form from '../Form/Form';
import gsap from 'gsap';

export default function Add() {

    const [step, setStep]= useState(1)
    const [childData, setChildData]= useState([])
    const [parentData, setParentData] = useState([{ parentComment: "brak"}]);

    const photoRef= useRef()
    

    const formName = (step)=> {
      if(step === 1) {
        return "Dziecko"
      }else if (step === 2) {
        return "Opiekun"
      }else{
        return "Podsumowanie"
      }
    }

    useEffect(() => {
     gsap.to(photoRef.current, {y: 0, opacity: 1, ease:"power4.inout", duration:1, delay: 0.5})
    }, [step])

    return (
        <section className="add">
          <div className="add__photo" ref={photoRef}/>
          <div className="add__container">
            <Form name={formName(step)}>
              <AddProgression step={step} />
              {(() => {
                switch (step) {
                  case 1:
                    return (
                      <AddChildPart
                        step={setStep}
                        child={childData}
                        setData={setChildData}
                      />
                    );
                    break;
                  case 2:
                    return (
                      <AddParentPart
                        step={setStep}
                        parent={parentData}
                        setData={setParentData}
                      />
                    );
                    break;
                  case 3:
                    return (
                      <AddSummary
                        step={setStep}
                        child={childData}
                        parent={parentData}
                      />
                    );
                    break;
                }
              })()}
            </Form>
          </div>
        </section>
    );
}
