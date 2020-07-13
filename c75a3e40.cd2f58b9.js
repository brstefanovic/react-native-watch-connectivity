(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),c=(n(0),n(125)),i={id:"api-watch-state",title:"Watch State",sidebar_label:"Watch State"},o={id:"api-watch-state",title:"Watch State",description:"getIsPaired",source:"@site/docs/api-watch-state.md",permalink:"/react-native-watch-connectivity/docs/api-watch-state",editUrl:"https://github.com/mtford90/react-native-watch-connectivity.github.io/edit/master/docs/api-watch-state.md",sidebar_label:"Watch State",sidebar:"someSidebar",previous:{title:"Reachability",permalink:"/react-native-watch-connectivity/docs/api-reachability"},next:{title:"Hooks",permalink:"/react-native-watch-connectivity/docs/api-hooks"}},l=[{value:"getIsPaired",id:"getispaired",children:[]},{value:"getIsWatchAppInstalled",id:"getiswatchappinstalled",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"getispaired"},"getIsPaired"),Object(c.b)("p",null,"Is this iPhone paired with an apple watch?"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import {getIsPaired} from 'react-native-watch-connectivity';\n\nconst paired = await getIsPaired();\n\nconsole.log(paired); // true | false\n")),Object(c.b)("h2",{id:"getiswatchappinstalled"},"getIsWatchAppInstalled"),Object(c.b)("p",null,"Is the watch app, companion to the react native, installed?"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import {getIsWatchAppInstalled} from 'react-native-watch-connectivity';\n\nconst installed = await getIsWatchAppInstalled();\nconsole.log(installed); // true | false\n")))}s.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=a,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||c;return n?r.a.createElement(f,o(o({ref:t},p),{},{components:n})):r.a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);