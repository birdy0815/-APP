// pages/bankcard-verify/bankcard-verify.js
Page({
  data:{
    verifyText:'获取验证码',
    verifyClass:'login-code',
    bindCode:'getCode'
  },
   getCode:function(){
    var countDown=10;
    var timer=null;
    this.setData({
      'verifyText': countDown + 's','verifyClass':'login-code-mo','bindCode':''
    })
   timer = setInterval(() => {
      countDown--
      if (countDown <= 0) {
        clearInterval(timer)
        countDown = 10
        this.setData({
          'verifyText': '重新获取','bindCode':'getCode'
        })
        return
      }
      this.setData({
        'verifyText':countDown + 's'
      })
    }, 1000)
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})