(window.webpackJsonp=window.webpackJsonp||[]).push([[681],{1052:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),o=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=o(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=o(r),s=a,O=m["".concat(c,".").concat(s)]||m[s]||d[s]||b;return r?n.a.createElement(O,p(p({ref:t},i),{},{components:r})):n.a.createElement(O,p({ref:t},i))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,c=new Array(b);c[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var i=2;i<b;i++)c[i]=r[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},753:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return o}));var a=r(3),n=r(8),b=(r(0),r(1052)),c={id:"core.loadedreference",title:"Interface: LoadedReference<T, P>",sidebar_label:"LoadedReference",hide_title:!0},p={unversionedId:"api/interfaces/core.loadedreference",id:"version-4.4/api/interfaces/core.loadedreference",isDocsHomePage:!1,title:"Interface: LoadedReference<T, P>",description:"Interface: LoadedReference",source:"@site/versioned_docs/version-4.4/api/interfaces/core.loadedreference.md",slug:"/api/interfaces/core.loadedreference",permalink:"/docs/api/interfaces/core.loadedreference",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/core.loadedreference.md",version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1615602791,formattedLastUpdatedAt:"3/13/2021",sidebar_label:"LoadedReference",sidebar:"version-4.4/API",previous:{title:"Interface: LoadedCollection<T, P>",permalink:"/docs/api/interfaces/core.loadedcollection"},next:{title:"Interface: ManyToManyOptions<T, O>",permalink:"/docs/api/interfaces/core.manytomanyoptions"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"$",id:"",children:[]}]},{value:"Methods",id:"methods",children:[{value:"get",id:"get",children:[]},{value:"getEntity",id:"getentity",children:[]},{value:"getProperty",id:"getproperty",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"load",id:"load",children:[]},{value:"populated",id:"populated",children:[]},{value:"set",id:"set",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"unwrap",id:"unwrap",children:[]}]}],i={toc:l};function o(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-loadedreferencet-p"},"Interface: LoadedReference<T, P",">"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".LoadedReference"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">"),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"P")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"never"))))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},Object(b.b)("em",{parentName:"a"},"Reference")),"<T",">"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"LoadedReference")))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:""},"$"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"$"),": T & P"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L379"},"packages/core/src/typings.ts:379")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"get"},"get"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"get"),"(): T & P"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T & P"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L380"},"packages/core/src/typings.ts:380")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getentity"},"getEntity"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getEntity"),"(): T"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},"Reference")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Reference.ts#L108"},"packages/core/src/entity/Reference.ts:108")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getproperty"},"getProperty"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getProperty"),"<K",">","(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": K): T","[K]"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"K")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"number")," ","|"," ",Object(b.b)("em",{parentName:"td"},"symbol"))))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",{parentName:"tr",align:null},"K")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T","[K]"),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},"Reference")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Reference.ts#L116"},"packages/core/src/entity/Reference.ts:116")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isinitialized"},"isInitialized"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isInitialized"),"(): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},"Reference")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Reference.ts#L120"},"packages/core/src/entity/Reference.ts:120")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"load"},"load"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"load"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(b.b)("p",null,"Ensures the underlying entity is loaded first (without reloading it if it already is loaded).\nReturns the entity."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},"Reference")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Reference.ts#L67"},"packages/core/src/entity/Reference.ts:67")),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"load"),"<K",">","(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": K): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<T","[K]",">"),Object(b.b)("p",null,"Ensures the underlying entity is loaded first (without reloading it if it already is loaded).\nReturns the requested property instead of the whole entity."),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"K")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"number")," ","|"," ",Object(b.b)("em",{parentName:"td"},"symbol"))))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",{parentName:"tr",align:null},"K")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<T","[K]",">"),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},"Reference")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Reference.ts#L73"},"packages/core/src/entity/Reference.ts:73")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"populated"},"populated"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"populated"),"(",Object(b.b)("inlineCode",{parentName:"p"},"populated?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"populated?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"boolean"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},"Reference")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Reference.ts#L124"},"packages/core/src/entity/Reference.ts:124")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"set"},"set"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"set"),"(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#identifiedreference"},Object(b.b)("em",{parentName:"a"},"IdentifiedReference")),"<T, ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#primaryproperty"},Object(b.b)("em",{parentName:"a"},"PrimaryProperty")),"<T",">",">","): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",{parentName:"tr",align:null},"T ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#identifiedreference"},Object(b.b)("em",{parentName:"a"},"IdentifiedReference")),"<T, ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#primaryproperty"},Object(b.b)("em",{parentName:"a"},"PrimaryProperty")),"<T",">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},"Reference")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Reference.ts#L91"},"packages/core/src/entity/Reference.ts:91")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tojson"},"toJSON"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toJSON"),"(...",Object(b.b)("inlineCode",{parentName:"p"},"args"),": ",Object(b.b)("em",{parentName:"p"},"any"),"[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"...args")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"any"),"[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},"Reference")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Reference.ts#L128"},"packages/core/src/entity/Reference.ts:128")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unwrap"},"unwrap"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"unwrap"),"(): T"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},"Reference")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Reference.ts#L104"},"packages/core/src/entity/Reference.ts:104")))}o.isMDXComponent=!0}}]);