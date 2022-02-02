!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i((t||self).tjComm={})}(this,function(t){function i(t,i){t.prototype=Object.create(i.prototype),t.prototype.constructor=t,n(t,i)}function n(t,i){return n=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},n(t,i)}let s=t=>crypto.getRandomValues(new Uint8Array(t));var h=/*#__PURE__*/function(){function t(t,i,n){this.id=void 0,this.domain=void 0,this.action=void 0,this.data=void 0,this.domain=t,this.action=i,this.data=n,this.id=this.generateId()}return t.prototype.generateId=function(){return((t,i,n)=>{let s=(2<<Math.log(t.length-1)/Math.LN2)-1,h=-~(1.6*s*16/t.length);return()=>{let i="";for(;;){let e=n(h),o=h;for(;o--;)if(i+=t[e[o]&s]||"",16===i.length)return i}}})("1234567890",0,s)()},t}(),e=/*#__PURE__*/function(){function t(){this.PARENT_TARGET_ORIGIN="https://localhost/tabjail/sandbox",this.REGISTER_SUBSCRIPTION_DOMAIN="sandbox",this.REGISTER_SUBSCRIPTION_ACTION="registerSubscription"}var i=t.prototype;return i.sendSandboxEvent=function(t){window.parent.postMessage(t,this.PARENT_TARGET_ORIGIN)},i.registerSubscription=function(t,i){var n=new h(this.REGISTER_SUBSCRIPTION_DOMAIN,this.REGISTER_SUBSCRIPTION_ACTION,{domain:t,action:i});this.sendSandboxEvent(n)},t}(),o=/*#__PURE__*/function(){function t(t){this.resolve=void 0,this.reject=void 0,this.sandboxEvent=void 0,this.sandboxEvent=t}var i=t.prototype;return i.createPromise=function(){var t=this;return new Promise(function(i,n){t.resolve=i,t.reject=n})},i.resolvePromise=function(t){this.resolve(t)},i.rejectPromise=function(t){this.reject(t)},t}(),r=/*#__PURE__*/function(t){function n(){var i;return(i=t.call(this)||this).DOMAIN="extension",i.ACTIONS={QUERY:"queryTabs",ON_ACTIVATED_TABS:"onActivatedTabs",ON_ACTIVE_CHANGED_TABS:"onActiveChangedTabs",ON_ATTACHED_TABS:"onAttachedTabs",ON_CREATED_TABS:"onCreatedTabs",ON_DETACHED_TABS:"onDetachedTabs",ON_HIGHLIGHT_CHANGED_TABS:"onHighlightChangedTabs",ON_HIGHLIGHTED_TABS:"onHighlightedTabs",ON_MOVED_TABS:"onMovedTabs",ON_REMOVED_TABS:"onRemovedTabs",ON_REPLACED_TABS:"onReplacedTabs",ON_SELECTION_CHANGED_TABS:"onSelectionChangedTabs",ON_UPDATED_TABS:"onUpdatedTabs",ON_ZOOM_CHANGE_TABS:"onZoomChangeTabs"},i.pendingRequests=[],i.onActivatedCallbacks=[],i.onAttachedCallbacks=[],i.onCreatedCallbacks=[],i.onDetachedCallbacks=[],i.onHighlightedCallbacks=[],i.onMovedCallbacks=[],i.onRemovedCallbacks=[],i.onReplacedCallbacks=[],i.onUpdatedCallbacks=[],i.onZoomChangeCallbacks=[],i}i(n,t);var s=n.prototype;return s.query=function(){var t=new h(this.DOMAIN,this.ACTIONS.QUERY),i=new o(t);return this.pendingRequests.push(i),this.sendSandboxEvent(t),i.createPromise()},s.onActivated=function(t){this.registerSubscription(this.DOMAIN,this.ACTIONS.ON_ACTIVATED_TABS),this.onActivatedCallbacks.push(t)},s.onAttached=function(t){this.registerSubscription(this.DOMAIN,this.ACTIONS.ON_ATTACHED_TABS),this.onAttachedCallbacks.push(t)},s.onCreated=function(t){this.registerSubscription(this.DOMAIN,this.ACTIONS.ON_CREATED_TABS),this.onCreatedCallbacks.push(t)},s.onDetached=function(t){this.registerSubscription(this.DOMAIN,this.ACTIONS.ON_DETACHED_TABS),this.onDetachedCallbacks.push(t)},s.onHighlighted=function(t){this.registerSubscription(this.DOMAIN,this.ACTIONS.ON_HIGHLIGHTED_TABS),this.onHighlightedCallbacks.push(t)},s.onMoved=function(t){this.registerSubscription(this.DOMAIN,this.ACTIONS.ON_MOVED_TABS),this.onMovedCallbacks.push(t)},s.onRemoved=function(t){this.registerSubscription(this.DOMAIN,this.ACTIONS.ON_REMOVED_TABS),this.onRemovedCallbacks.push(t)},s.onReplaced=function(t){this.registerSubscription(this.DOMAIN,this.ACTIONS.ON_REPLACED_TABS),this.onReplacedCallbacks.push(t)},s.onUpdated=function(t){this.registerSubscription(this.DOMAIN,this.ACTIONS.ON_UPDATED_TABS),this.onUpdatedCallbacks.push(t)},s.onZoomChange=function(t){this.registerSubscription(this.DOMAIN,this.ACTIONS.ON_ZOOM_CHANGE_TABS),this.onZoomChangeCallbacks.push(t)},s.onEventFromSandbox=function(t){if(t.domain===this.DOMAIN)switch(t.action){case this.ACTIONS.QUERY:var i=this.pendingRequests.find(function(i){return i.sandboxEvent.id===t.id}),n=this.pendingRequests.findIndex(function(i){return i.sandboxEvent.id===t.id});i&&(i.resolvePromise(t.data),this.pendingRequests.splice(n,1));break;case this.ACTIONS.ON_ACTIVATED_TABS:this.onActivatedCallbacks.forEach(function(i){return i(t.data)});break;case this.ACTIONS.ON_ATTACHED_TABS:this.onAttachedCallbacks.forEach(function(i){return i(t.data)});break;case this.ACTIONS.ON_CREATED_TABS:this.onCreatedCallbacks.forEach(function(i){return i(t.data)});break;case this.ACTIONS.ON_DETACHED_TABS:this.onDetachedCallbacks.forEach(function(i){return i(t.data)});break;case this.ACTIONS.ON_HIGHLIGHTED_TABS:this.onHighlightedCallbacks.forEach(function(i){return i(t.data)});break;case this.ACTIONS.ON_MOVED_TABS:this.onMovedCallbacks.forEach(function(i){return i(t.data)});break;case this.ACTIONS.ON_REMOVED_TABS:this.onRemovedCallbacks.forEach(function(i){return i(t.data)});break;case this.ACTIONS.ON_REPLACED_TABS:this.onReplacedCallbacks.forEach(function(i){return i(t.data)});break;case this.ACTIONS.ON_UPDATED_TABS:this.onUpdatedCallbacks.forEach(function(i){return i(t.data)});break;case this.ACTIONS.ON_ZOOM_CHANGE_TABS:this.onZoomChangeCallbacks.forEach(function(i){return i(t.data)})}},n}(e),u=/*#__PURE__*/function(t){function n(){var i;return(i=t.call(this)||this).DOMAIN="extension",i.ACTIONS={GET_ALL_WINDOWS:"getAllWindows",ON_BOUNDS_CHANGED_WINDOWS:"onBoundsChangedWindows",ON_CREATED_WINDOWS:"onCreatedWindows",ON_FOCUS_CHANGED_WINDOWS:"onFocusChangedWindows",ON_REMOVED_WINDOWS:"onRemovedWindows"},i.pendingRequests=[],i.onBoundsChangedCallbacks=[],i.onCreatedCallbacks=[],i.onFocusChangedCallbacks=[],i.onRemovedCallbacks=[],i}i(n,t);var s=n.prototype;return s.getAll=function(){var t=new h(this.DOMAIN,this.ACTIONS.GET_ALL_WINDOWS),i=new o(t);return this.pendingRequests.push(i),this.sendSandboxEvent(t),i.createPromise()},s.onBoundsChanged=function(t){this.registerSubscription(this.DOMAIN,this.ACTIONS.ON_BOUNDS_CHANGED_WINDOWS),this.onBoundsChangedCallbacks.push(t)},s.onCreated=function(t){this.registerSubscription(this.DOMAIN,this.ACTIONS.ON_CREATED_WINDOWS),this.onCreatedCallbacks.push(t)},s.onFocusChanged=function(t){this.registerSubscription(this.DOMAIN,this.ACTIONS.ON_FOCUS_CHANGED_WINDOWS),this.onFocusChangedCallbacks.push(t)},s.onRemoved=function(t){this.registerSubscription(this.DOMAIN,this.ACTIONS.ON_REMOVED_WINDOWS),this.onRemovedCallbacks.push(t)},s.onEventFromSandbox=function(t){if(t.domain===this.DOMAIN)switch(t.action){case this.ACTIONS.GET_ALL_WINDOWS:var i=this.pendingRequests.find(function(i){return i.sandboxEvent.id===t.id}),n=this.pendingRequests.findIndex(function(i){return i.sandboxEvent.id===t.id});i&&(i.resolvePromise(t.data),this.pendingRequests.splice(n,1));break;case this.ACTIONS.ON_BOUNDS_CHANGED_WINDOWS:this.onBoundsChangedCallbacks.forEach(function(i){return i(t.data)});break;case this.ACTIONS.ON_CREATED_WINDOWS:this.onCreatedCallbacks.forEach(function(i){return i(t.data)});break;case this.ACTIONS.ON_FOCUS_CHANGED_WINDOWS:this.onFocusChangedCallbacks.forEach(function(i){return i(t.data)});break;case this.ACTIONS.ON_BOUNDS_CHANGED_WINDOWS:this.onRemovedCallbacks.forEach(function(i){return i(t.data)})}},n}(e),c=/*#__PURE__*/function(){function t(){this.windows=new u,this.tabs=new r}return t.prototype.onEventFromSandbox=function(t){this.windows.onEventFromSandbox(t)},t}(),f=/*#__PURE__*/function(t){function n(){for(var i,n=arguments.length,s=new Array(n),h=0;h<n;h++)s[h]=arguments[h];return(i=t.call.apply(t,[this].concat(s))||this).DOMAIN="sandbox",i.ACTIONS={JAIL_PAGE:"jailPage",READY:"isReady"},i.pendingRequests=[],i}i(n,t);var s=n.prototype;return s.ready=function(){var t=new h(this.DOMAIN,this.ACTIONS.JAIL_PAGE),i=new o(t);return this.pendingRequests.push(i),this.sendSandboxEvent(t),this.registerSandboxEventsListener(),i.createPromise()},s.onEventFromSandbox=function(t){if(t.domain===this.DOMAIN&&t.action===this.ACTIONS.READY){var i=this.pendingRequests.find(function(i){return i.sandboxEvent.id===t.id}),n=this.pendingRequests.findIndex(function(i){return i.sandboxEvent.id===t.id});i&&(i.resolvePromise(!0),this.pendingRequests.splice(n,1))}},s.registerSandboxEventsListener=function(){window.addEventListener("message",function(t){d.onEventFromSandbox(t.data)},!1)},n}(e),a=/*#__PURE__*/function(){function t(){this.general=new f}return t.prototype.onEventFromSandbox=function(t){this.general.onEventFromSandbox(t)},t}(),d=/*#__PURE__*/function(){function t(){}return t.onEventFromSandbox=function(t){this.sandbox.onEventFromSandbox(t),this.chrome.onEventFromSandbox(t)},t}();d.chrome=new c,d.sandbox=new a,t.TJ=d});
//# sourceMappingURL=tj-comm.umd.js.map
