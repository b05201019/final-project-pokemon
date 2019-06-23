import React from 'react'

export default ({roleInfo}) => {
    return (
        <div className = 'info-card'>
            <div className = 'char-info'>
                <span>{roleInfo.name}</span>
                <span>   Lv. {roleInfo.level}</span>
            </div>
            <input className = 'life-bar' type = 'range' min = '0' max = {roleInfo.totalBlood} step = '1' value = {roleInfo.currentBlood}></input>
            <div className = 'life-value'>{roleInfo.currentBlood>0?roleInfo.currentBlood:0}/{roleInfo.totalBlood}</div>
        </div>
    )
}