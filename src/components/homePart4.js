import React, { Component } from 'react';
import part4 from '../static/css/homePart4.css';
import style from '../static/css/homePart3.css';

export default class HomePart4 extends Component {
    render() {
        return (
            <div className = {style.container} style = {{ backgroundColor:'#fff' }}>
                <div className = {style.header}>
                    <span>logo </span>
                    短 期 险 推 荐
                    <a className = {style.more}>
                       更 多 > >
                    </a>
                </div>
                <div>
                    <div className = { part4.item }>item1</div>
                    <div className = { part4.item  }>item2</div>
                    <div className = { part4.item  }>item3</div>
                    <div style = {{clear:'both'}}> </div>
                </div>
            </div>
        )
    }
};
