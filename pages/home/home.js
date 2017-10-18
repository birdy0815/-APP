Page({
    data:{},
    onLoad:function(){   
    //调用微信登录接口  
 wx.login({  
  success: function (loginCode) {
       console.log(loginCode); 
    var appid = 'wx62dd6c7c412dc6ff'; //填写微信小程序appid  
    var secret = '869b54737b7dc82f02a88d51c8c5bc5f'; //填写微信小程序secret  
  
    //调用request请求api转换登录凭证  
    wx.request({  
      url: 'https://api.weixin.qq.com/sns/jscode2session?appid='+appid+'&secret='+secret+'&grant_type=authorization_code&js_code='+loginCode.code,  
      header: {  
          'content-type': 'application/json'  
      },  
      success: function(res) {  
        console.log(res.data.openid) //获取openid  
      }  
    })  
  }  
})  
    }
})