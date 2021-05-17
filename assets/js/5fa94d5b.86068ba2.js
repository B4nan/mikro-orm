(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89925],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return s},kt:function(){return c}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),p=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,m=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),k=p(a),c=n,g=k["".concat(m,".").concat(c)]||k[c]||d[c]||i;return a?r.createElement(g,o(o({ref:e},s),{},{components:a})):r.createElement(g,o({ref:e},s))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},54603:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m},default:function(){return s}});var r=a(74034),n=a(79973),i=(a(67294),a(3905)),o={id:"migrations",title:"Module: migrations",sidebar_label:"migrations",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/modules/migrations",id:"version-4.5/api/modules/migrations",isDocsHomePage:!1,title:"Module: migrations",description:"Table of contents",source:"@site/versioned_docs/version-4.5/api/modules/migrations.md",sourceDirName:"api/modules",slug:"/api/modules/migrations",permalink:"/docs/api/modules/migrations",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1621217237,formattedLastUpdatedAt:"5/17/2021",sidebar_label:"migrations",frontMatter:{id:"migrations",title:"Module: migrations",sidebar_label:"migrations",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Module: knex",permalink:"/docs/api/modules/knex"},next:{title:"Module: reflection",permalink:"/docs/api/modules/reflection"}},m=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Classes",id:"classes",children:[]}]},{value:"Type aliases",id:"type-aliases",children:[{value:"MigrateOptions",id:"migrateoptions",children:[]},{value:"MigrationResult",id:"migrationresult",children:[]},{value:"MigrationRow",id:"migrationrow",children:[]},{value:"Query",id:"query",children:[]},{value:"UmzugMigration",id:"umzugmigration",children:[]}]}],p={toc:m};function s(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/classes/migrations.migration"},"Migration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/classes/migrations.migrationgenerator"},"MigrationGenerator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/classes/migrations.migrationrunner"},"MigrationRunner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/classes/migrations.migrationstorage"},"MigrationStorage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/classes/migrations.migrator"},"Migrator"))),(0,i.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,i.kt)("h3",{id:"migrateoptions"},"MigrateOptions"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"MigrateOptions"),": ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"from"),"?"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"migrations"),"?"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"to"),"?"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"transaction"),"?"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#transaction"},(0,i.kt)("em",{parentName:"a"},"Transaction")))))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/typings.ts#L4"},"packages/migrations/src/typings.ts:4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"migrationresult"},"MigrationResult"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"MigrationResult"),": ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"code")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"diff")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fileName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/typings.ts#L5"},"packages/migrations/src/typings.ts:5")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"migrationrow"},"MigrationRow"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"MigrationRow"),": ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("h4",{id:"type-declaration-2"},"Type declaration:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"executed_at")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Date")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/typings.ts#L6"},"packages/migrations/src/typings.ts:6")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"query"},"Query"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"Query"),": ",(0,i.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,i.kt)("em",{parentName:"a"},"QueryBuilder"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.raw"},(0,i.kt)("em",{parentName:"a"},"Raw"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migration.ts#L4"},"packages/migrations/src/Migration.ts:4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"umzugmigration"},"UmzugMigration"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"UmzugMigration"),": ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("h4",{id:"type-declaration-3"},"Type declaration:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"file")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name"),"?"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"path"),"?"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/typings.ts#L3"},"packages/migrations/src/typings.ts:3")))}s.isMDXComponent=!0}}]);