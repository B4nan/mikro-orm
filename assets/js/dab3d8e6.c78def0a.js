(window.webpackJsonp=window.webpackJsonp||[]).push([[807],{1026:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(a),g=r,O=m["".concat(b,".").concat(g)]||m[g]||l[g]||i;return a?n.a.createElement(O,o(o({ref:t},s),{},{components:a})):n.a.createElement(O,o({ref:t},s))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,b=new Array(i);b[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var s=2;s<i;s++)b[s]=a[s];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},880:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),i=(a(0),a(1026)),b={id:"migrations.migrationstorage",title:"Class: MigrationStorage",sidebar_label:"MigrationStorage",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/classes/migrations.migrationstorage",id:"version-4.5/api/classes/migrations.migrationstorage",isDocsHomePage:!1,title:"Class: MigrationStorage",description:"Class: MigrationStorage",source:"@site/versioned_docs/version-4.5/api/classes/migrations.migrationstorage.md",slug:"/api/classes/migrations.migrationstorage",permalink:"/docs/api/classes/migrations.migrationstorage",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1619774883,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"MigrationStorage",sidebar:"version-4.5/API",previous:{title:"Class: MigrationRunner",permalink:"/docs/api/classes/migrations.migrationrunner"},next:{title:"Class: Migrator",permalink:"/docs/api/classes/migrations.migrator"}},c=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"connection",id:"connection",children:[]},{value:"driver",id:"driver",children:[]},{value:"helper",id:"helper",children:[]},{value:"knex",id:"knex",children:[]},{value:"masterTransaction",id:"mastertransaction",children:[]},{value:"options",id:"options",children:[]}]},{value:"Methods",id:"methods",children:[{value:"ensureTable",id:"ensuretable",children:[]},{value:"executed",id:"executed",children:[]},{value:"getExecutedMigrations",id:"getexecutedmigrations",children:[]},{value:"logMigration",id:"logmigration",children:[]},{value:"setMasterMigration",id:"setmastermigration",children:[]},{value:"unlogMigration",id:"unlogmigration",children:[]},{value:"unsetMasterMigration",id:"unsetmastermigration",children:[]}]}],s={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"class-migrationstorage"},"Class: MigrationStorage"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/migrations"},"migrations"),".MigrationStorage"),Object(i.b)("h2",{id:"constructors"},"Constructors"),Object(i.b)("h3",{id:"constructor"},"constructor"),Object(i.b)("p",null,"+"," ",Object(i.b)("strong",{parentName:"p"},"new MigrationStorage"),"(",Object(i.b)("inlineCode",{parentName:"p"},"driver"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqldriver"},Object(i.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},Object(i.b)("em",{parentName:"a"},"AbstractSqlConnection")),">",", ",Object(i.b)("inlineCode",{parentName:"p"},"options"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/core#migrationsoptions"},Object(i.b)("em",{parentName:"a"},"MigrationsOptions")),"): ",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrationstorage"},Object(i.b)("em",{parentName:"a"},"MigrationStorage"))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"driver")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/docs/api/classes/knex.abstractsqldriver"},Object(i.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(i.b)("a",{parentName:"td",href:"/docs/api/classes/knex.abstractsqlconnection"},Object(i.b)("em",{parentName:"a"},"AbstractSqlConnection")),">")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"options")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/docs/api/modules/core#migrationsoptions"},Object(i.b)("em",{parentName:"a"},"MigrationsOptions")))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrationstorage"},Object(i.b)("em",{parentName:"a"},"MigrationStorage"))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationStorage.ts#L10"},"packages/migrations/src/MigrationStorage.ts:10")),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"connection"},"connection"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Private")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"connection"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},Object(i.b)("em",{parentName:"a"},"AbstractSqlConnection"))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationStorage.ts#L7"},"packages/migrations/src/MigrationStorage.ts:7")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"driver"},"driver"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"driver"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqldriver"},Object(i.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},Object(i.b)("em",{parentName:"a"},"AbstractSqlConnection")),">"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"helper"},"helper"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Private")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"helper"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/knex.schemahelper"},Object(i.b)("em",{parentName:"a"},"SchemaHelper"))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationStorage.ts#L9"},"packages/migrations/src/MigrationStorage.ts:9")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"knex"},"knex"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Private")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"knex"),": ",Object(i.b)("em",{parentName:"p"},"Knex"),"<any, unknown[]",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationStorage.ts#L8"},"packages/migrations/src/MigrationStorage.ts:8")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"mastertransaction"},"masterTransaction"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Private")," ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"masterTransaction"),": ",Object(i.b)("em",{parentName:"p"},"any")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationStorage.ts#L10"},"packages/migrations/src/MigrationStorage.ts:10")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"options"},"options"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"options"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/core#migrationsoptions"},Object(i.b)("em",{parentName:"a"},"MigrationsOptions"))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"ensuretable"},"ensureTable"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"ensureTable"),"(): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationStorage.ts#L38"},"packages/migrations/src/MigrationStorage.ts:38")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"executed"},"executed"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"executed"),"(): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<string[]",">"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<string[]",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationStorage.ts#L15"},"packages/migrations/src/MigrationStorage.ts:15")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getexecutedmigrations"},"getExecutedMigrations"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getExecutedMigrations"),"(): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrationrow"},Object(i.b)("em",{parentName:"a"},"MigrationRow")),"[]",">"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrationrow"},Object(i.b)("em",{parentName:"a"},"MigrationRow")),"[]",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationStorage.ts#L28"},"packages/migrations/src/MigrationStorage.ts:28")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"logmigration"},"logMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"logMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"name"),": ",Object(i.b)("em",{parentName:"p"},"string"),"): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"string"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationStorage.ts#L20"},"packages/migrations/src/MigrationStorage.ts:20")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"setmastermigration"},"setMasterMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"setMasterMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"trx"),": ",Object(i.b)("em",{parentName:"p"},"any"),"): ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("h4",{id:"parameters-2"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"trx")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"any"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationStorage.ts#L52"},"packages/migrations/src/MigrationStorage.ts:52")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"unlogmigration"},"unlogMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"unlogMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"name"),": ",Object(i.b)("em",{parentName:"p"},"string"),"): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(i.b)("h4",{id:"parameters-3"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"string"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationStorage.ts#L24"},"packages/migrations/src/MigrationStorage.ts:24")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"unsetmastermigration"},"unsetMasterMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"unsetMasterMigration"),"(): ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationStorage.ts#L56"},"packages/migrations/src/MigrationStorage.ts:56")))}p.isMDXComponent=!0}}]);