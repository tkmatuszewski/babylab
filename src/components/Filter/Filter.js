import React, {useState} from 'react'

export default function Filter({ setFilteredResults }) {
  const [filterClicked, setFilterClicked] = useState(false);

  const handleClick = () => {
    setFilterClicked(!filterClicked);
  };

  function getAge(dateString) {
    var today = new Date();
    var birth = new Date(dateString);      
    var timeDiff = today.getTime() - birth.getTime();
    var yearDiff = timeDiff / (24 * 60 * 60 * 1000) / 365.25;
    const result = yearDiff * 12;
    
    return result.toFixed(1);
    }

  const onChange = () => {


  };

  return (
    <div className="filter__main">
      <div className="filter__box">
        <button id="filter__btn" onClick={handleClick}>
          Filtry
        </button>
        {filterClicked && (
          <div className="filters__content">
            <div className="filters__row">
              <label>
                Wiek
                <input type="range" min="0" max="30" />
              </label>
            </div>
            <div className="filters__row">
              <label>
                Projekt
                <select className="filters__select">
                  <option>Bobasy</option>
                  <option>EEG</option>
                </select>
              </label>
            </div>
            <div className="filters__row">
              <label>
                Status
                <select className="filters__select">
                  <option className="filters__option">Nowy</option>
                  <option className="filters__option">W bazie</option>
                </select>
              </label>
            </div>
            <div className="filters__row">
              <label>
                Płeć
                <select className="filters__select">
                  <option className="filters__option">Dziewczyna</option>
                  <option className="filters__option">Chłopak</option>
                </select>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

      // <div>
      //   <button className="filter__btn" onClick={()=>handleClick()}>Filtry</button>
      //   {filterClicked && <div className='filter__cnt'>
      //       <h1>display</h1>
      //   </div>
      //   }
      // </div>
    // );
// }
