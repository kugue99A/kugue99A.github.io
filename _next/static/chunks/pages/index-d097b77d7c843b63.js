(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},8e3:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},5646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(8e3);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},2717:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=l,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),s=(a=n(1585))&&a.__esModule?a:{default:a},c=n(8e3),u=n(5850),d=n(5646);function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var d=p[c];if(o.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?a=!1:n.add(d);else{var l=o.props[d],f=r[d]||new Set;"name"===d&&i||!f.has(l)?(f.add(l),r[d]=f):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:a})}))}var y=function(e){var t=e.children,n=i.useContext(c.AmpStateContext),r=i.useContext(u.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:h,headManager:r,inAmpMode:d.isInAmpMode(n)},t)};t.default=y},1585:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),i=(n(1506),n(2205)),s=n(8585),c=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var l=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},4503:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});n(7294);var r=n(2668),o=n.n(r),a=n(5893),i=function(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("main",{className:o().mainLayoutContainer,children:e.children})})}},5596:function(e,t,n){"use strict";n(7294);var r=n(7379),o=n(5893);t.Z=function(e){var t=r.ZP.div.withConfig({displayName:"RowLayout__Container",componentId:"sc-1rhq7bl-0"})(["width:100%;flex-wrap:wrap;gap:100px 100px;display:flex;align-items:",";justify-content:",";margin-bottom:",";"],e.align||"center",e.justify||"center",e.marginBottom||"0px");return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(t,{children:e.children})})}},4803:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(1163),o=n(9008),a=n(4503),i=n(5596),s=(n(7294),n(5549)),c=n.n(s),u=n(5893),d=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:c().navigationContainer,children:[(0,u.jsx)("h1",{children:"99A."}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)("a",{children:"Profile"})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{children:"Product"})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{children:"Activity"})})]})]})})},l=n(4564),f=n.n(l),p=function(){return(0,u.jsxs)("div",{className:f().contentContainer,children:[(0,u.jsx)("h2",{children:"Profile"}),(0,u.jsx)("table",{children:(0,u.jsxs)("tbody",{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Name:"}),(0,u.jsx)("td",{children:"\u4e45\u3005\u6c5f \u8000\u5e73"})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"University:"}),(0,u.jsx)("td",{children:"\u9577\u5ca1\u6280\u8853\u79d1\u5b66\u5927\u5b66"})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"From:"}),(0,u.jsx)("td",{children:"\u7fa4\u99ac\u770c"})]})]})})]})},h=function(){(0,r.useRouter)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(o.default,{children:[(0,u.jsx)("title",{children:"Kugue Portfolio"}),(0,u.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,u.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,u.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@100;300;500;700&display=swap"})]}),(0,u.jsx)(a.Z,{children:(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(d,{}),(0,u.jsx)(p,{})]})})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4803)}])},4564:function(e){e.exports={contentContainer:"Content_contentContainer__to_Pf"}},5549:function(e){e.exports={navigationContainer:"Navigation_navigationContainer__3lJpS"}},2668:function(e){e.exports={mainLayoutContainer:"MainLayout_mainLayoutContainer__1Waqt"}},9008:function(e,t,n){e.exports=n(2717)}},function(e){e.O(0,[106,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);