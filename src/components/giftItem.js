import React, { Component } from 'react';
import style from '../static/css/giftItem.css';
export default class componentName extends Component {
    render() {
        return (
            <div className = { style.container } >
                <div className = { style.divImg }>这是图片</div>
                <div className = { style.fontStyle }>
                    <div className = { style.header }>
                        { this.props.data.name }
                    </div>
                    <div className = { style.describe }>
                        { this.props.data.describe }
                    </div>
                </div>
            </div>
        )
    }
};
