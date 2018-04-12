import React, { Component } from 'react';
import style from '../static/css/tag.css';
import { Flex } from 'antd-mobile';
import imgSrc from '../static/icon/home.png';
import { Link } from 'react-router-dom';

export default class Tag extends Component {
    constructor() {
        super()
        this.state = {
            items:[/*改这里的url*/
                {
                    name:'首页',
                    url:imgSrc,
                    linkTo:'/yijia/build/'
                },
                {
                    name:'赠险',
                    url:imgSrc,
                    linkTo:'/yijia/build/gift'
                },
                {
                    name:'短期险',
                    url:imgSrc,
                    linkTo:'/yijia/build/short'
                },
                {
                    name:'我的',
                    url:imgSrc,
                    linkTo:'/yijia/build/my'
                }
            ]
        }
    }
    render() {
        return (
            <div className = {style.fixed} style = {{ backgroundColor:'#fff' }}>
                <Flex justify = 'center' align = 'center'>
                    {this.state.items.map(
                        (item, i) => <Flex.Item key = {i} >
                            <Link  to = {item.linkTo}  style = {{ textDecoration:'none',color:'black' }} ><Icon name = {item.name} imgSrc = {item.url}/></Link>
                            </Flex.Item>
                    )}
                </Flex>
            </div>
        )
    }
};
class Icon extends Component {
    render() {
        return (
            <div className = { style.iconContainer }>
                <div><img src = { this.props.imgSrc } alt = 'loading' className = { style.icon }/></div>
                <p>{ this.props.name }</p>
            </div>
        )
    }
}
