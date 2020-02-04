import React, { lazy } from 'react';
import { BundleCompo } from './utils';

// 页面
const HomePage = lazy(() => import('@/pages/home'));

const Pages = {
  home: BundleCompo(HomePage),
};

export default Pages;
