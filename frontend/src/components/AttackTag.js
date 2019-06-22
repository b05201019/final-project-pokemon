import React from 'react';

export default ({attack}) => {
    return (
        <div className = 'AttackTag'>
            <div className = 'Arrow' style = {{visibility: attack.arrow}}>></div>
            <div className = 'AttackName'>{attack.name}</div>
        </div>
    )
}