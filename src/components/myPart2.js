import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div style = {{
                padding:'0.3rem 0.25rem ',
                height:'0.35rem',
                overflow:'hidden',
                background:'#fff'
            }}>
                <div style = {{
                    float:'left',
                    backgroundImage:'url('+this.props.data.icon+')',
                    backgroundSize:'100% 100%',
                    height:'0.35rem',
                    width:'0.35rem',
                    marginRight:'0.25rem'
                }} />
                <span style = {{fontSize:'0.35rem',fontWeight:'500'}} >{ this.props.data.info }</span>
                <div style = {{
                    float:'right',
                    height:'0.35rem',
                    width:'0.35rem',
                    backgroundImage:'url(http://39.108.135.222/yijia/build/images/right.png)',
                    backgroundSize:'100% 100%'
                }}></div>
            </div>
        )
    }
}
