(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{1026:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),l=p(a),m=r,O=l["".concat(o,".").concat(m)]||l[m]||d[m]||c;return a?n.a.createElement(O,s(s({ref:t},i),{},{components:a})):n.a.createElement(O,s({ref:t},i))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=m;var s={};for(var b in t)hasOwnProperty.call(t,b)&&(s[b]=t[b]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<c;i++)o[i]=a[i];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},411:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),c=(a(0),a(1026)),o={id:"core.transactioneventbroadcaster",title:"Class: TransactionEventBroadcaster",sidebar_label:"TransactionEventBroadcaster",custom_edit_url:null,hide_title:!0},s={unversionedId:"api/classes/core.transactioneventbroadcaster",id:"version-4.5/api/classes/core.transactioneventbroadcaster",isDocsHomePage:!1,title:"Class: TransactionEventBroadcaster",description:"Class: TransactionEventBroadcaster",source:"@site/versioned_docs/version-4.5/api/classes/core.transactioneventbroadcaster.md",slug:"/api/classes/core.transactioneventbroadcaster",permalink:"/docs/api/classes/core.transactioneventbroadcaster",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1619774883,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"TransactionEventBroadcaster",sidebar:"version-4.5/API",previous:{title:"Class: TransactionContext",permalink:"/docs/api/classes/core.transactioncontext"},next:{title:"Class: Type<JSType, DBType>",permalink:"/docs/api/classes/core.type"}},b=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"eventManager",id:"eventmanager",children:[]}]},{value:"Methods",id:"methods",children:[{value:"dispatchEvent",id:"dispatchevent",children:[]}]}],i={toc:b};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-transactioneventbroadcaster"},"Class: TransactionEventBroadcaster"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".TransactionEventBroadcaster"),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new TransactionEventBroadcaster"),"(",Object(c.b)("inlineCode",{parentName:"p"},"em"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">",", ",Object(c.b)("inlineCode",{parentName:"p"},"uow?"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.unitofwork"},Object(c.b)("em",{parentName:"a"},"UnitOfWork")),"): ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.transactioneventbroadcaster"},Object(c.b)("em",{parentName:"a"},"TransactionEventBroadcaster"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"em")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"uow?")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/api/classes/core.unitofwork"},Object(c.b)("em",{parentName:"a"},"UnitOfWork")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.transactioneventbroadcaster"},Object(c.b)("em",{parentName:"a"},"TransactionEventBroadcaster"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/TransactionEventBroadcaster.ts#L8"},"packages/core/src/events/TransactionEventBroadcaster.ts:8")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"eventmanager"},"eventManager"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Private")," ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"eventManager"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.eventmanager"},Object(c.b)("em",{parentName:"a"},"EventManager"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/TransactionEventBroadcaster.ts#L8"},"packages/core/src/events/TransactionEventBroadcaster.ts:8")),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"dispatchevent"},"dispatchEvent"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"dispatchEvent"),"(",Object(c.b)("inlineCode",{parentName:"p"},"event"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core#transactioneventtype"},Object(c.b)("em",{parentName:"a"},"TransactionEventType")),", ",Object(c.b)("inlineCode",{parentName:"p"},"transaction?"),": ",Object(c.b)("em",{parentName:"p"},"any"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"event")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/api/modules/core#transactioneventtype"},Object(c.b)("em",{parentName:"a"},"TransactionEventType")))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"transaction?")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"any"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/TransactionEventBroadcaster.ts#L13"},"packages/core/src/events/TransactionEventBroadcaster.ts:13")))}p.isMDXComponent=!0}}]);