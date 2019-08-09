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



  publish: function () {
    wx.navigateTo({
      url: '../admin/admin',
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
  
  
}) 


