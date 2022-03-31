import React, {useState} from 'react'
import Button from '../Button/Button';

export default function AddParentPart({step, parent, setData}) {

    const [parentName, setParentName] = useState(parent.parentName);
    const [parentSurname, setParentSurname] = useState(parent.parentSurname);
    const [phone, setPhone] = useState(parent.phone);
    const [email, setEmail] = useState(parent.email);
    const [parentHometown, setParentHometown] = useState(parent.parentHometown);
    const [parentResidence, setParentResidence] = useState(
      parent.parentResidence
    );
    const [parentComment, setParentComment] = useState(parent.parentComment);

    const parentData = {
        parentName,
        parentSurname,
        phone,
        email,
        parentHometown,
        parentResidence,
        parentComment
    }

    const handleClick = () => {
        step(3)
        setData(parentData)
    }

    return (
      <div className="label__cnt">
        <div className="form__row">
          <label>
            Imię
            <input
              type="text"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              placeholder="Anna"
            />
          </label>
          <label>
            Nazwisko
            <input
              type="text"
              value={parentSurname}
              onChange={(e) => setParentSurname(e.target.value)}
              placeholder="Nowak"
            />
          </label>
        </div>
        <div className="form__row">
          <label>
            Miejsce urodznia
            <input
              type="text"
              value={parentHometown}
              onChange={(e) => setParentHometown(e.target.value)}
              placeholder="Warszawa"
            />
          </label>
          <label>
            Miejsce zamieszkania
            <input
              type="text"
              value={parentResidence}
              onChange={(e) => setParentResidence(e.target.value)}
              placeholder="Kraków"
            />
          </label>
        </div>
        <div className="form__row">
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="annanowak@gmail.com"
            />
          </label>
          <label>
            Telefon
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="607209122"
            />
          </label>
        </div>
        <label>
          Komentarz
          <input
            type="text"
            value={parentComment}
            onChange={(e) => setParentComment(e.target.value)}
          />
        </label>
        <div className="form__btns">
          <Button name="Wstecz" type="secondary" onClick={() => step(1)} />
          <Button name="Dalej" type="secondary" onClick={handleClick} />
        </div>
      </div>
    );
}
