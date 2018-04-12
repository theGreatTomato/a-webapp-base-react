import React, { Component } from 'react';
import Header from '../../../components/header';
import path from '../../../static/routeUrl';

export default class Cjwt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[
                {
                    'title':'文案',
                    'first':'1.文案xxxxxxxxxxx',
                    'second':'2.文案xxxxxxxxxxx',
                    'third':'3.文案xxxxxxxxxxx',
                },
                {
                    'title':'文案',
                    'first':'1.文案xxxxxxxxxxx',
                    'second':'2.文案xxxxxxxxxxx',
                    'third':'3.文案xxxxxxxxxxx',
                },
                {
                    'title':'文案',
                    'first':'1.文案xxxxxxxxxxx',
                    'second':'2.文案xxxxxxxxxxx',
                    'third':'3.文案xxxxxxxxxxx',
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <Header title = '常见问题' linkTo = {`${path}my/kf`} />
                { this.state.data.map((item, i) => <Item key = {i} data = { item }/>)}
            </div>
        )
    }
};

const Item  = function ({ data }) {
    return (
        <div style = {{ marginTop:'0.25rem',background:'#fff',padding:'0.35rem 0.25rem '}}>
            <h1 style = {{ fontSize:'0.45rem',paddingBottom:'0.2rem' }}>{ data.title }</h1>
            <p style = {{ fontSize:'0.35rem',padding:'0.15rem 0'}}>{ data.first }</p>
            <p style = {{ fontSize:'0.35rem',padding:'0.15rem 0'}}>{ data.second}</p>
            <p style = {{ fontSize:'0.35rem',padding:'0.15rem 0'}}>{ data.third }</p>
        </div>
    )
}