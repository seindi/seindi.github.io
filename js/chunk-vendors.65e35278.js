(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"0299":function(e,t,n){"use strict";var r,i="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),s=64,o={},a=0,c=0;function u(e){var t="";do{t=i[e%s]+t,e=Math.floor(e/s)}while(e>0);return t}function l(e){var t=0;for(c=0;c<e.length;c++)t=t*s+o[e.charAt(c)];return t}function h(){var e=u(+new Date);return e!==r?(a=0,r=e):e+"."+u(a++)}for(;c<s;c++)o[i[c]]=c;h.encode=u,h.decode=l,e.exports=h},"0829":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return vl})),n.d(t,"b",(function(){return mu})),n.d(t,"c",(function(){return eu})),n.d(t,"d",(function(){return zc})),n.d(t,"e",(function(){return Wu})),n.d(t,"f",(function(){return pu})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return yu})),n.d(t,"i",(function(){return Yu})),n.d(t,"j",(function(){return Ju})),n.d(t,"k",(function(){return U})),n.d(t,"l",(function(){return Il})),n.d(t,"m",(function(){return se})),n.d(t,"n",(function(){return ue})),n.d(t,"o",(function(){return H})),n.d(t,"p",(function(){return Mc})),n.d(t,"q",(function(){return w})),n.d(t,"r",(function(){return Y})),n.d(t,"s",(function(){return g})),n.d(t,"t",(function(){return Dc})),n.d(t,"u",(function(){return Dl})),n.d(t,"v",(function(){return Gl})),n.d(t,"w",(function(){return zl})),n.d(t,"x",(function(){return au})),n.d(t,"y",(function(){return Kc})),n.d(t,"z",(function(){return Hc})),n.d(t,"A",(function(){return qc})),n.d(t,"B",(function(){return Rl})),n.d(t,"C",(function(){return Bl})),n.d(t,"D",(function(){return lu})),n.d(t,"E",(function(){return Wc})),n.d(t,"F",(function(){return iu})),n.d(t,"G",(function(){return su})),n.d(t,"H",(function(){return uu})),n.d(t,"I",(function(){return pl})),n.d(t,"J",(function(){return fl})),n.d(t,"K",(function(){return nu})),n.d(t,"L",(function(){return Ll})),n.d(t,"M",(function(){return El})),n.d(t,"N",(function(){return kl})),n.d(t,"O",(function(){return Sl})),n.d(t,"P",(function(){return Al})),n.d(t,"Q",(function(){return jl})),n.d(t,"R",(function(){return xl})),n.d(t,"S",(function(){return $l})),n.d(t,"T",(function(){return al})),n.d(t,"U",(function(){return cl})),n.d(t,"V",(function(){return hu})),n.d(t,"W",(function(){return du})),n.d(t,"X",(function(){return Fl})),n.d(t,"Y",(function(){return Pl})),n.d(t,"Z",(function(){return sl})),n.d(t,"ab",(function(){return tl})),n.d(t,"bb",(function(){return Jc})),n.d(t,"cb",(function(){return Yc})),n.d(t,"db",(function(){return Vl})),n.d(t,"eb",(function(){return ql})),n.d(t,"fb",(function(){return Cl})),n.d(t,"gb",(function(){return f})),n.d(t,"hb",(function(){return Xu})),n.d(t,"ib",(function(){return hl})),n.d(t,"jb",(function(){return ll})),n.d(t,"kb",(function(){return Nl})),n.d(t,"lb",(function(){return cu})),n.d(t,"mb",(function(){return rl}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.6.10";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(e){h.setLogLevel(e)}function p(e,...t){if(h.logLevel<=s["a"].DEBUG){const n=t.map(y);h.debug(`Firestore (${l}): ${e}`,...n)}}function m(e,...t){if(h.logLevel<=s["a"].ERROR){const n=t.map(y);h.error(`Firestore (${l}): ${e}`,...n)}}function g(e,...t){if(h.logLevel<=s["a"].WARN){const n=t.map(y);h.warn(`Firestore (${l}): ${e}`,...n)}}function y(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e="Unexpected state"){const t=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+e;throw m(t),new Error(t)}function v(e,t){e||b()}function w(e,t){e||b()}function _(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends o["c"]{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class k{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(u.UNAUTHENTICATED))}shutdown(){}}class S{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class A{constructor(e){this.t=e,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new E;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new E,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new E)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(v("string"==typeof t.accessToken),new T(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return v(null===e||"string"==typeof e),new u(e)}}class j{constructor(e,t,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class x{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new j(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class C{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message);const n=e.token!==this.p;return this.p=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(v("string"==typeof e.token),this.p=e.token,new C(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */R.A=-1;class F{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=D(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function P(e,t){return e<t?-1:e>t?1:0}function L(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function M(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return U.fromMillis(Date.now())}static fromDate(e){return U.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new U(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?P(this.nanoseconds,e.nanoseconds):P(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new U(0,0))}static max(){return new V(new U(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function q(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function z(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,t,n){void 0===t?t=0:t>e.length&&b(),void 0===n?n=e.length-t:n>e.length-t&&b(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===G.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof G?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class $ extends G{construct(e,t,n){return new $(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new O(I.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new $(t)}static emptyPath(){return new $([])}}const K=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends G{construct(e,t,n){return new H(e,t,n)}static isValidIdentifier(e){return K.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new H(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new O(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new O(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new O(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new O(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new H(t)}static emptyPath(){return new H([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.fields=e,e.sort(H.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new J(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new J(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return P(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}J.EMPTY_BYTE_STRING=new J("");const Q=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function X(e){if(v(!!e),"string"==typeof e){let t=0;const n=Q.exec(e);if(v(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(e.seconds),nanos:Z(e.nanos)}}function Z(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ee(e){return"string"==typeof e?J.fromBase64String(e):J.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ne(e){const t=e.mapValue.fields.__previous_value__;return te(t)?ne(t):t}function re(e){const t=X(e.mapValue.fields.__local_write_time__.timestampValue);return new U(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class se{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new se("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof se&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){return null==e}function ae(e){return 0===e&&1/e==-1/0}function ce(e){return"number"==typeof e&&Number.isInteger(e)&&!ae(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue($.fromString(e))}static fromName(e){return new ue($.fromString(e).popFirst(5))}static empty(){return new ue($.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===$.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return $.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new $(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},he={nullValue:"NULL_VALUE"};function de(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?te(e)?4:ke(e)?9:10:b()}function fe(e,t){if(e===t)return!0;const n=de(e);if(n!==de(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return re(e).isEqual(re(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=X(e.timestampValue),r=X(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ee(e.bytesValue).isEqual(ee(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Z(e.geoPointValue.latitude)===Z(t.geoPointValue.latitude)&&Z(e.geoPointValue.longitude)===Z(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Z(e.integerValue)===Z(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Z(e.doubleValue),r=Z(t.doubleValue);return n===r?ae(n)===ae(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],fe);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(B(n)!==B(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!fe(n[i],r[i])))return!1;return!0}(e,t);default:return b()}}function pe(e,t){return void 0!==(e.values||[]).find(e=>fe(e,t))}function me(e,t){if(e===t)return 0;const n=de(e),r=de(t);if(n!==r)return P(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return P(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Z(e.integerValue||e.doubleValue),r=Z(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ge(e.timestampValue,t.timestampValue);case 4:return ge(re(e),re(t));case 5:return P(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ee(e),r=ee(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=P(n[i],r[i]);if(0!==e)return e}return P(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=P(Z(e.latitude),Z(t.latitude));return 0!==n?n:P(Z(e.longitude),Z(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=me(n[i],r[i]);if(e)return e}return P(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=P(r[o],s[o]);if(0!==e)return e;const t=me(n[r[o]],i[s[o]]);if(0!==t)return t}return P(r.length,s.length)}(e.mapValue,t.mapValue);default:throw b()}}function ge(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return P(e,t);const n=X(e),r=X(t),i=P(n.seconds,r.seconds);return 0!==i?i:P(n.nanos,r.nanos)}function ye(e){return be(e)}function be(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=X(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ee(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ue.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=be(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${be(e.fields[i])}`;return n+"}"}(e.mapValue):b();var t,n}function ve(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function we(e){return!!e&&"integerValue"in e}function _e(e){return!!e&&"arrayValue"in e}function Ie(e){return!!e&&"nullValue"in e}function Oe(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ee(e){return!!e&&"mapValue"in e}function Te(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return q(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Te(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Te(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ke(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Se(e,t){return void 0===e?t:void 0===t||me(e,t)>0?e:t}function Ae(e,t){return void 0===e?t:void 0===t||me(e,t)<0?e:t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.value=e}static empty(){return new je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ee(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Te(t)}setAll(e){let t=H.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Te(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Ee(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ee(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){q(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new je(Te(this.value))}}function xe(e){const t=[];return q(e.fields,(e,n)=>{const r=new H([e]);if(Ee(n)){const e=xe(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new W(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ce{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new Ce(e,0,V.min(),V.min(),je.empty(),0)}static newFoundDocument(e,t,n){return new Ce(e,1,t,V.min(),n,0)}static newNoDocument(e,t){return new Ce(e,2,t,V.min(),je.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,V.min(),je.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Ne{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Re(e){return e.fields.find(e=>2===e.kind)}function De(e){return e.fields.filter(e=>2!==e.kind)}Ne.UNKNOWN_ID=-1;class Fe{constructor(e,t){this.fieldPath=e,this.kind=t}}class Pe{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Pe(0,Ue.min())}}function Le(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=V.fromTimestamp(1e9===r?new U(n+1,0):new U(n,r));return new Ue(i,ue.empty(),t)}function Me(e){return new Ue(e.readTime,e.key,-1)}class Ue{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ue(V.min(),ue.empty(),-1)}static max(){return new Ue(V.max(),ue.empty(),-1)}}function Ve(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ue.comparator(e.documentKey,t.documentKey),0!==n?n:P(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.P=null}}function qe(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Be(e,t,n,r,i,s,o)}function ze(e){const t=_(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>{return(t=e).field.canonicalString()+t.op.toString()+ye(t.value);var t}).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),oe(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>ye(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>ye(e)).join(",")),t.P=e}return t.P}function Ge(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>{return`${(t=e).field.canonicalString()} ${t.op} ${ye(t.value)}`;var t}).join(", ")}]`),oe(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>ye(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>ye(e)).join(",")),`Target(${t})`}function $e(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!st(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!fe(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!at(e.startAt,t.startAt)&&at(e.endAt,t.endAt)}function Ke(e){return ue.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function He(e,t){return e.filters.filter(e=>e instanceof We&&e.field.isEqual(t))}class We extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new Ye(e,t,n):"array-contains"===t?new Ze(e,n):"in"===t?new et(e,n):"not-in"===t?new tt(e,n):"array-contains-any"===t?new nt(e,n):new We(e,t,n)}static V(e,t,n){return"in"===t?new Je(e,n):new Qe(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(me(t,this.value)):null!==t&&de(this.value)===de(t)&&this.v(me(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return b()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ye extends We{constructor(e,t,n){super(e,t,n),this.key=ue.fromName(n.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.v(t)}}class Je extends We{constructor(e,t){super(e,"in",t),this.keys=Xe("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Qe extends We{constructor(e,t){super(e,"not-in",t),this.keys=Xe("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Xe(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>ue.fromName(e.referenceValue))}class Ze extends We{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _e(t)&&pe(t.arrayValue,this.value)}}class et extends We{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&pe(this.value.arrayValue,t)}}class tt extends We{constructor(e,t){super(e,"not-in",t)}matches(e){if(pe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!pe(this.value.arrayValue,t)}}class nt extends We{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_e(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>pe(this.value.arrayValue,e))}}class rt{constructor(e,t){this.position=e,this.inclusive=t}}class it{constructor(e,t="asc"){this.field=e,this.dir=t}}function st(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function ot(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ue.comparator(ue.fromName(o.referenceValue),n.key):me(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function at(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!fe(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function ut(e,t,n,r,i,s,o,a){return new ct(e,t,n,r,i,s,o,a)}function lt(e){return new ct(e)}function ht(e){return!oe(e.limit)&&"F"===e.limitType}function dt(e){return!oe(e.limit)&&"L"===e.limitType}function ft(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function pt(e){for(const t of e.filters)if(t.S())return t.field;return null}function mt(e){return null!==e.collectionGroup}function gt(e){const t=_(e);if(null===t.D){t.D=[];const e=pt(t),n=ft(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new it(e)),t.D.push(new it(H.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new it(H.keyField(),e))}}}return t.D}function yt(e){const t=_(e);if(!t.C)if("F"===t.limitType)t.C=qe(t.path,t.collectionGroup,gt(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of gt(t)){const t="desc"===i.dir?"asc":"desc";e.push(new it(i.field,t))}const n=t.endAt?new rt(t.endAt.position,!t.endAt.inclusive):null,r=t.startAt?new rt(t.startAt.position,!t.startAt.inclusive):null;t.C=qe(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.C}function bt(e,t,n){return new ct(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function vt(e,t){return $e(yt(e),yt(t))&&e.limitType===t.limitType}function wt(e){return`${ze(yt(e))}|lt:${e.limitType}`}function _t(e){return`Query(target=${Ge(yt(e))}; limitType=${e.limitType})`}function It(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ue.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=ot(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,gt(e),t))&&!(e.endAt&&!function(e,t,n){const r=ot(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,gt(e),t))}(e,t)}function Ot(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Et(e){return(t,n)=>{let r=!1;for(const i of gt(e)){const e=Tt(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Tt(e,t,n){const r=e.field.isKeyField()?ue.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?me(r,i):b()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ae(t)?"-0":t}}function St(e){return{integerValue:""+e}}function At(e,t){return ce(t)?St(t):kt(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(){this._=void 0}}function xt(e,t,n){return e instanceof Rt?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Dt?Ft(e,t):e instanceof Pt?Lt(e,t):function(e,t){const n=Nt(e,t),r=Ut(n)+Ut(e.k);return we(n)&&we(e.k)?St(r):kt(e.M,r)}(e,t)}function Ct(e,t,n){return e instanceof Dt?Ft(e,t):e instanceof Pt?Lt(e,t):n}function Nt(e,t){return e instanceof Mt?we(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Rt extends jt{}class Dt extends jt{constructor(e){super(),this.elements=e}}function Ft(e,t){const n=Vt(t);for(const r of e.elements)n.some(e=>fe(e,r))||n.push(r);return{arrayValue:{values:n}}}class Pt extends jt{constructor(e){super(),this.elements=e}}function Lt(e,t){let n=Vt(t);for(const r of e.elements)n=n.filter(e=>!fe(e,r));return{arrayValue:{values:n}}}class Mt extends jt{constructor(e,t){super(),this.M=e,this.k=t}}function Ut(e){return Z(e.integerValue||e.doubleValue)}function Vt(e){return _e(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t){this.field=e,this.transform=t}}function qt(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Dt&&t instanceof Dt||e instanceof Pt&&t instanceof Pt?L(e.elements,t.elements,fe):e instanceof Mt&&t instanceof Mt?fe(e.k,t.k):e instanceof Rt&&t instanceof Rt}(e.transform,t.transform)}class zt{constructor(e,t){this.version=e,this.transformResults=t}}class Gt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Gt}static exists(e){return new Gt(void 0,e)}static updateTime(e){return new Gt(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $t(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Kt{}function Ht(e,t,n){e instanceof Xt?function(e,t,n){const r=e.value.clone(),i=tn(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Zt?function(e,t,n){if(!$t(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=tn(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(en(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Wt(e,t,n){e instanceof Xt?function(e,t,n){if(!$t(e.precondition,t))return;const r=e.value.clone(),i=nn(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(Qt(t),r).setHasLocalMutations()}(e,t,n):e instanceof Zt?function(e,t,n){if(!$t(e.precondition,t))return;const r=nn(e.fieldTransforms,n,t),i=t.data;i.setAll(en(e)),i.setAll(r),t.convertToFoundDocument(Qt(t),i).setHasLocalMutations()}(e,t,n):function(e,t){$t(e.precondition,t)&&t.convertToNoDocument(V.min())}(e,t)}function Yt(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Nt(r.transform,e||null);null!=i&&(null==n&&(n=je.empty()),n.set(r.field,i))}return n||null}function Jt(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&L(e,t,(e,t)=>qt(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Qt(e){return e.isFoundDocument()?e.version:V.min()}class Xt extends Kt{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Zt extends Kt{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function en(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function tn(e,t,n){const r=new Map;v(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Ct(o,a,n[i]))}return r}function nn(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,xt(e,s,t))}return r}class rn extends Kt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class sn extends Kt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var an,cn;function un(e){switch(e){default:return b();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function ln(e){if(void 0===e)return m("GRPC error has no .code"),I.UNKNOWN;switch(e){case an.OK:return I.OK;case an.CANCELLED:return I.CANCELLED;case an.UNKNOWN:return I.UNKNOWN;case an.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case an.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case an.INTERNAL:return I.INTERNAL;case an.UNAVAILABLE:return I.UNAVAILABLE;case an.UNAUTHENTICATED:return I.UNAUTHENTICATED;case an.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case an.NOT_FOUND:return I.NOT_FOUND;case an.ALREADY_EXISTS:return I.ALREADY_EXISTS;case an.PERMISSION_DENIED:return I.PERMISSION_DENIED;case an.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case an.ABORTED:return I.ABORTED;case an.OUT_OF_RANGE:return I.OUT_OF_RANGE;case an.UNIMPLEMENTED:return I.UNIMPLEMENTED;case an.DATA_LOSS:return I.DATA_LOSS;default:return b()}}(cn=an||(an={}))[cn.OK=0]="OK",cn[cn.CANCELLED=1]="CANCELLED",cn[cn.UNKNOWN=2]="UNKNOWN",cn[cn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",cn[cn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",cn[cn.NOT_FOUND=5]="NOT_FOUND",cn[cn.ALREADY_EXISTS=6]="ALREADY_EXISTS",cn[cn.PERMISSION_DENIED=7]="PERMISSION_DENIED",cn[cn.UNAUTHENTICATED=16]="UNAUTHENTICATED",cn[cn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",cn[cn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",cn[cn.ABORTED=10]="ABORTED",cn[cn.OUT_OF_RANGE=11]="OUT_OF_RANGE",cn[cn.UNIMPLEMENTED=12]="UNIMPLEMENTED",cn[cn.INTERNAL=13]="INTERNAL",cn[cn.UNAVAILABLE=14]="UNAVAILABLE",cn[cn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){q(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return z(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t){this.comparator=e,this.root=t||pn.EMPTY}insert(e,t){return new dn(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,pn.BLACK,null,null))}remove(e){return new dn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fn(this.root,e,this.comparator,!1)}getReverseIterator(){return new fn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fn(this.root,e,this.comparator,!0)}}class fn{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pn{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:pn.RED,this.left=null!=r?r:pn.EMPTY,this.right=null!=i?i:pn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new pn(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return pn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return pn.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw b();if(this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}pn.EMPTY=null,pn.RED=!0,pn.BLACK=!1,pn.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,t,n,r,i){return this}insert(e,t,n){return new pn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mn{constructor(e){this.comparator=e,this.data=new dn(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gn(this.data.getIterator())}getIteratorFrom(e){return new gn(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof mn))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new mn(this.comparator);return t.data=e,t}}class gn{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function yn(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new dn(ue.comparator);function vn(){return bn}const wn=new dn(ue.comparator);function _n(){return wn}function In(){return new hn(e=>e.toString(),(e,t)=>e.isEqual(t))}const On=new dn(ue.comparator),En=new mn(ue.comparator);function Tn(...e){let t=En;for(const n of e)t=t.add(n);return t}const kn=new mn(P);function Sn(){return kn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,jn.createSynthesizedTargetChangeForCurrentChange(e,t)),new An(V.min(),n,Sn(),vn(),Tn())}}class jn{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new jn(J.EMPTY_BYTE_STRING,t,Tn(),Tn(),Tn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t,n,r){this.O=e,this.removedTargetIds=t,this.key=n,this.F=r}}class Cn{constructor(e,t){this.targetId=e,this.$=t}}class Nn{constructor(e,t,n=J.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Rn{constructor(){this.B=0,this.L=Pn(),this.U=J.EMPTY_BYTE_STRING,this.q=!1,this.G=!0}get current(){return this.q}get resumeToken(){return this.U}get K(){return 0!==this.B}get j(){return this.G}W(e){e.approximateByteSize()>0&&(this.G=!0,this.U=e)}H(){let e=Tn(),t=Tn(),n=Tn();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:b()}}),new jn(this.U,this.q,e,t,n)}J(){this.G=!1,this.L=Pn()}Y(e,t){this.G=!0,this.L=this.L.insert(e,t)}X(e){this.G=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.G=!0,this.q=!0}}class Dn{constructor(e){this.nt=e,this.st=new Map,this.it=vn(),this.rt=Fn(),this.ot=new mn(P)}ut(e){for(const t of e.O)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ht(e){this.forEachTarget(e,t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.K||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.K||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:b()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach((e,n)=>{this.ft(n)&&t(n)})}_t(e){const t=e.targetId,n=e.$.count,r=this.wt(t);if(r){const e=r.target;if(Ke(e))if(0===n){const n=new ue(e.path);this.ct(t,n,Ce.newNoDocument(n,V.min()))}else v(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&Ke(i.target)){const t=new ue(i.target.path);null!==this.it.get(t)||this.It(r,t)||this.ct(r,t,Ce.newNoDocument(t,e))}n.j&&(t.set(r,n.H()),n.J())}});let n=Tn();this.rt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.it.forEach((t,n)=>n.setReadTime(e));const r=new An(e,t,this.ot,this.it,n);return this.it=vn(),this.rt=Fn(),this.ot=new mn(P),r}at(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new Rn,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new mn(P),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.K?null:this.nt.Et(e)}dt(e){this.st.set(e,new Rn),this.nt.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function Fn(){return new dn(ue.comparator)}function Pn(){return new dn(ue.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Mn=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class Un{constructor(e,t){this.databaseId=e,this.N=t}}function Vn(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Bn(e,t){return e.N?t.toBase64():t.toUint8Array()}function qn(e,t){return Vn(e,t.toTimestamp())}function zn(e){return v(!!e),V.fromTimestamp(function(e){const t=X(e);return new U(t.seconds,t.nanos)}(e))}function Gn(e,t){return function(e){return new $(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function $n(e){const t=$.fromString(e);return v(yr(t)),t}function Kn(e,t){return Gn(e.databaseId,t.path)}function Hn(e,t){const n=$n(t);if(n.get(1)!==e.databaseId.projectId)throw new O(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new O(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ue(Qn(n))}function Wn(e,t){return Gn(e.databaseId,t)}function Yn(e){const t=$n(e);return 4===t.length?$.emptyPath():Qn(t)}function Jn(e){return new $(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Qn(e){return v(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Xn(e,t,n){return{name:Kn(e,t),fields:n.value.mapValue.fields}}function Zn(e,t,n){const r=Hn(e,t.name),i=zn(t.updateTime),s=new je({mapValue:{fields:t.fields}}),o=Ce.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function er(e,t){return"found"in t?function(e,t){v(!!t.found),t.found.name,t.found.updateTime;const n=Hn(e,t.found.name),r=zn(t.found.updateTime),i=new je({mapValue:{fields:t.found.fields}});return Ce.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){v(!!t.missing),v(!!t.readTime);const n=Hn(e,t.missing),r=zn(t.readTime);return Ce.newNoDocument(n,r)}(e,t):b()}function tr(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:b()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.N?(v(void 0===t||"string"==typeof t),J.fromBase64String(t||"")):(v(void 0===t||t instanceof Uint8Array),J.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?I.UNKNOWN:ln(e.code);return new O(t,e.message||"")}(o);n=new Nn(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Hn(e,r.document.name),s=zn(r.document.updateTime),o=new je({mapValue:{fields:r.document.fields}}),a=Ce.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new xn(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Hn(e,r.document),s=r.readTime?zn(r.readTime):V.min(),o=Ce.newNoDocument(i,s),a=r.removedTargetIds||[];n=new xn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Hn(e,r.document),s=r.removedTargetIds||[];n=new xn([],s,i,null)}else{if(!("filter"in t))return b();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new on(r),s=e.targetId;n=new Cn(s,i)}}return n}function nr(e,t){let n;if(t instanceof Xt)n={update:Xn(e,t.key,t.value)};else if(t instanceof rn)n={delete:Kn(e,t.key)};else if(t instanceof Zt)n={update:Xn(e,t.key,t.data),updateMask:gr(t.fieldMask)};else{if(!(t instanceof sn))return b();n={verify:Kn(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof Rt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Dt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Pt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Mt)return{fieldPath:t.field.canonicalString(),increment:n.k};throw b()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:qn(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:b()}(e,t.precondition)),n}function rr(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Gt.updateTime(zn(e.updateTime)):void 0!==e.exists?Gt.exists(e.exists):Gt.none()}(t.currentDocument):Gt.none(),r=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)v("REQUEST_TIME"===t.setToServerValue),n=new Rt;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Dt(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Pt(e)}else"increment"in t?n=new Mt(e,t.increment):b();const r=H.fromServerFormat(t.fieldPath);return new Bt(r,n)}(e,t)):[];if(t.update){t.update.name;const i=Hn(e,t.update.name),s=new je({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new W(t.map(e=>H.fromServerFormat(e)))}(t.updateMask);return new Zt(i,s,e,n,r)}return new Xt(i,s,n,r)}if(t.delete){const r=Hn(e,t.delete);return new rn(r,n)}if(t.verify){const r=Hn(e,t.verify);return new sn(r,n)}return b()}function ir(e,t){return e&&e.length>0?(v(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?zn(e.updateTime):zn(t);return n.isEqual(V.min())&&(n=zn(t)),new zt(n,e.transformResults||[])}(e,t))):[]}function sr(e,t){return{documents:[Wn(e,t.path)]}}function or(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Wn(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Wn(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map(e=>function(e){if("=="===e.op){if(Oe(e.value))return{unaryFilter:{field:dr(e.field),op:"IS_NAN"}};if(Ie(e.value))return{unaryFilter:{field:dr(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Oe(e.value))return{unaryFilter:{field:dr(e.field),op:"IS_NOT_NAN"}};if(Ie(e.value))return{unaryFilter:{field:dr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dr(e.field),op:hr(e.op),value:e.value}}}(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:dr(e.field),direction:lr(e.dir)}}(e))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.N||oe(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function ar(e){let t=Yn(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){v(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=ur(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>function(e){return new it(fr(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,oe(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new rt(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new rt(n,t)}(n.endAt)),ut(t,i,o,s,a,"F",c,u)}function cr(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function ur(e){return e?void 0!==e.unaryFilter?[mr(e)]:void 0!==e.fieldFilter?[pr(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>ur(e)).reduce((e,t)=>e.concat(t)):b():[]}function lr(e){return Ln[e]}function hr(e){return Mn[e]}function dr(e){return{fieldPath:e.canonicalString()}}function fr(e){return H.fromServerFormat(e.fieldPath)}function pr(e){return We.create(fr(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(e.fieldFilter.op),e.fieldFilter.value)}function mr(e){switch(e.unaryFilter.op){case"IS_NAN":const t=fr(e.unaryFilter.field);return We.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=fr(e.unaryFilter.field);return We.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=fr(e.unaryFilter.field);return We.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=fr(e.unaryFilter.field);return We.create(i,"!=",{nullValue:"NULL_VALUE"});default:return b()}}function gr(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function yr(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=wr(t)),t=vr(e.get(n),t);return wr(t)}function vr(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function wr(e){return e+""}function _r(e){const t=e.length;if(v(t>=2),2===t)return v(""===e.charAt(0)&&""===e.charAt(1)),$.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&b(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:b()}s=t+2}return new $(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(e,t){return[e,br(t)]}function Er(e,t,n){return[e,br(t),n]}const Tr={},kr=["prefixPath","collectionGroup","readTime","documentId"],Sr=["prefixPath","collectionGroup","documentId"],Ar=["collectionGroup","readTime","prefixPath","documentId"],jr=["canonicalId","targetId"],xr=["targetId","path"],Cr=["path","targetId"],Nr=["collectionId","parent"],Rr=["indexId","uid"],Dr=["uid","sequenceNumber"],Fr=["indexId","uid","arrayValue","directionalValue","documentKey"],Pr=["indexId","uid","documentKey"],Lr=["userId","collectionPath","documentId"],Mr=["userId","collectionPath","largestBatchId"],Ur=["userId","collectionGroup","largestBatchId"],Vr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Br=[...Vr,"documentOverlays"],qr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],zr=[...qr,"indexConfiguration","indexState","indexEntries"],Gr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Kr((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Kr?t:Kr.resolve(t)}catch(e){return Kr.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Kr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Kr.reject(t)}static resolve(e){return new Kr((t,n)=>{t(e)})}static reject(e){return new Kr((t,n)=>{n(e)})}static waitFor(e){return new Kr((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=Kr.resolve(!1);for(const n of e)t=t.next(e=>e?Kr.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.At=new E,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{t.error?this.At.reject(new Jr(e,t.error)):this.At.resolve()},this.transaction.onerror=t=>{const n=ti(t.target.error);this.At.reject(new Jr(e,n))}}static open(e,t,n,r){try{return new Hr(t,e.transaction(r,n))}catch(e){throw new Jr(t,e)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(p("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}bt(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Xr(t)}}class Wr{constructor(e,t,n){this.name=e,this.version=t,this.Pt=n,12.2===Wr.Vt(Object(o["m"])())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return p("SimpleDb","Removing database:",e),Zr(window.indexedDB.deleteDatabase(e)).toPromise()}static vt(){if(!Object(o["s"])())return!1;if(Wr.St())return!0;const e=Object(o["m"])(),t=Wr.Vt(e),n=0<t&&t<10,r=Wr.Dt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static St(){var t;return"undefined"!=typeof e&&"YES"===(null===(t=Object({NODE_ENV:"production",BASE_URL:"/"}))||void 0===t?void 0:t.Ct)}static xt(e,t){return e.store(t)}static Vt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Dt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Nt(e){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Jr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new O(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new O(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Jr(e,r))},r.onupgradeneeded=e=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.Pt.kt(t,r.transaction,e.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Mt&&(this.db.onversionchange=e=>this.Mt(e)),this.db}Ot(e){this.Mt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.Nt(e);const t=Hr.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.bt(),e)).catch(e=>(t.abort(e),Kr.reject(e))).toPromise();return s.catch(()=>{}),await t.Rt,s}catch(e){const t="FirebaseError"!==e.name&&s<3;if(p("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Yr{constructor(e){this.Ft=e,this.$t=!1,this.Bt=null}get isDone(){return this.$t}get Lt(){return this.Bt}set cursor(e){this.Ft=e}done(){this.$t=!0}Ut(e){this.Bt=e}delete(){return Zr(this.Ft.delete())}}class Jr extends O{constructor(e,t){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Qr(e){return"IndexedDbTransactionError"===e.name}class Xr{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(p("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Zr(n)}add(e){return p("SimpleDb","ADD",this.store.name,e,e),Zr(this.store.add(e))}get(e){return Zr(this.store.get(e)).next(t=>(void 0===t&&(t=null),p("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return p("SimpleDb","DELETE",this.store.name,e),Zr(this.store.delete(e))}count(){return p("SimpleDb","COUNT",this.store.name),Zr(this.store.count())}qt(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.Gt(e,(e,n)=>{t.push(n)}).next(()=>t)}{const e=this.store.getAll(n.range);return new Kr((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}Kt(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Kr((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}Qt(e,t){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.jt=!1;const r=this.cursor(n);return this.Gt(r,(e,t,n)=>n.delete())}Wt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Gt(r,t)}zt(e){const t=this.cursor({});return new Kr((n,r)=>{t.onerror=e=>{const t=ti(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}Gt(e,t){const n=[];return new Kr((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Yr(i),o=t(i.primaryKey,i.value,s);if(o instanceof Kr){const e=o.catch(e=>(s.done(),Kr.reject(e)));n.push(e)}s.isDone?r():null===s.Lt?i.continue():i.continue(s.Lt)}}).next(()=>Kr.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.jt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Zr(e){return new Kr((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=ti(e.target.error);n(t)}})}let ei=!1;function ti(e){const t=Wr.Vt(Object(o["m"])());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ei||(ei=!0,setTimeout(()=>{throw e},0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends $r{constructor(e,t){super(),this.Ht=e,this.currentSequenceNumber=t}}function ri(e,t){const n=_(e);return Wr.xt(n.Ht,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Ht(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Wt(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Wt(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(V.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Tn())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>Jt(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>Jt(e,t))}}class si{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){v(e.mutations.length===n.length);let r=On;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new si(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,n,r,i=V.min(),s=V.min(),o=J.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new ai(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.Jt=e}}function ui(e,t){let n;if(t.document)n=Zn(e.Jt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=ue.fromSegments(t.noDocument.path),r=fi(t.noDocument.readTime);n=Ce.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return b();{const e=ue.fromSegments(t.unknownDocument.path),r=fi(t.unknownDocument.version);n=Ce.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new U(e[0],e[1]);return V.fromTimestamp(t)}(t.readTime)),n}function li(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:hi(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Kn(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Vn(e,t.version.toTimestamp())}}(e.Jt,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:di(t.version)};else{if(!t.isUnknownDocument())return b();r.unknownDocument={path:n.path.toArray(),version:di(t.version)}}return r}function hi(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function di(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function fi(e){const t=new U(e.seconds,e.nanoseconds);return V.fromTimestamp(t)}function pi(e,t){const n=(t.baseMutations||[]).map(t=>rr(e.Jt,t));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map(t=>rr(e.Jt,t)),i=U.fromMillis(t.localWriteTimeMs);return new ii(t.batchId,i,n,r)}function mi(e){const t=fi(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?fi(e.lastLimboFreeSnapshotVersion):V.min();let r;var i;return void 0!==e.query.documents?(v(1===(i=e.query).documents.length),r=yt(lt(Yn(i.documents[0])))):r=function(e){return yt(ar(e))}(e.query),new ai(r,e.targetId,0,e.lastListenSequenceNumber,t,n,J.fromBase64String(e.resumeToken))}function gi(e,t){const n=di(t.snapshotVersion),r=di(t.lastLimboFreeSnapshotVersion);let i;i=Ke(t.target)?sr(e.Jt,t.target):or(e.Jt,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:ze(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function yi(e){const t=ar({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?bt(t,t.limit,"L"):t}function bi(e,t){return new oi(t.largestBatchId,rr(e.Jt,t.overlayMutation))}function vi(e,t){const n=t.path.lastSegment();return[e,br(t.path.popLast()),n]}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{getBundleMetadata(e,t){return _i(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:fi(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return _i(e).put({bundleId:(n=t).id,createTime:di(zn(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Ii(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:yi(t.bundledQuery),readTime:fi(t.readTime)};var t})}saveNamedQuery(e,t){return Ii(e).put(function(e){return{name:e.name,readTime:di(zn(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function _i(e){return ri(e,"bundles")}function Ii(e){return ri(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t){this.M=e,this.userId=t}static Yt(e,t){const n=t.uid||"";return new Oi(e,n)}getOverlay(e,t){return Ei(e).get(vi(this.userId,t)).next(e=>e?bi(this.M,e):null)}saveOverlays(e,t,n){const r=[];return n.forEach((n,i)=>{const s=new oi(t,i);r.push(this.Xt(e,s))}),Kr.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach(e=>r.add(br(e.getCollectionPath())));const i=[];return r.forEach(t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(Ei(e).Qt("collectionPathOverlayIndex",r))}),Kr.waitFor(i)}getOverlaysForCollection(e,t,n){const r=In(),i=br(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Ei(e).qt("collectionPathOverlayIndex",s).next(e=>{for(const t of e){const e=bi(this.M,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const i=In();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ei(e).Wt({index:"collectionGroupOverlayIndex",range:o},(e,t,n)=>{const o=bi(this.M,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()}).next(()=>i)}Xt(e,t){return Ei(e).put(function(e,t,n){const[r,i,s]=vi(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:nr(e.Jt,n.mutation)}}(this.M,this.userId,t))}}function Ei(e){return ri(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(Z(e.integerValue));else if("doubleValue"in e){const n=Z(e.doubleValue);isNaN(n)?this.ne(t,13):(this.ne(t,15),ae(n)?t.se(0):t.se(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ne(t,20),"string"==typeof n?t.ie(n):(t.ie(""+(n.seconds||"")),t.se(n.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(ee(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ne(t,45),t.se(n.latitude||0),t.se(n.longitude||0)}else"mapValue"in e?ke(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):b()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const n=e.fields||{};this.ne(t,55);for(const r of Object.keys(n))this.re(r,t),this.te(n[r],t)}he(e,t){const n=e.values||[];this.ne(t,50);for(const r of n)this.te(r,t)}ae(e,t){this.ne(t,37),ue.fromName(e).path.forEach(e=>{this.ne(t,60),this.le(e,t)})}ne(e,t){e.se(t)}oe(e){e.se(2)}}function ki(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function Si(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=ki(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Ti.fe=new Ti;class Ai{constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this._e(n.value),n=t.next();this.we()}me(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.ge(n.value),n=t.next();this.ye()}pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this._e(e);else if(e<2048)this._e(960|e>>>6),this._e(128|63&e);else if(t<"\ud800"||"\udbff"<t)this._e(480|e>>>12),this._e(128|63&e>>>6),this._e(128|63&e);else{const e=t.codePointAt(0);this._e(240|e>>>18),this._e(128|63&e>>>12),this._e(128|63&e>>>6),this._e(128|63&e)}}this.we()}Ie(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.ge(e);else if(e<2048)this.ge(960|e>>>6),this.ge(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.ge(480|e>>>12),this.ge(128|63&e>>>6),this.ge(128|63&e);else{const e=t.codePointAt(0);this.ge(240|e>>>18),this.ge(128|63&e>>>12),this.ge(128|63&e>>>6),this.ge(128|63&e)}}this.ye()}Te(e){const t=this.Ee(e),n=Si(t);this.Ae(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Re(e){const t=this.Ee(e),n=Si(t);this.Ae(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}be(){this.Pe(255),this.Pe(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Ae(e.length),this.buffer.set(e,this.position),this.position+=e.length}Se(){return this.buffer.slice(0,this.position)}Ee(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}_e(e){const t=255&e;0===t?(this.Pe(0),this.Pe(255)):255===t?(this.Pe(255),this.Pe(0)):this.Pe(t)}ge(e){const t=255&e;0===t?(this.ve(0),this.ve(255)):255===t?(this.ve(255),this.ve(0)):this.ve(e)}we(){this.Pe(0),this.Pe(1)}ye(){this.ve(0),this.ve(1)}Pe(e){this.Ae(1),this.buffer[this.position++]=e}ve(e){this.Ae(1),this.buffer[this.position++]=~e}Ae(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class ji{constructor(e){this.De=e}ue(e){this.De.de(e)}ie(e){this.De.pe(e)}se(e){this.De.Te(e)}ee(){this.De.be()}}class xi{constructor(e){this.De=e}ue(e){this.De.me(e)}ie(e){this.De.Ie(e)}se(e){this.De.Re(e)}ee(){this.De.Ve()}}class Ci{constructor(){this.De=new Ai,this.Ce=new ji(this.De),this.xe=new xi(this.De)}seed(e){this.De.seed(e)}Ne(e){return 0===e?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}ke(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Ni(this.indexId,this.documentKey,this.arrayValue,n)}}function Ri(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Di(e.arrayValue,t.arrayValue),0!==n?n:(n=Di(e.directionalValue,t.directionalValue),0!==n?n:ue.comparator(e.documentKey,t.documentKey)))}function Di(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Me=e.orderBy,this.Oe=[];for(const t of e.filters){const e=t;e.S()?this.Fe=e:this.Oe.push(e)}}$e(e){const t=Re(e);if(void 0!==t&&!this.Be(t))return!1;const n=De(e);let r=0,i=0;for(;r<n.length&&this.Be(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Fe){const e=n[r];if(!this.Le(this.Fe,e)||!this.Ue(this.Me[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Me.length||!this.Ue(this.Me[i++],e))return!1}return!0}Be(e){for(const t of this.Oe)if(this.Le(t,e))return!0;return!1}Le(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}Ue(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.qe=new Li}addToCollectionParentIndex(e,t){return this.qe.add(t),Kr.resolve()}getCollectionParents(e,t){return Kr.resolve(this.qe.getEntries(t))}addFieldIndex(e,t){return Kr.resolve()}deleteFieldIndex(e,t){return Kr.resolve()}getDocumentsMatchingTarget(e,t){return Kr.resolve(null)}getFieldIndex(e,t){return Kr.resolve(null)}getFieldIndexes(e,t){return Kr.resolve([])}getNextCollectionGroupToUpdate(e){return Kr.resolve(null)}updateCollectionGroup(e,t,n){return Kr.resolve()}updateIndexEntries(e,t){return Kr.resolve()}}class Li{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new mn($.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new mn($.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new Uint8Array(0);class Ui{constructor(e){this.user=e,this.Ge=new Li,this.Ke=new hn(e=>ze(e),(e,t)=>$e(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ge.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.Ge.add(t)});const i={collectionId:n,parent:br(r)};return Vi(e).put(i)}return Kr.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[M(t),""],!1,!0);return Vi(e).qt(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(_r(r.parent))}return n})}addFieldIndex(e,t){const n=qi(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])}}(t);return delete r.indexId,n.add(r).next()}deleteFieldIndex(e,t){const n=qi(e),r=zi(e),i=Bi(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const n=Bi(e);let r=!0;const i=new Map;return Kr.forEach(this.Qe(t),t=>this.getFieldIndex(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=Tn();return Kr.forEach(i,(r,i)=>{var s;p("IndexedDbIndexManager",`Using index ${s=r,`id=${s.indexId}|cg=${s.collectionGroup}|f=${s.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")}`} to execute ${ze(t)}`);const o=function(e,t){const n=Re(t);if(void 0===n)return null;for(const r of He(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(i,r),a=function(e,t){const n=new Map;for(const r of De(t))for(const t of He(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(i,r),c=function(e,t){const n=[];let r=!0;for(const s of De(t)){let t,o=!0;for(const n of He(e,s.fieldPath)){let e,r=!0;switch(n.op){case"<":case"<=":e="nullValue"in(i=n.value)?he:"booleanValue"in i?{booleanValue:!1}:"integerValue"in i||"doubleValue"in i?{doubleValue:NaN}:"timestampValue"in i?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in i?{stringValue:""}:"bytesValue"in i?{bytesValue:""}:"referenceValue"in i?ve(se.empty(),ue.empty()):"geoPointValue"in i?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in i?{arrayValue:{}}:"mapValue"in i?{mapValue:{}}:b();break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,r=!1;break;case"!=":case"not-in":e=he}Se(t,e)===e&&(t=e,o=r)}if(null!==e.startAt)for(let n=0;n<e.orderBy.length;++n)if(e.orderBy[n].field.isEqual(s.fieldPath)){const r=e.startAt.position[n];Se(t,r)===r&&(t=r,o=e.startAt.inclusive);break}if(void 0===t)return null;n.push(t),r&&(r=o)}var i;return new rt(n,r)}(i,r),u=function(e,t){const n=[];let r=!0;for(const s of De(t)){let t,o=!0;for(const n of He(e,s.fieldPath)){let e,r=!0;switch(n.op){case">=":case">":e="nullValue"in(i=n.value)?{booleanValue:!1}:"booleanValue"in i?{doubleValue:NaN}:"integerValue"in i||"doubleValue"in i?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in i?{stringValue:""}:"stringValue"in i?{bytesValue:""}:"bytesValue"in i?ve(se.empty(),ue.empty()):"referenceValue"in i?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in i?{arrayValue:{}}:"arrayValue"in i?{mapValue:{}}:"mapValue"in i?le:b(),r=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,r=!1;break;case"!=":case"not-in":e=le}Ae(t,e)===e&&(t=e,o=r)}if(null!==e.endAt)for(let n=0;n<e.orderBy.length;++n)if(e.orderBy[n].field.isEqual(s.fieldPath)){const r=e.endAt.position[n];Ae(t,r)===r&&(t=r,o=e.endAt.inclusive);break}if(void 0===t)return null;n.push(t),r&&(r=o)}var i;return new rt(n,r)}(i,r),l=this.je(r,i,c),h=this.je(r,i,u),d=this.We(r,i,a),f=this.ze(r.indexId,o,l,!!c&&c.inclusive,h,!!u&&u.inclusive,d);return Kr.forEach(f,r=>n.Kt(r,t.limit).next(t=>{t.forEach(t=>{e=e.add(new ue(_r(t.documentKey)))})}))}).next(()=>e)}return Kr.resolve(null)})}Qe(e){let t=this.Ke.get(e);return t||(t=[e],this.Ke.set(e,t),t)}ze(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(null!=n?n.length:1,null!=i?i.length:1),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.He(t[l/c]):Mi,h=n?this.Je(e,a,n[l%c],r):this.Ye(e),d=i?this.Xe(e,a,i[l%c],s):this.Ye(e+1);u.push(...this.createRange(h,d,o.map(t=>this.Je(e,a,t,!0))))}return u}Je(e,t,n,r){const i=new Ni(e,ue.empty(),t,n);return r?i:i.ke()}Xe(e,t,n,r){const i=new Ni(e,ue.empty(),t,n);return r?i.ke():i}Ye(e){return new Ni(e,ue.empty(),Mi,Mi)}getFieldIndex(e,t){const n=new Fi(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{const t=e.filter(e=>n.$e(e));return t.sort((e,t)=>t.fields.length-e.fields.length),t.length>0?t[0]:null})}Ze(e,t){const n=new Ci;for(const r of De(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.Ne(r.kind);Ti.fe.Zt(e,i)}return n.Se()}He(e){const t=new Ci;return Ti.fe.Zt(e,t.Ne(0)),t.Se()}We(e,t,n){if(null===n)return[];let r=[];r.push(new Ci);let i=0;for(const s of De(e)){const e=n[i++];for(const n of r)if(this.tn(t,s.fieldPath)&&_e(e))r=this.en(r,s,e);else{const t=n.Ne(s.kind);Ti.fe.Zt(e,t)}}return this.nn(r)}je(e,t,n){return null==n?null:this.We(e,t,n.position)}nn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Se();return t}en(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new Ci;n.seed(e.Se()),Ti.fe.Zt(s,n.Ne(t.kind)),i.push(n)}return i}tn(e,t){return!!e.filters.find(e=>e instanceof We&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){const n=qi(e),r=zi(e);return(t?n.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.qt()).next(e=>{const t=[];return Kr.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){const n=t?new Pe(t.sequenceNumber,new Ue(fi(t.readTime),new ue(_r(t.documentKey)),t.largestBatchId)):Pe.empty(),r=e.fields.map(([e,t])=>new Fe(H.fromServerFormat(e),t));return new Ne(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:P(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=qi(e),i=zi(e);return this.sn(e).next(e=>r.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>Kr.forEach(t,t=>i.put(function(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:di(r.readTime),documentKey:br(r.documentKey.path),largestBatchId:r.largestBatchId}}(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){const n=new Map;return Kr.forEach(t,(t,r)=>{const i=n.get(t.collectionGroup);return(i?Kr.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),Kr.forEach(i,n=>this.rn(e,t,n).next(t=>{const i=this.on(r,n);return t.isEqual(i)?Kr.resolve():this.un(e,r,t,i)}))))})}an(e,t,n){return Bi(e).put({indexId:n.indexId,uid:this.uid,arrayValue:n.arrayValue,directionalValue:n.directionalValue,documentKey:br(t.key.path)})}cn(e,t,n){return Bi(e).delete([n.indexId,this.uid,n.arrayValue,n.directionalValue,br(t.key.path)])}rn(e,t,n){const r=Bi(e);let i=new mn(Ri);return r.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,br(t.path)])},(e,r)=>{i=i.add(new Ni(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}on(e,t){let n=new mn(Ri);const r=this.Ze(t,e);if(null==r)return n;const i=Re(t);if(null!=i){const s=e.data.field(i.fieldPath);if(_e(s))for(const i of s.arrayValue.values||[])n=n.add(new Ni(t.indexId,e.key,this.He(i),r))}else n=n.add(new Ni(t.indexId,e.key,Mi,r));return n}un(e,t,n,r){p("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const i=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=yn(s),c=yn(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=yn(o)):t?(i(a),a=yn(s)):(a=yn(s),c=yn(o))}}(n,r,Ri,n=>{i.push(this.an(e,t,n))},n=>{i.push(this.cn(e,t,n))}),Kr.waitFor(i)}sn(e){let t=1;return zi(e).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>Ri(e,t)).filter((e,t,n)=>!t||0!==Ri(e,n[t-1]));const r=[];r.push(e);for(const s of n){const n=Ri(s,e),i=Ri(s,t);if(0===n)r[0]=e.ke();else if(n>0&&i<0)r.push(s),r.push(s.ke());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2)i.push(IDBKeyRange.bound([r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,""],[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,""]));return i}}function Vi(e){return ri(e,"collectionParents")}function Bi(e){return ri(e,"indexEntries")}function qi(e){return ri(e,"indexConfiguration")}function zi(e){return ri(e,"indexState")}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class $i{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new $i(e,$i.DEFAULT_COLLECTION_PERCENTILE,$i.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Wt({range:o},(e,t,n)=>(a++,n.delete()));s.push(c.next(()=>{v(1===a)}));const u=[];for(const l of n.mutations){const e=Er(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Kr.waitFor(s).next(()=>u)}function Hi(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw b();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$i.DEFAULT_COLLECTION_PERCENTILE=10,$i.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$i.DEFAULT=new $i(41943040,$i.DEFAULT_COLLECTION_PERCENTILE,$i.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$i.DISABLED=new $i(-1,0,0);class Wi{constructor(e,t,n,r){this.userId=e,this.M=t,this.indexManager=n,this.referenceDelegate=r,this.hn={}}static Yt(e,t,n,r){v(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Wi(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ji(e).Wt({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const i=Qi(e),s=Ji(e);return s.add({}).next(o=>{v("number"==typeof o);const a=new ii(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map(t=>nr(e.Jt,t)),i=n.mutations.map(t=>nr(e.Jt,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.M,this.userId,a),u=[];let l=new mn((e,t)=>P(e.canonicalString(),t.canonicalString()));for(const e of r){const t=Er(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,Tr))}return l.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.hn[o]=a.keys()}),Kr.waitFor(u).next(()=>a)})}lookupMutationBatch(e,t){return Ji(e).get(t).next(e=>e?(v(e.userId===this.userId),pi(this.M,e)):null)}ln(e,t){return this.hn[t]?Kr.resolve(this.hn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.hn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Ji(e).Wt({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(v(t.batchId>=n),i=pi(this.M,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Ji(e).Wt({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ji(e).qt("userMutationsIndex",t).next(e=>e.map(e=>pi(this.M,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Or(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Qi(e).Wt({range:r},(n,r,s)=>{const[o,a,c]=n,u=_r(a);if(o===this.userId&&t.path.isEqual(u))return Ji(e).get(c).next(e=>{if(!e)throw b();v(e.userId===this.userId),i.push(pi(this.M,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new mn(P);const r=[];return t.forEach(t=>{const i=Or(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Qi(e).Wt({range:s},(e,r,i)=>{const[s,o,a]=e,c=_r(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()});r.push(o)}),Kr.waitFor(r).next(()=>this.fn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=Or(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new mn(P);return Qi(e).Wt({range:s},(e,t,i)=>{const[s,a,c]=e,u=_r(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.fn(e,o))}fn(e,t){const n=[],r=[];return t.forEach(t=>{r.push(Ji(e).get(t).next(e=>{if(null===e)throw b();v(e.userId===this.userId),n.push(pi(this.M,e))}))}),Kr.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return Ki(e.Ht,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.dn(t.batchId)}),Kr.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}dn(e){delete this.hn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return Kr.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return Qi(e).Wt({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=_r(e[1]);r.push(t)}else n.done()}).next(()=>{v(0===r.length)})})}containsKey(e,t){return Yi(e,this.userId,t)}_n(e){return Xi(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Yi(e,t,n){const r=Or(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Qi(e).Wt({range:s,jt:!0},(e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()}).next(()=>o)}function Ji(e){return ri(e,"mutations")}function Qi(e){return ri(e,"documentMutations")}function Xi(e){return ri(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.wn=e}next(){return this.wn+=2,this.wn}static mn(){return new Zi(0)}static gn(){return new Zi(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t){this.referenceDelegate=e,this.M=t}allocateTargetId(e){return this.yn(e).next(t=>{const n=new Zi(t.highestTargetId);return t.highestTargetId=n.next(),this.pn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.yn(e).next(e=>V.fromTimestamp(new U(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.yn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.yn(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.pn(e,r)))}addTargetData(e,t){return this.In(e,t).next(()=>this.yn(e).next(n=>(n.targetCount+=1,this.Tn(t,n),this.pn(e,n))))}updateTargetData(e,t){return this.In(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ts(e).delete(t.targetId)).next(()=>this.yn(e)).next(t=>(v(t.targetCount>0),t.targetCount-=1,this.pn(e,t)))}removeTargets(e,t,n){let r=0;const i=[];return ts(e).Wt((s,o)=>{const a=mi(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))}).next(()=>Kr.waitFor(i)).next(()=>r)}forEachTarget(e,t){return ts(e).Wt((e,n)=>{const r=mi(n);t(r)})}yn(e){return ns(e).get("targetGlobalKey").next(e=>(v(null!==e),e))}pn(e,t){return ns(e).put("targetGlobalKey",t)}In(e,t){return ts(e).put(gi(this.M,t))}Tn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.yn(e).next(e=>e.targetCount)}getTargetData(e,t){const n=ze(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return ts(e).Wt({range:r,index:"queryTargetsIndex"},(e,n,r)=>{const s=mi(n);$e(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){const r=[],i=rs(e);return t.forEach(t=>{const s=br(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),Kr.waitFor(r)}removeMatchingKeys(e,t,n){const r=rs(e);return Kr.forEach(t,t=>{const i=br(t.path);return Kr.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=rs(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=rs(e);let i=Tn();return r.Wt({range:n,jt:!0},(e,t,n)=>{const r=_r(e[1]),s=new ue(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){const n=br(t.path),r=IDBKeyRange.bound([n],[M(n)],!1,!0);let i=0;return rs(e).Wt({index:"documentTargetsIndex",jt:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}Et(e,t){return ts(e).get(t).next(e=>e?mi(e):null)}}function ts(e){return ri(e,"targets")}function ns(e){return ri(e,"targetGlobal")}function rs(e){return ri(e,"targetDocuments")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(e){if(e.code!==I.FAILED_PRECONDITION||e.message!==Gr)throw e;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss([e,t],[n,r]){const i=P(e,n);return 0===i?P(t,r):i}class os{constructor(e){this.En=e,this.buffer=new mn(ss),this.An=0}Rn(){return++this.An}bn(e){const t=[e,this.Rn()];if(this.buffer.size<this.En)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();ss(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class as{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.Pn=!1,this.Vn=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.vn(e)}stop(){this.Vn&&(this.Vn.cancel(),this.Vn=null)}get started(){return null!==this.Vn}vn(e){const t=this.Pn?3e5:6e4;p("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vn=null,this.Pn=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){Qr(e)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await is(e)}await this.vn(e)})}}class cs{constructor(e,t){this.Sn=e,this.params=t}calculateTargetCount(e,t){return this.Sn.Dn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Kr.resolve(R.A);const n=new os(t);return this.Sn.forEachTarget(e,e=>n.bn(e.sequenceNumber)).next(()=>this.Sn.Cn(e,e=>n.bn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Sn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Sn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),Kr.resolve(Gi)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gi):this.xn(e,t))}getCacheSize(e){return this.Sn.getCacheSize(e)}xn(e,t){let n,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,o=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),d()<=s["a"].DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Kr.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new cs(e,t)}(this,t)}Dn(e){const t=this.Nn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Nn(e){let t=0;return this.Cn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Cn(e,t){return this.kn(e,(e,n)=>t(n))}addReference(e,t,n){return ls(e,n)}removeReference(e,t,n){return ls(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return ls(e,t)}Mn(e,t){return function(e,t){let n=!1;return Xi(e).zt(r=>Yi(e,r,t).next(e=>(e&&(n=!0),Kr.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.kn(e,(s,o)=>{if(o<=t){const t=this.Mn(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,V.min()),rs(e).delete([0,br(s.path)])))});r.push(t)}}).next(()=>Kr.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return ls(e,t)}kn(e,t){const n=rs(e);let r,i=R.A;return n.Wt({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==R.A&&t(new ue(_r(r)),i),i=o,r=s):i=R.A}).next(()=>{i!==R.A&&t(new ue(_r(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ls(e,t){return rs(e).put(function(e,t){return{targetId:0,path:br(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.changes=new hn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Kr.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.M=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return ms(e).put(n)}removeEntry(e,t,n){return ms(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],hi(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.On(e,n)))}getEntry(e,t){let n=Ce.newInvalidDocument(t);return ms(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(gs(t))},(e,r)=>{n=this.Fn(t,r)}).next(()=>n)}$n(e,t){let n={size:0,document:Ce.newInvalidDocument(t)};return ms(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(gs(t))},(e,r)=>{n={document:this.Fn(t,r),size:Hi(r)}}).next(()=>n)}getEntries(e,t){let n=vn();return this.Bn(e,t,(e,t)=>{const r=this.Fn(e,t);n=n.insert(e,r)}).next(()=>n)}Ln(e,t){let n=vn(),r=new dn(ue.comparator);return this.Bn(e,t,(e,t)=>{const i=this.Fn(e,t);n=n.insert(e,i),r=r.insert(e,Hi(t))}).next(()=>({documents:n,Un:r}))}Bn(e,t,n){if(t.isEmpty())return Kr.resolve();let r=new mn(bs);t.forEach(e=>r=r.add(e));const i=IDBKeyRange.bound(gs(r.first()),gs(r.last())),s=r.getIterator();let o=s.getNext();return ms(e).Wt({index:"documentKeyIndex",range:i},(e,t,r)=>{const i=ue.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&bs(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.Ut(gs(o)):r.done()}).next(()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null})}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),hi(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ms(e).qt(IDBKeyRange.bound(r,i,!0)).next(e=>{let t=vn();for(const n of e){const e=this.Fn(ue.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t})}getAllFromCollectionGroup(e,t,n,r){let i=vn();const s=ys(t,n),o=ys(t,Ue.max());return ms(e).Wt({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},(e,t,n)=>{const s=this.Fn(ue.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new fs(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return ps(e).get("remoteDocumentGlobalKey").next(e=>(v(!!e),e))}On(e,t){return ps(e).put("remoteDocumentGlobalKey",t)}Fn(e,t){if(t){const e=ui(this.M,t);if(!e.isNoDocument()||!e.version.isEqual(V.min()))return e}return Ce.newInvalidDocument(e)}}class fs extends hs{constructor(e,t){super(),this.qn=e,this.trackRemovals=t,this.Gn=new hn(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new mn((e,t)=>P(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.Gn.get(i);if(t.push(this.qn.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=li(this.qn.M,s);r=r.add(i.path.popLast());const c=Hi(a);n+=c-o.size,t.push(this.qn.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=li(this.qn.M,s.convertToNoDocument(V.min()));t.push(this.qn.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.qn.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.qn.updateMetadata(e,n)),Kr.waitFor(t)}getFromCache(e,t){return this.qn.$n(e,t).next(e=>(this.Gn.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.qn.Ln(e,t).next(({documents:e,Un:t})=>(t.forEach((t,n)=>{this.Gn.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function ps(e){return ri(e,"remoteDocumentGlobal")}function ms(e){return ri(e,"remoteDocumentsV14")}function gs(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function ys(e,t){const n=t.documentKey.path.toArray();return[e,hi(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function bs(e,t){const n=e.path.length-t.path.length;return 0!==n?n:ue.comparator(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.M=e}kt(e,t,n,r){const i=new Hr("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ir,{unique:!0}),e.createObjectStore("documentMutations")}(e),ws(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Kr.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),ws(e)),s=s.next(()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:V.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(e,t){return t.store("mutations").qt().next(n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ir,{unique:!0});const r=t.store("mutations"),i=n.map(e=>r.put(e));return Kr.waitFor(i)})}(e,i))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Kn(i))),n<6&&r>=6&&(s=s.next(()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Qn(i)))),n<7&&r>=7&&(s=s.next(()=>this.jn(i))),n<8&&r>=8&&(s=s.next(()=>this.Wn(e,i))),n<9&&r>=9&&(s=s.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)})),n<10&&r>=10&&(s=s.next(()=>this.zn(i))),n<11&&r>=11&&(s=s.next(()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Lr});t.createIndex("collectionPathOverlayIndex",Mr,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",Ur,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:kr});t.createIndex("documentKeyIndex",Sr),t.createIndex("collectionGroupIndex",Ar)}(e)).next(()=>this.Hn(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>{!function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Rr}).createIndex("sequenceNumberIndex",Dr,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Fr}).createIndex("documentKeyIndex",Pr,{unique:!1})}(e)})),s}Qn(e){let t=0;return e.store("remoteDocuments").Wt((e,n)=>{t+=Hi(n)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Kn(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.qt().next(t=>Kr.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.qt("userMutationsIndex",r).next(n=>Kr.forEach(n,n=>{v(n.userId===t.userId);const r=pi(this.M,n);return Ki(e,t.userId,r).next(()=>{})}))}))}jn(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{const r=[];return n.Wt((n,i)=>{const s=new $(n),o=function(e){return[0,br(e)]}(s);r.push(t.get(o).next(n=>n?Kr.resolve():(n=>t.put({targetId:0,path:br(n),sequenceNumber:e.highestListenSequenceNumber}))(s)))}).next(()=>Kr.waitFor(r))})}Wn(e,t){e.createObjectStore("collectionParents",{keyPath:Nr});const n=t.store("collectionParents"),r=new Li,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:br(r)})}};return t.store("remoteDocuments").Wt({jt:!0},(e,t)=>{const n=new $(e);return i(n.popLast())}).next(()=>t.store("documentMutations").Wt({jt:!0},([e,t,n],r)=>{const s=_r(t);return i(s.popLast())}))}zn(e){const t=e.store("targets");return t.Wt((e,n)=>{const r=mi(n),i=gi(this.M,r);return t.put(i)})}Hn(e,t){const n=t.store("remoteDocuments"),r=[];return n.Wt((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new ue($.fromString(o.document.name).popFirst(5)):o.noDocument?ue.fromSegments(o.noDocument.path):o.unknownDocument?ue.fromSegments(o.unknownDocument.path):b()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>Kr.waitFor(r))}}function ws(e){e.createObjectStore("targetDocuments",{keyPath:xr}).createIndex("documentTargetsIndex",Cr,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",jr,{unique:!0}),e.createObjectStore("targetGlobal")}const _s="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Is{constructor(e,t,n,r,i,s,o,a,c,u,l=13){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Jn=i,this.window=s,this.document=o,this.Yn=c,this.Xn=u,this.Zn=l,this.ts=null,this.es=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ns=null,this.inForeground=!1,this.ss=null,this.rs=null,this.os=Number.NEGATIVE_INFINITY,this.us=e=>Promise.resolve(),!Is.vt())throw new O(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new us(this,r),this.cs=t+"main",this.M=new ci(a),this.hs=new Wr(this.cs,this.Zn,new vs(this.M)),this.ls=new es(this.referenceDelegate,this.M),this.fs=function(e){return new ds(e)}(this.M),this.ds=new wi,this.window&&this.window.localStorage?this._s=this.window.localStorage:(this._s=null,!1===u&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ws().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new O(I.FAILED_PRECONDITION,_s);return this.gs(),this.ys(),this.ps(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ls.getHighestSequenceNumber(e))}).then(e=>{this.ts=new R(e,this.Yn)}).then(()=>{this.es=!0}).catch(e=>(this.hs&&this.hs.close(),Promise.reject(e)))}Is(e){return this.us=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.hs.Ot(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Jn.enqueueAndForget(async()=>{this.started&&await this.ws()}))}ws(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Es(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ts(e).next(e=>{e||(this.isPrimary=!1,this.Jn.enqueueRetryable(()=>this.us(!1)))})}).next(()=>this.Es(e)).next(t=>this.isPrimary&&!t?this.As(e).next(()=>!1):!!t&&this.Rs(e).next(()=>!0))).catch(e=>{if(Qr(e))return p("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Jn.enqueueRetryable(()=>this.us(e)),this.isPrimary=e})}Ts(e){return Os(e).get("owner").next(e=>Kr.resolve(this.bs(e)))}Ps(e){return Es(e).delete(this.clientId)}async Vs(){if(this.isPrimary&&!this.vs(this.os,18e5)){this.os=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=ri(e,"clientMetadata");return t.qt().next(e=>{const n=this.Ss(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return Kr.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this._s)for(const t of e)this._s.removeItem(this.Ds(t.clientId))}}ps(){this.rs=this.Jn.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ws().then(()=>this.Vs()).then(()=>this.ps()))}bs(e){return!!e&&e.ownerId===this.clientId}Es(e){return this.Xn?Kr.resolve(!0):Os(e).get("owner").next(t=>{if(null!==t&&this.vs(t.leaseTimestampMs,5e3)&&!this.Cs(t.ownerId)){if(this.bs(t)&&this.networkEnabled)return!0;if(!this.bs(t)){if(!t.allowTabSynchronization)throw new O(I.FAILED_PRECONDITION,_s);return!1}}return!(!this.networkEnabled||!this.inForeground)||Es(e).qt().next(e=>void 0===this.Ss(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&p("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.es=!1,this.xs(),this.rs&&(this.rs.cancel(),this.rs=null),this.Ns(),this.ks(),await this.hs.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ni(e,R.A);return this.As(t).next(()=>this.Ps(t))}),this.hs.close(),this.Ms()}Ss(e,t){return e.filter(e=>this.vs(e.updateTimeMs,t)&&!this.Cs(e.clientId))}Os(){return this.runTransaction("getActiveClients","readonly",e=>Es(e).qt().next(e=>this.Ss(e,18e5).map(e=>e.clientId)))}get started(){return this.es}getMutationQueue(e,t){return Wi.Yt(e,this.M,t,this.referenceDelegate)}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getIndexManager(e){return new Ui(e)}getDocumentOverlayCache(e){return Oi.Yt(this.M,e)}getBundleCache(){return this.ds}runTransaction(e,t,n){p("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=14===(s=this.Zn)?zr:13===s?qr:12===s?Br:11===s?Vr:void b();var s;let o;return this.hs.runTransaction(e,r,i,r=>(o=new ni(r,this.ts?this.ts.next():R.A),"readwrite-primary"===t?this.Ts(o).next(e=>!!e||this.Es(o)).next(t=>{if(!t)throw m(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Jn.enqueueRetryable(()=>this.us(!1)),new O(I.FAILED_PRECONDITION,Gr);return n(o)}).next(e=>this.Rs(o).next(()=>e)):this.Fs(o).next(()=>n(o)))).then(e=>(o.raiseOnCommittedEvent(),e))}Fs(e){return Os(e).get("owner").next(e=>{if(null!==e&&this.vs(e.leaseTimestampMs,5e3)&&!this.Cs(e.ownerId)&&!this.bs(e)&&!(this.Xn||this.allowTabSynchronization&&e.allowTabSynchronization))throw new O(I.FAILED_PRECONDITION,_s)})}Rs(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Os(e).put("owner",t)}static vt(){return Wr.vt()}As(e){const t=Os(e);return t.get("owner").next(e=>this.bs(e)?(p("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Kr.resolve())}vs(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(m(`Detected an update time that is in the future: ${e} > ${n}`),!1))}gs(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ss=()=>{this.Jn.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.ws()))},this.document.addEventListener("visibilitychange",this.ss),this.inForeground="visible"===this.document.visibilityState)}Ns(){this.ss&&(this.document.removeEventListener("visibilitychange",this.ss),this.ss=null)}ys(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ns=()=>{this.xs(),Object(o["w"])()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Jn.enterRestrictedMode(!0),this.Jn.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ns))}ks(){this.ns&&(this.window.removeEventListener("pagehide",this.ns),this.ns=null)}Cs(e){var t;try{const n=null!==(null===(t=this._s)||void 0===t?void 0:t.getItem(this.Ds(e)));return p("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return m("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}xs(){if(this._s)try{this._s.setItem(this.Ds(this.clientId),String(Date.now()))}catch(e){m("Failed to set zombie client id.",e)}}Ms(){if(this._s)try{this._s.removeItem(this.Ds(this.clientId))}catch(e){}}Ds(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Os(e){return ri(e,"owner")}function Es(e){return ri(e,"clientMetadata")}function Ts(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ks{constructor(e,t,n){this.fs=e,this.$s=t,this.indexManager=n}Bs(e,t){return this.$s.getAllMutationBatchesAffectingDocumentKey(e,t).next(n=>this.Ls(e,t,n))}Ls(e,t,n){return this.fs.getEntry(e,t).next(e=>{for(const t of n)t.applyToLocalView(e);return e})}Us(e,t){e.forEach((e,n)=>{for(const r of t)r.applyToLocalView(n)})}qs(e,t){return this.fs.getEntries(e,t).next(t=>this.Gs(e,t).next(()=>t))}Gs(e,t){return this.$s.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.Us(t,e))}Ks(e,t,n){return function(e){return ue.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Qs(e,t.path):mt(t)?this.js(e,t,n):this.Ws(e,t,n)}Qs(e,t){return this.Bs(e,new ue(t)).next(e=>{let t=_n();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}js(e,t,n){const r=t.collectionGroup;let i=_n();return this.indexManager.getCollectionParents(e,r).next(s=>Kr.forEach(s,s=>{const o=function(e,t){return new ct(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.Ws(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}Ws(e,t,n){let r;return this.fs.getAllFromCollection(e,t.path,n).next(n=>(r=n,this.$s.getAllMutationBatchesAffectingQuery(e,t))).next(e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=Ce.newInvalidDocument(n),r=r.insert(n,i)),Wt(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}).next(()=>(r.forEach((e,n)=>{It(t,n)||(r=r.remove(e))}),r))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.zs=n,this.Hs=r}static Js(e,t){let n=Tn(),r=Tn();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ss(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{Ys(e){this.Xs=e}Ks(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(V.min())?this.Zs(e,t):this.Xs.qs(e,r).next(i=>{const o=this.ti(t,i);return(ht(t)||dt(t))&&this.ei(t.limitType,o,r,n)?this.Zs(e,t):(d()<=s["a"].DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),_t(t)),this.Xs.Ks(e,t,Le(n,-1)).next(e=>(o.forEach(t=>{e=e.insert(t.key,t)}),e)))})}ti(e,t){let n=new mn(Et(e));return t.forEach((t,r)=>{It(e,r)&&(n=n.add(r))}),n}ei(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Zs(e,t){return d()<=s["a"].DEBUG&&p("QueryEngine","Using full collection scan to execute query:",_t(t)),this.Xs.Ks(e,t,Ue.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t,n,r){this.persistence=e,this.ni=t,this.M=r,this.si=new dn(P),this.ii=new hn(e=>ze(e),$e),this.ri=new Map,this.oi=e.getRemoteDocumentCache(),this.ls=e.getTargetCache(),this.ds=e.getBundleCache(),this.ui(n)}ui(e){this.indexManager=this.persistence.getIndexManager(e),this.$s=this.persistence.getMutationQueue(e,this.indexManager),this.ai=new ks(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.si))}}function xs(e,t,n,r){return new js(e,t,n,r)}async function Cs(e,t){const n=_(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.$s.getAllMutationBatches(e).next(i=>(r=i,n.ui(t),n.$s.getAllMutationBatches(e))).next(t=>{const i=[],s=[];let o=Tn();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.ai.qs(e,o).next(e=>({ci:e,removedBatchIds:i,addedBatchIds:s}))})})}function Ns(e,t){const n=_(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.oi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Kr.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);v(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.$s.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.$s.performConsistencyCheck(e)).next(()=>n.ai.qs(e,r))})}function Rs(e){const t=_(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ls.getLastRemoteSnapshotVersion(e))}function Ds(e,t){const n=_(e),r=t.snapshotVersion;let i=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.oi.newChangeBuffer({trackRemovals:!0});i=n.si;const o=[];t.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.ls.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.ls.addMatchingKeys(e,s.addedDocuments,a)));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(J.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.ls.updateTargetData(e,u))});let a=vn();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(Fs(e,s,t.documentUpdates).next(e=>{a=e})),!r.isEqual(V.min())){const t=n.ls.getLastRemoteSnapshotVersion(e).next(t=>n.ls.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return Kr.waitFor(o).next(()=>s.apply(e)).next(()=>n.ai.Gs(e,a)).next(()=>a)}).then(e=>(n.si=i,e))}function Fs(e,t,n){let r=Tn();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=vn();return n.forEach((n,i)=>{const s=e.get(n);i.isNoDocument()&&i.version.isEqual(V.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",i.version)}),r})}function Ps(e,t){const n=_(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.$s.getNextMutationBatchAfterBatchId(e,t)))}function Ls(e,t){const n=_(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.ls.getTargetData(e,t).next(i=>i?(r=i,Kr.resolve(r)):n.ls.allocateTargetId(e).next(i=>(r=new ai(t,i,0,e.currentSequenceNumber),n.ls.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.si.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.si=n.si.insert(e.targetId,e),n.ii.set(t,e.targetId)),e})}async function Ms(e,t,n){const r=_(e),i=r.si.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!Qr(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.si=r.si.remove(t),r.ii.delete(i.target)}function Us(e,t,n){const r=_(e);let i=V.min(),s=Tn();return r.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const r=_(e),i=r.ii.get(n);return void 0!==i?Kr.resolve(r.si.get(i)):r.ls.getTargetData(t,n)}(r,e,yt(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.ls.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.ni.Ks(e,t,n?i:V.min(),n?s:Tn())).next(e=>(qs(r,Ot(t),e),{documents:e,hi:s})))}function Vs(e,t){const n=_(e),r=_(n.ls),i=n.si.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",e=>r.Et(e,t).next(e=>e?e.target:null))}function Bs(e,t){const n=_(e),r=n.ri.get(t)||V.min();return n.persistence.runTransaction("Get new document changes","readonly",e=>n.oi.getAllFromCollectionGroup(e,t,Le(r,-1),Number.MAX_SAFE_INTEGER)).then(e=>(qs(n,t,e),e))}function qs(e,t,n){let r=V.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.ri.set(t,r)}async function zs(e,t,n,r){const i=_(e);let s=Tn(),o=vn();for(const u of n){const e=t.li(u.metadata.name);u.document&&(s=s.add(e));const n=t.fi(u);n.setReadTime(t.di(u.metadata.readTime)),o=o.insert(e,n)}const a=i.oi.newChangeBuffer({trackRemovals:!0}),c=await Ls(i,function(e){return yt(lt($.fromString("__bundle__/docs/"+e)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",e=>Fs(e,a,o).next(t=>(a.apply(e),t)).next(t=>i.ls.removeMatchingKeysForTargetId(e,c.targetId).next(()=>i.ls.addMatchingKeys(e,s,c.targetId)).next(()=>i.ai.Gs(e,t)).next(()=>t)))}async function Gs(e,t,n=Tn()){const r=await Ls(e,yt(yi(t.bundledQuery))),i=_(e);return i.persistence.runTransaction("Save named query","readwrite",e=>{const s=zn(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.ds.saveNamedQuery(e,t);const o=r.withResumeToken(J.EMPTY_BYTE_STRING,s);return i.si=i.si.insert(o.targetId,o),i.ls.updateTargetData(e,o).next(()=>i.ls.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>i.ls.addMatchingKeys(e,n,r.targetId)).next(()=>i.ds.saveNamedQuery(e,t))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.M=e,this._i=new Map,this.wi=new Map}getBundleMetadata(e,t){return Kr.resolve(this._i.get(t))}saveBundleMetadata(e,t){var n;return this._i.set(t.id,{id:(n=t).id,version:n.version,createTime:zn(n.createTime)}),Kr.resolve()}getNamedQuery(e,t){return Kr.resolve(this.wi.get(t))}saveNamedQuery(e,t){return this.wi.set(t.name,function(e){return{name:e.name,query:yi(e.bundledQuery),readTime:zn(e.readTime)}}(t)),Kr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.overlays=new dn(ue.comparator),this.mi=new Map}getOverlay(e,t){return Kr.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.Xt(e,t,r)}),Kr.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.mi.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.mi.delete(n)),Kr.resolve()}getOverlaysForCollection(e,t,n){const r=In(),i=t.length+1,s=new ue(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Kr.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new dn((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=In(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=In(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((e,t)=>o.set(e,t)),o.size()>=r)break;return Kr.resolve(o)}Xt(e,t,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const e=this.mi.get(r.largestBatchId).delete(n.key);this.mi.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new oi(t,n));let i=this.mi.get(t);void 0===i&&(i=Tn(),this.mi.set(t,i)),this.mi.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.gi=new mn(Ws.yi),this.pi=new mn(Ws.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(e,t){const n=new Ws(e,t);this.gi=this.gi.add(n),this.pi=this.pi.add(n)}Ti(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Ei(new Ws(e,t))}Ai(e,t){e.forEach(e=>this.removeReference(e,t))}Ri(e){const t=new ue(new $([])),n=new Ws(t,e),r=new Ws(t,e+1),i=[];return this.pi.forEachInRange([n,r],e=>{this.Ei(e),i.push(e.key)}),i}bi(){this.gi.forEach(e=>this.Ei(e))}Ei(e){this.gi=this.gi.delete(e),this.pi=this.pi.delete(e)}Pi(e){const t=new ue(new $([])),n=new Ws(t,e),r=new Ws(t,e+1);let i=Tn();return this.pi.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new Ws(e,0),n=this.gi.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Ws{constructor(e,t){this.key=e,this.Vi=t}static yi(e,t){return ue.comparator(e.key,t.key)||P(e.Vi,t.Vi)}static Ii(e,t){return P(e.Vi,t.Vi)||ue.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.$s=[],this.vi=1,this.Si=new mn(Ws.yi)}checkEmpty(e){return Kr.resolve(0===this.$s.length)}addMutationBatch(e,t,n,r){const i=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const s=new ii(i,t,n,r);this.$s.push(s);for(const o of r)this.Si=this.Si.add(new Ws(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Kr.resolve(s)}lookupMutationBatch(e,t){return Kr.resolve(this.Di(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Ci(n),i=r<0?0:r;return Kr.resolve(this.$s.length>i?this.$s[i]:null)}getHighestUnacknowledgedBatchId(){return Kr.resolve(0===this.$s.length?-1:this.vi-1)}getAllMutationBatches(e){return Kr.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ws(t,0),r=new Ws(t,Number.POSITIVE_INFINITY),i=[];return this.Si.forEachInRange([n,r],e=>{const t=this.Di(e.Vi);i.push(t)}),Kr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new mn(P);return t.forEach(e=>{const t=new Ws(e,0),r=new Ws(e,Number.POSITIVE_INFINITY);this.Si.forEachInRange([t,r],e=>{n=n.add(e.Vi)})}),Kr.resolve(this.xi(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ue.isDocumentKey(i)||(i=i.child(""));const s=new Ws(new ue(i),0);let o=new mn(P);return this.Si.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Vi)),!0)},s),Kr.resolve(this.xi(o))}xi(e){const t=[];return e.forEach(e=>{const n=this.Di(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){v(0===this.Ni(t.batchId,"removed")),this.$s.shift();let n=this.Si;return Kr.forEach(t.mutations,r=>{const i=new Ws(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Si=n})}dn(e){}containsKey(e,t){const n=new Ws(t,0),r=this.Si.firstAfterOrEqual(n);return Kr.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.$s.length,Kr.resolve()}Ni(e,t){return this.Ci(e)}Ci(e){return 0===this.$s.length?0:e-this.$s[0].batchId}Di(e){const t=this.Ci(e);return t<0||t>=this.$s.length?null:this.$s[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.ki=e,this.docs=new dn(ue.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ki(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Kr.resolve(n?n.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let n=vn();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Ce.newInvalidDocument(e))}),Kr.resolve(n)}getAllFromCollection(e,t,n){let r=vn();const i=new ue(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||Ve(Me(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Kr.resolve(r)}getAllFromCollectionGroup(e,t,n,r){b()}Mi(e,t){return Kr.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Qs(this)}getSize(e){return Kr.resolve(this.size)}}class Qs extends hs{constructor(e){super(),this.qn=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.qn.addEntry(e,r)):this.qn.removeEntry(n)}),Kr.waitFor(t)}getFromCache(e,t){return this.qn.getEntry(e,t)}getAllFromCache(e,t){return this.qn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.persistence=e,this.Oi=new hn(e=>ze(e),$e),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Fi=0,this.$i=new Hs,this.targetCount=0,this.Bi=Zi.mn()}forEachTarget(e,t){return this.Oi.forEach((e,n)=>t(n)),Kr.resolve()}getLastRemoteSnapshotVersion(e){return Kr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Kr.resolve(this.Fi)}allocateTargetId(e){return this.highestTargetId=this.Bi.next(),Kr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Fi&&(this.Fi=t),Kr.resolve()}In(e){this.Oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Bi=new Zi(t),this.highestTargetId=t),e.sequenceNumber>this.Fi&&(this.Fi=e.sequenceNumber)}addTargetData(e,t){return this.In(t),this.targetCount+=1,Kr.resolve()}updateTargetData(e,t){return this.In(t),Kr.resolve()}removeTargetData(e,t){return this.Oi.delete(t.target),this.$i.Ri(t.targetId),this.targetCount-=1,Kr.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Oi.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Oi.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),Kr.waitFor(i).next(()=>r)}getTargetCount(e){return Kr.resolve(this.targetCount)}getTargetData(e,t){const n=this.Oi.get(t)||null;return Kr.resolve(n)}addMatchingKeys(e,t,n){return this.$i.Ti(t,n),Kr.resolve()}removeMatchingKeys(e,t,n){this.$i.Ai(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),Kr.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.$i.Ri(t),Kr.resolve()}getMatchingKeysForTargetId(e,t){const n=this.$i.Pi(t);return Kr.resolve(n)}containsKey(e,t){return Kr.resolve(this.$i.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t){this.Li={},this.overlays={},this.ts=new R(0),this.es=!1,this.es=!0,this.referenceDelegate=e(this),this.ls=new Xs(this),this.indexManager=new Pi,this.fs=function(e){return new Js(e)}(e=>this.referenceDelegate.Ui(e)),this.M=new ci(t),this.ds=new $s(this.M)}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ks,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Li[e.toKey()];return n||(n=new Ys(t,this.referenceDelegate),this.Li[e.toKey()]=n),n}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const r=new eo(this.ts.next());return this.referenceDelegate.qi(),n(r).next(e=>this.referenceDelegate.Gi(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ki(e,t){return Kr.or(Object.values(this.Li).map(n=>()=>n.containsKey(e,t)))}}class eo extends $r{constructor(e){super(),this.currentSequenceNumber=e}}class to{constructor(e){this.persistence=e,this.Qi=new Hs,this.ji=null}static Wi(e){return new to(e)}get zi(){if(this.ji)return this.ji;throw b()}addReference(e,t,n){return this.Qi.addReference(n,t),this.zi.delete(n.toString()),Kr.resolve()}removeReference(e,t,n){return this.Qi.removeReference(n,t),this.zi.add(n.toString()),Kr.resolve()}markPotentiallyOrphaned(e,t){return this.zi.add(t.toString()),Kr.resolve()}removeTarget(e,t){this.Qi.Ri(t.targetId).forEach(e=>this.zi.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.zi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}qi(){this.ji=new Set}Gi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Kr.forEach(this.zi,n=>{const r=ue.fromPath(n);return this.Hi(e,r).next(e=>{e||t.removeEntry(r,V.min())})}).next(()=>(this.ji=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hi(e,t).next(e=>{e?this.zi.delete(t.toString()):this.zi.add(t.toString())})}Ui(e){return 0}Hi(e,t){return Kr.or([()=>Kr.resolve(this.Qi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ki(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(e,t){return`firestore_clients_${e}_${t}`}function ro(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+="_"+t.uid),r}function io(e,t){return`firestore_targets_${e}_${t}`}class so{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Ji(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new O(r.error.code,r.error.message))),s?new so(e,t,r.state,i):(m("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class oo{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ji(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new O(n.error.code,n.error.message))),i?new oo(e,n.state,r):(m("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ao{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ji(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=Sn();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=ce(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new ao(e,i):(m("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class co{constructor(e,t){this.clientId=e,this.onlineState=t}static Ji(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new co(t.clientId,t.onlineState):(m("SharedClientState","Failed to parse online state: "+e),null)}}class uo{constructor(){this.activeTargetIds=Sn()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lo{constructor(e,t,n,r,i){this.window=e,this.Jn=t,this.persistenceKey=n,this.tr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new dn(P),this.started=!1,this.ir=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.rr=no(this.persistenceKey,this.tr),this.ur=function(e){return"firestore_sequence_number_"+e}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.sr=this.sr.insert(this.tr,new uo),this.ar=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.cr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.lr=function(e){return"firestore_online_state_"+e}(this.persistenceKey),this.dr=function(e){return"firestore_bundle_loaded_v2_"+e}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static vt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Os();for(const n of e){if(n===this.tr)continue;const e=this.getItem(no(this.persistenceKey,n));if(e){const t=ao.Ji(n,e);t&&(this.sr=this.sr.insert(t.clientId,t))}}this._r();const t=this.storage.getItem(this.lr);if(t){const e=this.wr(t);e&&this.mr(e)}for(const n of this.ir)this.nr(n);this.ir=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ur,JSON.stringify(e))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(e){let t=!1;return this.sr.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.yr(e,"pending")}updateMutationState(e,t,n){this.yr(e,t,n),this.pr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(io(this.persistenceKey,e));if(n){const r=oo.Ji(e,n);r&&(t=r.state)}}return this.Ir.Xi(e),this._r(),t}removeLocalQueryTarget(e){this.Ir.Zi(e),this._r()}isLocalQueryTarget(e){return this.Ir.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(io(this.persistenceKey,e))}updateQueryState(e,t,n){this.Tr(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.pr(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Er(e)}notifyBundleLoaded(e){this.Ar(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return p("SharedClientState","READ",e,t),t}setItem(e,t){p("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){p("SharedClientState","REMOVE",e),this.storage.removeItem(e)}nr(e){const t=e;if(t.storageArea===this.storage){if(p("SharedClientState","EVENT",t.key,t.newValue),t.key===this.rr)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Jn.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.ar.test(t.key)){if(null==t.newValue){const e=this.Rr(t.key);return this.br(e,null)}{const e=this.Pr(t.key,t.newValue);if(e)return this.br(e.clientId,e)}}else if(this.cr.test(t.key)){if(null!==t.newValue){const e=this.Vr(t.key,t.newValue);if(e)return this.vr(e)}}else if(this.hr.test(t.key)){if(null!==t.newValue){const e=this.Sr(t.key,t.newValue);if(e)return this.Dr(e)}}else if(t.key===this.lr){if(null!==t.newValue){const e=this.wr(t.newValue);if(e)return this.mr(e)}}else if(t.key===this.ur){const e=function(e){let t=R.A;if(null!=e)try{const n=JSON.parse(e);v("number"==typeof n),t=n}catch(e){m("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==R.A&&this.sequenceNumberHandler(e)}else if(t.key===this.dr){const e=this.Cr(t.newValue);await Promise.all(e.map(e=>this.syncEngine.Nr(e)))}}else this.ir.push(t)})}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(e,t,n){const r=new so(this.currentUser,e,t,n),i=ro(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Yi())}pr(e){const t=ro(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Er(e){const t={clientId:this.tr,onlineState:e};this.storage.setItem(this.lr,JSON.stringify(t))}Tr(e,t,n){const r=io(this.persistenceKey,e),i=new oo(e,t,n);this.setItem(r,i.Yi())}Ar(e){const t=JSON.stringify(Array.from(e));this.setItem(this.dr,t)}Rr(e){const t=this.ar.exec(e);return t?t[1]:null}Pr(e,t){const n=this.Rr(e);return ao.Ji(n,t)}Vr(e,t){const n=this.cr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return so.Ji(new u(i),r,t)}Sr(e,t){const n=this.hr.exec(e),r=Number(n[1]);return oo.Ji(r,t)}wr(e){return co.Ji(e)}Cr(e){return JSON.parse(e)}async vr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.kr(e.batchId,e.state,e.error);p("SharedClientState","Ignoring mutation for non-active user "+e.user.uid)}Dr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}br(e,t){const n=t?this.sr.insert(e,t):this.sr.remove(e),r=this.gr(this.sr),i=this.gr(n),s=[],o=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||o.push(e)}),this.syncEngine.Or(s,o).then(()=>{this.sr=n})}mr(e){this.sr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}gr(e){let t=Sn();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class ho{constructor(){this.Fr=new uo,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,n){this.$r[e]=t}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new uo,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{Br(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr()}Br(e){this.Kr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Kr)e(0)}Gr(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Kr)e(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.so=t+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,t,n,r,i){const s=this.oo(e,t);p("RestConnection","Sending: ",s,n);const o={};return this.uo(o,r,i),this.ao(e,s,o,n).then(e=>(p("RestConnection","Received: ",e),e),t=>{throw g("RestConnection",e+" failed with error: ",t,"url: ",s,"request:",n),t})}co(e,t,n,r,i){return this.ro(e,t,n,r,i)}uo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+l,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}oo(e,t){const n=mo[e];return`${this.so}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}ao(e,t,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const t=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(t)),i(t);break;case a["a"].TIMEOUT:p("Connection",'RPC "'+e+'" timed out'),s(new O(I.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(t)>=0?t:I.UNKNOWN}(e.status);s(new O(t,e.message))}else s(new O(I.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new O(I.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{p("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);o.send(t,"POST",c,n,15)})}ho(e,t,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Object(a["h"])(),s=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.uo(c.initMessageHeaders,t,n),Object(o["t"])()||Object(o["v"])()||Object(o["p"])()||Object(o["r"])()||Object(o["x"])()||Object(o["o"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");p("Connection","Creating WebChannel: "+u,c);const l=i.createWebChannel(u,c);let h=!1,d=!1;const f=new go({jr:e=>{d?p("Connection","Not sending because WebChannel is closed:",e):(h||(p("Connection","Opening WebChannel transport."),l.open(),h=!0),p("Connection","WebChannel sending:",e),l.send(e))},Wr:()=>l.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(l,a["f"].EventType.OPEN,()=>{d||p("Connection","WebChannel transport opened.")}),m(l,a["f"].EventType.CLOSE,()=>{d||(d=!0,p("Connection","WebChannel transport closed"),f.eo())}),m(l,a["f"].EventType.ERROR,e=>{d||(d=!0,g("Connection","WebChannel transport errored:",e),f.eo(new O(I.UNAVAILABLE,"The operation could not be completed")))}),m(l,a["f"].EventType.MESSAGE,e=>{var t;if(!d){const n=e.data[0];v(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){p("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=an[e];if(void 0!==t)return ln(t)}(e),n=i.message;void 0===t&&(t=I.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),d=!0,f.eo(new O(t,n)),l.close()}else p("Connection","WebChannel received:",n),f.no(n)}}),m(s,a["b"].STAT_EVENT,e=>{e.stat===a["e"].PROXY?p("Connection","Detected buffering proxy"):e.stat===a["e"].NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(){return"undefined"!=typeof window?window:null}function vo(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(e){return new Un(e,!0)}class _o{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Jn=e,this.timerId=t,this.lo=n,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const t=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,t-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t,n,r,i,s,o,a){this.Jn=e,this.Ao=n,this.Ro=r,this.bo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new _o(e,t)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.Vo&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}async close(e,t){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==e?this.So.reset():t&&t.code===I.RESOURCE_EXHAUSTED?(m(t.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):t&&t.code===I.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(t)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),t=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Po===t&&this.Uo(e,n)},t=>{e(()=>{const e=new O(I.UNKNOWN,"Fetching auth token failed: "+t.message);return this.qo(e)})})}Uo(e,t){const n=this.Lo(this.Po);this.stream=this.Go(e,t),this.stream.zr(()=>{n(()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(e=>{n(()=>this.qo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return p("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}Lo(e){return t=>{this.Jn.enqueueAndForget(()=>this.Po===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Oo extends Io{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.M=i}Go(e,t){return this.bo.ho("Listen",e,t)}onMessage(e){this.So.reset();const t=tr(this.M,e),n=function(e){if(!("targetChange"in e))return V.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?V.min():t.readTime?zn(t.readTime):V.min()}(e);return this.listener.Ko(t,n)}Qo(e){const t={};t.database=Jn(this.M),t.addTarget=function(e,t){let n;const r=t.target;return n=Ke(r)?{documents:sr(e,r)}:{query:or(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Bn(e,t.resumeToken):t.snapshotVersion.compareTo(V.min())>0&&(n.readTime=Vn(e,t.snapshotVersion.toTimestamp())),n}(this.M,e);const n=cr(this.M,e);n&&(t.labels=n),this.Oo(t)}jo(e){const t={};t.database=Jn(this.M),t.removeTarget=e,this.Oo(t)}}class Eo extends Io{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.M=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Go(e,t){return this.bo.ho("Write",e,t)}onMessage(e){if(v(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const t=ir(e.writeResults,e.commitTime),n=zn(e.commitTime);return this.listener.Jo(n,t)}return v(!e.writeResults||0===e.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Jn(this.M),this.Oo(e)}Ho(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>nr(this.M,e))};this.Oo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=n,this.M=r,this.Zo=!1}tu(){if(this.Zo)throw new O(I.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,t,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new O(I.UNKNOWN,e.toString())})}co(e,t,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.co(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new O(I.UNKNOWN,e.toString())})}terminate(){this.Zo=!0}}class ko{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou("Connection failed 1 times. Most recent error: "+e.toString()),this.ru("Offline")))}set(e){this.au(),this.eu=0,"Online"===e&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(m(t),this.su=!1):p("OnlineStateTracker",t)}au(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(e=>{n.enqueueAndForget(async()=>{Po(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=_(e);t.lu.add(4),await jo(t),t._u.set("Unknown"),t.lu.delete(4),await Ao(t)}(this))})}),this._u=new ko(n,r)}}async function Ao(e){if(Po(e))for(const t of e.fu)await t(!0)}async function jo(e){for(const t of e.fu)await t(!1)}function xo(e,t){const n=_(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),Fo(n)?Do(n):ea(n).Co()&&No(n,t))}function Co(e,t){const n=_(e),r=ea(n);n.hu.delete(t),r.Co()&&Ro(n,t),0===n.hu.size&&(r.Co()?r.ko():Po(n)&&n._u.set("Unknown"))}function No(e,t){e.wu.Z(t.targetId),ea(e).Qo(t)}function Ro(e,t){e.wu.Z(t),ea(e).jo(t)}function Do(e){e.wu=new Dn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.hu.get(t)||null}),ea(e).start(),e._u.iu()}function Fo(e){return Po(e)&&!ea(e).Do()&&e.hu.size>0}function Po(e){return 0===_(e).lu.size}function Lo(e){e.wu=void 0}async function Mo(e){e.hu.forEach((t,n)=>{No(e,t)})}async function Uo(e,t){Lo(e),Fo(e)?(e._u.uu(t),Do(e)):e._u.set("Unknown")}async function Vo(e,t,n){if(e._u.set("Online"),t instanceof Nn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.hu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.hu.delete(r),e.wu.removeTarget(r))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Bo(e,n)}else if(t instanceof xn?e.wu.ut(t):t instanceof Cn?e.wu._t(t):e.wu.ht(t),!n.isEqual(V.min()))try{const t=await Rs(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.wu.yt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.hu.get(r);i&&e.hu.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e.hu.get(t);if(!n)return;e.hu.set(t,n.withResumeToken(J.EMPTY_BYTE_STRING,n.snapshotVersion)),Ro(e,t);const r=new ai(n.target,t,1,n.sequenceNumber);No(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await Bo(e,t)}}async function Bo(e,t,n){if(!Qr(t))throw t;e.lu.add(1),await jo(e),e._u.set("Offline"),n||(n=()=>Rs(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await Ao(e)})}function qo(e,t){return t().catch(n=>Bo(e,n,t))}async function zo(e){const t=_(e),n=ta(t);let r=t.cu.length>0?t.cu[t.cu.length-1].batchId:-1;for(;Go(t);)try{const e=await Ps(t.localStore,r);if(null===e){0===t.cu.length&&n.ko();break}r=e.batchId,$o(t,e)}catch(e){await Bo(t,e)}Ko(t)&&Ho(t)}function Go(e){return Po(e)&&e.cu.length<10}function $o(e,t){e.cu.push(t);const n=ta(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function Ko(e){return Po(e)&&!ta(e).Do()&&e.cu.length>0}function Ho(e){ta(e).start()}async function Wo(e){ta(e).Xo()}async function Yo(e){const t=ta(e);for(const n of e.cu)t.Ho(n.mutations)}async function Jo(e,t,n){const r=e.cu.shift(),i=si.from(r,t,n);await qo(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await zo(e)}async function Qo(e,t){t&&ta(e).zo&&await async function(e,t){if(n=t.code,un(n)&&n!==I.ABORTED){const n=e.cu.shift();ta(e).No(),await qo(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await zo(e)}var n}(e,t),Ko(e)&&Ho(e)}async function Xo(e,t){const n=_(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=Po(n);n.lu.add(3),await jo(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await Ao(n)}async function Zo(e,t){const n=_(e);t?(n.lu.delete(2),await Ao(n)):t||(n.lu.add(2),await jo(n),n._u.set("Unknown"))}function ea(e){return e.mu||(e.mu=function(e,t,n){const r=_(e);return r.tu(),new Oo(t,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{zr:Mo.bind(null,e),Jr:Uo.bind(null,e),Ko:Vo.bind(null,e)}),e.fu.push(async t=>{t?(e.mu.No(),Fo(e)?Do(e):e._u.set("Unknown")):(await e.mu.stop(),Lo(e))})),e.mu}function ta(e){return e.gu||(e.gu=function(e,t,n){const r=_(e);return r.tu(),new Eo(t,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)}(e.datastore,e.asyncQueue,{zr:Wo.bind(null,e),Jr:Qo.bind(null,e),Yo:Yo.bind(null,e),Jo:Jo.bind(null,e)}),e.fu.push(async t=>{t?(e.gu.No(),await zo(e)):(await e.gu.stop(),e.cu.length>0&&(p("RemoteStore",`Stopping write stream with ${e.cu.length} pending writes`),e.cu=[]))})),e.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class na{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new na(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new O(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ra(e,t){if(m("AsyncQueue",`${t}: ${e}`),Qr(e))return new O(I.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ue.comparator(t.key,n.key):(e,t)=>ue.comparator(e.key,t.key),this.keyedMap=_n(),this.sortedSet=new dn(this.comparator)}static emptySet(e){return new ia(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ia))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new ia;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.yu=new dn(ue.comparator)}track(e){const t=e.doc.key,n=this.yu.get(t);n?0!==e.type&&3===n.type?this.yu=this.yu.insert(t,e):3===e.type&&1!==n.type?this.yu=this.yu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.yu=this.yu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.yu=this.yu.remove(t):1===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):b():this.yu=this.yu.insert(t,e)}pu(){const e=[];return this.yu.inorderTraversal((t,n)=>{e.push(n)}),e}}class oa{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new oa(e,t,ia.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this.Iu=void 0,this.listeners=[]}}class ca{constructor(){this.queries=new hn(e=>wt(e),vt),this.onlineState="Unknown",this.Tu=new Set}}async function ua(e,t){const n=_(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new aa),i)try{s.Iu=await n.onListen(r)}catch(e){const n=ra(e,`Initialization of query '${_t(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Eu(n.onlineState),s.Iu&&t.Au(s.Iu)&&fa(n)}async function la(e,t){const n=_(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ha(e,t){const n=_(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Au(i)&&(r=!0);t.Iu=i}}r&&fa(n)}function da(e,t,n){const r=_(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function fa(e){e.Tu.forEach(e=>{e.next()})}class pa{constructor(e,t,n){this.query=e,this.Ru=t,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new oa(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.Vu(e)&&(this.Ru.next(e),t=!0):this.vu(e,this.onlineState)&&(this.Su(e),t=!0),this.Pu=e,t}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let t=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,e)&&(this.Su(this.Pu),t=!0),t}vu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Du||!n)&&(!e.docs.isEmpty()||"Offline"===t)}Vu(e){if(e.docChanges.length>0)return!0;const t=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Su(e){e=oa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t){this.payload=e,this.byteLength=t}Cu(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e){this.M=e}li(e){return Hn(this.M,e)}fi(e){return e.metadata.exists?Zn(this.M,e.document,!1):Ce.newNoDocument(this.li(e.metadata.name),this.di(e.metadata.readTime))}di(e){return zn(e)}}class ya{constructor(e,t,n){this.xu=e,this.localStore=t,this.M=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=ba(e)}Nu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=$.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ku(e){const t=new Map,n=new ga(this.M);for(const r of e)if(r.metadata.queries){const e=n.li(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Tn()).add(e);t.set(n,r)}}return t}async complete(){const e=await zs(this.localStore,new ga(this.M),this.documents,this.xu.id),t=this.ku(this.documents);for(const n of this.queries)await Gs(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Mu:this.collectionGroups,Ou:e}}}function ba(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this.key=e}}class wa{constructor(e){this.key=e}}class _a{constructor(e,t){this.query=e,this.Fu=t,this.$u=null,this.current=!1,this.Bu=Tn(),this.mutatedKeys=Tn(),this.Lu=Et(e),this.Uu=new ia(this.Lu)}get qu(){return this.Fu}Gu(e,t){const n=t?t.Ku:new sa,r=t?t.Uu:this.Uu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=ht(this.query)&&r.size===this.query.limit?r.last():null,c=dt(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),l=It(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),ht(this.query)||dt(this.query))for(;s.size>this.query.limit;){const e=ht(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Uu:s,Ku:n,ei:o,mutatedKeys:i}}Qu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Ku.pu();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Lu(e.doc,t.doc)),this.ju(n);const s=t?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==i.length||a?{snapshot:new oa(this.query,e.Uu,r,i,e.mutatedKeys,0===o,a,!1),zu:s}:{zu:s}}Eu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new sa,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(e=>this.Fu=this.Fu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Fu=this.Fu.delete(e)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Tn(),this.Uu.forEach(e=>{this.Hu(e.key)&&(this.Bu=this.Bu.add(e.key))});const t=[];return e.forEach(e=>{this.Bu.has(e)||t.push(new wa(e))}),this.Bu.forEach(n=>{e.has(n)||t.push(new va(n))}),t}Ju(e){this.Fu=e.hi,this.Bu=Tn();const t=this.Gu(e.documents);return this.applyChanges(t,!0)}Yu(){return oa.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Ia{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Oa{constructor(e){this.key=e,this.Xu=!1}}class Ea{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Zu={},this.ta=new hn(e=>wt(e),vt),this.ea=new Map,this.na=new Set,this.sa=new dn(ue.comparator),this.ia=new Map,this.ra=new Hs,this.oa={},this.ua=new Map,this.aa=Zi.gn(),this.onlineState="Unknown",this.ca=void 0}get isPrimaryClient(){return!0===this.ca}}async function Ta(e,t){const n=ec(e);let r,i;const s=n.ta.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const e=await Ls(n.localStore,yt(t));n.isPrimaryClient&&xo(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await ka(n,t,r,"current"===s)}return i}async function ka(e,t,n,r){e.ha=(t,n,r)=>async function(e,t,n,r){let i=t.view.Gu(n);i.ei&&(i=await Us(e.localStore,t.query,!1).then(({documents:e})=>t.view.Gu(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Ua(e,t.targetId,o.zu),o.snapshot}(e,t,n,r);const i=await Us(e.localStore,t,!0),s=new _a(t,i.hi),o=s.Gu(i.documents),a=jn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);Ua(e,n,c.zu);const u=new Ia(t,n,s);return e.ta.set(t,u),e.ea.has(n)?e.ea.get(n).push(t):e.ea.set(n,[t]),c.snapshot}async function Sa(e,t){const n=_(e),r=n.ta.get(t),i=n.ea.get(r.targetId);if(i.length>1)return n.ea.set(r.targetId,i.filter(e=>!vt(e,t))),void n.ta.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ms(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Co(n.remoteStore,r.targetId),La(n,r.targetId)}).catch(is)):(La(n,r.targetId),await Ms(n.localStore,r.targetId,!0))}async function Aa(e,t,n){const r=tc(e);try{const e=await function(e,t){const n=_(e),r=U.now(),i=t.reduce((e,t)=>e.add(t.key),Tn());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>n.ai.qs(e,i).next(i=>{s=i;const o=[];for(const e of t){const t=Yt(e,s.get(e.key));null!=t&&o.push(new Zt(e.key,t,xe(t.value.mapValue),Gt.exists(!0)))}return n.$s.addMutationBatch(e,r,o,t)})).then(e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.oa[e.currentUser.toKey()];r||(r=new dn(P)),r=r.insert(t,n),e.oa[e.currentUser.toKey()]=r}(r,e.batchId,n),await qa(r,e.changes),await zo(r.remoteStore)}catch(e){const t=ra(e,"Failed to persist write");n.reject(t)}}async function ja(e,t){const n=_(e);try{const e=await Ds(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.ia.get(t);r&&(v(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Xu=!0:e.modifiedDocuments.size>0?v(r.Xu):e.removedDocuments.size>0&&(v(r.Xu),r.Xu=!1))}),await qa(n,e,t)}catch(e){await is(e)}}function xa(e,t,n){const r=_(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ta.forEach((n,r)=>{const i=r.view.Eu(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=_(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.listeners)i.Eu(t)&&(r=!0)}),r&&fa(n)}(r.eventManager,t),e.length&&r.Zu.Ko(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ca(e,t,n){const r=_(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ia.get(t),s=i&&i.key;if(s){let e=new dn(ue.comparator);e=e.insert(s,Ce.newNoDocument(s,V.min()));const n=Tn().add(s),i=new An(V.min(),new Map,new mn(P),e,n);await ja(r,i),r.sa=r.sa.remove(s),r.ia.delete(t),Ba(r)}else await Ms(r.localStore,t,!1).then(()=>La(r,t,n)).catch(is)}async function Na(e,t){const n=_(e),r=t.batch.batchId;try{const e=await Ns(n.localStore,t);Pa(n,r,null),Fa(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qa(n,e)}catch(e){await is(e)}}async function Ra(e,t,n){const r=_(e);try{const e=await function(e,t){const n=_(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.$s.lookupMutationBatch(e,t).next(t=>(v(null!==t),r=t.keys(),n.$s.removeMutationBatch(e,t))).next(()=>n.$s.performConsistencyCheck(e)).next(()=>n.ai.qs(e,r))})}(r.localStore,t);Pa(r,t,n),Fa(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await qa(r,e)}catch(n){await is(n)}}async function Da(e,t){const n=_(e);Po(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=_(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.$s.getHighestUnacknowledgedBatchId(e))}(n.localStore);if(-1===e)return void t.resolve();const r=n.ua.get(e)||[];r.push(t),n.ua.set(e,r)}catch(e){const n=ra(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function Fa(e,t){(e.ua.get(t)||[]).forEach(e=>{e.resolve()}),e.ua.delete(t)}function Pa(e,t,n){const r=_(e);let i=r.oa[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.oa[r.currentUser.toKey()]=i}}function La(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ea.get(t))e.ta.delete(r),n&&e.Zu.la(r,n);e.ea.delete(t),e.isPrimaryClient&&e.ra.Ri(t).forEach(t=>{e.ra.containsKey(t)||Ma(e,t)})}function Ma(e,t){e.na.delete(t.path.canonicalString());const n=e.sa.get(t);null!==n&&(Co(e.remoteStore,n),e.sa=e.sa.remove(t),e.ia.delete(n),Ba(e))}function Ua(e,t,n){for(const r of n)r instanceof va?(e.ra.addReference(r.key,t),Va(e,r)):r instanceof wa?(p("SyncEngine","Document no longer in limbo: "+r.key),e.ra.removeReference(r.key,t),e.ra.containsKey(r.key)||Ma(e,r.key)):b()}function Va(e,t){const n=t.key,r=n.path.canonicalString();e.sa.get(n)||e.na.has(r)||(p("SyncEngine","New document in limbo: "+n),e.na.add(r),Ba(e))}function Ba(e){for(;e.na.size>0&&e.sa.size<e.maxConcurrentLimboResolutions;){const t=e.na.values().next().value;e.na.delete(t);const n=new ue($.fromString(t)),r=e.aa.next();e.ia.set(r,new Oa(n)),e.sa=e.sa.insert(n,r),xo(e.remoteStore,new ai(yt(lt(n.path)),r,2,R.A))}}async function qa(e,t,n){const r=_(e),i=[],s=[],o=[];r.ta.isEmpty()||(r.ta.forEach((e,a)=>{o.push(r.ha(a,t,n).then(e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=Ss.Js(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.Zu.Ko(i),await async function(e,t){const n=_(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Kr.forEach(t,t=>Kr.forEach(t.zs,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Kr.forEach(t.Hs,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Qr(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.si.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.si=n.si.insert(e,i)}}}(r.localStore,s))}async function za(e,t){const n=_(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await Cs(n.localStore,t);n.currentUser=t,function(e,t){e.ua.forEach(e=>{e.forEach(e=>{e.reject(new O(I.CANCELLED,t))})}),e.ua.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await qa(n,e.ci)}}function Ga(e,t){const n=_(e),r=n.ia.get(t);if(r&&r.Xu)return Tn().add(r.key);{let e=Tn();const r=n.ea.get(t);if(!r)return e;for(const t of r){const r=n.ta.get(t);e=e.unionWith(r.view.qu)}return e}}async function $a(e,t){const n=_(e),r=await Us(n.localStore,t.query,!0),i=t.view.Ju(r);return n.isPrimaryClient&&Ua(n,t.targetId,i.zu),i}async function Ka(e,t){const n=_(e);return Bs(n.localStore,t).then(e=>qa(n,e))}async function Ha(e,t,n,r){const i=_(e),s=await function(e,t){const n=_(e),r=_(n.$s);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.ln(e,t).next(t=>t?n.ai.qs(e,t):Kr.resolve(null)))}(i.localStore,t);null!==s?("pending"===n?await zo(i.remoteStore):"acknowledged"===n||"rejected"===n?(Pa(i,t,r||null),Fa(i,t),function(e,t){_(_(e).$s).dn(t)}(i.localStore,t)):b(),await qa(i,s)):p("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Wa(e,t){const n=_(e);if(ec(n),tc(n),!0===t&&!0!==n.ca){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Ya(n,e.toArray());n.ca=!0,await Zo(n.remoteStore,!0);for(const r of t)xo(n.remoteStore,r)}else if(!1===t&&!1!==n.ca){const e=[];let t=Promise.resolve();n.ea.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then(()=>(La(n,i),Ms(n.localStore,i,!0))),Co(n.remoteStore,i)}),await t,await Ya(n,e),function(e){const t=_(e);t.ia.forEach((e,n)=>{Co(t.remoteStore,n)}),t.ra.bi(),t.ia=new Map,t.sa=new dn(ue.comparator)}(n),n.ca=!1,await Zo(n.remoteStore,!1)}}async function Ya(e,t,n){const r=_(e),i=[],s=[];for(const o of t){let e;const t=r.ea.get(o);if(t&&0!==t.length){e=await Ls(r.localStore,yt(t[0]));for(const e of t){const t=r.ta.get(e),n=await $a(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Vs(r.localStore,o);e=await Ls(r.localStore,t),await ka(r,Ja(t),o,!1)}i.push(e)}return r.Zu.Ko(s),i}function Ja(e){return ut(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Qa(e){const t=_(e);return _(_(t.localStore).persistence).Os()}async function Xa(e,t,n,r){const i=_(e);if(i.ca)return void p("SyncEngine","Ignoring unexpected query state notification.");const s=i.ea.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await Bs(i.localStore,Ot(s[0])),r=An.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await qa(i,e,r);break}case"rejected":await Ms(i.localStore,t,!0),La(i,t,r);break;default:b()}}async function Za(e,t,n){const r=ec(e);if(r.ca){for(const e of t){if(r.ea.has(e)){p("SyncEngine","Adding an already active target "+e);continue}const t=await Vs(r.localStore,e),n=await Ls(r.localStore,t);await ka(r,Ja(t),n.targetId,!1),xo(r.remoteStore,n)}for(const e of n)r.ea.has(e)&&await Ms(r.localStore,e,!1).then(()=>{Co(r.remoteStore,e),La(r,e)}).catch(is)}}function ec(e){const t=_(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ja.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ga.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ca.bind(null,t),t.Zu.Ko=ha.bind(null,t.eventManager),t.Zu.la=da.bind(null,t.eventManager),t}function tc(e){const t=_(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Na.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ra.bind(null,t),t}function nc(e,t,n){const r=_(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=_(e),r=zn(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.ds.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(ba(r));const i=new ya(r,e.localStore,t.M);let s=await t.fa();for(;s;){const e=await i.Nu(s);e&&n._updateProgress(e),s=await t.fa()}const o=await i.complete();return await qa(e,o.Ou,void 0),await function(e,t){const n=_(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.ds.saveBundleMetadata(e,t))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Mu)}catch(e){return g("SyncEngine","Loading bundle failed with "+e),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then(e=>{r.sharedClientState.notifyBundleLoaded(e)})}class rc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=wo(e.databaseInfo.databaseId),this.sharedClientState=this.da(e),this.persistence=this._a(e),await this.persistence.start(),this.gcScheduler=this.wa(e),this.localStore=this.ma(e)}wa(e){return null}ma(e){return xs(this.persistence,new As,e.initialUser,this.M)}_a(e){return new Zs(to.Wi,this.M)}da(e){return new ho}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ic extends rc{constructor(e,t,n){super(),this.ga=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ga.initialize(this,e),await tc(this.ga.syncEngine),await zo(this.ga.remoteStore),await this.persistence.Is(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}ma(e){return xs(this.persistence,new As,e.initialUser,this.M)}wa(e){const t=this.persistence.referenceDelegate.garbageCollector;return new as(t,e.asyncQueue)}_a(e){const t=Ts(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?$i.withCacheSize(this.cacheSizeBytes):$i.DEFAULT;return new Is(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,bo(),vo(),this.M,this.sharedClientState,!!this.forceOwnership)}da(e){return new ho}}class sc extends ic{constructor(e,t){super(e,t,!1),this.ga=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ga.syncEngine;this.sharedClientState instanceof lo&&(this.sharedClientState.syncEngine={kr:Ha.bind(null,t),Mr:Xa.bind(null,t),Or:Za.bind(null,t),Os:Qa.bind(null,t),Nr:Ka.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Is(async e=>{await Wa(this.ga.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())})}da(e){const t=bo();if(!lo.vt(t))throw new O(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Ts(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new lo(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class oc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>xa(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=za.bind(null,this.syncEngine),await Zo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ca}createDatastore(e){const t=wo(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new yo(r));var r;return function(e,t,n,r){return new To(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>xa(this.syncEngine,e,0),s=po.vt()?new po:new fo,new So(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Ea(e,t,n,r,i,s);return o&&(a.ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=_(e);p("RemoteStore","RemoteStore shutting down."),t.lu.add(5),await jo(t),t.du.shutdown(),t._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ya(this.observer.next,e)}error(e){this.observer.error?this.ya(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}pa(){this.muted=!0}ya(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t){this.Ia=e,this.M=t,this.metadata=new E,this.buffer=new Uint8Array,this.Ta=new TextDecoder("utf-8"),this.Ea().then(e=>{e&&e.Cu()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==e?void 0:e.payload)))},e=>this.metadata.reject(e))}close(){return this.Ia.cancel()}async getMetadata(){return this.metadata.promise}async fa(){return await this.getMetadata(),this.Ea()}async Ea(){const e=await this.Aa();if(null===e)return null;const t=this.Ta.decode(e),n=Number(t);isNaN(n)&&this.Ra(`length string (${t}) is not valid number`);const r=await this.ba(n);return new ma(JSON.parse(r),e.length+n)}Pa(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Aa(){for(;this.Pa()<0;)if(await this.Va())break;if(0===this.buffer.length)return null;const e=this.Pa();e<0&&this.Ra("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ba(e){for(;this.buffer.length<e;)await this.Va()&&this.Ra("Reached the end of bundle when more is expected.");const t=this.Ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Ra(e){throw this.Ia.cancel(),new Error("Invalid bundle format: "+e)}async Va(){const e=await this.Ia.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new O(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=_(e),r=Jn(n.M)+"/documents",i={documents:t.map(e=>Kn(n.M,e))},s=await n.co("BatchGetDocuments",r,i),o=new Map;s.forEach(e=>{const t=er(n.M,e);o.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=o.get(e.toString());v(!!t),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new rn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=ue.fromPath(t);this.mutations.push(new sn(n,this.precondition(n)))}),await async function(e,t){const n=_(e),r=Jn(n.M)+"/documents",i={writes:t.map(e=>nr(n.M,e))};await n.ro("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw b();t=V.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new O(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?Gt.updateTime(t):Gt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(V.min()))throw new O(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Gt.updateTime(t)}return Gt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t,n,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=r,this.va=5,this.So=new _o(this.asyncQueue,"transaction_retry")}run(){this.va-=1,this.Sa()}Sa(){this.So.Io(async()=>{const e=new lc(this.datastore),t=this.Da(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Ca(e)}))}).catch(e=>{this.Ca(e)})})}Da(e){try{const t=this.updateFunction(e);return!oe(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Ca(e){this.va>0&&this.xa(e)?(this.va-=1,this.asyncQueue.enqueueAndForget(()=>(this.Sa(),Promise.resolve()))):this.deferred.reject(e)}xa(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!un(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=F.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ra(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function fc(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Cs(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function pc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await mc(e);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>Xo(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>Xo(t.remoteStore,n)),e.onlineComponents=t}async function mc(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await fc(e,new rc)),e.offlineComponents}async function gc(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await pc(e,new oc)),e.onlineComponents}function yc(e){return mc(e).then(e=>e.persistence)}function bc(e){return mc(e).then(e=>e.localStore)}function vc(e){return gc(e).then(e=>e.remoteStore)}function wc(e){return gc(e).then(e=>e.syncEngine)}async function _c(e){const t=await gc(e),n=t.eventManager;return n.onListen=Ta.bind(null,t.syncEngine),n.onUnlisten=Sa.bind(null,t.syncEngine),n}function Ic(e){return e.asyncQueue.enqueue(async()=>{const t=await yc(e),n=await vc(e);return t.setNetworkEnabled(!0),function(e){const t=_(e);return t.lu.delete(0),Ao(t)}(n)})}function Oc(e){return e.asyncQueue.enqueue(async()=>{const t=await yc(e),n=await vc(e);return t.setNetworkEnabled(!1),async function(e){const t=_(e);t.lu.add(0),await jo(t),t._u.set("Offline")}(n)})}function Ec(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await function(e,t){const n=_(e);return n.persistence.runTransaction("read document","readonly",e=>n.ai.Bs(e,t))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new O(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=ra(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await bc(e),t,n)),n.promise}function Tc(e,t,n={}){const r=new E;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new cc({next:s=>{t.enqueueAndForget(()=>la(e,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new O(I.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new O(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new pa(lt(n.path),s,{includeMetadataChanges:!0,Du:!0});return ua(e,o)}(await _c(e),e.asyncQueue,t,n,r)),r.promise}function kc(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await Us(e,t,!0),i=new _a(t,r.hi),s=i.Gu(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=ra(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await bc(e),t,n)),n.promise}function Sc(e,t,n={}){const r=new E;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new cc({next:n=>{t.enqueueAndForget(()=>la(e,o)),n.fromCache&&"server"===r.source?i.reject(new O(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new pa(n,s,{includeMetadataChanges:!0,Du:!0});return ua(e,o)}(await _c(e),e.asyncQueue,t,n,r)),r.promise}function Ac(e,t){const n=new cc(t);return e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).Tu.add(t),t.next()}(await _c(e),n)),()=>{n.pa(),e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).Tu.delete(t)}(await _c(e),n))}}function jc(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>{const r=await function(e){return gc(e).then(e=>e.datastore)}(e);new hc(e.asyncQueue,r,t,n).run()}),n.promise}function xc(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new uc(e,t)}(function(e,t){if(e instanceof Uint8Array)return ac(e,t);if(e instanceof ArrayBuffer)return ac(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,wo(t));e.asyncQueue.enqueueAndForget(async()=>{nc(await wc(e),i,r)})}function Cc(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=_(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.ds.getNamedQuery(e,t))}(await bc(e),t))}const Nc=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(e,t,n){if(!n)throw new O(I.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Dc(e,t,n,r){if(!0===t&&!0===r)throw new O(I.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Fc(e){if(!ue.isDocumentKey(e))throw new O(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Pc(e){if(ue.isDocumentKey(e))throw new O(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Lc(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":b()}function Mc(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new O(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lc(e);throw new O(I.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Uc(e,t){if(t<=0)throw new O(I.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new O(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new O(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Dc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vc({}),this._settingsFrozen=!1,e instanceof se?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new O(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new se(e.options.projectId)}(e))}get app(){if(!this._app)throw new O(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new O(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vc(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new k;switch(e.type){case"gapi":const t=e.client;return v(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new x(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new O(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Nc.get(e);t&&(p("ComponentProvider","Removing Datastore"),Nc.delete(e),t.terminate())}(this),Promise.resolve()}}function qc(e,t,n,r={}){var i;const s=(e=Mc(e,Bc))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=u.MOCK_USER;else{t=Object(o["g"])(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new O(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}e._authCredentials=new S(new T(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $c(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zc(this.firestore,e,this._key)}}class Gc{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Gc(this.firestore,e,this._query)}}class $c extends Gc{constructor(e,t,n){super(e,t,lt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zc(this.firestore,null,new ue(e))}withConverter(e){return new $c(this.firestore,e,this._path)}}function Kc(e,t,...n){if(e=Object(o["l"])(e),Rc("collection","path",t),e instanceof Bc){const r=$.fromString(t,...n);return Pc(r),new $c(e,null,r)}{if(!(e instanceof zc||e instanceof $c))throw new O(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child($.fromString(t,...n));return Pc(r),new $c(e.firestore,null,r)}}function Hc(e,t){if(e=Mc(e,Bc),Rc("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new O(I.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Gc(e,null,function(e){return new ct($.emptyPath(),e)}(t))}function Wc(e,t,...n){if(e=Object(o["l"])(e),1===arguments.length&&(t=F.R()),Rc("doc","path",t),e instanceof Bc){const r=$.fromString(t,...n);return Fc(r),new zc(e,null,new ue(r))}{if(!(e instanceof zc||e instanceof $c))throw new O(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child($.fromString(t,...n));return Fc(r),new zc(e.firestore,e instanceof $c?e.converter:null,new ue(r))}}function Yc(e,t){return e=Object(o["l"])(e),t=Object(o["l"])(t),(e instanceof zc||e instanceof $c)&&(t instanceof zc||t instanceof $c)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Jc(e,t){return e=Object(o["l"])(e),t=Object(o["l"])(t),e instanceof Gc&&t instanceof Gc&&e.firestore===t.firestore&&vt(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Qc{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new _o(this,"async_queue_retry"),this.Ua=()=>{const e=vo();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.So.Eo()};const e=vo();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.qa(),this.Ga(e)}enterRestrictedMode(e){if(!this.Ma){this.Ma=!0,this.Ba=e||!1;const t=vo();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ua)}}enqueue(e){if(this.qa(),this.Ma)return new Promise(()=>{});const t=new E;return this.Ga(()=>this.Ma&&this.Ba?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ka.push(e),this.Ka()))}async Ka(){if(0!==this.ka.length){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(e){if(!Qr(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.ka.length>0&&this.So.Io(()=>this.Ka())}}Ga(e){const t=this.Na.then(()=>(this.$a=!0,e().catch(e=>{this.Fa=e,this.$a=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw m("INTERNAL UNHANDLED ERROR: ",t),e}).then(e=>(this.$a=!1,e))));return this.Na=t,t}enqueueAfterDelay(e,t,n){this.qa(),this.La.indexOf(e)>-1&&(t=0);const r=na.createAndSchedule(this,e,t,n,e=>this.Qa(e));return this.Oa.push(r),r}qa(){this.Fa&&b()}verifyOperationInProgress(){}async ja(){let e;do{e=this.Na,await e}while(e!==this.Na)}Wa(e){for(const t of this.Oa)if(t.timerId===e)return!0;return!1}za(e){return this.ja().then(()=>{this.Oa.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.Oa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ja()})}Ha(e){this.La.push(e)}Qa(e){const t=this.Oa.indexOf(e);this.Oa.splice(t,1)}}function Xc(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Zc{constructor(){this._progressObserver={},this._taskCompletionResolver=new E,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=-1;class tu extends Bc{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Qc,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ru(this),this._firestoreClient.terminate()}}function nu(e){return e._firestoreClient||ru(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ru(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new ie(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new dc(e._authCredentials,e._appCheckCredentials,e._queue,r)}function iu(e,t){fu(e=Mc(e,tu));const n=nu(e),r=e._freezeSettings(),i=new oc;return ou(n,i,new ic(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function su(e){fu(e=Mc(e,tu));const t=nu(e),n=e._freezeSettings(),r=new oc;return ou(t,r,new sc(r,n.cacheSizeBytes))}function ou(e,t,n){const r=new E;return e.asyncQueue.enqueue(async()=>{try{await fc(e,n),await pc(e,t),r.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===I.FAILED_PRECONDITION||e.code===I.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}}).then(()=>r.promise)}function au(e){if(e._initialized&&!e._terminated)throw new O(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new E;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!Wr.vt())return Promise.resolve();const t=e+"main";await Wr.delete(t)}(Ts(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function cu(e){return function(e){const t=new E;return e.asyncQueue.enqueueAndForget(async()=>Da(await wc(e),t)),t.promise}(nu(e=Mc(e,tu)))}function uu(e){return Ic(nu(e=Mc(e,tu)))}function lu(e){return Oc(nu(e=Mc(e,tu)))}function hu(e,t){const n=nu(e=Mc(e,tu)),r=new Zc;return xc(n,e._databaseId,t,r),r}function du(e,t){return Cc(nu(e=Mc(e,tu)),t).then(t=>t?new Gc(e,null,t.query):null)}function fu(e){if(e._initialized||e._terminated)throw new O(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new O(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mu(J.fromBase64String(e))}catch(e){throw new O(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new mu(J.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return P(this._lat,e._lat)||P(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=/^__.*__$/;class vu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Zt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xt(e,this.data,t,this.fieldTransforms)}}class wu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Zt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function _u(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Iu{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.M=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ja(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ya(){return this.settings.Ya}Xa(e){return new Iu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Za(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Xa({path:n,tc:!1});return r.ec(e),r}nc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Xa({path:n,tc:!1});return r.Ja(),r}sc(e){return this.Xa({path:void 0,tc:!0})}ic(e){return qu(e,this.settings.methodName,this.settings.rc||!1,this.path,this.settings.oc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ja(){if(this.path)for(let e=0;e<this.path.length;e++)this.ec(this.path.get(e))}ec(e){if(0===e.length)throw this.ic("Document fields must not be empty");if(_u(this.Ya)&&bu.test(e))throw this.ic('Document fields cannot begin and end with "__"')}}class Ou{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=n||wo(e)}uc(e,t,n,r=!1){return new Iu({Ya:e,methodName:t,oc:n,path:H.emptyPath(),tc:!1,rc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Eu(e){const t=e._freezeSettings(),n=wo(e._databaseId);return new Ou(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Tu(e,t,n,r,i,s={}){const o=e.uc(s.merge||s.mergeFields?2:0,t,n,i);Mu("Data must be an object, but it was:",o,r);const a=Pu(r,o);let c,u;if(s.merge)c=new W(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Uu(t,r,n);if(!o.contains(i))throw new O(I.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);zu(e,i)||e.push(i)}c=new W(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms;return new vu(new je(a),c,u)}class ku extends gu{_toFieldTransform(e){if(2!==e.Ya)throw 1===e.Ya?e.ic(this._methodName+"() can only appear at the top level of your update data"):e.ic(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ku}}function Su(e,t,n){return new Iu({Ya:3,oc:t.settings.oc,methodName:e._methodName,tc:n},t.databaseId,t.M,t.ignoreUndefinedProperties)}class Au extends gu{_toFieldTransform(e){return new Bt(e.path,new Rt)}isEqual(e){return e instanceof Au}}class ju extends gu{constructor(e,t){super(e),this.ac=t}_toFieldTransform(e){const t=Su(this,e,!0),n=this.ac.map(e=>Fu(e,t)),r=new Dt(n);return new Bt(e.path,r)}isEqual(e){return this===e}}class xu extends gu{constructor(e,t){super(e),this.ac=t}_toFieldTransform(e){const t=Su(this,e,!0),n=this.ac.map(e=>Fu(e,t)),r=new Pt(n);return new Bt(e.path,r)}isEqual(e){return this===e}}class Cu extends gu{constructor(e,t){super(e),this.cc=t}_toFieldTransform(e){const t=new Mt(e.M,At(e.M,this.cc));return new Bt(e.path,t)}isEqual(e){return this===e}}function Nu(e,t,n,r){const i=e.uc(1,t,n);Mu("Data must be an object, but it was:",i,r);const s=[],a=je.empty();q(r,(e,r)=>{const c=Bu(t,e,n);r=Object(o["l"])(r);const u=i.nc(c);if(r instanceof ku)s.push(c);else{const e=Fu(r,u);null!=e&&(s.push(c),a.set(c,e))}});const c=new W(s);return new wu(a,c,i.fieldTransforms)}function Ru(e,t,n,r,i,s){const a=e.uc(1,t,n),c=[Uu(t,r,n)],u=[i];if(s.length%2!=0)throw new O(I.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(Uu(t,s[o])),u.push(s[o+1]);const l=[],h=je.empty();for(let f=c.length-1;f>=0;--f)if(!zu(l,c[f])){const e=c[f];let t=u[f];t=Object(o["l"])(t);const n=a.nc(e);if(t instanceof ku)l.push(e);else{const r=Fu(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new W(l);return new wu(h,d,a.fieldTransforms)}function Du(e,t,n,r=!1){return Fu(n,e.uc(r?4:3,t))}function Fu(e,t){if(Lu(e=Object(o["l"])(e)))return Mu("Unsupported field value:",t,e),Pu(e,t);if(e instanceof gu)return function(e,t){if(!_u(t.Ya))throw t.ic(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.ic(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.tc&&4!==t.Ya)throw t.ic("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Fu(i,t.sc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(o["l"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return At(t.M,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=U.fromDate(e);return{timestampValue:Vn(t.M,n)}}if(e instanceof U){const n=new U(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Vn(t.M,n)}}if(e instanceof yu)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof mu)return{bytesValue:Bn(t.M,e._byteString)};if(e instanceof zc){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ic(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Gn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ic("Unsupported field value: "+Lc(e))}(e,t)}function Pu(e,t){const n={};return z(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):q(e,(e,r)=>{const i=Fu(r,t.Za(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function Lu(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof U||e instanceof yu||e instanceof mu||e instanceof zc||e instanceof gu)}function Mu(e,t,n){if(!Lu(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Lc(n);throw"an object"===r?t.ic(e+" a custom object"):t.ic(e+" "+r)}}function Uu(e,t,n){if((t=Object(o["l"])(t))instanceof pu)return t._internalPath;if("string"==typeof t)return Bu(e,t);throw qu("Field path arguments must be of type string or ",e,!1,void 0,n)}const Vu=new RegExp("[~\\*/\\[\\]]");function Bu(e,t,n){if(t.search(Vu)>=0)throw qu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new pu(...t.split("."))._internalPath}catch(r){throw qu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function qu(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new O(I.INVALID_ARGUMENT,a+e+c)}function zu(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new zc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new $u(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ku("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class $u extends Gu{data(){return super.data()}}function Ku(e,t){return"string"==typeof t?Bu(e,t):t instanceof pu?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Wu extends Gu{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ku("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Yu extends Wu{data(e={}){return super.data(e)}}class Ju{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Hu(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Yu(this._firestore,this._userDataWriter,n.key,n,new Hu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>({type:"added",doc:new Yu(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Hu(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new Yu(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Hu(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Qu(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Qu(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}function Xu(e,t){return e instanceof Wu&&t instanceof Wu?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Ju&&t instanceof Ju&&e._firestore===t._firestore&&Jc(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(e){if(dt(e)&&0===e.explicitOrderBy.length)throw new O(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class el{}function tl(e,...t){for(const n of t)e=n._apply(e);return e}class nl extends el{constructor(e,t,n){super(),this.hc=e,this.lc=t,this.fc=n,this.type="where"}_apply(e){const t=Eu(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new O(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){yl(o,s);const t=[];for(const n of o)t.push(gl(r,e,n));a={arrayValue:{values:t}}}else a=gl(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||yl(o,s),a=Du(n,t,o,"in"===s||"not-in"===s);const c=We.create(i,s,a);return function(e,t){if(t.S()){const n=pt(e);if(null!==n&&!n.isEqual(t.field))throw new O(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=ft(e);null!==r&&bl(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new O(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new O(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.hc,this.lc,this.fc);return new Gc(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new ct(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function rl(e,t,n){const r=t,i=Ku("where",e);return new nl(i,r,n)}class il extends el{constructor(e,t){super(),this.hc=e,this.dc=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new O(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new O(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new it(t,n);return function(e,t){if(null===ft(e)){const n=pt(e);null!==n&&bl(e,n,t.field)}}(e,r),r}(e._query,this.hc,this.dc);return new Gc(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new ct(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function sl(e,t="asc"){const n=t,r=Ku("orderBy",e);return new il(r,n)}class ol extends el{constructor(e,t,n){super(),this.type=e,this._c=t,this.wc=n}_apply(e){return new Gc(e.firestore,e.converter,bt(e._query,this._c,this.wc))}}function al(e){return Uc("limit",e),new ol("limit",e,"F")}function cl(e){return Uc("limitToLast",e),new ol("limitToLast",e,"L")}class ul extends el{constructor(e,t,n){super(),this.type=e,this.mc=t,this.gc=n}_apply(e){const t=ml(e,this.type,this.mc,this.gc);return new Gc(e.firestore,e.converter,function(e,t){return new ct(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function ll(...e){return new ul("startAt",e,!0)}function hl(...e){return new ul("startAfter",e,!1)}class dl extends el{constructor(e,t,n){super(),this.type=e,this.mc=t,this.gc=n}_apply(e){const t=ml(e,this.type,this.mc,this.gc);return new Gc(e.firestore,e.converter,function(e,t){return new ct(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function fl(...e){return new dl("endBefore",e,!1)}function pl(...e){return new dl("endAt",e,!0)}function ml(e,t,n,r){if(n[0]=Object(o["l"])(n[0]),n[0]instanceof Gu)return function(e,t,n,r,i){if(!r)throw new O(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of gt(e))if(o.field.isKeyField())s.push(ve(t,r.key));else{const e=r.data.field(o.field);if(te(e))throw new O(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new O(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new rt(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=Eu(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new O(I.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new O(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!mt(e)&&-1!==s.indexOf("/"))throw new O(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child($.fromString(s));if(!ue.isDocumentKey(n))throw new O(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new ue(n);a.push(ve(t,i))}else{const e=Du(n,r,s);a.push(e)}}return new rt(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function gl(e,t,n){if("string"==typeof(n=Object(o["l"])(n))){if(""===n)throw new O(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mt(t)&&-1!==n.indexOf("/"))throw new O(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child($.fromString(n));if(!ue.isDocumentKey(r))throw new O(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ve(e,new ue(r))}if(n instanceof zc)return ve(e,n._key);throw new O(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lc(n)}.`)}function yl(e,t){if(!Array.isArray(e)||0===e.length)throw new O(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new O(I.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function bl(e,t,n){if(!n.isEqual(t))throw new O(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{convertValue(e,t="none"){switch(de(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Z(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ee(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw b()}}convertObject(e,t){const n={};return q(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new yu(Z(e.latitude),Z(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ne(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(re(e));default:return null}}convertTimestamp(e){const t=X(e);return new U(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=$.fromString(e);v(yr(n));const r=new se(n.get(1),n.get(3)),i=new ue(n.popFirst(5));return r.isEqual(t)||m(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class _l extends vl{constructor(e){super(),this.firestore=e}convertBytes(e){return new mu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new zc(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Eu(e)}set(e,t,n){this._verifyNotCommitted();const r=Ol(e,this._firestore),i=wl(r.converter,t,n),s=Tu(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,Gt.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=Ol(e,this._firestore);let s;return s="string"==typeof(t=Object(o["l"])(t))||t instanceof pu?Ru(this._dataReader,"WriteBatch.update",i._key,t,n,r):Nu(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,Gt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ol(e,this._firestore);return this._mutations=this._mutations.concat(new rn(t._key,Gt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new O(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ol(e,t){if((e=Object(o["l"])(e)).firestore!==t)throw new O(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(e){e=Mc(e,zc);const t=Mc(e.firestore,tu);return Tc(nu(t),e._key).then(n=>Ml(t,e,n))}class Tl extends vl{constructor(e){super(),this.firestore=e}convertBytes(e){return new mu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new zc(this.firestore,null,t)}}function kl(e){e=Mc(e,zc);const t=Mc(e.firestore,tu),n=nu(t),r=new Tl(t);return Ec(n,e._key).then(n=>new Wu(t,r,e._key,n,new Hu(null!==n&&n.hasLocalMutations,!0),e.converter))}function Sl(e){e=Mc(e,zc);const t=Mc(e.firestore,tu);return Tc(nu(t),e._key,{source:"server"}).then(n=>Ml(t,e,n))}function Al(e){e=Mc(e,Gc);const t=Mc(e.firestore,tu),n=nu(t),r=new Tl(t);return Zu(e._query),Sc(n,e._query).then(n=>new Ju(t,r,e,n))}function jl(e){e=Mc(e,Gc);const t=Mc(e.firestore,tu),n=nu(t),r=new Tl(t);return kc(n,e._query).then(n=>new Ju(t,r,e,n))}function xl(e){e=Mc(e,Gc);const t=Mc(e.firestore,tu),n=nu(t),r=new Tl(t);return Sc(n,e._query,{source:"server"}).then(n=>new Ju(t,r,e,n))}function Cl(e,t,n){e=Mc(e,zc);const r=Mc(e.firestore,tu),i=wl(e.converter,t,n);return Ll(r,[Tu(Eu(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Gt.none())])}function Nl(e,t,n,...r){e=Mc(e,zc);const i=Mc(e.firestore,tu),s=Eu(i);let a;return a="string"==typeof(t=Object(o["l"])(t))||t instanceof pu?Ru(s,"updateDoc",e._key,t,n,r):Nu(s,"updateDoc",e._key,t),Ll(i,[a.toMutation(e._key,Gt.exists(!0))])}function Rl(e){return Ll(Mc(e.firestore,tu),[new rn(e._key,Gt.none())])}function Dl(e,t){const n=Mc(e.firestore,tu),r=Wc(e),i=wl(e.converter,t);return Ll(n,[Tu(Eu(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Gt.exists(!1))]).then(()=>r)}function Fl(e,...t){var n,r,i;e=Object(o["l"])(e);let s={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||Xc(t[a])||(s=t[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(Xc(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[a+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof zc)l=Mc(e.firestore,tu),h=lt(e._key.path),u={next:n=>{t[a]&&t[a](Ml(l,e,n))},error:t[a+1],complete:t[a+2]};else{const n=Mc(e,Gc);l=Mc(n.firestore,tu),h=n._query;const r=new Tl(l);u={next:e=>{t[a]&&t[a](new Ju(l,r,n,e))},error:t[a+1],complete:t[a+2]},Zu(e._query)}return function(e,t,n,r){const i=new cc(r),s=new pa(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>ua(await _c(e),s)),()=>{i.pa(),e.asyncQueue.enqueueAndForget(async()=>la(await _c(e),s))}}(nu(l),h,c,u)}function Pl(e,t){return Ac(nu(e=Mc(e,tu)),Xc(t)?t:{next:t})}function Ll(e,t){return function(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>Aa(await wc(e),t,n)),n.promise}(nu(e),t)}function Ml(e,t,n){const r=n.docs.get(t._key),i=new Tl(e);return new Wu(e,i,t._key,r,new Hu(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Eu(e)}get(e){const t=Ol(e,this._firestore),n=new _l(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return b();const r=e[0];if(r.isFoundDocument())return new Gu(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Gu(this._firestore,n,t._key,null,t.converter);throw b()})}set(e,t,n){const r=Ol(e,this._firestore),i=wl(r.converter,t,n),s=Tu(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=Ol(e,this._firestore);let s;return s="string"==typeof(t=Object(o["l"])(t))||t instanceof pu?Ru(this._dataReader,"Transaction.update",i._key,t,n,r):Nu(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=Ol(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ol(e,this._firestore),n=new Tl(this._firestore);return super.get(e).then(e=>new Wu(this._firestore,n,t._key,e._document,new Hu(!1,!1),t.converter))}}function Vl(e,t){return jc(nu(e=Mc(e,tu)),n=>t(new Ul(e,n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(){return new ku("deleteField")}function ql(){return new Au("serverTimestamp")}function zl(...e){return new ju("arrayUnion",e)}function Gl(...e){return new xu("arrayRemove",e)}function $l(e){return new Cu("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){l=e}(r["SDK_VERSION"]),Object(r["_registerComponent"])(new i["a"]("firestore",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new tu(r,new A(e.getProvider("auth-internal")),new N(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i},"PUBLIC")),Object(r["registerVersion"])(c,"3.4.7",e),Object(r["registerVersion"])(c,"3.4.7","esm2017")}()}).call(this,n("4362"))},"08b9":function(e,t,n){"use strict";n("e469")},"0a06":function(e,t,n){"use strict";var r=n("c532"),i=n("30b5"),s=n("f6b4"),o=n("5270"),a=n("4a7b"),c=n("848b"),u=c.validators;function l(e){this.defaults=e,this.interceptors={request:new s,response:new s}}l.prototype.request=function(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=a(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var s,l=[];if(this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)})),!i){var h=[o,void 0];Array.prototype.unshift.apply(h,r),h=h.concat(l),s=Promise.resolve(t);while(h.length)s=s.then(h.shift(),h.shift());return s}var d=t;while(r.length){var f=r.shift(),p=r.shift();try{d=f(d)}catch(m){p(m);break}}try{s=o(d)}catch(m){return Promise.reject(m)}while(l.length)s=s.then(l.shift(),l.shift());return s},l.prototype.getUri=function(e){return e=a(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=l},"0b64":function(e,t){function n(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}e.exports=n,n.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=0==(1&Math.floor(10*t))?e-n:e+n}return 0|Math.min(e,this.max)},n.prototype.reset=function(){this.attempts=0},n.prototype.setMin=function(e){this.ms=e},n.prototype.setMax=function(e){this.max=e},n.prototype.setJitter=function(e){this.jitter=e}},"0df6":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"1d2b":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},"1f49":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d}));var r=n("34ba"),i=n("4f2a"),s=n.n(i),o=n("0299"),a=n.n(o),c=n("af7f"),u=n("744a"),l=n("33e8");const h="undefined"!==typeof navigator&&"string"===typeof navigator.product&&"reactnative"===navigator.product.toLowerCase();class d extends r["a"]{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,n=h?{}:Object(c["b"])(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=u["d"]&&!h?t?new u["a"](e,t):new u["a"](e):new u["a"](e,t,n)}catch(r){return this.emit("error",r)}this.ws.binaryType=this.socket.binaryType||u["b"],this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=this.onClose.bind(this),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const r=t[n],i=n===t.length-1;Object(l["c"])(r,this.supportsBinary,t=>{const n={};if(!u["d"]&&(r.options&&(n.compress=r.options.compress),this.opts.perMessageDeflate)){const r="string"===typeof t?e.byteLength(t):t.length;r<this.opts.perMessageDeflate.threshold&&(n.compress=!1)}try{u["d"]?this.ws.send(t):this.ws.send(t,n)}catch(s){}i&&Object(u["c"])(()=>{this.writable=!0,this.emit("drain")},this.setTimeoutFn)})}}doClose(){"undefined"!==typeof this.ws&&(this.ws.close(),this.ws=null)}uri(){let e=this.query||{};const t=this.opts.secure?"wss":"ws";let n="";this.opts.port&&("wss"===t&&443!==Number(this.opts.port)||"ws"===t&&80!==Number(this.opts.port))&&(n=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=a()()),this.supportsBinary||(e.b64=1);const r=s.a.encode(e),i=-1!==this.opts.hostname.indexOf(":");return t+"://"+(i?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(r.length?"?"+r:"")}check(){return!!u["a"]&&!("__initialize"in u["a"]&&this.name===d.prototype.name)}}}).call(this,n("b639").Buffer)},"1f5a":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return Me})),n.d(t,"c",(function(){return ut})),n.d(t,"d",(function(){return ft})),n.d(t,"e",(function(){return mt})),n.d(t,"f",(function(){return pt})),n.d(t,"g",(function(){return Ze})),n.d(t,"h",(function(){return dt})),n.d(t,"i",(function(){return Nr})),n.d(t,"j",(function(){return Ki})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return Er})),n.d(t,"m",(function(){return yt})),n.d(t,"n",(function(){return vt})),n.d(t,"o",(function(){return wt})),n.d(t,"p",(function(){return I})),n.d(t,"q",(function(){return Ce})),n.d(t,"r",(function(){return y})),n.d(t,"s",(function(){return Fn})),n.d(t,"t",(function(){return k})),n.d(t,"u",(function(){return si})),n.d(t,"v",(function(){return fe})),n.d(t,"x",(function(){return zt})),n.d(t,"y",(function(){return xn})),n.d(t,"z",(function(){return zi})),n.d(t,"A",(function(){return Nn})),n.d(t,"B",(function(){return Gt})),n.d(t,"C",(function(){return qt})),n.d(t,"D",(function(){return Re})),n.d(t,"F",(function(){return Kt})),n.d(t,"G",(function(){return d})),n.d(t,"H",(function(){return Xt})),n.d(t,"I",(function(){return pn})),n.d(t,"J",(function(){return yn})),n.d(t,"K",(function(){return ii})),n.d(t,"L",(function(){return de})),n.d(t,"M",(function(){return rr})),n.d(t,"N",(function(){return Yt})),n.d(t,"O",(function(){return Dt})),n.d(t,"P",(function(){return Ar})),n.d(t,"Q",(function(){return qr})),n.d(t,"R",(function(){return ni})),n.d(t,"S",(function(){return On})),n.d(t,"T",(function(){return Ft})),n.d(t,"U",(function(){return jr})),n.d(t,"V",(function(){return Br})),n.d(t,"W",(function(){return ei})),n.d(t,"X",(function(){return Zt})),n.d(t,"Y",(function(){return Bt})),n.d(t,"Z",(function(){return Wt})),n.d(t,"ab",(function(){return Et})),n.d(t,"bb",(function(){return Rt})),n.d(t,"cb",(function(){return Lt})),n.d(t,"db",(function(){return Ht})),n.d(t,"eb",(function(){return Jt})),n.d(t,"fb",(function(){return Sr})),n.d(t,"gb",(function(){return Vr})),n.d(t,"hb",(function(){return Xr})),n.d(t,"ib",(function(){return At})),n.d(t,"jb",(function(){return rn})),n.d(t,"kb",(function(){return sn})),n.d(t,"lb",(function(){return Cr})),n.d(t,"mb",(function(){return nn})),n.d(t,"nb",(function(){return en})),n.d(t,"ob",(function(){return $t})),n.d(t,"w",(function(){return Os})),n.d(t,"E",(function(){return _s}));var r=n("1fd5"),i=n("589b");function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var o=n("e691"),a=n("22e5");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=l,f=h,p=new r["b"]("auth","Firebase",h()),m=new o["b"]("@firebase/auth");function g(e,...t){m.logLevel<=o["a"].ERROR&&m.error(`Auth (${i["SDK_VERSION"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e,...t){throw _(e,...t)}function b(e,...t){return _(e,...t)}function v(e,t,n){const i=Object.assign(Object.assign({},f()),{[t]:n}),s=new r["b"]("auth","Firebase",i);return s.create(t,{appName:e.name})}function w(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&y(e,"argument-error"),v(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return p.create(e,...t)}function I(e,t,...n){if(!e)throw _(t,...n)}function O(e){const t="INTERNAL ASSERTION FAILED: "+e;throw g(t),new Error(t)}function E(e,t){e||O(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=new Map;function k(e){E(e instanceof Function,"Expected a class definition");let t=T.get(e);return t?(E(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,T.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(k);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function j(){return"http:"===x()||"https:"===x()}function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(j()||Object(r["o"])()||"connection"in navigator))||navigator.onLine}function N(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){this.shortDelay=e,this.longDelay=t,E(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["t"])()||Object(r["v"])()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){E(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void O("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void O("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void O("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},L=new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function U(e,t,n,i,s={}){return V(e,s,async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=Object(r["z"])(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),F.fetch()(q(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function V(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},P),t);try{const t=new z(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw G(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw G(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw G(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw v(e,a,o);y(e,a)}}catch(s){if(s instanceof r["c"])throw s;y(e,"network-request-failed")}}async function B(e,t,n,r,i={}){const s=await U(e,t,n,r,i);return"mfaPendingCredential"in s&&y(e,"multi-factor-auth-required",{_serverResponse:s}),s}function q(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?D(e.config,i):`${e.config.apiScheme}://${i}`}class z{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(b(this.auth,"network-request-failed")),L.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function G(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=b(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return U(e,"POST","/v1/accounts:delete",t)}async function K(e,t){return U(e,"POST","/v1/accounts:update",t)}async function H(e,t){return U(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e,t=!1){const n=Object(r["l"])(e),i=await n.getIdToken(t),s=Q(i);I(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:W(J(s.auth_time)),issuedAtTime:W(J(s.iat)),expirationTime:W(J(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function J(e){return 1e3*Number(e)}function Q(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return g("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(g("Failed to decode base64 JWT payload"),null)}catch(s){return g("Caught error parsing JWT payload as JSON",s),null}}function X(e){const t=Q(e);return I(t,"internal-error"),I("undefined"!==typeof t.exp,"internal-error"),I("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&ee(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function ee({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Z(e,H(n,{idToken:r}));I(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?oe(s.providerUserInfo):[],a=se(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ne(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function ie(e){const t=Object(r["l"])(e);await re(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function se(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function oe(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e,t){const n=await V(e,{},async()=>{const n=Object(r["z"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=q(e,i,"/v1/token","key="+s),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",F.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I("undefined"!==typeof e.idToken,"internal-error"),I("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ae(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ce;return n&&(I("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(I("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(I("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ce,this.toJSON())}_performRefresh(){return O("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e,t){I("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class le{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new te(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ne(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Z(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Y(this,e)}reload(){return ie(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await re(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Z(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:v,isAnonymous:w,providerData:_,stsTokenManager:O}=t;I(b&&O,e,"internal-error");const E=ce.fromJSON(this.name,O);I("string"===typeof b,e,"internal-error"),ue(l,e.name),ue(h,e.name),I("boolean"===typeof v,e,"internal-error"),I("boolean"===typeof w,e,"internal-error"),ue(d,e.name),ue(f,e.name),ue(p,e.name),ue(m,e.name),ue(g,e.name),ue(y,e.name);const T=new le({uid:b,auth:e,email:h,emailVerified:v,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(T.providerData=_.map(e=>Object.assign({},e))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new ce;r.updateFromServerResponse(t);const i=new le({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await re(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const de=he;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,i),this.fullPersistenceKey=fe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?le._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(k(de),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||k(de);const s=fe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=le._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(c){}})),new pe(i,e,n)):new pe(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ve(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ge(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_e(t))return"Blackberry";if(Ie(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||be(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ge(e=Object(r["m"])()){return/firefox\//i.test(e)}function ye(e=Object(r["m"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function be(e=Object(r["m"])()){return/crios\//i.test(e)}function ve(e=Object(r["m"])()){return/iemobile/i.test(e)}function we(e=Object(r["m"])()){return/android/i.test(e)}function _e(e=Object(r["m"])()){return/blackberry/i.test(e)}function Ie(e=Object(r["m"])()){return/webos/i.test(e)}function Oe(e=Object(r["m"])()){return/iphone|ipad|ipod/i.test(e)}function Ee(e=Object(r["m"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Te(e=Object(r["m"])()){var t;return Oe(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ke(){return Object(r["r"])()&&10===document.documentMode}function Se(e=Object(r["m"])()){return Oe(e)||we(e)||Ie(e)||_e(e)||/windows phone/i.test(e)||ve(e)}function Ae(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e,t=[]){let n;switch(e){case"Browser":n=me(Object(r["m"])());break;case"Worker":n=`${me(Object(r["m"])())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["SDK_VERSION"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ne(this),this.idTokenSubscription=new Ne(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=k(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await re(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=N()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["l"])(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(k(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&k(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[k(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return I(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=je(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Ce(e){return Object(r["l"])(e)}class Ne{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["h"])(e=>this.observer=e)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Re(e,t,n){const r=Ce(e);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=De(t),{host:o,port:a}=Fe(t),c=null===a?"":":"+a;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Le()}function De(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Fe(e){const t=De(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Pe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Pe(t)}}}function Pe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Le(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return O("not implemented")}_getIdTokenResponse(e){return O("not implemented")}_linkToIdToken(e,t){return O("not implemented")}_getReauthenticationResolver(e){return O("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ue(e,t){return U(e,"POST","/v1/accounts:resetPassword",M(e,t))}async function Ve(e,t){return U(e,"POST","/v1/accounts:update",t)}async function Be(e,t){return U(e,"POST","/v1/accounts:update",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(e,t){return B(e,"POST","/v1/accounts:signInWithPassword",M(e,t))}async function ze(e,t){return U(e,"POST","/v1/accounts:sendOobCode",M(e,t))}async function Ge(e,t){return ze(e,t)}async function $e(e,t){return ze(e,t)}async function Ke(e,t){return ze(e,t)}async function He(e,t){return ze(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(e,t){return B(e,"POST","/v1/accounts:signInWithEmailLink",M(e,t))}async function Ye(e,t){return B(e,"POST","/v1/accounts:signInWithEmailLink",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Me{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Je(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Je(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return qe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return We(e,{email:this._email,oobCode:this._password});default:y(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ve(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ye(e,{idToken:t,email:this._email,oobCode:this._password});default:y(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,t){return B(e,"POST","/v1/accounts:signInWithIdp",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="http://localhost";class Ze extends Me{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):y("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Ze(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Qe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Qe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qe(e,t)}buildRequest(){const e={requestUri:Xe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["z"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){return U(e,"POST","/v1/accounts:sendVerificationCode",M(e,t))}async function tt(e,t){return B(e,"POST","/v1/accounts:signInWithPhoneNumber",M(e,t))}async function nt(e,t){const n=await B(e,"POST","/v1/accounts:signInWithPhoneNumber",M(e,t));if(n.temporaryProof)throw G(e,"account-exists-with-different-credential",n);return n}const rt={["USER_NOT_FOUND"]:"user-not-found"};async function it(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return B(e,"POST","/v1/accounts:signInWithPhoneNumber",M(e,n),rt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Me{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new st({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new st({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return it(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new st({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function at(e){const t=Object(r["A"])(Object(r["k"])(e))["link"],n=t?Object(r["A"])(Object(r["k"])(t))["deep_link_id"]:null,i=Object(r["A"])(Object(r["k"])(e))["deep_link_id"],s=i?Object(r["A"])(Object(r["k"])(i))["link"]:null;return s||i||n||t||e}class ct{constructor(e){var t,n,i,s,o,a;const c=Object(r["A"])(Object(r["k"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ot(null!==(i=c["mode"])&&void 0!==i?i:null);I(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=at(e);try{return new ct(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(){this.providerId=ut.PROVIDER_ID}static credential(e,t){return Je._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ct.parseLink(t);return I(n,"argument-error"),Je._fromEmailAndCode(e,n.code,n.tenantId)}}ut.PROVIDER_ID="password",ut.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ut.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends lt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class dt extends ht{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return I("providerId"in t&&"signInMethod"in t,"argument-error"),Ze._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),Ze._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return dt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return dt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new dt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends ht{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch(t){return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com",ft.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ze._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return pt.credential(t,n)}catch(r){return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com",pt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends ht{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com",mt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gt="http://localhost";class yt extends Me{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Qe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Qe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qe(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new yt(n,i):null}static _create(e,t){return new yt(e,t)}buildRequest(){return{requestUri:gt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="saml.";class vt extends lt{constructor(e){I(e.startsWith(bt),"argument-error"),super(e)}static credentialFromResult(e){return vt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return vt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=yt.fromJSON(e);return I(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return yt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends ht{constructor(){super("twitter.com")}static credential(e,t){return Ze._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return wt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _t(e,t){return B(e,"POST","/v1/accounts:signUp",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.TWITTER_SIGN_IN_METHOD="twitter.com",wt.PROVIDER_ID="twitter.com";class It{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await le._fromIdTokenResponse(e,n,r),s=Ot(n),o=new It({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ot(n);return new It({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ot(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(e){var t;const n=Ce(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new It({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await _t(n,{returnSecureToken:!0}),i=await It._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Tt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Tt(e,t,n,r)}}function kt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Tt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(e,t){const n=Object(r["l"])(e);await xt(!0,n,t);const{providerUserInfo:i}=await K(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=St(i||[]);return n.providerData=n.providerData.filter(e=>s.has(e.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function jt(e,t,n=!1){const r=await Z(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return It._forOperation(e,"link",r)}async function xt(e,t,n){await re(t);const r=St(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";I(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Z(e,kt(r,i,t,e),n);I(s.idToken,r,"internal-error");const o=Q(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(e.uid===a,r,"user-mismatch"),It._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&y(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(e,t,n=!1){const r="signIn",i=await kt(e,r,t),s=await It._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Rt(e,t){return Nt(Ce(e),t)}async function Dt(e,t){const n=Object(r["l"])(e);return await xt(!1,n,t.providerId),jt(n,t)}async function Ft(e,t){return Ct(Object(r["l"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(e,t){return B(e,"POST","/v1/accounts:signInWithCustomToken",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(e,t){const n=Ce(e),r=await Pt(n,{token:t,returnSecureToken:!0}),i=await It._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Ut._fromServerResponse(e,t):y(e,"internal-error")}}class Ut extends Mt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Ut(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e,t,n){var r;I((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),I("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(e,t,n){const i=Object(r["l"])(e),s={requestType:"PASSWORD_RESET",email:t};n&&Vt(i,s,n),await $e(i,s)}async function qt(e,t,n){await Ue(Object(r["l"])(e),{oobCode:t,newPassword:n})}async function zt(e,t){await Be(Object(r["l"])(e),{oobCode:t})}async function Gt(e,t){const n=Object(r["l"])(e),i=await Ue(n,{oobCode:t}),s=i.requestType;switch(I(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(i.mfaInfo,n,"internal-error");default:I(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=Mt._fromServerResponse(Ce(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function $t(e,t){const{data:n}=await Gt(Object(r["l"])(e),t);return n.email}async function Kt(e,t,n){const r=Ce(e),i=await _t(r,{returnSecureToken:!0,email:t,password:n}),s=await It._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Ht(e,t,n){return Rt(Object(r["l"])(e),ut.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(e,t,n){const i=Object(r["l"])(e),s={requestType:"EMAIL_SIGNIN",email:t};I(n.handleCodeInApp,i,"argument-error"),n&&Vt(i,s,n),await Ke(i,s)}function Yt(e,t){const n=ct.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Jt(e,t,n){const i=Object(r["l"])(e),s=ut.credentialWithLink(t,n||A());return I(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Rt(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(e,t){return U(e,"POST","/v1/accounts:createAuthUri",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t){const n=j()?A():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:s}=await Qt(Object(r["l"])(e),i);return s||[]}async function Zt(e,t){const n=Object(r["l"])(e),i=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};t&&Vt(n.auth,s,t);const{email:o}=await Ge(n.auth,s);o!==e.email&&await e.reload()}async function en(e,t,n){const i=Object(r["l"])(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&Vt(i.auth,o,n);const{email:a}=await He(i.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(e,t){return U(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Object(r["l"])(e),s=await i.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await Z(i,tn(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find(({providerId:e})=>"password"===e);c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function rn(e,t){return on(Object(r["l"])(e),t,null)}function sn(e,t){return on(Object(r["l"])(e),null,t)}async function on(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await Z(e,Ve(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=Q(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new cn(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new ln(s,i);case"github.com":return new hn(s,i);case"google.com":return new dn(s,i);case"twitter.com":return new fn(s,i,e.screenName||null);case"custom":case"anonymous":return new cn(s,null);default:return new cn(s,r,i)}}class cn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class un extends cn{constructor(e,t,n,r){super(e,t,n),this.username=r}}class ln extends cn{constructor(e,t){super(e,"facebook.com",t)}}class hn extends un{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class dn extends cn{constructor(e,t){super(e,"google.com",t)}}class fn extends un{constructor(e,t,n){super(e,"twitter.com",t,n)}}function pn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:an(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new mn("enroll",e)}static _fromMfaPendingCredential(e){return new mn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return mn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return mn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Ce(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(e=>Mt._fromServerResponse(n,e));I(r.mfaPendingCredential,n,"internal-error");const s=mn._fromMfaPendingCredential(r.mfaPendingCredential);return new gn(s,i,async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await It._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return I(t.user,n,"internal-error"),It._forOperation(t.user,t.operationType,o);default:y(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function yn(e,t){var n;const i=Object(r["l"])(e),s=t;return I(t.customData.operationType,i,"argument-error"),I(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),gn._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:start",M(e,t))}function vn(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:finalize",M(e,t))}function wn(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:withdraw",M(e,t))}class _n{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>Mt._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new _n(e)}async getSession(){return mn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await Z(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),r=await Z(this.user,wn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==i.code)throw i}}}const In=new WeakMap;function On(e){const t=Object(r["l"])(e);return In.has(t)||In.set(t,_n._fromUser(t)),In.get(t)}const En="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(En,"1"),this.storage.removeItem(En),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){const e=Object(r["m"])();return ye(e)||Oe(e)}const Sn=1e3,An=10;class jn extends Tn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kn()&&Ae(),this.fallbackToPolling=Se(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ke()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,An):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Sn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jn.type="LOCAL";const xn=jn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Tn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Cn.type="SESSION";const Nn=Cn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Dn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await Rn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn.receivers=[];class Pn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Fn("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return window}function Mn(e){Ln().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return"undefined"!==typeof Ln()["WorkerGlobalScope"]&&"function"===typeof Ln()["importScripts"]}async function Vn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Bn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function qn(){return Un()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="firebaseLocalStorageDb",Gn=1,$n="firebaseLocalStorage",Kn="fbase_key";class Hn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wn(e,t){return e.transaction([$n],t?"readwrite":"readonly").objectStore($n)}function Yn(){const e=indexedDB.deleteDatabase(zn);return new Hn(e).toPromise()}function Jn(){const e=indexedDB.open(zn,Gn);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore($n,{keyPath:Kn})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains($n)?t(n):(n.close(),await Yn(),t(await Jn()))})})}async function Qn(e,t,n){const r=Wn(e,!0).put({[Kn]:t,value:n});return new Hn(r).toPromise()}async function Xn(e,t){const n=Wn(e,!1).get(t),r=await new Hn(n).toPromise();return void 0===r?null:r.value}function Zn(e,t){const n=Wn(e,!0).delete(t);return new Hn(n).toPromise()}const er=800,tr=3;class nr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Jn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>tr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Un()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dn._getInstance(qn()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Vn(),!this.activeServiceWorker)return;this.sender=new Pn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Bn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jn();return await Qn(e,En,"1"),await Zn(e,En),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Xn(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Wn(e,!1).getAll();return new Hn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),er)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}nr.type="LOCAL";const rr=nr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e,t){return U(e,"POST","/v2/accounts/mfaSignIn:start",M(e,t))}function sr(e,t){return U(e,"POST","/v2/accounts/mfaSignIn:finalize",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(e){return(await U(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function cr(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=b("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ar().appendChild(r)})}function ur(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=500,hr=6e4,dr=1e12;class fr{constructor(e){this.auth=e,this.counter=dr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new pr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||dr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||dr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||dr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class pr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;I(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=mr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()},hr)},lr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function mr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=ur("rcb"),yr=new R(3e4,6e4),br="https://www.google.com/recaptcha/api.js?";class vr{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Ln().grecaptcha}load(e,t=""){return I(wr(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Ln().grecaptcha):new Promise((n,i)=>{const s=Ln().setTimeout(()=>{i(b(e,"network-request-failed"))},yr.get());Ln()[gr]=()=>{Ln().clearTimeout(s),delete Ln()[gr];const r=Ln().grecaptcha;if(!r)return void i(b(e,"internal-error"));const o=r.render;r.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};const o=`${br}?${Object(r["z"])({onload:gr,render:"explicit",hl:t})}`;cr(o).catch(()=>{clearTimeout(s),i(b(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Ln().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function wr(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class _r{async load(e){return new fr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="recaptcha",Or={theme:"light",type:"image"};class Er{constructor(e,t=Object.assign({},Or),n){this.parameters=t,this.type=Ir,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ce(n),this.isInvisible="invisible"===this.parameters.size,I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;I(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new _r:new vr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"===typeof e)e(t);else if("string"===typeof e){const n=Ln()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(j()&&!Un(),this.auth,"internal-error"),await Tr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await or(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Tr(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=st._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Sr(e,t,n){const i=Ce(e),s=await xr(i,t,Object(r["l"])(n));return new kr(s,e=>Rt(i,e))}async function Ar(e,t,n){const i=Object(r["l"])(e);await xt(!1,i,"phone");const s=await xr(i.auth,t,Object(r["l"])(n));return new kr(s,e=>Dt(i,e))}async function jr(e,t,n){const i=Object(r["l"])(e),s=await xr(i.auth,t,Object(r["l"])(n));return new kr(s,e=>Ft(i,e))}async function xr(e,t,n){var r;const i=await n.verify();try{let s;if(I("string"===typeof i,e,"argument-error"),I(n.type===Ir,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){I("enroll"===t.type,e,"internal-error");const n=await bn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{I("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;I(n,e,"missing-multi-factor-info");const o=await ir(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await et(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Cr(e,t){await jt(Object(r["l"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.providerId=Nr.PROVIDER_ID,this.auth=Ce(e)}verifyPhoneNumber(e,t){return xr(this.auth,e,Object(r["l"])(t))}static credential(e,t){return st._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Nr.credentialFromTaggedObject(t)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?st._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rr(e,t){return t?k(t):(I(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nr.PROVIDER_ID="phone",Nr.PHONE_SIGN_IN_METHOD="phone";class Dr extends Me{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fr(e){return Nt(e.auth,new Dr(e),e.bypassAuthState)}function Pr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),Ct(n,new Dr(e),e.bypassAuthState)}async function Lr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),jt(n,new Dr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fr;case"linkViaPopup":case"linkViaRedirect":return Lr;case"reauthViaPopup":case"reauthViaRedirect":return Pr;default:y(this.auth,"internal-error")}}resolve(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new R(2e3,1e4);async function Vr(e,t,n){const r=Ce(e);w(e,t,lt);const i=Rr(r,n),s=new zr(r,"signInViaPopup",t,i);return s.executeNotNull()}async function Br(e,t,n){const i=Object(r["l"])(e);w(i.auth,t,lt);const s=Rr(i.auth,n),o=new zr(i.auth,"reauthViaPopup",t,s,i);return o.executeNotNull()}async function qr(e,t,n){const i=Object(r["l"])(e);w(i.auth,t,lt);const s=Rr(i.auth,n),o=new zr(i.auth,"linkViaPopup",t,s,i);return o.executeNotNull()}class zr extends Mr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const e=Fn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(b(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(b(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(b(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,Ur.get())};e()}}zr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gr="pendingRedirect",$r=new Map;class Kr extends Mr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=$r.get(this.auth._key());if(!e){try{const t=await Hr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}$r.set(this.auth._key(),e)}return this.bypassAuthState||$r.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Hr(e,t){const n=Qr(t),r=Jr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function Wr(e,t){return Jr(e)._set(Qr(t),"true")}function Yr(){$r.clear()}function Jr(e){return k(e._redirectPersistence)}function Qr(e){return fe(Gr,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(e,t,n){return Zr(e,t,n)}async function Zr(e,t,n){const r=Ce(e);w(e,t,lt);const i=Rr(r,n);return await Wr(i,r),i._openRedirect(r,t,"signInViaRedirect")}function ei(e,t,n){return ti(e,t,n)}async function ti(e,t,n){const i=Object(r["l"])(e);w(i.auth,t,lt);const s=Rr(i.auth,n);await Wr(s,i.auth);const o=await oi(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",o)}function ni(e,t,n){return ri(e,t,n)}async function ri(e,t,n){const i=Object(r["l"])(e);w(i.auth,t,lt);const s=Rr(i.auth,n);await xt(!1,i,t.providerId),await Wr(s,i.auth);const o=await oi(i);return s._openRedirect(i.auth,t,"linkViaRedirect",o)}async function ii(e,t){return await Ce(e)._initializationPromise,si(e,t,!1)}async function si(e,t,n=!1){const r=Ce(e),i=Rr(r,t),s=new Kr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function oi(e){const t=Fn(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=6e5;class ci{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!li(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(b(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ai&&this.cachedEventUids.clear(),this.cachedEventUids.has(ui(e))}saveEventToCache(e){this.cachedEventUids.add(ui(e)),this.lastProcessedEventTime=Date.now()}}function ui(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function li({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function hi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return li(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(e,t={}){return U(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pi=/^https?/;async function mi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await di(e);for(const r of t)try{if(gi(r))return}catch(n){}y(e,"unauthorized-domain")}function gi(e){const t=A(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!pi.test(n))return!1;if(fi.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new R(3e4,6e4);function bi(){const e=Ln().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function vi(e){return new Promise((t,n)=>{var r,i,s;function o(){bi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{bi(),n(b(e,"network-request-failed"))},timeout:yi.get()})}if(null===(i=null===(r=Ln().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Ln().gapi)||void 0===s?void 0:s.load)){const t=ur("iframefcb");return Ln()[t]=()=>{gapi.load?o():n(b(e,"network-request-failed"))},cr("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}o()}}).catch(e=>{throw wi=null,e})}let wi=null;function _i(e){return wi=wi||vi(e),wi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new R(5e3,15e3),Oi="__/auth/iframe",Ei="emulator/auth/iframe",Ti={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ki=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Si(e){const t=e.config;I(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?D(t,Ei):`https://${e.config.authDomain}/${Oi}`,s={apiKey:t.apiKey,appName:e.name,v:i["SDK_VERSION"]},o=ki.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r["z"])(s).slice(1)}`}async function Ai(e){const t=await _i(e),n=Ln().gapi;return I(n,e,"internal-error"),t.open({where:document.body,url:Si(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ti,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=b(e,"network-request-failed"),s=Ln().setTimeout(()=>{r(i)},Ii.get());function o(){Ln().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xi=500,Ci=600,Ni="_blank",Ri="http://localhost";class Di{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Fi(e,t,n,i=xi,s=Ci){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},ji),{width:i.toString(),height:s.toString(),top:o,left:a}),l=Object(r["m"])().toLowerCase();n&&(c=be(l)?Ni:n),ge(l)&&(t=t||Ri,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(Te(l)&&"_self"!==c)return Pi(t||"",c),new Di(null);const d=window.open(t||"",c,h);I(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Di(d)}function Pi(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="__/auth/handler",Mi="emulator/auth/handler";function Ui(e,t,n,s,o,a){I(e.config.authDomain,e,"auth-domain-config-required"),I(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i["SDK_VERSION"],eventId:o};if(t instanceof lt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["q"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ht){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Vi(e)}?${Object(r["z"])(u).slice(1)}`}function Vi({config:e}){return e.emulator?D(e,Mi):`https://${e.authDomain}/${Li}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="webStorageSupport";class qi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nn,this._completeRedirectFn=si}async _openPopup(e,t,n,r){var i;E(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Ui(e,t,n,A(),r);return Fi(e,s,Fn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Mn(Ui(e,t,n,A(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Ai(e),n=new ci(e);return t.register("authEvent",t=>{I(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Bi,{type:Bi},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Bi];void 0!==i&&t(!!i),y(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Se()||ye()||Oe()}}const zi=qi;class Gi{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return O("unexpected MultiFactorSessionType")}}}class $i extends Gi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new $i(e)}_finalizeEnroll(e,t,n){return vn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return sr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ki{constructor(){}static assertion(e){return $i._fromCredential(e)}}Ki.FACTOR_ID="phone";var Hi="@firebase/auth",Wi="0.19.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Qi(e){Object(i["_registerComponent"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{I(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),I(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:je(e)},a=new xe(t,r,i);return S(a,n),a})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["_registerComponent"])(new a["a"]("auth-internal",e=>{const t=Ce(e.getProvider("auth").getImmediate());return(e=>new Yi(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["registerVersion"])(Hi,Wi,Ji(e)),Object(i["registerVersion"])(Hi,Wi,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qi("Browser");const Zi=2e3;async function es(e,t,n){var r;const{BuildInfo:i}=Xi();E(t.sessionId,"AuthEvent did not contain a session ID");const s=await ss(t.sessionId),o={};return Oe()?o["ibi"]=i.packageName:we()?o["apn"]=i.packageName:y(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,Ui(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function ts(e){const{BuildInfo:t}=Xi(),n={};Oe()?n.iosBundleId=t.packageName:we()?n.androidPackageName=t.packageName:y(e,"operation-not-supported-in-this-environment"),await di(e,n)}function ns(e){const{cordova:t}=Xi();return new Promise(n=>{t.plugins.browsertab.isAvailable(r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Ee()?"_blank":"_system","location=yes"),n(i)})})}async function rs(e,t,n){const{cordova:r}=Xi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(b(e,"redirect-cancelled-by-user"))},Zi))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),we()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function is(e){var t,n,r,i,s,o,a,c,u,l;const h=Xi();I("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),I("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),I("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ss(e){const t=os(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map(e=>e.toString(16).padStart(2,"0")).join("")}function os(e){if(E(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=20;class cs extends ci{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function us(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:fs(),postBody:null,tenantId:e.tenantId,error:b(e,"no-auth-event")}}function ls(e,t){return ps()._set(ms(e),t)}async function hs(e){const t=await ps()._get(ms(e));return t&&await ps()._remove(ms(e)),t}function ds(e,t){var n,r;const i=ys(t);if(i.includes("/__/auth/callback")){const t=bs(i),s=t["firebaseError"]?gs(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?b(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function fs(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<as;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function ps(){return k(xn)}function ms(e){return fe("authEvent",e.config.apiKey,e.name)}function gs(e){try{return JSON.parse(e)}catch(t){return null}}function ys(e){const t=bs(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=bs(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=bs(i)["link"];return s||i||r||n||e}function bs(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(r["A"])(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=500;class ws{constructor(){this._redirectPersistence=Nn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=si}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new cs(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){y(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){is(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Yr(),await this._originValidation(e);const s=us(e,n,r);await ls(e,s);const o=await es(e,s,t),a=await ns(o);return rs(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ts(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=Xi(),s=setTimeout(async()=>{await hs(e),t.onEvent(Is())},vs),o=async n=>{clearTimeout(s);const r=await hs(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=ds(r,n["url"])),t.onEvent(i||Is())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=i.packageName.toLowerCase()+"://";Xi().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const _s=ws;function Is(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:b("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(e,t){Ce(e)._logFramework(t)}},"1fb5":function(e,t,n){"use strict";t.byteLength=l,t.toByteArray=d,t.fromByteArray=m;for(var r=[],i=[],s="undefined"!==typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,c=o.length;a<c;++a)r[a]=o[a],i[o.charCodeAt(a)]=a;function u(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");-1===n&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function l(e){var t=u(e),n=t[0],r=t[1];return 3*(n+r)/4-r}function h(e,t,n){return 3*(t+n)/4-n}function d(e){var t,n,r=u(e),o=r[0],a=r[1],c=new s(h(e,o,a)),l=0,d=a>0?o-4:o;for(n=0;n<d;n+=4)t=i[e.charCodeAt(n)]<<18|i[e.charCodeAt(n+1)]<<12|i[e.charCodeAt(n+2)]<<6|i[e.charCodeAt(n+3)],c[l++]=t>>16&255,c[l++]=t>>8&255,c[l++]=255&t;return 2===a&&(t=i[e.charCodeAt(n)]<<2|i[e.charCodeAt(n+1)]>>4,c[l++]=255&t),1===a&&(t=i[e.charCodeAt(n)]<<10|i[e.charCodeAt(n+1)]<<4|i[e.charCodeAt(n+2)]>>2,c[l++]=t>>8&255,c[l++]=255&t),c}function f(e){return r[e>>18&63]+r[e>>12&63]+r[e>>6&63]+r[63&e]}function p(e,t,n){for(var r,i=[],s=t;s<n;s+=3)r=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),i.push(f(r));return i.join("")}function m(e){for(var t,n=e.length,i=n%3,s=[],o=16383,a=0,c=n-i;a<c;a+=o)s.push(p(e,a,a+o>c?c:a+o));return 1===i?(t=e[n-1],s.push(r[t>>2]+r[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],s.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"=")),s.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return S})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return x})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return L})),n.d(t,"i",(function(){return N})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return P})),n.d(t,"l",(function(){return B})),n.d(t,"m",(function(){return f})),n.d(t,"n",(function(){return g})),n.d(t,"o",(function(){return y})),n.d(t,"p",(function(){return v})),n.d(t,"q",(function(){return C})),n.d(t,"r",(function(){return w})),n.d(t,"s",(function(){return O})),n.d(t,"t",(function(){return p})),n.d(t,"u",(function(){return m})),n.d(t,"v",(function(){return b})),n.d(t,"w",(function(){return I})),n.d(t,"x",(function(){return _})),n.d(t,"y",(function(){return H})),n.d(t,"z",(function(){return D})),n.d(t,"A",(function(){return F})),n.d(t,"B",(function(){return E}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&l(n)&&(e[n]=u(e[n],t[n]));return e}function l(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function g(){return"object"===typeof self&&self.self===self}function y(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function b(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function v(){return f().indexOf("Electron/")>=0}function w(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _(){return f().indexOf("MSAppHost/")>=0}function I(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function O(){return"object"===typeof indexedDB}function E(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const T="FirebaseError";class k extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=T,Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?A(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new k(r,o,n);return a}}function A(e,t){return e.replace(j,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const j=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function C(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function N(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(R(n)&&R(s)){if(!N(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function R(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function F(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function P(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){const n=new M(e,t);return n.subscribe.bind(n)}class M{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=U(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=V),void 0===r.error&&(r.error=V),void 0===r.complete&&(r.complete=V);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function U(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function V(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t){return new Promise((n,r)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;r(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}})}class z{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new G(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new $(this._db.createObjectStore(e,t))}close(){this._db.close()}}class G{constructor(e){this._transaction=e,this.complete=new Promise((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}})}objectStore(e){return new $(this._transaction.objectStore(e))}}class ${constructor(e){this._store=e}index(e){return new K(this._store.index(e))}createIndex(e,t,n){return new K(this._store.createIndex(e,t,n))}get(e){const t=this._store.get(e);return q(t,"Error reading from IndexedDB")}put(e,t){const n=this._store.put(e,t);return q(n,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return q(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return q(e,"Error clearing IndexedDB object store")}}class K{constructor(e){this._index=e}get(e){const t=this._index.get(e);return q(t,"Error reading from IndexedDB")}}function H(e,t,n){return new Promise((r,i)=>{try{const s=indexedDB.open(e,t);s.onsuccess=e=>{r(new z(e.target.result))},s.onerror=e=>{var t;i("Error opening indexedDB: "+(null===(t=e.target.error)||void 0===t?void 0:t.message))},s.onupgradeneeded=e=>{n(new z(s.result),e.oldVersion,e.newVersion,new G(s.transaction))}}catch(s){i("Error opening indexedDB: "+s.message)}})}}).call(this,n("c8ba"))},"20a4":function(e,t,n){"use strict";t["a"]=(()=>"undefined"!==typeof self?self:"undefined"!==typeof window?window:Function("return this")())()},"21bf":function(e,t,n){(function(t){(function(t,n){e.exports=n()})(0,(function(){var e=e||function(e,r){var i;if("undefined"!==typeof window&&window.crypto&&(i=window.crypto),"undefined"!==typeof self&&self.crypto&&(i=self.crypto),"undefined"!==typeof globalThis&&globalThis.crypto&&(i=globalThis.crypto),!i&&"undefined"!==typeof window&&window.msCrypto&&(i=window.msCrypto),!i&&"undefined"!==typeof t&&t.crypto&&(i=t.crypto),!i)try{i=n(1)}catch(y){}var s=function(){if(i){if("function"===typeof i.getRandomValues)try{return i.getRandomValues(new Uint32Array(1))[0]}catch(y){}if("function"===typeof i.randomBytes)try{return i.randomBytes(4).readInt32LE()}catch(y){}}throw new Error("Native crypto module could not be used to get secure random number.")},o=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.prototype=null,n}}(),a={},c=a.lib={},u=c.Base=function(){return{extend:function(e){var t=o(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),l=c.WordArray=u.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=t!=r?t:4*e.length},toString:function(e){return(e||d).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes,i=e.sigBytes;if(this.clamp(),r%4)for(var s=0;s<i;s++){var o=n[s>>>2]>>>24-s%4*8&255;t[r+s>>>2]|=o<<24-(r+s)%4*8}else for(var a=0;a<i;a+=4)t[r+a>>>2]=n[a>>>2];return this.sigBytes+=i,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=u.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var t=[],n=0;n<e;n+=4)t.push(s());return new l.init(t,e)}}),h=a.enc={},d=h.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;i<n;i++){var s=t[i>>>2]>>>24-i%4*8&255;r.push((s>>>4).toString(16)),r.push((15&s).toString(16))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new l.init(n,t/2)}},f=h.Latin1={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;i<n;i++){var s=t[i>>>2]>>>24-i%4*8&255;r.push(String.fromCharCode(s))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new l.init(n,t)}},p=h.Utf8={stringify:function(e){try{return decodeURIComponent(escape(f.stringify(e)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(e){return f.parse(unescape(encodeURIComponent(e)))}},m=c.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new l.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=p.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n,r=this._data,i=r.words,s=r.sigBytes,o=this.blockSize,a=4*o,c=s/a;c=t?e.ceil(c):e.max((0|c)-this._minBufferSize,0);var u=c*o,h=e.min(4*u,s);if(u){for(var d=0;d<u;d+=o)this._doProcessBlock(i,d);n=i.splice(0,u),r.sigBytes-=h}return new l.init(n,h)},clone:function(){var e=u.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),g=(c.Hasher=m.extend({cfg:u.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){m.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new g.HMAC.init(e,n).finalize(t)}}}),a.algo={});return a}(Math);return e}))}).call(this,n("c8ba"))},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"232e":function(e,t,n){"use strict";n("9ce7")},"2d83":function(e,t,n){"use strict";var r=n("387f");e.exports=function(e,t,n,i,s){var o=new Error(e);return r(o,t,n,i,s)}},"2e67":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,n){"use strict";var r=n("c532");function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var o=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(i(t)+"="+i(e))})))})),s=o.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},"33e8":function(e,t,n){"use strict";n.d(t,"e",(function(){return E})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return I})),n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return O}));const r=Object.create(null);r["open"]="0",r["close"]="1",r["ping"]="2",r["pong"]="3",r["message"]="4",r["upgrade"]="5",r["noop"]="6";const i=Object.create(null);Object.keys(r).forEach(e=>{i[r[e]]=e});const s={type:"error",data:"parser error"},o="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),a="function"===typeof ArrayBuffer,c=e=>"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,u=({type:e,data:t},n,i)=>o&&t instanceof Blob?n?i(t):l(t,i):a&&(t instanceof ArrayBuffer||c(t))?n?i(t):l(new Blob([t]),i):i(r[e]+(t||"")),l=(e,t)=>{const n=new FileReader;return n.onload=function(){const e=n.result.split(",")[1];t("b"+e)},n.readAsDataURL(e)};for(var h=u,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f="undefined"===typeof Uint8Array?[]:new Uint8Array(256),p=0;p<d.length;p++)f[d.charCodeAt(p)]=p;var m=function(e){var t,n,r,i,s,o=.75*e.length,a=e.length,c=0;"="===e[e.length-1]&&(o--,"="===e[e.length-2]&&o--);var u=new ArrayBuffer(o),l=new Uint8Array(u);for(t=0;t<a;t+=4)n=f[e.charCodeAt(t)],r=f[e.charCodeAt(t+1)],i=f[e.charCodeAt(t+2)],s=f[e.charCodeAt(t+3)],l[c++]=n<<2|r>>4,l[c++]=(15&r)<<4|i>>2,l[c++]=(3&i)<<6|63&s;return u};const g="function"===typeof ArrayBuffer,y=(e,t)=>{if("string"!==typeof e)return{type:"message",data:v(e,t)};const n=e.charAt(0);if("b"===n)return{type:"message",data:b(e.substring(1),t)};const r=i[n];return r?e.length>1?{type:i[n],data:e.substring(1)}:{type:i[n]}:s},b=(e,t)=>{if(g){const n=m(e);return v(n,t)}return{base64:!0,data:e}},v=(e,t)=>{switch(t){case"blob":return e instanceof ArrayBuffer?new Blob([e]):e;case"arraybuffer":default:return e}};var w=y;const _=String.fromCharCode(30),I=(e,t)=>{const n=e.length,r=new Array(n);let i=0;e.forEach((e,s)=>{h(e,!1,e=>{r[s]=e,++i===n&&t(r.join(_))})})},O=(e,t)=>{const n=e.split(_),r=[];for(let i=0;i<n.length;i++){const e=w(n[i],t);if(r.push(e),"error"===e.type)break}return r},E=4},"34ba":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("33e8"),i=n("b19d"),s=n("af7f");class o extends i["Emitter"]{constructor(e){super(),this.writable=!1,Object(s["a"])(this,e),this.opts=e,this.query=e.query,this.readyState="",this.socket=e.socket}onError(e,t){const n=new Error(e);return n.type="TransportError",n.description=t,super.emit("error",n),this}open(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this}close(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}send(e){"open"===this.readyState&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emit("open")}onData(e){const t=Object(r["a"])(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emit("packet",e)}onClose(){this.readyState="closed",super.emit("close")}}},"387f":function(e,t,n){"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},3934:function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},"3bfd":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return N})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return C})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return R})),n.d(t,"h",(function(){return v})),n.d(t,"i",(function(){return I})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return y})),n.d(t,"l",(function(){return E})),n.d(t,"m",(function(){return g})),n.d(t,"n",(function(){return l})),n.d(t,"o",(function(){return w})),n.d(t,"p",(function(){return s})),n.d(t,"q",(function(){return O})),n.d(t,"r",(function(){return d})),n.d(t,"s",(function(){return f})),n.d(t,"t",(function(){return D}));const i="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",s=r(i);function o(e){return!!e||""===e}const a="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",c="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",u=r(a),l=r(c);function h(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=d(e[r],t[r]);return n}function d(e,t){if(e===t)return!0;let n=_(e),r=_(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=v(e),r=v(t),n||r)return!(!n||!r)&&h(e,t);if(n=E(e),r=E(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!d(e[n],t[n]))return!1}}return String(e)===String(t)}function f(e,t){return e.findIndex(e=>d(e,t))}const p={},m=/^on[^a-z]/,g=e=>m.test(e),y=e=>e.startsWith("onUpdate:"),b=Object.assign,v=(Object.prototype.hasOwnProperty,Array.isArray),w=e=>"[object Set]"===k(e),_=e=>e instanceof Date,I=e=>"function"===typeof e,O=e=>"string"===typeof e,E=e=>null!==e&&"object"===typeof e,T=Object.prototype.toString,k=e=>T.call(e),S=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},A=/-(\w)/g,j=S(e=>e.replace(A,(e,t)=>t?t.toUpperCase():"")),x=/\B([A-Z])/g,C=S(e=>e.replace(x,"-$1").toLowerCase()),N=S(e=>e.charAt(0).toUpperCase()+e.slice(1)),R=(S(e=>e?"on"+N(e):""),(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)}),D=e=>{const t=parseFloat(e);return isNaN(t)?e:t}}).call(this,n("c8ba"))},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44b2":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return I})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return y})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return r})),n.d(t,"m",(function(){return g}));const i=()=>{},s=Object.assign,o=Object.prototype.hasOwnProperty,a=(e,t)=>o.call(e,t),c=Array.isArray,u=e=>"[object Map]"===m(e),l=e=>"function"===typeof e,h=e=>"string"===typeof e,d=e=>"symbol"===typeof e,f=e=>null!==e&&"object"===typeof e,p=Object.prototype.toString,m=e=>p.call(e),g=e=>m(e).slice(8,-1),y=e=>h(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,b=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},v=/-(\w)/g,w=(b(e=>e.replace(v,(e,t)=>t?t.toUpperCase():"")),/\B([A-Z])/g),_=(b(e=>e.replace(w,"-$1").toLowerCase()),b(e=>e.charAt(0).toUpperCase()+e.slice(1))),I=(b(e=>e?"on"+_(e):""),(e,t)=>!Object.is(e,t)),O=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})}}).call(this,n("c8ba"))},"467f":function(e,t,n){"use strict";var r=n("2d83");e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},4705:function(e,t,n){"use strict";var r=n("a5fa"),i=n("7a23");function s(e,t,n,r,s,o){return Object(i["x"])(e.$slots,"default")}var o=r["a"].next({name:"router:slot",properties:[],setup:function(e){return{vue:r["a"]}}}),a=n("6b0d"),c=n.n(a);const u=c()(o,[["render",s]]);var l=u;function h(e,t,n,r,s,o){const a=Object(i["y"])("router-view");return Object(i["t"])(),Object(i["d"])(a,{slot:""})}var d=r["a"].next({name:"router:view",properties:[],setup:function(e){return{vue:r["a"]}}});const f=c()(d,[["render",h]]);var p=f;const m={key:1};function g(e,t,n,r,s,o){const a=Object(i["y"])("router-link");return e.url?(Object(i["t"])(),Object(i["d"])(a,{key:0,to:e.url},{default:Object(i["J"])(()=>[Object(i["x"])(e.$slots,"default")]),_:3},8,["to"])):(Object(i["t"])(),Object(i["f"])("a",m,[Object(i["x"])(e.$slots,"default")]))}var y=r["a"].next({name:"router:link",properties:["url"],setup:function(e){var t=r["a"].reference(b(e.url));return r["a"].watch(e,(function(){t.value=b(e.url)})),{vue:r["a"],url:t}}});function b(e){return r["b"].is.string(e)&&!1===("/"===e.begin())?{name:e}:e}const v=c()(y,[["render",g]]);var w=v;const _={key:1};function I(e,t,n,r,s,o){const a=Object(i["y"])("router-link");return e.url?(Object(i["t"])(),Object(i["d"])(a,{key:0,to:e.url},{default:Object(i["J"])(()=>[Object(i["x"])(e.$slots,"default")]),_:3},8,["to"])):(Object(i["t"])(),Object(i["f"])("a",_,[Object(i["x"])(e.$slots,"default")]))}var O=r["a"].next({name:"a:link",properties:["url"],setup:function(e){var t=r["a"].reference(E(e.url));return r["a"].watch(e,(function(){t.value=E(e.url)})),{vue:r["a"],url:t}}});function E(e){return r["b"].is.string(e)&&!1===("/"===e.begin())?{name:e}:e}const T=c()(O,[["render",I]]);var k=T;function S(e,t,n,r,s,o){return Object(i["x"])(e.$slots,"default")}var A=r["a"].next({name:"layout:slot",properties:[],setup:function(e){return{vue:r["a"]}}});const j=c()(A,[["render",S]]);var x=j;r["a"].next({name:"component:slot",properties:[],setup:function(e){return{vue:r["a"]}}});const C={key:0,id:"container"};function N(e,t,n,r,s,o){return e.container?(Object(i["t"])(),Object(i["f"])("div",C,[Object(i["x"])(e.$slots,"default")])):Object(i["e"])("",!0)}var R=r["a"].next({name:"container",properties:["container"],setup:function(e){var t=r["a"].reference(e.container);return r["a"].watch(e,(function(){t.value=e.container})),{vue:r["a"],container:t}}});const D=c()(R,[["render",N]]);var F=D;function P(e,t,n,r,i,s){return null}var L=r["a"].next({name:"service:toast",properties:["data"],setup:function(e){return{vue:r["a"]}}});const M=c()(L,[["render",P]]);var U=M;function V(e,t,n,r,i,s){return null}var B=r["a"].next({name:"service:notification",properties:["data"],setup:function(e){return{vue:r["a"]}}});const q=c()(B,[["render",V]]);var z=q;const G={element:""};function $(e,t,n,r,s,o){return Object(i["t"])(),Object(i["f"])("div",G,[Object(i["x"])(e.$slots,"default")])}var K=r["a"].next({name:"element:slot",properties:[],setup:function(e){return{vue:r["a"]}}});const H=c()(K,[["render",$]]);var W=H;const Y={element:"text","pixel-view":"",text:""};function J(e,t,n,r,s,o){return Object(i["t"])(),Object(i["f"])("span",Y,[Object(i["x"])(e.$slots,"default")])}var Q=r["a"].next({name:"text",properties:[],setup:function(e){return{vue:r["a"]}}});const X=c()(Q,[["render",J]]);var Z=X;const ee={element:"date:time","pixel-view":""};function te(e,t,n,r,s,o){return Object(i["t"])(),Object(i["f"])("span",ee,Object(i["B"])(e.vue.date.format(e.format,e.stamp,e.offset)),1)}var ne=r["a"].next({name:"date:time",properties:["format","stamp","offset"],setup:function(e){var t=r["a"].reference(e.format),n=r["a"].reference(r["b"].to.number(e.stamp)),i=r["a"].reference(e.offset);return r["a"].watch(e,(function(){t.value=e.format,n.value=r["b"].to.number(e.stamp),i.value=e.offset})),{vue:r["a"],format:t,stamp:n,offset:i}}});const re=c()(ne,[["render",te]]);var ie=re;function se(e,t,n,r,s,o){return Object(i["t"])(),Object(i["f"])("span",{class:Object(i["n"])(e.css),element:"icon:material",icon:""},Object(i["B"])(e.src),3)}var oe=r["a"].next({name:"icon:material",properties:["src","style-sheet"],setup:function(e){var t,n=r["a"].reference(ce[e.src]||e.src),i=r["a"].reference(e[r["a"].prop("style-sheet")]||ae.style.name);t=i.value?[ae.css,ae.style.sheet[i.value]||i.value].join("-"):ae.css;var s=r["a"].reference(t);return r["a"].watch(e,(function(){n.value=ce[e.src]||e.src,(i.value=e[r["a"].prop("style-sheet")]||ae.style.name)&&(s.value=[ae.css,ae.style.sheet[i.value]||i.value].join("-"))})),{vue:r["a"],css:s,src:n}}}),ae={css:"material-icon".concat("s"),style:{name:null,sheet:{line:"out".concat("line").concat("d"),tone:"two".concat("-").concat("tone")}}},ce={icon:""};n("232e");const ue=c()(oe,[["render",se]]);var le=ue;const he={key:0,element:"button:material"},de={key:1,element:"button:material"};function fe(e,t,n,r,s,o){const a=Object(i["y"])("div:text"),c=Object(i["y"])("icon:material");return"end"===e.icon.position?(Object(i["t"])(),Object(i["f"])("button",he,[e.slot()?(Object(i["t"])(),Object(i["d"])(a,{key:0},{default:Object(i["J"])(()=>[Object(i["x"])(e.$slots,"default")]),_:3})):Object(i["e"])("",!0),e.icon.src?(Object(i["t"])(),Object(i["d"])(c,{key:1,src:e.icon.src,"style-sheet":e.icon.style},null,8,["src","style-sheet"])):Object(i["e"])("",!0)])):(Object(i["t"])(),Object(i["f"])("button",de,[e.icon.src?(Object(i["t"])(),Object(i["d"])(c,{key:0,src:e.icon.src,"style-sheet":e.icon.style},null,8,["src","style-sheet"])):Object(i["e"])("",!0),e.slot()?(Object(i["t"])(),Object(i["d"])(a,{key:1},{default:Object(i["J"])(()=>[Object(i["x"])(e.$slots,"default")]),_:3})):Object(i["e"])("",!0)]))}var pe=r["a"].next({name:"button:material",properties:["icon","icon-style","icon-position"],setup:function(e){var t=r["a"].reactive({src:e.icon,style:e[r["a"].prop("icon-style")],position:e[r["a"].prop("icon-position")]});return r["a"].watch(e,(function(){t.src=e.icon,t.style=e[r["a"].prop("icon-style")],t.position=e[r["a"].prop("icon-position")]})),{vue:r["a"],icon:t}},method:{function(){},slot(){return r["a"].slot(this).default}}});n("08b9");const me=c()(pe,[["render",fe]]);var ge=me;const ye=["for","autocomplete","autocapitalize","autocorrect","spellcheck"],be=["autocomplete","autocapitalize","autocorrect","spellcheck"];function ve(e,t,n,r,s,o){return e.label?Object(i["K"])((Object(i["t"])(),Object(i["f"])("textarea",{key:0,for:e.label,"onUpdate:modelValue":t[0]||(t[0]=t=>e.vue.model[e.model]=t),onFocus:t[1]||(t[1]=(...t)=>e.vue.form.focus&&e.vue.form.focus(...t)),onBlur:t[2]||(t[2]=(...t)=>e.vue.form.blur&&e.vue.form.blur(...t)),autocomplete:e.property.complete,autocapitalize:e.property.capitalize,autocorrect:e.property.correct,spellcheck:e.property.spell,element:"form:text-area"},null,40,ye)),[[i["G"],e.vue.model[e.model]]]):Object(i["K"])((Object(i["t"])(),Object(i["f"])("textarea",{key:1,"onUpdate:modelValue":t[3]||(t[3]=t=>e.vue.model[e.model]=t),autocomplete:e.property.complete,autocapitalize:e.property.capitalize,autocorrect:e.property.correct,spellcheck:e.property.spell,element:"form:text-area"},null,8,be)),[[i["G"],e.vue.model[e.model]]])}var we=r["a"].next({name:"form:text-area",properties:["for","model","complete","capitalize","correct","spell"],setup:function(e){var t=r["a"].reference(e.for),n=r["a"].reference(r["a"].model.format(e.model)),i=r["a"].reactive(r["a"].form.attribute(e));return r["a"].watch(e,(function(){t.value=e.for,n.value=r["a"].model.format(e.model),r["a"].react(i,r["a"].form.attribute(e))})),{vue:r["a"],label:t,model:n,property:i}}});const _e=c()(we,[["render",ve]]);var Ie=_e;const Oe=["for","autocomplete","autocapitalize","autocorrect","spellcheck"],Ee=["autocomplete","autocapitalize","autocorrect","spellcheck"];function Te(e,t,n,r,s,o){return e.label?Object(i["K"])((Object(i["t"])(),Object(i["f"])("input",{key:0,for:e.label,"onUpdate:modelValue":t[0]||(t[0]=t=>e.vue.model[e.model]=t),onFocus:t[1]||(t[1]=(...t)=>e.vue.form.focus&&e.vue.form.focus(...t)),onBlur:t[2]||(t[2]=(...t)=>e.vue.form.blur&&e.vue.form.blur(...t)),autocomplete:e.property.complete,autocapitalize:e.property.capitalize,autocorrect:e.property.correct,spellcheck:e.property.spell,element:"form:input"},null,40,Oe)),[[i["G"],e.vue.model[e.model]]]):Object(i["K"])((Object(i["t"])(),Object(i["f"])("input",{key:1,"onUpdate:modelValue":t[3]||(t[3]=t=>e.vue.model[e.model]=t),autocomplete:e.property.complete,autocapitalize:e.property.capitalize,autocorrect:e.property.correct,spellcheck:e.property.spell,element:"form:input"},null,8,Ee)),[[i["G"],e.vue.model[e.model]]])}var ke=r["a"].next({name:"form:input",properties:["for","model","complete","capitalize","correct","spell"],setup:function(e){var t=r["a"].reference(e.for),n=r["a"].reference(r["a"].model.format(e.model)),i=r["a"].reactive(r["a"].form.attribute(e));return r["a"].watch(e,(function(){t.value=e.for,n.value=r["a"].model.format(e.model),r["a"].react(i,r["a"].form.attribute(e))})),{vue:r["a"],label:t,model:n,property:i}}});const Se=c()(ke,[["render",Te]]);var Ae=Se;const je=["for","autocomplete","autocapitalize","autocorrect","spellcheck"],xe=["autocomplete","autocapitalize","autocorrect","spellcheck"];function Ce(e,t,n,r,s,o){return e.label?Object(i["K"])((Object(i["t"])(),Object(i["f"])("input",{key:0,for:e.label,"onUpdate:modelValue":t[0]||(t[0]=t=>e.vue.model[e.model]=t),onFocus:t[1]||(t[1]=(...t)=>e.vue.form.focus&&e.vue.form.focus(...t)),onBlur:t[2]||(t[2]=(...t)=>e.vue.form.blur&&e.vue.form.blur(...t)),autocomplete:e.property.complete,autocapitalize:e.property.capitalize,autocorrect:e.property.correct,spellcheck:e.property.spell,type:"text",element:"form:text"},null,40,je)),[[i["G"],e.vue.model[e.model]]]):Object(i["K"])((Object(i["t"])(),Object(i["f"])("input",{key:1,"onUpdate:modelValue":t[3]||(t[3]=t=>e.vue.model[e.model]=t),autocomplete:e.property.complete,autocapitalize:e.property.capitalize,autocorrect:e.property.correct,spellcheck:e.property.spell,type:"text",element:"form:text"},null,8,xe)),[[i["G"],e.vue.model[e.model]]])}var Ne=r["a"].next({name:"form:text",properties:["for","model","complete","capitalize","correct","spell"],setup:function(e){var t=r["a"].reference(e.for),n=r["a"].reference(r["a"].model.format(e.model)),i=r["a"].reactive(r["a"].form.attribute(e));return r["a"].watch(e,(function(){t.value=e.for,n.value=r["a"].model.format(e.model),r["a"].react(i,r["a"].form.attribute(e))})),{vue:r["a"],label:t,model:n,property:i}}});const Re=c()(Ne,[["render",Ce]]);var De=Re;const Fe=["for","autocomplete","autocapitalize","autocorrect","spellcheck"],Pe=["autocomplete","autocapitalize","autocorrect","spellcheck"];function Le(e,t,n,r,s,o){return e.label?Object(i["K"])((Object(i["t"])(),Object(i["f"])("input",{key:0,for:e.label,"onUpdate:modelValue":t[0]||(t[0]=t=>e.vue.model[e.model]=t),onFocus:t[1]||(t[1]=(...t)=>e.vue.form.focus&&e.vue.form.focus(...t)),onBlur:t[2]||(t[2]=(...t)=>e.vue.form.blur&&e.vue.form.blur(...t)),autocomplete:e.property.complete,autocapitalize:e.property.capitalize,autocorrect:e.property.correct,spellcheck:e.property.spell,type:"password",element:"form:password"},null,40,Fe)),[[i["G"],e.vue.model[e.model]]]):Object(i["K"])((Object(i["t"])(),Object(i["f"])("input",{key:1,"onUpdate:modelValue":t[3]||(t[3]=t=>e.vue.model[e.model]=t),autocomplete:e.property.complete,autocapitalize:e.property.capitalize,autocorrect:e.property.correct,spellcheck:e.property.spell,type:"password",element:"form:password"},null,8,Pe)),[[i["G"],e.vue.model[e.model]]])}var Me=r["a"].next({name:"form:password",properties:["for","model","complete","capitalize","correct","spell"],setup:function(e){var t=r["a"].reference(e.for),n=r["a"].reference(r["a"].model.format(e.model)),i=r["a"].reactive(r["a"].form.attribute(e));return r["a"].watch(e,(function(){t.value=e.for,n.value=r["a"].model.format(e.model),r["a"].react(i,r["a"].form.attribute(e))})),{vue:r["a"],label:t,model:n,property:i}}});const Ue=c()(Me,[["render",Le]]);var Ve=Ue;const Be=["for","autocomplete","autocapitalize","autocorrect","spellcheck"],qe=["autocomplete","autocapitalize","autocorrect","spellcheck"];function ze(e,t,n,r,s,o){return e.label?Object(i["K"])((Object(i["t"])(),Object(i["f"])("input",{key:0,for:e.label,"onUpdate:modelValue":t[0]||(t[0]=t=>e.vue.model[e.model]=t),onFocus:t[1]||(t[1]=(...t)=>e.vue.form.focus&&e.vue.form.focus(...t)),onBlur:t[2]||(t[2]=(...t)=>e.vue.form.blur&&e.vue.form.blur(...t)),autocomplete:e.property.complete,autocapitalize:e.property.capitalize,autocorrect:e.property.correct,spellcheck:e.property.spell,type:"date",element:"form:date"},null,40,Be)),[[i["G"],e.vue.model[e.model]]]):Object(i["K"])((Object(i["t"])(),Object(i["f"])("input",{key:1,"onUpdate:modelValue":t[3]||(t[3]=t=>e.vue.model[e.model]=t),autocomplete:e.property.complete,autocapitalize:e.property.capitalize,autocorrect:e.property.correct,spellcheck:e.property.spell,type:"date",element:"form:date"},null,8,qe)),[[i["G"],e.vue.model[e.model]]])}var Ge=r["a"].next({name:"form:date",properties:["for","model","complete","capitalize","correct","spell"],setup:function(e){var t=r["a"].reference(e.for),n=r["a"].reference(r["a"].model.format(e.model)),i=r["a"].reactive(r["a"].form.attribute(e));return r["a"].watch(e,(function(){t.value=e.for,n.value=r["a"].model.format(e.model),r["a"].react(i,r["a"].form.attribute(e))})),{vue:r["a"],label:t,model:n,property:i}}});const $e=c()(Ge,[["render",ze]]);var Ke=$e;const He=["for","autocomplete","autocapitalize","autocorrect","spellcheck"],We=["autocomplete","autocapitalize","autocorrect","spellcheck"];function Ye(e,t,n,r,s,o){return e.label?Object(i["K"])((Object(i["t"])(),Object(i["f"])("input",{key:0,for:e.label,"onUpdate:modelValue":t[0]||(t[0]=t=>e.vue.model[e.model]=t),onFocus:t[1]||(t[1]=(...t)=>e.vue.form.focus&&e.vue.form.focus(...t)),onBlur:t[2]||(t[2]=(...t)=>e.vue.form.blur&&e.vue.form.blur(...t)),autocomplete:e.property.complete,autocapitalize:e.property.capitalize,autocorrect:e.property.correct,spellcheck:e.property.spell,type:"email",element:"form:email"},null,40,He)),[[i["G"],e.vue.model[e.model]]]):Object(i["K"])((Object(i["t"])(),Object(i["f"])("input",{key:1,"onUpdate:modelValue":t[3]||(t[3]=t=>e.vue.model[e.model]=t),autocomplete:e.property.complete,autocapitalize:e.property.capitalize,autocorrect:e.property.correct,spellcheck:e.property.spell,type:"email",element:"form:email"},null,8,We)),[[i["G"],e.vue.model[e.model]]])}var Je=r["a"].next({name:"form:email",properties:["for","model","complete","capitalize","correct","spell"],setup:function(e){var t=r["a"].reference(e.for),n=r["a"].reference(r["a"].model.format(e.model)),i=r["a"].reactive(r["a"].form.attribute(e));return r["a"].watch(e,(function(){t.value=e.for,n.value=r["a"].model.format(e.model),r["a"].react(i,r["a"].form.attribute(e))})),{vue:r["a"],label:t,model:n,property:i}}});const Qe=c()(Je,[["render",Ye]]);var Xe=Qe;const Ze=["for"];function et(e,t,n,r,s,o){return e.label?Object(i["K"])((Object(i["t"])(),Object(i["f"])("input",{key:0,for:e.label,onFocus:t[0]||(t[0]=(...t)=>e.vue.form.focus&&e.vue.form.focus(...t)),onBlur:t[1]||(t[1]=(...t)=>e.vue.form.blur&&e.vue.form.blur(...t)),"onUpdate:modelValue":t[2]||(t[2]=t=>e.vue.model[e.model]=t),type:"checkbox",element:"form:check"},null,40,Ze)),[[i["E"],e.vue.model[e.model]]]):Object(i["K"])((Object(i["t"])(),Object(i["f"])("input",{key:1,"onUpdate:modelValue":t[3]||(t[3]=t=>e.vue.model[e.model]=t),type:"checkbox",element:"form:check"},null,512)),[[i["E"],e.vue.model[e.model]]])}var tt=r["a"].next({name:"form:check",properties:["for","model"],setup:function(e){var t=r["a"].reference(e.for),n=r["a"].reference(r["a"].model.format(e.model));return r["a"].watch(e,(function(){t.value=e.for,n.value=r["a"].model.format(e.model)})),{vue:r["a"],label:t,model:n}}});const nt=c()(tt,[["render",et]]);var rt=nt;const it=["for"];function st(e,t,n,r,s,o){return e.label?Object(i["K"])((Object(i["t"])(),Object(i["f"])("input",{key:0,for:e.label,onFocus:t[0]||(t[0]=(...t)=>e.vue.form.focus&&e.vue.form.focus(...t)),onBlur:t[1]||(t[1]=(...t)=>e.vue.form.blur&&e.vue.form.blur(...t)),"onUpdate:modelValue":t[2]||(t[2]=t=>e.vue.model[e.model]=t),type:"radio",element:"form:bullet"},null,40,it)),[[i["F"],e.vue.model[e.model]]]):Object(i["K"])((Object(i["t"])(),Object(i["f"])("input",{key:1,"onUpdate:modelValue":t[3]||(t[3]=t=>e.vue.model[e.model]=t),type:"radio",element:"form:bullet"},null,512)),[[i["F"],e.vue.model[e.model]]])}var ot=r["a"].next({name:"form:bullet",properties:["for","model"],setup:function(e){var t=r["a"].reference(e.for),n=r["a"].reference(r["a"].model.format(e.model));return r["a"].watch(e,(function(){t.value=e.for,n.value=r["a"].model.format(e.model)})),{vue:r["a"],label:t,model:n}}});const at=c()(ot,[["render",st]]);var ct=at,ut={"router:slot":l,"router:view":p,"router:link":w,"a:link":k,"layout:slot":x,container:F,"service:toast":U,"service:notification":z,element:W,"span:text":Z,date:ie,"date:time":ie,"span:date":ie,"span:time":ie,"span:date-time":ie,"icon:material":le,"button:material":ge,"form:input":Ae,"form:text-area":Ie,"text:area":Ie,"form:text":De,"input:text":De,"form:password":Ve,"input:password":Ve,"form:date":Ke,"input:date":Ke,"form:email":Xe,"input:email":Xe,"form:check":rt,"input:check":rt,"form:bullet":ct,"input:bullet":ct};t["a"]={install:function(e,t){for(var n in e.directive("element",(function(e,t){})),e.directive("component",(function(e,t){})),ut)e.component(n,ut[n])}}},"4a7b":function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){t=t||{};var n={};function i(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(e[n],t[n])}function o(e){if(!r.isUndefined(t[e]))return i(void 0,t[e])}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(void 0,t[n])}function c(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var u={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||s,i=t(e);r.isUndefined(i)&&t!==c||(n[e]=i)})),n}},"4c3d":function(e,t,n){"use strict";(function(t){var r=n("c532"),i=n("c8af"),s=n("387f"),o=n("cafa"),a={"Content-Type":"application/x-www-form-urlencoded"};function c(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function u(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("b50d")),e}function l(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(i){if("SyntaxError"!==i.name)throw i}return(n||JSON.stringify)(e)}var h={transitional:o,adapter:u(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(c(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(c(t,"application/json"),l(e)):e}],transformResponse:[function(e){var t=this.transitional||h.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(o){if("SyntaxError"===a.name)throw s(a,this,"E_JSON_PARSE");throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){h.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){h.headers[e]=r.merge(a)})),e.exports=h}).call(this,n("4362"))},"4f2a":function(e,t){t.encode=function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t},t.decode=function(e){for(var t={},n=e.split("&"),r=0,i=n.length;r<i;r++){var s=n[r].split("=");t[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return t}},5134:function(e,t,n){"use strict";(function(e){let r,i;function s(){var t;return void 0!==r||("undefined"!==typeof window&&window.performance?(r=!0,i=window.performance):"undefined"!==typeof e&&(null===(t=e.perf_hooks)||void 0===t?void 0:t.performance)?(r=!0,i=e.perf_hooks.performance):r=!1),r}function o(){return s()?i.now():Date.now()}n.d(t,"a",(function(){return o}))}).call(this,n("c8ba"))},5270:function(e,t,n){"use strict";var r=n("c532"),i=n("c401"),s=n("2e67"),o=n("4c3d"),a=n("7a77");function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){c(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||o.adapter;return t(e).then((function(t){return c(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(c(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},5317:function(e,t){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function i(e,t){var n=/\/{2,9}/g,r=t.replace(n,"/").split("/");return"/"!=t.substr(0,1)&&0!==t.length||r.splice(0,1),"/"==t.substr(t.length-1,1)&&r.splice(r.length-1,1),r}function s(e,t){var n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,(function(e,t,r){t&&(n[t]=r)})),n}e.exports=function(e){var t=e,o=e.indexOf("["),a=e.indexOf("]");-1!=o&&-1!=a&&(e=e.substring(0,o)+e.substring(o,a).replace(/:/g,";")+e.substring(a,e.length));var c=n.exec(e||""),u={},l=14;while(l--)u[r[l]]=c[l]||"";return-1!=o&&-1!=a&&(u.source=t,u.host=u.host.substring(1,u.host.length-1).replace(/;/g,":"),u.authority=u.authority.replace("[","").replace("]","").replace(/;/g,":"),u.ipv6uri=!0),u.pathNames=i(u,u["path"]),u.queryKey=s(u,u["query"]),u}},5567:function(e,t){Function.define(String,"decode",(function(e){return atob(e)})),Function.define(String,"encode",(function(e){return btoa(e)}))},"589b":function(e,t,n){"use strict";n.r(t),n.d(t,"SDK_VERSION",(function(){return Y})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return P})),n.d(t,"_addComponent",(function(){return V})),n.d(t,"_addOrOverwriteComponent",(function(){return B})),n.d(t,"_apps",(function(){return M})),n.d(t,"_clearComponents",(function(){return $})),n.d(t,"_components",(function(){return U})),n.d(t,"_getProvider",(function(){return z})),n.d(t,"_registerComponent",(function(){return q})),n.d(t,"_removeServiceInstance",(function(){return G})),n.d(t,"deleteApp",(function(){return Z})),n.d(t,"getApp",(function(){return Q})),n.d(t,"getApps",(function(){return X})),n.d(t,"initializeApp",(function(){return J})),n.d(t,"onLog",(function(){return te})),n.d(t,"registerVersion",(function(){return ee})),n.d(t,"setLogLevel",(function(){return ne}));var r=n("22e5"),i=n("e691"),s=n("1fd5");n.d(t,"FirebaseError",(function(){return s["c"]}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.20",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",y="@firebase/auth-compat",b="@firebase/database",v="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",I="@firebase/installations",O="@firebase/installations-compat",E="@firebase/messaging",T="@firebase/messaging-compat",k="@firebase/performance",S="@firebase/performance-compat",A="@firebase/remote-config",j="@firebase/remote-config-compat",x="@firebase/storage",C="@firebase/storage-compat",N="@firebase/firestore",R="@firebase/firestore-compat",D="firebase",F="9.6.10",P="[DEFAULT]",L={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[y]:"fire-auth-compat",[b]:"fire-rtdb",[v]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[I]:"fire-iid",[O]:"fire-iid-compat",[E]:"fire-fcm",[T]:"fire-fcm-compat",[k]:"fire-perf",[S]:"fire-perf-compat",[A]:"fire-rc",[j]:"fire-rc-compat",[x]:"fire-gcs",[C]:"fire-gcs-compat",[N]:"fire-fst",[R]:"fire-fst-compat","fire-js":"fire-js",[D]:"fire-js-all"},M=new Map,U=new Map;function V(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function B(e,t){e.container.addOrOverwriteComponent(t)}function q(e){const t=e.name;if(U.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const n of M.values())V(n,e);return!0}function z(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function G(e,t,n=P){z(e,t).clearInstance(n)}function $(){U.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},H=new s["b"]("app","Firebase",K);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y=F;function J(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:P,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw H.create("bad-app-name",{appName:String(i)});const o=M.get(i);if(o){if(Object(s["i"])(e,o.options)&&Object(s["i"])(n,o.config))return o;throw H.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of U.values())a.addComponent(r);const c=new W(e,n,a);return M.set(i,c),c}function Q(e=P){const t=M.get(e);if(!t)throw H.create("no-app",{appName:e});return t}function X(){return Array.from(M.values())}async function Z(e){const t=e.name;M.has(t)&&(M.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function ee(e,t,n){var i;let s=null!==(i=L[e])&&void 0!==i?i:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}q(new r["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw H.create("invalid-log-argument");Object(i["d"])(e,t)}function ne(e){Object(i["c"])(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re="firebase-heartbeat-database",ie=1,se="firebase-heartbeat-store";let oe=null;function ae(){return oe||(oe=Object(s["y"])(re,ie,(e,t)=>{switch(t){case 0:e.createObjectStore(se)}}).catch(e=>{throw H.create("storage-open",{originalErrorMessage:e.message})})),oe}async function ce(e){try{const t=await ae();return t.transaction(se).objectStore(se).get(le(e))}catch(t){throw H.create("storage-get",{originalErrorMessage:t.message})}}async function ue(e,t){try{const n=await ae(),r=n.transaction(se,"readwrite"),i=r.objectStore(se);return await i.put(t,le(e)),r.complete}catch(n){throw H.create("storage-set",{originalErrorMessage:n.message})}}function le(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=1024,de=2592e6;class fe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ge(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=pe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=de}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=pe(),{heartbeatsToSend:t,unsentEntries:n}=me(this._heartbeatsCache.heartbeats),r=Object(s["e"])(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function pe(){const e=new Date;return e.toISOString().substring(0,10)}function me(e,t=he){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),ye(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ye(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ge{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s["s"])()&&Object(s["B"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ce(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ue(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ue(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ye(e){return Object(s["e"])(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e){q(new r["a"]("platform-logger",e=>new o(e),"PRIVATE")),q(new r["a"]("heartbeat",e=>new fe(e),"PRIVATE")),ee(c,u,e),ee(c,u,"esm2017"),ee("fire-js","")}be("")},5994:function(e,t,n){"use strict";(function(e){var t=n("7ded"),r=n("1f5a"),i=n("22e5"),s=n("1fd5"),o="@firebase/auth-compat",a="0.2.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=1e3;function u(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(){return"http:"===u()||"https:"===u()}function h(e=Object(s["m"])()){return!("file:"!==u()&&"ionic:"!==u()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(){return Object(s["v"])()||Object(s["u"])()}function f(){return Object(s["r"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function p(e=Object(s["m"])()){return/Edge\/\d+/.test(e)}function m(e=Object(s["m"])()){return f()||p(e)}function g(){try{const e=self.localStorage,t=r["s"]();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!m()||Object(s["s"])()}catch(e){return y()&&Object(s["s"])()}return!1}function y(){return"undefined"!==typeof e&&"WorkerGlobalScope"in e&&"importScripts"in e}function b(){return(l()||Object(s["o"])()||h())&&!d()&&g()&&!y()}function v(){return h()&&"undefined"!==typeof document}async function w(){return!!v()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}function _(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={LOCAL:"local",NONE:"none",SESSION:"session"},O=r["p"],E="persistence";function T(e,t){O(Object.values(I).includes(t),e,"invalid-persistence-type"),Object(s["v"])()?O(t!==I.SESSION,e,"unsupported-persistence-type"):Object(s["u"])()?O(t===I.NONE,e,"unsupported-persistence-type"):y()?O(t===I.NONE||t===I.LOCAL&&Object(s["s"])(),e,"unsupported-persistence-type"):O(t===I.NONE||g(),e,"unsupported-persistence-type")}async function k(e){await e._initializationPromise;const t=A(),n=r["v"](E,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function S(e,t){const n=A();if(!n)return[];const i=r["v"](E,e,t),s=n.getItem(i);switch(s){case I.NONE:return[r["L"]];case I.LOCAL:return[r["M"],r["A"]];case I.SESSION:return[r["A"]];default:return[]}}function A(){var e;try{return(null===(e=_())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=r["p"];class x{constructor(){this.browserResolver=r["t"](r["z"]),this.cordovaResolver=r["t"](r["E"]),this.underlyingResolver=null,this._redirectPersistence=r["A"],this._completeRedirectFn=r["u"]}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return v()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return j(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await w();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e){return e.unwrap()}function N(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){return F(e)}function D(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new M(e,r["J"](e,t))}else if(i){const e=F(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function F(e){const{_tokenResponse:t}=e instanceof s["c"]?e.customData:e;if(!t)return null;if(!(e instanceof s["c"])&&"temporaryProof"in t&&"phoneNumber"in t)return r["i"].credentialFromResult(e);const n=t.providerId;if(!n||n===r["k"].PASSWORD)return null;let i;switch(n){case r["k"].GOOGLE:i=r["f"];break;case r["k"].FACEBOOK:i=r["d"];break;case r["k"].GITHUB:i=r["e"];break;case r["k"].TWITTER:i=r["o"];break;default:const{oauthIdToken:e,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=t;return s||o||e||a?a?n.startsWith("saml.")?r["m"]._create(n,a):r["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:s}):new r["h"](n).credential({idToken:e,accessToken:s,rawNonce:c}):null}return e instanceof s["c"]?i.credentialFromError(e):i.credentialFromResult(e)}function P(e,t){return t.catch(t=>{throw t instanceof s["c"]&&D(e,t),t}).then(e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:R(e),additionalUserInfo:r["I"](e),user:U.getOrCreate(n)}})}async function L(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>P(e,n.confirm(t))}}class M{constructor(e,t){this.resolver=t,this.auth=N(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return P(C(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this._delegate=e,this.multiFactor=r["S"](e)}static getOrCreate(e){return U.USER_MAP.has(e)||U.USER_MAP.set(e,new U(e)),U.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return P(this.auth,r["O"](this._delegate,e))}async linkWithPhoneNumber(e,t){return L(this.auth,r["P"](this._delegate,e,t))}async linkWithPopup(e){return P(this.auth,r["Q"](this._delegate,e,x))}async linkWithRedirect(e){return await k(r["q"](this.auth)),r["R"](this._delegate,e,x)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return P(this.auth,r["T"](this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return L(this.auth,r["U"](this._delegate,e,t))}reauthenticateWithPopup(e){return P(this.auth,r["V"](this._delegate,e,x))}async reauthenticateWithRedirect(e){return await k(r["q"](this.auth)),r["W"](this._delegate,e,x)}sendEmailVerification(e){return r["X"](this._delegate,e)}async unlink(e){return await r["ib"](this._delegate,e),this}updateEmail(e){return r["jb"](this._delegate,e)}updatePassword(e){return r["kb"](this._delegate,e)}updatePhoneNumber(e){return r["lb"](this._delegate,e)}updateProfile(e){return r["mb"](this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r["nb"](this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}U.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const V=r["p"];class B{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;V(n,"invalid-api-key",{appName:e.name}),V(n,"invalid-api-key",{appName:e.name});const i="undefined"!==typeof window?x:void 0;this._delegate=t.initialize({options:{persistence:z(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(r["G"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?U.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r["D"](this._delegate,e,t)}applyActionCode(e){return r["x"](this._delegate,e)}checkActionCode(e){return r["B"](this._delegate,e)}confirmPasswordReset(e,t){return r["C"](this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return P(this._delegate,r["F"](this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r["H"](this._delegate,e)}isSignInWithEmailLink(e){return r["N"](this._delegate,e)}async getRedirectResult(){V(b(),this._delegate,"operation-not-supported-in-this-environment");const e=await r["K"](this._delegate,x);return e?P(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){r["w"](this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=q(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=q(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return r["Z"](this._delegate,e,t)}sendPasswordResetEmail(e,t){return r["Y"](this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(T(this._delegate,e),e){case I.SESSION:t=r["A"];break;case I.LOCAL:const e=await r["t"](r["M"])._isAvailable();t=e?r["M"]:r["y"];break;case I.NONE:t=r["L"];break;default:return r["r"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return P(this._delegate,r["ab"](this._delegate))}signInWithCredential(e){return P(this._delegate,r["bb"](this._delegate,e))}signInWithCustomToken(e){return P(this._delegate,r["cb"](this._delegate,e))}signInWithEmailAndPassword(e,t){return P(this._delegate,r["db"](this._delegate,e,t))}signInWithEmailLink(e,t){return P(this._delegate,r["eb"](this._delegate,e,t))}signInWithPhoneNumber(e,t){return L(this._delegate,r["fb"](this._delegate,e,t))}async signInWithPopup(e){return V(b(),this._delegate,"operation-not-supported-in-this-environment"),P(this._delegate,r["gb"](this._delegate,e,x))}async signInWithRedirect(e){return V(b(),this._delegate,"operation-not-supported-in-this-environment"),await k(this._delegate),r["hb"](this._delegate,e,x)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r["ob"](this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function q(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&U.getOrCreate(e));return{next:s,error:t,complete:n}}function z(e,t){const n=S(e,t);if("undefined"===typeof self||n.includes(r["M"])||n.push(r["M"]),"undefined"!==typeof window)for(const i of[r["y"],r["A"]])n.includes(i)||n.push(i);return n.includes(r["L"])||n.push(r["L"]),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */B.Persistence=I;class G{constructor(){this.providerId="phone",this._delegate=new r["i"](C(t["a"].auth()))}static credential(e,t){return r["i"].credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}G.PHONE_SIGN_IN_METHOD=r["i"].PHONE_SIGN_IN_METHOD,G.PROVIDER_ID=r["i"].PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $=r["p"];class K{constructor(e,n,i=t["a"].app()){var s;$(null===(s=i.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new r["l"](e,n,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H="auth-compat";function W(e){e.INTERNAL.registerComponent(new i["a"](H,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new B(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r["a"].EMAIL_SIGNIN,PASSWORD_RESET:r["a"].PASSWORD_RESET,RECOVER_EMAIL:r["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r["a"].VERIFY_EMAIL}},EmailAuthProvider:r["c"],FacebookAuthProvider:r["d"],GithubAuthProvider:r["e"],GoogleAuthProvider:r["f"],OAuthProvider:r["h"],SAMLAuthProvider:r["n"],PhoneAuthProvider:G,PhoneMultiFactorGenerator:r["j"],RecaptchaVerifier:K,TwitterAuthProvider:r["o"],Auth:B,AuthCredential:r["b"],Error:s["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(o,a)}W(t["a"])}).call(this,n("c8ba"))},"5cce":function(e,t){e.exports={version:"0.26.1"}},"5f02":function(e,t,n){"use strict";var r=n("c532");e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},6690:function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return U})),n.d(t,"f",(function(){return q})),n.d(t,"g",(function(){return K})),n.d(t,"h",(function(){return w})),n.d(t,"i",(function(){return Y})),n.d(t,"j",(function(){return G})),n.d(t,"k",(function(){return O})),n.d(t,"l",(function(){return B})),n.d(t,"m",(function(){return $})),n.d(t,"n",(function(){return E})),n.d(t,"o",(function(){return P})),n.d(t,"p",(function(){return S})),n.d(t,"q",(function(){return s})),n.d(t,"r",(function(){return T})),n.d(t,"s",(function(){return v})),n.d(t,"t",(function(){return j})),n.d(t,"u",(function(){return b})),n.d(t,"v",(function(){return D})),n.d(t,"w",(function(){return x})),n.d(t,"x",(function(){return F})),n.d(t,"y",(function(){return k})),n.d(t,"z",(function(){return A})),n.d(t,"A",(function(){return r})),n.d(t,"B",(function(){return l})),n.d(t,"C",(function(){return o})),n.d(t,"D",(function(){return _})),n.d(t,"E",(function(){return h})),n.d(t,"F",(function(){return z})),n.d(t,"G",(function(){return H})),n.d(t,"H",(function(){return R}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);function o(e){if(E(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=A(r)?u(r):o(r);if(i)for(const e in i)t[e]=i[e]}return t}return A(e)||j(e)?e:void 0}const a=/;(?![^(]*\))/g,c=/:(.+)/;function u(e){const t={};return e.split(a).forEach(e=>{if(e){const n=e.split(c);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function l(e){let t="";if(A(e))t=e;else if(E(e))for(let n=0;n<e.length;n++){const r=l(e[n]);r&&(t+=r+" ")}else if(j(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const h=e=>A(e)?e:null==e?"":E(e)||j(e)&&(e.toString===C||!S(e.toString))?JSON.stringify(e,d,2):String(e),d=(e,t)=>t&&t.__v_isRef?d(e,t.value):T(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:k(t)?{[`Set(${t.size})`]:[...t.values()]}:!j(t)||E(t)||D(t)?t:String(t),f={},p=[],m=()=>{},g=()=>!1,y=/^on[^a-z]/,b=e=>y.test(e),v=e=>e.startsWith("onUpdate:"),w=Object.assign,_=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},I=Object.prototype.hasOwnProperty,O=(e,t)=>I.call(e,t),E=Array.isArray,T=e=>"[object Map]"===N(e),k=e=>"[object Set]"===N(e),S=e=>"function"===typeof e,A=e=>"string"===typeof e,j=e=>null!==e&&"object"===typeof e,x=e=>j(e)&&S(e.then)&&S(e.catch),C=Object.prototype.toString,N=e=>C.call(e),R=e=>N(e).slice(8,-1),D=e=>"[object Object]"===N(e),F=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),P=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),L=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},M=/-(\w)/g,U=L(e=>e.replace(M,(e,t)=>t?t.toUpperCase():"")),V=/\B([A-Z])/g,B=L(e=>e.replace(V,"-$1").toLowerCase()),q=L(e=>e.charAt(0).toUpperCase()+e.slice(1)),z=L(e=>e?"on"+q(e):""),G=(e,t)=>!Object.is(e,t),$=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},K=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},H=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let W;const Y=()=>W||(W="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},"72fe":function(e,t,n){(function(t,r){e.exports=r(n("21bf"))})(0,(function(e){return function(t){var n=e,r=n.lib,i=r.WordArray,s=r.Hasher,o=n.algo,a=[];(function(){for(var e=0;e<64;e++)a[e]=4294967296*t.abs(t.sin(e+1))|0})();var c=o.MD5=s.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){for(var n=0;n<16;n++){var r=t+n,i=e[r];e[r]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}var s=this._hash.words,o=e[t+0],c=e[t+1],f=e[t+2],p=e[t+3],m=e[t+4],g=e[t+5],y=e[t+6],b=e[t+7],v=e[t+8],w=e[t+9],_=e[t+10],I=e[t+11],O=e[t+12],E=e[t+13],T=e[t+14],k=e[t+15],S=s[0],A=s[1],j=s[2],x=s[3];S=u(S,A,j,x,o,7,a[0]),x=u(x,S,A,j,c,12,a[1]),j=u(j,x,S,A,f,17,a[2]),A=u(A,j,x,S,p,22,a[3]),S=u(S,A,j,x,m,7,a[4]),x=u(x,S,A,j,g,12,a[5]),j=u(j,x,S,A,y,17,a[6]),A=u(A,j,x,S,b,22,a[7]),S=u(S,A,j,x,v,7,a[8]),x=u(x,S,A,j,w,12,a[9]),j=u(j,x,S,A,_,17,a[10]),A=u(A,j,x,S,I,22,a[11]),S=u(S,A,j,x,O,7,a[12]),x=u(x,S,A,j,E,12,a[13]),j=u(j,x,S,A,T,17,a[14]),A=u(A,j,x,S,k,22,a[15]),S=l(S,A,j,x,c,5,a[16]),x=l(x,S,A,j,y,9,a[17]),j=l(j,x,S,A,I,14,a[18]),A=l(A,j,x,S,o,20,a[19]),S=l(S,A,j,x,g,5,a[20]),x=l(x,S,A,j,_,9,a[21]),j=l(j,x,S,A,k,14,a[22]),A=l(A,j,x,S,m,20,a[23]),S=l(S,A,j,x,w,5,a[24]),x=l(x,S,A,j,T,9,a[25]),j=l(j,x,S,A,p,14,a[26]),A=l(A,j,x,S,v,20,a[27]),S=l(S,A,j,x,E,5,a[28]),x=l(x,S,A,j,f,9,a[29]),j=l(j,x,S,A,b,14,a[30]),A=l(A,j,x,S,O,20,a[31]),S=h(S,A,j,x,g,4,a[32]),x=h(x,S,A,j,v,11,a[33]),j=h(j,x,S,A,I,16,a[34]),A=h(A,j,x,S,T,23,a[35]),S=h(S,A,j,x,c,4,a[36]),x=h(x,S,A,j,m,11,a[37]),j=h(j,x,S,A,b,16,a[38]),A=h(A,j,x,S,_,23,a[39]),S=h(S,A,j,x,E,4,a[40]),x=h(x,S,A,j,o,11,a[41]),j=h(j,x,S,A,p,16,a[42]),A=h(A,j,x,S,y,23,a[43]),S=h(S,A,j,x,w,4,a[44]),x=h(x,S,A,j,O,11,a[45]),j=h(j,x,S,A,k,16,a[46]),A=h(A,j,x,S,f,23,a[47]),S=d(S,A,j,x,o,6,a[48]),x=d(x,S,A,j,b,10,a[49]),j=d(j,x,S,A,T,15,a[50]),A=d(A,j,x,S,g,21,a[51]),S=d(S,A,j,x,O,6,a[52]),x=d(x,S,A,j,p,10,a[53]),j=d(j,x,S,A,_,15,a[54]),A=d(A,j,x,S,c,21,a[55]),S=d(S,A,j,x,v,6,a[56]),x=d(x,S,A,j,k,10,a[57]),j=d(j,x,S,A,y,15,a[58]),A=d(A,j,x,S,E,21,a[59]),S=d(S,A,j,x,m,6,a[60]),x=d(x,S,A,j,I,10,a[61]),j=d(j,x,S,A,f,15,a[62]),A=d(A,j,x,S,w,21,a[63]),s[0]=s[0]+S|0,s[1]=s[1]+A|0,s[2]=s[2]+j|0,s[3]=s[3]+x|0},_doFinalize:function(){var e=this._data,n=e.words,r=8*this._nDataBytes,i=8*e.sigBytes;n[i>>>5]|=128<<24-i%32;var s=t.floor(r/4294967296),o=r;n[15+(i+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),n[14+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),e.sigBytes=4*(n.length+1),this._process();for(var a=this._hash,c=a.words,u=0;u<4;u++){var l=c[u];c[u]=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8)}return a},clone:function(){var e=s.clone.call(this);return e._hash=this._hash.clone(),e}});function u(e,t,n,r,i,s,o){var a=e+(t&n|~t&r)+i+o;return(a<<s|a>>>32-s)+t}function l(e,t,n,r,i,s,o){var a=e+(t&r|n&~r)+i+o;return(a<<s|a>>>32-s)+t}function h(e,t,n,r,i,s,o){var a=e+(t^n^r)+i+o;return(a<<s|a>>>32-s)+t}function d(e,t,n,r,i,s,o){var a=e+(n^(t|~r))+i+o;return(a<<s|a>>>32-s)+t}n.MD5=s._createHelper(c),n.HmacMD5=s._createHmacHelper(c)}(Math),e.MD5}))},"744a":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n("20a4");const i=(()=>{const e="function"===typeof Promise&&"function"===typeof Promise.resolve;return e?e=>Promise.resolve().then(e):(e,t)=>t(e,0)})(),s=r["a"].WebSocket||r["a"].MozWebSocket,o=!0,a="arraybuffer"},"7a23":function(e,t,n){"use strict";n.d(t,"v",(function(){return ve})),n.d(t,"w",(function(){return De})),n.d(t,"A",(function(){return Fe})),n.d(t,"C",(function(){return Be})),n.d(t,"D",(function(){return Me})),n.d(t,"n",(function(){return Ke["B"]})),n.d(t,"B",(function(){return Ke["E"]})),n.d(t,"a",(function(){return _r})),n.d(t,"b",(function(){return Ii})),n.d(t,"d",(function(){return Rr})),n.d(t,"e",(function(){return $r})),n.d(t,"f",(function(){return Nr})),n.d(t,"g",(function(){return Ur})),n.d(t,"h",(function(){return Vr})),n.d(t,"i",(function(){return nn})),n.d(t,"j",(function(){return oi})),n.d(t,"k",(function(){return Oi})),n.d(t,"l",(function(){return Mt})),n.d(t,"m",(function(){return lt})),n.d(t,"o",(function(){return an})),n.d(t,"p",(function(){return cn})),n.d(t,"q",(function(){return gn})),n.d(t,"r",(function(){return wn})),n.d(t,"s",(function(){return bn})),n.d(t,"t",(function(){return Sr})),n.d(t,"u",(function(){return Lt})),n.d(t,"x",(function(){return Qr})),n.d(t,"y",(function(){return gr})),n.d(t,"z",(function(){return br})),n.d(t,"H",(function(){return Bt})),n.d(t,"I",(function(){return Ut})),n.d(t,"J",(function(){return At})),n.d(t,"K",(function(){return tr})),n.d(t,"c",(function(){return Rs})),n.d(t,"E",(function(){return Ts})),n.d(t,"F",(function(){return Ss})),n.d(t,"G",(function(){return Es}));var r=n("44b2");let i;class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return i=this,e()}finally{i=this.parent}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,u=e=>(e.n&p)>0,l=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},d=new WeakMap;let f=0,p=1;const m=30;let g;const y=Symbol(""),b=Symbol("");class v{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=g,t=_;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,_=!0,p=1<<++f,f<=m?l(this):w(this),this.fn()}finally{f<=m&&h(this),p=1<<--f,g=this.parent,_=t,this.parent=void 0}}stop(){this.active&&(w(this),this.onStop&&this.onStop(),this.active=!1)}}function w(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let _=!0;const I=[];function O(){I.push(_),_=!1}function E(){const e=I.pop();_=void 0===e||e}function T(e,t,n){if(_&&g){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;k(r,i)}}function k(e,t){let n=!1;f<=m?u(e)||(e.n|=p,n=!c(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function S(e,t,n,i,s,o){const c=d.get(e);if(!c)return;let u=[];if("clear"===t)u=[...c.values()];else if("length"===n&&Object(r["f"])(e))c.forEach((e,t)=>{("length"===t||t>=i)&&u.push(e)});else switch(void 0!==n&&u.push(c.get(n)),t){case"add":Object(r["f"])(e)?Object(r["h"])(n)&&u.push(c.get("length")):(u.push(c.get(y)),Object(r["i"])(e)&&u.push(c.get(b)));break;case"delete":Object(r["f"])(e)||(u.push(c.get(y)),Object(r["i"])(e)&&u.push(c.get(b)));break;case"set":Object(r["i"])(e)&&u.push(c.get(y));break}if(1===u.length)u[0]&&A(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);A(a(e))}}function A(e,t){for(const n of Object(r["f"])(e)?e:[...e])(n!==g||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const j=Object(r["l"])("__proto__,__v_isRef,__isVue"),x=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["k"])),C=P(),N=P(!1,!0),R=P(!0),D=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=Se(this);for(let t=0,i=this.length;t<i;t++)T(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Se)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){O();const n=Se(this)[t].apply(this,e);return E(),n}}),e}function P(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?ge:me:t?pe:fe).get(n))return n;const o=Object(r["f"])(n);if(!e&&o&&Object(r["e"])(D,i))return Reflect.get(D,i,s);const a=Reflect.get(n,i,s);if(Object(r["k"])(i)?x.has(i):j(i))return a;if(e||T(n,"get",i),t)return a;if(Re(a)){const e=!o||!Object(r["h"])(i);return e?a.value:a}return Object(r["j"])(a)?e?_e(a):ve(a):a}}const L=U(),M=U(!0);function U(e=!1){return function(t,n,i,s){let o=t[n];if(Ee(o)&&Re(o)&&!Re(i))return!1;if(!e&&!Ee(i)&&(Te(i)||(i=Se(i),o=Se(o)),!Object(r["f"])(t)&&Re(o)&&!Re(i)))return o.value=i,!0;const a=Object(r["f"])(t)&&Object(r["h"])(n)?Number(n)<t.length:Object(r["e"])(t,n),c=Reflect.set(t,n,i,s);return t===Se(s)&&(a?Object(r["d"])(i,o)&&S(t,"set",n,i,o):S(t,"add",n,i)),c}}function V(e,t){const n=Object(r["e"])(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&S(e,"delete",t,void 0,i),s}function B(e,t){const n=Reflect.has(e,t);return Object(r["k"])(t)&&x.has(t)||T(e,"has",t),n}function q(e){return T(e,"iterate",Object(r["f"])(e)?"length":y),Reflect.ownKeys(e)}const z={get:C,set:L,deleteProperty:V,has:B,ownKeys:q},G={get:R,set(e,t){return!0},deleteProperty(e,t){return!0}},$=Object(r["c"])({},z,{get:N,set:M}),K=e=>e,H=e=>Reflect.getPrototypeOf(e);function W(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Se(e),s=Se(t);t!==s&&!n&&T(i,"get",t),!n&&T(i,"get",s);const{has:o}=H(i),a=r?K:n?xe:je;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Y(e,t=!1){const n=this["__v_raw"],r=Se(n),i=Se(e);return e!==i&&!t&&T(r,"has",e),!t&&T(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function J(e,t=!1){return e=e["__v_raw"],!t&&T(Se(e),"iterate",y),Reflect.get(e,"size",e)}function Q(e){e=Se(e);const t=Se(this),n=H(t),r=n.has.call(t,e);return r||(t.add(e),S(t,"add",e,e)),this}function X(e,t){t=Se(t);const n=Se(this),{has:i,get:s}=H(n);let o=i.call(n,e);o||(e=Se(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?Object(r["d"])(t,a)&&S(n,"set",e,t,a):S(n,"add",e,t),this}function Z(e){const t=Se(this),{has:n,get:r}=H(t);let i=n.call(t,e);i||(e=Se(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&S(t,"delete",e,void 0,s),o}function ee(){const e=Se(this),t=0!==e.size,n=void 0,r=e.clear();return t&&S(e,"clear",void 0,void 0,n),r}function te(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Se(s),a=t?K:e?xe:je;return!e&&T(o,"iterate",y),s.forEach((e,t)=>n.call(r,a(e),a(t),i))}}function ne(e,t,n){return function(...i){const s=this["__v_raw"],o=Se(s),a=Object(r["i"])(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?K:t?xe:je;return!t&&T(o,"iterate",u?b:y),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function re(e){return function(...t){return"delete"!==e&&this}}function ie(){const e={get(e){return W(this,e)},get size(){return J(this)},has:Y,add:Q,set:X,delete:Z,clear:ee,forEach:te(!1,!1)},t={get(e){return W(this,e,!1,!0)},get size(){return J(this)},has:Y,add:Q,set:X,delete:Z,clear:ee,forEach:te(!1,!0)},n={get(e){return W(this,e,!0)},get size(){return J(this,!0)},has(e){return Y.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:te(!0,!1)},r={get(e){return W(this,e,!0,!0)},get size(){return J(this,!0)},has(e){return Y.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:te(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=ne(i,!1,!1),n[i]=ne(i,!0,!1),t[i]=ne(i,!1,!0),r[i]=ne(i,!0,!0)}),[e,n,t,r]}const[se,oe,ae,ce]=ie();function ue(e,t){const n=t?e?ce:ae:e?oe:se;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["e"])(n,i)&&i in t?n:t,i,s)}const le={get:ue(!1,!1)},he={get:ue(!1,!0)},de={get:ue(!0,!1)};const fe=new WeakMap,pe=new WeakMap,me=new WeakMap,ge=new WeakMap;function ye(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function be(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ye(Object(r["m"])(e))}function ve(e){return Ee(e)?e:Ie(e,!1,z,le,fe)}function we(e){return Ie(e,!1,$,he,pe)}function _e(e){return Ie(e,!0,G,de,me)}function Ie(e,t,n,i,s){if(!Object(r["j"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=be(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Oe(e){return Ee(e)?Oe(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ee(e){return!(!e||!e["__v_isReadonly"])}function Te(e){return!(!e||!e["__v_isShallow"])}function ke(e){return Oe(e)||Ee(e)}function Se(e){const t=e&&e["__v_raw"];return t?Se(t):e}function Ae(e){return Object(r["b"])(e,"__v_skip",!0),e}const je=e=>Object(r["j"])(e)?ve(e):e,xe=e=>Object(r["j"])(e)?_e(e):e;function Ce(e){_&&g&&(e=Se(e),k(e.dep||(e.dep=a())))}function Ne(e,t){e=Se(e),e.dep&&A(e.dep)}function Re(e){return!(!e||!0!==e.__v_isRef)}function De(e){return Pe(e,!1)}function Fe(e){return Pe(e,!0)}function Pe(e,t){return Re(e)?e:new Le(e,t)}class Le{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Se(e),this._value=t?e:je(e)}get value(){return Ce(this),this._value}set value(e){e=this.__v_isShallow?e:Se(e),Object(r["d"])(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:je(e),Ne(this,e))}}function Me(e){return Re(e)?e.value:e}const Ue={get:(e,t,n)=>Me(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Re(i)&&!Re(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ve(e){return Oe(e)?e:new Proxy(e,Ue)}function Be(e){const t=Object(r["f"])(e)?new Array(e.length):{};for(const n in e)t[n]=ze(e,n);return t}class qe{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ze(e,t,n){const r=e[t];return Re(r)?r:new qe(e,t,n)}class Ge{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new v(e,()=>{this._dirty||(this._dirty=!0,Ne(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Se(this);return Ce(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function $e(e,t,n=!1){let i,s;const o=Object(r["g"])(e);o?(i=e,s=r["a"]):(i=e.get,s=e.set);const a=new Ge(i,s,o||!s,n);return a}Promise.resolve();var Ke=n("6690");function He(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Ye(s,t,n)}return i}function We(e,t,n,r){if(Object(Ke["p"])(e)){const i=He(e,t,n,r);return i&&Object(Ke["w"])(i)&&i.catch(e=>{Ye(e,t,n)}),i}const i=[];for(let s=0;s<e.length;s++)i.push(We(e[s],t,n,r));return i}function Ye(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void He(o,null,10,[e,i,s])}Je(e,n,i,r)}function Je(e,t,n,r=!0){console.error(e)}let Qe=!1,Xe=!1;const Ze=[];let et=0;const tt=[];let nt=null,rt=0;const it=[];let st=null,ot=0;const at=Promise.resolve();let ct=null,ut=null;function lt(e){const t=ct||at;return e?t.then(this?e.bind(this):e):t}function ht(e){let t=et+1,n=Ze.length;while(t<n){const r=t+n>>>1,i=wt(Ze[r]);i<e?t=r+1:n=r}return t}function dt(e){Ze.length&&Ze.includes(e,Qe&&e.allowRecurse?et+1:et)||e===ut||(null==e.id?Ze.push(e):Ze.splice(ht(e.id),0,e),ft())}function ft(){Qe||Xe||(Xe=!0,ct=at.then(_t))}function pt(e){const t=Ze.indexOf(e);t>et&&Ze.splice(t,1)}function mt(e,t,n,r){Object(Ke["n"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),ft()}function gt(e){mt(e,nt,tt,rt)}function yt(e){mt(e,st,it,ot)}function bt(e,t=null){if(tt.length){for(ut=t,nt=[...new Set(tt)],tt.length=0,rt=0;rt<nt.length;rt++)nt[rt]();nt=null,rt=0,ut=null,bt(e,t)}}function vt(e){if(it.length){const e=[...new Set(it)];if(it.length=0,st)return void st.push(...e);for(st=e,st.sort((e,t)=>wt(e)-wt(t)),ot=0;ot<st.length;ot++)st[ot]();st=null,ot=0}}const wt=e=>null==e.id?1/0:e.id;function _t(e){Xe=!1,Qe=!0,bt(e),Ze.sort((e,t)=>wt(e)-wt(t));Ke["d"];try{for(et=0;et<Ze.length;et++){const e=Ze[et];e&&!1!==e.active&&He(e,null,14)}}finally{et=0,Ze.length=0,vt(e),Qe=!1,ct=null,(Ze.length||tt.length||it.length)&&_t(e)}}new Set;new Map;function It(e,t,...n){const r=e.vnode.props||Ke["b"];let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const e=("modelValue"===o?"model":o)+"Modifiers",{number:t,trim:s}=r[e]||Ke["b"];s?i=n.map(e=>e.trim()):t&&(i=n.map(Ke["G"]))}let a;let c=r[a=Object(Ke["F"])(t)]||r[a=Object(Ke["F"])(Object(Ke["e"])(t))];!c&&s&&(c=r[a=Object(Ke["F"])(Object(Ke["l"])(t))]),c&&We(c,e,6,i);const u=r[a+"Once"];if(u){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,We(u,e,6,i)}}function Ot(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let o={},a=!1;if(!Object(Ke["p"])(e)){const r=e=>{const n=Ot(e,t,!0);n&&(a=!0,Object(Ke["h"])(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||a?(Object(Ke["n"])(s)?s.forEach(e=>o[e]=null):Object(Ke["h"])(o,s),r.set(e,o),o):(r.set(e,null),null)}function Et(e,t){return!(!e||!Object(Ke["u"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(Ke["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(Ke["k"])(e,Object(Ke["l"])(t))||Object(Ke["k"])(e,t))}let Tt=null,kt=null;function St(e){const t=Tt;return Tt=e,kt=e&&e.type.__scopeId||null,t}function At(e,t=Tt,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&xr(-1);const i=St(t),s=e(...n);return St(i),r._d&&xr(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function jt(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:m}=e;let g,y;const b=St(e);try{if(4&n.shapeFlag){const e=i||r;g=Kr(l.call(e,e,h,s,f,d,p)),y=c}else{const e=t;0,g=Kr(e.length>1?e(s,{attrs:c,slots:a,emit:u}):e(s,null)),y=t.props?c:xt(c)}}catch(w){Tr.length=0,Ye(w,e,1),g=Vr(Or)}let v=g;if(y&&!1!==m){const e=Object.keys(y),{shapeFlag:t}=v;e.length&&7&t&&(o&&e.some(Ke["s"])&&(y=Ct(y,o)),v=zr(v,y))}return n.dirs&&(v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),g=v,St(b),g}const xt=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(Ke["u"])(n))&&((t||(t={}))[n]=e[n]);return t},Ct=(e,t)=>{const n={};for(const r in e)Object(Ke["s"])(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Nt(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Rt(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?Rt(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!Et(u,n))return!0}}return!1}function Rt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Et(n,s))return!0}return!1}function Dt({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const Ft=e=>e.__isSuspense;function Pt(e,t){t&&t.pendingBranch?Object(Ke["n"])(e)?t.effects.push(...e):t.effects.push(e):yt(e)}function Lt(e,t){if(si){let n=si.provides;const r=si.parent&&si.parent.provides;r===n&&(n=si.provides=Object.create(r)),n[e]=t}else 0}function Mt(e,t,n=!1){const r=si||Tt;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Object(Ke["p"])(t)?t.call(r.proxy):t}else 0}function Ut(e,t){return qt(e,null,t)}const Vt={};function Bt(e,t,n){return qt(e,t,n)}function qt(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Ke["b"]){const a=si;let c,u,l=!1,h=!1;if(Re(e)?(c=()=>e.value,l=Te(e)):Oe(e)?(c=()=>e,r=!0):Object(Ke["n"])(e)?(h=!0,l=e.some(Oe),c=()=>e.map(e=>Re(e)?e.value:Oe(e)?$t(e):Object(Ke["p"])(e)?He(e,a,2):void 0)):c=Object(Ke["p"])(e)?t?()=>He(e,a,2):()=>{if(!a||!a.isUnmounted)return u&&u(),We(e,a,3,[d])}:Ke["d"],t&&r){const e=c;c=()=>$t(e())}let d=e=>{u=g.onStop=()=>{He(e,a,4)}};if(di)return d=Ke["d"],t?n&&We(t,a,3,[c(),h?[]:void 0,d]):c(),Ke["d"];let f=h?[]:Vt;const p=()=>{if(g.active)if(t){const e=g.run();(r||l||(h?e.some((e,t)=>Object(Ke["j"])(e,f[t])):Object(Ke["j"])(e,f)))&&(u&&u(),We(t,a,3,[e,f===Vt?void 0:f,d]),f=e)}else g.run()};let m;p.allowRecurse=!!t,m="sync"===i?p:"post"===i?()=>cr(p,a&&a.suspense):()=>{!a||a.isMounted?gt(p):p()};const g=new v(c,m);return t?n?p():f=g.run():"post"===i?cr(g.run.bind(g),a&&a.suspense):g.run(),()=>{g.stop(),a&&a.scope&&Object(Ke["D"])(a.scope.effects,g)}}function zt(e,t,n){const r=this.proxy,i=Object(Ke["z"])(e)?e.includes(".")?Gt(r,e):()=>r[e]:e.bind(r,r);let s;Object(Ke["p"])(t)?s=t:(s=t.handler,n=t);const o=si;ai(this);const a=qt(i,s.bind(r),n);return o?ai(o):ci(),a}function Gt(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function $t(e,t){if(!Object(Ke["t"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),Re(e))$t(e.value,t);else if(Object(Ke["n"])(e))for(let n=0;n<e.length;n++)$t(e[n],t);else if(Object(Ke["y"])(e)||Object(Ke["r"])(e))e.forEach(e=>{$t(e,t)});else if(Object(Ke["v"])(e))for(const n in e)$t(e[n],t);return e}function Kt(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gn(()=>{e.isMounted=!0}),vn(()=>{e.isUnmounting=!0}),e}const Ht=[Function,Array],Wt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ht,onEnter:Ht,onAfterEnter:Ht,onEnterCancelled:Ht,onBeforeLeave:Ht,onLeave:Ht,onAfterLeave:Ht,onLeaveCancelled:Ht,onBeforeAppear:Ht,onAppear:Ht,onAfterAppear:Ht,onAppearCancelled:Ht},setup(e,{slots:t}){const n=oi(),r=Kt();let i;return()=>{const s=t.default&&tn(t.default(),!0);if(!s||!s.length)return;const o=Se(e),{mode:a}=o;const c=s[0];if(r.isLeaving)return Xt(c);const u=Zt(c);if(!u)return Xt(c);const l=Qt(u,o,r,n);en(u,l);const h=n.subTree,d=h&&Zt(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,f=!0)}if(d&&d.type!==Or&&(!Fr(u,d)||f)){const e=Qt(d,o,r,n);if(en(d,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},Xt(c);"in-out"===a&&u.type!==Or&&(e.delayLeave=(e,t,n)=>{const i=Jt(r,d);i[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},Yt=Wt;function Jt(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Qt(e,t,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:g,onAfterAppear:y,onAppearCancelled:b}=t,v=String(e.key),w=Jt(n,e),_=(e,t)=>{e&&We(e,r,9,t)},I={mode:s,persisted:o,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=m||a}t._leaveCb&&t._leaveCb(!0);const s=w[v];s&&Fr(e,s)&&s.el._leaveCb&&s.el._leaveCb(),_(r,[t])},enter(e){let t=c,r=u,s=l;if(!n.isMounted){if(!i)return;t=g||c,r=y||u,s=b||l}let o=!1;const a=e._enterCb=t=>{o||(o=!0,_(t?s:r,[e]),I.delayedLeave&&I.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();_(h,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),_(n?p:f,[t]),t._leaveCb=void 0,w[i]===e&&delete w[i])};w[i]=e,d?(d(t,o),d.length<=1&&o()):o()},clone(e){return Qt(e,t,n,r)}};return I}function Xt(e){if(sn(e))return e=zr(e),e.children=null,e}function Zt(e){return sn(e)?e.children?e.children[0]:void 0:e}function en(e,t){6&e.shapeFlag&&e.component?en(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function tn(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const s=e[i];s.type===_r?(128&s.patchFlag&&r++,n=n.concat(tn(s.children,t))):(t||s.type!==Or)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function nn(e){return Object(Ke["p"])(e)?{setup:e,name:e.name}:e}const rn=e=>!!e.type.__asyncLoader;const sn=e=>e.type.__isKeepAlive;RegExp,RegExp;function on(e,t){return Object(Ke["n"])(e)?e.some(e=>on(e,t)):Object(Ke["z"])(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function an(e,t){un(e,"a",t)}function cn(e,t){un(e,"da",t)}function un(e,t,n=si){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(fn(t,r,n),n){let e=n.parent;while(e&&e.parent)sn(e.parent.vnode)&&ln(r,t,n,e),e=e.parent}}function ln(e,t,n,r){const i=fn(t,e,r,!0);wn(()=>{Object(Ke["D"])(r[t],i)},n)}function hn(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function dn(e){return 128&e.shapeFlag?e.ssContent:e}function fn(e,t,n=si,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;O(),ai(n);const i=We(t,n,e,r);return ci(),E(),i});return r?i.unshift(s):i.push(s),s}}const pn=e=>(t,n=si)=>(!di||"sp"===e)&&fn(e,t,n),mn=pn("bm"),gn=pn("m"),yn=pn("bu"),bn=pn("u"),vn=pn("bum"),wn=pn("um"),_n=pn("sp"),In=pn("rtg"),On=pn("rtc");function En(e,t=si){fn("ec",e,t)}let Tn=!0;function kn(e){const t=xn(e),n=e.proxy,r=e.ctx;Tn=!1,t.beforeCreate&&An(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:m,deactivated:g,beforeDestroy:y,beforeUnmount:b,destroyed:v,unmounted:w,render:_,renderTracked:I,renderTriggered:O,errorCaptured:E,serverPrefetch:T,expose:k,inheritAttrs:S,components:A,directives:j,filters:x}=t,C=null;if(u&&Sn(u,r,C,e.appContext.config.unwrapInjectedRef),o)for(const R in o){const e=o[R];Object(Ke["p"])(e)&&(r[R]=e.bind(n))}if(i){0;const t=i.call(n,n);0,Object(Ke["t"])(t)&&(e.data=ve(t))}if(Tn=!0,s)for(const R in s){const e=s[R],t=Object(Ke["p"])(e)?e.bind(n,n):Object(Ke["p"])(e.get)?e.get.bind(n,n):Ke["d"];0;const i=!Object(Ke["p"])(e)&&Object(Ke["p"])(e.set)?e.set.bind(n):Ke["d"],o=Ii({get:t,set:i});Object.defineProperty(r,R,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e})}if(a)for(const R in a)jn(a[R],r,n,R);if(c){const e=Object(Ke["p"])(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{Lt(t,e[t])})}function N(e,t){Object(Ke["n"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(l&&An(l,e,"c"),N(mn,h),N(gn,d),N(yn,f),N(bn,p),N(an,m),N(cn,g),N(En,E),N(On,I),N(In,O),N(vn,b),N(wn,w),N(_n,T),Object(Ke["n"])(k))if(k.length){const t=e.exposed||(e.exposed={});k.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});_&&e.render===Ke["d"]&&(e.render=_),null!=S&&(e.inheritAttrs=S),A&&(e.components=A),j&&(e.directives=j)}function Sn(e,t,n=Ke["d"],r=!1){Object(Ke["n"])(e)&&(e=Fn(e));for(const i in e){const n=e[i];let s;s=Object(Ke["t"])(n)?"default"in n?Mt(n.from||i,n.default,!0):Mt(n.from||i):Mt(n),Re(s)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[i]=s}}function An(e,t,n){We(Object(Ke["n"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function jn(e,t,n,r){const i=r.includes(".")?Gt(n,r):()=>n[r];if(Object(Ke["z"])(e)){const n=t[e];Object(Ke["p"])(n)&&Bt(i,n)}else if(Object(Ke["p"])(e))Bt(i,e.bind(n));else if(Object(Ke["t"])(e))if(Object(Ke["n"])(e))e.forEach(e=>jn(e,t,n,r));else{const r=Object(Ke["p"])(e.handler)?e.handler.bind(n):t[e.handler];Object(Ke["p"])(r)&&Bt(i,r,e)}else 0}function xn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(e=>Cn(c,e,o,!0)),Cn(c,t,o)):c=t,s.set(t,c),c}function Cn(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Cn(e,s,n,!0),i&&i.forEach(t=>Cn(e,t,n,!0));for(const o in t)if(r&&"expose"===o);else{const r=Nn[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Nn={data:Rn,props:Ln,emits:Ln,methods:Ln,computed:Ln,beforeCreate:Pn,created:Pn,beforeMount:Pn,mounted:Pn,beforeUpdate:Pn,updated:Pn,beforeDestroy:Pn,beforeUnmount:Pn,destroyed:Pn,unmounted:Pn,activated:Pn,deactivated:Pn,errorCaptured:Pn,serverPrefetch:Pn,components:Ln,directives:Ln,watch:Mn,provide:Rn,inject:Dn};function Rn(e,t){return t?e?function(){return Object(Ke["h"])(Object(Ke["p"])(e)?e.call(this,this):e,Object(Ke["p"])(t)?t.call(this,this):t)}:t:e}function Dn(e,t){return Ln(Fn(e),Fn(t))}function Fn(e){if(Object(Ke["n"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Pn(e,t){return e?[...new Set([].concat(e,t))]:t}function Ln(e,t){return e?Object(Ke["h"])(Object(Ke["h"])(Object.create(null),e),t):t}function Mn(e,t){if(!e)return t;if(!t)return e;const n=Object(Ke["h"])(Object.create(null),e);for(const r in t)n[r]=Pn(e[r],t[r]);return n}function Un(e,t,n,r=!1){const i={},s={};Object(Ke["g"])(s,Pr,1),e.propsDefaults=Object.create(null),Bn(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:we(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Vn(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=Se(i),[c]=e.propsOptions;let u=!1;if(!(r||o>0)||16&o){let r;Bn(e,t,i,s)&&(u=!0);for(const s in a)t&&(Object(Ke["k"])(t,s)||(r=Object(Ke["l"])(s))!==s&&Object(Ke["k"])(t,r))||(c?!n||void 0===n[s]&&void 0===n[r]||(i[s]=qn(c,a,s,void 0,e,!0)):delete i[s]);if(s!==a)for(const e in s)t&&Object(Ke["k"])(t,e)||(delete s[e],u=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];const l=t[o];if(c)if(Object(Ke["k"])(s,o))l!==s[o]&&(s[o]=l,u=!0);else{const t=Object(Ke["e"])(o);i[t]=qn(c,a,t,l,e,!1)}else l!==s[o]&&(s[o]=l,u=!0)}}u&&S(e,"set","$attrs")}function Bn(e,t,n,r){const[i,s]=e.propsOptions;let o,a=!1;if(t)for(let c in t){if(Object(Ke["x"])(c))continue;const u=t[c];let l;i&&Object(Ke["k"])(i,l=Object(Ke["e"])(c))?s&&s.includes(l)?(o||(o={}))[l]=u:n[l]=u:Et(e.emitsOptions,c)||c in r&&u===r[c]||(r[c]=u,a=!0)}if(s){const t=Se(n),r=o||Ke["b"];for(let o=0;o<s.length;o++){const a=s[o];n[a]=qn(i,t,a,r[a],e,!Object(Ke["k"])(r,a))}}return a}function qn(e,t,n,r,i,s){const o=e[n];if(null!=o){const e=Object(Ke["k"])(o,"default");if(e&&void 0===r){const e=o.default;if(o.type!==Function&&Object(Ke["p"])(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(ai(i),r=s[n]=e.call(null,t),ci())}else r=e}o[0]&&(s&&!e?r=!1:!o[1]||""!==r&&r!==Object(Ke["l"])(n)||(r=!0))}return r}function zn(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let c=!1;if(!Object(Ke["p"])(e)){const r=e=>{c=!0;const[n,r]=zn(e,t,!0);Object(Ke["h"])(o,n),r&&a.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!c)return r.set(e,Ke["a"]),Ke["a"];if(Object(Ke["n"])(s))for(let l=0;l<s.length;l++){0;const e=Object(Ke["e"])(s[l]);Gn(e)&&(o[e]=Ke["b"])}else if(s){0;for(const e in s){const t=Object(Ke["e"])(e);if(Gn(t)){const n=s[e],r=o[t]=Object(Ke["n"])(n)||Object(Ke["p"])(n)?{type:n}:n;if(r){const e=Hn(Boolean,r.type),n=Hn(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||Object(Ke["k"])(r,"default"))&&a.push(t)}}}}const u=[o,a];return r.set(e,u),u}function Gn(e){return"$"!==e[0]}function $n(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Kn(e,t){return $n(e)===$n(t)}function Hn(e,t){return Object(Ke["n"])(t)?t.findIndex(t=>Kn(t,e)):Object(Ke["p"])(t)&&Kn(t,e)?0:-1}const Wn=e=>"_"===e[0]||"$stable"===e,Yn=e=>Object(Ke["n"])(e)?e.map(Kr):[Kr(e)],Jn=(e,t,n)=>{const r=At((...e)=>Yn(t(...e)),n);return r._c=!1,r},Qn=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Wn(i))continue;const n=e[i];if(Object(Ke["p"])(n))t[i]=Jn(i,n,r);else if(null!=n){0;const e=Yn(n);t[i]=()=>e}}},Xn=(e,t)=>{const n=Yn(t);e.slots.default=()=>n},Zn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Se(t),Object(Ke["g"])(t,"_",n)):Qn(t,e.slots={})}else e.slots={},t&&Xn(e,t);Object(Ke["g"])(e.slots,Pr,1)},er=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=Ke["b"];if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:(Object(Ke["h"])(i,t),n||1!==e||delete i._):(s=!t.$stable,Qn(t,i)),o=t}else t&&(Xn(e,t),o={default:1});if(s)for(const a in i)Wn(a)||a in o||delete i[a]};function tr(e,t){const n=Tt;if(null===n)return e;const r=n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,o,a=Ke["b"]]=t[s];Object(Ke["p"])(e)&&(e={mounted:e,updated:e}),e.deep&&$t(n),i.push({dir:e,instance:r,value:n,oldValue:void 0,arg:o,modifiers:a})}return e}function nr(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(O(),We(c,n,8,[e.el,a,e,t]),E())}}function rr(){return{app:null,config:{isNativeTag:Ke["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ir=0;function sr(e,t){return function(n,r=null){null==r||Object(Ke["t"])(r)||(r=null);const i=rr(),s=new Set;let o=!1;const a=i.app={_uid:ir++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Ei,get config(){return i.config},set config(e){0},use(e,...t){return s.has(e)||(e&&Object(Ke["p"])(e.install)?(s.add(e),e.install(a,...t)):Object(Ke["p"])(e)&&(s.add(e),e(a,...t))),a},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),a},component(e,t){return t?(i.components[e]=t,a):i.components[e]},directive(e,t){return t?(i.directives[e]=t,a):i.directives[e]},mount(s,c,u){if(!o){const l=Vr(n,r);return l.appContext=i,c&&t?t(l,s):e(l,s,u),o=!0,a._container=s,s.__vue_app__=a,vi(l.component)||l.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide(e,t){return i.provides[e]=t,a}};return a}}function or(e,t,n,r,i=!1){if(Object(Ke["n"])(e))return void e.forEach((e,s)=>or(e,t&&(Object(Ke["n"])(t)?t[s]:t),n,r,i));if(rn(r)&&!i)return;const s=4&r.shapeFlag?vi(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=e;const u=t&&t.r,l=a.refs===Ke["b"]?a.refs={}:a.refs,h=a.setupState;if(null!=u&&u!==c&&(Object(Ke["z"])(u)?(l[u]=null,Object(Ke["k"])(h,u)&&(h[u]=null)):Re(u)&&(u.value=null)),Object(Ke["p"])(c))He(c,a,12,[o,l]);else{const t=Object(Ke["z"])(c),r=Re(c);if(t||r){const r=()=>{if(e.f){const n=t?l[c]:c.value;i?Object(Ke["n"])(n)&&Object(Ke["D"])(n,s):Object(Ke["n"])(n)?n.includes(s)||n.push(s):t?l[c]=[s]:(c.value=[s],e.k&&(l[e.k]=c.value))}else t?(l[c]=o,Object(Ke["k"])(h,c)&&(h[c]=o)):Re(c)&&(c.value=o,e.k&&(l[e.k]=o))};o?(r.id=-1,cr(r,n)):r()}else 0}}function ar(){}const cr=Pt;function ur(e){return lr(e)}function lr(e,t){ar();const n=Object(Ke["i"])();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=Ke["d"],cloneNode:p,insertStaticContent:m}=e,g=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Fr(e,t)&&(r=H(e),q(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Ir:y(e,t,n,r);break;case Or:b(e,t,n,r);break;case Er:null==e&&w(t,n,r,o);break;case _r:N(e,t,n,r,i,s,o,a,c);break;default:1&h?T(e,t,n,r,i,s,o,a,c):6&h?R(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,Y)}null!=l&&i&&or(l,e&&e.ref,s,t||e,!t)},y=(e,t,n,i)=>{if(null==e)r(t.el=a(t.children),n,i);else{const n=t.el=e.el;t.children!==e.children&&u(n,t.children)}},b=(e,t,n,i)=>{null==e?r(t.el=c(t.children||""),n,i):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},_=({el:e,anchor:t},n,i)=>{let s;while(e&&e!==t)s=d(e),r(e,n,i),e=s;r(t,n,i)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=d(e),i(e),e=n;i(t)},T=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?k(t,n,r,i,s,o,a,c):j(e,t,i,s,o,a,c)},k=(e,t,n,i,a,c,u,h)=>{let d,f;const{type:m,props:g,shapeFlag:y,transition:b,patchFlag:v,dirs:w}=e;if(e.el&&void 0!==p&&-1===v)d=e.el=p(e.el);else{if(d=e.el=o(e.type,c,g&&g.is,g),8&y?l(d,e.children):16&y&&A(e.children,d,null,i,a,c&&"foreignObject"!==m,u,h),w&&nr(e,null,i,"created"),g){for(const t in g)"value"===t||Object(Ke["x"])(t)||s(d,t,null,g[t],c,e.children,i,a,K);"value"in g&&s(d,"value",null,g.value),(f=g.onVnodeBeforeMount)&&Jr(f,i,e)}S(d,e,e.scopeId,u,i)}w&&nr(e,null,i,"beforeMount");const _=(!a||a&&!a.pendingBranch)&&b&&!b.persisted;_&&b.beforeEnter(d),r(d,t,n),((f=g&&g.onVnodeMounted)||_||w)&&cr(()=>{f&&Jr(f,i,e),_&&b.enter(d),w&&nr(e,null,i,"mounted")},a)},S=(e,t,n,r,i)=>{if(n&&f(e,n),r)for(let s=0;s<r.length;s++)f(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;S(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},A=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?Hr(e[u]):Kr(e[u]);g(null,c,t,n,r,i,s,o,a)}},j=(e,t,n,r,i,o,a)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:d}=t;u|=16&e.patchFlag;const f=e.props||Ke["b"],p=t.props||Ke["b"];let m;n&&hr(n,!1),(m=p.onVnodeBeforeUpdate)&&Jr(m,n,t,e),d&&nr(t,e,n,"beforeUpdate"),n&&hr(n,!0);const g=i&&"foreignObject"!==t.type;if(h?x(e.dynamicChildren,h,c,n,r,g,o):a||M(e,t,c,null,n,r,g,o,!1),u>0){if(16&u)C(c,t,f,p,n,r,i);else if(2&u&&f.class!==p.class&&s(c,"class",null,p.class,i),4&u&&s(c,"style",f.style,p.style,i),8&u){const o=t.dynamicProps;for(let t=0;t<o.length;t++){const a=o[t],u=f[a],l=p[a];l===u&&"value"!==a||s(c,a,u,l,i,e.children,n,r,K)}}1&u&&e.children!==t.children&&l(c,t.children)}else a||null!=h||C(c,t,f,p,n,r,i);((m=p.onVnodeUpdated)||d)&&cr(()=>{m&&Jr(m,n,t,e),d&&nr(t,e,n,"updated")},r)},x=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===_r||!Fr(c,u)||70&c.shapeFlag)?h(c.el):n;g(c,u,l,null,r,i,s,o,!0)}},C=(e,t,n,r,i,o,a)=>{if(n!==r){for(const c in r){if(Object(Ke["x"])(c))continue;const u=r[c],l=n[c];u!==l&&"value"!==c&&s(e,c,l,u,a,t.children,i,o,K)}if(n!==Ke["b"])for(const c in n)Object(Ke["x"])(c)||c in r||s(e,c,n[c],null,a,t.children,i,o,K);"value"in r&&s(e,"value",n.value,r.value)}},N=(e,t,n,i,s,o,c,u,l)=>{const h=t.el=e?e.el:a(""),d=t.anchor=e?e.anchor:a("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(u=u?u.concat(m):m),null==e?(r(h,n,i),r(d,n,i),A(t.children,n,d,s,o,c,u,l)):f>0&&64&f&&p&&e.dynamicChildren?(x(e.dynamicChildren,p,n,s,o,c,u),(null!=t.key||s&&t===s.subTree)&&dr(e,t,!0)):M(e,t,n,d,s,o,c,u,l)},R=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):D(t,n,r,i,s,o,c):F(e,t,c)},D=(e,t,n,r,i,s,o)=>{const a=e.component=ii(e,r,i);if(sn(e)&&(a.ctx.renderer=Y),fi(a),a.asyncDep){if(i&&i.registerDep(a,P),!e.el){const e=a.subTree=Vr(Or);b(null,e,t,n)}}else P(a,e,t,n,i,s,o)},F=(e,t,n)=>{const r=t.component=e.component;if(Nt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void L(r,t,n);r.next=t,pt(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},P=(e,t,n,r,i,s,o)=>{const a=()=>{if(e.isMounted){let t,{next:n,bu:r,u:a,parent:c,vnode:u}=e,l=n;0,hr(e,!1),n?(n.el=u.el,L(e,n,o)):n=u,r&&Object(Ke["m"])(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Jr(t,c,n,u),hr(e,!0);const d=jt(e);0;const f=e.subTree;e.subTree=d,g(f,d,h(f.el),H(f),e,i,s),n.el=d.el,null===l&&Dt(e,d.el),a&&cr(a,i),(t=n.props&&n.props.onVnodeUpdated)&&cr(()=>Jr(t,c,n,u),i)}else{let o;const{el:a,props:c}=t,{bm:u,m:l,parent:h}=e,d=rn(t);if(hr(e,!1),u&&Object(Ke["m"])(u),!d&&(o=c&&c.onVnodeBeforeMount)&&Jr(o,h,t),hr(e,!0),a&&Q){const n=()=>{e.subTree=jt(e),Q(a,e.subTree,e,i,null)};d?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const o=e.subTree=jt(e);0,g(null,o,n,r,e,i,s),t.el=o.el}if(l&&cr(l,i),!d&&(o=c&&c.onVnodeMounted)){const e=t;cr(()=>Jr(o,h,e),i)}256&t.shapeFlag&&e.a&&cr(e.a,i),e.isMounted=!0,t=n=r=null}},c=e.effect=new v(a,()=>dt(e.update),e.scope),u=e.update=c.run.bind(c);u.id=e.uid,hr(e,!0),u()},L=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,Vn(e,t.props,r,n),er(e,t.children,n),O(),bt(void 0,e.update),E()},M=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,h=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void V(u,d,n,r,i,s,o,a,c);if(256&f)return void U(u,d,n,r,i,s,o,a,c)}8&p?(16&h&&K(u,i,s),d!==u&&l(n,d)):16&h?16&p?V(u,d,n,r,i,s,o,a,c):K(u,i,s,!0):(8&h&&l(n,""),16&p&&A(d,n,r,i,s,o,a,c))},U=(e,t,n,r,i,s,o,a,c)=>{e=e||Ke["a"],t=t||Ke["a"];const u=e.length,l=t.length,h=Math.min(u,l);let d;for(d=0;d<h;d++){const r=t[d]=c?Hr(t[d]):Kr(t[d]);g(e[d],r,n,null,i,s,o,a,c)}u>l?K(e,i,s,!0,!1,h):A(t,n,r,i,s,o,a,c,h)},V=(e,t,n,r,i,s,o,a,c)=>{let u=0;const l=t.length;let h=e.length-1,d=l-1;while(u<=h&&u<=d){const r=e[u],l=t[u]=c?Hr(t[u]):Kr(t[u]);if(!Fr(r,l))break;g(r,l,n,null,i,s,o,a,c),u++}while(u<=h&&u<=d){const r=e[h],u=t[d]=c?Hr(t[d]):Kr(t[d]);if(!Fr(r,u))break;g(r,u,n,null,i,s,o,a,c),h--,d--}if(u>h){if(u<=d){const e=d+1,h=e<l?t[e].el:r;while(u<=d)g(null,t[u]=c?Hr(t[u]):Kr(t[u]),n,h,i,s,o,a,c),u++}}else if(u>d)while(u<=h)q(e[u],i,s,!0),u++;else{const f=u,p=u,m=new Map;for(u=p;u<=d;u++){const e=t[u]=c?Hr(t[u]):Kr(t[u]);null!=e.key&&m.set(e.key,u)}let y,b=0;const v=d-p+1;let w=!1,_=0;const I=new Array(v);for(u=0;u<v;u++)I[u]=0;for(u=f;u<=h;u++){const r=e[u];if(b>=v){q(r,i,s,!0);continue}let l;if(null!=r.key)l=m.get(r.key);else for(y=p;y<=d;y++)if(0===I[y-p]&&Fr(r,t[y])){l=y;break}void 0===l?q(r,i,s,!0):(I[l-p]=u+1,l>=_?_=l:w=!0,g(r,t[l],n,null,i,s,o,a,c),b++)}const O=w?fr(I):Ke["a"];for(y=O.length-1,u=v-1;u>=0;u--){const e=p+u,h=t[e],d=e+1<l?t[e+1].el:r;0===I[u]?g(null,h,n,d,i,s,o,a,c):w&&(y<0||u!==O[y]?B(h,n,d,2):y--)}}},B=(e,t,n,i,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void B(e.component.subTree,t,n,i);if(128&l)return void e.suspense.move(t,n,i);if(64&l)return void a.move(e,t,n,Y);if(a===_r){r(o,t,n);for(let e=0;e<u.length;e++)B(u[e],t,n,i);return void r(e.anchor,t,n)}if(a===Er)return void _(e,t,n);const h=2!==i&&1&l&&c;if(h)if(0===i)c.beforeEnter(o),r(o,t,n),cr(()=>c.enter(o),s);else{const{leave:e,delayLeave:i,afterLeave:s}=c,a=()=>r(o,t,n),u=()=>{e(o,()=>{a(),s&&s()})};i?i(o,a,u):u()}else r(o,t,n)},q=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&or(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!rn(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&Jr(m,t,e),6&l)$(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&nr(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,Y,r):u&&(s!==_r||h>0&&64&h)?K(u,t,n,!1,!0):(s===_r&&384&h||!i&&16&l)&&K(c,t,n),r&&z(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&cr(()=>{m&&Jr(m,t,e),f&&nr(e,null,t,"unmounted")},n)},z=e=>{const{type:t,el:n,anchor:r,transition:s}=e;if(t===_r)return void G(n,r);if(t===Er)return void I(e);const o=()=>{i(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},G=(e,t)=>{let n;while(e!==t)n=d(e),i(e),e=n;i(t)},$=(e,t,n)=>{const{bum:r,scope:i,update:s,subTree:o,um:a}=e;r&&Object(Ke["m"])(r),i.stop(),s&&(s.active=!1,q(o,e,t,n)),a&&cr(a,t),cr(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},K=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)q(e[o],t,n,r,i)},H=e=>6&e.shapeFlag?H(e.component.subTree):128&e.shapeFlag?e.suspense.next():d(e.anchor||e.el),W=(e,t,n)=>{null==e?t._vnode&&q(t._vnode,null,null,!0):g(t._vnode||null,e,t,null,null,null,n),vt(),t._vnode=e},Y={p:g,um:q,m:B,r:z,mt:D,mc:A,pc:M,pbc:x,n:H,o:e};let J,Q;return t&&([J,Q]=t(Y)),{render:W,hydrate:J,createApp:sr(W,J)}}function hr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function dr(e,t,n=!1){const r=e.children,i=t.children;if(Object(Ke["n"])(r)&&Object(Ke["n"])(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=Hr(i[s]),t.el=e.el),n||dr(e,t))}}function fr(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const pr=e=>e.__isTeleport;const mr="components";function gr(e,t){return vr(mr,e,!0,t)||e}const yr=Symbol();function br(e){return Object(Ke["z"])(e)?vr(mr,e,!1)||e:e||yr}function vr(e,t,n=!0,r=!1){const i=Tt||si;if(i){const n=i.type;if(e===mr){const e=wi(n);if(e&&(e===t||e===Object(Ke["e"])(t)||e===Object(Ke["f"])(Object(Ke["e"])(t))))return n}const s=wr(i[e]||n[e],t)||wr(i.appContext[e],t);return!s&&r?n:s}}function wr(e,t){return e&&(e[t]||e[Object(Ke["e"])(t)]||e[Object(Ke["f"])(Object(Ke["e"])(t))])}const _r=Symbol(void 0),Ir=Symbol(void 0),Or=Symbol(void 0),Er=Symbol(void 0),Tr=[];let kr=null;function Sr(e=!1){Tr.push(kr=e?null:[])}function Ar(){Tr.pop(),kr=Tr[Tr.length-1]||null}let jr=1;function xr(e){jr+=e}function Cr(e){return e.dynamicChildren=jr>0?kr||Ke["a"]:null,Ar(),jr>0&&kr&&kr.push(e),e}function Nr(e,t,n,r,i,s){return Cr(Ur(e,t,n,r,i,s,!0))}function Rr(e,t,n,r,i){return Cr(Vr(e,t,n,r,i,!0))}function Dr(e){return!!e&&!0===e.__v_isVNode}function Fr(e,t){return e.type===t.type&&e.key===t.key}const Pr="__vInternal",Lr=({key:e})=>null!=e?e:null,Mr=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(Ke["z"])(e)||Re(e)||Object(Ke["p"])(e)?{i:Tt,r:e,k:t,f:!!n}:e:null;function Ur(e,t=null,n=null,r=0,i=null,s=(e===_r?0:1),o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Lr(t),ref:t&&Mr(t),scopeId:kt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Wr(c,n),128&s&&e.normalize(c)):n&&(c.shapeFlag|=Object(Ke["z"])(n)?8:16),jr>0&&!o&&kr&&(c.patchFlag>0||6&s)&&32!==c.patchFlag&&kr.push(c),c}const Vr=Br;function Br(e,t=null,n=null,r=0,i=null,s=!1){if(e&&e!==yr||(e=Or),Dr(e)){const r=zr(e,t,!0);return n&&Wr(r,n),r}if(_i(e)&&(e=e.__vccOpts),t){t=qr(t);let{class:e,style:n}=t;e&&!Object(Ke["z"])(e)&&(t.class=Object(Ke["B"])(e)),Object(Ke["t"])(n)&&(ke(n)&&!Object(Ke["n"])(n)&&(n=Object(Ke["h"])({},n)),t.style=Object(Ke["C"])(n))}const o=Object(Ke["z"])(e)?1:Ft(e)?128:pr(e)?64:Object(Ke["t"])(e)?4:Object(Ke["p"])(e)?2:0;return Ur(e,t,n,r,i,o,s,!0)}function qr(e){return e?ke(e)||Pr in e?Object(Ke["h"])({},e):e:null}function zr(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=e,a=t?Yr(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Lr(a),ref:t&&t.ref?n&&i?Object(Ke["n"])(i)?i.concat(Mr(t)):[i,Mr(t)]:Mr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_r?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&zr(e.ssContent),ssFallback:e.ssFallback&&zr(e.ssFallback),el:e.el,anchor:e.anchor};return c}function Gr(e=" ",t=0){return Vr(Ir,null,e,t)}function $r(e="",t=!1){return t?(Sr(),Rr(Or,null,e)):Vr(Or,null,e)}function Kr(e){return null==e||"boolean"===typeof e?Vr(Or):Object(Ke["n"])(e)?Vr(_r,null,e.slice()):"object"===typeof e?Hr(e):Vr(Ir,null,String(e))}function Hr(e){return null===e.el||e.memo?e:zr(e)}function Wr(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(Object(Ke["n"])(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Wr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Pr in t?3===r&&Tt&&(1===Tt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Tt}}else Object(Ke["p"])(t)?(t={default:t,_ctx:Tt},n=32):(t=String(t),64&r?(n=16,t=[Gr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Yr(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=Object(Ke["B"])([t.class,r.class]));else if("style"===e)t.style=Object(Ke["C"])([t.style,r.style]);else if(Object(Ke["u"])(e)){const n=t[e],i=r[e];!i||n===i||Object(Ke["n"])(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}function Jr(e,t,n,r=null){We(e,t,7,[n,r])}function Qr(e,t,n={},r,i){if(Tt.isCE)return Vr("slot","default"===t?null:{name:t},r&&r());let s=e[t];s&&s._c&&(s._d=!1),Sr();const o=s&&Xr(s(n)),a=Rr(_r,{key:n.key||"_"+t},o||(r?r():[]),o&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Xr(e){return e.some(e=>!Dr(e)||e.type!==Or&&!(e.type===_r&&!Xr(e.children)))?e:null}const Zr=e=>e?ui(e)?vi(e)||e.proxy:Zr(e.parent):null,ei=Object(Ke["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Zr(e.parent),$root:e=>Zr(e.root),$emit:e=>e.emit,$options:e=>xn(e),$forceUpdate:e=>()=>dt(e.update),$nextTick:e=>lt.bind(e.proxy),$watch:e=>zt.bind(e)}),ti={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=e;let u;if("$"!==t[0]){const a=o[t];if(void 0!==a)switch(a){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(r!==Ke["b"]&&Object(Ke["k"])(r,t))return o[t]=1,r[t];if(i!==Ke["b"]&&Object(Ke["k"])(i,t))return o[t]=2,i[t];if((u=e.propsOptions[0])&&Object(Ke["k"])(u,t))return o[t]=3,s[t];if(n!==Ke["b"]&&Object(Ke["k"])(n,t))return o[t]=4,n[t];Tn&&(o[t]=0)}}const l=ei[t];let h,d;return l?("$attrs"===t&&T(e,"get",t),l(e)):(h=a.__cssModules)&&(h=h[t])?h:n!==Ke["b"]&&Object(Ke["k"])(n,t)?(o[t]=4,n[t]):(d=c.config.globalProperties,Object(Ke["k"])(d,t)?d[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return i!==Ke["b"]&&Object(Ke["k"])(i,t)?(i[t]=n,!0):r!==Ke["b"]&&Object(Ke["k"])(r,t)?(r[t]=n,!0):!Object(Ke["k"])(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||e!==Ke["b"]&&Object(Ke["k"])(e,o)||t!==Ke["b"]&&Object(Ke["k"])(t,o)||(a=s[0])&&Object(Ke["k"])(a,o)||Object(Ke["k"])(r,o)||Object(Ke["k"])(ei,o)||Object(Ke["k"])(i.config.globalProperties,o)},defineProperty(e,t,n){return null!=n.get?this.set(e,t,n.get(),null):null!=n.value&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const ni=rr();let ri=0;function ii(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||ni,o={uid:ri++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zn(r,i),emitsOptions:Ot(r,i),emit:null,emitted:null,propsDefaults:Ke["b"],inheritAttrs:r.inheritAttrs,ctx:Ke["b"],data:Ke["b"],props:Ke["b"],attrs:Ke["b"],slots:Ke["b"],refs:Ke["b"],setupState:Ke["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=It.bind(null,o),e.ce&&e.ce(o),o}let si=null;const oi=()=>si||Tt,ai=e=>{si=e,e.scope.on()},ci=()=>{si&&si.scope.off(),si=null};function ui(e){return 4&e.vnode.shapeFlag}let li,hi,di=!1;function fi(e,t=!1){di=t;const{props:n,children:r}=e.vnode,i=ui(e);Un(e,n,i,t),Zn(e,r);const s=i?pi(e,t):void 0;return di=!1,s}function pi(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ae(new Proxy(e.ctx,ti));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?bi(e):null;ai(e),O();const i=He(r,e,0,[e.props,n]);if(E(),ci(),Object(Ke["w"])(i)){if(i.then(ci,ci),t)return i.then(n=>{mi(e,n,t)}).catch(t=>{Ye(t,e,0)});e.asyncDep=i}else mi(e,i,t)}else gi(e,t)}function mi(e,t,n){Object(Ke["p"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(Ke["t"])(t)&&(e.setupState=Ve(t)),gi(e,n)}function gi(e,t,n){const r=e.type;if(!e.render){if(!t&&li&&!r.render){const t=r.template;if(t){0;const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:s,compilerOptions:o}=r,a=Object(Ke["h"])(Object(Ke["h"])({isCustomElement:n,delimiters:s},i),o);r.render=li(t,a)}}e.render=r.render||Ke["d"],hi&&hi(e)}ai(e),O(),kn(e),E(),ci()}function yi(e){return new Proxy(e.attrs,{get(t,n){return T(e,"get","$attrs"),t[n]}})}function bi(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=yi(e))},slots:e.slots,emit:e.emit,expose:t}}function vi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ve(Ae(e.exposed)),{get(t,n){return n in t?t[n]:n in ei?ei[n](e):void 0}}))}function wi(e){return Object(Ke["p"])(e)&&e.displayName||e.name}function _i(e){return Object(Ke["p"])(e)&&"__vccOpts"in e}const Ii=(e,t)=>$e(e,t,di);function Oi(e,t,n){const r=arguments.length;return 2===r?Object(Ke["t"])(t)&&!Object(Ke["n"])(t)?Dr(t)?Vr(e,null,[t]):Vr(e,t):Vr(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Dr(n)&&(n=[n]),Vr(e,t,n))}Symbol("");const Ei="3.2.31";var Ti=n("3bfd");const ki="http://www.w3.org/2000/svg",Si="undefined"!==typeof document?document:null,Ai=Si&&Si.createElement("template"),ji={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Si.createElementNS(ki,e):Si.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>Si.createTextNode(e),createComment:e=>Si.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Si.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{Ai.innerHTML=r?`<svg>${e}</svg>`:e;const i=Ai.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function xi(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ci(e,t,n){const r=e.style,i=Object(Ti["q"])(n);if(n&&!i){for(const e in n)Ri(r,e,n[e]);if(t&&!Object(Ti["q"])(t))for(const e in t)null==n[e]&&Ri(r,e,"")}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const Ni=/\s*!important$/;function Ri(e,t,n){if(Object(Ti["h"])(n))n.forEach(n=>Ri(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=Pi(e,t);Ni.test(n)?e.setProperty(Object(Ti["e"])(r),n.replace(Ni,""),"important"):e[r]=n}}const Di=["Webkit","Moz","ms"],Fi={};function Pi(e,t){const n=Fi[t];if(n)return n;let r=Object(Ke["e"])(t);if("filter"!==r&&r in e)return Fi[t]=r;r=Object(Ti["c"])(r);for(let i=0;i<Di.length;i++){const n=Di[i]+r;if(n in e)return Fi[t]=n}return t}const Li="http://www.w3.org/1999/xlink";function Mi(e,t,n,r,i){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Li,t.slice(6,t.length)):e.setAttributeNS(Li,t,n);else{const r=Object(Ti["p"])(t);null==n||r&&!Object(Ti["f"])(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function Ui(e,t,n,r,i,s,o){if("innerHTML"===t||"textContent"===t)return r&&o(r,i,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const r=typeof e[t];if("boolean"===r)return void(e[t]=Object(Ti["f"])(n));if(null==n&&"string"===r)return e[t]="",void e.removeAttribute(t);if("number"===r){try{e[t]=0}catch(a){}return void e.removeAttribute(t)}}try{e[t]=n}catch(c){0}}let Vi=Date.now,Bi=!1;if("undefined"!==typeof window){Vi()>document.createEvent("Event").timeStamp&&(Vi=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Bi=!!(e&&Number(e[1])<=53)}let qi=0;const zi=Promise.resolve(),Gi=()=>{qi=0},$i=()=>qi||(zi.then(Gi),qi=Vi());function Ki(e,t,n,r){e.addEventListener(t,n,r)}function Hi(e,t,n,r){e.removeEventListener(t,n,r)}function Wi(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=Ji(t);if(r){const o=s[t]=Qi(r,i);Ki(e,n,o,a)}else o&&(Hi(e,n,o,a),s[t]=void 0)}}const Yi=/(?:Once|Passive|Capture)$/;function Ji(e){let t;if(Yi.test(e)){let n;t={};while(n=e.match(Yi))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(Ti["e"])(e.slice(2)),t]}function Qi(e,t){const n=e=>{const r=e.timeStamp||Vi();(Bi||r>=n.attached-1)&&We(Xi(e,n.value),t,5,[e])};return n.value=e,n.attached=$i(),n}function Xi(e,t){if(Object(Ti["h"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}const Zi=/^on[a-z]/,es=(e,t,n,r,i=!1,s,o,a,c)=>{"class"===t?xi(e,r,i):"style"===t?Ci(e,n,r):Object(Ti["m"])(t)?Object(Ti["k"])(t)||Wi(e,t,n,r,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ts(e,t,r,i))?Ui(e,t,r,s,o,a,c):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),Mi(e,t,r,i))};function ts(e,t,n,r){return r?"innerHTML"===t||"textContent"===t||!!(t in e&&Zi.test(t)&&Object(Ti["i"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!Zi.test(t)||!Object(Ti["q"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const ns="transition",rs="animation",is=(e,{slots:t})=>Oi(Yt,cs(e),t);is.displayName="Transition";const ss={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},os=(is.props=Object(Ti["d"])({},Yt.props,ss),(e,t=[])=>{Object(Ti["h"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),as=e=>!!e&&(Object(Ti["h"])(e)?e.some(e=>e.length>1):e.length>1);function cs(e){const t={};for(const A in e)A in ss||(t[A]=e[A]);if(!1===e.css)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=n+"-enter-from",enterActiveClass:o=n+"-enter-active",enterToClass:a=n+"-enter-to",appearFromClass:c=s,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=n+"-leave-from",leaveActiveClass:d=n+"-leave-active",leaveToClass:f=n+"-leave-to"}=e,p=us(i),m=p&&p[0],g=p&&p[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:v,onLeave:w,onLeaveCancelled:_,onBeforeAppear:I=y,onAppear:O=b,onAppearCancelled:E=v}=t,T=(e,t,n)=>{ds(e,t?l:a),ds(e,t?u:o),n&&n()},k=(e,t)=>{ds(e,f),ds(e,d),t&&t()},S=e=>(t,n)=>{const i=e?O:b,o=()=>T(t,e,n);os(i,[t,o]),fs(()=>{ds(t,e?c:s),hs(t,e?l:a),as(i)||ms(t,r,m,o)})};return Object(Ti["d"])(t,{onBeforeEnter(e){os(y,[e]),hs(e,s),hs(e,o)},onBeforeAppear(e){os(I,[e]),hs(e,c),hs(e,u)},onEnter:S(!1),onAppear:S(!0),onLeave(e,t){const n=()=>k(e,t);hs(e,h),vs(),hs(e,d),fs(()=>{ds(e,h),hs(e,f),as(w)||ms(e,r,g,n)}),os(w,[e,n])},onEnterCancelled(e){T(e,!1),os(v,[e])},onAppearCancelled(e){T(e,!0),os(E,[e])},onLeaveCancelled(e){k(e),os(_,[e])}})}function us(e){if(null==e)return null;if(Object(Ti["l"])(e))return[ls(e.enter),ls(e.leave)];{const t=ls(e);return[t,t]}}function ls(e){const t=Object(Ti["t"])(e);return t}function hs(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function ds(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function fs(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ps=0;function ms(e,t,n,r){const i=e._endId=++ps,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=gs(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),e.addEventListener(u,d)}function gs(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(ns+"Delay"),s=r(ns+"Duration"),o=ys(i,s),a=r(rs+"Delay"),c=r(rs+"Duration"),u=ys(a,c);let l=null,h=0,d=0;t===ns?o>0&&(l=ns,h=o,d=s.length):t===rs?u>0&&(l=rs,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?ns:rs:null,d=l?l===ns?s.length:c.length:0);const f=l===ns&&/\b(transform|all)(,|$)/.test(n[ns+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function ys(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>bs(t)+bs(e[n])))}function bs(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function vs(){return document.body.offsetHeight}new WeakMap,new WeakMap;const ws=e=>{const t=e.props["onUpdate:modelValue"];return Object(Ti["h"])(t)?e=>Object(Ti["g"])(t,e):t};function _s(e){e.target.composing=!0}function Is(e){const t=e.target;t.composing&&(t.composing=!1,Os(t,"input"))}function Os(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const Es={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=ws(i);const s=r||i.props&&"number"===i.props.type;Ki(e,t?"change":"input",t=>{if(t.target.composing)return;let r=e.value;n?r=r.trim():s&&(r=Object(Ti["t"])(r)),e._assign(r)}),n&&Ki(e,"change",()=>{e.value=e.value.trim()}),t||(Ki(e,"compositionstart",_s),Ki(e,"compositionend",Is),Ki(e,"change",Is))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=ws(s),e.composing)return;if(document.activeElement===e){if(n)return;if(r&&e.value.trim()===t)return;if((i||"number"===e.type)&&Object(Ti["t"])(e.value)===t)return}const o=null==t?"":t;e.value!==o&&(e.value=o)}},Ts={deep:!0,created(e,t,n){e._assign=ws(n),Ki(e,"change",()=>{const t=e._modelValue,n=As(e),r=e.checked,i=e._assign;if(Object(Ti["h"])(t)){const e=Object(Ti["s"])(t,n),s=-1!==e;if(r&&!s)i(t.concat(n));else if(!r&&s){const n=[...t];n.splice(e,1),i(n)}}else if(Object(Ti["o"])(t)){const e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(js(e,r))})},mounted:ks,beforeUpdate(e,t,n){e._assign=ws(n),ks(e,t,n)}};function ks(e,{value:t,oldValue:n},r){e._modelValue=t,Object(Ti["h"])(t)?e.checked=Object(Ti["s"])(t,r.props.value)>-1:Object(Ti["o"])(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Object(Ti["r"])(t,js(e,!0)))}const Ss={created(e,{value:t},n){e.checked=Object(Ti["r"])(t,n.props.value),e._assign=ws(n),Ki(e,"change",()=>{e._assign(As(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=ws(r),t!==n&&(e.checked=Object(Ti["r"])(t,r.props.value))}};function As(e){return"_value"in e?e._value:e.value}function js(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const xs=Object(Ti["d"])({patchProp:es},ji);let Cs;function Ns(){return Cs||(Cs=ur(xs))}const Rs=(...e)=>{const t=Ns().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=Ds(e);if(!r)return;const i=t._component;Object(Ti["i"])(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function Ds(e){if(Object(Ti["q"])(e)){const t=document.querySelector(e);return t}return e}},"7a77":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},"7aac":function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,i,s,o){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"7ded":function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("1fd5"),i=n("22e5"),s=n("589b"),o=n("e691");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(s["_addComponent"])(e,new i["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(e,t=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(s["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(s["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r["b"]("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s["_DEFAULT_ENTRY_NAME"],!Object(r["f"])(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s["initializeApp"](i,o);if(Object(r["f"])(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function l(t){const i=t.name,a=i.replace("-compat","");if(s["_registerComponent"](t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&Object(r["j"])(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){Object(r["j"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r["h"],ErrorFactory:r["b"],deepExtend:r["j"]}),e}const d=h(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.21";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){Object(s["registerVersion"])(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(r["n"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const y=d;g()},"83b9":function(e,t,n){"use strict";var r=n("d925"),i=n("e683");e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},"848b":function(e,t,n){"use strict";var r=n("5cce").version,i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={};function o(e,t,n){if("object"!==typeof e)throw new TypeError("options must be an object");var r=Object.keys(e),i=r.length;while(i-- >0){var s=r[i],o=t[s];if(o){var a=e[s],c=void 0===a||o(a,s,e);if(!0!==c)throw new TypeError("option "+s+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+s)}}i.transitional=function(e,t,n){function i(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,o){if(!1===e)throw new Error(i(r," has been removed"+(t?" in "+t:"")));return t&&!s[r]&&(s[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,o)}},e.exports={assertOptions:o,validators:i}},"8df4":function(e,t,n){"use strict";var r=n("7a77");function i(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},i.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},i.source=function(){var e,t=new i((function(t){e=t}));return{token:t,cancel:e}},e.exports=i},"8f6b":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Ar})),n.d(t,"b",(function(){return xr})),n.d(t,"c",(function(){return jr})),n.d(t,"d",(function(){return Nr})),n.d(t,"e",(function(){return Cr})),n.d(t,"f",(function(){return Rr})),n.d(t,"g",(function(){return Dr})),n.d(t,"h",(function(){return kr})),n.d(t,"i",(function(){return Sr}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function h(e){return Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function m(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function g(e,t,n){return g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m,g.apply(null,arguments)}function y(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function b(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function v(){this.s=this.s,this.o=this.o}var w=0,_={};v.prototype.s=!1,v.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var e=h(this);delete _[e]}},v.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},O=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function E(e){e:{var t=qn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function T(e){return Array.prototype.concat.apply([],arguments)}function k(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function S(e){return/^[\s\xa0]*$/.test(e)}var A,j=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function x(e,t){return-1!=e.indexOf(t)}function C(e,t){return e<t?-1:e>t?1:0}e:{var N=a.navigator;if(N){var R=N.userAgent;if(R){A=R;break e}}A=""}function D(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function F(e){const t={};for(const n in e)t[n]=e[n];return t}var P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function L(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<P.length;t++)n=P[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function M(e){return M[" "](e),e}function U(e){var t=X;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}M[" "]=c;var V,B=x(A,"Opera"),q=x(A,"Trident")||x(A,"MSIE"),z=x(A,"Edge"),G=z||q,$=x(A,"Gecko")&&!(x(A.toLowerCase(),"webkit")&&!x(A,"Edge"))&&!(x(A,"Trident")||x(A,"MSIE"))&&!x(A,"Edge"),K=x(A.toLowerCase(),"webkit")&&!x(A,"Edge");function H(){var e=a.document;return e?e.documentMode:void 0}e:{var W="",Y=function(){var e=A;return $?/rv:([^\);]+)(\)|;)/.exec(e):z?/Edge\/([\d\.]+)/.exec(e):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):K?/WebKit\/(\S+)/.exec(e):B?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Y&&(W=Y?Y[1]:""),q){var J=H();if(null!=J&&J>parseFloat(W)){V=String(J);break e}}V=W}var Q,X={};function Z(){return U((function(){let e=0;const t=j(String(V)).split("."),n=j("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=C(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||C(0==i[2].length,0==s[2].length)||C(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(a.document&&q){var ee=H();Q=ee||(parseInt(V,10)||void 0)}else Q=void 0;var te=Q,ne=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",c,t),a.removeEventListener("test",c,t)}catch(n){}return e}();function re(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ie(e,t){if(re.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($){e:{try{M(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:se[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ie.Z.h.call(this)}}re.prototype.h=function(){this.defaultPrevented=!0},b(ie,re);var se={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),ae=0;function ce(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++ae,this.ca=this.fa=!1}function ue(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function le(e){this.src=e,this.g={},this.h=0}function he(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=I(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ue(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}le.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=de(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new ce(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function me(e,t,n,r,i){if(r&&r.once)return be(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)me(e,t[s],n,r,i);return null}return n=Te(n),e&&e[oe]?e.N(t,n,l(r)?!!r.capture:!!r,i):ge(e,t,n,!1,r,i)}function ge(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=Oe(e);if(a||(e[fe]=a=new le(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ye(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ne||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(_e(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ye(){function e(n){return t.call(e.src,e.listener,n)}var t=Ie;return e}function be(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)be(e,t[s],n,r,i);return null}return n=Te(n),e&&e[oe]?e.O(t,n,l(r)?!!r.capture:!!r,i):ge(e,t,n,!0,r,i)}function ve(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ve(e,t[s],n,r,i);else r=l(r)?!!r.capture:!!r,n=Te(n),e&&e[oe]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=de(s,n,r,i),-1<n&&(ue(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Oe(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,r,i)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[oe])he(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(_e(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Oe(t))?(he(n,e),0==n.h&&(n.src=null,t[fe]=null)):ue(e)}}}function _e(e){return e in pe?pe[e]:pe[e]="on"+e}function Ie(e,t){if(e.ca)e=!0;else{t=new ie(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&we(e),e=n.call(r,t)}return e}function Oe(e){return e=e[fe],e instanceof le?e:null}var Ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function Te(e){return"function"===typeof e?e:(e[Ee]||(e[Ee]=function(t){return e.handleEvent(t)}),e[Ee])}function ke(){v.call(this),this.i=new le(this),this.P=this,this.I=null}function Se(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new re(t,e);else if(t instanceof re)t.target=t.target||e;else{var i=t;t=new re(r,e),L(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ae(o,r,!0,t)&&i}if(o=t.g=e,i=Ae(o,r,!0,t)&&i,i=Ae(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ae(o,r,!1,t)&&i}function Ae(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&he(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}b(ke,v),ke.prototype[oe]=!0,ke.prototype.removeEventListener=function(e,t,n,r){ve(this,e,t,n,r)},ke.prototype.M=function(){if(ke.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ue(n[r]);delete t.g[e],t.h--}}this.I=null},ke.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ke.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var je=a.JSON.stringify;function xe(){var e=Ue;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ce{constructor(){this.h=this.g=null}add(e,t){const n=Re.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Ne,Re=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new De,e=>e.reset());class De{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Fe(e){a.setTimeout(()=>{throw e},0)}function Pe(e,t){Ne||Le(),Me||(Ne(),Me=!0),Ue.add(e,t)}function Le(){var e=a.Promise.resolve(void 0);Ne=function(){e.then(Ve)}}var Me=!1,Ue=new Ce;function Ve(){for(var e;e=xe();){try{e.h.call(e.g)}catch(n){Fe(n)}var t=Re;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Me=!1}function Be(e,t){ke.call(this),this.h=e||1,this.g=t||a,this.j=g(this.kb,this),this.l=Date.now()}function qe(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function ze(e,t,n){if("function"===typeof e)n&&(e=g(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=g(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function Ge(e){e.g=ze(()=>{e.g=null,e.i&&(e.i=!1,Ge(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}b(Be,ke),r=Be.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Se(this,"tick"),this.da&&(qe(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Be.Z.M.call(this),qe(this),delete this.g};class $e extends v{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ge(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ke(e){v.call(this),this.h=e,this.g={}}b(Ke,v);var He=[];function We(e,t,n,r){Array.isArray(n)||(n&&(He[0]=n.toString()),n=He);for(var i=0;i<n.length;i++){var s=me(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ye(e){D(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Je(){this.g=!0}function Qe(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Xe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,n)+(r?" "+r:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return je(n)}catch(a){return t}}Ke.prototype.M=function(){Ke.Z.M.call(this),Ye(this)},Ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Je.prototype.Aa=function(){this.g=!1},Je.prototype.info=function(){};var nt={},rt=null;function it(){return rt=rt||new ke}function st(e){re.call(this,nt.Ma,e)}function ot(e){const t=it();Se(t,new st(t,e))}function at(e,t){re.call(this,nt.STAT_EVENT,e),this.stat=t}function ct(e){const t=it();Se(t,new at(t,e))}function ut(e,t){re.call(this,nt.Na,e),this.size=t}function lt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}nt.Ma="serverreachability",b(st,re),nt.STAT_EVENT="statevent",b(at,re),nt.Na="timingevent",b(ut,re);var ht={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},dt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ft(){}function pt(e){return e.h||(e.h=e.i())}function mt(){}ft.prototype.h=null;var gt,yt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function bt(){re.call(this,"d")}function vt(){re.call(this,"c")}function wt(){}function _t(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Ke(this),this.P=Ot,e=G?125:void 0,this.W=new Be(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new It}function It(){this.i=null,this.g="",this.h=!1}b(bt,re),b(vt,re),b(wt,ft),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},gt=new wt;var Ot=45e3,Et={},Tt={};function kt(e,t,n){e.K=1,e.v=Qt($t(t)),e.s=n,e.U=!0,St(e,null)}function St(e,t){e.F=Date.now(),Ct(e),e.A=$t(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new It,e.g=vr(e.l,n?t:null,!e.s),0<e.O&&(e.L=new $e(g(e.Ia,e,e.g),e.O)),We(e.V,e.g,"readystatechange",e.gb),t=e.H?F(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ot(1),Qe(e.j,e.u,e.A,e.m,e.X,e.s)}function At(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function jt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=xt(e,n),r==Tt){4==t&&(e.o=4,ct(14),i=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==Et){e.o=4,ct(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ze(e.j,e.m,r,null),Pt(e,r)}At(e)&&r!=Tt&&r!=Et&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ct(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(t),t.L=!0,ct(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Ft(e),Dt(e))}function xt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Tt:(n=Number(t.substring(n,r)),isNaN(n)?Et:(r+=1,r+n>t.length?Tt:(t=t.substr(r,n),e.C=r+n,t)))}function Ct(e){e.Y=Date.now()+e.P,Nt(e,e.P)}function Nt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=lt(g(e.eb,e),t)}function Rt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function Dt(e){0==e.l.G||e.I||pr(e.l,e)}function Ft(e){Rt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,qe(e.W),Ye(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Pt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||_n(n.i,e)))if(n.I=e.N,!e.J&&_n(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;fr(n),tr(n)}lr(n),ct(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=lt(g(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else gr(n,11)}else if((e.J||n.g==e)&&fr(n),!S(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(x(e,"spdy")||x(e,"quic")||x(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(In(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Jt(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=br(r,r.H?r.la:null,r.W),o.J){On(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Rt(a),Ct(a)),r.g=o}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||gr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?gr(n,7):er(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ot(4)}catch(u){}}function Lt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Mt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"===typeof e)O(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(u(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=Lt(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Ut(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Ut)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Vt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Bt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],Bt(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Bt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=_t.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Wn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const h=Wn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||G||this.g&&(this.h.h||this.g.ga()||Yn(this.g)))){this.I||4!=h||7==t||ot(8==t||0>=d?3:2),Rt(this);var n=this.g.ba();this.N=n;t:if(At(this)){var r=Yn(this.g);e="";var i=r.length,s=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ft(this),Dt(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Xe(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(c)){var l=c;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ct(12),Ft(this),Dt(this);break e}Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pt(this,n)}this.U?(jt(this,h,o),G&&this.i&&3==h&&(We(this.V,this.W,"tick",this.fb),this.W.start())):(Ze(this.j,this.m,o,null),Pt(this,o)),4==h&&Ft(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,Ct(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Ft(this),Dt(this)}}}catch(h){}},r.fb=function(){if(this.g){var e=Wn(this.g),t=this.g.ga();this.C<t.length&&(Rt(this),jt(this,e,t),this.i&&4!=e&&Ct(this))}},r.cancel=function(){this.I=!0,Ft(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(et(this.j,this.A),2!=this.K&&(ot(3),ct(17)),Ft(this),this.o=2,Dt(this)):Nt(this,this.Y-e)},r=Ut.prototype,r.R=function(){Vt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return Vt(this),this.g.concat()},r.get=function(e,t){return Bt(this.h,e)?this.h[e]:t},r.set=function(e,t){Bt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var qt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function zt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Gt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Gt){this.g=void 0!==t?t:e.g,Kt(this,e.j),this.s=e.s,Ht(this,e.i),Wt(this,e.m),this.l=e.l,t=e.h;var n=new un;n.i=t.i,t.g&&(n.g=new Ut(t.g),n.h=t.h),Yt(this,n),this.o=e.o}else e&&(n=String(e).match(qt))?(this.g=!!t,Kt(this,n[1]||"",!0),this.s=en(n[2]||""),Ht(this,n[3]||"",!0),Wt(this,n[4]),this.l=en(n[5]||"",!0),Yt(this,n[6]||"",!0),this.o=en(n[7]||"")):(this.g=!!t,this.h=new un(null,this.g))}function $t(e){return new Gt(e)}function Kt(e,t,n){e.j=n?en(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ht(e,t,n){e.i=n?en(t,!0):t}function Wt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Yt(e,t,n){t instanceof un?(e.h=t,mn(e.h,e.g)):(n||(t=tn(t,an)),e.h=new un(t,e.g))}function Jt(e,t,n){e.h.set(t,n)}function Qt(e){return Jt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Xt(e){return e instanceof Gt?$t(e):new Gt(e,void 0)}function Zt(e,t,n,r){var i=new Gt(null,void 0);return e&&Kt(i,e),t&&Ht(i,t),n&&Wt(i,n),r&&(i.l=r),i}function en(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tn(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,nn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Gt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tn(t,rn,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tn(t,rn,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(tn(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tn(n,cn)),e.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ln(e){e.g||(e.g=new Ut,e.h=0,e.i&&zt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function hn(e,t){ln(e),t=pn(e,t),Bt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Bt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Vt(e)))}function dn(e,t){return ln(e),t=pn(e,t),Bt(e.g.h,t)}function fn(e,t,n){hn(e,t),0<n.length&&(e.i=null,e.g.set(pn(e,t),k(n)),e.h+=n.length)}function pn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function mn(e,t){t&&!e.j&&(ln(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(hn(this,t),fn(this,n,e))}),e)),e.j=t}r=un.prototype,r.add=function(e,t){ln(this),this.i=null,e=pn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){ln(this),this.g.forEach((function(n,r){O(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){ln(this);var t=[];if("string"===typeof e)dn(this,e)&&(t=T(t,this.g.get(pn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=T(t,e[n])}return t},r.set=function(e,t){return ln(this),this.i=null,e=pn(this,e),dn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var gn=class{constructor(e,t){this.h=e,this.g=t}};function yn(e){this.l=e||bn,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bn=10;function vn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function wn(e){return e.h?1:e.g?e.g.size:0}function _n(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function In(e,t){e.g?e.g.add(t):e.h=t}function On(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function En(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return k(e.i)}function Tn(){}function kn(){this.g=new Tn}function Sn(e,t,n){const r=n||"";try{Mt(e,(function(e,n){let i=e;l(e)&&(i=je(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function An(e,t){const n=new Je;if(a.Image){const r=new Image;r.onload=y(jn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=y(jn,n,r,"TestLoadImage: error",!1,t),r.onabort=y(jn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=y(jn,n,r,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function jn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function xn(e){this.l=e.$b||null,this.j=e.ib||!1}function Cn(e,t){ke.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Nn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=En(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Tn.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},Tn.prototype.parse=function(e){return a.JSON.parse(e,void 0)},b(xn,ft),xn.prototype.g=function(){return new Cn(this.l,this.j)},xn.prototype.i=function(e){return function(){return e}}({}),b(Cn,ke);var Nn=0;function Rn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Dn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Fn(e)}function Fn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Cn.prototype,r.open=function(e,t){if(this.readyState!=Nn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Fn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dn(this)),this.readyState=Nn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Rn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Dn(this):Fn(this),3==this.readyState&&Rn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,Dn(this))},r.Ta=function(e){this.g&&(this.response=e,Dn(this))},r.ha=function(){this.g&&Dn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Cn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Pn=a.JSON.parse;function Ln(e){ke.call(this),this.headers=new Ut,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Mn,this.K=this.L=!1}b(Ln,ke);var Mn="",Un=/^https?$/i,Vn=["POST","PUT"];function Bn(e){return q&&Z()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function qn(e){return"content-type"==e.toLowerCase()}function zn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Gn(e),Kn(e)}function Gn(e){e.D||(e.D=!0,Se(e,"complete"),Se(e,"error"))}function $n(e){if(e.h&&"undefined"!=typeof o&&(!e.C[1]||4!=Wn(e)||2!=e.ba()))if(e.v&&4==Wn(e))ze(e.Fa,0,e);else if(Se(e,"readystatechange"),4==Wn(e)){e.h=!1;try{const o=e.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.H).match(qt)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!Un.test(i?i.toLowerCase():"")}n=r}if(n)Se(e,"complete"),Se(e,"success");else{e.m=6;try{var c=2<Wn(e)?e.g.statusText:""}catch(u){c=""}e.j=c+" ["+e.ba()+"]",Gn(e)}}finally{Kn(e)}}}function Kn(e,t){if(e.g){Hn(e);const r=e.g,i=e.C[0]?c:null;e.g=null,e.C=null,t||Se(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Hn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function Wn(e){return e.g?e.g.readyState:0}function Yn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Mn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Jn(e){let t="";return D(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Qn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Jn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Jt(e,t,n))}function Xn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Zn(e){this.za=0,this.l=[],this.h=new Je,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Xn("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Xn("baseRetryDelayMs",5e3,e),this.$a=Xn("retryDelaySeedMs",1e4,e),this.Ya=Xn("forwardChannelMaxRetries",2,e),this.ra=Xn("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(e&&e.concurrentRequestLimit),this.Ca=new kn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function er(e){if(nr(e),3==e.G){var t=e.V++,n=$t(e.F);Jt(n,"SID",e.J),Jt(n,"RID",t),Jt(n,"TYPE","terminate"),ar(e,n),t=new _t(e,e.h,t,void 0),t.K=2,t.v=Qt($t(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=vr(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Ct(t)}yr(e)}function tr(e){e.g&&(hr(e),e.g.cancel(),e.g=null)}function nr(e){tr(e),e.u&&(a.clearTimeout(e.u),e.u=null),fr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&a.clearTimeout(e.m),e.m=null)}function rr(e,t){e.l.push(new gn(e.Za++,t)),3==e.G&&ir(e)}function ir(e){vn(e.i)||e.m||(e.m=!0,Pe(e.Ha,e),e.C=0)}function sr(e,t){return!(wn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=lt(g(e.Ha,e,t),mr(e,e.C)),e.C++,!0))}function or(e,t){var n;n=t?t.m:e.V++;const r=$t(e.F);Jt(r,"SID",e.J),Jt(r,"RID",n),Jt(r,"AID",e.U),ar(e,r),e.o&&e.s&&Qn(r,e.o,e.s),n=new _t(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=cr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),In(e.i,n),kt(n,r,t)}function ar(e,t){e.j&&Mt({},(function(e,n){Jt(t,n,e)}))}function cr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?g(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),o=!1;else try{Sn(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function ur(e){e.g||e.u||(e.Y=1,Pe(e.Ga,e),e.A=0)}function lr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=lt(g(e.Ga,e),mr(e,e.A)),e.A++,!0)}function hr(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function dr(e){e.g=new _t(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=$t(e.oa);Jt(t,"RID","rpc"),Jt(t,"SID",e.J),Jt(t,"CI",e.N?"0":"1"),Jt(t,"AID",e.U),ar(e,t),Jt(t,"TYPE","xmlhttp"),e.o&&e.s&&Qn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Qt($t(t)),n.s=null,n.U=!0,St(n,e)}function fr(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function pr(e,t){var n=null;if(e.g==t){fr(e),hr(e),e.g=null;var r=2}else{if(!_n(e.i,t))return;n=t.D,On(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=it(),Se(r,new ut(r,n,t,i)),ir(e)}else ur(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&sr(e,t)||2==r&&lr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:gr(e,5);break;case 4:gr(e,10);break;case 3:gr(e,6);break;default:gr(e,2)}}function mr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function gr(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=g(e.jb,e);n||(n=new Gt("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Kt(n,"https"),Qt(n)),An(n.toString(),r)}else ct(2);e.G=0,e.j&&e.j.va(t),yr(e),nr(e)}function yr(e){e.G=0,e.I=-1,e.j&&(0==En(e.i).length&&0==e.l.length||(e.i.i.length=0,k(e.l),e.l.length=0),e.j.ua())}function br(e,t,n){let r=Xt(n);if(""!=r.i)t&&Ht(r,t+"."+r.i),Wt(r,r.m);else{const e=a.location;r=Zt(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&D(e.aa,(function(e,t){Jt(r,t,e)})),t=e.D,n=e.sa,t&&n&&Jt(r,t,n),Jt(r,"VER",e.ma),ar(e,r),r}function vr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Ln(new xn({ib:!0})):new Ln(e.qa),t.L=e.H,t}function wr(){}function _r(){if(q&&!(10<=Number(te)))throw Error("Environmental error: no available transport.")}function Ir(e,t){ke.call(this),this.g=new Zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!S(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!S(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Tr(this)}function Or(e){bt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Er(){vt.call(this),this.status=1}function Tr(e){this.g=e}r=Ln.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gt.g(),this.C=this.u?pt(this.u):pt(gt),this.g.onreadystatechange=g(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void zn(this,s)}e=n||"";const i=new Ut(this.headers);r&&Mt(r,(function(e,t){i.set(t,e)})),r=E(i.T()),n=a.FormData&&e instanceof a.FormData,!(0<=I(Vn,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Hn(this),0<this.B&&((this.K=Bn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.pa,this)):this.A=ze(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){zn(this,s)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Se(this,"complete"),Se(this,"abort"),Kn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kn(this,!0)),Ln.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?$n(this):this.cb())},r.cb=function(){$n(this)},r.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Pn(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new _t(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=F(s),L(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=cr(this,i,t),n=$t(this.F),Jt(n,"RID",e),Jt(n,"CVER",22),this.D&&Jt(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Qn(n,this.o,s),In(this.i,i),this.Ra&&Jt(n,"TYPE","init"),this.ja?(Jt(n,"$req",t),Jt(n,"SID","null"),i.$=!0,kt(i,n,null)):kt(i,n,t),this.G=2}}else 3==this.G&&(e?or(this,e):0==this.l.length||vn(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=lt(g(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ct(10),tr(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,tr(this),lr(this),ct(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ct(2)):(this.h.info("Failed to ping google.com"),ct(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},_r.prototype.g=function(e,t){return new Ir(e,t)},b(Ir,ke),Ir.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Pe(g(e.hb,e,t))),ct(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=br(e,null,e.W),ir(e)},Ir.prototype.close=function(){er(this.g)},Ir.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,rr(this.g,t)}else this.v?(t={},t.__data__=je(e),rr(this.g,t)):rr(this.g,e)},Ir.prototype.M=function(){this.g.j=null,delete this.j,er(this.g),delete this.g,Ir.Z.M.call(this)},b(Or,bt),b(Er,vt),b(Tr,wr),Tr.prototype.xa=function(){Se(this.g,"a")},Tr.prototype.wa=function(e){Se(this.g,new Or(e))},Tr.prototype.va=function(e){Se(this.g,new Er(e))},Tr.prototype.ua=function(){Se(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Ir.prototype.send=Ir.prototype.u,Ir.prototype.open=Ir.prototype.m,Ir.prototype.close=Ir.prototype.close,ht.NO_ERROR=0,ht.TIMEOUT=8,ht.HTTP_ERROR=6,dt.COMPLETE="complete",mt.EventType=yt,yt.OPEN="a",yt.CLOSE="b",yt.ERROR="c",yt.MESSAGE="d",ke.prototype.listen=ke.prototype.N,Ln.prototype.listenOnce=Ln.prototype.O,Ln.prototype.getLastError=Ln.prototype.La,Ln.prototype.getLastErrorCode=Ln.prototype.Da,Ln.prototype.getStatus=Ln.prototype.ba,Ln.prototype.getResponseJson=Ln.prototype.Qa,Ln.prototype.getResponseText=Ln.prototype.ga,Ln.prototype.send=Ln.prototype.ea;var kr=s.createWebChannelTransport=function(){return new _r},Sr=s.getStatEventTarget=function(){return it()},Ar=s.ErrorCode=ht,jr=s.EventType=dt,xr=s.Event=nt,Cr=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Nr=s.FetchXmlHttpFactory=xn,Rr=s.WebChannel=mt,Dr=s.XhrIo=Ln}).call(this,n("c8ba"))},9152:function(e,t){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
t.read=function(e,t,n,r,i){var s,o,a=8*i-r-1,c=(1<<a)-1,u=c>>1,l=-7,h=n?i-1:0,d=n?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-l)-1,f>>=-l,l+=a;l>0;s=256*s+e[t+h],h+=d,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=r;l>0;o=256*o+e[t+h],h+=d,l-=8);if(0===s)s=1-u;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=u}return(f?-1:1)*o*Math.pow(2,s-r)},t.write=function(e,t,n,r,i,s){var o,a,c,u=8*s-i-1,l=(1<<u)-1,h=l>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:s-1,p=r?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-o))<1&&(o--,c*=2),t+=o+h>=1?d/c:d*Math.pow(2,1-h),t*c>=2&&(o++,c/=2),o+h>=l?(a=0,o=l):o+h>=1?(a=(t*c-1)*Math.pow(2,i),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;e[n+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;e[n+f]=255&o,f+=p,o/=256,u-=8);e[n+f-p]|=128*m}},"94f8":function(e,t,n){(function(t,r){e.exports=r(n("21bf"))})(0,(function(e){return function(t){var n=e,r=n.lib,i=r.WordArray,s=r.Hasher,o=n.algo,a=[],c=[];(function(){function e(e){for(var n=t.sqrt(e),r=2;r<=n;r++)if(!(e%r))return!1;return!0}function n(e){return 4294967296*(e-(0|e))|0}var r=2,i=0;while(i<64)e(r)&&(i<8&&(a[i]=n(t.pow(r,.5))),c[i]=n(t.pow(r,1/3)),i++),r++})();var u=[],l=o.SHA256=s.extend({_doReset:function(){this._hash=new i.init(a.slice(0))},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],s=n[2],o=n[3],a=n[4],l=n[5],h=n[6],d=n[7],f=0;f<64;f++){if(f<16)u[f]=0|e[t+f];else{var p=u[f-15],m=(p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3,g=u[f-2],y=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;u[f]=m+u[f-7]+y+u[f-16]}var b=a&l^~a&h,v=r&i^r&s^i&s,w=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),_=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),I=d+_+b+c[f]+u[f],O=w+v;d=h,h=l,l=a,a=o+I|0,o=s,s=i,i=r,r=I+O|0}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+s|0,n[3]=n[3]+o|0,n[4]=n[4]+a|0,n[5]=n[5]+l|0,n[6]=n[6]+h|0,n[7]=n[7]+d|0},_doFinalize:function(){var e=this._data,n=e.words,r=8*this._nDataBytes,i=8*e.sigBytes;return n[i>>>5]|=128<<24-i%32,n[14+(i+64>>>9<<4)]=t.floor(r/4294967296),n[15+(i+64>>>9<<4)]=r,e.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var e=s.clone.call(this);return e._hash=this._hash.clone(),e}});n.SHA256=s._createHelper(l),n.HmacSHA256=s._createHmacHelper(l)}(Math),e.SHA256}))},"9ce7":function(e,t,n){},a5fa:function(e,t,n){"use strict";n.d(t,"b",(function(){return vi})),n.d(t,"c",(function(){return wi}));var r={};n.r(r),n.d(r,"protocol",(function(){return yr})),n.d(r,"PacketType",(function(){return br})),n.d(r,"Encoder",(function(){return vr})),n.d(r,"Decoder",(function(){return wr}));n("cc87");var i=n("7a23"),s=n("abc5");const o="devtools-plugin:setup",a="plugin:settings:set";var c=n("5134");class u{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r="__vue-devtools-plugin-settings__"+e.id;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(s){}i=e},now(){return Object(c["a"])()}},t&&t.on(a,(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(n=>{this.targetQueue.push({method:t,args:e,resolve:n})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function l(e,t){const n=e,r=Object(s["b"])(),i=Object(s["a"])(),a=s["c"]&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&a){const e=a?new u(n,i):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else i.emit(o,e,t)}
/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const h="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,d=e=>h?Symbol(e):"_vr_"+e,f=d("rvlm"),p=d("rvd"),m=d("r"),g=d("rl"),y=d("rvl"),b="undefined"!==typeof window;function v(e){return e.__esModule||h&&"Module"===e[Symbol.toStringTag]}const w=Object.assign;function _(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const I=()=>{};const O=/\/$/,E=e=>e.replace(O,"");function T(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),i=e(s)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=R(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function k(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function S(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function A(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&j(t.matched[r],n.matched[i])&&x(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function j(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function x(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!C(e[n],t[n]))return!1;return!0}function C(e,t){return Array.isArray(e)?N(e,t):Array.isArray(t)?N(t,e):e===t}function N(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function R(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var D,F;(function(e){e["pop"]="pop",e["push"]="push"})(D||(D={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(F||(F={}));function P(e){if(!e)if(b){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),E(e)}const L=/^[^#]+#/;function M(e,t){return e.replace(L,"#")+t}function U(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const V=()=>({left:window.pageXOffset,top:window.pageYOffset});function B(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=U(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function q(e,t){const n=history.state?history.state.position-t:-1;return n+e}const z=new Map;function G(e,t){z.set(e,t)}function $(e){const t=z.get(e);return z.delete(e),t}let K=()=>location.protocol+"//"+location.host;function H(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),S(n,"")}const o=S(n,e);return o+r+i}function W(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=H(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach(e=>{e(n.value,c,{delta:l,type:D.pop,direction:l?l>0?F.forward:F.back:F.unknown})})};function c(){o=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(w({},e.state,{scroll:V()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Y(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?V():null}}function J(e){const{history:t,location:n}=window,r={value:H(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:K()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=w({},t.state,Y(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function a(e,n){const o=w({},i.value,t.state,{forward:e,scroll:V()});s(o.current,o,!0);const a=w({},Y(r.value,e,null),{position:o.position+1},n);s(e,a,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function Q(e){e=P(e);const t=J(e),n=W(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=w({location:"",base:e,go:r,createHref:M.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function X(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Q(e)}function Z(e){return"string"===typeof e||e&&"object"===typeof e}function ee(e){return"string"===typeof e||"symbol"===typeof e}const te={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ne=d("nf");var re;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(re||(re={}));function ie(e,t){return w(new Error,{type:e,[ne]:!0},t)}function se(e,t){return e instanceof Error&&ne in e&&(null==t||!!(e.type&t))}const oe="[^/]+?",ae={sensitive:!1,strict:!1,start:!0,end:!0},ce=/[.+*?^${}()[\]/\\]/g;function ue(e,t){const n=w({},ae,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ce,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;s.push({name:e,repeatable:n,optional:a});const h=c||oe;if(h!==oe){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function le(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function he(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=le(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const de={type:0,value:""},fe=/[a-zA-Z0-9_]/;function pe(e){if(!e)return[[]];if("/"===e)return[[de]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:fe.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function me(e,t,n){const r=ue(pe(e.path),n);const i=w(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ge(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,a=be(e);a.aliasOf=r&&r.record;const u=Ie(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(w({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(h=me(t,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!we(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{o(d)}:I}function o(e){if(ee(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){let t=0;while(t<n.length&&he(e,n[t])>=0&&(e.record.path!==n[t].record.path||!Oe(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!we(e)&&r.set(e.record.name,e)}function u(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw ie(1,{location:e});o=i.record.name,a=w(ye(t.params,i.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find(e=>e.re.test(s)),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw ie(1,{location:e,currentLocation:t});o=i.record.name,a=w({},t.params,e.params),s=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:c,meta:_e(c)}}return t=Ie({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>s(e)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ye(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function be(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ve(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function ve(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function we(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function _e(e){return e.reduce((e,t)=>w(e,t.meta),{})}function Ie(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Oe(e,t){return t.children.some(t=>t===e||Oe(e,t))}const Ee=/#/g,Te=/&/g,ke=/\//g,Se=/=/g,Ae=/\?/g,je=/\+/g,xe=/%5B/g,Ce=/%5D/g,Ne=/%5E/g,Re=/%60/g,De=/%7B/g,Fe=/%7C/g,Pe=/%7D/g,Le=/%20/g;function Me(e){return encodeURI(""+e).replace(Fe,"|").replace(xe,"[").replace(Ce,"]")}function Ue(e){return Me(e).replace(De,"{").replace(Pe,"}").replace(Ne,"^")}function Ve(e){return Me(e).replace(je,"%2B").replace(Le,"+").replace(Ee,"%23").replace(Te,"%26").replace(Re,"`").replace(De,"{").replace(Pe,"}").replace(Ne,"^")}function Be(e){return Ve(e).replace(Se,"%3D")}function qe(e){return Me(e).replace(Ee,"%23").replace(Ae,"%3F")}function ze(e){return null==e?"":qe(e).replace(ke,"%2F")}function Ge(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function $e(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(je," "),n=e.indexOf("="),s=Ge(n<0?e:e.slice(0,n)),o=n<0?null:Ge(e.slice(n+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Ke(e){let t="";for(let n in e){const r=e[n];if(n=Be(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(e=>e&&Ve(e)):[r&&Ve(r)];i.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function He(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function We(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ye(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=e=>{!1===e?a(ie(4,{from:n,to:t})):e instanceof Error?a(e):Z(e)?a(ie(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function Je(e,t,n,r){const i=[];for(const s of e)for(const e in s.components){let o=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(Qe(o)){const a=o.__vccOpts||o,c=a[t];c&&i.push(Ye(c,n,r,s,e))}else{let a=o();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const o=v(i)?i.default:i;s.components[e]=o;const a=o.__vccOpts||o,c=a[t];return c&&Ye(c,n,r,s,e)()}))}}return i}function Qe(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Xe(e){const t=Object(i["l"])(m),n=Object(i["l"])(g),r=Object(i["b"])(()=>t.resolve(Object(i["D"])(e.to))),s=Object(i["b"])(()=>{const{matched:e}=r.value,{length:t}=e,i=e[t-1],s=n.matched;if(!i||!s.length)return-1;const o=s.findIndex(j.bind(null,i));if(o>-1)return o;const a=rt(e[t-2]);return t>1&&rt(i)===a&&s[s.length-1].path!==a?s.findIndex(j.bind(null,e[t-2])):o}),o=Object(i["b"])(()=>s.value>-1&&nt(n.params,r.value.params)),a=Object(i["b"])(()=>s.value>-1&&s.value===n.matched.length-1&&x(n.params,r.value.params));function c(n={}){return tt(n)?t[Object(i["D"])(e.replace)?"replace":"push"](Object(i["D"])(e.to)).catch(I):Promise.resolve()}return{route:r,href:Object(i["b"])(()=>r.value.href),isActive:o,isExactActive:a,navigate:c}}const Ze=Object(i["i"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xe,setup(e,{slots:t}){const n=Object(i["v"])(Xe(e)),{options:r}=Object(i["l"])(m),s=Object(i["b"])(()=>({[it(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[it(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:Object(i["k"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),et=Ze;function tt(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function nt(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function rt(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const it=(e,t,n)=>null!=e?e:null!=t?t:n,st=Object(i["i"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=Object(i["l"])(y),s=Object(i["b"])(()=>e.route||r.value),o=Object(i["l"])(p,0),a=Object(i["b"])(()=>s.value.matched[o]);Object(i["u"])(p,o+1),Object(i["u"])(f,a),Object(i["u"])(y,s);const c=Object(i["w"])();return Object(i["H"])(()=>[c.value,a.value,e.name],([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&j(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const r=s.value,o=a.value,u=o&&o.components[e.name],l=e.name;if(!u)return ot(n.default,{Component:u,route:r});const h=o.props[e.name],d=h?!0===h?r.params:"function"===typeof h?h(r):h:null,f=e=>{e.component.isUnmounted&&(o.instances[l]=null)},p=Object(i["k"])(u,w({},d,t,{onVnodeUnmounted:f,ref:c}));return ot(n.default,{Component:p,route:r})||p}}});function ot(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const at=st;function ct(e){const t=ge(e.routes,e),n=e.parseQuery||$e,r=e.stringifyQuery||Ke,s=e.history;const o=We(),a=We(),c=We(),u=Object(i["A"])(te);let l=te;b&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=_.bind(null,e=>""+e),d=_.bind(null,ze),f=_.bind(null,Ge);function p(e,n){let r,i;return ee(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function v(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function O(){return t.getRoutes().map(e=>e.record)}function E(e){return!!t.getRecordMatcher(e)}function S(e,i){if(i=w({},i||u.value),"string"===typeof e){const r=T(n,e,i.path),o=t.resolve({path:r.path},i),a=s.createHref(r.fullPath);return w(r,o,{params:f(o.params),hash:Ge(r.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=w({},e,{path:T(n,e.path,i.path).path});else{const t=w({},e.params);for(const e in t)null==t[e]&&delete t[e];o=w({},e,{params:d(e.params)}),i.params=d(i.params)}const a=t.resolve(o,i),c=e.hash||"";a.params=h(f(a.params));const l=k(r,w({},e,{hash:Ue(c),path:a.path})),p=s.createHref(l);return w({fullPath:l,hash:c,query:r===Ke?He(e.query):e.query||{}},a,{redirectedFrom:void 0,href:p})}function j(e){return"string"===typeof e?T(n,e,u.value.path):w({},e)}function x(e,t){if(l!==e)return ie(8,{from:t,to:e})}function C(e){return F(e)}function N(e){return C(w(j(e),{replace:!0}))}function R(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=j(r):{path:r},r.params={}),w({query:e.query,hash:e.hash,params:e.params},r)}}function F(e,t){const n=l=S(e),i=u.value,s=e.state,o=e.force,a=!0===e.replace,c=R(n);if(c)return F(w(j(c),{state:s,force:o,replace:a}),t||n);const h=n;let d;return h.redirectedFrom=t,!o&&A(r,i,n)&&(d=ie(16,{to:h,from:i}),Z(i,i,!0,!1)),(d?Promise.resolve(d):L(h,i)).catch(e=>se(e)?se(e,2)?e:X(e):J(e,h,i)).then(e=>{if(e){if(se(e,2))return F(w(j(e.to),{state:s,force:o,replace:a}),t||h)}else e=U(h,i,!0,a,s);return M(h,i,e),e})}function P(e,t){const n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function L(e,t){let n;const[r,i,s]=lt(e,t);n=Je(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach(r=>{n.push(Ye(r,e,t))});const c=P.bind(null,e,t);return n.push(c),ut(n).then(()=>{n=[];for(const r of o.list())n.push(Ye(r,e,t));return n.push(c),ut(n)}).then(()=>{n=Je(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push(Ye(r,e,t))});return n.push(c),ut(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Ye(i,e,t));else n.push(Ye(r.beforeEnter,e,t));return n.push(c),ut(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Je(s,"beforeRouteEnter",e,t),n.push(c),ut(n))).then(()=>{n=[];for(const r of a.list())n.push(Ye(r,e,t));return n.push(c),ut(n)}).catch(e=>se(e,8)?e:Promise.reject(e))}function M(e,t,n){for(const r of c.list())r(e,t,n)}function U(e,t,n,r,i){const o=x(e,t);if(o)return o;const a=t===te,c=b?history.state:{};n&&(r||a?s.replace(e.fullPath,w({scroll:a&&c&&c.scroll},i)):s.push(e.fullPath,i)),u.value=e,Z(e,t,n,a),X()}let z;function K(){z=s.listen((e,t,n)=>{const r=S(e),i=R(r);if(i)return void F(w(i,{replace:!0}),r).catch(I);l=r;const o=u.value;b&&G(q(o.fullPath,n.delta),V()),L(r,o).catch(e=>se(e,12)?e:se(e,2)?(F(e.to,r).then(e=>{se(e,20)&&!n.delta&&n.type===D.pop&&s.go(-1,!1)}).catch(I),Promise.reject()):(n.delta&&s.go(-n.delta,!1),J(e,r,o))).then(e=>{e=e||U(r,o,!1),e&&(n.delta?s.go(-n.delta,!1):n.type===D.pop&&se(e,20)&&s.go(-1,!1)),M(r,o,e)}).catch(I)})}let H,W=We(),Y=We();function J(e,t,n){X(e);const r=Y.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function Q(){return H&&u.value!==te?Promise.resolve():new Promise((e,t)=>{W.add([e,t])})}function X(e){return H||(H=!e,K(),W.list().forEach(([t,n])=>e?n(e):t()),W.reset()),e}function Z(t,n,r,s){const{scrollBehavior:o}=e;if(!b||!o)return Promise.resolve();const a=!r&&$(q(t.fullPath,0))||(s||!r)&&history.state&&history.state.scroll||null;return Object(i["m"])().then(()=>o(t,n,a)).then(e=>e&&B(e)).catch(e=>J(e,t,n))}const ne=e=>s.go(e);let re;const oe=new Set,ae={currentRoute:u,addRoute:p,removeRoute:v,hasRoute:E,getRoutes:O,resolve:S,options:e,push:C,replace:N,go:ne,back:()=>ne(-1),forward:()=>ne(1),beforeEach:o.add,beforeResolve:a.add,afterEach:c.add,onError:Y.add,isReady:Q,install(e){const t=this;e.component("RouterLink",et),e.component("RouterView",at),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(i["D"])(u)}),b&&!re&&u.value===te&&(re=!0,C(s.location).catch(e=>{0}));const n={};for(const s in te)n[s]=Object(i["b"])(()=>u.value[s]);e.provide(m,t),e.provide(g,Object(i["v"])(n)),e.provide(y,u);const r=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(l=te,z&&z(),u.value=te,re=!1,H=!1),r()}}};return ae}function ut(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function lt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find(e=>j(e,s))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find(e=>j(e,a))||i.push(a))}return[n,r,i]}function ht(){return Object(i["l"])(m)}function dt(){return Object(i["l"])(g)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var ft="store";function pt(e){return void 0===e&&(e=null),Object(i["l"])(null!==e?e:ft)}function mt(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function gt(e){return null!==e&&"object"===typeof e}function yt(e){return e&&"function"===typeof e.then}function bt(e,t){if(!e)throw new Error("[vuex] "+t)}function vt(e,t){return function(){return e(t)}}function wt(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function _t(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;Ot(e,n,[],e._modules.root,!0),It(e,n,t)}function It(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,o={};mt(s,(function(t,n){o[n]=vt(t,e),Object.defineProperty(e.getters,n,{get:function(){return o[n]()},enumerable:!0})})),e._state=Object(i["v"])({data:t}),e.strict&&jt(e),r&&n&&e._withCommit((function(){r.data=null}))}function Ot(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o]&&console.error("[vuex] duplicate namespace "+o+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[o]=r),!s&&!i){var a=xt(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=Et(e,o,n);r.forEachMutation((function(t,n){var r=o+n;kt(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,i=t.handler||t;St(e,r,i,u)})),r.forEachGetter((function(t,n){var r=o+n;At(e,r,t,u)})),r.forEachChild((function(r,s){Ot(e,t,n.concat(s),r,i)}))}function Et(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var s=Ct(n,r,i),o=s.payload,a=s.options,c=s.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,o);console.error("[vuex] unknown local action type: "+s.type+", global type: "+c)},commit:r?e.commit:function(n,r,i){var s=Ct(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,o,a):console.error("[vuex] unknown local mutation type: "+s.type+", global type: "+c)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return Tt(e,t)}},state:{get:function(){return xt(e.state,n)}}}),i}function Tt(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function kt(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function St(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return yt(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function At(e,t,n,r){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}function jt(e){Object(i["H"])((function(){return e._state.data}),(function(){bt(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function xt(e,t){return t.reduce((function(e,t){return e[t]}),e)}function Ct(e,t,n){return gt(e)&&e.type&&(n=t,t=e,e=e.type),bt("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}var Nt="vuex bindings",Rt="vuex:mutations",Dt="vuex:actions",Ft="vuex",Pt=0;function Lt(e,t){l({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Nt]},(function(n){n.addTimelineLayer({id:Rt,label:"Vuex Mutations",color:Mt}),n.addTimelineLayer({id:Dt,label:"Vuex Actions",color:Mt}),n.addInspector({id:Ft,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===Ft)if(n.filter){var r=[];Gt(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[zt(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===Ft){var r=n.nodeId;Tt(t,r),n.state=$t(Ht(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===Ft){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(Ft),n.sendInspectorState(Ft),n.addTimelineEvent({layerId:Rt,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=Pt++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:Dt,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:Dt,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var Mt=8702998,Ut=6710886,Vt=16777215,Bt={label:"namespaced",textColor:Vt,backgroundColor:Ut};function qt(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function zt(e,t){return{id:t||"root",label:qt(t),tags:e.namespaced?[Bt]:[],children:Object.keys(e._children).map((function(n){return zt(e._children[n],t+n+"/")}))}}function Gt(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[Bt]:[]}),Object.keys(t._children).forEach((function(i){Gt(e,t._children[i],n,r+i+"/")}))}function $t(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var s=Kt(t);i.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?qt(e):e,editable:!1,value:Wt((function(){return s[e]}))}}))}return i}function Kt(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[s]=Wt((function(){return e[n]}))}else t[n]=Wt((function(){return e[n]}))})),t}function Ht(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var s=e[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?s:s._children}),"root"===t?e:e.root._children)}function Wt(e){try{return e()}catch(t){return t}}var Yt=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},Jt={namespaced:{configurable:!0}};Jt.namespaced.get=function(){return!!this._rawModule.namespaced},Yt.prototype.addChild=function(e,t){this._children[e]=t},Yt.prototype.removeChild=function(e){delete this._children[e]},Yt.prototype.getChild=function(e){return this._children[e]},Yt.prototype.hasChild=function(e){return e in this._children},Yt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},Yt.prototype.forEachChild=function(e){mt(this._children,e)},Yt.prototype.forEachGetter=function(e){this._rawModule.getters&&mt(this._rawModule.getters,e)},Yt.prototype.forEachAction=function(e){this._rawModule.actions&&mt(this._rawModule.actions,e)},Yt.prototype.forEachMutation=function(e){this._rawModule.mutations&&mt(this._rawModule.mutations,e)},Object.defineProperties(Yt.prototype,Jt);var Qt=function(e){this.register([],e,!1)};function Xt(e,t,n){if(nn(e,n),t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");Xt(e.concat(r),t.getChild(r),n.modules[r])}}Qt.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},Qt.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},Qt.prototype.update=function(e){Xt([],this.root,e)},Qt.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0),nn(e,t);var i=new Yt(t,n);if(0===e.length)this.root=i;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],i)}t.modules&&mt(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},Qt.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r?r.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},Qt.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var Zt={assert:function(e){return"function"===typeof e},expected:"function"},en={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},tn={getters:Zt,mutations:Zt,actions:en};function nn(e,t){Object.keys(tn).forEach((function(n){if(t[n]){var r=tn[n];mt(t[n],(function(t,i){bt(r.assert(t),rn(e,n,i,t,r.expected))}))}}))}function rn(e,t,n,r,i){var s=t+" should be "+i+' but "'+t+"."+n+'"';return e.length>0&&(s+=' in module "'+e.join(".")+'"'),s+=" is "+JSON.stringify(r)+".",s}function sn(e){return new on(e)}var on=function e(t){var n=this;void 0===t&&(t={}),bt("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),bt(this instanceof e,"store must be called with the new operator.");var r=t.plugins;void 0===r&&(r=[]);var i=t.strict;void 0===i&&(i=!1);var s=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Qt(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(e,t){return c.call(o,e,t)},this.commit=function(e,t,n){return u.call(o,e,t,n)},this.strict=i;var l=this._modules.root.state;Ot(this,l,[],this._modules.root),It(this,l),r.forEach((function(e){return e(n)}))},an={state:{configurable:!0}};on.prototype.install=function(e,t){e.provide(t||ft,this),e.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&Lt(e,this)},an.state.get=function(){return this._state.data},an.state.set=function(e){bt(!1,"use store.replaceState() to explicit replace store state.")},on.prototype.commit=function(e,t,n){var r=this,i=Ct(e,t,n),s=i.type,o=i.payload,a=i.options,c={type:s,payload:o},u=this._mutations[s];u?(this._withCommit((function(){u.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+s+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+s)},on.prototype.dispatch=function(e,t){var n=this,r=Ct(e,t),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}t(e)}))}))}console.error("[vuex] unknown action type: "+i)},on.prototype.subscribe=function(e,t){return wt(e,this._subscribers,t)},on.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return wt(n,this._actionSubscribers,t)},on.prototype.watch=function(e,t,n){var r=this;return bt("function"===typeof e,"store.watch only accepts a function."),Object(i["H"])((function(){return e(r.state,r.getters)}),t,Object.assign({},n))},on.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},on.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),bt(Array.isArray(e),"module path must be a string or an Array."),bt(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),Ot(this,this.state,e,this._modules.get(e),n.preserveState),It(this,this.state)},on.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),bt(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=xt(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),_t(this)},on.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),bt(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},on.prototype.hotUpdate=function(e){this._modules.update(e),_t(this,!0)},on.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(on.prototype,an);ln((function(e,t){var n={};return un(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),cn(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=hn(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),ln((function(e,t){var n={};return un(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),cn(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var s=hn(this.$store,"mapMutations",e);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),ln((function(e,t){var n={};return un(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),cn(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||hn(this.$store,"mapGetters",e)){if(i in this.$store.getters)return this.$store.getters[i];console.error("[vuex] unknown getter: "+i)}},n[r].vuex=!0})),n})),ln((function(e,t){var n={};return un(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),cn(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var s=hn(this.$store,"mapActions",e);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function cn(e){return un(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function un(e){return Array.isArray(e)||gt(e)}function ln(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function hn(e,t,n){var r=e._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+t+"(): "+n),r}var dn=n("bc3a"),fn=n.n(dn);function pn(){return dt()}function mn(){return ht()}function gn(e,...t){if("list"in Function.event&&Function.event.list[e])for(var n in Function.event.list[e])Function.event.list[e][n].call(null,...t)}function yn(e,t){return"mount"===e?Object(i["q"])(t):"un:mount"===e?Object(i["r"])(t):"update"===e?Object(i["s"])(t):void("list"in Function.event&&(e in Function.event.list===!1&&(Function.event.list[e]=[]),Function.event.list[e].push(t)))}function bn(e,t,n){e.config.globalProperties[t]=n}function vn(e){return e.$slots}function wn(...e){return new wn.__(...e)}function _n(...e){return new _n.__(...e)}function In(){}function On(){}function En(){}function Tn(e=null){return Object(i["w"])(e)}function kn(e,t){for(var n in t)e[n]=t[n]}function Sn(e){return sn({strict:e.strict||!0,state:e.state||{},mutations:e.mutation||{},actions:e.action||{}})}mn.create=ct,mn.history=Q,mn.hash={tag:X},mn.try={catch:"/:catchAll(.*)"},yn.line=Object(i["w"])(!0),En.get=function(...e){return fn.a.get(...e)},En.post=function(...e){return fn.a.post(...e)},En.url="/",kn.clear=function(e){for(var t in e)delete e[t]},Sn.create=sn,Sn.use=pt;var An={application:i["c"],properties:bn,to:{reference:i["C"]},reference:Tn,react:kn,reactive:function(e={}){return Object(i["v"])(e)},compute:i["b"],watch:i["H"],watching:i["I"],inject:i["l"],store:Sn,route:pn,router:mn,on:yn,emit:gn,process:{mode:"production"},request:En,response:On,respond:In,slot:vn,component:wn,element:_n,directive:function(e,t,n){Object.is.function(n)?e.directive(t,{beforeMount:n,updated:n}):e.directive(t,{beforeMount:n.mount,updated:n.update})},next:function(e){return{name:e.name||"",props:e.properties||[],data(e){return{}},setup(t){if(e.setup)return e.setup.call(this,t)},mounted(){e.mount&&e.mount.call(this)},unmounted(){e.eject&&e.eject.call(this)},created(){e.create&&e.create.call(this)},updated(){e.update&&e.update.call(this)},methods:e.method}}},jn=(n("5567"),n("72fe")),xn=n.n(jn),Cn=n("df2f"),Nn=n.n(Cn),Rn=n("94f8"),Dn=n.n(Rn);Function.define(Function,"hash",(function(){})),Function.define(Function.hash,"md",(function(e){return xn()((e||"").toString()).toString()})),Function.define(Function.hash,"sha",(function(e){return Nn()((e||"").toString()).toString()})),Function.define(Function.hash.sha,"one",(function(e){return Dn()((e||"").toString()).toString()})),Function.define(Function.hash,"password",(function(e){return Function.hash.md(e)+Function.hash.sha(e)+Function.hash.sha.one(e)})),Function.define(Function.hash,"s",(function(e,t){t=t||{separator:"-"};var n=Function.hash.md(e),r=Function.hash.sha(e),i=Function.hash.sha.one(e);return[n,r,i].join(t.separator).substr(t.offset,t.length)})),Function.define(Function.hash,"shuffle",(function(...e){var t=[],n=String.char.alpha.numeric,r=Function.hash.shuffle.length;for(var i in e)Object.is.string(e[i])?n=e[i]:Object.is.integer(e[i])&&(r=e[i]);for(i=0;i<r;i++)t.push(n.rand());return t.join("")})),Function.define(Function.hash.shuffle,"length",24);n("fa1c");var Fn=n("5317"),Pn=n.n(Fn);function Ln(e,t="",n){let r=e;n=n||"undefined"!==typeof location&&location,null==e&&(e=n.protocol+"//"+n.host),"string"===typeof e&&("/"===e.charAt(0)&&(e="/"===e.charAt(1)?n.protocol+e:n.host+e),/^(https?|wss?):\/\//.test(e)||(e="undefined"!==typeof n?n.protocol+"//"+e:"https://"+e),r=Pn()(e)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const i=-1!==r.host.indexOf(":"),s=i?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+t,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}var Mn=n("c9eb"),Un=n.n(Mn),Vn=n("20a4"),Bn=function(e){const t=e.xdomain;try{if("undefined"!==typeof XMLHttpRequest&&(!t||Un.a))return new XMLHttpRequest}catch(n){}if(!t)try{return new(Vn["a"][["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(n){}},qn=n("af7f"),zn=n("b19d"),Gn=n("34ba"),$n=n("0299"),Kn=n.n($n),Hn=n("4f2a"),Wn=n.n(Hn),Yn=n("33e8");class Jn extends Gn["a"]{constructor(){super(...arguments),this.polling=!1}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let e=0;this.polling&&(e++,this.once("pollComplete",(function(){--e||t()}))),this.writable||(e++,this.once("drain",(function(){--e||t()})))}else t()}poll(){this.polling=!0,this.doPoll(),this.emit("poll")}onData(e){const t=e=>{if("opening"===this.readyState&&"open"===e.type&&this.onOpen(),"close"===e.type)return this.onClose(),!1;this.onPacket(e)};Object(Yn["b"])(e,this.socket.binaryType).forEach(t),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};"open"===this.readyState?e():this.once("open",e)}write(e){this.writable=!1,Object(Yn["d"])(e,e=>{this.doWrite(e,()=>{this.writable=!0,this.emit("drain")})})}uri(){let e=this.query||{};const t=this.opts.secure?"https":"http";let n="";!1!==this.opts.timestampRequests&&(e[this.opts.timestampParam]=Kn()()),this.supportsBinary||e.sid||(e.b64=1),this.opts.port&&("https"===t&&443!==Number(this.opts.port)||"http"===t&&80!==Number(this.opts.port))&&(n=":"+this.opts.port);const r=Wn.a.encode(e),i=-1!==this.opts.hostname.indexOf(":");return t+"://"+(i?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(r.length?"?"+r:"")}}function Qn(){}const Xn=function(){const e=new Bn({xdomain:!1});return null!=e.responseType}();class Zn extends Jn{constructor(e){if(super(e),"undefined"!==typeof location){const t="https:"===location.protocol;let n=location.port;n||(n=t?"443":"80"),this.xd="undefined"!==typeof location&&e.hostname!==location.hostname||n!==e.port,this.xs=e.secure!==t}const t=e&&e.forceBase64;this.supportsBinary=Xn&&!t}request(e={}){return Object.assign(e,{xd:this.xd,xs:this.xs},this.opts),new er(this.uri(),e)}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",e=>{this.onError("xhr post error",e)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",e=>{this.onError("xhr poll error",e)}),this.pollXhr=e}}class er extends zn["Emitter"]{constructor(e,t){super(),Object(qn["a"])(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.create()}create(){const e=Object(qn["b"])(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;const t=this.xhr=new Bn(e);try{t.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0);for(let e in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(e)&&t.setRequestHeader(e,this.opts.extraHeaders[e])}}catch(n){}if("POST"===this.method)try{t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(n){}try{t.setRequestHeader("Accept","*/*")}catch(n){}"withCredentials"in t&&(t.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(t.timeout=this.opts.requestTimeout),t.onreadystatechange=()=>{4===t.readyState&&(200===t.status||1223===t.status?this.onLoad():this.setTimeoutFn(()=>{this.onError("number"===typeof t.status?t.status:0)},0))},t.send(this.data)}catch(n){return void this.setTimeoutFn(()=>{this.onError(n)},0)}"undefined"!==typeof document&&(this.index=er.requestsCount++,er.requests[this.index]=this)}onSuccess(){this.emit("success"),this.cleanup()}onData(e){this.emit("data",e),this.onSuccess()}onError(e){this.emit("error",e),this.cleanup(!0)}cleanup(e){if("undefined"!==typeof this.xhr&&null!==this.xhr){if(this.xhr.onreadystatechange=Qn,e)try{this.xhr.abort()}catch(t){}"undefined"!==typeof document&&delete er.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;null!==e&&this.onData(e)}abort(){this.cleanup()}}if(er.requestsCount=0,er.requests={},"undefined"!==typeof document)if("function"===typeof attachEvent)attachEvent("onunload",tr);else if("function"===typeof addEventListener){const e="onpagehide"in Vn["a"]?"pagehide":"unload";addEventListener(e,tr,!1)}function tr(){for(let e in er.requests)er.requests.hasOwnProperty(e)&&er.requests[e].abort()}var nr=n("1f49");const rr={websocket:nr["a"],polling:Zn};class ir extends zn["Emitter"]{constructor(e,t={}){super(),e&&"object"===typeof e&&(t=e,e=null),e?(e=Pn()(e),t.hostname=e.host,t.secure="https"===e.protocol||"wss"===e.protocol,t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=Pn()(t.host).host),Object(qn["a"])(this,t),this.secure=null!=t.secure?t.secure:"undefined"!==typeof location&&"https:"===location.protocol,t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||("undefined"!==typeof location?location.hostname:"localhost"),this.port=t.port||("undefined"!==typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},t),this.opts.path=this.opts.path.replace(/\/$/,"")+"/","string"===typeof this.opts.query&&(this.opts.query=Wn.a.decode(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,"function"===typeof addEventListener&&(this.opts.closeOnBeforeunload&&addEventListener("beforeunload",()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},!1),"localhost"!==this.hostname&&(this.offlineEventListener=()=>{this.onClose("transport close")},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=sr(this.opts.query);t.EIO=Yn["e"],t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts.transportOptions[e],this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new rr[e](n)}open(){let e;if(this.opts.rememberUpgrade&&ir.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))e="websocket";else{if(0===this.transports.length)return void this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);e=this.transports[0]}this.readyState="opening";try{e=this.createTransport(e)}catch(t){return this.transports.shift(),void this.open()}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",()=>{this.onClose("transport close")})}probe(e){let t=this.createTransport(e),n=!1;ir.priorWebsocketSuccess=!1;const r=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",e=>{if(!n)if("pong"===e.type&&"probe"===e.data){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;ir.priorWebsocketSuccess="websocket"===t.name,this.transport.pause(()=>{n||"closed"!==this.readyState&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const e=new Error("probe error");e.transport=t.name,this.emitReserved("upgradeError",e)}}))};function i(){n||(n=!0,u(),t.close(),t=null)}const s=e=>{const n=new Error("probe error: "+e);n.transport=t.name,i(),this.emitReserved("upgradeError",n)};function o(){s("transport closed")}function a(){s("socket closed")}function c(e){t&&e.name!==t.name&&i()}const u=()=>{t.removeListener("open",r),t.removeListener("error",s),t.removeListener("close",o),this.off("close",a),this.off("upgrading",c)};t.once("open",r),t.once("error",s),t.once("close",o),this.once("close",a),this.once("upgrading",c),t.open()}onOpen(){if(this.readyState="open",ir.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade&&this.transport.pause){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emitReserved("flush"))}write(e,t,n){return this.sendPacket("message",e,t,n),this}send(e,t,n){return this.sendPacket("message",e,t,n),this}sendPacket(e,t,n,r){if("function"===typeof t&&(r=t,t=void 0),"function"===typeof n&&(r=n,n=null),"closing"===this.readyState||"closed"===this.readyState)return;n=n||{},n.compress=!1!==n.compress;const i={type:e,data:t,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}onError(e){ir.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),"function"===typeof removeEventListener&&removeEventListener("offline",this.offlineEventListener,!1),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let n=0;const r=e.length;for(;n<r;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}function sr(e){const t={};for(let n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}ir.protocol=Yn["e"];ir.protocol;const or="function"===typeof ArrayBuffer,ar=e=>"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,cr=Object.prototype.toString,ur="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===cr.call(Blob),lr="function"===typeof File||"undefined"!==typeof File&&"[object FileConstructor]"===cr.call(File);function hr(e){return or&&(e instanceof ArrayBuffer||ar(e))||ur&&e instanceof Blob||lr&&e instanceof File}function dr(e,t){if(!e||"object"!==typeof e)return!1;if(Array.isArray(e)){for(let t=0,n=e.length;t<n;t++)if(dr(e[t]))return!0;return!1}if(hr(e))return!0;if(e.toJSON&&"function"===typeof e.toJSON&&1===arguments.length)return dr(e.toJSON(),!0);for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&dr(e[n]))return!0;return!1}function fr(e){const t=[],n=e.data,r=e;return r.data=pr(n,t),r.attachments=t.length,{packet:r,buffers:t}}function pr(e,t){if(!e)return e;if(hr(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}if(Array.isArray(e)){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=pr(e[r],t);return n}if("object"===typeof e&&!(e instanceof Date)){const n={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=pr(e[r],t));return n}return e}function mr(e,t){return e.data=gr(e.data,t),e.attachments=void 0,e}function gr(e,t){if(!e)return e;if(e&&e._placeholder)return t[e.num];if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=gr(e[n],t);else if("object"===typeof e)for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=gr(e[n],t));return e}const yr=5;var br;(function(e){e[e["CONNECT"]=0]="CONNECT",e[e["DISCONNECT"]=1]="DISCONNECT",e[e["EVENT"]=2]="EVENT",e[e["ACK"]=3]="ACK",e[e["CONNECT_ERROR"]=4]="CONNECT_ERROR",e[e["BINARY_EVENT"]=5]="BINARY_EVENT",e[e["BINARY_ACK"]=6]="BINARY_ACK"})(br||(br={}));class vr{encode(e){return e.type!==br.EVENT&&e.type!==br.ACK||!dr(e)?[this.encodeAsString(e)]:(e.type=e.type===br.EVENT?br.BINARY_EVENT:br.BINARY_ACK,this.encodeAsBinary(e))}encodeAsString(e){let t=""+e.type;return e.type!==br.BINARY_EVENT&&e.type!==br.BINARY_ACK||(t+=e.attachments+"-"),e.nsp&&"/"!==e.nsp&&(t+=e.nsp+","),null!=e.id&&(t+=e.id),null!=e.data&&(t+=JSON.stringify(e.data)),t}encodeAsBinary(e){const t=fr(e),n=this.encodeAsString(t.packet),r=t.buffers;return r.unshift(n),r}}class wr extends zn["Emitter"]{constructor(){super()}add(e){let t;if("string"===typeof e)t=this.decodeString(e),t.type===br.BINARY_EVENT||t.type===br.BINARY_ACK?(this.reconstructor=new Ir(t),0===t.attachments&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t);else{if(!hr(e)&&!e.base64)throw new Error("Unknown type: "+e);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t))}}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(void 0===br[n.type])throw new Error("unknown packet type "+n.type);if(n.type===br.BINARY_EVENT||n.type===br.BINARY_ACK){const r=t+1;while("-"!==e.charAt(++t)&&t!=e.length);const i=e.substring(r,t);if(i!=Number(i)||"-"!==e.charAt(t))throw new Error("Illegal attachments");n.attachments=Number(i)}if("/"===e.charAt(t+1)){const r=t+1;while(++t){const n=e.charAt(t);if(","===n)break;if(t===e.length)break}n.nsp=e.substring(r,t)}else n.nsp="/";const r=e.charAt(t+1);if(""!==r&&Number(r)==r){const r=t+1;while(++t){const n=e.charAt(t);if(null==n||Number(n)!=n){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=_r(e.substr(t));if(!wr.isPayloadValid(n.type,r))throw new Error("invalid payload");n.data=r}return n}static isPayloadValid(e,t){switch(e){case br.CONNECT:return"object"===typeof t;case br.DISCONNECT:return void 0===t;case br.CONNECT_ERROR:return"string"===typeof t||"object"===typeof t;case br.EVENT:case br.BINARY_EVENT:return Array.isArray(t)&&t.length>0;case br.ACK:case br.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&this.reconstructor.finishedReconstruction()}}function _r(e){try{return JSON.parse(e)}catch(t){return!1}}class Ir{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const e=mr(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Or(e,t,n){return e.on(t,n),function(){e.off(t,n)}}const Er=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Tr extends zn["Emitter"]{constructor(e,t,n){super(),this.connected=!1,this.disconnected=!0,this.receiveBuffer=[],this.sendBuffer=[],this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this.io._autoConnect&&this.open()}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Or(e,"open",this.onopen.bind(this)),Or(e,"packet",this.onpacket.bind(this)),Or(e,"error",this.onerror.bind(this)),Or(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected||(this.subEvents(),this.io["_reconnecting"]||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(Er.hasOwnProperty(e))throw new Error('"'+e+'" is a reserved event name');t.unshift(e);const n={type:br.EVENT,data:t,options:{}};if(n.options.compress=!1!==this.flags.compress,"function"===typeof t[t.length-1]){const e=this.ids++,r=t.pop();this._registerAckCallback(e,r),n.id=e}const r=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable,i=this.flags.volatile&&(!r||!this.connected);return i||(this.connected?this.packet(n):this.sendBuffer.push(n)),this.flags={},this}_registerAckCallback(e,t){const n=this.flags.timeout;if(void 0===n)return void(this.acks[e]=t);const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let t=0;t<this.sendBuffer.length;t++)this.sendBuffer[t].id===e&&this.sendBuffer.splice(t,1);t.call(this,new Error("operation has timed out"))},n);this.acks[e]=(...e)=>{this.io.clearTimeoutFn(r),t.apply(this,[null,...e])}}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){"function"==typeof this.auth?this.auth(e=>{this.packet({type:br.CONNECT,data:e})}):this.packet({type:br.CONNECT,data:this.auth})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e){this.connected=!1,this.disconnected=!0,delete this.id,this.emitReserved("disconnect",e)}onpacket(e){const t=e.nsp===this.nsp;if(t)switch(e.type){case br.CONNECT:if(e.data&&e.data.sid){const t=e.data.sid;this.onconnect(t)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case br.EVENT:this.onevent(e);break;case br.BINARY_EVENT:this.onevent(e);break;case br.ACK:this.onack(e);break;case br.BINARY_ACK:this.onack(e);break;case br.DISCONNECT:this.ondisconnect();break;case br.CONNECT_ERROR:this.destroy();const t=new Error(e.data.message);t.data=e.data.data,this.emitReserved("connect_error",t);break}}onevent(e){const t=e.data||[];null!=e.id&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e)}ack(e){const t=this;let n=!1;return function(...r){n||(n=!0,t.packet({type:br.ACK,id:e,data:r}))}}onack(e){const t=this.acks[e.id];"function"===typeof t&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e){this.id=e,this.connected=!0,this.disconnected=!1,this.emitBuffered(),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>this.packet(e)),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io["_destroy"](this)}disconnect(){return this.connected&&this.packet({type:br.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}}var kr=n("0b64"),Sr=n.n(kr);class Ar extends zn["Emitter"]{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&"object"===typeof e&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Object(qn["a"])(this,t),this.reconnection(!1!==t.reconnection),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(n=t.randomizationFactor)&&void 0!==n?n:.5),this.backoff=new Sr.a({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==t.timeout?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||r;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=!1!==t.autoConnect,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return void 0===e?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return void 0===e?this._reconnectionDelay:(this._reconnectionDelay=e,null===(t=this.backoff)||void 0===t||t.setMin(e),this)}randomizationFactor(e){var t;return void 0===e?this._randomizationFactor:(this._randomizationFactor=e,null===(t=this.backoff)||void 0===t||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return void 0===e?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,null===(t=this.backoff)||void 0===t||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new ir(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const r=Or(t,"open",(function(){n.onopen(),e&&e()})),i=Or(t,"error",t=>{n.cleanup(),n._readyState="closed",this.emitReserved("error",t),e?e(t):n.maybeReconnectOnOpen()});if(!1!==this._timeout){const e=this._timeout;0===e&&r();const n=this.setTimeoutFn(()=>{r(),t.close(),t.emit("error",new Error("timeout"))},e);this.opts.autoUnref&&n.unref(),this.subs.push((function(){clearTimeout(n)}))}return this.subs.push(r),this.subs.push(i),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Or(e,"ping",this.onping.bind(this)),Or(e,"data",this.ondata.bind(this)),Or(e,"error",this.onerror.bind(this)),Or(e,"close",this.onclose.bind(this)),Or(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){this.decoder.add(e)}ondecoded(e){this.emitReserved("packet",e)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n||(n=new Tr(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t){const e=this.nsps[n];if(e.active)return}this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),e.skipReconnect||e.open(t=>{t?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",t)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push((function(){clearTimeout(n)}))}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const jr={};function xr(e,t){"object"===typeof e&&(t=e,e=void 0),t=t||{};const n=Ln(e,t.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=jr[i]&&s in jr[i]["nsps"],a=t.forceNew||t["force new connection"]||!1===t.multiplex||o;let c;return a?c=new Ar(r,t):(jr[i]||(jr[i]=new Ar(r,t)),c=jr[i]),n.query&&!t.query&&(t.query=n.queryKey),c.socket(n.path,t)}Object.assign(xr,{Manager:Ar,Socket:Tr,io:xr,connect:xr}),Function.define(Function.web.socket.io,"client",xr,{configurable:!0,enumerable:!0,writable:!0});var Cr=n("7ded"),Nr="firebase",Rr="9.6.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Cr["a"].registerVersion(Nr,Rr,"app-compat");n("5994");var Dr=n("0829"),Fr=n("1fd5"),Pr=n("22e5");const Lr="@firebase/firestore-compat",Mr="0.1.16";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ur(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new Dr["g"]("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(){if("undefined"===typeof Uint8Array)throw new Dr["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function Br(){if(!Object(Dr["r"])())throw new Dr["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class qr{constructor(e){this._delegate=e}static fromBase64String(e){return Br(),new qr(Dr["b"].fromBase64String(e))}static fromUint8Array(e){return Vr(),new qr(Dr["b"].fromUint8Array(e))}toBase64(){return Br(),this._delegate.toBase64()}toUint8Array(){return Vr(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(e){return Gr(e,["next","error","complete"])}function Gr(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{enableIndexedDbPersistence(e,t){return Object(Dr["F"])(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Object(Dr["G"])(e._delegate)}clearIndexedDbPersistence(e){return Object(Dr["x"])(e._delegate)}}class Kr{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Dr["m"]||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Object(Dr["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Object(Dr["A"])(this._delegate,e,t,n)}enableNetwork(){return Object(Dr["H"])(this._delegate)}disableNetwork(){return Object(Dr["D"])(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Object(Dr["t"])("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(Dr["lb"])(this._delegate)}onSnapshotsInSync(e){return Object(Dr["Y"])(this._delegate,e)}get app(){if(!this._appCompat)throw new Dr["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ai(this,Object(Dr["y"])(this._delegate,e))}catch(t){throw Zr(t,"collection()","Firestore.collection()")}}doc(e){try{return new Xr(this,Object(Dr["E"])(this._delegate,e))}catch(t){throw Zr(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new ii(this,Object(Dr["z"])(this._delegate,e))}catch(t){throw Zr(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Object(Dr["db"])(this._delegate,t=>e(new Yr(this,t)))}batch(){return Object(Dr["K"])(this._delegate),new Jr(new Dr["l"](this._delegate,e=>Object(Dr["L"])(this._delegate,e)))}loadBundle(e){return Object(Dr["V"])(this._delegate,e)}namedQuery(e){return Object(Dr["W"])(this._delegate,e).then(e=>e?new ii(this,e):null)}}class Hr extends Dr["a"]{constructor(e){super(),this.firestore=e}convertBytes(e){return new qr(new Dr["b"](e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Xr.forKey(t,this.firestore,null)}}function Wr(e){Object(Dr["gb"])(e)}class Yr{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Hr(e)}get(e){const t=ci(e);return this._delegate.get(t).then(e=>new ni(this._firestore,new Dr["e"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){const r=ci(e);return n?(Ur("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=ci(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=ci(e);return this._delegate.delete(t),this}}class Jr{constructor(e){this._delegate=e}set(e,t,n){const r=ci(e);return n?(Ur("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=ci(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=ci(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Qr{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Dr["i"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ri(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Qr.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new Qr(e,new Hr(e),t),r.set(t,i)),i}}Qr.INSTANCES=new WeakMap;class Xr{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Hr(e)}static forPath(e,t,n){if(e.length%2!==0)throw new Dr["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Xr(t,new Dr["d"](t._delegate,n,new Dr["n"](e)))}static forKey(e,t,n){return new Xr(t,new Dr["d"](t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new ai(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ai(this.firestore,Object(Dr["y"])(this._delegate,e))}catch(t){throw Zr(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Object(Fr["l"])(e),e instanceof Dr["d"]&&Object(Dr["cb"])(this._delegate,e)}set(e,t){t=Ur("DocumentReference.set",t);try{return t?Object(Dr["fb"])(this._delegate,e,t):Object(Dr["fb"])(this._delegate,e)}catch(n){throw Zr(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Object(Dr["kb"])(this._delegate,e):Object(Dr["kb"])(this._delegate,e,t,...n)}catch(r){throw Zr(r,"updateDoc()","DocumentReference.update()")}}delete(){return Object(Dr["B"])(this._delegate)}onSnapshot(...e){const t=ei(e),n=ti(e,e=>new ni(this.firestore,new Dr["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return Object(Dr["X"])(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(Dr["N"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(Dr["O"])(this._delegate):Object(Dr["M"])(this._delegate),t.then(e=>new ni(this.firestore,new Dr["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new Xr(this.firestore,e?this._delegate.withConverter(Qr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Zr(e,t,n){return e.message=e.message.replace(t,n),e}function ei(e){for(const t of e)if("object"===typeof t&&!zr(t))return t;return{}}function ti(e,t){var n,r;let i;return i=zr(e[0])?e[0]:zr(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class ni{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Xr(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Object(Dr["hb"])(this._delegate,e._delegate)}}class ri extends ni{data(e){const t=this._delegate.data(e);return Object(Dr["q"])(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class ii{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Hr(e)}where(e,t,n){try{return new ii(this.firestore,Object(Dr["ab"])(this._delegate,Object(Dr["mb"])(e,t,n)))}catch(r){throw Zr(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new ii(this.firestore,Object(Dr["ab"])(this._delegate,Object(Dr["Z"])(e,t)))}catch(n){throw Zr(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new ii(this.firestore,Object(Dr["ab"])(this._delegate,Object(Dr["T"])(e)))}catch(t){throw Zr(t,"limit()","Query.limit()")}}limitToLast(e){try{return new ii(this.firestore,Object(Dr["ab"])(this._delegate,Object(Dr["U"])(e)))}catch(t){throw Zr(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new ii(this.firestore,Object(Dr["ab"])(this._delegate,Object(Dr["jb"])(...e)))}catch(t){throw Zr(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new ii(this.firestore,Object(Dr["ab"])(this._delegate,Object(Dr["ib"])(...e)))}catch(t){throw Zr(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new ii(this.firestore,Object(Dr["ab"])(this._delegate,Object(Dr["J"])(...e)))}catch(t){throw Zr(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new ii(this.firestore,Object(Dr["ab"])(this._delegate,Object(Dr["I"])(...e)))}catch(t){throw Zr(t,"endAt()","Query.endAt()")}}isEqual(e){return Object(Dr["bb"])(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(Dr["Q"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(Dr["R"])(this._delegate):Object(Dr["P"])(this._delegate),t.then(e=>new oi(this.firestore,new Dr["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=ei(e),n=ti(e,e=>new oi(this.firestore,new Dr["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return Object(Dr["X"])(this._delegate,t,n)}withConverter(e){return new ii(this.firestore,e?this._delegate.withConverter(Qr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class si{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new ri(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class oi{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new ii(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ri(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new si(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new ri(this._firestore,n))})}isEqual(e){return Object(Dr["hb"])(this._delegate,e._delegate)}}class ai extends ii{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Xr(this.firestore,e):null}doc(e){try{return new Xr(this.firestore,void 0===e?Object(Dr["E"])(this._delegate):Object(Dr["E"])(this._delegate,e))}catch(t){throw Zr(t,"doc()","CollectionReference.doc()")}}add(e){return Object(Dr["u"])(this._delegate,e).then(e=>new Xr(this.firestore,e))}isEqual(e){return Object(Dr["cb"])(this._delegate,e._delegate)}withConverter(e){return new ai(this.firestore,e?this._delegate.withConverter(Qr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ci(e){return Object(Dr["p"])(e,Dr["d"])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(...e){this._delegate=new Dr["f"](...e)}static documentId(){return new ui(Dr["o"].keyField().canonicalString())}isEqual(e){return e=Object(Fr["l"])(e),e instanceof Dr["f"]&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this._delegate=e}static serverTimestamp(){const e=Object(Dr["eb"])();return e._methodName="FieldValue.serverTimestamp",new li(e)}static delete(){const e=Object(Dr["C"])();return e._methodName="FieldValue.delete",new li(e)}static arrayUnion(...e){const t=Object(Dr["w"])(...e);return t._methodName="FieldValue.arrayUnion",new li(t)}static arrayRemove(...e){const t=Object(Dr["v"])(...e);return t._methodName="FieldValue.arrayRemove",new li(t)}static increment(e){const t=Object(Dr["S"])(e);return t._methodName="FieldValue.increment",new li(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi={Firestore:Kr,GeoPoint:Dr["h"],Timestamp:Dr["k"],Blob:qr,Transaction:Yr,WriteBatch:Jr,DocumentReference:Xr,DocumentSnapshot:ni,Query:ii,QueryDocumentSnapshot:ri,QuerySnapshot:oi,CollectionReference:ai,FieldPath:ui,FieldValue:li,setLogLevel:Wr,CACHE_SIZE_UNLIMITED:Dr["c"]};function di(e,t){e.INTERNAL.registerComponent(new Pr["a"]("firestore-compat",e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)},"PUBLIC").setServiceProps(Object.assign({},hi)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(e){di(e,(e,t)=>new Kr(e,t,new $r)),e.registerVersion(Lr,Mr)}fi(Cr["a"]);var pi=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,i,s;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(i=r;0!==i--;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(s=Object.keys(t),r=s.length,r!==Object.keys(n).length)return!1;for(i=r;0!==i--;)if(!Object.prototype.hasOwnProperty.call(n,s[i]))return!1;for(i=r;0!==i--;){var o=s[i];if(!e(t[o],n[o]))return!1}return!0}return t!==t&&n!==n};const mi="__googleMapsScriptId";var gi;(function(e){e[e["INITIALIZED"]=0]="INITIALIZED",e[e["LOADING"]=1]="LOADING",e[e["SUCCESS"]=2]="SUCCESS",e[e["FAILURE"]=3]="FAILURE"})(gi||(gi={}));class yi{constructor({apiKey:e,channel:t,client:n,id:r=mi,libraries:i=[],language:s,region:o,version:a,mapIds:c,nonce:u,retries:l=3,url:h="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.version=a,this.apiKey=e,this.channel=t,this.client=n,this.id=r||mi,this.libraries=i,this.language=s,this.region=o,this.mapIds=c,this.nonce=u,this.retries=l,this.url=h,yi.instance){if(!pi(this.options,yi.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(yi.instance.options)}`);return yi.instance}yi.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}get status(){return this.errors.length?gi.FAILURE:this.done?gi.SUCCESS:this.loading?gi.LOADING:gi.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback="+this.CALLBACK,this.apiKey&&(e+="&key="+this.apiKey),this.channel&&(e+="&channel="+this.channel),this.client&&(e+="&client="+this.client),this.libraries.length>0&&(e+="&libraries="+this.libraries.join(",")),this.language&&(e+="&language="+this.language),this.region&&(e+="&region="+this.region),this.version&&(e+="&v="+this.version),this.mapIds&&(e+="&map_ids="+this.mapIds.join(",")),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(n=>{n?t(n.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))return void this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const e=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}Function.define(Function.plugin.google.fire.base,"link",Cr["a"],{configurable:!0,enumerable:!0,writable:!0}),Function.define(Function.plugin.google.map,"loader",(function(e){return new yi({apiKey:e})}));var bi={define:Function.define,is:Object.is,un:Object.un,to:Object.to,to_bool:Object.to_bool,to_boolean:Object.to_boolean,object:Object,array:Array,string:String,char:String.char,math:Math,number:Number,regex:RegExp,function:Function,date:Date,time:{stamp:Date.stamp,sleep:Date.sleep,interval:Date.interval,zone:Date.Time.zone},url:URL,parse_url:URL.parse_url,http:Function.http,serialize:Function.serialize,xml:Function.xml,json:JSON,path:Function.path,file:Function.file,dir:Function.dir,diagnostic:Function.diagnostic,event:Function.event,util:Function.util,promise:Function.promise,cpu:Function.cpu,compress:Function.compress,hash:Function.hash,network:Function.network,stream:Function.stream,data:Function.data,db:Function.db,sql:Function.sql,store:Function.store,storage:Function.storage,session:Function.session,cookie:Function.cookie,audio:Function.audio,dom:Function.dom,component:Function.component,element:Function.element,query:Function.query,attribute:Function.attribute,mobile:Function.mobile,visitor:Function.visitor,scroll:Function.scroll,user:Function.user,email:Function.email,phone:Function.phone,system:Function.system,plugin:Function.plugin,web:Function.web,express:Function.express,cross:Function.cross,geo:Function.geo,map:Function.map,context:Function.context,argument:Function.argument,option:Function.option,optional:Function.optional,setting:Function.setting,debug:Function.debug,log:Function.log,echo:Function.echo,print:Function.print,validate:Function.validate,app:Function.app,application:Function.application,console:Function.console,zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12};bi.route=An.route,bi.router=An.router;const vi=bi,wi=function(){};t["a"]={__:An.reactive(),var:An.reactive(),log:{},cache:{},part:[],partial:[],app:An.reactive(),application:An.application,properties:An.properties,to:An.to,reference:An.reference,reactive:An.reactive,react:An.react,compute:An.compute,watch:An.watch,watching:An.watching,inject:An.inject,store:An.store,on:An.on,emit:An.emit,process:An.process,request:An.request,slot:An.slot,component:An.component,element:An.element,next:An.next,directive:An.directive}},abc5:function(e,t,n){"use strict";(function(e){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));const s="function"===typeof Proxy}).call(this,n("c8ba"))},ada8:function(e,t,n){"use strict";var r=n("a5fa"),i=n("3234");let{define:s}=r["b"],{zero:o,one:a}=r["b"];var c=r["a"].reference();r["a"].start=function(e,t={delay:!0}){r["a"].route=r["b"].route(),r["a"].router=r["b"].router(),r["a"].x=r["a"].store.use(),r["a"].date.start(),(r["a"].visitor=r["a"].reactive(r["b"].visitor()))&&(r["b"].dom.attribute("body","device",r["a"].visitor.device.name),r["b"].dom.attribute("body","browser",r["a"].visitor.browser.platform),["computer"].exist(r["a"].visitor.device.name)?r["a"].computer=!0:r["a"].mobile=!0),r["a"].watch(r["a"].socket.ready,(function(n){r["a"].socket.emit("package").catch((function(e){r["a"].emit("web-socket:error",e)})).then((function(n){if(r["a"].react(r["a"].package,r["b"].object.merge(i,n.package)),r["a"].react(r["a"].visitor,n.visitor),!r["a"].session.check()){if(r["a"].session.apply(n.session),r["a"].package.language&&(r["a"].language.list.value=r["a"].package.language.list),r["a"].language.apply(n.language),r["a"].package.date)for(var s in r["a"].package.date.format)r["b"].date.format(s,r["a"].package.date.format[s]);r["a"].db.fire.base.on("start",(function(){})),r["a"].db.setup(),r["a"].db.fire.base(),r["a"].emit("web-socket"),e&&e.call(r["a"]),(r["a"].ping||(r["a"].ping=function(){}))&&(r["a"].ping.cache=r["b"].time.interval((function(){r["a"].emit("ping")}),r["a"].ping.interval=r["a"].package.ping.interval)),null===t.delay?r["b"].time.sleep((function(){r["a"].ready.value=!0})):r["a"].ready.value=!0,c.value=!0}}))})),r["b"].time.sleep((function(){r["b"].un(c.value)&&r["a"].emit("web-socket:error")}),a+a+a),r["a"].emit("setup")},(r["a"].system=function(){})&&(r["a"].system.ready=r["a"].reference())&&(r["a"].ready=r["a"].reference())&&(r["a"].package=r["a"].reactive()),r["a"].import=function(){},r["a"].export=function(e,t){return r["b"].is.function(e)&&(t=e)&&(e=r["b"].un.define()),r["a"].system.ready.value&&t&&t.call(),r["a"].watch(r["a"].ready,(function(e){e&&t&&(r["a"].system.ready.value=!0)&&t.call()})),r["b"].object.concat({vue:r["a"]},e)},r["a"].model=r["a"].reactive({format:function(e){var t="vue.model.";return(e=r["b"].to.string(e)||"*").begin(t)?e.shift(t):e}}),r["a"].layout=function(){if(r["a"].route.meta["layout"]){var e="layout".concat(":").concat(r["a"].route.meta["layout"]);return r["a"].partial.exist(e)?e:"layout:slot"}return"layout:slot"},r["a"].prop=function(e){var t=[];for(var n in e=e.split("-"))n==o?t.push(e[n]):t.push(e[n].uc_begin());return t.join("")},r["a"].prop.s=function(...e){return e.join("-")},r["a"].commit=function(e){return r["a"].x.commit("mutation",e)},r["a"].dispatch=function(e){return r["a"].x.dispatch("action",e)};let{define:u}=r["b"],{zero:l,one:h}=r["b"];r["a"].on("app:mount",(function(){})),r["a"].on("app:eject",(function(){})),r["a"].on("app:create",(function(){})),r["a"].on("app:update",(function(){})),r["a"].on("setup",(function(){})),r["a"].on("web-socket",(function(){})),r["a"].on("web-socket:error",(function(e){console.error("web-socket:error",e)})),r["a"].on("date:routine",(function(){})),r["a"].on("ping",(function(){})),r["a"].on("ch:url",(function(){}));let{define:d}=r["b"],{zero:f,one:p}=r["b"],{define:m}=r["b"],{zero:g,one:y}=r["b"];window.url=r["b"].url.parse(r["b"].string(window.location)),r["a"].url=r["a"].reactive(),r["a"].url.param=function(e){return r["a"].route["param".concat("s")][e]},r["a"].url.previous=function(e=y){r["a"].router.go(-e)},r["a"].url.go=function(e,t){return!0===e?r["a"].router.go():r["b"].is.object(e)||"/"===e.begin()?r["a"].router.push(e):r["a"].router.push(r["b"].object.concat({name:e},t))},r["a"].parse_url=function(e=!0){var t=window.location.protocol.pop(),n=window.location.host,i=r["a"].route.path,s=r["b"].url.query.format(r["a"].route.query),o=r["b"].url.parse(t.concat("://").concat(n).concat(i).concat(s));for(var a in o)r["a"].url[a]=o[a]},r["a"].fetch=function(...e){return r["a"].fetch.get(...e)},r["a"].fetch.get=function(e,t){return e=[e],t&&e.push({["header".concat("s")]:t}),r["a"].request.get(...e)},r["a"].fetch.post=function(e,t,n){return r["a"].request.post(e,t,n)};let{define:b}=r["b"],{zero:v,one:w}=r["b"];var _=r["b"].object.concat({name:r["b"].session.name,signature:r["b"].session.signature,mode:r["b"].session.mode,secure:r["b"].session.secure},i.session),I=r["b"].storage.set("session:name",_.name||r["b"].session.name,!0),O=r["b"].storage.set("session:signature",_.signature||r["b"].session.signature,!0),E=r["b"].storage.set("session:mode",_.mode||r["b"].session.mode,!0),T=r["b"].storage.set("session:secure",_.secure||r["b"].session.secure,!0);r["a"].session=new r["b"].session.manager,r["a"].session.start({name:I,signature:O,mode:E,secure:T},(function(e){})),r["a"].session.check=function(){var e=v;return r["a"].package.session&&(r["a"].package.session.name===r["b"].storage.get("session:name")===!1&&r["b"].storage.set("session:name",r["a"].package.session.name)&&e++,r["a"].package.session.signature===r["b"].storage.get("session:signature")===!1&&r["b"].storage.set("session:signature",r["a"].package.session.signature)&&e++,r["a"].package.session.mode===r["b"].storage.get("session:mode")===!1&&r["b"].storage.set("session:mode",r["a"].package.session.mode)&&e++,r["a"].package.session.secure===r["b"].storage.get("session:secure")===!1&&r["b"].storage.set("session:secure",r["a"].package.session.secure)&&e++),e&&r["a"].router.go(),e};let{define:k}=r["b"],{zero:S,one:A}=r["b"],{define:j}=r["b"],{zero:x,one:C}=r["b"];var N={url:r["b"].dom.attribute("meta[property=socket:url]","content")||i["socket:url"]||"",token:r["b"].dom.attribute("meta[property=socket:token]","content")||i["socket:token"]||"",key:null,value:null,option:function(){this.http={url:N.url},this.url=r["b"].web.socket.url(N.url),this.token=N.token,this.session=r["a"].session.id}};r["a"].socket=new r["b"].web.socket.io(N.option),r["a"].socket.ready=r["a"].reference(),r["a"].socket.io=N,r["a"].socket.get=function(e,t){return r["a"].fetch.get(this.http.url.concat(e),r["b"].object.concat({token:this.token},t))},r["a"].socket.post=function(e,t,n){return r["a"].fetch.post(this.http.url.concat(e),t,r["b"].object.concat({token:this.token},n))},r["a"].socket.start()&&(r["a"].socket.connect(),r["a"].socket.connect((function(){r["a"].on.line.value=!0})),r["a"].socket.connect("error",(function(){r["a"].on.line.value=null})));let{define:R}=r["b"],{zero:D,one:F}=r["b"];r["a"].db=new r["b"].db,r["a"].db.start({slot:"socket",socket:r["a"].socket}),r["a"].db.setup=function(e){};let{define:P}=r["b"],{zero:L,one:M}=r["b"];r["a"].language=function(e,t){return e?r["a"].__[e]||t||"":r["a"].__},r["a"].language.format=function(e,...t){return e?(r["a"].__[e]||e||"").format(...t):""},r["a"].language.apply=function(e){for(var t in e)r["a"].__[t]=e[t]},r["a"].language.exist=function(e){return r["a"].language.list.value.exist(e)||e in r["c"].language},r["a"].language.set=function(e,...t){t=r["b"].function.argument(...t),t.object;var n=t.function,i=t.boolean;"universal"===e&&r["a"].language.apply(r["c"].language.universal),r["a"].language.exist(e)&&r["a"].socket.emit("language:set",e).next((function(t){r["a"].language.apply(t),r["a"].session.set("language",e,i),n&&n.call(null,e)}))},(r["a"].language.list=r["a"].reference([]))&&i.language&&r["a"].language.apply((r["c"].language={universal:i.language.data}).universal);let{define:U}=r["b"],{zero:V,one:B}=r["b"],{define:q}=r["b"],{zero:z,one:G}=r["b"];r["a"].date=r["a"].reactive({start:function(){r["b"].date.universal(r["b"].date.zone["universal"].offset),r["a"].date.set("time:zone",r["a"].session.get("time:zone"),{session:!0}),r["a"].date.routine(),r["a"].date.cache=r["b"].time.interval(r["a"].date.routine)},routine:function(){r["a"].date.create=r["b"].date.create({zone:r["a"].time.zone.offset}),r["a"].date.time=r["a"].date.create(r["a"].time.stamp=r["b"].time.stamp()),r["a"].date.time.use("month:name",r["a"].language("date-time:month")),r["a"].date.time.use("day:name",r["a"].language("date-time:day"));var e=r["b"].date.format();for(var t in e)r["a"].date.get[t]=r["a"].date.time.format(e[t]);r["a"].emit("date:routine")},format:function(...e){var t,n="default",i=r["a"].time.stamp;for(var s in e)r["b"].is.string(e[s])&&e[s]&&(n=e[s]),r["b"].is.number(e[s])&&e[s]&&(i=e[s]),r["b"].is.object(e[s])&&(t=e[s]);return r["a"].date.create(i).format(n,t)},transform:function(e,...t){return r["a"].date.create(e).format(...t)},factory:function(e){e=e.string();var t=e.substr(0,4),n=e.substr(4,2),r=e.substr(6,2);return[r,n,t].join("/")},set:function(e,t,...n){n=r["b"].function.argument(...n);var i=n.object||{},s=n.function;"time:zone"===e&&(t in r["b"].time.zone||"universal"===t)&&(r["a"].time.zone={name:r["a"].session.set("time:zone",t,i.session)},r["a"].time.zone.offset=r["b"].time.zone(r["a"].time.zone.name).offset,r["a"].socket.emit("time:zone",r["a"].time.zone.name).next(s))},get:r["a"].reactive()}),r["a"].time=r["a"].reactive({stamp:r["b"].time.stamp(),zone:{name:"universal",offset:r["b"].date.zone["universal"].offset}});let{define:$}=r["b"],{zero:K,one:H}=r["b"];r["a"].sound=function(e="audio"){return r["b"].audio(e)},r["b"].audio.play.list("alarm:analog","/audio/alarm/analog.mp3"),r["b"].audio.play.list("default","/audio/notification/003.ogg"),r["b"].audio.play.list("error","/audio/notification/014.ogg"),r["b"].audio.play.list("warning","/audio/notification/020.ogg"),r["b"].audio.play.list("tring","/audio/notification/001.ogg"),r["b"].audio.play.list("ding-dong","/audio/notification/003.ogg"),r["b"].audio.play.list("tic-toc","/audio/notification/007.ogg");let{define:W}=r["b"],{zero:Y,one:J}=r["b"];r["a"].geo=function(){},r["a"].geo.location=function(){},r["a"].geo.location.coordinate=r["a"].reactive({latitude:Y,longitude:Y});let{define:Q}=r["b"],{zero:X,one:Z}=r["b"];r["a"].toast=function(){};let{define:ee}=r["b"],{zero:te,one:ne}=r["b"];r["a"].notification=function(){};let{define:re}=r["b"],{zero:ie,one:se}=r["b"];r["a"].form=function(){},r["a"].form.focus=function(e){r["b"].dom(r["b"].query.selector({id:r["b"].dom(e.target).attribute("for")})).class.insert("--focus")},r["a"].form.blur=function(e){r["b"].dom(r["b"].query.selector({id:r["b"].dom(e.target).attribute("for")})).class.delete("--focus")},r["a"].form.attribute=function(e){return{complete:r["b"].to_bool(e.complete),capitalize:r["b"].to_bool(e.capitalize),correct:r["b"].to_bool(e.correct),spell:r["b"].to_boolean(e.spell)}};let{define:oe}=r["b"],{zero:ae,one:ce}=r["b"];r["b"].account=class{constructor(){}state(){}},r["a"].account=function(){},r["a"].account.user=r["a"].reactive(),r["a"].account.on=r["a"].reactive({line:null,access:null});let{define:ue}=r["b"],{zero:le,one:he}=r["b"];const de={base:function(e,t=r["a"].socket.io.url){r["a"].fire={base:new r["b"].plugin.google.fire.base},r["a"].fire.base.start(e,t)}};function fe(){}r["a"].db.fire=function(){},r["a"].db.fire.base=function(e){r["a"].package.fire&&r["a"].package.fire.base&&(de.base(r["a"].package.fire.base),e&&e.call(),r["a"].db.fire.base.on.start.length&&r["a"].db.fire.base.emit("start"))},r["a"].db.fire.base.emit=function(e){for(var t in r["a"].db.fire.base.on[e])r["a"].db.fire.base.on[e][t].call()},r["a"].db.fire.base.on=function(e,t){"start"===e&&r["a"].db.fire.base.on.start.push(t)},r["a"].db.fire.base.on.start=[],i.fire&&i.fire.base&&de.base(i.fire.base),fe.language=function(...e){return r["a"].language.format(...e)};t["a"]={$$$:fe,model:function(e,t){return r["b"].is.define(t)?r["a"].model[e]=t:e?r["a"].model[e]:r["a"].model}}},af7f:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n("20a4");function i(e,...t){return t.reduce((t,n)=>(e.hasOwnProperty(n)&&(t[n]=e[n]),t),{})}const s=setTimeout,o=clearTimeout;function a(e,t){t.useNativeTimers?(e.setTimeoutFn=s.bind(r["a"]),e.clearTimeoutFn=o.bind(r["a"])):(e.setTimeoutFn=setTimeout.bind(r["a"]),e.clearTimeoutFn=clearTimeout.bind(r["a"]))}},b19d:function(e,t){function n(e){if(e)return r(e)}function r(e){for(var t in n.prototype)e[t]=n.prototype[t];return e}t.Emitter=n,n.prototype.on=n.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},n.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+e];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var i=0;i<r.length;i++)if(n=r[i],n===t||n.fn===t){r.splice(i,1);break}return 0===r.length&&delete this._callbacks["$"+e],this},n.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){n=n.slice(0);r=0;for(var i=n.length;r<i;++r)n[r].apply(this,t)}return this},n.prototype.emitReserved=n.prototype.emit,n.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},n.prototype.hasListeners=function(e){return!!this.listeners(e).length}},b50d:function(e,t,n){"use strict";var r=n("c532"),i=n("467f"),s=n("7aac"),o=n("30b5"),a=n("83b9"),c=n("c345"),u=n("3934"),l=n("2d83"),h=n("cafa"),d=n("7a77");e.exports=function(e){return new Promise((function(t,n){var f,p=e.data,m=e.headers,g=e.responseType;function y(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}r.isFormData(p)&&delete m["Content-Type"];var b=new XMLHttpRequest;if(e.auth){var v=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(v+":"+w)}var _=a(e.baseURL,e.url);function I(){if(b){var r="getAllResponseHeaders"in b?c(b.getAllResponseHeaders()):null,s=g&&"text"!==g&&"json"!==g?b.response:b.responseText,o={data:s,status:b.status,statusText:b.statusText,headers:r,config:e,request:b};i((function(e){t(e),y()}),(function(e){n(e),y()}),o),b=null}}if(b.open(e.method.toUpperCase(),o(_,e.params,e.paramsSerializer),!0),b.timeout=e.timeout,"onloadend"in b?b.onloadend=I:b.onreadystatechange=function(){b&&4===b.readyState&&(0!==b.status||b.responseURL&&0===b.responseURL.indexOf("file:"))&&setTimeout(I)},b.onabort=function(){b&&(n(l("Request aborted",e,"ECONNABORTED",b)),b=null)},b.onerror=function(){n(l("Network Error",e,null,b)),b=null},b.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||h;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",b)),b=null},r.isStandardBrowserEnv()){var O=(e.withCredentials||u(_))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;O&&(m[e.xsrfHeaderName]=O)}"setRequestHeader"in b&&r.forEach(m,(function(e,t){"undefined"===typeof p&&"content-type"===t.toLowerCase()?delete m[t]:b.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(b.withCredentials=!!e.withCredentials),g&&"json"!==g&&(b.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&b.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&b.upload&&b.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(e){b&&(n(!e||e&&e.type?new d("canceled"):e),b.abort(),b=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),p||(p=null),b.send(p)}))}},b639:function(e,t,n){"use strict";(function(e){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var r=n("1fb5"),i=n("9152"),s=n("e3db");function o(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"===typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(t){return!1}}function a(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function c(e,t){if(a()<t)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t),e.__proto__=u.prototype):(null===e&&(e=new u(t)),e.length=t),e}function u(e,t,n){if(!u.TYPED_ARRAY_SUPPORT&&!(this instanceof u))return new u(e,t,n);if("number"===typeof e){if("string"===typeof t)throw new Error("If encoding is specified then the first argument must be a string");return f(this,e)}return l(this,e,t,n)}function l(e,t,n,r){if("number"===typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!==typeof ArrayBuffer&&t instanceof ArrayBuffer?g(e,t,n,r):"string"===typeof t?p(e,t,n):y(e,t)}function h(e){if("number"!==typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function d(e,t,n,r){return h(t),t<=0?c(e,t):void 0!==n?"string"===typeof r?c(e,t).fill(n,r):c(e,t).fill(n):c(e,t)}function f(e,t){if(h(t),e=c(e,t<0?0:0|b(t)),!u.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)e[n]=0;return e}function p(e,t,n){if("string"===typeof n&&""!==n||(n="utf8"),!u.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|w(t,n);e=c(e,r);var i=e.write(t,n);return i!==r&&(e=e.slice(0,i)),e}function m(e,t){var n=t.length<0?0:0|b(t.length);e=c(e,n);for(var r=0;r<n;r+=1)e[r]=255&t[r];return e}function g(e,t,n,r){if(t.byteLength,n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");return t=void 0===n&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,n):new Uint8Array(t,n,r),u.TYPED_ARRAY_SUPPORT?(e=t,e.__proto__=u.prototype):e=m(e,t),e}function y(e,t){if(u.isBuffer(t)){var n=0|b(t.length);return e=c(e,n),0===e.length?e:(t.copy(e,0,0,n),e)}if(t){if("undefined"!==typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!==typeof t.length||te(t.length)?c(e,0):m(e,t);if("Buffer"===t.type&&s(t.data))return m(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function b(e){if(e>=a())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes");return 0|e}function v(e){return+e!=e&&(e=0),u.alloc(+e)}function w(e,t){if(u.isBuffer(e))return e.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!==typeof e&&(e=""+e);var n=e.length;if(0===n)return 0;for(var r=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return J(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Z(e).length;default:if(r)return J(e).length;t=(""+t).toLowerCase(),r=!0}}function _(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if(n>>>=0,t>>>=0,n<=t)return"";e||(e="utf8");while(1)switch(e){case"hex":return L(this,t,n);case"utf8":case"utf-8":return N(this,t,n);case"ascii":return F(this,t,n);case"latin1":case"binary":return P(this,t,n);case"base64":return C(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return M(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function I(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function O(e,t,n,r,i){if(0===e.length)return-1;if("string"===typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"===typeof t&&(t=u.from(t,r)),u.isBuffer(t))return 0===t.length?-1:E(e,t,n,r,i);if("number"===typeof t)return t&=255,u.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):E(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function E(e,t,n,r,i){var s,o=1,a=e.length,c=t.length;if(void 0!==r&&(r=String(r).toLowerCase(),"ucs2"===r||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;o=2,a/=2,c/=2,n/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){var l=-1;for(s=n;s<a;s++)if(u(e,s)===u(t,-1===l?0:s-l)){if(-1===l&&(l=s),s-l+1===c)return l*o}else-1!==l&&(s-=s-l),l=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){for(var h=!0,d=0;d<c;d++)if(u(e,s+d)!==u(t,d)){h=!1;break}if(h)return s}return-1}function T(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var s=t.length;if(s%2!==0)throw new TypeError("Invalid hex string");r>s/2&&(r=s/2);for(var o=0;o<r;++o){var a=parseInt(t.substr(2*o,2),16);if(isNaN(a))return o;e[n+o]=a}return o}function k(e,t,n,r){return ee(J(t,e.length-n),e,n,r)}function S(e,t,n,r){return ee(Q(t),e,n,r)}function A(e,t,n,r){return S(e,t,n,r)}function j(e,t,n,r){return ee(Z(t),e,n,r)}function x(e,t,n,r){return ee(X(t,e.length-n),e,n,r)}function C(e,t,n){return 0===t&&n===e.length?r.fromByteArray(e):r.fromByteArray(e.slice(t,n))}function N(e,t,n){n=Math.min(e.length,n);var r=[],i=t;while(i<n){var s,o,a,c,u=e[i],l=null,h=u>239?4:u>223?3:u>191?2:1;if(i+h<=n)switch(h){case 1:u<128&&(l=u);break;case 2:s=e[i+1],128===(192&s)&&(c=(31&u)<<6|63&s,c>127&&(l=c));break;case 3:s=e[i+1],o=e[i+2],128===(192&s)&&128===(192&o)&&(c=(15&u)<<12|(63&s)<<6|63&o,c>2047&&(c<55296||c>57343)&&(l=c));break;case 4:s=e[i+1],o=e[i+2],a=e[i+3],128===(192&s)&&128===(192&o)&&128===(192&a)&&(c=(15&u)<<18|(63&s)<<12|(63&o)<<6|63&a,c>65535&&c<1114112&&(l=c))}null===l?(l=65533,h=1):l>65535&&(l-=65536,r.push(l>>>10&1023|55296),l=56320|1023&l),r.push(l),i+=h}return D(r)}t.Buffer=u,t.SlowBuffer=v,t.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:o(),t.kMaxLength=a(),u.poolSize=8192,u._augment=function(e){return e.__proto__=u.prototype,e},u.from=function(e,t,n){return l(null,e,t,n)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(e,t,n){return d(null,e,t,n)},u.allocUnsafe=function(e){return f(null,e)},u.allocUnsafeSlow=function(e){return f(null,e)},u.isBuffer=function(e){return!(null==e||!e._isBuffer)},u.compare=function(e,t){if(!u.isBuffer(e)||!u.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var n=e.length,r=t.length,i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},u.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(e,t){if(!s(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return u.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=u.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){var o=e[n];if(!u.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r,i),i+=o.length}return r},u.byteLength=w,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)I(this,t,t+1);return this},u.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)I(this,t,t+3),I(this,t+1,t+2);return this},u.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)I(this,t,t+7),I(this,t+1,t+6),I(this,t+2,t+5),I(this,t+3,t+4);return this},u.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?N(this,0,e):_.apply(this,arguments)},u.prototype.equals=function(e){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===u.compare(this,e)},u.prototype.inspect=function(){var e="",n=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(e+=" ... ")),"<Buffer "+e+">"},u.prototype.compare=function(e,t,n,r,i){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,r>>>=0,i>>>=0,this===e)return 0;for(var s=i-r,o=n-t,a=Math.min(s,o),c=this.slice(r,i),l=e.slice(t,n),h=0;h<a;++h)if(c[h]!==l[h]){s=c[h],o=l[h];break}return s<o?-1:o<s?1:0},u.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},u.prototype.indexOf=function(e,t,n){return O(this,e,t,n,!0)},u.prototype.lastIndexOf=function(e,t,n){return O(this,e,t,n,!1)},u.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"===typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var s=!1;;)switch(r){case"hex":return T(this,e,t,n);case"utf8":case"utf-8":return k(this,e,t,n);case"ascii":return S(this,e,t,n);case"latin1":case"binary":return A(this,e,t,n);case"base64":return j(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var R=4096;function D(e){var t=e.length;if(t<=R)return String.fromCharCode.apply(String,e);var n="",r=0;while(r<t)n+=String.fromCharCode.apply(String,e.slice(r,r+=R));return n}function F(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function P(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function L(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var i="",s=t;s<n;++s)i+=Y(e[s]);return i}function M(e,t,n){for(var r=e.slice(t,n),i="",s=0;s<r.length;s+=2)i+=String.fromCharCode(r[s]+256*r[s+1]);return i}function U(e,t,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function V(e,t,n,r,i,s){if(!u.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function B(e,t,n,r){t<0&&(t=65535+t+1);for(var i=0,s=Math.min(e.length-n,2);i<s;++i)e[n+i]=(t&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function q(e,t,n,r){t<0&&(t=4294967295+t+1);for(var i=0,s=Math.min(e.length-n,4);i<s;++i)e[n+i]=t>>>8*(r?i:3-i)&255}function z(e,t,n,r,i,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function G(e,t,n,r,s){return s||z(e,t,n,4,34028234663852886e22,-34028234663852886e22),i.write(e,t,n,r,23,4),n+4}function $(e,t,n,r,s){return s||z(e,t,n,8,17976931348623157e292,-17976931348623157e292),i.write(e,t,n,r,52,8),n+8}u.prototype.slice=function(e,t){var n,r=this.length;if(e=~~e,t=void 0===t?r:~~t,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<e&&(t=e),u.TYPED_ARRAY_SUPPORT)n=this.subarray(e,t),n.__proto__=u.prototype;else{var i=t-e;n=new u(i,void 0);for(var s=0;s<i;++s)n[s]=this[s+e]}return n},u.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,n||U(e,t,this.length);var r=this[e],i=1,s=0;while(++s<t&&(i*=256))r+=this[e+s]*i;return r},u.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||U(e,t,this.length);var r=this[e+--t],i=1;while(t>0&&(i*=256))r+=this[e+--t]*i;return r},u.prototype.readUInt8=function(e,t){return t||U(e,1,this.length),this[e]},u.prototype.readUInt16LE=function(e,t){return t||U(e,2,this.length),this[e]|this[e+1]<<8},u.prototype.readUInt16BE=function(e,t){return t||U(e,2,this.length),this[e]<<8|this[e+1]},u.prototype.readUInt32LE=function(e,t){return t||U(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},u.prototype.readUInt32BE=function(e,t){return t||U(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},u.prototype.readIntLE=function(e,t,n){e|=0,t|=0,n||U(e,t,this.length);var r=this[e],i=1,s=0;while(++s<t&&(i*=256))r+=this[e+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},u.prototype.readIntBE=function(e,t,n){e|=0,t|=0,n||U(e,t,this.length);var r=t,i=1,s=this[e+--r];while(r>0&&(i*=256))s+=this[e+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*t)),s},u.prototype.readInt8=function(e,t){return t||U(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},u.prototype.readInt16LE=function(e,t){t||U(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt16BE=function(e,t){t||U(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt32LE=function(e,t){return t||U(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},u.prototype.readInt32BE=function(e,t){return t||U(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},u.prototype.readFloatLE=function(e,t){return t||U(e,4,this.length),i.read(this,e,!0,23,4)},u.prototype.readFloatBE=function(e,t){return t||U(e,4,this.length),i.read(this,e,!1,23,4)},u.prototype.readDoubleLE=function(e,t){return t||U(e,8,this.length),i.read(this,e,!0,52,8)},u.prototype.readDoubleBE=function(e,t){return t||U(e,8,this.length),i.read(this,e,!1,52,8)},u.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t|=0,n|=0,!r){var i=Math.pow(2,8*n)-1;V(this,e,t,n,i,0)}var s=1,o=0;this[t]=255&e;while(++o<n&&(s*=256))this[t+o]=e/s&255;return t+n},u.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t|=0,n|=0,!r){var i=Math.pow(2,8*n)-1;V(this,e,t,n,i,0)}var s=n-1,o=1;this[t+s]=255&e;while(--s>=0&&(o*=256))this[t+s]=e/o&255;return t+n},u.prototype.writeUInt8=function(e,t,n){return e=+e,t|=0,n||V(this,e,t,1,255,0),u.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},u.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||V(this,e,t,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):B(this,e,t,!0),t+2},u.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||V(this,e,t,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):B(this,e,t,!1),t+2},u.prototype.writeUInt32LE=function(e,t,n){return e=+e,t|=0,n||V(this,e,t,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):q(this,e,t,!0),t+4},u.prototype.writeUInt32BE=function(e,t,n){return e=+e,t|=0,n||V(this,e,t,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):q(this,e,t,!1),t+4},u.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t|=0,!r){var i=Math.pow(2,8*n-1);V(this,e,t,n,i-1,-i)}var s=0,o=1,a=0;this[t]=255&e;while(++s<n&&(o*=256))e<0&&0===a&&0!==this[t+s-1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+n},u.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t|=0,!r){var i=Math.pow(2,8*n-1);V(this,e,t,n,i-1,-i)}var s=n-1,o=1,a=0;this[t+s]=255&e;while(--s>=0&&(o*=256))e<0&&0===a&&0!==this[t+s+1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+n},u.prototype.writeInt8=function(e,t,n){return e=+e,t|=0,n||V(this,e,t,1,127,-128),u.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},u.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||V(this,e,t,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):B(this,e,t,!0),t+2},u.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||V(this,e,t,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):B(this,e,t,!1),t+2},u.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||V(this,e,t,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):q(this,e,t,!0),t+4},u.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||V(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):q(this,e,t,!1),t+4},u.prototype.writeFloatLE=function(e,t,n){return G(this,e,t,!0,n)},u.prototype.writeFloatBE=function(e,t,n){return G(this,e,t,!1,n)},u.prototype.writeDoubleLE=function(e,t,n){return $(this,e,t,!0,n)},u.prototype.writeDoubleBE=function(e,t,n){return $(this,e,t,!1,n)},u.prototype.copy=function(e,t,n,r){if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i,s=r-n;if(this===e&&n<t&&t<r)for(i=s-1;i>=0;--i)e[i+t]=this[i+n];else if(s<1e3||!u.TYPED_ARRAY_SUPPORT)for(i=0;i<s;++i)e[i+t]=this[i+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+s),t);return s},u.prototype.fill=function(e,t,n,r){if("string"===typeof e){if("string"===typeof t?(r=t,t=0,n=this.length):"string"===typeof n&&(r=n,n=this.length),1===e.length){var i=e.charCodeAt(0);i<256&&(e=i)}if(void 0!==r&&"string"!==typeof r)throw new TypeError("encoding must be a string");if("string"===typeof r&&!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"===typeof e&&(e&=255);if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var s;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"===typeof e)for(s=t;s<n;++s)this[s]=e;else{var o=u.isBuffer(e)?e:J(new u(e,r).toString()),a=o.length;for(s=0;s<n-t;++s)this[s+t]=o[s%a]}return this};var K=/[^+\/0-9A-Za-z-_]/g;function H(e){if(e=W(e).replace(K,""),e.length<2)return"";while(e.length%4!==0)e+="=";return e}function W(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Y(e){return e<16?"0"+e.toString(16):e.toString(16)}function J(e,t){var n;t=t||1/0;for(var r=e.length,i=null,s=[],o=0;o<r;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Q(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}function X(e,t){for(var n,r,i,s=[],o=0;o<e.length;++o){if((t-=2)<0)break;n=e.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r)}return s}function Z(e){return r.toByteArray(H(e))}function ee(e,t,n,r){for(var i=0;i<r;++i){if(i+n>=t.length||i>=e.length)break;t[i+n]=e[i]}return i}function te(e){return e!==e}}).call(this,n("c8ba"))},bc3a:function(e,t,n){e.exports=n("cee4")},c345:function(e,t,n){"use strict";var r=n("c532"),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,o={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(o[t]&&i.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o}},c401:function(e,t,n){"use strict";var r=n("c532"),i=n("4c3d");e.exports=function(e,t,n){var s=this||i;return r.forEach(n,(function(n){e=n.call(s,e,t)})),e}},c532:function(e,t,n){"use strict";var r=n("1d2b"),i=Object.prototype.toString;function s(e){return Array.isArray(e)}function o(e){return"undefined"===typeof e}function a(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===i.call(e)}function u(e){return"[object FormData]"===i.call(e)}function l(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&c(e.buffer),t}function h(e){return"string"===typeof e}function d(e){return"number"===typeof e}function f(e){return null!==e&&"object"===typeof e}function p(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function m(e){return"[object Date]"===i.call(e)}function g(e){return"[object File]"===i.call(e)}function y(e){return"[object Blob]"===i.call(e)}function b(e){return"[object Function]"===i.call(e)}function v(e){return f(e)&&b(e.pipe)}function w(e){return"[object URLSearchParams]"===i.call(e)}function _(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function I(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function O(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function E(){var e={};function t(t,n){p(e[n])&&p(t)?e[n]=E(e[n],t):p(t)?e[n]=E({},t):s(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)O(arguments[n],t);return e}function T(e,t,n){return O(t,(function(t,i){e[i]=n&&"function"===typeof t?r(t,n):t})),e}function k(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:s,isArrayBuffer:c,isBuffer:a,isFormData:u,isArrayBufferView:l,isString:h,isNumber:d,isObject:f,isPlainObject:p,isUndefined:o,isDate:m,isFile:g,isBlob:y,isFunction:b,isStream:v,isURLSearchParams:w,isStandardBrowserEnv:I,forEach:O,merge:E,extend:T,trim:_,stripBOM:k}},c8af:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},c9eb:function(e,t){try{e.exports="undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(n){e.exports=!1}},cafa:function(e,t,n){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},cc87:function(e,t,n){(function(e){function t(e,n,r,i){if(!Array.isArray(n))return n?t.value(e,n,r,i):"__"in e?e["__"]:t.value(e,"__",new t.properties(e),i);for(var s in n)t.value(e,n[s],r,i)}function n(e,t){var n;return Number.format(r(e,n=i(e)),t=Number.properties(t)).concat(t.delimiter,Number.BYTE.unit[n])}function r(e,t){return e/Math.BYTE.log[t]}function i(e){for(var t in Math.BYTE.unit)if(e>Math.BYTE.log[Math.BYTE.unit[t]]-1)return Math.BYTE.unit[t];return 0}t.properties=class{constructor(e){t.value(this,"__",e)}function(e,t,n){return this.apply(e,t,n)}class(e,t,n){return this.apply(e,t,n)}clone(e,t,n){return this.apply(e,t,n)}on(e,t,n){return this.apply(e,t,n)}set(e,t,n){return this.apply(e,t,n)}apply(e,n,r){if(Array.isArray(e))for(var i in e)t.value(this["__"],e[i],n,r);else t.value(this["__"],e,n,r);return n}export(e){return arguments.length?this["__"].exports=e:this["__"].exports}},t.property=function(e,n,r,i){return t.value(e,n,r,i)},t.get=function(e,t,n,r){return Object.defineProperty(e,t,Object.assign({get:n},r)),n},t.set=function(e,t,n,r){return Object.defineProperty(e,t,Object.assign({set:n},r)),n},t.value=function(e,t,n,r){return Object.defineProperty(e,t,Object.assign({value:n},r)),n},t.function=function(e,n,r,i){return t.value(e,n,r,i)},t.class=function(e,n,r,i){return t.value(e,n,r,i)},t.descriptor=function(e,n,r){return t.property(t.properties.prototype,e,n,r)},t.value(Object,"on",{}),t.property(Function,"indexOf",(function(e){if(e>=0)return e})),t(Object,"type",(function(e){return typeof e})),t(Object.type,"array",(function(){return arguments.length?arguments[0]instanceof Array:Array})),t(Object.type,"boolean",(function(){return arguments.length?arguments[0]instanceof Boolean:Boolean})),t(Object.type,"date",(function(){return arguments.length?arguments[0]instanceof Date:Date})),t(Object.type,"error",(function(){return arguments.length?arguments[0]instanceof Error:Error})),t(Object.type,"function",(function(){return arguments.length?arguments[0]instanceof Function:Function})),t(Object.type,"number",(function(){return arguments.length?arguments[0]instanceof Number:Number})),t(Object.type,"object",(function(){return arguments.length?arguments[0]instanceof Object:Object})),t(Object.type,"regex",(function(){return arguments.length?arguments[0]instanceof RegExp:RegExp})),t(Object.type,"promise",(function(){return arguments.length?arguments[0]instanceof Promise:Promise})),t(Object.type,"string",(function(){return arguments.length?arguments[0]instanceof String:String})),t(Object.type,"of",(function(e){return Object.prototype.toString.call(e)})),t(Object.type.of,"array",(function(){return arguments.length?"[object Array]"===Object.type.of(arguments[0]):"[object Array]"})),t(Object.type.of,"boolean",(function(){return arguments.length?"[object Boolean]"===Object.type.of(arguments[0]):"[object Boolean]"})),t(Object.type.of,"date",(function(){return arguments.length?"[object Date]"===Object.type.of(arguments[0]):"[object Date]"})),t(Object.type.of,"function",(function(){return arguments.length?"[object Function]"===Object.type.of(arguments[0]):"[object Function]"})),t(Object.type.of,"null",(function(){return arguments.length?"[object Null]"===Object.type.of(arguments[0]):"[object Null]"})),t(Object.type.of,"number",(function(){return arguments.length?"[object Number]"===Object.type.of(arguments[0]):"[object Number]"})),t(Object.type.of,"object",(function(){return arguments.length?"[object Object]"===Object.type.of(arguments[0]):"[object Object]"})),t(Object.type.of,"regex",(function(){return arguments.length?"[object RegExp]"===Object.type.of(arguments[0]):"[object RegExp]"})),t(Object.type.of,"string",(function(){return arguments.length?"[object String]"===Object.type.of(arguments[0]):"[object String]"})),t(Object.is,"array",(function(e){return Array.isArray(e)})),t(Object.is,"boolean",(function(e){return!!Object.type.of.boolean(e)||Object.type.boolean(e)})),t(Object.is,"buffer",(function(t){return e.isBuffer(t)})),t(Object.is,"date",(function(e){return!!Object.type.of.date(e)||Object.type.date(e)})),t(Object.is,"decimal",(function(e){return Object.is.float(e)})),t(Object.is,"double",(function(e){return Object.is.float(e)})),t(Object.is,"finite",(function(e){return Number.isFinite(e)})),t(Object.is,"float",(function(e){return!!Object.is.number(e)&&2===e.toString().split(".").length})),t(Object.is,"function",(function(e){return!!Object.type.of.function(e)||Object.type.function(e)})),t(Object.is,"integer",(function(e){return Number.isInteger(e)})),t(Object.is,"nan",(function(e){return Number.isNaN(e)})),t(Object.is,"null",(function(e){return!!Object.type.of.null(e)||null===e})),t(Object.is,"number",(function(e){return!1===Object.is.nan(Number(e))?!!Object.type.of.number(e)||!!Object.type.of.string(e)&&!!e:Object.type.number(e)})),t(Object.is,"object",(function(e){return!Object.is.function(e)&&(!Object.is.array(e)&&(!!Object.type.of.object(e)||Object.type.object(e)))})),t(Object.is,"regex",(function(e){return!!Object.type.of.regex(e)||Object.type.regex(e)})),t(Object.is,"promise",(function(e){return Object.type.promise(e)})),t(Object.is,"stream",(function(e){return Object.type.stream(e)})),t(Object.is,"string",(function(e){return!!Object.type.of.string(e)||Object.type.string(e)})),t(Object.is,"define",(function(e){return!Object.un.define(e)})),t(Object.is,"set",(function(e,t){return arguments.length>1?Object.is.set(e)?e:t:!Object.un.set(e)})),t(Object.is,"value",(function(e){return!(e===Object.un.define()||null===e)})),t(Object.is,"scalar",(function(e){return"function"===Object.type(e)||"object"===Object.type(e)||"array"===Object.type(e)})),t(Object.is,"stringify",(function(e){return"string"===Object.type(e)||"number"===Object.type(e)})),t(Object.is,"option",(function(e){return Object.is.object(e)})),t(Object.is,"empty",(function(e){return Object.is.string(e)||Object.is.integer(e)?""===e.toString().trim():Object.is.array(e)?0===e.length:!1===(Object.is.define(e)||Object.is.null(e))})),t(Object.is,"json",(function(e){try{return JSON.parse(e),!0}catch(t){return!1}})),t(Object.is,"url",(function(e){try{return!!new URL(e)}catch(t){return!1}})),t(Object.is,"ip",(function(e){if(Object.is.string(e)&&4===(e=e.split(".")).length){for(var t in e){if(!1===Object.is.number(e[t]))return!1;if(Number(e[t])<0)return!1;if(Number(e[t])>255)return!1}return!0}return!1})),t(Object,"un",(function(e){return!e})),t(Object.un,"define",(function(e){return arguments.length?void 0===e:void 0})),t(Object.un,"set",(function(e){return!!Object.un.define(e)||!!Object.is.null(e)})),t(Object.un,"value",(function(e){return!Object.is.value(e)})),t(Object,"to",(function(e){})),t(Object.to,"string",(function(e){return Object.is.set(e)?e.toString():""})),t(Object.to,"number",(function(e){return Object.is.number(Object.to.string(e).trim())?Number(e):0})),t(Object.to,"integer",(function(e){return Object.is.nan(e=parseInt(e))?0:e})),t(Object.to,"float",(function(e){return Object.is.nan(e=parseFloat(e))?0:e})),t(Object.to,"boolean",(function(e){return!!e&&!["false","null","undefined","off","no"].includes(e)})),t(Object.is,"true",(function(e){return!0===e||"true"===e||"on"===e||"yes"===e})),t(Object.is,"false",(function(e){return!1===e||"false"===e||"off"===e||"no"===e})),t(Object,"to_boolean",(function(e){return Object.is.true(e)?"true":(Object.is.false(e),"false")})),t(Object,"to_bool",(function(e){return Object.is.true(e)?"on":(Object.is.false(e),"off")})),t(Object,"descriptor",(function(){return t.property(Object.prototype,key,value,option)})),t(Object,"concat",(function(...e){return Object.assign({},...e)})),t(Object,"exist",(function(e,t,n){return Object.values(t).includes(e,n)})),t(Object,"find",(function(){})),t(Object,"flip",(function(e){var t={};for(var n in e)t[e[n]]=n;return t})),t(Object,"format",(function(e={},t,n){if(t=t.toString())for(var r in e=Object.keys.format(e,n))t=t.replace(r,e[r]);return t})),t(Object,"get",(function(e,t,n){return t in e?e[t]:n})),t(Object,"has",(function(e,t){return e in t})),t(Object,"length",(function(e){var t=0;for(var n in e)t++;return t})),t(Object,"merge",(function(e,t,n){if(Object.un.set(e))return Object.assign({},t);if(n)return Object.merge(e,t);for(var r in t)r in e&&Object.is.object(e[r])?e[r]=Object.merge(e[r],t[r],!0):e[r]=t[r];return e})),t(Object,"normalize",(function(e){var t={};for(var n in e)t[n]=e[n];return t})),t(Object,"replace",(function(e,t){if(t=t.toString())for(var n in e)t=t.replace(n,e[n]);return t})),t(Object,"filter",(function(e,t){var n={};for(var r in e)!0===t(e[r])&&(n[r]=e[r]);return n})),t(Object,"join",(function(e,t){for(var n in t)e[n]=t[n];return e})),t(Object.keys,"exist",(function(e,t,n){return Object.keys(t).includes(e,n)})),t(Object.keys,"find",(function(e,t){for(var n in t)if(t[n]===e)return n})),t(Object.keys,"format",(function(e,t="%s"){var n={};for(var r in e)n[t.format(r)]=e[r];return n})),Object.key=Object.keys,Object.value=Object.values,t(Array,"descriptor",(function(e,n,r){return t.property(Array.prototype,e,n,r)})),t(Array.prototype,"string",(function(){return this.toString()})),t(Array.prototype,"begin",(function(e=""){for(var t in this)return this[t];return e})),t(Array.prototype,"count",(function(e,t){if(arguments.length){var n=this.slice(t),r=0;for(var i in n)n[i]===e&&r++;return r}return this.length-1})),t(Array.prototype,"delete",(function(e,t=1){return this.splice(e,t)})),t(Array.prototype,"each",(function(e){this.forEach(e)})),t(Array.prototype,"end",(function(e=""){for(var t in this)e=this[t];return e})),t(Array.prototype,"exist",(function(e,t){return this.includes(e,t)})),t(Array.prototype,"format",(function(e,t){var n;if(e=e.toString())for(var r in n=Array.keys.format(this,t))e=e.replace(n[r],t);return e})),t(Array.prototype,"include",(function(e,t){for(var n in e)if(!1===this.includes(e[n],t))return!1;return!0})),t(Array.prototype,"index",(function(e,t){var n;return n=Object.is.function(e)?this.slice(t).findIndex(e):this.indexOf(e,t),Function.indexOf(n)})),t(Array.prototype,"insert",(function(e,...t){return this.splice(e,0,...t)})),t(Array.prototype,"key",(function(){var e=[];for(var[t]of this.entries())e.push(t);return e})),t(Array.prototype,"max",(function(){return Math.max(...this)})),t(Array.prototype,"min",(function(){return Math.min(...this)})),t(Array.prototype,"rand",(function(){return this[(this.length-1).random()]})),t(Array.prototype,"replace",(function(e,t){if(t=t.toString())for(var n in this)t=t.replace(this[n],e);return t})),t(Array.prototype,"shuffle",(function(e){var t=this.slice(e),n=(this.length-1).decrease();for(var r in n){var i=n[r].random(),s=t[n[r]];t[n[r]]=t[i],t[i]=s}return t})),t(Array.prototype,"trim",(function(){var e=[];for(var t in this)e.push(this[t].toString().trim());return e})),t(Array.prototype,"unique",(function(){return Array.from(new Set(this))})),t(Array.prototype,"update",(function(e,...t){return this.splice(e,1,...t)})),t(Array.prototype,"value",(function(){return this})),t(Array.prototype,"next",(function(e){return this[Number(e)+1]})),t(Array.prototype,"previous",(function(e){return this[Number(e)-1]})),t(Array,"keys",(function(){})),t(Array.keys,"exist",(function(e,t){return e in t})),t(Array.keys,"find",(function(e,t){return t.findIndex(e)})),t(Array.keys,"format",(function(e,t="{%s}"){var n=[];for(var r in e)n.push(t.format(e[r]));return n})),t(String,"descriptor",(function(e,n,r){return t.property(String.prototype,e,n,r)})),t(String.prototype,"string",(function(){return this.toString()})),t(String.prototype,"number",(function(){return Object.to.number(this)})),t(String.prototype,"integer",(function(){return Object.to.integer(this)})),t(String.prototype,"float",(function(){return Object.to.float(this)})),t(String.prototype,"char",(function(){return this.charCodeAt()})),t(String.prototype,"md",(function(){return Function.hash.md(this)})),t(String.prototype,"sha",(function(){return Function.hash.sha(this)})),t(String.prototype,"sha_one",(function(){return Function.hash.sha.one(this)})),t(String.prototype,"after",(function(e,t){return(t=this.indexOf(e,t))>=0?this.substr(t+e.length):""})),t(String.prototype,"begin",(function(e=1,t){return Object.is.string(e)?this.startsWith(e,t):this.substr(0,e)})),t(String.prototype,"before",(function(e,t){return(t=this.indexOf(e,t))>=0?this.substr(0,t):""})),t(String.prototype,"big",(function(){return this.toUpperCase()})),t(String.prototype,"count",(function(e,t){return arguments.length?this.substr(t).split(e).length-1:this.length-1})),t(String.prototype,"decode",(function(){return String.decode(this)})),t(String.prototype,"delete",(function(e){return this.split(e).join("")})),t(String.prototype,"encode",(function(e){return"base"===e?this.encode("base64"):"md"===e?this.md():"sex"===e?this.sex():"sexy"===e?this.sexy():String.encode(this)})),t(String.prototype,"end",(function(e=1,t){return Object.is.string(e)?this.endsWith(e,t):this.substr(-e)})),t(String.prototype,"exist",(function(e,t){return this.includes(e,t)})),t(String.prototype,"format",(function(...e){if(Function.util&&Function.util.format)return Function.util.format(this.toString(),...e);var t=this.toString().split("%s"),n=1;for(var r in e)t.splice(n,0,e[r]),n+=2;return t.join("")})),t(String.prototype,"include",(function(e,t){for(var n in e)if(!1===this.includes(e[n],t))return!1;return!0})),t(String.prototype,"index",(function(e,t){return Function.indexOf(this.indexOf(e,t))})),t(String.prototype,"pad",(function(e,t,n="begin"){return"begin"===n?this.padStart(t,e):"end"===n?this.padEnd(t,e):this})),t(String.prototype,"pop",(function(e=1){return Object.is.string(e)?this.substr(0,this.length-e.length)===e:this.substr(0,this.length-e)})),t(String.prototype,"pos",(function(e,t=1){return this.substr(e,t)})),t(String.prototype,"rand",(function(){return this[(this.length-1).random()]})),t(String.prototype,"replace",(function(e,t){return Object.is.regex(e)?e[Symbol.replace](this,t):this.split(e).join(Object.is.set(t,""))})),t(String.prototype,"reverse",(function(){return this.split("").reverse().join("")})),t(String.prototype,"shift",(function(e=1){return Object.is.string(e)?this.substr(e.length)===e:this.substr(e)})),t(String.prototype,"shuffle",(function(){return this.split("").shuffle().join("")})),t(String.prototype,"small",(function(){return this.toLowerCase()})),t(String.prototype,"splice",(function(e=1){var t=[],n=[],r=e;for(var i in this)n.push(this[i]),i==r-1&&(t.push(n.join("")),n=[],r+=e);return n.length&&t.push(n.join("")),t})),t(String.prototype,"trim",(function(e){if("begin"===e)return this.trimStart();if("end"===e)return this.trimEnd();var t=this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");if(e){for(var n in e=[],t=t.split(" "))t[n].trim()&&e.push(t[n]);return e.join(" ")}return t})),t(String.prototype,"uc_begin",(function(){return this.substr(0,1).toUpperCase()+this.substr(1)})),t(String.prototype,"uc_word",(function(){var e=this.split(" "),t=[];for(var n in e)t.push(e[n].uc_begin());return t.join(" ")})),t(String,"replace",(function(e,t,n){return n.split(e).join(t)})),t(String,"char",(function(){})),t(String.char,"alpha",{small:"abcdefghijklmnopqrstuvwxyz",big:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",number:"0123456789",numeric:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"}),t(String.char,"separator",{eol:"; ",c:", "}),t(String.char,"under",{score:"_"}),t(String.char,"c",","),t(String.char,"s"," "),t(String.char,"equal","="),t(String.char,"ls",":"),t(String.char,"eol",";"),t(String.char,"special",["_","-"]),t(String.char,"line",(function(){return"\r\n"})),t(String.char,"ln",(function(e,t){return arguments.length?t?"\n".concat(e):e.concat("\n"):"\n"})),t(String.char.ln,"r",(function(e,t){return arguments.length?t?"\r".concat(e):e.concat("\r"):"\r"})),t(String.char.ln,"tab",(function(e,t){return void 0===t&&(t=1),"\t".repeat(t).concat(e)})),t(Math,"BYTE",(function(){})),t(Math.BYTE,"log",[],{configurable:!0,enumerable:!0,writable:!0}),t(Math.BYTE,"unit",[],{configurable:!0,enumerable:!0,writable:!0}),t.get(Number.prototype,"length",(function(){return this.toString().length})),t(Number,"descriptor",(function(e,n,r){return t.property(Number.prototype,e,n,r)})),t(Number.prototype,"string",(function(){return this.toString()})),t(Number.prototype,"number",(function(){return Number(this)})),t(Number.prototype,"integer",(function(){return parseInt(this)})),t(Number.prototype,"float",(function(){return parseFloat(this)})),t(Number.prototype,"char",(function(){return String.fromCharCode(this)})),t(Number.prototype,"second",(function(){return 1e3*this})),t(Number.prototype,"absolute",(function(){return Math.abs(this)})),t(Number.prototype,"ceil",(function(){return Math.ceil(this)})),t(Number.prototype,"decrease",(function(e=0,t=1){var n=[];if(this>=e)for(var r=this;r>=e;r-=t)n.push(r);return n})),t(Number.prototype,"exponent",(function(e){return Math.pow(this,e)})),t(Number.prototype,"floor",(function(){return Math.floor(this)})),t(Number.prototype,"increase",(function(e,t=1){var n=[];if(this<=e)for(var r=this;r<=e;r+=t)n.push(r);return n})),t(Number.prototype,"log",(function(){return Math.log(this)})),t(Number.prototype,"rand",(function(e=0){var t=[this,e],n=Math.min(...t),r=Math.max(...t);return(r-n).absolute().random()+n})),t(Number.prototype,"random",(function(){return Math.floor(Math.random()*(this+1))})),t(Number.prototype,"round",(function(){return Math.round(this)})),t(Number.prototype,"percent",(function(e){return this/100})),t(Number.prototype,"percentage",(function(e){return this/e*100})),t(Number.prototype,"format",(function(e){return Number.format(this,e)})),t(Number,"format",(function(e,t){if(!0===(t=Number.properties(t)).byte)return t.byte=!1,n(e,t);e=e.toString().split(Number.float);var r=e[0],i=e[1],s=r.reverse().splice(t.thousand).join(t.separator).reverse();return i&&(s=s.concat(t.float,i.begin(t.decimal))),s})),t(Number.format,"extra",(function(e,t){return Number.format(String.replace(",","",String.replace(".","",Object.to.string(e))),t)})),t(Number.format,"clear",(function(e){return Number(String.replace(",","",String.replace(".","",Object.to.string(e))))})),t(Number,"char",String.char.alpha.number),t(Number,"BYTE",class{constructor(){for(var[e]of(Math.BYTE.log=[],Math.BYTE.unit=Number.BYTE.unit.key().reverse(),Number.BYTE.unit.entries()))Math.BYTE.log.push(Number.BYTE.log.exponent(e))}}),t(Number.BYTE,"log",1024),t(Number.BYTE,"unit",["B","KB","MB","GB","TB","PB","XB"]),t(Number,"properties",(function(e){return Object.assign({thousand:Number.thousand,decimal:Number.decimal,separator:Number.separator,delimiter:Number.delimiter,float:Number.float,byte:!1},e)})),t(Number,"thousand",3,{configurable:!0,enumerable:!0,writable:!0}),t(Number,"decimal",3,{configurable:!0,enumerable:!0,writable:!0}),t(Number,"separator",",",{configurable:!0,enumerable:!0,writable:!0}),t(Number,"delimiter"," ",{configurable:!0,enumerable:!0,writable:!0}),t(Number,"float",.5.toString().substr(1,1),{configurable:!0,enumerable:!0,writable:!0}),new Number.BYTE,t(Function,"define",t),t(Function,"context",(function(){var e=Function.argument.of(arguments),t=e.object,n=e.function;if(n)return t?n.bind(t):n})),t(Function.context,"error",class{constructor(...e){this.emitter=e}next(...e){return this.then(...e).catch()}then(...e){return this.context=Function.context(...e),this.error?this.commit():this}catch(e){return this.context?this.commit(e):(this.error=e,this)}commit(e){return(e||this.error||function(...e){console.error("context:error",...e)}).call(null,...this.emitter)}}),t(Function,"argument",(function(){var e={length:arguments.length};for(var t in arguments)Object.is.object(arguments[t])?e.object=arguments[t]:Object.is.array(arguments[t])?e.array=arguments[t]:Object.is.string(arguments[t])?e.string=arguments[t]:Object.is.integer(arguments[t])?e.integer=arguments[t]:Object.is.number(arguments[t])?e.number=arguments[t]:Object.is.function(arguments[t])?e.function=arguments[t]:e.of=arguments[t];return e})),t(Function.argument,"of",(function(e){var t={length:e.length};for(var n in e)Object.is.object(e[n])?t.object=e[n]:Object.is.array(e[n])?t.array=e[n]:Object.is.string(e[n])?t.string=e[n]:Object.is.integer(e[n])?t.integer=e[n]:Object.is.number(e[n])?t.number=e[n]:Object.is.function(e[n])?t.function=e[n]:t.of=e[n];return t})),t(Function,"setting",(function(e,t){return arguments.length>1?Function.setting[e]=t:e?Function.setting[e]:Function.setting})),t(Function,"option",(function(e,t,n=!0){return n?Object.assign({},t,e):Object.assign({},e,t)})),t(Function.option,"of",(function(e,t,n=!0){return n?Object.merge(t,e):Object.merge(e,t)})),t(Function,"optional",(function(e,t={}){var n={};for(var r in e)r in t?n[t[r]]=e[r]:n[r]=e[r];return n})),t(Function.optional,"of",(function(e,t={}){var n={};if(t=Object.flip(t))for(var r in e)r in t?n[t[r]]=e[r]:n[r]=e[r];return n})),t.property(Function,"system",(function(){})),t.property(Function,"plugin",(function(){})),t.property(Function,"promise",class{constructor(...e){this.promise=new Promise(Function.context(...e))}next(...e){return this.then(...e).catch()}then(...e){return this.context=Function.context(...e),this.error?this.commit():this}catch(e){return this.context?this.commit(e):(this.error=e,this)}commit(e){return this.promise.then(this.context).catch(e||this.error||function(e){console.error(e)})}}),t.property(Function.promise,"synchronous",(function(e){return new Promise((function(t,n){t(e)}))})),t.property(Function.promise,"all",(function(...e){return Promise.all(...e)})),t.property(Function.promise,"resolve",(function(...e){return Promise.resolve(...e)})),t.property(Function.promise,"reject",(function(...e){return Promise.reject(...e)})),t.property(Function,"app",class{constructor(){this.router=[],this.socket=[]}all(e,t){return this.router.push({method:"all",url:e,context:t}),this}get(e,t){return this.router.push({method:"get",url:e,context:t}),this}post(e,t){return this.router.push({method:"post",url:e,context:t}),this}on(e,t){return this.socket.push({key:e,value:t}),this}}),t.property(Date,"Time",class{constructor(e,t){this.option={zone:{year:0,month:0,day:0,hour:0,minute:0,second:0,ms:0},month:{name:Date.month.name},day:{name:Date.day.name}},this.get={year:0,month:0,day:0,hour:0,minute:0,second:0,ms:0},this.date={input:e},this.zone(t.zone)}use(e,t){"month:name"===e&&t&&(this.option.month.name=t),"day:name"===e&&t&&(this.option.day.name=t)}zone(e){if(e)for(var t in e)this.option.zone[t]=e[t];return this.set()}input(){return this.date.input=arguments,this.set()}offset(){var e,t;for(var n in arguments)"object"===typeof arguments[n]&&(e=arguments[n]),"number"===typeof arguments[n]&&(t=arguments[n]);return t?new Date.Time([t],this.option).set(e):this}set(e){if(null===e)return{year:{s:this.get.year,pad:this.get.year.toString()},month:{s:this.get.month,name:this.option.month.name[this.get.month],pad:Date.pad(this.get.month+1)},day:{s:this.get.day,name:this.option.day.name[this.get.week],pad:Date.pad(this.get.day)},hour:{s:this.get.hour,pad:Date.pad(this.get.hour),suffix:{pad:Date.pad(this.get.hour>12?this.get.hour-12:this.get.hour)},map:this.get.hour>12?"PM":"AM"},minute:{s:this.get.minute,pad:Date.pad(this.get.minute)},second:{s:this.get.second,pad:Date.pad(this.get.second)},ms:this.get.ms,week:this.get.week,stamp:this.get.stamp,query:{stamp:this.get.query.stamp}};e=Date.offset(e);var t=new Date(...this.date.input),n=t.getTime();return t=Date.property(new Date(n-Date.universal.offset),n),t=new Date(t.year+e.year+this.option.zone.year,t.month+e.month+this.option.zone.month,t.day+e.day+this.option.zone.day,t.hour+e.hour+this.option.zone.hour,t.minute+e.minute+this.option.zone.minute,t.second+e.second+this.option.zone.second,t.ms+e.ms+this.option.zone.ms),this.get=Date.property(t,n),this}object(){var e=this.set(null);return{Y:e.year.pad,M:e.month.pad,F:e.month.name,D:e.day.pad,L:e.day.name,H:e.hour.pad,I:e.minute.pad,S:e.second.pad,Q:e.ms,A:e.hour.map,J:e.hour.suffix.pad,W:e.week,X:e.stamp,Z:e.query.stamp}}format(){var e,t,n="default";for(var r in arguments)arguments[r]&&(Object.is.number(arguments[r])&&(t=arguments[r]),"string"===typeof arguments[r]&&(n=arguments[r]),"object"===typeof arguments[r]&&(e=arguments[r]));if(t)return this.offset(t,e).format(n);if(e)return this.offset(this.get.stamp,e).format(n);var i=[],s=this.object();for(var r in n=Date.format()[n||"default"]||n,n=n.split(""),n)i.push(s[n[r]]||n[r]);return i.join("")}}),t.property(Date,"create",(function(e){return function(...t){return new Date.Time(t,e)}})),t.property(Date,"universal",(function(e){var t=new Date;if(e=Date.offset(e))return Date.universal.offset=Date.now()-new Date(t.getUTCFullYear()+e.year,t.getUTCMonth()+e.month,t.getUTCDate()+e.day,t.getUTCHours()+e.hour,t.getUTCMinutes()+e.minute,t.getUTCSeconds()+e.second,t.getUTCMilliseconds()+e.ms).getTime()})),t.value(Date.universal,"offset",0,{configurable:!0,enumerable:!0,writable:!0}),t.property(Date,"zone",(function(e){if(e)for(var t in e)Date.zone.offset[t]=e[t]})),t.value(Date.zone,"universal",{name:"Universal",base:{name:"UTC"},c:{name:"Universal"},offset:{hour:0,minute:0}},{configurable:!0,enumerable:!0,writable:!0}),t.property(Date,"stamp",(function(e,t){return e?(e=new Date(e))&&t&&(t=Date.offset(t))?new Date(e.getFullYear()+t.year,e.getMonth()+t.month,e.getDate()+t.day,e.getHours()+t.hour,e.getMinutes()+t.minute,e.getSeconds()+t.second,e.getMilliseconds()+t.ms).getTime():e.getTime():Date.now()})),t.property(Date,"sleep",(function(e,t=1,...n){return setTimeout(e,1e3*t,...n)})),t.property(Date.sleep,"clear",(function(e){clearTimeout(e)})),t.property(Date,"interval",(function(e,t=1,...n){return setInterval(e,1e3*t,...n)})),t.property(Date.interval,"clear",(function(e){clearInterval(e)})),t.property(Date,"expire",(function(e,t,n){return new Date(...Date.properties(new Date(t),n)).getTime()<e})),t.property(Date,"offset",(function(e){return Object.assign({year:0,month:0,day:0,hour:0,minute:0,second:0,ms:0},e)})),t.property(Date,"pad",(function(e,t=2){return e.toString().padStart(t,"0")})),t.value(Date,"month",{name:["January","February","March","April","May","June","July","August","September","October","November","December"]}),t.value(Date,"day",{name:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}),t.property(Date,"format",(function(e,t){return t?Date.format.value[e]=t:e?Date.format.value[e]:Date.format.value})),t.value(Date.format,"value",{default:"L, F D, Y - H:I:S A",date:"Y-M-D","date:s":"Y-M","date:x":"YMD","date:c":"YM","date:time":"Y-M-D H:I:S",time:"H:I:S","time:s":"H:I","time:x":"HIS","time:c":"HI",factory:"D/M/Y"}),t.property(Date.Time,"zone",(function(e,n){if(!n)return e in Date.Time.zone?Date.Time.zone[e]:Date.zone.universal;t.value(Date.Time.zone,e,n,{configurable:!0,enumerable:!0,writable:!0})})),Date.Time.zone("asia/jakarta",{name:"",base:{name:"Asia/Jakarta"},c:{name:"Indonesia"},offset:{hour:7,minute:0}}),Date.Time.zone("asia/seoul",{name:"",base:{name:"Asia/Seoul"},c:{name:"South Korea"},offset:{hour:9,minute:0}}),Date.Time.zone("asia/tokyo",{name:"",base:{name:"Asia/Tokyo"},c:{name:"Japan"},offset:{hour:9,minute:0}}),Date.Time.zone("asia/singapore",{name:"",base:{name:"Asia/Singapore"},c:{name:"Singapore"},offset:{hour:8,minute:0}}),Date.Time.zone("asia/shanghai",{name:"",base:{name:"Asia/Shanghai"},c:{name:"China"},offset:{hour:8,minute:0}}),Date.Time.zone("asia/hong-kong",{name:"",base:{name:"Asia/Hong_Kong"},c:{name:"Hong Kong"},offset:{hour:8,minute:0}}),Date.Time.zone("asia/taipei",{name:"",base:{name:"Asia/Taipei"},c:{name:"Taiwan"},offset:{hour:8,minute:0}}),Date.Time.zone("asia/kuala-lumpur",{name:"",base:{name:"Asia/Kuala_Lumpur"},c:{name:"Malaysia"},offset:{hour:8,minute:0}}),Date.Time.zone("asia/qatar",{name:"",base:{name:"Asia/Qatar"},c:{name:"Qatar"},offset:{hour:3,minute:0}}),Date.Time.zone("asia/dubai",{name:"",base:{name:"Asia/Dubai"},c:{name:"United Arab Emirate (UAE)"},offset:{hour:4,minute:0}}),t.property(Date,"property",(function(e,t){return t=t||e.getTime(),{year:e.getFullYear(),month:e.getMonth(),day:e.getDate(),hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds(),ms:e.getUTCMilliseconds(),week:e.getDay(),query:{stamp:e.getTime()},stamp:t}})),t.property(Date,"properties",(function(e,t){return t=Date.offset(t),[e.getFullYear()+t.year,e.getMonth()+t.month,e.getDate()+t.day,e.getHours()+t.hour,e.getMinutes()+t.minute,e.getSeconds()+t.second,e.getUTCMilliseconds()+t.ms]})),t.value(URL,"host",{all:"0.0.0.0",local:"127.0.0.1"}),t.value(URL,"path","/"),t.value(URL,"protocol",{scheme:"http",secure:"https",file:{scheme:"ftp",secure:"ftps"}}),t.value(URL,"scheme",["http","https","ftp","ftps"]),t.value(URL,"favorite.ico","/favicon.ico"),t.value(URL,"package.json","./package.json"),t.value(URL,"/","./"),t.property(URL,"decode",(function(e){return decodeURIComponent(e)})),t.property(URL,"encode",(function(e){return encodeURIComponent(e)})),t.property(URL,"begin",(function(e){if(e){var t=[URL.protocol.scheme,URL.protocol.secure,URL.protocol.file.scheme,URL.protocol.file.secure];for(var n in t.push("file"),t)if(!1===e.startsWith(t[n]+"://"))return!1;return!0}})),t.property(URL,"end",(function(e){})),t.property(URL,"format",(function(e,t){Object.is.object(e)&&(t=e),t=Object.assign({protocol:URL.protocol.scheme,host:URL.host.all,path:URL.path},t);var n=t.protocol,r=t.host,i=t.path,s=URL.query.format(t.query);return t.secure&&(n=n.concat("s")),Object.is.string(e)?(e=e.concat(s)).begin("//")?n.concat(":").concat(e):e.begin("/")?n.concat("://",r,e):n.concat("://",e):n.concat("://",r,i.concat(s))})),t.property(URL,"parse",(function(e,t,n=!0){var r=URL.parse.component(e);return t=Object.assign({strict:!1,protocol:{s:URL.scheme,scheme:URL.protocol.scheme},host:URL.host.all,path:URL.path},t),r?(r.location=r.protocol.concat("://").concat(r.host.base.name),host=URL.parse.element(r.host.name,t.domain),(r.domain={name:"",base:{name:""},extension:"",sub:URL.domain.sub(),reverse:""})&&host&&(r.host["*"]="."+(r.domain.name=host.domain),r.domain.base.name=host.name,r.domain.extension=host.extension,r.domain.sub=host.sub,r.domain.reverse=host.reverse),r.name=r.domain.name||r.host.name,r.search&&(r.query=URL.query.parse(r.search,t.query)),r.port&&(r.port=Number(r.port)),(!0!==t.strict||!1!==t.protocol.s.includes(r.protocol))&&r):!(!0!==n||!(e=URL.parse(URL.format(e,{protocol:t.protocol.scheme,host:t.host}),t,!1)))&&e})),t.property(URL,"parse_url",(function(e,t,n){return(e=URL.parse(e,t,n))?e:{reference:"",location:"",protocol:"",host:{name:"",base:{name:""},"*":""},port:"",user:"",password:"",search:"",query:{},path:"",tag:"",domain:{name:"",base:{name:""},extension:"",sub:"",reverse:""},name:""}})),t.property(URL.parse,"component",(function(e){try{if(e.includes("://")&&(e=new URL(e)))return{reference:e.href,location:"",protocol:e.protocol.pop(),host:{name:e.hostname,base:{name:e.host},"*":e.hostname},port:e.port,user:e.username,password:e.password,search:e.search.shift(),query:{},path:URL.decode(e.pathname),tag:e.hash.shift()}}catch(t){}})),t.property(URL.parse,"element",(function(e,t){var n,r,i,s,o;if(e)for(var a in t=Object.assign({extension:URL.domain.extension(),sub:URL.domain.sub()},t),t.extension)if(e.end(o=(i=t.extension[a]).length)===i)return""===(s=e.pop((r=(n=e.pop(o).split(".").end()).concat(i)).length+1))&&(s=t.sub),{name:n,domain:r,extension:i,sub:s,reverse:s.split(".").reverse().join(".")}})),t.property(URL,"query",(function(){})),t.property(URL.query,"separator",(function(e){return e?URL.query.separator.value=e:URL.query.separator.value})),t.value(URL.query.separator,"value","&",{configurable:!0,enumerable:!0,writable:!0}),t.property(URL.query,"delimiter",(function(e){return e?URL.query.delimiter.value=e:URL.query.delimiter.value})),t.value(URL.query.delimiter,"value","=",{configurable:!0,enumerable:!0,writable:!0}),t.property(URL.query,"format",(function(e,t=!0){var n=[];if(e)for(var r in e)Array.isArray()?n.push(r.concat(URL.query.delimiter.value).concat("["+e[r].join(",")+"]")):n.push(r.concat(URL.query.delimiter.value).concat(e[r]));return n.length?t?"?"+n.join(URL.query.separator.value):n.join(URL.query.separator.value):""})),t.property(URL.query,"parse",(function(e){var t,n={};for(var r in e=e.split(URL.query.separator.value))for(var i in t=e[r].split(URL.query.delimiter.value))n[t[0]]=t[1];return n})),t.property(URL,"domain",(function(){})),t.property(URL.domain,"sub",(function(e){return e?URL.domain.sub.value=e:URL.domain.sub.value})),t.value(URL.domain.sub,"value","www",{configurable:!0,enumerable:!0,writable:!0}),t.property(URL.domain,"extension",(function(e){return e?URL.domain.extension.value=URL.domain.extension.sort(e):URL.domain.extension.value})),t.value(URL.domain.extension,"value",[".com",".net",".org"],{configurable:!0,enumerable:!0,writable:!0}),t.property(URL.domain.extension,"sort",(function(e){var t=[],n=[],r=e.sort();for(var i in r)r[i].count(".")>1?n.push(r[i]):t.push(r[i]);return n.concat(t)})),URL.domain.extension([".com",".net",".org",".info",".mobi",".tv",".co",".io",".me",".ninja",".blog",".site",".store",".shop",".live",".life",".cloud",".online",".app",".dev",".club",".id",".co.id",".xyz",".xxx",".local",".host"]),t.property(Function,"http",(function(){})),t.property(Function.http,"request",(function(){})),t.property(Function.http.request,"time",(function(){})),t.value(Function.http.request.time,"out",30,{configurable:!0,enumerable:!0,writable:!0}),t.value(Function.http.request,"method",{get:"GET",post:"POST",header:"HEAD",put:"PUT",delete:"DELETE",option:"OPTIONS"}),t.property(Function.http,"header",(function(){})),t.value(Function.http.header,"status",{OK:200,success:200,error:{request:400,forbidden:403,found:404,legal:451,s:500},message:{},code:{100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",444:"Connection Closed Without Response",451:"Unavailable For Legal Reasons",499:"Client Closed Request",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",510:"Not Extended",511:"Network Authentication Required",599:"Network Connect Timeout Error"}}),t.property(Function,"store",class{}),t.property(Function,"storage",class{constructor(){}static clear(){localStorage.clear()}static delete(e){localStorage.removeItem(e)}static set(e,t,n){return n&&e in localStorage?Function.storage.convert(localStorage.getItem(e)||t):(arguments.length>1&&localStorage.setItem(e,t),t)}static get(e,t){if(e)return Function.storage.convert(localStorage.getItem(e)||t);var n={},r=Object.keys(localStorage);for(var i in r)n[r[i]]=localStorage.getItem(r[i]);return n}static json(e,t,n){var r=localStorage.getItem(e);return n&&r?JSON.parse(r):(arguments.length>1&&localStorage.setItem(e,r=JSON.stringify(t)),r?JSON.parse(r):void 0)}}),t.property(Function.storage,"convert",(function(e){return"null"===e?null:"true"===e||"false"!==e&&("undefined"===e?void 0:e)})),t.property(Function,"session",class{constructor(){}static clear(){sessionStorage.clear()}static delete(e){sessionStorage.removeItem(e)}static set(e,t){return sessionStorage.setItem(e,t),t}static get(e,t){if(e)return t=sessionStorage.getItem(e)||t,"null"===t?null:"true"===t||"false"!==t&&("undefined"===t?void 0:t);var n={},r=Object.keys(sessionStorage);for(var i in r)n[r[i]]=sessionStorage.getItem(r[i]);return n}static json(e,t,n){var r=sessionStorage.getItem(e);return n&&r?JSON.parse(r):(arguments.length>1&&sessionStorage.setItem(e,r=JSON.stringify(t)),r?JSON.parse(r):void 0)}}),t.property(Function.session,"manager",class{constructor(e,t,n){this.data={},(this.proto=e)?this.proto.cookie=new Function.cookie(window.url.host["*"]):this.proto={cookie:new Function.cookie(window.url.host["*"])},t&&this.start(t,n)}start(e,t){if((this.option=Object.assign({name:Function.session.name,signature:Function.session.signature,secure:!1},e))&&(this.name=this.option.name,this.signature=this.option.signature,this.secure=this.option.secure,this.shuffle=this.option.id||Function.session.shuffle()),this.proto.cookie.start()&&Object.is.empty(this.id=this.proto.cookie.get(this.name))&&(this.id=this.proto.cookie.set(this.name,this.shuffle,this.option),this.proto.cookie.set(this.signature,JSON.stringify({}).encode(),this.option)),(this.session=this.proto.cookie.get(this.signature).decode())&&(this.session=JSON.parse(this.session)))for(var n in this.session)this.data[n]=this.session[n];t&&t.call(this,this.id)}set(e,t,n){return n&&this.data[e]?this.data[e]:(this.data[e]=t,this.proto.cookie.set(this.signature,JSON.stringify(this.data).encode(),this.option),t)}get(e,t){return e?e in this.data?this.data[e]||t:"":this.data}delete(e){"*"===e?this.data={}:delete this.data[e],this.proto.cookie.set(this.signature,JSON.stringify(this.data).encode())}exist(e){return e in this.data}apply(e){return e&&(this.data=Object.merge(this.data,e)),this.data}}),t.property(Function.session,"shuffle",(function(){return Date.now().toString().concat("-").concat(Function.hash.shuffle(Number.char))})),t.value(Function.session,"name","session"),t.value(Function.session,"signature","session.signature"),t.value(Function.session,"mode","none"),t.value(Function.session,"secure",!1),t.property(Function,"cookie",class{constructor(e){(this.data={})&&(this.domain=e)}start(){var e=document.cookie.split(";");for(var t in e){var n=e[t].split("="),r=n[0].trim(),i=n[1];i&&(this.data[r]=i)}return this}set(e,t,n){var r=[];n=Object.assign({path:this.path||"/",domain:this.domain,expire:this.expire,mode:this.mode||"lax"},n);return r.push(e+"="+t),n.expire&&r.push("expire="+n.expire),n.domain&&r.push("domain="+n.domain),n.path&&r.push("path="+n.path),"lax"===n.mode&&r.push("samesite=lax"),"none"===n.mode&&r.push("samesite=none"),!0===n.secure&&r.push("secure"),console.log(n,r),document.cookie=r.join(";"),this.data[e]=t}get(e,t){return e?e in this.data?this.data[e]||t:"":this.data}delete(e,t){if(e)this.set(e,"",t);else for(var n in this.data)delete this.data[n]&&this.set(n,"",t)}}),t.property(Function,"web",(function(){})),t.property(Function.web,"socket",class{constructor(e){this.socket=new WebSocket(this.url=e)}send(e){this.socket.send(e)}on(e,t){"open"===e&&(this.socket.onopen=t),"message"===e&&(this.socket.onmessage=t)}emit(e,t){arguments.length>1?this.socket.send(JSON.stringify({key:e,value:t})):this.socket.send(e)}}),t.property(Function.web.socket,"io",class{constructor(e,t){Object.is.function(e)?e.call(this):this.url=Function.web.socket.url(e),t&&this.start(t),this.context={}}on(e,t){this.socket.on(e,t)}off(e){this.socket.off(e)}set(e,t){return this.context[e]=t,this}start(e){return(this.initialize=!0)&&(this.socket=Function.web.socket.io.client(this.url,{extraHeaders:{session:this.session,token:this.token}}))&&e&&e.call(this),this}connect(e,t){return Object.is.function(e)?this.set("connect",e):"error"===e?(this.set("error",t),this.socket.on("connect_failed",t)):(this.on("connect",Function.context({socket:this},(function(){this.socket.context.connect&&this.socket.context.connect.call(this.socket),this.socket.initialize=!0}))),this.on("disconnect",Function.context({socket:this},(function(){this.socket.context.error&&this.socket.context.error.call(this.socket),this.socket.initialize=null}))),this.on("tokenizer",Function.context({socket:this},(function(e){this.socket.tokenizer=e,this.socket.ready&&(this.socket.ready.value=!0)})))),this}emit(e,t){return this.initialize&&this.tokenizer?(this.socket.emit(e,t={context:{id:Function.hash.shuffle(),session:this.session,tokenizer:this.tokenizer},data:t}),new Function.web.socket.io.emitter(this,e,t)):new Function.context.error("socket:connection",this.socket)}}),t.property(Function.web.socket.io,"emitter",class{constructor(e,t,n){this.socket=e,this.key=t,this.value=n}next(...e){this.then(...e).catch()}then(...e){return this.context=Function.context(...e),this.error?this.commit():this}catch(e){return this.context?this.commit(e):(this.error=e,this)}commit(e){return this.socket.on(this.key,Function.context({socket:this.socket,key:this.key,value:this.value,emitter:this,context:e},(function(e){Object.is.object(e)&&e.context&&e.context.id===this.value.context.id&&this.emitter.context&&(Object.is.object(e.data)&&e.data.error?(this.context||this.emitter.error||function(e){console.error("socket:error",e)}).call(e,e.data.error):this.emitter.context.call(e,e.data)),this.socket.off(this.key)}))),this}}),t.property(Function.web.socket,"url",(function(e){return e=String.replace("http://","ws://",e),e=String.replace("https://","wss://",e),e})),t.property(Function,"cross",(function(){})),t.property(Function.cross,"origin",(function(){})),t.value(Function.cross.origin,"method",{methods:"GET,HEAD,PUT,PATCH,POST,DELETE"}),t.value(Function.cross.origin,"status",{optionsSuccessStatus:200}),t.property(Function,"data"),t.property(Function,"db",class{constructor(e,t){(this.file=e)&&(this.data=null,this.option=Object.assign({type:"json",log:!0},t),this.option.data&&(this.data=this.option.data),!1===Error.native(e=Function.file.read(this.file,this.option))&&!1===Object.is.buffer(e)&&(Object.is.object(e)?this.data=Object.merge(this.option.data,e):this.data=e))}start(e){return(this.adapter=(e=Object.assign({slot:"query"},e)).adapter||Function.db.adapter("mongo"))&&("query"===(this.slot=e.slot)&&(this.option={host:e.host,user:e.user,password:e.password,database:e.name,namedPlaceholders:!0},this.param=Function.db.adapter[this.adapter].param,this.parameter=Function.db.adapter[this.adapter].parameter,"limit"in e&&(this.option.connectionLimit=e.limit),"pool"===e.type?this.pool():this.connection()),this.socket=e.socket),this.collection=new Function.db[this.slot].collection(this),this.view=new Function.db[this.slot].view(this),this}connection(){return this.link=Function.db.adapter[this.adapter].connection(this.option),this}pool(){return this.link=Function.db.adapter[this.adapter].connection.pool(this.option),this}on(e,t){return this.link.on(e,t),this}query(...e){return Function.db.adapter[this.adapter].query(this.link,...e)}select(e,t){return new Function.db[this.slot].select(this,e,t)}insert(e,t){return new Function.db[this.slot].insert(this,e,t)}update(e,t){return new Function.db[this.slot].update(this,e,t)}delete(e,t){return this.file?(delete this.data[data],this.write()):new Function.db[this.slot].delete(this,e,t)}get(e,t){return e&&Object.is.object(this.data)?this.data[e]||t:this.data}set(e,t){return Object.is.object(this.data)?t?Object.is.object(t)&&Object.is.object(this.data[e])?this.data[e]=Object.merge(this.data[e],t):this.data[e]=t:Object.is.object(e)&&(this.data=Object.merge(this.data,e)):this.data=arguments.length>1?{[e]:t}:e,this}log(e){return this.option.log?this.set({[Date.now()]:e}):this}write(...e){e=Function.argument(...e);var t=Object.assign({type:this.option.type,pretty:!0},e.object),n=e.function;return Function.file.write(this.file,this.data,t,n),this}listen(e){e.call(this)}}),t.property(Function.db,"session",class extends Function.db{constructor(e){super(e)}start(e){return this.set("id",e||Function.session.shuffle()).write()}}),t.property(Function.db,"adapter",(function(e){return t.value(Function.db.adapter,"name",e,{configurable:!0,enumerable:!0,writable:!0}),e})),t.property(Function.db,"promise",(function(e){return Object.is.define(e)&&(Function.db.promise.value=e),Function.db.promise.value})),t.property(Function.db,"query",(function(){})),t.property(Function.db.query,"then",(function(e,...t){return this.db.query(e.sql,e.param).then(...t)})),t.property(Function.db.query,"catch",(function(e,...t){return this.db.query(e.sql,e.param).catch(...t)})),t.property(Function.db.query,"collection",class{__(e,t,n){return this.command=e,this.collection=t,this.context=n,this}constructor(e){this.db=e,this.data={},this.option={on:[],sort:[],limit:[]},this.prefix=Function.db.adapter[this.db.adapter].query.collection.prefix}create(e,t){return this.__("create",e,t)}list(e,t){return this.__("list",e,t)}from(e){return this.data.base=e,this}set(e){return this.data.entry=e,this}then(...e){return"list"===this.command?Function.db.query.then.call(this,Function.db.adapter[this.db.adapter].query.collection.list(this.data.base),...e):"create"===this.command?Function.db.query.then.call(this,Function.db.adapter[this.db.adapter].query.collection.create(this.data.base,this.collection,this.data.entry),...e):void 0}catch(...e){return"list"===this.command?Function.db.query.catch.call(this,Function.db.adapter[this.db.adapter].query.collection.list(this.data.base),...e):"create"===this.command?Function.db.query.catch.call(this,Function.db.adapter[this.db.adapter].query.collection.create(this.data.base,this.collection,this.data.entry),...e):void 0}}),t.property(Function.db.query,"view",class{__(e,t,n){return this.command=e,this.collection=t,this.context=n,this}constructor(e){this.db=e,this.data={},this.option={on:[],sort:[],limit:[]},this.prefix=Function.db.adapter[this.db.adapter].query.view.prefix}create(e,t){return this.__("create",e,t)}select(e,t){return this.__("select",e,t)}from(e){return this.data.base=e,this}set(e){return this.data.entry=e,this}meta(e){return this.data.meta=e,this}on(...e){return this.option.on=e,this}sort(...e){return this.option.sort=e,this}limit(...e){return this.option.limit=e,this}then(...e){return"create"===this.command?Function.db.query.then.call(this,Function.db.adapter[this.db.adapter].query.view.create(this.data.base,this.collection,this.data.entry),...e):"select"===this.command?Function.db.query.then.call(this,Function.db.adapter[this.db.adapter].query.view(this.data.base,this.collection,this.option.on,this.option.sort,this.option.limit),...e):void 0}catch(...e){return"create"===this.command?Function.db.query.catch.call(this,Function.db.adapter[this.db.adapter].query.view.create(this.data.base,this.collection,this.data.entry),...e):"select"===this.command?Function.db.query.catch.call(this,Function.db.adapter[this.db.adapter].query.view(this.data.base,this.collection,this.option.on,this.option.sort,this.option.limit),...e):void 0}}),t.property(Function.db.query,"select",class{constructor(e,t,n){this.db=e,this.collection=t,this.context=n,this.data={},this.option={on:[],sort:[],limit:[]}}from(e){return this.data.base=e,this}meta(e){return this.data.meta=e,this}parent(e){return this.data.parent=e,this}on(...e){return this.option.on=e,this}sort(...e){return this.option.sort=e,this}limit(...e){return this.option.limit=e,this}then(...e){return this.context&&(e=[this.context].concat(e)),Function.db.query.then.call(this,Function.db.adapter[this.db.adapter].query.select(this.data.base,this.collection,this.option.on,this.option.sort,this.option.limit),...e)}catch(...e){return this.context&&(e=[this.context].concat(e)),Function.db.query.catch.call(this,Function.db.adapter[this.db.adapter].query.select(this.data.base,this.collection,this.option.on,this.option.sort,this.option.limit),...e)}}),t.property(Function.db.query,"insert",class{constructor(e,t,n){this.db=e,this.collection=t,this.context=n,this.data={},this.option={on:[],sort:[],limit:[]}}from(e){return this.data.base=e,this}set(e){return this.data.entry=e,this}then(...e){return Function.db.query.then.call(this,Function.db.adapter[this.db.adapter].query.insert(this.data.base,this.collection,this.data.entry),...e)}catch(...e){return Function.db.query.catch.call(this,Function.db.adapter[this.db.adapter].query.insert(this.data.base,this.collection,this.data.entry),...e)}}),t.property(Function.db.query,"update",class{constructor(e,t,n){this.db=e,this.collection=t,this.context=n,this.data={},this.option={on:[],sort:[],limit:[]}}from(e){return this.data.base=e,this}set(e){return this.data.entry=e,this}on(...e){return this.option.on=e,this}sort(...e){return this.option.sort=e,this}limit(...e){return this.option.limit=e,this}then(...e){return Function.db.query.then.call(this,Function.db.adapter[this.db.adapter].query.update(this.data.base,this.collection,this.data.entry,this.option.on,this.option.sort,this.option.limit),...e)}catch(...e){return Function.db.query.catch.call(this,Function.db.adapter[this.db.adapter].query.update(this.data.base,this.collection,this.data.entry,this.option.on,this.option.sort,this.option.limit),...e)}}),t.property(Function.db.query,"delete",class{constructor(e,t,n){this.db=e,this.collection=t,this.context=n,this.data={},this.option={on:[],sort:[],limit:[]}}from(e){return this.data.base=e,this}on(...e){return this.option.on=e,this}sort(...e){return this.option.sort=e,this}limit(...e){return this.option.limit=e,this}then(...e){return Function.db.query.then.call(this,Function.db.adapter[this.db.adapter].query.delete(this.data.base,this.collection,this.option.on,this.option.sort,this.option.limit),...e)}catch(...e){return Function.db.query.catch.call(this,Function.db.adapter[this.db.adapter].query.delete(this.data.base,this.collection,this.option.on,this.option.sort,this.option.limit),...e)}}),t.property(Function.db,"socket",(function(){})),t.property(Function.db.socket,"then",(function(e,t,...n){return this.db.socket.emit(e,t).then(...n)})),t.property(Function.db.socket,"catch",(function(e,t,...n){return this.db.socket.emit(e,t).catch(...n)})),t.property(Function.db.socket,"collection",class{__(e,t,n){return this.command=e,this.collection=t,this.context=n,this}constructor(e){this.db=e,this.data={},this.option={}}create(e,t){return this.__("create",e,t)}list(e,t){return this.__("list",e,t)}from(e){return this.data.base=e,this}set(e){return this.data.entry=e,this}then(...e){return"list"===this.command?Function.db.socket.then.call(this,"db:list",{data:{base:this.data.base}},...e):"create"===this.command?Function.db.socket.then.call(this,"db-collection:create",{data:{base:this.data.base,entry:this.data.entry},collection:this.collection},...e):void 0}catch(...e){return"list"===this.command?Function.db.socket.catch.call(this,"db:list",{data:{base:this.data.base}},...e):"create"===this.command?Function.db.socket.catch.call(this,"db-collection:create",{data:{base:this.data.base,entry:this.data.entry},collection:this.collection},...e):void 0}}),t.property(Function.db.socket,"view",class{__(e,t,n){return this.command=e,this.collection=t,this.context=n,this}constructor(e){this.db=e,this.data={},this.option={where:[],sort:[],limit:[]}}create(e,t){return this.__("create",e,t)}select(e,t){return this.__("select",e,t)}from(e){return this.data.base=e,this}meta(e){return this.data.meta=e,this}on(...e){return this.option.where=e,this}where(...e){return this.option.where=e,this}sort(...e){return this.option.sort=e,this}limit(...e){return this.option.limit=e,this}then(...e){return"create"===this.command?Function.db.socket.then.call(this,"db-view:create",{data:{base:this.data.base,entry:this.data.entry},collection:this.collection},...e):"select"===this.command?Function.db.socket.then.call(this,"db-view:select",{data:{base:this.data.base},collection:this.collection,on:this.option.where,where:this.option.where,sort:this.option.sort,limit:this.option.limit},...e):void 0}catch(...e){return"create"===this.command?Function.db.socket.catch.call(this,"db-view:create",{data:{base:this.data.base,entry:this.data.entry},collection:this.collection},...e):"select"===this.command?Function.db.socket.catch.call(this,"db-view:select",{data:{base:this.data.base},collection:this.collection,on:this.option.where,where:this.option.where,sort:this.option.sort,limit:this.option.limit},...e):void 0}}),t.property(Function.db.socket,"select",class{constructor(e,t,n){this.db=e,this.collection=t,this.context=n,this.data={},this.option={where:[],sort:[],limit:[]}}from(e){return this.data.base=e,this}meta(e){return this.data.meta=e,this}parent(e){return this.data.parent=e,this}on(...e){if(this.option.where=e)return this}where(...e){if(this.option.where=e)return this}sort(...e){if(this.option.sort=e)return this}limit(...e){if(this.option.limit=e)return this}then(...e){return Function.db.socket.then.call(this,"db:select",{data:{base:this.data.base},collection:this.collection,meta:this.data.meta,parent:this.data.parent,on:this.option.where,where:this.option.where,sort:this.option.sort,limit:this.option.limit},...e)}catch(...e){return Function.db.socket.catch.call(this,"db:select",{data:{base:this.data.base},collection:this.collection,meta:this.data.meta,parent:this.data.parent,on:this.option.where,where:this.option.where,sort:this.option.sort,limit:this.option.limit},...e)}}),t.property(Function.db.socket,"insert",class{constructor(e,t,n){this.db=e,this.collection=t,this.context=n,this.data={},this.option={where:[],sort:[],limit:[]}}from(e){return this.data.base=e,this}set(e){return this.data.entry=e,this}then(...e){return Function.db.socket.then.call(this,"db:insert",{data:{base:this.data.base,entry:this.data.entry},collection:this.collection},...e)}catch(...e){return Function.db.socket.catch.call(this,"db:insert",{data:{base:this.data.base,entry:this.data.entry},collection:this.collection},...e)}}),t.property(Function.db.socket,"update",class{constructor(e,t,n){this.db=e,this.collection=t,this.context=n,this.data={},this.option={where:[],sort:[],limit:[]}}from(e){return this.data.base=e,this}set(e){return this.data.entry=e,this}on(...e){if(this.option.where=e)return this}where(...e){if(this.option.where=e)return this}sort(...e){if(this.option.sort=e)return this}limit(...e){if(this.option.limit=e)return this}then(...e){return Function.db.socket.then.call(this,"db:update",{data:{base:this.data.base,entry:this.data.entry},collection:this.collection,on:this.option.where,where:this.option.where,sort:this.option.sort,limit:this.option.limit},...e)}catch(...e){return Function.db.socket.catch.call(this,"db:update",{data:{base:this.data.base,entry:this.data.entry},collection:this.collection,on:this.option.where,where:this.option.where,sort:this.option.sort,limit:this.option.limit},...e)}}),t.property(Function.db.socket,"delete",class{constructor(e,t,n){this.db=e,this.collection=t,this.context=n,this.data={},this.option={where:[],sort:[],limit:[]}}from(e){return this.data.base=e,this}on(...e){if(this.option.where=e)return this}where(...e){if(this.option.where=e)return this}sort(...e){if(this.option.sort=e)return this}limit(...e){if(this.option.limit=e)return this}then(...e){return Function.db.socket.then.call(this,"db:delete",{data:{base:this.data.base},collection:this.collection,on:this.option.where,where:this.option.where,sort:this.option.sort,limit:this.option.limit},...e)}catch(...e){return Function.db.socket.catch.call(this,"db:delete",{data:{base:this.data.base},collection:this.collection,on:this.option.where,where:this.option.where,sort:this.option.sort,limit:this.option.limit},...e)}}),t.property(Function,"sql",(function(){})),t.property(Function.sql,"eol",String.char.eol),t.property(Function.sql,"delimiter",String.char.separator.delimiter),t.property(Function.sql,"comment","--"),t.property(Function.sql,"parse",(function(e){var t=[];for(var n in e=e.split(Function.sql.eol))e[n].trim()&&t.push(e[n].trim().concat(Function.sql.eol));return t})),t.property(Function.sql.parse,"line",(function(e){var t,n=[];for(var r in e=(e||"").split(Function.sql.eol))(t=e[r].trim()).substr(0,2)===Function.sql.comment===!1&&n.push(t);return n})),t.property(Function.sql,"format",(function(e,t){for(var n in t)e=e.replace(n,t[n]);return e})),t.property(Function.sql,"debug",(function(e){return Object.is.define(e)&&(Function.sql.debug.value=e),Function.sql.debug.value})),t.property(Function,"serialize",(function(){})),t.property(Function,"xml",(function(){})),t.property(JSON,"format",(function(...e){return JSON.stringify(...e)})),t.property(JSON,"encode",(function(e,...t){try{return Object.is.define(e)?JSON.stringify(e,...t):new Error}catch(n){return new Error}})),t.property(JSON,"decode",(function(e){try{return Object.is.string(e)&&e?JSON.parse(e):new Error}catch(t){return new Error}})),t.property(JSON,"pretty",[null,4]),t.property(Function,"dom",(function(e){return new Function.dom.document(e)})),t.property(Function.dom,"document",class{constructor(e){Object.is.string(e)?this.dom=Function.dom.query.selector(e):this.dom=e,this.class=new Function.dom.class(this.dom)}content(e){if(this.dom)return Object.is.set(e)?this.dom.innerHTML=e:this.dom.innerHTML}text(e){return this.dom&&(this.dom.innerHTML=e),this}enable(e){return this.dom&&(this.dom.disabled=!e),this}focus(){return this.dom&&this.dom.focus(),this}value(e){if(null===e&&(this.dom.value=""),this.dom)return this.dom.value}attribute(e,t){if(this.dom)if(arguments.length>1)Object.is.set(t)?Function.dom.attribute.set(e,t,this.dom):Function.dom.attribute.delete(e,this.dom);else if(e)return Function.dom.attribute.get(e,this.dom);return this}remove(){return this.dom&&this.dom.remove(),this}play(){this.dom.play()}}),t.property(Function.dom,"class",class{constructor(e){this.dom=e}list(){return this.dom?this.dom.className.split(" "):[]}set(e){return this.dom&&(this.dom.className=e),this}insert(e){return this.dom&&!1===this.list().includes(e)&&(this.dom.className=this.dom.className+" "+e),this}delete(e){if(this.dom){var t=[],n=this.list();for(var r in n)e===n[r]===!1&&t.push(n[r]);this.dom.className=t.join(" ")}return this}}),t.property(Function.dom,"parse",(function(e,t,n){var r=n||{component:[],element:[]};e=e.toString((t=Object.assign({depth:!1},t)).encoding);if(null===n){var i=e.match(Function.dom.pattern.element);for(var s in i){var o=new RegExp(Function.dom.pattern.element).exec(i[s]),a=o[0],c=o[1],u={},l=o[2].match(Function.dom.pattern.attribute);for(var h in l){var d=new RegExp(Function.dom.pattern.attribute).exec(l[h]);u[d[1].trim()]=d[2]}r.element.push({tag:c,attribute:u,source:a})}}var f=e.match(Function.dom.pattern.component);for(var s in f){o=new RegExp(Function.dom.pattern.component).exec(f[s]),a=o[0],c=o[1],u={};var p=o[3];l=o[2].match(Function.dom.pattern.attribute);for(var h in l){d=new RegExp(Function.dom.pattern.attribute).exec(l[h]);u[d[1].trim()]=d[2]}r.component.push({tag:c,attribute:u,content:p,source:a}),!0===t.depth&&Function.dom.parse(p,t,r)}return r})),t.property(Function.dom,"component",(function(e,t,n){var r=[],i=Function.dom.pattern.tag.component(t),s=(e=e.toString((n=Object.assign({attribute:!1},n)).encoding)).match(new RegExp(i,"sig"));for(var o in s){var a=new RegExp(i,"sig").exec(s[o]),c=a[0],u=a[2],l={},h=a[1].match(Function.dom.pattern.attribute);for(var d in h){var f,p=new RegExp(Function.dom.pattern.attribute).exec(h[d]),m=p[1].trim(),g=p[2];n.attribute&&m.includes(":")?(f=m.split(":"),l[f[0]]||(l[f[0]]={}),l[f[0]][f[1]]=g):l[m]=g}r.push({attribute:l,content:u,source:c})}return r})),t.property(Function.dom,"element",(function(e,t,n){var r=[],i=Function.dom.pattern.tag.element(t),s=(e=e.toString((n=Object.assign({attribute:!1},n)).encoding)).match(new RegExp(i,"g"));for(var o in s){var a=new RegExp(i,"g").exec(s[o]),c=a[0],u={},l=a[1].match(Function.dom.pattern.attribute);for(var h in l){var d,f=new RegExp(Function.dom.pattern.attribute).exec(l[h]),p=f[1].trim(),m=f[2];n.attribute&&p.includes(":")?(d=p.split(":"),u[d[0]]||(u[d[0]]={}),u[d[0]][d[1]]=m):u[p]=m}r.push({attribute:u,source:c})}return r})),t.property(Function.dom.element,"get",(function(e){return document.getElementById(e.id)})),t.property(Function.dom,"attribute",(function(e,t,n){return arguments.length>2?Function.dom.attribute.set(t,n,Function.dom.query.selector(e)):Function.dom.attribute.get(t,Function.dom.query.selector(e))})),t.property(Function.dom.attribute,"get",(function(e,t){if(t)return t.getAttribute(e)||""})),t.property(Function.dom.attribute,"set",(function(e,t,n){if(n)return n.setAttribute(e,t)})),t.property(Function.dom.attribute,"delete",(function(e,t){if(t)return t.removeAttribute(e)})),t.property(Function.dom,"query",(function(){})),t.property(Function.dom.query,"selector",(function(e){return document.querySelector(e.split(":").join("\\:"))})),t.property(Function,"query",(function(){})),t.property(Function.query,"selector",(function(...e){var t=[];for(var n in e)if("string"===typeof e[n]&&t.push("["+e[n]+"]"),"object"===typeof e[n]){var r=[];for(var i in e[n])null===e[n][i]?r.push("["+i+"]"):r.push("["+i+"='"+e[n][i]+"']");t.push(r.join(", "))}return t.join(" > ")})),t.property(Function.dom,"markup",(function(e){return e=e.replace("<meta title>","<title></title>"),e=e.replace('<meta charset="default">','<meta charset="UTF-8">'),e=e.replace('<meta http-equiv="x-compatible" content="edge">','<meta http-equiv="X-UA-Compatible" content="IE=edge">'),e})),Function.dom.markup.title={key:"<title></title>",tmp:"<title>%s</title>"},Function.dom.markup.app={key:"<script app><\/script>",value:'<div class="application"><div id="application"><div id="app"></div><div id="print"></div></div></div>'},Function.dom.markup.application={key:"<script application><\/script>",value:'<div id="media-query:data"></div><div id="application"><div class="application"><div id="app"></div><div id="print"></div></div></div>'},Function.dom.markup.script={link:{key:"<script link><\/script>"},data:{key:"<script data><\/script>",value:'<div id="media-query:data"></div>',tmp:'<div id="media-query:data">%s</div>'},plugin:{key:"<script plugin><\/script>"}},t.value(Function.dom,"pattern",{attribute:/(.*?)="(.*?)"/gis,component:/<([a-z:0-9]+)\s*(.*?)>\s*(.*?)\s*<\/\1>/gis,element:/<([a-z:0-9]+)\s*(.*?)\/>/g,tag:{component:function(e){return"<"+e+"s*(.*?)>s*(.*?)s*</"+e+">"},element:function(e){return"<"+e+"+s*(.*?)/>"}}}),t.property(Function,"scroll",(function(e,t){e=e||0,t=t||0,window.scrollTo(e,t)})),t.property(Function.scroll,"on",(function(e){window.onscroll=e})),t.property(Function.scroll.on,"top",(function(){return 0===window.scrollY})),t.property(Function.scroll,"top",(function(){return window.scrollY})),t.property(Function,"visitor",(function(e){var t={browser:{name:e||window.navigator.userAgent},device:{name:"computer"}};e=t.browser.name.toLowerCase();return e.includes("android")&&(e.includes("wv")&&(t.browser.model="web-view"),e.includes("mobile")?t.device.name="phone":t.device.name="tablet",e.includes("android")&&(t.device.model="a")),e.includes("mac")&&(e.includes("iphone")?t.device.name="phone":e.includes("ipad")?t.device.name="tablet":t.device.name="computer",e.includes("iphone")&&(t.device.model="i")),e.includes("firefox")?t.browser.platform="mozilla":e.includes("chrome")?t.browser.platform="chrome":e.includes("safari")?t.browser.platform="safari":t.browser.platform="*",t})),t.property(Function.visitor,"__",(function(e){var n=Function.visitor();for(var r in n)t.value(Function.visitor,r,n[r])})),t.property(Function,"user",(function(){})),t.property(Function.user,"name",(function(e,n){t.value(Function.user.name,e,n,{configurable:!0,enumerable:!0,writable:!0})})),Function.user.name("length",6),t(Object.is,"user",(function(){})),t(Object.is.user,"name",(function(e){var t=["-","_","."];if((e=Object.to.string(e).toLowerCase().trim())&&String.char.alpha.small.split("").includes(e.begin())&&String.char.alpha.numeric.split("").includes(e.end())&&String.char.alpha.numeric.split("").concat(t).include(e.split(""))){for(var n in t)if(e.includes(t[n].repeat(2)))return!1;if(e.length>Function.user.name.length-1)return!0}return!1})),t.property(Function,"email",(function(){})),t.property(Function.email,"format",(function(e,t){return e.concat("@",t)})),t(Object.is,"email",(function(e){if(e=Object.to.string(e).toLowerCase().trim()){e.before("@").trim();var t,n=e.after("@").trim();if(t=URL.parse(n)){if(Object.is.ip(t.host.name))return!0;if(t.domain.name)return!0}}return!1})),t.property(Function,"phone",(function(){})),t(Object.is,"phone",(function(e){if((e=Object.to.string(e).trim().toLowerCase())&&("+"===e.substr(0,1)||"0"===e.substr(0,1)))return Object.is.number(e.substr(1))})),t.property(Function,"mobile",(function(){})),t.property(Function.mobile,"i",(function(){})),t.property(Function.mobile,"a",(function(){})),t.property(Function.mobile.a,"exit",(function(){Android.exit()})),t.property(Function.mobile.a,"toast",(function(e){Android.toast(e)})),t.property(Function.mobile.a,"notification",(function(e,t,n,r,i){Android.notification(e,t,n,r,i)})),t.property(Function.mobile.a,"audio",(function(e){Android.audio(e)})),t.property(Function.mobile.a,"printhermal",(function(e){Android.printhermal(e)})),t.property(Function,"audio",(function(e,t){return URL.begin(e=e||"audio")?new Function.audio.player(e):(e in Function.audio.play.list&&(e=Function.audio.play.list[e]),"web-view"===Function.visitor.browser.model?Function.mobile[Function.visitor.device.model].audio(e):(t&&(e=t(e)),new Function.audio.player(e)))})),t.property(Function.audio,"player",class{constructor(e){this.audio=new Audio(e)}play(){this.audio.play()}}),t.property(Function.audio,"play",(function(){})),t.property(Function.audio.play,"list",(function(e,n){t.value(Function.audio.play.list,e,n,{configurable:!0,enumerable:!0,writable:!0})})),t.property(Function,"geo",(function(){return this})),t.property(Function.geo,"location",class{constructor(){}start(e,t){return(this.navigator=window.navigator.geolocation)&&e?e.call():t?t.call():void 0}watch(e,t,n){return this.id=this.navigator.watchPosition((function(t){e.call(null,t.coords)}),t,n)}clear(e){this.navigator.clearWatch(e||this.id)}}),t.property(Function.geo.location,"coordinate",(function(...e){return e.length>1?{latitude:e[0],longitude:e[1]}:e.length?{latitude:e[0].latitude,longitude:e[0].longitude}:{latitude:0,longitude:0}})),t.property(Function,"map",class{constructor(e,t,n="google"){this.provider=n,this.icon=Function.plugin[this.provider].map.icon,this.instance=Function.plugin[this.provider].map(e,t)}marker(e){return new Function.map.marker(this,e)}center(...e){return this.instance.setCenter(this.coordinate(...e)),this}coordinate(...e){return Function.plugin[this.provider].map.coordinate(...e)}}),t.property(Function.map,"marker",class{constructor(e,t){this.marker=Function.plugin[(this.map=e).provider].map.marker(this.map.instance,t)}coordinate(...e){return this.marker.setPosition(this.map.coordinate(...e)),this}info_window(e){Function.plugin[this.map.provider].map.marker.info_window(this.map.instance,this.marker,Function.plugin[this.map.provider].map.info_window(e))}}),t.property(Function.plugin,"google",(function(){})),t.property(Function.plugin.google,"map",(function(e,t){return new google.maps.Map(e,t)})),t.property(Function.plugin.google.map,"marker",(function(e,t){return new google.maps.Marker(Object.assign({map:e},t))})),t.property(Function.plugin.google.map.marker,"info_window",(function(e,t,n){t.addListener("click",(function(){n.open(e,t)}))})),t.property(Function.plugin.google.map,"info_window",(function(e){return new google.maps.InfoWindow({content:e})})),t.property(Function.plugin.google.map,"coordinate",(function(...e){return new google.maps.LatLng(Number((e=Function.geo.location.coordinate(...e)).latitude),Number(e.longitude))})),t.value(Function.plugin.google.map,"icon",{base:{url:"https://maps.google.com/mapfiles/kml/shapes/"}}),Function.plugin.google.map.icon.base.src={library:Function.plugin.google.map.icon.base.url+"library_maps.png",parking:Function.plugin.google.map.icon.base.url+"parking_lot_maps.png",info:Function.plugin.google.map.icon.base.url+"info-i_maps.png"},Function.plugin.google.map.icon.src={"flag-beach":"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"},t.property(Function.plugin.google,"fire",(function(){})),t.property(Function.plugin.google.fire,"base",class{constructor(e){this.fire={base:e||Function.plugin.google.fire.base.link}}start(e,t){this.url=URL.parse(t),this.link=this.fire.base.initializeApp(Function.plugin.google.fire.base.config(this.config=e)),this.auth=new Function.plugin.google.fire.auth(this)}}),t.property(Function.plugin.google.fire.base,"config",(function(e){return{appId:e.id,apiKey:e.key,messagingSenderId:e.messaging,projectId:e.project,authDomain:e.domain,storageBucket:e.bucket}})),t.property(Function.plugin.google.fire,"auth",class{constructor(e){this.fire={base:e},this.sign=new Function.plugin.google.fire.auth.sign(e)}state(e){this.fire.base.link.auth().onAuthStateChanged((function(t){e&&e.call(this,t)}))}profile(e){return{name:e.displayName,phone:e.phoneNumber,photo:e.photoURL}}then(){return this}catch(){}}),t.property(Function.plugin.google.fire.auth,"sign",class{constructor(e){this.fire={base:e}}up(e,t){return(t=t||"email")&&"email"===t?this.fire.base.link.auth().createUserWithEmailAndPassword(e.user,e.password):this}in(e,t){return(t=t||"email")&&"email"===t?this.fire.base.link.auth().signInWithEmailAndPassword(e.user,e.password):this}out(){return this.fire.base.link.auth().signOut()}then(){return this}catch(){}}),t.property(Function,"validate",(function(e,t){return e?new Function.promise((function(n,r){var i={},s={},o=0;for(var a in t=t||{},e){var c=a,u=e[a].value;for(var l in t.trim&&(u=Object.to.string(u).trim()),t.string&&(u=Object.to.string(u)),t.number&&(u=Object.to.number(u)),e[a].key.data){var h=e[a].key.data[l].key,d=e[a].key.data[l].value;c in s===!1&&(s[c]={}),"trim"===h&&!0===d&&(u=Object.to.string(u).trim()),"string"===h&&(!0===d?u=Object.to.string(u):(Object.is.number(u)||Object.is.url(u)||Object.is.email(u))&&(s[c][h]=!0)),"number"===h&&(!0===d||Object.is.number(u)?u=Object.to.number(u):s[c][h]=!0),"length"===h&&(null===d||(Object.is.number(d)?Object.to.string(u).length<d&&(s[c][h]=d):u||(s[c][h]=!0))),"url"===h&&!1===Object.is.url(u)&&(s[c][h]=!0),"email"===h&&!1===Object.is.email(u)&&(s[c][h]=!0)}i[c]=u}for(var a in s)if(Object.length(s[a]))for(var l in s[a])o++;else delete s[a];o?r(s):n(i)})):new Function.validate.check})),t.property(Function.validate,"check",class{constructor(){this.data=[]}require(e){return this.data.push({key:"require",value:e}),this}length(e){return this.data.push({key:"length",value:e}),this}trim(e){return this.data.push({key:"trim",value:e}),this}string(e){return this.data.push({key:"string",value:e}),this}number(e){return this.data.push({key:"number",value:e}),this}url(e){return this.data.push({key:"url",value:e}),this}name(e){return this.data.push({key:"name",value:e}),this}user(e){return this.data.push({key:"user",value:e}),this}password(e){return this.data.push({key:"password",value:e}),this}email(e){return this.data.push({key:"email",value:e}),this}}),t.property(Function,"debug",(function(){})),t.property(Function,"log",(function(){})),t.property(Function,"echo",(function(){Function.setting["debug"]&&console.log(...arguments)})),t.property(Function,"print",(function(){Function.setting["debug"]&&console.log(...arguments)})),t.property(Function,"console",(function(e){"line"===e&&Function.console.live()})),t.property(Function.console,"live",(function(){console.log("Hello World !!!")}))}).call(this,n("b639").Buffer)},cee4:function(e,t,n){"use strict";var r=n("c532"),i=n("1d2b"),s=n("0a06"),o=n("4a7b"),a=n("4c3d");function c(e){var t=new s(e),n=i(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n.create=function(t){return c(o(e,t))},n}var u=c(a);u.Axios=s,u.Cancel=n("7a77"),u.CancelToken=n("8df4"),u.isCancel=n("2e67"),u.VERSION=n("5cce").version,u.all=function(e){return Promise.all(e)},u.spread=n("0df6"),u.isAxiosError=n("5f02"),e.exports=u,e.exports.default=u},d925:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},df2f:function(e,t,n){(function(t,r){e.exports=r(n("21bf"))})(0,(function(e){return function(){var t=e,n=t.lib,r=n.WordArray,i=n.Hasher,s=t.algo,o=[],a=s.SHA1=i.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],s=n[2],a=n[3],c=n[4],u=0;u<80;u++){if(u<16)o[u]=0|e[t+u];else{var l=o[u-3]^o[u-8]^o[u-14]^o[u-16];o[u]=l<<1|l>>>31}var h=(r<<5|r>>>27)+c+o[u];h+=u<20?1518500249+(i&s|~i&a):u<40?1859775393+(i^s^a):u<60?(i&s|i&a|s&a)-1894007588:(i^s^a)-899497514,c=a,a=s,s=i<<30|i>>>2,i=r,r=h}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+s|0,n[3]=n[3]+a|0,n[4]=n[4]+c|0},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,r=8*e.sigBytes;return t[r>>>5]|=128<<24-r%32,t[14+(r+64>>>9<<4)]=Math.floor(n/4294967296),t[15+(r+64>>>9<<4)]=n,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=i.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA1=i._createHelper(a),t.HmacSHA1=i._createHmacHelper(a)}(),e.SHA1}))},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,r="/"===o.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),o="/"===s(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&o&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!i){n=o+1;break}}return-1===t||-1===r||0===s||1===s&&t===r-1&&t===n+1?"":e.slice(t,r)};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e3db:function(e,t){var n={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==n.call(e)}},e469:function(e,t,n){},e683:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},f6b4:function(e,t,n){"use strict";var r=n("c532");function i(){this.handlers=[]}i.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},fa1c:function(e,t){Function.define(Function,"event",class{constructor(e){this.event={},e&&"event"in e===!1&&(Function.define(e,"event",this),Function.define(e,"on",(function(t,n){e.on(t,n)})),Function.define(e,"emit",(function(t,...n){e.emit(t,...n)})))}on(e,t){e in this.event===!1&&(this.event[e]=[]),this.event[e].push(t)}emit(e,...t){for(var n in this.event[e])this.event[e][n].call(this.proto,...t)}}),Function.define(Function.event,"list",{})}}]);
//# sourceMappingURL=chunk-vendors.65e35278.js.map