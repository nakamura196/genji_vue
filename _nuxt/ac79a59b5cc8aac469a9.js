(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{446:function(t,e,n){"use strict";n.r(e);n(19),n(20),n(5),n(50),n(40);var r=n(13),o=n(21),c=n(35),l=n(27),v=n(24),f=n(14),h=n(17),d=n(56),m=n(95),_=n.n(m);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(v.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},k=function(t){Object(l.a)(v,t);var e,n=y(v);function v(){var t;return Object(o.a)(this,v),(t=n.apply(this,arguments)).url="https://genji.dl.itc.u-tokyo.ac.jp/iiif/collection/top.json",t}return Object(c.a)(v,[{key:"head",value:function(){return{title:this.$t("iiif_genji_collection")}}},{key:"asyncData",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,i,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("https://genji.dl.itc.u-tokyo.ac.jp/iiif/collection/top.json").then((function(data){return data.data}));case 2:for(e=t.sent,n=[],r=e.collections,i=0;i<r.length;i++)o=r[i],n.push({attribution:o.description,type:o.type,volume:o.volume,note:o.note,license:o.license,url:o["@id"]});return t.abrupt("return",{desserts:n});case 7:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})},{key:"headers",get:function(){return[{text:this.$t("所蔵機関"),value:"attribution"},{text:this.$t("刊写"),value:"type"},{text:this.$t("冊数"),value:"volume"},{text:this.$t("備考"),value:"note"},{text:this.$t("利用条件"),value:"license"},{text:this.$t("画像をみる"),value:"url"}]}}]),v}(d.Vue),w=k=j([d.Component],k),I=n(46),x=n(75),O=n.n(x),C=n(164),R=n(387),$=n(386),V=n(354),T=n(440),D=n(398),P=n(359),component=Object(I.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-card",{staticClass:"my-5",attrs:{flat:""}},[n("v-card-title",[n("h2",[t._v("\n          "+t._s(t.$t("iiif_genji_collection"))+"\n        ")])]),t._v(" "),n("v-card-text",{staticClass:"mt-5"},["ja"===t.$i18n.locale?[n("p",[t._v("\n            各機関がインターネット上で公開している『源氏物語』へのリンク集です。\n            "),n("br"),t._v("「デジタル源氏物語」作成メンバーが確認した画像のほか、国文学研究資料館の「新日本古典籍総合データベース」の著作「源氏物語」（著作ID:2357）のもとに公開されている画像のうち、以下の条件に該当するものをリスト化しました。\n          ")]),t._v(" "),n("ul",[n("li",[t._v("50帖以上が公開されている画像。")]),t._v(" "),n("li",[t._v("\n              IIIF (International Image Interoperability\n              Framework)で公開されている画像。\n            ")])]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("\n            ※画像の利用条件は公開機関によって異なっています。リンク先の画像をご利用の際は、必ず各条件をご確認ください。\n          ")]),t._v(" "),n("p",[t._v("\n            このリストに掲載すべき画像がありましたら、"),n("a",{attrs:{href:"mailto:digital-genji-public@googlegroups.com"}},[t._v("digital-genji-public@googlegroups.com")]),t._v("までご連絡ください。\n          ")])]:[n("p",[t._v('\n            This is a collection of links to "The Tale of Genji" published by\n            each institution on the Internet.\n            '),n("br"),t._v("The items that meet the following conditions are listed.\n          ")]),t._v(" "),n("ul",[n("li",[t._v("Images with more than 50 volumes")]),t._v(" "),n("li",[t._v("\n              Images compliant with IIIF (International Image Interoperability\n              Framework)\n            ")])]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("\n            ※Usage conditions vary depending on the organizations. Please\n            confirm each condition when using the linked images.\n          ")]),t._v(" "),n("p",[t._v("\n            If you have any images that should be included in this list,\n            please contact the UTokyo Academic Archives Project Office at the\n            bottom of the page.\n          ")])]],2),t._v(" "),n("v-data-table",{staticClass:"mt-5",attrs:{headers:t.headers,items:t.desserts,"items-per-page":-1},scopedSlots:t._u([{key:"item.url",fn:function(t){var e=t.item;return[n("a",{attrs:{target:"_blank",href:"http://universalviewer.io/examples/uv/uv.html#?manifest="+e.url}},[n("img",{staticClass:"m-2",attrs:{src:"https://iiif.dl.itc.u-tokyo.ac.jp/images/uv.png"}})])]}},{key:"item.license",fn:function(e){var r=e.item;return[n("a",{attrs:{target:"_blank",href:r.license}},[t._v("\n            "+t._s(r.license)+"\n          ")])]}}])}),t._v(" "),n("v-divider",{staticClass:"my-5"}),t._v(" "),n("v-card-title",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{small:"",target:"_blank",href:"https://www.kanzaki.com/works/2016/pub/image-annotator?u="+t.url}},[t._v("\n          "+t._s(t.$t("Image Annotatorでみる"))+"\n          "),n("i",{staticClass:"mdi mdi-open-in-new"})])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VBtn:C.a,VCard:R.a,VCardText:$.b,VCardTitle:$.c,VContainer:V.a,VDataTable:T.a,VDivider:D.a,VSpacer:P.a})}}]);