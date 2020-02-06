import React, { FC } from 'react';
import './index.scss'

type SearchProps = {
  name?: string;
};

const HomeSearch: FC<SearchProps> = ({ name }) => {
  return (
    <div className="search-box">
      <input type="text"  placeholder="search something u like..."/>
    </div>
  );
};

export default HomeSearch;
