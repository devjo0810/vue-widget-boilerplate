(function(){"use strict";var t={2167:function(t,e,i){var n=i(6369),o=i(3494),r=i(8539),s=i(7749);o.vI.add(r.IQi,r.g82,r.HHh,r.AL,r.gr5,r.$aW),n.ZP.component("font-awesome-icon",s.GN);var a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("DynamicLayout")],1)},d=[],c=function(){var t=this,e=t._self._c;return e(t.layoutName,{tag:"component"})},u=[],g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"no-layout"},[e("router-view"),t._v(" No Layout ")],1)},l=[],f={name:"NoLayout"},m=f,p=i(3736),v=(0,p.Z)(m,g,l,!1,null,null,null),h=v.exports,W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-layout"},[e("MainHeader"),e("router-view"),e("WidgetManagerConfigPopup")],1)},w=[],y=function(){var t=this,e=t._self._c;return e("header",{staticClass:"main-header"},[e("ul",{staticClass:"left-section"},t._l(t.widgetMenuList,(function(i,n){return e("li",{key:n,on:{click:function(e){return t.createWidget(i)}}},[e("span",[t._v(t._s(i.title))])])})),0),e("section",{staticClass:"right-section"},[e("button",{on:{click:t.openWidgetManagerConfigPopup}},[e("font-awesome-icon",{attrs:{icon:"gear"}})],1)])])},x=[],b=i(3822),P={name:"MainHeader",computed:{...(0,b.Se)({widgetMenuList:"Menu/getWidgetMenuList"})},methods:{...(0,b.nv)({createWidgetAction:"WidgetManager/createWidget",openWidgetManagerConfigPopup:"Popup/openWidgetManagerConfig"}),createWidget(t){this.createWidgetAction(t)}}},M=P,C=(0,p.Z)(M,y,x,!1,null,null,null),L=C.exports,z=function(){var t=this,e=t._self._c;return t.isOpen?e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"popup-background"},[e("div",{staticClass:"widget-config-popup"},[e("section",{staticClass:"header"},[e("p",[t._v("위젯 설정")]),e("button",{on:{click:t.closePopup}},[e("font-awesome-icon",{attrs:{icon:"xmark"}})],1)]),e("section",{staticClass:"body"},[e("div",{staticClass:"row between"},[e("p",[t._v("위젯 화면 이동 제한 여부")]),e("CommonToggle",{attrs:{value:t.isParent},on:{click:function(e){return t.toggleWidgetParent(!t.isParent)}}})],1),e("div",{staticClass:"row between"},[e("p",[t._v("위젯 전체 삭제")]),e("CommonIconButton",{attrs:{icon:"trash",color:"red"},on:{click:t.initWidget}})],1)])])])]):t._e()},_=[],S=function(){var t=this,e=t._self._c;return e("button",{staticClass:"common-toggle-button",class:{active:t.value},on:{click:function(e){return t.$emit("click",!t.value)}}},[t._v(" "+t._s(t.buttonText)+" ")])},k=[],T={name:"CommonToggle",props:{value:{type:Boolean,required:!0},activeText:{type:String,default:"ON"},passiveText:{type:String,default:"OFF"}},computed:{buttonText(){return this.value?this.activeText:this.passiveText}}},O=T,Z=(0,p.Z)(O,S,k,!1,null,null,null),N=Z.exports,A=function(){var t=this,e=t._self._c;return e("button",{staticClass:"common-icon-button",class:t.color,on:{click:function(e){return t.$emit("click")}}},[e("font-awesome-icon",{attrs:{icon:t.icon}})],1)},E=[],j={name:"CommonIconButton",props:{icon:{type:String,required:!0},color:{type:String,required:!1}}},I=j,B=(0,p.Z)(I,A,E,!1,null,null,null),H=B.exports,F={name:"WidgetManagerConfigPopup",components:{CommonToggle:N,CommonIconButton:H},computed:{...(0,b.Se)({isOpen:"Popup/getWidgetManagerConfig",isParent:"WidgetManager/getIsParent"})},methods:{...(0,b.nv)({closePopup:"Popup/closeWidgetManagerConfig",toggleWidgetParent:"WidgetManager/toggleWidgetParent",initWidget:"WidgetManager/initWidget"})}},D=F,q=(0,p.Z)(D,z,_,!1,null,"f5e1e12c",null),$=q.exports,X={name:"MainLayout",components:{MainHeader:L,WidgetManagerConfigPopup:$}},Y=X,G=(0,p.Z)(Y,W,w,!1,null,null,null),K=G.exports,Q={name:"DynamicLayout",components:{NoLayout:h,MainLayout:K},computed:{layoutName(){const t=this.$route.meta.layout||"No";return t+"Layout"}}},R=Q,U=(0,p.Z)(R,c,u,!1,null,null,null),J=U.exports,V={components:{DynamicLayout:J}},tt=V,et=(0,p.Z)(tt,a,d,!1,null,"0ae0be3e",null),it=et.exports,nt=i(2631);n.ZP.use(nt.ZP);const ot=[{path:"/",name:"main",meta:{layout:"Main"},component:()=>i.e(231).then(i.bind(i,1231))}],rt=new nt.ZP({routes:ot});var st=rt;const at=[{title:"Signup",compoName:"Signup",w:500,h:400},{title:"Grid",compoName:"Grid"},{title:"Tree",compoName:"Tree"},{title:"Card",compoName:"Card",spinner:!0},{title:"TextEllipsisTitleTest_ABCDE",compoName:"TextEllipsisTitleTest",isOnlyOne:!0}],dt={widgetMenuList:[...at]},ct={getWidgetMenuList(t){return t.widgetMenuList}},ut={setWidgetMenuList(t,e){t.widgetMenuList=[...e]}},gt={};var lt={namespaced:!0,state:dt,getters:ct,mutations:ut,actions:gt};const ft={widgetList:[],widgetPosition:{x:10,y:10},isParent:!0},mt={getWidgetList(t){return t.widgetList},getWidgetById:t=>e=>t.widgetList.find((t=>t.id===e)),getMaxZindexId(t){const e=Wt(t),i=t.widgetList.find((t=>t.zindex===e));return i?i.id:null},getIsParent(t){return t.isParent},getWidgetPosition(t){return t.widgetPosition}},pt={initWidgetList(t){t.widgetList=[]},initWidgetPosition(t){t.widgetPosition={x:10,y:10}},setNextWidgetPosition(t){const{x:e,y:i}=t.widgetPosition;t.widgetPosition.x=e+10,t.widgetPosition.y=i+10},addWidget(t,e){t.widgetList.push({w:300,h:300,isOnlyOne:!1,isFullSize:!1,isMinimize:!1,isWindowPopup:!1,spinner:!1,...e,id:ht(),zindex:wt(t),x:t.widgetPosition.x,y:t.widgetPosition.y})},setWidget(t,{id:e,...i}){const n=t.widgetList.find((t=>t.id===e));Object.keys(i).forEach((t=>{n[t]=i[t]}))},delWidget(t,{id:e}){const i=t.widgetList.findIndex((t=>t.id===e));t.widgetList.splice(i,1)},saveBfPositionAndSize(t,{id:e}){const i=t.widgetList.find((t=>t.id===e)),{x:n,y:o,w:r,h:s}=i;i.bfX=n,i.bfY=o,i.bfW=r,i.bfH=s},setIsParent(t,e){t.isParent=e},setSpinner(t,{id:e,spinner:i}){const n=t.widgetList.find((t=>t.id===e));n.spinner=i}},vt={createWidget({state:t,commit:e,dispatch:i},n){const{isOnlyOne:o,compoName:r}=n;if(o){const e=t.widgetList.find((t=>t.compoName===r));e&&i("closeWidget",e.id)}e("addWidget",n),e("setNextWidgetPosition")},sortWidgetZindex({state:t,commit:e},i){const n=Wt(t),o=t.widgetList.find((t=>t.zindex===n)).id;if(i===o)return;const r=t.widgetList.find((t=>t.id===i)).zindex;e("setWidget",{id:i,zindex:n});const s=t.widgetList.filter((t=>t.id!==i&&t.zindex>r));for(const a of s)e("setWidget",{id:a.id,zindex:a.zindex-1})},sortWidgetZindexReverse({state:t,commit:e},i){const n=yt(t),o=t.widgetList.find((t=>t.zindex===n)).id;if(i===o)return;const r=t.widgetList.find((t=>t.id===i)).zindex;e("setWidget",{id:i,zindex:n});const s=t.widgetList.filter((t=>t.id!==i&&t.zindex<r));for(const a of s)e("setWidget",{id:a.id,zindex:a.zindex+1})},closeWidget({commit:t},e){const i=ft.widgetList.find((t=>t.id===e)).zindex;t("delWidget",{id:e});const n=ft.widgetList.filter((t=>t.zindex>i));for(const o of n)t("setWidget",{id:o.id,zindex:o.zindex-1})},fullSizingWidget({commit:t,dispatch:e},{id:i,w:n,h:o}){e("sortWidgetZindex",i),t("saveBfPositionAndSize",{id:i}),t("setWidget",{id:i,w:n,h:o,isFullSize:!0,isMinimize:!1,x:0,y:0})},smallSizingWidget({state:t,commit:e,dispatch:i},n){i("sortWidgetZindex",n);const{bfX:o,bfY:r,bfW:s,bfH:a}=xt(t,n);e("setWidget",{id:n,isFullSize:!1,x:o,y:r,w:s,h:a})},updateWidgetPosition({commit:t,dispatch:e},{id:i,x:n,y:o}){e("sortWidgetZindex",i),t("setWidget",{id:i,x:n,y:o})},updateWidgetSize({commit:t,dispatch:e},{id:i,x:n,y:o,w:r,h:s}){e("sortWidgetZindex",i),t("setWidget",{id:i,x:n,y:o,w:r,h:s})},minimizingWidget({commit:t},e){t("setWidget",{id:e,isMinimize:!0})},cancelMinimizingWidget({commit:t,dispatch:e},i){e("sortWidgetZindex",i),t("setWidget",{id:i,isMinimize:!1})},toggleMinimizingWidget({state:t,dispatch:e},i){const n=Wt(t),o=t.widgetList.find((t=>t.id===i)),{isMinimize:r,zindex:s}=o;if(n!==s)return e("sortWidgetZindex",i),void e("cancelMinimizingWidget",i);e(r?"cancelMinimizingWidget":"minimizingWidget",i)},onSpinner({commit:t},e){t("setSpinner",{id:e,spinner:!0})},offSpinner({commit:t},e){t("setSpinner",{id:e,spinner:!1})},initWidget({commit:t}){t("initWidgetList"),t("initWidgetPosition")},toggleWidgetParent({state:t,commit:e}){e("setIsParent",!t.isParent)}};function ht(){return(new Date).getTime().toString()}function Wt(t){const e=t.widgetList.map((t=>t.zindex));return e.length?Math.max(...e):0}function wt(t){return Wt(t)+1}function yt(t){const e=t.widgetList.map((t=>t.zindex));return e.length?Math.min(...e):0}function xt(t,e){const i=t.widgetList.find((t=>t.id===e)),{bfX:n,bfY:o,bfW:r,bfH:s}=i;return{bfX:n,bfY:o,bfW:r,bfH:s}}var bt={namespaced:!0,state:ft,getters:mt,mutations:pt,actions:vt};const Pt={widgetManagerConfig:!1},Mt={getWidgetManagerConfig(t){return t.widgetManagerConfig}},Ct={setWidgetManagerConfig(t,e){t.widgetManagerConfig=e}},Lt={openWidgetManagerConfig({commit:t}){t("setWidgetManagerConfig",!0)},closeWidgetManagerConfig({commit:t}){t("setWidgetManagerConfig",!1)}};var zt={namespaced:!0,state:Pt,getters:Mt,mutations:Ct,actions:Lt};n.ZP.use(b.ZP);var _t=new b.ZP.Store({modules:{Menu:lt,WidgetManager:bt,Popup:zt}});n.ZP.config.productionTip=!1,new n.ZP({router:st,store:_t,render:t=>t(it)}).$mount("#app")}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,n,o,r){if(!n){var s=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],r=t[u][2];for(var a=!0,d=0;d<n.length;d++)(!1&r||s>=r)&&Object.keys(i.O).every((function(t){return i.O[t](n[d])}))?n.splice(d--,1):(a=!1,r<s&&(s=r));if(a){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,o,r]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.f={},i.e=function(t){return Promise.all(Object.keys(i.f).reduce((function(e,n){return i.f[n](t,e),e}),[]))}}(),function(){i.u=function(t){return"js/"+t+"."+{231:"cd69ff9d",639:"4504ee8e",910:"c3199975",927:"12746c96"}[t]+".js"}}(),function(){i.miniCssF=function(t){return"css/"+t+"."+{231:"8c061b9e",927:"cf0ada32"}[t]+".css"}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="widget-boilerplate:";i.l=function(n,o,r,s){if(t[n])t[n].push(o);else{var a,d;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var g=c[u];if(g.getAttribute("src")==n||g.getAttribute("data-webpack")==e+r){a=g;break}}a||(d=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",e+r),a.src=n),t[n]=[o];var l=function(e,i){a.onerror=a.onload=null,clearTimeout(f);var o=t[n];if(delete t[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(i)})),e)return e(i)},f=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),d&&document.head.appendChild(a)}}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/"}(),function(){var t=function(t,e,i,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(r){if(o.onerror=o.onload=null,"load"===r.type)i();else{var s=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.href||e,d=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=s,d.request=a,o.parentNode.removeChild(o),n(d)}};return o.onerror=o.onload=r,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var o=i[n],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===t||r===e))return o}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){o=s[n],r=o.getAttribute("data-href");if(r===t||r===e)return o}},n=function(n){return new Promise((function(o,r){var s=i.miniCssF(n),a=i.p+s;if(e(s,a))return o();t(n,a,o,r)}))},o={143:0};i.f.miniCss=function(t,e){var i={231:1,927:1};o[t]?e.push(o[t]):0!==o[t]&&i[t]&&e.push(o[t]=n(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};i.f.j=function(e,n){var o=i.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(i,n){o=t[e]=[i,n]}));n.push(o[2]=r);var s=i.p+i.u(e),a=new Error,d=function(n){if(i.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",a.name="ChunkLoadError",a.type=r,a.request=s,o[1](a)}};i.l(s,d,"chunk-"+e,e)}},i.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,r,s=n[0],a=n[1],d=n[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(d)var u=d(i)}for(e&&e(n);c<s.length;c++)r=s[c],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(u)},n=self["webpackChunkwidget_boilerplate"]=self["webpackChunkwidget_boilerplate"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(2167)}));n=i.O(n)})();
//# sourceMappingURL=app.181052ab.js.map