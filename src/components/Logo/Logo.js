import React from "react";

const Logo = ({height, width, lineHeight, fontSize}) => {
    const style = {
            width: width + 'vh',
            height : height  + 'vh',
            lineHeight : lineHeight  + 'vh',
            fontSize : fontSize  + 'vh'
        }

    return (
    <div className="logo" style={style}>bl</div>
    )
}

export default Logo;