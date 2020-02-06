import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import HeaderView from './HeaderView';
import FooterView from './FooterView';
import ContentView from './ContentView';

type P = RouteComponentProps & {
  hideMenu?: boolean;
};
type S = {};

class MainLayout extends React.Component<P, S> {
  render() {
    const { hideMenu } = this.props;
    return (
      <>
        <HeaderView hideMenu={hideMenu} />
        <ContentView>{this.props.children}</ContentView>
        <FooterView />
      </>
    );
  }
}

export default withRouter(MainLayout);
