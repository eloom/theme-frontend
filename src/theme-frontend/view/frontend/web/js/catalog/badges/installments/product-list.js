var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,d,c){a instanceof String&&(a=String(a));for(var e=a.length,b=0;b<e;b++){var f=a[b];if(d.call(c,f,b,a))return{i:b,v:f}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,d,c){if(a==Array.prototype||a==Object.prototype)return a;a[d]=c.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var d=0;d<a.length;++d){var c=a[d];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,d){var c=$jscomp.propertyToPolyfillSymbol[d];if(null==c)return a[d];c=a[c];return void 0!==c?c:a[d]};
$jscomp.polyfill=function(a,d,c,e){d&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,d,c,e):$jscomp.polyfillUnisolated(a,d,c,e))};$jscomp.polyfillUnisolated=function(a,d,c,e){c=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var b=a[e];if(!(b in c))return;c=c[b]}a=a[a.length-1];e=c[a];d=d(e);d!=e&&null!=d&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:d})};
$jscomp.polyfillIsolated=function(a,d,c,e){var b=a.split(".");a=1===b.length;e=b[0];e=!a&&e in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var f=0;f<b.length-1;f++){var g=b[f];if(!(g in e))return;e=e[g]}b=b[b.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?e[b]:null;d=d(c);null!=d&&(a?$jscomp.defineProperty($jscomp.polyfills,b,{configurable:!0,writable:!0,value:d}):d!==c&&($jscomp.propertyToPolyfillSymbol[b]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(b):$jscomp.POLYFILL_PREFIX+b,b=
$jscomp.propertyToPolyfillSymbol[b],$jscomp.defineProperty(e,b,{configurable:!0,writable:!0,value:d})))};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(d,c){return $jscomp.findInternal(this,d,c).v}},"es6","es3");
define(["jquery","underscore","mage/translate","Magento_Catalog/js/price-utils"],function(a,d,c,e){a.widget("mage.EloomBadgesInstallments",{options:{selectors:{finalPrice:'[data-price-type="finalPrice"]',minPrice:'[data-price-type="minPrice"]'},selectorProductTile:".product-item-info"},price:0,_init:function(){this.filterRowsFromCache();var b=this.element.parents(this.options.selectorProductTile).find(".price-box"),f='<span class="installments">';this.isCcVisible()&&this.hasPrice()&&(f+='<span class="cc">'+
this.ccData()+"</span>");this.isVoucherVisible()&&this.hasPrice()&&(f+='<span class="voucher">'+this.voucherData()+"</span>");b.append(f+"</span>")},filterRowsFromCache:function(){var b=[],f=this.element.parents(this.options.selectorProductTile).find(".price-box"),g=f.find(this.options.selectors.finalPrice);0<g.length&&(g=g.first().data("price-amount"),b.push(g));f=f.find(this.options.selectors.minPrice);0<f.length&&(f=f.first().data("price-amount"),b.push(f));this.price=d.first(b)},isVisible:function(){return this.isCcVisible()||
this.isVoucherVisible()},isCcVisible:function(){return this.options.installments.cc.active},isVoucherVisible:function(){return this.options.installments.voucher.active},hasPrice:function(){return 0<this.price},ccData:function(){var b=this.options.installments.cc,f=e.formatPrice(this.price/b.installmensWithoutInterest);return c(b.text).replace("%1",b.installmensWithoutInterest).replace("%2",f)},voucherData:function(){var b=this.options.installments.voucher,f=e.formatPrice(this.price-this.price*b.discount/
100);return c(b.text).replace("%1",f).replace("%2",b.discount)}});return a.mage.EloomBadgesInstallments});