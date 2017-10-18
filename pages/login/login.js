var app = getApp()
Page({
  data:{
    imagesurl:'https://walletcpstest.hnapay.com/rest/account/member/authCode',
    user:'',
    pwd:'',
    verifyText:'获取验证码',
    verifyClass:'login-code',
    bindCode:'getCode'
  },
    inputUser:function(e){
    this.setData({
      user:e.detail.value
    })
  },
  inputPwd:function(e){
    this.setData({
      pwd:e.detail.value
    })
  },
  inputCode:function(e){
    this.setData({
      code:e.detail.value
    })
  },
  getCode:function(){
    var countDown=10;
    var timer=null;
    if(countDown < 10){
      wx.showToast({
  title: countDown,
  icon: 'success',
  duration: 2000
})
      return
    }
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
  //事件处理函数
  login:function(){
    var page=this;    
    wx.showToast({
            title: '正在登录...',
            icon: 'loading',
            duration: 1000
          })
     wx.request({
      url:'https://walletcpstest.hnapay.com/rest/account/member/login',
      method:'POST',
      data: {userName:this.data.user,pwd:this.data.pwd,authCode:this.data.code},
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function(res) {
        //console.log(res.data)
        //that.data.items = res.data
        page.setData({items:res.data})
      }     
     })
  },
  onLoad: function () { 
    var that=this
    console.log('onLoad')
	//let app = getApp()
    new app.LoginPannel()
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
