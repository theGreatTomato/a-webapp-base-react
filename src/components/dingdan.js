import React, { Component } from 'react';
import style from '../static/css/dingdan.css'

export default class componentName extends Component {
    render() {
        const statusBg = this.props.data.payStatus ?'#057df6' :'#fa6b00'
        return (
            <div className = { style.container }>
                <header className = { style.header } >
                    订单号：{ this.props.data.number }
                    <div className = { style.payStatus } style = {{ backgroundColor:statusBg }} >
                        { this.props.data.payStatus ? '交易完成':'未付款'}
                    </div>
                </header>
                <div className = { style.content }>
                    <h1 className = { style.h1 }>
                        <span style = {{ color:'#2f96ff' }}>{ this.props.data.name }</span>
                        <div style = {{ float:'right',color:'#9a9a9a',letterSpacing:'0rem' }}>{ this.props.data.pay }</div>
                    </h1>
                    <div className = { style.describe }>
                        { this.props.data.describe }
                        <div style = {{ float:'right'}}> { this.props.data.reward }</div>
                    </div>
                </div>
            </div>
        )
    }
};
