Page({

  data: {
    // imgUrls: ['image/qing1.jpg', 'image/qing2.jpg', 'image/mmexport1539605676500.jpg'],
    imgUrls: ['../../image/qing1.jpg', '../../image/qing2.jpg', '../../image/mmexport1539605676500.jpg'],
    // imgUrls: [
    //   'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
    //   'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
    //   'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    // ],
    bg: '#C79C77',
    Hei: ""      ,    //这是swiper要动态设置的高度属性
    imgH: function (e) {
      var winWid = wx.getSystemInfoSync().windowWidth;         //获取当前屏幕的宽度
      var imgh = e.detail.height;　　　　　　　　　　　　　　　　//图片高度
      var imgw = e.detail.width;
      var swiperH = winWid * imgh / imgw + "px"　　　　　　　　　　////等比设置swiper的高度。  即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度    ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
      this.setData({
        Hei: swiperH　　　　　　　　//设置高度
      })
    },
    
// 控制圆点，自动播放，时间间隔，已经在wxml设置了
    // indicatorDots: true,
    // vertical: false,
    // autoplay: false,
    // circular: false,
    // interval: 2000,
    // duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    // event:['软件杯'','小红帽','ACM竞赛']
    //event:['aaa','bbb','ccc']
    event: [{name:'软件杯'}, {name: '小红帽'}, {name: 'ACM竞赛'}]
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  // tijiao: function (options) {


  // }
  // ,


  // f1: function () {
  //   wx.navigateTo({
  //     url: 'change/change',
  //   })
  // },


  // clicked: function (options) {
  //   wx.navigateTo({
  //     url: 'check/check',
  //   })
  // }
  // ,

  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  }
  ,
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 200,  //动画时长
      timingFunction: "linear", //线性
      delay: 0  //0则不延迟
    });
    // 第2步：这个动画实例赋给当前的动画实例
    this.animation = animation;
    // 第3步：执行第一组动画
    animation.opacity(0).rotateX(-100).step();
    // 第4步：导出动画对象赋给数据对象储存
    this.setData({
      animationData: animation.export()
    })
    // 第5步：设置定时器到指定时候后，执行第二组动画
    setTimeout(function () {
      // 执行第二组动画
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
      this.setData({
        animationData: animation
      })
      //关闭
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)
    // 显示
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  },
  eventpage:function(param){
    wx.navigateTo({

      url: '/pages/eventpage/eventpage',

    })
  }
})


