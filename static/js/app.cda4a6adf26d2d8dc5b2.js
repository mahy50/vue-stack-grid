webpackJsonp([1],{"1tl5":function(t,e){!function(){for(var t=0,e=["ms","webkit","moz"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var i=(new Date).getTime(),a=Math.max(0,16-(i-t)),r=window.setTimeout(function(){e(i+a)},a);return t=i+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}()},SrUm:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};n.d(i,"linear",function(){return s}),n.d(i,"easeIn",function(){return o}),n.d(i,"easeOut",function(){return c}),n.d(i,"easeInOut",function(){return l}),n.d(i,"easeInSine",function(){return d}),n.d(i,"easeOutSine",function(){return v}),n.d(i,"easeInOutSine",function(){return p}),n.d(i,"easeInQuad",function(){return f}),n.d(i,"easeOutQuad",function(){return h}),n.d(i,"easeInOutQuad",function(){return m}),n.d(i,"easeInCubic",function(){return _}),n.d(i,"easeOutCubic",function(){return g}),n.d(i,"easeInOutCubic",function(){return b}),n.d(i,"easeInQuart",function(){return I}),n.d(i,"easeOutQuart",function(){return y}),n.d(i,"easeInOutQuart",function(){return O}),n.d(i,"easeInQuint",function(){return w}),n.d(i,"easeOutQuint",function(){return x}),n.d(i,"easeInOutQuint",function(){return C}),n.d(i,"easeInExpo",function(){return k}),n.d(i,"easeOutExpo",function(){return z}),n.d(i,"easeInOutExpo",function(){return S}),n.d(i,"easeInCirc",function(){return W}),n.d(i,"easeOutCirc",function(){return Q}),n.d(i,"easeInOutCirc",function(){return N}),n.d(i,"easeInBack",function(){return A}),n.d(i,"easeOutBack",function(){return E}),n.d(i,"easeInOutBack",function(){return $});var a=n("7+uW"),r=n("Gu7T"),u=n.n(r),s=(n("1tl5"),"linear"),o="ease-in",c="ease-out",l="ease-in-out",d="cubic-bezier(0.47, 0, 0.745, 0.715)",v="cubic-bezier(0.39, 0.575, 0.565, 1)",p="cubic-bezier(0.445, 0.05, 0.55, 0.95)",f="cubic-bezier(0.55, 0.085, 0.68, 0.53)",h="cubic-bezier(0.25, 0.46, 0.45, 0.94)",m="cubic-bezier(0.455, 0.03, 0.515, 0.955)",_="cubic-bezier(0.55, 0.055, 0.675, 0.19)",g="cubic-bezier(0.215, 0.61, 0.355, 1)",b="cubic-bezier(0.645, 0.045, 0.355, 1)",I="cubic-bezier(0.895, 0.03, 0.685, 0.22)",y="cubic-bezier(0.165, 0.84, 0.44, 1)",O="cubic-bezier(0.77, 0, 0.175, 1)",w="cubic-bezier(0.755, 0.05, 0.855, 0.06)",x="cubic-bezier(0.23, 1, 0.32, 1)",C="cubic-bezier(0.86, 0, 0.07, 1)",k="cubic-bezier(0.95, 0.05, 0.795, 0.035)",z="cubic-bezier(0.19, 1, 0.22, 1)",S="cubic-bezier(1, 0, 0, 1)",W="cubic-bezier(0.6, 0.04, 0.98, 0.335)",Q="cubic-bezier(0.075, 0.82, 0.165, 1)",N="cubic-bezier(0.785, 0.135, 0.15, 0.86)",A="cubic-bezier(0.6, -0.28, 0.735, 0.045)",E="cubic-bezier(0.175, 0.885, 0.32, 1.275)",$="cubic-bezier(0.68, -0.55, 0.265, 1.55)",F=n("fZjL"),M=n.n(F),B=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};M()(e).forEach(function(n){t.style.setProperty(n,e[n])})},X={name:"stack-grid",data:function(){return{dataset:0,oldColumnNum:0}},props:{columnWidth:{type:Number,default:200},gutterX:{type:Number,default:20},gutterY:{type:Number,default:20},center:{type:Boolean,default:!0},easing:{type:String,default:"easeOut"},duration:{type:String,default:"480ms"},delay:{type:String,default:"0ms"},order:{type:Boolean,default:!1}},computed:{containerStyles:function(){return{display:this.center?"flex":"","justify-content":this.center?"center":""}}},methods:{getContainerWidth:function(){var t=this.$refs.container.parentNode;return t||t.clientWidth?t.clientWidth:window?window.document.clientWidth:""},getColumnNum:function(t){var e=this.columnWidth,n=this.gutterX;return Math.floor((t+n)/(e+n))},getItemHeight:function(t){if(t.elm){var e=window.getComputedStyle(t.elm).height.replace("px","");return Math.ceil(e)}},genStyles:function(t,e){var n,a,r,u,s=this.columnWidth;return{display:"block",position:"absolute",top:t+"px",left:e+"px",transition:(n=["opacity","top","left"],a=this.duration,r=i[this.easing],u=this.delay,n.map(function(t){return t+" "+a+" "+r+" "+u}).join(",")),width:s+"px"}},setWrapStyles:function(t,e){var n=this;this.$nextTick(function(){B(n.$refs.wrap,{height:e+"px",width:t+"px"})})},resetWrapStyles:function(){var t=this;this.$nextTick(function(){B(t.$refs.wrap,{height:"0px"})})},genLayout:function(t,e){var n=this;if(t){var i=this.columnWidth,a=this.gutterX,r=this.gutterY,s=this.order,o=Array(e).fill(0),c=void 0;t.forEach(function(t,e){c=s?e%o.length:o.indexOf(Math.min.apply(Math,u()(o)));var l=o[c],d=c*(i+a);o[c]+=n.getItemHeight(t)+r;var v=n.genStyles(l,d);B(t.elm,v)});var l=e*(i+a)-a,d=Math.max.apply(Math,u()(o))-r;this.setWrapStyles(l,d),this.dataset=this.$slots.default.length}},updateIfNeed:function(t){var e=this,n=this.getColumnNum(this.getContainerWidth()),i=this.oldColumnNum;(t||i!==n)&&(requestAnimationFrame(function(){return e.genLayout(e.$slots.default,n)}),this.oldColumnNum=n)},init:function(){var t=this,e=this.getColumnNum(this.getContainerWidth());this.$slots.default?this.genLayout(this.$slots.default,e):this.$nextTick(function(){t.genLayout(t.$slots.default,e)})}},updated:function(){this.$slots.default?this.updateIfNeed(!0):this.resetWrapStyles()},mounted:function(){var t=this;this.$nextTick(function(){t.init()}),window.addEventListener("resize",this.updateIfNeed)},destroyed:function(){window.removeEventListener("resize",this.updateIfNeed)}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"container",staticClass:"stack-grid",style:this.containerStyles},[e("div",{ref:"wrap",staticClass:"stack-grid-wrap",style:{position:"relative"}},[this._t("default")],2)])},staticRenderFns:[]},Y=n("VU/8")(X,R,!1,null,null,null).exports,T=n("GDE4"),q={name:"App",data:function(){return{dataset:[],containerWidth:100,columnWidth:200,gutterX:20,gutterY:20,order:!1,easing:"easeOut"}},components:{StackGrid:Y,vueSlider:n.n(T).a},methods:{getStyle:function(){return{display:"block",width:"200px",height:this.getRandomNum(100,350)+"px"}},getRandomNum:function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t},genItems:function(t){return{index:t,styles:this.getStyle(),classNum:this.getRandomNum(1,9)}},getArray:function(t,e){for(var n=[],i=0;i<t;i++){var a=e+i;n[i]=this.genItems(a)}return n},addItems:function(t){var e,n=this.getArray(t,this.dataset.length);(e=this.dataset).push.apply(e,u()(n))},delItems:function(t){this.dataset=[]},shuffle:function(){var t=this,e=this.dataset;e.forEach(function(n,i){var a=t.getRandomNum(0,e.length-1),r=e[i];e[i]=e[a],e[a]=r}),this.dataset=[].concat(u()(e))},changeSize:function(t){t.styles.height=this.getRandomNum(200,300)+"px"}},mounted:function(){this.addItems(this.getRandomNum(15,20))}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"controller"},[n("div",{staticClass:"btn-group"},[n("button",{on:{click:function(e){t.addItems(2)}}},[t._v("Append")]),t._v(" "),n("button",{on:{click:function(e){t.delItems()}}},[t._v("Delete")]),t._v(" "),n("button",{on:{click:function(e){t.shuffle()}}},[t._v("Shuffle")]),t._v(" "),n("label",[t._v("Easing:")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.easing,expression:"easing"}],attrs:{name:"easing",id:"","aria-placeholder":"easing"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.easing=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"linear"}},[t._v("linear")]),t._v(" "),n("option",{attrs:{value:"easeIn"}},[t._v("easeIn")]),t._v(" "),n("option",{attrs:{value:"easeOut"}},[t._v("easeOut")]),t._v(" "),n("option",{attrs:{value:"easeInOut"}},[t._v("easeInOut")]),t._v(" "),n("option",{attrs:{value:"easeInSine"}},[t._v("easeInSine")]),t._v(" "),n("option",{attrs:{value:"easeOutSine"}},[t._v("easeOutSine")]),t._v(" "),n("option",{attrs:{value:"easeInOutSine"}},[t._v("easeInOutSine")]),t._v(" "),n("option",{attrs:{value:"easeInQuad"}},[t._v("easeInQuad")]),t._v(" "),n("option",{attrs:{value:"easeOutQuad"}},[t._v("easeOutQuad")]),t._v(" "),n("option",{attrs:{value:"easeInOutQuad"}},[t._v("easeInOutQuad")]),t._v(" "),n("option",{attrs:{value:"easeInCubic"}},[t._v("easeInCubic")]),t._v(" "),n("option",{attrs:{value:"easeOutCubic"}},[t._v("easeOutCubic")]),t._v(" "),n("option",{attrs:{value:"easeInOutCubic"}},[t._v("easeInOutCubic")]),t._v(" "),n("option",{attrs:{value:"easeInQuart"}},[t._v("easeInQuart")]),t._v(" "),n("option",{attrs:{value:"easeOutQuart"}},[t._v("easeOutQuart")]),t._v(" "),n("option",{attrs:{value:"easeInOutQuart"}},[t._v("easeInOutQuart")]),t._v(" "),n("option",{attrs:{value:"easeInQuint"}},[t._v("easeInQuint")]),t._v(" "),n("option",{attrs:{value:"easeOutQuint"}},[t._v("easeOutQuint")]),t._v(" "),n("option",{attrs:{value:"easeInOutQuint"}},[t._v("easeInOutQuint")]),t._v(" "),n("option",{attrs:{value:"easeInExpo"}},[t._v("easeInExpo")]),t._v(" "),n("option",{attrs:{value:"easeOutExpo"}},[t._v("easeOutExpo")]),t._v(" "),n("option",{attrs:{value:"easeInOutExpo"}},[t._v("easeInOutExpo")]),t._v(" "),n("option",{attrs:{value:"easeInCirc"}},[t._v("easeInCirc")]),t._v(" "),n("option",{attrs:{value:"easeOutCirc"}},[t._v("easeOutCirc")]),t._v(" "),n("option",{attrs:{value:"easeInOutCirc"}},[t._v("easeInOutCirc")]),t._v(" "),n("option",{attrs:{value:"easeInBack"}},[t._v("easeInBack")]),t._v(" "),n("option",{attrs:{value:"easeOutBack"}},[t._v("easeOutBack")]),t._v(" "),n("option",{attrs:{value:"easeInOutBack"}},[t._v("easeInOutBack")])]),t._v(" "),n("label",{attrs:{for:""}},[t._v("order:\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.order,expression:"order"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.order)?t._i(t.order,null)>-1:t.order},on:{change:function(e){var n=t.order,i=e.target,a=!!i.checked;if(Array.isArray(n)){var r=t._i(n,null);i.checked?r<0&&(t.order=n.concat([null])):r>-1&&(t.order=n.slice(0,r).concat(n.slice(r+1)))}else t.order=a}}})])]),t._v(" "),n("div",{staticClass:"slider-wrap"},[n("span",[t._v("Container Width: "+t._s(t.containerWidth)+"%")]),t._v(" "),n("vue-slider",{staticClass:"slider",attrs:{min:30,max:100,tooltip:"false",lazy:!0,height:2},model:{value:t.containerWidth,callback:function(e){t.containerWidth=e},expression:"containerWidth"}})],1),t._v(" "),n("div",{staticClass:"slider-wrap"},[n("span",[t._v("columnWidth: "+t._s(t.columnWidth)+"px")]),t._v(" "),n("vue-slider",{staticClass:"slider",attrs:{min:100,max:300,tooltip:"false",lazy:!0,height:2},model:{value:t.columnWidth,callback:function(e){t.columnWidth=e},expression:"columnWidth"}})],1),t._v(" "),n("div",{staticClass:"slider-wrap"},[n("span",[t._v("gutterX: "+t._s(t.gutterX)+"px")]),t._v(" "),n("vue-slider",{staticClass:"slider",attrs:{min:0,max:80,tooltip:"false",lazy:!0,height:2},model:{value:t.gutterX,callback:function(e){t.gutterX=e},expression:"gutterX"}})],1),t._v(" "),n("div",{staticClass:"slider-wrap"},[n("span",[t._v("gutterY: "+t._s(t.gutterY)+"px")]),t._v(" "),n("vue-slider",{staticClass:"slider",attrs:{min:0,max:80,tooltip:"false",lazy:!0,height:2},model:{value:t.gutterY,callback:function(e){t.gutterY=e},expression:"gutterY"}})],1)]),t._v(" "),n("div",{staticClass:"container",style:{width:t.containerWidth+"%"}},[n("StackGrid",{attrs:{columnWidth:t.columnWidth,gutterX:t.gutterX,gutterY:t.gutterY,order:t.order,easing:t.easing}},t._l(t.dataset,function(e,i){return n("div",{key:i,staticClass:"stack-item",class:"stack-item-"+e.classNum},[n("div",{style:e.styles,on:{click:function(n){t.changeSize(e)}}},[t._v(t._s(e.index))])])}))],1)])},staticRenderFns:[]};var P=n("VU/8")(q,L,!1,function(t){n("rPw8")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:P},template:"<App/>"})},rPw8:function(t,e){}},["SrUm"]);
//# sourceMappingURL=app.cda4a6adf26d2d8dc5b2.js.map