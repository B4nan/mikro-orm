(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1256:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),y=r,d=l["".concat(a,".").concat(y)]||l[y]||b[y]||i;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(1256)),a={title:"Using Entity Constructors"},c={unversionedId:"entity-constructors",id:"entity-constructors",isDocsHomePage:!1,title:"Using Entity Constructors",description:"Internally, MikroORM never calls entity constructor, so you are free to use it as you wish.",source:"@site/docs/entity-constructors.md",slug:"/entity-constructors",permalink:"/docs/next/entity-constructors",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/entity-constructors.md",version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612554473,sidebar:"docs",previous:{title:"Usage with JavaScript",permalink:"/docs/next/usage-with-js"},next:{title:"Using Multiple Schemas",permalink:"/docs/next/multiple-schemas"}},s=[{value:"Using native private properties",id:"using-native-private-properties",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Internally, ",Object(i.b)("inlineCode",{parentName:"p"},"MikroORM")," never calls entity constructor, so you are free to use it as you wish.\nThe constructor will be called only when you instantiate the class yourself via ",Object(i.b)("inlineCode",{parentName:"p"},"new")," operator,\nso it is a handy place to require your data when creating new entity."),Object(i.b)("p",null,"For example following ",Object(i.b)("inlineCode",{parentName:"p"},"Book")," entity definition will always require to set ",Object(i.b)("inlineCode",{parentName:"p"},"title")," and ",Object(i.b)("inlineCode",{parentName:"p"},"author"),",\nbut ",Object(i.b)("inlineCode",{parentName:"p"},"publisher")," will be optional:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  title!: string;\n\n  @ManyToOne()\n  author!: Author;\n\n  @ManyToOne()\n  publisher?: Publisher;\n\n  @ManyToMany({ entity: () => BookTag, inversedBy: 'books' })\n  tags = new Collection<BookTag>(this);\n\n  constructor(title: string, author: Author) {\n    this.title = title;\n    this.author = author;\n  }\n\n}\n")),Object(i.b)("h2",{id:"using-native-private-properties"},"Using native private properties"),Object(i.b)("p",null,"If we want to use native private properties inside entities, the default approach of\nhow MikroORM creates entity instances via ",Object(i.b)("inlineCode",{parentName:"p"},"Object.create()")," is not viable (more about this\nin the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/issues/1226"}),"issue"),"). To force usage of entity\nconstructors, we can use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/configuration#using-native-private-properties"}),Object(i.b)("inlineCode",{parentName:"a"},"forceEntityConstructor"))," toggle."))}p.isMDXComponent=!0}}]);