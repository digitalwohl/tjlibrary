!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t||self).tjComm={})}(this,function(t){function n(t,i){return n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},n(t,i)}let i=t=>crypto.getRandomValues(new Uint8Array(t));var o=/*#__PURE__*/function(){function t(t,n,i){this.STRING_SEPARATOR="#",this.id=void 0,this.domain=void 0,this.action=void 0,this.data=void 0,this.domain=t,this.action=n,this.data=i,this.id=this.generateId()}var n=t.prototype;return n.generateId=function(){return((t,n,i)=>{let o=(2<<Math.log(t.length-1)/Math.LN2)-1,e=-~(1.6*o*16/t.length);return()=>{let n="";for(;;){let s=i(e),r=e;for(;r--;)if(n+=t[s[r]&o]||"",16===n.length)return n}}})("1234567890",0,i)()},n.toString=function(){return""+this.id+this.STRING_SEPARATOR+this.domain+this.STRING_SEPARATOR+this.action},t}(),e=/*#__PURE__*/function(){function t(){this.PARENT_TARGET_ORIGIN="https://localhost/tabjail/sandbox"}return t.prototype.sendSandboxEvent=function(t){window.parent.postMessage(t,this.PARENT_TARGET_ORIGIN)},t}(),s=/*#__PURE__*/function(){function t(t){this.resolve=void 0,this.reject=void 0,this.sandboxEvent=void 0,this.sandboxEvent=t}var n=t.prototype;return n.createPromise=function(){var t=this;return new Promise(function(n,i){t.resolve=n,t.reject=i})},n.resolvePromise=function(t){this.resolve(t)},n.rejectPromise=function(t){this.reject(t)},t}(),r=/*#__PURE__*/function(t){var i,e;function r(){for(var n,i=arguments.length,o=new Array(i),e=0;e<i;e++)o[e]=arguments[e];return(n=t.call.apply(t,[this].concat(o))||this).DOMAIN="extension",n.ACTIONS={GET_ALL_WINDOWS:"getAllWindows",ON_BOUNDS_CHANGED_WINDOWS:"onBoundsChangedWindows",ON_CREATED_WINDOWS:"onCreatedWindows",ON_FOCUS_CHANGED_WINDOWS:"onFocusChangedWindows",ON_REMOVED_WINDOWS:"onRemovedWindows"},n.pendingRequests=[],n.onBoundsChangedCallbacks=[],n.onCreatedCallbacks=[],n.onFocusChangedCallbacks=[],n.onRemovedCallbacks=[],n}e=t,(i=r).prototype=Object.create(e.prototype),i.prototype.constructor=i,n(i,e);var u=r.prototype;return u.getAll=function(){try{var t=this,n=new o(t.DOMAIN,t.ACTIONS.GET_ALL_WINDOWS),i=new s(n);t.pendingRequests.push(i),t.sendSandboxEvent(n);var e=i.createPromise();return Promise.resolve(e)}catch(t){return Promise.reject(t)}},u.onBoundsChanged=function(t){this.onBoundsChangedCallbacks.push(t)},u.onCreated=function(t){this.onCreatedCallbacks.push(t)},u.onFocusChanged=function(t){this.onFocusChangedCallbacks.push(t)},u.onRemoved=function(t){this.onRemovedCallbacks.push(t)},u.onEventFromSandbox=function(t){if(t.domain===this.DOMAIN)switch(t.action){case this.ACTIONS.GET_ALL_WINDOWS:var n=this.pendingRequests.find(function(n){return n.sandboxEvent.id===t.id});n&&n.resolvePromise(t);break;case this.ACTIONS.ON_BOUNDS_CHANGED_WINDOWS:this.onBoundsChangedCallbacks.forEach(function(n){return n(t.data)});break;case this.ACTIONS.ON_CREATED_WINDOWS:this.onCreatedCallbacks.forEach(function(n){return n(t.data)});break;case this.ACTIONS.ON_FOCUS_CHANGED_WINDOWS:this.onFocusChangedCallbacks.forEach(function(n){return n(t.data)});break;case this.ACTIONS.ON_BOUNDS_CHANGED_WINDOWS:this.onRemovedCallbacks.forEach(function(n){return n(t.data)})}},r}(e),u=/*#__PURE__*/function(){function t(){this.windows=new r}return t.prototype.onEventFromSandbox=function(t){this.windows.onEventFromSandbox(t)},t}(),h=/*#__PURE__*/function(){function t(){}return t.onEventFromSandbox=function(t){this.chrome.onEventFromSandbox(t)},t}();h.chrome=new u,t.TJ=h,t.listenForSandboxEvents=function(){window.addEventListener("message",function(t){h.onEventFromSandbox(t.data)},!1)}});
//# sourceMappingURL=tj-comm.umd.js.map
