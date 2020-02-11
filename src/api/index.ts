import instance from './axios';
import RecommendService from './service/RecommendService';

const recommend = new RecommendService(instance);

export default {
  recommend,
};
