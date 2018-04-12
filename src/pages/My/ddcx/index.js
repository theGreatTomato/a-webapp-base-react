import React, { Component } from 'react';
import Header from '../../../components/header';
import Dingdan from '../../../components/dingdan';
import path from '../../../static/routeUrl';

export default class componentName extends Component {
    constructor() {
        super() 
        this.state = {
            data:[
                    { 
                        number:1231541848416,
                        payStatus:true,
                        name:'旅游意外险',
                        pay:"127.00元起",
                        describe:'专为自驾旅游设计',
                        reward:'最高保额600万'
                    },{ 
                        number:1231541848416,
                        payStatus:false,
                        name:'旅游意外险',
                        pay:"127.00元起",
                        describe:'专为自驾旅游设计',
                        reward:'最高保额600万'
                    }
                ]
        }
    }
    render() {
        return (
            <div>
                <Header  title = '订单查询' linkTo = {`${path}my/`} />
                { this.state.data.map((item, i) => <Dingdan data = { item } key = {i}/>)}
            </div>
        )
    }
};
