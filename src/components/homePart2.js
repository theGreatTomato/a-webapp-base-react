import React, { Component } from 'react';
import style from '../static/css/homePart2.css'

export default class HomePart2 extends Component {
    render() {
        return (
        <div style = {{ padding:'0.35rem 0.25rem',backgroundColor:'#fff' }}>
            <div className = { style.container }>
                <div className = { style.helpyou }>
                    帮 你 选 > > 
                </div>
                <div className = { style.need }>一分钟了解您的需求</div>
            </div>
        </div>
    )
  } 
};
