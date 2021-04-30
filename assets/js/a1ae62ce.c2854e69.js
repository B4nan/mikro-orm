(window.webpackJsonp=window.webpackJsonp||[]).push([[585],{1026:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return O}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,O=d["".concat(o,".").concat(u)]||d[u]||s[u]||a;return t?i.a.createElement(O,c(c({ref:n},l),{},{components:t})):i.a.createElement(O,c({ref:n},l))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},658:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(8),a=(t(0),t(1026)),o={id:"knex.knex-1.oracledbconnectionconfig",title:"Interface: OracleDbConnectionConfig",sidebar_label:"OracleDbConnectionConfig",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/knex.knex-1.oracledbconnectionconfig",id:"version-4.5/api/interfaces/knex.knex-1.oracledbconnectionconfig",isDocsHomePage:!1,title:"Interface: OracleDbConnectionConfig",description:"Interface: OracleDbConnectionConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.oracledbconnectionconfig.md",slug:"/api/interfaces/knex.knex-1.oracledbconnectionconfig",permalink:"/docs/api/interfaces/knex.knex-1.oracledbconnectionconfig",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1619774883,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"OracleDbConnectionConfig",sidebar:"version-4.5/API",previous:{title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex-1.onconflictquerybuilder"},next:{title:"Interface: OrderBy<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex-1.orderby"}},b=[{value:"Properties",id:"properties",children:[{value:"connectString",id:"connectstring",children:[]},{value:"database",id:"database",children:[]},{value:"debug",id:"debug",children:[]},{value:"domain",id:"domain",children:[]},{value:"host",id:"host",children:[]},{value:"instanceName",id:"instancename",children:[]},{value:"password",id:"password",children:[]},{value:"requestTimeout",id:"requesttimeout",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],l={toc:b};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-oracledbconnectionconfig"},"Interface: OracleDbConnectionConfig"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".OracleDbConnectionConfig"),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"connectstring"},"connectString"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"connectString"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2039"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"database"},"database"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"database"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2034"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"debug"},"debug"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"debug"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2037"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"domain"},"domain"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"domain"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2035"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"host"},"host"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"host"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2031"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"instancename"},"instanceName"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"instanceName"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2036"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"password"},"password"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"password"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2033"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"requesttimeout"},"requestTimeout"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"requestTimeout"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2038"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"user"},"user"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"user"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2032"),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"expirationchecker"},"expirationChecker"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional"),Object(a.b)("strong",{parentName:"p"},"expirationChecker"),"(): ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2040"))}p.isMDXComponent=!0}}]);