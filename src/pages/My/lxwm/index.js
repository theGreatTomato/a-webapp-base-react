import React, { Component } from 'react';
import path from '../../../static/routeUrl';
import Header from '../../../components/header';

export default class Connect extends Component {
    render() {
        return (
            <div>
                <Header  title = '联系我们' linkTo = {`${path}my/`}/>
                <div style = {{ marginTop:'4rem',padding:'0.2rem',textAlign:'center'}}>
                    <h1 style = {{ color:'#2f96ff',fontSize:'0.55rem',fontWeight:'550',padding:'0.3rem'}}>
                        ——<span style = {{ letterSpacing:'0.05rem' }}> 第一时间接听您的电话 </span>——
                    </h1>
                    <p style = {{ color:'#656565',letterSpacing:'0.05rem',fontSize:'0.4rem'  }}>11122223335</p>
                </div>
            </div>
        )
        
    }
};
