import React, { Component, createRef } from 'react';
import { WaterFallItem } from './type';
import './index.scss';

type FallProps = {
  suffix: string;
  dataSource: Array<WaterFallItem>;
};
type S = {
  list: Array<any>;
};

// 瀑布流组件
class WaterFall extends Component<FallProps, S> {
  $watefall: any;

  state = {
    list: [],
  };

  constructor(props) {
    super(props);
    this.$watefall = React.createRef();
  }

  componentDidMount() {
    window.onload = () => {
      this.renderLayout();
    };
  }

  renderLayout = () => {
    const waterFallItems: any = Array.from(this.$watefall.children);
    let top_h = 0;
    const topArr = [];
    waterFallItems.map((item: any, index) => {
      const offsetW = item.offsetWidth;
      const colIndex = index % 5;
      top_h = this.getEleTopDistance(waterFallItems, index);
      item.style.left = colIndex === 0 ? 0 : offsetW * colIndex + 'px';
      item.style.top = Math.floor(index / 5) < 1 ? 0 : top_h + 'px';
      topArr.push(top_h);
    });
    this.$watefall.style.height = Math.max(...topArr) + 300 + 'px';
    console.dir(this.$watefall);
    console.log(Math.max(...topArr));
  };

  getEleTopDistance = (waterFallItems: Array<any>, index: number) => {
    let distance = 0;
    let curIndex = index - 5;

    while (curIndex >= 0) {
      distance += waterFallItems[curIndex].offsetHeight + 20;
      curIndex = curIndex - 5;
    }

    return distance;
  };

  renderWaterFall = () => {
    const { dataSource, suffix } = this.props;
    return (
      dataSource &&
      dataSource.map((item, index) => {
        return (
          <div key={`${suffix}-${index}`} className={`item item-${suffix}`}>
            <div className="inner">
              <div className="cover">
                <img src={item.cover} title={item.title} />
              </div>
              <div className="info">
                <span className="author">
                  <a className="avatar">
                    <img src={item.avatar} title="item.author" />
                    <strong>{item.author}</strong>
                  </a>
                </span>
                <span className="state">11</span>
              </div>
            </div>
          </div>
        );
      })
    );
  };

  render() {
    return (
      <div ref={node => (this.$watefall = node)} className="waterfall">
        {this.renderWaterFall()}
      </div>
    );
  }
}

export default WaterFall;
