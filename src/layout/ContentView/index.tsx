import * as React from 'react';
import './index.scss';

type P = {};
type S = {};

// 主内容区域
class ContentView extends React.Component<P, S> {
  render() {
    return <div className="content-wrapper">{this.props.children}</div>;
  }
}

export default ContentView;
