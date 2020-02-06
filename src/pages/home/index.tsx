import React, { Component } from 'react';
import { Recommend } from '@/components';
import './index.scss';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage-wrapper">
        <div className="cate-recommend">
          <h3 className="title">Recommend For u</h3>
          <div className="container">
            <Recommend.Work></Recommend.Work>
            {/* <Recommend.Article></Recommend.Article>
            <Recommend.Desginer></Recommend.Desginer>
            <Recommend.Comment></Recommend.Comment> */}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
