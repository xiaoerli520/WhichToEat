// miniprogram/pages/addFoods/addFoods.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },

  /**
   * 添加饭饭逻辑 
   */
  doAddFoods: function(e) {
    if (e.detail.value.name == "" || e.detail.value.description == "") {
      wx.showToast({
        title: '内容不能为空',
        icon: 'warn',
        duration: 2000
      })
      return
    }
    console.log(e.detail.value)
    wx.cloud.callFunction({
      name:'add',
      data: {
        name: e.detail.value.name,
        description: e.detail.value.description
      },
      success: function (res) {
        wx.showToast({
          title: '添加成功~',
          icon: 'success',
          duration: 5000
        }),
        wx.navigateTo({
          url: '../index/index',
        })   
      },
      fail: function (res) {
        wx.showToast({
          title: '添加失败~',
          icon: 'warn',
          duration: 5000
        })
      }
    })
  },
})