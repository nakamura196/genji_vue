(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{482:function(e,t,r){"use strict";var n=r(490),c=r(474),o=r(213),l=r(67),d=r(29),f=r(28),v=r(37),h=r(24),m=r(41),O=r(7),y=(r(13),r(4),r(75),r(83));function j(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(j=function(){return!!e})()}var _=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(O.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},x=function(e){function t(){return Object(f.a)(this,t),e=this,r=t,n=arguments,r=Object(h.a)(r),Object(v.a)(e,j()?Reflect.construct(r,n||[],Object(h.a)(e).constructor):r.apply(e,n));var e,r,n}return Object(m.a)(t,e),Object(d.a)(t)}(y.Vue);_([Object(y.Prop)({required:!0})],x.prototype,"items",void 0);var P=x=_([y.Component],x),w=r(76),component=Object(w.a)(P,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t(l.a,{attrs:{color:"grey lighten-2"}},[t(c.a,{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[t(n.a,{staticClass:"py-0",attrs:{items:e.items},scopedSlots:e._u([{key:"divider",fn:function(){return[t(o.a,[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);t.a=component.exports},484:function(e,t,r){var content=r(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("29751484",content,!0,{sourceMap:!1})},485:function(e,t,r){var n=r(21)((function(i){return i[1]}));n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex:0 1 auto;flex-wrap:wrap;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),n.locals={},e.exports=n},490:function(e,t,r){"use strict";r(8),r(11),r(13),r(17),r(9),r(4),r(10);var n=r(2),c=(r(77),r(484),r(92)),o=r(14),l=r(0);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=Object(o.a)(c.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,f(f({},data),{},{attrs:f(f({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),Object(l.r)(this))])}}),h=Object(l.i)("v-breadcrumbs__divider","li"),m=r(39);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=Object(o.a)(m.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(h,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(v,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=Object(l.r)(this)||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},579:function(e,t,r){"use strict";r.r(t);var n=r(228),c=r(474),o=r(16),l=r(28),d=r(29),f=r(37),v=r(24),h=r(41),m=r(7),O=(r(60),r(13),r(4),r(75),r(83)),y=r(482);function j(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(j=function(){return!!e})()}var _=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},x=function(e){function t(){var e,r,n,c;return Object(l.a)(this,t),r=this,n=t,c=arguments,n=Object(v.a)(n),(e=Object(f.a)(r,j()?Reflect.construct(n,c||[],Object(v.a)(r).constructor):n.apply(r,c))).baseUrl="https://genji.dl.itc.u-tokyo.ac.jp",e}return Object(h.a)(t,e),Object(d.a)(t,[{key:"asyncData",value:(r=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n,c,o,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,n=t.$content,c=t.params,"ja"===(o=r.i18n.locale)?o="":o+="/",e.prev=3,e.next=6,n(o+"static/"+c.slug).fetch();case 6:return l=e.sent,e.abrupt("return",{page:l});case 10:return e.prev=10,e.t0=e.catch(3),e.next=14,n("static/"+c.slug).fetch();case 14:return d=e.sent,e.abrupt("return",{page:d});case 16:case"end":return e.stop()}}),e,null,[[3,10]])}))),function(e){return r.apply(this,arguments)})},{key:"title",get:function(){return this.page.title}},{key:"head",value:function(){return{title:this.title}}},{key:"bh",get:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.$t("about_"),disabled:!1,to:this.localePath({name:"about"}),exact:!0},{text:this.title}]}}]);var r}(O.Vue),P=x=_([Object(O.Component)({components:{Breadcrumbs:y.a}})],x),w=r(76),component=Object(w.a)(P,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("Breadcrumbs",{attrs:{items:e.bh}}),e._v(" "),t(c.a,{staticClass:"my-5"},[t("h1",{staticClass:"mb-5"},[e._v("\n      "+e._s(e.page.title)+"\n    ")]),e._v(" "),t("p",{staticClass:"text-right"},[t(n.a,{attrs:{color:"primary darken-2",rounded:"",to:e.localePath(e.page.to),depressed:""}},[e._v("\n        "+e._s(e.$t("ページをみる"))+"\n      ")])],1),e._v(" "),t("nuxt-content",{attrs:{document:e.page}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);