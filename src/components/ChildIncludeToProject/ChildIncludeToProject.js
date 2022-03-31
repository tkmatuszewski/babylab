import React, {useState,useRef, useEffect} from 'react'
import Wrapper from '../../layout/Wrapper/Wrapper'
import Form from '../Form/Form'
import { db } from '../Firebase/Firebase';
import { onSnapshot, collection } from '@firebase/firestore';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { home } from '../../constants/routes';
import gsap from 'gsap';

export default function ChildIncludeToProject() {

    const [addToProject, setAddToProject] = useState("");
    const [projects, setProjects] = useState([]);
    const [color, setColor] = useState("white");

    const heroRef = useRef()

    const handleChange = (e)=> {
        updateColor(e.target.value);
        return setAddToProject(e.target.value)
    }

    const handleSubmit = ()=> {

    }

    const updateColor = (name)=> {

        const targetProject = (value)=> {
            return value.name === name
        }

        const result = projects.filter(targetProject)

        return setColor(result[0].color)
    }

    useEffect(() => {
        // gsap.to (heroRef.current, {background: "white" , ease: "Power4.inout", duration: 1}
        // )
        gsap.to(heroRef.current, {x: 0, color: "black", ease:"Power4.inout", duration: 1, delay: 1});

        const q = collection(db, "projects");
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const projects = [{name: "Wybierz projekt"}];
          snapshot.forEach((doc) => {
            projects.push({name: doc.data().name, color: doc.data().color});
          });
          setProjects(projects);
        });
        return unsubscribe;
    }, [])

    return (
      <Wrapper>
        <div className="childToProject">
          <div className="childToProject__hero">
            <h3 className="childToProject__hero__title" ref={heroRef}>
              Michał jest gotowy na wizytę w{" "}
              <strong>
                labie{" "}
                <span
                  className="childToProject__hero__title__underline"
                  style={{ backgroundColor: color }}
                />
              </strong>
            </h3>
          </div>
          <div className="childToProject__form">
            <div className="childToProject__form__cnt">
              <Form>
                <label>
                  Dodaj do pojektu
                  <select
                    value={addToProject}
                    onChange={(e) => handleChange(e)}
                  >
                    {projects.map((project, index) => {
                      return (
                        <option key={index} value={project.name}>
                          {project.name}
                        </option>
                      );
                    })}
                  </select>
                </label>
                <div className="childToProject__btns">
                  <Link to={home}>
                    <Button name="Anuluj" type="secondary" />
                  </Link>
                  <Button name="Dodaj" type="secondary" />
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Wrapper>
    );
}
