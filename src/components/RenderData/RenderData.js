import React from 'react'
import { AutoSizer, List} from "react-virtualized";
import Child from '../Child/Child';
import NoMatches from '../NoMatches/NoMatches';

export const RenderData =({data})=> {

  const rowRenderer = ({index, key, style}) => {
    return (
      <div key={key} className="child__main" style={style}>
        <Child index={index} child={data[index]}/>
      </div>
    )
  }

  return (
    <div className= "renderData__list">
      {data.length === 0 ? <NoMatches/>:
      <AutoSizer>
      {({width, height}) => ( 
          <List
            height={height}
            overscanRowCount={10}
            rowHeight={50}
            rowCount={data.length}
            width={width}
            rowRenderer={rowRenderer}
            />
        )}
      </AutoSizer>
}
    </div>
  )
}

export default RenderData;