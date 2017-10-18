var app = getApp()
Page({
    data:{},
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