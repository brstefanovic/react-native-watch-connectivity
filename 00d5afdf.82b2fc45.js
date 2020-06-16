(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{122:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),f=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=f(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=f(t),p=r,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||a;return t?i.a.createElement(m,o(o({ref:n},l),{},{components:t})):i.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<a;l++)s[l]=t[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},98:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return f}));var r=t(2),i=t(6),a=(t(0),t(122)),s={id:"guides-files",title:"Files",sidebar_label:"Files"},o={id:"guides-files",title:"Files",description:"Starting a file transfer",source:"@site/docs/guides-files.md",permalink:"/react-native-watch-connectivity/docs/guides-files",editUrl:"https://github.com/mtford90/react-native-watch-connectivity.github.io/edit/master/docs/guides-files.md",sidebar_label:"Files",sidebar:"someSidebar",previous:{title:"Reachability",permalink:"/react-native-watch-connectivity/docs/reachability"},next:{title:"Messages",permalink:"/react-native-watch-connectivity/docs/messages"}},c=[{value:"Starting a file transfer",id:"starting-a-file-transfer",children:[{value:"Using the camera",id:"using-the-camera",children:[]},{value:"Using the file system",id:"using-the-file-system",children:[]}]},{value:"Monitoring file transfers",id:"monitoring-file-transfers",children:[{value:"Get file transfers",id:"get-file-transfers",children:[]},{value:"File transfer events",id:"file-transfer-events",children:[]}]}],l={rightToc:c};function f(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"starting-a-file-transfer"},"Starting a file transfer"),Object(a.b)("h3",{id:"using-the-camera"},"Using the camera"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import ImagePicker from 'react-native-image-picker';\nimport {startFileTransfer} from \"react-native-watch-connectivity\";\n\nImagePicker.showImagePicker(\n  { /* options */ },\n  ({uri}) => {\n     if (uri) {\n        startFileTransfer(uri).then(({id}) => {\n          console.log(`Started file transfer with id ${id}`)\n        })\n     }\n  }\n)\n")),Object(a.b)("h3",{id:"using-the-file-system"},"Using the file system"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import fs from 'react-native-fs';\nimport {startFileTransfer} from \"react-native-watch-connectivity\";\n\nlet uri = 'file://' + fs.MainBundlePath + '/MyImage.jpg';\n\nconst {id} = await startFileTransfer(uri);\n\nconsole.log(`Started file transfer with id ${id}`);\n")),Object(a.b)("h2",{id:"monitoring-file-transfers"},"Monitoring file transfers"),Object(a.b)("h3",{id:"get-file-transfers"},"Get file transfers"),Object(a.b)("p",null,"This includes ongoing, finished, cancelled & errored file transfers."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import {getFileTransfers, FileTransferEvent} from "react-native-watch-connectivity";\n\nconst transfers = await getFileTransfers();\n\nObject.entries(transfers).map(([transferId, info]) => {\n    console.log(info.fractionCompleted); // 0 - 1\n    console.log(info.error); // Error || null\n    console.log(info.endTime); // null || number\n});\n')),Object(a.b)("h3",{id:"file-transfer-events"},"File transfer events"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import {monitorFileTransfers, FileTransferEvent} from "react-native-watch-connectivity";\n\nconst unsubscribe = monitorFileTransfers(event => {\n    switch(event.type) {\n        case FileTransferEvent.STARTED:\n            console.log(`${event.uri}: started file transfer`);\n            break;\n        case FileTransferEvent.PROGRESS:\n            console.log(`${event.uri}: file transfer progress: ${event.fractionCompleted * 100}%`);\n            break;\n        case FileTransferEvent.FINISHED:\n            const timeTakenInSeconds = (event.endTime - event.startTime) / 1000;\n            console.log(`${event.uri}: file transfer finished in ${timeTakenInSeconds}s`);\n            break;\n        case FileTransferEvent.ERROR:\n            console.error(`${event.uri}: transfer failed`, event.error);\n            break;\n    }\n})\n')))}f.isMDXComponent=!0}}]);