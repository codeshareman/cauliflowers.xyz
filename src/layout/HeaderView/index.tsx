import * as React from 'react';
import { observer } from 'mobx-react';

import './index.scss';
import { HomeNav, HomeSearch, Banner } from '@/components';

type P = {
  hideMenu?: boolean;
};
type S = {};

@observer
class HeaderView extends React.Component<P, S> {
  render() {
    return (
      <div className="header-wrapper">
        <HomeNav />
        <Banner />
      </div>
    );
  }
}

export default HeaderView;
