(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{460:function(t,e,n){"use strict";var r=n(468),o=n(452),c=n(207),l=n(65),f=n(29),v=n(28),h=n(39),d=n(36),m=n(24),_=n(8),y=(n(13),n(4),n(75),n(81));function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(m.a)(t);if(e){var o=Object(m.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(_.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},k=function(t){Object(h.a)(n,t);var e=j(n);function n(){return Object(v.a)(this,n),e.apply(this,arguments)}return Object(f.a)(n)}(y.Vue);O([Object(y.Prop)({required:!0})],k.prototype,"items",void 0);var w=k=O([y.Component],k),x=n(76),component=Object(x.a)(w,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(l.a,{attrs:{color:"grey lighten-2"}},[e(o.a,{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[e(r.a,{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[e(c.a,[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.a=component.exports},553:function(t,e,n){"use strict";n.r(e);var r=n(222),o=n(469),c=n(461),l=n(452),f=n(546),v=n(476),h=n(456),d=(n(75),n(16)),m=n(28),_=n(29),y=n(39),j=n(36),O=n(24),k=n(8),w=(n(58),n(13),n(4),n(7),n(48),n(81)),x=n(112),R=n.n(x),I=n(460);function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(O.a)(t);if(e){var o=Object(O.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(j.a)(this,n)}}var $=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(k.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},C=function(t){Object(y.a)(r,t);var e,n=P(r);function r(){var t;return Object(m.a)(this,r),(t=n.apply(this,arguments)).title=t.$t("iiif_genji_collection"),t.url="https://genji.dl.itc.u-tokyo.ac.jp/iiif/collection/top.json",t}return Object(_.a)(r,[{key:"head",value:function(){return{title:this.title}}},{key:"bh",get:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.title}]}},{key:"headers",get:function(){return[{text:this.$t("所蔵機関"),value:"attribution"},{text:this.$t("刊写"),value:"type"},{text:this.$t("冊数"),value:"volume"},{text:this.$t("備考"),value:"note"},{text:this.$t("利用条件"),value:"license"},{text:this.$t("画像をみる"),value:"url"}]}},{key:"asyncData",value:(e=Object(d.a)(regeneratorRuntime.mark((function t(){var e,n,r,i,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.a.get("https://genji.dl.itc.u-tokyo.ac.jp/iiif/collection/top.json").then((function(data){return data.data}));case 2:for(e=t.sent,n=[],r=e.collections,i=0;i<r.length;i++)o=r[i],n.push({attribution:o.description,type:o.type,volume:o.volume,note:o.note,license:o.license,url:o["@id"]});return t.abrupt("return",{desserts:n});case 7:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})}]),r}(w.Vue),B=C=$([Object(w.Component)({components:{Breadcrumbs:I.a}})],C),T=n(76),component=Object(T.a)(B,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("Breadcrumbs",{attrs:{items:t.bh}}),t._v(" "),e(l.a,[e(o.a,{staticClass:"my-5",attrs:{flat:""}},[e(c.c,[e("h2",[t._v("\n          "+t._s(t.$t("iiif_genji_collection"))+"\n        ")])]),t._v(" "),e(c.b,{staticClass:"mt-5"},["ja"===t.$i18n.locale?[e("p",[t._v("\n            各機関がインターネット上で公開している『源氏物語』へのリンク集です。\n            "),e("br"),t._v("「デジタル源氏物語」作成メンバーが確認した画像のほか、国文学研究資料館の「新日本古典籍総合データベース」の著作「源氏物語」（著作ID:2357）のもとに公開されている画像のうち、以下の条件に該当するものをリスト化しました。\n          ")]),t._v(" "),e("ul",[e("li",[t._v("50帖以上が公開されている画像。")]),t._v(" "),e("li",[t._v("\n              IIIF (International Image Interoperability\n              Framework)で公開されている画像。\n            ")])]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("\n            ※画像の利用条件は公開機関によって異なっています。リンク先の画像をご利用の際は、必ず各条件をご確認ください。\n          ")]),t._v(" "),e("p",[t._v("\n            このリストに掲載すべき画像がありましたら、"),e("a",{attrs:{href:"mailto:digital-genji-public@googlegroups.com"}},[t._v("digital-genji-public@googlegroups.com")]),t._v("までご連絡ください。\n          ")])]:[e("p",[t._v('\n            This is a collection of links to "The Tale of Genji" published by\n            each institution on the Internet.\n            '),e("br"),t._v("The items that meet the following conditions are listed.\n          ")]),t._v(" "),e("ul",[e("li",[t._v("Images with more than 50 volumes")]),t._v(" "),e("li",[t._v("\n              Images compliant with IIIF (International Image Interoperability\n              Framework)\n            ")])]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("\n            ※Usage conditions vary depending on the organizations. Please\n            confirm each condition when using the linked images.\n          ")]),t._v(" "),e("p",[t._v("\n            If you have any images that should be included in this list,\n            please contact the UTokyo Academic Archives Project Office at the\n            bottom of the page.\n          ")])]],2),t._v(" "),e(f.a,{staticClass:"mt-5",attrs:{headers:t.headers,items:t.desserts,"items-per-page":-1},scopedSlots:t._u([{key:"item.url",fn:function(t){var n=t.item;return[e("a",{attrs:{target:"_blank",href:"http://universalviewer.io/examples/uv/uv.html#?manifest="+n.url}},[e("img",{staticClass:"m-2",attrs:{src:"https://iiif.dl.itc.u-tokyo.ac.jp/images/uv.png"}})])]}},{key:"item.license",fn:function(n){var r=n.item;return[e("a",{attrs:{target:"_blank",href:r.license}},[t._v("\n            "+t._s(r.license)+"\n          ")])]}}],null,!0)}),t._v(" "),e(v.a,{staticClass:"my-5"}),t._v(" "),e(c.c,[e(h.a),t._v(" "),e(r.a,{attrs:{small:"",target:"_blank",href:"https://www.kanzaki.com/works/2016/pub/image-annotator?u="+t.url}},[t._v("\n          "+t._s(t.$t("Image Annotatorでみる"))+"\n          "),e("i",{staticClass:"mdi mdi-open-in-new"})])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);