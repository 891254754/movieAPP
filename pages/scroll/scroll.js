// pages/scroll/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total:0,
    goodslist:[],//商品数据
    currentPage:1,
    pageSize:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://127.0.0.1:5000/goods/list', //仅为示例，并非真实的接口地址
      data: {
        currentPage: 1,
        pageSize: 10
      },
      success:(res)=>{
        console.log(res.data)
        this.setData({
          goodslist:res.data.data,
          total:res.data.total
        })
      }
    })
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
    if(Math.ceil(this.data.total/this.data.pageSize)==this.data.currentPage){
      //提示
      wx.showToast({
        title: '到底了啊喂！！！',
        icon: 'none',
        duration: 2000
      })
      
      return
    }
    this.setData({
      currentPage:this.data.currentPage+1
    })
    wx.request({
      url: 'http://127.0.0.1:5000/goods/list', //仅为示例，并非真实的接口地址
      data: {
        currentPage:this.data.currentPage,
        pageSize: this.data.pageSize
      },
      success:(res)=>{
        // console.log(res.data)
        this.setData({
          goodslist:this.data.goodslist.concat(res.data.data)
        })
      }
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})