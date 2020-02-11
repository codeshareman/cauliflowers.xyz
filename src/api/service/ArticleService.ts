import { AxiosInstance } from 'axios';

// 文章服务
class ArticleService {
  private readonly http: AxiosInstance;
  private readonly SERVICE_NAME: string = 'portal/arcticle';

  constructor(axios: AxiosInstance) {
    this.http = axios;
  }
}


export default ArticleService;