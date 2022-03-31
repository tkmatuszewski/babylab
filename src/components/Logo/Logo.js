import React from "react";

const Logo = ({sizeVh, fontSize}) => {
    const style = {
            width: sizeVh + 'vh',
            height : sizeVh  + 'vh',
            fontSize : fontSize + 'vh'
        }

    return (
    <div className="logo" style={style}>bl</div>
    )
}

export default Logo;