var view=function(e){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}function r(e,n,t){for(;e.length;){var o=e[0];if(n.call(t,o,e))break}}function a(e,n,t){if(e)return t=t||e,Object.keys(e).every(function(o){var c=e[o];return!n.call(c,c,o,t)}),t}function i(e,n,t){if(e)if(e.hasOwnProperty("$index"))for(var o=e.$index;o<e.length;o++)n.call(t,e[o],o);else Object.keys(e).forEach(function(o){n.call(t,e[o],o)})}function s(e){return[].slice.call(e)}function l(e){return null==e||void 0==e||""==e}Object.assign(Array.prototype,{remove:function(e){var n=this.indexOf(e);return n>-1&&this.splice(n,1),this},replace:function(e,n){var t=this.indexOf(e);t>-1&&this.splice(t,1,n)},splices:function(e){this.splice.apply(this,e)},has:function(e){return this.indexOf(e)>-1},ones:function(e){this.has(e)||this.push(e)}});var d=/(@each|@when|\.when)\s*\((.*)\)\s*\{|\.when\s*\{|\{([^\{\}]*)\}|\}/g,u=/(@each|@when|\.when)\s*\((.*)\)\s*\{|\.when\s*\{/,h=/(@each)\s*\((.*)\)\s*\{/g,f=/(@when|\.when)\s*\((.*)\)\s*\{|\.when\s*\{/g,p=/\.when\s*\((.*)\)\s*\{|\.when\s*\{/g,v=/@when/g,m=/\{\s*@?([^\{\}]*)\}/,w=/\{([^\{\}]*)\}/g,g=/\{\s*@([^\{\}]*)\}/,y=/^\}$/,N=/(["'][^"']*["'])|(([_\$a-zA-Z]+\w?)((\.\w+)|(\[(.+)\]))*)/g,E=/^@(.*)/;function b(e,n){try{return A.$path=void 0,V(e=e.replace(m,"$1"),n)}catch(e){return void console.warn(e)}}function $(e,n){try{return A.$path=void 0,V(e="'".concat(e.replace(w,"'+($1)+'"),"'"),n)}catch(e){return void console.warn(e)}}var x=new Map;function V(e,n){var t=x.get(e);return void 0==t&&x.set(e,t=e.replace(N,function(e){return e.match(/["']/)?e:"scope.".concat(e)})),new Function("scope","return ".concat(t,";"))(n)}function O(e,n,t,o){return{get:function(c,r){return n==r?Reflect.get(t,o):"".concat(n,"$")==r?Reflect.get(t,"".concat(o,"$")):"$target"==r?c:c.hasOwnProperty(r)?Reflect.get(c,r):Reflect.get(e,r)},set:function(c,r,a){return n==r?Reflect.set(t,o,a):c.hasOwnProperty(r)?Reflect.set(c,r,a):Reflect.set(e,r,a)}}}function R(e,n,t,o,c){function a(e,n){i(e.attributes,function(e){if(e){var t=function(e,n,t){return{node:e,clas:t,scope:n,children:[],childNodes:[]}}(e,n,e.cloneNode());":model"==t.clas.name?x(e,n):new RegExp(w).test(e.nodeValue)&&("value"==t.clas.name&&x(e,n),N.attrExpress(e,n,t,e.nodeValue),e.nodeValue=$(e.nodeValue,n)),function(e,n){e.name.replace(E,function(t){t=t.replace(E,"$1");var o=e.ownerElement,r=e.nodeValue.toString().match(/\(([^)]*)\)/);if(r){var a=e.nodeValue.toString().replace(r[0],""),i=b(a,c.action);o.on(t,i,n,r[1])}else{var s=b(e.nodeValue,c.action);o.on(t,s,n)}})}(e,n)}})}function d(e,n,t,o){var r;a(e,n),new RegExp(g).test(e.nodeValue)?(!function(e,n,t,o){var c=document.createComment("component");e.parentNode.replaceChild(c,e),t.scope=n,t.resolver="component",t.content=o,t.childNodes.push({node:c,content:t,children:[],childNodes:[]})}(e,n,t,o),C.component(t,c)):(r=new RegExp(w).exec(e.nodeValue))&&(e.nodeValue=b(r[1],n),N.express(e,n,t,r[1]))}function y(e){if(e)return new RegExp(p).test(e.clas.nodeValue)}var N={attrEach:function(e,n,t,o,r){t.resolver="each",t.content=o,t.scope=n,t.node=e,j(t,c,r)},each:function(e,n,t,o,r){t.resolver="each",t.content=o,t.scope=n,t.node=e,j(t,c,r)},when:function(e,n,t){var o=t.clas.nodeValue;new RegExp(f).exec(o)&&(t.resolver="when",t.scope=n,t.node=e,j(t,c,o))},express:function(e,n,t,o){t.resolver="express",t.scope=n,t.node=e,j(t,c,o)},attrExpress:function(e,n,t,o){t.resolver="express",t.scope=n,t.node=e,j(t,c,o)}};function x(e,n){var t=e.ownerElement;t._express=e.nodeValue.replace(m,"$1");var o="scope".concat(function(e){try{return e.replace(/(\w+)\.?/g,"['$1']")}catch(e){return void console.warn(e)}}(t._express));(V[t.type]||V[t.localName]||V.other)(e,n,o)}var V={checkbox:function(e,n,t){try{var o=e.ownerElement;o.on("change",function(){var e=o.value.replace(/(\'|\")/g,"\\$1"),c="".concat(t,".").concat(o.checked?"ones":"remove","('").concat(e,"');");new Function("scope",c)(n)},n);var c=b(o._express,n);Array.isArray(c)&&c.has(o.value)&&(o.checked=!0)}catch(e){console.error(e)}},radio:function(e,n,t){try{var o=e.ownerElement;o.on("change",function(){var e=o.value.replace(/(\'|\")/g,"\\$1"),c="".concat(t,"='").concat(e,"';");new Function("scope",c)(n)},n),b(o._express,n)==o.value&&(o.checked=!0),o.name=A.$path}catch(e){console.error(e)}},select:function(e,n,t){try{var o,c=e.ownerElement;c.on("change",o=function(){var e=c.value.replace(/(\'|\")/g,"\\$1"),o="".concat(t,"='").concat(e,"';");new Function("scope",o)(n)},n);var r=b(c._express,n);l(r)?o():c.value=r}catch(e){console.error(e)}},other:function(e,n,t){try{var o=e.ownerElement;o.on("change",function(){var e=o.value.replace(/(\'|\")/g,"\\$1"),c="".concat(t,"='").concat(e,"';");new Function("scope",c)(n)},n)}catch(e){console.error(e)}}};function R(e,n){return{node:e,clas:n.clas,children:n.children,scope:n.scope,childNodes:[]}}function P(e,n,t){var o=document.createComment("each:"+A.$path);return n.appendChild(o),{node:e,clas:t.clas,children:t.children,scope:t.scope,childNodes:[{node:o,clas:t.clas,scope:t.scope,children:[],childNodes:[]}]}}!function e(n,t,o,c){r(o,function(o,a){if(1==o.clas.nodeType)if(o.clas.hasAttribute("@each")){var l=(x=o.clas.getAttribute("@each").split(":")).shift().trim(),p=x.pop().trim(),m=x.shift(),w=b(p,t),g=P(null,n,o);c.childNodes.push(g),N.attrEach(null,t,g,c,p),i(w,function(r,a){var i=Object.create(t.$target);m&&(i[m.trim()]=a),i=new Proxy(i,O(t,l,w,a));var u=o.clas.cloneNode();u.removeAttribute("@each"),n.appendChild(u);var h=R(u,o);g.childNodes.push(h),e(u,i,s(o.children),h),d(u,i,h,c)})}else if(/(CODE|SCRIPT)/.test(o.clas.nodeName)){var E=o.clas.cloneNode(!0);n.appendChild(E);var $=R(E,o);c.childNodes.push($)}else E=o.clas.cloneNode(),n.appendChild(E),$=R(E,o),c.childNodes.push($),e(E,t,s(o.children),$),d(E,t,$,c);else if(h.test(o.clas.nodeValue)){var x;l=(x=o.clas.nodeValue.replace(h,"$2").split(":")).shift().trim(),p=x.pop().trim(),m=x.shift(),w=b(p,t),g=P(null,n,o),c.childNodes.push(g),N.each(null,t,g,c,p);var V=s(o.children);i(w,function(c,r){var a=Object.create(t.$target);m&&(a[m.trim()]=r),a=new Proxy(a,O(t,l,w,r));var i=R(null,o);g.childNodes.push(i),e(n,a,s(V),i)})}else{if(f.test(o.clas.nodeValue)){var C=b(o.clas.nodeValue.replace(f,"$2"),t);return(g=function(e,n,t,o,c){if(new RegExp(v).test(t.clas.nodeValue)){var r=document.createComment("when:"+A.$path);n.appendChild(r),o.childNodes.push(o={node:e,clas:t.clas,children:[],scope:t.scope,content:o,childNodes:[{node:r,clas:t.clas,scope:t.scope,children:[],childNodes:[]}]}),N.when(null,c,o)}return o}(null,n,o,c,t)).children.push(a.shift()),C?(N.when(null,t,g),r(a,function(e,n){if(!y(e))return!0;g.children.push(n.shift())}),r(s(o.children),function(o,c){if(1==o.clas.nodeType||u.test(o.clas.nodeValue))e(n,t,c,g);else{var r=o.clas.cloneNode();n.appendChild(r);var a=R(r,o);g.childNodes.push(a),d(r,t,a,g)}c.shift()})):void 0==C?(N.when(null,t,g),r(s(o.children),function(o,c){if(1==o.clas.nodeType||u.test(o.clas.nodeValue))e(n,t,c,g);else{var r=o.clas.cloneNode();n.appendChild(r);var a=R(r,o);g.childNodes.push(a),d(r,t,a,g)}c.shift()})):y(a[0])&&e(n,t,a,g),y(o)}E=o.clas.cloneNode(),n.appendChild(E),$=R(E,o),c.childNodes.push($),d(E,t,$,c)}a.shift()})}(e,n,t,o)}var C={view:function(e,n,t,o,c){try{var r=document.createDocumentFragment();new R(r,t,s(n.children),o,c),o.children=n.children,o.clas=n.clas,e.reappend(r)}catch(e){console.error(e)}},component:function(e,n){try{var t=b(e.clas.nodeValue,e.scope);if(t.model=t.model.$target||t.model,e.path=A.$path,l(t))return;Reflect.setPrototypeOf(t.model,e.scope);var o=P(e.childNodes),c=e.content.childNodes;k(e.childNodes);var r=new F({view:t.component,model:t.model,action:t.action});t.model=r.model;var a=function(e,n,t){var o=document.createComment("component:"+n.path);return Reflect.deleteProperty(n,"path"),e.before(o),t.content.node=t.view,{clas:n.clas,children:[t.node],scope:n.scope,resolver:n.resolver,content:n.content,childNodes:[{node:o,scope:n.scope,children:[],childNodes:[]},t.content]}}(o,e,r);j(a,n,e.clas.nodeValue),c.replace(e,a),o.parentNode&&o.parentNode.replaceChild(r.view,o)}catch(e){console.error(e)}},when:function(e,n){try{var t=P(e.childNodes),o=document.createDocumentFragment(),c=e.content.childNodes;k(e.childNodes),new R(o,e.scope,s(e.children),e.content,n),c.replace(e,c.pop()),t.parentNode&&t.parentNode.replaceChild(o,t)}catch(e){console.error(e)}},each:function(e,n){try{var t=P(e.childNodes),o=document.createDocumentFragment(),c=e.content.childNodes;k(e.childNodes),new R(o,e.scope,[e],e.content,n),c.replace(e,c.pop()),t.parentNode&&t.parentNode.replaceChild(o,t)}catch(e){console.error(e)}},arrayEach:function(e,n,t,o){try{var c=function e(n,t){try{return a(n,function(n){if(n.node&&n.node.parentNode)return t=n.node;if(n.childNodes.length){var o=n.childNodes[n.childNodes.length-1];if(o.node&&o.node.parentNode)return t=o.node;t=e([o])}}),t}catch(e){console.error(e)}}([e.childNodes[t]]),r=document.createDocumentFragment(),i={clas:e.clas,children:e.children,scope:e.scope},l={childNodes:[],children:[]};new R(r,e.scope,[i],l,n),r.removeChild(r.childNodes[0]);var d=s(l.childNodes[0].childNodes);d.splice(0,1,t+1,0),e.childNodes.splices(d),o.remove(l.childNodes[0]),c.parentNode&&c.after(r)}catch(e){console.error(e)}},express:function(e,n,t){try{e.node.nodeValue=$(e.clas.nodeValue,e.scope),j(e,n,e.clas.nodeValue),"value"==e.node.name&&(e.node.ownerElement.value=e.node.nodeValue)}catch(e){console.error(e)}},attribute:function(e,n,t){try{var o=document.createAttribute($(e.clas.name,scope));j(e,n,e.clas.name),o.nodeValue=e.clas.nodeValue,e.node.ownerElement.setAttributeNode(o),e.node.ownerElement.removeAttributeNode(e.node)}catch(e){console.error(e)}}};function j(e,n,t){t.replace(N,function(t){if(!t.match(/["']/)){t="scope.".concat(t,"$");var o=new Function("scope","return ".concat(t,";"))(e.scope);if(void 0==o)return;var c=o.get(n);c?c.ones(e):o.set(n,[e])}})}function P(e,n){try{return a(e,function(e){if(e.node&&e.node.parentNode)return n=e.node,e.node=null,n;n=P(e.childNodes)}),n}catch(e){console.error(e)}}function k(e){e.forEach(function(e){if(e.node&&e.node.parentNode)return e.node.parentNode.removeChild(e.node);e.childNodes&&k(e.childNodes)})}function M(e,t,o){if("object"!=n(e))return e;return e=new Proxy(e,function t(o){var c=new Map,r=new Map;return{get:function(a,i,s){if("$target"==i)return a;if(new String(i).endsWith("$")){var l=r.get(i);return void 0!=l?l:Reflect.get(a,i)}if(!a.hasOwnProperty(i)&&Reflect.has(a,i))return Reflect.get(a,i);var d=o?"".concat(o,".").concat(i):i;S.publish(e,"get",[d]);var u=c.get(i);return void 0!=u?u:(r.set("".concat(i,"$"),new Map),(u=Reflect.get(a,i))instanceof View?u:("object"==n(u)&&(u=new Proxy(u,t(d))),c.set(i,u),u))},set:function(t,a,i,s){if(!t.hasOwnProperty(a)&&Reflect.has(t,a))return Reflect.set(t,a,i);var l=c.get(a),d=r.get("".concat(a,"$"));c.delete(a),r.delete("".concat(a,"$")),Reflect.set(t,a,i.$target||i);var u=s[a];!function t(o,c){if(o instanceof View)return;"object"==n(o)&&"object"==n(c)&&Object.keys(c).forEach(function(r){var a=o[r],i=o["".concat(r,"$")],s=c[r],l=c["".concat(r,"$")];"object"!=n(a)&&"object"!=n(s)&&S.publish(e,"set",[l,i]),t(a,s)})}(u,l);var h=o?"".concat(o,".").concat(a):a;return S.publish(e,"set",[new Map([[h,d]]),new Map([[h,r.get("".concat(a,"$"))]])]),!0}}}()),Object.keys(t).forEach(function(n){return S.subscribe(e,n,t[n])}),e}var S=new(function(){function e(){t(this,e),this.map=new Map}return c(e,[{key:"publish",value:function(e,n,t){var o=this.map.get(e);if(o){var c=o.get(n);c?c.data.push(t):o.set(n,{data:[t],queue:[]})}else{var r=new Map;r.set(n,{data:[r],queue:[]}),this.map.set(e,r)}this.notify(o.get(n),e)}},{key:"notify",value:function(e,n){if(e)for(var t=function(){var t=e.data.shift();e.queue.forEach(function(e){e.apply(n,t)})};e.data.length;)t();else this.map.forEach(function(e){e.forEach(function(e){for(var t=function(){var t=e.data.shift();e.queue.forEach(function(e){e.apply(n,t)})};e.data.length;)t()})})}},{key:"subscribe",value:function(e,n,t){var o=this.map.get(e);if(o){var c=o.get(n);c?c.queue.push(t):o.set(n,{data:[],queue:[t]})}else{var r=new Map;r.set(n,{data:[],queue:[t]}),this.map.set(e,r)}}}]),e}());function _(e){try{return document.querySelectorAll(e)}catch(t){var n=document.createElement("div");return n.innerHTML=e.trim(),n.childNodes}}function T(e,n,t){this.addEventListener?this.addEventListener(e,function(e){n.forEach(function(n,o){n.forEach(function(n){var c=n?b("[".concat(n,"]"),t):[];c.push(e);var r=Reflect.getPrototypeOf(o),a=Object.assign({},r);Reflect.setPrototypeOf(a,t||o.$model),o.apply(a,c)})})},!1):this.attachEvent?this.attachEvent("on"+e,function(e){n.forEach(function(n,o){n.forEach(function(n){var c=n?b("[".concat(n,"]"),t):[];c.push(e);var r=Reflect.getPrototypeOf(o),a=Object.assign({},r);Reflect.setPrototypeOf(a,t||o.$model),o.apply(a,c)})})}):element["on"+e]=function(e){n.forEach(function(n,o){n.forEach(function(n){var c=n?b("[".concat(n,"]"),t):[];c.push(e);var r=Reflect.getPrototypeOf(o),a=Object.assign({},r);Reflect.setPrototypeOf(a,t||o.$model),o.apply(a,c)})})}}Object.assign(Node.prototype,{on:function(e,n,t,o){if(this._manager)if(this._manager.get(e)){var c=this._manager.get(e);c.get(n)?c.get(n).ones(o):c.set(n,[o])}else{var r=new Map;r.set(n,[o]),this._manager.set(e,r),T.call(this,e,r,t)}else{var a=new Map;a.set(n,[o]),this._manager=new Map,this._manager.set(e,a),T.call(this,e,a,t)}return this},off:function(e,n){if(this._manager){var t=this._manager.get(e);if(void 0==t)return;if(t.delete(n),t.size)return;this._manager.delete(e),function(e,n){this.addEventListener?this.removeEventListener(e,n,!1):this.detachEvent?this.detachEvent("on"+e,n):element["on"+e]=null}.call(this,e,n)}return this},reappend:function(e){return a(s(this.childNodes),function(e){e.parentNode.removeChild(e)}),this.appendChild(e),this},before:function(e){this.parentNode.insertBefore(e,this)},after:function(e){this.nextSibling?this.parentNode.insertBefore(e,this.nextSibling):this.parentNode.appendChild(e)}}),Object.assign(NodeList.prototype,{on:function(e,n){return a(this,function(t){t.on(e,n)}),this},off:function(e,n){return a(this,function(t){t.off(e,n)}),this}});var A={$path:void 0},F=function(){function e(n){t(this,e),this.content={childNodes:[],children:[]},this.model=n.model,this.action=n.action,this.watch=n.watch,this.filter=n.filter,n.view?this.view(n):this.component(n)}return c(e,[{key:"view",value:function(e){e.model=M(e.model,{set:function(e,n){!function(e,n){e&&n?e.forEach(function(e){e&&e.forEach(function(e,t){s(e).forEach(function(o){!function e(n,t){try{return n.every(function(n){if(n.node){var o=n.node.ownerElement||n.node;return t=document.body.contains(o),!1}t=e(n.childNodes)}),t}catch(e){console.error(e)}}([o])?e.remove(o):C[o.resolver](o,t,n)})})}):e&&!n&&e.forEach(function(e){e&&e.forEach(function(e){k(e)})})}(e,n)},get:function(e){A.$path=e}}),this.model=e.model;var n=_(e.view),t=function e(n,t){var o=t||[];return r(n,function(t){if(n.shift(),new RegExp(y).test(t.nodeValue))return!0;var c={clas:t.cloneNode(!0),children:[]};3==t.nodeType&&""==t.nodeValue.trim()||o.push(c),1==t.nodeType?e(s(t.childNodes),c.children):new RegExp(u).test(t.nodeValue)&&e(n,c.children)}),o}(function e(n){return a(n,function(n){n.childNodes[0]&&!/(CODE|SCRIPT)/.test(n.nodeName)&&e(s(n.childNodes)),3==n.nodeType&&n.nodeValue.replace(d,function(e){var t=n.nodeValue.split(e);n.parentNode.insertBefore(document.createTextNode(t[0]),n),n.parentNode.insertBefore(document.createTextNode(e.trim()),n),n.nodeValue=n.nodeValue.replace(t[0],"").replace(e,"")})}),n}(s(n)))[0];this.node=t,this.view=n[0],C.view(this.view,t,e.model,this.content,this)}},{key:"component",value:function(e){var n=_(e.component);this.view=n[0],this.view.parentNode.removeChild(this.view),this.component=this.view.outerHTML}}]),e}();return window.View=F,window.Router=function(e,n){var t,o,c,r=/^:/,a=/^\/(.+)/;this.redreact=u;var i,s=!((i=window.navigator.userAgent).indexOf("compatible")>-1&&i.indexOf("MSIE")>-1||i.indexOf("Trident")>-1||i.indexOf("Edge")>-1)&&window.history&&"pushState"in window.history;function l(e){for(c=Object.keys(n);c.length;){t=c.shift(),o={};var r=t.replace(a,"$1");if(d(r=r.split("/"),e.split("/")))return{component:n[t].component,router:n[t].router,action:n[t].action,after:n[t].after,params:o,path:e}}}function d(e,n){for(;n.length;){var t=e.shift(),c=n.shift();if(c!=t){if(!r.test(t))return!1;t=t.replace(r,""),o[t]=c}}return!0}function u(e){var n=window.location.pathname;window.location.href=n+"#"+e}function h(n){var t=l(window.location.hash.replace(/^#\/?/,""));t?(t.action(t.params),e.model[t.router]=t.component,t.after&&t.after()):void 0!=n&&"load"!=n.type||u("")}window.addEventListener("load",h,h()),window.addEventListener(s?"popstate":"hashchange",h,!1)},window.query=_,e.View=F,e.global=A,e}({});
