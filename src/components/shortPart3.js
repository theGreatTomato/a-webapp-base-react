import React, { Component } from 'react';
import style from '../static/css/shortPart3.css';
import { Flex } from 'antd-mobile';

export default class ShortPart4 extends Component {
    constructor() {
        super()
        this.state = {
            data : [{
                iconUrl:'http://39.108.135.222/yijia/build/images/icon.png',
                title:'太平洋保险',
                describe:'中国太平洋保险是国内领先的综合'
            },{
                iconUrl:'http://39.108.135.222/yijia/build/images/icon.png',
                title:'太平洋保险',
                describe:'中国太平洋保险是国内领先的综合'
            },{
                iconUrl:'http://39.108.135.222/yijia/build/images/icon.png',
                title:'太平洋保险',
                describe:'中国太平洋保险是国内领先的综合'
            },{
                iconUrl:'http://39.108.135.222/yijia/build/images/icon.png',
                title:'中国人寿保险',
                describe:'中国太平洋保险是国内领先的综合中国太平洋保险是国内领先的综合'
            }]
        }
    }
    render() {
        return (
            <div className = {style.container} style = {{ backgroundColor:'#fff' }}>
                <div className = {style.header}>
                    集市出 "品" 为您万里挑一 
                </div>
                <Flex align = 'start' style = {{padding: '0.15rem'} }>
                    {this.state.data.map((item, i) => 
                        <Flex.Item key = {i}  >
                            <Item itemData = {item} />
                        </Flex.Item>
                    )}
                </Flex>
            </div>
        )
    }
}
class Item extends Component{
    render() {
        return (
            <div className = { style.itemContainer }>
                <img className = { style.imgStyle } alt = 'loading...' src = { this.props.itemData.iconUrl } />
                <div className = { style.div }>{ this.props.itemData.title }</div>
                <p  className = { style.p }>{ this.props.itemData.describe }</p>
            </div>
        )
    }
 }

