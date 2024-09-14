!function(){"use strict";var e={913:function(){try{self["workbox:core:6.5.2"]&&_()}catch(e){}},550:function(){try{self["workbox:expiration:6.5.2"]&&_()}catch(e){}},977:function(){try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:function(){try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:function(){try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={exports:{}},n=!0;try{e[a](i,i.exports,s),n=!1}finally{n&&delete t[a]}return i.exports}!function(){var e,t,a;let r,i,n,c,o,l;s(913);let h=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class u extends Error{constructor(e,t){super(h(e,t)),this.name=e,this.details=t}}let d=new Set,f={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},p=e=>[f.prefix,e,f.suffix].filter(e=>e&&e.length>0).join("-"),g=e=>e||p(f.precache),w=e=>e||p(f.runtime);function m(e,t){let s=new URL(e);for(let e of t)s.searchParams.delete(e);return s.href}async function y(e,t,s,a){let r=m(t.url,s);if(t.url===r)return e.match(t,a);let i=Object.assign(Object.assign({},a),{ignoreSearch:!0});for(let n of(await e.keys(t,i)))if(r===m(n.url,s))return e.match(n,a)}function b(e){e.then(()=>{})}class x{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}async function v(){for(let e of d)await e()}let E=e=>new URL(String(e),location.href).href.replace(RegExp(`^${location.origin}`),"");function R(e,t){let s=t();return e.waitUntil(s),s}async function C(e,t){let s=null;if(e.url&&(s=new URL(e.url).origin),s!==self.location.origin)throw new u("cross-origin-copy-response",{origin:s});let a=e.clone(),i={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},n=t?t(i):i,c=!function(){if(void 0===r){let e=new Response("");if("body"in e)try{new Response(e.body),r=!0}catch(e){r=!1}r=!1}return r}()?await a.blob():a.body;return new Response(c,n)}let D=(e,t)=>t.some(t=>e instanceof t),L=new WeakMap,T=new WeakMap,k=new WeakMap,U=new WeakMap,N=new WeakMap,S={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return T.get(e);if("objectStoreNames"===t)return e.objectStoreNames||k.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return A(e[t])},set:(e,t,s)=>(e[t]=s,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function A(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,s)=>{let a=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(A(e.result)),a()},i=()=>{s(e.error),a()};e.addEventListener("success",r),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&L.set(t,e)}).catch(()=>{}),N.set(t,e),t}(e);if(U.has(e))return U.get(e);let s="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(I(this),e),A(L.get(this))}:function(...e){return A(t.apply(I(this),e))}:function(e,...s){let a=t.call(I(this),e,...s);return k.set(a,e.sort?e.sort():[e]),A(a)}:(t instanceof IDBTransaction&&function(e){if(T.has(e))return;let t=new Promise((t,s)=>{let a=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),a()},i=()=>{s(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)});T.set(e,t)}(t),D(t,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,S):t;return s!==e&&(U.set(e,s),N.set(s,e)),s}let I=e=>N.get(e),q=["get","getKey","getAll","getAllKeys","count"],M=["put","add","delete","clear"],P=new Map;function K(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(P.get(t))return P.get(t);let s=t.replace(/FromIndex$/,""),a=t!==s,r=M.includes(s);if(!(s in(a?IDBIndex:IDBObjectStore).prototype)||!(r||q.includes(s)))return;let i=async function(e,...t){let i=this.transaction(e,r?"readwrite":"readonly"),n=i.store;return a&&(n=n.index(t.shift())),(await Promise.all([n[s](...t),r&&i.done]))[0]};return P.set(t,i),i}S={...l=S,get:(e,t,s)=>K(e,t)||l.get(e,t,s),has:(e,t)=>!!K(e,t)||l.has(e,t)},s(550);let O="cache-entries",W=e=>{let t=new URL(e,location.href);return t.hash="",t.href};class j{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){let t=e.createObjectStore(O,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){let s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",()=>t()),A(s).then(()=>void 0)}(this._cacheName)}async setTimestamp(e,t){let s={url:e=W(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},a=(await this.getDb()).transaction(O,"readwrite",{durability:"relaxed"});await a.store.put(s),await a.done}async getTimestamp(e){let t=await this.getDb(),s=await t.get(O,this._getId(e));return null==s?void 0:s.timestamp}async expireEntries(e,t){let s=await this.getDb(),a=await s.transaction(O).store.index("timestamp").openCursor(null,"prev"),r=[],i=0;for(;a;){let s=a.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&i>=t?r.push(a.value):i++),a=await a.continue()}let n=[];for(let e of r)await s.delete(O,e.id),n.push(e.url);return n}_getId(e){return this._cacheName+"|"+W(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:s,upgrade:a,blocking:r,terminated:i}={}){let n=indexedDB.open(e,1),c=A(n);return a&&n.addEventListener("upgradeneeded",e=>{a(A(n.result),e.oldVersion,e.newVersion,A(n.transaction))}),s&&n.addEventListener("blocked",()=>s()),c.then(e=>{i&&e.addEventListener("close",()=>i()),r&&e.addEventListener("versionchange",()=>r())}).catch(()=>{}),c}("workbox-expiration",0,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class B{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new j(e)}async expireEntries(){if(this._isRunning){this._rerunRequested=!0;return}this._isRunning=!0;let e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(let e of t)await s.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,b(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(!this._maxAgeSeconds)return!1;{let t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class H{constructor(e={}){if(this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:a})=>{if(!a)return null;let r=this._isResponseDateFresh(a),i=this._getCacheExpiration(s);b(i.expireEntries());let n=i.updateTimestamp(t.url);if(e)try{e.waitUntil(n)}catch(e){}return r?a:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{let s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError){var t;t=()=>this.deleteCacheAndMetadata(),d.add(t)}}_getCacheExpiration(e){if(e===w())throw new u("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new B(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;let t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;let t=new Date(e.headers.get("date")).getTime();return isNaN(t)?null:t}async deleteCacheAndMetadata(){for(let[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}function F(e){return"string"==typeof e?new Request(e):e}s(873);class ${constructor(e,t){for(let s of(this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new x,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map,this._plugins))this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){let{event:t}=this,s=F(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){let e=await t.preloadResponse;if(e)return e}let a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(let e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new u("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}let r=s.clone();try{let e;for(let a of(e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions),this.iterateCallbacks("fetchDidSucceed")))e=await a({event:t,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:a.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){let t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){let t;let s=F(e),{cacheName:a,matchOptions:r}=this._strategy,i=await this.getCacheKey(s,"read"),n=Object.assign(Object.assign({},r),{cacheName:a});for(let e of(t=await caches.match(i,n),this.iterateCallbacks("cachedResponseWillBeUsed")))t=await e({cacheName:a,matchOptions:r,cachedResponse:t,request:i,event:this.event})||void 0;return t}async cachePut(e,t){let s=F(e);await new Promise(e=>setTimeout(e,0));let a=await this.getCacheKey(s,"write");if(!t)throw new u("cache-put-with-no-response",{url:E(a.url)});let r=await this._ensureResponseSafeToCache(t);if(!r)return!1;let{cacheName:i,matchOptions:n}=this._strategy,c=await self.caches.open(i),o=this.hasCallback("cacheDidUpdate"),l=o?await y(c,a.clone(),["__WB_REVISION__"],n):null;try{await c.put(a,o?r.clone():r)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await v(),e}for(let e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:i,oldResponse:l,newResponse:r.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){let s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(let e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=F(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(let t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(let s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(let t of this._strategy.plugins)if("function"==typeof t[e]){let s=this._pluginStateMap.get(t),a=a=>{let r=Object.assign(Object.assign({},a),{state:s});return t[e](r)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(let e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return!s&&t&&200!==t.status&&(t=void 0),t}}class G{constructor(e={}){this.cacheName=w(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){let[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});let t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a=new $(this,{event:t,request:s,params:"params"in e?e.params:void 0}),r=this._getResponse(a,s,t),i=this._awaitComplete(r,a,s,t);return[r,i]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(!(a=await this._handle(t,e))||"error"===a.type)throw new u("no-response",{url:t.url})}catch(r){if(r instanceof Error){for(let i of e.iterateCallbacks("handlerDidError"))if(a=await i({error:r,event:s,request:t}))break}if(a);else throw r}for(let r of e.iterateCallbacks("handlerWillRespond"))a=await r({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let r,i;try{r=await e}catch(e){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:r}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:r,error:i}),t.destroy(),i)throw i}}class Q extends G{async _handle(e,t){let s,a=await t.cacheMatch(e);if(!a)try{a=await t.fetchAndCachePut(e)}catch(e){e instanceof Error&&(s=e)}if(!a)throw new u("no-response",{url:e.url,error:s});return a}}let V={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class J extends G{constructor(e={}){super(e),this.plugins.some(e=>"cacheWillUpdate"in e)||this.plugins.unshift(V)}async _handle(e,t){let s;let a=t.fetchAndCachePut(e).catch(()=>{});t.waitUntil(a);let r=await t.cacheMatch(e);if(r);else try{r=await a}catch(e){e instanceof Error&&(s=e)}if(!r)throw new u("no-response",{url:e.url,error:s});return r}}s(80);let z=e=>e&&"object"==typeof e?e:{handle:e};class X{constructor(e,t,s="GET"){this.handler=z(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=z(e)}}class Y extends X{constructor(e,t,s){super(({url:t})=>{let s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class Z{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{let{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){let{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(t=>{"string"==typeof t&&(t=[t]);let s=new Request(...t);return this.handleRequest({request:s,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){let s;let a=new URL(e.url,location.href);if(!a.protocol.startsWith("http"))return;let r=a.origin===location.origin,{params:i,route:n}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:a}),c=n&&n.handler,o=e.method;if(!c&&this._defaultHandlerMap.has(o)&&(c=this._defaultHandlerMap.get(o)),!c)return;try{s=c.handle({url:a,request:e,event:t,params:i})}catch(e){s=Promise.reject(e)}let l=n&&n.catchHandler;return s instanceof Promise&&(this._catchHandler||l)&&(s=s.catch(async s=>{if(l)try{return await l.handle({url:a,request:e,event:t,params:i})}catch(e){e instanceof Error&&(s=e)}if(this._catchHandler)return this._catchHandler.handle({url:a,request:e,event:t});throw s})),s}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){for(let r of this._routes.get(s.method)||[]){let i;let n=r.match({url:e,sameOrigin:t,request:s,event:a});if(n)return Array.isArray(i=n)&&0===i.length?i=void 0:n.constructor===Object&&0===Object.keys(n).length?i=void 0:"boolean"==typeof n&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,z(e))}setCatchHandler(e){this._catchHandler=z(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new u("unregister-route-but-not-found-with-method",{method:e.method});let t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new u("unregister-route-route-not-registered")}}let ee=()=>(c||((c=new Z).addFetchListener(),c.addCacheListener()),c);function et(e,t,s){let a;if("string"==typeof e){let r=new URL(e,location.href);a=new X(({url:e})=>e.href===r.href,t,s)}else if(e instanceof RegExp)a=new Y(e,t,s);else if("function"==typeof e)a=new X(e,t,s);else if(e instanceof X)a=e;else throw new u("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return ee().registerRoute(a),a}s(977);class es{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){let e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class ea{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{let s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}class er extends G{constructor(e={}){e.cacheName=g(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(er.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;let a=t.params||{};if(this._fallbackToNetwork){let r=a.integrity,i=e.integrity,n=!i||i===r;s=await t.fetch(new Request(e,{integrity:i||r})),r&&n&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone()))}else throw new u("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();let s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new u("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(let[s,a]of this.plugins.entries())a!==er.copyRedirectedCacheableResponsesPlugin&&(a===er.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(er.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}er.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},er.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await C(e):e};class ei{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new er({cacheName:g(e),plugins:[...t,new ea({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){let t=[];for(let s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);let{cacheKey:e,url:a}=function(e){if(!e)throw new u("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){let t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}let{revision:t,url:s}=e;if(!s)throw new u("add-to-cache-list-unexpected-type",{entry:e});if(!t){let e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}let a=new URL(s,location.href),r=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:r.href}}(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new u("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new u("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),t.length>0&&console.warn(`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`)}}install(e){return R(e,async()=>{let t=new es;for(let[s,a]of(this.strategy.plugins.push(t),this._urlsToCacheKeys)){let t=this._cacheKeysToIntegrities.get(a),r=this._urlsToCacheModes.get(s),i=new Request(s,{integrity:t,cache:r,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:a},request:i,event:e}))}let{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}})}activate(e){return R(e,async()=>{let e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(let r of t)s.has(r.url)||(await e.delete(r),a.push(r.url));return{deletedURLs:a}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){let t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){let t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){let t=this.getCacheKeyForURL(e);if(!t)throw new u("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let en=()=>(o||(o=new ei),o);class ec extends X{constructor(e,t){super(({request:s})=>{let a=e.getURLsToCacheKeys();for(let r of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:r}={}){let i=new URL(e,location.href);i.hash="",yield i.href;let n=function(e,t=[]){for(let s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(i,t);if(yield n.href,s&&n.pathname.endsWith("/")){let e=new URL(n.href);e.pathname+=s,yield e.href}if(a){let e=new URL(n.href);e.pathname+=".html",yield e.href}if(r)for(let e of r({url:i}))yield e.href}(s.url,t)){let t=a.get(r);if(t){let s=e.getIntegrityForCacheKey(t);return{cacheKey:t,integrity:s}}}},e.strategy)}}let eo="-precache-",el=async(e,t=eo)=>{let s=(await self.caches.keys()).filter(s=>s.includes(t)&&s.includes(self.registration.scope)&&s!==e);return await Promise.all(s.map(e=>self.caches.delete(e))),s};function eh(e){return en().matchPrecache(e)}self.skipWaiting(),self.addEventListener("activate",()=>self.clients.claim());let eu=[{'revision':'41ad6ce76998a2c701d3114fb8c87c35','url':'/Favicon/favicon.ico'},{'revision':'6c024ab817fab827','url':'/_next/static/chunks/433-6c024ab817fab827.js'},{'revision':'38200379b289713e','url':'/_next/static/chunks/539-38200379b289713e.js'},{'revision':'49c6cecf1f6d5795','url':'/_next/static/chunks/framework-49c6cecf1f6d5795.js'},{'revision':'85b0af1c32885833','url':'/_next/static/chunks/main-85b0af1c32885833.js'},{'revision':'4d9a72d50fba3619','url':'/_next/static/chunks/pages/404-4d9a72d50fba3619.js'},{'revision':'27cc53e778c38ff9','url':'/_next/static/chunks/pages/_app-27cc53e778c38ff9.js'},{'revision':'77823ddac6993d35','url':'/_next/static/chunks/pages/_error-77823ddac6993d35.js'},{'revision':'04aec69b326abe2a','url':'/_next/static/chunks/pages/fallback-04aec69b326abe2a.js'},{'revision':'feb53b003df213a5','url':'/_next/static/chunks/pages/index-feb53b003df213a5.js'},{'revision':'79330112775102f91e1010318bae2bd3','url':'/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js'},{'revision':'0b5d8249fb15f5f3','url':'/_next/static/chunks/webpack-0b5d8249fb15f5f3.js'},{'revision':'2b8d03dbf226ab4e','url':'/_next/static/css/2b8d03dbf226ab4e.css'},{'revision':'6008c42799361cda2cc377bfc66ec19c','url':'/_next/static/osP5FkvQPFEE6BCtJ0TZY/_buildManifest.js'},{'revision':'b6652df95db52feb4daf4eca35380933','url':'/_next/static/osP5FkvQPFEE6BCtJ0TZY/_ssgManifest.js'},{'revision':'07c25c700df8e6b1658346a539ed5732','url':'/sitemap-0.xml'},{'revision':'4eeb8987def41f2839077fae32ea22f0','url':'/sitemap.xml'},{'revision':'5deb3c94d0baf78db40dd178ec4ce495','url':'/sw.js'}];eu.push({url:"/fallback",revision:"1234567890"}),en().precache(eu),e=void 0,et(new ec(en(),e)),self.addEventListener("activate",e=>{let t=g();e.waitUntil(el(t).then(e=>{}))}),et("/",new J({cacheName:"start-url",plugins:[new H({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),et(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new Q({cacheName:"google-fonts",plugins:[new H({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),et(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new Q({cacheName:"static-font-assets",plugins:[new H({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),et(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new J({cacheName:"static-image-assets",plugins:[new H({maxEntries:64,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),et(/\.(?:js)$/i,new J({cacheName:"static-js-assets",plugins:[new H({maxEntries:32,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),et(/\.(?:css|less)$/i,new J({cacheName:"static-style-assets",plugins:[new H({maxEntries:32,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),et(/\.(?:json|xml|csv)$/i,new J({cacheName:"static-data-assets",plugins:[new H({maxEntries:32,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),et(/.*/i,new J({cacheName:"others",networkTimeoutSeconds:10,plugins:[new H({maxEntries:32,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),t=new J,ee().setDefaultHandler(t),a=e=>{let{event:t}=e;switch(t.request.destination){case"document":return eh("/fallback");case"image":return eh("/logos/stratools-stacked.png");default:return Response.error()}},ee().setCatchHandler(a)}()}();