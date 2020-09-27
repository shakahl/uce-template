!function(e){"use strict";
/*! (c) Andrea Giammarchi @webreflection ISC */!function(){var e="function"==typeof Promise?Promise:function(e){var t,n=[],r=0;return e((function(e){t=e,r=1,n.splice(0).forEach(o)})),{then:o};function o(e){return r?setTimeout(e,0,t):n.push(e),this}},t=function(e,t){var n=function(e){for(var t=0,n=e.length;t<n;t++)r(e[t])},r=function(e){var t=e.target,n=e.attributeName,r=e.oldValue;t.attributeChangedCallback(n,r,t.getAttribute(n))};return function(o,u){var a=o.constructor.observedAttributes;return a&&e(u).then((function(){new t(n).observe(o,{attributes:!0,attributeOldValue:!0,attributeFilter:a});for(var e=0,u=a.length;e<u;e++)o.hasAttribute(a[e])&&r({target:o,attributeName:a[e],oldValue:null})})),o}},n=self,r=n.document,o=n.MutationObserver,u=n.Set,a=n.WeakMap,i=function(e){return"querySelectorAll"in e},c=[].filter,l=function(e){var t=new a,n=function(t){var n=e.query;if(n.length)for(var r=0,o=t.length;r<o;r++)l(c.call(t[r].addedNodes,i),!0,n),l(c.call(t[r].removedNodes,i),!1,n)},l=function n(r,o,a){for(var i,c,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new u,f=function(f,h,p,v){if(!l.has(h=r[p])){if(l.add(h),o)for(var d,g=s(h),y=0,m=a.length;y<m;y++)g.call(h,d=a[y])&&(t.has(h)||t.set(h,new u),(f=t.get(h)).has(d)||(f.add(d),e.handle(h,o,d)));else t.has(h)&&(f=t.get(h),t.delete(h),f.forEach((function(t){e.handle(h,o,t)})));n(h.querySelectorAll(a),o,a,l)}i=f,c=h},h=0,p=r.length;h<p;h++)f(i,c,h)},s=function(e){return e.matches||e.webkitMatchesSelector||e.msMatchesSelector},f=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];l(t,n,e.query)},h=new o(n),p=e.root||r,v=e.query;return h.observe(p,{childList:!0,subtree:!0}),v.length&&f(p.querySelectorAll(v)),{drop:function(e){for(var n=0,r=e.length;n<r;n++)t.delete(e[n])},flush:function(){n(h.takeRecords())},observer:h,parse:f}},s=self,f=s.document,h=s.Map,p=s.MutationObserver,v=s.Object,d=s.Set,g=s.WeakMap,y=s.Element,m=s.HTMLElement,b=s.Node,w=s.Error,k=s.TypeError,E=self.Promise||e,O=v.defineProperty,A=v.getOwnPropertyNames,C=v.setPrototypeOf,x=!self.customElements;if(x){var S=function(){var e=this.constructor;if(!N.has(e))throw new k("Illegal constructor");var t=N.get(e);if($)return D($,t);var n=M.call(f,t);return D(C(n,e.prototype),t)},M=f.createElement,N=new h,T=new h,L=new h,q=new h,P=[],j=l({query:P,handle:function(e,t,n){var r=L.get(n);if(t&&!r.isPrototypeOf(e)){$=C(e,r);try{new r.constructor}finally{$=null}}var o="".concat(t?"":"dis","connectedCallback");o in r&&e[o]()}}).parse,$=null,_=function(t){if(!T.has(t)){var n,r=new e((function(e){n=e}));T.set(t,{$:r,_:n})}return T.get(t).$},D=t(_,p);O(self,"customElements",{configurable:!0,value:{_:{classes:N},define:function(e,t){if(q.has(e))throw new w('the name "'.concat(e,'" has already been used with this registry'));N.set(t,e),L.set(e,t.prototype),q.set(e,t),P.push(e),_(e).then((function(){j(f.querySelectorAll(e))})),T.get(e)._(t)},get:function(e){return q.get(e)},whenDefined:_}}),(S.prototype=m.prototype).constructor=S,O(self,"HTMLElement",{configurable:!0,value:S}),O(f,"createElement",{configurable:!0,value:function(e,t){var n=t&&t.is,r=n?q.get(n):q.get(e);return r?new r:M.call(f,e)}}),"isConnected"in b.prototype||O(b.prototype,"isConnected",{configurable:!0,get:function(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else try{var H=function e(){return self.Reflect.construct(HTMLLIElement,[],e)};H.prototype=HTMLLIElement.prototype;var R="extends-li";self.customElements.define("extends-li",H,{extends:"li"}),x=f.createElement("li",{is:R}).outerHTML.indexOf(R)<0;var W=self.customElements,F=W.get,I=W.whenDefined;O(self.customElements,"whenDefined",{configurable:!0,value:function(e){var t=this;return I.call(this,e).then((function(n){return n||F.call(t,e)}))}})}catch(e){x=!x}if(x){var z=function(e){var t=K.get(e);(0,t.parse)(t.root.querySelectorAll(this),e.isConnected)},B=self.customElements,V=y.prototype.attachShadow,U=f.createElement,X=B._,G=B.define,J=B.get,K=new g,Q=new d,Y=new h,Z=new h,ee=new h,te=new h,ne=[],re=[],oe=function(e){return te.get(e)||J.call(B,e)},ue=function(e,t,n){var r=ee.get(n);if(t&&!r.isPrototypeOf(e)){se=C(e,r);try{new r.constructor}finally{se=null}}var o="".concat(t?"":"dis","connectedCallback");o in r&&e[o]()},ae=l({query:re,handle:ue}).parse,ie=l({query:ne,handle:function(e,t){K.has(e)&&(t?Q.add(e):Q.delete(e),z.call(re,e))}}).parse,ce=function(e){if(!Z.has(e)){var t,n=new E((function(e){t=e}));Z.set(e,{$:n,_:t})}return Z.get(e).$},le=t(ce,p),se=null;A(self).filter((function(e){return/^HTML(?!Element)/.test(e)})).forEach((function(e){function t(){var e=this.constructor;if(!Y.has(e)){if(X&&X.classes.has(e))return;throw new k("Illegal constructor")}var t=Y.get(e),n=t.is,r=t.tag;if(se)return le(se,n);var o=U.call(f,r);return o.setAttribute("is",n),le(C(o,e.prototype),n)}(t.prototype=self[e].prototype).constructor=t,O(self,e,{value:t})})),O(f,"createElement",{value:function(e,t){var n=t&&t.is;if(n){var r=te.get(n);if(r&&Y.get(r).tag===e)return new r}var o=U.call(f,e);return n&&o.setAttribute("is",n),o}}),O(y.prototype,"attachShadow",{value:function(){var e=V.apply(this,arguments),t=l({query:re,root:e,handle:ue}),n=t.parse;return K.set(this,{root:e,parse:n}),e}}),O(B,"get",{configurable:!0,value:oe}),O(B,"whenDefined",{configurable:!0,value:ce}),O(B,"define",{configurable:!0,value:function(e,t,n){var r,o=n&&n.extends;if(o){if(oe(e))throw new w("'".concat(e,"' has already been defined as a custom element"));r="".concat(o,'[is="').concat(e,'"]'),Y.set(t,{is:e,tag:o}),ee.set(r,t.prototype),te.set(e,t),re.push(r)}else G.apply(B,arguments),ne.push(r=e);ce(e).then((function(){o?(ae(f.querySelectorAll(r)),Q.forEach(z,[r])):ie(f.querySelectorAll(r))})),Z.get(e)._(t)}})}}();var t="function"==typeof Promise?Promise:function(e){var t,n=[],r=0;return e((function(e){t=e,r=1,n.splice(0).forEach(o)})),{then:o};function o(e){return r?setTimeout(e,0,t):n.push(e),this}},n="function"==typeof cancelAnimationFrame,r=n?cancelAnimationFrame:clearTimeout,o=n?requestAnimationFrame:setTimeout;function u(e){var t,u,a,i,c;return s(),function(e,n,r){return a=e,i=n,c=r,u||(u=o(l)),--t<0&&f(!0),f};function l(){s(),a.apply(i,c||[])}function s(){t=e||1/0,u=n?0:null}function f(e){var t=!!u;return t&&(r(u),e&&l()),t}}var a=function(e){return{get:function(t){return e.get(t)},set:function(t,n){return e.set(t,n),n}}},i=null,c=function(e){var t=[];return function n(){var r=i,o=[];i={hook:n,args:arguments,stack:t,i:0,length:t.length,after:o};try{return e.apply(null,arguments)}finally{i=r;for(var u=0,a=o.length;u<a;u++)o[u]()}}},l=a(new WeakMap),s=function(e,t,n){e.apply(t,n)},f={async:!1,always:!1},h=function(e,t){return"function"==typeof t?t(e):t},p=function(e,t,n,r){var o=i.i++,a=i,c=a.hook,p=a.args,v=a.stack,d=a.length;o===d&&(i.length=v.push({}));var g=v[o];if(g.args=p,o===d){var y="function"==typeof n,m=(y?r:n)||r||f,b=m.async,w=m.always;g.$=y?n(t):h(void 0,t),g._=b?l.get(c)||l.set(c,u()):s,g.f=function(t){var n=e(g.$,t);(w||g.$!==n)&&(g.$=n,g._(c,null,g.args))}}return[g.$,g.f]},v=function(e,t){return p(h,e,void 0,t)},d=new WeakMap,g=function(e){var t=e.hook,n=e.args;t.apply(null,n)};
/*! (c) Andrea Giammarchi - ISC */function y(e){this.value!==e&&(this.value=e,d.get(this).forEach(g))}function m(e){return e.hook===this.hook}var b=new WeakMap,w=a(b),k=function(){},E=function(e){return function(t,n){var r=i.i++,o=i,a=o.hook,c=o.after,l=o.stack;if(r<o.length){var s=l[r],f=s.update,h=s.values,p=s.stop;if(!n||n.some(x,h)){s.values=n,e&&p(e);var v=s.clean;v&&(s.clean=null,v());var d=function(){s.clean=t()};e?f(d):c.push(d)}}else{var g=e?u():k,y={clean:null,update:g,values:n,stop:k};i.length=l.push(y),(w.get(a)||w.set(a,[])).push(y);var m=function(){y.clean=t()};e?y.stop=g(m):c.push(m)}}},O=(b.has.bind(b),E(!0)),A=E(!1),C=function(e,t){var n=i.i++,r=i,o=r.stack;return n===r.length?i.length=o.push({$:e(),_:t}):t&&!t.some(x,o[n]._)||(o[n]={$:e(),_:t}),o[n].$};function x(e,t){return e!==this[t]}function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=L(e);if(t){var o=L(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}var $=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,_=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,D=/<[a-z][^>]+$/i,H=/>[^<>]*$/,R=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,W=/\s+$/,F=function e(t,n){return 0<n--&&(D.test(t[n])||!H.test(t[n])&&e(t,n))},I=function(e,t,n){return _.test(t)?e:"<".concat(t).concat(n.replace(W,""),"></").concat(t,">")},z=function(e,t,n){for(var r=[],o=e.length,u=function(n){var o=e[n-1];r.push($.test(o)&&F(e,n)?o.replace($,(function(e,r,o){return"".concat(t).concat(n-1,"=").concat(o||'"').concat(r).concat(o?"":'"')})):"".concat(o,"\x3c!--").concat(t).concat(n-1,"--\x3e"))},a=1;a<o;a++)u(a);r.push(e[o-1]);var i=r.join("").trim();return n?i:i.replace(R,I)},B=Array.isArray,V=[],U=V.indexOf,X=V.slice,G=function(e,t){return 111===e.nodeType?1/t<0?t?function(e){var t=e.firstChild,n=e.lastChild,r=document.createRange();return r.setStartAfter(t),r.setEndAfter(n),r.deleteContents(),t}(e):e.lastChild:t?e.valueOf():e.firstChild:e},J=function(e){var t="fragment",n="template",r="content"in u(n)?function(e){var t=u(n);return t.innerHTML=e,t.content}:function(e){var r=u(t),a=u(n),i=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var c=RegExp.$1;a.innerHTML="<table>"+e+"</table>",i=a.querySelectorAll(c)}else a.innerHTML=e,i=a.childNodes;return o(r,i),r};return function(e,t){return("svg"===t?a:r)(e)};function o(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function u(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}function a(e){var n=u(t),r=u("div");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",o(n,r.firstChild.childNodes),n}}(document),K=function(e,t){return e.childNodes[t]},Q=function(e){for(var t=[],n=e.parentNode;n;)t.push(U.call(n.childNodes,e)),n=(e=n).parentNode;return t},Y=document,Z=Y.createTreeWalker,ee=Y.importNode,te=1!=ee.length,ne=te?function(e,t){return ee.call(document,J(e,t),!0)}:J,re=te?function(e){return Z.call(document,e,129,null,!1)}:function(e){return Z.call(document,e,129)},oe=function(e,t,n){return function(e,t,n,r,o){for(var u=n.length,a=t.length,i=u,c=0,l=0,s=null;c<a||l<i;)if(a===c)for(var f=i<u?l?r(n[l-1],-0).nextSibling:r(n[i-l],0):o;l<i;)e.insertBefore(r(n[l++],1),f);else if(i===l)for(;c<a;)s&&s.has(t[c])||e.removeChild(r(t[c],-1)),c++;else if(t[c]===n[l])c++,l++;else if(t[a-1]===n[i-1])a--,i--;else if(t[c]===n[i-1]&&n[l]===t[a-1]){var h=r(t[--a],-1).nextSibling;e.insertBefore(r(n[l++],1),r(t[c++],-1).nextSibling),e.insertBefore(r(n[--i],1),h),t[a]=n[i]}else{if(!s){s=new Map;for(var p=l;p<i;)s.set(n[p],p++)}if(s.has(t[c])){var v=s.get(t[c]);if(l<v&&v<i){for(var d=c,g=1;++d<a&&d<i&&s.get(t[d])===v+g;)g++;if(g>v-l)for(var y=r(t[c],0);l<v;)e.insertBefore(r(n[l++],1),y);else e.replaceChild(r(n[l++],1),r(t[c++],-1))}else c++}else e.removeChild(r(t[c++],-1))}return n}(e.parentNode,t,n,G,e)},ue=function(e,t){return"ref"===t?function(e){return function(t){"function"==typeof t?t(e):t.current=e}}(e):"aria"===t?function(e){return function(t){for(var n in t){var r="role"===n?n:"aria-".concat(n),o=t[n];null==o?e.removeAttribute(r):e.setAttribute(r,o)}}}(e):".dataset"===t?function(e){var t=e.dataset;return function(e){for(var n in e){var r=e[n];null==r?delete t[n]:t[n]=r}}}(e):"."===t.slice(0,1)?function(e,t){return function(n){e[t]=n}}(e,t.slice(1)):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){var o=B(t)?t:[t,!1];n!==o[0]&&(n&&e.removeEventListener(r,n,o[1]),(n=o[0])&&e.addEventListener(r,n,o[1]))}}(e,t):function(e,t){var n,r=!0,o=document.createAttributeNS(null,t);return function(t){n!==t&&(null==(n=t)?r||(e.removeAttributeNode(o),r=!0):(o.value=t,r&&(e.setAttributeNodeNS(o),r=!1)))}}(e,t)};function ae(e){var t=e.type,n=e.path.reduceRight(K,this);return"node"===t?function(e){var t,n,r=[];return function o(u){switch(S(u)){case"string":case"number":case"boolean":t!==u&&(t=u,n?n.textContent=u:n=document.createTextNode(u),r=oe(e,r,[n]));break;case"object":case"undefined":if(null==u){t!=u&&(t=u,r=oe(e,r,[]));break}if(B(u)){t=u,0===u.length?r=oe(e,r,[]):"object"===S(u[0])?r=oe(e,r,u):o(String(u));break}"ELEMENT_NODE"in u&&t!==u&&(t=u,r=oe(e,r,11===u.nodeType?X.call(u.childNodes):[u]))}}}(n):"attr"===t?ue(n,e.name):function(e){var t;return function(n){t!=n&&(t=n,e.textContent=null==n?"":n)}}(n)}var ie="isµ",ce=a(new WeakMap),le=function(e,t){var n=ce.get(t)||ce.set(t,function(e,t){for(var n=z(t,ie,"svg"===e),r=ne(n,e),o=re(r),u=[],a=t.length-1,i=0,c="".concat(ie).concat(i);i<a;){var l=o.nextNode();if(!l)throw"bad template: ".concat(n);if(8===l.nodeType)l.textContent===c&&(u.push({type:"node",path:Q(l)}),c="".concat(ie).concat(++i));else{for(;l.hasAttribute(c);)u.push({type:"attr",path:Q(l),name:l.getAttribute(c)}),l.removeAttribute(c),c="".concat(ie).concat(++i);/^(?:style|textarea)$/i.test(l.tagName)&&l.textContent.trim()==="\x3c!--".concat(c,"--\x3e")&&(u.push({type:"text",path:Q(l)}),c="".concat(ie).concat(++i))}}return{content:r,nodes:u}}(e,t)),r=n.content,o=n.nodes,u=ee.call(document,r,!0);return{content:u,updates:o.map(ae,u)}},se=function(e,t){var n=t.type,r=t.template,o=t.values,u=o.length;fe(e,o,u);var a=e.entry;a&&a.template===r&&a.type===n||(e.entry=a=function(e,t){var n=le(e,t);return{type:e,template:t,content:n.content,updates:n.updates,wire:null}}(n,r));for(var i=a,c=i.content,l=i.updates,s=i.wire,f=0;f<u;f++)l[f](o[f]);return s||(a.wire=function(e){var t=e.childNodes,n=t.length;if(n<2)return n?t[0]:e;var r=X.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf:function(){if(t.length!==n)for(var o=0;o<n;)e.appendChild(r[o++]);return e}}}(c))},fe=function e(t,n,r){for(var o=t.stack,u=0;u<r;u++){var a=n[u];a instanceof he?n[u]=se(o[u]||(o[u]={stack:[],entry:null,wire:null}),a):B(a)?e(o[u]||(o[u]={stack:[],entry:null,wire:null}),a,a.length):o[u]=null}r<o.length&&o.splice(r)};function he(e,t,n){this.type=e,this.template=t,this.values=n}var pe=Object.create,ve=Object.defineProperties,de=function(e){var t=a(new WeakMap);return ve((function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new he(e,t,r)}),{for:{value:function(n,r){var o=t.get(n)||t.set(n,pe(null));return o[r]||(o[r]=function(t){return function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),u=1;u<r;u++)o[u-1]=arguments[u];return se(t,{type:e,template:n,values:o})}}({stack:[],entry:null,wire:null}))}},node:{value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return se({stack:[],entry:null,wire:null},{type:e,template:t,values:r}).valueOf()}}})},ge=a(new WeakMap),ye=function(e,t){var n="function"==typeof t?t():t,r=ge.get(e)||ge.set(e,{stack:[],entry:null,wire:null}),o=n instanceof he?se(r,n):n;return o!==r.wire&&(r.wire=o,e.textContent="",e.appendChild(o.valueOf())),e},me=de("html"),be=de("svg");function we(e){for(var t=e[0],n=1,r=arguments.length;n<r;n++)t+=arguments[n]+e[n];return t}var ke=Object.defineProperties,Ee=Object.keys,Oe=function(e,t,n,r,o){return{configurable:!0,get:function(){return r},set:function(u){(e||u!==r||t&&"object"===S(u)&&u)&&(r=u,n?o.call(this,r):o.call(this))}}},Ae=function(e,t,n,r,o,u){for(var a={},i=o!==Ce,c=[n,r,i],l=Ee(e),s=0;s<l.length;s++){var f=t(e,l[s]),h=i?o(f):[f,o];u&&(h[1]=u),a[l[s]]=Oe.apply(null,c.concat(h))}return a},Ce=function(){},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.all,n=void 0!==t&&t,r=e.shallow,o=void 0===r||r,u=e.useState,a=void 0===u?Ce:u,i=e.getAttribute,c=void 0===i?function(e,t){return e.getAttribute(t)}:i;return function(e,t,r){var u=Ae(t,(function(t,n){var r=t[n],o=S(r);return e.hasOwnProperty(n)?(r=e[n],delete e[n]):e.hasAttribute(n)&&(r=c(e,n),"number"==o?r=+r:"boolean"==o&&(r=!/^(?:false|0|)$/.test(r))),r}),n,o,a,r);return ke(e,u)}},Se=xe({dom:!0}),Me=customElements,Ne=Me.define,Te=Object.create,Le=Object.defineProperties,qe=Object.getOwnPropertyDescriptor,Pe=Object.keys,je="element",$e=a(new Map([[je,{c:HTMLElement,e:je}]])),_e=function(e){return document.createElement(e)},De=function(e){return $e.get(e)||$e.set(e,{c:_e(e).constructor,e:e})},He=function(e,t){for(var n=t.attachShadow,r=t.attributeChanged,o=t.bound,u=t.connected,a=t.disconnected,i=t.handleEvent,c=t.init,l=t.observedAttributes,s=t.props,f=t.render,h=t.style,p=new WeakMap,v={},d={},g=[],y=Te(null),m=function(e,t,r){if(!p.has(e)){p.set(e,0),Le(e,{html:{value:We.bind(n?e.attachShadow(n):e)}});for(var u=0;u<x;u++){var a=g[u],i=a.type,l=a.options;e.addEventListener(i,e,l)}o&&o.forEach(Re,e),s&&Se(e,s,f),(c||f)&&(c||f).call(e),t&&(e[t]=r)}},b=Pe(t),w=0,k=b.length;w<k;w++){var E=b[w];if(/^on./.test(E)&&!/Options$/.test(E)){var O=t[E+"Options"]||!1,A=E.toLowerCase(),C=A.slice(2);g.push({type:C,options:O}),y[C]=E,A!==E&&(C=A.slice(2,3)+E.slice(3),y[C]=E,g.push({type:C,options:O}))}switch(E){case"attachShadow":case"observedAttributes":case"style":break;default:d[E]=qe(t,E)}}var x=g.length;if(x&&!i&&(d.handleEvent={value:function(e){this[y[e.type]](e)}}),null!==s)if(s)for(var S=function(e,t){var n=e[t];d[n]={get:function(){return m(this),s[n]},set:function(e){m(this,n,e)}}},N=Pe(s),L=0;L<N.length;L++)S(N,L);else d.props={get:function(){for(var e={},t=this.attributes,n=t.length,r=0;r<n;r++){var o=t[r],u=o.name,a=o.value;e[u]=a}return e}};l&&(v.observedAttributes={value:l}),d.attributeChangedCallback={value:function(){m(this),r&&r.apply(this,arguments)}},d.connectedCallback={value:function(){m(this),u&&u.apply(this,arguments)}},a&&(d.disconnectedCallback={value:a});var q=De(t.extends||je),P=q.c,$=q.e,_=function(e){T(n,e);var t=j(n);function n(){return M(this,n),t.apply(this,arguments)}return n}(P);Le(_,v),Le(_.prototype,d);var D=[e,_];return $!==je&&D.push({extends:$}),Ne.apply(Me,D),$e.set(e,{c:_,e:$}),h&&(document.head.appendChild(_e("style")).textContent=h($===je?e:$+'[is="'+e+'"]')),_};function Re(e){this[e]=this[e].bind(this)}function We(){return ye(this,me.apply(null,arguments))}Me.get("uce-lib")||Me.define("uce-lib",function(e){T(u,e);var t,n,r,o=j(u);function u(){return M(this,u),o.apply(this,arguments)}return t=u,r=[{key:"define",get:function(){return He}},{key:"render",get:function(){return ye}},{key:"html",get:function(){return me}},{key:"svg",get:function(){return be}},{key:"css",get:function(){return we}}],(n=null)&&N(t.prototype,n),r&&N(t,r),u}(De(je).c));var Fe=function(e,t){return e[t]},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.all,n=void 0!==t&&t,r=e.shallow,o=void 0===r||r,u=e.useState,a=void 0===u?Ce:u;return function(e,t){return ke({},Ae(e,Fe,n,o,a,t))}},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(e.dom?xe:Ie)(e)},Be=self,Ve=Be.document,Ue=Be.MutationObserver,Xe=Be.Set,Ge=Be.WeakMap,Je=function(e){return"querySelectorAll"in e},Ke=[].filter,Qe=function(e){var t=new Ge,n=function(t){var n=e.query;if(n.length)for(var o=0,u=t.length;o<u;o++)r(Ke.call(t[o].addedNodes,Je),!0,n),r(Ke.call(t[o].removedNodes,Je),!1,n)},r=function n(r,u,i){for(var c,l,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new Xe,f=function(f,h,p,v){if(!s.has(h=r[p])){if(s.add(h),u)for(var d,g=o(h),y=0,m=i.length;y<m;y++)g.call(h,d=i[y])&&(t.has(h)||t.set(h,new Xe),(f=t.get(h)).has(d)||(f.add(d),e.handle(h,u,d)));else t.has(h)&&(f=t.get(h),t.delete(h),f.forEach((function(t){e.handle(h,u,t)})));n(a(h),u,i,s)}c=f,l=h},h=0,p=r.length;h<p;h++)f(c,l,h)},o=function(e){return e.matches||e.webkitMatchesSelector||e.msMatchesSelector},u=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];r(t,n,e.query)},a=function(e){return l.length?e.querySelectorAll(l):l},i=new Ue(n),c=e.root||Ve,l=e.query;return i.observe(c,{childList:!0,subtree:!0}),u(a(c)),{drop:function(e){for(var n=0,r=e.length;n<r;n++)t.delete(e[n])},flush:function(){n(i.takeRecords())},observer:i,parse:u}};t.all||(t.all=function(e){return new t((function(t){var n=e.length;n||t();for(var r=0;r<n;)e[r++].then(o);function o(){++r===n&&t()}r=0}))});var Ye,Ze,et,tt=Object.create,nt=Object.defineProperty,rt=Object.keys,ot=[],ut=function(e){return at[e]},at=tt(null),it={},ct=function(e,n){var r=[],o=[],u=e.replace(/(^|[\r\n])\s*import\s*((['|"])[^\3]+?\3)/g,(function(e,t,n){return t+"require("+n+")"})).replace(/(^|[\r\n])\s*import\s*([^\3]+?)(\s*from\s*)((['|"])[^\5]+?\5)/g,(function(e,t,n,r,o){return t+"const "+n.replace(/\s+as\s+/g,":")+" = require("+o+")"})).replace(/^\s*export\s+default(\s*)/gm,"exports.default =$1").replace(/(^|[\r\n])\s*export\s*\{([^}]+?)\}[^\n]*/g,(function(e,t,n){return n.trim().split(/\s*,\s*/).forEach((function(e){r.push("exports.".concat(e," = ").concat(e,";"))})),t})).replace(/(^|[\r\n])\s*export\s+(const|let|var|function)(\s+)(\w+)/g,(function(e,t,n,o,u){return r.push("exports.".concat(u," = ").concat(u,";")),t+n+o+u})).concat("\n",r.join("\n")).replace(/require\s*\(\s*(['"])([^\1]+?)\1\s*\)/g,(function(e,t,n){return o.push(n),e}));return n?(o.forEach((function(e){e in at||ot.push(new t((function(t){var n=it;if(/^(?:[./]|https?:)/.test(e)){at[e]=n;var r=new XMLHttpRequest;r.open("get",e,!0),r.send(null),r.onload=function(){t(at[e]=lt(r.responseText))}}else nt(at,e,{get:function(){return n},set:function(e){t(n=e)}})})))})),new t((function(e){t.all(ot).then((function(){return e(u)}))}))):u},lt=(Ze=rt(Ye||{}),et=Ze.map((function(e){return Ye[e]})).concat(ut),Ze.push("require"),function(e){var t={},n={exports:t},r=Ze.concat("module","exports",'"use strict;"\n'+ct(e));Function.apply(null,r).apply(null,et.concat(n,t));var o=n.exports,u=rt(o);return 1===u.length&&"default"===u[0]?o.default:o}),st=ze({dom:!0,useState:v}),ft=[],ht=Qe({query:ft,handle:function(e,t,n){if(pt([e]),yt.has(n)){var r=yt.get(n);yt.delete(n),ft.splice(ft.indexOf(n),1),r()}}}),pt=ht.drop,vt=ht.parse,dt=function(e,t){e in at&&at[e]!==it&&console.warn("duplicated "+e),at[e]=t},gt=function(e){var t=new wt;return t.innerHTML=e,t},yt=new Map,mt=function(){throw new Error("bad template")},bt={define:He,render:ye,html:me,svg:be,css:we,reactive:ze({useState:v}),slot:function(e){return[].reduce.call(e.querySelectorAll("[slot]"),(function(e,t){var n=t.getAttribute("slot");return e[n]=[].concat(e[n]||[],t),e}),{})}};dt("@uce/reactive",bt.reactive),dt("@uce/slot",bt.slot),dt("@uce",bt),dt("uce",bt),dt("augmentor",{augmentor:c,useState:v,useRef:function(e){var t=i.i++,n=i,r=n.stack;return t===n.length&&(i.length=r.push({current:e})),r[t]},useContext:function(e){var t=i,n=t.hook,r=t.args,o=d.get(e),u={hook:n,args:r};return o.some(m,u)||o.push(u),e.value},createContext:function(e){var t={value:e,provide:y};return d.set(t,[]),t},useCallback:function(e,t){return C((function(){return e}),t)},useMemo:C,useReducer:p,useEffect:O,useLayoutEffect:A}),dt("qsa-observer",Qe),dt("reactive-props",ze),dt("@webreflection/lie",t);var wt=He("uce-template",{extends:"template",props:null,init:function e(t){var n=function(e){var t=function(e){for(var t=[],n=[],r=e.length,o=0,u=0,a=0;o<r&&-1<(o=e.indexOf("{{",a))&&-1<(u=e.indexOf("}}",o+2));)t.push(e.slice(a,o)),n.push(e.slice(o+2,u)),a=u+2;t.push(e.slice(a));var i=[t],c=Function("return function(){with(arguments[0])return["+n+"]}")();return function(e){return i.concat(c(e))}}(d),n=p&&lt(e)||{},r=n.observedAttributes,o=n.props,u=n.setup,a={props:null,extends:s?h:"element",init:p?function(){var e=this,r=this,a=r.html,i=!0,l=null;(this.render=c((function(){i&&(i=!i,o&&st(r,o),l=u&&n.setup(r)||{}),a.apply(null,t.call(e,l))})))()}:function(){}};for(var i in f&&(a.style=function(){return f}),v&&(a.attachShadow={mode:v}),r&&(a.observedAttributes=r,a.attributeChanged=function(){this.hasOwnProperty("attributeChanged")&&this.attributeChanged.apply(this,arguments)}),p&&(a.connected=function(){this.hasOwnProperty("connected")&&this.connected()},a.disconnected=function(){this.hasOwnProperty("disconnected")&&this.disconnected()}),n)i in a||(a[i]=n[i]);He(s||h,a)},r=this.content,o=this.ownerDocument,u=this.parentNode,a=(r||J(this.innerHTML)).childNodes,i=[];u&&this instanceof HTMLUnknownElement&&u.removeChild(this);for(var l=n,s="",f="",h="",p="",v="",d="",g=0;g<a.length;g++){var y=a[g];if(1===y.nodeType){var m=y.tagName,b=y.hasAttribute("is");/^style$/i.test(m)?i.push(y):b||/-/i.test(m)?(h&&mt(),h=m.toLowerCase(),d=y.innerHTML,b&&(s=y.getAttribute("is").toLowerCase()),y.hasAttribute("shadow")&&(v=y.getAttribute("shadow")||"open")):/^script$/i.test(m)&&(p&&mt(),p=y.textContent,l=function(){ct(p,!0).then(n)})}}var w=s?h+'[is="'+s+'"]':h;if(!w)return setTimeout(t?mt:e.bind(this),0,!0);for(var k=i.length;k--;){var E=i[k],O=E.textContent;E.hasAttribute("shadow")?d="<style>"+O+"</style>"+d:E.hasAttribute("scoped")?function(){var e=[];f+=O.replace(/\{([^}]+?)\}/g,(function(t,n){return""+e.push(n)+","})).split(",").map((function(e){return e.trim()?w+" "+e.trim():""})).join(",\n").replace(/\x01(\d+),/g,(function(t,n){return"{"+e[--n]+"}"})).replace(/(,\n)+/g,",\n")}():f+=O}this.hasAttribute("lazy")?(yt.set(w,l),ft.push(w),vt(o.querySelectorAll(ft))):l()}});wt.resolve=dt,wt.from=gt,e.parse=gt,e.resolve=dt}({});