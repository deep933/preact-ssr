!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var o,r,l,u,_,i={},c=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function a(e,n){for(var t in n)e[t]=n[t];return e}function s(e){var n=e.parentNode;n&&n.removeChild(e)}function p(e,n,t){var o,r,l,u,_=arguments;if(n=a({},n),arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(_[o]);if(null!=t&&(n.children=t),null!=e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===n[r]&&(n[r]=e.defaultProps[r]);return u=n.key,null!=(l=n.ref)&&delete n.ref,null!=u&&delete n.key,d(e,n,u,l)}function d(e,n,t,r){var l={type:e,props:n,key:t,ref:r,__k:null,__p:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return o.vnode&&o.vnode(l),l}function h(e){return e.children}function v(e,n){this.props=e,this.context=n}function y(e,n){if(null==n)return e.__p?y(e.__p,e.__p.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?y(e):null}function m(e){var n,t;if(null!=(e=e.__p)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return m(e)}}function g(e){(!e.__d&&(e.__d=!0)&&1===r.push(e)||u!==o.debounceRendering)&&(u=o.debounceRendering,(o.debounceRendering||l)(b))}function b(){var e,n,t,o,l,u,_;for(r.sort((function(e,n){return n.__v.__b-e.__v.__b}));e=r.pop();)e.__d&&(t=void 0,o=void 0,u=(l=(n=e).__v).__e,(_=n.__P)&&(t=[],o=E(_,l,a({},l),n.__n,void 0!==_.ownerSVGElement,null,t,null==u?y(l):u),H(t,l),o!=u&&m(l)))}function k(e,n,t,o,r,l,u,_,f){var a,p,d,h,v,m,g,b=t&&t.__k||c,k=b.length;if(_==i&&(_=null!=l?l[0]:k?y(t,0):null),a=0,n.__k=S(n.__k,(function(t){if(null!=t){if(t.__p=n,t.__b=n.__b+1,null===(d=b[a])||d&&t.key==d.key&&t.type===d.type)b[a]=void 0;else for(p=0;p<k;p++){if((d=b[p])&&t.key==d.key&&t.type===d.type){b[p]=void 0;break}d=null}if(h=E(e,t,d=d||i,o,r,l,u,_,f),(p=t.ref)&&d.ref!=p&&(g||(g=[])).push(p,t.__c||h,t),null!=h){if(null==m&&(m=h),null!=t.__d)h=t.__d,t.__d=null;else if(l==d||h!=_||null==h.parentNode){e:if(null==_||_.parentNode!==e)e.appendChild(h);else{for(v=_,p=0;(v=v.nextSibling)&&p<k;p+=2)if(v==h)break e;e.insertBefore(h,_)}"option"==n.type&&(e.value="")}_=h.nextSibling,"function"==typeof n.type&&(n.__d=h)}}return a++,t})),n.__e=m,null!=l&&"function"!=typeof n.type)for(a=l.length;a--;)null!=l[a]&&s(l[a]);for(a=k;a--;)null!=b[a]&&C(b[a],b[a]);if(g)for(a=0;a<g.length;a++)A(g[a],g[++a],g[++a])}function S(e,n,t){if(null==t&&(t=[]),null==e||"boolean"==typeof e)n&&t.push(n(null));else if(Array.isArray(e))for(var o=0;o<e.length;o++)S(e[o],n,t);else t.push(n?n("string"==typeof e||"number"==typeof e?d(null,e,null,null):null!=e.__e||null!=e.__c?d(e.type,e.props,e.key,null):e):e);return t}function w(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]="number"==typeof t&&!1===f.test(n)?t+"px":null==t?"":t}function x(e,n,t,o,r){var l,u,_,i,c;if("key"===(n=r?"className"===n?"class":n:"class"===n?"className":n)||"children"===n);else if("style"===n)if(l=e.style,"string"==typeof t)l.cssText=t;else{if("string"==typeof o&&(l.cssText="",o=null),o)for(u in o)t&&u in t||w(l,u,"");if(t)for(_ in t)o&&t[_]===o[_]||w(l,_,t[_])}else"o"===n[0]&&"n"===n[1]?(i=n!==(n=n.replace(/Capture$/,"")),c=n.toLowerCase(),n=(c in e?c:n).slice(2),t?(o||e.addEventListener(n,P,i),(e.l||(e.l={}))[n]=t):e.removeEventListener(n,P,i)):"list"!==n&&"tagName"!==n&&"form"!==n&&!r&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/^xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t?e.removeAttribute(n):e.setAttribute(n,t))}function P(e){this.l[e.type](o.event?o.event(e):e)}function E(e,n,t,r,l,u,_,i,c){var f,s,p,d,y,m,g,b,w,x,P=n.type;if(void 0!==n.constructor)return null;(f=o.__b)&&f(n);try{e:if("function"==typeof P){if(b=n.props,w=(f=P.contextType)&&r[f.__c],x=f?w?w.props.value:f.__p:r,t.__c?g=(s=n.__c=t.__c).__p=s.__E:("prototype"in P&&P.prototype.render?n.__c=s=new P(b,x):(n.__c=s=new v(b,x),s.constructor=P,s.render=N),w&&w.sub(s),s.props=b,s.state||(s.state={}),s.context=x,s.__n=r,p=s.__d=!0,s.__h=[]),null==s.__s&&(s.__s=s.state),null!=P.getDerivedStateFromProps&&a(s.__s==s.state?s.__s=a({},s.__s):s.__s,P.getDerivedStateFromProps(b,s.__s)),d=s.props,y=s.state,p)null==P.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(null==P.getDerivedStateFromProps&&null==s.__e&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(b,x),!s.__e&&null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(b,s.__s,x)){for(s.props=b,s.state=s.__s,s.__d=!1,s.__v=n,n.__e=t.__e,n.__k=t.__k,f=0;f<n.__k.length;f++)n.__k[f]&&(n.__k[f].__p=n);break e}null!=s.componentWillUpdate&&s.componentWillUpdate(b,s.__s,x),null!=s.componentDidUpdate&&s.__h.push((function(){s.componentDidUpdate(d,y,m)}))}s.context=x,s.props=b,s.state=s.__s,(f=o.__r)&&f(n),s.__d=!1,s.__v=n,s.__P=e,f=s.render(s.props,s.state,s.context),n.__k=S(null!=f&&f.type==h&&null==f.key?f.props.children:f),null!=s.getChildContext&&(r=a(a({},r),s.getChildContext())),p||null==s.getSnapshotBeforeUpdate||(m=s.getSnapshotBeforeUpdate(d,y)),k(e,n,t,r,l,u,_,i,c),s.base=n.__e,s.__h.length&&_.push(s),g&&(s.__E=s.__p=null),s.__e=null}else n.__e=T(t.__e,n,t,r,l,u,_,c);(f=o.diffed)&&f(n)}catch(e){o.__e(e,n,t)}return n.__e}function H(e,n){o.__c&&o.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){o.__e(e,n.__v)}}))}function T(e,n,t,o,r,l,u,_){var f,a,s,p,d,h=t.props,v=n.props;if(r="svg"===n.type||r,null==e&&null!=l)for(f=0;f<l.length;f++)if(null!=(a=l[f])&&(null===n.type?3===a.nodeType:a.localName===n.type)){e=a,l[f]=null;break}if(null==e){if(null===n.type)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type),l=null}if(null===n.type)null!=l&&(l[l.indexOf(e)]=null),h!==v&&(e.data=v);else if(n!==t){if(null!=l&&(l=c.slice.call(e.childNodes)),s=(h=t.props||i).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!_){if(h===i)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||s)&&(p&&s&&p.__html==s.__html||(e.innerHTML=p&&p.__html||""))}(function(e,n,t,o,r){var l;for(l in t)l in n||x(e,l,null,t[l],o);for(l in n)r&&"function"!=typeof n[l]||"value"===l||"checked"===l||t[l]===n[l]||x(e,l,n[l],t[l],o)})(e,v,h,r,_),n.__k=n.props.children,p||k(e,n,t,o,"foreignObject"!==n.type&&r,l,u,i,_),_||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))}return e}function A(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){o.__e(e,t)}}function C(e,n,t){var r,l,u;if(o.unmount&&o.unmount(e),(r=e.ref)&&A(r,null,n),t||"function"==typeof e.type||(t=null!=(l=e.__e)),e.__e=e.__d=null,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){o.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(u=0;u<r.length;u++)r[u]&&C(r[u],n,t);null!=l&&s(l)}function N(e,n,t){return this.constructor(e,t)}function j(e,n,t){var r,l,u;o.__p&&o.__p(e,n),l=(r=t===_)?null:t&&t.__k||n.__k,e=p(h,null,[e]),u=[],E(n,(r?n:t||n).__k=e,l||i,i,void 0!==n.ownerSVGElement,t&&!r?[t]:l?null:c.slice.call(n.childNodes),u,t||i,r),H(u,e)}o={},v.prototype.setState=function(e,n){var t=this.__s!==this.state&&this.__s||(this.__s=a({},this.state));("function"!=typeof e||(e=e(t,this.props)))&&a(t,e),null!=e&&this.__v&&(this.__e=!1,n&&this.__h.push(n),g(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},v.prototype.render=h,r=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=o.debounceRendering,o.__e=function(e,n,t){for(var o;n=n.__p;)if((o=n.__c)&&!o.__p)try{if(o.constructor&&null!=o.constructor.getDerivedStateFromError)o.setState(o.constructor.getDerivedStateFromError(e));else{if(null==o.componentDidCatch)continue;o.componentDidCatch(e)}return g(o.__E=o)}catch(n){e=n}throw e},_=i;var D,M,O=[],F=o.__r;o.__r=function(e){F&&F(e),D=0,(M=e.__c).__H&&(M.__H.t.forEach(V),M.__H.t.forEach($),M.__H.t=[])};var U=o.diffed;o.diffed=function(e){U&&U(e);var n=e.__c;if(n){var t=n.__H;t&&t.t.length&&q(O.push(n))}};var L=o.__c;o.__c=function(e,n){n.some((function(e){e.__h.forEach(V),e.__h=e.__h.filter((function(e){return!e.u||$(e)}))})),L&&L(e,n)};var W=o.unmount;function R(e){o.__h&&o.__h(M);var n=M.__H||(M.__H={i:[],t:[]});return e>=n.i.length&&n.i.push({}),n.i[e]}function I(e){return function(e,n,t){var o=R(D++);return o.__c||(o.__c=M,o.u=[t?t(n):J(void 0,n),function(n){var t=e(o.u[0],n);o.u[0]!==t&&(o.u[0]=t,o.__c.setState({}))}]),o.u}(J,e)}o.unmount=function(e){W&&W(e);var n=e.__c;if(n){var t=n.__H;t&&t.i.forEach((function(e){return e.m&&e.m()}))}};var q=function(){};function B(){O.some((function(e){e.__P&&(e.__H.t.forEach(V),e.__H.t.forEach($),e.__H.t=[])})),O=[]}if("undefined"!=typeof window){var G=o.requestAnimationFrame;q=function(e){1!==e&&G===o.requestAnimationFrame||((G=o.requestAnimationFrame)||function(e){var n=function(){clearTimeout(t),cancelAnimationFrame(o),setTimeout(e)},t=setTimeout(n,100),o=requestAnimationFrame(n)})(B)}}function V(e){e.m&&e.m()}function $(e){var n=e.u();"function"==typeof n&&(e.m=n)}function z(e,n){return!e||n.some((function(n,t){return n!==e[t]}))}function J(e,n){return"function"==typeof n?n(e):n}function K(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],o=!0,r=!1,l=void 0;try{for(var u,_=e[Symbol.iterator]();!(o=(u=_.next()).done)&&(t.push(u.value),!n||t.length!==n);o=!0);}catch(e){r=!0,l=e}finally{try{o||null==_.return||_.return()}finally{if(r)throw l}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Q=function(){var e=K(I(),2),n=e[0],t=e[1];return function(e,n){var t=R(D++);z(t.o,n)&&(t.u=e,t.o=n,M.__H.t.push(t))}((function(){n||fetch("/data").then((function(e){return e.json()})).then((function(e){console.log(e),t(e)}))}),[]),p("div",{class:"navbar"},"Navigation",n&&p("p",null,n.name))},X=function(){return p("div",{class:"app",id:"app"},p(Q,null),"dssdds")};j(p(X,null),document.body,document.getElementById("app"))}]);