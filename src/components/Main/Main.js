import React from "react";
import Header from "../Header/Header";
import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";

const Main = ({ children }) => {

    return (
      <section className="main">
        {children}
        <Header>
          <Logo height={6} width={6} lineHeight= {6} fontSize= {3}/>
          <Navigation/>
        </Header>
        <Search/>
      </section>
    );
};

export default Main;