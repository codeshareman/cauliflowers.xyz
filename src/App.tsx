import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { message, ConfigProvider } from 'antd';
import MainLayout from '@/layout';
import { MainRoutes } from './router';
import zh_CN from 'antd/lib/locale/zh_CN';
import './index.scss';
// 设置消息提示的数量
message.config({
  maxCount: 3,
});

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="page-container">
        <ConfigProvider locale={zh_CN}>
          <Router>
            <MainLayout>
              <Switch>{MainRoutes}</Switch>
            </MainLayout>
          </Router>
        </ConfigProvider>
      </div>
    );
  }
}
