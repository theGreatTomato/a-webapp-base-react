import React, { Component } from 'react';
import Carousel from '../../components/Carousel' 
import {  WhiteSpace } from 'antd-mobile';
import HomePart2 from '../../components/homePart2';
import HomePart3 from '../../components/homePart3';
import HomePart4 from '../../components/homePart4';
import Tag from '../../components/tag';

export default class Home extends Component {
  	render() {
    	return (
      		<div>
				<Carousel />
                <WhiteSpace size="md" style = {{backgroundColor:'#F1F1F1'}} />
                <HomePart2 />
                <WhiteSpace size="md" style = {{backgroundColor:'#F1F1F1'}} />
				<HomePart3 />
                <WhiteSpace size="md" style = {{backgroundColor:'#F1F1F1'}} />
				<HomePart4 />
                <WhiteSpace size="md" style = {{backgroundColor:'#F1F1F1'}} />
				<div style = {{ height: '1.5rem'}}></div>
				<Tag />
			</div>
		)
	}
};
