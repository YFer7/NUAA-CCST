Page  ( {

data:{
    username:'',
    password:''
},

inputChange: function(e)
{
  var prop = e.target.dataset['prop']
  var changed = {}
  changed[prop] = e.detail.value
  this.setData(changed)
},


tijiao:function(options)
{
  var that = this;//=====注意此处，要用that 指代this===== 
  wx.request({
    url: '', //服务器地址 
    data: {
      userName: username,//请求参数 
      passWord: password//请求参数 
    },
    method: 'POST',// OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT 
    header: {// 设置请求的 header 
      'content-type': 'application/x-www-form-urlencoded'
    },
    success: function (res) {
      that.setData({
        array: res.data.array
      })
    },
    fail: function (res) {
      console.log('submit fail');
    },
    complete: function (res) {
      console.log('submit complete');
    }
  })   
     
}
,


f1:function()
{
    wx.navigateTo({
      url: 'change/change',
    })
},


  publish: function (){
    wx.navigateTo({
      url: '../publish/publish',
    })
  }
  ,

  test: function()
  {
    wx.navigateTo({
      url: '../about/login/login',
    })
  },


  clicked: function (options) 
  {
    wx.navigateTo({
      url: 'check/check',
    })
  }
  ,
  powerDrawer: function (e) 
  {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  }
  ,
  util: function (currentStatu) 
  {
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
  
}) 


