(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6317],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||a;return t?n.createElement(f,c(c({ref:r},s),{},{components:t})):n.createElement(f,c({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81444:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var n=t(74034),o=t(79973),a=(t(67294),t(3905)),c={id:"core.referencetype",title:"Enumeration: ReferenceType",sidebar_label:"ReferenceType",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/enums/core.referencetype",id:"version-4.5/api/enums/core.referencetype",isDocsHomePage:!1,title:"Enumeration: ReferenceType",description:"core.ReferenceType",source:"@site/versioned_docs/version-4.5/api/enums/core.referencetype.md",sourceDirName:"api/enums",slug:"/api/enums/core.referencetype",permalink:"/docs/api/enums/core.referencetype",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1620984059,formattedLastUpdatedAt:"5/14/2021",sidebar_label:"ReferenceType",frontMatter:{id:"core.referencetype",title:"Enumeration: ReferenceType",sidebar_label:"ReferenceType",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Enumeration: QueryOrderNumeric",permalink:"/docs/api/enums/core.queryordernumeric"},next:{title:"Enumeration: QueryType",permalink:"/docs/api/enums/knex.querytype"}},p=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"EMBEDDED",id:"embedded",children:[]},{value:"MANY_TO_MANY",id:"many_to_many",children:[]},{value:"MANY_TO_ONE",id:"many_to_one",children:[]},{value:"ONE_TO_MANY",id:"one_to_many",children:[]},{value:"ONE_TO_ONE",id:"one_to_one",children:[]},{value:"SCALAR",id:"scalar",children:[]}]}],u={toc:p};function s(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ReferenceType"),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration members"),(0,a.kt)("h3",{id:"embedded"},"EMBEDDED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"EMBEDDED"),': = "embedded"'),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L74"},"packages/core/src/enums.ts:74")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"many_to_many"},"MANY","_","TO","_","MANY"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"MANY","_","TO","_","MANY"),': = "m:n"'),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L73"},"packages/core/src/enums.ts:73")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"many_to_one"},"MANY","_","TO","_","ONE"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"MANY","_","TO","_","ONE"),': = "m:1"'),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L72"},"packages/core/src/enums.ts:72")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"one_to_many"},"ONE","_","TO","_","MANY"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ONE","_","TO","_","MANY"),': = "1:m"'),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L71"},"packages/core/src/enums.ts:71")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"one_to_one"},"ONE","_","TO","_","ONE"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ONE","_","TO","_","ONE"),': = "1:1"'),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L70"},"packages/core/src/enums.ts:70")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"scalar"},"SCALAR"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"SCALAR"),': = "scalar"'),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L69"},"packages/core/src/enums.ts:69")))}s.isMDXComponent=!0}}]);