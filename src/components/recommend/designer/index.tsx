import React, { FC } from 'react';
import './index.scss';

type DesignerProps = {};

// 设计师推荐
const Designer: FC<DesignerProps> = function(props) {
  return <div className="recommend recommend-designer">设计师推荐</div>;
};

export default Designer;
