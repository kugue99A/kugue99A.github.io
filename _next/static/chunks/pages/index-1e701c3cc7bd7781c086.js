(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var a,o=(a=t(7294))&&a.__esModule?a:{default:a},c=t(1063),i=t(4651),l=t(7426);var u={};function s(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,a=i.useRouter(),f=o.default.useMemo((function(){var n=c.resolveHref(a,e.href,!0),t=r(n,2),o=t[0],i=t[1];return{href:o,as:e.as?c.resolveHref(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,_=e.shallow,y=e.scroll,m=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var g=(n=o.default.Children.only(h))&&"object"===typeof n&&n.ref,x=l.useIntersection({rootMargin:"200px"}),b=r(x,2),j=b[0],E=b[1],L=o.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);o.default.useEffect((function(){var e=E&&t&&c.isLocalURL(d),n="undefined"!==typeof m?m:a&&a.locale,r=u[d+"%"+p+(n?"%"+n:"")];e&&!r&&s(a,d,p,{locale:n})}),[p,d,E,m,t,a]);var k={ref:L,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[a?"replace":"push"](t,r,{shallow:o,locale:l,scroll:i}))}(e,a,d,p,v,_,y,m)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(a,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var w="undefined"!==typeof m?m:a&&a.locale,M=a&&a.isLocaleDomain&&c.getDomainLocale(p,w,a&&a.locales,a&&a.domainLocales);k.href=M||c.addBasePath(c.addLocale(p,w,a&&a.defaultLocale))}return o.default.cloneElement(n,k)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,l=a.useRef(),u=a.useState(!1),s=r(u,2),f=s[0],d=s[1],p=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,c=r.elements;return c.set(e,n),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return a.useEffect((function(){if(!c&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[p,f]};var a=t(7294),o=t(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},2539:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(1458),a=t.n(r),o=t(1664),c=t(5893);var i=function(){return(0,c.jsx)("section",{className:a().container,children:(0,c.jsx)("header",{className:a().header,children:(0,c.jsx)("h1",{style:{letterSpacing:"1px",textAlign:"left"},children:(0,c.jsx)(o.default,{href:"/",children:(0,c.jsx)("a",{children:(0,c.jsx)("span",{style:{fontWeight:100},children:"Portfolio"})})})})})})},l=t(2163),u=t.n(l);var s=function(e){var n=e.children;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{}),(0,c.jsx)("main",{className:u().main,children:n})]})};function f(){return(0,c.jsx)(s,{children:(0,c.jsx)("div",{children:(0,c.jsx)("h1",{children:"99A."})})})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2539)}])},1458:function(e){e.exports={container:"header_container__Gzdma",header:"header_header__2jTgh"}},2163:function(e){e.exports={main:"layouts_main__17V1k",container:"layouts_container__UiHKa"}},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);