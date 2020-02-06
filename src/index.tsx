// 库
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Helmet } from 'react-helmet';

const render = C => {
  ReactDOM.render(
    <>
      <Helmet>
        <title>西兰花设计平台</title>
      </Helmet>
      <C />
    </>,
    document.getElementById('root-app'),
  );
};

render(App);
