(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{314:function(t,e,r){"use strict";var n=r(228);e.a=n.a},482:function(t,e,r){"use strict";var n=r(490),o=r(474),l=r(213),c=r(67),d=r(29),v=r(28),h=r(37),m=r(24),f=r(41),_=r(7),y=(r(13),r(4),r(75),r(83));function x(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(x=function(){return!!t})()}var O=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(_.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},j=function(t){function e(){return Object(v.a)(this,e),t=this,r=e,n=arguments,r=Object(m.a)(r),Object(h.a)(t,x()?Reflect.construct(r,n||[],Object(m.a)(t).constructor):r.apply(t,n));var t,r,n}return Object(f.a)(e,t),Object(d.a)(e)}(y.Vue);O([Object(y.Prop)({required:!0})],j.prototype,"items",void 0);var w=j=O([y.Component],j),k=r(76),component=Object(k.a)(w,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(c.a,{attrs:{color:"grey lighten-2"}},[e(o.a,{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[e(n.a,{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[e(l.a,[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.a=component.exports},484:function(t,e,r){var content=r(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("29751484",content,!0,{sourceMap:!1})},485:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex:0 1 auto;flex-wrap:wrap;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),n.locals={},t.exports=n},490:function(t,e,r){"use strict";r(8),r(11),r(13),r(17),r(9),r(4),r(10);var n=r(2),o=(r(77),r(484),r(92)),l=r(14),c=r(0);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h=Object(l.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,v(v({},data),{},{attrs:v(v({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),Object(c.r)(this))])}}),m=Object(c.i)("v-breadcrumbs__divider","li"),f=r(39);function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}e.a=Object(l.a)(f.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(m,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(h,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=Object(c.r)(this)||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},494:function(t,e,r){var content=r(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("951d1426",content,!0,{sourceMap:!1})},495:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin:0 -1px;max-height:100%;max-width:0;min-height:100%;vertical-align:text-bottom;width:0}.v-divider--vertical.v-divider--inset{margin-top:8px;max-height:calc(100% - 16px);min-height:0}",""]),n.locals={},t.exports=n},498:function(t,e,r){"use strict";r(8),r(11),r(13),r(17),r(9),r(4),r(10);var n=r(2),o=(r(494),r(39));function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},499:function(t,e,r){var content=r(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("1c8f4490",content,!0,{sourceMap:!1})},500:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:16px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-bottom-left-radius:inherit;border-top-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-bottom-right-radius:inherit;border-top-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-bottom-left-radius:inherit;border-top-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-bottom:8px;padding-top:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}',""]),n.locals={},t.exports=n},513:function(t,e,r){"use strict";r(8),r(11),r(13),r(17),r(9),r(4),r(10);var n=r(2),o=(r(35),r(499),r(226)),l=r(314),c=r(98),d=r(70),v=r(39),h=r(1).default.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),m=r(14),f=r(15),_=r(0);function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=Object(m.a)(o.a,d.a,h).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(n.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=x(x({},o.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||v.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(f.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[Object(_.r)(this,"prepend")||this.__cachedIcon,this.genContent(),this.__cachedBorder,Object(_.r)(this,"append"),this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},Object(_.r)(this))},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},581:function(t,e,r){"use strict";r.r(e);var n=r(513),o=r(228),l=r(491),c=r(483),d=r(498),v=r(539),h=r(478),m=(r(8),r(49),r(77),r(9),r(16)),f=(r(60),r(35),r(42),r(31),r(23),r(46),r(167),r(112)),_=r.n(f),y={components:{Breadcrumbs:r(482).a},asyncData:function(t){return Object(m.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c,d,v,map,h,m,i,f,y,x,O,j,w,k,C,P,$,S,B,D,E,label,I,M,R,z,N,A,T,J,L,U,V,W,H,F,canvas,G,K,Q,X,Y,Z,tt,et;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.payload,n=t.app,!r){e.next=5;break}return e.abrupt("return",r);case 5:return o="https://genji.dl.itc.u-tokyo.ac.jp",e.next=8,_.a.get(o+"/data/info.json").then((function(data){return data.data}));case 8:return l=e.sent,c=Number(n.context.params.vol),d=o+"/data/vol/"+("0000000000"+c).slice(-2)+"/curation.json",e.next=13,_.a.get(d).then((function(data){return data.data}));case 13:for(v=e.sent,map={},h=1,m=l.selections,i=0;i<m.length;i++)for(f=m[i],y=f.members,x=0;x<y.length;x++)O=y[x],map[h]=O.label,h+=1;j=n.context.params.id,w={},k=v.label,m=v.selections,C={},P={taisei:{label:"校異源氏物語",check:"校異源氏物語"},zenshu:{label:"新編日本古典文学全集",check:"新編日本古典文学全集"}},$=0;case 25:if(!($<m.length)){e.next=56;break}S=m[$],B=S.members,D=0;case 29:if(!(D<B.length)){e.next=53;break}if(E=B[D],"脱文・錯簡"===(label=E.label)){for(I=S.within.label,w[I]||(w[I]=[]),M={},R=E.metadata,z=0;z<R.length;z++)N=R[z],M[N.label]=N.value;A=E["@id"],T=A.split("#xywh="),J=T[0],L=T[1].split(","),U=Number(L[1])-150,V=Number(L[3])+150,A=J+"#xywh="+L[0]+","+U+","+L[2]+","+V,w[I].push({page:M.Page,description:M.Text,type:M.Type,url:o+"/mirador3/?params="+encodeURIComponent(JSON.stringify([{manifest:S.within["@id"],canvas:A}]))+"&annotationState=on"})}if("zenshu"!==j){e.next=38;break}if(label.includes(P[j].check)){e.next=36;break}return e.abrupt("continue",50);case 36:e.next=40;break;case 38:if(label.includes(P[j].check)){e.next=40;break}return e.abrupt("continue",50);case 40:W=Number(label.split(" ")[1].split(".")[1]),C[W]||(C[W]={windows:[]}),H=E["@id"],F=H.split("#xywh="),canvas=F[0],G=F[1].split(","),K=Number(G[1])-150,Q=Number(G[3])+150,H=canvas+"#xywh="+G[0]+","+K+","+G[2]+","+Q,C[W].windows.push({manifestId:S.within["@id"],canvas:E["@id"],label:S.within.label,url:o+"/mirador3/?params="+encodeURIComponent(JSON.stringify([{manifest:S.within["@id"],canvas:H}]))+"&annotationState=on"});case 50:D++,e.next=29;break;case 53:$++,e.next=25;break;case 56:for(X in C){for(Y=[],Z=C[X],tt=0;tt<Z.windows.length;tt++)et=Z.windows[tt],Y.push({manifest:et.manifestId,canvas:et.canvas});C[X].comp_url=o+"/mirador/?params="+encodeURIComponent(JSON.stringify(Y))+"&annotationState=on&sidePanel=false"}return e.abrupt("return",{infoMap:map,vol:c,jo:k,curationUri:d,pageMap:C,errs:w,config:P});case 58:case"end":return e.stop()}}),e)})))()},data:function(){return{headers:[{text:"頁数",value:"page"}],comp_url:null}},head:function(){return{title:this.$t("browse_by_page")+" "+this.title}},computed:{title:function(){return" 『"+this.$t(this.config[this.$route.params.id].label)+"』"+(-1!==this.vol?"("+this.vol+" "+this.jo+")":"")},bh:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.$t("browse_by_page"),disabled:!1,to:this.localePath({name:"search"}),exact:!0},{text:this.title}]}},watch:{$route:function(){this.vol=-1,this.id=this.$route.params.id,this.search()}}},x=r(76),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-5"},[e("Breadcrumbs",{attrs:{items:t.bh}}),t._v(" "),e("div",{staticClass:"container"},[e(l.a,{attrs:{flat:""}},[e(c.c,[e("h2",{staticClass:"mb-5"},[t._v("\n          『"+t._s(t.$t(t.config[t.$route.params.id].label))+"』"),-1!=t.vol?[t._v("（"+t._s(t.vol)+" "+t._s(t.jo)+"）")]:t._e()],2),t._v(" "),e(h.a),t._v(" "),-1!=t.vol?[t.vol-1>0?e(o.a,{staticClass:"ma-2",attrs:{color:"primary",to:t.localePath({name:"search-id-vol",params:{id:t.$route.params.id,vol:t.vol-1}})}},[t._v("\n            "+t._s(t.vol-1)+" "+t._s(t.infoMap[t.vol-1])+" へ\n          ")]):t._e(),t._v(" "),t.vol+1<=54?e(o.a,{staticClass:"ma-2",attrs:{color:"primary",to:t.localePath({name:"search-id-vol",params:{id:t.$route.params.id,vol:t.vol+1}})}},[t._v("\n            "+t._s(t.vol+1)+" "+t._s(t.infoMap[t.vol+1])+" へ\n          ")]):t._e()]:t._e()],2),t._v(" "),Object.keys(t.errs).length>0?e(n.a,{staticClass:"my-5",attrs:{type:"warning",text:""}},[t._v("\n        脱文・錯簡あり："+t._s(Object.keys(t.errs).join(", "))+"\n      ")]):t._e(),t._v(" "),e(v.a,[e("thead",[e("tr",[e("th",[t._v(t._s(t.$t("pageNum")))]),t._v(" "),e("th",[t._v(t._s(t.$t("画像をみる")))]),t._v(" "),e("th",[t._v(t._s(t.$t("並べて比較")))])])]),t._v(" "),e("tbody",t._l(t.pageMap,(function(r,n){return e("tr",{key:n},[e("td",[t._v(t._s(n))]),t._v(" "),e("td",t._l(r.windows,(function(r,n){return e(o.a,{key:n,staticClass:"ma-2",attrs:{small:"",href:r.url,target:"_blank",link:""}},[t._v("\n                "+t._s(r.label)+"\n              ")])})),1),t._v(" "),e("td",[r.comp_url?e("a",{attrs:{href:r.comp_url,target:"_blank"}},[e("img",{staticClass:"m-2",attrs:{src:"https://iiif.dl.itc.u-tokyo.ac.jp/images/mirador.png"}})]):t._e()])])})),0)]),t._v(" "),Object.keys(t.errs).length>0?[e("h3",{staticClass:"mt-10 mb-5 error--text"},[t._v("脱文・錯簡")]),t._v(" "),e(v.a,[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v(t._s(t.$t("imageNum")))]),t._v(" "),e("th",{attrs:{width:"40%"}},[t._v(t._s(t.$t("explanation")))]),t._v(" "),e("th",[t._v(t._s(t.$t("type")))]),t._v(" "),e("th",[t._v(t._s(t.$t("画像をみる")))])])]),t._v(" "),e("tbody",[t._l(t.errs,(function(r,n){return t._l(r,(function(r,o){return e("tr",{key:n+"-"+o},[e("td",[t._v(t._s(n))]),t._v(" "),e("td",[t._v(t._s(r.page))]),t._v(" "),e("td",[e("div",{staticClass:"py-2",domProps:{innerHTML:t._s(r.description)}})]),t._v(" "),e("td",[t._v(t._s(r.type))]),t._v(" "),e("td",[e("a",{attrs:{href:r.url,target:"_blank"}},[e("img",{staticClass:"m-2",attrs:{src:"https://iiif.dl.itc.u-tokyo.ac.jp/images/mirador.png"}})])])])}))}))],2)])]:t._e(),t._v(" "),e(d.a,{staticClass:"my-5"}),t._v(" "),e(c.c,[e(h.a),t._v(" "),e(o.a,{staticClass:"ma-2",attrs:{target:"_blank",small:"",href:"http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation="+t.curationUri+"&mode=annotation"}},[t._v("\n          "+t._s(t.$t("Curation Viewerでみる"))+"\n          "),e("i",{staticClass:"mdi mdi-open-in-new"})])],1)],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);