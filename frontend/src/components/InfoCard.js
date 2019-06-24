import React from 'react'

export default ({roleInfo}) => {
    var lifeBarTotalStyle = {
        width: '100px',
        height: '5px',
        borderRadius: '2px',
        background: 'white',
        position: 'relative',
        top: '0px',
        left: '0px',
    }

    var lifeBarCurrentStyle = {
        width: 100*(roleInfo.currentBlood/roleInfo.totalBlood < 0?0:roleInfo.currentBlood/roleInfo.totalBlood).toString()+'%',
        height: '100%',
        background: 'green',
        transition: '0.3s',
    }

    return (
        <div className = 'info-card'>
            <div className = 'char-info'>
                <span>{roleInfo.name}</span>
                <span>   Lv. {roleInfo.level}</span>
            </div>
            <div className = 'life-bar-total' style = {lifeBarTotalStyle}>
                <div className = 'life-bar-current' style = {lifeBarCurrentStyle}></div>
            </div>
            <div className = 'life-value'>{roleInfo.currentBlood>0?roleInfo.currentBlood:0}/{roleInfo.totalBlood}</div>
        </div>
    )
}