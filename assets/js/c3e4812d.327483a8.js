(window.webpackJsonp=window.webpackJsonp||[]).push([[734],{1052:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),o=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},l=function(e){var t=o(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=o(a),O=r,d=l["".concat(i,".").concat(O)]||l[O]||s[O]||b;return a?n.a.createElement(d,m(m({ref:t},p),{},{components:a})):n.a.createElement(d,m({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,i=new Array(b);i[0]=O;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var p=2;p<b;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},806:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return m})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(8),b=(a(0),a(1052)),i={id:"migrations.migrator",title:"Class: Migrator",sidebar_label:"Migrator",hide_title:!0},m={unversionedId:"api/classes/migrations.migrator",id:"version-4.4/api/classes/migrations.migrator",isDocsHomePage:!1,title:"Class: Migrator",description:"Class: Migrator",source:"@site/versioned_docs/version-4.4/api/classes/migrations.migrator.md",slug:"/api/classes/migrations.migrator",permalink:"/docs/api/classes/migrations.migrator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/migrations.migrator.md",version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1615602791,formattedLastUpdatedAt:"3/13/2021",sidebar_label:"Migrator",sidebar:"version-4.4/API",previous:{title:"Class: MigrationStorage",permalink:"/docs/api/classes/migrations.migrationstorage"},next:{title:"Class: TsMorphMetadataProvider",permalink:"/docs/api/classes/reflection.tsmorphmetadataprovider"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"driver",id:"driver",children:[]},{value:"generator",id:"generator",children:[]},{value:"options",id:"options",children:[]},{value:"runner",id:"runner",children:[]},{value:"schemaGenerator",id:"schemagenerator",children:[]},{value:"storage",id:"storage",children:[]},{value:"umzug",id:"umzug",children:[]}]},{value:"Methods",id:"methods",children:[{value:"createInitialMigration",id:"createinitialmigration",children:[]},{value:"createMigration",id:"createmigration",children:[]},{value:"down",id:"down",children:[]},{value:"ensureMigrationsDirExists",id:"ensuremigrationsdirexists",children:[]},{value:"getExecutedMigrations",id:"getexecutedmigrations",children:[]},{value:"getPendingMigrations",id:"getpendingmigrations",children:[]},{value:"getSchemaDiff",id:"getschemadiff",children:[]},{value:"getStorage",id:"getstorage",children:[]},{value:"initialize",id:"initialize",children:[]},{value:"prefix",id:"prefix",children:[]},{value:"resolve",id:"resolve",children:[]},{value:"runInTransaction",id:"runintransaction",children:[]},{value:"runMigrations",id:"runmigrations",children:[]},{value:"up",id:"up",children:[]},{value:"validateInitialMigration",id:"validateinitialmigration",children:[]}]}],p={toc:c};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-migrator"},"Class: Migrator"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/migrations"},"migrations"),".Migrator"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Migrator"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new Migrator"),"(",Object(b.b)("inlineCode",{parentName:"p"},"em"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.entitymanager"},Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqldriver"},Object(b.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},Object(b.b)("em",{parentName:"a"},"AbstractSqlConnection")),">",">","): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrator"},Object(b.b)("em",{parentName:"a"},"Migrator"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"em")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/knex.entitymanager"},Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/knex.abstractsqldriver"},Object(b.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/knex.abstractsqlconnection"},Object(b.b)("em",{parentName:"a"},"AbstractSqlConnection")),">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrator"},Object(b.b)("em",{parentName:"a"},"Migrator"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L20"},"packages/migrations/src/Migrator.ts:20")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"config"},"config"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"config"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L16"},"packages/migrations/src/Migrator.ts:16")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"driver"},"driver"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"driver"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqldriver"},Object(b.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},Object(b.b)("em",{parentName:"a"},"AbstractSqlConnection")),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L14"},"packages/migrations/src/Migrator.ts:14")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"generator"},"generator"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"generator"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrationgenerator"},Object(b.b)("em",{parentName:"a"},"MigrationGenerator"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L19"},"packages/migrations/src/Migrator.ts:19")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"options"},"options"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"options"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#migrationsoptions"},Object(b.b)("em",{parentName:"a"},"MigrationsOptions"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L17"},"packages/migrations/src/Migrator.ts:17")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"runner"},"runner"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"runner"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrationrunner"},Object(b.b)("em",{parentName:"a"},"MigrationRunner"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L18"},"packages/migrations/src/Migrator.ts:18")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"schemagenerator"},"schemaGenerator"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"schemaGenerator"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.schemagenerator"},Object(b.b)("em",{parentName:"a"},"SchemaGenerator"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L15"},"packages/migrations/src/Migrator.ts:15")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"storage"},"storage"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"storage"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrationstorage"},Object(b.b)("em",{parentName:"a"},"MigrationStorage"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L20"},"packages/migrations/src/Migrator.ts:20")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"umzug"},"umzug"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"umzug"),": ",Object(b.b)("em",{parentName:"p"},"Umzug")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L13"},"packages/migrations/src/Migrator.ts:13")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"createinitialmigration"},"createInitialMigration"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"createInitialMigration"),"(",Object(b.b)("inlineCode",{parentName:"p"},"path?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrationresult"},Object(b.b)("em",{parentName:"a"},"MigrationResult")),">"),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"path?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrationresult"},Object(b.b)("em",{parentName:"a"},"MigrationResult")),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L62"},"packages/migrations/src/Migrator.ts:62")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"createmigration"},"createMigration"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"createMigration"),"(",Object(b.b)("inlineCode",{parentName:"p"},"path?"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"blank?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),", ",Object(b.b)("inlineCode",{parentName:"p"},"initial?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrationresult"},Object(b.b)("em",{parentName:"a"},"MigrationResult")),">"),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"path?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string")),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"blank")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:null},"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"initial")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:null},"false")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrationresult"},Object(b.b)("em",{parentName:"a"},"MigrationResult")),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L41"},"packages/migrations/src/Migrator.ts:41")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"down"},"down"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"down"),"(",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrateoptions"},Object(b.b)("em",{parentName:"a"},"MigrateOptions")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#umzugmigration"},Object(b.b)("em",{parentName:"a"},"UmzugMigration")),"[]",">"),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"),"[] ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/migrations#migrateoptions"},Object(b.b)("em",{parentName:"a"},"MigrateOptions")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#umzugmigration"},Object(b.b)("em",{parentName:"a"},"UmzugMigration")),"[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L139"},"packages/migrations/src/Migrator.ts:139")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ensuremigrationsdirexists"},"ensureMigrationsDirExists"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"ensureMigrationsDirExists"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L239"},"packages/migrations/src/Migrator.ts:239")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getexecutedmigrations"},"getExecutedMigrations"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getExecutedMigrations"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrationrow"},Object(b.b)("em",{parentName:"a"},"MigrationRow")),"[]",">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrationrow"},Object(b.b)("em",{parentName:"a"},"MigrationRow")),"[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L123"},"packages/migrations/src/Migrator.ts:123")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getpendingmigrations"},"getPendingMigrations"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getPendingMigrations"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#umzugmigration"},Object(b.b)("em",{parentName:"a"},"UmzugMigration")),"[]",">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#umzugmigration"},Object(b.b)("em",{parentName:"a"},"UmzugMigration")),"[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L129"},"packages/migrations/src/Migrator.ts:129")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getschemadiff"},"getSchemaDiff"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"getSchemaDiff"),"(",Object(b.b)("inlineCode",{parentName:"p"},"blank"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),", ",Object(b.b)("inlineCode",{parentName:"p"},"initial"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),"[]",">"),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"blank")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"boolean"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"initial")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"boolean"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),"[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L165"},"packages/migrations/src/Migrator.ts:165")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getstorage"},"getStorage"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getStorage"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrationstorage"},Object(b.b)("em",{parentName:"a"},"MigrationStorage"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrationstorage"},Object(b.b)("em",{parentName:"a"},"MigrationStorage"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L143"},"packages/migrations/src/Migrator.ts:143")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"initialize"},"initialize"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"initialize"),"(",Object(b.b)("inlineCode",{parentName:"p"},"MigrationClass"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#constructor"},Object(b.b)("em",{parentName:"a"},"Constructor")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/migrations.migration"},Object(b.b)("em",{parentName:"a"},"Migration")),">",", ",Object(b.b)("inlineCode",{parentName:"p"},"name?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"object")),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"MigrationClass")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#constructor"},Object(b.b)("em",{parentName:"a"},"Constructor")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/migrations.migration"},Object(b.b)("em",{parentName:"a"},"Migration")),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"name?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"object")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"down")),Object(b.b)("td",{parentName:"tr",align:null},"() => ",Object(b.b)("em",{parentName:"td"},"Promise"),"<",Object(b.b)("em",{parentName:"td"},"void"),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"up")),Object(b.b)("td",{parentName:"tr",align:null},"() => ",Object(b.b)("em",{parentName:"td"},"Promise"),"<",Object(b.b)("em",{parentName:"td"},"void"),">")))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L155"},"packages/migrations/src/Migrator.ts:155")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"prefix"},"prefix"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"prefix"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": T): T"),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"),"[] ","|"," { ",Object(b.b)("inlineCode",{parentName:"td"},"from?"),": ",Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string")," ; ",Object(b.b)("inlineCode",{parentName:"td"},"migrations?"),": ",Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"),"[] ; ",Object(b.b)("inlineCode",{parentName:"td"},"to?"),": ",Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string")," ; ",Object(b.b)("inlineCode",{parentName:"td"},"transaction?"),": ",Object(b.b)("em",{parentName:"td"},"any"),"  }")))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",{parentName:"tr",align:null},"T")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L189"},"packages/migrations/src/Migrator.ts:189")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"resolve"},"resolve"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"resolve"),"(",Object(b.b)("inlineCode",{parentName:"p"},"file"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"object")),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"file")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"object")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"down")),Object(b.b)("td",{parentName:"tr",align:null},"() => ",Object(b.b)("em",{parentName:"td"},"Promise"),"<",Object(b.b)("em",{parentName:"td"},"void"),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"up")),Object(b.b)("td",{parentName:"tr",align:null},"() => ",Object(b.b)("em",{parentName:"td"},"Promise"),"<",Object(b.b)("em",{parentName:"td"},"void"),">")))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L147"},"packages/migrations/src/Migrator.ts:147")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"runintransaction"},"runInTransaction"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"runInTransaction"),"(",Object(b.b)("inlineCode",{parentName:"p"},"trx"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",Object(b.b)("em",{parentName:"p"},"up")," ","|"," ",Object(b.b)("em",{parentName:"p"},"down"),", ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrateoptions"},Object(b.b)("em",{parentName:"a"},"MigrateOptions")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<Migration[]",">"),Object(b.b)("h4",{id:"parameters-8"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"trx")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"up")," ","|"," ",Object(b.b)("em",{parentName:"td"},"down"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"),"[] ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/migrations#migrateoptions"},Object(b.b)("em",{parentName:"a"},"MigrateOptions")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<Migration[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L229"},"packages/migrations/src/Migrator.ts:229")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"runmigrations"},"runMigrations"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"runMigrations"),"(",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",Object(b.b)("em",{parentName:"p"},"up")," ","|"," ",Object(b.b)("em",{parentName:"p"},"down"),", ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrateoptions"},Object(b.b)("em",{parentName:"a"},"MigrateOptions")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<Migration[]",">"),Object(b.b)("h4",{id:"parameters-9"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"up")," ","|"," ",Object(b.b)("em",{parentName:"td"},"down"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"),"[] ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/migrations#migrateoptions"},Object(b.b)("em",{parentName:"a"},"MigrateOptions")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<Migration[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L214"},"packages/migrations/src/Migrator.ts:214")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"up"},"up"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"up"),"(",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrateoptions"},Object(b.b)("em",{parentName:"a"},"MigrateOptions")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#umzugmigration"},Object(b.b)("em",{parentName:"a"},"UmzugMigration")),"[]",">"),Object(b.b)("h4",{id:"parameters-10"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"),"[] ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/migrations#migrateoptions"},Object(b.b)("em",{parentName:"a"},"MigrateOptions")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#umzugmigration"},Object(b.b)("em",{parentName:"a"},"UmzugMigration")),"[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L135"},"packages/migrations/src/Migrator.ts:135")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"validateinitialmigration"},"validateInitialMigration"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"validateInitialMigration"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"boolean"),">"),Object(b.b)("p",null,"Initial migration can be created only if:"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"no previous migrations were generated or executed"),Object(b.b)("li",{parentName:"ol"},"existing schema do not contain any of the tables defined by metadata")),Object(b.b)("p",null,"If existing schema contains all of the tables already, we return true, based on that we mark the migration as already executed.\nIf only some of the tables are present, exception is thrown."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"boolean"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migrator.ts#L87"},"packages/migrations/src/Migrator.ts:87")))}o.isMDXComponent=!0}}]);