(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{475:function(t,e,r){"use strict";var n=r(483),o=r(467),c=r(211),l=r(65),h=r(29),v=r(28),d=r(39),f=r(36),m=r(23),y=r(7),x=(r(12),r(4),r(74),r(82));function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(m.a)(t);if(e){var o=Object(m.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var O=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},j=function(t){Object(d.a)(r,t);var e=_(r);function r(){return Object(v.a)(this,r),e.apply(this,arguments)}return Object(h.a)(r)}(x.Vue);O([Object(x.Prop)({required:!0})],j.prototype,"items",void 0);var k=j=O([x.Component],j),w=r(75),component=Object(w.a)(k,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(l.a,{attrs:{color:"grey lighten-2"}},[e(o.a,{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[e(n.a,{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[e(c.a,[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.a=component.exports},477:function(t,e,r){var content=r(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("29751484",content,!0,{sourceMap:!1})},478:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex:0 1 auto;flex-wrap:wrap;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),n.locals={},t.exports=n},483:function(t,e,r){"use strict";r(9),r(8),r(11),r(4),r(12),r(10),r(17);var n=r(2),o=(r(76),r(477),r(91)),c=r(13);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(c.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,h(h({},data),{},{attrs:h(h({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),d=r(1),f=Object(d.i)("v-breadcrumbs__divider","li"),m=r(38);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(c.a)(m.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(f,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(v,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},487:function(t,e,r){var content=r(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("951d1426",content,!0,{sourceMap:!1})},488:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin:0 -1px;max-height:100%;max-width:0;min-height:100%;vertical-align:text-bottom;width:0}.v-divider--vertical.v-divider--inset{margin-top:8px;max-height:calc(100% - 16px);min-height:0}",""]),n.locals={},t.exports=n},491:function(t,e,r){"use strict";r(9),r(8),r(11),r(4),r(12),r(10),r(17);var n=r(2),o=(r(487),r(38));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},496:function(t,e,r){"use strict";r(9),r(8),r(12),r(10),r(17);var n=r(15),o=r(2),c=(r(4),r(11),r(497),r(13)),l=r(227),h=r(96),v=r(43),d=r(147),f=r(38),m=r(69),y=r(91),x=r(146),_=r(14);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(v.a,x.a,y.a,f.a,Object(d.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return j(j(j(j({"v-chip":!0},y.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(y.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var r=Object(n.a)(e,2),o=r[0],c=r[1];t.$attrs.hasOwnProperty(o)&&Object(_.a)(o,c,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],r=this.generateRouteLink(),n=r.tag,data=r.data;data.attrs=j(j({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var o=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(o,data),e)}})},497:function(t,e,r){var content=r(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("59b49814",content,!0,{sourceMap:!1})},498:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;-webkit-text-decoration:none;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-style:solid;border-width:thin}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),n.locals={},t.exports=n},566:function(t,e,r){"use strict";r.r(e);var n=r(216),o=r(226),c=r(484),l=r(476),h=r(496),v=r(469),d=r(467),f=r(491),m=r(211),y=r(161),x=r(468),_=r(532),O=(r(8),r(47),r(74),r(16)),j=r(28),k=r(29),w=r(39),$=r(36),P=r(23),C=r(7),z=(r(59),r(12),r(4),r(40),r(24),r(50),r(82)),B=r(111),D=r.n(B),R=r(475);function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(P.a)(t);if(e){var o=Object(P.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object($.a)(this,r)}}var E=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(C.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},M=function(t){Object(w.a)(n,t);var e,r=S(n);function n(){var t;return Object(j.a)(this,n),(t=r.apply(this,arguments)).title=t.$t("browse_image_and_text"),t.baseUrl="https://genji.dl.itc.u-tokyo.ac.jp",t}return Object(k.a)(n,[{key:"head",value:function(){return{title:this.title}}},{key:"bh",get:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.title}]}},{key:"asyncData",value:(e=Object(O.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.payload,t.next=6;break;case 6:return t.next=8,D.a.get("https://genji.dl.itc.u-tokyo.ac.jp/data/status.json").then((function(data){return data.data}));case 8:return r=t.sent,t.next=11,D.a.get("https://genji.dl.itc.u-tokyo.ac.jp/data/info.json").then((function(data){return data.data}));case 11:return n=t.sent,t.abrupt("return",{result:n,statusMap:r});case 13:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})},{key:"items",get:function(){for(var t=this.result,e=this.statusMap,r=t.selections,data=[],n=0;n<r.length;n++)for(var o=r[n],i=0;i<o.members.length;i++){for(var c=o.members[i],l=c.metadata,h={},v=0;v<l.length;v++){var d=l[v];h[d.label]=d.value}var f=h.vol,m=e[("0000000000"+f).slice(-2)];data.push({main:m.text?"https://tei-eaj.github.io/parallel_text_viewer/app/#/"+(100===f?"":"v2")+"?u="+(100===f?"https://genji.dl.itc.u-tokyo.ac.jp/data/pt/config.json":"https://genji.dl.itc.u-tokyo.ac.jp/data/vol/"+("0000000000"+f).slice(-2)+"/config.json"):null,title:c.label,thumbnail:h.thumbnail_utokyo,curation:"https://genji.dl.itc.u-tokyo.ac.jp/data/vol/"+("0000000000"+f).slice(-2)+"/curation.json",vol:f,links:[{thumbnail:this.baseUrl+"/assets/ndl.ico",label:this.$t("校異源氏物語")+"（"+this.$t("国立国会図書館")+"）",value:h.ndl,description:""},{thumbnail:this.baseUrl+"/assets/json-ld-logo.png",label:this.$t("校異源氏物語")+" "+this.$t("text")+"（"+this.$t("校異源氏物語テキストDB")+"）",value:m.text?"https://kouigenjimonogatari.github.io#"+f:null,description:m.text?"":"作成中"},{thumbnail:this.baseUrl+"/assets/aozora.ico",label:this.$t("modern-translation")+"（"+this.$t("aozora-buko")+"）",value:h.aozora,description:""},{thumbnail:this.baseUrl+"/assets/tei.png",label:this.$t("modern-translation")+"（TEI）",value:h.tei,description:""},{thumbnail:this.baseUrl+"/assets/jk.ico",label:this.$t("新編日本古典文学全集")+"（ジャパンナレッジ Lib）",value:h.jk,description:""},{thumbnail:this.baseUrl+"/assets/jk.ico",label:this.$t("新編日本古典文学全集")+"（ジャパンナレッジ Personal）",value:h.jk.replace("/lib/","/psnl/"),description:""}],status:[{label:this.$t("校異源氏物語と現代語訳の対応づけ"),value:m.tei,description:""},{label:this.$t("対照可能な画像リスト"),value:m.orgs,description:""}],taisei:m.taisei,zenshu:m.saga})}return data}}]),n}(z.Vue),I=M=E([Object(z.Component)({components:{Breadcrumbs:R.a}})],M),L=r(75),component=Object(L.a)(I,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("Breadcrumbs",{attrs:{items:t.bh}}),t._v(" "),e(d.a,[e(x.a,t._l(t.items,(function(r,d){return e(v.a,{key:d,staticClass:"pa-5",attrs:{lg:4,md:6,sm:12}},[e(c.a,[e(y.a,{staticStyle:{"background-color":"lightgray"},attrs:{height:"200px",contain:"",src:r.thumbnail}}),t._v(" "),e(l.c,[e("b",[t._v(t._s(r.vol)+": "+t._s(r.title))])]),t._v(" "),e(l.b,[r.main?e(o.a,{staticClass:"ma-2",attrs:{color:"primary",target:"_blank",href:r.main,link:""}},[t._v("\n              "+t._s(t.$t("browse_image_and_text"))+"\n            ")]):t._e(),t._v(" "),e(o.a,{staticClass:"ma-2",attrs:{to:t.localePath({name:"search-id-vol",params:{id:"taisei",vol:r.vol}}),link:""}},[t._v("\n              "+t._s(t.$t("browse_by_page"))+":\n              "+t._s(t.$t("校異源氏物語"))+"\n            ")]),t._v(" "),r.zenshu?e(o.a,{staticClass:"ma-2",attrs:{to:t.localePath({name:"search-id-vol",params:{id:"zenshu",vol:r.vol}}),link:""}},[t._v("\n              "+t._s(t.$t("browse_by_page"))+":\n              "+t._s(t.$t("新編日本古典文学全集"))+"\n            ")]):t._e()],1),t._v(" "),e(f.a,{staticClass:"my-3"}),t._v(" "),e(l.c,[t._v(t._s(t.$t("progress")))]),t._v(" "),e(l.b,[e(_.a,{scopedSlots:t._u([{key:"default",fn:function(){return[e("tbody",t._l(r.status,(function(r){return e("tr",{key:r.label},[e("td",[t._v(t._s(r.label))]),t._v(" "),r.label!=t.$t("対照可能な画像リスト")?e("td",[r.value?[e(h.a,{staticClass:"ma-2",attrs:{color:"success"}},[e(n.a,{attrs:{left:""}},[e(m.a,[t._v("mdi-checkbox-marked-circle")])],1),t._v("\n                          "+t._s(t.$t("済"))+"\n                        ")],1)]:[e(h.a,{staticClass:"ma-2",attrs:{color:"warning"}},[e(n.a,{attrs:{left:""}},[e(m.a,[t._v("mdi-close-circle")])],1),t._v("\n                          "+t._s(t.$t("未"))+"\n                        ")],1)]],2):e("td",[t._l(r.value,(function(r,n){return[e(h.a,{key:n,staticClass:"ma-1",attrs:{small:"",chip:""}},[t._v(t._s(r))])]}))],2),t._v(" "),e("td",[t._v(t._s(r.description))])])})),0)]},proxy:!0}],null,!0)})],1),t._v(" "),e(f.a,{staticClass:"my-4"}),t._v(" "),e(l.c,[t._v(t._s(t.$t("related_links")))]),t._v(" "),e(l.b,[e(_.a,{scopedSlots:t._u([{key:"default",fn:function(){return[e("tbody",t._l(r.links,(function(r){return e("tr",{key:r.label},[e("td",[e("img",{attrs:{width:"30px",src:r.thumbnail}})]),t._v(" "),e("td",[r.value?[e("a",{attrs:{target:"_blank",href:r.value}},[t._v(t._s(r.label))])]:[t._v("\n                        "+t._s(r.label)+"\n                      ")]],2),t._v(" "),e("td",[t._v(t._s(r.description))])])})),0)]},proxy:!0}],null,!0)})],1)],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);