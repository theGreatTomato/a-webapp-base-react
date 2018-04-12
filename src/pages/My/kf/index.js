import React, { Component } from 'react';
import Item from '../../../components/myPart2'
import {  WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';
import Header from '../../../components/header' 
import path from '../../../static/routeUrl';

export default class KF extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [{
                icon:'http://39.108.135.222/yijia/build/images/icon.png',
                info:'在线咨询',
                linkTo:path+'my/kf/zxzx'
            },
            {
                icon:'http://39.108.135.222/yijia/build/images/icon.png',
                info:'常见问题',
                linkTo:path+'my/kf/cjwt'
            },]
        }
    }
    render() {
        return (
            <div>
                <Header  title = '客服' linkTo = {`${path}my/`}/>
                {this.state.data.map((item, i) =>  
                    <div key = {i}>
                        <WhiteSpace size="md" style = {{backgroundColor:'#F1F1F1'}} />
                        <Link  to = { item.linkTo } style = {{ textDecoration:'none',color:'black' }}>
                            <Item data = { item } />
                        </Link>
                    </div>)}
            </div>
        )
    }
};
