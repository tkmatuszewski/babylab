import React from "react";

const SearchFilter = ({name}) => {

    return (
      <option
        className={"searchFilterEl"}
        id={name}
        value={name}
      >
        {name}
      </option>
    );
}

export default SearchFilter;