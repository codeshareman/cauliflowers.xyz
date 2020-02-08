import React, { ForwardRefExoticComponent } from 'react';
import './index.scss'

type CommentProps = {};

// 作品推荐
const Comment: ForwardRefExoticComponent<CommentProps> = React.forwardRef((props, ref) => {
  return <div className="recommend recommend-comment">作品推荐</div>;
});

export default Comment;
