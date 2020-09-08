(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{453:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(459)),i={title:"Schema Generator"},c={id:"version-3.6/schema-generator",title:"Schema Generator",description:"> SchemaGenerator can do harm to your database. It will drop or alter tables, indexes, ",source:"@site/versioned_docs/version-3.6/schema-generator.md",permalink:"/docs/3.6/schema-generator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/schema-generator.md",version:"3.6",sidebar:"version-3.6/docs",previous:{title:"Debugging",permalink:"/docs/3.6/debugging"},next:{title:"Entity Generator",permalink:"/docs/3.6/entity-generator"}},l=[{value:"Using SchemaGenerator programmatically",id:"using-schemagenerator-programmatically",children:[]},{value:"Limitations of SQLite",id:"limitations-of-sqlite",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"SchemaGenerator can do harm to your database. It will drop or alter tables, indexes,\nsequences and such. Please use this tool with caution in development and not on a\nproduction server. It is meant for helping you develop your Database Schema, but NOT\nwith migrating schema from A to B in production. A safe approach would be generating\nthe SQL on development server and saving it into SQL Migration files that are executed\nmanually on the production server.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"SchemaTool assumes your project uses the given database on its own. Update and Drop\ncommands will mess with other tables if they are not related to the current project\nthat is using MikroORM. Please be careful!")),Object(o.b)("p",null,"To generate schema from your entity metadata, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"SchemaGenerator")," helper. "),Object(o.b)("p",null,"You can use it via CLI: "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx mikro-orm schema:create --dump   # Dumps create schema SQL\nnpx mikro-orm schema:update --dump   # Dumps update schema SQL\nnpx mikro-orm schema:drop --dump     # Dumps drop schema SQL\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can also use ",Object(o.b)("inlineCode",{parentName:"p"},"--run")," flag to fire all queries, but be careful as it might break your\ndatabase. Be sure to always check the generated SQL first before executing. Do not use\n",Object(o.b)("inlineCode",{parentName:"p"},"--run")," flag in production! ")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"schema:create")," will automatically create the database if it does not exist. "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"schema:update")," drops all unknown tables by default, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"--no-drop-tables"),"\nto get around it. There is also ",Object(o.b)("inlineCode",{parentName:"p"},"--safe")," flag that will disable both table dropping as\nwell as column dropping. "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"schema:drop")," will by default drop all database tables. You can use ",Object(o.b)("inlineCode",{parentName:"p"},"--drop-db")," flag to drop\nthe whole database instead. "),Object(o.b)("h2",{id:"using-schemagenerator-programmatically"},"Using SchemaGenerator programmatically"),Object(o.b)("p",null,"Or you can create simple script where you initialize MikroORM like this:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"./create-schema.ts"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { MikroORM } from 'mikro-orm';\n\n(async () => {\n  const orm = await MikroORM.init({\n    entities: [Author, Book, ...],\n    dbName: 'your-db-name',\n    // ...\n  });\n  const generator = orm.getSchemaGenerator();\n\n  const dropDump = await generator.getDropSchemaSQL();\n  console.log(dropDump);\n\n  const createDump = await generator.getCreateSchemaSQL();\n  console.log(createDump);\n\n  const updateDump = await generator.getUpdateSchemaSQL();\n  console.log(updateDump);\n\n  // there is also `generate()` method that returns drop + create queries\n  const dropAndCreateDump = await generator.generate();\n  console.log(dropAndCreateDump);\n\n  // or you can run those queries directly, but be sure to check them first!\n  await generator.dropSchema();\n  await generator.createSchema();\n  await generator.updateSchema();\n\n  await orm.close(true);\n})();\n")),Object(o.b)("p",null,"Then run this script via ",Object(o.b)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",Object(o.b)("inlineCode",{parentName:"p"},"node"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ ts-node create-schema\n")),Object(o.b)("h2",{id:"limitations-of-sqlite"},"Limitations of SQLite"),Object(o.b)("p",null,"There are limitations of SQLite database because of which it behaves differently\nthan other SQL drivers. Namely, it is not possible to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"create foreign key constraints when altering columns"),Object(o.b)("li",{parentName:"ul"},"create empty tables without columns"),Object(o.b)("li",{parentName:"ul"},"alter column requires nullability")),Object(o.b)("p",null,"Because of this, you can end up with different schema with SQLite, so it is not\nsuggested to use SQLite for integration tests of your application."))}u.isMDXComponent=!0},459:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return n?a.a.createElement(d,c({ref:t},s,{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);