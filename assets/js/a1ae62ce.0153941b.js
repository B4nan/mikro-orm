(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40647],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return k}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),k=i,m=u["".concat(p,".").concat(k)]||u[k]||s[k]||o;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},27484:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=t(74034),i=t(79973),o=(t(67294),t(3905)),a={id:"knex.knex-1.oracledbconnectionconfig",title:"Interface: OracleDbConnectionConfig",sidebar_label:"OracleDbConnectionConfig",custom_edit_url:null,hide_title:!0},l="Interface: OracleDbConnectionConfig",p={unversionedId:"api/interfaces/knex.knex-1.oracledbconnectionconfig",id:"version-4.5/api/interfaces/knex.knex-1.oracledbconnectionconfig",isDocsHomePage:!1,title:"Interface: OracleDbConnectionConfig",description:"knex.Knex.OracleDbConnectionConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.oracledbconnectionconfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.oracledbconnectionconfig",permalink:"/docs/api/interfaces/knex.knex-1.oracledbconnectionconfig",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1625666389,formattedLastUpdatedAt:"7/7/2021",frontMatter:{id:"knex.knex-1.oracledbconnectionconfig",title:"Interface: OracleDbConnectionConfig",sidebar_label:"OracleDbConnectionConfig",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"OnConflictQueryBuilder",permalink:"/docs/api/interfaces/knex.knex-1.onconflictquerybuilder"},next:{title:"OrderBy",permalink:"/docs/api/interfaces/knex.knex-1.orderby"}},c=[{value:"Properties",id:"properties",children:[{value:"connectString",id:"connectstring",children:[]},{value:"database",id:"database",children:[]},{value:"debug",id:"debug",children:[]},{value:"domain",id:"domain",children:[]},{value:"host",id:"host",children:[]},{value:"instanceName",id:"instancename",children:[]},{value:"password",id:"password",children:[]},{value:"requestTimeout",id:"requesttimeout",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],d={toc:c};function s(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interface-oracledbconnectionconfig"},"Interface: OracleDbConnectionConfig"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".OracleDbConnectionConfig"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"connectstring"},"connectString"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"connectString"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2039"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"database"},"database"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"database"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2034"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"debug"},"debug"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"debug"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2037"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"domain"},"domain"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"domain"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2035"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"host"},"host"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"host"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2031"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"instancename"},"instanceName"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"instanceName"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2036"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"password"},"password"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"password"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2033"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"requesttimeout"},"requestTimeout"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"requestTimeout"),": ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2038"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"user"},"user"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"user"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2032"),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"expirationchecker"},"expirationChecker"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional"),(0,o.kt)("strong",{parentName:"p"},"expirationChecker"),"(): ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2040"))}s.isMDXComponent=!0}}]);