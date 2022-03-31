import React from 'react';
import Button from '../Button/Button';
import { collection, addDoc } from "@firebase/firestore";
import { db } from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import { home } from '../../constants/routes';

const AddSummary =({step, child, parent})=> {

  const navigate = useNavigate();

  const newChild = {...child, onWatchlist: false, ...parent}

    const handleSubmit = () => {

         const docRef = addDoc(collection(db, "children"), newChild);

         return navigate(home);

    }

    return (
      <div className="addSummary">
        <div className="addSummary__row">
          <h4>Dziecko</h4>
          <ul>
            <li>
              <span>Imię i nazwisko</span>{child.childName} {child.childSurname}
            </li>
            <li>
              <span>Data urodzenia</span>{child.childBirthday}({child.pregnancyDur})
            </li>
            <li>
              <span>Znane języki</span>{child.childLang}
            </li>
            <li>
              <span>Komentarz</span>{child.childComment}
            </li>
          </ul>
          </div>
          <div className="addSummary__row">
            <h4>Opiekun</h4>
            <ul>
              <li>
                <span>Imię i nazwisko</span>{parent.parentName} {parent.parentSurname}
              </li>
              <li>
                <span>Miejsce urodzenia</span>{parent.parentHometown}
              </li>
              <li>
                <span>Miejsce zamieszkania</span>{parent.parentResidence}
              </li>
              <li>
                <span>Email</span>{parent.email}
              </li>
              <li>
                <span>Telefon</span>{parent.phone}
              </li>
              <li>
                <span>Komentarz</span>{parent.parentComment}
              </li>
            </ul>
          </div>
        <div className="form__btns">
          <Button name={"Wróć"} type="secondary" onClick={() => step(2)} />
          <Button
            name={"Zatwierdź"}
            type="secondary"
            onClick={handleSubmit}
          />
        </div>
      </div>
    );
}

export default AddSummary;
