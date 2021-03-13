(window.webpackJsonp=window.webpackJsonp||[]).push([[677],{1052:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.a.createElement(b,s(s({ref:t},c),{},{components:n})):a.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},749:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),o=(n(0),n(1052)),i={title:"Usage with JavaScript",sidebar_label:"Usage with Vanilla JS"},s={unversionedId:"usage-with-js",id:"version-2.7/usage-with-js",isDocsHomePage:!1,title:"Usage with JavaScript",description:"To use mikro-orm with Vanilla JavaScript, define your entities like this:",source:"@site/versioned_docs/version-2.7/usage-with-js.md",slug:"/usage-with-js",permalink:"/docs/2.7/usage-with-js",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/usage-with-js.md",version:"2.7",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1615602791,formattedLastUpdatedAt:"3/13/2021",sidebar_label:"Usage with Vanilla JS",sidebar:"version-2.7/docs",previous:{title:"Using MikroORM with NestJS framework",permalink:"/docs/2.7/usage-with-nestjs"},next:{title:"Creating Custom Driver",permalink:"/docs/2.7/custom-driver"}},p=[],c={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To use ",Object(o.b)("inlineCode",{parentName:"p"},"mikro-orm")," with Vanilla JavaScript, define your entities like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const { Collection } = require('mikro-orm');\nconst { Book } = require('./Book');\nconst { BaseEntity } = require('./BaseEntity');\n\n/**\n * @property {number} id\n * @property {Date} createdAt\n * @property {Date} updatedAt\n * @property {string} name\n * @property {string} email\n * @property {number} age\n * @property {boolean} termsAccepted\n * @property {string[]} identities\n * @property {Date} born\n * @property {Collection<Book>} books\n * @property {Book} favouriteBook\n * @property {number} version\n * @property {string} versionAsString\n */\nclass Author extends BaseEntity {\n\n  /**\n   * @param {string} name\n   * @param {string} email\n   */\n  constructor(name, email) {\n    super();\n    this.name = name;\n    this.email = email;\n    this.createdAt = new Date();\n    this.updatedAt = new Date();\n    this.termsAccepted = false;\n  }\n\n}\n\nconst schema = {\n  name: 'Author',\n  extends: 'BaseEntity',\n  properties: {\n    createdAt: 'Date',\n    updatedAt: {\n      type: 'Date',\n      onUpdate: () => new Date(),\n    },\n    name: 'string',\n    email: 'string',\n    age: 'number',\n    termsAccepted: 'boolean',\n    identities: 'string[]',\n    born: 'Date',\n    books: {\n      reference: '1:m',\n      mappedBy: 'author',\n      type: 'Book',\n    },\n    favouriteBook: {\n      reference: 'm:1',\n      type: 'Book',\n    },\n  },\n  path: __filename,\n};\n\nmodule.exports.Author = Author;\nmodule.exports.entity = Author;\nmodule.exports.schema = schema;\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Do not forget to provide ",Object(o.b)("inlineCode",{parentName:"p"},"name")," and ",Object(o.b)("inlineCode",{parentName:"p"},"path")," schema parameters as well as ",Object(o.b)("inlineCode",{parentName:"p"},"entity"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"schema")," exports.")),Object(o.b)("p",null,"Reference parameter can be one of (where ",Object(o.b)("inlineCode",{parentName:"p"},"SCALAR")," is the default one):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export enum ReferenceType {\n  SCALAR = 'scalar',\n  MANY_TO_ONE = 'm:1',\n  ONE_TO_MANY = '1:m',\n  MANY_TO_MANY = 'm:n',\n}\n")),Object(o.b)("p",null,"When initializing ORM, provide ",Object(o.b)("inlineCode",{parentName:"p"},"JavaScriptMetadataProvider")," as metadata provider:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const orm = await MikroORM.init({\n  entitiesDirs: ['entities'],\n  dbName: '...',\n  metadataProvider: JavaScriptMetadataProvider,\n});\n")),Object(o.b)("p",null,"For more examples of plain JavaScript entity definitions take a look\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/entities-js"},"at the tests")," or at\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm-examples/tree/master/express-js"},"Express JavaScript example"),". "),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/2.7/index#table-of-contents"},"\u2190"," Back to table of contents")))}l.isMDXComponent=!0}}]);