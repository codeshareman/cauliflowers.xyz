import React, { FC } from 'react';
import HomeSearch from '../search';
import './index.scss';

type BannerProps = {
  name?: string;
};

const Banner: FC<BannerProps> = () => {
  return (
    <div className="banner">
      <div className="container">
        <h1>品质 格调 生活</h1>
        <p className="desc">
          Hundreds of high resolution images added weekly. Free from copyright restrictions.
        </p>
        <HomeSearch />
      </div>
    </div>
  );
};

export default Banner;
