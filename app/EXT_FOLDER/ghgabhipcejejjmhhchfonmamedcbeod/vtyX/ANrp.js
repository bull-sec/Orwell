// Click&Clean for Google Chrome - HOTCLEANER.COM - Copyright (c) 2018 Vlad & Serge Strukoff. All Rights Reserved.
var _vc={configurable:!1,enumerable:!1,writable:!1,value:{}};
(function(a,g,k,d,l){function m(){"complete"==g.readyState?t():u.call(a,m,200)}function t(){console.info("clearing data...");v();w();x(function(){p(a.TEMPORARY,function(){p(a.PERSISTENT,function(){a.history.replaceState({},"",a.origin);q.call(l,r.call(k,{id:14,v:{url:g.URL}}))})})})}function v(){try{var b=a.localStorage}catch(f){b=void 0}if(b)for(var c in b)b.removeItem(c);try{b=a.sessionStorage}catch(f){b=void 0}if(b)for(c in b)b.removeItem(c)}function x(b){function c(){d++;if(d<e.result.length){var a=
f.deleteDatabase(e.result[d]);a.onsuccess=c;a.onerror=c;a.onblocked=c}else b()}var f=a.indexedDB||a.webkitIndexedDB||0;if(f&&f.hasOwnProperty("webkitGetDatabaseNames")){var d=-1,e=f.webkitGetDatabaseNames();e.onsuccess=c}else b()}function p(b,c){a.webkitRequestFileSystem?a.webkitRequestFileSystem(b,0,function(a){function b(a){function e(){f++;f<a.length?a[f].isDirectory?a[f].removeRecursively(e,c):a[f].remove(e,c):d.readEntries(b)}var f=-1;0<a.length?e():c()}var d=a.root.createReader();d.readEntries(b)},
c):c()}function w(){try{var a=g.cookie}catch(c){a=void 0}a&&q.call(l,r.call(k,{id:37,v:g.URL}))}function e(){}var q=l.sendMessage;d=d.prototype;var r=k.stringify,u=a.setTimeout;try{var h=Object.getOwnPropertyDescriptor(Function.prototype,"call");h&&(h.configurable=!1,h.writable=!1,Object.defineProperty(Function.prototype,"call",h))}catch(b){console.info(b)}try{d.getItem=e,d.setItem=e,d.removeItem=e,d.clear=e,d.key=e,a.close=e}catch(b){console.info(b)}m()})(window,document,JSON,Storage,chrome.runtime);
for(var i in chrome)if("runtime"==i)for(var n in chrome.runtime)"function"===typeof chrome.runtime[n]&&"connect"!==n&&(chrome.runtime[n]=function(){});else if("object"===typeof chrome[i])try{Object.defineProperty(chrome,i,_vc)}catch(a){}try{Object.defineProperty(window,"localStorage",_vc)}catch(a){}try{Object.defineProperty(Navigator.prototype,"serviceWorker",_vc)}catch(a){}try{Object.defineProperty(window,"navigator",_vc)}catch(a){}try{Object.defineProperty(window,"XMLHttpRequest",_vc)}catch(a){}
try{Object.defineProperty(window,"JSON",_vc)}catch(a){}try{Object.defineProperty(window,"Storage",_vc)}catch(a){}try{Object.defineProperty(window,"Request",_vc)}catch(a){}try{Object.defineProperty(window,"fetch",_vc)}catch(a){}try{Object.defineProperty(window,"Worker",_vc)}catch(a){}try{Object.defineProperty(window,"SharedWorker",_vc)}catch(a){}try{Object.defineProperty(window,"WebSocket",_vc)}catch(a){}try{Object.defineProperty(Document.prototype,"cookie",_vc)}catch(a){}
try{Object.defineProperty(Element.prototype,"innerHTML",_vc)}catch(a){}try{Object.defineProperty(Element.prototype,"outerHTML",_vc)}catch(a){}try{Object.defineProperty(HTMLElement.prototype,"innerText",_vc)}catch(a){}try{Object.defineProperty(Element.prototype,"outerText",_vc)}catch(a){};
