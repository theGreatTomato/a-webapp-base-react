import React, { Component } from 'react'
import Tag from '../../components/tag';
import {  WhiteSpace } from 'antd-mobile';
import data from '../../static/Data';
import GiftItemList from '../../components/giftItemList';
import Header from '../../components/header' 
import ShortPart3 from '../../components/shortPart3' 

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            layoutDate:[]
        }
    }
    componentDidMount() {
        this.setState({ layoutDate: data.slice(0,3) })
    }
    render() {
        return (
            <div>
                <Header title = '短期险'/>
                <GiftItemList data = { this.state.layoutDate }/>
                <WhiteSpace size="md" style = {{backgroundColor:'#fff'}} />
                <WhiteSpace size="md" style = {{backgroundColor:'#F1F1F1'}} />
                <ShortPart3 />
                <WhiteSpace size="md" style = {{backgroundColor:'#fff'}} />
				<div style = {{ height: '1.5rem' , backgroundColor:'#f1f1f1' }}></div>
				<Tag />
            </div>
        )
    }
}

