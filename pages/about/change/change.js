Page({

  /**
   * 页面的初始数据
   */
  data: {
     username : '',
     oldmima : '',
     newmima : '',
     querenmima : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
  ,
  f0: function (options) {
    wx.navigateBack({
      delta: 1,
    })
  },

  formSubmit: function (e) {
     this.setData({
      username : e.detail.value.name,
      oldmima : e.detail.value.oldmima,
      newmima : e.detail.value.newmima,
      querenmima : e.detail.value.querenmima
     })
     
    if (oldmima == '' || newmima == '' || querenmima == '') {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none',
        duration: 1000
      })
    } else if (newmima != querenmima) {
      wx.showToast({
        title: '两次密码输入不一样',
        icon: 'none',
        duration: 1000
      })
    }else{

      wx.request({
        url: '',
        data: {
        username:name,
        oldmima:oldmima,
        newmima :newmima,
        querenmima :querenmima
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