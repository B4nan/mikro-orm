(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{1026:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),l=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,O=s["".concat(a,".").concat(m)]||s[m]||u[m]||i;return n?o.a.createElement(O,c(c({ref:t},b),{},{components:n})):o.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var b=2;b<i;b++)a[b]=n[b];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},644:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),i=(n(0),n(1026)),a={id:"core.connectionoptions",title:"Interface: ConnectionOptions",sidebar_label:"ConnectionOptions",custom_edit_url:null},c={unversionedId:"api/interfaces/core.connectionoptions",id:"api/interfaces/core.connectionoptions",isDocsHomePage:!1,title:"Interface: ConnectionOptions",description:"Interface: ConnectionOptions",source:"@site/docs/api/interfaces/core.connectionoptions.md",slug:"/api/interfaces/core.connectionoptions",permalink:"/docs/next/api/interfaces/core.connectionoptions",editUrl:null,version:"current",sidebar_label:"ConnectionOptions",sidebar:"API",previous:{title:"Interface: ConnectionConfig",permalink:"/docs/next/api/interfaces/core.connectionconfig"},next:{title:"Interface: CountOptions<T>",permalink:"/docs/next/api/interfaces/core.countoptions"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"charset",id:"charset",children:[]},{value:"clientUrl",id:"clienturl",children:[]},{value:"collate",id:"collate",children:[]},{value:"dbName",id:"dbname",children:[]},{value:"host",id:"host",children:[]},{value:"multipleStatements",id:"multiplestatements",children:[]},{value:"name",id:"name",children:[]},{value:"password",id:"password",children:[]},{value:"pool",id:"pool",children:[]},{value:"port",id:"port",children:[]},{value:"schema",id:"schema",children:[]},{value:"user",id:"user",children:[]}]}],b={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-connectionoptions"},"Interface: ConnectionOptions"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".ConnectionOptions"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"ConnectionOptions")),Object(i.b)("p",{parentName:"li"},"\u21b3 ",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.mikroormoptions"},Object(i.b)("em",{parentName:"a"},"MikroORMOptions"))))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"charset"},"charset"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"charset"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e087999/packages/core/src/utils/Configuration.ts#L297"},"packages/core/src/utils/Configuration.ts:297")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"clienturl"},"clientUrl"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"clientUrl"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e087999/packages/core/src/utils/Configuration.ts#L292"},"packages/core/src/utils/Configuration.ts:292")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"collate"},"collate"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"collate"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e087999/packages/core/src/utils/Configuration.ts#L298"},"packages/core/src/utils/Configuration.ts:298")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"dbname"},"dbName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"dbName"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e087999/packages/core/src/utils/Configuration.ts#L289"},"packages/core/src/utils/Configuration.ts:289")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"host"},"host"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"host"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e087999/packages/core/src/utils/Configuration.ts#L293"},"packages/core/src/utils/Configuration.ts:293")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"multiplestatements"},"multipleStatements"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"multipleStatements"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e087999/packages/core/src/utils/Configuration.ts#L299"},"packages/core/src/utils/Configuration.ts:299")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"name"},"name"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"name"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e087999/packages/core/src/utils/Configuration.ts#L291"},"packages/core/src/utils/Configuration.ts:291")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"password"},"password"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"password"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e087999/packages/core/src/utils/Configuration.ts#L296"},"packages/core/src/utils/Configuration.ts:296")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"pool"},"pool"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"pool"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.poolconfig"},Object(i.b)("em",{parentName:"a"},"PoolConfig"))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e087999/packages/core/src/utils/Configuration.ts#L300"},"packages/core/src/utils/Configuration.ts:300")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"port"},"port"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"port"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e087999/packages/core/src/utils/Configuration.ts#L294"},"packages/core/src/utils/Configuration.ts:294")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"schema"},"schema"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"schema"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e087999/packages/core/src/utils/Configuration.ts#L290"},"packages/core/src/utils/Configuration.ts:290")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"user"},"user"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"user"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e087999/packages/core/src/utils/Configuration.ts#L295"},"packages/core/src/utils/Configuration.ts:295")))}l.isMDXComponent=!0}}]);