Page({

  data: {
    username: '',
    password: ''
  },

  inputChange: function (e) {
    var prop = e.target.dataset['prop']
    var changed = {}
    changed[prop] = e.detail.value
    this.setData(changed)
  },


  tijiao: function (options) {
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

  f000:function()
  {
      wx.navigateTo({
        url: 'zhuce/zhuce',
      })
  }
  ,
  f1: function () {
    wx.navigateTo({
      url: 'change1/change1',
    })
  },

  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },

  formSubmit: function (e) {

    var username = e.detail.value.username
    var password = e.detail.value.password
  

    if (username == '' || password == '' ) {
      wx.showToast({
        title: '用户名或密码不能为空',
        icon: 'none',
        duration: 1000
      })
    } else {

      wx.request({
        url: '',
        data: {
          username: username,
          password: password
        },
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          //console.log(res.data)
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000,
          })

        }
      })

    }


  }

})