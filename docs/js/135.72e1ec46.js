"use strict";(self["webpackChunkwidget_boilerplate"]=self["webpackChunkwidget_boilerplate"]||[]).push([[135],{3135:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"menu-signup"},[e("form",{staticClass:"signup-form",on:{submit:function(t){t.preventDefault()}}},[e("h3",[t._v("회원가입")]),e("CommonInputBox",{staticClass:"item",attrs:{label:"아이디",type:"text"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}}),e("CommonInputBox",{staticClass:"item",attrs:{label:"이름",type:"text"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),e("CommonInputBox",{staticClass:"item",attrs:{label:"비밀번호",type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),e("CommonSelectBox",{staticClass:"item",attrs:{label:"사용자 타입",items:t.typeItems},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}}),e("CommonSelectBox",{staticClass:"item",attrs:{label:"사용자 권한",items:t.authItems},model:{value:t.form.auth,callback:function(e){t.$set(t.form,"auth",e)},expression:"form.auth"}}),e("div",{staticClass:"btn-area"},[e("CommonTextButton",{attrs:{label:"회원가입",color:"primary"},on:{click:t.signup}}),e("CommonTextButton",{attrs:{label:"초기화"},on:{click:t.reset}})],1)],1),t.spinner?e("CommonSpinnerWrapper",[e("CommonSpinner1")],1):t._e()],1)},l=[],s=n(9005),a=n(454),i=function(){var t=this,e=t._self._c;return e("button",{staticClass:"common-text-button",class:t.color,on:{click:function(e){return t.$emit("click")}}},[t._v(" "+t._s(t.label)+" ")])},r=[],m={name:"CommonTextButton",props:{label:String,color:{type:String,required:!1}}},u=m,p=n(3736),c=(0,p.Z)(u,i,r,!1,null,null,null),f=c.exports,d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"common-input-box"},[t.label?e("span",[t._v(t._s(t.label))]):t._e(),e("input",{attrs:{type:t.type},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])},b=[],v={name:"CommonInputBox",props:["value","label","type"]},C=v,g=(0,p.Z)(C,d,b,!1,null,null,null),x=g.exports,h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"common-select-box"},[t.label?e("span",[t._v(t._s(t.label))]):t._e(),e("select",{domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},t._l(t.displayItems,(function(n,o){return e("option",{key:o,domProps:{value:n.value}},[t._v(" "+t._s(n.label)+" ")])})),0)])},S=[],_={name:"CommonSelectBox",props:{value:[String,Number],label:String,items:Array,tempYn:{type:String,default:"Y"},tempLabel:{type:String,default:"선택"}},computed:{displayItems(){const{tempYn:t,tempLabel:e,items:n}=this;return"Y"===t?[{value:"",label:e},...n]:[...n]}}},y=_,I=(0,p.Z)(y,h,S,!1,null,null,null),k=I.exports,B=n(3822),w={name:"WidgetMenuSignup",components:{CommonSpinnerWrapper:s.Z,CommonSpinner1:a.Z,CommonTextButton:f,CommonInputBox:x,CommonSelectBox:k},props:{compoId:{type:String,required:!0}},computed:{...(0,B.Se)({widgetList:"WidgetManager/getWidgetList"}),spinner(){const t=this.widgetList.find((t=>t.id===this.compoId));return t.spinner}},data:()=>({typeItems:[{value:"101",label:"관리자"},{value:"102",label:"일반사용자"}],authItems:[{value:"101",label:"시스템관리자"},{value:"102",label:"일반사용자"}],form:{id:"",password:"",name:"",type:"",auth:""}}),methods:{...(0,B.nv)({offSpinner:"WidgetManager/offSpinner",onSpinner:"WidgetManager/onSpinner"}),signup(){console.log(this.form),this.onSpinner(this.compoId),setTimeout((()=>{this.offSpinner(this.compoId)}),3e3)},reset(){const t=this.$options.data();this.form={...t.form}}}},$=w,W=(0,p.Z)($,o,l,!1,null,null,null),Z=W.exports}}]);
//# sourceMappingURL=135.72e1ec46.js.map