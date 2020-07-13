(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{108:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(2),a=t(6),s=(t(0),t(125)),o={id:"messages",title:"Messages",sidebar_label:"Messages"},c={id:"messages",title:"Messages",description:"sendMessage",source:"@site/docs/messages.md",permalink:"/react-native-watch-connectivity/docs/messages",editUrl:"https://github.com/mtford90/react-native-watch-connectivity.github.io/edit/master/docs/messages.md",sidebar_label:"Messages",sidebar:"someSidebar",previous:{title:"Troubleshooting",permalink:"/react-native-watch-connectivity/docs/troubleshooting"},next:{title:"User Info",permalink:"/react-native-watch-connectivity/docs/user-info"}},i=[{value:"sendMessage",id:"sendmessage",children:[{value:"TypeScript Support",id:"typescript-support",children:[]}]},{value:"sendMessageData",id:"sendmessagedata",children:[]}],p={rightToc:i};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"sendmessage"},"sendMessage"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import {sendMessage} from \'react-native-watch-connectivity\';\n\n// Message can have any number of key-value pairs \nconst message = {\n    "key": "value"\n}\n\n// Optional reply handler\nconst replyHandler = response => {\n    console.log("Response from watch received", response);\n}\n\n// Optional error handler\nconst errorHandler = error => {\n    console.error(error)\n}\n\nsendMessage(message, replyHandler, errorHandler);\n')),Object(s.b)("h3",{id:"typescript-support"},"TypeScript Support"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import {sendMessage} from \'react-native-watch-connectivity\';\n\ntype Response = {\n    "text": string\n}\n\nconst message = {"text": "Hello watch!"}\n\nsendMessage<Response>(\n    message, \n    response => {\n        console.log(response.text); // Intellisense available\n    }\n)\n')),Object(s.b)("h2",{id:"sendmessagedata"},"sendMessageData"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import {sendMessageData} from 'react-native-watch-connectivity';\nimport { Buffer } from 'buffer';\n\nsendMessageData(\n    Buffer.from('abc', 'utf-8').toString('base64'),\n    encodedResponse => {\n        let response = Buffer.from(encodedResponse, 'base64').toString('utf8');\n        console.log('Received response', response)\n    }\n);\n")))}l.isMDXComponent=!0},125:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),f=r,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||s;return t?a.a.createElement(m,c(c({ref:n},p),{},{components:t})):a.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<s;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);