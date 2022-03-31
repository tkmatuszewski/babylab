import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../Firebase/Firebase';
import Wrapper from '../../layout/Wrapper/Wrapper';
import { newProject } from '../../constants/routes';
import {gsap} from 'gsap';
import Modal from '../Modal/Modal';

export default function Projects() {

    const [projectData, setProjectData] = useState([]);
    const [modal, setModal]=useState(false)
    const projectList = useRef();
    const headerRef = useRef();
    const l = gsap.utils.selector(projectList);
    const detailsRef = useRef();
    const d = gsap.utils.selector(detailsRef);
    
    // const [loading, setLoading] = useState(false);
    const closeModal= ()=> {
      return setModal(false)
    }

    const onMouseEnter = () => {
      gsap.to(d(".projects__el__facts__line__d"), {
        y: 0,
        duration: 1.5,
        delay: 0.5,
        stagger: 0.3,
      });
    }

    useEffect(() => {
      gsap.to(headerRef.current, {opacity: 1, y: 0, ease:"Power4.easeOut", duration: 1});
      gsap.to(projectList.current, {opacity: 1, ease:"Power4.easeOut", y: 0, duration: 1.5, delay: 0.5});

        const q = collection(db, "projects");
        const unsubscribe = onSnapshot(q, (snapshot) => {
        const projects = [];
            snapshot.forEach((doc) => {
                projects.push({data:doc.data(), id:doc.id});
            });
            setProjectData(projects)
        });
        return unsubscribe
    }, [])

    return (
      // <Wrapper>
      <>
        <div className="projects__main">
          <div className="projects__header" ref={headerRef}>
            <div className="projects__header__container">
              <h1>Twoje Projekty</h1>
              <Link to={newProject}>
                <Button
                  name={"Nowy"}
                  type={"primary"}
                  onClick={() => {
                    return null;
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="projects__list" ref={projectList}>
            {projectData.map((el, index) => {
              return (
                <div className="projects__el" key={"project" + index}>
                  <div
                    className="projects__el__photo"
                    style={{ backgroundColor: el.data.color }}
                    onMouseEnter={onMouseEnter}
                    ref={detailsRef}
                  >
                    <div className="projects__el__facts">
                      <div className="projects__el__facts__line">
                        <span className="projects__el__facts__line__d">
                          Prowadzący: {el.data.manager}
                        </span>
                      </div>
                      <div className="projects__el__facts__line">
                        <span className="projects__el__facts__line__d">
                          Liczba spotkań: {el.data.meetings}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="projects__el__head">
                    <h2 className="projects__el__name">{el.data.name}</h2>
                    <Dropdown name={">"}>
                      <button className="dropdown__el">Edytuj</button>
                      <button
                        className="dropdown__el"
                        onClick={() => setModal(true)}
                      >
                        Usuń
                      </button>
                    </Dropdown>
                  </div>
                  <p className="projects__el__dsc">{el.data.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        {modal && <Modal name={"Usuwanie projektu"} closeModal={setModal}>
          <p>Czy napewno chcesz usunąć ten projekt? Dane projektu zostaną utracone</p>
          </Modal>}
          </>
      // </Wrapper>
    );
}
