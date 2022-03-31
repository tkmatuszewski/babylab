import React, {useState} from "react";
import SearchFilter from "../SearchFilter/SearchFilter";
// import { useData } from "../../contexts/DataContext";
import RenderData from "../RenderData/RenderData";
import Filter from "../Filter/Filter";

const Search = ({data}) => {

  const [query, setQuery]=useState("");
  const [filteredResults, setFilteredResults] = useState(data);

  const handleChange = (input) => {
    setQuery(input)
    return filterResults(input)
  }

  const filterResults=(input)=> {

    const filterNameOrSurname = (el) => {

      let name = el.childName.toUpperCase()
      let surname = el.childSurname.toUpperCase()
      return (
        name.includes(input.toUpperCase()) ||
        surname.includes(input.toUpperCase()) || 
        input == ""
      );
    };

    return setFilteredResults(data.filter(filterNameOrSurname))
  }

  return (
    <>
      <div className="search">
          <input
            value={query}
            placeholder="szukaj"
            type="search"
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
          <Filter setFilteredResults={setFilteredResults}/>
      </div>
      <RenderData data={filteredResults} />
    </>
  );
}

export default Search