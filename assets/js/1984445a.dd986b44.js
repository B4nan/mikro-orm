(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1256:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),s=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),l=s(r),O=n,d=l["".concat(b,".").concat(O)]||l[O]||m[O]||c;return r?a.a.createElement(d,p(p({ref:t},o),{},{components:r})):a.a.createElement(d,p({ref:t},o))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,b=new Array(c);b[0]=O;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,b[1]=p;for(var o=2;o<c;o++)b[o]=r[o];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},179:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),c=(r(0),r(1256)),b={id:"core.nonuniquefieldnameexception",title:"Class: NonUniqueFieldNameException",sidebar_label:"NonUniqueFieldNameException",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/classes/core.nonuniquefieldnameexception",id:"api/classes/core.nonuniquefieldnameexception",isDocsHomePage:!1,title:"Class: NonUniqueFieldNameException",description:"Class: NonUniqueFieldNameException",source:"@site/docs/api/classes/core.nonuniquefieldnameexception.md",slug:"/api/classes/core.nonuniquefieldnameexception",permalink:"/docs/next/api/classes/core.nonuniquefieldnameexception",editUrl:null,version:"current",sidebar_label:"NonUniqueFieldNameException",sidebar:"API",previous:{title:"Class: MongoNamingStrategy",permalink:"/docs/next/api/classes/core.mongonamingstrategy"},next:{title:"Class: NotFoundError<T>",permalink:"/docs/next/api/classes/core.notfounderror"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"prepareStackTrace",id:"preparestacktrace",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]},{value:"stackTraceLimit",id:"stacktracelimit",children:[]}]},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[]}]}],o={toc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-nonuniquefieldnameexception"},"Class: NonUniqueFieldNameException"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".NonUniqueFieldNameException"),Object(c.b)("p",null,"Exception for a non-unique/ambiguous specified field name in a statement detected in the driver."),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),Object(c.b)("em",{parentName:"a"},"ServerException"))),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"NonUniqueFieldNameException")))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new NonUniqueFieldNameException"),"(",Object(c.b)("inlineCode",{parentName:"p"},"previous"),": Error): ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.nonuniquefieldnameexception"}),Object(c.b)("em",{parentName:"a"},"NonUniqueFieldNameException"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"previous")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Error")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.nonuniquefieldnameexception"}),Object(c.b)("em",{parentName:"a"},"NonUniqueFieldNameException"))),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f8c626d/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"code"},"code"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"code"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#code"}),"code")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f8c626d/packages/core/src/exceptions.ts#L6"}),"packages/core/src/exceptions.ts:6")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"errmsg"},"errmsg"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"errmsg"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#errmsg"}),"errmsg")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f8c626d/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"errno"},"errno"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"errno"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#errno"}),"errno")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f8c626d/packages/core/src/exceptions.ts#L7"}),"packages/core/src/exceptions.ts:7")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"message"},"message"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"message"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#message"}),"message")),Object(c.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#name"}),"name")),Object(c.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"preparestacktrace"},"prepareStackTrace"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"prepareStackTrace"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(c.b)("inlineCode",{parentName:"p"},"err"),": Error, ",Object(c.b)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Optional override for formatting stack traces"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces"}),"https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#preparestacktrace"}),"prepareStackTrace")),Object(c.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sqlmessage"},"sqlMessage"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"sqlMessage"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#sqlmessage"}),"sqlMessage")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f8c626d/packages/core/src/exceptions.ts#L9"}),"packages/core/src/exceptions.ts:9")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sqlstate"},"sqlState"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"sqlState"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#sqlstate"}),"sqlState")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f8c626d/packages/core/src/exceptions.ts#L8"}),"packages/core/src/exceptions.ts:8")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"stack"},"stack"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"stack"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#stack"}),"stack")),Object(c.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"stacktracelimit"},"stackTraceLimit"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"stackTraceLimit"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#stacktracelimit"}),"stackTraceLimit")),Object(c.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"capturestacktrace"},"captureStackTrace"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"captureStackTrace"),"(",Object(c.b)("inlineCode",{parentName:"p"},"targetObject"),": ",Object(c.b)("em",{parentName:"p"},"object"),", ",Object(c.b)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Create .stack property on a target object"),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"targetObject")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"object"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"constructorOpt?")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException")),Object(c.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}s.isMDXComponent=!0}}]);