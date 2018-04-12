import React, { Component } from 'react';
import Header from '../../../components/header';
import { Flex } from 'antd-mobile';
import style from '../../../static/css/dingdan.css'
import path from '../../../static/routeUrl';

export default class Tips extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [
                {
                    number:1225669645466,
                    name:'旅游意外险',
                    describe:'专为自驾游设计',
                    pay:'170.00元起',
                    reward:'最高保额600万',
                    deadDate:28
                },
                {
                    number:1225669645466,
                    name:'旅游意外险',
                    describe:'专为自驾游设计',
                    pay:'170.00元起',
                    reward:'最高保额600万',
                    deadDate:0
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Header title = '保单到期提示' linkTo = {`${path}my/`} />
                { this.state.data.map( (item, i) => <Item data = {item } key = { i } />)}
            </div>
        )
    }
};

class Item extends Component{
    render() {
        const data = this.props.data;
        return (
            <div className = { style.container }>
                <header className = { style.header } >
                    订单号：{ this.props.data.number }
                </header>
                <Flex className = { style.flex }>
                    <Flex.Item>
                        <h1 className = { style.h1 }>
                            <span style = {{ color:'#2f96ff',fontSize:'0.45rem' }}>{ data.name }</span>
                        </h1>
                        <p className = { style.describe }>{ data.describe }</p>
                    </Flex.Item>
                    <Flex.Item>
                        <h1 className = { style.h1 }>
                            <span style = {{ fontSize:'0.45rem',  color:'#9a9a9a',letterSpacing: '0rem' }}>{ data.pay }</span>
                        </h1>
                        <p className = { style.describe }>{ data.reward }</p>
                    </Flex.Item>
                    <Flex.Item>
                        <h1 className = { style.h1 }>   
                            <div className = {data.deadDate === 0 ? style.blue:style.oringe }>
                            { data.deadDate === 0 ?'到期':data.deadDate +'天' }</div>
                        </h1>
                    </Flex.Item>
                </Flex>
            </div>
        )
    }

}