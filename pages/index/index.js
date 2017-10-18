//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //获取pwd值
    passWdInput:function(e){
    this.setData({
      passW:e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindpwd:function(){
 //base64加密开始  
var keyStr = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv"  
        + "wxyz0123456789+/" + "=";  
  
function encode64(input) {  

    var output = "";  
    var chr1, chr2, chr3 = "";  
    var enc1, enc2, enc3, enc4 = "";  
    var i = 0;  
    do {  
        chr1 = input.charCodeAt(i++);  
        chr2 = input.charCodeAt(i++);  
        chr3 = input.charCodeAt(i++);  
        enc1 = chr1 >> 2;  
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
        enc4 = chr3 & 63;  
        if (isNaN(chr2)) {  
            enc3 = enc4 = 64;  
        } else if (isNaN(chr3)) {  
            enc4 = 64;  
        }  
        output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2)  
                + keyStr.charAt(enc3) + keyStr.charAt(enc4);  
        chr1 = chr2 = chr3 = "";  
        enc1 = enc2 = enc3 = enc4 = "";  
    } while (i < input.length);  

    return output;  
}  
// base64加密结束    
var tanxiao = encode64(this.data.passW)
 wx.request({
      url:'https://wallet.hnapay.com/rest/account/member/register',
      method:'POST',
      data: {userName:'123',pwd:tanxiao},
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        //that.data.items = res.data
        //that.setData({cardinfo:res.data})
      }
    })
    this.setData({
      passWd:tanxiao
    })
  },
  onLoad: function () {
    //console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    //mobile
    wx.request({
      url:'https://wallet.hnapay.com/rest/account/member/findPwdFisrt',
      method:'POST',
      data: {mobile:'18611565178'},
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        //that.data.items = res.data
        that.setData({items:res.data})
      }
    })
    //cardinfo
    wx.request({
      url:'https://wallet.hnapay.com/rest/precard/getCardList',
      method:'POST',
      data: {userId:'20161229543108'},
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        //that.data.items = res.data
        that.setData({cardinfo:res.data})
      }
    })
  }
})
