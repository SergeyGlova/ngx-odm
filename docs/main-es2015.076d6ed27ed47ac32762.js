(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1:function(t,e,o){t.exports=o("Hasg")},2:function(t,e){},3:function(t,e){},4:function(t,e){},Hasg:function(t,e,o){"use strict";o.r(e);var i=o("fXoL");process,process,Boolean(process.env.COUCHDB_SYNC_LIVE),Boolean(process.env.COUCHDB_SYNC_HEARTBEAT);var n=o("jhN1"),c=o("tyNb"),s=o("Kicj");let r=(()=>{class t{constructor(){this.title="demo"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ab({type:t,selectors:[["demo-root"]],decls:2,vars:0,template:function(t,e){1&t&&(i.Lb(0,"main"),i.Hb(1,"router-outlet"),i.Kb())},directives:[c.b],styles:["[_nghost-%COMP%]{display:block;font:14px Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.4em;background:#f5f5f5;color:#4d4d4d;min-width:230px;max-width:550px;margin:0 auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:300}.flex[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"]}),t})();const l={name:"demo",adapter:"idb",ignoreDuplicate:!0,multiInstance:!0,options:{}},a=[{path:"todos",loadChildren:()=>o.e(6).then(o.bind(null,"9FVm")).then(t=>t.TodosModule)},{path:"",redirectTo:"todos",pathMatch:"full"}];let d=(()=>{class t{}return t.\u0275mod=i.Eb({type:t,bootstrap:[r]}),t.\u0275inj=i.Db({factory:function(e){return new(e||t)},providers:[],imports:[[n.a,c.a.forRoot(a),s.b.forRoot(l)]]}),t})();Object(i.R)(),n.b().bootstrapModule(d).catch(t=>console.error(t))},Kicj:function(t,e,o){"use strict";o.d(e,"a",function(){return R}),o.d(e,"b",function(){return E});var i=o("fXoL"),n=o("mrSG"),c=o("S6qK"),s=o("90xe"),r=o("Re7d"),l=o("A8VM"),a=o("g0lL"),d=o("UDat"),u=o("wnDG"),h=o("m1nw"),b=o("Jcva"),p=o("uugc"),m=o("jtHE"),f=o("NXyV"),v=o("Cfvw"),O=o("eIep"),g=o("lJxs");const y=new i.q("NgxRxdbConfig"),j=new i.q("NgxRxdbCollectionConfig"),w={idLength:function(){return this.primary.length}},x={countAllDocuments:function(){return Object(n.a)(this,void 0,void 0,function*(){return(yield this.pouch.info()).doc_count})}};class C{constructor(t,e){Object.assign(this,Object.assign(Object.assign({},t),{pouchSettings:Object.assign(Object.assign({},e),t.pouchSettings),methods:Object.assign(Object.assign({},w),t.methods),statics:Object.assign(Object.assign({},x),t.statics)}))}static fetchSchema(t){return Object(n.a)(this,void 0,void 0,function*(){return yield(yield fetch(t)).json()})}}const _={name:"ngx",adapter:"idb",multiInstance:!1,ignoreDuplicate:!0,pouchSettings:{skip_setup:!0,ajax:{withCredentials:!1,cache:!1,timeout:1e4,headers:{}}}},D=t=>0===t?2e3:3*t;function k(t,e=!1){return null==t||!t||!Object.keys(t).length||!!e&&Object.values(t).every(t=>null===t||!t)}function S(){}function L(...t){console.log.call(console,"%c[DEBUG:: NgxRxdb::]","background: #8d2089; color: #fff; padding: 2px; font-size: normal;",...t)}class $ extends Error{constructor(t,e){super(t),this.extra=e,this.name=this.constructor.name,Object.setPrototypeOf(this,$.prototype)}}var P,I;Object(c.a)(o("ezGW")),Object(c.a)(o("Wh65")),Object(c.a)(p.a),Object(c.a)(h.a),Object(c.a)(d.a),Object(c.a)(l.a),Object(c.a)(u.a),Object(c.a)(b.a),(null===(I=null===(P=window.process)||void 0===P?void 0:P.env)||void 0===I?void 0:I.TEST)&&L("dev or test mode");let B=(()=>{class t{constructor(){this._imported=window.localStorage._ngx_rxdb_imported}static mergeConfig(t){return Object.assign({},_,t)}static getCouchAuthProxyHeaders(t="",e=[],o=""){return{"X-Auth-CouchDB-UserName":t,"X-Auth-CouchDB-Roles":e.join(","),"X-Auth-CouchDB-Token":o}}get db(){return this.dbInstance}get collections(){return this.db.collections}get _imported(){return window.localStorage._ngx_rxdb_imported}set _imported(t){window.localStorage._ngx_rxdb_imported=t}destroyDb(){return Object(n.a)(this,void 0,void 0,function*(){try{yield this.dbInstance.remove(),yield this.dbInstance.destroy(),this.dbInstance=null}catch(P){}})}initDb(e){var o;return Object(n.a)(this,void 0,void 0,function*(){try{const o=t.mergeConfig(e),i=yield Object(s.b)(o);if(this.dbInstance=i,L("created database"),k(e.options)||k(e.options.schemas)||(yield this.initCollections(e.options.schemas)),!k(e.options)&&e.options.dumpPath){const t=yield(yield fetch(e.options.dumpPath)).json();this._imported&&this._imported===t.timestamp.toString()||(yield this.importDbDump(t))}}catch(i){throw new $(null!==(o=i.message)&&void 0!==o?o:i)}})}initCollections(t){var e;return Object(n.a)(this,void 0,void 0,function*(){try{const e=yield this.prepareCollections(t),o=yield this.dbInstance.addCollections(e);L(`created ${Object.keys(o).length} collections bulk, `,Object.keys(o))}catch(o){throw new $(null!==(e=o.message)&&void 0!==e?e:o)}})}initCollection(t){var e;return Object(n.a)(this,void 0,void 0,function*(){let o=this.db[t.name];if(Object(r.c)(o))return t.options.recreate?yield o.remove():(L("collection",o.name,"exists, skip create"),o);const i=yield this.prepareCollections({[t.name]:t});o=(yield this.dbInstance.addCollections(i))[t.name],L(`created collection "${o.name}"`);const n=yield o.countAllDocuments();if(L(`collection "${o.name}" has "${parseInt(n,0)}" docs`),(null===(e=t.options)||void 0===e?void 0:e.initialDocs)&&!n){const e={name,schemaHash:o.schema.hash,encrypted:!1,docs:[...t.options.initialDocs]};yield o.importDump(e),L(`imported ${t.options.initialDocs.length} docs for collection "${name}"`)}return o})}getCollection(t){const e=this.db[t];return Object(r.c)(e)?e:(L(`returned false for RxDB.isRxCollection(${t})`),null)}syncCollection(t,e="db",o){var i,n;if(null===(n=null===(i=t.options)||void 0===i?void 0:i.syncOptions)||void 0===n?void 0:n.remote){const{syncOptions:i}=t.options;return i.remote=i.remote.concat("/",e),i.options=Object.assign({back_off_function:D},this.db.pouchSettings.ajax,t.pouchSettings.ajax,i.options),o&&(i.options.headers=Object.assign({},i.options.headers,o)),i.queryObj&&(i.query=t.find(i.queryObj)),t.sync(i)}}syncAllCollections(t="db",e){if(k(this.collections))throw new $("collections must be initialized before importing dump");const o=[];return Object.values(this.collections).filter(t=>"remote"in t.options.syncOptions).forEach(i=>{const n=this.syncCollection(i,t,e);o.push(n)}),L("syncAllCollections = ",o),o}importDbDump(t){var e;return Object(n.a)(this,void 0,void 0,function*(){try{const e=this.prepareDump(t);yield this.db.importDump(e),this._imported=e.timestamp}catch(o){if(409!==o.status)throw new $(null!==(e=o.message)&&void 0!==e?e:o);this._imported=t.timestamp}})}prepareCollections(t){var e;return Object(n.a)(this,void 0,void 0,function*(){try{const e={},o=Object.values(t);for(const t of o)!t.schema&&t.options.schemaUrl&&(t.schema=yield C.fetchSchema(t.options.schemaUrl)),Object(a.a)(t.schema),e[t.name]=new C(t);return e}catch(o){throw new $(null!==(e=o.message)&&void 0!==e?e:o)}})}prepareDump(t){const e=Object.assign({},t);if(k(this.collections))throw new $("collections must be initialized before importing dump");for(const o in this.collections)e.collections.hasOwnProperty(o)&&(e.collections[o].schemaHash=this.collections[o].schema._hash);return e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Cb({token:t,factory:t.\u0275fac}),t})(),R=(()=>{class t{constructor(t,e){this.dbService=t,this.config=e}get collection(){return this._collection}get db(){return this.dbService.db}ngOnDestroy(){return Object(n.a)(this,void 0,void 0,function*(){Object(r.c)(this.collection)&&(yield this.collection.destroy())})}collectionLoaded$(){return this.inited$||(this.inited$=new m.a,this.dbService.initCollection(this.config).then(t=>{this._collection=t,this.inited$.next(!0),this.inited$.complete()})),this.inited$.asObservable()}sync(t="db",e){return this.dbService.syncCollection(this.collection,t,e)}docs(t){return this.collectionLoaded$().pipe(Object(O.a)(()=>this.collection.find(t).$))}allDocs(){return Object(f.a)(()=>Object(n.a)(this,void 0,void 0,function*(){try{return(yield this.collection.pouch.allDocs({include_docs:!0,attachments:!1,endkey:"_design",inclusive_end:!1})).rows.map(({doc:t,id:e})=>Object.assign(Object.assign({},t),{id:e}))}catch(P){return[]}}))}insertLocal(t,e){return Object(v.a)(this.collection.upsertLocal(t,e))}getLocal(t){return this.collectionLoaded$().pipe(Object(O.a)(()=>Object(v.a)(this.collection.getLocal(t))))}updateLocal(t,e,o){return Object(f.a)(()=>Object(n.a)(this,void 0,void 0,function*(){const i=yield this.collection.getLocal(t);i.set(e,o),yield i.save()}))}removeLocal(t){return Object(f.a)(()=>Object(n.a)(this,void 0,void 0,function*(){return(yield this.collection.getLocal(t)).remove()}))}get(t){return this.collectionLoaded$().pipe(Object(O.a)(()=>Object(v.a)(this.collection.findOne(t).exec())))}getById(t){return this.collectionLoaded$().pipe(Object(O.a)(()=>this.collection.findByIds$([t]).pipe(Object(g.a)(e=>e.size?e.get(t):null))))}insert(t){return Object(v.a)(this.collection.insert(t))}bulkInsert(t){return Object(v.a)(this.collection.bulkInsert(t))}upsert(t){return Object(v.a)(this.collection.upsert(t))}update(t,e){return Object(f.a)(()=>Object(n.a)(this,void 0,void 0,function*(){return(yield this.collection.findOne(t).exec()).update({$set:Object.assign({},e)})}))}set(t,e,o){return Object(f.a)(()=>Object(n.a)(this,void 0,void 0,function*(){const i=yield this.collection.findOne(t).exec();return i.set(e,o),i.save()}))}remove(t){return Object(f.a)(()=>Object(n.a)(this,void 0,void 0,function*(){return(yield this.collection.findOne(t).exec()).remove()}))}removeBulkBy(t){return this.collectionLoaded$().pipe(Object(O.a)(()=>Object(v.a)(this.collection.find(t).remove())))}_removeBulkBy(t){return Object(f.a)(()=>Object(n.a)(this,void 0,void 0,function*(){try{const e=yield this.collection.find(t).exec();if(e&&e.length){const t=e.map(t=>({_id:t.primary,_rev:t._rev,_deleted:!0}));return this.collection.pouch.bulkDocs(t)}}catch(e){return null}}))}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(B),i.Pb(j))},t.\u0275prov=i.Cb({token:t,factory:t.\u0275fac}),t})();function A(t,e){return()=>Object(n.a)(this,void 0,void 0,function*(){yield t.initDb(e)})}let E=(()=>{class t{constructor(t,e,o,i,n){if(!o&&!e)throw new Error(y.toString()+" is not provided. Make sure you call the 'forRoot' method of the NgxRxdbModule in the AppModule only.");if(o&&e)throw new Error(y.toString()+" is already provided. Make sure you call the 'forRoot' method of the NgxRxdbModule in the AppModule only.");o&&!e&&Object(v.a)(t.donePromise).subscribe(()=>{L("appInitStatus.donePromise")})}static forFeature(t){return{ngModule:M,providers:[{provide:j,useValue:t},R]}}static forRoot(e){return{ngModule:t,providers:[{provide:y,useValue:e},B,{provide:i.d,useFactory:A,deps:[B,y],multi:!0}]}}}return t.\u0275mod=i.Eb({type:t}),t.\u0275inj=i.Db({factory:function(e){return new(e||t)(i.Pb(i.e),i.Pb(y,12),i.Pb(y,10),i.Pb(j,12),i.Pb(B,2))}}),t})(),M=(()=>{class t{constructor(t){this.collectionService=t,this.collectionService.collectionLoaded$().subscribe(S)}}return t.\u0275mod=i.Eb({type:t}),t.\u0275inj=i.Db({factory:function(e){return new(e||t)(i.Pb(R))}}),t})()},"LvJ/":function(t,e){function o(t){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id="LvJ/"}},[[1,0,5]]]);