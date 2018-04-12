import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

export default class componentName extends Component {
    state = {
        data: ['001', '002', '003'],
        imgHeight: '4.5rem',
        slideIndex: 0,
      }
      render() {
        return (
                <Carousel
                autoplay={true}
                infinite
                selectedIndex={1}
                //beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                //afterChange={index => console.log('slide to', index)}
                >
                {this.state.data.map(val => (
                    <a
                    key={val}
                    href="http://39.108.135.222"//这里设置地址
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                    <img
                        src={`http://39.108.135.222/yijia/build/images/${val}.jpg`}
                        alt="加载中..."
                        style={{ width: '100%', verticalAlign: 'top' }}
                    />
                    </a>
                ))}
                </Carousel>

            )
    };
}   