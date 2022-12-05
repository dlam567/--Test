// pages/user/登录.js
import Toast from '../../miniprogram_npm/tdesign-miniprogram/toast/index';
var i=0
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    //密码默认隐藏输入
    pwTyp:'password',
    eyeTp:'/img/eyes_on.png',
    //密码输入框的值
    phNum:"Admin", //用户名
    pswd:"fzyzczb78",
  },
  btnTapHandler(e) {
    var phNum1 = this.data.phNum
    var pswd1 = this.data.pswd
    console.log(phNum1)
    if(phNum1=="Admin"){
      if(pswd1=="fzyzczb78"){
       wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000 //持续的时间
      }) 
      this.setData({
        'phNum':'',
        'pswd':'',
        'pwTyp':'password',
        'eyeTp':'/img/eyes_on.png'
      })
      wx.navigateTo({
        url: '../Manage/Manage'
      })
      }
      else{
        wx.showToast({
          title: '密码错误',
          icon:'error',
          duration: 2000 //持续的时间
        }),
        this.setData({
          'pwTyp':'password',
          'eyeTp':'/img/eyes_on.png'
        })
      }
    }
    else{
      wx.showToast({
        title: '登录失败',
        icon:'error',
        duration: 2000 //持续的时间
      }),
      this.setData({
        'pwTyp':'password',
        'eyeTp':'/img/eyes_on.png'
      }),
      this.setData({
        'phNum':'',
        'pswd':''
      })
    }
  },
  btncler(e){ //清除内容
    this.setData({
      'pswd':'',
      'pwTyp':'password',
      'eyeTp':'/img/eyes_on.png'
    })
  },
  btneye(e){ //小眼睛显示、不显示密码
    i=i+1;
    if(i%2==0){ //显示密码
      this.setData({
        'pwTyp':'password',
        'eyeTp':'/img/eyes_on.png'
      })
    }
    else{
      this.setData({
            'pwTyp':'text',
            'eyeTp':'/img/eyes_off.png'
          })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})