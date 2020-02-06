import React, { FC } from 'react';
import './index.scss'

type CommentProps = {};

// 作品推荐
const Comment: FC<CommentProps> = function(props) {
  return <div className="recommend recommend-comment">作品推荐</div>;
};

export default Comment;
