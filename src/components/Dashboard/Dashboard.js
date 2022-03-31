import React from 'react';

export default function Dashboard({children}) {
    return (
    <div className="dashboard">
        <div className="dashboard__cnt">
            {children}
        </div>
    </div>
    )
}
