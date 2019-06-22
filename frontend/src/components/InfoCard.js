import React from 'react'

export default ({Blood}) => {
    return (
        <div className = 'info-card'>
            <div className = 'char-info'>
                <span>Name</span>
                <span>Lv.56</span>
            </div>
            <input className = 'life-bar' type = 'range' min = '0' max = {Blood.total} step = '1' value = {Blood.current}></input>
            <div className = 'life-value'>{Blood.current>0?Blood.current:0}/{Blood.total}</div>
        </div>
    )
}