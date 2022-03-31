import React from 'react'
import Button from '../Button/Button';

export const Modal = ({ name, children, closeModal, action }) => {
  return (
    <div className="modalDim" onClick={() => closeModal()}>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modalTop">
          <button className="modalClose" onClick={() => closeModal()} />
        </div>
        <div className="modalCnt">
          {/* <h1 className="modalTitle">{name}</h1> */}
          <div className="modalContent">{children}</div>
          <div className="modalBtns">
            {/* <button onClick={()=>closeModal()}>Zamnknij</button> */}
            {/* <Button
              name={"Anuluj"}
              type={"secondary"}
              onClick={closeModal}
            />
            <Button name={"Zatwierdź"} type={"secondary"} /> */}
            <button onClick={()=>closeModal()}>Anuluj</button>
            <button>Zatwierdź</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal