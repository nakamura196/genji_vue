(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{460:function(t,e,n){"use strict";var r=n(468),c=n(452),o=n(207),l=n(65),v=n(29),f=n(28),_=n(39),d=n(36),h=n(24),y=n(8),m=(n(13),n(4),n(75),n(81));function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var c=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var O=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},x=function(t){Object(_.a)(n,t);var e=j(n);function n(){return Object(f.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n)}(m.Vue);O([Object(m.Prop)({required:!0})],x.prototype,"items",void 0);var w=x=O([m.Component],x),C=n(76),component=Object(C.a)(w,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(l.a,{attrs:{color:"grey lighten-2"}},[e(c.a,{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[e(r.a,{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[e(o.a,[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.a=component.exports},548:function(t,e,n){"use strict";n.r(e);var r=n(469),c=n(461),o=n(452),l=n(476),v=n(28),f=n(29),_=n(39),d=n(36),h=n(24),y=n(8),m=(n(13),n(4),n(75),n(81)),j=n(460);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var c=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var x=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},w=function(t){Object(_.a)(n,t);var e=O(n);function n(){var t;return Object(v.a)(this,n),(t=e.apply(this,arguments)).title=t.$t("about"),t.baseUrl="https://genji.dl.itc.u-tokyo.ac.jp",t}return Object(f.a)(n,[{key:"head",value:function(){return{title:this.title}}},{key:"bh",get:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.title}]}}]),n}(m.Vue),C=w=x([Object(m.Component)({components:{Breadcrumbs:j.a}})],w),R=n(76),component=Object(R.a)(C,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("Breadcrumbs",{attrs:{items:t.bh}}),t._v(" "),e(o.a,[e(r.a,{staticClass:"my-5",attrs:{flat:""}},[e(c.c,[e("h2",[t._v("\n          "+t._s(t.$t("about"))+"\n          "),"en"==t.$i18n.locale?[t._v("(Written in Japanese)")]:t._e()],2)]),t._v(" "),e(c.b,[e("div",{staticClass:"text--primary"},["ja"==t.$i18n.locale?[t._v("\n            デジタル源氏物語では、インターネット上に一般公開されている『源氏物語』の画像や関連データを用い、以下のシステムを構築しています。\n            "),e("img",{staticClass:"my-5",attrs:{width:"100%",src:t.baseUrl+"/assets/overview.png"}})]:[t._v('\n            Digital Tale of Genji uses the images and related data of "Tale of\n            Genji " that are open to the public on the Internet to build the\n            following system.\n            '),e("img",{staticClass:"my-5",attrs:{width:"100%",src:t.baseUrl+"/assets/overview.png"}})]],2)])],1),t._v(" "),e(r.a,{staticClass:"my-5",attrs:{flat:""}},[e(c.c,[e("h3",[t._v("\n          "+t._s(t.$t("overview"))+"\n        ")])]),t._v(" "),e(c.b,[e("div",{staticClass:"text--primary"},[t._v("\n          このサイトの翻刻文は、国立国会図書館デジタルコレクションで公開されている\n          "),e("a",{attrs:{href:"http://dl.ndl.go.jp/info:ndljp/pid/3437686"}},[t._v("『校異源氏物語』")]),t._v("（インターネット公開（保護期間満了））の画像をOCR処理し、作成したものです。このサイトで提供する翻刻文へのリンクは、『校異源氏物語』の頁単位を基準に設置されています。\n          また、この頁番号は『源氏物語大成』の頁番号とも同一であるため、研究書との比較においても参照することが可能です。\n          "),e("br"),t._v("画像は、東京大学総合図書館所蔵『源氏物語』、九州大学文学部所蔵『源氏物語』（古活字版）、個人蔵『源氏物語』（無跋無刊記整版本,\n          九州大学附属図書館による画像公開）、国文学研究資料館所蔵『湖月抄』を利用しています。九州大学が公開する二点の『源氏物語』には『源氏物語大成』の頁番号が付与されていたこと、いずれもパブリックドメインの画像として公開されていたことから、本サイトでの活用データとしました。\n        ")])])],1),t._v(" "),e(r.a,{staticClass:"my-5",attrs:{flat:""}},[e(c.c,[e("h3",[t._v("\n          "+t._s(t.$t("browse_image_and_text"))+"\n        ")])]),t._v(" "),e(c.b,[e("div",{staticClass:"text--primary"},[e("ul",[e("li",[t._v("\n              画面左側に『源氏物語』の公開画像が並びます。画面右側の上段は翻刻文（『校異源氏物語』）が、下段は現代語訳（与謝野晶子訳）が表示されます。\n            ")]),t._v(" "),e("li",[t._v("\n              翻刻文にあるIIIFアイコンをクリックすると、該当箇所の画像が開きます。\n            ")]),t._v(" "),e("li",[t._v("\n              画像上に表示される青色のマークは、「新編日本古典文学全集」へのリンクです。同じくオレンジ色のマークは翻刻文の画像（国立国会図書館デジタルコレクション）へのリンクです。\n            ")]),t._v(" "),e("li",[t._v("\n              東大本の画像上に表示される赤色三角のマークは、脱文・錯簡が認められる箇所です。（「"),e("nuxt-link",{attrs:{to:t.localePath({name:"ds"})}},[t._v("東大本・脱文錯簡リスト")]),t._v("」）\n            ")],1),t._v(" "),e("li",[t._v("\n              翻刻文と現代語訳は、リンク付け作業が完了したものから随時公開していきます。\n            ")]),t._v(" "),e("li",[t._v("\n              『校異源氏物語』のテキストデータを活用したい場合は、「"),e("a",{attrs:{href:"https://w3id.org/kouigenjimonogatari/"}},[t._v("校異源氏物語テキストDB")]),t._v("」のサイトをご利用ください。\n            ")])])])])],1),t._v(" "),e(r.a,{staticClass:"my-5",attrs:{flat:""}},[e(c.c,[e("h3",[t._v("\n          "+t._s(t.$t("other"))+"\n        ")])]),t._v(" "),e(c.b,[e("div",{staticClass:"text--primary"},[e("ul",[e("li",[t._v("\n              「頁数でさがす」では、『校異源氏物語』あるいはジャパンナレッジ上の「新編日本古典文学全集」の頁番号から、該当箇所を参照することができます。\n            ")]),t._v(" "),e("li",[t._v("\n              その他、IIIF対応で画像が一般公開されている『源氏物語』のリストも提供しています。\n            ")])])])])],1),t._v(" "),e(l.a),t._v(" "),e(r.a,{staticClass:"my-5",attrs:{flat:""}},[e(c.b,[e("div",{staticClass:"text--primary"},[e("div",[e("p",[t._v("\n              なお、このサイトのバージョン名は、データの公開状況によって更新させてきました。\n            ")]),t._v(" "),e("ul",[e("li",[t._v("\n                東京大学総合図書館所蔵『源氏物語』及び九州大学附属図書館公開の二種類の『源氏物語』のいずれにも『校異源氏物語』の頁番号付与・公開\n              ")]),t._v(" "),e("li",[t._v("『校異源氏物語』のテキストデータ公開")])]),t._v(" "),e("p",{staticClass:"mt-4"},[t._v("\n              上記2つの条件を満たす帖のうち、最も後段の名称をバージョン名としています。"),e("br"),t._v("\n              Ver.KIRITSUBOから始まり2020年9月にはVer.YUMENOUKIHASHI\n              を公開しました。"),e("br"),t._v("\n              今後も、東京大学総合図書館所蔵本の『校異源氏物語』および『新編日本古典文学全集』の頁番号付けやテキストデータ作成、諸本の追加や『湖月抄』とのリンクなどの作業を進めていきます。\n            ")])]),t._v(" "),e("p",[t._v("\n            このサイトの機能について、また「デジタル源氏物語」の取組全般に関してご意見等ありましたら、"),e("a",{attrs:{href:"mailto:digital-genji-public@googlegroups.com"}},[t._v("digital-genji-public@googlegroups.com")]),t._v("\n            までご連絡ください。\n          ")]),t._v(" "),e("p",[t._v("\n            東京大学総合図書館所蔵『源氏物語』は、東京大学が実施している「"),e("a",{attrs:{href:"https://www.lib.u-tokyo.ac.jp/ja/library/contents/archives-top"}},[t._v("東京大学デジタルアーカイブズ構築事業")]),t._v("」（事務局：東京大学附属図書館）によりデジタル化されました。\n          ")])])])],1),t._v(" "),e(l.a),t._v(" "),e(r.a,{staticClass:"my-5",attrs:{flat:""}},[e(c.b,[e("div",{staticClass:"text--primary"},[e("p",[t._v("\n            "+t._s(t.$t("acknowledgement"))+"\n          ")])])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);