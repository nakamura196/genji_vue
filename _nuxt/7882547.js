(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{307:function(t,e,r){"use strict";var n=r(227);e.a=n.a},465:function(t,e,r){"use strict";var n=r(28),o=r(27),c=r(39),l=r(36),d=r(23),h=r(8),v=(r(13),r(4),r(74),r(80));function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(c.a)(r,t);var e=f(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(n.a)(r)}(v.Vue);m([Object(v.Prop)({required:!0})],_.prototype,"items",void 0);var y=_=m([v.Component],_),x=r(75),O=r(97),j=r.n(O),w=r(475),C=r(455),k=r(209),I=r(65),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.a=component.exports;j()(component,{VBreadcrumbs:w.a,VContainer:C.a,VIcon:k.a,VSheet:I.a})},466:function(t,e,r){var content=r(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("b1bed018",content,!0,{sourceMap:!1})},467:function(t,e,r){var n=r(21)(!1);n.push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=n},475:function(t,e,r){"use strict";r(10),r(7),r(11),r(4),r(13),r(9),r(17);var n=r(2),o=(r(81),r(466),r(91)),c=r(12);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=Object(c.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),v=r(1),f=Object(v.i)("v-breadcrumbs__divider","li"),m=r(37);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(c.a)(m.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(f,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(h,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},482:function(t,e,r){var content=r(483);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("5db1c400",content,!0,{sourceMap:!1})},483:function(t,e,r){var n=r(21)(!1);n.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=n},488:function(t,e,r){var content=r(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("dc0628f2",content,!0,{sourceMap:!1})},489:function(t,e,r){var n=r(21)(!1);n.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=n},498:function(t,e,r){"use strict";r(10),r(7),r(11),r(4),r(13),r(9),r(17);var n=r(2),o=(r(32),r(482),r(223)),c=r(307),l=r(96),d=r(55),h=r(37),v=r(0).default.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),f=r(12),m=r(14);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(f.a)(o.a,d.a,v).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(n.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(c.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(l.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(l.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=y(y({},o.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||h.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(m.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},534:function(t,e,r){"use strict";var n=r(2),o=(r(30),r(488),r(123)),c=r(42),l=r(147),d=r(132),h=r(206),v=r(55),f=r(1),m=r(14),_=r(12);e.a=Object(_.a)(c.a,l.a,d.a,h.a,v.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,r=!(this.bottom||this.left||this.top||this.right),n=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||r?o=n+e.width/2-content.width/2:(this.left||this.right)&&(o=n+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,r=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=r+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=r+e.height/2-content.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),!1===this.attach&&(n+=this.pageYOffset),"".concat(this.calcYOverflow(n),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(f.h)(this.maxWidth),minWidth:Object(f.h)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(f.t)(this,"activator",!0)&&Object(m.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=o.a.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===f.x.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(n.a)(t,this.contentClass,!0),Object(n.a)(t,"menuable__content__active",this.isActive),Object(n.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},565:function(t,e,r){"use strict";r.r(e);r(74),r(41),r(24),r(43),r(33),r(7),r(47),r(51),r(38);var n=r(16),o=r(27),c=r(28),l=r(39),d=r(36),h=r(23),v=r(8),f=(r(58),r(13),r(4),r(26),r(19),r(60),r(59),r(80)),m=r(465);function _(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var O=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},j=function(t){Object(l.a)(d,t);var e,r=x(d);function d(){var t;return Object(o.a)(this,d),(t=r.apply(this,arguments)).baseUrl="https://genji.dl.itc.u-tokyo.ac.jp",t}return Object(c.a)(d,[{key:"getItem",value:function(t,e){var r=this.items;return t-1<r[e-1].length?r[e-1][t-1]:null}},{key:"getICVUrl",value:function(t){return"http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest="+t.manifest+"&canvas="+t.canvas+"&xywh="+t.xywh+"&xywh_highlight=border"}},{key:"getVDiffUrl",value:function(t,e,r){var n=this.items,o=n[e-1][t-1],c=n[r-1][t-1],l=this.labels;return o&&o.thumbnail&&c&&c.thumbnail?"http://codh.rois.ac.jp/software/vdiffjs/demo/?img1=".concat(o.thumbnail.replace("/200,/","/600,/"),"&img1_label=").concat(l[e-1],"&img2=").concat(c.thumbnail.replace("/200,/","/600,/"),"&img2_label=").concat(l[r-1]):""}},{key:"getMiradorUrl",value:function(t){var e,r=[],n=_(this.items);try{for(n.s();!(e=n.n()).done;){var o=e.value;if(o.length>t){var c=o[t-1];c["@id"]&&r.push({manifest:c.manifest,canvas:c["@id"]})}}}catch(t){n.e(t)}finally{n.f()}return this.baseUrl+"/mirador?params="+encodeURIComponent(JSON.stringify(r))+"&layout=1x"+r.length}},{key:"asyncData",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c,l,d,h,v,f,m,y,data,x,O,j,w,C,k,I,$,B;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.app,n=e.$axios,o=["100097415","100241606"],c=r.context.env.BASE_URL,l=[],d=[],h=[],v=0,f=0,m=o;case 8:if(!(f<m.length)){t.next=59;break}return y=m[f],t.next=12,n.$get(c+"/data/face/"+y+".json");case 12:data=t.sent,x=[],d.push(data.label),h.push(data.related),O=_(data.selections),t.prev=17,O.s();case 19:if((j=O.n()).done){t.next=46;break}w=j.value,C=w.within["@id"],k=_(w.members),t.prev=23,k.s();case 25:if((I=k.n()).done){t.next=36;break}if($=I.value,x.push($),$["@id"]){t.next=30;break}return t.abrupt("continue",34);case 30:B=$["@id"].split("#xywh="),$.canvas=B[0],$.xywh=B[1],$.manifest=C;case 34:t.next=25;break;case 36:t.next=41;break;case 38:t.prev=38,t.t0=t.catch(23),k.e(t.t0);case 41:return t.prev=41,k.f(),t.finish(41);case 44:t.next=19;break;case 46:t.next=51;break;case 48:t.prev=48,t.t1=t.catch(17),O.e(t.t1);case 51:return t.prev=51,O.f(),t.finish(51);case 54:l.push(x),x.length>v&&(v=x.length);case 56:f++,t.next=8;break;case 59:return t.abrupt("return",{total:v,items:l,labels:d,urls:h});case 60:case"end":return t.stop()}}),t,null,[[17,48,51,54],[23,38,41,44]])}))),function(t){return e.apply(this,arguments)})},{key:"title",get:function(){return this.$t("源氏百人一首（パタパタ顔比較）")}},{key:"bh",get:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.$t("挿絵画像の比較"),disabled:!1,to:this.localePath({name:"picture"}),exact:!0},{text:this.title}]}}]),d}(f.Vue),w=j=O([Object(f.Component)({components:{Breadcrumbs:m.a}})],j),C=r(75),k=r(97),I=r.n(k),$=r(498),B=r(227),S=r(454),P=r(455),A=r(209),D=r(161),R=r(457),E=r(534),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Breadcrumbs",{attrs:{items:t.bh}}),t._v(" "),r("v-container",{attrs:{id:"main",fluid:"",lass:"my-5"}},[r("h2",{staticClass:"my-5"},[t._v(t._s(t.title))]),t._v(" "),r("p",{staticClass:"my-5"},[r("v-btn",{attrs:{color:"primary darken-2",rounded:"",to:t.localePath({name:"picture-slug-about",params:{slug:"face"}}),depressed:""}},[t._v("\n        "+t._s(t.$t("このページについて"))+"\n      ")])],1),t._v(" "),r("v-row",{staticClass:"py-4"},[r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[t._v("Index "+t._s(t.$t("比較"))+"（vdiff.js）")]),t._v(" "),t._l(t.items.length,(function(e){return r("v-col",{key:e,staticClass:"text-center",attrs:{cols:"12",md:"4"}},[t._v("Book ["+t._s(e)+"]:\n        "),r("a",{attrs:{target:"_blank",href:""+t.urls[e-1]}},[t._v(t._s(t.labels[e-1])+"\n          "),r("v-icon",{staticClass:"primary--text ml-1"},[t._v("mdi-exit-to-app")])],1)])}))],2),t._v(" "),t._l(t.total,(function(e){return r("v-row",{key:e,style:e%2==1?"background-color: #ECEFF1":"",attrs:{id:e}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[r("div",{staticClass:"mb-2"},[t._v("["+t._s(e)+"]")]),t._v(" "),r("v-img",{staticClass:"mx-auto",attrs:{contain:"","max-height":"200px","max-width":"200px",src:t.baseUrl+"/data/face/png/"+("0000"+e).slice(-4)+".png"}}),t._v(" "),r("div",{staticClass:"mt-4"},[r("v-btn",{attrs:{color:"primary",target:"_blank",rounded:"",depressed:"",href2:t.getMiradorUrl(e),href:t.getVDiffUrl(e,1,2)}},[t._v(t._s(t.$t("比較"))+"\n            "),r("v-icon",{staticClass:"ml-1"},[t._v("mdi-exit-to-app")]),t._v("（vdiff.js）")],1)],1)],1),t._v(" "),t._l(t.items.length,(function(n){return r("v-col",{key:n,staticClass:"py-5",attrs:{cols:"12",md:"4"}},[r("small",[t.getItem(e,n)&&t.getItem(e,n).memo?r("v-alert",{attrs:{type:"info"}},[t._v(t._s(t.getItem(e,n).memo))]):t._e()],1),t._v(" "),t.getItem(e,n)&&t.getItem(e,n)["@id"]?[r("v-img",{staticClass:"mx-auto",attrs:{contain:"","max-height":"200px","max-width":"200px",src:t.getItem(e,n).thumbnail}}),t._v(" "),r("div",{staticClass:"mt-4"},[r("p",[r("small",[t._v(t._s(t.getItem(e,n)["@id"]))])]),t._v(" "),r("a",{attrs:{target:"_blank",href:t.getICVUrl(t.getItem(e,n))}},[t._v("\n              "+t._s(t.$t("閲覧する"))+"\n              "),r("v-icon",{staticClass:"primary--text ml-1"},[t._v("mdi-exit-to-app")]),t._v("（IIIF Curation Viewer）\n            ")],1),t._v(" "),t._e()])]:t._e()],2)}))],2)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;I()(component,{VAlert:$.a,VBtn:B.a,VCol:S.a,VContainer:P.a,VIcon:A.a,VImg:D.a,VRow:R.a,VTooltip:E.a})}}]);