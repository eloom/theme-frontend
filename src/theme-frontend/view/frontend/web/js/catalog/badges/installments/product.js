var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,d,c){a instanceof String&&(a=String(a));for(var f=a.length,b=0;b<f;b++){var e=a[b];if(d.call(c,e,b,a))return{i:b,v:e}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,d,c){if(a==Array.prototype||a==Object.prototype)return a;a[d]=c.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var d=0;d<a.length;++d){var c=a[d];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,d){var c=$jscomp.propertyToPolyfillSymbol[d];if(null==c)return a[d];c=a[c];return void 0!==c?c:a[d]};
$jscomp.polyfill=function(a,d,c,f){d&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,d,c,f):$jscomp.polyfillUnisolated(a,d,c,f))};$jscomp.polyfillUnisolated=function(a,d,c,f){c=$jscomp.global;a=a.split(".");for(f=0;f<a.length-1;f++){var b=a[f];if(!(b in c))return;c=c[b]}a=a[a.length-1];f=c[a];d=d(f);d!=f&&null!=d&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:d})};
$jscomp.polyfillIsolated=function(a,d,c,f){var b=a.split(".");a=1===b.length;f=b[0];f=!a&&f in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var e=0;e<b.length-1;e++){var g=b[e];if(!(g in f))return;f=f[g]}b=b[b.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?f[b]:null;d=d(c);null!=d&&(a?$jscomp.defineProperty($jscomp.polyfills,b,{configurable:!0,writable:!0,value:d}):d!==c&&($jscomp.propertyToPolyfillSymbol[b]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(b):$jscomp.POLYFILL_PREFIX+b,b=
$jscomp.propertyToPolyfillSymbol[b],$jscomp.defineProperty(f,b,{configurable:!0,writable:!0,value:d})))};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(d,c){return $jscomp.findInternal(this,d,c).v}},"es6","es3");
define(["jquery","underscore","mage/translate","Magento_Catalog/js/price-utils"],function(a,d,c,f){a.widget("mage.EloomBadgesProductInstallments",{options:{selectors:{finalPrice:'[data-price-type="finalPrice"]',minPrice:'[data-price-type="minPrice"]'},selectorProductTile:".product-info-price"},price:0,_init:function(){this.filterRowsFromCache();var b=this.element,e='<span class="installments">';this.isCcVisible()&&this.hasPrice()&&(e+=this.ccData());this.isVoucherVisible()&&this.hasPrice()&&(e+=this.voucherData());
b.append(e+"</span>")},filterRowsFromCache:function(){var b=[],e=this.element.parents(this.options.selectorProductTile).find(".price-box"),g=e.find(this.options.selectors.finalPrice);0<g.length&&(g=g.first().data("price-amount"),b.push(g));e=e.find(this.options.selectors.minPrice);0<e.length&&(e=e.first().data("price-amount"),b.push(e));this.price=d.first(b)},isVisible:function(){return this.isCcVisible()||this.isVoucherVisible()},isCcVisible:function(){return this.options.installments.cc.active},
isVoucherVisible:function(){return this.options.installments.voucher.active},hasPrice:function(){return 0<this.price},ccData:function(){var b=this.options.installments.cc,e=f.formatPrice(this.price/b.installmensWithoutInterest);e=c(b.text).replace("%1",b.installmensWithoutInterest).replace("%2",e);return'<span class="cc" data-installments="'+b.installmensWithoutInterest+'">'+e+"</span>"},voucherData:function(){var b=this.options.installments.voucher,e=f.formatPrice(this.price-this.price*b.discount/
100);e=c(b.text).replace("%1",e).replace("%2",b.discount);return'<span class="voucher" data-discount="'+b.discount+'">'+e+"</span>"}});return a.mage.EloomBadgesProductInstallments});
