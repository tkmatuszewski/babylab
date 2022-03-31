import React, {useState} from 'react'
import Wrapper from '../../layout/Wrapper/Wrapper';
import Modal from '../Modal/Modal';

export default function ChildDetailed() {

  const projects = [
    {name: "EEG",
    elapsed: 4,
    compleated: [{id: 1, date: '20.03.2020'}, {id: 2, date: '30.06.2020'}, {id:3, date:""}]},
    {name: "CCC",
    elapsed: 4,
    compleated: [{id: 1, date: '20.03.2020'}, {id: 2, date: '30.06.2020'}, {id:3, date: ""}]
  }
  ]

  const [modalDel, setModalDel] = useState(false);
  const [modalMeet, setModalMeet] = useState(false);
  const [meetingDate, setMeetingDate] = useState('');

  const renderProjects =  projects.map(project=> {
      return (
        <div className="project__cnt">
        {modalMeet && <Modal name="Spotkanie" closeModal={()=>{setModalMeet(false)}}>
          <div>
            <label className="">
              Data
              <input type="date" value={meetingDate} onChange={e=>setMeetingDate(e.target.value)}/>
            </label>
          </div>
        </Modal>}
          <div className="project__name">{project.name}</div>
          <div className="project__meetings">
            {project.compleated.map((meeting) => {
              
              if(meeting.date==="") {
                return (
                 <div className="project__mark__cnt">
                   <div className="project__mark">
                     <span>{meeting.id}</span>
                   </div>
                   <span className="project__mark__date">
                     -
                   </span>
                 </div>);
              } else {
              return (
                <div className="project__mark__cnt">
                  <div className="project__mark compleated">
                    <span>{meeting.id}</span>
                  </div>
                  <span className="project__mark__date compleated">{meeting.date}</span>
                </div>
              );
            }
            })}
          </div>
          <button className="projects__btn" onClick={()=>setModalMeet(true)}>Spotkanie</button>
        </div>
      );
    })
  
    return (
      // <Wrapper>
        <div className="childDetailed">
          <div className="name">Jan Nowak</div>
          {/* <h4 className="name">Jan Nowak</h4> */}
          <div className="actions">
            <button className="actions__btn">Edytuj</button>
            <button className="actions__btn" onClick={()=>setModalDel(true)}>Usuń</button>
          </div>
          <div id="projects__wrapper">
            <div id="projects__box">
              <strong id="projects__name">Projekty</strong>
              <div id="projects__list">{renderProjects}</div>
              <button className="projects__btn">Dodaj</button>
            </div>
          </div>
          <div className="box__wrapper basic">
            <div className="box">
              <strong className="box__name">Informacje</strong>
              <div className="box__list">
                <div className="box__list__line">
                  <span>Wiek</span>
                  <p>22,4m</p>
                </div>
                <div className="box__list__line">
                  <span>Urodziny</span>
                  <p>20.03.2020</p>
                </div>
                <div className="box__list__line">
                  <span>Długość ciąży</span>
                  <p>40tyg</p>
                </div>
                <div className="box__list__line">
                  <span>Języki</span>
                  <p>polski, angielski</p>
                </div>
                <div className="box__list__line">
                  <span>Komentarz</span>
                  <p>Dużo choruje</p>
                </div>
              </div>
            </div>
            <div className="box">
              <strong className="box__name">Kontakt</strong>
              <div className="box__list">
                <div className="box__list__line">
                  <span>email</span>
                  <p>tomaszmat@gmail.com</p>
                </div>
                <div className="box__list__line">
                  <span>telefon</span>
                  <p>593 332 084</p>
                </div>
              </div>
            </div>
              <div className="box">
                <strong className="box__name">Opiekun</strong>
                <div className="box__list">
                  <div className="box__list__line">
                    <span>Imię i nazwisko</span>
                    <p>Anna Fogel</p>
                  </div>
                  <div className="box__list__line">
                    <span>m. urodzenia</span>
                    <p>Warszawa</p>
                  </div>
                  <div className="box__list__line">
                    <span>m. zamieszkania</span>
                    <p>Wrocław</p>
                  </div>
                  <div className="box__list__line">
                    <span>Komentarz</span>
                    <p>Mama nie odbiera telefonu</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      // </Wrapper>
    );
}
