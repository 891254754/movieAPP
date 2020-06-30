//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    background: ['http://image11.m1905.cn/uploadfile/2012/0606/20120606105850292.jpg', 'http://pic.16xx8.com/allimg/150716/20011G131-0.jpg', 'http://img2.imgtn.bdimg.com/it/u=2036435699,321761379&fm=26&gp=0.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    jumplist: [{
      name: '正在热映',
      tag: '>',
      url: 'theaters'
    }, {
      name: '即将上映',
      tag: '>',
      url: 'newmovies'
    }, {
      name: 'TOP250',
      tag: '>',
      url: 'top250'
    },]
  },

})