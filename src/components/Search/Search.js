import React, {useState} from "react";
import SearchFilter from "../SearchFilter/SearchFilter";

const Search = () => {

  return (
        <div className="search">
            <div className="searchCnt">
              <input placeholder="szukaj"/>
              <ul className="searchFilterList">
                <SearchFilter name={"Nazwisko"}/>
                <SearchFilter name={"Imię"}/>
                <SearchFilter name={"Wiek"}>
                  {/* <ul className="searchFilterSub" >
                    <li>rosnąco</li>
                    <li>malejąco</li>
                  </ul> */}
                </SearchFilter>
                <SearchFilter name={"Projekt"}/>
              </ul>
            </div>
          </div>
  )
}

export default Search