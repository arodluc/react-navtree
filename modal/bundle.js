webpackJsonp([2],{13:function(e,t,n){"use strict";function o(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var a=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=o(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<e.length;r++){var u=e[r];"number"==typeof u[0]&&o[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},14:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=h[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(l(o.parts[a],t))}else{for(var u=[],a=0;a<o.parts.length;a++)u.push(l(o.parts[a],t));h[o.id]={id:o.id,refs:1,parts:u}}}}function r(e,t){for(var n=[],o={},r=0;r<e.length;r++){var a=e[r],u=t.base?a[0]+t.base:a[0],i=a[1],c=a[2],s=a[3],l={css:i,media:c,sourceMap:s};o[u]?o[u].parts.push(l):n.push(o[u]={id:u,parts:[l]})}return n}function a(e,t){var n=b(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=g[g.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function u(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function i(e){var t=document.createElement("style");return e.attrs.type="text/css",s(t,e.attrs),a(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",s(t,e.attrs),a(e,t),t}function s(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,o,r,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var s=y++;n=m||(m=i(t)),o=f.bind(null,n,s,!1),r=f.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),o=p.bind(null,n,t),r=function(){u(n),n.href&&URL.revokeObjectURL(n.href)}):(n=i(t),o=d.bind(null,n),r=function(){u(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function f(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=E(t,r);else{var a=document.createTextNode(r),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(a,u[t]):e.appendChild(a)}}function d(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var o=n.css,r=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||a)&&(o=w(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var u=new Blob([o],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(u),i&&URL.revokeObjectURL(i)}var h={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),b=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),m=null,y=0,g=[],w=n(19);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=r(e,t);return o(n,t),function(e){for(var a=[],u=0;u<n.length;u++){var i=n[u],c=h[i.id];c.refs--,a.push(c)}if(e){o(r(e,t),t)}for(var u=0;u<a.length;u++){var c=a[u];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete h[c.id]}}}};var E=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},16:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){function t(){document.location="../"}var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=new s.NavTree;window.document.addEventListener("keydown",function(e){var t=void 0;switch(e.keyCode){case 40:t="down";break;case 38:t="up";break;case 37:t="left";break;case 39:t="right";break;case 27:t="esc";break;case 13:t="enter"}t&&(e.preventDefault(),o.resolve(t))},!1),c.default.render(u.default.createElement(l.default,{tree:o,func:s.navVertical},n&&u.default.createElement(l.default,{defaultFocused:!0,func:function(e){"enter"===e&&t()},className:"button btn-back"},"Press to go back"),e),document.getElementById("root"))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var a=n(6),u=o(a),i=n(27),c=o(i),s=n(9),l=o(s);n(17)},17:function(e,t,n){var o=n(18);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(14)(o,r);o.locals&&(e.exports=o.locals)},18:function(e,t,n){t=e.exports=n(13)(void 0),t.push([e.i,".btn-back { background-color: #ccc; }\n.btn-back.nav-focused { outline: 1px solid crimson; }\n\n\n.button { display: inline-block; padding: 5px 10px; background-color: #cccccc; margin: 2px; }\n.button.nav-focused { box-shadow: 0 1px 3px #008CBA; outline: 1px solid #008CBA; background-color: #008CBA; color: #FFF; }\n\ncode { background-color: #EEE; padding: 2px 4px; }",""])},19:function(e,t,n){"use strict";e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return e;var a;return a=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}},193:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(6),s=o(c),l=n(9),f=o(l),d=n(194),p=o(d),h=n(16),v=o(h),b=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={showModal:!1},n._navFuncToggleModal=n._navFuncToggleModal.bind(n),n}return u(t,e),i(t,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(f.default,{func:l.navHorizontal,navId:"body"},s.default.createElement(f.default,{func:this._navFuncToggleModal,className:"button"},"Press to show modal window #1"),s.default.createElement(f.default,{func:this._navFuncToggleModal,className:"button"},"Press to show modal window #2")),s.default.createElement(p.default,{show:this.state.showModal},s.default.createElement("h3",null,"Demo modal"),s.default.createElement("ul",null,s.default.createElement("li",null,"navigation is locked inside the modal window"),s.default.createElement("li",null,"when the modal is closed, the previously focused component gets focused back")),s.default.createElement(f.default,{func:l.navHorizontal},s.default.createElement(f.default,{func:this._navFuncToggleModal,defaultFocused:!0,className:"button"},"Agree"),s.default.createElement(f.default,{func:this._navFuncToggleModal,className:"button"},"OK"),s.default.createElement(f.default,{func:this._navFuncToggleModal,className:"button"},"Confirm"))))}},{key:"_navFuncToggleModal",value:function(e){if("enter"===e)return this.setState({showModal:!this.state.showModal}),null}}]),t}(c.Component);(0,v.default)(s.default.createElement(b,null))},194:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(6),s=o(c),l=n(25),f=o(l),d=n(9),p=o(d),h=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){!this.props.show&&e.show&&(this.previouslyFocusedPath=this.context.tree.getFocusedPath())}},{key:"componentDidUpdate",value:function(e){e.show&&!this.props.show&&this.context.tree.focus(this.previouslyFocusedPath)}},{key:"render",value:function(){if(!this.props.show)return null;var e={position:"absolute",backgroundColor:"#EEE",border:"1px solid red",left:"30px",top:"60px",padding:"20px"};return s.default.createElement(p.default,{style:e,defaultFocused:!0,func:this._navFunc},this.props.children)}},{key:"_navFunc",value:function(e,t){t.focus(t.getFocusedPath())}}]),t}(c.Component);t.default=h,h.contextTypes={tree:f.default.instanceOf(d.NavTree)},h.propTypes={children:f.default.node,show:f.default.bool}}},[193]);