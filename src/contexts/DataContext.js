import React, { useState, createContext, useContext, useEffect } from "react";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({children})=> {

    const [data, setData] = useState(null)
    const [filteredData, setFilteredData] = useState(null)
    const [filterValue, setFilterValue] = useState(null)
    // const [selectedFilter, setSelectedFilter] = useState("")
    
    const updateData = (data) => {
        return setData(data);
    }

    const updateFilterValue =(filter)=> {
        return setFilterValue(filter)
    }

    let value={
        data,
        updateData,
        filteredData,
        filterValue,
        updateFilterValue,
        setFilteredData
    }
    
    return (
    <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
    )
}
