import React, { Component } from 'react'
import {  WhiteSpace } from 'antd-mobile';
import Tag from '../../components/tag';
import Header from '../../components/header' 
import Login from '../../components/login'
import Item from '../../components/myPart2'
import { Link } from 'react-router-dom';
import path from '../../static/routeUrl';

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            data : [{
                icon:'http://39.108.135.222/yijia/build/images/icon.png',
                info:'个人资料',
                linkTo:path+'my/grzl'
            },
            {
                icon:'http://39.108.135.222/yijia/build/images/icon.png',
                info:'联系人资料',
                linkTo:'#'
            },
            {
                icon:'http://39.108.135.222/yijia/build/images/icon.png',
                info:'订单查询',
                linkTo:path+'my/ddcx'
            },
            {
                icon:'http://39.108.135.222/yijia/build/images/icon.png',
                info:'保单到期提醒',
                linkTo:path+'my/bddqts'
            },
            {
                icon:'http://39.108.135.222/yijia/build/images/icon.png',
                info:'客服',
                linkTo:path+'my/kf'
            },
            {
                icon:'http://39.108.135.222/yijia/build/images/icon.png',
                info:'联系我们',
                linkTo:path+'my/lxwm'
            }]
        }
    }
    render() {
        return (
            <div style = {{ background :'#F1F1F1',height:'100%'}}>
                <Header title = '我的' />
                <Link  to ='/yijia/build/my/login' style = {{ textDecoration:'none',color:'black' }}>
                    <Login />
                </Link>
                {this.state.data.map((item, i) =>  
                    <div key = {i}>
                        <WhiteSpace size="md" style = {{backgroundColor:'#F1F1F1'}} />
                        <Link  to = { item.linkTo } style = {{ textDecoration:'none',color:'black' }}>
                            <Item data = { item } />
                        </Link>
                    </div>)}
                    <WhiteSpace size="md" style = {{backgroundColor:'#F1F1F1'}} />                    
                <Tag />
            </div>
        )
    }
}
