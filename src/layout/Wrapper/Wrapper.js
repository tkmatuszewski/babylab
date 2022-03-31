import React from "react";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import Social from "../../components/Social/Social";

const Wrapper=({children})=> {
    return (
      <>
        <Header>
          <Logo sizeVh={5} fontSize={2.5} />
          <div className="header__right">
            <Social />
            <span className="logout">Wyloguj</span>
          </div>
        </Header>
        <section className="main">
          <Aside>
            <Navigation />
          </Aside>
          {children}
        </section>
      </>
    );
}

export default Wrapper;