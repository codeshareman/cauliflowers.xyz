import React, { FC } from 'react';
import './index.scss';

type ArticleProps = {};

// 作品推荐
const Article: FC<ArticleProps> = function (props) {
  return <div className="recommend recommend-article">
    <div className="left">
      <div className="article-best">
        <h2>
          对比这10个注意事项，你的
          网页文字排
          版达标了么？
        </h2>
        <div className="cover">
          <img src="http://img.qdaily.com/paper/paper_show/20200123020526jcMOs4BhW9eVmqXY.jpg?imageMogr2/auto-orient/thumbnail/!1010x450r/gravity/Center/crop/1010x450/ignore-error/1" />
        </div>
        <p>
          好设计的呈现形态很多，能够脱颖而出的设计，打算阿斯顿你其实也能做到。你需要坚持不懈地尝试原创，至少是寻求原创的感觉，精心的规划，并且不断地努力。想要打磨出与众不同的优秀网站，你可以从下面5个维度入手，精心打磨。这篇文章当中不会展现一堆堆的实际案例，因为你的目标不是复制，而是创造。
        </p>
      </div>
    </div>
    <div className="center">
      <div className="article article-m">
        <div className="mask">
          <div className="slogan">
            <div>简洁</div>
            <div>优雅</div>
            <div>实惠</div>
          </div>
        </div>
      </div>
    </div>
    <div className="right">
      <div className="article article-s">
        <div className="cover"><img src="http://img.qdaily.com/paper/paper_show/202001252119564h3n8RByGM57ObN9.jpg?imageMogr2/auto-orient/thumbnail/!1010x450r/gravity/Center/crop/1010x450/ignore-error/1"></img></div>
        <div className="title">从普通感冒到巨型病毒，病毒在生命演化中发挥什么作用？</div>
      </div>
      <div className="article article-s">
        <div className="cover"><img src="http://img.qdaily.com/paper/paper_show/202001252119564h3n8RByGM57ObN9.jpg?imageMogr2/auto-orient/thumbnail/!1010x450r/gravity/Center/crop/1010x450/ignore-error/1"></img></div>
        <div className="title">从普通感冒到巨型病毒，病毒在生命演化中发挥什么作用？</div>
      </div>
      <div className="article article-s">
        <div className="cover"><img src="http://img.qdaily.com/paper/paper_show/202001252119564h3n8RByGM57ObN9.jpg?imageMogr2/auto-orient/thumbnail/!1010x450r/gravity/Center/crop/1010x450/ignore-error/1"></img></div>
        <div className="title">从普通感冒到巨型病毒，病毒在生命演化中发挥什么作用？</div>
      </div>
      <div className="article article-s">
        <div className="cover"><img src="http://img.qdaily.com/paper/paper_show/202001252119564h3n8RByGM57ObN9.jpg?imageMogr2/auto-orient/thumbnail/!1010x450r/gravity/Center/crop/1010x450/ignore-error/1"></img></div>
        <div className="title">从普通感冒到巨型病毒，病毒在生命演化中发挥什么作用？</div>
      </div>
    </div>

  </div >;
};

export default Article;
