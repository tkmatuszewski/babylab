import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button'

const AddChildPart =({step, child, setData, input})=> {

    const [childName, setChildName] = useState(child.childName);
    const [childSurname, setChildSurname] = useState(child.childSurname);
    const [pregnancyDur, setPregnancyDur] = useState(child.pregnancyDur);
    const [childBirthday, setChildBirthday] = useState(child.childBirthday);
    const [childLang, setChildLang] = useState(child.childLang);
    const [childComment, setChildComment] = useState(child.childComment);

    const childData = {
        childName,
        childSurname,
        childBirthday,
        pregnancyDur,
        childLang,
        childComment
    }

    const handleClick = () => {
      // e.preventDefault();
      // if(!hasNull(childData)){
        setData(childData)
        step(2);
      // }
    }

    function hasNull(target) {
      for (var member in target) {
        if (target[member] == null|| undefined || ""){
          return true
        }
      }
      return false;
    }

    return (
      <div className="label__cnt">
        <div className="form__row">
          <label>
            Imię
            <input
              type="text"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              placeholder="Jan"
              // required="true"
            />
          </label>
          <label>
            Nazwisko
            <input
              type="text"
              value={childSurname}
              onChange={(e) => setChildSurname(e.target.value)}
              placeholder="Nowak"
              // required="true"
            />
          </label>
        </div>
        <div className="form__row">
          <label>
            Tydzień urodzenia
            <input
              type="number"
              value={pregnancyDur}
              onChange={(e) => setPregnancyDur(e.target.value)}
              placeholder="38"
              // required="true"
            />
          </label>
          <label>
            Data urodzenia
            <input
              type="date"
              value={childBirthday}
              onChange={(e) => setChildBirthday(e.target.value)}
              placeholder="dd.mm.rrrr"
              // required="true"
            />
          </label>
        </div>
        <div className="form__row">
          <label>
            Znane języki
            <input
              type="text"
              value={childLang}
              onChange={(e) => setChildLang(e.target.value)}
              placeholder="polski, angielski"
              // required="true"
            />
          </label>
          <label>
            Komentarz
            <input
              type="text"
              value={childComment}
              onChange={(e) => setChildComment(e.target.value)}
            />
          </label>
        </div>
        <div className="form__btns">
          <Link to="/">
            <Button name="Anuluj" type="secondary" />
          </Link>
          <Button
            name="Dalej"
            type="secondary"
            // role="submit"
            onClick={handleClick}
          />
        </div>
      </div>
    );
}

export default AddChildPart