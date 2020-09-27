!function(e){"use strict";
/*! (c) Andrea Giammarchi @webreflection ISC */!function(){var e="function"==typeof Promise?Promise:function(e){var t,n=[],r=0;return e((function(e){t=e,r=1,n.splice(0).forEach(s)})),{then:s};function s(e){return r?setTimeout(e,0,t):n.push(e),this}},t=function(e,t){var n=function(e){for(var t=0,n=e.length;t<n;t++)r(e[t])},r=function(e){var t=e.target,n=e.attributeName,r=e.oldValue;t.attributeChangedCallback(n,r,t.getAttribute(n))};return function(s,o){var l=s.constructor.observedAttributes;return l&&e(o).then((function(){new t(n).observe(s,{attributes:!0,attributeOldValue:!0,attributeFilter:l});for(var e=0,o=l.length;e<o;e++)s.hasAttribute(l[e])&&r({target:s,attributeName:l[e],oldValue:null})})),s}},n=self,r=n.document,s=n.MutationObserver,o=n.Set,l=n.WeakMap,a=function(e){return"querySelectorAll"in e},c=[].filter,i=function(e){var t=new l,n=function(t){var n=e.query;if(n.length)for(var r=0,s=t.length;r<s;r++)i(c.call(t[r].addedNodes,a),!0,n),i(c.call(t[r].removedNodes,a),!1,n)},i=function n(r,s,l){for(var a,c,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new o,h=function(h,f,p,d){if(!i.has(f=r[p])){if(i.add(f),s)for(var g,m=u(f),v=0,y=l.length;v<y;v++)m.call(f,g=l[v])&&(t.has(f)||t.set(f,new o),(h=t.get(f)).has(g)||(h.add(g),e.handle(f,s,g)));else t.has(f)&&(h=t.get(f),t.delete(f),h.forEach((function(t){e.handle(f,s,t)})));n(f.querySelectorAll(l),s,l,i)}a=h,c=f},f=0,p=r.length;f<p;f++)h(a,c,f)},u=function(e){return e.matches||e.webkitMatchesSelector||e.msMatchesSelector},h=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];i(t,n,e.query)},f=new s(n),p=e.root||r,d=e.query;return f.observe(p,{childList:!0,subtree:!0}),d.length&&h(p.querySelectorAll(d)),{drop:function(e){for(var n=0,r=e.length;n<r;n++)t.delete(e[n])},flush:function(){n(f.takeRecords())},observer:f,parse:h}},u=self,h=u.document,f=u.Map,p=u.MutationObserver,d=u.Object,g=u.Set,m=u.WeakMap,v=u.Element,y=u.HTMLElement,b=u.Node,w=u.Error,E=u.TypeError,k=self.Promise||e,x=d.defineProperty,C=d.getOwnPropertyNames,A=d.setPrototypeOf,M=!self.customElements;if(M){var S=function(){var e=this.constructor;if(!N.has(e))throw new E("Illegal constructor");var t=N.get(e);if(H)return D(H,t);var n=$.call(h,t);return D(A(n,e.prototype),t)},$=h.createElement,N=new f,O=new f,T=new f,L=new f,q=[],P=i({query:q,handle:function(e,t,n){var r=T.get(n);if(t&&!r.isPrototypeOf(e)){H=A(e,r);try{new r.constructor}finally{H=null}}var s="".concat(t?"":"dis","connectedCallback");s in r&&e[s]()}}).parse,H=null,_=function(t){if(!O.has(t)){var n,r=new e((function(e){n=e}));O.set(t,{$:r,_:n})}return O.get(t).$},D=t(_,p);x(self,"customElements",{configurable:!0,value:{_:{classes:N},define:function(e,t){if(L.has(e))throw new w('the name "'.concat(e,'" has already been used with this registry'));N.set(t,e),T.set(e,t.prototype),L.set(e,t),q.push(e),_(e).then((function(){P(h.querySelectorAll(e))})),O.get(e)._(t)},get:function(e){return L.get(e)},whenDefined:_}}),(S.prototype=y.prototype).constructor=S,x(self,"HTMLElement",{configurable:!0,value:S}),x(h,"createElement",{configurable:!0,value:function(e,t){var n=t&&t.is,r=n?L.get(n):L.get(e);return r?new r:$.call(h,e)}}),"isConnected"in b.prototype||x(b.prototype,"isConnected",{configurable:!0,get:function(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else try{var j=function e(){return self.Reflect.construct(HTMLLIElement,[],e)};j.prototype=HTMLLIElement.prototype;var W="extends-li";self.customElements.define("extends-li",j,{extends:"li"}),M=h.createElement("li",{is:W}).outerHTML.indexOf(W)<0;var R=self.customElements,F=R.get,I=R.whenDefined;x(self.customElements,"whenDefined",{configurable:!0,value:function(e){var t=this;return I.call(this,e).then((function(n){return n||F.call(t,e)}))}})}catch(e){M=!M}if(M){var z=function(e){var t=K.get(e);(0,t.parse)(t.root.querySelectorAll(this),e.isConnected)},B=self.customElements,V=v.prototype.attachShadow,U=h.createElement,X=B._,G=B.define,J=B.get,K=new m,Q=new g,Y=new f,Z=new f,ee=new f,te=new f,ne=[],re=[],se=function(e){return te.get(e)||J.call(B,e)},oe=function(e,t,n){var r=ee.get(n);if(t&&!r.isPrototypeOf(e)){ue=A(e,r);try{new r.constructor}finally{ue=null}}var s="".concat(t?"":"dis","connectedCallback");s in r&&e[s]()},le=i({query:re,handle:oe}).parse,ae=i({query:ne,handle:function(e,t){K.has(e)&&(t?Q.add(e):Q.delete(e),z.call(re,e))}}).parse,ce=function(e){if(!Z.has(e)){var t,n=new k((function(e){t=e}));Z.set(e,{$:n,_:t})}return Z.get(e).$},ie=t(ce,p),ue=null;C(self).filter((function(e){return/^HTML(?!Element)/.test(e)})).forEach((function(e){function t(){var e=this.constructor;if(!Y.has(e)){if(X&&X.classes.has(e))return;throw new E("Illegal constructor")}var t=Y.get(e),n=t.is,r=t.tag;if(ue)return ie(ue,n);var s=U.call(h,r);return s.setAttribute("is",n),ie(A(s,e.prototype),n)}(t.prototype=self[e].prototype).constructor=t,x(self,e,{value:t})})),x(h,"createElement",{value:function(e,t){var n=t&&t.is;if(n){var r=te.get(n);if(r&&Y.get(r).tag===e)return new r}var s=U.call(h,e);return n&&s.setAttribute("is",n),s}}),x(v.prototype,"attachShadow",{value:function(){var e=V.apply(this,arguments),t=i({query:re,root:e,handle:oe}),n=t.parse;return K.set(this,{root:e,parse:n}),e}}),x(B,"get",{configurable:!0,value:se}),x(B,"whenDefined",{configurable:!0,value:ce}),x(B,"define",{configurable:!0,value:function(e,t,n){var r,s=n&&n.extends;if(s){if(se(e))throw new w("'".concat(e,"' has already been defined as a custom element"));r="".concat(s,'[is="').concat(e,'"]'),Y.set(t,{is:e,tag:s}),ee.set(r,t.prototype),te.set(e,t),re.push(r)}else G.apply(B,arguments),ne.push(r=e);ce(e).then((function(){s?(le(h.querySelectorAll(r)),Q.forEach(z,[r])):ae(h.querySelectorAll(r))})),Z.get(e)._(t)}})}}();var t="function"==typeof Promise?Promise:function(e){let t,n=[],r=0;return e(e=>{t=e,r=1,n.splice(0).forEach(s)}),{then:s};function s(e){return r?setTimeout(e,0,t):n.push(e),this}},n="function"==typeof cancelAnimationFrame,r=n?cancelAnimationFrame:clearTimeout,s=n?requestAnimationFrame:setTimeout;function o(e){var t,o,l,a,c;return u(),function(e,n,r){return l=e,a=n,c=r,o||(o=s(i)),--t<0&&h(!0),h};function i(){u(),l.apply(a,c||[])}function u(){t=e||1/0,o=n?0:null}function h(e){var t=!!o;return t&&(r(o),e&&i()),t}}var l=e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)})
/*! (c) Andrea Giammarchi - ISC */;let a=null;const c=e=>{const t=[];return function n(){const r=a,s=[];a={hook:n,args:arguments,stack:t,i:0,length:t.length,after:s};try{return e.apply(null,arguments)}finally{a=r;for(let e=0,{length:t}=s;e<t;e++)s[e]()}}},i=l(new WeakMap),u=(e,t,n)=>{e.apply(t,n)},h={async:!1,always:!1},f=(e,t)=>"function"==typeof t?t(e):t,p=(e,t,n,r)=>{const s=a.i++,{hook:l,args:c,stack:p,length:d}=a;s===d&&(a.length=p.push({}));const g=p[s];if(g.args=c,s===d){const s="function"==typeof n,{async:a,always:c}=(s?r:n)||r||h;g.$=s?n(t):f(void 0,t),g._=a?i.get(l)||i.set(l,o()):u,g.f=t=>{const n=e(g.$,t);(c||g.$!==n)&&(g.$=n,g._(l,null,g.args))}}return[g.$,g.f]},d=(e,t)=>p(f,e,void 0,t),g=new WeakMap,m=({hook:e,args:t})=>{e.apply(null,t)};function v(e){this.value!==e&&(this.value=e,g.get(this).forEach(m))}function y({hook:e}){return e===this.hook}const b=new WeakMap,w=l(b),E=()=>{},k=e=>(t,n)=>{const r=a.i++,{hook:s,after:l,stack:c,length:i}=a;if(r<i){const s=c[r],{update:o,values:a,stop:i}=s;if(!n||n.some(M,a)){s.values=n,e&&i(e);const{clean:r}=s;r&&(s.clean=null,r());const a=()=>{s.clean=t()};e?o(a):l.push(a)}}else{const r=e?o():E,i={clean:null,update:r,values:n,stop:E};a.length=c.push(i),(w.get(s)||w.set(s,[])).push(i);const u=()=>{i.clean=t()};e?i.stop=r(u):l.push(u)}},x=(b.has.bind(b),k(!0)),C=k(!1),A=(e,t)=>{const n=a.i++,{stack:r,length:s}=a;return n===s?a.length=r.push({$:e(),_:t}):t&&!t.some(M,r[n]._)||(r[n]={$:e(),_:t}),r[n].$};function M(e,t){return e!==this[t]}const S=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,$=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,N=/<[a-z][^>]+$/i,O=/>[^<>]*$/,T=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,L=/\s+$/,q=(e,t)=>0<t--&&(N.test(e[t])||!O.test(e[t])&&q(e,t)),P=(e,t,n)=>$.test(t)?e:`<${t}${n.replace(L,"")}></${t}>`;const{isArray:H}=Array,{indexOf:_,slice:D}=[],j=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e;
/*! (c) Andrea Giammarchi - ISC */
self.W=function(e){var t="fragment",n="template",r="content"in o(n)?function(e){var t=o(n);return t.innerHTML=e,t.content}:function(e){var r=o(t),l=o(n),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var c=RegExp.$1;l.innerHTML="<table>"+e+"</table>",a=l.querySelectorAll(c)}else l.innerHTML=e,a=l.childNodes;return s(r,a),r};return function(e,t){return("svg"===t?l:r)(e)};function s(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function o(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}function l(e){var n=o(t),r=o("div");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",s(n,r.firstChild.childNodes),n}}(document);const R=({childNodes:e},t)=>e[t],F=e=>{const t=[];let{parentNode:n}=e;for(;n;)t.push(_.call(n.childNodes,e)),n=(e=n).parentNode;return t},{createTreeWalker:I,importNode:z}=document,B=1!=z.length,V=B?(e,t)=>z.call(document,W(e,t),!0):W,U=B?e=>I.call(document,e,129,null,!1):e=>I.call(document,e,129),X=(e,t,n)=>((e,t,n,r,s)=>{const o=n.length;let l=t.length,a=o,c=0,i=0,u=null;for(;c<l||i<a;)if(l===c){const t=a<o?i?r(n[i-1],-0).nextSibling:r(n[a-i],0):s;for(;i<a;)e.insertBefore(r(n[i++],1),t)}else if(a===i)for(;c<l;)u&&u.has(t[c])||e.removeChild(r(t[c],-1)),c++;else if(t[c]===n[i])c++,i++;else if(t[l-1]===n[a-1])l--,a--;else if(t[c]===n[a-1]&&n[i]===t[l-1]){const s=r(t[--l],-1).nextSibling;e.insertBefore(r(n[i++],1),r(t[c++],-1).nextSibling),e.insertBefore(r(n[--a],1),s),t[l]=n[a]}else{if(!u){u=new Map;let e=i;for(;e<a;)u.set(n[e],e++)}if(u.has(t[c])){const s=u.get(t[c]);if(i<s&&s<a){let o=c,h=1;for(;++o<l&&o<a&&u.get(t[o])===s+h;)h++;if(h>s-i){const o=r(t[c],0);for(;i<s;)e.insertBefore(r(n[i++],1),o)}else e.replaceChild(r(n[i++],1),r(t[c++],-1))}else c++}else e.removeChild(r(t[c++],-1))}return n})(e.parentNode,t,n,j,e),G=(e,t)=>"ref"===t?(e=>t=>{"function"==typeof t?t(e):t.current=e})(e):"aria"===t?(e=>t=>{for(const n in t){const r="role"===n?n:"aria-"+n,s=t[n];null==s?e.removeAttribute(r):e.setAttribute(r,s)}})(e):".dataset"===t?(({dataset:e})=>t=>{for(const n in t){const r=t[n];null==r?delete e[n]:e[n]=r}})(e):"."===t.slice(0,1)?((e,t)=>n=>{e[t]=n})(e,t.slice(1)):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{const s=H(t)?t:[t,!1];n!==s[0]&&(n&&e.removeEventListener(r,n,s[1]),(n=s[0])&&e.addEventListener(r,n,s[1]))}})(e,t):((e,t)=>{let n,r=!0;const s=document.createAttributeNS(null,t);return t=>{n!==t&&(n=t,null==n?r||(e.removeAttributeNode(s),r=!0):(s.value=t,r&&(e.setAttributeNodeNS(s),r=!1)))}})(e,t);function J(e){const{type:t,path:n}=e,r=n.reduceRight(R,this);return"node"===t?(e=>{let t,n,r=[];const s=o=>{switch(typeof o){case"string":case"number":case"boolean":t!==o&&(t=o,n?n.textContent=o:n=document.createTextNode(o),r=X(e,r,[n]));break;case"object":case"undefined":if(null==o){t!=o&&(t=o,r=X(e,r,[]));break}if(H(o)){t=o,0===o.length?r=X(e,r,[]):"object"==typeof o[0]?r=X(e,r,o):s(String(o));break}"ELEMENT_NODE"in o&&t!==o&&(t=o,r=X(e,r,11===o.nodeType?D.call(o.childNodes):[o]))}};return s})(r):"attr"===t?G(r,e.name):(e=>{let t;return n=>{t!=n&&(t=n,e.textContent=null==n?"":n)}})(r)}const K="isµ",Q=l(new WeakMap),Y=(e,t)=>{const n=((e,t,n)=>{const r=[],{length:s}=e;for(let n=1;n<s;n++){const s=e[n-1];r.push(S.test(s)&&q(e,n)?s.replace(S,(e,r,s)=>`${t}${n-1}=${s||'"'}${r}${s?"":'"'}`):`${s}\x3c!--${t}${n-1}--\x3e`)}r.push(e[s-1]);const o=r.join("").trim();return n?o:o.replace(T,P)})(t,K,"svg"===e),r=V(n,e),s=U(r),o=[],l=t.length-1;let a=0,c="isµ"+a;for(;a<l;){const e=s.nextNode();if(!e)throw"bad template: "+n;if(8===e.nodeType)e.textContent===c&&(o.push({type:"node",path:F(e)}),c="isµ"+ ++a);else{for(;e.hasAttribute(c);)o.push({type:"attr",path:F(e),name:e.getAttribute(c)}),e.removeAttribute(c),c="isµ"+ ++a;/^(?:style|textarea)$/i.test(e.tagName)&&e.textContent.trim()===`\x3c!--${c}--\x3e`&&(o.push({type:"text",path:F(e)}),c="isµ"+ ++a)}}return{content:r,nodes:o}},Z=(e,t)=>{const{content:n,nodes:r}=Q.get(t)||Q.set(t,Y(e,t)),s=z.call(document,n,!0);return{content:s,updates:r.map(J,s)}},ee=(e,{type:t,template:n,values:r})=>{const{length:s}=r;te(e,r,s);let{entry:o}=e;o&&o.template===n&&o.type===t||(e.entry=o=((e,t)=>{const{content:n,updates:r}=Z(e,t);return{type:e,template:t,content:n,updates:r,wire:null}})(t,n));const{content:l,updates:a,wire:c}=o;for(let e=0;e<s;e++)a[e](r[e]);return c||(o.wire=(e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return n?t[0]:e;const r=D.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(r[t++])}return e}}})(l))},te=({stack:e},t,n)=>{for(let r=0;r<n;r++){const n=t[r];n instanceof ne?t[r]=ee(e[r]||(e[r]={stack:[],entry:null,wire:null}),n):H(n)?te(e[r]||(e[r]={stack:[],entry:null,wire:null}),n,n.length):e[r]=null}n<e.length&&e.splice(n)};function ne(e,t,n){this.type=e,this.template=t,this.values=n}const{create:re,defineProperties:se}=Object,oe=e=>{const t=l(new WeakMap);return se((t,...n)=>new ne(e,t,n),{for:{value(n,r){const s=t.get(n)||t.set(n,re(null));return s[r]||(s[r]=(t=>(n,...r)=>ee(t,{type:e,template:n,values:r}))({stack:[],entry:null,wire:null}))}},node:{value:(t,...n)=>ee({stack:[],entry:null,wire:null},{type:e,template:t,values:n}).valueOf()}})},le=l(new WeakMap),ae=(e,t)=>{const n="function"==typeof t?t():t,r=le.get(e)||le.set(e,{stack:[],entry:null,wire:null}),s=n instanceof ne?ee(r,n):n;return s!==r.wire&&(r.wire=s,e.textContent="",e.appendChild(s.valueOf())),e},ce=oe("html"),ie=oe("svg");function ue(e){for(var t=e[0],n=1,r=arguments.length;n<r;n++)t+=arguments[n]+e[n];return t}const{defineProperties:he,keys:fe}=Object,pe=(e,t,n,r,s)=>({configurable:!0,get:()=>r,set(o){(e||o!==r||t&&"object"==typeof o&&o)&&(r=o,n?s.call(this,r):s.call(this))}}),de=(e,t,n,r,s,o)=>{const l={},a=s!==ge,c=[n,r,a];for(let n=fe(e),r=0;r<n.length;r++){const i=t(e,n[r]),u=a?s(i):[i,s];o&&(u[1]=o),l[n[r]]=pe.apply(null,c.concat(u))}return l},ge=()=>{};var me=({all:e=!1,shallow:t=!0,useState:n=ge,getAttribute:r=((e,t)=>e.getAttribute(t))}={})=>(s,o,l)=>{const a=de(o,(e,t)=>{let n=e[t],o=typeof n;return s.hasOwnProperty(t)?(n=s[t],delete s[t]):s.hasAttribute(t)&&(n=r(s,t),"number"==o?n=+n:"boolean"==o&&(n=!/^(?:false|0|)$/.test(n))),n},e,t,n,l);return he(s,a)};const ve=me({dom:!0}),ye=customElements,{define:be}=ye,{create:we,defineProperties:Ee,getOwnPropertyDescriptor:ke,keys:xe}=Object,Ce="element",Ae=l(new Map([[Ce,{c:HTMLElement,e:Ce}]])),Me=e=>document.createElement(e),Se=e=>Ae.get(e)||Ae.set(e,{c:Me(e).constructor,e:e}),$e=(e,t)=>{const{attachShadow:n,attributeChanged:r,bound:s,connected:o,disconnected:l,handleEvent:a,init:c,observedAttributes:i,props:u,render:h,style:f}=t,p=new WeakMap,d={},g={},m=[],v=we(null),y=(e,t,r)=>{if(!p.has(e)){p.set(e,0),Ee(e,{html:{value:Oe.bind(n?e.attachShadow(n):e)}});for(let t=0;t<b;t++){const{type:n,options:r}=m[t];e.addEventListener(n,e,r)}s&&s.forEach(Ne,e),u&&ve(e,u,h),(c||h)&&(c||h).call(e),t&&(e[t]=r)}};for(let e=xe(t),n=0,{length:r}=e;n<r;n++){const r=e[n];if(/^on./.test(r)&&!/Options$/.test(r)){const e=t[r+"Options"]||!1,n=r.toLowerCase();let s=n.slice(2);m.push({type:s,options:e}),v[s]=r,n!==r&&(s=n.slice(2,3)+r.slice(3),v[s]=r,m.push({type:s,options:e}))}switch(r){case"attachShadow":case"observedAttributes":case"style":break;default:g[r]=ke(t,r)}}const{length:b}=m;if(b&&!a&&(g.handleEvent={value(e){this[v[e.type]](e)}}),null!==u)if(u)for(let e=xe(u),t=0;t<e.length;t++){const n=e[t];g[n]={get(){return y(this),u[n]},set(e){y(this,n,e)}}}else g.props={get(){const e={};for(let{attributes:t}=this,{length:n}=t,r=0;r<n;r++){const{name:n,value:s}=t[r];e[n]=s}return e}};i&&(d.observedAttributes={value:i}),g.attributeChangedCallback={value(){y(this),r&&r.apply(this,arguments)}},g.connectedCallback={value(){y(this),o&&o.apply(this,arguments)}},l&&(g.disconnectedCallback={value:l});const{c:w,e:E}=Se(t.extends||Ce);class k extends w{}Ee(k,d),Ee(k.prototype,g);const x=[e,k];return E!==Ce&&x.push({extends:E}),be.apply(ye,x),Ae.set(e,{c:k,e:E}),f&&(document.head.appendChild(Me("style")).textContent=f(E===Ce?e:E+'[is="'+e+'"]')),k};function Ne(e){this[e]=this[e].bind(this)}function Oe(){return ae(this,ce.apply(null,arguments))}ye.get("uce-lib")||ye.define("uce-lib",class extends Se(Ce).c{static get define(){return $e}static get render(){return ae}static get html(){return ce}static get svg(){return ie}static get css(){return ue}});const Te=(e,t)=>e[t];var Le=({all:e=!1,shallow:t=!0,useState:n=ge}={})=>(r,s)=>he({},de(r,Te,e,t,n,s)),qe=(e={})=>(e.dom?me:Le)(e);const{document:Pe,MutationObserver:He,Set:_e,WeakMap:De}=self,je=e=>"querySelectorAll"in e,{filter:We}=[];var Re=e=>{const t=new De,n=t=>{const{query:n}=e;if(n.length)for(let e=0,{length:s}=t;e<s;e++)r(We.call(t[e].addedNodes,je),!0,n),r(We.call(t[e].removedNodes,je),!1,n)},r=(n,o,a,c=new _e)=>{for(let i,u,h=0,{length:f}=n;h<f;h++)if(!c.has(u=n[h])){if(c.add(u),o)for(let n,r=s(u),l=0,{length:c}=a;l<c;l++)r.call(u,n=a[l])&&(t.has(u)||t.set(u,new _e),i=t.get(u),i.has(n)||(i.add(n),e.handle(u,o,n)));else t.has(u)&&(i=t.get(u),t.delete(u),i.forEach(t=>{e.handle(u,o,t)}));r(l(u),o,a,c)}},s=e=>e.matches||e.webkitMatchesSelector||e.msMatchesSelector,o=(t,n=!0)=>{r(t,n,e.query)},l=e=>i.length?e.querySelectorAll(i):i,a=new He(n),c=e.root||Pe,{query:i}=e;return a.observe(c,{childList:!0,subtree:!0}),o(l(c)),{drop:e=>{for(let n=0,{length:r}=e;n<r;n++)t.delete(e[n])},flush:()=>{n(a.takeRecords())},observer:a,parse:o}};const{create:Fe,defineProperty:Ie,keys:ze}=Object,Be=Fe(null),Ve={},Ue=[],Xe=e=>Be[e],Ge=(e,n)=>{const r=[],s=[],o=e.replace(/(^|[\r\n])\s*import\s*((['|"])[^\3]+?\3)/g,(e,t,n)=>t+"require("+n+")").replace(/(^|[\r\n])\s*import\s*([^\3]+?)(\s*from\s*)((['|"])[^\5]+?\5)/g,(e,t,n,r,s)=>t+"const "+n.replace(/\s+as\s+/g,":")+" = require("+s+")").replace(/^\s*export\s+default(\s*)/gm,"exports.default =$1").replace(/(^|[\r\n])\s*export\s*\{([^}]+?)\}[^\n]*/g,(e,t,n)=>(n.trim().split(/\s*,\s*/).forEach(e=>{r.push(`exports.${e} = ${e};`)}),t)).replace(/(^|[\r\n])\s*export\s+(const|let|var|function)(\s+)(\w+)/g,(e,t,n,s,o)=>(r.push(`exports.${o} = ${o};`),t+n+s+o)).concat("\n",r.join("\n")).replace(/require\s*\(\s*(['"])([^\1]+?)\1\s*\)/g,(e,t,n)=>(s.push(n),e));return n?(s.forEach(e=>{e in Be||Ue.push(new t(t=>{let n=Ve;if(/^(?:[./]|https?:)/.test(e)){Be[e]=n;const r=new XMLHttpRequest;r.open("get",path,!0),r.send(null),r.onload=()=>{t(Be[e]=o.loader(r.responseText))}}else Ie(Be,e,{get:()=>n,set:e=>{t(n=e)}})}))}),new t(e=>{t.all(Ue).then(()=>e(o))})):o},Je=e=>{const t=ze(e||{}),n=t.map(t=>e[t]).concat(Xe);return t.push("require"),e=>{const r={},s={exports:r},o=t.concat("module","exports",'"use strict;"\n'+Ge(e));Function.apply(null,o).apply(null,n.concat(s,r));const l=s.exports,a=ze(l);return 1===a.length&&"default"===a[0]?l.default:l}};Je.loader=Je(),t.all||(t.all=e=>new t(t=>{const{length:n}=e;n||t();let r=0;for(;r<n;)e[r++].then(s);function s(){++r===n&&t()}r=0}));const Ke=qe({dom:!0,useState:d}),Qe=[],{drop:Ye,parse:Ze}=Re({query:Qe,handle(e,t,n){if(Ye([e]),st.has(n)){const e=st.get(n);st.delete(n),Qe.splice(Qe.indexOf(n),1),e()}}}),{loader:et}=Je,tt=(e,t)=>{e in Be&&Be[e]!==Ve&&console.warn("duplicated "+e),Be[e]=t},nt=e=>{const t=new at;return t.innerHTML=e,t},rt={setup:()=>{}},st=new Map,ot=()=>{throw new Error("bad template")},lt={define:$e,render:ae,html:ce,svg:ie,css:ue,reactive:qe({useState:d}),slot:e=>[].reduce.call(e.querySelectorAll("[slot]"),(e,t)=>(e[t.getAttribute("slot")]=t,e),{})};tt("@uce/reactive",lt.reactive),tt("@uce/slot",lt.slot),tt("@uce",lt),tt("uce",lt),tt("augmentor",{augmentor:c,useState:d,useRef:e=>{const t=a.i++,{stack:n,length:r}=a;return t===r&&(a.length=n.push({current:e})),n[t]},useContext:e=>{const{hook:t,args:n}=a,r=g.get(e),s={hook:t,args:n};return r.some(y,s)||r.push(s),e.value},createContext:e=>{const t={value:e,provide:v};return g.set(t,[]),t},useCallback:(e,t)=>A(()=>e,t),useMemo:A,useReducer:p,useEffect:x,useLayoutEffect:C}),tt("qsa-observer",Re),tt("reactive-props",qe),tt("@webreflection/lie",t);const at=$e("uce-template",{extends:"template",props:null,init:function e(t){const n=e=>{const t=p?et(e):rt,n=t.setup||rt.setup,{observedAttributes:r,props:s}=t,o=(e=>{const t=[],n=[],{length:r}=e;let s=0,o=0,l=0;for(;s<r&&-1<(s=e.indexOf("{{",l))&&-1<(o=e.indexOf("}}",s+2));)t.push(e.slice(l,s)),n.push(e.slice(s+2,o)),l=o+2;t.push(e.slice(l));const a=[t],c=Function("return function(){with(arguments[0])return["+n+"]}")();return e=>a.concat(c(e))})(g),l={props:null,extends:u?f:"element",init(){const e=this,{html:r}=e;let l=!0,a=null;(this.render=c(()=>{l&&(l=!1,s&&Ke(e,s),a=n.call(t,e)||{}),r.apply(null,o.call(this,a))}))()}};h&&(l.style=()=>h),d&&(l.attachShadow={mode:d}),r&&(l.observedAttributes=r,l.attributeChanged=function(){this.hasOwnProperty("attributeChanged")&&this.attributeChanged.apply(this,arguments)}),p&&(l.connected=function(){this.hasOwnProperty("connected")&&this.connected()},l.disconnected=function(){this.hasOwnProperty("disconnected")&&this.disconnected()});for(const e in t)e in l||(l[e]=t[e]);$e(u||f,l)},{content:r,ownerDocument:s,parentNode:o}=this,{childNodes:l}=r||W(this.innerHTML),a=[];o&&this instanceof HTMLUnknownElement&&o.removeChild(this);let i=n,u="",h="",f="",p="",d="",g="";for(let e=0;e<l.length;e++){const t=l[e];if(1===t.nodeType){const{tagName:e}=t,r=t.hasAttribute("is");/^style$/i.test(e)?a.push(t):r||/-/i.test(e)?(f&&ot(),f=e.toLowerCase(),g=t.innerHTML,r&&(u=t.getAttribute("is").toLowerCase()),t.hasAttribute("shadow")&&(d=t.getAttribute("shadow")||"open")):/^script$/i.test(e)&&(p&&ot(),p=t.textContent,i=()=>{Ge(p,!0).then(n)})}}const m=u?f+'[is="'+u+'"]':f;if(!m&&!t)return setTimeout(e.bind(this),0,!0);for(let e=a.length;e--;){const t=a[e],{textContent:n}=t;if(t.hasAttribute("shadow"))g="<style>"+n+"</style>"+g;else if(t.hasAttribute("scoped")){const e=[];h+=n.replace(/\{([^}]+?)\}/g,(t,n)=>""+e.push(n)+",").split(",").map(e=>e.trim()?m+" "+e.trim():"").join(",\n").replace(/\x01(\d+),/g,(t,n)=>"{"+e[--n]+"}").replace(/(,\n)+/g,",\n")}else h+=n}this.hasAttribute("lazy")?(st.set(m,i),Qe.push(m),Ze(s.querySelectorAll(Qe))):i()}});at.resolve=tt,at.from=nt,e.parse=nt,e.resolve=tt}({});
