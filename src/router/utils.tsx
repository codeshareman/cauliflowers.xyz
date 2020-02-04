import * as React from 'react';
import { Spin } from 'antd';
import { Route } from 'react-router-dom';
import { IRouteItem } from './config';

export const BundleCompo = function(Compo) {
  return class extends React.PureComponent {
    render() {
      return (
        <React.Suspense
          fallback={
            <div
              style={{
                textAlign: 'center',
                padding: '100px 50px',
              }}
            >
              <Spin size="large" />
            </div>
          }
        >
          <Compo />
        </React.Suspense>
      );
    }
  };
};

// 获取路由
export const getRouter = function(config: IRouteItem[]) {
  if (!config.length) return null;
  return config.map(route => {
    if (route.childRoute && route.childRoute.length) {
      getRouter(route.childRoute);
    }
    return (
      <Route
        key={route.id}
        exact={route.exact}
        path={route.path}
        component={route.component}
      ></Route>
    );
  });
};
