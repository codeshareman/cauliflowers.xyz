import * as React from 'react';

import './index.scss';

type P = {};
type S = {};

// 底部样式
class FooterView extends React.Component<P, S> {
  render() {
    return (
      <div className="footer">
        Copyright © 2012-2020 www.cauliflower.xyz lnc.ALL Rights Reserved 成都西兰花设计工作室
      </div>
    );
  }
}

export default FooterView;
