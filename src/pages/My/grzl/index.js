import React, { Component } from 'react';
import Header from '../../../components/header';
import Button from '../../../components/button';
import { InputItem, List, Radio,DatePicker } from 'antd-mobile';
import path from '../../../static/routeUrl';

export default class GRZL extends Component {
    constructor() {
        super()
        this.state = {
            username:'',
            sex:'male',
            idNumber:'',
            telephone:'',
            date:'',
            error:'',
            hidden:false
        }
    }
    handleSubmit() {
        let error = ''
        for( var  x in this.state ) {
            if( !this.state[x] && x !== 'error'  ) {
                error = x
            } 
        }
        switch (error){
            case 'username':
                error = '请输入您的姓名'
                this.setState({ error })
                break;
            case 'telephone':
                error = '请输入您的手机号码'
                this.setState({ error })
                break;
            case 'idNumber':
                error = '请输入您的身份证号'
                this.setState({ error })
                break;
            case 'date':
                error = '请输入您的出生日期'
                this.setState({ error })
                break;
            default:
                this.setState({ error })
                break;
        }
    }
    handleChange() {
        console.log(window.document.body.clientHeight )
        console.log(window.screen.height )
        window.screen.height === window.document.body.clientHeight ? this.setState({ hidden:false }) : this.setState({ hidden:true })
    }
    render() {
        //<lable>  <input type = 'text' placeholder = '情书如生命' />
        return (
            <div>
                <Header  title = '个人资料' linkTo = {`${path}my/`}/>
                <p style = {{ margin:'0.25rem', }}>*完善资料通过率更高</p>
                <Container>
                <InputItem   
                    placeholder="请输入您的姓名"
                    onChange = { username => {this.setState({ username });this.handleChange.call(this)}}
                >姓名*</InputItem>
                </Container>

                <Container>
                    <List >
                        <Radio.RadioItem checked = {this.state.sex === 'male'} onChange = {() => this.setState({ sex:'male'})}>
                            男
                        </Radio.RadioItem>
                        <Radio.RadioItem checked = {this.state.sex === 'famale'} onChange = {() => this.setState({ sex:'famale'})} >
                            女
                        </Radio.RadioItem>
                    </List>
                </Container>
                
                <Container>
                <InputItem   
                    placeholder="请输入您的身份证号"
                    clear 
                    onChange = { idNumber => {this.setState({ idNumber });this.handleChange.call(this) }    }
                >身份证号*</InputItem>
                </Container>

                <Container>
                <InputItem
                    type="phone"
                    onChange = { telephone => {this.setState({ telephone });this.handleChange.call(this)}}
                    placeholder="请输入您的手机号码"
                >手机号码*</InputItem>
                </Container>

                <Container>
                <DatePicker
                    mode="date"
                    value={this.state.date}
                    minDate = {new Date(1900,1,1)}
                    maxDate = {new Date()}
                    onChange={date => {this.setState({ date });this.handleChange.call(this)}}
                    style = {{
                        color:'#333'
                    }}
                    >
                    <List.Item arrow="horizontal">出生日期</List.Item>
                </DatePicker>
                </Container>
                <p style = {{ margin:'0.25rem', color:'red',fontSize:'0.3rem' }}>{ this.state.error }</p>
                {this.state.hidden ? '':<Button text = '保存资料' onSubmit = { this.handleSubmit.bind(this) } />}
            </div>
        )
    }
};

class Container extends Component{
    render() {
        return (<div style = {{
            margin:'0.25rem',
            border:'0.02rem solid #DFDFDF',
            borderRadius:'0.8rem',
            paddingBottom:'0.02rem'
        }}>
        {this.props.children}
        </div>)
    }
}