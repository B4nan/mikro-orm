(window.webpackJsonp=window.webpackJsonp||[]).push([[653],{1026:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,d=s["".concat(o,".").concat(m)]||s[m]||l[m]||c;return r?a.a.createElement(d,i(i({ref:t},b),{},{components:r})):a.a.createElement(d,i({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},725:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),c=(r(0),r(1026)),o={id:"knex.querytype",title:"Enumeration: QueryType",sidebar_label:"QueryType",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/enums/knex.querytype",id:"version-4.5/api/enums/knex.querytype",isDocsHomePage:!1,title:"Enumeration: QueryType",description:"Enumeration: QueryType",source:"@site/versioned_docs/version-4.5/api/enums/knex.querytype.md",slug:"/api/enums/knex.querytype",permalink:"/docs/api/enums/knex.querytype",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1619774883,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"QueryType",sidebar:"version-4.5/API",previous:{title:"Enumeration: ReferenceType",permalink:"/docs/api/enums/core.referencetype"},next:{title:"Class: CLIConfigurator",permalink:"/docs/api/classes/cli.cliconfigurator"}},u=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"COUNT",id:"count",children:[]},{value:"DELETE",id:"delete",children:[]},{value:"INSERT",id:"insert",children:[]},{value:"SELECT",id:"select",children:[]},{value:"TRUNCATE",id:"truncate",children:[]},{value:"UPDATE",id:"update",children:[]}]}],b={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"enumeration-querytype"},"Enumeration: QueryType"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".QueryType"),Object(c.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(c.b)("h3",{id:"count"},"COUNT"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"COUNT"),': = "COUNT"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/enums.ts#L4"},"packages/knex/src/query/enums.ts:4")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"delete"},"DELETE"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"DELETE"),': = "DELETE"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/enums.ts#L7"},"packages/knex/src/query/enums.ts:7")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"insert"},"INSERT"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"INSERT"),': = "INSERT"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/enums.ts#L5"},"packages/knex/src/query/enums.ts:5")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"select"},"SELECT"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"SELECT"),': = "SELECT"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/enums.ts#L3"},"packages/knex/src/query/enums.ts:3")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"truncate"},"TRUNCATE"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"TRUNCATE"),': = "TRUNCATE"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/enums.ts#L2"},"packages/knex/src/query/enums.ts:2")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"update"},"UPDATE"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"UPDATE"),': = "UPDATE"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/enums.ts#L6"},"packages/knex/src/query/enums.ts:6")))}p.isMDXComponent=!0}}]);