(window.webpackJsonp=window.webpackJsonp||[]).push([[573],{1256:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,f=d["".concat(i,".").concat(u)]||d[u]||b[u]||a;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},643:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(1256)),i={title:"Entity References",sidebar_label:"Entity References and Reference<T> Wrapper"},c={unversionedId:"entity-references",id:"version-4.4/entity-references",isDocsHomePage:!1,title:"Entity References",description:"Every single entity relation is mapped to an entity reference. Reference is an entity that has",source:"@site/versioned_docs/version-4.4/entity-references.md",slug:"/entity-references",permalink:"/docs/entity-references",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/entity-references.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612554473,sidebar_label:"Entity References and Reference<T> Wrapper",sidebar:"version-4.4/docs",previous:{title:"Identity Map and Request Context",permalink:"/docs/identity-map"},next:{title:"Collections",permalink:"/docs/collections"}},l=[{value:"Better Type-safety with <code>Reference&lt;T&gt;</code> Wrapper",id:"better-type-safety-with-referencet-wrapper",children:[{value:"Assigning to Reference Properties",id:"assigning-to-reference-properties",children:[]},{value:"What is IdentifiedReference?",id:"what-is-identifiedreference",children:[]}]}],p={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Every single entity relation is mapped to an entity reference. Reference is an entity that has\nonly its identifier. This reference is stored in identity map so you will get the same object\nreference when fetching the same document from database."),Object(a.b)("p",null,"You can call ",Object(a.b)("inlineCode",{parentName:"p"},"await wrap(entity).init()")," to initialize the entity. This will trigger database call\nand populate itself, keeping the same reference in identity map. "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const author = orm.em.getReference('...id...');\nconsole.log(author.id); // accessing the id will not trigger any db call\nconsole.log(author.isInitialized()); // false\nconsole.log(author.name); // undefined\n\nawait wrap(author).init(); // this will trigger db call\nconsole.log(author.isInitialized()); // true\nconsole.log(author.name); // defined\n")),Object(a.b)("h2",{id:"better-type-safety-with-referencet-wrapper"},"Better Type-safety with ",Object(a.b)("inlineCode",{parentName:"h2"},"Reference<T>")," Wrapper"),Object(a.b)("p",null,"When you define ",Object(a.b)("inlineCode",{parentName:"p"},"@ManyToOne")," and ",Object(a.b)("inlineCode",{parentName:"p"},"@OneToOne")," properties on your entity, TypeScript compiler\nwill think that desired entities are always loaded:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @ManyToOne()\n  author!: Author;\n\n  constructor(author: Author) {\n    this.author = author;\n  }\n\n}\n\nconst book = await orm.em.findOne(Book, 1);\nconsole.log(book.author instanceof Author); // true\nconsole.log(book.author.isInitialized()); // false\nconsole.log(book.author.name); // undefined as `Author` is not loaded yet\n")),Object(a.b)("p",null,"You can overcome this issue by using the ",Object(a.b)("inlineCode",{parentName:"p"},"Reference<T>")," wrapper. It simply wraps the entity,\ndefining ",Object(a.b)("inlineCode",{parentName:"p"},"load(): Promise<T>")," method that will first lazy load the association if not already\navailable. You can also use ",Object(a.b)("inlineCode",{parentName:"p"},"unwrap(): T")," method to access the underlying entity without loading\nit."),Object(a.b)("p",null,"You can also use ",Object(a.b)("inlineCode",{parentName:"p"},"get<K extends keyof T>(prop: K): Promise<T[K]>")," helper, that will call ",Object(a.b)("inlineCode",{parentName:"p"},"load()"),"\nfor you, making sure the entity is initialized first, then returning the value of given property\ndirectly. "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Entity, IdentifiedReference, ManyToOne, PrimaryKey, Reference } from '@mikro-orm/core';\n\n@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @ManyToOne()\n  author!: IdentifiedReference<Author>;\n\n  constructor(author: Author) {\n    this.author = Reference.create(author);\n  }\n\n}\n\nconst book = await orm.em.findOne(Book, 1);\nconsole.log(book.author instanceof Reference); // true\nconsole.log(book.author.isInitialized()); // false\nconsole.log(book.author.name); // type error, there is no `name` property\nconsole.log(book.author.unwrap().name); // undefined as author is not loaded\nconsole.log((await book.author.load('name'))); // ok, loading the author first\nconsole.log((await book.author.load()).name); // ok, author already loaded\nconsole.log(book.author.unwrap().name); // ok, author already loaded\n")),Object(a.b)("p",null,"There are also ",Object(a.b)("inlineCode",{parentName:"p"},"getEntity()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"getProperty()")," methods that are synchronous getters,\nthat will first check if the wrapped entity is initialized, and if not, it will throw\nand error."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const book = await orm.em.findOne(Book, 1);\nconsole.log(book.author instanceof Reference); // true\nconsole.log(book.author.isInitialized()); // false\nconsole.log(book.author.getEntity()); // Error: Reference<Author> 123 not initialized\nconsole.log(book.author.getProperty('name')); // Error: Reference<Author> 123 not initialized\nconsole.log((await book.author.load('name'))); // ok, loading the author first\nconsole.log(book.author.getProperty('name')); // ok, author already loaded\n")),Object(a.b)("p",null,"If you use different metadata provider than ",Object(a.b)("inlineCode",{parentName:"p"},"TsMorphMetadataProvider"),"\n(e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"ReflectMetadataProvider"),"), you will also need to explicitly set ",Object(a.b)("inlineCode",{parentName:"p"},"wrappedReference"),"\nparameter:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@ManyToOne(() => Author, { wrappedReference: true })\nauthor!: IdentifiedReference<Author>;\n")),Object(a.b)("h3",{id:"assigning-to-reference-properties"},"Assigning to Reference Properties"),Object(a.b)("p",null,"When you define the property as ",Object(a.b)("inlineCode",{parentName:"p"},"Reference")," wrapper, you will need to assign the ",Object(a.b)("inlineCode",{parentName:"p"},"Reference"),"\nto it instead of the entity. You can create it via ",Object(a.b)("inlineCode",{parentName:"p"},"Reference.create()")," factory, or use ",Object(a.b)("inlineCode",{parentName:"p"},"wrapped"),"\nparameter of ",Object(a.b)("inlineCode",{parentName:"p"},"em.getReference()"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const book = await orm.em.findOne(Book, 1);\nconst repo = orm.em.getRepository(Author);\n\nbook.author = repo.getReference(2, true);\n\n// same as:\nbook.author = Reference.create(repo.getReference(2));\nawait orm.em.flush();\n")),Object(a.b)("p",null,"Another way is to use ",Object(a.b)("inlineCode",{parentName:"p"},"toReference()")," method available as part of\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/entity-helper#wrappedentity-and-wrap-helper"}),Object(a.b)("inlineCode",{parentName:"a"},"WrappedEntity")," interface"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const author = new Author(...)\nbook.author = wrap(author).toReference();\n")),Object(a.b)("p",null,"If the reference already exist, you can also re-assign to it via ",Object(a.b)("inlineCode",{parentName:"p"},"set()")," method:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"book.author.set(new Author(...));\n")),Object(a.b)("h3",{id:"what-is-identifiedreference"},"What is IdentifiedReference?"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"IdentifiedReference")," is an intersection type that adds primary key property to the ",Object(a.b)("inlineCode",{parentName:"p"},"Reference"),"\ninterface. It allows to get the primary key from ",Object(a.b)("inlineCode",{parentName:"p"},"Reference")," instance directly."),Object(a.b)("p",null,"By default it defines the PK property as ",Object(a.b)("inlineCode",{parentName:"p"},"id"),", you can override this via second generic type\nargument."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const book = await orm.em.findOne(Book, 1);\nconsole.log(book.author.id); // ok, returns the PK\n")),Object(a.b)("p",null,"You can also have non-standard primary key like ",Object(a.b)("inlineCode",{parentName:"p"},"uuid"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @ManyToOne()\n  author!: IdentifiedReference<Author, 'uuid'>;\n\n}\n\nconst book = await orm.em.findOne(Book, 1);\nconsole.log(book.author.uuid); // ok, returns the PK\n")),Object(a.b)("p",null,"For MongoDB, defined the PK generic type argument as ",Object(a.b)("inlineCode",{parentName:"p"},"'id' | '_id'")," to access both ",Object(a.b)("inlineCode",{parentName:"p"},"string"),"\nand ",Object(a.b)("inlineCode",{parentName:"p"},"ObjectId")," PK values:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id!: ObjectId;\n\n  @SerializedPrimaryKey()\n  id!: string;\n\n  @ManyToOne()\n  author!: IdentifiedReference<Author, 'id' | '_id'>;\n\n}\n\nconst book = await orm.em.findOne(Book, 1);\nconsole.log(book.author.id); // ok, returns string PK\nconsole.log(book.author._id); // ok, returns ObjectId PK\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"As opposed to ",Object(a.b)("inlineCode",{parentName:"p"},"EntityHelper.init()")," which always refreshes the entity, ",Object(a.b)("inlineCode",{parentName:"p"},"Reference.load()"),"\nmethod will query the database only if the entity is not already loaded in Identity Map. ")))}s.isMDXComponent=!0}}]);