webpackJsonp([15],{13:function(t,e){t.exports=libs_7c26364e},633:function(t,e){},634:function(t,e){},754:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a(755)},755:function(t,e,a){"use strict";var o=a(35),n=(a.n(o),a(38)),s=(a.n(n),a(633)),r=(a.n(s),a(634)),i=(a.n(r),a(17)),c=(a(122),a(28)),u=a(26);i.a.use(c.a),new i.a({data:function(){return{subData:{name:"",mo:"",address:"",bak:""},coinAll:"",showslidebox:!1,frontcover:!1,userList:[],listData:[],coinAllCount:[],extraData:[],isShow:0,errMsg:"",tabChange:1,isMove:!1,coinFlag:!1,coinnum:"",leavenum:"",all:"",nowStatus:!1,value:"wcg",currentpage:"",pagenum:"",errorArr:{accStatus:0,pwdStatus:0}}},mounted:function(){Object(u.b)(),this.getRecord(),this.coinAllCountData(),this.getqData(1)},methods:{slideBtn:function(){this.showslidebox=!this.showslidebox,this.frontcover=!this.frontcover},getqData:function(t){this.tabChange=t,"1"==this.tabChange?this.getRecord():this.getExtraMoney()},submit:function(){var t=this;this.coinFlag||(this.coinFlag=!0,this.verify(),this.message_data={type:1,coin:"wcg",number:this.coinnum},this.$http.post("/ajax_more/overToMore",this.message_data).then(function(e){setTimeout(function(){t.coinFlag=!1},1e3),1==e.status&&(t.coinAll=e.data),t.nowStatus=!0,t.errMsg=e.msg,setTimeout(function(){t.nowStatus=!1,t.errMsg="",location.href="/more"},2e3)}).catch(function(e){setTimeout(function(){t.coinFlag=!1},1e3)}))},submitCoinNum:function(){var t=this;this.message_data={type:2,coin:"wcg",number:this.leavenum},this.$http.post("/ajax_more/overToMore",this.message_data).then(function(e){1==e.status?(t.coinAll=e.data,t.nowStatus=!0,t.errMsg=e.msg,t.frontcover=!t.frontcover,t.showslidebox=!t.showslidebox,setTimeout(function(){t.nowStatus=!1,t.errMsg="",location.href="/more"},1500)):(t.nowStatus=!0,t.errMsg=e.msg,t.showslidebox=!t.showslidebox,setTimeout(function(){t.nowStatus=!1,t.errMsg="",location.href="/more"},2e3))}).catch(function(t){})},coinAllCountData:function(){var t=this;this.showRecord=!1,this.message_data={type:"1"},this.$http.post("/ajax_more/getMore",this.message_data).then(function(e){t.coinAllCount=e.data}).catch(function(t){})},getRecord:function(){var t=this;this.showRecord=!1,this.$http.post("/ajax_more/getMoreLog?p=1&coin=wcg").then(function(e){t.listData=e.data.list,t.all=e.data.total%10?parseInt(e.data.total/10)+1:parseInt(e.data.total/10),t.pagenum=0}).catch(function(t){})},getExtraMoney:function(){var t=this;this.showRecord=!1,this.$http.post("/ajax_more/interest?p=1&coin=wcg").then(function(e){t.extraData=e.data.list,t.all=e.data.total%10?parseInt(e.data.total/10)+1:parseInt(e.data.total/10),t.pagenum=0}).catch(function(t){})},getcoindata:function(t){var e=this;this.showRecord=!1,this.$http.post("/ajax_more/getMoreLog?p="+t+"&coin=wcg").then(function(a){e.listData=a.data.list,e.all=a.data.total%10?parseInt(a.data.total/10)+1:parseInt(a.data.total/10),e.pagenum=10*(t-1)}).catch(function(t){})},showFun:function(){this.isShow=1},verify:function(t,e,a){switch(Object.prototype.toString.call(t),Object.prototype.toString.call(e),e){case"num":return t?0==t.length?(this.errorArr.accStatus=0,!1):(this.errorArr.accStatus=1,!0):(this.errorArr.accStatus=1,!1);case"tradepwd":return t?0==t.length?(this.errorArr.pwdStatus=0,!1):(this.errorArr.pwdStatus=1,!0):"submit"===a?(this.errorArr.pwdStatus=1,!1):"focus"===a?(this.errorArr.pwdStatus=1,!1):"enter"===a?(this.errorArr.pwdStatus=2,!1):(this.errorArr.pwdStatus=1,!1)}}},filters:{numFilter:function(t){return parseFloat(t)?parseFloat(t).toFixed(2):0},handTime:function(t){var e=new Date(1e3*t);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+"  "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()}}}).$mount("#more")}},[754]);
//# sourceMappingURL=more.index.02a1fa24430197d7.js.map