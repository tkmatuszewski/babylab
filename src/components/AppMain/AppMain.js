import React, { useContext } from "react";
import { MainBgContext } from "../MainBgContext/MainBgContext";
import { withRouter } from "react-router-dom";
import DatabaseHeader from "../DatabaseHeader/DatabaseHeader";
import { getCurrentUserName } from "../Firebase/FirebaseAuth";
import { signIn } from "../../routes";
import DatabaseData from "../DatabaseData/DatabaseData";
import {
  MainBgTheme,
  MainBgThemeProvider,
} from "../MainBgContext/MainBgContext";


const [bgTheme, setBgTheme] = useContext(MainBgTheme);

const AppMain= ({ history }) => {
  const bgTheme = {dim: false, setDim : ()=> {}};

  if (!getCurrentUserName()) {
    history.replace(signIn);
    return null;
  } else {

    return (
      <section className="appMain">
        {/* <DatabaseHeader /> */}
        <MainBgTheme.Provider value={bgTheme}>
          <DatabaseData />
        </MainBgTheme.Provider>
      </section>
    );
  }
};
export default withRouter(AppMain);