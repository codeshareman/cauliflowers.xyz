import { AxiosInstance } from 'axios';

// 账号服务
class AccountService {
  private readonly http: AxiosInstance;
  private readonly SERVICE_NAME: string = 'portal/account';

  constructor(axios: AxiosInstance) {
    this.http = axios;
  }
}


export default AccountService;