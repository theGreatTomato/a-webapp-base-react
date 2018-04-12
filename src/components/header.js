/*import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div style = {{ display: 'relative',
                            height:'1rem',
                            textAlign:'center',
                            lineHeight:'1.0rem',
                            borderBottom:"0.03rem solid #DFDFDF",
                            fontSize:'0.5rem',
                            color:'#60affe',
                            fontWeight:'540',
                            background:'white' }}>
                <div style = {{    position: 'absolute',
                                    left:'0.25rem',
                                    top:'0.25rem',
                                    backgroundImage:'url(http://39.108.135.222/yijia/build/images/left.png)',
                                    backgroundSize:'100% 100%',
                                    height:'0.5rem',
                                    width:'0.5rem' }}></div>
                                    {this.props.title}
            </div>
        )
    }
}*/
import { NavBar, Icon } from 'antd-mobile';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import path from '../static/routeUrl';

export default class Header extends Component {
    render() {
        return (
            <div style = {{ borderBottom:'0.03rem solid #DFDFDF' }}>
                <NavBar
                mode="light"
                icon={<Link to = { this.props.linkTo ? this.props.linkTo:path }><Icon type="left" color = '#2e99fe' /></Link>}
                onLeftClick={() => console.log('onLeftClick')}
                ><span style = {{ color:'#2e99fe' }}>{ this.props.title }</span></NavBar>
            </div>
        )
    }
}

