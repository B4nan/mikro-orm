(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1256:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return s}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(r),j=a,s=m["".concat(c,".").concat(j)]||m[j]||O[j]||b;return r?n.a.createElement(s,i(i({ref:t},p),{},{components:r})):n.a.createElement(s,i({ref:t},p))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,c=new Array(b);c[0]=j;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<b;p++)c[p]=r[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}j.displayName="MDXCreateElement"},189:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),b=(r(0),r(1256)),c={id:"sourcefile",title:"Class: SourceFile",sidebar_label:"SourceFile"},i={unversionedId:"api/classes/sourcefile",id:"version-4.3/api/classes/sourcefile",isDocsHomePage:!1,title:"Class: SourceFile",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/classes/sourcefile.md",slug:"/api/classes/sourcefile",permalink:"/docs/4.3/api/classes/sourcefile",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/sourcefile.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612554473,sidebar_label:"SourceFile",sidebar:"version-4.3/API",previous:{title:"Class: ServerException",permalink:"/docs/4.3/api/classes/serverexception"},next:{title:"Class: SqlEntityManager<D>",permalink:"/docs/4.3/api/classes/sqlentitymanager"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"coreImports",id:"coreimports",children:[]},{value:"entityImports",id:"entityimports",children:[]},{value:"helper",id:"helper",children:[]},{value:"meta",id:"meta",children:[]},{value:"namingStrategy",id:"namingstrategy",children:[]}]},{value:"Methods",id:"methods",children:[{value:"generate",id:"generate",children:[]},{value:"getBaseName",id:"getbasename",children:[]},{value:"getCommonDecoratorOptions",id:"getcommondecoratoroptions",children:[]},{value:"getDecoratorType",id:"getdecoratortype",children:[]},{value:"getForeignKeyDecoratorOptions",id:"getforeignkeydecoratoroptions",children:[]},{value:"getPropertyDecorator",id:"getpropertydecorator",children:[]},{value:"getPropertyDefinition",id:"getpropertydefinition",children:[]},{value:"getPropertyIndexes",id:"getpropertyindexes",children:[]},{value:"getScalarPropertyDecoratorOptions",id:"getscalarpropertydecoratoroptions",children:[]}]}],p={toc:o};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"SourceFile"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new SourceFile"),"(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": EntityMetadata, ",Object(b.b)("inlineCode",{parentName:"p"},"namingStrategy"),": NamingStrategy, ",Object(b.b)("inlineCode",{parentName:"p"},"helper"),": SchemaHelper): ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/classes/sourcefile"}),"SourceFile")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/entity-generator/src/SourceFile.ts#L7"}),"packages/entity-generator/src/SourceFile.ts:7"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"EntityMetadata")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"namingStrategy")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NamingStrategy")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"helper")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SchemaHelper")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/classes/sourcefile"}),"SourceFile")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"coreimports"},"coreImports"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"coreImports"),": Set","<","string> = new Set","<","string>()"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/entity-generator/src/SourceFile.ts#L6"}),"packages/entity-generator/src/SourceFile.ts:6"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"entityimports"},"entityImports"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"entityImports"),": Set","<","string> = new Set","<","string>()"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/entity-generator/src/SourceFile.ts#L7"}),"packages/entity-generator/src/SourceFile.ts:7"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"helper"},"helper"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"helper"),": SchemaHelper"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/entity-generator/src/SourceFile.ts#L11"}),"packages/entity-generator/src/SourceFile.ts:11"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"meta"},"meta"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"meta"),": EntityMetadata"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/entity-generator/src/SourceFile.ts#L9"}),"packages/entity-generator/src/SourceFile.ts:9"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"namingstrategy"},"namingStrategy"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"namingStrategy"),": NamingStrategy"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/entity-generator/src/SourceFile.ts#L10"}),"packages/entity-generator/src/SourceFile.ts:10"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"generate"},"generate"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"generate"),"(): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/entity-generator/src/SourceFile.ts#L13"}),"packages/entity-generator/src/SourceFile.ts:13"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getbasename"},"getBaseName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getBaseName"),"(): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/entity-generator/src/SourceFile.ts#L53"}),"packages/entity-generator/src/SourceFile.ts:53"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getcommondecoratoroptions"},"getCommonDecoratorOptions"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"getCommonDecoratorOptions"),"(",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"),", ",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": EntityProperty, ",Object(b.b)("inlineCode",{parentName:"p"},"columnType"),": string ","|"," undefined): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/entity-generator/src/SourceFile.ts#L123"}),"packages/entity-generator/src/SourceFile.ts:123"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"EntityProperty")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"columnType")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|"," undefined")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getdecoratortype"},"getDecoratorType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"getDecoratorType"),"(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": EntityProperty): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/entity-generator/src/SourceFile.ts#L194"}),"packages/entity-generator/src/SourceFile.ts:194"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"EntityProperty")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getforeignkeydecoratoroptions"},"getForeignKeyDecoratorOptions"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"getForeignKeyDecoratorOptions"),"(",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"),", ",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": EntityProperty): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/entity-generator/src/SourceFile.ts#L159"}),"packages/entity-generator/src/SourceFile.ts:159"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"EntityProperty")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getpropertydecorator"},"getPropertyDecorator"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"getPropertyDecorator"),"(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": EntityProperty, ",Object(b.b)("inlineCode",{parentName:"p"},"padLeft"),": number): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/entity-generator/src/SourceFile.ts#L71"}),"packages/entity-generator/src/SourceFile.ts:71"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"EntityProperty")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"padLeft")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getpropertydefinition"},"getPropertyDefinition"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"getPropertyDefinition"),"(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": EntityProperty, ",Object(b.b)("inlineCode",{parentName:"p"},"padLeft"),": number): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/entity-generator/src/SourceFile.ts#L57"}),"packages/entity-generator/src/SourceFile.ts:57"))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"EntityProperty")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"padLeft")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getpropertyindexes"},"getPropertyIndexes"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"getPropertyIndexes"),"(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": EntityProperty, ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"),"): string[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/entity-generator/src/SourceFile.ts#L95"}),"packages/entity-generator/src/SourceFile.ts:95"))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"EntityProperty")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string[]"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getscalarpropertydecoratoroptions"},"getScalarPropertyDecoratorOptions"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"getScalarPropertyDecoratorOptions"),"(",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"),", ",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": EntityProperty, ",Object(b.b)("inlineCode",{parentName:"p"},"columnType"),": string ","|"," undefined): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/entity-generator/src/SourceFile.ts#L143"}),"packages/entity-generator/src/SourceFile.ts:143"))),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"EntityProperty")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"columnType")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|"," undefined")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"))}l.isMDXComponent=!0}}]);