// pages/publish/publish.js
var activityName = [];
var activityPlace = [];
var activityLeader = [];
var activityLeaderPhone = [];
var activityRecruitmentNumber = [];
var bindTextAreaBlur1 = [];
var bindTextAreaBlur2 = [];
var bindTextAreaBlur3 = [];
var onedate = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2019-01-01',
  },

  pullActivityName : function(e) {
    activityName.pop()
    activityName.push(e.detail.value)
    console.log('活动名称：',e.detail.value)
  },
  pullActivityPlace: function (e) {
    activityPlace.pop()
    activityPlace.push(e.detail.value)
    console.log('活动地点：', e.detail.value)
  },
  pullActivityLeader: function (e) {
    activityLeader.pop()
    activityLeader.push(e.detail.value)
    console.log('活动负责人：', e.detail.value)
  },
  pullActivityLeaderPhone: function (e) {
    activityLeaderPhone.pop()
    activityLeaderPhone.push(e.detail.value)
    console.log('联系人电话：', e.detail.value)
  },
  pullActivityRecruitmentNumber: function (e) {
    activityRecruitmentNumber.pop()
    activityRecruitmentNumber.push(e.detail.value)
    console.log('招募人数：', e.detail.value)
  },
  bindTextAreaBlur1: function (e) {
    bindTextAreaBlur1.pop()
    bindTextAreaBlur1.push(e.detail.value)
    console.log('活动简介：',e.detail.value)
  },
  bindTextAreaBlur2: function (e) {
    bindTextAreaBlur2.pop()
    bindTextAreaBlur2.push(e.detail.value)
    console.log('活动内容：', e.detail.value)
  },
  bindTextAreaBlur3: function (e) {
    bindTextAreaBlur3.pop()
    bindTextAreaBlur3.push(e.detail.value)
    console.log('报名要求：', e.detail.value)
  },
  /*时间修改函数 */
  bindDateChange: function (e) {
    onedate.pop()
    onedate.push(e.detail.value)
    console.log('时间更改为：', e.detail.value);
    this.setData({
      date: e.detail.value
    })
  },
  button:function(options) {
    var that = this;//=====注意此处，要用that 指代this===== 
    wx.request({
      url: '', //服务器地址 
      data: {
        activity_Name : activityName.join(),
        activity_Place : activityPlace.join(),
        activity_Leader : activityLeader.join(),
        activity_LeaderPhone : activityLeaderPhone.join(),
        activity_RecruitmentNumber: activityRecruitmentNumber.join(),
        bind_TextAreaBlur1: bindTextAreaBlur1.join(),
        bind_TextAreaBlur2: bindTextAreaBlur2.join(),
        bind_TextAreaBlur3: bindTextAreaBlur3.join()
      },
      method: 'POST',// OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT 
      header: {// 设置请求的 header 
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000,
        })
      },
      fail: function (res) {
        console.log('submit fail');
      },
      complete: function (res) {
        console.log('submit complete');
      }
    })
      /*
      wx.redirectTo({
        url: '',
      })
      */
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
})