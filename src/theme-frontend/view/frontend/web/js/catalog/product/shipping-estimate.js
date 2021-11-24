var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,b,c){a instanceof String&&(a=String(a));for(var e=a.length,d=0;d<e;d++){var g=a[d];if(b.call(c,g,d,a))return{i:d,v:g}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,b){var c=$jscomp.propertyToPolyfillSymbol[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]};
$jscomp.polyfill=function(a,b,c,e){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,c,e):$jscomp.polyfillUnisolated(a,b,c,e))};$jscomp.polyfillUnisolated=function(a,b,c,e){c=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var d=a[e];if(!(d in c))return;c=c[d]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,c,e){var d=a.split(".");a=1===d.length;e=d[0];e=!a&&e in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var g=0;g<d.length-1;g++){var f=d[g];if(!(f in e))return;e=e[f]}d=d[d.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?e[d]:null;b=b(c);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,d,{configurable:!0,writable:!0,value:b}):b!==c&&($jscomp.propertyToPolyfillSymbol[d]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(d):$jscomp.POLYFILL_PREFIX+d,d=
$jscomp.propertyToPolyfillSymbol[d],$jscomp.defineProperty(e,d,{configurable:!0,writable:!0,value:b})))};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(b,c){return $jscomp.findInternal(this,b,c).v}},"es6","es3");
define("jquery underscore Magento_Ui/js/form/form mage/storage Eloom_Core/js/model/url-builder Eloom_Geolocation/js/storage Eloom_Core/js/masks validation".split(" "),function(a,b,c,e,d,g){return c.extend({defaults:{template:"Eloom_ThemeFrontend/catalog/product/shipping-estimation",postCode:null,carriers:[],selectors:{container:"#eloom-shipping-estimate",productForm:"#product_addtocart_form",loader:"[data-role=loader]",postCode:"#postcode"}},initialize:function(){this._super();this._assignVariables();
this._assignMasks()},initObservable:function(){this._super().observe(["postCode","carriers"]);return this},_assignVariables:function(){this.$form=a(this.selectors.productForm);this.$container=a(this.selectors.container);this.$loader=this.$container.find(this.selectors.loader).first();this.$postCode=a(this.selectors.postCode)},_assignMasks:function(){"pt_BR"==window.eloom.core.lang&&(this.$postCode.data("mask")||this.$postCode.data("mask",!0).mask("00000-000"))},_getFormArray:function(f){f=f.serializeArray();
var h={},m=[];a.each(f,function(l,k){-1<k.name.indexOf("super_attribute")?(l=k.name.match(/\[(.*)\]/).pop(),m.push(l+"|"+k.value)):h[k.name]=k.value});h.options=m;return h},isGeolocationEnabled:function(){return window.eloom.geolocation&&window.eloom.geolocation.active},getLocation:function(){var f=g.getAddressData();f&&f.postalCode&&(this.postCode(f.postalCode),this.estimateShipping())},estimateShipping:function(){var f=this;if(!f.$form.valid())return!1;f.$loader.show();f.carriers.removeAll();var h=
f.$form.find("[name='qty']").first().val(),m=this._getFormArray(f.$form);h={productId:m.product,postCode:f.postCode(),qty:h?h:1,options:m.options.join(",")};e.post(d.createUrl("/eloom/theme/shippingEstimate",{}),JSON.stringify({address:h}),!1).done(function(l){l=JSON.parse(l);l.data&&b.each(l.data,function(k,n){f.carriers.push({carrierTitle:k.carrierTitle,items:k.items})})}).fail().always(function(){f.$loader.hide()})}})});
