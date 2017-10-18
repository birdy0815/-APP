let _compData={
    '__lgpanel__.idb': "del",
    '__lgpanel__.idc':"finish",
    '__lgpanel__.idntc':"ntc",
    '__lgpanel__.idctn':"ctn",
    '__lgpanel__.screenData':"",
    '__lgpanel__.arr':[],
    '__lgpanel__.pwdhide':true,
    '__lgpanel__.eyeshow':false,
    '__lgpanel__.eyehide':true,
    '__lgpanel__.ishide':false,
    '__lgpanel__.ishidenum':true,
    '__lgpanel__.ishidechar':true,
    '__lgpanel__.arrNumber':[
      [{cls:"item blue",tap:"clickBtn",id:"0",val:"0"},
       {cls:"item blue",tap:"clickBtn",id:"1",val:"1"},
       {cls:"item blue",tap:"clickBtn",id:"2",val:"2"},
       {cls:"item blue",tap:"clickBtn",id:"3",val:"3"},
       {cls:"item blue",tap:"clickBtn",id:"4",val:"4"},
       {cls:"item blue",tap:"clickBtn",id:"5",val:"5"},
       {cls:"item blue",tap:"clickBtn",id:"6",val:"6"},
       {cls:"item blue",tap:"clickBtn",id:"7",val:"7"},
       {cls:"item blue",tap:"clickBtn",id:"8",val:"8"},
       {cls:"item blue",tap:"clickBtn",id:"9",val:"9"}        
      ],
      [{cls:"item blue",tap:"clickBtn",id:"~",val:"~"},
       {cls:"item blue",tap:"clickBtn",id:"!",val:"!"},
       {cls:"item blue",tap:"clickBtn",id:"@",val:"@"},
       {cls:"item blue",tap:"clickBtn",id:"#",val:"#"},
       {cls:"item blue",tap:"clickBtn",id:"^",val:"^"},
       {cls:"item blue",tap:"clickBtn",id:"*",val:"*"},
       {cls:"item blue",tap:"clickBtn",id:"_",val:"_"},
       {cls:"item blue",tap:"clickBtn",id:"-",val:"-"},
       {cls:"item blue",tap:"clickBtn",id:"[",val:"["},
       {cls:"item blue",tap:"clickBtn",id:"]",val:"]"}              
      ],
      [{cls:"item blue",tap:"clickBtn",id:",",val:","},
       {cls:"item blue",tap:"clickBtn",id:"{",val:"{"},
       {cls:"item blue",tap:"clickBtn",id:"}",val:"}"},
       {cls:"item blue",tap:"clickBtn",id:":",val:":"},
       {cls:"item blue",tap:"clickBtn",id:"?",val:"?"},
       {cls:"item orange",tap:"clickBtn",id:"del",val:"删除"},
       {cls:"item orange",tap:"clickBtn",id:"ntc",val:"字母"},
       {cls:"item orange zero",tap:"clickBtn",id:"finish",val:"完成"}
      ]
    ],
   '__lgpanel__.arrChar':[
      [{cls:"item blue",tap:"clickBtn",id:"a",val:"a"},
       {cls:"item blue",tap:"clickBtn",id:"b",val:"b"},
       {cls:"item blue",tap:"clickBtn",id:"c",val:"c"},
       {cls:"item blue",tap:"clickBtn",id:"d",val:"d"},
       {cls:"item blue",tap:"clickBtn",id:"e",val:"e"},
       {cls:"item blue",tap:"clickBtn",id:"f",val:"f"},
       {cls:"item blue",tap:"clickBtn",id:"g",val:"g"},
       {cls:"item blue",tap:"clickBtn",id:"h",val:"h"}       
      ],
      [{cls:"item blue",tap:"clickBtn",id:"i",val:"i"},
       {cls:"item blue",tap:"clickBtn",id:"j",val:"j"},
       {cls:"item blue",tap:"clickBtn",id:"k",val:"k"},
       {cls:"item blue",tap:"clickBtn",id:"l",val:"l"},
       {cls:"item blue",tap:"clickBtn",id:"m",val:"m"},
       {cls:"item blue",tap:"clickBtn",id:"n",val:"n"},
       {cls:"item blue",tap:"clickBtn",id:"o",val:"o"},
       {cls:"item blue",tap:"clickBtn",id:"p",val:"p"}  
      ],
      [{cls:"item blue",tap:"clickBtn",id:"q",val:"q"},
       {cls:"item blue",tap:"clickBtn",id:"r",val:"r"},
       {cls:"item blue",tap:"clickBtn",id:"s",val:"s"},
       {cls:"item blue",tap:"clickBtn",id:"t",val:"t"},
       {cls:"item blue",tap:"clickBtn",id:"u",val:"u"},
       {cls:"item blue",tap:"clickBtn",id:"v",val:"v"},
       {cls:"item blue",tap:"clickBtn",id:"w",val:"w"},
       {cls:"item blue",tap:"clickBtn",id:"x",val:"x"}
      ],
      [{cls:"item orange",tap:"clickBtn",id:"del",val:"删除"},
       {cls:"item blue",tap:"clickBtn",id:"y",val:"y"},
       {cls:"item blue",tap:"clickBtn",id:"z",val:"z"},
       {cls:"item orange",tap:"clickBtn",id:"ctn",val:"数字"},
       {cls:"item orange",tap:"clickBtn",id:"finish",val:"完成"}
      ]
    ]            
}
let _compEvent ={
 onkeyword:function(e){
    this.setData({"__lgpanel__.ishidenum":false,"__lgpanel__.ishidechar":true})
  },
  showpwd:function(){
    var arr = this.data.__lgpanel__.arr;
    var data = arr.join("");
    this.setData({"__lgpanel__.screenData":data,"__lgpanel__.pwdhide":false,'__lgpanel__.eyeshow':true,'__lgpanel__.eyehide':false});
  },
  hidepwd:function(){
    var data = this.data.__lgpanel__.screenData;
    //var reg=/[0-9a-z]/g;
    var reg=/[\s\S]/g
    data=data.replace(reg,"*");
    this.setData({"__lgpanel__.screenData":data,"__lgpanel__.pwdhide":true,'__lgpanel__.eyeshow':false,'__lgpanel__.eyehide':true});
  },
  clickBtn:function(event){  
    var id = event.target.id; 
    if(id == this.data.__lgpanel__.idb){  //删除
      var data = this.data.__lgpanel__.screenData;
      data = data.substring(0,data.length-1);
      this.data.__lgpanel__.arr.pop();     
      this.setData({"__lgpanel__.screenData":data});
    }else if(id == this.data.__lgpanel__.idc){  //收回 
      this.setData({"__lgpanel__.ishidenum":true,"__lgpanel__.ishidechar":true})  
    }else if(id == this.data.__lgpanel__.idntc){  //切换到字母
      this.setData({"__lgpanel__.ishidenum":true,"__lgpanel__.ishidechar":false})  
    }else if(id == this.data.__lgpanel__.idctn){  //切换到数字
      this.setData({"__lgpanel__.ishidenum":false,"__lgpanel__.ishidechar":true}) 
    }else{
    var sd = this.data.__lgpanel__.screenData;
        data = sd + id;
        //var reg=/[0-9a-z]/g;
        if(this.data.__lgpanel__.pwdhide == true){
        var reg=/[\s\S]/g;
        data=data.replace(reg,"*");
        }
        var len = data.length;
        if(len>20){
          return
        }
    this.data.__lgpanel__.arr.push(id);
    this.setData({"__lgpanel__.screenData":data});
    }
  }    
}
let loginPannel={
    show:function(data){
        this.__page.setData({'__lgpanel__.isHide': false})
        if (data) {
        Object.assign(this._configs, data)
        }        
    }
}
function LoginPannel () {
    //console.log(_compData)
  // 定义组件的一些回调
  this._configs = {

  }
  // 拿到当前页面对象
  let pages = getCurrentPages()
  let curPage = pages[pages.length - 1]

  // 把组件的事件“合并到”页面对象上
  Object.assign(curPage, _compEvent)

  this.__page = curPage

  // 附加到page上，方便访问

  Object.assign(this, loginPannel)

  curPage.loginPannel = this

  // 把组件的数据“注入”到页面的data对象中
  curPage.setData(_compData)
  //console.log(_compData)

  return this
}

module.exports = {
  LoginPannel
}