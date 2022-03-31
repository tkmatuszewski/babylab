import React, {useState, useRef, useEffect} from 'react'
import { projects } from '../../constants/routes';
import Button from '../Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc } from '@firebase/firestore';
import { db } from '../Firebase/Firebase';
import {gsap} from 'gsap';
import Form from '../Form/Form';

const NewProject =()=> {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [manager, setManager] = useState("");
    const [meetings, setMeetings] = useState("");
    const [color, setColor] = useState("");
    const [error, setError] = useState("");

    const photoRef = useRef();
    const formRef = useRef();
    const q = gsap.utils.selector(formRef);

    const navigate = useNavigate()

    const newProject = {
      name,
      description,
      manager,
      meetings,
      color,
    };

    // const hasNull=(target)=> {
    //   for (var member in target) {
    //     if (target[member] == null || target[member]=== undefined || target[member]==="") {
    //       return true;
    //     }
    //   }
    //   return false;
    // }

    const handleSubmit = () => {
      //  e.preventDefault()
      // if(hasNull(newProject)){
        // setError("Wypełnij formularz"
        // )}else {
          const docRef = addDoc(collection(db, "projects"), 
            newProject
          );
         
        return navigate(projects)
      }

    useEffect(() => {
      gsap.to(photoRef.current, {y: 100, opacity: 1, duration: 1, ease: "Power2.easeOut", delay:0.5});
    });

    return (
        <div className="newProject">
          <div className="newProject__form__container" ref={formRef}>
            <Form name={"Nowy Projekt"} submit={handleSubmit}>
              <div className="form__row">
                <label>
                  Nazwa
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nazwij projekt"
                    autoFocus={true}
                    required
                  />
                </label>
                <label>
                  Koordynator
                  <input
                    type="text"
                    type="text"
                    value={manager}
                    onChange={(e) => setManager(e.target.value)}
                    placeholder="Szef"
                  />
                </label>
              </div>
              <label id="dsc">
                Opis
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Parę słów o projektcie"
                />
              </label>
              <div className="form__row">
                <label>
                  Liczba spotkań
                  <input
                    type="number"
                    value={meetings}
                    onChange={(e) => setMeetings(e.target.value)}
                    placeholder="Przewidywane spotkania"
                  />
                </label>
                <label>
                  Kolor projektu
                  <input
                    id="color"
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </label>
              </div>
              <div className="newProject__buttons">
                <Link to={projects}>
                  <Button
                    name={"Anuluj"}
                    type={"secondary"}
                    onClick={() => {
                      return null;
                    }}
                  />
                </Link>
                <Button name={"Dodaj"} type={"submit"}/>
              </div>
            </Form>
          </div>
          <div className="newProject__img" ref={photoRef} />
        </div>
    );
}

export default NewProject;