var Mint=function(){"use strict";var t,e,n,r,o,i,a={},s=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(t,e){for(var n in e)t[n]=e[n];return t}function l(t){var e=t.parentNode;e&&e.removeChild(t)}function h(t,e,n){var r,o=arguments,i={};for(r in e)"key"!==r&&"ref"!==r&&(i[r]=e[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===i[r]&&(i[r]=t.defaultProps[r]);return f(t,i,e&&e.key,e&&e.ref,null)}function f(e,n,r,o,i){var a={type:e,props:n,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i};return null==i&&(a.__v=a),t.vnode&&t.vnode(a),a}function d(t){return t.children}function p(t,e){this.props=t,this.context=e}function m(t,e){if(null==e)return t.__?m(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?m(t):null}function y(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return y(t)}}function _(i){(!i.__d&&(i.__d=!0)&&e.push(i)&&!n++||o!==t.debounceRendering)&&((o=t.debounceRendering)||r)(g)}function g(){for(var t;n=e.length;)t=e.sort((function(t,e){return t.__v.__b-e.__v.__b})),e=[],t.some((function(t){var e,n,r,o,i,a,s;t.__d&&(a=(i=(e=t).__v).__e,(s=e.__P)&&(n=[],(r=c({},i)).__v=r,o=S(s,i,r,e.__n,void 0!==s.ownerSVGElement,null,n,null==a?m(i):a),T(n,i),o!=a&&y(i)))}))}function v(t,e,n,r,o,i,u,c,h,p){var y,_,g,v,w,b,k,x,T,E=r&&r.__k||s,D=E.length;for(h==a&&(h=null!=u?u[0]:D?m(r,0):null),n.__k=[],y=0;y<e.length;y++)if(null!=(v=n.__k[y]=null==(v=e[y])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v?f(null,v,null,null,v):Array.isArray(v)?f(d,{children:v},null,null,null):null!=v.__e||null!=v.__c?f(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(g=E[y])||g&&v.key==g.key&&v.type===g.type)E[y]=void 0;else for(_=0;_<D;_++){if((g=E[_])&&v.key==g.key&&v.type===g.type){E[_]=void 0;break}g=null}if(w=S(t,v,g=g||a,o,i,u,c,h,p),(_=v.ref)&&g.ref!=_&&(x||(x=[]),g.ref&&x.push(g.ref,null,v),x.push(_,v.__c||w,v)),null!=w){if(null==k&&(k=w),T=void 0,void 0!==v.__d)T=v.__d,v.__d=void 0;else if(u==g||w!=h||null==w.parentNode){t:if(null==h||h.parentNode!==t)t.appendChild(w),T=null;else{for(b=h,_=0;(b=b.nextSibling)&&_<D;_+=2)if(b==w)break t;t.insertBefore(w,h),T=h}"option"==n.type&&(t.value="")}h=void 0!==T?T:w.nextSibling,"function"==typeof n.type&&(n.__d=h)}else h&&g.__e==h&&h.parentNode!=t&&(h=m(g))}if(n.__e=k,null!=u&&"function"!=typeof n.type)for(y=u.length;y--;)null!=u[y]&&l(u[y]);for(y=D;y--;)null!=E[y]&&P(E[y],E[y]);if(x)for(y=0;y<x.length;y++)C(x[y],x[++y],x[++y])}function w(t){return null==t||"boolean"==typeof t?[]:Array.isArray(t)?s.concat.apply([],t.map(w)):[t]}function b(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===u.test(e)?n+"px":null==n?"":n}function k(t,e,n,r,o){var i,a,s,u,c;if(o?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(i=t.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(u in r)n&&u in n||b(i,u,"");if(n)for(c in n)r&&n[c]===r[c]||b(i,c,n[c])}else"o"===e[0]&&"n"===e[1]?(a=e!==(e=e.replace(/Capture$/,"")),s=e.toLowerCase(),e=(s in t?s:e).slice(2),n?(r||t.addEventListener(e,x,a),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,x,a)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function x(e){this.l[e.type](t.event?t.event(e):e)}function S(e,n,r,o,i,u,l,h,f){var m,y,_,g,w,b,x,S,T,C,P,D=n.type;if(void 0!==n.constructor)return null;(m=t.__b)&&m(n);try{t:if("function"==typeof D){if(S=n.props,T=(m=D.contextType)&&o[m.__c],C=m?T?T.props.value:m.__:o,r.__c?x=(y=n.__c=r.__c).__=y.__E:("prototype"in D&&D.prototype.render?n.__c=y=new D(S,C):(n.__c=y=new p(S,C),y.constructor=D,y.render=E),T&&T.sub(y),y.props=S,y.state||(y.state={}),y.context=C,y.__n=o,_=y.__d=!0,y.__h=[]),null==y.__s&&(y.__s=y.state),null!=D.getDerivedStateFromProps&&(y.__s==y.state&&(y.__s=c({},y.__s)),c(y.__s,D.getDerivedStateFromProps(S,y.__s))),g=y.props,w=y.state,_)null==D.getDerivedStateFromProps&&null!=y.componentWillMount&&y.componentWillMount(),null!=y.componentDidMount&&y.__h.push(y.componentDidMount);else{if(null==D.getDerivedStateFromProps&&S!==g&&null!=y.componentWillReceiveProps&&y.componentWillReceiveProps(S,C),!y.__e&&null!=y.shouldComponentUpdate&&!1===y.shouldComponentUpdate(S,y.__s,C)||n.__v===r.__v){for(y.props=S,y.state=y.__s,n.__v!==r.__v&&(y.__d=!1),y.__v=n,n.__e=r.__e,n.__k=r.__k,y.__h.length&&l.push(y),m=0;m<n.__k.length;m++)n.__k[m]&&(n.__k[m].__=n);break t}null!=y.componentWillUpdate&&y.componentWillUpdate(S,y.__s,C),null!=y.componentDidUpdate&&y.__h.push((function(){y.componentDidUpdate(g,w,b)}))}y.context=C,y.props=S,y.state=y.__s,(m=t.__r)&&m(n),y.__d=!1,y.__v=n,y.__P=e,m=y.render(y.props,y.state,y.context),null!=y.getChildContext&&(o=c(c({},o),y.getChildContext())),_||null==y.getSnapshotBeforeUpdate||(b=y.getSnapshotBeforeUpdate(g,w)),P=null!=m&&m.type==d&&null==m.key?m.props.children:m,v(e,Array.isArray(P)?P:[P],n,r,o,i,u,l,h,f),y.base=n.__e,y.__h.length&&l.push(y),x&&(y.__E=y.__=null),y.__e=!1}else null==u&&n.__v===r.__v?(n.__k=r.__k,n.__e=r.__e):n.__e=function(t,e,n,r,o,i,u,c){var l,h,f,d,p,m=n.props,y=e.props;if(o="svg"===e.type||o,null!=i)for(l=0;l<i.length;l++)if(null!=(h=i[l])&&((null===e.type?3===h.nodeType:h.localName===e.type)||t==h)){t=h,i[l]=null;break}if(null==t){if(null===e.type)return document.createTextNode(y);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,y.is&&{is:y.is}),i=null,c=!1}if(null===e.type)m!==y&&t.data!=y&&(t.data=y);else{if(null!=i&&(i=s.slice.call(t.childNodes)),f=(m=n.props||a).dangerouslySetInnerHTML,d=y.dangerouslySetInnerHTML,!c){if(null!=i)for(m={},p=0;p<t.attributes.length;p++)m[t.attributes[p].name]=t.attributes[p].value;(d||f)&&(d&&f&&d.__html==f.__html||(t.innerHTML=d&&d.__html||""))}(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||k(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||k(t,i,e[i],n[i],r)})(t,y,m,o,c),d?e.__k=[]:(l=e.props.children,v(t,Array.isArray(l)?l:[l],e,n,r,"foreignObject"!==e.type&&o,i,u,a,c)),c||("value"in y&&void 0!==(l=y.value)&&l!==t.value&&k(t,"value",l,m.value,!1),"checked"in y&&void 0!==(l=y.checked)&&l!==t.checked&&k(t,"checked",l,m.checked,!1))}return t}(r.__e,n,r,o,i,u,l,f);(m=t.diffed)&&m(n)}catch(e){n.__v=null,t.__e(e,n,r)}return n.__e}function T(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(t){t.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function C(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function P(e,n,r){var o,i,a;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||C(o,null,n)),r||"function"==typeof e.type||(r=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(a=0;a<o.length;a++)o[a]&&P(o[a],n,r);null!=i&&l(i)}function E(t,e,n){return this.constructor(t,n)}function D(e,n,r){var o,u,c;t.__&&t.__(e,n),u=(o=r===i)?null:r&&r.__k||n.__k,e=h(d,null,[e]),c=[],S(n,(o?n:r||n).__k=e,u||a,a,void 0!==n.ownerSVGElement,r&&!o?[r]:u?null:n.childNodes.length?s.slice.call(n.childNodes):null,c,r||a,o),T(c,e)}t={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return _(n.__E=n)}catch(e){t=e}throw t}},p.prototype.setState=function(t,e){var n;n=this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&c(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),_(this))},p.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),_(this))},p.prototype.render=d,e=[],n=0,r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=a;var M,A=[],O=t.__r,N=t.diffed,U=t.__c,j=t.unmount;function W(){A.some((function(e){if(e.__P)try{e.__H.__h.forEach(L),e.__H.__h.forEach(R),e.__H.__h=[]}catch(n){return e.__H.__h=[],t.__e(n,e.__v),!0}})),A=[]}function L(t){"function"==typeof t.u&&t.u()}function R(t){t.u=t.__()}function Y(t,e){for(var n in t)if("__source"!==n&&!(n in e))return!0;for(var r in e)if("__source"!==r&&t[r]!==e[r])return!0;return!1}t.__r=function(t){O&&O(t);var e=t.__c.__H;e&&(e.__h.forEach(L),e.__h.forEach(R),e.__h=[])},t.diffed=function(e){N&&N(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==A.push(n)&&M===t.requestAnimationFrame||((M=t.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);"undefined"!=typeof window&&(e=requestAnimationFrame(n))})(W))},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(L),e.__h=e.__h.filter((function(t){return!t.__||R(t)}))}catch(r){n.some((function(t){t.__h&&(t.__h=[])})),n=[],t.__e(r,e.__v)}})),U&&U(e,n)},t.unmount=function(e){j&&j(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(L)}catch(e){t.__e(e,n.__v)}},function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).isPureReactComponent=!0,n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.shouldComponentUpdate=function(t,e){return Y(this.props,t)||Y(this.state,e)}}(p);var F=t.__b;t.__b=function(t){t.type&&t.type.t&&t.ref&&(t.props.ref=t.ref,t.ref=null),F&&F(t)};var I=t.__e;function H(t){return t&&((t=function(t,e){for(var n in e)t[n]=e[n];return t}({},t)).__c=null,t.__k=t.__k&&t.__k.map(H)),t}function q(){this.__u=0,this.o=null,this.__b=null}function $(t){var e=t.__.__c;return e&&e.u&&e.u(t)}function z(){this.i=null,this.l=null}t.__e=function(t,e,n){if(t.then)for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return r.__c(t,e.__c);I(t,e,n)},(q.prototype=new p).__c=function(t,e){var n=this;null==n.o&&(n.o=[]),n.o.push(e);var r=$(n.__v),o=!1,i=function(){o||(o=!0,r?r(a):a())};e.__c=e.componentWillUnmount,e.componentWillUnmount=function(){i(),e.__c&&e.__c()};var a=function(){var t;if(!--n.__u)for(n.__v.__k[0]=n.state.u,n.setState({u:n.__b=null});t=n.o.pop();)t.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),t.then(i,i)},q.prototype.render=function(t,e){return this.__b&&(this.__v.__k[0]=H(this.__b),this.__b=null),[h(p,null,e.u?null:t.children),e.u&&t.fallback]};var B=function(t,e,n){if(++n[1]===n[0]&&t.l.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.l.size))for(n=t.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.i=n=n[2]}};(z.prototype=new p).u=function(t){var e=this,n=$(e.__v),r=e.l.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),B(e,t,r)):o()};n?n(i):i()}},z.prototype.render=function(t){this.i=null,this.l=new Map;var e=w(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var n=e.length;n--;)this.l.set(e[n],this.i=[1,0,this.i]);return t.children},z.prototype.componentDidUpdate=z.prototype.componentDidMount=function(){var t=this;t.l.forEach((function(e,n){B(t,n,e)}))};var X=function(){function t(){}var e=t.prototype;return e.getChildContext=function(){return this.props.context},e.render=function(t){return t.children},t}();function G(t){var e=this,n=t.container,r=h(X,{context:e.context},t.vnode);return e.s&&e.s!==n&&(e.v.parentNode&&e.s.removeChild(e.v),P(e.h),e.p=!1),t.vnode?e.p?(n.__k=e.__k,D(r,n),e.__k=n.__k):(e.v=document.createTextNode(""),D("",n,i),n.appendChild(e.v),e.p=!0,e.s=n,D(r,n,e.v),e.__k=e.v.__k):e.p&&(e.v.parentNode&&e.s.removeChild(e.v),P(e.h)),e.h=r,e.componentWillUnmount=function(){e.v.parentNode&&e.s.removeChild(e.v),P(e.h)},null}function Q(t,e){return h(G,{vnode:t,container:e})}var J=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;p.prototype.isReactComponent={};var V="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,K=t.event;function Z(t,e){t["UNSAFE_"+e]&&!t[e]&&Object.defineProperty(t,e,{configurable:!1,get:function(){return this["UNSAFE_"+e]},set:function(t){this["UNSAFE_"+e]=t}})}t.event=function(t){K&&(t=K(t)),t.persist=function(){};var e=!1,n=!1,r=t.stopPropagation;t.stopPropagation=function(){r.call(t),e=!0};var o=t.preventDefault;return t.preventDefault=function(){o.call(t),n=!0},t.isPropagationStopped=function(){return e},t.isDefaultPrevented=function(){return n},t.nativeEvent=t};var tt={configurable:!0,get:function(){return this.class}},et=t.vnode;t.vnode=function(t){t.$$typeof=V;var e=t.type,n=t.props;if(e){if(n.class!=n.className&&(tt.enumerable="className"in n,null!=n.className&&(n.class=n.className),Object.defineProperty(n,"className",tt)),"function"!=typeof e){var r,o,i;for(i in n.defaultValue&&void 0!==n.value&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&"select"===e&&(w(n.children).forEach((function(t){-1!=n.value.indexOf(t.props.value)&&(t.props.selected=!0)})),delete n.value),n)if(r=J.test(i))break;if(r)for(i in o=t.props={},n)o[J.test(i)?i.replace(/[A-Z0-9]/,"-$&").toLowerCase():i]=n[i]}!function(e){var n=t.type,r=t.props;if(r&&"string"==typeof n){var o={};for(var i in r)/^on(Ani|Tra|Tou)/.test(i)&&(r[i.toLowerCase()]=r[i],delete r[i]),o[i.toLowerCase()]=i;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===n||"input"===n.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var a=o.oninput||"oninput";r[a]||(r[a]=r[o.onchange],delete r[o.onchange])}}}(),"function"==typeof e&&!e.m&&e.prototype&&(Z(e.prototype,"componentWillMount"),Z(e.prototype,"componentWillReceiveProps"),Z(e.prototype,"componentWillUpdate"),e.m=!0)}et&&et(t)};class nt extends HTMLElement{constructor(){super(),this.props={};for(const{original:t,name:e}of this.constructor.props)Object.defineProperty(this,t,{get(){return this.props[e]},set(t){this.props[e]=t,this._render()}})}connectedCallback(){this._render()}attributeChangedCallback(t,e,n){for(const{original:e,name:r}of this.constructor.props)e===t&&(this.props[r]=n,this._render())}disconnectedCallback(){D(null,this)}_render(){this.isConnected&&D(h(this.constructor.component,this.props),this)}}function rt(t,e,n){const r=class extends nt{};r.observedAttributes=n.map((t=>t.original)),r.component=t,r.props=n,customElements.define(e,r)}function ot(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function it(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function at(t){it(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function st(t,e){it(2,arguments);var n=at(t),r=ot(e);if(isNaN(r))return new Date(NaN);if(!r)return n;var o=n.getDate(),i=new Date(n.getTime());i.setMonth(n.getMonth()+r+1,0);var a=i.getDate();return o>=a?i:(n.setFullYear(i.getFullYear(),i.getMonth(),o),n)}function ut(t,e){it(2,arguments);var n=at(t).getTime(),r=ot(e);return new Date(n+r)}function ct(t,e){it(1,arguments);var n=e||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,i=null==o?0:ot(o),a=null==n.weekStartsOn?i:ot(n.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=at(t),u=s.getDay(),c=(u<a?7:0)+u-a;return s.setDate(s.getDate()-c),s.setHours(0,0,0,0),s}function lt(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function ht(t){it(1,arguments);var e=at(t);return e.setHours(0,0,0,0),e}function ft(t,e){it(2,arguments);var n=at(t),r=at(e),o=n.getTime()-r.getTime();return o<0?-1:o>0?1:o}function dt(t){return it(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function pt(t){if(it(1,arguments),!dt(t)&&"number"!=typeof t)return!1;var e=at(t);return!isNaN(Number(e))}function mt(t){it(1,arguments);var e=at(t);return e.setHours(23,59,59,999),e}function yt(t){it(1,arguments);var e=at(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function _t(t,e){it(1,arguments);var n=t||{},r=at(n.start),o=at(n.end),i=o.getTime();if(!(r.getTime()<=i))throw new RangeError("Invalid interval");var a=[],s=r;s.setHours(0,0,0,0);var u=e&&"step"in e?Number(e.step):1;if(u<1||isNaN(u))throw new RangeError("`options.step` must be a number greater than 1");for(;s.getTime()<=i;)a.push(at(s)),s.setDate(s.getDate()+u),s.setHours(0,0,0,0);return a}function gt(t){it(1,arguments);var e=at(t);return e.setDate(1),e.setHours(0,0,0,0),e}function vt(t,e){it(1,arguments);var n=e||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,i=null==o?0:ot(o),a=null==n.weekStartsOn?i:ot(n.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=at(t),u=s.getDay(),c=6+(u<a?-7:0)-(u-a);return s.setDate(s.getDate()+c),s.setHours(23,59,59,999),s}var wt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function bt(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var kt={date:bt({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:bt({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:bt({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},xt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function St(t){return function(e,n){var r,o=n||{};if("formatting"===(o.context?String(o.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,a=o.width?String(o.width):i;r=t.formattingValues[a]||t.formattingValues[i]}else{var s=t.defaultWidth,u=o.width?String(o.width):t.defaultWidth;r=t.values[u]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}var Tt={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:St({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:St({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:St({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:St({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:St({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},Ct=Tt;function Pt(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(o);if(!i)return null;var a,s=i[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?Dt(u,(function(t){return t.test(s)})):Et(u,(function(t){return t.test(s)}));a=t.valueCallback?t.valueCallback(c):c,a=n.valueCallback?n.valueCallback(a):a;var l=e.slice(s.length);return{value:a,rest:l}}}function Et(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function Dt(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var Mt,At={ordinalNumber:(Mt={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(Mt.matchPattern);if(!n)return null;var r=n[0],o=t.match(Mt.parsePattern);if(!o)return null;var i=Mt.valueCallback?Mt.valueCallback(o[0]):o[0];i=e.valueCallback?e.valueCallback(i):i;var a=t.slice(r.length);return{value:i,rest:a}}),era:Pt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Pt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Pt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Pt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Pt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},Ot={code:"en-US",formatDistance:function(t,e,n){var r,o=wt[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:kt,formatRelative:function(t,e,n,r){return xt[t]},localize:Ct,match:At,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Nt(t,e){it(2,arguments);var n=ot(e);return ut(t,-n)}function Ut(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var jt=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return Ut("yy"===e?r%100:r,e.length)},Wt=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):Ut(n+1,2)},Lt=function(t,e){return Ut(t.getUTCDate(),e.length)},Rt=function(t,e){return Ut(t.getUTCHours()%12||12,e.length)},Yt=function(t,e){return Ut(t.getUTCHours(),e.length)},Ft=function(t,e){return Ut(t.getUTCMinutes(),e.length)},It=function(t,e){return Ut(t.getUTCSeconds(),e.length)},Ht=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return Ut(Math.floor(r*Math.pow(10,n-3)),e.length)},qt=864e5;function $t(t){it(1,arguments);var e=1,n=at(t),r=n.getUTCDay(),o=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function zt(t){it(1,arguments);var e=at(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var o=$t(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var a=$t(i);return e.getTime()>=o.getTime()?n+1:e.getTime()>=a.getTime()?n:n-1}function Bt(t){it(1,arguments);var e=zt(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=$t(n);return r}var Xt=6048e5;function Gt(t,e){it(1,arguments);var n=e||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,i=null==o?0:ot(o),a=null==n.weekStartsOn?i:ot(n.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=at(t),u=s.getUTCDay(),c=(u<a?7:0)+u-a;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s}function Qt(t,e){it(1,arguments);var n=at(t),r=n.getUTCFullYear(),o=e||{},i=o.locale,a=i&&i.options&&i.options.firstWeekContainsDate,s=null==a?1:ot(a),u=null==o.firstWeekContainsDate?s:ot(o.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,u),c.setUTCHours(0,0,0,0);var l=Gt(c,e),h=new Date(0);h.setUTCFullYear(r,0,u),h.setUTCHours(0,0,0,0);var f=Gt(h,e);return n.getTime()>=l.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function Jt(t,e){it(1,arguments);var n=e||{},r=n.locale,o=r&&r.options&&r.options.firstWeekContainsDate,i=null==o?1:ot(o),a=null==n.firstWeekContainsDate?i:ot(n.firstWeekContainsDate),s=Qt(t,e),u=new Date(0);u.setUTCFullYear(s,0,a),u.setUTCHours(0,0,0,0);var c=Gt(u,e);return c}var Vt=6048e5,Kt={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return jt(t,e)},Y:function(t,e,n,r){var o=Qt(t,r),i=o>0?o:1-o;return"YY"===e?Ut(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):Ut(i,e.length)},R:function(t,e){return Ut(zt(t),e.length)},u:function(t,e){return Ut(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Ut(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Ut(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return Wt(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return Ut(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var o=function(t,e){it(1,arguments);var n=at(t),r=Gt(n,e).getTime()-Jt(n,e).getTime();return Math.round(r/Vt)+1}(t,r);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):Ut(o,e.length)},I:function(t,e,n){var r=function(t){it(1,arguments);var e=at(t),n=$t(e).getTime()-Bt(e).getTime();return Math.round(n/Xt)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Ut(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):Lt(t,e)},D:function(t,e,n){var r=function(t){it(1,arguments);var e=at(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),o=n-r;return Math.floor(o/qt)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Ut(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var o=t.getUTCDay(),i=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return Ut(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var o=t.getUTCDay(),i=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return Ut(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return Ut(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,o=t.getUTCHours();switch(r=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,o=t.getUTCHours();switch(r=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Rt(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Yt(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Ut(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Ut(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Ft(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):It(t,e)},S:function(t,e){return Ht(t,e)},X:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();if(0===o)return"Z";switch(e){case"X":return te(o);case"XXXX":case"XX":return ee(o);default:return ee(o,":")}},x:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return te(o);case"xxxx":case"xx":return ee(o);default:return ee(o,":")}},O:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Zt(o,":");default:return"GMT"+ee(o,":")}},z:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Zt(o,":");default:return"GMT"+ee(o,":")}},t:function(t,e,n,r){var o=r._originalDate||t;return Ut(Math.floor(o.getTime()/1e3),e.length)},T:function(t,e,n,r){return Ut((r._originalDate||t).getTime(),e.length)}};function Zt(t,e){var n=t>0?"-":"+",r=Math.abs(t),o=Math.floor(r/60),i=r%60;return 0===i?n+String(o):n+String(o)+e+Ut(i,2)}function te(t,e){return t%60==0?(t>0?"-":"+")+Ut(Math.abs(t)/60,2):ee(t,e)}function ee(t,e){var n=e||"",r=t>0?"-":"+",o=Math.abs(t);return r+Ut(Math.floor(o/60),2)+n+Ut(o%60,2)}var ne=Kt;function re(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function oe(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var ie={p:oe,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],o=r[1],i=r[2];if(!i)return re(t,e);switch(o){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",re(o,e)).replace("{{time}}",oe(i,e))}},ae=["D","DD"],se=["YY","YYYY"];function ue(t){return-1!==ae.indexOf(t)}function ce(t){return-1!==se.indexOf(t)}function le(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var he=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,fe=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,de=/^'([^]*?)'?$/,pe=/''/g,me=/[a-zA-Z]/;function ye(t,e,n){it(2,arguments);var r=String(e),o=n||{},i=o.locale||Ot,a=i.options&&i.options.firstWeekContainsDate,s=null==a?1:ot(a),u=null==o.firstWeekContainsDate?s:ot(o.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,l=null==c?0:ot(c),h=null==o.weekStartsOn?l:ot(o.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var f=at(t);if(!pt(f))throw new RangeError("Invalid time value");var d=lt(f),p=Nt(f,d),m={firstWeekContainsDate:u,weekStartsOn:h,locale:i,_originalDate:f},y=r.match(fe).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,ie[e])(t,i.formatLong,m):t})).join("").match(he).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return _e(n);var a=ne[r];if(a)return!o.useAdditionalWeekYearTokens&&ce(n)&&le(n,e,t),!o.useAdditionalDayOfYearTokens&&ue(n)&&le(n,e,t),a(p,n,i.localize,m);if(r.match(me))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return y}function _e(t){return t.match(de)[1].replace(pe,"'")}function ge(t){return function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e=e||{})Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}({},t)}var ve=6e4,we=1440,be=43200,ke=525600;function xe(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};it(2,arguments);var r=n.locale||Ot;if(!r.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var o=ft(t,e);if(isNaN(o))throw new RangeError("Invalid time value");var i,a,s=ge(n);s.addSuffix=Boolean(n.addSuffix),s.comparison=o,o>0?(i=at(e),a=at(t)):(i=at(t),a=at(e));var u,c=null==n.roundingMethod?"round":String(n.roundingMethod);if("floor"===c)u=Math.floor;else if("ceil"===c)u=Math.ceil;else{if("round"!==c)throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");u=Math.round}var l,h=a.getTime()-i.getTime(),f=h/ve,d=lt(a)-lt(i),p=(h-d)/ve;if("second"===(l=null==n.unit?f<1?"second":f<60?"minute":f<we?"hour":p<be?"day":p<ke?"month":"year":String(n.unit))){var m=u(h/1e3);return r.formatDistance("xSeconds",m,s)}if("minute"===l){var y=u(f);return r.formatDistance("xMinutes",y,s)}if("hour"===l){var _=u(f/60);return r.formatDistance("xHours",_,s)}if("day"===l){var g=u(p/we);return r.formatDistance("xDays",g,s)}if("month"===l){var v=u(p/be);return 12===v&&"month"!==n.unit?r.formatDistance("xYears",1,s):r.formatDistance("xMonths",v,s)}if("year"===l){var w=u(p/ke);return r.formatDistance("xYears",w,s)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}const Se=Symbol("Mint.Equals"),Te=Symbol.for("react.element"),Ce=(t,e)=>void 0===t&&void 0===e||null===t&&null===e||(null!=t&&null!=t&&t[Se]?t[Se](e):null!=e&&null!=e&&e[Se]?e[Se](t):(t&&t.$$typeof===Te||e&&e.$$typeof===Te||console.warn("Comparing entites with === because there is no comparison function defined:",t,e),t===e));class Record{constructor(t){for(let e in t)this[e]=t[e]}[Se](t){if(!(t instanceof Record))return!1;if(Object.keys(this).length!==Object.keys(t).length)return!1;for(let e in this)if(!Ce(t[e],this[e]))return!1;return!0}}const Pe=(t,e)=>n=>{const r=class extends Record{};return r.mappings=n,r.encode=t=>{const e={};for(let r in n){const[o,i,a]=n[r];e[o]=a?a(t[r]):t[r]}return e},r.decode=o=>{const{ok:i,err:a}=e,s={};for(let e in n){const[r,i]=n[e],u=t.field(r,i)(o);if(u instanceof a)return u;s[e]=u._0}return new i(new r(s))},r},Ee=(t,e)=>{const n=Object.assign(Object.create(null),t,e);return t instanceof Record?new t.constructor(n):new Record(n)},De=(t,e=!0)=>{window.location.pathname+window.location.search+window.location.hash!==t&&(e?(window.history.pushState({},"",t),dispatchEvent(new PopStateEvent("popstate"))):window.history.replaceState({},"",t))},Me=t=>{let e=document.createElement("style");document.head.appendChild(e),e.innerHTML=t},Ae=t=>(e,n)=>{const{just:r,nothing:o}=t;return e.length>=n+1&&n>=0?new r(e[n]):new o};class Oe{constructor(){this.effectAllowed="none",this.dropEffect="none",this.files=[],this.types=[],this.cache={}}getData(t){return this.cache[t]||""}setData(t,e){return this.cache[t]=e,null}clearData(){return this.cache={},null}}const Ne=t=>new Proxy(t,{get:function(t,e){if(e in t){const n=t[e];return n instanceof Function?()=>t[e]():n}switch(e){case"clipboardData":return t.clipboardData=new Oe;case"dataTransfer":return t.dataTransfer=new Oe;case"data":case"key":case"locale":case"animationName":case"pseudoElement":case"propertyName":return"";case"altKey":case"ctrlKey":case"metaKey":case"repeat":case"shiftKey":return!1;case"charCode":case"keyCode":case"location":case"which":case"button":case"buttons":case"clientX":case"clientY":case"pageX":case"pageY":case"screenX":case"screenY":case"detail":case"deltaMode":case"deltaX":case"deltaY":case"deltaZ":case"elapsedTime":return-1;default:return}}}),Ue=(t,e)=>{const n=Object.getOwnPropertyDescriptors(Reflect.getPrototypeOf(t));for(let r in n){if(e&&e[r])continue;const o=n[r].value;"function"==typeof o&&(t[r]=o.bind(t))}},je=(t,e)=>{if(!e)return;const n={};Object.keys(e).forEach((t=>{let r=null;n[t]={get:()=>(r||(r=e[t]()),r)}})),Object.defineProperties(t,n)},We=function(){let t=Array.from(arguments);return Array.isArray(t[0])&&1===t.length?t[0]:t},Le=function(t){const e={},n=(t,n)=>{e[t.toString().trim()]=n.toString().trim()};for(let e of t)if("string"==typeof e)e.split(";").forEach((t=>{const[e,r]=t.split(":");e&&r&&n(e,r)}));else if(e instanceof Map)for(let[t,r]of e)n(t,r);else if(e instanceof Array)for(let[t,r]of e)n(t,r);else for(let t in e)n(t,e[t]);return e};class Re extends p{render(){const t=[];for(let e in this.props.globals)t.push(h(this.props.globals[e],{ref:t=>t._persist(),key:e}));return h("div",{},[...t,...this.props.children])}}Re.displayName="Mint.Root";class Ye{constructor(t){t&&t instanceof Node&&t!==document.body?this.root=t:(this.root=document.createElement("div"),document.body.appendChild(this.root))}render(t,e){void 0!==t&&D(h(Re,{globals:e},[h(t,{key:"$MAIN"})]),this.root)}}class Fe{constructor(t,e){this.teardown=e,this.subject=t,this.steps=[]}async run(){let t;try{t=await new Promise(this.next.bind(this))}finally{this.teardown&&this.teardown()}return t}async next(t,e){requestAnimationFrame((async()=>{let n=this.steps.shift();if(n)try{this.subject=await n(this.subject)}catch(t){return e(t)}this.steps.length?this.next(t,e):t(this.subject)}))}step(t){return this.steps.push(t),this}}const Ie=["componentWillMount","render","getSnapshotBeforeUpdate","componentDidMount","componentWillReceiveProps","shouldComponentUpdate","componentWillUpdate","componentDidUpdate","componentWillUnmount","componentDidCatch","setState","forceUpdate","constructor"];class He extends p{constructor(t){super(t),Ue(this,Ie)}_d(t,e){je(this,e);const n={};Object.keys(t).forEach((e=>{const[r,o]=t[e],i=r||e;n[e]={get:()=>i in this.props?this.props[i]:o}})),Object.defineProperties(this,n)}}class qe{constructor(){Ue(this),this.subscriptions=new Map,this.state={}}setState(t,e){this.state=Object.assign({},this.state,t),e()}_d(t){je(this,t)}_subscribe(t,e){const n=this.subscriptions.get(t);null==e||null!=n&&((t,e)=>{if(t instanceof Object&&e instanceof Object){const n=new Set(Object.keys(t).concat(Object.keys(e)));for(let r of n)if(!Ce(t[r],e[r]))return!1;return!0}return console.warn("Comparing entites with === because there is no comparison function defined:",t,e),t===e})(n,e)||(this.subscriptions.set(t,e),this._update())}_unsubscribe(t){this.subscriptions.has(t)&&(this.subscriptions.delete(t),this._update())}_update(){this.update()}get _subscriptions(){return Array.from(this.subscriptions.values())}update(){}}var $e,ze,Be=($e=function(t,e){var n=function(){var t=function(t,e,n,r){for(n=n||{},r=t.length;r--;n[t[r]]=e);return n},e=[1,9],n=[1,10],r=[1,11],o=[1,12],i=[5,11,12,13,14,15],a={trace:function(){},yy:{},symbols_:{error:2,root:3,expressions:4,EOF:5,expression:6,optional:7,literal:8,splat:9,param:10,"(":11,")":12,LITERAL:13,SPLAT:14,PARAM:15,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",11:"(",12:")",13:"LITERAL",14:"SPLAT",15:"PARAM"},productions_:[0,[3,2],[3,1],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[7,3],[8,1],[9,1],[10,1]],performAction:function(t,e,n,r,o,i,a){var s=i.length-1;switch(o){case 1:return new r.Root({},[i[s-1]]);case 2:return new r.Root({},[new r.Literal({value:""})]);case 3:this.$=new r.Concat({},[i[s-1],i[s]]);break;case 4:case 5:this.$=i[s];break;case 6:this.$=new r.Literal({value:i[s]});break;case 7:this.$=new r.Splat({name:i[s]});break;case 8:this.$=new r.Param({name:i[s]});break;case 9:this.$=new r.Optional({},[i[s-1]]);break;case 10:this.$=t;break;case 11:case 12:this.$=t.slice(1)}},table:[{3:1,4:2,5:[1,3],6:4,7:5,8:6,9:7,10:8,11:e,13:n,14:r,15:o},{1:[3]},{5:[1,13],6:14,7:5,8:6,9:7,10:8,11:e,13:n,14:r,15:o},{1:[2,2]},t(i,[2,4]),t(i,[2,5]),t(i,[2,6]),t(i,[2,7]),t(i,[2,8]),{4:15,6:4,7:5,8:6,9:7,10:8,11:e,13:n,14:r,15:o},t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),{1:[2,1]},t(i,[2,3]),{6:14,7:5,8:6,9:7,10:8,11:e,12:[1,16],13:n,14:r,15:o},t(i,[2,9])],defaultActions:{3:[2,2],13:[2,1]},parseError:function(t,e){if(!e.recoverable){function n(t,e){this.message=t,this.hash=e}throw n.prototype=Error,new n(t,e)}this.trace(t)},parse:function(t){var e=this,n=[0],r=[null],o=[],i=this.table,a="",s=0,u=0,c=2,l=1,h=o.slice.call(arguments,1),f=Object.create(this.lexer),d={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(d.yy[p]=this.yy[p]);f.setInput(t,d.yy),d.yy.lexer=f,d.yy.parser=this,void 0===f.yylloc&&(f.yylloc={});var m=f.yylloc;o.push(m);var y=f.options&&f.options.ranges;"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var _,g,v,w,b,k,x,S,T=function(){var t;return"number"!=typeof(t=f.lex()||l)&&(t=e.symbols_[t]||t),t},C={};;){if(g=n[n.length-1],this.defaultActions[g]?v=this.defaultActions[g]:(null==_&&(_=T()),v=i[g]&&i[g][_]),void 0===v||!v.length||!v[0]){var P="";for(b in S=[],i[g])this.terminals_[b]&&b>c&&S.push("'"+this.terminals_[b]+"'");P=f.showPosition?"Parse error on line "+(s+1)+":\n"+f.showPosition()+"\nExpecting "+S.join(", ")+", got '"+(this.terminals_[_]||_)+"'":"Parse error on line "+(s+1)+": Unexpected "+(_==l?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(P,{text:f.match,token:this.terminals_[_]||_,line:f.yylineno,loc:m,expected:S})}if(v[0]instanceof Array&&v.length>1)throw new Error("Parse Error: multiple actions possible at state: "+g+", token: "+_);switch(v[0]){case 1:n.push(_),r.push(f.yytext),o.push(f.yylloc),n.push(v[1]),_=null,u=f.yyleng,a=f.yytext,s=f.yylineno,m=f.yylloc;break;case 2:if(k=this.productions_[v[1]][1],C.$=r[r.length-k],C._$={first_line:o[o.length-(k||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(k||1)].first_column,last_column:o[o.length-1].last_column},y&&(C._$.range=[o[o.length-(k||1)].range[0],o[o.length-1].range[1]]),void 0!==(w=this.performAction.apply(C,[a,u,s,d.yy,v[1],r,o].concat(h))))return w;k&&(n=n.slice(0,-1*k*2),r=r.slice(0,-1*k),o=o.slice(0,-1*k)),n.push(this.productions_[v[1]][0]),r.push(C.$),o.push(C._$),x=i[n[n.length-2]][n[n.length-1]],n.push(x);break;case 3:return!0}}return!0}},s=function(){var t={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var o=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[o[0],o[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,r,o;if(this.options.backtrack_lexer&&(o={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(o.yylloc.range=this.yylloc.range.slice(0))),(r=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var i in o)this[i]=o[i];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,r;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var o=this._currentRules(),i=0;i<o.length;i++)if((n=this._input.match(this.rules[o[i]]))&&(!e||n[0].length>e[0].length)){if(e=n,r=i,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,o[i])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,o[r]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(t,e,n,r){switch(n){case 0:return"(";case 1:return")";case 2:return"SPLAT";case 3:return"PARAM";case 4:case 5:return"LITERAL";case 6:return"EOF"}},rules:[/^(?:\()/,/^(?:\))/,/^(?:\*+\w+)/,/^(?::+\w+)/,/^(?:[\w%\-~\n]+)/,/^(?:.)/,/^(?:$)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6],inclusive:!0}}};return t}();function u(){this.yy={}}return a.lexer=s,u.prototype=a,a.Parser=u,new u}();e.parser=n,e.Parser=n.Parser,e.parse=function(){return n.parse.apply(n,arguments)}},$e(ze={path:undefined,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&ze.path)}},ze.exports),ze.exports);function Xe(t){return function(e,n){return{displayName:t,props:e,children:n||[]}}}var Ge={Root:Xe("Root"),Concat:Xe("Concat"),Literal:Xe("Literal"),Splat:Xe("Splat"),Param:Xe("Param"),Optional:Xe("Optional")},Qe=Be.parser;Qe.yy=Ge;var Je=Qe,Ve=Object.keys(Ge),Ke=function(t){return Ve.forEach((function(e){if(void 0===t[e])throw new Error("No handler defined for "+e.displayName)})),{visit:function(t,e){return this.handlers[t.displayName].call(this,t,e)},handlers:t}},Ze=/[\-{}\[\]+?.,\\\^$|#\s]/g;function tn(t){this.captures=t.captures,this.re=t.re}tn.prototype.match=function(t){var e=this.re.exec(t),n={};if(e)return this.captures.forEach((function(t,r){void 0===e[r+1]?n[t]=void 0:n[t]=decodeURIComponent(e[r+1])})),n};var en=Ke({Concat:function(t){return t.children.reduce(function(t,e){var n=this.visit(e);return{re:t.re+n.re,captures:t.captures.concat(n.captures)}}.bind(this),{re:"",captures:[]})},Literal:function(t){return{re:t.props.value.replace(Ze,"\\$&"),captures:[]}},Splat:function(t){return{re:"([^?]*?)",captures:[t.props.name]}},Param:function(t){return{re:"([^\\/\\?]+)",captures:[t.props.name]}},Optional:function(t){var e=this.visit(t.children[0]);return{re:"(?:"+e.re+")?",captures:e.captures}},Root:function(t){var e=this.visit(t.children[0]);return new tn({re:new RegExp("^"+e.re+"(?=\\?|$)"),captures:e.captures})}}),nn=Ke({Concat:function(t,e){var n=t.children.map(function(t){return this.visit(t,e)}.bind(this));return!n.some((function(t){return!1===t}))&&n.join("")},Literal:function(t){return decodeURI(t.props.value)},Splat:function(t,e){return!!e[t.props.name]&&e[t.props.name]},Param:function(t,e){return!!e[t.props.name]&&e[t.props.name]},Optional:function(t,e){return this.visit(t.children[0],e)||""},Root:function(t,e){e=e||{};var n=this.visit(t.children[0],e);return!!n&&encodeURI(n)}}),rn=nn;function on(t){var e;if(e=this?this:Object.create(on.prototype),void 0===t)throw new Error("A route spec is required");return e.spec=t,e.ast=Je.parse(t),e}on.prototype=Object.create(null),on.prototype.match=function(t){return en.visit(this.ast).match(t)||!1},on.prototype.reverse=function(t){return rn.visit(this.ast,t)};var an=on;Event.prototype.propagationPath=function(){var t=function(){var t=this.target||null,e=[t];if(!t||!t.parentElement)return[];for(;t.parentElement;)t=t.parentElement,e.unshift(t);return e}.bind(this);return this.path||this.composedPath&&this.composedPath()||t()};class sn extends p{handleClick(t,e){if(!t.defaultPrevented&&!t.ctrlKey)for(let e of t.propagationPath())if("A"===e.tagName){if(""!==e.target.trim())return;let n=e.pathname,r=e.origin,o=e.search,i=e.hash;if(r===window.location.origin)for(let e of this.props.routes){let r=n+o+i,a=new an(e.path);if("*"==e.path||a.match(r))return t.preventDefault(),void De(r)}}}render(){const t=[];for(let e in this.props.globals)t.push(h(this.props.globals[e],{ref:t=>t._persist(),key:e}));return h("div",{onClick:this.handleClick.bind(this)},[...t,...this.props.children])}}sn.displayName="Mint.Root";var un=t=>class{constructor(){this.root=document.createElement("div"),document.body.appendChild(this.root),this.firstPageLoad=!0,this.routes=[],this.url=null,window.addEventListener("popstate",(()=>{this.handlePopState()}))}resolvePagePosition(){var t;t=()=>{requestAnimationFrame((()=>{let t;try{t=this.root.querySelector(`a[name="${window.location.hash.slice(1)}"]`)}finally{}window.location.hash&&t?window.location.href=window.location.hash:this.firstPageLoad||window.scrollTo(document.body.scrollTop,0),this.firstPageLoad=!1}))},"function"!=typeof window.queueMicrotask?Promise.resolve().then(t).catch((t=>setTimeout((()=>{throw t})))):window.queueMicrotask(t)}handlePopState(){const e=window.location.pathname+window.location.search+window.location.hash;if(e!==this.url){for(let n of this.routes)if("*"===n.path)n.handler(),this.resolvePagePosition();else{let r=new an(n.path).match(e);if(r)try{let e=n.mapping.map(((e,o)=>{const i=r[e],a=n.decoders[o](i);if(a instanceof t.ok)return a._0;throw""}));n.handler.apply(null,e),this.resolvePagePosition();break}catch(t){}}this.url=e}}render(t,e){void 0!==t&&(D(h(sn,{routes:this.routes,globals:e},[h(t,{key:"$MAIN"})]),this.root),this.handlePopState())}addRoutes(t){this.routes=this.routes.concat(t)}};const cn=t=>{let e=JSON.stringify(t,"",2);return void 0===e&&(e="undefined"),((t,e=1,n)=>{if(n={indent:" ",includeEmptyLines:!1,...n},"string"!=typeof t)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof t}\``);if("number"!=typeof e)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof e}\``);if("string"!=typeof n.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof n.indent}\``);if(0===e)return t;const r=n.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return t.replace(r,n.indent.repeat(e))})(e)};class ln{constructor(t,e=[]){this.message=t,this.object=null,this.path=e}push(t){this.path.unshift(t)}toString(){const t=this.message.trim(),e=this.path.reduce(((t,e)=>{if(t.length)switch(e.type){case"FIELD":return`${t}.${e.value}`;case"ARRAY":return`${t}[${e.value}]`}else switch(e.type){case"FIELD":return e.value;case"ARRAY":return"[$(item.value)]"}}),"");return e.length&&this.object?t+"\n\n"+hn.trim().replace("{value}",cn(this.object)).replace("{path}",e):t}}const hn="\nThe input is in this object:\n\n{value}\n\nat: {path}\n",fn=t=>e=>{const{ok:n,err:r}=t;return"string"!=typeof e?new r(new ln("\nI was trying to decode the value:\n\n{value}\n\nas a String, but could not.\n".replace("{value}",cn(e)))):new n(e)},dn=t=>e=>{const{ok:n,err:r}=t;let o=NaN;return o="number"==typeof e?new Date(e):Date.parse(e),Number.isNaN(o)?new r(new ln("\nI was trying to decode the value:\n\n{value}\n\nas a Time, but could not.\n".replace("{value}",cn(e)))):new n(new Date(o))},pn=t=>e=>{const{ok:n,err:r}=t;let o=parseFloat(e);return isNaN(o)?new r(new ln("\nI was trying to decode the value:\n\n{value}\n\nas a Number, but could not.\n".replace("{value}",cn(e)))):new n(o)},mn=t=>e=>{const{ok:n,err:r}=t;return"boolean"!=typeof e?new r(new ln("\nI was trying to decode the value:\n\n{value}\n\nas a Bool, but could not.\n".replace("{value}",cn(e)))):new n(e)},yn=t=>(e,n)=>{const{err:r,nothing:o}=t;return t=>{if(null==t||null==t||"object"!=typeof t||Array.isArray(t)){const n='\nI was trying to decode the field "{field}" from the object:\n\n{value}\n\nbut I could not because it\'s not an object.\n'.replace("{field}",e).replace("{value}",cn(t));return new r(new ln(n))}{const o=t[e],i=n(o);return i instanceof r&&(i._0.push({type:"FIELD",value:e}),i._0.object=t),i}}},_n=t=>e=>n=>{const{ok:r,err:o}=t;if(!Array.isArray(n))return new o(new ln("\nI was trying to decode the value:\n\n{value}\n\nas an Array, but could not.\n".replace("{value}",cn(n))));let i=[],a=0;for(let t of n){let r=e(t);if(r instanceof o)return r._0.push({type:"ARRAY",value:a}),r._0.object=n,r;i.push(r._0),a++}return new r(i)},gn=t=>e=>n=>{const{ok:r,just:o,nothing:i,err:a}=t;if(null==n||null==n)return new r(new i);{const t=e(n);return t instanceof a?t:new r(new o(t._0))}},vn=t=>e=>n=>{const{ok:r,err:o}=t;if(!Array.isArray(n))return new o(new ln("\nI was trying to decode the value:\n\n{value}\n\nas an Tuple, but could not.\n".replace("{value}",cn(n))));let i=[],a=0;for(let t of e){if(void 0===n[a]||null===n[a])return new o(new ln("\nI was trying to decode one of the values of a tuple:\n\n{value}\n\nbut could not.\n".replace("{value}",cn(n[a]))));{let e=t(n[a]);if(e instanceof o)return e._0.push({type:"ARRAY",value:a}),e._0.object=n,e;i.push(e._0)}a++}return new r(i)},wn=t=>e=>n=>{const{ok:r,err:o}=t;if(null==n||null==n||"object"!=typeof n||Array.isArray(n)){const t="\nI was trying to decode the value:\n\n{value}\n\nas a Map, but could not.\n".replace("{value}",cn(n));return new o(new ln(t))}{const t=[];for(let r in n){const i=e(n[r]);if(i instanceof o)return i;t.push([r,i._0])}return new r(t)}},bn=t=>e=>new t.ok(e),kn=t=>t,xn=t=>t.toISOString(),Sn=t=>e=>e.map((e=>t?t(e):e)),Tn=t=>e=>{const n={};for(let r of e)n[r[0]]=t?t(r[1]):r[1];return n},Cn=t=>e=>n=>n instanceof t.just?e?e(n._0):n._0:null,Pn=t=>e=>e.map(((e,n)=>{const r=t[n];return r?r(e):e}));var En=t=>({maybe:Cn(t),identity:kn,tuple:Pn,array:Sn,time:xn,map:Tn});class Dn{constructor(){Ue(this)}_d(t){je(this,t)}}class Mn{constructor(){Ue(this),this.listeners=new Set,this.state={}}setState(t,e){this.state=Object.assign({},this.state,t);for(let t of this.listeners)t.forceUpdate();e()}_d(t){je(this,t)}_subscribe(t){this.listeners.add(t)}_unsubscribe(t){this.listeners.delete(t)}}class An{[Se](t){if(!(t instanceof this.constructor))return!1;if(t.length!==this.length)return!1;for(let e=0;e<this.length;e++)if(!Ce(this["_"+e],t["_"+e]))return!1;return!0}}const On=function(t){return null==t};return Function.prototype[Se]=function(t){return this===t},Node.prototype[Se]=function(t){return this===t},Symbol.prototype[Se]=function(t){return this.valueOf()===t},Date.prototype[Se]=function(t){return+this==+t},Number.prototype[Se]=function(t){return this.valueOf()===t},Boolean.prototype[Se]=function(t){return this.valueOf()===t},String.prototype[Se]=function(t){return this.valueOf()===t},Array.prototype[Se]=function(t){if(On(t))return!1;if(this.length!==t.length)return!1;if(0==this.length)return!0;for(let e in this)if(!Ce(this[e],t[e]))return!1;return!0},FormData.prototype[Se]=function(t){if(On(t))return!1;const e=Array.from(this.keys()).sort(),n=Array.from(t.keys()).sort();if(Ce(e,n)){if(0==e.length)return!0;for(let n of e){const e=Array.from(this.getAll(n).sort()),r=Array.from(t.getAll(n).sort());if(!Ce(e,r))return!1}return!0}return!1},URLSearchParams.prototype[Se]=function(t){return!On(t)&&this.toString()===t.toString()},Set.prototype[Se]=function(t){return!On(t)&&Ce(Array.from(this).sort(),Array.from(t).sort())},Map.prototype[Se]=function(t){if(On(t))return!1;const e=Array.from(this.keys()).sort(),n=Array.from(t.keys()).sort();if(Ce(e,n)){if(0==e.length)return!0;for(let n of e)if(!Ce(this.get(n),t.get(n)))return!1;return!0}return!1},t=>{const e=(t=>({boolean:mn(t),object:bn(t),number:pn(t),string:fn(t),field:yn(t),array:_n(t),maybe:gn(t),tuple:vn(t),time:dn(t),map:wn(t)}))(t);return{program:new(un(t)),normalizeEvent:Ne,insertStyles:Me,navigate:De,compare:Ce,update:Ee,array:We,style:Le,at:Ae(t),EmbeddedProgram:Ye,TestContext:Fe,Component:He,Provider:qe,Module:Dn,Store:Mn,Decoder:e,Encoder:En(t),DateFNS:{format:ye,startOfMonth:gt,startOfWeek:ct,startOfDay:ht,endOfMonth:yt,endOfWeek:vt,endOfDay:mt,addMonths:st,eachDay:_t,distanceInWordsStrict:xe},Record:Record,Enum:An,Nothing:t.nothing,Just:t.just,Err:t.err,Ok:t.ok,createRecord:Pe(e,t),createPortal:Q,register:rt,createElement:h,React:{Fragment:d},ReactDOM:{unmountComponentAtNode:t=>D(null,t),render:D},Symbols:{Equals:Se}}}}();
(() => {
  const _enums = {}
  const mint = Mint(_enums)

  const _normalizeEvent = (event) => {
    return AZ.sr(mint.normalizeEvent(event))
  }

  const _R = mint.createRecord
  const _h = mint.createElement
  const _createPortal = mint.createPortal
  const _insertStyles = mint.insertStyles
  const _navigate = mint.navigate
  const _compare = mint.compare
  const _program = mint.program
  const _encode = mint.encode
  const _style = mint.style
  const _array = mint.array
  const _wc = mint.register
  const _u = mint.update
  const _at = mint.at

  window.TestContext = mint.TestContext
  const TestContext = mint.TestContext
  const ReactDOM = mint.ReactDOM
  const Decoder = mint.Decoder
  const Encoder = mint.Encoder
  const DateFNS = mint.DateFNS
  const Record = mint.Record
  const React = mint.React

  const _C = mint.Component
  const _P = mint.Provider
  const _M = mint.Module
  const _S = mint.Store
  const _E = mint.Enum

  const _m = (method) => {
    let value
    return () => {
      if (value) { return value }
      value = method()
      return value
    }
  }

  const _s = (item, callback) => {
    if (item instanceof AT) {
      return item
    } else if (item instanceof AU) {
      return new AU(callback(item._0))
    } else {
      return callback(item)
    }
  }

  class DoError extends Error {}

  class AT extends _E{constructor(){super();this.length = 0}};class AU extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class DS extends _E{constructor(){super();this.length = 0}};class DT extends _E{constructor(){super();this.length = 0}};class DV extends _E{constructor(){super();this.length = 0}};class DU extends _E{constructor(){super();this.length = 0}};class DR extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class DQ extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class BJ extends _E{constructor(){super();this.length = 0}};class BL extends _E{constructor(){super();this.length = 0}};class BN extends _E{constructor(){super();this.length = 0}};class BP extends _E{constructor(){super();this.length = 0}};class BR extends _E{constructor(){super();this.length = 0}};class BT extends _E{constructor(){super();this.length = 0}};class BU extends _E{constructor(){super();this.length = 0}};class CJ extends _E{constructor(){super();this.length = 0}};class CQ extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class CR extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class CA extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class CK extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class CW extends _E{constructor(){super();this.length = 0}};class CN extends _E{constructor(){super();this.length = 0}};class CX extends _E{constructor(){super();this.length = 0}};class CY extends _E{constructor(){super();this.length = 0}};class CZ extends _E{constructor(){super();this.length = 0}};class DA extends _E{constructor(){super();this.length = 0}};class DC extends _E{constructor(){super();this.length = 0}};class DB extends _E{constructor(){super();this.length = 0}};class DD extends _E{constructor(){super();this.length = 0}};class DF extends _E{constructor(){super();this.length = 0}};class DE extends _E{constructor(){super();this.length = 0}};class DG extends _E{constructor(){super();this.length = 0}};class EC extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class ED extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class BZ extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class EB extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class CS extends _E{constructor(){super();this.length = 0}};const F = _R({hostname:["hostname",Decoder.string],protocol:["protocol",Decoder.string],origin:["origin",Decoder.string],search:["search",Decoder.string],path:["path",Decoder.string],hash:["hash",Decoder.string],host:["host",Decoder.string],port:["port",Decoder.string]});const G = _R({key:["key",Decoder.string],value:["value",Decoder.string]});const H = _R({});const I = _R({status:["status",Decoder.number],body:["body",Decoder.string]});const J = _R({});const K = _R({});const L = _R({});const M = _R({});const N = _R({});const O = _R({});const P = _R({});const Q = _R({});const R = _R({});const S = _R({});const T = _R({});const U = _R({});const V = _R({});const W = _R({});const X = _R({});const Y = _R({});const Z = _R({});const AA = _R({});const AB = _R({});const AC = _R({height:["height",Decoder.number],bottom:["bottom",Decoder.number],width:["width",Decoder.number],right:["right",Decoder.number],left:["left",Decoder.number],top:["top",Decoder.number],x:["x",Decoder.number],y:["y",Decoder.number]});const AD = _R({});const AE = _R({caseInsensitive:["caseInsensitive",Decoder.boolean],multiline:["multiline",Decoder.boolean],unicode:["unicode",Decoder.boolean],global:["global",Decoder.boolean],sticky:["sticky",Decoder.boolean]});const AF = _R({submatches:["submatches",Decoder.array(Decoder.string),Encoder.array()],match:["match",Decoder.string],index:["index",Decoder.number]});const AG = _R({});const AH = _R({});const AI = _R({});const AJ = _R({sortKey:["sortKey",Decoder.string],sortable:["sortable",Decoder.boolean],label:["label",Decoder.string],shrink:["shrink",Decoder.boolean]});const AK = _R({originalHeight:["originalHeight",Decoder.number],originalWidth:["originalWidth",Decoder.number],currentHeight:["currentHeight",Decoder.number],currentWidth:["currentWidth",Decoder.number],left:["left",Decoder.number],top:["top",Decoder.number]});const AL = _R({titleWoff2:["titleWoff2",Decoder.string],titleWoff:["titleWoff",Decoder.string],titleName:["titleName",Decoder.string],regularWoff2:["regularWoff2",Decoder.string],regularWoff:["regularWoff",Decoder.string],boldWoff2:["boldWoff2",Decoder.string],boldWoff:["boldWoff",Decoder.string],name:["name",Decoder.string]});const AM = _R({source:["source",Decoder.string],height:["height",Decoder.number],width:["width",Decoder.number],x:["x",Decoder.number],y:["y",Decoder.number]});const AN = _R({});const AO = _R({color:["color",Decoder.string],text:["text",Decoder.string]});const AP = _R({s900:["s900",((_)=>AO.decode(_)),((_)=>AO.encode(_))],s800:["s800",((_)=>AO.decode(_)),((_)=>AO.encode(_))],s700:["s700",((_)=>AO.decode(_)),((_)=>AO.encode(_))],s600:["s600",((_)=>AO.decode(_)),((_)=>AO.encode(_))],s500:["s500",((_)=>AO.decode(_)),((_)=>AO.encode(_))],s400:["s400",((_)=>AO.decode(_)),((_)=>AO.encode(_))],s300:["s300",((_)=>AO.decode(_)),((_)=>AO.encode(_))],s200:["s200",((_)=>AO.decode(_)),((_)=>AO.encode(_))],s100:["s100",((_)=>AO.decode(_)),((_)=>AO.encode(_))],s50:["s50",((_)=>AO.decode(_)),((_)=>AO.encode(_))],saturation:["saturation",Decoder.number],lightness:["lightness",Decoder.number],hue:["hue",Decoder.number]});const AW=new(class extends _M{gl(oo){return (document.createElement(oo))}fx(op){return ((() => {
      const rect = op.getBoundingClientRect()

      return new AC({bottom:(rect.bottom),height:(rect.height),width:(rect.width),right:(rect.right),left:(rect.left),top:(rect.top),x:(rect.x),y:(rect.y)})
    })())}oq(or){return ((() => {
      let value = or.value

      if (typeof value === "string") {
        return value
      } else {
        return ""
      }
    })())}ir(os){return (()=>{let ot = os;if(ot instanceof AU){const ov = ot._0;return (async()=>{let _ = null;try{await AW.ou(ov);_ = await AX.t()}catch(_error){if(!(_error instanceof DoError)){_ = AX.t()}};return _})()} else if(ot instanceof AT){return AX.t()}})()}ou(ow){return (new Promise((resolve, reject) => {
      let counter = 0

      let focus = () => {
        if (counter > 15) {
          reject('Could not focus the element in 150ms. Is it visible?')
        }

        ow.focus()

        if (document.activeElement != ow) {
          counter++
          setTimeout(focus, 10)
        } else {
          resolve(null)
        }
      }

      focus()
    }))}n(oy,ox){return (ox.contains(oy))}jo(pa,oz){return ((..._) => AS.fz(false, ..._))(((..._) => AS.g(((..._) => AW.n(oz, ..._)), ..._))(pa))}jb(){return ((() => {
      if (document.activeElement) {
        return new AU((document.activeElement))
      } else {
        return new AT()
      }
    })())}ob(pb){return ((() => {
      /* Save focused element. */
      const focused = document.activeElement

      /* Save scroll position. */
      const scrollX = window.scrollX
      const scrollY = window.scrollY

      /* Save the scroll position of each element. */
      const scrollPositions =
        Array.from(document.querySelectorAll("*")).reduce((memo, element) => {
          if (element.scrollHeight > 0 || element.scrollWidth > 0) {
            memo.set(element, [element.scrollLeft, element.scrollTop])
          }

          return memo
        }, new Map)

      /* Gather the focusable elements by focusing them and comparing it
         with the focused element. */
      const foundElements =
        Array.from(pb.querySelectorAll("*")).reduce((memo ,element) => {
          element.focus()
          if (document.activeElement == element && element.tabIndex !== -1) {
            memo.push(element)
          }

          return memo
        }, [])

      /* Restore scroll positions and focus. */
      for (let element in scrollPositions) {
        const [x, y] = scrollPositions[element]
        element.scrollTo(x, y)
      }

      window.scrollTo(scrollX, scrollY)
      focused.focus()

      return foundElements
    })())}jf(pc){return AW.ir(AR.oe(AW.ob(pc)))}jj(pd,pe,pf){return (pd.scrollTo({
        left: pe,
        top: pf
      }))}});const DN=new(class extends _M{pg(ph){return ((() => {
      if (!this._a) {
        this._a = document.createElement('a')
      }

      this._a.href = ph

      return new F({hostname:(this._a.hostname || ""),protocol:(this._a.protocol || ""),origin:(this._a.origin || ""),path:(this._a.pathname || ""),search:(this._a.search || ""),hash:(this._a.hash || ""),host:(this._a.host || ""),port:(this._a.port || "")})
    })())}});const AS=new(class extends _M{g(pk,pi){return (()=>{let pj = pi;if(pj instanceof AU){const pl = pj._0;return new AU(pk(pl))} else if(pj instanceof AT){return new AT()}})()}fz(po,pm){return (()=>{let pn = pm;if(pn instanceof AT){return po} else if(pn instanceof AU){const pp = pn._0;return pp}})()}});const DJ=new(class extends _M{ip(pr,pq){return (new Promise((resolve) => {
    	setTimeout(() => {
        resolve(pq)
      }, pr)
    }))}om(ps){return (new Promise((resolve) => {
    	requestAnimationFrame(() => {
        resolve(ps)
      })
    }))}});const AQ=new(class extends _M{b(){return DN.pg(AQ.pt())}pt(){return (window.location.href)}pu(){return (window.innerWidth)}pv(){return (window.innerHeight)}eo(px){return (()=>{let pw = AQ.b();let py = DN.pg(px);return (_compare(pw.hostname, py.hostname) && _compare(pw.protocol, py.protocol) && _compare(pw.origin, py.origin) && _compare(pw.path, py.path) && _compare(pw.host, py.host) && _compare(pw.port, py.port))})()}pz(qa,qb){return ((() => {
      const query = window.matchMedia(qa);
      const listener = (event) => qb(query.matches);
      query.addListener(listener)
      qb(query.matches)
      return () => query.removeListener(listener);
    })())}qc(qd){return (window.matchMedia(qd).matches)}k(qf,qg,qe){return ((() => {
      const listener = (event) => {
        qe(_normalizeEvent(event))
      }

      window.addEventListener(qf, listener, qg);
      return () => window.removeEventListener(qf, listener, qg);
    })())}});const DO=new(class extends _M{qh(){return ([])}qi(qk,qj){return ((() => {
      for (let item of qj) {
        if (_compare(item, qk)) {
          return true
        }
      }

      return false
    })())}ql(qm,qn){return ((() => {
      if (DO.qi(qm, qn)) { return qn }

      const newSet = Array.from(qn)
      newSet.push(qm)

      return newSet
    })())}});const DP=new(class extends _M{qo(qp,qq,qr){return ((() => {
      try {
        qp.setItem(qq, qr)
        return new DQ(null)
      } catch (error) {
        switch(error.name) {
          case 'SecurityError':
            return new DR(new DS())
          case 'QUOTA_EXCEEDED_ERR':
            return new DR(new DT())
          case 'QuotaExceededError':
            return new DR(new DT())
          case 'NS_ERROR_DOM_QUOTA_REACHED':
            return new DR(new DT())
          default:
            return new DR(new DU())
        }
      }
    })())}qs(qt,qu){return ((() => {
      try {
        let value = qt.getItem(qu)

        if (typeof value === "string") {
          return new DQ((value))
        } else {
          return new DR(new DV())
        }
      } catch (error) {
        switch(error.name) {
          case 'SecurityError':
            return new DR(new DS())
          default:
            return new DR(new DU())
        }
      }
    })())}});const DW=new(class extends _M{qv(qw,qx){return DP.qo((localStorage), qw, qx)}qy(qz){return DP.qs((localStorage), qz)}});const AR=new(class extends _M{oe(ra){return ((() => {
      let first = ra[0]
      if (first !== undefined) {
        return new AU((first))
      } else {
        return new AT()
      }
    })())}og(rb){return ((() => {
      let last = rb[rb.length - 1]
      if (last !== undefined) {
        return new AU((last))
      } else {
        return new AT()
      }
    })())}rc(rd){return (rd.length)}re(rg,rf){return ([...rf, rg])}bg(ri,rh){return (rh.map(ri))}m(rk,rj){return (!!rj.find(rk))}ab(rm,rl){return ((() => {
      return rl.sort((a, b) => {
        let aVal = rm(a)
        let bVal = rm(b)

        if (aVal < bVal) {
          return -1
        }

        if (aVal > bVal) {
          return 1
        }

        return 0
      })
    })())}f(rn){return _compare(AR.rc(rn), 0)}lm(rp,ro){return (ro.reduce((a,v)=>[...a,v,rp],[]).slice(0,-1))}rq(rt,rs,rr){return (rr.reduce(rs, rt))}q(ry){return AR.rq([], ((rx, ru)=>{return (()=>{let rv = ru;if(rv instanceof AU){const rw = rv._0;return AR.re(rw, rx)} else if(rv instanceof AT){return rx}})()}), ry)}});const CL=new(class extends _M{hb(rz){return _compare(rz, ``)}sa(sc){return _compare(CL.sb(sc), ``)}gv(sd){return !CL.sa(sd)}fc(sf,se){return (se.join(sf))}sb(sg){return (sg.trim())}dm(sh){return (sh
      .replace(/[^\p{Lu}\p{Ll}0-9\-_]+/gu, '-') // Replace non alphanumerical with dashes
      .replace(/\p{Lu}([\p{Ll}0-9]+|[\p{Lu}0-9]+)?/gu, '-$&')
      .replace(/-{2,}/g, '-')
      .replace(/^-+/i, '')
      .replace(/-+$/i, '')
      .toLowerCase())}});const CG=new(class extends _M{gm(){return (false)}da(si){return (!!si)}ln(sj){return ((() => {
      if (sj == null || typeof sj == 'boolean') {
        return []
      } else if (Array.isArray(sj)) {
        return sj.reduce((memo, child) => {
          return memo.concat(CG.ln((child)))
        }, [])
      } else {
        return [sj]
      }
    })())}});const DX=new(class extends _M{sk(){return new AC({bottom:0,height:0,width:0,right:0,left:0,top:0,x:0,y:0})}});const BB=new(class extends _M{as(sl){return (requestAnimationFrame(sl))}at(sm){return (cancelAnimationFrame(sm) || -1)}});const DY=new(class extends _M{sn(so){return ((() => {
      if (window.DEBUG) {
        window.DEBUG.log(so)
      } else {
        console.log(so)
      }

      return so
    })())}});const DZ=new(class extends _M{sp(sq){return (sq.toString())}});const AZ=new(class extends _M{sr(ss){return new AD({bubbles:(ss.bubbles),cancelable:(ss.cancelable),currentTarget:(ss.currentTarget),defaultPrevented:(ss.defaultPrevented),dataTransfer:(ss.dataTransfer),clipboardData:(ss.clipboardData),eventPhase:(ss.eventPhase),isTrusted:(ss.isTrusted),target:(ss.target),timeStamp:(ss.timeStamp),type:(ss.type),data:(ss.data),altKey:(ss.altKey),charCode:(ss.charCode),ctrlKey:(ss.ctrlKey),key:(ss.key),keyCode:(ss.keyCode),locale:(ss.locale),location:(ss.location),metaKey:(ss.metaKey),repeat:(ss.repeat),shiftKey:(ss.shiftKey),which:(ss.which),button:(ss.button),buttons:(ss.buttons),clientX:(ss.clientX),clientY:(ss.clientY),pageX:(ss.pageX),pageY:(ss.pageY),screenX:(ss.screenX),screenY:(ss.screenY),detail:(ss.detail),deltaMode:(ss.deltaMode),deltaX:(ss.deltaX),deltaY:(ss.deltaY),deltaZ:(ss.deltaZ),animationName:(ss.animationName),pseudoElement:(ss.pseudoElement),propertyName:(ss.propertyName),elapsedTime:(ss.elapsedTime),event:ss})}af(st){return (st.event.stopPropagation())}ag(su){return (su.event.preventDefault())}constructor(){super();this._d({im:(()=>{return 27})})}});const BD=new(class extends _M{bh(sx){return (new ResizeObserver((entries) => {
      const values = entries.map((item) => {
        return (()=>{let sw = ((..._) => EA.sv(DX.sk(), ..._))(((_)=>AC.decode(_))(((item.contentRect))));return new AG({dimensions:sw,target:(item.target)})})()
      })

      sx((values))
    }))}be(sz,sy){return (sy.observe(sz) || sy)}ay(tb,ta){return (ta.unobserve(tb) || ta)}});const CE=new(class extends _M{cl(){return ([])}dt(td,te,tc){return ((() => {
      const result = []
      let set = false

      for (let item of tc) {
        if (_compare(item[0], td)) {
          set = true
          result.push([td, te])
        } else {
          result.push(item)
        }
      }

      if (!set) {
        result.push([td, te])
      }

      return result
    })())}tf(th,tg){return ((() => {
      for (let item of tg) {
        if (_compare(item[0], th)) {
          return new AU((item[1]))
        }
      }

      return new AT()
    })())}dq(tj,ti,tk){return ((..._) => AS.fz(ti, ..._))(CE.tf(tj, tk))}});const EA=new(class extends _M{sv(to,tl){return (()=>{let tm = tl;if(tm instanceof DQ){const tn = tm._0;return tn} else if(tm instanceof DR){return to}})()}});const AX=new(class extends _M{t(){return AX.tp(null)}gz(tq){return AX.tp(null)}tp(tr){return (Promise.resolve(tr))}ix(){return ((() => {
      let resolve, reject;

      const promise = new Promise((a, b) => {
        resolve = a
        reject = b
      })

      return [
        (value) => resolve(value),
        (error) => reject(error),
        promise
      ]
    })())}});const DH=new(class extends _M{gg(ts){return (()=>{let tt = ts;if(tt instanceof CW){return new CY()} else if(tt instanceof CN){return new CZ()} else if(tt instanceof CX){return new DA()} else if(tt instanceof CY){return new CW()} else if(tt instanceof CZ){return new CN()} else if(tt instanceof DA){return new CX()} else if(tt instanceof DC){return new DF()} else if(tt instanceof DB){return new DE()} else if(tt instanceof DD){return new DG()} else if(tt instanceof DF){return new DC()} else if(tt instanceof DE){return new DB()} else if(tt instanceof DG){return new DD()}})()}});const CF=new(class extends _M{cm(tu){return (()=>{let tv = tu;if(tv instanceof BZ){const tw = tv._0;return `${tw}em`} else if(tv instanceof EB){const tx = tv._0;return `${tx}px`} else if(tv instanceof CS){return `inherit`}})()}});const CC=new(class extends _M{constructor(){super();this._d({er:(()=>{return $u()}),bw:(()=>{return $v()}),bx:(()=>{return $w()}),by:(()=>{return $x()}),bz:(()=>{return $y()}),ca:(()=>{return $z()}),cb:(()=>{return $aa()})})}});const AV=new(class extends _P{constructor(){super();this.state={i:new AT()}}get i(){return this.state.i;}a(e){return (()=>{let c = AQ.b();return (()=>{const _0 = [];const _1 = this._subscriptions;let _i = 0;for(let d of _1){_0.push(d.changes(c));_i++};return _0})()})()}update(){return (AR.f(this._subscriptions) ? (()=>{AS.g(((h)=>{return h()}), this.i);return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({i:new AT()})), _resolve)
}))})() : (()=>{let j = this.i;if(j instanceof AT){return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({i:new AU(AQ.k(`popstate`, false, this.a))})), _resolve)
}))} else{return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({})), _resolve)
}))}})())}});const AY=new(class extends _P{constructor(){super();this.state={v:new AT()}}get v(){return this.state.v;}l(o){return (()=>{const _0 = [];const _1 = this._subscriptions;let _i = 0;for(let r of _1){_0.push((()=>{let s = ((..._) => AR.m(((p)=>{return AW.n(o.target, p)}), ..._))(AR.q(r.elements));return (s ? AX.t() : r.clicks())})());_i++};return _0})()}update(){return (AR.f(this._subscriptions) ? (()=>{AS.g(((u)=>{return u()}), this.v);return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({v:new AT()})), _resolve)
}))})() : (()=>{let w = this.v;if(w instanceof AT){return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({v:new AU(AQ.k(`mouseup`, true, this.l))})), _resolve)
}))} else{return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({})), _resolve)
}))}})())}});const BA=new(class extends _P{constructor(){super();this.state={am:new AT()}}get am(){return this.state.am;}x(y){return (()=>{let z = (y.ctrlKey && !_compare(y.keyCode, 17) ? new AU(17) : new AT());let aa = (y.shiftKey && !_compare(y.keyCode, 16) ? new AU(16) : new AT());let ad = ((..._) => AR.ab(((ac)=>{return ac}), ..._))(AR.q([new AU(y.keyCode), z, aa]));let ae = (document.querySelector("*:focus"));return (()=>{const _0 = [];const _1 = this._subscriptions;let _i = 0;for(let ai of _1){_0.push((()=>{const _0 = [];const _1 = ai.shortcuts;let _i = 0;for(let ah of _1){const _2 = (()=>{let ak = ((..._) => AR.ab(((aj)=>{return aj}), ..._))(ah.shortcut);return (_compare(ak, ad) && ah.condition()) && (!ae || ah.bypassFocused)})()
if (!_2) { continue };_0.push((()=>{AZ.af(y);AZ.ag(y);return ah.action()})());_i++};return _0})());_i++};return _0})()})()}update(){return (AR.f(this._subscriptions) ? (()=>{AS.g(((al)=>{return al()}), this.am);return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({am:new AT()})), _resolve)
}))})() : (()=>{let an = this.am;if(an instanceof AT){return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({am:new AU(AQ.k(`keydown`, true, this.x))})), _resolve)
}))} else{return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({})), _resolve)
}))}})())}});const BC=new(class extends _P{constructor(){super();this.state={ar:-1}}get ar(){return this.state.ar;}ao(aq){return (()=>{(()=>{const _0 = [];const _1 = this._subscriptions;let _i = 0;for(let ap of _1){_0.push(ap.frames(aq));_i++};return _0})();return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({ar:BB.as(this.ao)})), _resolve)
}))})()}update(){return (AR.f(this._subscriptions) ? new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({ar:BB.at(this.ar)})), _resolve)
})) : (_compare(this.ar, -1) ? new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({ar:BB.as(this.ao)})), _resolve)
})) : new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({})), _resolve)
}))))}});const BE=new(class extends _P{constructor(){super();this.state={bb:[],ba:BD.bh(this.au)}}get bb(){return this.state.bb;}get ba(){return this.state.ba;}au(ax){return (()=>{const _0 = [];const _1 = ax;let _i = 0;for(let aw of _1){_0.push((()=>{const _0 = [];const _1 = this._subscriptions;let _i = 0;for(let av of _1){_0.push((_compare(av.element, new AU(aw.target)) ? av.changes(aw.dimensions) : new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({})), _resolve)
}))));_i++};return _0})());_i++};return _0})()}update(){return (()=>{(()=>{const _0 = [];const _1 = AR.q(this.bb);let _i = 0;for(let az of _1){_0.push(BD.ay(az, this.ba));_i++};return _0})();(()=>{const _0 = [];const _1 = this._subscriptions;let _i = 0;for(let bc of _1){_0.push((()=>{let bd = bc.element;if(bd instanceof AU){const bf = bd._0;return (()=>{BD.be(bf, this.ba);return null})()} else if(bd instanceof AT){return null}})());_i++};return _0})();return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({bb:AR.bg(((_) => _.element), this._subscriptions)})), _resolve)
}))})()}});_program.addRoutes([{handler:((vg)=>{(async()=>{let _ = null;try{await Promise.all([(async()=>{await BG.ty(new BJ())})()])}catch(_error){if(!(_error instanceof DoError)){console.warn(`Unhandled error in parallel expression:`);console.warn(_error)}};return _})()}),decoders:[Decoder.string],mapping:['page'],path:`/?page=:page`},{handler:(()=>{(async()=>{let _ = null;try{await Promise.all([(async()=>{await BG.ty(new BJ())})()])}catch(_error){if(!(_error instanceof DoError)){console.warn(`Unhandled error in parallel expression:`);console.warn(_error)}};return _})()}),decoders:[],mapping:[],path:`/`},{handler:(()=>{(async()=>{let _ = null;try{await Promise.all([(async()=>{await BG.ty(new BL())})()])}catch(_error){if(!(_error instanceof DoError)){console.warn(`Unhandled error in parallel expression:`);console.warn(_error)}};return _})()}),decoders:[],mapping:[],path:`/about`},{handler:(()=>{(async()=>{let _ = null;try{await Promise.all([(async()=>{await BG.ty(new BN())})()])}catch(_error){if(!(_error instanceof DoError)){console.warn(`Unhandled error in parallel expression:`);console.warn(_error)}};return _})()}),decoders:[],mapping:[],path:`/works`},{handler:(()=>{(async()=>{let _ = null;try{await Promise.all([(async()=>{await BG.ty(new BP())})()])}catch(_error){if(!(_error instanceof DoError)){console.warn(`Unhandled error in parallel expression:`);console.warn(_error)}};return _})()}),decoders:[],mapping:[],path:`/hobby`},{handler:(()=>{(async()=>{let _ = null;try{await Promise.all([(async()=>{await BG.ty(new BR())})()])}catch(_error){if(!(_error instanceof DoError)){console.warn(`Unhandled error in parallel expression:`);console.warn(_error)}};return _})()}),decoders:[],mapping:[],path:`/papers`},{handler:(()=>{(async()=>{let _ = null;try{await Promise.all([(async()=>{await BG.ty(new BT())})()])}catch(_error){if(!(_error instanceof DoError)){console.warn(`Unhandled error in parallel expression:`);console.warn(_error)}};return _})()}),decoders:[],mapping:[],path:`/specimens`},{handler:(()=>{BG.ty(new BU())}),decoders:[],mapping:[],path:`*`}]);class BF extends _C{constructor(props){super(props);this._d({bi:["children",[]]})}render(){return (_createPortal(this.bi, document.body))}};;class E extends _C{get bj(){return BG.bl;}componentWillUnmount(){BG._unsubscribe(this)}componentDidMount(){BG._subscribe(this)}render(){return (()=>{let bk = this.bj;if(bk instanceof BJ){return $a()} else if(bk instanceof BL){return $c()} else if(bk instanceof BN){return $e()} else if(bk instanceof BP){return $g()} else if(bk instanceof BR){return $i()} else if(bk instanceof BT){return $k()} else if(bk instanceof BU){return $m()}})()}};;class BI extends _C{render(){return _h("div", {}, [_h("h2", {}, [`?????????????????????????????????????????????`]),_h("p", {}, [`????????????????????????????????????????????????????????????????????????????????????????????????????????????`,_h("br", {}),`??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`]),$n()])}};;class BK extends _C{render(){return _h("div", {}, [_h("h2", {}, [`????????????`]),$o(),_h(BV, {bm:`????????????`}, _array(_h("img", {"src":`/assets/fujikawa_400x400_5f5c6c3f25766e56479c94cad00695c5.jpg`,className:`a`}), _h("p", {}, [`??????: 1994???`]), _h("p", {}, [`??????: ?????????`]), _h("p", {}, [`??????: 2013???????????????????????????????????????2014?????????`]), _h("p", {}, [`???????????????????????????: ??????????????????????????????????????????`]), _h("p", {}, [`??????????????????: 2018???12?????????2021???8????????????????????????????????????????????????2021???8????????????????????????????????????????????????????????????`]), _h("p", {}, [`????????????: ???????????????????????????????????????????????????????????????????????????????????????`]), _h("p", {}, [`????????????: ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????QGIS??????????????????????????????????????????????????????????????????????????????????????????Web???????????????????????????`]), _h("p", {}, [`????????????: ?????????????????????????????????????????????????????????????????????`]), _h("br", {}), _h("p", {}, [`?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`])))])}};;class BS extends _C{render(){return _h("div", {}, [_h("h2", {}, [`??????????????????`]),_h("h3", {}, [`?????????????????????`])])}};;class BM extends _C{render(){return _h("div", {}, [_h("h2", {}, [`????????????`]),$p(),$q(),_h("h2", {}, [`????????????`]),_h("ul", {}, [_h("li", {}, [`??????????????????????????????????????????????????????2???????????????`]),_h("li", {}, [`???????????????????????????????????????OLYMPUS TG-4`]),_h("li", {}, [`?????????????????????`])])])}};;class BQ extends _C{render(){return _h("div", {}, [_h("h2", {}, [`?????????????????????`]),$r()])}};;class BO extends _C{render(){return _h("div", {}, [_h("h2", {}, [`??????`]),$s(),_h(BV, {bm:`?????????????????????`}, _array(_h("p", {}, [`?????????????????????????????????????????????????????????????????????????????????????????????????????????`,_h("br", {}),_h("ul", {}, [_h("li", {}, [`GitHub: `,_h("a", {"href":`https://github.com/fujikawahiroaki`,className:`b`}, [`fujikawahiroaki`])]),_h("li", {}, [`???????????????: Ruby, Crystal`]),_h("li", {}, [`???????????????????????????????????????: Python, JavaScript`]),_h("li", {}, [`??????????????????????????????????????????: C, Common Lisp (SBCL), Emacs Lisp, Mint`]),_h("li", {}, [`?????????????????????: ??????????????????????????????????????????Vim???????????????`]),_h("li", {}, [`?????????OS: ??????????????????????????????????????????Arch Linux???????????????`])])]), _h("p", {}, [`??????????????????????????????????????????????????????????????????Web????????????`,_h("a", {"href":`https://www.webspecimanager.net/`,className:`b`}, [`WebSpecimanager`]),`???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`]), _h("p", {}, [`???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????AtCoder???????????????????????????????????????????????????????????????????????????ID???`,_h("a", {"href":`https://atcoder.jp/users/fujikawahiroaki`,className:`b`}, [`fujikawahiroaki`])])))])}};;class BH extends _C{constructor(props){super(props);this._d({bt:["children",[]]})}render(){return _h("div", {}, [_h(BW, {bs:_h("div", {className:`d`}, [_h(BX, {bq:_h(BY, {bn:new BZ(4.0),bo:_h("div", {}, [$t()]),bp:`??????????????????`}),br:[new CA(new Record({iconBefore:null,iconAfter:null,label:`?????????`,target:``,href:`/`})), new CA(new Record({iconBefore:null,label:`????????????`,iconAfter:null,target:``,href:`/about`})), new CA(new Record({iconBefore:null,label:`????????????`,iconAfter:null,target:``,href:`/works`})), new CA(new Record({iconBefore:null,label:`???????????????`,iconAfter:null,target:``,href:`/papers`})), new CA(new Record({iconBefore:null,label:`????????????`,iconAfter:null,target:``,href:`/specimens`})), new CA(new Record({iconBefore:null,label:`??????`,iconAfter:null,target:``,href:`/hobby`}))]})]),bu:_h("div", {className:`c`}, [this.bt]),cd:_h("div", {className:`c`}, [_h(CB, {bv:_h("div", {className:`e`}, [_h("p", {}, [`?? 2022 ??????????????????`]),_h("p", {}, [`front-end: Powered by Mint Programming Language`]),_h("p", {}, [`back-end: Powered by Crystal Programming Language & Lucky Web Framework`])]),cc:[[``, [new CA(new Record({iconBefore:CC.bw,iconAfter:null,label:`?????????`,target:``,href:`/`})), new CA(new Record({iconBefore:CC.bx,iconAfter:null,href:`/about`,label:`????????????`,target:``})), new CA(new Record({iconBefore:CC.by,iconAfter:null,href:`/works`,label:`????????????`,target:``})), new CA(new Record({iconBefore:CC.bz,iconAfter:null,href:`/papers`,label:`???????????????`,target:``})), new CA(new Record({iconBefore:CC.ca,iconAfter:null,href:`/specimens`,label:`????????????`,target:``})), new CA(new Record({iconBefore:CC.cb,iconAfter:null,href:`/hobby`,label:`??????`,target:``}))]]]})])})])}};;class $A extends _C{constructor(props){super(props);this.state = new Record({ck:CE.cl()})}get ck(){return this.state.ck;}render(){return _h("div", {className:`f`}, [(()=>{const _0 = [];const _1 = this.ck;let _i = 0;for(let [cj,ce] of _1){_0.push((()=>{const [cf,cg] = ce;return _h(CD, {ch:cg,ci:cf,"key":cj})})());_i++};return _0})()])}_persist(){A=this}};;let A;class BX extends _C{constructor(props){super(props);this._d({co:[null,new BZ(3.5)],cn:[null,new CS()],di:[null,CC.er],br:[null,[]],ep:[null,new BZ(2)],df:[null,1000],bq:[null,null]});this.state = new Record({cx:0,dr:CE.cl(),cv:AQ.b()})}$g(){const _={[`--a-a`]:CF.cm(this.cn),[`--a-b`]:CF.cm(this.co)};return _}$h(cp){const _={};(cp ? Object.assign(_, {[`--b-a`]:`var(--primary-color)`}) : Object.assign(_, {[`--b-a`]:`inherit`}));return _}get cs(){return (this._base ? new AU(this._base) : new AT);}get cx(){return this.state.cx;}get dr(){return this.state.dr;}get cv(){return this.state.cv;}componentWillUnmount(){AV._unsubscribe(this);BE._unsubscribe(this)}componentDidUpdate(){if (true) {
  AV._subscribe(this, new L({changes:this.cq}))
} else {
  AV._unsubscribe(this)
};if (true) {
  BE._subscribe(this, new Z({changes:this.cr,element:this.cs}))
} else {
  BE._unsubscribe(this)
}}componentDidMount(){if (true) {
  AV._subscribe(this, new L({changes:this.cq}))
} else {
  AV._unsubscribe(this)
};if (true) {
  BE._subscribe(this, new Z({changes:this.cr,element:this.cs}))
} else {
  BE._unsubscribe(this)
}}ct(){return B.cu(this.br)}cq(cw){return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({cv:cw})), _resolve)
}))}cr(cy){return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({cx:cy.width})), _resolve)
}))}cz(db,de,dd){return _h(React.Fragment, {}, [(CG.da(db) ? _h("div", {className:`k`}, [_h(CH, {dc:db})]) : null),_h("span", {className:`i`}, [dd]),(CG.da(de) ? _h("div", {className:`k`}, [_h(CH, {dc:de})]) : null)])}render(){return _h("div", {className:`g`,style:_style([this.$g()]),ref:(element) => { this._base = element }}, [this.bq,_h(CI, {eq:this.ep}, _array((this.cx < this.df ? _h("div", {"onClick":(event => (this.ct)(_normalizeEvent(event)))}, [_h(CH, {dg:new BZ(2),dh:true,dc:this.di})]) : (()=>{const _0 = [];const _1 = this.br;let _i = 0;for(let dj of _1){_0.push((()=>{let dk = dj;if(dk instanceof CJ){return _h("div", {className:`j`})} else if(dk instanceof CK){const dl = dk._0;return dl} else if(dk instanceof CQ){const dz = dk._0.iconBefore;const ea = dk._0.iconAfter;const dn = dk._0.label;const ec = dk._0.items;return (()=>{let dp = CL.dm(dn);let ds = CE.dq(dp, false, this.dr);return _h(CM, {du:(()=>{return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({dr:CE.dt(dp, false, this.dr)})), _resolve)
}))}),dv:new CN(),dw:true,dx:15,dy:ds,eb:_h("div", {"onClick":(event => ((()=>{return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({dr:CE.dt(dp, true, this.dr)})), _resolve)
}))}))(_normalizeEvent(event))),"tabIndex":`0`,className:`h`,style:_style([this.$h(false)])}, [this.cz(dz, ea, dn)]),ee:_h(CO, {}, _array(_h(CP, {ed:ec})))})})()} else if(dk instanceof CR){const ef = dk._0.iconBefore;const eg = dk._0.iconAfter;const eh = dk._0.label;const ei = dk._0.action;return _h("div", {"onClick":(event => (ei)(_normalizeEvent(event))),className:`h`,style:_style([this.$h(false)])}, [this.cz(ef, eg, eh)])} else if(dk instanceof CA){const ej = dk._0.iconBefore;const ek = dk._0.iconAfter;const el = dk._0.label;const en = dk._0.href;const em = dk._0.target;return _h("a", {"target":em,"href":en,className:`h`,style:_style([this.$h(AQ.eo(en))])}, [this.cz(ej, ek, el)])}})());_i++};return _0})())))])}};;class CP extends _C{constructor(props){super(props);this._d({es:[null,new CS()],ed:[null,[]]})}$l(){const _={[`--c-a`]:CF.cm(this.es)};return _}render(){return _h("div", {className:`l`,style:_style([this.$l()])}, [(()=>{const _0 = [];const _1 = this.ed;let _i = 0;for(let et of _1){_0.push(_h(CT, {eu:et}));_i++};return _0})()])}};;class BW extends _C{constructor(props){super(props);this._d({ez:[null,false],fa:[null,null],fb:[null,null],bu:[null,null],cd:[null,null],bs:[null,null],ey:[null,true],ev:[null,`100vw`]})}$m(){const _={[`--d-a`]:this.ev,[`--d-b`]:this.ew};(this.ex ? Object.assign(_, {[`--d-c`]:`0.5em 1em 0`}) : (this.ey ? Object.assign(_, {[`--d-d`]:`clamp(20em, 100%, 100em)`,[`--d-e`]:`auto`,[`--d-f`]:`auto`}) : null));return _}$o(){const _={};(this.ez ? Object.assign(_, {[`--e-a`]:`start`}) : null);return _}get ew(){return ((..._) => CL.fc(` `, ..._))(AR.q(((..._) => AR.bg(((fd)=>{return (()=>{const [fe,ff] = fd;return (CG.da(fe) ? new AU(ff) : new AT())})()}), ..._))([[this.fa, `min-content`], [this.bs, `min-content`], [this.fb, `min-content`], [this.bu, `1fr`], [this.cd, `min-content`]])))}get ex(){return CU.fg;}componentWillUnmount(){CU._unsubscribe(this)}componentDidMount(){CU._subscribe(this)}render(){return _h("div", {className:`m`,style:_style([this.$m()])}, [(CG.da(this.fa) ? _h("div", {}, [this.fa]) : null),(CG.da(this.bs) ? _h("div", {}, [this.bs]) : null),(CG.da(this.fb) ? _h("div", {className:`n`}, [this.fb]) : null),(CG.da(this.bu) ? _h("div", {className:`o`,style:_style([this.$o()])}, [this.bu]) : null),(CG.da(this.cd) ? _h("div", {}, [this.cd]) : null)])}};;class CV extends _C{constructor(props){super(props);this._d({gd:[null,new CX()],fl:[null,true],gj:[null,CG.gm()],gk:[null,CG.gm()],fu:[null,0],fk:[null,false],fh:[null,0]},{ga:(()=>{return AW.gl(`div`)})});this.state = new Record({fi:0,fj:0})}$p(){const _={[`--f-a`]:this.fh,[`--f-b`]:this.fi + `px`,[`--f-c`]:this.fj + `px`};(this.fk ? Object.assign(_, {[`--f-d`]:`none`}) : null);return _}get gb(){return (this._panel ? new AU(this._panel) : new AT);}get fi(){return this.state.fi;}get fj(){return this.state.fj;}componentWillUnmount(){BC._unsubscribe(this)}componentDidUpdate(){if (this.fl) {
  BC._subscribe(this, new U({frames:this.fm}))
} else {
  BC._unsubscribe(this)
}}componentDidMount(){if (this.fl) {
  BC._subscribe(this, new U({frames:this.fm}))
} else {
  BC._unsubscribe(this)
}}fn(fr,ft,fo){let fp = (()=>{let fs = fr;if(fs instanceof CW){return ft.bottom + this.fu} else if(fs instanceof CN){return ft.bottom + this.fu} else if(fs instanceof CX){return ft.bottom + this.fu} else if(fs instanceof CY){return ft.top - fo.height - this.fu} else if(fs instanceof CZ){return ft.top - fo.height - this.fu} else if(fs instanceof DA){return ft.top - fo.height - this.fu} else if(fs instanceof DB){return ft.top + (ft.height / 2) - (fo.height / 2)} else if(fs instanceof DC){return ft.bottom - fo.height} else if(fs instanceof DD){return ft.top} else if(fs instanceof DE){return ft.top + (ft.height / 2) - (fo.height / 2)} else if(fs instanceof DF){return ft.bottom - fo.height} else if(fs instanceof DG){return ft.top}})();let fq = (()=>{let fv = fr;if(fv instanceof CW){return ft.left + (ft.width / 2) - (fo.width / 2)} else if(fv instanceof CN){return ft.right - fo.width} else if(fv instanceof CX){return ft.left} else if(fv instanceof CY){return ft.left + (ft.width / 2) - (fo.width / 2)} else if(fv instanceof CZ){return ft.right - fo.width} else if(fv instanceof DA){return ft.left} else if(fv instanceof DB){return ft.right + this.fu} else if(fv instanceof DC){return ft.right + this.fu} else if(fv instanceof DD){return ft.right + this.fu} else if(fv instanceof DE){return ft.left - fo.width - this.fu} else if(fv instanceof DF){return ft.left - fo.width - this.fu} else if(fv instanceof DG){return ft.left - fo.width - this.fu}})();return _u(fo, {bottom:fp + fo.height,right:fq + fo.width,left:fq,top:fp,x:fq,y:fp})}fm(gi){let fy = AW.fx((this.base));let gc = AW.fx(((..._) => AS.fz(this.ga, ..._))(this.gb));let ge = this.fn(this.gd, fy, gc);let fw = (CU.gf(ge) ? ge : (()=>{let gh = this.fn(DH.gg(this.gd), fy, gc);return (CU.gf(gh) ? gh : ge)})());return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({fi:fw.left,fj:fw.top})), _resolve)
}))}render(){return [this.gj, _h(BF, {}, _array(_h("div", {className:`p`,style:_style([this.$p()]),ref:(element) => { this._panel = element }}, [this.gk])))]}};;class DI extends _C{constructor(props){super(props);this._d({gn:[null,new CS()],gp:[null,false],gq:["children",[]],go:[null,``]})}$q(){const _={[`--g-a`]:CF.cm(this.gn),[`--g-b`]:this.go};(this.gp ? Object.assign(_, {[`--g-c`]:`grid`}) : null);return _}get gr(){return CU.fg;}componentWillUnmount(){CU._unsubscribe(this)}componentDidMount(){CU._subscribe(this)}render(){return _h("div", {className:`q`,style:_style([this.$q()])}, [this.gq])}};;class CH extends _C{constructor(props){super(props);this._d({gy:[null,AX.gz],dg:[null,new CS()],dh:[null,false],gu:[null,false],gs:[null,1],dc:[null,null],gw:[null,``]})}$r(){const _={[`--h-a`]:CF.cm(this.dg),[`--i-a`]:this.gs};(this.gt ? Object.assign(_, {[`--j-a`]:`var(--primary-color)`}) : null);(this.gu ? Object.assign(_, {[`--h-b`]:`not-allowed`,[`--h-c`]:`0.5`}) : null);(this.gt ? Object.assign(_, {[`--i-b`]:`auto`,[`--i-c`]:`pointer`}) : Object.assign(_, {[`--i-b`]:`none`,[`--i-c`]:`auto`}));(this.gu ? Object.assign(_, {[`--i-b`]:`none`}) : null);return _}get gt(){return (this.dh || CL.gv(this.gw)) && !this.gu}render(){return (()=>{return (CL.gv(this.gw) ? _h("a", {"href":this.gw,className:`r s`,style:_style([this.$r()])}, [this.dc]) : (this.gt ? _h("button", {"onClick":(event => (CU.gx(this.gu, this.gy))(_normalizeEvent(event))),className:`r t`,style:_style([this.$r()])}, [this.dc]) : _h("div", {"onClick":(event => (CU.gx(this.gu, this.gy))(_normalizeEvent(event))),className:`r`,style:_style([this.$r()])}, [this.dc])))})()}};;class BY extends _C{constructor(props){super(props);this._d({bn:[null,new BZ(1.25)],bo:[null,null],bp:[null,``],hc:[null,``]})}$u(){const _={[`--k-a`]:CF.cm(this.bn)};return _}render(){return (()=>{let ha = _h(React.Fragment, {}, [(CG.da(this.bo) ? _h(CH, {dc:this.bo}) : null),_h("div", {className:`v`}, [this.bp])]);return (CL.hb(this.hc) ? _h("div", {"href":this.hc,className:`u`,style:_style([this.$u()])}, [ha]) : _h("a", {"href":this.hc,className:`u w`,style:_style([this.$u()])}, [ha]))})()}};;class CT extends _C{constructor(props){super(props);this._d({hd:[null,new CS()],eu:[null,null]})}$x(){const _={[`--l-a`]:CF.cm(this.hd)};return _}$y(he){const _={};(he ? Object.assign(_, {[`--o-a`]:`var(--primary-color)`}) : null);return _}$aa(){const _={[`--m-a`]:CF.cm(this.hd)};return _}$ab(){const _={[`--n-a`]:CF.cm(this.hd)};return _}componentWillUnmount(){AV._unsubscribe(this)}componentDidUpdate(){if (true) {
  AV._subscribe(this, new L({changes:((hf)=>{return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({})), _resolve)
  }))})}))
} else {
  AV._unsubscribe(this)
}}componentDidMount(){if (true) {
  AV._subscribe(this, new L({changes:((hf)=>{return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({})), _resolve)
  }))})}))
} else {
  AV._unsubscribe(this)
}}hg(hh,hj,hi){return _h(React.Fragment, {}, [(CG.da(hh) ? _h(CH, {dc:hh}) : null),hi,(CG.da(hj) ? _h(CH, {dc:hj}) : null)])}render(){return (()=>{let hk = this.eu;if(hk instanceof CQ){const hl = hk._0.iconBefore;const hm = hk._0.iconAfter;const hn = hk._0.label;const ho = hk._0.items;return _h("div", {className:`ab`,style:_style([this.$ab()])}, [_h("strong", {className:`z x`,style:_style([this.$x()])}, [this.hg(hl, hm, hn)]),_h(CP, {ed:ho})])} else if(hk instanceof CA){const hp = hk._0.iconBefore;const hq = hk._0.iconAfter;const hr = hk._0.label;const ht = hk._0.href;const hs = hk._0.target;return _h("a", {"target":hs,"href":ht,className:`x y`,style:_style([this.$x(), this.$y(AQ.eo(ht))])}, [this.hg(hp, hq, hr)])} else if(hk instanceof CR){const hu = hk._0.iconBefore;const hv = hk._0.iconAfter;const hw = hk._0.label;const hx = hk._0.action;return _h("div", {"onClick":(event => (hx)(_normalizeEvent(event))),className:`x y`,style:_style([this.$x(), this.$y(false)])}, [this.hg(hu, hv, hw)])} else if(hk instanceof CJ){return _h("div", {className:`aa`,style:_style([this.$aa()])})} else if(hk instanceof CK){const hy = hk._0;return hy}})()}};;class CO extends _C{constructor(props){super(props);this._d({ia:[null,new CS()],ic:["children",[]],hz:[null,`auto`],ib:[null,null]})}$ac(){const _={[`--p-a`]:this.hz,[`--p-b`]:CF.cm(this.ia)};return _}get id(){return (this._base ? new AU(this._base) : new AT);}get ie(){return CU.fg;}componentWillUnmount(){CU._unsubscribe(this)}componentDidMount(){CU._subscribe(this)}render(){return _h("div", {className:`ac`,style:_style([this.$ac()]),ref:(element) => { this._base = element }}, [(CG.da(this.ib) ? _h("div", {className:`ad`}, [this.ib]) : null),_h("div", {className:`ae`}, [this.ic])])}};;class $B extends _C{constructor(props){super(props);this.state = new Record({iq:((kz)=>{return null}),is:new AT(),ig:new CS(),iu:[],ih:false})}$af(){const _={[`--q-a`]:CF.cm(this.ig)};(this.ih ? Object.assign(_, {[`--q-b`]:`visibility 1ms, opacity 320ms`,[`--q-c`]:`visibilie`,[`--q-d`]:`1`}) : Object.assign(_, {[`--q-b`]:`visibility 320ms 1ms, opacity 320ms`,[`--q-c`]:`hidden`,[`--q-d`]:`0`}));return _}$ag(ii){const _={};(ii ? Object.assign(_, {[`--r-a`]:`var(--content-faded-color)`,[`--r-b`]:`var(--content-faded-text)`,[`--r-c`]:`bold`}) : Object.assign(_, {[`--r-d`]:`pointer`}));return _}$ah(ij){const _={};(!ij ? Object.assign(_, {[`--s-a`]:`var(--primary-color)`}) : null);return _}$aj(){const _={};(this.ih ? Object.assign(_, {[`--t-a`]:`translateY(0)`,[`--t-b`]:`1`}) : Object.assign(_, {[`--t-a`]:`translateY(100%)`,[`--t-b`]:`0`}));return _}$ak(){const _={};(this.ik ? Object.assign(_, {[`--u-a`]:`block`}) : Object.assign(_, {[`--u-a`]:`inline-block`,[`--u-b`]:`300px`}));return _}get jd(){return (this._container ? new AU(this._container) : new AT);}get jh(){return (this._scrollContainer ? new AU(this._scrollContainer) : new AT);}get ky(){return (this._base ? new AU(this._base) : new AT);}get iq(){return this.state.iq;}get is(){return this.state.is;}get ig(){return this.state.ig;}get iu(){return this.state.iu;}get ih(){return this.state.ih;}get ik(){return CU.fg;}componentWillUnmount(){CU._unsubscribe(this);AV._unsubscribe(this);BA._unsubscribe(this)}componentDidUpdate(){if (true) {
  AV._subscribe(this, new L({changes:this.il}))
} else {
  AV._unsubscribe(this)
};if (true) {
  BA._subscribe(this, new S({shortcuts:[new R({shortcut:[AZ.im],condition:(()=>{return true}),bypassFocused:true,action:this.io})]}))
} else {
  BA._unsubscribe(this)
}}componentDidMount(){CU._subscribe(this);if (true) {
  AV._subscribe(this, new L({changes:this.il}))
} else {
  AV._unsubscribe(this)
};if (true) {
  BA._subscribe(this, new S({shortcuts:[new R({shortcut:[AZ.im],condition:(()=>{return true}),bypassFocused:true,action:this.io})]}))
} else {
  BA._unsubscribe(this)
}}io(){return (!this.ih ? new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({})), _resolve)
})) : (async()=>{let _ = null;try{await new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({ih:false})), _resolve)
}));await DJ.ip(320, ``);await this.iq(null);await AW.ir(this.is);_ = await new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({iq:((it)=>{return null}),is:new AT(),ig:new CS(),iu:[]})), _resolve)
}))}catch(_error){if(!(_error instanceof DoError)){console.warn(`Unhandled error in sequence expression:`);console.warn(_error)}};return _})())}iv(jc,iw){return (AR.f(iw) ? new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({})), _resolve)
})) : (()=>{const [iy,iz,ja] = AX.ix();new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({is:AW.jb(),iq:iy,iu:iw,ig:jc})), _resolve)
}));(async()=>{let _ = null;try{await DJ.ip(10, ``);await new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({ih:true})), _resolve)
}));await DJ.ip(100, ``);await (()=>{let je = this.jd;if(je instanceof AU){const jg = je._0;return AW.jf(jg)} else if(je instanceof AT){return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({})), _resolve)
}))}})();_ = await (()=>{let ji = this.jh;if(ji instanceof AU){const jk = ji._0;return AW.jj(jk, 0, 0)} else if(ji instanceof AT){return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({})), _resolve)
}))}})()}catch(_error){if(!(_error instanceof DoError)){console.warn(`Unhandled error in sequence expression:`);console.warn(_error)}};return _})();return ja})())}cu(jl){return this.iv(new CS(), jl)}il(jm){return this.io()}jn(jp){return (AW.jo(this.jd, jp.target) ? new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({})), _resolve)
})) : this.io())}jq(jr,js){return (async()=>{let _ = null;try{await jr(js);_ = await this.io()}catch(_error){if(!(_error instanceof DoError)){console.warn(`Unhandled error in sequence expression:`);console.warn(_error)}};return _})()}jt(ju,jv){return (CL.gv(ju) && !jv.ctrlKey ? (async()=>{let _ = null;try{await DJ.ip(10, ``);_ = await this.io()}catch(_error){if(!(_error instanceof DoError)){console.warn(`Unhandled error in sequence expression:`);console.warn(_error)}};return _})() : new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({})), _resolve)
})))}jw(jz,jx,jy,kb,kd,ke,kc){return (()=>{let ka = _h(React.Fragment, {}, [(CG.da(jx) ? _h(CH, {dc:jx}) : null),jy,(CG.da(jz) ? _h(CH, {dc:jz}) : null)]);return (kb ? _h("div", {"onClick":(event => (kc)(_normalizeEvent(event))),className:`ag ah`,style:_style([this.$ag(kb), this.$ah(kb)])}, [ka]) : (CL.gv(kd) ? _h("a", {"onClick":(event => (kc)(_normalizeEvent(event))),"target":ke,"href":kd,className:`ag ah`,style:_style([this.$ag(kb), this.$ah(kb)])}, [ka]) : _h("button", {"onClick":(event => (kc)(_normalizeEvent(event))),className:`ap ag ah`,style:_style([this.$ag(kb), this.$ah(kb)])}, [_h("div", {className:`ag`,style:_style([this.$ag(kb)])}, [ka])])))})()}kf(kg){return (()=>{let kh = kg;if(kh instanceof CK){const ki = kh._0;return _h("div", {className:`ao`}, [ki])} else if(kh instanceof CJ){return _h("div", {className:`ai`})} else if(kh instanceof CR){const kj = kh._0.iconAfter;const kk = kh._0.iconBefore;const kl = kh._0.label;const km = kh._0.action;return this.jw(kj, kk, kl, false, ``, ``, ((..._) => this.jq(km, ..._)))} else if(kh instanceof CA){const kn = kh._0.iconAfter;const ko = kh._0.iconBefore;const kp = kh._0.label;const kq = kh._0.href;const kr = kh._0.target;return this.jw(kn, ko, kp, false, kq, kr, ((..._) => this.jt(kq, ..._)))} else if(kh instanceof CQ){const ks = kh._0.iconAfter;const kt = kh._0.iconBefore;const ku = kh._0.label;const kw = kh._0.items;return _h(React.Fragment, {}, [this.jw(ks, kt, ku, true, ``, ``, AX.gz),_h("div", {className:`al`}, [_h("div", {className:`am`}),_h("div", {className:`an`}, [(()=>{const _0 = [];const _1 = kw;let _i = 0;for(let kv of _1){_0.push(this.kf(kv));_i++};return _0})()])])])}})()}render(){return _h(DK, {}, _array(_h("div", {"onClick":(event => (this.jn)(_normalizeEvent(event))),className:`af`,style:_style([this.$af()]),ref:(element) => { this._base = element }}, [_h("div", {className:`aj`,style:_style([this.$aj()]),ref:(element) => { this._scrollContainer = element }}, [_h("div", {className:`ak`,style:_style([this.$ak()]),ref:(element) => { this._container = element }}, [(()=>{const _0 = [];const _1 = this.iu;let _i = 0;for(let kx of _1){_0.push(this.kf(kx));_i++};return _0})()])])])))}_persist(){B=this}};;let B;class DL extends _C{constructor(props){super(props);this._d({lg:[null,AX.t],lc:[null,240],le:[null,true],lh:["children",[]],ld:[null,`0`],la:[null,900],lb:[null,false]})}$aq(){const _={[`--v-a`]:this.la};(this.lb ? Object.assign(_, {[`--v-b`]:`opacity ` + this.lc + `ms 0ms ease,
                  visibility 1ms 0ms ease`,[`--v-c`]:`auto`,[`--v-d`]:`visible`,[`--v-e`]:`1`}) : Object.assign(_, {[`--v-b`]:`visibility 1ms ` + this.lc + `ms ease,
                  opacity ` + this.lc + `ms 0ms ease`,[`--v-c`]:`none`,[`--v-d`]:`hidden`,[`--v-e`]:`0`}));return _}$ar(){const _={[`--w-a`]:`transform ` + this.lc + `ms ease`,[`--w-b`]:this.ld};(this.lb ? Object.assign(_, {[`--w-c`]:`translateX(0)`}) : Object.assign(_, {[`--w-c`]:`translateX(3em)`}));return _}get lf(){return (this._drawer ? new AU(this._drawer) : new AT);}componentWillUnmount(){AY._unsubscribe(this)}componentDidUpdate(){if (this.lb && this.le) {
  AY._subscribe(this, new M({elements:[this.lf],clicks:this.lg}))
} else {
  AY._unsubscribe(this)
}}componentDidMount(){if (this.lb && this.le) {
  AY._subscribe(this, new M({elements:[this.lf],clicks:this.lg}))
} else {
  AY._unsubscribe(this)
}}render(){return _h(BF, {}, _array(_h(DK, {}, _array(_h("div", {className:`aq`,style:_style([this.$aq()])}, [_h("div", {className:`ar`,style:_style([this.$ar()]),ref:(element) => { this._drawer = element }}, [this.lh])])))))}};;class CI extends _C{constructor(props){super(props);this._d({ll:[null,`horizontal`],lj:[null,`stretch`],lk:[null,`center`],li:[null,new CS()],eq:[null,new BZ(0.5)],lo:["children",[]]})}$as(){const _={[`--x-a`]:CF.cm(this.li),[`--x-b`]:this.lj,[`--x-c`]:this.lk};(_compare(this.ll, `horizontal`) ? Object.assign(_, {[`--x-d`]:`row`}) : Object.assign(_, {[`--x-d`]:`column`}));return _}$at(){const _={[`--y-a`]:CF.cm(this.eq),[`--y-b`]:CF.cm(this.eq)};return _}render(){return _h("div", {className:`as`,style:_style([this.$as()])}, [((..._) => AR.lm(_h("div", {className:`at`,style:_style([this.$at()])}), ..._))(CG.ln(this.lo))])}};;class CB extends _C{constructor(props){super(props);this._d({cc:[null,[]],lr:[null,`initial`],lp:[null,new CS()],bv:[null,null]})}$au(){const _={[`--z-a`]:CF.cm(this.lp)};(this.lq ? Object.assign(_, {[`--z-b`]:`1fr`,[`--z-c`]:`1em`,[`--z-d`]:`1em 0`,[`--z-e`]:`1em`}) : null);return _}$aw(){const _={[`--aa-a`]:this.lr};(this.lq ? Object.assign(_, {[`--aa-b`]:`0`}) : Object.assign(_, {[`--aa-b`]:`1em`}));return _}get lq(){return CU.fg;}componentWillUnmount(){CU._unsubscribe(this)}componentDidMount(){CU._subscribe(this)}render(){return _h("div", {className:`au`,style:_style([this.$au()])}, [_h("div", {className:`av`}, [this.bv]),_h("div", {className:`aw`,style:_style([this.$aw()])}, [(()=>{const _0 = [];const _1 = this.cc;let _i = 0;for(let ls of _1){_0.push(_h("div", {className:`ax`}, [_h("strong", {}, [ls[0]]),_h(CP, {ed:ls[1]})]));_i++};return _0})()])])}};;class $C extends _C{constructor(props){super(props);this.state = new Record({lx:((mk)=>{return null}),ma:((ml)=>{return null}),ly:new AT(),lw:240,mc:null,mg:900,lv:false})}get mj(){return (this._base ? new AU(this._base) : new AT);}get lx(){return this.state.lx;}get ma(){return this.state.ma;}get ly(){return this.state.ly;}get lw(){return this.state.lw;}get mc(){return this.state.mc;}get mg(){return this.state.mg;}get lv(){return this.state.lv;}componentWillUnmount(){BA._unsubscribe(this)}componentDidUpdate(){if (true) {
  BA._subscribe(this, new S({shortcuts:[new R({condition:(()=>{return true}),bypassFocused:true,shortcut:[27],action:this.lt})]}))
} else {
  BA._unsubscribe(this)
}}componentDidMount(){if (true) {
  BA._subscribe(this, new S({shortcuts:[new R({condition:(()=>{return true}),bypassFocused:true,shortcut:[27],action:this.lt})]}))
} else {
  BA._unsubscribe(this)
}}lu(){return (async()=>{let _ = null;try{await new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({lv:false})), _resolve)
}));await DJ.ip(this.lw, ``);await this.lx((null));await AW.ir(this.ly);_ = await new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({lx:((lz)=>{return null}),ma:((mb)=>{return null}),ly:new AT(),mc:null})), _resolve)
}))}catch(_error){if(!(_error instanceof DoError)){console.warn(`Unhandled error in sequence expression:`);console.warn(_error)}};return _})()}lt(){return (async()=>{let _ = null;try{await new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({lv:false})), _resolve)
}));await DJ.ip(this.lw, ``);await this.ma(null);await AW.ir(this.ly);_ = await new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({lx:((md)=>{return null}),ma:((me)=>{return null}),ly:new AT(),mc:null})), _resolve)
}))}catch(_error){if(!(_error instanceof DoError)){console.warn(`Unhandled error in sequence expression:`);console.warn(_error)}};return _})()}render(){return _h(DM, {mf:this.lu,mh:this.mg,mi:this.lv,ref:(instance) => { this._base = instance }}, _array(this.mc))}_persist(){C=this}};;let C;class DM extends _C{constructor(props){super(props);this._d({mf:[null,AX.t],mm:[null,240],mn:[null,true],mp:["children",[]],mh:[null,900],mi:[null,false]})}$ay(){const _={[`--ab-a`]:this.mh};(this.mi ? Object.assign(_, {[`--ab-b`]:`opacity ` + this.mm + `ms 0ms ease,
                  visibility 1ms 0ms ease`,[`--ab-c`]:`auto`,[`--ab-d`]:`visible`,[`--ab-e`]:`1`}) : Object.assign(_, {[`--ab-b`]:`visibility 1ms ` + this.mm + `ms ease,
                  opacity ` + this.mm + `ms 0ms ease`,[`--ab-c`]:`none`,[`--ab-d`]:`hidden`,[`--ab-e`]:`0`}));return _}$az(){const _={[`--ac-a`]:`transform ` + this.mm + `ms ease`};(this.mi ? Object.assign(_, {[`--ac-b`]:`translateY(0)`}) : Object.assign(_, {[`--ac-b`]:`translateY(-3em)`}));return _}get mo(){return (this._wrapper ? new AU(this._wrapper) : new AT);}componentWillUnmount(){AY._unsubscribe(this)}componentDidUpdate(){if (this.mi && this.mn) {
  AY._subscribe(this, new M({elements:[this.mo],clicks:this.mf}))
} else {
  AY._unsubscribe(this)
}}componentDidMount(){if (this.mi && this.mn) {
  AY._subscribe(this, new M({elements:[this.mo],clicks:this.mf}))
} else {
  AY._unsubscribe(this)
}}render(){return _h(DK, {}, _array(_h("div", {className:`ay`,style:_style([this.$ay()])}, [_h("div", {className:`az`,style:_style([this.$az()]),ref:(element) => { this._wrapper = element }}, [this.mp])])))}};;class CM extends _C{constructor(props){super(props);this._d({na:[null,AX.gz],du:[null,AX.t],dv:[null,new CX()],dw:[null,false],mq:[null,false],eb:[null,null],ee:[null,null],dx:[null,5],mz:[null,1],dy:[null,false]});this.state = new Record({mr:0})}$ba(){const _={};(this.mq ? Object.assign(_, {[`--ad-a`]:this.mr + `px`}) : null);(this.dy ? Object.assign(_, {[`--ad-b`]:`transform 150ms 0ms ease,
                  visibility 1ms 0ms ease,
                  opacity 150ms 0ms ease`,[`--ad-c`]:`translateY(0)`,[`--ad-d`]:`1`}) : Object.assign(_, {[`--ad-b`]:`visibility 1ms 150ms ease,
                  transform 150ms 0ms ease,
                  opacity 150ms 0ms ease`,[`--ad-c`]:`translateY(20px)`,[`--ad-e`]:`hidden`,[`--ad-d`]:`0`}));return _}get mu(){return (this._panel ? new AU(this._panel) : new AT);}get mv(){return (this._stickyPanel ? new AU(this._stickyPanel) : new AT);}get mr(){return this.state.mr;}get mt(){return CU.fg;}componentWillUnmount(){CU._unsubscribe(this);BC._unsubscribe(this);AY._unsubscribe(this)}componentDidUpdate(){if (this.dy && this.mq) {
  BC._subscribe(this, new U({frames:this.ms}))
} else {
  BC._unsubscribe(this)
};if (this.dw && this.dy && !this.mt) {
  AY._subscribe(this, new M({elements:[this.mu],clicks:this.du}))
} else {
  AY._unsubscribe(this)
}}componentDidMount(){CU._subscribe(this);if (this.dy && this.mq) {
  BC._subscribe(this, new U({frames:this.ms}))
} else {
  BC._unsubscribe(this)
};if (this.dw && this.dy && !this.mt) {
  AY._subscribe(this, new M({elements:[this.mu],clicks:this.du}))
} else {
  AY._unsubscribe(this)
}}ms(my){return (()=>{let mw = this.mv;if(mw instanceof AU){const mx = mw._0;return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({mr:AW.fx((mx.base)).width})), _resolve)
}))} else if(mw instanceof AT){return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({})), _resolve)
}))}})()}render(){return (this.mt ? _h(React.Fragment, {}, [this.eb,_h(DM, {mn:this.dw,mf:this.du,mi:this.dy}, _array(this.ee))]) : _h(CV, {fl:this.dy,fk:!this.dy,gd:this.dv,gj:this.eb,fu:this.dx,fh:this.mz,gk:_h("div", {"onClick":(event => (this.na)(_normalizeEvent(event))),className:`ba`,style:_style([this.$ba()]),ref:(element) => { this._panel = element }}, [this.ee]),ref:(instance) => { this._stickyPanel = instance }}))}};;class $D extends _C{constructor(props){super(props);this.state = new Record({nf:((nq)=>{return null}),ni:((nr)=>{return null}),ng:new AT(),ne:240,nn:`0`,nk:null,no:900,nd:false})}get np(){return (this._base ? new AU(this._base) : new AT);}get nf(){return this.state.nf;}get ni(){return this.state.ni;}get ng(){return this.state.ng;}get ne(){return this.state.ne;}get nn(){return this.state.nn;}get nk(){return this.state.nk;}get no(){return this.state.no;}get nd(){return this.state.nd;}componentWillUnmount(){BA._unsubscribe(this)}componentDidUpdate(){if (true) {
  BA._subscribe(this, new S({shortcuts:[new R({condition:(()=>{return true}),bypassFocused:true,shortcut:[27],action:this.nb})]}))
} else {
  BA._unsubscribe(this)
}}componentDidMount(){if (true) {
  BA._subscribe(this, new S({shortcuts:[new R({condition:(()=>{return true}),bypassFocused:true,shortcut:[27],action:this.nb})]}))
} else {
  BA._unsubscribe(this)
}}nc(){return (async()=>{let _ = null;try{await new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({nd:false})), _resolve)
}));await DJ.ip(this.ne, ``);await this.nf((null));await AW.ir(this.ng);_ = await new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({nf:((nh)=>{return null}),ni:((nj)=>{return null}),ng:new AT(),nk:null})), _resolve)
}))}catch(_error){if(!(_error instanceof DoError)){console.warn(`Unhandled error in sequence expression:`);console.warn(_error)}};return _})()}nb(){return (async()=>{let _ = null;try{await new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({nd:false})), _resolve)
}));await DJ.ip(this.ne, ``);await this.ni(null);await AW.ir(this.ng);_ = await new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({nf:((nl)=>{return null}),ni:((nm)=>{return null}),ng:new AT(),nk:null})), _resolve)
}))}catch(_error){if(!(_error instanceof DoError)){console.warn(`Unhandled error in sequence expression:`);console.warn(_error)}};return _})()}render(){return _h(DL, {lc:this.ne,ld:this.nn,lg:this.nc,la:this.no,lb:this.nd,ref:(instance) => { this._base = instance }}, _array(this.nk))}_persist(){D=this}};;let D;class BV extends _C{constructor(props){super(props);this._d({nt:[null,new CS()],ns:[null,false],nv:["children",[]],bm:[null,null],nu:[null,null]})}$bb(){const _={};(this.ns ? Object.assign(_, {[`--af-a`]:`grid`}) : null);return _}$be(){const _={[`--ae-a`]:CF.cm(this.nt)};(CG.da(this.nu) ? Object.assign(_, {[`--ae-b`]:`auto 1fr`}) : null);return _}render(){return (()=>{return _h("div", {className:`be`,style:_style([this.$be()])}, [(CG.da(this.nu) ? _h("div", {className:`bd`}, [this.nu]) : null),_h("div", {className:`bb`,style:_style([this.$bb()])}, [(CG.da(this.bm) ? _h("div", {className:`bc`}, [this.bm]) : null),_h(DI, {gp:this.ns}, _array(this.nv))])])})()}};;class DK extends _C{constructor(props){super(props);this._d({oi:["children",[]]})}get nx(){return (this._base ? new AU(this._base) : new AT);}nw(nz){return (()=>{let ny = this.nx;if(ny instanceof AU){const oc = ny._0;return (_compare(nz.keyCode, 9) ? (()=>{let oa = new AU(nz.target);let od = AW.ob(oc);let of = AR.oe(od);let oh = AR.og(od);return (nz.shiftKey && _compare(of, oa) ? (()=>{AZ.ag(nz);return AW.ir(oh)})() : (!nz.shiftKey && _compare(oh, oa) ? (()=>{AZ.ag(nz);return AW.ir(of)})() : new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({})), _resolve)
}))))})() : new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({})), _resolve)
})))} else{return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({})), _resolve)
}))}})()}render(){return _h("div", {"onKeyDown":(event => (this.nw)(_normalizeEvent(event))),ref:(element) => { this._base = element }}, [this.oi])}};;class CD extends _C{constructor(props){super(props);this._d({ci:[null,null],ch:[null,0]});this.state = new Record({ok:false})}$bf(){const _={[`--ag-a`]:this.oj + `px`};(this.ok ? Object.assign(_, {[`--ag-b`]:`transform 320ms`,[`--ag-c`]:`translateX(0)`,[`--ag-d`]:`10px`}) : Object.assign(_, {[`--ag-c`]:`translateX(150%)`,[`--ag-d`]:`0`,[`--ag-b`]:`margin-bottom 320ms 200ms,
                  height 320ms 200ms,
                  transform 320ms`}));return _}$bg(){const _={[`--ah-a`]:`duration-notification linear both ` + this.ch + `ms`};return _}get oj(){return (this.ok ? ((..._) => AS.fz(0, ..._))(((..._) => AS.g(((_) => _.height), ..._))(((..._) => AS.g(AW.fx, ..._))(this.on))) : 0)}get on(){return (this._base ? new AU(this._base) : new AT);}get ok(){return this.state.ok;}componentDidMount(){return (async()=>{let _ = null;try{await DJ.om(``);await new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({ok:true})), _resolve)
}));await DJ.ip(this.ch, ``);_ = await new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({ok:false})), _resolve)
}))}catch(_error){if(!(_error instanceof DoError)){console.warn(`Unhandled error in sequence expression:`);console.warn(_error)}};return _})()}ol(){return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({ok:false})), _resolve)
}))}render(){return _h("div", {className:`bf`,style:_style([this.$bf()])}, [_h("div", {"onClick":(event => (this.ol)(_normalizeEvent(event))),className:`bg`,style:_style([this.$bg()]),ref:(element) => { this._base = element }}, [this.ci])])}};;const $b=_m(() => _h(BI, {}));const $a=_m(() => _h(BH, {}, _array($b())));const $d=_m(() => _h(BK, {}));const $c=_m(() => _h(BH, {}, _array($d())));const $f=_m(() => _h(BM, {}));const $e=_m(() => _h(BH, {}, _array($f())));const $h=_m(() => _h(BO, {}));const $g=_m(() => _h(BH, {}, _array($h())));const $j=_m(() => _h(BQ, {}));const $i=_m(() => _h(BH, {}, _array($j())));const $l=_m(() => _h(BS, {}));const $k=_m(() => _h(BH, {}, _array($l())));const $m=_m(() => _h(BH, {}, _array(`????????????URL????????????????????????????????????????????????`)));const $n=_m(() => _h(BV, {bm:`????????????`}, _array(_h("ul", {}, [_h("li", {}, [`2022/09/05: ??????????????????????????????????????????????????????????????????????????????????????????`])]))));const $o=_m(() => _h(BV, {bm:`??????????????????????????????`}, _array(_h("p", {}, [`??????: ???????????????????????????????????????????????????????????????`]), _h("p", {}, [`????????????: ???????????????`]), _h("p", {}, [`??????: 2021???8???26???`]), _h("p", {}, [`??????: ??????????????????????????????????????????`]), _h("p", {}, [`?????????: fhir0aki3 ?????????????????? gmail.com`]), _h("p", {}, [`?????????: ???????????????????????????????????????????????????????????????????????????HP?????????????????????????????????????????????????????????????????????????????????????????????????????????`]))));const $p=_m(() => _h(BV, {bm:`????????????`}, _array(_h("p", {}, [`??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`]), _h("ul", {}, [_h("li", {}, [`????????????`]),_h("li", {}, [`???????????????????????????????????????????????????`]),_h("li", {}, [`?????????????????????????????????????????????`])]), _h("p", {}, [`?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`]))));const $q=_m(() => _h(BV, {bm:`??????????????????`}, _array(`???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`, _h("b", {}, [`??????????????????`]), `????????????????????????????????????????????????????????????????????????`)));const $r=_m(() => _h(BV, {bm:``}, _array(`?????????????????????`)));const $s=_m(() => _h(BV, {bm:`????????????`}, _array(_h("p", {}, [`???????????????????????????????????????????????????????????????????????????????????????????????????????????????`,_h("br", {}),`???????????????????????????????????????????????????????????????????????????`,_h("br", {}),`?????????????????????GIS???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`]))));const $t=_m(() => _h('svg', { width: '3250.23', height: '3250.23', viewBox: '0 0 3250.23 3250.23', dangerouslySetInnerHTML: { __html: `<defs id="defs756">
  <linearGradient id="linearGradient1671" inkscape:swatch="solid">
    <stop style="stop-color:#000000;stop-opacity:0;" offset="0" id="stop1669"/>
  </linearGradient>
  <linearGradient id="linearGradient1665" inkscape:swatch="solid">
    <stop style="stop-color:#000000;stop-opacity:1;" offset="0" id="stop1663"/>
  </linearGradient>
  <linearGradient id="linearGradient1659" inkscape:swatch="solid">
    <stop style="stop-color:#0000ff;stop-opacity:0;" offset="0" id="stop1657"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient1665" id="linearGradient1661" x1="475.18042" y1="2968.3647" x2="4153.5244" y2="2968.3647" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.86972029,0,0,0.86972037,-389.06551,-954.00358)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient1671" id="linearGradient1673" x1="474.68042" y1="2968.3647" x2="4154.0244" y2="2968.3647" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.86972029,0,0,0.86972037,-389.06551,-954.00358)"/>
</defs><sodipodi:namedview id="namedview754" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" showgrid="false" inkscape:zoom="0.20526726" inkscape:cx="1934.0639" inkscape:cy="1373.8187" inkscape:window-width="1920" inkscape:window-height="1080" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" inkscape:current-layer="Layer_1"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1675.6556,2143.3619 c -24.5867,2.1894 -48.8624,6.8464 -73.5302,8.6104 -51.7091,3.6974 -103.1048,3.2072 -154.1722,-7.1271 -53.6771,-10.8623 -104.4024,-30.2167 -152.4797,-55.679 -28.1992,-14.9346 -55.4787,-31.9777 -81.0357,-51.6307 -21.5548,-16.5753 -42.6317,-33.529 -63.0969,-51.4606 -12.6052,-11.0449 -24.6978,-22.5216 -36.2721,-34.483 -17.9026,-18.5011 -34.2056,-38.4527 -50.6845,-58.2705 -15.9827,-19.2212 -30.226,-39.6524 -44.5403,-59.9429 -13.2634,-18.8013 -26.64543,-37.5761 -40.37513,-56.0046 -6.066,-8.1421 -12.8819,-16.1593 -20.0003,-23.7332 -24.2463,-25.7979 -52.1421,-47.7549 -76.4923,-73.4218 -30.7022,-32.3623 -49.9114,-69.5768 -50.2762,-115.2696 -0.2614,-32.7552 9.7964,-62.3623 25.5041,-90.5305 5.9941,-10.7491 12.994,-21.0771 14.2697,-33.9119 0.514,-5.1719 2.5195,-10.556 -2.9663,-14.0791 -5.2932,-3.3994 -10.5103,-0.9554 -15.4926,1.3793 -1.2255,0.5741 -2.4858,1.5038 -3.4298,2.2416 -11.0007,8.599 -20.9093,10.8931 -32.2413,-0.5697 -5.5618,-5.6263 -16.5825,-2.7363 -23.0414,3.2351 -12.0031,11.0972 -23.5556,22.7517 -36.2058,33.0572 -10.5769,8.6165 -22.7361,15.7277 -36.6394,16.9436 -19.4356,1.6996 -33.1419,-9.8984 -38.1469,-35.1497 -2.8811,-14.5361 1.362,-27.9408 7.0925,-40.9911 3.3983,-7.7391 6.9511,-15.2894 7.1101,-24.0577 0.1987,-10.9618 -5.4049,-17.1096 -16.339,-17.7389 -9.4561,-0.5443 -17.8277,2.8094 -26.1537,6.4529 -7.4861,3.276 -15.2472,5.264 -23.3381,6.3997 -11.1526,1.5655 -20.0497,-6.0537 -21.1014,-18.4599 -0.9344,-11.0245 0.059,-21.969 4.0472,-32.5448 2.5206,-6.6848 4.2962,-13.6492 6.444,-20.4762 2.4739,-7.8631 -0.1827,-12.9156 -7.7486,-16.3425 -22.8939,-10.3692 -24.5126,-13.1065 -23.3216,-38.8113 0.6776,-14.6258 1.4087,-29.2751 2.9642,-43.8233 0.7601,-7.108 -0.3125,-13.4699 -2.8321,-20.5655 -11.1698,0.1282 -12.9939,9.56 -15.4897,16.3934 -9.6655,26.463 -15.0499,54.0529 -18.5699,81.9421 -8.9578,70.9715 -7.9182,141.7464 5.6401,212.1155 10.199,52.9342 30.2625,102.174 58.935,147.611 11.6498,18.4616 24.5669,36.2608 38.3797,53.3943 16.6167,20.6119 32.9129,41.441 50.2226,61.5152 12.4418,14.4286 25.1352,28.6408 37.4988,43.1129 47.5337,55.6403 100.7704,105.7148 152.3934,157.3458 15.5332,15.5356 31.8819,30.3686 48.1153,45.2024 17.981,16.4306 36.2827,32.5398 54.43383,48.8006 20.8951,18.7189 42.2327,36.9969 63.6067,55.181 16.8163,14.3064 33.5375,28.8136 50.9164,42.4027 17.4587,13.6517 34.2532,28.1215 51.8822,41.5878 11.635,8.8876 22.7583,18.75 34.404,27.6793 14.6897,11.2629 29.1134,22.9144 44.0638,33.8823 10.1826,7.4704 20.0106,15.7839 30.1431,23.4417 13.187,9.9662 26.6356,19.6968 39.857,29.5882 12.0981,9.0513 24.2341,18.1388 36.4229,27.0938 15.5411,11.4179 31.3807,22.4725 47.0317,33.7115 14.2275,10.2168 28.9106,19.8748 42.74,30.68 4.0068,3.1305 8.4491,5.7032 12.6918,8.5317" id="path681" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 2401.8543,1461.0039 c -5.8941,-13.24 -15.6465,-23.9861 -23.4654,-35.9772 -10.3514,-15.8746 -21.7341,-31.0936 -32.7575,-46.4956 -8.7713,-12.2551 -17.953,-24.3571 -27.0926,-36.4145 -9.5916,-12.6537 -18.7757,-25.652 -28.0327,-38.5592 -6.6013,-9.2036 -13.9947,-18.0009 -20.9221,-27.0769 -11.8411,-15.5147 -23.6062,-31.1074 -35.6167,-46.4639 -8.4322,-10.7811 -17.2215,-21.4124 -25.6614,-32.2118 -9.3117,-11.915 -19.6194,-23.0434 -27.9819,-35.7718 -3.9799,-6.0574 -9.3357,-11.4356 -14.1891,-16.8805 -16.9262,-18.9878 -31.8559,-39.6023 -49.0109,-58.4211 -11.007,-12.0745 -21.1502,-25.0145 -31.8392,-37.448 -13.0744,-15.2079 -26.3984,-30.1729 -39.6023,-45.2544 -17.6025,-20.10502 -35.7825,-39.63812 -53.7805,-59.36792 -37.0967,-40.6675 -74.4195,-81.135 -114.264,-119.0836 -18.1059,-17.2448 -35.8505,-34.9139 -54.3774,-51.6823 -16.8266,-15.2297 -33.9593,-30.1489 -50.9553,-45.2011 -16.2604,-14.4004 -32.9679,-28.4362 -50.082,-41.8428 -36.9,-28.9068 -73.8668,-57.592 -115.7316,-79.5777 -51.4411,-27.0139 -106.2725,-40.5817 -163.4618,-47.2311 -67.1792,-7.811 -133.8511,-4.7292 -200.0883,8.0679 -17.3923,3.3603 -34.947,6.8041 -51.1073,15.0604 -2.6057,1.3313 -4.9813,2.6367 -6.8508,4.6131 -3.8531,4.0735 -2.6609,8.7291 2.7905,9.721 7.9275,1.4427 15.9632,0.9428 24.0288,0.2251 14.805,-1.3172 29.6174,-2.8266 44.5395,-2.2528 18.3998,0.7076 21.124,3.1466 27.7381,20.4723 4.2232,11.0622 8.5128,13.9957 20.2995,10.5167 12.904,-3.8086 25.1532,-9.7274 38.9221,-10.6548 3.0534,-0.2056 6.3434,-0.9821 9.1744,-0.3633 15.7364,3.4394 22.2507,5.0961 19.8405,25.313 -1.0042,8.4227 -4.4787,16.1169 -7.2168,23.9933 -1.472,4.2343 -3.1713,8.3493 -4.1429,12.7673 -4.3755,19.8956 3.4517,28.189 23.3746,24.7815 9.5963,-1.6414 18.005,-6.4237 26.8205,-10.035 17.5972,-7.2088 34.6823,-5.0538 50.8603,3.1302 15.9822,8.0846 20.185,29.2348 11.5109,47.9387 -6.2673,13.5144 -15.7298,24.5006 -25.5762,35.2906 -6.9682,7.6362 -14.2018,15.0305 -21.1694,22.6674 -6.0732,6.6567 -6.2177,14.0494 -0.7308,21.8983 9.5156,13.6122 9.2426,14.7548 0.1853,29.8103 -2.3632,3.9282 -4.6229,8.2804 -5.263,13.3071 -1.2699,9.9696 1.043,12.3961 11.4455,11.3713 13.9583,-1.375 25.6652,-8.2918 37.4543,-14.923 52.2445,-29.387 105.465,-35.9284 160.5762,-7.833 14.0891,7.1828 26.9956,15.7298 38.1502,26.9463 15.7485,15.8355 32.0639,31.141 47.2182,47.523 13.3903,14.4752 26.8371,28.8003 41.8668,41.5827 14.8904,12.6638 30.5337,24.2757 46.3834,35.74992 14.1943,10.2758 28.6699,20.2212 42.872,30.4969 13.1357,9.5038 25.6838,19.8215 39.3235,28.6817 5.5353,3.5959 10.3637,8.4986 15.469,12.7918 30.4019,25.5678 59.0186,53.2647 85.461,82.7613 46.714,52.1102 85.6372,109.9513 114.6252,173.7819 27.9871,61.6271 45.2153,126.2488 47.6335,194.3506 1.6704,47.0374 -2.3584,93.6368 -9.8247,140.0253 -0.5102,3.1693 -2.2155,6.5826 -0.1058,9.8824" id="path683" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 2790.0559,2129.2198 c -10.8295,13.0592 -24.6907,21.8568 -39.503,29.8739 -25.5023,13.8025 -48.9853,30.8722 -73.0568,47.007 -22.7883,15.2743 -44.8699,31.5136 -66.843,47.8423 -15.0236,11.1645 -29.4401,23.3264 -44.2539,34.8108 -18.8397,14.6057 -36.3261,30.8277 -55.5241,44.9911 -7.4707,5.5113 -14.1693,12.2485 -21.1141,18.4652 -34.2868,30.6898 -69.6582,60.3777 -100.3869,94.7221 -16.9203,18.9115 -34.8036,37.0672 -49.9129,57.6382 -5.2983,7.2136 -11.9366,13.4886 -17.7539,20.4246 -16.3815,19.5331 -32.1968,39.4809 -48.0843,59.4063 -13.8242,17.3376 -27.627,34.7322 -40.518,52.7 -18.2023,25.3718 -36.635,50.5994 -52.9677,77.3633 -9.9135,16.2453 -22.523,31.1757 -30.2509,48.5317 -5.7459,12.904 -15.5879,21.2354 -24.5109,30.9039" id="path685" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 2927.2346,1007.7484 c -1.5664,-9.45472 -8.5291,-15.90752 -13.6103,-23.21252 -11.9493,-17.178 -24.2952,-34.1491 -36.973,-50.7444 -12.2479,-16.033 -24.0474,-32.4294 -36.1124,-48.5806 -12.7649,-17.0887 -24.5127,-35.033 -36.6832,-52.5876 -12.9247,-18.643 -25.8566,-37.2884 -38.558,-56.0924 -16.6664,-24.6745 -32.5945,-49.8675 -47.1384,-75.7948 -18.7572,-33.439 -37.0308,-67.2645 -57.8965,-99.3186 -33.1777,-50.9675 -93.1928,-70.4144 -150.1085,-47.3535 -18.5225,7.5047 -34.3395,19.2334 -42.7604,39.2266 -8.7139,20.6888 5.2181,45.083 30.6389,47.334 16.0071,1.4171 31.1445,-3.0819 46.0281,-8.8555 4.9349,-1.9143 10.3566,-4.741 16.1853,-2.3228" id="path687" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 624.18777,2565.5047 c -1.5969,-9.6255 3.8146,-17.5519 6.3903,-26.1551 3.1827,-10.6305 5.8082,-21.296 5.6801,-32.5354 -0.1729,-15.1771 -7.0319,-26.7886 -19.964,-33.7252 -13.4113,-7.1938 -25.7586,-3.578 -38.2408,5.1961 -24.1782,16.9953 -33.3529,41.7729 -36.9975,68.876 -3.9625,29.4666 3.8125,57.211 18.8858,82.6306 11.3601,19.1576 29.7208,31.2609 48.1245,42.2484 43.8722,26.1929 89.1393,50.0901 132.5394,77.016 24.6989,15.3235 48.6712,32.0861 72.6069,48.7606 20.3118,14.1499 40.9061,28.0197 61.0376,42.4003 15.8375,11.3133 31.4028,23.1886 47.0943,34.7677 15.7671,11.6349 31.4791,23.4107 47.6623,34.5364 8.2192,5.6505 16.9215,11.1602 24.1236,18.1935 3.4466,3.3657 6.8297,3.4118 10.77393,3.3643" id="path689" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1398.4697,2553.4839 c -1.8483,-8.4905 -8.4836,-14.3059 -12.285,-21.7861 -7.4616,-14.6833 -6.5084,-29.0864 5.2661,-40.385 13.2348,-12.7001 23.915,-28.9153 40.4909,-37.0459 14.2862,-7.0075 16.959,-19.2709 20.9111,-31.6183 13.1369,-41.0425 26.1555,-82.1451 42.031,-122.2109 5.6907,-14.3619 11.1623,-29.26 22.9712,-40.5245 4.6247,-4.4116 9.4228,-7.1995 15.6575,-8.4378 36.9155,-7.3325 74.2443,-12.4055 111.0318,-20.4259 58.8337,-12.8267 116.6307,-28.925 171.0939,-55.2114 32.6383,-15.7527 63.704,-34.2141 93.4225,-55.0181 19.0618,-13.3442 37.827,-26.9701 55.9765,-41.5875 20.0874,-16.178 40.0577,-32.4576 58.4001,-50.5384 18.592,-18.3275 34.6807,-38.9161 51.2839,-59.0683 15.8764,-19.27 30.7245,-39.2632 44.749,-59.7788 15.1309,-22.1342 28.8329,-45.2569 41.3801,-69.0639 22.7951,-43.2511 39.3739,-88.7941 52.2113,-135.826 14.0283,-51.395 23.5315,-103.7519 31.4216,-156.3311 3.1919,-21.271 15.0378,-32.7037 32.8944,-41.009 33.1299,-15.4094 68.1084,-25.6696 102.5534,-37.4292 12.2744,-4.1907 24.2637,-9.5981 36.8383,-12.4268 14.6918,-3.3049 26.6491,-9.364 33.8358,-22.941 5.4935,-10.3777 15.0172,-17.0477 22.7018,-25.4028 4.2837,-4.6574 8.9029,-9.0082 13.4038,-13.4635 11.6939,-11.5754 23.9192,-12.4781 39.0219,-5.2341 7.9229,3.8004 15.1058,8.4894 22.4928,13.0086" id="path691" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 817.22797,1638.4877 c -3.2928,35.0394 6.5039,67.0268 22.6083,97.5908 11.4702,21.769 25.5063,41.6568 40.7577,61.0167 19.7378,25.0547 41.7385,47.847 64.7973,69.6003 17.4925,16.5023 35.9713,32.1198 55.13553,46.6481 23.6564,17.9337 47.4724,35.6865 71.7278,52.8717 27.3856,19.4029 55.089,38.3238 83.1033,56.7363 30.0524,19.7522 61.1542,37.9072 91.7837,56.7827 2.8653,1.7657 6.958,2.0731 7.7855,6.352" id="path693" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1634.6434,821.07218 c 43.9945,-1.7668 83.1359,12.5861 119.491,36.078 15.8697,10.2546 30.7986,21.6904 45.4525,33.6965 26.4528,21.6726 49.6443,46.6409 72.955,71.3143 16.02,16.957 30.734,35.4396 44.6248,54.49732 9.2641,12.7102 18.8888,25.3067 28.6134,37.7516 10.8038,13.8266 20.54,28.4335 30.9013,42.5817 11.2604,15.3764 20.428,32.2727 31.4472,47.8415 13.2043,18.6561 24.6057,38.4351 37.2289,57.446 11.1748,16.83 20.2476,35.0008 31.8847,51.5777 0.6351,0.9044 -0.5738,2.5409 0.7572,3.5003" id="path695" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1008.1468,2939.5642 c 4.8067,0.1851 8.1174,-2.2053 11.3871,-5.5859 11.1219,-11.4993 23.4947,-21.92 33.6501,-34.1922 15.7879,-19.0785 33.4432,-36.4976 48.4957,-56.2399 7.4444,-9.7635 16.4427,-18.4884 24.8841,-27.4135 19.4705,-20.586 38.2924,-41.7889 58.031,-62.1492 16.2292,-16.74 31.6108,-34.3862 48.4827,-50.519 31.574,-30.1911 63.2253,-60.3202 95.5424,-89.7075 14.8134,-13.4707 30.0656,-26.5704 45.4625,-39.3311 8.7047,-7.2143 15.8158,-17.0756 26.7629,-21.3516 4.6285,4.1847 2.637,8.5831 1.0726,12.3945 -13.1495,32.04 -24.4706,64.7304 -35.3965,97.5739 -0.5406,1.6254 -1.3187,3.5567 -1.752,5.0617 -7.8007,27.1028 -3.9453,34.0302 20.0715,51.8113 22.4616,16.6299 46.7494,30.6351 67.7259,49.5469 11.1683,10.069 22.5928,19.943 32.712,30.9532 24.405,26.5536 55.2076,39.0371 89.9521,44.4948 33.988,5.3389 68.1893,9.8224 101.1295,20.4149 23.5771,7.5814 45.2664,18.1805 64.5412,34.4126 24.9762,21.0337 42.9053,48.4067 66.7016,70.5341 20.8974,19.4319 44.7443,27.9624 72.4062,27.9135 15.853,-0.028 31.029,-5.1577 46.6488,-7.1606 4.9001,-0.6281 6.9376,-6.1479 10.6269,-9.0345" id="path697" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 2444.9878,1446.1546 c 12.9542,0.8755 23.8514,-5.8664 35.3005,-10.0496 57.1598,-20.8846 114.0689,-42.4572 171.2499,-63.2827 8.0415,-2.9287 16.9361,-3.9653 25.3167,-6.1129 14.0588,-3.6024 24.1012,1.8394 31.7554,12.3635 11.5686,15.9064 22.3183,32.4107 33.3499,48.7052 7.1778,10.6022 14.7849,20.9721 23.4858,30.2675 16.1774,17.2831 34.131,32.9337 48.5835,51.8008 11.5516,15.0802 18.5742,32.466 22.5957,50.8813 6.2346,28.552 9.2535,57.6951 15.5482,86.2689 5.1721,23.4775 11.8402,46.1771 22.4304,68.0064 11.5677,23.8446 29.5186,42.0576 48.881,58.6748 6.3303,5.4333 11.6778,12.2261 18.7047,16.6707 7.2437,4.5821 13.0136,10.556 18.9797,16.4372 25.7809,25.4152 35.7645,56.0478 31.3043,91.9404 -1.4039,11.2951 -6.1335,21.7613 -6.7146,33.2024 -0.2163,4.2605 -5.1225,6.05 -7.6126,9.2009" id="path699" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 2568.0244,623.08228 c -7.3269,2.5996 -6.8882,10.8855 -11.3513,15.5202 -7.1664,7.4418 -14.6604,14.5686 -21.8307,22.0068 -2.11,2.1889 -4.3797,3.9475 -5.2973,7.6548 -1.7292,6.9873 -0.822,10.6473 5.9618,11.2871 14.2417,1.3436 28.2846,-1.65 42.4154,-2.7493 7.3011,-0.5679 14.5059,-3.8371 22.2877,-0.4903 2.0889,7.8708 -4.6699,11.1444 -8.9529,15.2542 -7.7646,7.4506 -11.2013,15.7954 -7.6511,26.2603 4.9743,14.6625 21.7537,28.3349 39.6779,18.5869 11.5425,-6.2773 22.6128,-13.2331 33.8707,-19.9343 11.6592,-6.9403 24.4738,-12.0164 36.5199,-2.6116 10.215,7.9756 18.9483,17.8831 25.7673,29.366 17.2533,29.0528 31.7161,59.5874 48.0272,89.1305 22.1249,40.0726 42.9319,80.8989 69.8054,118.2226 10.2388,14.2203 19.7944,28.9715 32.7874,40.7858 14.8578,13.50992 31.2752,23.78222 52.9419,17.83382 2.033,-0.5582 4.5117,-1.2308 6.2704,-0.5414 1.6415,0.6433 4.1332,-0.5483 5.1436,2.019 1.6913,5.2085 -0.5023,8.9793 -4.2982,12.6792 -12.1727,11.8651 -23.2631,24.9967 -36.3189,35.7622 -18.5945,15.3328 -35.5512,32.5099 -54.8035,47.1103 -9.5145,7.2158 -18.0657,15.9317 -26.7136,24.1656 -21.0067,20.001 -42.5539,39.4481 -63.5794,59.4238 -20.7919,19.7541 -41.8491,39.2496 -61.765,59.8711 -17.369,17.9847 -34.4632,36.2672 -51.4629,54.5872 -15.8769,17.1096 -31.3366,34.6802 -46.7788,52.2162 -11.7008,13.2872 -22.4361,27.4146 -34.5681,40.3893 -2.3858,2.5515 -9.0188,5.8961 -3.7826,11.7897" id="path701" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 2901.7788,1011.9911 c -3.8218,6.916 -11.4865,9.4398 -17.2687,13.7414 -14.6063,10.8655 -27.7036,23.4996 -40.4042,36.069 -106.1399,105.0437 -211.5006,210.8749 -317.0841,316.4805 -2.1388,2.1391 -4.6908,3.9764 -5.6665,7.0615" id="path703" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1381.1456,2526.2602 c -3.9341,0.9393 -6.1984,4.0927 -8.8313,6.7251 -105.1321,105.1143 -210.5215,209.9741 -315.1124,315.6242 -17.3195,17.495 -35.2209,35.164 -48.0193,56.5036 -5.6569,9.4324 -5.8477,21.1592 -3.2176,32.3439 0.2536,1.0787 1.2852,2.6821 -0.6466,3.5214" id="path705" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 673.68527,2605.1026 c 7.2328,-0.3392 10.3938,-6.4686 14.7968,-10.6615 9.6555,-9.1946 20.988,-10.2714 33.9935,-2.7734 9.4367,5.4405 14.3229,18.6152 11.35,29.7081 -3.9905,14.8888 -12.9903,27.1874 -21.4791,39.429 -14.3791,20.7356 -4.3779,40.5722 12.5659,53.0184 30.1875,22.1744 64.3846,36.4447 96.5782,54.5858 32.9085,18.544 66.6766,35.6746 98.756,55.5432 26.2091,16.2328 51.8823,33.8183 72.4104,57.5716 4.1209,4.7683 7.43483,10.0675 9.52203,15.7286 1.1712,3.1767 2.028,6.0979 4.5536,8.3706" id="path707" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1551.2048,599.04068 c -4.6602,26.2836 -15.1437,50.5951 -25.5207,74.9257 -1.7762,4.1645 -3.0379,8.4023 -4.2779,12.7269 -1.7143,5.9792 0.4132,10.6769 5.1436,13.2943 7.5921,4.2009 13.9243,9.4552 19.0272,16.4115 4.3366,5.9116 10.0218,8.0289 17.6493,8.0077 23.0963,-0.064 46.1004,-2.8247 69.3406,0.929 36.2538,5.8558 70.5898,17.1204 103.8995,32.0978 27.9758,12.5794 54.7861,27.2038 80.7486,43.6214 16.9903,10.7437 34.091,21.2187 50.0995,33.4089 3.7484,2.8545 8.4454,4.4524 11.2808,8.5286" id="path709" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 838.44117,1883.1466 c -39.2001,-50.6425 -71.3082,-105.497 -95.2687,-164.8329 -18.2495,-45.1931 -29.1391,-91.9653 -22.9312,-141.3585 0.6087,-4.8437 -0.015,-9.9327 -0.6887,-14.8219 -0.7039,-5.1054 -1.6429,-9.3999 -8.197,-11.8458 -4.5939,-1.7144 -8.7457,-6.9273 -11.5889,-12.1647 -6.8385,-12.5973 -12.6716,-14.466 -26.0842,-9.2438 -26.275,10.2304 -51.9641,22.1637 -79.9003,27.5843" id="path711" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1979.0044,1657.5796 c -2.1212,-1.65 -4.5499,-3.0242 -6.3163,-4.9926 -16.1118,-17.9541 -36.1422,-30.0662 -58.0051,-39.6131 -7.8465,-3.4264 -15.4193,-7.2333 -21.3916,-13.948 -3.8202,-4.2946 -5.2593,-8.018 -3.4857,-13.604 3.0631,-9.6479 5.3656,-19.5513 12.6637,-28.1262 -49.7264,-46.8003 -102.4634,-89.5835 -161.4754,-124.364 -6.8011,8.0495 -7.7824,17.4946 -7.8217,26.659 -0.037,8.7507 3.6538,15.6847 13.1315,19.2566 21.9487,8.2716 44.7892,14.1509 65.2522,26.4787 14.9146,8.9849 29.4184,18.3336 43.0392,29.1647 11.5359,9.1729 23.6623,17.6518 33.7938,28.4359 2.2331,2.3767 5.6641,-0.3245 7.1768,2.7291" id="path713" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 2212.7032,1695.4098 c -21.2532,-6.2311 -42.6525,-11.6421 -64.6815,-14.6337 -16.9211,-2.2984 -28.6345,3.273 -31.6311,24.9154 -2.2316,16.1176 -2.7231,32.4889 -3.6851,48.7651 -0.602,10.1848 -2.4068,20.1419 -5.8183,29.6579 -5.3415,14.8997 -16.6437,24.0259 -31.0105,29.7323 -8.5481,3.3953 -16.9931,6.9238 -24.7835,11.9684 -9.868,6.3903 -14.1613,15.9129 -15.3808,26.9414 -0.6358,5.7522 -1.6585,11.3524 -2.9425,16.9607 -2.0699,9.0412 -7.0092,15.3928 -16.2944,17.6487 -9.1667,2.2272 -18.3136,4.6281 -27.5859,6.308 -16.6542,3.0177 -30.34,11.4608 -42.3474,22.7752 -10.9121,10.2824 -21.089,21.3421 -31.9312,31.7025 -14.3197,13.6832 -22.4307,30.5968 -26.7792,49.5562 -1.6745,7.3004 -2.7321,14.6953 -4.8098,21.9629 -3.0175,10.5539 -9.112,16.7616 -19.9789,18.361 -3.5623,0.5243 -7.0621,1.9169 -10.613,2.0051 -21.0707,0.5241 -32.3135,13.2812 -39.6042,31.1968 -3.8315,9.4155 -7.2995,18.9205 -14.0579,26.9373 -12.9278,15.3349 -30.8325,17.229 -48.8677,19.0121 -16.9476,1.6756 -34.0746,1.2454 -50.9094,4.2631 -23.4756,4.2084 -24.2541,16.8967 -22.0209,36.0695 2.4285,20.853 8.6228,40.7396 14.242,60.7995" id="path715" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1561.8115,1899.41 c -9.6638,-12.0208 -19.503,-23.9055 -28.9539,-36.0915 -17.9963,-23.2044 -35.306,-46.8689 -45.2782,-74.9293 -4.0936,-11.5186 -7.9689,-23.1147 -12.0518,-34.6372 -3.9687,-11.2002 -9.4619,-15.2627 -21.1971,-15.5298 -8.8007,-0.2003 -17.5152,0.2562 -25.1687,6.5248 3.5161,10.7752 10.6895,19.5103 16.7964,28.7236 12.3515,18.6343 25.1477,36.9848 38.1913,55.1428 3.8815,5.4033 8.5007,10.4895 12.9336,15.3452 8.3367,9.1317 15.919,18.9263 24.0938,28.1658 9.5273,10.7682 19.2606,21.2798 29.2977,31.5509 3.9822,4.0751 1.4331,10.2893 5.8909,15.2707 4.2351,4.7325 8.6376,9.2624 13.1563,13.766 7.5547,7.5294 14.5784,15.5885 22.0106,23.2448 13.5125,13.9197 29.9562,24.0436 46.143,34.3503 2.3007,1.4648 6.8705,5.8548 11.2073,0.3969 9.1416,-11.5045 21.2157,-10.591 33.8635,-7.2216 9.4295,2.5119 16.5248,9.0153 23.8092,14.4984 16.7698,12.6232 34.651,22.538 54.6601,28.7085" id="path717" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1773.9434,2937.4428 c -17.3126,6.2538 -35.8444,8.1033 -53.0487,14.8091 -13.6849,5.3339 -26.6772,11.2458 -37.667,21.7447 -11.0502,10.5564 -13.9356,22.4982 -12.7148,37.0016 1.05,12.4758 4.1447,24.3946 8.1228,35.9943 12.1561,35.4459 20.3562,72.07 32.4902,107.4928 4.2055,12.2771 8.3091,24.7284 14.8684,36.0239 2.1726,3.7415 -1.9828,3.1916 -2.2554,5.0276" id="path719" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1706.7683,2847.6403 c 6.0026,-33.9565 7.2344,-67.6865 -3.4666,-101.1382 -8.0007,-25.0103 -20.7258,-47.0505 -36.4888,-68.122 -17.6569,-23.6032 -41.1373,-39.4404 -64.7598,-55.5066 -6.4345,-4.3762 -12.125,-1.2238 -18.45,2.5179 -23.434,13.8622 -36.9676,33.043 -36.7047,61.0291 0.1614,17.1928 3.708,33.9147 10.2992,49.3536 9.9386,23.2792 23.2261,44.8164 42.0721,62.3885 27.6067,25.7408 58.9294,39.9792 97.6242,32.6398 3.2178,-0.6104 6.9043,-2.6237 10.228,0.2209" id="path721" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 2842.3818,1712.0268 c -5.392,0.9035 -10.7369,2.8928 -17.0968,0.9659 -0.3136,-10.7031 2.4585,-20.9192 2.4621,-31.3713 0.011,-28.3805 -11.0059,-51.6045 -29.8155,-72.214 -22.2038,-24.3286 -48.2081,-42.1196 -79.958,-51.6716 -17.0366,-5.1257 -33.9609,-7.9141 -51.668,-4.8453 -20.5477,3.5612 -33.7817,16.9534 -44.2085,33.481 -1.7586,2.7879 -4.5264,5.4373 -5.2824,8.9827" id="path723" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 3188.157,1731.1187 c -23.8702,-11.2141 -48.8031,-19.2828 -74.2025,-26.3209 -29.8853,-8.282 -59.3911,-17.9249 -89.1594,-26.6433 -15.582,-4.5632 -32.2743,-7.5004 -46.361,1.782 -12.7582,8.407 -21.7304,21.3309 -27.2808,36.2873 -6.2617,16.8732 -10.999,34.1029 -14.7729,51.6544 -0.6874,3.1975 -0.2956,6.9133 -3.4889,9.2024" id="path725" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 2604.7939,1579.0907 c 10.3308,19.5255 19.3403,40.1344 33.5935,56.9715 12.4132,14.6636 26.0113,28.5142 41.8543,40.1908 19.6315,14.4694 40.7456,25.0225 63.835,32.2935 24.3303,7.6615 49.1847,8.0012 74.2657,6.3424 2.3716,-0.1568 4.6304,-0.2783 6.3617,-2.155" id="path727" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1795.1567,1978.606 c -14.601,-0.6088 -28.1385,-8.231 -43.1562,-6.5688 -1.2425,0.1375 -2.8058,-2.6235 -4.22,-4.0378 -9.6638,-9.6637 -20.2903,-18.5631 -28.7343,-29.1956 -9.3965,-11.8317 -19.4633,-23.1286 -28.2972,-35.5283 -7.7762,-10.9147 -15.4363,-23.1763 -28.5705,-29.23 -4.5675,-2.1053 -9.4116,-4.6263 -14.9788,-2.1553 -3.2598,14.0327 5.9844,24.3836 11.877,35.0823 5.7399,10.421 13.6492,20.2149 22.4554,28.2596 17.7555,16.2194 36.7409,31.0162 58.3424,42.2065 4.6463,2.4069 7.6703,2.6838 11.4415,-0.2468" id="path729" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 2001.6318,1782.0304 c -6.0951,-5.6929 -11.412,-12.0543 -17.9179,-17.5257 -6.4277,-5.4058 -15.1283,-6.4932 -20.4271,-13.4645 -4.3971,-5.7847 -9.5736,-11.4436 -15.5517,-15.445 -7.9545,-5.3246 -13.9643,-12.5259 -21.1255,-18.5367 -10.8309,-9.0915 -22.4267,-17.2598 -33.6077,-25.8809 -9.6413,-7.4341 -19.2778,-15.9584 -24.7038,-27.3811 -1.2399,-2.6106 -5.0168,-6.2439 -1.1338,-10.5651 3.7834,-4.2099 7.4344,-2.404 11.4348,-1.3231 11.0611,2.988 20.2043,9.6916 29.63,15.6725 12.515,7.9416 22.6062,18.8514 32.4689,29.7082 13.0166,14.3289 22.7386,31.1641 33.1533,47.3952 2.0208,3.1491 1.8807,8.0099 -0.5037,11.8903" id="path731" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1819.9054,1823.7497 c 5.4184,12.0323 1.4877,19.6318 -10.6065,20.5061 -10.7907,0.7803 -11.8341,2.1019 -10.6067,13.435 1.6677,15.3979 0.02,17.8297 -14.8493,21.9202 -13.5067,3.7156 -16.5319,7.6752 -14.7599,21.9093 2.539,20.3974 11.5518,38.4332 21.8749,55.8466 3.1477,5.3096 6.663,10.2425 5.7102,17.0102 -0.5392,3.8302 2.0312,6.7185 3.9206,10.0147 4.9488,8.6335 2.7928,10.1864 -5.8622,16.5134 -5.7299,4.189 -12.4071,4.7633 -18.3313,8.1556 -12.6553,7.2467 -15.518,18.9842 -17.4309,30.4527 -1.383,8.2933 -3.5499,16.7084 -7.4323,22.9318 -10.8209,17.3456 -9.8376,34.9315 -5.8728,53.3395" id="path733" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1823.4409,1827.2852 c 4.4869,-0.648 8.9737,-1.296 13.5638,-1.9588 2.0056,-4.3894 3.6707,-8.7561 3.3947,-13.5969 -0.4113,-7.2148 3.7367,-8.4454 9.909,-8.5928 20.3846,-0.4875 21.0115,-0.4987 25.8759,-19.061 2.1511,-8.2082 7.4078,-9.9525 13.7344,-10.3917 14.5752,-1.0123 28.0537,4.1039 40.8944,9.996 9.3346,4.2831 18.793,8.687 27.082,15.1886 4.3967,3.449 9.9338,4.741 15.4525,1.5465" id="path735" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1554.0332,1905.774 c 7.7425,-6.655 17.3369,-9.0879 26.8933,-11.209 9.5811,-2.1264 15.1286,1.0849 19.7981,9.7829 8.8795,16.5405 15.7898,34.1209 26.787,49.5527 7.6141,10.6844 16.6879,20.123 24.8095,30.3623" id="path737" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1902.6369,1557.1704 c 6.2134,-0.8273 10.6329,1.8224 14.9432,6.2729 14.8401,15.3221 30.1758,30.1627 45.126,45.3801 10.1181,10.299 16.3723,23.3415 23.8261,35.475 1.1912,1.9391 2.5578,5.6269 -0.3264,9.1454 -12.7217,15.5194 -13.5922,29.2941 -2.1531,44.3661 15.8014,20.8195 29.7261,42.6018 38.7923,67.2499" id="path739" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 615.70247,2573.99 c 15.8747,-10.2575 29.5087,-23.0843 42.4763,-36.7222 3.7292,-3.9221 8.5493,-5.639 14.33,-4.7652 5.0775,12.5453 2.0973,24.9636 1.1068,37.2391 -0.9506,11.7791 -4.7102,23.4194 -1.3542,35.3637 0.5209,1.854 -1.2879,2.4242 -2.1116,3.5328" id="path741" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1645.25,1994.1624 c 0.2493,11.5892 8.972,15.0746 17.6369,19.1778 25.9211,12.2753 53.4635,18.9934 81.3508,24.6982 4.5299,0.9267 8.964,2.3216 13.4423,3.5001" id="path743" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1988.9039,1650.5085 c 9.5108,-1.314 13.9208,5.5191 17.5493,12.0917 12.1896,22.0787 17.5191,46.6168 24.0906,70.6615 2.6051,9.5316 4.322,19.3059 6.4434,28.9697" id="path745" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1441.6033,2449.5392 c -0.032,15.0518 -7.9785,27.8411 -12.2445,41.6501 -5.187,16.7899 -11.9844,33.0857 -18.1911,49.5553 -1.8377,4.8762 -3.8354,9.7322 -7.7482,13.4464" id="path747" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1969.812,1757.2816 c -3.6759,5.2716 -2.1234,10.695 -0.7741,16.2797 1.6924,7.0039 4.2248,14.1698 3.9929,21.1864 -0.3341,10.1007 7.411,10.8292 13.1384,12.3958 6.5143,1.7818 9.3921,-4.0791 11.2036,-9.5621 1.5439,-4.6727 2.188,-10.098 4.5576,-13.9532 5.9753,-9.7223 14.0798,-17.179 26.5522,-18.724 11.1692,-1.3838 21.8141,-5.025 31.8715,-10.3903 13.0719,-6.9736 26.9907,-9.8089 41.6638,-6.327 3.3174,0.7873 6.5474,1.3723 9.9226,1.3165" id="path749" style="stroke-width:60;stroke-dasharray:none"/>
<path fill="none" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="m 1752.7302,1972.9492 c -3.1856,8.1848 5.6868,10.6886 8.3869,15.9511 3.5909,6.999 10.7086,12.6436 17.7761,17.2829" id="path751" style="stroke-width:60;stroke-dasharray:none"/>
<circle style="opacity:1;mix-blend-mode:normal;fill:url(#linearGradient1673);fill-opacity:1;fill-rule:nonzero;stroke:url(#linearGradient1661);stroke-width:60;stroke-dasharray:none;paint-order:markers fill stroke" id="path926" cx="1623.7734" cy="1627.6438" r="1599.5652"/>` }}));const $u=_m(() => _h('svg', { width: '12', height: '16', viewBox: '0 0 12 16', dangerouslySetInnerHTML: { __html: `<path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/>` }}));const $v=_m(() => _h('svg', { width: '16', height: '16', viewBox: '0 0 16 16', dangerouslySetInnerHTML: { __html: `<path fill-rule="evenodd" d="M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z"/>` }}));const $w=_m(() => _h('svg', { width: '12', height: '16', viewBox: '0 0 12 16', dangerouslySetInnerHTML: { __html: `<path fill-rule="evenodd" d="M12 14.002a.998.998 0 01-.998.998H1.001A1 1 0 010 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"/>` }}));const $x=_m(() => _h('svg', { width: '14', height: '16', viewBox: '0 0 14 16', dangerouslySetInnerHTML: { __html: `<path fill-rule="evenodd" d="M9 4V3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H9zM6 3h2v1H6V3zm7 6H8v1H6V9H1V5h1v3h10V5h1v4z"/>` }}));const $y=_m(() => _h('svg', { width: '16', height: '16', viewBox: '0 0 16 16', dangerouslySetInnerHTML: { __html: `<path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/>` }}));const $z=_m(() => _h('svg', { width: '16', height: '16', viewBox: '0 0 16 16', dangerouslySetInnerHTML: { __html: `<path fill-rule="evenodd" d="M11 10h3V9h-3V8l3.17-1.03-.34-.94L11 7V6c0-.55-.45-1-1-1V4c0-.48-.36-.88-.83-.97L10.2 2H12V1H9.8l-2 2h-.59L5.2 1H3v1h1.8l1.03 1.03C5.36 3.12 5 3.51 5 4v1c-.55 0-1 .45-1 1v1l-2.83-.97-.34.94L4 8v1H1v1h3v1L.83 12.03l.34.94L4 12v1c0 .55.45 1 1 1h1l1-1V6h1v7l1 1h1c.55 0 1-.45 1-1v-1l2.83.97.34-.94L11 11v-1zM9 5H6V4h3v1z"/>` }}));const $aa=_m(() => _h('svg', { width: '16', height: '16', viewBox: '0 0 16 16', dangerouslySetInnerHTML: { __html: `<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/>` }}));const BG=new(class extends _S{constructor(){super();this.state={bl:new BJ()}}get bl(){return this.state.bl;}ty(ua){return (async()=>{let _ = null;try{_ = await BG.tz(ua)}catch(_error){if(!(_error instanceof DoError)){console.warn(`Unhandled error in sequence expression:`);console.warn(_error)}};return _})()}tz(ub){return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({bl:ub})), _resolve)
}))}});const CU=new(class extends _S{constructor(){super();this.state={ud:DO.qh(),fg:AQ.qc(`(max-width: 1000px)`),uh:(()=>{let vb = DW.qy(`ui.dark-mode`);if(vb instanceof DR){return AQ.qc(`(prefers-color-scheme: dark)`)} else if(vb instanceof DQ){const vc = vb._0;return _compare(vc, `true`)}})(),va:AQ.pz(`(max-width: 1000px)`, ((vd)=>{return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({fg:vd})), _resolve)
}))}))};this._d({ve:(()=>{return new AL({titleWoff2:`/assets/nunito-v16-latin-ext_latin-700_7ba344b9011888663eea78e71fc1af79.woff2`,titleWoff:`/assets/nunito-v16-latin-ext_latin-700_6e483e301899a8ab59b328ae7f155c29.woff`,titleName:`Nunito`,regularWoff2:`/assets/open-sans-v18-latin-ext_latin-regular_be21e759f9abd15b8cef68d92cedc081.woff2`,regularWoff:`/assets/open-sans-v18-latin-ext_latin-regular_b7b7c77b83e9d67f6756aa2716f35eba.woff`,boldWoff2:`/assets/open-sans-v18-latin-ext_latin-700_5717b08cf679657595d0383d291a04c3.woff2`,boldWoff:`/assets/open-sans-v18-latin-ext_latin-700_5717b08cf679657595d0383d291a04c3.woff2`,name:`Open Sans`})}),vf:(()=>{return [new EC(new Record({name:`background-border`,light:`#D0D0D0`,dark:`#1A1A1A`})), new EC(new Record({name:`background-color`,light:`#F0F0F0`,dark:`#222222`})), new EC(new Record({name:`background-text`,light:`#444444`,dark:`#EEEEEE`})), new EC(new Record({name:`content-faded-border`,light:`#DDD`,dark:`#242424`})), new EC(new Record({name:`content-faded-color`,light:`#EEE`,dark:`#2C2C2C`})), new EC(new Record({name:`content-faded-text`,light:`#555`,dark:`#CCC`})), new EC(new Record({name:`content-border`,light:`#DDD`,dark:`#292929`})), new EC(new Record({name:`content-color`,light:`#FFF`,dark:`#333`})), new EC(new Record({name:`content-text`,light:`#555`,dark:`#CCC`})), new EC(new Record({name:`shadow-color`,light:`#00000010`,dark:`#00000025`})), new EC(new Record({name:`scrollbar-track`,light:`#FFF`,dark:`#393939`})), new EC(new Record({name:`scrollbar-thumb`,light:`#DDD`,dark:`#555`})), new ED(new Record({name:`selection-color`,value:`var(--primary-color)`})), new ED(new Record({name:`selection-text`,value:`var(--primary-text)`})), new ED(new Record({name:`scroll-shadow-from`,value:`#00000000`})), new ED(new Record({name:`scroll-shadow-to`,value:`#00000030`})), new EC(new Record({name:`navitem-border`,light:`#EDEDED`,dark:`#2A2A2A`})), new EC(new Record({name:`checker-color-1`,light:`#F0F0F0`,dark:`#303030`})), new EC(new Record({name:`checker-color-2`,light:`#F6F6F6`,dark:`#2A2A2A`})), new EC(new Record({name:`input-border`,light:`#DDD`,dark:`#232323`})), new EC(new Record({name:`input-color`,light:`#F3F3F3`,dark:`#2D2D2D`})), new EC(new Record({name:`input-text`,light:`#555`,dark:`#CCC`})), new EC(new Record({name:`input-focus-border`,light:`#c2e3fd`,dark:`#1f313c`})), new EC(new Record({name:`input-focus-color`,light:`#D8EEFF`,dark:`#354c5e`})), new EC(new Record({name:`input-focus-text`,light:`#306F9F`,dark:`#A5CDEC`})), new EC(new Record({name:`input-invalid-border`,light:`#F4B0AB`,dark:`#481B17`})), new EC(new Record({name:`input-invalid-color`,light:`#FDD3D0`,dark:`#7D3E39`})), new EC(new Record({name:`input-invalid-text`,light:`#6A332F`,dark:`#E8D1CF`})), new EC(new Record({name:`title-border`,light:`#EEE`,dark:`#2A2A2A`})), new EC(new Record({name:`title-color`,light:`#333`,dark:`#F6F6F6`})), new EC(new Record({name:`primary-light-color`,light:`#E9F5FF`,dark:`#354553`})), new EC(new Record({name:`primary-light-text`,light:`#284459`,dark:`#c5e2f9`})), new ED(new Record({name:`primary-focus-ring`,value:`#FFFFFF95`})), new ED(new Record({name:`primary-hover`,value:`#1D7AC1`})), new ED(new Record({name:`primary-color`,value:`#0591FC`})), new ED(new Record({name:`primary-text`,value:`#FFF`})), new EC(new Record({name:`warning-light-color`,light:`#FFEDCE`,dark:`#6A5021`})), new EC(new Record({name:`warning-light-text`,light:`#4a4740`,dark:`#eee4cf`})), new ED(new Record({name:`warning-focus-ring`,value:`#FFFFFF95`})), new ED(new Record({name:`warning-hover`,value:`#DB8E0A`})), new ED(new Record({name:`warning-color`,value:`#F59E0B`})), new ED(new Record({name:`warning-text`,value:`#FFF`})), new EC(new Record({name:`secondary-focus-ring`,light:`#FFFFFF95`,dark:`#00000095`})), new EC(new Record({name:`secondary-light-color`,light:`#DDD`,dark:`#444`})), new EC(new Record({name:`secondary-light-text`,light:`#444`,dark:`#EEE`})), new EC(new Record({name:`secondary-hover`,light:`#545454`,dark:`#C6C6C6`})), new EC(new Record({name:`secondary-color`,light:`#444`,dark:`#E6E6E6`})), new EC(new Record({name:`secondary-text`,light:`#FFF`,dark:`#333`})), new EC(new Record({name:`success-light-color`,light:`#C5FFEC`,dark:`#204F3F`})), new EC(new Record({name:`success-light-text`,light:`#37574d`,dark:`#c6f4e6`})), new ED(new Record({name:`success-focus-ring`,value:`#FFFFFF95`})), new ED(new Record({name:`success-hover`,value:`#0C885F`})), new ED(new Record({name:`success-color`,value:`#10B981`})), new ED(new Record({name:`success-text`,value:`#FFF`})), new EC(new Record({name:`danger-light-color`,light:`#FBE5E5`,dark:`#752D2D`})), new EC(new Record({name:`danger-light-text`,light:`#463636`,dark:`#e1b5b5`})), new ED(new Record({name:`danger-focus-ring`,value:`#FFFFFF95`})), new ED(new Record({name:`danger-hover`,value:`#BD2525`})), new ED(new Record({name:`danger-color`,value:`#EF4444`})), new ED(new Record({name:`danger-text`,value:`#FFF`})), new EC(new Record({name:`faded-light-color`,light:`#00000015`,dark:`#FFFFFF15`})), new EC(new Record({name:`faded-light-text`,light:`#555`,dark:`#CCC`})), new EC(new Record({name:`faded-focus-ring`,light:`#00000095`,dark:`#FFFFFF95`})), new EC(new Record({name:`faded-hover`,light:`#00000025`,dark:`#FFFFFF25`})), new EC(new Record({name:`faded-color`,light:`#00000015`,dark:`#FFFFFF15`})), new EC(new Record({name:`faded-text`,light:`#555`,dark:`#CCC`}))]})})}get ud(){return this.state.ud;}get fg(){return this.state.fg;}get uh(){return this.state.uh;}get va(){return this.state.va;}uc(ue){return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({ud:DO.ql(ue, this.ud)})), _resolve)
}))}uf(){return CU.ug(!this.uh)}ug(ui){return (()=>{(()=>{let uj = DW.qv(`ui.dark-mode`, DZ.sp(ui));if(uj instanceof DR){return DY.sn(`Could not save dark mode setting to LocalStorage!`)} else if(uj instanceof DQ){return ``}})();return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({uh:ui})), _resolve)
}))})()}gx(uk,ul){return (uk ? AX.gz : ul)}um(us,ut,uq){return (()=>{const [un,uo,up] = AX.ix();let ur = AW.oq(uq.target);(clearTimeout(us));let uu = (setTimeout(un, ut));return [uu, ur, up]})()}gf(uv){return uv.top >= 0 && uv.left >= 0 && uv.right <= AQ.pu() && uv.bottom <= AQ.pv()}uw(ux){return ((() => {
      let rect = ux.getBoundingClientRect();
      let node = ux.parentNode;

      const height = rect.height;
      const top = rect.top;

      // Check if bottom of the element is off the page
      if (rect.bottom < 0) {
        return false;
      }

      // Check its within the document viewport
      if (top > document.documentElement.clientHeight) {
        return false;
      }

      do {
        rect = node.getBoundingClientRect();

        if (top <= rect.bottom === false) {
          return false
        }

        // Check if the element is out of view due to a container scrolling
        if ((top + height) <= rect.top) {
          return false
        }

        node = node.parentNode
      } while (node != document.body)

      return true;
    })())}uy(uz){return (CU.uw(uz) ? new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({})), _resolve)
})) : (uz.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "center",
      })))}});_insertStyles(`
.a {
  width: 300px;
  height: 300px;
}

.b {
  color: #404040;
}

.c {
  flex-direction: column;
  display: flex;
  border-radius: 10px;
  color: black;
  margin: 2%;
  padding: 10px;
}

.d {
  color: black;
  padding-bottom: 40px;
  border-bottom: solid 1px black;
}

.e {
  color: #505050;
}

.f {
  position: fixed;
  z-index: 1100;
  right: 1em;
  top: 1em;
  flex-direction: column;
  align-items: flex-end;
  display: flex;
}

.g {
  font-size: var(--a-a);
  font-family: var(--font-family);
  height: var(--a-b);
  justify-content: space-between;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 1em;
  display: grid;
}

.h {
  text-decoration: none;
  font-weight: bold;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 0.75em;
  display: grid;
  cursor: pointer;
  outline: none;
  color: var(--b-a);
}

.h:hover {
  color: var(--primary-color);
}

.h:focus {
  color: var(--primary-color);
}

.i {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.j {
  border-left: 0.2em solid var(--background-border);
  height: 2.4em;
}

.k {
  position: relative;
  top: 0.0625em;
}

.l {
  font-size: var(--c-a);
  align-content: start;
  grid-gap: 0.25em;
  display: grid;
}

.m {
  max-width: var(--d-a);
  min-height: 100vh;
  min-width: 320px;
  grid-template-rows: var(--d-b);
  display: grid;
  box-sizing: border-box;
  padding: var(--d-c, 1em 2.5em 0);
  width: var(--d-d);
  margin-right: var(--d-e);
  margin-left: var(--d-f);
}

.m > * {
  min-width: 0;
}

.m > *:not(:last-child) {
  border-bottom: 1px solid var(--border);
}

.m > *:empty {
  display: none;
}

.n {
  padding-bottom: 0.5em;
}

.o {
  padding: 1em 0;
  display: grid;
  align-content: var(--e-a);
}

.p {
  z-index: var(--f-a);
  position: fixed;
  left: var(--f-b);
  top: var(--f-c);
  pointer-events: var(--f-d);
}

.q {
  font-size: var(--g-a);
  font-family: var(--font-family);
  text-align: var(--g-b);
  word-break: break-word;
  line-height: 1.7;
  display: var(--g-c);
}

.q > *:first-child {
  margin-top: 0;
}

.q > *:last-child {
  margin-bottom: 0;
}

.q h1 {
  margin-bottom: 0.35em;
  margin-top: 2em;
  line-height: 1.2em;
}

.q h2 {
  margin-bottom: 0.35em;
  margin-top: 2em;
  line-height: 1.2em;
}

.q h3 {
  margin-bottom: 0.35em;
  margin-top: 2em;
  line-height: 1.2em;
}

.q h4 {
  margin-bottom: 0.35em;
  margin-top: 2em;
  line-height: 1.2em;
}

.q h5 {
  margin-bottom: 0.35em;
  margin-top: 2em;
  line-height: 1.2em;
}

.q h1 + * {
  margin-top: 0;
}

.q h2 + * {
  margin-top: 0;
}

.q h3 + * {
  margin-top: 0;
}

.q h4 + * {
  margin-top: 0;
}

.q h5 + * {
  margin-top: 0;
}

.q ul {
  padding-left: 1.5em;
}

.q ol {
  padding-left: 1.5em;
}

.q li + li {
  margin-top: 0.5em;
}

.q a:not([name]):not([class]) {
  color: var(--primary-color);
  text-decoration: none;
}

.q a:not([name]):not([class]) code:not([class]) {
  color: inherit;
}

.q a:not([name]):not([class]) kbd:not([class]) {
  color: inherit;
}

.q a:not([name]):not([class]):focus {
  outline: 0.125em dotted var(--primary-color);
  text-decoration: underline;
  outline-offset: 0.125em;
}

.q a:not([name]):not([class])[target="_blank"]:after {
  transform: scaleX(-1);
  display: inline-block;
  margin-left: 0.1em;
  content: " ???";
}

.q code:not([class]) {
  border: 0.0625em solid var(--input-border);
  background: var(--input-color);
  color: var(--input-text);
  padding: 0.35em 0.45em 0.2em;
  border-radius: 0.25em;
  font-size: 0.875em;
}

.q kbd:not([class]) {
  border: 0.0625em solid var(--input-border);
  background: var(--input-color);
  color: var(--input-text);
  padding: 0.35em 0.45em 0.2em;
  border-radius: 0.25em;
  font-size: 0.875em;
}

.q kbd:not([class]) {
  border-bottom: 0.1875em solid var(--input-border);
}

.q pre:not([class]) code:not([class]) {
  padding: 0.5em 0.75em;
  display: block;
}

.q video:not([class]) {
  border-radius: 0.25em;
  width: 100%;
}

.q img:not([class]) {
  border-radius: 0.25em;
  width: 100%;
}

.r {
  font-size: var(--h-a);
  justify-content: center;
  display: inline-flex;
  align-items: center;
  cursor: var(--h-b);
  opacity: var(--h-c);
}

.r:focus {
  color: var(--j-a);
}

.r:hover {
  color: var(--j-a);
}

.r svg {
  opacity: var(--i-a);
  fill: currentColor;
  height: 1em;
  width: 1em;
  pointer-events: var(--i-b);
  cursor: var(--i-c);
}

.s {
  color: inherit;
}

.t {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-touch-callout: none;
  -webkit-appearance: none;
  appearance: none;
  background: none;
  color: inherit;
  outline: 0;
  padding: 0;
  border: 0;
  margin: 0;
}

.u {
  grid-auto-flow: column;
  place-content: center;
  display: inline-grid;
  align-items: center;
  grid-gap: 0.5em;
  font-size: var(--k-a);
  text-decoration: none;
  color: inherit;
  outline: none;
}

.v {
  font-weight: bold;
}

.w:focus {
  color: var(--primary-color);
}

.w:hover {
  color: var(--primary-color);
}

.x {
  font-size: var(--l-a);
  line-height: 1.7;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  grid-gap: 0.75em;
  display: grid;
}

.y {
  text-decoration: none;
  cursor: pointer;
  color: var(--o-a, inherit);
  outline: none;
}

.y:hover {
  color: var(--primary-color);
}

.y:focus {
  color: var(--primary-color);
}

.z {
  margin-bottom: 0.3125em;
}

.z:not(:first-child) {
  margin-top: 1.25em;
}

.aa {
  border-top: 0.125em solid var(--navitem-border);
  font-size: var(--m-a);
  margin: 0.25em 0;
}

.ab {
  font-size: var(--n-a);
  margin-bottom: 0.5em;
}

.ab > div {
  padding-left: 0.75em;
  border-left: 1px solid var(--navitem-border);
}

.ab strong {
  margin-bottom: 0.5em;
}

.ab:not(:first-child) {
  margin-top: 0.5em;
}

.ac {
  box-shadow: 0 0.125em 0.625em -0.125em var(--shadow-color);
  border: 0.0625em solid var(--content-border);
  border-radius: 0.5em;
  width: var(--p-a);
  background: var(--content-color);
  color: var(--content-text);
  font-size: var(--p-b);
  font-family: var(--font-family);
}

.ad {
  border-bottom: 0.0714em solid var(--input-border);
  border-radius: 0.5em 0.5em 0 0;
  padding: 0.5714em 0.85714em;
  background: var(--input-color);
  color: var(--input-text);
  font-size: 0.875em;
  font-weight: bold;
}

.ae {
  padding: 0.75em;
}

.af {
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 1000;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  font-size: var(--q-a);
  justify-content: flex-end;
  flex-direction: column;
  display: flex;
  transition: var(--q-b);
  visibility: var(--q-c);
  opacity: var(--q-d);
}

.ag {
  box-sizing: border-box;
  padding: 0 1em;
  height: 3em;
  width: 100%;
  outline: 0;
  margin: 0;
  border: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: inherit;
  color: var(--r-b, inherit);
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  grid-gap: 0.75em;
  display: grid;
  background: var(--r-a);
  font-weight: var(--r-c);
  cursor: var(--r-d);
}

.ah:hover {
  color: var(--s-a);
}

.ah:focus {
  color: var(--s-a);
}

.ai {
  background: var(--content-border);
  height: 0.125em;
  border: 0;
}

.aj {
  transition: transform 320ms, opacity 320ms;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  text-align: center;
  overflow: auto;
  min-height: 0;
  transform: var(--t-a);
  opacity: var(--t-b);
}

.ak {
  border-radius: 0.5em;
  overflow: hidden;
  margin: 1em;
  background: var(--content-color);
  font-family: var(--font-family);
  color: var(--content-text);
  text-align: left;
  display: var(--u-a);
  min-width: var(--u-b);
}

.ak > * {
  border: 0;
}

.ak > * + * {
  border-top: 0.0625em solid var(--content-faded-border);
}

.al {
  grid-template-columns: 0.4375em 1fr;
  display: grid;
}

.am {
  border-right: 0.0625em solid var(--content-faded-border);
  background: var(--content-faded-color);
}

.an > * + * {
  border-top: 0.0625em solid var(--content-faded-border);
}

.ao {
  padding: 0.5em 1em;
}

.ap {
  font-size: inherit;
  color: inherit;
  appearance: none;
  background: none;
  display: block;
  outline: none;
  width: 100%;
  padding: 0;
  margin: 0;
}

.aq {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-touch-callout: none;
  background: rgba(0, 0, 0, 0.8);
  transform: translate3d(0,0,0);
  z-index: var(--v-a);
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  transition: var(--v-b);
  pointer-events: var(--v-c);
  visibility: var(--v-d);
  opacity: var(--v-e);
}

.ar {
  transition: var(--w-a);
  border-right: 0.0625em solid var(--content-border);
  background: var(--content-color);
  color: var(--content-text);
  min-width: var(--w-b);
  padding: 1.5em;
  position: absolute;
  bottom: 0;
  right: 0;
  top: 0;
  transform: var(--w-c);
}

.as {
  font-size: var(--x-a);
  justify-content: var(--x-b);
  align-items: var(--x-c);
  display: flex;
  flex-direction: var(--x-d);
}

.at {
  height: var(--y-a);
  width: var(--y-b);
  flex: 0 0 auto;
}

.au {
  border-top: 0.1825em solid var(--content-border);
  grid-template-columns: var(--z-b, 1fr auto);
  grid-gap: var(--z-e, 5em);
  display: grid;
  font-size: var(--z-a);
  overflow: hidden;
  margin-top: var(--z-c, 2em);
  padding: var(--z-d, 3em 0);
}

.av {
  align-self: center;
}

.aw {
  white-space: var(--aa-a);
  margin: -1em -2.5em;
  flex-wrap: wrap;
  display: flex;
  padding-right: var(--aa-b);
}

.ax {
  align-content: start;
  grid-gap: 1em;
  display: grid;
  margin: 1em 2.5em;
  flex: 1;
}

.ay {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-touch-callout: none;
  background: rgba(0, 0, 0, 0.8);
  max-height: 100vh;
  overflow-y: auto;
  display: flex;
  transform: translate3d(0,0,0);
  z-index: var(--ab-a);
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  transition: var(--ab-b);
  pointer-events: var(--ab-c);
  visibility: var(--ab-d);
  opacity: var(--ab-e);
}

.az {
  transition: var(--ac-a);
  padding: 1em;
  margin: auto;
  transform: var(--ac-b);
}

.ba {
  width: var(--ad-a);
  transition: var(--ad-b);
  transform: var(--ad-c);
  opacity: var(--ad-d);
  visibility: var(--ad-e);
}

.bb {
  box-shadow: 0 0 0.625em var(--shadow-color);
  background: var(--content-color);
  color: var(--content-text);
  border-radius: 0.5em;
  padding: 1.25em;
  display: var(--af-a);
}

.bc {
  border-bottom: 0.0625em solid var(--title-border);
  padding-bottom: 0.5em;
  margin-bottom: 1em;
  font-family: var(--title-font-family);
  color: var(--title-color);
  font-weight: bold;
  font-size: 1.25em;
}

.bd {
  padding-left: 0.75em;
  font-size: 0.875em;
  font-weight: bold;
  opacity: 0.85;
}

.be {
  font-size: var(--ae-a);
  grid-gap: 0.5em;
  display: grid;
  grid-template-rows: var(--ae-b);
}

.bf {
  height: var(--ag-a);
  overflow: visible;
  transition: var(--ag-b);
  transform: var(--ag-c);
  margin-bottom: var(--ag-d);
}

.bg {
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  background: rgba(25, 25, 25, 0.985);
  padding: 0.75em 1.5em 0.85em;
  border-radius: 0.5em;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: block;
  font-family: var(--font-family);
  font-weight: 600;
  color: white;
}

.bg::before {
  animation: var(--ah-a);
  background: var(--primary-color);
  content: "";
  position: absolute;
  height: 0.1875em;
  display: block;
  left: 0;
  top: 0;
}

@media (max-width: 900px) {
  .f {
    width: cacl(100vw - 1em);
    left: 1em;
  }

  .bg {
    font-size: 0.875em;
  }
}

@keyframes duration-notification {
  0% {
    width: 100%;
  }

  100% {
    width: 0;
  }
}
`)

  const Nothing = AT
  const Just = AU
  const Err = DR
  const Ok = DQ

  _enums.nothing = AT
  _enums.just = AU
  _enums.err = DR
  _enums.ok = DQ

  
  
_program.render(E, {A:$A,B:$B,C:$C,D:$D})
})()