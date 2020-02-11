import { AxiosInstance } from 'axios';
import { AsyncReply } from '../types/shared';

// 推荐服务
class RecommendService {
  private readonly http: AxiosInstance;
  private readonly SERVICE_NAME: string = 'portal/recommend';

  constructor(axios: AxiosInstance) {
    this.http = axios;
  }

  queryRecommendArticle(): AsyncReply<Article> {
    const requestPath = `/${this.SERVICE_NAME}/article`;
    return this.http.get(requestPath).then(it => it.data);
  }
}

export default RecommendService;

export type Article = Array<ArticleItem>;

export type ArticleItem = {
  id: number;
  uid: number;
  title: string;
  cover: string;
  desc: string;
  createTime: number;
  updateTime: number;
};
