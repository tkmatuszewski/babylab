import React, {useState} from "react";
import Search from "./../../components/Search/Search";
import Modal from "./../../components/Modal/Modal";
import LoadData from "./../../components/LoadData/LoadData";
import Dashboard from "./../../components/Dashboard/Dashboard"
import Wrapper from "../Wrapper/Wrapper";
import RenderData from "../../components/RenderData/RenderData";
import { DataProvider } from "../../contexts/DataContext";

const Main = () => {

  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal =()=> {
    setOpenModal(true)
  }

    return (
      <Wrapper>
        <DataProvider>
        <LoadData />
        {/* <Dashboard>
          <Search />
          <RenderData /> */}
          {/* <button onClick ={()=>handleOpenModal()}>Open</button> */}
          {openModal && <Modal closeModal={() => setOpenModal(false)} />}
        {/* </Dashboard> */}
        </DataProvider>
      </Wrapper>
    );
};

export default Main;