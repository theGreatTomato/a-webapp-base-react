import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div style = {{
                padding:'0.5rem 0.25rem ',
                height:'1.5rem',
                overflow:'hidden',
                background:'#fff'
            }}>
                <div style = {{
                    float:'left',
                    background:'#cccccc',
                    height:'1.5rem',
                    width:'1.5rem',
                    marginRight:'0.25rem',
                    borderRadius:'0.75rem'
                }} />
                <span style = {{ lineHeight:'1.5rem',fontSize:'0.45rem',fontWeight:'500'}} >登录 / 注册</span>
                <div style = {{
                    float:'right',
                    marginTop:'0.5rem',
                    height:'0.5rem',
                    width:'0.5rem',
                    backgroundImage:'url(http://39.108.135.222/yijia/build/images/right.png)',
                    backgroundSize:'100% 100%'
                }}></div>
            </div>
        )
    }
};
