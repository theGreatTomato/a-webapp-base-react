import React, { Component } from 'react';
import style from '../static/css/homePart3.css';

export default class HomePart3 extends Component {
    render() {
        return (
            <div className = {style.container} style = {{ backgroundColor:'#fff' }}>
                <div className = {style.header}>
                    <span>logo </span>
                     赠 险 推 荐
                    <a href = "#s" className = {style.more}>
                       更 多 > >
                    </a>
                </div>
                <div>
                    <div className = { style.medicine }>item1</div>
                    <div style = {{ float:'left'}}>
                        <div className = { style.accident }>item2</div>
                        <div className = { style.elder }>item3</div>
                    </div>
                    <div style = {{clear:'both'}}> </div>
                </div>
            </div>
        )
    }
};
