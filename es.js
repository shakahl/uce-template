self.uceTemplate=function(e){"use strict";
/*! (c) Andrea Giammarchi @webreflection ISC */!function(){var e="function"==typeof Promise?Promise:function(e){var t,n=[],r=0;return e((function(e){t=e,r=1,n.splice(0).forEach(s)})),{then:s};function s(e){return r?setTimeout(e,0,t):n.push(e),this}},t=function(e,t){var n=function(e){for(var t=0,n=e.length;t<n;t++)r(e[t])},r=function(e){var t=e.target,n=e.attributeName,r=e.oldValue;t.attributeChangedCallback(n,r,t.getAttribute(n))};return function(s,o){var l=s.constructor.observedAttributes;return l&&e(o).then((function(){new t(n).observe(s,{attributes:!0,attributeOldValue:!0,attributeFilter:l});for(var e=0,o=l.length;e<o;e++)s.hasAttribute(l[e])&&r({target:s,attributeName:l[e],oldValue:null})})),s}},n=self,r=n.document,s=n.MutationObserver,o=n.Set,l=n.WeakMap,a=function(e){return"querySelectorAll"in e},c=[].filter,i=function(e){var t=new l,n=function(t){var n=e.query;if(n.length)for(var r=0,s=t.length;r<s;r++)i(c.call(t[r].addedNodes,a),!0,n),i(c.call(t[r].removedNodes,a),!1,n)},i=function n(r,s,l){for(var a,c,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new o,h=function(h,f,p,d){if(!i.has(f=r[p])){if(i.add(f),s)for(var g,m=u(f),v=0,y=l.length;v<y;v++)m.call(f,g=l[v])&&(t.has(f)||t.set(f,new o),(h=t.get(f)).has(g)||(h.add(g),e.handle(f,s,g)));else t.has(f)&&(h=t.get(f),t.delete(f),h.forEach((function(t){e.handle(f,s,t)})));n(f.querySelectorAll(l),s,l,i)}a=h,c=f},f=0,p=r.length;f<p;f++)h(a,c,f)},u=function(e){return e.matches||e.webkitMatchesSelector||e.msMatchesSelector},h=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];i(t,n,e.query)},f=new s(n),p=e.root||r,d=e.query;return f.observe(p,{childList:!0,subtree:!0}),d.length&&h(p.querySelectorAll(d)),{drop:function(e){for(var n=0,r=e.length;n<r;n++)t.delete(e[n])},flush:function(){n(f.takeRecords())},observer:f,parse:h}},u=self,h=u.document,f=u.Map,p=u.MutationObserver,d=u.Object,g=u.Set,m=u.WeakMap,v=u.Element,y=u.HTMLElement,w=u.Node,b=u.Error,E=u.TypeError,k=self.Promise||e,C=d.defineProperty,x=d.getOwnPropertyNames,A=d.setPrototypeOf,M=!self.customElements;if(M){var $=function(){var e=this.constructor;if(!N.has(e))throw new E("Illegal constructor");var t=N.get(e);if(H)return D(H,t);var n=S.call(h,t);return D(A(n,e.prototype),t)},S=h.createElement,N=new f,O=new f,T=new f,L=new f,q=[],P=i({query:q,handle:function(e,t,n){var r=T.get(n);if(t&&!r.isPrototypeOf(e)){H=A(e,r);try{new r.constructor}finally{H=null}}var s="".concat(t?"":"dis","connectedCallback");s in r&&e[s]()}}).parse,H=null,_=function(t){if(!O.has(t)){var n,r=new e((function(e){n=e}));O.set(t,{$:r,_:n})}return O.get(t).$},D=t(_,p);C(self,"customElements",{configurable:!0,value:{_:{classes:N},define:function(e,t){if(L.has(e))throw new b('the name "'.concat(e,'" has already been used with this registry'));N.set(t,e),T.set(e,t.prototype),L.set(e,t),q.push(e),_(e).then((function(){P(h.querySelectorAll(e))})),O.get(e)._(t)},get:function(e){return L.get(e)},whenDefined:_}}),($.prototype=y.prototype).constructor=$,C(self,"HTMLElement",{configurable:!0,value:$}),C(h,"createElement",{configurable:!0,value:function(e,t){var n=t&&t.is,r=n?L.get(n):L.get(e);return r?new r:S.call(h,e)}}),"isConnected"in w.prototype||C(w.prototype,"isConnected",{configurable:!0,get:function(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else try{var j=function e(){return self.Reflect.construct(HTMLLIElement,[],e)};j.prototype=HTMLLIElement.prototype;var W="extends-li";self.customElements.define("extends-li",j,{extends:"li"}),M=h.createElement("li",{is:W}).outerHTML.indexOf(W)<0;var R=self.customElements,F=R.get,I=R.whenDefined;C(self.customElements,"whenDefined",{configurable:!0,value:function(e){var t=this;return I.call(this,e).then((function(n){return n||F.call(t,e)}))}})}catch(e){M=!M}if(M){var z=function(e){var t=K.get(e);(0,t.parse)(t.root.querySelectorAll(this),e.isConnected)},B=self.customElements,V=v.prototype.attachShadow,U=h.createElement,X=B._,G=B.define,J=B.get,K=new m,Q=new g,Y=new f,Z=new f,ee=new f,te=new f,ne=[],re=[],se=function(e){return te.get(e)||J.call(B,e)},oe=function(e,t,n){var r=ee.get(n);if(t&&!r.isPrototypeOf(e)){ue=A(e,r);try{new r.constructor}finally{ue=null}}var s="".concat(t?"":"dis","connectedCallback");s in r&&e[s]()},le=i({query:re,handle:oe}).parse,ae=i({query:ne,handle:function(e,t){K.has(e)&&(t?Q.add(e):Q.delete(e),z.call(re,e))}}).parse,ce=function(e){if(!Z.has(e)){var t,n=new k((function(e){t=e}));Z.set(e,{$:n,_:t})}return Z.get(e).$},ie=t(ce,p),ue=null;x(self).filter((function(e){return/^HTML(?!Element)/.test(e)})).forEach((function(e){function t(){var e=this.constructor;if(!Y.has(e)){if(X&&X.classes.has(e))return;throw new E("Illegal constructor")}var t=Y.get(e),n=t.is,r=t.tag;if(ue)return ie(ue,n);var s=U.call(h,r);return s.setAttribute("is",n),ie(A(s,e.prototype),n)}(t.prototype=self[e].prototype).constructor=t,C(self,e,{value:t})})),C(h,"createElement",{value:function(e,t){var n=t&&t.is;if(n){var r=te.get(n);if(r&&Y.get(r).tag===e)return new r}var s=U.call(h,e);return n&&s.setAttribute("is",n),s}}),C(v.prototype,"attachShadow",{value:function(){var e=V.apply(this,arguments),t=i({query:re,root:e,handle:oe}),n=t.parse;return K.set(this,{root:e,parse:n}),e}}),C(B,"get",{configurable:!0,value:se}),C(B,"whenDefined",{configurable:!0,value:ce}),C(B,"define",{configurable:!0,value:function(e,t,n){var r,s=n&&n.extends;if(s){if(se(e))throw new b("'".concat(e,"' has already been defined as a custom element"));r="".concat(s,'[is="').concat(e,'"]'),Y.set(t,{is:e,tag:s}),ee.set(r,t.prototype),te.set(e,t),re.push(r)}else G.apply(B,arguments),ne.push(r=e);ce(e).then((function(){s?(le(h.querySelectorAll(r)),Q.forEach(z,[r])):ae(h.querySelectorAll(r))})),Z.get(e)._(t)}})}}();
/*! (c) Andrea Giammarchi - ISC */
self.t=function(e){var t="fragment",n="template",r="content"in o(n)?function(e){var t=o(n);return t.innerHTML=e,t.content}:function(e){var r=o(t),l=o(n),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var c=RegExp.$1;l.innerHTML="<table>"+e+"</table>",a=l.querySelectorAll(c)}else l.innerHTML=e,a=l.childNodes;return s(r,a),r};return function(e,t){return("svg"===t?l:r)(e)};function s(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function o(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}function l(e){var n=o(t),r=o("div");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",s(n,r.firstChild.childNodes),n}}(document),n="function"==typeof cancelAnimationFrame,r=n?cancelAnimationFrame:clearTimeout,s=n?requestAnimationFrame:setTimeout;function o(e){var t,o,l,a,c;return u(),function(e,n,r){return l=e,a=n,c=r,o||(o=s(i)),--t<0&&h(!0),h};function i(){u(),l.apply(a,c||[])}function u(){t=e||1/0,o=n?0:null}function h(e){var t=!!o;return t&&(r(o),e&&i()),t}}var l=e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)})
/*! (c) Andrea Giammarchi - ISC */;let a=null;const c=e=>{const t=[];return function n(){const r=a,s=[];a={hook:n,args:arguments,stack:t,i:0,length:t.length,after:s};try{return e.apply(null,arguments)}finally{a=r;for(let e=0,{length:t}=s;e<t;e++)s[e]()}}},i=l(new WeakMap),u=(e,t,n)=>{e.apply(t,n)},h={async:!1,always:!1},f=(e,t)=>"function"==typeof t?t(e):t,p=(e,t,n,r)=>{const s=a.i++,{hook:l,args:c,stack:p,length:d}=a;s===d&&(a.length=p.push({}));const g=p[s];if(g.args=c,s===d){const s="function"==typeof n,{async:a,always:c}=(s?r:n)||r||h;g.$=s?n(t):f(void 0,t),g._=a?i.get(l)||i.set(l,o()):u,g.f=t=>{const n=e(g.$,t);(c||g.$!==n)&&(g.$=n,g._(l,null,g.args))}}return[g.$,g.f]},d=(e,t)=>p(f,e,void 0,t),g=new WeakMap,m=({hook:e,args:t})=>{e.apply(null,t)};function v(e){this.value!==e&&(this.value=e,g.get(this).forEach(m))}function y({hook:e}){return e===this.hook}const w=new WeakMap,b=l(w),E=()=>{},k=e=>(t,n)=>{const r=a.i++,{hook:s,after:l,stack:c,length:i}=a;if(r<i){const s=c[r],{update:o,values:a,stop:i}=s;if(!n||n.some(M,a)){s.values=n,e&&i(e);const{clean:r}=s;r&&(s.clean=null,r());const a=()=>{s.clean=t()};e?o(a):l.push(a)}}else{const r=e?o():E,i={clean:null,update:r,values:n,stop:E};a.length=c.push(i),(b.get(s)||b.set(s,[])).push(i);const u=()=>{i.clean=t()};e?i.stop=r(u):l.push(u)}},C=(w.has.bind(w),k(!0)),x=k(!1),A=(e,t)=>{const n=a.i++,{stack:r,length:s}=a;return n===s?a.length=r.push({$:e(),_:t}):t&&!t.some(M,r[n]._)||(r[n]={$:e(),_:t}),r[n].$};function M(e,t){return e!==this[t]}const $=e=>e,S=Object.create(null),N=(e,t)=>{const{template:n,values:r}=((e,t)=>{const n=t||$,r=[],s=[],{length:o}=e;let l=0;for(;l<=o;){let t=e.indexOf("${",l);if(-1<t){r.push(e.slice(l,t)),t=l=t+2;let a=1;for(;0<a&&l<o;){const t=e[l++];a+="{"===t?1:"}"===t?-1:0}s.push(n(e.slice(t,l-1)))}else r.push(e.slice(l)),l=o+1}return{template:r,values:s}})(e,t),s=[n],o=Function("return function(){with(arguments[0])return["+r+"]}")();return e=>s.concat(o(e||S))},O=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,T=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,L=/<[a-z][^>]+$/i,q=/>[^<>]*$/,P=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,H=/\s+$/,_=(e,t)=>0<t--&&(L.test(e[t])||!q.test(e[t])&&_(e,t)),D=(e,t,n)=>T.test(t)?e:`<${t}${n.replace(H,"")}></${t}>`;const{isArray:j}=Array,{indexOf:W,slice:R}=[],F=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e;const I=({childNodes:e},t)=>e[t],z=e=>{const t=[];let{parentNode:n}=e;for(;n;)t.push(W.call(n.childNodes,e)),n=(e=n).parentNode;return t},{createTreeWalker:B,importNode:V}=document,U=1!=V.length,X=U?(e,n)=>V.call(document,t(e,n),!0):t,G=U?e=>B.call(document,e,129,null,!1):e=>B.call(document,e,129),J=(e,t,n)=>((e,t,n,r,s)=>{const o=n.length;let l=t.length,a=o,c=0,i=0,u=null;for(;c<l||i<a;)if(l===c){const t=a<o?i?r(n[i-1],-0).nextSibling:r(n[a-i],0):s;for(;i<a;)e.insertBefore(r(n[i++],1),t)}else if(a===i)for(;c<l;)u&&u.has(t[c])||e.removeChild(r(t[c],-1)),c++;else if(t[c]===n[i])c++,i++;else if(t[l-1]===n[a-1])l--,a--;else if(t[c]===n[a-1]&&n[i]===t[l-1]){const s=r(t[--l],-1).nextSibling;e.insertBefore(r(n[i++],1),r(t[c++],-1).nextSibling),e.insertBefore(r(n[--a],1),s),t[l]=n[a]}else{if(!u){u=new Map;let e=i;for(;e<a;)u.set(n[e],e++)}if(u.has(t[c])){const s=u.get(t[c]);if(i<s&&s<a){let o=c,h=1;for(;++o<l&&o<a&&u.get(t[o])===s+h;)h++;if(h>s-i){const o=r(t[c],0);for(;i<s;)e.insertBefore(r(n[i++],1),o)}else e.replaceChild(r(n[i++],1),r(t[c++],-1))}else c++}else e.removeChild(r(t[c++],-1))}return n})(e.parentNode,t,n,F,e),K=(e,t)=>"ref"===t?(e=>t=>{"function"==typeof t?t(e):t.current=e})(e):"aria"===t?(e=>t=>{for(const n in t){const r="role"===n?n:"aria-"+n,s=t[n];null==s?e.removeAttribute(r):e.setAttribute(r,s)}})(e):".dataset"===t?(({dataset:e})=>t=>{for(const n in t){const r=t[n];null==r?delete e[n]:e[n]=r}})(e):"."===t.slice(0,1)?((e,t)=>n=>{e[t]=n})(e,t.slice(1)):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{const s=j(t)?t:[t,!1];n!==s[0]&&(n&&e.removeEventListener(r,n,s[1]),(n=s[0])&&e.addEventListener(r,n,s[1]))}})(e,t):((e,t)=>{let n,r=!0;const s=document.createAttributeNS(null,t);return t=>{n!==t&&(n=t,null==n?r||(e.removeAttributeNode(s),r=!0):(s.value=t,r&&(e.setAttributeNodeNS(s),r=!1)))}})(e,t);function Q(e){const{type:t,path:n}=e,r=n.reduceRight(I,this);return"node"===t?(e=>{let t,n,r=[];const s=o=>{switch(typeof o){case"string":case"number":case"boolean":t!==o&&(t=o,n?n.textContent=o:n=document.createTextNode(o),r=J(e,r,[n]));break;case"object":case"undefined":if(null==o){t!=o&&(t=o,r=J(e,r,[]));break}if(j(o)){t=o,0===o.length?r=J(e,r,[]):"object"==typeof o[0]?r=J(e,r,o):s(String(o));break}"ELEMENT_NODE"in o&&t!==o&&(t=o,r=J(e,r,11===o.nodeType?R.call(o.childNodes):[o]))}};return s})(r):"attr"===t?K(r,e.name):(e=>{let t;return n=>{t!=n&&(t=n,e.textContent=null==n?"":n)}})(r)}const Y="isµ",Z=l(new WeakMap),ee=(e,t)=>{const n=((e,t,n)=>{const r=[],{length:s}=e;for(let n=1;n<s;n++){const s=e[n-1];r.push(O.test(s)&&_(e,n)?s.replace(O,(e,r,s)=>`${t}${n-1}=${s||'"'}${r}${s?"":'"'}`):`${s}\x3c!--${t}${n-1}--\x3e`)}r.push(e[s-1]);const o=r.join("").trim();return n?o:o.replace(P,D)})(t,Y,"svg"===e),r=X(n,e),s=G(r),o=[],l=t.length-1;let a=0,c="isµ"+a;for(;a<l;){const e=s.nextNode();if(!e)throw"bad template: "+n;if(8===e.nodeType)e.textContent===c&&(o.push({type:"node",path:z(e)}),c="isµ"+ ++a);else{for(;e.hasAttribute(c);)o.push({type:"attr",path:z(e),name:e.getAttribute(c)}),e.removeAttribute(c),c="isµ"+ ++a;/^(?:style|textarea)$/i.test(e.tagName)&&e.textContent.trim()===`\x3c!--${c}--\x3e`&&(o.push({type:"text",path:z(e)}),c="isµ"+ ++a)}}return{content:r,nodes:o}},te=(e,t)=>{const{content:n,nodes:r}=Z.get(t)||Z.set(t,ee(e,t)),s=V.call(document,n,!0);return{content:s,updates:r.map(Q,s)}},ne=(e,{type:t,template:n,values:r})=>{const{length:s}=r;re(e,r,s);let{entry:o}=e;o&&o.template===n&&o.type===t||(e.entry=o=((e,t)=>{const{content:n,updates:r}=te(e,t);return{type:e,template:t,content:n,updates:r,wire:null}})(t,n));const{content:l,updates:a,wire:c}=o;for(let e=0;e<s;e++)a[e](r[e]);return c||(o.wire=(e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return n?t[0]:e;const r=R.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(r[t++])}return e}}})(l))},re=({stack:e},t,n)=>{for(let r=0;r<n;r++){const n=t[r];n instanceof se?t[r]=ne(e[r]||(e[r]={stack:[],entry:null,wire:null}),n):j(n)?re(e[r]||(e[r]={stack:[],entry:null,wire:null}),n,n.length):e[r]=null}n<e.length&&e.splice(n)};function se(e,t,n){this.type=e,this.template=t,this.values=n}const{create:oe,defineProperties:le}=Object,ae=e=>{const t=l(new WeakMap);return le((t,...n)=>new se(e,t,n),{for:{value(n,r){const s=t.get(n)||t.set(n,oe(null));return s[r]||(s[r]=(t=>(n,...r)=>ne(t,{type:e,template:n,values:r}))({stack:[],entry:null,wire:null}))}},node:{value:(t,...n)=>ne({stack:[],entry:null,wire:null},{type:e,template:t,values:n}).valueOf()}})},ce=l(new WeakMap),ie=(e,t)=>{const n="function"==typeof t?t():t,r=ce.get(e)||ce.set(e,{stack:[],entry:null,wire:null}),s=n instanceof se?ne(r,n):n;return s!==r.wire&&(r.wire=s,e.textContent="",e.appendChild(s.valueOf())),e},ue=ae("html"),he=ae("svg");function fe(e){for(var t=e[0],n=1,r=arguments.length;n<r;n++)t+=arguments[n]+e[n];return t}const{defineProperties:pe,keys:de}=Object,ge=(e,t,n,r,s)=>({configurable:!0,get:()=>r,set(o){(e||o!==r||t&&"object"==typeof o&&o)&&(r=o,n?s.call(this,r):s.call(this))}}),me=(e,t,n,r,s,o)=>{const l={},a=s!==ve,c=[n,r,a];for(let n=de(e),r=0;r<n.length;r++){const i=t(e,n[r]),u=a?s(i):[i,s];o&&(u[1]=o),l[n[r]]=ge.apply(null,c.concat(u))}return l},ve=()=>{};var ye=({all:e=!1,shallow:t=!0,useState:n=ve,getAttribute:r=((e,t)=>e.getAttribute(t))}={})=>(s,o,l)=>{const a=me(o,(e,t)=>{let n=e[t];return s.hasOwnProperty(t)?(n=s[t],delete s[t]):s.hasAttribute(t)&&(n=r(s,t)),n},e,t,n,l);return pe(s,a)};const we=ye({dom:!0}),be=customElements,{define:Ee}=be,{create:ke,defineProperties:Ce,getOwnPropertyDescriptor:xe,keys:Ae}=Object,Me="element",$e=l(new Map([[Me,{c:HTMLElement,e:Me}]])),Se=e=>document.createElement(e),Ne=e=>$e.get(e)||$e.set(e,{c:Se(e).constructor,e:e}),Oe=(e,t)=>{const{attachShadow:n,attributeChanged:r,bound:s,connected:o,disconnected:l,handleEvent:a,init:c,observedAttributes:i,props:u,render:h,style:f}=t,p=new WeakMap,d={},g={},m=[],v=ke(null),y=(e,t,r)=>{if(!p.has(e)){p.set(e,0),Ce(e,{html:{value:Le.bind(n?e.attachShadow(n):e)}});for(let t=0;t<w;t++){const{type:n,options:r}=m[t];e.addEventListener(n,e,r)}s&&s.forEach(Te,e),u&&we(e,u,h),(c||h)&&(c||h).call(e),t&&(e[t]=r)}};for(let e=Ae(t),n=0,{length:r}=e;n<r;n++){const r=e[n];if(/^on./.test(r)&&!/Options$/.test(r)){const e=t[r+"Options"]||!1,n=r.toLowerCase();let s=n.slice(2);m.push({type:s,options:e}),v[s]=r,n!==r&&(s=n.slice(2,3)+r.slice(3),v[s]=r,m.push({type:s,options:e}))}switch(r){case"attachShadow":case"observedAttributes":case"style":break;default:g[r]=xe(t,r)}}const{length:w}=m;if(w&&!a&&(g.handleEvent={value(e){this[v[e.type]](e)}}),null!==u)if(u)for(let e=Ae(u),t=0;t<e.length;t++){const n=e[t];g[n]={get(){return y(this),u[n]},set(e){y(this,n,e)}}}else g.props={get(){const e={};for(let{attributes:t}=this,{length:n}=t,r=0;r<n;r++){const{name:n,value:s}=t[r];e[n]=s}return e}};i&&(d.observedAttributes={value:i}),g.attributeChangedCallback={value(){y(this),r&&r.apply(this,arguments)}},g.connectedCallback={value(){y(this),o&&o.apply(this,arguments)}},l&&(g.disconnectedCallback={value:l});const{c:b,e:E}=Ne(t.extends||Me);class k extends b{}Ce(k,d),Ce(k.prototype,g);const C=[e,k];E!==Me&&C.push({extends:E}),Ee.apply(be,C),$e.set(e,{c:k,e:E}),f&&(document.head.appendChild(Se("style")).textContent=f(E===Me?e:E+'[is="'+e+'"]'))};function Te(e){this[e]=this[e].bind(this)}function Le(){return ie(this,ue.apply(null,arguments))}be.get("uce-lib")||be.define("uce-lib",class extends Ne(Me).c{static get define(){return Oe}static get render(){return ie}static get html(){return ue}static get svg(){return he}static get css(){return fe}});const qe=(e,t)=>e[t];var Pe=({all:e=!1,shallow:t=!0,useState:n=ve}={})=>(r,s)=>pe({},me(r,qe,e,t,n,s)),He=(e={})=>(e.dom?ye:Pe)(e);const{document:_e,MutationObserver:De,Set:je,WeakMap:We}=self,Re=e=>"querySelectorAll"in e,{filter:Fe}=[];var Ie=e=>{const t=new We,n=t=>{const{query:n}=e;if(n.length)for(let e=0,{length:s}=t;e<s;e++)r(Fe.call(t[e].addedNodes,Re),!0,n),r(Fe.call(t[e].removedNodes,Re),!1,n)},r=(n,o,a,c=new je)=>{for(let i,u,h=0,{length:f}=n;h<f;h++)if(!c.has(u=n[h])){if(c.add(u),o)for(let n,r=s(u),l=0,{length:c}=a;l<c;l++)r.call(u,n=a[l])&&(t.has(u)||t.set(u,new je),i=t.get(u),i.has(n)||(i.add(n),e.handle(u,o,n)));else t.has(u)&&(i=t.get(u),t.delete(u),i.forEach(t=>{e.handle(u,o,t)}));r(l(u),o,a,c)}},s=e=>e.matches||e.webkitMatchesSelector||e.msMatchesSelector,o=(t,n=!0)=>{r(t,n,e.query)},l=e=>i.length?e.querySelectorAll(i):i,a=new De(n),c=e.root||_e,{query:i}=e;return a.observe(c,{childList:!0,subtree:!0}),o(l(c)),{drop:e=>{for(let n=0,{length:r}=e;n<r;n++)t.delete(e[n])},flush:()=>{n(a.takeRecords())},observer:a,parse:o}},ze="function"==typeof Promise?Promise:function(e){let t,n=[],r=0;return e(e=>{t=e,r=1,n.splice(0).forEach(s)}),{then:s};function s(e){return r?setTimeout(e,0,t):n.push(e),this}};const{create:Be,keys:Ve}=Object,Ue=Be(null),Xe=e=>Ue[e],Ge=(e,t)=>{const n=[],r=[],s=e.replace(/(^|[\r\n])\s*import\s*((['|"])[^\3]+?\3)/g,(e,t,n)=>t+"require("+n+")").replace(/(^|[\r\n])\s*import\s*([^\3]+?)(\s+from\s*)((['|"])[^\5]+?\5)/g,(e,t,n,r,s)=>t+"const "+n.replace(/\s+as\s+/g,": ")+" = require("+s+")").replace(/^\s*export\s+default(\s*)/gm,"exports.default =$1").replace(/(^|[\r\n])\s*export\s*\{([^}]+?)\}[^\n]*/g,(e,t,r)=>(r.trim().split(/\s*,\s*/).forEach(e=>{n.push(`exports.${e} = ${e};`)}),t)).replace(/(^|[\r\n])\s*export\s+(const|let|var|function)(\s+)(\w+)/g,(e,t,r,s,o)=>(n.push(`exports.${o} = ${o};`),t+r+s+o)).concat("\n",n.join("\n")).replace(/require\s*\((['"])([^\1]+?)\1\s*\)/g,(e,t,n)=>(r.push(n),e));return t?(r.forEach(e=>{e in Ue||(Ue[e]=void 0,Ke.push(Qe(e,e)))}),new ze(e=>{ze.all(Ke).then(()=>e(s))})):s},Je=e=>{const t=Ve(e||{}),n=t.map(t=>e[t]).concat(Xe);return t.push("require"),e=>{const r={},s={exports:r},o=t.concat("module","exports",'"use strict;"\n'+Ge(e));Function.apply(null,o).apply(null,n.concat(s,r));const l=s.exports,a=Ve(l);return 1===a.length&&"default"===a[0]?l.default:l}};Je.loader=Je(),ze.all||(ze.all=e=>new ze(t=>{const{length:n}=e;n||t();let r=0;for(;r<n;)e[r++].then(s);function s(){++r===n&&t()}r=0}));const Ke=[],Qe=(e,t)=>new ze(n=>{const r=new XMLHttpRequest;r.open("get",t,!0),r.send(null),r.onload=()=>{n(Ue[e]=Je.loader(r.responseText))}}),Ye=He({dom:!0,useState:d}),Ze=[],{drop:et,parse:tt}=Ie({query:Ze,handle(e,t,n){if(et([e]),ot.has(n)){const e=ot.get(n);ot.delete(n),Ze.splice(Ze.indexOf(n),1),e()}}}),{loader:nt}=Je,rt=(e,t)=>{if(e in Ue)throw new Error("duplicated "+e);Ue[e]=t},st={setup:()=>{}},ot=new Map,lt=()=>{throw new Error("bad template")};rt("@uce/reactive",He({useState:d})),rt("augmentor",{augmentor:c,useState:d,useRef:e=>{const t=a.i++,{stack:n,length:r}=a;return t===r&&(a.length=n.push({current:e})),n[t]},useContext:e=>{const{hook:t,args:n}=a,r=g.get(e),s={hook:t,args:n};return r.some(y,s)||r.push(s),e.value},createContext:e=>{const t={value:e,provide:v};return g.set(t,[]),t},useCallback:(e,t)=>A(()=>e,t),useMemo:A,useReducer:p,useEffect:C,useLayoutEffect:x}),rt("qsa-observer",Ie),rt("reactive-props",He),rt("uce",{define:Oe,render:ie,html:ue,svg:he,css:fe}),Oe("uce-template",{extends:"template",props:null,init(){const e=e=>{const t=f?nt(e):st,n=t.setup||st.setup,{observedAttributes:r,props:s}=t,o=N(d),l={props:null,extends:i?h:"element",init(){const e=this,{html:r}=e;let l=!0,a=null;(this.render=c(()=>{l&&(l=!1,s&&Ye(e,s),a=n.call(t,e)||{}),r.apply(null,o(a))}))()}};u&&(l.style=()=>u),p&&(l.attachShadow={mode:p}),r&&(l.observedAttributes=r,l.attributeChanged=function(){this.hasOwnProperty("attributeChanged")&&this.attributeChanged.apply(this,arguments)}),f&&(l.connected=function(){this.hasOwnProperty("connected")&&this.connected()},l.disconnected=function(){this.hasOwnProperty("disconnected")&&this.disconnected()});for(const e in t)e in l||(l[e]=t[e]);Oe(i||h,l)},{content:n,ownerDocument:r,parentNode:s}=this,{childNodes:o}=n||t(this.innerHTML),l=[];s&&this instanceof HTMLUnknownElement&&s.removeChild(this);let a=e,i="",u="",h="",f="",p="",d="";for(let t=0;t<o.length;t++){const n=o[t];if(1===n.nodeType){const{tagName:t}=n,r=n.hasAttribute("is");/^style$/i.test(t)?l.push(n):r||/-/i.test(t)?(h&&lt(),h=t.toLowerCase(),d=n.innerHTML.replace(/\{\{([^\2]+?)(\}\})/g,(e,t)=>"${"+t+"}"),r&&(i=n.getAttribute("is").toLowerCase()),n.hasAttribute("shadow")&&(p=n.getAttribute("shadow")||"open")):/^script$/i.test(t)&&(f&&lt(),f=n.textContent,a=()=>{Ge(f,!0).then(e)})}}const g=i?h+'[is="'+i+'"]':h;g||lt();for(let e=l.length;e--;){const t=l[e],{textContent:n}=t;if(t.hasAttribute("shadow"))d="<style>"+n+"</style>"+d;else if(t.hasAttribute("scoped")){const e=[];u+=n.replace(/\{([^}]+?)\}/g,(t,n)=>""+e.push(n)+",").split(",").map(e=>e.trim()?g+" "+e.trim():"").join(",\n").replace(/\x01(\d+),/g,(t,n)=>"{"+e[--n]+"}").replace(/(,\n)+/g,",\n")}else u+=n}this.hasAttribute("lazy")?(ot.set(g,a),Ze.push(g),tt(r.querySelectorAll(Ze))):a()}});const at=customElements.get("uce-template");return at.resolve=rt,at.from=e=>{const t=new at;return t.innerHTML=e,t},e.resolve=rt,e}({});
