// Click&Clean for Google Chrome - HOTCLEANER.COM - Copyright (c) 2018 Vlad & Serge Strukoff. All Rights Reserved.
(function(){function na(){function a(c,e){for(var f,g,m,k=0,u=e.length;k<u;k++)if(f=e[k],1==f.t){g=f.n?oa.call(h,"http://www.w3.org/2000/svg",f.l):x.call(h,f.l);for(var r=0,n=f.a&&f.a.length||0;r<n;r++)m=f.a[r],y.call(g,m.n,m.v);f.c&&a(g,f.c);t.call(c,g)}else 3==f.t&&t.call(c,S.call(h,f.v))}var e=pa('[{"t":1,"l":"link","a":[{"n":"rel","v":"stylesheet"},{"n":"type","v":"text/css"},{"n":"href","v":"sOdJtQ/gQcwSCX.css"}]},{"t":1,"l":"div","a":[{"n":"id","v":"host"}],"c":[{"t":1,"l":"div","a":[{"n":"class","v":"view"},{"n":"id","v":"view0"}],"c":[{"t":1,"l":"div","a":[{"n":"class","v":"hdr"},{"n":"id","v":"hdr0"}],"c":[{"t":1,"l":"button","a":[{"n":"id","v":"sel0"},{"n":"class","v":"chk"},{"n":"title","v":"t10"}],"c":[{"t":1,"l":"div"}]},{"t":1,"l":"label","a":[{"n":"class","v":"label elps"},{"n":"id","v":"t11"}],"c":[{"t":1,"l":"span","a":[{"n":"id","v":"cnt0"}]}]},{"t":1,"l":"button","a":[{"n":"class","v":"btn"},{"n":"id","v":"del0"},{"n":"title","v":"t14"}]},{"t":1,"l":"button","a":[{"n":"class","v":"btn"},{"n":"id","v":"ref"},{"n":"title","v":"t13"}]}]},{"t":3,"v":" "},{"t":1,"l":"div","a":[{"n":"class","v":"list"},{"n":"id","v":"list0"},{"n":"data-id","v":"0"}]}]},{"t":1,"l":"button","a":[{"n":"id","v":"toc1"}]},{"t":1,"l":"button","a":[{"n":"id","v":"toc0"}]},{"t":1,"l":"div","a":[{"n":"class","v":"view"},{"n":"id","v":"view1"}],"c":[{"t":1,"l":"div","a":[{"n":"class","v":"hdr"},{"n":"id","v":"hdr1"}],"c":[{"t":1,"l":"button","a":[{"n":"id","v":"sel1"},{"n":"class","v":"chk"},{"n":"title","v":"t10"}],"c":[{"t":1,"l":"div"}]},{"t":1,"l":"label","a":[{"n":"class","v":"label elps"},{"n":"id","v":"t12"}],"c":[{"t":1,"l":"span","a":[{"n":"id","v":"cnt1"},{"n":"class","v":"nvw"}]}]},{"t":1,"l":"div","a":[{"n":"id","v":"services"}]}]},{"t":1,"l":"div","a":[{"n":"class","v":"list"},{"n":"id","v":"list1"},{"n":"data-id","v":"1"}]}]},{"t":1,"l":"div","a":[{"n":"id","v":"shade"}]}]}]');
N=F&&Z?F.call(aa.get.call(h),{mode:"closed"}):aa.get.call(h);var c=T.call(h);a(c,e);t.call(N,c)}function qa(){function a(){B(1);for(var b=f("#list0");b.firstElementChild;)G.call(b,b.firstElementChild);for(b=f("#list1");b.firstElementChild;)G.call(b,b.firstElementChild);H.call(u,I.call(z,{id:30}),function(d){var b=d[0];d=d[1];var a=[],q=0,c=0,e=0;if(0<b.length){for(var g=0,h;h=b[g];g++)"."==h.charAt(0)&&(b[g]=ba.call(h,1));ra.call(b,function(b,d){return b<d?-1:1});var p=ca.call(d,b[0]);for(g=0;h=b[g];g++){k!=
h&&(0<q&&(0>p?(K.call(a,q),c+=q):(d[p+1]=q,e+=q),q=0),p=ca.call(d,h),0>p&&K.call(a,h));q++;var k=h}0<q&&(0>p?(K.call(a,q),c+=q):(d[p+1]=q,e+=q))}L(0,a,1,1);L(1,d,0,0);r.set.call(f("#cnt0")," ("+c+")");r.set.call(f("#cnt1")," ("+e+")");B(0)})}function c(b){b=A(this,"on");for(var d=this.parentElement.nextElementSibling.children,a=0,c;c=d[a];a++)Q(c.firstElementChild,"on",b),Q(c,"on",b)}function e(b){var d=g.call(this.parentNode,"data-domain");H.call(u,I.call(z,{id:9,v:"https://"+d+"/"}));da.call(b)}
function k(b){da.call(b);b=this.parentNode;var d=g.call(b.parentNode,"data-id"),a=g.call(b,"data-domain"),c=O(g.call(b,"data-count"));H.call(u,I.call(z,{id:32,v:[a]}));G.call(b.parentElement,b);w(d,-c);1==d&&v()}function n(b){B(1);var d=this.parentElement.nextElementSibling;b=ea.call(d,".item[on]");if(0<b.length){var a=[];d=g.call(d,"data-id");for(var c,q=0,e=0,f;f=b[e];e++)c=g.call(f,"data-domain"),K.call(a,c),q+=O(g.call(f,"data-count")),G.call(f.parentElement,f);H.call(u,I.call(z,{id:32,v:a}));
w(d,-q)}B(0)}function C(){B(1);E(1,0);v()}function D(b){B(1);E(0,1);v()}function v(){for(var b=[],d=f("#list1").children,a=0,c;c=d[a];a++)K.call(b,g.call(c,"data-domain"),0);H.call(u,I.call(z,{id:35,v:b}));B(0)}function E(b,d){var a=ea.call(f("#list"+b),".item[on]");if(0<a.length){for(var c=[],q=0,e;e=a[q];q++)K.call(c,G.call(e.parentNode,e));M(b,d,c)}}function w(b,d){b=f("#cnt"+b);var a=O(ba.call(r.get.call(b),2));r.set.call(b," ("+(a+d)+")")}function A(b,d){var a=fa.call(b,d);a?ha.call(b,d):y.call(b,
d,!0);return!a}function Q(b,a,c){c?y.call(b,a,!0):ha.call(b,a)}function N(a){var b=fa.call(this,"on");if(a.shiftKey){if(0>R&&(R=this.parentNode.firstElementChild),a=!b,b=R,this&&b){var c=this;g.call(c,"data-domain")>g.call(b,"data-domain")&&(c=b,b=this);for(;c&&g.call(c,"data-domain")<=g.call(b,"data-domain");)Q(c,"on",a),Q(c.firstElementChild,"on",a),c=c.nextElementSibling}}else A(this.firstElementChild,"on"),A(this,"on");R=this}function F(a,d,c,f){var b=x.call(h,"div");var g=x.call(h,"button");
var l=x.call(h,"div");var J=x.call(h,"label");var U=x.call(h,"button");var p=x.call(h,"button");b.className="item";g.className="chk";J.className="label elps";p.className="btn link";U.className="btn del";y.call(b,"data-domain",a);y.call(b,"data-count",d);f&&(y.call(g,"on",!0),y.call(b,"on",!0));r.set.call(J,a+(c?" ("+d+")":""));t.call(g,l);t.call(b,g);t.call(b,J);t.call(b,U);t.call(b,p);m.call(U,"click",k,!1);m.call(p,"click",e,!1);m.call(b,"click",N,!1);return b}function L(b,a,c,e){b=f("#list"+b);
for(var d,g=T.call(h),l=0;d=a[l];l+=2)d=F(d,a[l+1],c,e),t.call(g,d);t.call(b,g)}function M(a,c,e){for(var b=f("#list"+c),d,h,l,k=0,J=0,p;p=e[J];J++){l=!0;d=g.call(p,"data-domain");for(var m=0,n;n=b.children[m];m++)if(h=g.call(n,"data-domain"),d==h){l=!1;break}else if(d<h){l=O(g.call(p,"data-count"));k+=l;h=p.firstElementChild.nextElementSibling;0==c?r.set.call(h,d+" ("+l+")"):r.set.call(h,d);V.call(b,p,n);l=!1;break}l&&(l=O(g.call(p,"data-count")),k+=l,h=p.firstElementChild.nextElementSibling,0==
c?r.set.call(h,d+" ("+l+")"):r.set.call(h,d),t.call(b,p))}0<k&&(w(a,-k),w(c,k))}function P(a){for(var b,c=ia.call(g.call(this,"ds")||"",","),e=0,h=c.length;e<h;e++)if(a=c[e]){a:{for(var k,l=a,m=f("#list0").children,n=0;b=m[n];n++)if(k=g.call(b,"data-domain"),k==l)break a;b=0}b=b?G.call(b.parentNode,b):F(a,0,0,1);M(0,1,[b])}v()}function B(a){f("#shade").className=a?"dbk":"nvw"}var R=-1;H.call(u,I.call(z,{id:2}),function(b){a:{for(var d=[sa.call(u,""),"https://www.hotcleaner.com/"],e=0,g=d.length;e<
g;e++)if(0==ta.call(b,d[e]))break a;h.location.href="about:blank"}b=ia.call(ua.call(ja,"cookies"),";");d=f("#sel0");d.title=b[0];d=f("#sel1");d.title=b[0];d=f("#t11");V.call(d,S.call(h,b[1]),d.firstElementChild);d=f("#t12");V.call(d,S.call(h,b[2]),d.firstElementChild);d=f("#ref");d.title=b[3];d=f("#del0");d.title=b[4];m.call(f("#sel0"),"click",c,!1);m.call(f("#sel1"),"click",c,!1);m.call(f("#ref"),"click",a,!1);m.call(f("#del0"),"click",n,!1);m.call(f("#toc0"),"click",C,!1);m.call(f("#toc1"),"click",
D,!1);a();b=f("#services");d=[{n:"Google | G+, GMail, YouTube, ...",d:"accounts.google.com,google.com,youtube.com",i:1},{n:"Facebook",d:"facebook.com",i:2},{n:"Twitter",d:"twitter.com",i:3},{n:"Yahoo",d:"yahoo.com",i:4},{n:"Microsoft | SkyDrive, Live Mail, ...",d:"login.live.com,live.com",i:5}];for(var k=T.call(h),r=0,l;l=d[r];r++)e=x.call(h,"button"),e.className="btn float-left",e.title=l.n,y.call(e,"ds",l.d),g=new va,g.className="mt3",g.src="QMpKVMY/fav/"+l.i+".png",t.call(e,g),m.call(e,"click",
P,!1),t.call(k,e);t.call(b,k)})}function f(a){return F&&Z?wa.call(N,a):xa.call(h,a)}var a=self.window,h=a.document,z=a.JSON,C=a.Object,va=a.Image,Z=a.CustomElementRegistry?!0:!1,n=a.chrome,u=n.runtime,ja=n.i18n,sa=u.getURL,H=u.sendMessage,ua=ja.getMessage,L=String.prototype,M=Array.prototype,D=Storage.prototype,ka=Navigator.prototype,ya=XMLHttpRequest.prototype,P=DocumentFragment.prototype,e=Document.prototype,la=DOMImplementation.prototype,v=EventTarget.prototype,E=Event.prototype,k=Node.prototype,
c=Element.prototype,w=HTMLElement.prototype,ma=HTMLMediaElement.prototype,ba=L.slice,ta=L.indexOf,ia=L.split,ca=M.indexOf,K=M.push,ra=M.sort,x=e.createElement,oa=e.createElementNS,m=v.addEventListener,T=e.createDocumentFragment,fa=c.hasAttribute,g=c.getAttribute,y=c.setAttribute,ha=c.removeAttribute,S=e.createTextNode,da=E.stopPropagation,t=k.appendChild,V=k.insertBefore,G=k.removeChild,F=c.attachShadow||null,ea=c.querySelectorAll,wa=P.querySelector,xa=e.querySelector,I=z.stringify,pa=z.parse,O=a.parseInt,
za=a.setTimeout;try{var A=C.getOwnPropertyDescriptor(Function.prototype,"call");A&&(A.configurable=!1,A.writable=!1,C.defineProperty(Function.prototype,"call",A))}catch(Y){}var r=C.getOwnPropertyDescriptor(k,"textContent"),aa=C.getOwnPropertyDescriptor(e,"body");try{D.getItem=D.setItem=D.removeItem=D.clear=D.key=ka.sendBeacon=ya.open=e.adoptNode=e.getElementById=e.getElementsByClassName=e.getElementsByName=e.getElementsByTagName=e.getElementsByTagNameNS=P.querySelector=P.querySelectorAll=e.createDocumentFragment=
e.createTextNode=e.createElement=e.createElementNS=e.evaluate=e.createEvent=e.createCDATASection=e.execCommand=e.querySelector=e.querySelectorAll=e.open=e.write=e.writeln=e.prepend=e.importNode=e.registerElement=la.createHTMLDocument=la.createDocument=v.addEventListener=v.removeEventListener=v.dispatchEvent=E.preventDefault=E.stopPropagation=E.stopImmediatePropagation=k.appendChild=k.cloneNode=k.getRootNode=k.insertBefore=k.removeChild=k.replaceChild=c.attachShadow=c.createShadowRoot=c.getElementsByClassName=
c.getElementsByTagName=c.getElementsByTagNameNS=c.append=c.remove=c.before=c.after=c.prepend=c.querySelector=c.querySelectorAll=c.webkitMatchesSelector=c.requestPointerLock=c.setAttribute=c.removeAttribute=c.removeAttributeNS=c.removeAttributeNode=c.replaceWith=c.insertAdjacentElement=c.insertAdjacentText=c.insertAdjacentHTML=w.focus=w.click=ma.play=ma.load=function(){}}catch(Y){}delete a.AnimationWorklet;delete a.AudioContext;delete a.Blob;delete a.CSS;delete a.CustomElementRegistry;delete a.CustomEvent;
delete a.DOMImplementation;delete a.DOMParser;delete a.Event;delete a.FormData;delete a.Image;delete a.JSON;delete a.LayoutWorklet;delete a.MutationObserver;delete a.Navigator;delete a.PaintWorklet;delete a.Proxy;delete a.Range;delete a.Request;delete a.Response;delete a.ServiceWorker;delete a.SharedWorker;delete a.Storage;delete a.URL;delete a.WebAssembly;delete a.WebSocket;delete a.Worker;delete a.XMLHttpRequest;delete a.XMLHttpRequestUpload;delete a.XMLSerializer;delete a.XSLTProcessor;delete a.fetch;
delete a.close;delete a.open;delete a.alert;delete a.confirm;delete a.eval;delete a.localStorage;delete a.postMessage;delete a.prompt;delete a.stop;delete a.customElements;delete a.navigator;delete k.textContent;delete e.cookie;delete e.body;delete ka.serviceWorker;delete c.innerHTML;delete c.outerHTML;delete w.innerText;delete w.outerText;delete n.Event;for(var W in n)if("runtime"==W)for(var X in n.runtime)"function"===typeof n.runtime[X]&&"connect"!==X&&(n.runtime[X]=function(){});else if("object"===
typeof n[W])try{C.defineProperty(n,W,{configurable:!1,enumerable:!1,writable:!1,value:{}})}catch(Y){}var N;m.call(a,"DOMContentLoaded",function(){na();za.call(a,function(){h.title="Cookies"},1E3);qa()},!0)})();
