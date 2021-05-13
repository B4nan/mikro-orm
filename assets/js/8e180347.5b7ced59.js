(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18354],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(k,i(i({ref:t},p),{},{components:n})):o.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},62943:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var o=n(74034),a=n(79973),r=(n(67294),n(3905)),i={title:"Smart Nested Populate"},l={unversionedId:"nested-populate",id:"version-2.7/nested-populate",isDocsHomePage:!1,title:"Smart Nested Populate",description:"MikroORM is capable of loading large nested structures while maintaining good",source:"@site/versioned_docs/version-2.7/nested-populate.md",sourceDirName:".",slug:"/nested-populate",permalink:"/docs/2.7/nested-populate",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/nested-populate.md",version:"2.7",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1620890447,formattedLastUpdatedAt:"5/13/2021",frontMatter:{title:"Smart Nested Populate"},sidebar:"version-2.7/docs",previous:{title:"Cascading persist, merge and remove",permalink:"/docs/2.7/cascading"},next:{title:"Smart query conditions",permalink:"/docs/2.7/query-conditions"}},s=[{value:"Using EntityLoader manually",id:"using-entityloader-manually",children:[]}],d={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MikroORM")," is capable of loading large nested structures while maintaining good\nperformance, querying each database table only once. Imagine you have this nested\nstructure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Book")," has one ",(0,r.kt)("inlineCode",{parentName:"li"},"Publisher")," (M:1), one ",(0,r.kt)("inlineCode",{parentName:"li"},"Author")," (M:1) and many ",(0,r.kt)("inlineCode",{parentName:"li"},"BookTag"),"s (M:N)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Publisher")," has many ",(0,r.kt)("inlineCode",{parentName:"li"},"Test"),"s (M:N)")),(0,r.kt)("p",null,"When you use nested populate while querying all ",(0,r.kt)("inlineCode",{parentName:"p"},"BookTag"),"s, this is what happens in\nthe background:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const tags = await orm.em.findAll(BookTag, ['books.publisher.tests', 'books.author']);\nconsole.log(tags[0].books[0].publisher.tests[0].name); // prints name of nested test\nconsole.log(tags[0].books[0].author.name); // prints name of nested author\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Load all ",(0,r.kt)("inlineCode",{parentName:"li"},"BookTag"),"s"),(0,r.kt)("li",{parentName:"ol"},"Load all ",(0,r.kt)("inlineCode",{parentName:"li"},"Book"),"s associated with previously loaded ",(0,r.kt)("inlineCode",{parentName:"li"},"BookTag"),"s"),(0,r.kt)("li",{parentName:"ol"},"Load all ",(0,r.kt)("inlineCode",{parentName:"li"},"Publisher"),"s associated with previously loaded ",(0,r.kt)("inlineCode",{parentName:"li"},"Book"),"s"),(0,r.kt)("li",{parentName:"ol"},"Load all ",(0,r.kt)("inlineCode",{parentName:"li"},"Test"),"s associated with previously loaded ",(0,r.kt)("inlineCode",{parentName:"li"},"Publisher"),"s"),(0,r.kt)("li",{parentName:"ol"},"Load all ",(0,r.kt)("inlineCode",{parentName:"li"},"Author"),"s associated with previously loaded ",(0,r.kt)("inlineCode",{parentName:"li"},"Book"),"s")),(0,r.kt)("p",null,"For SQL drivers with pivot tables this means:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT `e0`.* FROM `book_tag` AS `e0`;\n\nSELECT `e0`.*, `e1`.`book_id`, `e1`.`book_tag_id`\n  FROM `book` AS `e0` LEFT JOIN `book_to_book_tag` AS `e1` ON `e0`.`id` = `e1`.`book_id`\n  WHERE `e1`.`book_tag_id` IN (?, ?, ?, ?, ?)\n  ORDER BY `e1`.`id` ASC;\n\nSELECT `e0`.* FROM `publisher` AS `e0` WHERE `e0`.`id` IN (?, ?, ?);\n\nSELECT `e0`.*, `e1`.`test_id`, `e1`.`publisher_id`\n  FROM `test` AS `e0` LEFT JOIN `publisher_to_test` AS `e1` ON `e0`.`id` = `e1`.`test_id`\n  WHERE `e1`.`publisher_id` IN (?, ?, ?)\n  ORDER BY `e1`.`id` ASC;\n\nSELECT `e0`.* FROM `author` AS `e0` WHERE `e0`.`id` IN (?);\n")),(0,r.kt)("p",null,"For mongo driver its even simpler as no pivot tables are involved:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'db.getCollection("book-tag").find({}).toArray();\ndb.getCollection("book").find({"tags":{"$in":[...]}}).toArray();\ndb.getCollection("publisher").find({"_id":{"$in":[...]}}).toArray();\ndb.getCollection("test").find({"_id":{"$in":[...]}}).toArray();\ndb.getCollection("author").find({"_id":{"$in":[...]}}).toArray();\n')),(0,r.kt)("h2",{id:"using-entityloader-manually"},"Using EntityLoader manually"),(0,r.kt)("p",null,"Under the hood, EntityManager uses EntityLoader to populate other entities. You can use it\nmanually if you already have list of entities (e.g. queried via QueryBuilder):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { EntityLoader } from 'mikro-orm';\n\nconst loader = new EntityLoader(orm.em);\nconst res = await orm.em.createQueryBuilder(Author).select('*').execute();\nconst authors = res.map(data => orm.em.merge(Author, data));\nawait loader.populate(Author, authors, ['books.tags']);\n\n// now your Author entities will have `books` collections populated, \n// as well as they will have their `tags` collections populated.\nconsole.log(authors[0].books[0].tags[0]); // initialized BookTag\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/2.7/index#table-of-contents"},"\u2190"," Back to table of contents")))}p.isMDXComponent=!0}}]);