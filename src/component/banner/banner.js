import React, { Component } from 'react';
import axios from 'axios';
import { Carousel } from 'antd';

class Banner extends Component {
  constructor (props) {
    super(props)
    this.state = {data: []}
}
 getBanner(){
    axios({
      url: '/list/banner/pc',
      method: 'get', // 默认是 get9			  
      baseURL:'https://zhishun888.com/zaotoutiao-api-home-1.0.0'
    })
    .then((res)=>{
      this.setState({
          data:res.data.data
        })
        
    })
    .catch((error)=>{
        console.log(error)
    })
  }
  componentWillMount(){
    this.getBanner();
  }
  render() {
    const bannerItem =  this.state.data.map((item,index) => (
      <a
        key={index}
       
        style={{ display: 'inline-block', width: '100%', height: '100%' }}
      >
        <img
          src={``}
          alt=""
          style={{ width: '100%', verticalAlign: 'center' }}
          onLoad={() => {
            window.dispatchEvent(new Event('resize'));
            this.setState({ imgHeight: 'auto' });
          }}
        />
      </a>
    ));
    return (
      <Carousel  
      autoplay={true}
      infinite
      cellSpacing={0}
      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      afterChange={index => console.log('slide to', index)} >        
       {bannerItem}
      </Carousel>
    );
  }
}
export default Banner;