var app = getApp()
Page({
  data:{
     apiName:"查询个人信息",
     apiUrl:"https://wallet.hnapay.com/rest/account/member/getIsExistUser",
     apiTest:"测试结果",
     mobile:"18611720702"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var page=this
    wx.request({
      url:this.data.apiUrl,
      method:'POST',
      data: {mobile:this.data.mobile},
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function(res) {
        if(res.data.statusCode=="0000"){
          console.log("log");
          try {
          wx.setStorageSync('mo','111111')
              } catch (e) {    
              }
           try {
          wx.setStorageSync('mo2','112221111')
              } catch (e) {    
              }             
        }
        console.log(res.data)
        //that.data.items = res.data
        page.setData({
          apiTest:res.data.success
          })
      }
    })   
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