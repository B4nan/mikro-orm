(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75074],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return c}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return n?i.createElement(h,o(o({ref:t},s),{},{components:n})):i.createElement(h,o({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1650:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var i=n(74034),a=n(79973),r=(n(67294),n(3905)),o={title:"Upgrading from v3 to v4"},l={unversionedId:"upgrading-v3-to-v4",id:"version-4.0/upgrading-v3-to-v4",isDocsHomePage:!1,title:"Upgrading from v3 to v4",description:"Following sections describe (hopefully) all breaking changes, most of them might be not valid",source:"@site/versioned_docs/version-4.0/upgrading-v3-to-v4.md",sourceDirName:".",slug:"/upgrading-v3-to-v4",permalink:"/docs/4.0/upgrading-v3-to-v4",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.0/upgrading-v3-to-v4.md",version:"4.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1624531769,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"Upgrading from v3 to v4"}},p=[{value:"Node 10.13.0+ required",id:"node-10130-required",children:[]},{value:"TypeScript 3.7+ required",id:"typescript-37-required",children:[]},{value:"Monorepo",id:"monorepo",children:[]},{value:"Default metadata provider is now <code>ReflectMetadataProvider</code>",id:"default-metadata-provider-is-now-reflectmetadataprovider",children:[]},{value:"SqlEntityManager and MongoEntityManager",id:"sqlentitymanager-and-mongoentitymanager",children:[]},{value:"Different default <code>pivotTable</code>",id:"different-default-pivottable",children:[]},{value:"Changes in folder-based discovery (<code>entitiesDirs</code> removed)",id:"changes-in-folder-based-discovery-entitiesdirs-removed",children:[]},{value:"Changes in <code>wrap()</code> helper, <code>WrappedEntity</code> interface and <code>Reference</code> wrapper",id:"changes-in-wrap-helper-wrappedentity-interface-and-reference-wrapper",children:[]},{value:"Removed <code>flush</code> parameter from <code>persist()</code> and <code>remove()</code> methods",id:"removed-flush-parameter-from-persist-and-remove-methods",children:[]},{value:"<code>remove()</code> method requires entity instances",id:"remove-method-requires-entity-instances",children:[]},{value:"Type safe references",id:"type-safe-references",children:[]},{value:"Custom types are now type safe",id:"custom-types-are-now-type-safe",children:[]},{value:"Custom type serialization",id:"custom-type-serialization",children:[]},{value:"Property <code>default</code> and <code>defaultRaw</code>",id:"property-default-and-defaultraw",children:[]},{value:"<code>autoFlush</code> option has been removed",id:"autoflush-option-has-been-removed",children:[]},{value:"<code>IdEntity</code>, <code>UuidEntity</code> and <code>MongoEntity</code> interfaces are removed",id:"identity-uuidentity-and-mongoentity-interfaces-are-removed",children:[]},{value:"MongoDB driver is no longer the default",id:"mongodb-driver-is-no-longer-the-default",children:[]},{value:"Removed configuration <code>discovery.tsConfigPath</code>",id:"removed-configuration-discoverytsconfigpath",children:[]},{value:"Changes in query highlighting",id:"changes-in-query-highlighting",children:[]}],d={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Following sections describe (hopefully) all breaking changes, most of them might be not valid\nfor you, like if you do not use custom ",(0,r.kt)("inlineCode",{parentName:"p"},"NamingStrategy")," implementation, you do not care about\nthe interface being changed.")),(0,r.kt)("h2",{id:"node-10130-required"},"Node 10.13.0+ required"),(0,r.kt)("p",null,"Support for older node versions was dropped. "),(0,r.kt)("h2",{id:"typescript-37-required"},"TypeScript 3.7+ required"),(0,r.kt)("p",null,"Support for older TypeScript versions was dropped. "),(0,r.kt)("h2",{id:"monorepo"},"Monorepo"),(0,r.kt)("p",null,"The ORM has been split into several packages. In v4 one needs to require\n",(0,r.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core")," and a driver package, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"@mikro-orm/mysql"),". This driver\npackage already contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql2")," dependency, so you can remove that from\nyour ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@mikro-orm/core")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@mikro-orm/reflection")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"TsMorphMetadataProvider")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@mikro-orm/cli")," - CLI support, requires entity-generator, migrator and knex"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@mikro-orm/knex")," - SQL support"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@mikro-orm/entity-generator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@mikro-orm/migrations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@mikro-orm/mysql")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@mikro-orm/mariadb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@mikro-orm/mysql-base")," - Common implementation for mysql and mariadb (internal)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@mikro-orm/sqlite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@mikro-orm/postgresql")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@mikro-orm/mongodb"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For easier transition, meta package mikro-orm is still present, reexporting\ncore, reflection, migrations, entity-generator and cli packages. You should\n",(0,r.kt)("strong",{parentName:"p"},"not")," install both ",(0,r.kt)("inlineCode",{parentName:"p"},"mikro-orm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core")," packages together. ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You should prefer the ",(0,r.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core")," over ",(0,r.kt)("inlineCode",{parentName:"p"},"mikro-orm")," package, there were\nweird dependency issues reported with the ",(0,r.kt)("inlineCode",{parentName:"p"},"mikro-orm")," meta-package. ")),(0,r.kt)("h2",{id:"default-metadata-provider-is-now-reflectmetadataprovider"},"Default metadata provider is now ",(0,r.kt)("inlineCode",{parentName:"h2"},"ReflectMetadataProvider")),(0,r.kt)("p",null,"If you want to use ts-morph, you need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"@mikro-orm/reflection")," package\nand enable the provider explicitly in the ORM config, as described ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.0/metadata-providers#tsmorphmetadataprovider"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { TsMorphMetadataProvider } from '@mikro-orm/reflection';\n\nawait MikroORM.init({\n  metadataProvider: TsMorphMetadataProvider,\n  // ...\n});\n")),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"ReflectMetadataProvider")," has some limitations, so be sure to read\nabout them ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.0/metadata-providers#limitations-and-requirements"},"here"),"."),(0,r.kt)("p",null,"One common gotcha with ",(0,r.kt)("inlineCode",{parentName:"p"},"reflect-metadata")," is that you need to explicitly\nstate the property type when using property initializer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Property()\ncreatedAt: Date = new Date();\n")),(0,r.kt)("p",null,"Without the explicit type, we would infer ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"Date"),",\nwhich would be most probably mapped to JSON column type (depends on driver)."),(0,r.kt)("h2",{id:"sqlentitymanager-and-mongoentitymanager"},"SqlEntityManager and MongoEntityManager"),(0,r.kt)("p",null,"In v4 the ",(0,r.kt)("inlineCode",{parentName:"p"},"core")," package, where ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityRepository")," are\ndefined, is not dependent on knex, and therefore it cannot have a method\nreturning a ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryBuilder"),". You need to import the SQL flavour of the EM\nfrom the driver package to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"createQueryBuilder()")," method."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The SQL flavour of EM is actually called ",(0,r.kt)("inlineCode",{parentName:"p"},"SqlEntityManager"),", it is exported both under\nthis name and under ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," alias, so you can just change the\nlocation from where you import.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { EntityManager } from '@mikro-orm/mysql'; // or any other SQL driver package\n\nconst em: EntityManager;\nconst qb = await em.createQueryBuilder(...);\n")),(0,r.kt)("p",null,"Same applies for the ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate()")," method in mongo driver:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { EntityManager } from '@mikro-orm/mongodb';\n\nconst em: EntityManager;\nconst ret = await em.aggregate(...);\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The mongo flavour of EM is actually called ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoEntityManager"),", it is exported both under\nthis name and under ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," alias, so you can just change the\nlocation from where you import.")),(0,r.kt)("h2",{id:"different-default-pivottable"},"Different default ",(0,r.kt)("inlineCode",{parentName:"h2"},"pivotTable")),(0,r.kt)("p",null,"Implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"UnderscoreNamingStrategy")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityCaseNamingStrategy"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"joinTableName()")," method has changed. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"pivotTable")," on the owning side\nof M:N relation to specify the table name manually. "),(0,r.kt)("p",null,"Previously the table name did not respect property name, if one defined multiple\nM:N relations between same entities, there were conflicts and one would have to\nspecify ",(0,r.kt)("inlineCode",{parentName:"p"},"pivotTable")," name manually at least on one of them. With the new way,\nwe can be sure that the table name won't conflict with other pivot tables. "),(0,r.kt)("p",null,"Previously the name was constructed from 2 entity names as ",(0,r.kt)("inlineCode",{parentName:"p"},"entity_a_to_entity_b"),",\nignoring the actual property name. In v4 the name will be ",(0,r.kt)("inlineCode",{parentName:"p"},"entity_a_coll_name")," in\ncase of the collection property on the owning side being named ",(0,r.kt)("inlineCode",{parentName:"p"},"collName"),". "),(0,r.kt)("h2",{id:"changes-in-folder-based-discovery-entitiesdirs-removed"},"Changes in folder-based discovery (",(0,r.kt)("inlineCode",{parentName:"h2"},"entitiesDirs")," removed)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"entitiesDirs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"entitiesDirsTs")," were removed in favour of ",(0,r.kt)("inlineCode",{parentName:"p"},"entities")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"entitiesTs"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"entities")," will be used as a default for ",(0,r.kt)("inlineCode",{parentName:"p"},"entitiesTs")," (that is used when we detect ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-node"),")."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"entities")," can now contain mixture of paths to directories, globs pointing to entities,\nor references to the entities or instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"EntitySchema"),". "),(0,r.kt)("p",null,"This basically means that all you need to change is renaming ",(0,r.kt)("inlineCode",{parentName:"p"},"entitiesDirs")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"entities"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  entities: ['dist/**/entities', 'dist/**/*.entity.js', FooBar, FooBaz],\n  entitiesTs: ['src/**/entities', 'src/**/*.entity.ts', FooBar, FooBaz],\n});\n")),(0,r.kt)("h2",{id:"changes-in-wrap-helper-wrappedentity-interface-and-reference-wrapper"},"Changes in ",(0,r.kt)("inlineCode",{parentName:"h2"},"wrap()")," helper, ",(0,r.kt)("inlineCode",{parentName:"h2"},"WrappedEntity")," interface and ",(0,r.kt)("inlineCode",{parentName:"h2"},"Reference")," wrapper"),(0,r.kt)("p",null,"Previously all the methods and properties of ",(0,r.kt)("inlineCode",{parentName:"p"},"WrappedEntity")," interface were\nadded to the entity prototype during discovery. In v4 there is only one property\nadded: ",(0,r.kt)("inlineCode",{parentName:"p"},"__helper: WrappedEntity"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"WrappedEntity")," has been converted to actual class."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wrap(entity)")," no longer returns the entity, now the ",(0,r.kt)("inlineCode",{parentName:"p"},"WrappedEntity")," instance is\nbeing returned. It contains only public methods (",(0,r.kt)("inlineCode",{parentName:"p"},"init"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"assign"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"isInitialized"),", ...),\nif you want to access internal properties like ",(0,r.kt)("inlineCode",{parentName:"p"},"__meta")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"__em"),", you need to explicitly\nask for the helper via ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap(entity, true)"),"."),(0,r.kt)("p",null,"Internal methods (with ",(0,r.kt)("inlineCode",{parentName:"p"},"__")," prefix) were also removed from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Reference")," class,\nuse ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap(ref, true)")," to access them. "),(0,r.kt)("p",null,"Instead of interface merging with ",(0,r.kt)("inlineCode",{parentName:"p"},"WrappedEntity"),", one can now use classic inheritance,\nby extending ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseEntity")," exported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core"),". If you do so, ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap(entity)"),"\nwill return your entity. "),(0,r.kt)("h2",{id:"removed-flush-parameter-from-persist-and-remove-methods"},"Removed ",(0,r.kt)("inlineCode",{parentName:"h2"},"flush")," parameter from ",(0,r.kt)("inlineCode",{parentName:"h2"},"persist()")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"remove()")," methods"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"flush")," param is removed, both ",(0,r.kt)("inlineCode",{parentName:"p"},"persist")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"remove")," methods are synchronous and\nrequire explicit flushing, possibly via fluent interface call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// before\nawait em.persist(jon, true);\nawait em.remove(Author, jon, true);\n\n// after\nawait em.persist(jon).flush();\nawait em.remove(jon).flush();\n")),(0,r.kt)("h2",{id:"remove-method-requires-entity-instances"},(0,r.kt)("inlineCode",{parentName:"h2"},"remove()")," method requires entity instances"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"em.remove()")," method originally allowed to pass either entity instance, or\na condition. When one passed a condition, it was firing a native delete query,\nwithout handling transactions or hooks. "),(0,r.kt)("p",null,"In v4, the method is now simplified and works only with entity instances. Use\n",(0,r.kt)("inlineCode",{parentName:"p"},"em.nativeDelete()")," explicitly if you want to fire a delete query instead of\nletting the ",(0,r.kt)("inlineCode",{parentName:"p"},"UnitOfWork")," doing its job."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// before\nawait em.remove(Author, 1); // fires query directly\n\n// after \nawait em.nativeDelete(Author, 1);\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"em.removeEntity()")," has been removed in favour of ",(0,r.kt)("inlineCode",{parentName:"p"},"em.remove()")," (that now has almost the same signature).")),(0,r.kt)("h2",{id:"type-safe-references"},"Type safe references"),(0,r.kt)("p",null,"EM now returns ",(0,r.kt)("inlineCode",{parentName:"p"},"Loaded<T, P>")," instead of the entity (",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"). This type automatically\nadds synchronous method ",(0,r.kt)("inlineCode",{parentName:"p"},"get()")," that returns the entity (for references) or array\nof entities (for collections)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Reference.get()")," is now available only with correct ",(0,r.kt)("inlineCode",{parentName:"p"},"Loaded")," type hint and is used\nas a sync getter for the entity, just like ",(0,r.kt)("inlineCode",{parentName:"p"},"unwrap()"),". You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Reference.load(prop)"),"\nfor the original ",(0,r.kt)("inlineCode",{parentName:"p"},"get()")," method functionality. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"em.find()")," and similar methods now have two type arguments, due to TypeScript not supporting partial\ntype inference, when you specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," explicitly (without also explicitly\nspecifying the load hint), the inference will not work. This use case was mainly\nfor usage without classes (interfaces + ",(0,r.kt)("inlineCode",{parentName:"p"},"EntitySchema"),") - in that case it is now\nsupported to pass actual instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"EntitySchema")," as the first parameter to these\nmethods, that will allow correct type inference:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = await em.findOne(AuthorSchema, { ... }, ['books']);\nconsole.log(author.books.get()); // `get()` is now inferred correctly\n")),(0,r.kt)("h2",{id:"custom-types-are-now-type-safe"},"Custom types are now type safe"),(0,r.kt)("p",null,"Generic ",(0,r.kt)("inlineCode",{parentName:"p"},"Type")," class has now two type arguments - the input and output types.\nInput type defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", output type defaults to the input type. "),(0,r.kt)("p",null,"You might need to explicitly provide the types if your methods are strictly typed."),(0,r.kt)("h2",{id:"custom-type-serialization"},"Custom type serialization"),(0,r.kt)("p",null,"Custom types used to be serialized to the database value. In v4, the runtime\nvalue is used by default. Implement custom ",(0,r.kt)("inlineCode",{parentName:"p"},"toJSON()")," method if you need to\ncustomize this."),(0,r.kt)("h2",{id:"property-default-and-defaultraw"},"Property ",(0,r.kt)("inlineCode",{parentName:"h2"},"default")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"defaultRaw")),(0,r.kt)("p",null,"Previously the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," option of properties was used as is, so we had to wrap\nstrings in quotes (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"@Property({ default: \"'foo bar'\" })"),"). "),(0,r.kt)("p",null,"In v4 the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," is typed as ",(0,r.kt)("inlineCode",{parentName:"p"},"string | number | boolean | null")," and when used\nwith string value, it will be automatically quoted. "),(0,r.kt)("p",null,"To use SQL functions we now need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultRaw"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"@Property({ defaultRaw: 'now()' })"),"."),(0,r.kt)("h2",{id:"autoflush-option-has-been-removed"},(0,r.kt)("inlineCode",{parentName:"h2"},"autoFlush")," option has been removed"),(0,r.kt)("p",null,"Also ",(0,r.kt)("inlineCode",{parentName:"p"},"persistLater()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"removeLater()")," methods are deprecated. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"persist()")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"remove")," respectively."),(0,r.kt)("h2",{id:"identity-uuidentity-and-mongoentity-interfaces-are-removed"},(0,r.kt)("inlineCode",{parentName:"h2"},"IdEntity"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"UuidEntity")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"MongoEntity")," interfaces are removed"),(0,r.kt)("p",null,"They were actually never needed. "),(0,r.kt)("h2",{id:"mongodb-driver-is-no-longer-the-default"},"MongoDB driver is no longer the default"),(0,r.kt)("p",null,"You need to specify the platform type either via ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," option or provide the driver\nimplementation via ",(0,r.kt)("inlineCode",{parentName:"p"},"driver")," option. "),(0,r.kt)("p",null,"Available platforms types: ",(0,r.kt)("inlineCode",{parentName:"p"},"[ 'mongo', 'mysql', 'mariadb', 'postgresql', 'sqlite' ]")),(0,r.kt)("h2",{id:"removed-configuration-discoverytsconfigpath"},"Removed configuration ",(0,r.kt)("inlineCode",{parentName:"h2"},"discovery.tsConfigPath")),(0,r.kt)("p",null,"Removed as it is no longer needed, it was used only for ",(0,r.kt)("inlineCode",{parentName:"p"},"TsMorphMetadataProvider"),",\nwhen the ",(0,r.kt)("inlineCode",{parentName:"p"},"entitiesDirsTs")," were not explicitly provided. In v4, this is no longer\nneeded, as ts-morph discovery will use ",(0,r.kt)("inlineCode",{parentName:"p"},"d.ts")," files instead, that should be located\nnext to the compiled entities. "),(0,r.kt)("h2",{id:"changes-in-query-highlighting"},"Changes in query highlighting"),(0,r.kt)("p",null,"Previously Highlight.js was used to highlight various things in the CLI,\nlike SQL and mongo queries, or migrations or entities generated via CLI.\nWhile the library worked fine, it was causing performance issues mainly\nfor those bundling via webpack and using lambdas, as the library was huge."),(0,r.kt)("p",null,"In v4 highlighting is disabled by default, and there are 2 highlighters\nyou can optionally use (you need to install them first)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SqlHighlighter } from '@mikro-orm/sql-highlighter';\n\nMikroORM.init({\n  highlighter: new SqlHighlighter(),\n  // ...\n});\n")),(0,r.kt)("p",null,"For MongoDB you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"@mikro-orm/mongo-highlighter"),"."))}s.isMDXComponent=!0}}]);