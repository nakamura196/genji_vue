(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{464:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return v}));var n=r(468),o=r(1),c=Object(o.i)("v-card__actions"),l=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),v=Object(o.i)("v-card__title");n.a},465:function(t,e,r){"use strict";var n=r(28),o=r(27),c=r(39),l=r(36),d=r(23),v=r(8),h=(r(13),r(4),r(74),r(80));function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var _=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},m=function(t){Object(c.a)(r,t);var e=f(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(n.a)(r)}(h.Vue);_([Object(h.Prop)({required:!0})],m.prototype,"items",void 0);var x=m=_([h.Component],m),y=r(75),j=r(97),k=r.n(j),O=r(475),w=r(455),$=r(209),C=r(65),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.a=component.exports;k()(component,{VBreadcrumbs:O.a,VContainer:w.a,VIcon:$.a,VSheet:C.a})},468:function(t,e,r){"use strict";r(10),r(7),r(11),r(4),r(13),r(9),r(17);var n=r(2),o=(r(30),r(224),r(225),r(470),r(223)),c=r(469),l=r(91),d=r(12);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},470:function(t,e,r){var content=r(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("e23b7040",content,!0,{sourceMap:!1})},471:function(t,e,r){var n=r(21)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},561:function(t,e,r){"use strict";r.r(e);r(74);var n=r(16),o=r(27),c=r(28),l=r(39),d=r(36),v=r(23),h=r(8),f=(r(58),r(13),r(4),r(41),r(19),r(60),r(80)),_=r(113),m=r.n(_),x=r(465);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var j=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},k=function(t){Object(l.a)(d,t);var e,r=y(d);function d(){var t;return Object(o.a)(this,d),(t=r.apply(this,arguments)).title=t.$t("browse_image_and_text"),t.baseUrl="https://genji.dl.itc.u-tokyo.ac.jp",t}return Object(c.a)(d,[{key:"head",value:function(){return{title:this.title}}},{key:"bh",get:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.title}]}},{key:"asyncData",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.payload,t.next=6;break;case 6:return t.next=8,m.a.get("https://genji.dl.itc.u-tokyo.ac.jp/data/status.json").then((function(data){return data.data}));case 8:return r=t.sent,t.next=11,m.a.get("https://genji.dl.itc.u-tokyo.ac.jp/data/info.json").then((function(data){return data.data}));case 11:return n=t.sent,t.abrupt("return",{result:n,statusMap:r});case 13:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})},{key:"items",get:function(){for(var t=this.result,e=this.statusMap,r=t.selections,data=[],n=0;n<r.length;n++)for(var o=r[n],i=0;i<o.members.length;i++){for(var c=o.members[i],l=c.metadata,d={},v=0;v<l.length;v++){var h=l[v];d[h.label]=h.value}var f=d.vol,_=e[("0000000000"+f).slice(-2)];data.push({main:_.text?"https://tei-eaj.github.io/parallel_text_viewer/app/#/"+(100===f?"":"v2")+"?u="+(100===f?"https://genji.dl.itc.u-tokyo.ac.jp/data/pt/config.json":"https://genji.dl.itc.u-tokyo.ac.jp/data/vol/"+("0000000000"+f).slice(-2)+"/config.json"):null,title:c.label,thumbnail:d.thumbnail_utokyo,curation:"https://genji.dl.itc.u-tokyo.ac.jp/data/vol/"+("0000000000"+f).slice(-2)+"/curation.json",vol:f,links:[{thumbnail:this.baseUrl+"/assets/ndl.ico",label:this.$t("校異源氏物語")+"（"+this.$t("国立国会図書館")+"）",value:d.ndl,description:""},{thumbnail:this.baseUrl+"/assets/json-ld-logo.png",label:this.$t("校異源氏物語")+" "+this.$t("text")+"（"+this.$t("校異源氏物語テキストDB")+"）",value:_.text?"https://kouigenjimonogatari.github.io#"+f:null,description:_.text?"":"作成中"},{thumbnail:this.baseUrl+"/assets/aozora.ico",label:this.$t("modern-translation")+"（"+this.$t("aozora-buko")+"）",value:d.aozora,description:""},{thumbnail:this.baseUrl+"/assets/tei.png",label:this.$t("modern-translation")+"（TEI）",value:d.tei,description:""},{thumbnail:this.baseUrl+"/assets/jk.ico",label:this.$t("新編日本古典文学全集")+"（ジャパンナレッジ Lib）",value:d.jk,description:""},{thumbnail:this.baseUrl+"/assets/jk.ico",label:this.$t("新編日本古典文学全集")+"（ジャパンナレッジ Personal）",value:d.jk.replace("/lib/","/psnl/"),description:""}],status:[{label:this.$t("校異源氏物語と現代語訳の対応づけ"),value:_.tei,description:""},{label:this.$t("対照可能な画像リスト"),value:_.orgs,description:""}],taisei:_.taisei,zenshu:_.saga})}return data}}]),d}(f.Vue),O=k=j([Object(f.Component)({components:{Breadcrumbs:x.a}})],k),w=r(75),$=r(97),C=r.n($),P=r(213),R=r(227),V=r(468),B=r(464),z=r(495),S=r(454),D=r(455),U=r(484),E=r(209),I=r(161),M=r(457),T=r(487),component=Object(w.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Breadcrumbs",{attrs:{items:t.bh}}),t._v(" "),r("v-container",[r("v-row",t._l(t.items,(function(e,n){return r("v-col",{key:n,staticClass:"pa-5",attrs:{lg:4,md:6,sm:12}},[r("v-card",[r("v-img",{staticStyle:{"background-color":"lightgray"},attrs:{height:"200px",contain:"",src:e.thumbnail}}),t._v(" "),r("v-card-title",[r("b",[t._v(t._s(e.vol)+": "+t._s(e.title))])]),t._v(" "),r("v-card-text",[e.main?r("v-btn",{staticClass:"ma-2",attrs:{color:"primary",target:"_blank",href:e.main,link:""}},[t._v("\n              "+t._s(t.$t("browse_image_and_text"))+"\n            ")]):t._e(),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{to:t.localePath({name:"search-id-vol",params:{id:"taisei",vol:e.vol}}),link:""}},[t._v("\n              "+t._s(t.$t("browse_by_page"))+":\n              "+t._s(t.$t("校異源氏物語"))+"\n            ")]),t._v(" "),e.zenshu?r("v-btn",{staticClass:"ma-2",attrs:{to:t.localePath({name:"search-id-vol",params:{id:"zenshu",vol:e.vol}}),link:""}},[t._v("\n              "+t._s(t.$t("browse_by_page"))+":\n              "+t._s(t.$t("新編日本古典文学全集"))+"\n            ")]):t._e()],1),t._v(" "),r("v-divider",{staticClass:"my-3"}),t._v(" "),r("v-card-title",[t._v(t._s(t.$t("progress")))]),t._v(" "),r("v-card-text",[r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("tbody",t._l(e.status,(function(e){return r("tr",{key:e.label},[r("td",[t._v(t._s(e.label))]),t._v(" "),e.label!=t.$t("対照可能な画像リスト")?r("td",[e.value?[r("v-chip",{staticClass:"ma-2",attrs:{color:"success"}},[r("v-avatar",{attrs:{left:""}},[r("v-icon",[t._v("mdi-checkbox-marked-circle")])],1),t._v("\n                          "+t._s(t.$t("済"))+"\n                        ")],1)]:[r("v-chip",{staticClass:"ma-2",attrs:{color:"warning"}},[r("v-avatar",{attrs:{left:""}},[r("v-icon",[t._v("mdi-close-circle")])],1),t._v("\n                          "+t._s(t.$t("未"))+"\n                        ")],1)]],2):r("td",[t._l(e.value,(function(e,n){return[r("v-chip",{key:n,staticClass:"ma-1",attrs:{small:"",chip:""}},[t._v(t._s(e))])]}))],2),t._v(" "),r("td",[t._v(t._s(e.description))])])})),0)]},proxy:!0}],null,!0)})],1),t._v(" "),r("v-divider",{staticClass:"my-4"}),t._v(" "),r("v-card-title",[t._v(t._s(t.$t("related_links")))]),t._v(" "),r("v-card-text",[r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("tbody",t._l(e.links,(function(e){return r("tr",{key:e.label},[r("td",[r("img",{attrs:{width:"30px",src:e.thumbnail}})]),t._v(" "),r("td",[e.value?[r("a",{attrs:{target:"_blank",href:e.value}},[t._v(t._s(e.label))])]:[t._v("\n                        "+t._s(e.label)+"\n                      ")]],2),t._v(" "),r("td",[t._v(t._s(e.description))])])})),0)]},proxy:!0}],null,!0)})],1)],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;C()(component,{VAvatar:P.a,VBtn:R.a,VCard:V.a,VCardText:B.b,VCardTitle:B.c,VChip:z.a,VCol:S.a,VContainer:D.a,VDivider:U.a,VIcon:E.a,VImg:I.a,VRow:M.a,VSimpleTable:T.a})}}]);