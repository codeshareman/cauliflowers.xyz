import React, { FC } from 'react';
import './index.scss';
import { WaterFall } from '@/components';

type WorkProps = {};

// 作品推荐
const Work: FC<WorkProps> = function(props) {
  const dataSource = [
    {
      title: '日系小清新格调1',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982375048&di=17b36ceaa8aa27fdb5bf848810c67b19&imgtype=0&src=http%3A%2F%2Fstatic-xiaoguotu.17house.com%2F001%2F07%2F010%2F14376355566776.jpg',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: 'fariy',
      createTime: '2020-02-04',
      star: 20,
      comment: 30,
    },
    {
      title: '日系小清新格调2',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982314424&di=138c6bc5641b6dcf5779a53452214334&imgtype=0&src=http%3A%2F%2Fwj.xiaoyuer.com%2Ffiles%2Fservice%2Frelease%2F2016071214555415880338688367.jpg%3Fw%3D385%26h%3D385',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: 'captain',
      createTime: '2020-02-04',
      star: 40,
      comment: 80,
    },
    {
      title: '日系小清新格调3',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982314423&di=f7429ed963f0a48b0c9fe3ad3fbd9e20&imgtype=0&src=http%3A%2F%2Fstatic-xiaoguotu.17house.com%2Fxgt%2Fm%2F21%2F1462715806139.jpg',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: 'captainzz',
      createTime: '2020-02-04',
      star: 40,
      comment: 80,
    },
    {
      title: '日系小清新格调4',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982487387&di=4c7896a493500d7532c2e3a0a2ce31cc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F12%2F20180512065741_mwqmm.jpeg',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: 'captainzz',
      createTime: '2020-02-04',
      star: 22,
      comment: 30,
    },
    {
      title: '日系小清新格调5',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982539479&di=dd280412b938e21df2a388f6ce0c770d&imgtype=0&src=http%3A%2F%2Ftgi1.jia.com%2Fzximg%2F201508%2F1d0115271905.jpg',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: '西兰花',
      createTime: '2020-02-04',
      star: 50,
      comment: 120,
    },
    {
      title: '日系小清新格调6',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982539479&di=dd280412b938e21df2a388f6ce0c770d&imgtype=0&src=http%3A%2F%2Ftgi1.jia.com%2Fzximg%2F201508%2F1d0115271905.jpg',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: '西兰花',
      createTime: '2020-02-04',
      star: 50,
      comment: 120,
    },
    {
      title: '日系小清新格调2',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982314424&di=138c6bc5641b6dcf5779a53452214334&imgtype=0&src=http%3A%2F%2Fwj.xiaoyuer.com%2Ffiles%2Fservice%2Frelease%2F2016071214555415880338688367.jpg%3Fw%3D385%26h%3D385',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: 'captain',
      createTime: '2020-02-04',
      star: 40,
      comment: 80,
    },
    {
      title: '日系小清新格调3',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982314423&di=f7429ed963f0a48b0c9fe3ad3fbd9e20&imgtype=0&src=http%3A%2F%2Fstatic-xiaoguotu.17house.com%2Fxgt%2Fm%2F21%2F1462715806139.jpg',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: 'captainzz',
      createTime: '2020-02-04',
      star: 40,
      comment: 80,
    },
    {
      title: '日系小清新格调4',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982487387&di=4c7896a493500d7532c2e3a0a2ce31cc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F12%2F20180512065741_mwqmm.jpeg',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: 'captainzz',
      createTime: '2020-02-04',
      star: 22,
      comment: 30,
    },
    {
      title: '日系小清新格调3',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982314423&di=f7429ed963f0a48b0c9fe3ad3fbd9e20&imgtype=0&src=http%3A%2F%2Fstatic-xiaoguotu.17house.com%2Fxgt%2Fm%2F21%2F1462715806139.jpg',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: 'captainzz',
      createTime: '2020-02-04',
      star: 40,
      comment: 80,
    },
    {
      title: '日系小清新格调4',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982487387&di=4c7896a493500d7532c2e3a0a2ce31cc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F12%2F20180512065741_mwqmm.jpeg',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: 'captainzz',
      createTime: '2020-02-04',
      star: 22,
      comment: 30,
    },
    {
      title: '日系小清新格调5',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982539479&di=dd280412b938e21df2a388f6ce0c770d&imgtype=0&src=http%3A%2F%2Ftgi1.jia.com%2Fzximg%2F201508%2F1d0115271905.jpg',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: '西兰花',
      createTime: '2020-02-04',
      star: 50,
      comment: 120,
    },
    {
      title: '日系小清新格调6',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982539479&di=dd280412b938e21df2a388f6ce0c770d&imgtype=0&src=http%3A%2F%2Ftgi1.jia.com%2Fzximg%2F201508%2F1d0115271905.jpg',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: '西兰花',
      createTime: '2020-02-04',
      star: 50,
      comment: 120,
    },
    {
      title: '日系小清新格调2',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982314424&di=138c6bc5641b6dcf5779a53452214334&imgtype=0&src=http%3A%2F%2Fwj.xiaoyuer.com%2Ffiles%2Fservice%2Frelease%2F2016071214555415880338688367.jpg%3Fw%3D385%26h%3D385',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: 'captain',
      createTime: '2020-02-04',
      star: 40,
      comment: 80,
    },
    {
      title: '日系小清新格调3',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982314423&di=f7429ed963f0a48b0c9fe3ad3fbd9e20&imgtype=0&src=http%3A%2F%2Fstatic-xiaoguotu.17house.com%2Fxgt%2Fm%2F21%2F1462715806139.jpg',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: 'captainzz',
      createTime: '2020-02-04',
      star: 40,
      comment: 80,
    },
    {
      title: '日系小清新格调4',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982487387&di=4c7896a493500d7532c2e3a0a2ce31cc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F12%2F20180512065741_mwqmm.jpeg',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: 'captainzz',
      createTime: '2020-02-04',
      star: 22,
      comment: 30,
    },
    {
      title: '日系小清新格调3',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982314423&di=f7429ed963f0a48b0c9fe3ad3fbd9e20&imgtype=0&src=http%3A%2F%2Fstatic-xiaoguotu.17house.com%2Fxgt%2Fm%2F21%2F1462715806139.jpg',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: 'captainzz',
      createTime: '2020-02-04',
      star: 40,
      comment: 80,
    },
    {
      title: '日系小清新格调4',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982487387&di=4c7896a493500d7532c2e3a0a2ce31cc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F12%2F20180512065741_mwqmm.jpeg',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: 'captainzz',
      createTime: '2020-02-04',
      star: 22,
      comment: 30,
    },
    {
      title: '日系小清新格调3',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982314423&di=f7429ed963f0a48b0c9fe3ad3fbd9e20&imgtype=0&src=http%3A%2F%2Fstatic-xiaoguotu.17house.com%2Fxgt%2Fm%2F21%2F1462715806139.jpg',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: 'captainzz',
      createTime: '2020-02-04',
      star: 40,
      comment: 80,
    },
    {
      title: '日系小清新格调4',
      cover:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580982487387&di=4c7896a493500d7532c2e3a0a2ce31cc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F12%2F20180512065741_mwqmm.jpeg',
      avatar:
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
      author: 'captainzz',
      createTime: '2020-02-04',
      star: 22,
      comment: 30,
    },
  ];
  return (
    <div className="recommend recommend-work">
      <WaterFall dataSource={dataSource} suffix={'work'} />
    </div>
  );
};

export default Work;
