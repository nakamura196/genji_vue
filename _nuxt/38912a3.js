(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{465:function(t,e,n){"use strict";var r=n(28),c=n(27),o=n(39),l=n(36),f=n(23),v=n(8),d=(n(13),n(4),n(74),n(80));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},m=function(t){Object(o.a)(n,t);var e=h(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n)}(d.Vue);y([Object(d.Prop)({required:!0})],m.prototype,"items",void 0);var O=m=y([d.Component],m),j=n(75),_=n(97),R=n.n(_),x=n(475),C=n(455),P=n(209),k=n(65),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{attrs:{color:"grey lighten-2"}},[n("v-container",{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[n("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.a=component.exports;R()(component,{VBreadcrumbs:x.a,VContainer:C.a,VIcon:P.a,VSheet:k.a})},564:function(t,e,n){"use strict";n.r(e);var r=n(27),c=n(28),o=n(39),l=n(36),f=n(23),v=n(8),d=(n(13),n(4),n(74),n(80)),h=n(465);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=function(t){Object(o.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).title=t.$t("browse_by_page"),t}return Object(c.a)(n,[{key:"head",value:function(){return{title:this.title}}},{key:"bh",get:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.title}]}}]),n}(d.Vue),j=O=m([Object(d.Component)({components:{Breadcrumbs:h.a}})],O),_=n(75),R=n(97),x=n.n(R),C=n(468),P=n(454),k=n(455),w=n(209),V=n(457),component=Object(_.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Breadcrumbs",{attrs:{items:t.bh}}),t._v(" "),n("v-container",{staticClass:"my-5"},[n("h2",[t._v("\n      "+t._s(t.$t(t.title))+"\n    ")]),t._v(" "),n("v-row",{staticClass:"my-5"},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{attrs:{"no-body":"",flat:""}},[n("nuxt-link",{attrs:{to:t.localePath({name:"search-id-vol",params:{id:"taisei",vol:1}})}},[n("div",{staticClass:"text-center grey lighten-2 pa-10"},[n("v-icon",{attrs:{size:"50"}},[t._v(t._s("mdi-book-open"))])],1)]),t._v(" "),n("div",{staticClass:"pa-4"},[n("nuxt-link",{attrs:{to:t.localePath({name:"search-id-vol",params:{id:"taisei",vol:1}})}},[n("h4",[t._v(t._s(t.$t("校異源氏物語")))])])],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{attrs:{"no-body":"",flat:""}},[n("nuxt-link",{attrs:{to:t.localePath({name:"search-id-vol",params:{id:"zenshu",vol:1}})}},[n("div",{staticClass:"text-center grey lighten-2 pa-10"},[n("v-icon",{attrs:{size:"50"}},[t._v(t._s("mdi-book-open"))])],1)]),t._v(" "),n("div",{staticClass:"pa-4"},[n("nuxt-link",{attrs:{to:t.localePath({name:"search-id-vol",params:{id:"zenshu",vol:1}})}},[n("h4",[t._v(t._s(t.$t("新編日本古典文学全集")))])])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VCard:C.a,VCol:P.a,VContainer:k.a,VIcon:w.a,VRow:V.a})}}]);