/*! For license information please see ScrollMagic.js.LICENSE.txt */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,(function(){"use strict";var e=function(){};e.version="2.0.7",window.addEventListener("mousewheel",(function(){}));var t="data-scrollmagic-pin-spacer";e.Controller=function(r){var o,s,a="REVERSE",l="PAUSED",c=n.defaults,f=this,u=i.extend({},c,r),d=[],h=!1,p=0,g=l,v=!0,m=0,w=!0,y=function(){0<u.refreshInterval&&(s=window.setTimeout(F,u.refreshInterval))},S=function(){return u.vertical?i.get.scrollTop(u.container):i.get.scrollLeft(u.container)},b=function(){return u.vertical?i.get.height(u.container):i.get.width(u.container)},E=this._setScrollPos=function(e){u.vertical?v?window.scrollTo(i.get.scrollLeft(),e):u.container.scrollTop=e:v?window.scrollTo(e,i.get.scrollTop()):u.container.scrollLeft=e},x=function(){if(w&&h){var e=i.type.Array(h)?h:d.slice(0);h=!1;var t=p,n=(p=f.scrollPos())-t;0!==n&&(g=0<n?"FORWARD":a),g===a&&e.reverse(),e.forEach((function(e,t){e.update(!0)}))}},z=function(){o=i.rAF(x)},C=function(e){"resize"==e.type&&(m=b(),g=l),!0!==h&&(h=!0,z())},F=function(){if(!v&&m!=b()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(t){(e=document.createEvent("Event")).initEvent("resize",!1,!1)}u.container.dispatchEvent(e)}d.forEach((function(e,t){e.refresh()})),y()};this._options=u;var L=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort((function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1})),t};return this.addScene=function(t){if(i.type.Array(t))t.forEach((function(e,t){f.addScene(e)}));else if(t instanceof e.Scene)if(t.controller()!==f)t.addTo(f);else if(d.indexOf(t)<0)for(var n in d.push(t),d=L(d),t.on("shift.controller_sort",(function(){d=L(d)})),u.globalSceneOptions)t[n]&&t[n].call(t,u.globalSceneOptions[n]);return f},this.removeScene=function(e){if(i.type.Array(e))e.forEach((function(e,t){f.removeScene(e)}));else{var t=d.indexOf(e);-1<t&&(e.off("shift.controller_sort"),d.splice(t,1),e.remove())}return f},this.updateScene=function(t,n){return i.type.Array(t)?t.forEach((function(e,t){f.updateScene(e,n)})):n?t.update(!0):!0!==h&&t instanceof e.Scene&&(-1==(h=h||[]).indexOf(t)&&h.push(t),h=L(h),z()),f},this.update=function(e){return C({type:"resize"}),e&&x(),f},this.scrollTo=function(n,r){if(i.type.Number(n))E.call(u.container,n,r);else if(n instanceof e.Scene)n.controller()===f&&f.scrollTo(n.scrollOffset(),r);else if(i.type.Function(n))E=n;else{var o=i.get.elements(n)[0];if(o){for(;o.parentNode.hasAttribute(t);)o=o.parentNode;var s=u.vertical?"top":"left",a=i.get.offset(u.container),l=i.get.offset(o);v||(a[s]-=f.scrollPos()),f.scrollTo(l[s]-a[s],r)}}return f},this.scrollPos=function(e){return arguments.length?(i.type.Function(e)&&(S=e),f):S.call(f)},this.info=function(e){var t={size:m,vertical:u.vertical,scrollPos:p,scrollDirection:g,container:u.container,isDocument:v};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(e){return f},this.enabled=function(e){return arguments.length?(w!=e&&(w=!!e,f.updateScene(d,!0)),f):w},this.destroy=function(e){window.clearTimeout(s);for(var t=d.length;t--;)d[t].destroy(e);return u.container.removeEventListener("resize",C),u.container.removeEventListener("scroll",C),i.cAF(o),null},function(){for(var e in u)c.hasOwnProperty(e)||delete u[e];if(u.container=i.get.elements(u.container)[0],!u.container)throw"ScrollMagic.Controller init failed.";(v=u.container===window||u.container===document.body||!document.body.contains(u.container))&&(u.container=window),m=b(),u.container.addEventListener("resize",C),u.container.addEventListener("scroll",C);var t=parseInt(u.refreshInterval,10);u.refreshInterval=i.type.Number(t)?t:c.refreshInterval,y()}(),f};var n={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};e.Controller.addOption=function(e,t){n.defaults[e]=t},e.Controller.extend=function(t){var n=this;e.Controller=function(){return n.apply(this,arguments),this.$super=i.extend({},this),t.apply(this,arguments)||this},i.extend(e.Controller,n),e.Controller.prototype=n.prototype,e.Controller.prototype.constructor=e.Controller},e.Scene=function(n){var o,s,a="BEFORE",l="DURING",c="AFTER",f=r.defaults,u=this,d=i.extend({},f,n),h=a,p=0,g={start:0,end:0},v=0,m=!0,w={};this.on=function(e,t){return i.type.Function(t)&&(e=e.trim().split(" ")).forEach((function(e){var n=e.split("."),r=n[0],i=n[1];"*"!=r&&(w[r]||(w[r]=[]),w[r].push({namespace:i||"",callback:t}))})),u},this.off=function(e,t){return e&&(e=e.trim().split(" ")).forEach((function(e,n){var r=e.split("."),i=r[0],o=r[1]||"";("*"===i?Object.keys(w):[i]).forEach((function(e){for(var n=w[e]||[],r=n.length;r--;){var i=n[r];!i||o!==i.namespace&&"*"!==o||t&&t!=i.callback||n.splice(r,1)}n.length||delete w[e]}))})),u},this.trigger=function(t,n){if(t){var r=t.trim().split("."),i=r[0],o=r[1],s=w[i];s&&s.forEach((function(t,r){o&&o!==t.namespace||t.callback.call(u,new e.Event(i,t.namespace,u,n))}))}return u},u.on("change.internal",(function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?x():"reverse"===e.what&&u.update())})).on("shift.internal",(function(e){b(),u.update()})),this.addTo=function(t){return t instanceof e.Controller&&s!=t&&(s&&s.removeScene(u),s=t,F(),E(!0),x(!0),b(),s.info("container").addEventListener("resize",z),t.addScene(u),u.trigger("add",{controller:s}),u.update()),u},this.enabled=function(e){return arguments.length?(m!=e&&(m=!!e,u.update(!0)),u):m},this.remove=function(){if(s){s.info("container").removeEventListener("resize",z);var e=s;s=void 0,e.removeScene(u),u.trigger("remove")}return u},this.destroy=function(e){return u.trigger("destroy",{reset:e}),u.remove(),u.off("*.*"),null},this.update=function(e){if(s)if(e)if(s.enabled()&&m){var t,n=s.info("scrollPos");t=0<d.duration?(n-g.start)/(g.end-g.start):n>=g.start?1:0,u.trigger("update",{startPos:g.start,endPos:g.end,scrollPos:n}),u.progress(t)}else y&&h===l&&A(!0);else s.updateScene(u,!1);return u},this.refresh=function(){return E(),x(),u},this.progress=function(e){if(arguments.length){var t=!1,n=h,r=s?s.info("scrollDirection"):"PAUSED",i=d.reverse||p<=e;if(0===d.duration?(t=p!=e,h=0==(p=e<1&&i?0:1)?a:l):e<0&&h!==a&&i?(h=a,t=!(p=0)):0<=e&&e<1&&i?(p=e,h=l,t=!0):1<=e&&h!==c?(p=1,h=c,t=!0):h!==l||i||A(),t){var o={progress:p,state:h,scrollDirection:r},f=h!=n,g=function(e){u.trigger(e,o)};f&&n!==l&&(g("enter"),g(n===a?"start":"end")),g("progress"),f&&h!==l&&(g(h===a?"start":"end"),g("leave"))}return u}return p};var y,S,b=function(){g={start:v+d.offset},s&&d.triggerElement&&(g.start-=s.info("size")*d.triggerHook),g.end=g.start+d.duration},E=function(e){if(o){var t="duration";L(t,o.call(u))&&!e&&(u.trigger("change",{what:t,newval:d[t]}),u.trigger("shift",{reason:t}))}},x=function(e){var n=0,r=d.triggerElement;if(s&&(r||0<v)){if(r)if(r.parentNode){for(var o=s.info(),a=i.get.offset(o.container),l=o.vertical?"top":"left";r.parentNode.hasAttribute(t);)r=r.parentNode;var c=i.get.offset(r);o.isDocument||(a[l]-=s.scrollPos()),n=c[l]-a[l]}else u.triggerElement(void 0);var f=n!=v;v=n,f&&!e&&u.trigger("shift",{reason:"triggerElementPosition"})}},z=function(e){0<d.triggerHook&&u.trigger("shift",{reason:"containerResize"})},C=i.extend(r.validate,{duration:function(e){if(i.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return s?s.info("size")*t:0}}if(i.type.Function(e)){o=e;try{e=parseFloat(o.call(u))}catch(t){e=-1}}if(e=parseFloat(e),!i.type.Number(e)||e<0)throw o&&(o=void 0),0;return e}}),F=function(e){(e=arguments.length?[e]:Object.keys(C)).forEach((function(e,t){var n;if(C[e])try{n=C[e](d[e])}catch(t){n=f[e]}finally{d[e]=n}}))},L=function(e,t){var n=!1,r=d[e];return d[e]!=t&&(d[e]=t,F(e),n=r!=d[e]),n},T=function(e){u[e]||(u[e]=function(t){return arguments.length?("duration"===e&&(o=void 0),L(e,t)&&(u.trigger("change",{what:e,newval:d[e]}),-1<r.shifts.indexOf(e)&&u.trigger("shift",{reason:e})),u):d[e]})};this.controller=function(){return s},this.state=function(){return h},this.scrollOffset=function(){return g.start},this.triggerPosition=function(){var e=d.offset;return s&&(d.triggerElement?e+=v:e+=s.info("size")*u.triggerHook()),e},u.on("shift.internal",(function(e){var t="duration"===e.reason;(h===c&&t||h===l&&0===d.duration)&&A(),t&&N()})).on("progress.internal",(function(e){A()})).on("add.internal",(function(e){N()})).on("destroy.internal",(function(e){u.removePin(e.reset)}));var A=function(e){if(y&&s){var t=s.info(),n=S.spacer.firstChild;if(e||h!==l){var r={position:S.inFlow?"relative":"absolute",top:0,left:0},o=i.css(n,"position")!=r.position;S.pushFollowers?0<d.duration&&(h===c&&0===parseFloat(i.css(S.spacer,"padding-top"))||h===a&&0===parseFloat(i.css(S.spacer,"padding-bottom")))&&(o=!0):r[t.vertical?"top":"left"]=d.duration*p,i.css(n,r),o&&N()}else{"fixed"!=i.css(n,"position")&&(i.css(n,{position:"fixed"}),N());var f=i.get.offset(S.spacer,!0),u=d.reverse||0===d.duration?t.scrollPos-g.start:Math.round(p*d.duration*10)/10;f[t.vertical?"top":"left"]+=u,i.css(S.spacer.firstChild,{top:f.top,left:f.left})}}},N=function(){if(y&&s&&S.inFlow){var e=h===l,t=s.info("vertical"),n=S.spacer.firstChild,r=i.isMarginCollapseType(i.css(S.spacer,"display")),o={};S.relSize.width||S.relSize.autoFullWidth?e?i.css(y,{width:i.get.width(S.spacer)}):i.css(y,{width:"100%"}):(o["min-width"]=i.get.width(t?y:n,!0,!0),o.width=e?o["min-width"]:"auto"),S.relSize.height?e?i.css(y,{height:i.get.height(S.spacer)-(S.pushFollowers?d.duration:0)}):i.css(y,{height:"100%"}):(o["min-height"]=i.get.height(t?n:y,!0,!r),o.height=e?o["min-height"]:"auto"),S.pushFollowers&&(o["padding"+(t?"Top":"Left")]=d.duration*p,o["padding"+(t?"Bottom":"Right")]=d.duration*(1-p)),i.css(S.spacer,o)}},O=function(){s&&y&&h===l&&!s.info("isDocument")&&A()},_=function(){s&&y&&h===l&&((S.relSize.width||S.relSize.autoFullWidth)&&i.get.width(window)!=i.get.width(S.spacer.parentNode)||S.relSize.height&&i.get.height(window)!=i.get.height(S.spacer.parentNode))&&N()},P=function(e){s&&y&&h===l&&!s.info("isDocument")&&(e.preventDefault(),s._setScrollPos(s.info("scrollPos")-((e.wheelDelta||e[s.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,n){if(n=i.extend({},{pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},n),!(e=i.get.elements(e)[0]))return u;if("fixed"===i.css(e,"position"))return u;if(y){if(y===e)return u;u.removePin()}var r=(y=e).parentNode.style.display,o=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];y.parentNode.style.display="none";var s="absolute"!=i.css(y,"position"),a=i.css(y,o.concat(["display"])),l=i.css(y,["width","height"]);y.parentNode.style.display=r,!s&&n.pushFollowers&&(n.pushFollowers=!1);var c=y.parentNode.insertBefore(document.createElement("div"),y),f=i.extend(a,{position:s?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(s||i.extend(f,i.css(y,["width","height"])),i.css(c,f),c.setAttribute(t,""),i.addClass(c,n.spacerClass),S={spacer:c,relSize:{width:"%"===l.width.slice(-1),height:"%"===l.height.slice(-1),autoFullWidth:"auto"===l.width&&s&&i.isMarginCollapseType(a.display)},pushFollowers:n.pushFollowers,inFlow:s},!y.___origStyle){y.___origStyle={};var d=y.style;o.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]).forEach((function(e){y.___origStyle[e]=d[e]||""}))}return S.relSize.width&&i.css(c,{width:l.width}),S.relSize.height&&i.css(c,{height:l.height}),c.appendChild(y),i.css(y,{position:s?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(S.relSize.width||S.relSize.autoFullWidth)&&i.css(y,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",O),window.addEventListener("resize",O),window.addEventListener("resize",_),y.addEventListener("mousewheel",P),y.addEventListener("DOMMouseScroll",P),A(),u},this.removePin=function(e){if(y){if(h===l&&A(!0),e||!s){var n=S.spacer.firstChild;if(n.hasAttribute(t)){var r=S.spacer.style,o={};["margin","marginLeft","marginRight","marginTop","marginBottom"].forEach((function(e){o[e]=r[e]||""})),i.css(n,o)}S.spacer.parentNode.insertBefore(n,S.spacer),S.spacer.parentNode.removeChild(S.spacer),y.parentNode.hasAttribute(t)||(i.css(y,y.___origStyle),delete y.___origStyle)}window.removeEventListener("scroll",O),window.removeEventListener("resize",O),window.removeEventListener("resize",_),y.removeEventListener("mousewheel",P),y.removeEventListener("DOMMouseScroll",P),y=void 0}return u};var D,k=[];return u.on("destroy.internal",(function(e){u.removeClassToggle(e.reset)})),this.setClassToggle=function(e,t){var n=i.get.elements(e);return 0!==n.length&&i.type.String(t)&&(0<k.length&&u.removeClassToggle(),D=t,k=n,u.on("enter.internal_class leave.internal_class",(function(e){var t="enter"===e.type?i.addClass:i.removeClass;k.forEach((function(e,n){t(e,D)}))}))),u},this.removeClassToggle=function(e){return e&&k.forEach((function(e,t){i.removeClass(e,D)})),u.off("start.internal_class end.internal_class"),D=void 0,k=[],u},function(){for(var e in d)f.hasOwnProperty(e)||delete d[e];for(var t in f)T(t);F()}(),u};var r={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!i.type.Number(e))throw 0;return e},triggerElement:function(e){if(e=e||void 0){var t=i.get.elements(e)[0];if(!t||!t.parentNode)throw 0;e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(i.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw 0;e=t[e]}return e},reverse:function(e){return!!e}},shifts:["duration","offset","triggerHook"]};e.Scene.addOption=function(e,t,n,i){e in r.defaults||(r.defaults[e]=t,r.validate[e]=n,i&&r.shifts.push(e))},e.Scene.extend=function(t){var n=this;e.Scene=function(){return n.apply(this,arguments),this.$super=i.extend({},this),t.apply(this,arguments)||this},i.extend(e.Scene,n),e.Scene.prototype=n.prototype,e.Scene.prototype.constructor=e.Scene},e.Event=function(e,t,n,r){for(var i in r=r||{})this[i]=r[i];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var i=e._util=function(e){var t,n={},r=function(e){return parseFloat(e)||0},i=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},o=function(t,n,o,s){if((n=n===document?e:n)===e)s=!1;else if(!u.DomElement(n))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var a=(o?n["offset"+t]||n["outer"+t]:n["client"+t]||n["inner"+t])||0;if(o&&s){var l=i(n);a+="Height"===t?r(l.marginTop)+r(l.marginBottom):r(l.marginLeft)+r(l.marginRight)}return a},s=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}))};n.extend=function(e){for(e=e||{},t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},n.isMarginCollapseType=function(e){return-1<["block","flex","list-item","table","-webkit-box"].indexOf(e)};var a=0,l=["ms","moz","webkit","o"],c=e.requestAnimationFrame,f=e.cancelAnimationFrame;for(t=0;!c&&t<4;++t)c=e[l[t]+"RequestAnimationFrame"],f=e[l[t]+"CancelAnimationFrame"]||e[l[t]+"CancelRequestAnimationFrame"];c||(c=function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-a)),i=e.setTimeout((function(){t(n+r)}),r);return a=n+r,i}),f||(f=function(t){e.clearTimeout(t)}),n.rAF=c.bind(e),n.cAF=f.bind(e);var u=n.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};u.String=function(e){return"string"===u(e)},u.Function=function(e){return"function"===u(e)},u.Array=function(e){return Array.isArray(e)},u.Number=function(e){return!u.Array(e)&&0<=e-parseFloat(e)+1},u.DomElement=function(e){return"object"==typeof HTMLElement||"function"==typeof HTMLElement?e instanceof HTMLElement||e instanceof SVGElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var d=n.get={};return d.elements=function(t){var n=[];if(u.String(t))try{t=document.querySelectorAll(t)}catch(t){return n}if("nodelist"===u(t)||u.Array(t)||t instanceof NodeList)for(var r=0,i=n.length=t.length;r<i;r++){var o=t[r];n[r]=u.DomElement(o)?o:d.elements(o)}else(u.DomElement(t)||t===document||t===e)&&(n=[t]);return n},d.scrollTop=function(t){return t&&"number"==typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},d.scrollLeft=function(t){return t&&"number"==typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},d.width=function(e,t,n){return o("width",e,t,n)},d.height=function(e,t,n){return o("height",e,t,n)},d.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=d.scrollTop(),n.left+=d.scrollLeft())}return n},n.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},n.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},n.css=function(e,t){if(u.String(t))return i(e)[s(t)];if(u.Array(t)){var n={},r=i(e);return t.forEach((function(e,t){n[e]=r[s(e)]})),n}for(var o in t){var a=t[o];a==parseFloat(a)&&(a+="px"),e.style[s(o)]=a}},n}(window||{});return e}));