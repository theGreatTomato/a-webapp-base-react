import React, { Component } from 'react'
import Tag from '../../components/tag';
import Select from '../../components/giftSelect';
import data from '../../static/Data';
import GiftItemList from '../../components/giftItemList';

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            originData:[],
            layoutDate:[]    
        }
    }
    handleChange(value) {
        if(value !== 'all') {
            var newData = this.state.originData.filter((arr, i) => {
                return arr.attr === value
            })
            this.setState({ layoutDate:newData })
        }
        else{
            this.setState({ layoutDate:this.state.originData })
        }
    }
    componentDidMount() {
        setTimeout(() =>{
            this.setState({ originData:data,layoutDate:data }) 
            },100)
    }
    render() {
        return (
            <div style = {{background :'#fff'}} >
                <Select change = { this.handleChange.bind(this) }/>
                <GiftItemList data = { this.state.layoutDate }/>
				<div style = {{ height: '0.2rem' , backgroundColor:'#fff' }}></div>
				<div style = {{ height: '1.5rem' , backgroundColor:'#f1f1f1' }}></div>
                <Tag />
            </div>
        )
    }
}
