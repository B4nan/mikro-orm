(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56271],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return k},kt:function(){return N}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},k=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),s=m(a),N=n,c=s["".concat(o,".").concat(N)]||s[N]||d[N]||i;return a?r.createElement(c,p(p({ref:t},k),{},{components:a})):r.createElement(c,p({ref:t},k))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var m=2;m<i;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},18338:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return o},default:function(){return k}});var r=a(74034),n=a(79973),i=(a(67294),a(3905)),p={id:"knex.criterianode",title:"Class: CriteriaNode",sidebar_label:"CriteriaNode",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/classes/knex.criterianode",id:"version-4.5/api/classes/knex.criterianode",isDocsHomePage:!1,title:"Class: CriteriaNode",description:"knex.CriteriaNode",source:"@site/versioned_docs/version-4.5/api/classes/knex.criterianode.md",sourceDirName:"api/classes",slug:"/api/classes/knex.criterianode",permalink:"/docs/api/classes/knex.criterianode",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1624531769,formattedLastUpdatedAt:"6/24/2021",sidebar_label:"CriteriaNode",frontMatter:{id:"knex.criterianode",title:"Class: CriteriaNode",sidebar_label:"CriteriaNode",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Class: ArrayCriteriaNode",permalink:"/docs/api/classes/knex.arraycriterianode"},next:{title:"Class: CriteriaNodeFactory",permalink:"/docs/api/classes/knex.criterianodefactory"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"entityName",id:"entityname",children:[]},{value:"key",id:"key",children:[]},{value:"metadata",id:"metadata",children:[]},{value:"parent",id:"parent",children:[]},{value:"payload",id:"payload",children:[]},{value:"prop",id:"prop",children:[]}]},{value:"Methods",id:"methods",children:[{value:"custom",id:"custom",children:[]},{value:"getPath",id:"getpath",children:[]},{value:"getPivotPath",id:"getpivotpath",children:[]},{value:"isPivotJoin",id:"ispivotjoin",children:[]},{value:"process",id:"process",children:[]},{value:"renameFieldToPK",id:"renamefieldtopk",children:[]},{value:"shouldInline",id:"shouldinline",children:[]},{value:"shouldRename",id:"shouldrename",children:[]},{value:"willAutoJoin",id:"willautojoin",children:[]},{value:"isCustomExpression",id:"iscustomexpression",children:[]}]}],m={toc:o};function k(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".CriteriaNode"),(0,i.kt)("p",null,"Helper for working with deeply nested where/orderBy/having criteria. Uses composite pattern to build tree from the payload.\nAuto-joins relations and converts payload from { books: { publisher: { name: '...' } } } to { 'publisher_alias.name': '...' }"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"CriteriaNode")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.arraycriterianode"},(0,i.kt)("em",{parentName:"a"},"ArrayCriteriaNode"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.objectcriterianode"},(0,i.kt)("em",{parentName:"a"},"ObjectCriteriaNode"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.scalarcriterianode"},(0,i.kt)("em",{parentName:"a"},"ScalarCriteriaNode"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new CriteriaNode"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"metadata"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},(0,i.kt)("em",{parentName:"a"},"MetadataStorage")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"entityName"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"parent?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.icriterianode"},(0,i.kt)("em",{parentName:"a"},"ICriteriaNode")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key?"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"validate?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.criterianode"},(0,i.kt)("em",{parentName:"a"},"CriteriaNode"))),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"metadata")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.metadatastorage"},(0,i.kt)("em",{parentName:"a"},"MetadataStorage"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entityName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"parent?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.icriterianode"},(0,i.kt)("em",{parentName:"a"},"ICriteriaNode"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"validate")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"true")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.criterianode"},(0,i.kt)("em",{parentName:"a"},"CriteriaNode"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L12"},"packages/knex/src/query/CriteriaNode.ts:12")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"entityname"},"entityName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"entityName"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"key"},"key"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"key"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"metadata"},"metadata"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"metadata"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},(0,i.kt)("em",{parentName:"a"},"MetadataStorage"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"parent"},"parent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"parent"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.icriterianode"},(0,i.kt)("em",{parentName:"a"},"ICriteriaNode"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"payload"},"payload"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"payload"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L11"},"packages/knex/src/query/CriteriaNode.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"prop"},"prop"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"prop"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,i.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L12"},"packages/knex/src/query/CriteriaNode.ts:12")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"custom"},"[custom]"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"[custom]"),"(): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L119"},"packages/knex/src/query/CriteriaNode.ts:119")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getpath"},"getPath"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getPath"),"(): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L78"},"packages/knex/src/query/CriteriaNode.ts:78")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getpivotpath"},"getPivotPath"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getPivotPath"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"path")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L115"},"packages/knex/src/query/CriteriaNode.ts:115")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ispivotjoin"},"isPivotJoin"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private"),(0,i.kt)("strong",{parentName:"p"},"isPivotJoin"),"(): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L103"},"packages/knex/src/query/CriteriaNode.ts:103")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"process"},"process"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"process"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"qb"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.iquerybuilder"},(0,i.kt)("em",{parentName:"a"},"IQueryBuilder")),"<T",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"alias?"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"qb")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.iquerybuilder"},(0,i.kt)("em",{parentName:"a"},"IQueryBuilder")),"<T",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"alias?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L32"},"packages/knex/src/query/CriteriaNode.ts:32")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"renamefieldtopk"},"renameFieldToPK"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"renameFieldToPK"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"qb"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.iquerybuilder"},(0,i.kt)("em",{parentName:"a"},"IQueryBuilder")),"<T",">","): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"qb")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.iquerybuilder"},(0,i.kt)("em",{parentName:"a"},"IQueryBuilder")),"<T",">")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L64"},"packages/knex/src/query/CriteriaNode.ts:64")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"shouldinline"},"shouldInline"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"shouldInline"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"payload"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"payload")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L36"},"packages/knex/src/query/CriteriaNode.ts:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"shouldrename"},"shouldRename"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"shouldRename"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"payload"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"payload")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L44"},"packages/knex/src/query/CriteriaNode.ts:44")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"willautojoin"},"willAutoJoin"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"willAutoJoin"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"qb"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.iquerybuilder"},(0,i.kt)("em",{parentName:"a"},"IQueryBuilder")),"<T",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"alias?"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"type-parameters-2"},"Type parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"qb")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.iquerybuilder"},(0,i.kt)("em",{parentName:"a"},"IQueryBuilder")),"<T",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"alias?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L40"},"packages/knex/src/query/CriteriaNode.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"iscustomexpression"},"isCustomExpression"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static"),(0,i.kt)("strong",{parentName:"p"},"isCustomExpression"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"field"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"field")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L123"},"packages/knex/src/query/CriteriaNode.ts:123")))}k.isMDXComponent=!0}}]);