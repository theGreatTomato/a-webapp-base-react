import React, { Component } from 'react'
import GiftItem from './giftItem';
import {  WhiteSpace } from 'antd-mobile';

export default class componentName extends Component {
    constructor() {
        super() 
        this.state = {
            check:'all',
        }
    }
    render() {
        return (
            <div style = {{ backgroundColor:'#fff' }}>
                {this.props.data.map((item, i) => 
                <div key = {i}>
                    <WhiteSpace size="md" style = {{backgroundColor:'#fff'}} />
                    <GiftItem  data = {item}/>
                </div>
                )}
            </div>
        )
    }
}

