(window.webpackJsonp=window.webpackJsonp||[]).push([[832],{1026:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},905:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),i=(n(0),n(1026)),o={title:"Lifecycle Hooks and EventSubscriber",sidebar_label:"Hooks and Events"},s={unversionedId:"lifecycle-hooks",id:"version-4.1/lifecycle-hooks",isDocsHomePage:!1,title:"Lifecycle Hooks and EventSubscriber",description:"There are two ways to hook to the lifecycle of an entity:",source:"@site/versioned_docs/version-4.1/lifecycle-hooks.md",slug:"/lifecycle-hooks",permalink:"/docs/4.1/lifecycle-hooks",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.1/lifecycle-hooks.md",version:"4.1",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1619578092,formattedLastUpdatedAt:"4/28/2021",sidebar_label:"Hooks and Events",sidebar:"version-4.1/docs",previous:{title:"Property Validation",permalink:"/docs/4.1/property-validation"},next:{title:"Relationship Loading Strategies",permalink:"/docs/4.1/loading-strategies"}},c=[{value:"Hooks",id:"hooks",children:[]},{value:"Limitations of lifecycle hooks",id:"limitations-of-lifecycle-hooks",children:[]},{value:"EventSubscriber",id:"eventsubscriber",children:[]},{value:"EventArgs",id:"eventargs",children:[]},{value:"Flush events",id:"flush-events",children:[{value:"Getting the changes from UnitOfWork",id:"getting-the-changes-from-unitofwork",children:[]},{value:"Using onFlush event",id:"using-onflush-event",children:[]}]}],l={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are two ways to hook to the lifecycle of an entity: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Lifecycle hooks")," are methods defined on the entity prototype."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"EventSubscriber"),"s are classes that can be used to hook to multiple entities\nor when you do not want to have the method present on the entity prototype.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Hooks are internally executed the same way as subscribers.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Hooks are executed before subscribers.")),Object(i.b)("h2",{id:"hooks"},"Hooks"),Object(i.b)("p",null,"You can use lifecycle hooks to run some code when entity gets persisted. You can mark any of\nentity methods with them, you can also mark multiple methods with same hook."),Object(i.b)("p",null,"All hooks support async methods with one exception - ",Object(i.b)("inlineCode",{parentName:"p"},"@OnInit"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"@OnInit")," is fired when new instance of entity is created, either manually ",Object(i.b)("inlineCode",{parentName:"p"},"em.create()"),", or\nautomatically when new entities are loaded from database")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"@BeforeCreate()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"@BeforeUpdate()")," is fired right before we persist the entity in database")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"@AfterCreate()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"@AfterUpdate()")," is fired right after the entity is updated in database and\nmerged to identity map. Since this event entity will have reference to ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager")," and will be\nenabled to call ",Object(i.b)("inlineCode",{parentName:"p"},"entity.init()")," method (including all entity references and collections).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"@BeforeDelete()")," is fired right before we delete the record from database. It is fired only when\nremoving entity or entity reference, not when deleting records by query. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"@AfterDelete()")," is fired right after the record gets deleted from database and it is unset from\nthe identity map."))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"@OnInit")," is not fired when you create the entity manually via its constructor (",Object(i.b)("inlineCode",{parentName:"p"},"new MyEntity()"),")")),Object(i.b)("h2",{id:"limitations-of-lifecycle-hooks"},"Limitations of lifecycle hooks"),Object(i.b)("p",null,"Hooks are executed inside the commit action of unit of work, after all change\nsets are computed. This means that it is not possible to create new entities as\nusual from inside the hook. Calling ",Object(i.b)("inlineCode",{parentName:"p"},"em.flush()")," from hooks will result in\nvalidation error. Calling ",Object(i.b)("inlineCode",{parentName:"p"},"em.persist()")," can result in undefined behaviour like\nlocking errors. "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The ",Object(i.b)("strong",{parentName:"p"},"internal")," instance of ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager")," accessible under ",Object(i.b)("inlineCode",{parentName:"p"},"wrap(this, true).__em")," is\nnot meant for public usage. ")),Object(i.b)("h2",{id:"eventsubscriber"},"EventSubscriber"),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"EventSubscriber")," to hook to multiple entities or if you do not want to pollute\nthe entity prototype. All methods are optional, if you omit the ",Object(i.b)("inlineCode",{parentName:"p"},"getSubscribedEntities()"),"\nmethod, it means you are subscribing to all entities."),Object(i.b)("p",null,"You can either register the subscribers manually in the ORM configuration (via\n",Object(i.b)("inlineCode",{parentName:"p"},"subscribers")," array where you put the instance):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  subscribers: [new AuthorSubscriber()],\n});\n")),Object(i.b)("p",null,"Or use ",Object(i.b)("inlineCode",{parentName:"p"},"@Subscriber()")," decorator - keep in mind that you need to make sure the file gets\nloaded in order to make this decorator registration work (e.g. you import that file\nexplicitly somewhere)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import { EntityName, EventArgs, EventSubscriber, Subscriber } from '@mikro-orm/core';\n\n@Subscriber()\nexport class AuthorSubscriber implements EventSubscriber<Author> {\n\n  getSubscribedEntities(): EntityName<Author>[] {\n    return [Author];\n  }\n\n  async afterCreate(args: EventArgs<Author>): Promise<void> {\n    // ...\n  }\n\n  async afterUpdate(args: EventArgs<Author>): Promise<void> {\n    // ... \n  }\n\n}\n")),Object(i.b)("p",null,"Another example, where we register to all the events and all entities: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import { EventArgs, EventSubscriber, Subscriber } from '@mikro-orm/core';\n\n@Subscriber()\nexport class EverythingSubscriber implements EventSubscriber {\n\n  async beforeCreate<T>(args: EventArgs<T>): Promise<void> { ... }\n  async afterCreate<T>(args: EventArgs<T>): Promise<void> { ... }\n  async beforeUpdate<T>(args: EventArgs<T>): Promise<void> { ... }\n  async afterUpdate<T>(args: EventArgs<T>): Promise<void> { ... }\n  async beforeDelete<T>(args: EventArgs<T>): Promise<void> { ... }\n  async afterDelete<T>(args: EventArgs<T>): Promise<void> { ... }\n  async beforeFlush<T>(args: EventArgs<T>): Promise<void> { ... }\n  async onFlush<T>(args: EventArgs<T>): Promise<void> { ... }\n  async afterFlush<T>(args: EventArgs<T>): Promise<void> { ... }\n  onInit<T>(args: EventArgs<T>): void { ... }\n\n}\n")),Object(i.b)("h2",{id:"eventargs"},"EventArgs"),Object(i.b)("p",null,"As a parameter to the hook method we get ",Object(i.b)("inlineCode",{parentName:"p"},"EventArgs")," instance. It will always contain\nreference to the current ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager")," and the particular entity. Events fired\nfrom ",Object(i.b)("inlineCode",{parentName:"p"},"UnitOfWork")," during flush operation also contain the ",Object(i.b)("inlineCode",{parentName:"p"},"ChangeSet")," object."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"interface EventArgs<T> {\n  entity: T;\n  em: EntityManager;\n  changeSet?: ChangeSet<T>;\n}\n\ninterface ChangeSet<T> {\n  name: string;                   // entity name\n  collection: string;             // db table name\n  type: ChangeSetType;            // type of operation\n  entity: T;                      // up to date entity instance\n  payload: EntityData<T>;         // changes that will be used to build the update query\n  persisted: boolean;             // whether the changeset was already persisted/executed\n  originalEntity?: EntityData<T>; // snapshot of the entity when it was loaded from db\n}\n\nenum ChangeSetType {\n  CREATE = 'create',\n  UPDATE = 'update',\n  DELETE = 'delete',\n}\n")),Object(i.b)("h2",{id:"flush-events"},"Flush events"),Object(i.b)("p",null,"There is a special kind of events executed during the commit phase (flush operation).\nThey are executed before, during and after the flush, and they are not bound to any\nentity in particular. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"beforeFlush")," is executed before change sets are computed, this is the only\nevent where it is safe to persist new entities. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onFlush")," is executed after the change sets are computed."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"afterFlush")," is executed as the last step just before the ",Object(i.b)("inlineCode",{parentName:"li"},"flush")," call resolves.\nit will be executed even if there are no changes to be flushed. ")),Object(i.b)("p",null,"Flush event args will not contain any entity instance, as they are entity agnostic.\nThey do contain additional reference to the ",Object(i.b)("inlineCode",{parentName:"p"},"UnitOfWork")," instance."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"interface FlushEventArgs extends Omit<EventArgs<unknown>, 'entity'> {\n  uow?: UnitOfWork;\n}\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Flush events are entity agnostic, specifying ",Object(i.b)("inlineCode",{parentName:"p"},"getSubscribedEntities()")," method\nwill not have any effect for those. They are fired only once per the ",Object(i.b)("inlineCode",{parentName:"p"},"flush"),"\noperation.")),Object(i.b)("h3",{id:"getting-the-changes-from-unitofwork"},"Getting the changes from UnitOfWork"),Object(i.b)("p",null,"You can observe all the changes that are part of given UnitOfWork via those methods:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"UnitOfWork.getChangeSets(): ChangeSet<AnyEntity>[];\nUnitOfWork.getOriginalEntityData(): Map<string, EntityData<AnyEntity>>;\nUnitOfWork.getPersistStack(): Set<AnyEntity>;\nUnitOfWork.getRemoveStack(): Set<AnyEntity>;\nUnitOfWork.getCollectionUpdates(): Collection<AnyEntity>[];\nUnitOfWork.getExtraUpdates(): Set<[AnyEntity, string, (AnyEntity | Reference<AnyEntity>)]>;\n")),Object(i.b)("h3",{id:"using-onflush-event"},"Using onFlush event"),Object(i.b)("p",null,"In following example we have 2 entities: ",Object(i.b)("inlineCode",{parentName:"p"},"FooBar")," and ",Object(i.b)("inlineCode",{parentName:"p"},"FooBaz"),", connected via\nM:1 relation. Our subscriber will automatically create new ",Object(i.b)("inlineCode",{parentName:"p"},"FooBaz")," entity and\nconnect it to the ",Object(i.b)("inlineCode",{parentName:"p"},"FooBar")," when we detect it in the change sets."),Object(i.b)("p",null,"We first use ",Object(i.b)("inlineCode",{parentName:"p"},"uow.getChangeSets()")," method to look up the change set of entity\nwe are interested in. After we create the ",Object(i.b)("inlineCode",{parentName:"p"},"FooBaz")," instance and link it with\n",Object(i.b)("inlineCode",{parentName:"p"},"FooBar"),", we need to do two things:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Call ",Object(i.b)("inlineCode",{parentName:"li"},"uow.computeChangeSet(baz)")," to compute the change set of newly created\n",Object(i.b)("inlineCode",{parentName:"li"},"FooBaz")," entity"),Object(i.b)("li",{parentName:"ol"},"Call ",Object(i.b)("inlineCode",{parentName:"li"},"uow.recomputeSingleChangeSet(cs.entity)")," to recalculate the existing\nchange set of the ",Object(i.b)("inlineCode",{parentName:"li"},"FooBar")," entity.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Subscriber()\nexport class FooBarSubscriber implements EventSubscriber {\n\n  async onFlush(args: FlushEventArgs): Promise<void> {\n    const changeSets = args.uow.getChangeSets();\n    const cs = changeSets.find(cs => cs.type === ChangeSetType.CREATE && cs.entity instanceof FooBar);\n\n    if (cs) {\n      const baz = new FooBaz();\n      baz.name = 'dynamic';\n      cs.entity.baz = baz;\n      args.uow.computeChangeSet(baz);\n      args.uow.recomputeSingleChangeSet(cs.entity);\n    }\n  }\n\n}\n\nconst bar = new FooBar();\nbar.name = 'bar';\nawait em.persistAndFlush(bar);\n")))}b.isMDXComponent=!0}}]);