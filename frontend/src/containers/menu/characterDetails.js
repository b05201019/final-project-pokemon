import React, { Component } from 'react'
import CharacterDetailsView from '../../components/characterDetailsView'

export default class characterDetails extends Component {
    render() {
        var isSelected = this.props.isSelected?{
            background:"blue",
            color: "white",
        }:{};
        return (
            <div style={{...this.props.style, ...isSelected}}>
                <p>個人檔案</p>
                {this.props.isSelected&&this.props.openDetail?<CharacterDetailsView />:null}
            </div>
        )
    }
}
