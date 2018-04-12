import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import style from '../static/css/button.css';


export default class myButton extends Component {
    render() {
        return (
            <div className = { style.container }>
                <Button className = { style.buttonStyle } activeClassName = { style.active }  onClick = {() => this.props.onSubmit() }> 
                    { this.props.text } 
                </Button>
            </div>
        )
    }
};
