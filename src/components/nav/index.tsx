import React, { FC } from 'react';
import './index.scss';

type NavProps = {
  name?: string;
};

const HeaderNav: FC<NavProps> = ({ name }) => {
  return <div className="nav">123</div>;
};

export default HeaderNav;
