import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import { db } from '../Firebase/Firebase';
import { collection, onSnapshot } from '@firebase/firestore';
import classNames from 'classnames';

const SexMarker= ({sex})=> {
    return sex === "male" ? <div className="child__sex male"/> : <div className="child__sex female"/>
  }

const RenderProjects = ({childId})=> {

  const [inProject, setInProjects]= useState([])
  const [loading, setLoading] = useState(false)

    const markers = (number, completed, bgColor) => {

      const isCompleted = (index, completed)=>{

        const markerClass = classNames("proj__marker", ((index+1 <= completed) ? "completed" : null))
          return markerClass

      }

      const arr = []
      for (let i = 0; i < number; i++) {
        arr.push(i)
      }

     return arr.map((item, index) => (
       <div className={isCompleted(index, completed)}> 
        {/* // backgroundColor: isCompleted(index,completed)? bgColor : "white", color: "black"}}> */}
         {item + 1}
       </div>
     ));
    }
      useEffect(() => {
        const q = collection(db, `children/${childId}/inProjects`);
        const unsubscribe = onSnapshot(q, (snapshot) => {
          setLoading(true);
          const participatesIn = [];
          snapshot.forEach((doc) => {
            participatesIn.push(doc.data());
          });
          setInProjects(participatesIn);
          // updateData(data);
          setLoading(false);
        });
        return unsubscribe;
      }, []);
   
    return inProject.map((el) => (
      <div className="proj">
        <span className="proj__name">{el.name}</span>
        <div className="proj__meetings">
          {markers(el.elapsed, el.compleated, el.color)}
        </div>
      </div>
    ));
  };

export default function Child({child, index}) {

  const [detHover, setDetHover] = useState(false);

  const handleHover = (detHover)=> {
    return setDetHover(!detHover)
  }

  function getAge(dateString) {
    
      var today = new Date();
      var birth = new Date(dateString);
      var timeDiff = today.getTime() - birth.getTime();
      var yearDiff = timeDiff / (24 * 60 * 60 * 1000) / 365.25;
      const result= yearDiff * 12;
      return result.toFixed(1)
  }
 
    return (
      <div className="child__cnt">
          <div className="child">
            <div className="child__index">{index + 1}</div>
            <div className="child__sex">
              <SexMarker sex={child.sex} />
            </div>
            <div className="child__name">
              {child.childName} {child.childSurname}
            </div>
            <div className="child__age">{getAge(child.childBirthday)}</div>
            <div className="child__proj">
              {<RenderProjects childId={child.id} />}
            </div>
            {/* <Link to={`${child.id}/project`}> */}
              {/* <button className="child__add">Dodaj</button> */}
            {/* </Link> */}
            <div className="child__status">
              nowy
              {/* {child.status === "nowy"? child.status : null} */}
            </div>
            <Link to={child.id}>
              <span className="child__details" onMouseEnter={()=>handleHover(detHover)} onMouseLeave={()=>handleHover(detHover)}/>
            </Link>
          </div>
      </div>
    );
}