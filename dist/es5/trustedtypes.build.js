(function(){var aa="function"==typeof Object.create?Object.create:function(a){function c(){}c.prototype=a;return new c},f;if("function"==typeof Object.setPrototypeOf)f=Object.setPrototypeOf;else{var m;a:{var ba={m:!0},n={};try{n.__proto__=ba;m=n.m;break a}catch(a){}m=!1}f=m?function(a,c){a.__proto__=c;if(a.__proto__!==c)throw new TypeError(a+" is not extensible");return a}:null}var p=f;
function q(a,c){a.prototype=aa(c.prototype);a.prototype.constructor=a;if(p)p(a,c);else for(var d in c)if("prototype"!=d)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(c,d);e&&Object.defineProperty(a,d,e)}else a[d]=c[d];a.L=c.prototype}var t="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,d){a!=Array.prototype&&a!=Object.prototype&&(a[c]=d.value)},u="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function v(){v=function(){};u.Symbol||(u.Symbol=fa)}var fa=function(){var a=0;return function(c){return"jscomp_symbol_"+(c||"")+a++}}();function w(){v();var a=u.Symbol.iterator;a||(a=u.Symbol.iterator=u.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&t(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return x(this)}});w=function(){}}function x(a){var c=0;return A(function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}})}
function A(a){w();a={next:a};a[u.Symbol.iterator]=function(){return this};return a}function B(a){w();var c=a[Symbol.iterator];return c?c.call(a):x(a)}function C(a,c){return Object.prototype.hasOwnProperty.call(a,c)}function D(a,c){if(c){var d=u;a=a.split(".");for(var e=0;e<a.length-1;e++){var b=a[e];b in d||(d[b]={});d=d[b]}a=a[a.length-1];e=d[a];c=c(e);c!=e&&null!=c&&t(d,a,{configurable:!0,writable:!0,value:c})}}
D("WeakMap",function(a){function c(a){this.a=(g+=Math.random()+1).toString();if(a){v();w();a=B(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}function d(a){C(a,b)||t(a,b,{value:{}})}function e(a){var c=Object[a];c&&(Object[a]=function(a){d(a);return c(a)})}if(function(){if(!a||!Object.seal)return!1;try{var c=Object.seal({}),b=Object.seal({}),d=new a([[c,2],[b,3]]);if(2!=d.get(c)||3!=d.get(b))return!1;d.delete(c);d.set(b,4);return!d.has(c)&&4==d.get(b)}catch(z){return!1}}())return a;
var b="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;c.prototype.set=function(a,c){d(a);if(!C(a,b))throw Error("WeakMap key fail: "+a);a[b][this.a]=c;return this};c.prototype.get=function(a){return C(a,b)?a[b][this.a]:void 0};c.prototype.has=function(a){return C(a,b)&&C(a[b],this.a)};c.prototype.delete=function(a){return C(a,b)&&C(a[b],this.a)?delete a[b][this.a]:!1};return c});
D("Map",function(a){function c(){var a={};return a.h=a.next=a.head=a}function d(a,c){var b=a.a;return A(function(){if(b){for(;b.head!=a.a;)b=b.h;for(;b.next!=b.head;)return b=b.next,{done:!1,value:c(b)};b=null}return{done:!0,value:void 0}})}function e(a,c){var b=c&&typeof c;"object"==b||"function"==b?g.has(c)?b=g.get(c):(b=""+ ++h,g.set(c,b)):b="p_"+c;var d=a.f[b];if(d&&C(a.f,b))for(a=0;a<d.length;a++){var e=d[a];if(c!==c&&e.key!==e.key||c===e.key)return{id:b,list:d,index:a,b:e}}return{id:b,list:d,
index:-1,b:void 0}}function b(a){this.f={};this.a=c();this.size=0;if(a){a=B(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(B([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||
"t"!=e.value[1]||!d.next().done?!1:!0}catch(G){return!1}}())return a;v();w();var g=new WeakMap;b.prototype.set=function(a,c){a=0===a?0:a;var b=e(this,a);b.list||(b.list=this.f[b.id]=[]);b.b?b.b.value=c:(b.b={next:this.a,h:this.a.h,head:this.a,key:a,value:c},b.list.push(b.b),this.a.h.next=b.b,this.a.h=b.b,this.size++);return this};b.prototype.delete=function(a){a=e(this,a);return a.b&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.b.h.next=a.b.next,a.b.next.h=a.b.h,a.b.head=
null,this.size--,!0):!1};b.prototype.clear=function(){this.f={};this.a=this.a.h=c();this.size=0};b.prototype.has=function(a){return!!e(this,a).b};b.prototype.get=function(a){return(a=e(this,a).b)&&a.value};b.prototype.entries=function(){return d(this,function(a){return[a.key,a.value]})};b.prototype.keys=function(){return d(this,function(a){return a.key})};b.prototype.values=function(){return d(this,function(a){return a.value})};b.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=
d.value,a.call(b,d[1],d[0],this)};b.prototype[Symbol.iterator]=b.prototype.entries;var h=0;return b});D("Object.is",function(a){return a?a:function(a,d){return a===d?0!==a||1/a===1/d:a!==a&&d!==d}});D("Array.prototype.includes",function(a){return a?a:function(a,d){var c=this;c instanceof String&&(c=String(c));var b=c.length;d=d||0;for(0>d&&(d=Math.max(d+b,0));d<b;d++){var g=c[d];if(g===a||Object.is(g,a))return!0}return!1}});
D("String.prototype.includes",function(a){return a?a:function(a,d){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(a,d||0)}});function ha(a,c){this.f=a;this.a=c}
function ia(){var a=/\s+/;return ja.trim().split(/\s*;\s*/).map(function(c){return c.split(a)}).reduce(function(a,d){d[0]&&(a[d[0]]=d.slice(1).map(function(a){return a}).sort());return a},{})};var ka=Reflect.apply,la=Object.prototype.hasOwnProperty,E=function(){function a(a){return b.apply(this,arguments)||this}function c(a){return b.apply(this,arguments)||this}function d(a){return b.apply(this,arguments)||this}function e(a){return b.apply(this,arguments)||this}function b(a,b){if(a!==ca)throw Error("cannot call the constructor");H(this,"policyName",{value:b,enumerable:!0})}function g(a){var b=I.get(a);void 0===b&&(b=J(null),I.set(a,b));return b}function h(a){var b=da(a);if(null==b||da(b)!==
wa)throw Error();b=B(xa(b));for(var c=b.next();!c.done;c=b.next())c=c.value,H(a,c,{value:a[c]});return a}function y(a,b){r(a.prototype);delete a.name;H(a,"name",{value:b})}function k(a){return function(b){return b instanceof a&&I.has(b)}}function z(a,b){return function(a,c){a=G(a);if(!a||!ka(la,a,[b]))throw Error("Policy not found");return(0,a[b])(c)}}function sa(b,h){function k(a,c){var d=h[c],e=r(new a(ca,b));a={};c=(a[c]=function(a){var b=r(J(e));g(b).value=""+d(a);return b},a)[c];return r(c)}
return r({createHTML:k(c,"createHTML"),createScriptURL:k(d,"createScriptURL"),createURL:k(e,"createURL"),createScript:k(a,"createScript")})}function G(a){return ea.get(a)||null}var l=Object,ya=l.assign,J=l.create,H=l.defineProperty,r=l.freeze,xa=l.getOwnPropertyNames,da=l.getPrototypeOf,wa=l.prototype;l=Array.prototype;var za=l.forEach,Aa=l.push;v();var ca=Symbol(),I=h(new WeakMap),K=h([]),ea=h(new Map),L=h([]),M=!1;b.prototype.toString=function(){return g(this).value};b.prototype.valueOf=function(){return g(this).value};
q(e,b);y(e,"TrustedURL");q(d,b);y(d,"TrustedScriptURL");q(c,b);y(c,"TrustedHTML");q(a,b);y(a,"TrustedScript");y(b,"TrustedType");var Ba={createHTML:function(){throw Error("undefined conversion");},createURL:function(){throw Error("undefined conversion");},createScriptURL:function(){throw Error("undefined conversion");},createScript:function(){throw Error("undefined conversion");},expose:!1};return r({g:c,c:e,i:d,l:a,o:z(c,"createHTML"),v:z(e,"createURL"),u:z(d,"createScriptURL"),K:z(a,"createScript"),
s:function(a,b){if(M&&!L.includes(a))throw Error("Policy "+a+" disallowed.");if(K.includes(a))throw Error("Policy "+a+" exists.");K.push(a);var c=ya(J(null),Ba);b(c);r(c);b=sa(a,c);c.expose&&ea.set(a,b);return b},B:G,C:function(){return K.slice()},F:k(c),I:k(e),H:k(d),G:k(a),J:function(a){a.includes("*")?M=!1:(M=!0,L.length=0,za.call(a,function(a){Aa.call(L,""+a)}))}})}();function ma(a,c,d){Object.defineProperty(a,c,{set:d})}function na(a,c,d){Object.defineProperty(a,c,{value:d})};for(var oa=Reflect.apply,F=Object,N=F.getOwnPropertyNames,pa=F.hasOwnProperty,qa=F.getPrototypeOf,O={HTMLAnchorElement:{href:E.c},HTMLAreaElement:{href:E.c},HTMLBaseElement:{href:E.c},HTMLButtonElement:{formaction:E.c},HTMLSourceElement:{src:E.c},HTMLImageElement:{src:E.c},HTMLTrackElement:{src:E.c},HTMLMediaElement:{src:E.c},HTMLInputElement:{src:E.c,formaction:E.c},HTMLFrameElement:{src:E.c},HTMLIFrameElement:{src:E.c,srcdoc:E.g},HTMLLinkElement:{href:E.i},HTMLObjectElement:{data:E.i,codebase:E.i},
HTMLEmbedElement:{src:E.i},HTMLScriptElement:{src:E.i},HTMLElement:{}},ra=B(N(HTMLElement.prototype)),P=ra.next();!P.done;P=ra.next()){var ta=P.value;"on"===ta.slice(0,2)&&(O.HTMLElement[ta]=E.l)}var ua={TrustedHTML:E.F,TrustedURL:E.I,TrustedScriptURL:E.H,TrustedScript:E.G},va={codebase:"codeBase",formaction:"formAction"};function Q(){this.j=Ca;this.f={}}
Q.prototype.D=function(a,c,d){for(var e=[],b=2;b<arguments.length;++b)e[b-2]=arguments[b];if(null!==a.constructor){a:{b=(e[0]=String(e[0])).toLowerCase();var g=a.constructor;do{var h=g&&g.name&&O[g.name]&&O[g.name][b];if(h||g==HTMLElement){b=h;break a}}while(g=qa(g));b=null}if(b instanceof Function)return this.a(a,"setAttribute",b,c,1,e)}return c.apply(a,e)};
Q.prototype.A=function(a,c,d){for(var e=[],b=2;b<arguments.length;++b)e[b-2]=arguments[b];return null!==a.constructor&&(e[0]=String(e[0]),b=(e[1]=String(e[1])).toLowerCase(),b=a.constructor&&a.constructor.name&&O[a.constructor.name]&&O[a.constructor.name][b],b instanceof Function)?this.a(a,"setAttributeNS",b,c,2,e):c.apply(a,e)};function R(a,c,d,e){var b=S;T(b,a,c,function(a,h){for(var g=[],k=1;k<arguments.length;++k)g[k-1]=arguments[k];return b.a.call(b,this,c,d,a,e,g)})}
function T(a,c,d,e){var b=Object.getOwnPropertyDescriptor(c,d),g=b?b.value:null;if(!(g instanceof Function))throw new TypeError("Property "+d+" on object"+c+" is not a function");b=c.constructor.name+"-"+d;if(a.f[b])throw Error("TrustedTypesEnforcer: Double installation detected");na(c,d,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];return e.bind(this,g).apply(this,b)});a.f[b]=g}
function U(a,c,d,e){var b=Object.getOwnPropertyDescriptor(c,d),g=b?b.set:null;if(!(g instanceof Function))throw new TypeError("No setter for property "+d+" on object"+c);b=c.constructor.name+"-"+d;if(a.f[b])throw Error("TrustedTypesEnforcer: Double installation detected");ma(c,d,function(b){a.a.call(a,this,d,e,g,0,[b])});a.f[b]=g}
Q.prototype.a=function(a,c,d,e,b,g){b=g[b];var h=d.name;if(ua.hasOwnProperty(h)&&ua[h](b))return oa(e,a,g);e="Failed to set "+c+" property on "+(""+a||a.constructor.name)+": This document requires `"+d.name+"` assignment.";console.warn(e,c,a,d,b);if(this.j.f)throw new TypeError(e);};"undefined"!==typeof window&&"undefined"===typeof window.TrustedTypes&&(window.TrustedTypes={TrustedHTML:E.g,TrustedURL:E.c,TrustedScriptURL:E.i,createHTML:E.o,createURL:E.v,createScriptURL:E.u,createPolicy:E.s,getExposedPolicy:E.B,getPolicyNames:E.C});var ja=function(){try{var a;if(!(a=document.currentScript)){var c=document.getElementsByTagName("script");a=c[c.length-1]}if(a&&"Content-Security-Policy:"==a.textContent.trim().substr(0,24))return a.textContent.trim().slice(24);if(a.dataset.w)return a.dataset.w;var d=document.head.querySelector('meta[http-equiv^="Content-Security-Policy"]');if(d)return d.content.trim()}catch(e){}return null}(),V;
if(ja){var Da=ia(),Ea="trusted-types"in Da;V=new ha(Ea,Ea?Da["trusted-types"]:["*"])}else V=new ha(!0,["*"]);var Ca=V,S=new Q;E.J(S.j.a);U(S,Element.prototype,"innerHTML",E.g);U(S,Element.prototype,"outerHTML",E.g);R(Range.prototype,"createContextualFragment",E.g,0);R(Element.prototype,"insertAdjacentHTML",E.g,1);Object.getOwnPropertyDescriptor(Document.prototype,"write")?R(Document.prototype,"write",E.g,0):R(HTMLDocument.prototype,"write",E.g,0);R(window,"open",E.c,0);
DOMParser&&R(DOMParser.prototype,"parseFromString",E.g,0);(function(a){T(a,Element.prototype,"setAttribute",function(c,d){for(var e=[],b=1;b<arguments.length;++b)e[b-1]=arguments[b];return a.D.bind(a,this,c).apply(a,e)});T(a,Element.prototype,"setAttributeNS",function(c,d){for(var e=[],b=1;b<arguments.length;++b)e[b-1]=arguments[b];return a.A.bind(a,this,c).apply(a,e)})})(S);
for(var Fa=S,Ga=B(N(O)),W=Ga.next();!W.done;W=Ga.next())for(var X=W.value,Ha=B(N(O[X])),Y=Ha.next();!Y.done;Y=Ha.next()){var Z=Y.value,Ia=oa(pa,va,[Z])?va[Z]:Z;U(Fa,window[X].prototype,Ia,O[X][Z])};}).call(window);//# sourceMappingURL=trustedtypes.build.js.map