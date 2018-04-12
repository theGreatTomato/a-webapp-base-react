import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import style from '../static/css/giftSelect.css';
export default class componentName extends Component {
    constructor() {
        super() 
        this.state = {
            selected:'all',
            itemList : [
                ['全部','all'],
                ['成人','adult'],
                ['小孩','kid'],
                ['老人','elder'],
                ['家庭','family']
            ]
        }
    }
    onHandleClick(value) {
        this.setState({ selected :value })
        this.props.change(value)
    }
    render() {
        return (
            <div>
                <Flex>
                    {this.state.itemList.map((item, i) => 
                        <Flex.Item key = {i} style = {{margin: '0',}}>
                            <Item select = {this.state.selected} attr = {item} handleClick = { this.onHandleClick.bind(this) } />
                        </Flex.Item>)}
                </Flex>            
            </div>
        )
    }
}

class Item extends Component {
    render() {
        const classStyle = this.props.select === this.props.attr[1] ?  style.selected+' '+style.item : style.item
        return (
            <div className = { classStyle } onClick = {() => this.props.handleClick(this.props.attr[1])}>
                {this.props.attr[0]}
            </div>
        )
    }
}