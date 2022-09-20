(function(){"use strict";var t={86:function(t,e,i){i.d(e,{My:function(){return s},ZB:function(){return o},lw:function(){return n},ot:function(){return a}});const n={version:"0.1.0(beta)",title:"WidgetBoilerplate"},o={MIN_WIDTH:300,MIN_HEIGHT:300,DRAG_HANDLE:".widget-drag-handle",HEADER_HEIGHT:36,MENU_PREFIX:"Wm"},s={ALERT:1,CONFIRM:2},a={TIMEOUT:5e3,TYPE:{OK:1,INFO:2,WARNING:3,DANGER:4,CLASS:{1:"ok",2:"info",3:"warning",4:"danger"},ICON:{1:"circle-check",2:"circle-info",3:"triangle-exclamation",4:"circle-xmark"}}}},7447:function(t,e,i){var n=i(6369),o=i(3494),s=i(8539),a=i(7749);o.vI.add(s.IQi,s.g82,s.HHh,s.AL,s.gr5,s.$aW,s.Uu6,s.I4f,s.wEO,s.fV7,s.DBf,s.ik8,s.WA2),n.ZP.component("font-awesome-icon",a.GN);var r=i(3822);const d=[{title:"Signup",compoName:"Signup"},{title:"Grid",compoName:"Grid"},{title:"Tree",compoName:"Tree"},{title:"Card",compoName:"Card",spinner:!0},{title:"TextEllipsisTitleTest_ABCDE",compoName:"TextEllipsisTitleTest",isOnlyOne:!0},{parentMenuId:"0",menuId:"1",sortSqnc:1,title:"사용자 관리",compoName:null,isMenu:!1,menuList:[{parentMenuId:"1",menuId:"101",title:"사용자 추가",compoName:"AddUser",isMenu:!0}]}],c={widgetMenuList:[...d]},u={getWidgetMenuList(t){return t.widgetMenuList}},l={setWidgetMenuList(t,e){t.widgetMenuList=[...e]}},g={};var m={namespaced:!0,state:c,getters:u,mutations:l,actions:g},p=i(86);const f=()=>(new Date).getTime().toString(),h={widgetList:T()||[],widgetPosition:{x:10,y:10},isParent:!0},w={getWidgetList(t){return t.widgetList},getWidgetById:t=>e=>t.widgetList.find((t=>t.id===e)),getMaxZindexId(t){const e=y(t),i=t.widgetList.find((t=>t.zindex===e));return i?i.id:null},getIsParent(t){return t.isParent},getWidgetPosition(t){return t.widgetPosition}},v={initWidgetList(t){t.widgetList=[]},initWidgetPosition(t){t.widgetPosition={x:10,y:10}},setNextWidgetPosition(t){const{x:e,y:i}=t.widgetPosition;t.widgetPosition.x=e+10,t.widgetPosition.y=i+10},addWidget(t,e){t.widgetList.push({w:300,h:300,isOnlyOne:!1,isFullSize:!1,isMinimize:!1,isWindowPopup:!1,isAutoSize:!0,spinner:!1,...e,dialog:{show:!1,type:null,title:null,message:null,callback:null},id:f(),zindex:b(t),x:t.widgetPosition.x,y:t.widgetPosition.y})},setWidget(t,{id:e,...i}){const n=t.widgetList.find((t=>t.id===e));Object.keys(i).forEach((t=>{n[t]=i[t]}))},delWidget(t,{id:e}){const i=t.widgetList.findIndex((t=>t.id===e));t.widgetList.splice(i,1)},saveBfPositionAndSize(t,{id:e}){const i=t.widgetList.find((t=>t.id===e)),{x:n,y:o,w:s,h:a}=i;i.bfX=n,i.bfY=o,i.bfW=s,i.bfH=a},setIsParent(t,e){t.isParent=e},setSpinner(t,{id:e,spinner:i}){const n=t.widgetList.find((t=>t.id===e));n.spinner=i},setDialog(t,{id:e,...i}){const n=t.widgetList.find((t=>t.id===e));n.dialog={...i}}},W={createWidget({state:t,commit:e,dispatch:i},{title:o,compoName:s,compoData:a,isOnlyOne:r}){s?(C(r,s,t,i),e("addWidget",{title:o,compoName:s,compoData:a,isOnlyOne:r}),e("setNextWidgetPosition")):n.ZP.toast.danger(`${o} 메뉴에 등록된 위젯 컴포넌트가 없습니다.`)},sortWidgetZindex({state:t,commit:e},i){const n=y(t),o=t.widgetList.find((t=>t.zindex===n)).id;if(i===o)return;const s=t.widgetList.find((t=>t.id===i)).zindex;e("setWidget",{id:i,zindex:n});const a=t.widgetList.filter((t=>t.id!==i&&t.zindex>s));for(const r of a)e("setWidget",{id:r.id,zindex:r.zindex-1})},sortWidgetZindexReverse({state:t,commit:e},i){const n=x(t),o=t.widgetList.find((t=>t.zindex===n)).id;if(i===o)return;const s=t.widgetList.find((t=>t.id===i)).zindex;e("setWidget",{id:i,zindex:n});const a=t.widgetList.filter((t=>t.id!==i&&t.zindex<s));for(const r of a)e("setWidget",{id:r.id,zindex:r.zindex+1})},closeWidget({commit:t},e){const i=h.widgetList.find((t=>t.id===e)).zindex;t("delWidget",{id:e});const n=h.widgetList.filter((t=>t.zindex>i));for(const o of n)t("setWidget",{id:o.id,zindex:o.zindex-1})},fullSizingWidget({commit:t,dispatch:e},{id:i,w:n,h:o}){e("sortWidgetZindex",i),t("saveBfPositionAndSize",{id:i}),t("setWidget",{id:i,w:n,h:o,isFullSize:!0,isMinimize:!1,x:0,y:0})},async smallSizingWidget({state:t,commit:e,dispatch:i},n){i("sortWidgetZindex",n);const{bfX:o,bfY:s,bfW:a,bfH:r}=M(t,n);await e("setWidget",{id:n,isFullSize:!1,w:a,h:r}),await e("setWidget",{id:n,x:o,y:s})},updateWidgetPosition({commit:t,dispatch:e},{id:i,x:n,y:o}){e("sortWidgetZindex",i),t("setWidget",{id:i,x:n,y:o})},updateWidgetSize({commit:t,dispatch:e},{id:i,w:n,h:o}){e("sortWidgetZindex",i),t("setWidget",{id:i,w:n,h:o})},updateWidgetSizeAndPosition({commit:t,dispatch:e},{id:i,x:n,y:o,w:s,h:a}){e("sortWidgetZindex",i),t("setWidget",{id:i,x:n,y:o,w:s,h:a})},async updateWidgetSidePosition({commit:t,dispatch:e},{id:i,x:n,y:o,w:s,h:a}){e("sortWidgetZindex",i),await t("setWidget",{id:i,isFullSize:!1,x:0,y:0,w:s,h:a}),await t("setWidget",{id:i,x:n,y:o})},minimizingWidget({commit:t},e){t("setWidget",{id:e,isMinimize:!0})},cancelMinimizingWidget({commit:t,dispatch:e},i){e("sortWidgetZindex",i),t("setWidget",{id:i,isMinimize:!1})},toggleMinimizingWidget({state:t,dispatch:e},i){const n=y(t),o=t.widgetList.find((t=>t.id===i)),{isMinimize:s,zindex:a}=o;if(n!==a)return e("sortWidgetZindex",i),void e("cancelMinimizingWidget",i);e(s?"cancelMinimizingWidget":"minimizingWidget",i)},initWidget({commit:t}){t("initWidgetList"),t("initWidgetPosition")},toggleWidgetParent({state:t,commit:e}){e("setIsParent",!t.isParent)},onSpinner({commit:t},e){t("setSpinner",{id:e,spinner:!0})},offSpinner({commit:t},e){t("setSpinner",{id:e,spinner:!1})},openAlertDialog({commit:t},{id:e,title:i,message:n,callback:o}){t("setDialog",{id:e,show:!0,type:p.My.ALERT,title:i,message:n,callback:o})},openConfirmDialog({commit:t},{id:e,title:i,message:n,callback:o}){t("setDialog",{id:e,show:!0,type:p.My.CONFIRM,title:i,message:n,callback:o})},closeDialog({commit:t},e){t("setDialog",{id:e,show:!1,type:null,title:null,message:null,callback:null})},saveCurrentWidgetListToSession({state:t}){const e=JSON.stringify(t.widgetList);sessionStorage.setItem("widgetList",e)}};function y(t){const e=t.widgetList.map((t=>t.zindex));return e.length?Math.max(...e):0}function b(t){return y(t)+1}function x(t){const e=t.widgetList.map((t=>t.zindex));return e.length?Math.min(...e):0}function M(t,e){const i=t.widgetList.find((t=>t.id===e)),{bfX:n,bfY:o,bfW:s,bfH:a}=i;return{bfX:n,bfY:o,bfW:s,bfH:a}}function T(){const t=JSON.parse(sessionStorage.getItem("widgetList"));return t}function C(t,e,i,n){if(t){const t=i.widgetList.find((t=>t.compoName===e));t&&n("closeWidget",t.id)}}var P={namespaced:!0,state:h,getters:w,mutations:v,actions:W};const L={widgetManagerConfig:!1},S={getWidgetManagerConfig(t){return t.widgetManagerConfig}},_={setWidgetManagerConfig(t,e){t.widgetManagerConfig=e}},N={openWidgetManagerConfig({commit:t}){t("setWidgetManagerConfig",!0)},closeWidgetManagerConfig({commit:t}){t("setWidgetManagerConfig",!1)}};var k={namespaced:!0,state:L,getters:S,mutations:_,actions:N};const z={toastList:[],timeout:p.ot.TIMEOUT},I={getToastList(t){return t.toastList}},O={addToast(t,e){t.toastList.push({...e,id:f()})},delToast(t){t.toastList.shift()}},E={createToast({state:t,commit:e},{message:i,type:n}){e("addToast",{message:i,type:n}),Z(e,t.timeout)}};function Z(t,e){setTimeout((()=>{t("delToast")}),e)}var A={namespaced:!0,state:z,getters:I,mutations:O,actions:E};n.ZP.use(r.ZP);var D=new r.ZP.Store({modules:{Menu:m,WidgetManager:P,Popup:k,Toast:A}}),H={install(t){const e={alert(t,e,i){return new Promise((n=>{D.dispatch("WidgetManager/openAlertDialog",{id:t,title:i||"알림",message:e,callback:n})}))},confirm(t,e,i){return new Promise((n=>{D.dispatch("WidgetManager/openConfirmDialog",{id:t,title:i||"알림",message:e,callback:n})}))},spinner:{on(t){D.dispatch("WidgetManager/onSpinner",t)},off(t){D.dispatch("WidgetManager/offSpinner",t)}}};t.widget=e,t.prototype.$widget=e}},B={install(t){const e={add(t,e){D.dispatch("Toast/createToast",{type:t,message:e})},ok(t){D.dispatch("Toast/createToast",{type:p.ot.TYPE.OK,message:t})},info(t){D.dispatch("Toast/createToast",{type:p.ot.TYPE.INFO,message:t})},warning(t){D.dispatch("Toast/createToast",{type:p.ot.TYPE.WARNING,message:t})},danger(t){D.dispatch("Toast/createToast",{type:p.ot.TYPE.DANGER,message:t})}};t.toast=e,t.prototype.$toast=e}};n.ZP.use(H),n.ZP.use(B);var F=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("DynamicLayout"),e("ToastManager")],1)},j=[],R=function(){var t=this,e=t._self._c;return e(t.layoutName,{tag:"component"})},Y=[],G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"no-layout"},[e("router-view"),t._v(" No Layout ")],1)},$=[],q={name:"NoLayout"},U=q,X=i(3736),K=(0,X.Z)(U,G,$,!1,null,null,null),V=K.exports,J=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-layout"},[e("MainHeader"),e("router-view"),e("WidgetManagerConfigPopup")],1)},Q=[],tt=function(){var t=this,e=t._self._c;return e("header",{staticClass:"main-header"},[e("ul",{staticClass:"left-section"},t._l(t.widgetMenuList,(function(i,n){return e("li",{key:n,staticClass:"nav-menu",on:{click:function(e){return t.createWidget(i)}}},[e("span",[t._v(t._s(i.title))])])})),0),e("section",{staticClass:"right-section"},[e("button",{attrs:{title:"위젯설정"},on:{click:t.openWidgetManagerConfigPopup}},[e("font-awesome-icon",{attrs:{icon:"gear"}})],1)])])},et=[],it={name:"MainHeader",computed:{...(0,r.Se)({widgetMenuList:"Menu/getWidgetMenuList"})},methods:{...(0,r.nv)({createWidgetAction:"WidgetManager/createWidget",openWidgetManagerConfigPopup:"Popup/openWidgetManagerConfig"}),createWidget(t){this.createWidgetAction(t)}}},nt=it,ot=(0,X.Z)(nt,tt,et,!1,null,null,null),st=ot.exports,at=function(){var t=this,e=t._self._c;return t.isOpen?e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"popup-background"},[e("div",{staticClass:"widget-config-popup"},[e("section",{staticClass:"header"},[e("p",[t._v("위젯 설정")]),e("button",{on:{click:t.closePopup}},[e("font-awesome-icon",{attrs:{icon:"xmark"}})],1)]),e("section",{staticClass:"body"},[e("div",{staticClass:"row between"},[e("p",[t._v("위젯 화면 이동 제한 여부")]),e("CommonToggle",{attrs:{value:t.isParent},on:{click:function(e){return t.toggleWidgetParent(!t.isParent)}}})],1),e("div",{staticClass:"row between"},[e("p",[t._v("위젯 로컬 저장")]),e("CommonIconButton",{attrs:{icon:"cloud-arrow-up"},on:{click:t.saveCurrentWidgetListToSession}})],1),e("div",{staticClass:"row between"},[e("p",[t._v("위젯 전체 삭제")]),e("CommonIconButton",{attrs:{icon:"trash",color:"red"},on:{click:t.initWidget}})],1)]),e("section",{staticClass:"version"},[e("span",[t._v("version "+t._s(t.appVersion))])])])])]):t._e()},rt=[],dt=function(){var t=this,e=t._self._c;return e("button",{staticClass:"common-toggle-button",class:{active:t.value},on:{click:function(e){return t.$emit("click",!t.value)}}},[t._v(" "+t._s(t.buttonText)+" ")])},ct=[],ut={name:"CommonToggle",props:{value:{type:Boolean,required:!0},activeText:{type:String,default:"ON"},passiveText:{type:String,default:"OFF"}},computed:{buttonText(){return this.value?this.activeText:this.passiveText}}},lt=ut,gt=(0,X.Z)(lt,dt,ct,!1,null,null,null),mt=gt.exports,pt=function(){var t=this,e=t._self._c;return e("button",{staticClass:"common-icon-button",class:t.color,on:{click:function(e){return t.$emit("click")}}},[e("font-awesome-icon",{attrs:{icon:t.icon}})],1)},ft=[],ht={name:"CommonIconButton",props:{icon:{type:String,required:!0},color:{type:String,required:!1}}},wt=ht,vt=(0,X.Z)(wt,pt,ft,!1,null,null,null),Wt=vt.exports,yt={name:"WidgetManagerConfigPopup",components:{CommonToggle:mt,CommonIconButton:Wt},computed:{...(0,r.Se)({isOpen:"Popup/getWidgetManagerConfig",isParent:"WidgetManager/getIsParent"}),appVersion(){return p.lw.version}},methods:{...(0,r.nv)({closePopup:"Popup/closeWidgetManagerConfig",toggleWidgetParent:"WidgetManager/toggleWidgetParent",saveCurrentWidgetListToSession:"WidgetManager/saveCurrentWidgetListToSession",initWidget:"WidgetManager/initWidget"})}},bt=yt,xt=(0,X.Z)(bt,at,rt,!1,null,"6b0bbdaa",null),Mt=xt.exports,Tt={name:"MainLayout",components:{MainHeader:st,WidgetManagerConfigPopup:Mt}},Ct=Tt,Pt=(0,X.Z)(Ct,J,Q,!1,null,null,null),Lt=Pt.exports,St={name:"DynamicLayout",components:{NoLayout:V,MainLayout:Lt},computed:{layoutName(){const t=this.$route.meta.layout||"No";return t+"Layout"}}},_t=St,Nt=(0,X.Z)(_t,R,Y,!1,null,null,null),kt=Nt.exports,zt=function(){var t=this,e=t._self._c;return e("transition-group",{staticClass:"toast-manager",attrs:{name:"slide-up",tag:"ul"}},t._l(t.toastList,(function(i){return e("ToastItem",t._b({key:i.id,staticClass:"slide-up-item"},"ToastItem",i,!1))})),1)},It=[],Ot=function(){var t=this,e=t._self._c;return e("li",{staticClass:"toast-item",class:t.typeClass},[e("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.typeIcon}}),e("span",[t._v(t._s(t.message))])],1)},Et=[],Zt={name:"ToastItem",props:{message:String,type:Number},computed:{typeClass(){const t=this.type;return p.ot.TYPE.CLASS[t]},typeIcon(){const t=this.type;return p.ot.TYPE.ICON[t]}}},At=Zt,Dt=(0,X.Z)(At,Ot,Et,!1,null,null,null),Ht=Dt.exports,Bt={name:"ToastManager",components:{ToastItem:Ht},computed:{...(0,r.Se)({toastList:"Toast/getToastList"})}},Ft=Bt,jt=(0,X.Z)(Ft,zt,It,!1,null,null,null),Rt=jt.exports,Yt={components:{DynamicLayout:kt,ToastManager:Rt}},Gt=Yt,$t=(0,X.Z)(Gt,F,j,!1,null,null,null),qt=$t.exports,Ut=i(2631);n.ZP.use(Ut.ZP);const Xt=[{path:"/",name:"main",meta:{layout:"Main"},component:()=>i.e(179).then(i.bind(i,7179))}],Kt=new Ut.ZP({routes:Xt});var Vt=Kt;n.ZP.config.productionTip=!1,new n.ZP({router:Vt,store:D,render:t=>t(qt)}).$mount("#app")}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,n,o,s){if(!n){var a=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],s=t[u][2];for(var r=!0,d=0;d<n.length;d++)(!1&s||a>=s)&&Object.keys(i.O).every((function(t){return i.O[t](n[d])}))?n.splice(d--,1):(r=!1,s<a&&(a=s));if(r){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,o,s]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.f={},i.e=function(t){return Promise.all(Object.keys(i.f).reduce((function(e,n){return i.f[n](t,e),e}),[]))}}(),function(){i.u=function(t){return"js/"+t+"."+{179:"e9224fb6",319:"64214599",360:"f9875a10",787:"8954d0c3",973:"d9064a05"}[t]+".js"}}(),function(){i.miniCssF=function(t){return"css/"+t+"."+{179:"1a9178e0",360:"d3d13522"}[t]+".css"}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="widget-boilerplate:";i.l=function(n,o,s,a){if(t[n])t[n].push(o);else{var r,d;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var l=c[u];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==e+s){r=l;break}}r||(d=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,i.nc&&r.setAttribute("nonce",i.nc),r.setAttribute("data-webpack",e+s),r.src=n),t[n]=[o];var g=function(e,i){r.onerror=r.onload=null,clearTimeout(m);var o=t[n];if(delete t[n],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(t){return t(i)})),e)return e(i)},m=setTimeout(g.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=g.bind(null,r.onerror),r.onload=g.bind(null,r.onload),d&&document.head.appendChild(r)}}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/vue-widget-boilerplate/"}(),function(){var t=function(t,e,i,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(s){if(o.onerror=o.onload=null,"load"===s.type)i();else{var a=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.href||e,d=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=r,o.parentNode.removeChild(o),n(d)}};return o.onerror=o.onload=s,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var o=i[n],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===t||s===e))return o}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){o=a[n],s=o.getAttribute("data-href");if(s===t||s===e)return o}},n=function(n){return new Promise((function(o,s){var a=i.miniCssF(n),r=i.p+a;if(e(a,r))return o();t(n,r,o,s)}))},o={143:0};i.f.miniCss=function(t,e){var i={179:1,360:1};o[t]?e.push(o[t]):0!==o[t]&&i[t]&&e.push(o[t]=n(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};i.f.j=function(e,n){var o=i.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var s=new Promise((function(i,n){o=t[e]=[i,n]}));n.push(o[2]=s);var a=i.p+i.u(e),r=new Error,d=function(n){if(i.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;r.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",r.name="ChunkLoadError",r.type=s,r.request=a,o[1](r)}};i.l(a,d,"chunk-"+e,e)}},i.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,s,a=n[0],r=n[1],d=n[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(o in r)i.o(r,o)&&(i.m[o]=r[o]);if(d)var u=d(i)}for(e&&e(n);c<a.length;c++)s=a[c],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(u)},n=self["webpackChunkwidget_boilerplate"]=self["webpackChunkwidget_boilerplate"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(7447)}));n=i.O(n)})();
//# sourceMappingURL=app.f135e506.js.map