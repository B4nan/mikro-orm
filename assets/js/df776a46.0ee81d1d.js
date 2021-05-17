(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71418],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60120:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var o=n(74034),r=n(79973),a=(n(67294),n(3905)),i={title:"Using MikroORM with NestJS framework",sidebar_label:"Usage with NestJS"},s={unversionedId:"usage-with-nestjs",id:"usage-with-nestjs",isDocsHomePage:!1,title:"Using MikroORM with NestJS framework",description:"Installation",source:"@site/docs/usage-with-nestjs.md",sourceDirName:".",slug:"/usage-with-nestjs",permalink:"/docs/next/usage-with-nestjs",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/usage-with-nestjs.md",version:"current",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1621217237,formattedLastUpdatedAt:"5/17/2021",sidebar_label:"Usage with NestJS",frontMatter:{title:"Using MikroORM with NestJS framework",sidebar_label:"Usage with NestJS"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/next/quick-start"},next:{title:"Usage with JavaScript",permalink:"/docs/next/usage-with-js"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Repositories",id:"repositories",children:[]},{value:"Using custom repositories",id:"using-custom-repositories",children:[]},{value:"Load entities automatically",id:"load-entities-automatically",children:[]},{value:"Request scoped handlers in queues",id:"request-scoped-handlers-in-queues",children:[]},{value:"Request scoping when using GraphQL",id:"request-scoping-when-using-graphql",children:[]},{value:"Using <code>AsyncLocalStorage</code> for request context",id:"using-asynclocalstorage-for-request-context",children:[]},{value:"Testing",id:"testing",children:[]},{value:"Example",id:"example",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Easiest way to integrate MikroORM to Nest is via ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/nestjs"},(0,a.kt)("inlineCode",{parentName:"a"},"@mikro-orm/nestjs")," module"),".\nSimply install it next to Nest, MikroORM and underlying driver: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add @mikro-orm/core @mikro-orm/nestjs @mikro-orm/mongodb     # for mongo\n$ yarn add @mikro-orm/core @mikro-orm/nestjs @mikro-orm/mysql       # for mysql/mariadb\n$ yarn add @mikro-orm/core @mikro-orm/nestjs @mikro-orm/mariadb     # for mysql/mariadb\n$ yarn add @mikro-orm/core @mikro-orm/nestjs @mikro-orm/postgresql  # for postgresql\n$ yarn add @mikro-orm/core @mikro-orm/nestjs @mikro-orm/sqlite      # for sqlite\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i -s @mikro-orm/core @mikro-orm/nestjs @mikro-orm/mongodb     # for mongo\n$ npm i -s @mikro-orm/core @mikro-orm/nestjs @mikro-orm/mysql       # for mysql/mariadb\n$ npm i -s @mikro-orm/core @mikro-orm/nestjs @mikro-orm/mariadb     # for mysql/mariadb\n$ npm i -s @mikro-orm/core @mikro-orm/nestjs @mikro-orm/postgresql  # for postgresql\n$ npm i -s @mikro-orm/core @mikro-orm/nestjs @mikro-orm/sqlite      # for sqlite\n")),(0,a.kt)("p",null,"Once the installation process is completed, we can import the ",(0,a.kt)("inlineCode",{parentName:"p"},"MikroOrmModule")," into the root ",(0,a.kt)("inlineCode",{parentName:"p"},"AppModule"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Module({\n  imports: [\n    MikroOrmModule.forRoot({\n      entities: ['./dist/entities'],\n      entitiesTs: ['./src/entities'],\n      dbName: 'my-db-name.sqlite3',\n      type: 'sqlite',\n    }),\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"forRoot()")," method accepts the same configuration object as ",(0,a.kt)("inlineCode",{parentName:"p"},"init()")," from the MikroORM package. Check ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/configuration"},"this page")," for the complete configuration documentation."),(0,a.kt)("p",null,"Alternatively we can ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/installation#setting-up-the-commandline-tool"},"configure the CLI")," by creating a configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"mikro-orm.config.ts")," and then call the ",(0,a.kt)("inlineCode",{parentName:"p"},"forRoot()")," without any arguments. This won't work when you use a build tools that use tree shaking. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Module({\n  imports: [\n    MikroOrmModule.forRoot(),\n  ],\n  ...\n})\nexport class AppModule {}\n")),(0,a.kt)("p",null,"Afterward, the ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," will be available to inject across entire project (without importing any module elsewhere)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { MikroORM } from '@mikro-orm/core';\nimport { EntityManager } from '@mikro-orm/mysql'; // Import EntityManager from your driver package or `@mikro-orm/knex`\n\n@Injectable()\nexport class MyService {\n\n    constructor(private readonly orm: MikroORM,\n                private readonly em: EntityManager) {\n    }\n\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Notice that the ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," is imported from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@mikro-orm/driver")," package, where driver is ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sqlite"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"postgres")," or what driver you are using."),(0,a.kt)("p",{parentName:"blockquote"},"In case you have ",(0,a.kt)("inlineCode",{parentName:"p"},"@mikro-orm/knex")," installed as a dependency, you can also import the ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," from there.")),(0,a.kt)("h2",{id:"repositories"},"Repositories"),(0,a.kt)("p",null,"MikroORM supports the repository design pattern. For every entity we can create a repository. Read the complete ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/repositories"},"documentation on repositories here"),". To define which repositories shall be registered in the current scope you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"forFeature()")," method. For example, in this way:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You should ",(0,a.kt)("strong",{parentName:"p"},"not")," register your base entities via ",(0,a.kt)("inlineCode",{parentName:"p"},"forFeature()"),", as there are no\nrepositories for those. On the other hand, base entities need to be part of the list\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"forRoot()")," (or in the ORM config in general).")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// photo.module.ts\n\n@Module({\n  imports: [MikroOrmModule.forFeature([Photo])],\n  providers: [PhotoService],\n  controllers: [PhotoController],\n})\nexport class PhotoModule {}\n")),(0,a.kt)("p",null,"and import it into the root ",(0,a.kt)("inlineCode",{parentName:"p"},"AppModule"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// app.module.ts\n@Module({\n  imports: [MikroOrmModule.forRoot(...), PhotoModule],\n})\nexport class AppModule {}\n")),(0,a.kt)("p",null,"In this way we can inject the ",(0,a.kt)("inlineCode",{parentName:"p"},"PhotoRepository")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"PhotoService")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectRepository()")," decorator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Injectable()\nexport class PhotoService {\n  constructor(\n    @InjectRepository(Photo)\n    private readonly photoRepository: EntityRepository<Photo>\n  ) {}\n\n  // ...\n}\n")),(0,a.kt)("h2",{id:"using-custom-repositories"},"Using custom repositories"),(0,a.kt)("p",null,"When using custom repositories, we can get around the need for ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectRepository()"),"\ndecorator by naming our repositories the same way as ",(0,a.kt)("inlineCode",{parentName:"p"},"getRepositoryToken()")," method do:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const getRepositoryToken = <T> (entity: EntityName<T>) => `${Utils.className(entity)}Repository`;\n")),(0,a.kt)("p",null,"In other words, as long as we name the repository same was as the entity is called,\nappending ",(0,a.kt)("inlineCode",{parentName:"p"},"Repository")," suffix, the repository will be registered automatically in\nthe Nest.js DI container."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"**./author.entity.ts**")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class Author {\n\n  // to allow inference in `em.getRepository()`\n  [EntityRepositoryType]?: AuthorRepository;\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"**./author.repository.ts**")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Repository(Author)\nexport class AuthorRepository extends EntityRepository<Author> {\n\n  // your custom methods...\n\n}\n")),(0,a.kt)("p",null,"As the custom repository name is the same as what ",(0,a.kt)("inlineCode",{parentName:"p"},"getRepositoryToken()")," would\nreturn, we do not need the ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectRepository()")," decorator anymore:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Injectable()\nexport class MyService {\n\n  constructor(private readonly repo: AuthorRepository) { }\n\n}\n")),(0,a.kt)("h2",{id:"load-entities-automatically"},"Load entities automatically"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"autoLoadEntities")," option was added in v4.1.0 ")),(0,a.kt)("p",null,"Manually adding entities to the entities array of the connection options can be\ntedious. In addition, referencing entities from the root module breaks application\ndomain boundaries and causes leaking implementation details to other parts of the\napplication. To solve this issue, static glob paths can be used."),(0,a.kt)("p",null,"Note, however, that glob paths are not supported by webpack, so if you are building\nyour application within a monorepo, you won't be able to use them. To address this\nissue, an alternative solution is provided. To automatically load entities, set the\n",(0,a.kt)("inlineCode",{parentName:"p"},"autoLoadEntities")," property of the configuration object (passed into the ",(0,a.kt)("inlineCode",{parentName:"p"},"forRoot()"),"\nmethod) to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", as shown below: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Module({\n  imports: [\n    MikroOrmModule.forRoot({\n      ...\n      autoLoadEntities: true,\n    }),\n  ],\n})\nexport class AppModule {}\n")),(0,a.kt)("p",null,"With that option specified, every entity registered through the ",(0,a.kt)("inlineCode",{parentName:"p"},"forFeature()"),"\nmethod will be automatically added to the entities array of the configuration\nobject."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that entities that aren't registered through the ",(0,a.kt)("inlineCode",{parentName:"p"},"forFeature()")," method, but\nare only referenced from the entity (via a relationship), won't be included by\nway of the ",(0,a.kt)("inlineCode",{parentName:"p"},"autoLoadEntities")," setting.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"autoLoadEntities")," also has no effect on the MikroORM CLI - for that we\nstill need CLI config with the full list of entities. On the other hand, we can\nuse globs there, as the CLI won't go through webpack.")),(0,a.kt)("h2",{id:"request-scoped-handlers-in-queues"},"Request scoped handlers in queues"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"@UseRequestContext()")," decorator was added in v4.1.0 ")),(0,a.kt)("p",null,"As mentioned in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/identity-map"},"docs"),", we need a clean state for each request. That is handled automatically thanks to the ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestContext")," helper registered via middleware. "),(0,a.kt)("p",null,"But middlewares are executed only for regular HTTP request handles, what if we need\na request scoped method outside of that? One example of that is queue handlers or\nscheduled tasks. "),(0,a.kt)("p",null,"We can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@UseRequestContext()")," decorator. It requires you to first inject the\n",(0,a.kt)("inlineCode",{parentName:"p"},"MikroORM")," instance to current context, it will be then used to create the context\nfor you. Under the hood, the decorator will register new request context for your\nmethod and execute it inside the context. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Injectable()\nexport class MyService {\n\n  constructor(private readonly orm: MikroORM) { }\n\n  @UseRequestContext()\n  async doSomething() {\n    // this will be executed in a separate context\n  }\n\n}\n")),(0,a.kt)("h2",{id:"request-scoping-when-using-graphql"},"Request scoping when using GraphQL"),(0,a.kt)("p",null," The GraphQL module in NestJS uses ",(0,a.kt)("inlineCode",{parentName:"p"},"apollo-server-express")," which enables ",(0,a.kt)("inlineCode",{parentName:"p"},"bodyparser")," by default. (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/issues/696#issuecomment-669846919"},"source"),') As mentioned in "',(0,a.kt)("a",{parentName:"p",href:"https://mikro-orm.io/docs/identity-map/#requestcontext-helper-for-di-containers"},"RequestContext helper for DI containers"),'" this causes issues as the Middleware the NestJS MikroORM module installs needs to be loaded after ',(0,a.kt)("inlineCode",{parentName:"p"},"bodyparser"),". "),(0,a.kt)("p",null," This can be done by adding bodyparser to your main.ts file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { NestFactory } from '@nestjs/core';\nimport bodyParser from 'body-parser';\nasync function bootstrap() {\n  const app = await NestFactory.create(LaunchpadModule);\n  app.use(bodyParser.json());\n  await app.listen(5555);\n}\n")),(0,a.kt)("p",null," And at the same time disabling the bodyparser in the GraphQL Module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Module({\n  imports: [\n    GraphQLModule.forRoot({\n      bodyParserConfig: false,\n    }),\n  ],\n})\n")),(0,a.kt)("h2",{id:"using-asynclocalstorage-for-request-context"},"Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"AsyncLocalStorage")," for request context"),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"domain")," api is used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestContext")," helper. Since ",(0,a.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core@4.0.3"),",\nyou can use the new ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncLocalStorage")," too, if you are on up to date node version:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// create new (global) storage instance\nconst storage = new AsyncLocalStorage<EntityManager>();\n\n@Module({\n  imports: [\n    MikroOrmModule.forRoot({\n      // ...\n      registerRequestContext: false, // disable automatic middleware\n      context: () => storage.getStore(), // use our AsyncLocalStorage instance\n    }),\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n\n// register the request context middleware\nconst app = await NestFactory.create(AppModule, { ... });\n\napp.use((req, res, next) => {\n  storage.run(orm.em.fork(true, true), next);\n});\n")),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@mikro-orm/nestjs")," package exposes ",(0,a.kt)("inlineCode",{parentName:"p"},"getRepositoryToken()")," function that returns prepared token based on a given entity to allow mocking the repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Module({\n  providers: [\n    PhotoService,\n    {\n      provide: getRepositoryToken(Photo),\n      useValue: mockedRepository,\n    },\n  ],\n})\nexport class PhotoModule {}\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"A real world example of NestJS with MikroORM can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/nestjs-realworld-example-app"},"here")))}u.isMDXComponent=!0}}]);