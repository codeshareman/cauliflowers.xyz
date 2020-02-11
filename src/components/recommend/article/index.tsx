import React, { FC, useEffect, useState } from 'react';
import API from '@/api';
import './index.scss';
import { Article } from '@/api/service/RecommendService';

type ArticleProps = {};

// 作品推荐
const Article: FC<ArticleProps> = function(props) {
  const [list, setList] = useState([]);
  const bestArticle = list[0];
  const midArticle = list.slice(1, 2);
  const smallArticle = list.slice(3);

  const queryRecommendArticle = async () => {
    const res = await API.recommend.queryRecommendArticle();
    setList(res.data);
  };

  useEffect(() => {
    queryRecommendArticle();
  }, []);

  console.log(midArticle, "====")
  return (
    <div className="recommend recommend-article">
      <div className="left">
        {bestArticle && (
          <div className="article-best">
            <h2>{bestArticle.title}</h2>
            <div className="cover">
              <img src={bestArticle.cover} />
            </div>
            <p>{bestArticle.desc}</p>
          </div>
        )}
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
        {smallArticle.map(item => {
          return (
            <div className="article article-s">
              <div className="cover">
                <img src={item.cover}></img>
              </div>
              <div className="title">{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Article;
