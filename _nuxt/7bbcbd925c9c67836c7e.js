(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{445:function(t,e,n){"use strict";n.r(e);n(19),n(20),n(5),n(50),n(22),n(51),n(40);var r=n(13),o=n(21),c=n(35),l=n(27),d=n(24),f=n(14),h=n(17),v=n(56),m=n(95),y=n.n(m);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var w=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},k=function(t){Object(l.a)(d,t);var e,n=j(d);function d(){var t;return Object(o.a)(this,d),(t=n.apply(this,arguments)).url="https://genji.dl.itc.u-tokyo.ac.jp/data/ds.json",t}return Object(c.a)(d,[{key:"head",value:function(){return{title:this.$t("東大本・脱文錯簡リスト")}}},{key:"asyncData",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,i,o,c,l,d,f,h,canvas,v,m,j,w,map,k,_,param;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://genji.dl.itc.u-tokyo.ac.jp/data/ds.json").then((function(data){return data.data}));case 2:for(e=t.sent,n=e.selections,r=[],i=0;i<n.length;i++)for(o=n[i],c=o.members,l=0;l<c.length;l++){for(d=c[l],f=d["@id"],h=f.split("#xywh="),canvas=h[0],v=h[1].split(","),m=Number(v[1])-150,j=Number(v[3])+150,f=canvas+"#xywh="+v[0]+","+m+","+v[2]+","+j,w=d.metadata,map={},k=0;k<w.length;k++)_=w[k],map[_.label]=_.value;param=[{manifest:"https://genji.dl.itc.u-tokyo.ac.jp/data/iiif/org/東大本/"+("00"+Number(map.Vol)).slice(-2)+"/manifest.json",canvas:f}],r.push({vol:map.Vol,title:map.Title,imageNum:map.Page,description:map.Text,type:map.Type,url:"https://genji.dl.itc.u-tokyo.ac.jp/mirador3/?params="+encodeURIComponent(JSON.stringify(param))+"&annotationState=on"})}return t.abrupt("return",{desserts:r});case 7:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})},{key:"headers",get:function(){return[{text:this.$t("volume"),value:"vol"},{text:this.$t("title"),value:"title"},{text:this.$t("imageNum"),value:"imageNum"},{text:this.$t("explanation"),value:"description",width:"40%"},{text:this.$t("type"),value:"type"},{text:this.$t("画像をみる"),value:"url"}]}}]),d}(v.Vue),_=k=w([v.Component],k),x=n(46),C=n(75),O=n.n(C),R=n(164),V=n(387),$=n(386),N=n(354),T=n(440),D=n(398),S=n(359),component=Object(x.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-card",{attrs:{flat:""}},[n("v-card-title",[n("h2",{staticClass:"my-5"},[t._v(t._s(t.$t("東大本・脱文錯簡リスト")))])]),t._v(" "),"ja"===t.$i18n.locale?[n("p",[t._v("\n          東大本の画像に『校異源氏物語』及び『新編日本古典文学全集』の頁番号を付与していく過程で、\n          これら両書の本文との比較において、東大本に本文の脱落や錯簡（綴じ違いなどで、頁の順序が乱れていること）が起こっていると判断される箇所が複数見つかりました。\n          以下がその一覧です。なお、該当箇所の画像にも赤色三角のアイコンを表示し、説明を付しています。\n        ")])]:[n("p",[t._v('\n          We found some binding errors and ommisions in "Todaibon", in the\n          process of assigning the page numbers of "Kōi Genji Monogatari" and\n          "Shinpen Nihon koten bungaku zenshū". Below is a list. In addition,\n          a red triangle icon is also displayed on the image of the relevant\n          part with its explanation.\n        ')])],t._v(" "),n("v-data-table",{staticClass:"mt-5",attrs:{headers:t.headers,items:t.desserts,"items-per-page":-1},scopedSlots:t._u([{key:"item.description",fn:function(e){var r=e.item;return[n("div",{staticClass:"py-2",domProps:{innerHTML:t._s(r.description)}})]}},{key:"item.url",fn:function(t){var e=t.item;return[n("a",{attrs:{target:"_blank",href:e.url}},[n("img",{staticClass:"m-2",attrs:{src:"https://iiif.dl.itc.u-tokyo.ac.jp/images/mirador.png"}})])]}}])}),t._v(" "),n("v-divider",{staticClass:"my-5"}),t._v(" "),n("v-card-title",[n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{target:"_blank",small:"",href:"http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation="+t.url+"&mode=annotation"}},[t._v("\n          "+t._s(t.$t("Curation Viewerでみる"))+"\n          "),n("i",{staticClass:"mdi mdi-open-in-new"})])],1)],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VBtn:R.a,VCard:V.a,VCardTitle:$.c,VContainer:N.a,VDataTable:T.a,VDivider:D.a,VSpacer:S.a})}}]);