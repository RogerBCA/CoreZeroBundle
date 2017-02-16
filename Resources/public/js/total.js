/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
function _init(){"use strict"
$.AdminLTE.layout={activate:function(){var e=this
e.fix(),e.fixSidebar(),$(window,".wrapper").resize(function(){e.fix(),e.fixSidebar()})},fix:function(){var e=$(".main-header").outerHeight()+$(".main-footer").outerHeight(),t=$(window).height(),n=$(".sidebar").height()
if($("body").hasClass("fixed"))$(".content-wrapper, .right-side").css("min-height",t-$(".main-footer").outerHeight())
else{var i
t>=n?($(".content-wrapper, .right-side").css("min-height",t-e),i=t-e):($(".content-wrapper, .right-side").css("min-height",n),i=n)
var o=$($.AdminLTE.options.controlSidebarOptions.selector)
"undefined"!=typeof o&&o.height()>i&&$(".content-wrapper, .right-side").css("min-height",o.height())}},fixSidebar:function(){return $("body").hasClass("fixed")?("undefined"==typeof $.fn.slimScroll&&window.console&&window.console.error("Error: the fixed layout requires the slimscroll plugin!"),void($.AdminLTE.options.sidebarSlimScroll&&"undefined"!=typeof $.fn.slimScroll&&($(".sidebar").slimScroll({destroy:!0}).height("auto"),$(".sidebar").slimscroll({height:$(window).height()-$(".main-header").height()+"px",color:"rgba(0,0,0,0.2)",size:"3px"})))):void("undefined"!=typeof $.fn.slimScroll&&$(".sidebar").slimScroll({destroy:!0}).height("auto"))}},$.AdminLTE.pushMenu={activate:function(e){var t=$.AdminLTE.options.screenSizes
$(e).on("click",function(e){e.preventDefault(),$(window).width()>t.sm-1?$("body").hasClass("sidebar-collapse")?$("body").removeClass("sidebar-collapse").trigger("expanded.pushMenu"):$("body").addClass("sidebar-collapse").trigger("collapsed.pushMenu"):$("body").hasClass("sidebar-open")?$("body").removeClass("sidebar-open").removeClass("sidebar-collapse").trigger("collapsed.pushMenu"):$("body").addClass("sidebar-open").trigger("expanded.pushMenu")}),$(".content-wrapper").click(function(){$(window).width()<=t.sm-1&&$("body").hasClass("sidebar-open")&&$("body").removeClass("sidebar-open")}),($.AdminLTE.options.sidebarExpandOnHover||$("body").hasClass("fixed")&&$("body").hasClass("sidebar-mini"))&&this.expandOnHover()},expandOnHover:function(){var e=this,t=$.AdminLTE.options.screenSizes.sm-1
$(".main-sidebar").hover(function(){$("body").hasClass("sidebar-mini")&&$("body").hasClass("sidebar-collapse")&&$(window).width()>t&&e.expand()},function(){$("body").hasClass("sidebar-mini")&&$("body").hasClass("sidebar-expanded-on-hover")&&$(window).width()>t&&e.collapse()})},expand:function(){$("body").removeClass("sidebar-collapse").addClass("sidebar-expanded-on-hover")},collapse:function(){$("body").hasClass("sidebar-expanded-on-hover")&&$("body").removeClass("sidebar-expanded-on-hover").addClass("sidebar-collapse")}},$.AdminLTE.tree=function(e){var t=this,n=$.AdminLTE.options.animationSpeed
$(document).on("click",e+" li a",function(e){var i=$(this),o=i.next()
if(o.is(".treeview-menu")&&o.is(":visible"))o.slideUp(n,function(){o.removeClass("menu-open")}),o.parent("li").removeClass("active")
else if(o.is(".treeview-menu")&&!o.is(":visible")){var r=i.parents("ul").first(),a=r.find("ul:visible").slideUp(n)
a.removeClass("menu-open")
var s=i.parent("li")
o.slideDown(n,function(){o.addClass("menu-open"),r.find("li.active").removeClass("active"),s.addClass("active"),t.layout.fix()})}o.is(".treeview-menu")&&e.preventDefault()})},$.AdminLTE.controlSidebar={activate:function(){var e=this,t=$.AdminLTE.options.controlSidebarOptions,n=$(t.selector),i=$(t.toggleBtnSelector)
i.on("click",function(i){i.preventDefault(),n.hasClass("control-sidebar-open")||$("body").hasClass("control-sidebar-open")?e.close(n,t.slide):e.open(n,t.slide)})
var o=$(".control-sidebar-bg")
e._fix(o),$("body").hasClass("fixed")?e._fixForFixed(n):$(".content-wrapper, .right-side").height()<n.height()&&e._fixForContent(n)},open:function(e,t){t?e.addClass("control-sidebar-open"):$("body").addClass("control-sidebar-open")},close:function(e,t){t?e.removeClass("control-sidebar-open"):$("body").removeClass("control-sidebar-open")},_fix:function(e){var t=this
$("body").hasClass("layout-boxed")?(e.css("position","absolute"),e.height($(".wrapper").height()),$(window).resize(function(){t._fix(e)})):e.css({position:"fixed",height:"auto"})},_fixForFixed:function(e){e.css({position:"fixed","max-height":"100%",overflow:"auto","padding-bottom":"50px"})},_fixForContent:function(e){$(".content-wrapper, .right-side").css("min-height",e.height())}},$.AdminLTE.boxWidget={selectors:$.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,icons:$.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,animationSpeed:$.AdminLTE.options.animationSpeed,activate:function(e){var t=this
e||(e=document),$(e).on("click",t.selectors.collapse,function(e){e.preventDefault(),t.collapse($(this))}),$(e).on("click",t.selectors.remove,function(e){e.preventDefault(),t.remove($(this))})},collapse:function(e){var t=this,n=e.parents(".box").first(),i=n.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer")
n.hasClass("collapsed-box")?(e.children(":first").removeClass(t.icons.open).addClass(t.icons.collapse),i.slideDown(t.animationSpeed,function(){n.removeClass("collapsed-box")})):(e.children(":first").removeClass(t.icons.collapse).addClass(t.icons.open),i.slideUp(t.animationSpeed,function(){n.addClass("collapsed-box")}))},remove:function(e){var t=e.parents(".box").first()
t.slideUp(this.animationSpeed)}}}function add_msg(e,t,n){t="undefined"!=typeof t?t:"Info",n="undefined"!=typeof n?n:"info",new PNotify({text:"<strong>Galer&iacute;a:</strong> "+e,type:n,icon:!1})}function load_zoom_img(){$.magnificPopup.instance.popupsCache={},$(".fancybox").magnificPopup({type:"image",removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass="mfp-move-horizontal"}},closeOnContentClick:!0,midClick:!0})}function set_breadcrumb(){$("ol#breadcrumb").html('<li><a href="">Inicio</a></li>')
for(var e=PATH.split("/"),t="",n="",i=1;i<e.length;i++)i!=e.length-1?(n+=0==i?e[i]:"/"+e[i],t+='<li><a href="'+n+'">'+e[i]+"</a></li>"):t+='<li class="active">'+e[i]+"</li>"
$("ol#breadcrumb").append(t),$("ol#breadcrumb a").click(function(e){e.preventDefault(),browse($(e.target).attr("href"))})}function browse(e){e="undefined"!=typeof e?e:"",$.ajax({url:pathListFilemanager,data:{data:e},cache:!1,dataType:"json",type:"POST",success:function(t){t.status?show_content(e,t.files):add_msg(t.msg,"PHP","error")},error:function(e,t){add_msg(t,"AJAX","error")},complete:function(){loader.hide(),load_zoom_img(),$("#gallerybrowser").modal("show")}})}function show_content(e,t){PATH=e,set_breadcrumb(),$("table#filemanager").empty()
for(var n=0;n<t.length;n++){var i=t[n]
if(i.folder)i.icon="carpeta",i.name=$("<a />").attr("href",i.link).text(i.name).click(function(e){e.preventDefault(),browse($(this).attr("href"))})
else{var o=i.name.substr(i.name.lastIndexOf(".")+1)
"pdf"==i.thumb?i.icon=$('<i class="fa fa-file-pdf-o"></i>'):"doc"==i.thumb||"docx"==i.thumb?i.icon=$('<i class="fa fa-file-word-o"></i>'):"xls"==i.thumb||"xlsx"==i.thumb?i.icon=$('<i class="fa fa-file-excel-o"></i>'):"ppt"==i.thumb||"pptx"==i.thumb?i.icon=$('<i class="fa fa-file-powerpoint-o"></i>'):"gif"!=o&&"png"!=o&&"jpg"!=o&&"jpeg"!=o||(i.icon=$('<a class="fancybox"/>').attr("href",asset_url+i.link).append($('<img src="'+asset_url+i.thumb+'" />'))),i.name=$("<a />").attr("href",i.link).text(i.name).click(function(e){e.preventDefault()
var t=$(this).attr("href"),n=$("table#filemanager").attr("data-retornar"),i=$(this).text(),o=i.substr(i.lastIndexOf(".")+1)
$("#"+n).attr("value",t),$("#t_"+n).find(".fancybox").attr("href",asset_url+t),$("#t_"+n).find(".nombre-img").text(t.substr(8)),$("#t_"+n).find(".trash, .nombre-img").removeClass("hide"),"gif"==o||"png"==o||"jpg"==o||"jpeg"==o?$("#t_"+n).find(".fancybox").removeClass("hide"):$("#t_"+n).find(".fancybox").addClass("hide"),$("#gallerybrowser").modal("hide"),unsaved=!0})}i.remove=$('<a class="btn btn-default btn-xs" />').attr("href",i.link).html('<i class="fa fa-trash"></i>').click(function(e){e.preventDefault(),$("div#remove input#remove-path").val($(this).attr("href")),$("div#remove").modal("show")}),$("table#filemanager").append($("<tr />").append($('<td class="text-center" />').append(i.icon),$("<td />").append(i.name).append(""==i.medidas?"":'<p class="help-block">'+i.medidas+"</p>"),$('<td class="hidden-xs"/>').text(i.size),$('<td class="hidden-xs"/>').text(i.date),$('<td style="text-align:right">').append(i.remove)))}}function progress_bar(e){var t=e.position||e.loaded,n=e.totalSize||e.total,i=Math.floor(t/n*1e3)/10
$("div#progress > div.bar").css("width",i+"%").text(i+" %")}function h(){var e=parseInt($footer.offset().top)
wpos=$win.scrollTop(),space=$win.height()-4*$footer.height(),wpos+space<e-250?$footer.addClass("fixed_footer"):$footer.removeClass("fixed_footer")}function loadContent(e,t){t="undefined"!=typeof t&&t,$("#main-content").find("#guts").fadeOut(200,function(){$("#main-content").hide().load(e+"?ajax=true",t,function(){$("#main-content").fadeIn(200),$(".sidebar a").parent().removeClass("active"),$(".sidebar a").parent().parent().hasClass("treeview-menu")&&$(".sidebar a").parent().parent().parent().removeClass("active")
var t=e.split("/"),n=t[t.length-1];($.isNumeric(n)||"new"==n)&&(t[t.length-1]="")
var i=$('.sidebar a[href="'+t.join("/")+'"]')
i.parent().addClass("active"),i.parent().parent().hasClass("treeview-menu")&&i.parent().parent().parent().addClass("active")})})}function getConfirm(e,t){e=e||"",$("#confirmbox").modal({show:!0,backdrop:!1,keyboard:!1}),$("#confirmFalse").click(function(){$("#confirmbox").modal("hide"),t&&t(!1)}),$("#confirmTrue").click(function(){$("#confirmbox").modal("hide"),t&&t(!0)})}function CKupdate(){for(instance in CKEDITOR.instances)CKEDITOR.instances[instance].updateElement()}if(!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t="length"in e&&e.length,n=K.type(e)
return"function"!==n&&!K.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}function i(e,t,n){if(K.isFunction(t))return K.grep(e,function(e,i){return!!t.call(e,i,e)!==n})
if(t.nodeType)return K.grep(e,function(e){return e===t!==n})
if("string"==typeof t){if(se.test(t))return K.filter(t,e,n)
t=K.filter(t,e)}return K.grep(e,function(e){return B.call(t,e)>=0!==n})}function o(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function r(e){var t=he[e]={}
return K.each(e.match(fe)||[],function(e,n){t[n]=!0}),t}function a(){X.removeEventListener("DOMContentLoaded",a,!1),e.removeEventListener("load",a,!1),K.ready()}function s(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=K.expando+s.uid++}function l(e,t,n){var i
if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(we,"-$1").toLowerCase(),n=e.getAttribute(i),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:be.test(n)?K.parseJSON(n):n)}catch(e){}ye.set(e,t,n)}else n=void 0
return n}function c(){return!0}function u(){return!1}function d(){try{return X.activeElement}catch(e){}}function p(e,t){return K.nodeName(e,"table")&&K.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function f(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function h(e){var t=Ne.exec(e.type)
return t?e.type=t[1]:e.removeAttribute("type"),e}function m(e,t){for(var n=0,i=e.length;i>n;n++)ve.set(e[n],"globalEval",!t||ve.get(t[n],"globalEval"))}function g(e,t){var n,i,o,r,a,s,l,c
if(1===t.nodeType){if(ve.hasData(e)&&(r=ve.access(e),a=ve.set(t,r),c=r.events)){delete a.handle,a.events={}
for(o in c)for(n=0,i=c[o].length;i>n;n++)K.event.add(t,o,c[o][n])}ye.hasData(e)&&(s=ye.access(e),l=K.extend({},s),ye.set(t,l))}}function v(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[]
return void 0===t||t&&K.nodeName(e,t)?K.merge([e],n):n}function y(e,t){var n=t.nodeName.toLowerCase()
"input"===n&&Se.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function b(t,n){var i,o=K(n.createElement(t)).appendTo(n.body),r=e.getDefaultComputedStyle&&(i=e.getDefaultComputedStyle(o[0]))?i.display:K.css(o[0],"display")
return o.detach(),r}function w(e){var t=X,n=He[e]
return n||(n=b(e,t),"none"!==n&&n||(Re=(Re||K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Re[0].contentDocument,t.write(),t.close(),n=b(e,t),Re.detach()),He[e]=n),n}function x(e,t,n){var i,o,r,a,s=e.style
return n=n||Ye(e),n&&(a=n.getPropertyValue(t)||n[t]),n&&(""!==a||K.contains(e.ownerDocument,e)||(a=K.style(e,t)),ze.test(a)&&We.test(t)&&(i=s.width,o=s.minWidth,r=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=i,s.minWidth=o,s.maxWidth=r)),void 0!==a?a+"":a}function _(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function C(e,t){if(t in e)return t
for(var n=t[0].toUpperCase()+t.slice(1),i=t,o=Qe.length;o--;)if(t=Qe[o]+n,t in e)return t
return i}function S(e,t,n){var i=Ue.exec(t)
return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function T(e,t,n,i,o){for(var r=n===(i?"border":"content")?4:"width"===t?1:0,a=0;4>r;r+=2)"margin"===n&&(a+=K.css(e,n+_e[r],!0,o)),i?("content"===n&&(a-=K.css(e,"padding"+_e[r],!0,o)),"margin"!==n&&(a-=K.css(e,"border"+_e[r]+"Width",!0,o))):(a+=K.css(e,"padding"+_e[r],!0,o),"padding"!==n&&(a+=K.css(e,"border"+_e[r]+"Width",!0,o)))
return a}function D(e,t,n){var i=!0,o="width"===t?e.offsetWidth:e.offsetHeight,r=Ye(e),a="border-box"===K.css(e,"boxSizing",!1,r)
if(0>=o||null==o){if(o=x(e,t,r),(0>o||null==o)&&(o=e.style[t]),ze.test(o))return o
i=a&&(J.boxSizingReliable()||o===e.style[t]),o=parseFloat(o)||0}return o+T(e,t,n||(a?"border":"content"),i,r)+"px"}function k(e,t){for(var n,i,o,r=[],a=0,s=e.length;s>a;a++)i=e[a],i.style&&(r[a]=ve.get(i,"olddisplay"),n=i.style.display,t?(r[a]||"none"!==n||(i.style.display=""),""===i.style.display&&Ce(i)&&(r[a]=ve.access(i,"olddisplay",w(i.nodeName)))):(o=Ce(i),"none"===n&&o||ve.set(i,"olddisplay",o?n:K.css(i,"display"))))
for(a=0;s>a;a++)i=e[a],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?r[a]||"":"none"))
return e}function E(e,t,n,i,o){return new E.prototype.init(e,t,n,i,o)}function I(){return setTimeout(function(){Je=void 0}),Je=K.now()}function A(e,t){var n,i=0,o={height:e}
for(t=t?1:0;4>i;i+=2-t)n=_e[i],o["margin"+n]=o["padding"+n]=e
return t&&(o.opacity=o.width=e),o}function F(e,t,n){for(var i,o=(nt[t]||[]).concat(nt["*"]),r=0,a=o.length;a>r;r++)if(i=o[r].call(n,t,e))return i}function M(e,t,n){var i,o,r,a,s,l,c,u,d=this,p={},f=e.style,h=e.nodeType&&Ce(e),m=ve.get(e,"fxshow")
n.queue||(s=K._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,d.always(function(){d.always(function(){s.unqueued--,K.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],c=K.css(e,"display"),u="none"===c?ve.get(e,"olddisplay")||w(e.nodeName):c,"inline"===u&&"none"===K.css(e,"float")&&(f.display="inline-block")),n.overflow&&(f.overflow="hidden",d.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}))
for(i in t)if(o=t[i],Ze.exec(o)){if(delete t[i],r=r||"toggle"===o,o===(h?"hide":"show")){if("show"!==o||!m||void 0===m[i])continue
h=!0}p[i]=m&&m[i]||K.style(e,i)}else c=void 0
if(K.isEmptyObject(p))"inline"===("none"===c?w(e.nodeName):c)&&(f.display=c)
else{m?"hidden"in m&&(h=m.hidden):m=ve.access(e,"fxshow",{}),r&&(m.hidden=!h),h?K(e).show():d.done(function(){K(e).hide()}),d.done(function(){var t
ve.remove(e,"fxshow")
for(t in p)K.style(e,t,p[t])})
for(i in p)a=F(h?m[i]:0,i,d),i in m||(m[i]=a.start,h&&(a.end=a.start,a.start="width"===i||"height"===i?1:0))}}function P(e,t){var n,i,o,r,a
for(n in e)if(i=K.camelCase(n),o=t[i],r=e[n],K.isArray(r)&&(o=r[1],r=e[n]=r[0]),n!==i&&(e[i]=r,delete e[n]),a=K.cssHooks[i],a&&"expand"in a){r=a.expand(r),delete e[i]
for(n in r)n in e||(e[n]=r[n],t[n]=o)}else t[i]=o}function O(e,t,n){var i,o,r=0,a=tt.length,s=K.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1
for(var t=Je||I(),n=Math.max(0,c.startTime+c.duration-t),i=n/c.duration||0,r=1-i,a=0,l=c.tweens.length;l>a;a++)c.tweens[a].run(r)
return s.notifyWith(e,[c,r,n]),1>r&&l?n:(s.resolveWith(e,[c]),!1)},c=s.promise({elem:e,props:K.extend({},t),opts:K.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Je||I(),duration:n.duration,tweens:[],createTween:function(t,n){var i=K.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing)
return c.tweens.push(i),i},stop:function(t){var n=0,i=t?c.tweens.length:0
if(o)return this
for(o=!0;i>n;n++)c.tweens[n].run(1)
return t?s.resolveWith(e,[c,t]):s.rejectWith(e,[c,t]),this}}),u=c.props
for(P(u,c.opts.specialEasing);a>r;r++)if(i=tt[r].call(c,e,u,c.opts))return i
return K.map(u,F,c),K.isFunction(c.opts.start)&&c.opts.start.call(e,c),K.fx.timer(K.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function L(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var i,o=0,r=t.toLowerCase().match(fe)||[]
if(K.isFunction(n))for(;i=r[o++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function N(e,t,n,i){function o(s){var l
return r[s]=!0,K.each(e[s]||[],function(e,s){var c=s(t,n,i)
return"string"!=typeof c||a||r[c]?a?!(l=c):void 0:(t.dataTypes.unshift(c),o(c),!1)}),l}var r={},a=e===bt
return o(t.dataTypes[0])||!r["*"]&&o("*")}function $(e,t){var n,i,o=K.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((o[n]?e:i||(i={}))[n]=t[n])
return i&&K.extend(!0,e,i),e}function j(e,t,n){for(var i,o,r,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"))
if(i)for(o in s)if(s[o]&&s[o].test(i)){l.unshift(o)
break}if(l[0]in n)r=l[0]
else{for(o in n){if(!l[0]||e.converters[o+" "+l[0]]){r=o
break}a||(a=o)}r=r||a}return r?(r!==l[0]&&l.unshift(r),n[r]):void 0}function R(e,t,n,i){var o,r,a,s,l,c={},u=e.dataTypes.slice()
if(u[1])for(a in e.converters)c[a.toLowerCase()]=e.converters[a]
for(r=u.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=u.shift())if("*"===r)r=l
else if("*"!==l&&l!==r){if(a=c[l+" "+r]||c["* "+r],!a)for(o in c)if(s=o.split(" "),s[1]===r&&(a=c[l+" "+s[0]]||c["* "+s[0]])){a===!0?a=c[o]:c[o]!==!0&&(r=s[0],u.unshift(s[1]))
break}if(a!==!0)if(a&&e.throws)t=a(t)
else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}function H(e,t,n,i){var o
if(K.isArray(t))K.each(t,function(t,o){n||St.test(e)?i(e,o):H(e+"["+("object"==typeof o?t:"")+"]",o,n,i)})
else if(n||"object"!==K.type(t))i(e,t)
else for(o in t)H(e+"["+o+"]",t[o],n,i)}function W(e){return K.isWindow(e)?e:9===e.nodeType&&e.defaultView}var z=[],Y=z.slice,q=z.concat,U=z.push,B=z.indexOf,V={},G=V.toString,Q=V.hasOwnProperty,J={},X=e.document,Z="2.1.4",K=function(e,t){return new K.fn.init(e,t)},ee=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,te=/^-ms-/,ne=/-([\da-z])/gi,ie=function(e,t){return t.toUpperCase()}
K.fn=K.prototype={jquery:Z,constructor:K,selector:"",length:0,toArray:function(){return Y.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:Y.call(this)},pushStack:function(e){var t=K.merge(this.constructor(),e)
return t.prevObject=this,t.context=this.context,t},each:function(e,t){return K.each(this,e,t)},map:function(e){return this.pushStack(K.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(Y.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0)
return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:U,sort:z.sort,splice:z.splice},K.extend=K.fn.extend=function(){var e,t,n,i,o,r,a=arguments[0]||{},s=1,l=arguments.length,c=!1
for("boolean"==typeof a&&(c=a,a=arguments[s]||{},s++),"object"==typeof a||K.isFunction(a)||(a={}),s===l&&(a=this,s--);l>s;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],i=e[t],a!==i&&(c&&i&&(K.isPlainObject(i)||(o=K.isArray(i)))?(o?(o=!1,r=n&&K.isArray(n)?n:[]):r=n&&K.isPlainObject(n)?n:{},a[t]=K.extend(c,r,i)):void 0!==i&&(a[t]=i))
return a},K.extend({expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===K.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!K.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"===K.type(e)&&!e.nodeType&&!K.isWindow(e)&&!(e.constructor&&!Q.call(e.constructor.prototype,"isPrototypeOf"))},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?V[G.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval
e=K.trim(e),e&&(1===e.indexOf("use strict")?(t=X.createElement("script"),t.text=e,X.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(te,"ms-").replace(ne,ie)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,i){var o,r=0,a=e.length,s=n(e)
if(i){if(s)for(;a>r&&(o=t.apply(e[r],i),o!==!1);r++);else for(r in e)if(o=t.apply(e[r],i),o===!1)break}else if(s)for(;a>r&&(o=t.call(e[r],r,e[r]),o!==!1);r++);else for(r in e)if(o=t.call(e[r],r,e[r]),o===!1)break
return e},trim:function(e){return null==e?"":(e+"").replace(ee,"")},makeArray:function(e,t){var i=t||[]
return null!=e&&(n(Object(e))?K.merge(i,"string"==typeof e?[e]:e):U.call(i,e)),i},inArray:function(e,t,n){return null==t?-1:B.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,o=e.length;n>i;i++)e[o++]=t[i]
return e.length=o,e},grep:function(e,t,n){for(var i,o=[],r=0,a=e.length,s=!n;a>r;r++)i=!t(e[r],r),i!==s&&o.push(e[r])
return o},map:function(e,t,i){var o,r=0,a=e.length,s=n(e),l=[]
if(s)for(;a>r;r++)o=t(e[r],r,i),null!=o&&l.push(o)
else for(r in e)o=t(e[r],r,i),null!=o&&l.push(o)
return q.apply([],l)},guid:1,proxy:function(e,t){var n,i,o
return"string"==typeof t&&(n=e[t],t=e,e=n),K.isFunction(e)?(i=Y.call(arguments,2),o=function(){return e.apply(t||this,i.concat(Y.call(arguments)))},o.guid=e.guid=e.guid||K.guid++,o):void 0},now:Date.now,support:J}),K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){V["[object "+t+"]"]=t.toLowerCase()})
var oe=function(e){function t(e,t,n,i){var o,r,a,s,l,c,d,f,h,m
if((t?t.ownerDocument||t:H)!==M&&F(t),t=t||M,n=n||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return n
if(!i&&O){if(11!==s&&(o=ye.exec(e)))if(a=o[1]){if(9===s){if(r=t.getElementById(a),!r||!r.parentNode)return n
if(r.id===a)return n.push(r),n}else if(t.ownerDocument&&(r=t.ownerDocument.getElementById(a))&&j(t,r)&&r.id===a)return n.push(r),n}else{if(o[2])return Z.apply(n,t.getElementsByTagName(e)),n
if((a=o[3])&&x.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(a)),n}if(x.qsa&&(!L||!L.test(e))){if(f=d=R,h=t,m=1!==s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(c=T(e),(d=t.getAttribute("id"))?f=d.replace(we,"\\$&"):t.setAttribute("id",f),f="[id='"+f+"'] ",l=c.length;l--;)c[l]=f+p(c[l])
h=be.test(e)&&u(t.parentNode)||t,m=c.join(",")}if(m)try{return Z.apply(n,h.querySelectorAll(m)),n}catch(e){}finally{d||t.removeAttribute("id")}}}return k(e.replace(le,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>_.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[]
return e}function i(e){return e[R]=!0,e}function o(e){var t=M.createElement("div")
try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function r(e,t){for(var n=e.split("|"),i=e.length;i--;)_.attrHandle[n[i]]=t}function a(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||V)-(~e.sourceIndex||V)
if(i)return i
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase()
return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}function c(e){return i(function(t){return t=+t,i(function(n,i){for(var o,r=e([],n.length,t),a=r.length;a--;)n[o=r[a]]&&(n[o]=!(i[o]=n[o]))})})}function u(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function d(){}function p(e){for(var t=0,n=e.length,i="";n>t;t++)i+=e[t].value
return i}function f(e,t,n){var i=t.dir,o=n&&"parentNode"===i,r=z++
return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var s,l,c=[W,r]
if(a){for(;t=t[i];)if((1===t.nodeType||o)&&e(t,n,a))return!0}else for(;t=t[i];)if(1===t.nodeType||o){if(l=t[R]||(t[R]={}),(s=l[i])&&s[0]===W&&s[1]===r)return c[2]=s[2]
if(l[i]=c,c[2]=e(t,n,a))return!0}}}function h(e){return e.length>1?function(t,n,i){for(var o=e.length;o--;)if(!e[o](t,n,i))return!1
return!0}:e[0]}function m(e,n,i){for(var o=0,r=n.length;r>o;o++)t(e,n[o],i)
return i}function g(e,t,n,i,o){for(var r,a=[],s=0,l=e.length,c=null!=t;l>s;s++)(r=e[s])&&(!n||n(r,i,o))&&(a.push(r),c&&t.push(s))
return a}function v(e,t,n,o,r,a){return o&&!o[R]&&(o=v(o)),r&&!r[R]&&(r=v(r,a)),i(function(i,a,s,l){var c,u,d,p=[],f=[],h=a.length,v=i||m(t||"*",s.nodeType?[s]:s,[]),y=!e||!i&&t?v:g(v,p,e,s,l),b=n?r||(i?e:h||o)?[]:a:y
if(n&&n(y,b,s,l),o)for(c=g(b,f),o(c,[],s,l),u=c.length;u--;)(d=c[u])&&(b[f[u]]=!(y[f[u]]=d))
if(i){if(r||e){if(r){for(c=[],u=b.length;u--;)(d=b[u])&&c.push(y[u]=d)
r(null,b=[],c,l)}for(u=b.length;u--;)(d=b[u])&&(c=r?ee(i,d):p[u])>-1&&(i[c]=!(a[c]=d))}}else b=g(b===a?b.splice(h,b.length):b),r?r(null,a,b,l):Z.apply(a,b)})}function y(e){for(var t,n,i,o=e.length,r=_.relative[e[0].type],a=r||_.relative[" "],s=r?1:0,l=f(function(e){return e===t},a,!0),c=f(function(e){return ee(t,e)>-1},a,!0),u=[function(e,n,i){var o=!r&&(i||n!==E)||((t=n).nodeType?l(e,n,i):c(e,n,i))
return t=null,o}];o>s;s++)if(n=_.relative[e[s].type])u=[f(h(u),n)]
else{if(n=_.filter[e[s].type].apply(null,e[s].matches),n[R]){for(i=++s;o>i&&!_.relative[e[i].type];i++);return v(s>1&&h(u),s>1&&p(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(le,"$1"),n,i>s&&y(e.slice(s,i)),o>i&&y(e=e.slice(i)),o>i&&p(e))}u.push(n)}return h(u)}function b(e,n){var o=n.length>0,r=e.length>0,a=function(i,a,s,l,c){var u,d,p,f=0,h="0",m=i&&[],v=[],y=E,b=i||r&&_.find.TAG("*",c),w=W+=null==y?1:Math.random()||.1,x=b.length
for(c&&(E=a!==M&&a);h!==x&&null!=(u=b[h]);h++){if(r&&u){for(d=0;p=e[d++];)if(p(u,a,s)){l.push(u)
break}c&&(W=w)}o&&((u=!p&&u)&&f--,i&&m.push(u))}if(f+=h,o&&h!==f){for(d=0;p=n[d++];)p(m,v,a,s)
if(i){if(f>0)for(;h--;)m[h]||v[h]||(v[h]=J.call(l))
v=g(v)}Z.apply(l,v),c&&!i&&v.length>0&&f+n.length>1&&t.uniqueSort(l)}return c&&(W=w,E=y),m}
return o?i(a):a}var w,x,_,C,S,T,D,k,E,I,A,F,M,P,O,L,N,$,j,R="sizzle"+1*new Date,H=e.document,W=0,z=0,Y=n(),q=n(),U=n(),B=function(e,t){return e===t&&(A=!0),0},V=1<<31,G={}.hasOwnProperty,Q=[],J=Q.pop,X=Q.push,Z=Q.push,K=Q.slice,ee=function(e,t){for(var n=0,i=e.length;i>n;n++)if(e[n]===t)return n
return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",oe=ie.replace("w","w#"),re="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+oe+"))|)"+ne+"*\\]",ae=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+re+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),le=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ce=new RegExp("^"+ne+"*,"+ne+"*"),ue=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),de=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),pe=new RegExp(ae),fe=new RegExp("^"+oe+"$"),he={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie.replace("w","w*")+")"),ATTR:new RegExp("^"+re),PSEUDO:new RegExp("^"+ae),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},me=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,ve=/^[^{]+\{\s*\[native \w/,ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,be=/[+~]/,we=/'|\\/g,xe=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),_e=function(e,t,n){var i="0x"+t-65536
return i!==i||n?t:0>i?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},Ce=function(){F()}
try{Z.apply(Q=K.call(H.childNodes),H.childNodes),Q[H.childNodes.length].nodeType}catch(e){Z={apply:Q.length?function(e,t){X.apply(e,K.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}x=t.support={},S=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return!!t&&"HTML"!==t.nodeName},F=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:H
return i!==M&&9===i.nodeType&&i.documentElement?(M=i,P=i.documentElement,n=i.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Ce,!1):n.attachEvent&&n.attachEvent("onunload",Ce)),O=!S(i),x.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),x.getElementsByTagName=o(function(e){return e.appendChild(i.createComment("")),!e.getElementsByTagName("*").length}),x.getElementsByClassName=ve.test(i.getElementsByClassName),x.getById=o(function(e){return P.appendChild(e).id=R,!i.getElementsByName||!i.getElementsByName(R).length}),x.getById?(_.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&O){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}},_.filter.ID=function(e){var t=e.replace(xe,_e)
return function(e){return e.getAttribute("id")===t}}):(delete _.find.ID,_.filter.ID=function(e){var t=e.replace(xe,_e)
return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}}),_.find.TAG=x.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):x.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],o=0,r=t.getElementsByTagName(e)
if("*"===e){for(;n=r[o++];)1===n.nodeType&&i.push(n)
return i}return r},_.find.CLASS=x.getElementsByClassName&&function(e,t){return O?t.getElementsByClassName(e):void 0},N=[],L=[],(x.qsa=ve.test(i.querySelectorAll))&&(o(function(e){P.appendChild(e).innerHTML="<a id='"+R+"'></a><select id='"+R+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&L.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||L.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+R+"-]").length||L.push("~="),e.querySelectorAll(":checked").length||L.push(":checked"),e.querySelectorAll("a#"+R+"+*").length||L.push(".#.+[+~]")}),o(function(e){var t=i.createElement("input")
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&L.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||L.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),L.push(",.*:")})),(x.matchesSelector=ve.test($=P.matches||P.webkitMatchesSelector||P.mozMatchesSelector||P.oMatchesSelector||P.msMatchesSelector))&&o(function(e){x.disconnectedMatch=$.call(e,"div"),$.call(e,"[s!='']:x"),N.push("!=",ae)}),L=L.length&&new RegExp(L.join("|")),N=N.length&&new RegExp(N.join("|")),t=ve.test(P.compareDocumentPosition),j=t||ve.test(P.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode
return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},B=t?function(e,t){if(e===t)return A=!0,0
var n=!e.compareDocumentPosition-!t.compareDocumentPosition
return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!x.sortDetached&&t.compareDocumentPosition(e)===n?e===i||e.ownerDocument===H&&j(H,e)?-1:t===i||t.ownerDocument===H&&j(H,t)?1:I?ee(I,e)-ee(I,t):0:4&n?-1:1)}:function(e,t){if(e===t)return A=!0,0
var n,o=0,r=e.parentNode,s=t.parentNode,l=[e],c=[t]
if(!r||!s)return e===i?-1:t===i?1:r?-1:s?1:I?ee(I,e)-ee(I,t):0
if(r===s)return a(e,t)
for(n=e;n=n.parentNode;)l.unshift(n)
for(n=t;n=n.parentNode;)c.unshift(n)
for(;l[o]===c[o];)o++
return o?a(l[o],c[o]):l[o]===H?-1:c[o]===H?1:0},i):M},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==M&&F(e),n=n.replace(de,"='$1']"),!(!x.matchesSelector||!O||N&&N.test(n)||L&&L.test(n)))try{var i=$.call(e,n)
if(i||x.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return t(n,M,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==M&&F(e),j(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==M&&F(e)
var n=_.attrHandle[t.toLowerCase()],i=n&&G.call(_.attrHandle,t.toLowerCase())?n(e,t,!O):void 0
return void 0!==i?i:x.attributes||!O?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,o=0
if(A=!x.detectDuplicates,I=!x.sortStable&&e.slice(0),e.sort(B),A){for(;t=e[o++];)t===e[o]&&(i=n.push(o))
for(;i--;)e.splice(n[i],1)}return I=null,e},C=t.getText=function(e){var t,n="",i=0,o=e.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[i++];)n+=C(t)
return n},_=t.selectors={cacheLength:50,createPseudo:i,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xe,_e),e[3]=(e[3]||e[4]||e[5]||"").replace(xe,_e),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return he.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&pe.test(n)&&(t=T(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(xe,_e).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=Y[e+" "]
return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&Y(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,i){return function(o){var r=t.attr(o,e)
return null==r?"!="===n:!n||(r+="","="===n?r===i:"!="===n?r!==i:"^="===n?i&&0===r.indexOf(i):"*="===n?i&&r.indexOf(i)>-1:"$="===n?i&&r.slice(-i.length)===i:"~="===n?(" "+r.replace(se," ")+" ").indexOf(i)>-1:"|="===n&&(r===i||r.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,n,i,o){var r="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t
return 1===i&&0===o?function(e){return!!e.parentNode}:function(t,n,l){var c,u,d,p,f,h,m=r!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s
if(g){if(r){for(;m;){for(d=t;d=d[m];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1
h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&y){for(u=g[R]||(g[R]={}),c=u[e]||[],f=c[0]===W&&c[1],p=c[0]===W&&c[2],d=f&&g.childNodes[f];d=++f&&d&&d[m]||(p=f=0)||h.pop();)if(1===d.nodeType&&++p&&d===t){u[e]=[W,f,p]
break}}else if(y&&(c=(t[R]||(t[R]={}))[e])&&c[0]===W)p=c[1]
else for(;(d=++f&&d&&d[m]||(p=f=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++p||(y&&((d[R]||(d[R]={}))[e]=[W,p]),d!==t)););return p-=o,p===i||p%i===0&&p/i>=0}}},PSEUDO:function(e,n){var o,r=_.pseudos[e]||_.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e)
return r[R]?r(n):r.length>1?(o=[e,e,"",n],_.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,t){for(var i,o=r(e,n),a=o.length;a--;)i=ee(e,o[a]),e[i]=!(t[i]=o[a])}):function(e){return r(e,0,o)}):r}},pseudos:{not:i(function(e){var t=[],n=[],o=D(e.replace(le,"$1"))
return o[R]?i(function(e,t,n,i){for(var r,a=o(e,null,i,[]),s=e.length;s--;)(r=a[s])&&(e[s]=!(t[s]=r))}):function(e,i,r){return t[0]=e,o(t,null,r,n),t[0]=null,!n.pop()}}),has:i(function(e){return function(n){return t(e,n).length>0}}),contains:i(function(e){return e=e.replace(xe,_e),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:i(function(e){return fe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(xe,_e).toLowerCase(),function(t){var n
do if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")
while((t=t.parentNode)&&1===t.nodeType)
return!1}}),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===P},focus:function(e){return e===M.activeElement&&(!M.hasFocus||M.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!_.pseudos.empty(e)},header:function(e){return ge.test(e.nodeName)},input:function(e){return me.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n)
return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n)
return e}),lt:c(function(e,t,n){for(var i=0>n?n+t:n;--i>=0;)e.push(i)
return e}),gt:c(function(e,t,n){for(var i=0>n?n+t:n;++i<t;)e.push(i)
return e})}},_.pseudos.nth=_.pseudos.eq
for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})_.pseudos[w]=s(w)
for(w in{submit:!0,reset:!0})_.pseudos[w]=l(w)
return d.prototype=_.filters=_.pseudos,_.setFilters=new d,T=t.tokenize=function(e,n){var i,o,r,a,s,l,c,u=q[e+" "]
if(u)return n?0:u.slice(0)
for(s=e,l=[],c=_.preFilter;s;){(!i||(o=ce.exec(s)))&&(o&&(s=s.slice(o[0].length)||s),l.push(r=[])),i=!1,(o=ue.exec(s))&&(i=o.shift(),r.push({value:i,type:o[0].replace(le," ")}),s=s.slice(i.length))
for(a in _.filter)!(o=he[a].exec(s))||c[a]&&!(o=c[a](o))||(i=o.shift(),r.push({value:i,type:a,matches:o}),s=s.slice(i.length))
if(!i)break}return n?s.length:s?t.error(e):q(e,l).slice(0)},D=t.compile=function(e,t){var n,i=[],o=[],r=U[e+" "]
if(!r){for(t||(t=T(e)),n=t.length;n--;)r=y(t[n]),r[R]?i.push(r):o.push(r)
r=U(e,b(o,i)),r.selector=e}return r},k=t.select=function(e,t,n,i){var o,r,a,s,l,c="function"==typeof e&&e,d=!i&&T(e=c.selector||e)
if(n=n||[],1===d.length){if(r=d[0]=d[0].slice(0),r.length>2&&"ID"===(a=r[0]).type&&x.getById&&9===t.nodeType&&O&&_.relative[r[1].type]){if(t=(_.find.ID(a.matches[0].replace(xe,_e),t)||[])[0],!t)return n
c&&(t=t.parentNode),e=e.slice(r.shift().value.length)}for(o=he.needsContext.test(e)?0:r.length;o--&&(a=r[o],!_.relative[s=a.type]);)if((l=_.find[s])&&(i=l(a.matches[0].replace(xe,_e),be.test(r[0].type)&&u(t.parentNode)||t))){if(r.splice(o,1),e=i.length&&p(r),!e)return Z.apply(n,i),n
break}}return(c||D(e,d))(i,t,!O,n,be.test(e)&&u(t.parentNode)||t),n},x.sortStable=R.split("").sort(B).join("")===R,x.detectDuplicates=!!A,F(),x.sortDetached=o(function(e){return 1&e.compareDocumentPosition(M.createElement("div"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||r("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),x.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||r("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||r(te,function(e,t,n){var i
return n?void 0:e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),t}(e)
K.find=oe,K.expr=oe.selectors,K.expr[":"]=K.expr.pseudos,K.unique=oe.uniqueSort,K.text=oe.getText,K.isXMLDoc=oe.isXML,K.contains=oe.contains
var re=K.expr.match.needsContext,ae=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,se=/^.[^:#\[\.,]*$/
K.filter=function(e,t,n){var i=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?K.find.matchesSelector(i,e)?[i]:[]:K.find.matches(e,K.grep(t,function(e){return 1===e.nodeType}))},K.fn.extend({find:function(e){var t,n=this.length,i=[],o=this
if("string"!=typeof e)return this.pushStack(K(e).filter(function(){for(t=0;n>t;t++)if(K.contains(o[t],this))return!0}))
for(t=0;n>t;t++)K.find(e,o[t],i)
return i=this.pushStack(n>1?K.unique(i):i),i.selector=this.selector?this.selector+" "+e:e,i},filter:function(e){return this.pushStack(i(this,e||[],!1))},not:function(e){return this.pushStack(i(this,e||[],!0))},is:function(e){return!!i(this,"string"==typeof e&&re.test(e)?K(e):e||[],!1).length}})
var le,ce=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ue=K.fn.init=function(e,t){var n,i
if(!e)return this
if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:ce.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||le).find(e):this.constructor(t).find(e)
if(n[1]){if(t=t instanceof K?t[0]:t,K.merge(this,K.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:X,!0)),ae.test(n[1])&&K.isPlainObject(t))for(n in t)K.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n])
return this}return i=X.getElementById(n[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=X,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):K.isFunction(e)?"undefined"!=typeof le.ready?le.ready(e):e(K):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),K.makeArray(e,this))}
ue.prototype=K.fn,le=K(X)
var de=/^(?:parents|prev(?:Until|All))/,pe={children:!0,contents:!0,next:!0,prev:!0}
K.extend({dir:function(e,t,n){for(var i=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&K(e).is(n))break
i.push(e)}return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n}}),K.fn.extend({has:function(e){var t=K(e,this),n=t.length
return this.filter(function(){for(var e=0;n>e;e++)if(K.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,i=0,o=this.length,r=[],a=re.test(e)||"string"!=typeof e?K(e,t||this.context):0;o>i;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&K.find.matchesSelector(n,e))){r.push(n)
break}return this.pushStack(r.length>1?K.unique(r):r)},index:function(e){return e?"string"==typeof e?B.call(K(e),this[0]):B.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(K.unique(K.merge(this.get(),K(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),K.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return K.dir(e,"parentNode")},parentsUntil:function(e,t,n){return K.dir(e,"parentNode",n)},next:function(e){return o(e,"nextSibling")},prev:function(e){return o(e,"previousSibling")},nextAll:function(e){return K.dir(e,"nextSibling")},prevAll:function(e){return K.dir(e,"previousSibling")},nextUntil:function(e,t,n){return K.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return K.dir(e,"previousSibling",n)},siblings:function(e){return K.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return K.sibling(e.firstChild)},contents:function(e){return e.contentDocument||K.merge([],e.childNodes)}},function(e,t){K.fn[e]=function(n,i){var o=K.map(this,t,n)
return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=K.filter(i,o)),this.length>1&&(pe[e]||K.unique(o),de.test(e)&&o.reverse()),this.pushStack(o)}})
var fe=/\S+/g,he={}
K.Callbacks=function(e){e="string"==typeof e?he[e]||r(e):K.extend({},e)
var t,n,i,o,a,s,l=[],c=!e.once&&[],u=function(r){for(t=e.memory&&r,n=!0,s=o||0,o=0,a=l.length,i=!0;l&&a>s;s++)if(l[s].apply(r[0],r[1])===!1&&e.stopOnFalse){t=!1
break}i=!1,l&&(c?c.length&&u(c.shift()):t?l=[]:d.disable())},d={add:function(){if(l){var n=l.length
!function t(n){K.each(n,function(n,i){var o=K.type(i)
"function"===o?e.unique&&d.has(i)||l.push(i):i&&i.length&&"string"!==o&&t(i)})}(arguments),i?a=l.length:t&&(o=n,u(t))}return this},remove:function(){return l&&K.each(arguments,function(e,t){for(var n;(n=K.inArray(t,l,n))>-1;)l.splice(n,1),i&&(a>=n&&a--,s>=n&&s--)}),this},has:function(e){return e?K.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],a=0,this},disable:function(){return l=c=t=void 0,this},disabled:function(){return!l},lock:function(){return c=void 0,t||d.disable(),this},locked:function(){return!c},fireWith:function(e,t){return!l||n&&!c||(t=t||[],t=[e,t.slice?t.slice():t],i?c.push(t):u(t)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!n}}
return d},K.extend({Deferred:function(e){var t=[["resolve","done",K.Callbacks("once memory"),"resolved"],["reject","fail",K.Callbacks("once memory"),"rejected"],["notify","progress",K.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var e=arguments
return K.Deferred(function(n){K.each(t,function(t,r){var a=K.isFunction(e[t])&&e[t]
o[r[1]](function(){var e=a&&a.apply(this,arguments)
e&&K.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[r[0]+"With"](this===i?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?K.extend(e,i):i}},o={}
return i.pipe=i.then,K.each(t,function(e,r){var a=r[2],s=r[3]
i[r[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),o[r[0]]=function(){return o[r[0]+"With"](this===o?i:this,arguments),this},o[r[0]+"With"]=a.fireWith}),i.promise(o),e&&e.call(o,o),o},when:function(e){var t,n,i,o=0,r=Y.call(arguments),a=r.length,s=1!==a||e&&K.isFunction(e.promise)?a:0,l=1===s?e:K.Deferred(),c=function(e,n,i){return function(o){n[e]=this,i[e]=arguments.length>1?Y.call(arguments):o,i===t?l.notifyWith(n,i):--s||l.resolveWith(n,i)}}
if(a>1)for(t=new Array(a),n=new Array(a),i=new Array(a);a>o;o++)r[o]&&K.isFunction(r[o].promise)?r[o].promise().done(c(o,i,r)).fail(l.reject).progress(c(o,n,t)):--s
return s||l.resolveWith(i,r),l.promise()}})
var me
K.fn.ready=function(e){return K.ready.promise().done(e),this},K.extend({isReady:!1,readyWait:1,holdReady:function(e){e?K.readyWait++:K.ready(!0)},ready:function(e){(e===!0?--K.readyWait:K.isReady)||(K.isReady=!0,e!==!0&&--K.readyWait>0||(me.resolveWith(X,[K]),K.fn.triggerHandler&&(K(X).triggerHandler("ready"),K(X).off("ready"))))}}),K.ready.promise=function(t){return me||(me=K.Deferred(),"complete"===X.readyState?setTimeout(K.ready):(X.addEventListener("DOMContentLoaded",a,!1),e.addEventListener("load",a,!1))),me.promise(t)},K.ready.promise()
var ge=K.access=function(e,t,n,i,o,r,a){var s=0,l=e.length,c=null==n
if("object"===K.type(n)){o=!0
for(s in n)K.access(e,t,s,n[s],!0,r,a)}else if(void 0!==i&&(o=!0,K.isFunction(i)||(a=!0),c&&(a?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(K(e),n)})),t))for(;l>s;s++)t(e[s],n,a?i:i.call(e[s],s,t(e[s],n)))
return o?e:c?t.call(e):l?t(e[0],n):r}
K.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},s.uid=1,s.accepts=K.acceptData,s.prototype={key:function(e){if(!s.accepts(e))return 0
var t={},n=e[this.expando]
if(!n){n=s.uid++
try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(i){t[this.expando]=n,K.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var i,o=this.key(e),r=this.cache[o]
if("string"==typeof t)r[t]=n
else if(K.isEmptyObject(r))K.extend(this.cache[o],t)
else for(i in t)r[i]=t[i]
return r},get:function(e,t){var n=this.cache[this.key(e)]
return void 0===t?n:n[t]},access:function(e,t,n){var i
return void 0===t||t&&"string"==typeof t&&void 0===n?(i=this.get(e,t),void 0!==i?i:this.get(e,K.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i,o,r=this.key(e),a=this.cache[r]
if(void 0===t)this.cache[r]={}
else{K.isArray(t)?i=t.concat(t.map(K.camelCase)):(o=K.camelCase(t),t in a?i=[t,o]:(i=o,i=i in a?[i]:i.match(fe)||[])),n=i.length
for(;n--;)delete a[i[n]]}},hasData:function(e){return!K.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}}
var ve=new s,ye=new s,be=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,we=/([A-Z])/g
K.extend({hasData:function(e){return ye.hasData(e)||ve.hasData(e)},data:function(e,t,n){return ye.access(e,t,n)},removeData:function(e,t){ye.remove(e,t)},_data:function(e,t,n){return ve.access(e,t,n)},_removeData:function(e,t){ve.remove(e,t)}}),K.fn.extend({data:function(e,t){var n,i,o,r=this[0],a=r&&r.attributes
if(void 0===e){if(this.length&&(o=ye.get(r),1===r.nodeType&&!ve.get(r,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(i=a[n].name,0===i.indexOf("data-")&&(i=K.camelCase(i.slice(5)),l(r,i,o[i])))
ve.set(r,"hasDataAttrs",!0)}return o}return"object"==typeof e?this.each(function(){ye.set(this,e)}):ge(this,function(t){var n,i=K.camelCase(e)
if(r&&void 0===t){if(n=ye.get(r,e),void 0!==n)return n
if(n=ye.get(r,i),void 0!==n)return n
if(n=l(r,i,void 0),void 0!==n)return n}else this.each(function(){var n=ye.get(this,i)
ye.set(this,i,t),-1!==e.indexOf("-")&&void 0!==n&&ye.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){ye.remove(this,e)})}}),K.extend({queue:function(e,t,n){var i
return e?(t=(t||"fx")+"queue",i=ve.get(e,t),n&&(!i||K.isArray(n)?i=ve.access(e,t,K.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(e,t){t=t||"fx"
var n=K.queue(e,t),i=n.length,o=n.shift(),r=K._queueHooks(e,t),a=function(){K.dequeue(e,t)}
"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===t&&n.unshift("inprogress"),delete r.stop,o.call(e,a,r)),!i&&r&&r.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return ve.get(e,n)||ve.access(e,n,{empty:K.Callbacks("once memory").add(function(){ve.remove(e,[t+"queue",n])})})}}),K.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?K.queue(this[0],e):void 0===t?this:this.each(function(){var n=K.queue(this,e,t)
K._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&K.dequeue(this,e)})},dequeue:function(e){return this.each(function(){K.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,o=K.Deferred(),r=this,a=this.length,s=function(){--i||o.resolveWith(r,[r])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=ve.get(r[a],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(s))
return s(),o.promise(t)}})
var xe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_e=["Top","Right","Bottom","Left"],Ce=function(e,t){return e=t||e,"none"===K.css(e,"display")||!K.contains(e.ownerDocument,e)},Se=/^(?:checkbox|radio)$/i
!function(){var e=X.createDocumentFragment(),t=e.appendChild(X.createElement("div")),n=X.createElement("input")
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),J.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",J.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}()
var Te="undefined"
J.focusinBubbles="onfocusin"in e
var De=/^key/,ke=/^(?:mouse|pointer|contextmenu)|click/,Ee=/^(?:focusinfocus|focusoutblur)$/,Ie=/^([^.]*)(?:\.(.+)|)$/
K.event={global:{},add:function(e,t,n,i,o){var r,a,s,l,c,u,d,p,f,h,m,g=ve.get(e)
if(g)for(n.handler&&(r=n,n=r.handler,o=r.selector),n.guid||(n.guid=K.guid++),(l=g.events)||(l=g.events={}),(a=g.handle)||(a=g.handle=function(t){return typeof K!==Te&&K.event.triggered!==t.type?K.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(fe)||[""],c=t.length;c--;)s=Ie.exec(t[c])||[],f=m=s[1],h=(s[2]||"").split(".").sort(),f&&(d=K.event.special[f]||{},f=(o?d.delegateType:d.bindType)||f,d=K.event.special[f]||{},u=K.extend({type:f,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&K.expr.match.needsContext.test(o),namespace:h.join(".")},r),(p=l[f])||(p=l[f]=[],p.delegateCount=0,d.setup&&d.setup.call(e,i,h,a)!==!1||e.addEventListener&&e.addEventListener(f,a,!1)),d.add&&(d.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),o?p.splice(p.delegateCount++,0,u):p.push(u),K.event.global[f]=!0)},remove:function(e,t,n,i,o){var r,a,s,l,c,u,d,p,f,h,m,g=ve.hasData(e)&&ve.get(e)
if(g&&(l=g.events)){for(t=(t||"").match(fe)||[""],c=t.length;c--;)if(s=Ie.exec(t[c])||[],f=m=s[1],h=(s[2]||"").split(".").sort(),f){for(d=K.event.special[f]||{},f=(i?d.delegateType:d.bindType)||f,p=l[f]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=r=p.length;r--;)u=p[r],!o&&m!==u.origType||n&&n.guid!==u.guid||s&&!s.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(p.splice(r,1),u.selector&&p.delegateCount--,d.remove&&d.remove.call(e,u))
a&&!p.length&&(d.teardown&&d.teardown.call(e,h,g.handle)!==!1||K.removeEvent(e,f,g.handle),delete l[f])}else for(f in l)K.event.remove(e,f+t[c],n,i,!0)
K.isEmptyObject(l)&&(delete g.handle,ve.remove(e,"events"))}},trigger:function(t,n,i,o){var r,a,s,l,c,u,d,p=[i||X],f=Q.call(t,"type")?t.type:t,h=Q.call(t,"namespace")?t.namespace.split("."):[]
if(a=s=i=i||X,3!==i.nodeType&&8!==i.nodeType&&!Ee.test(f+K.event.triggered)&&(f.indexOf(".")>=0&&(h=f.split("."),f=h.shift(),h.sort()),c=f.indexOf(":")<0&&"on"+f,t=t[K.expando]?t:new K.Event(f,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:K.makeArray(n,[t]),d=K.event.special[f]||{},o||!d.trigger||d.trigger.apply(i,n)!==!1)){if(!o&&!d.noBubble&&!K.isWindow(i)){for(l=d.delegateType||f,Ee.test(l+f)||(a=a.parentNode);a;a=a.parentNode)p.push(a),s=a
s===(i.ownerDocument||X)&&p.push(s.defaultView||s.parentWindow||e)}for(r=0;(a=p[r++])&&!t.isPropagationStopped();)t.type=r>1?l:d.bindType||f,u=(ve.get(a,"events")||{})[t.type]&&ve.get(a,"handle"),u&&u.apply(a,n),u=c&&a[c],u&&u.apply&&K.acceptData(a)&&(t.result=u.apply(a,n),t.result===!1&&t.preventDefault())
return t.type=f,o||t.isDefaultPrevented()||d._default&&d._default.apply(p.pop(),n)!==!1||!K.acceptData(i)||c&&K.isFunction(i[f])&&!K.isWindow(i)&&(s=i[c],s&&(i[c]=null),K.event.triggered=f,i[f](),K.event.triggered=void 0,s&&(i[c]=s)),t.result}},dispatch:function(e){e=K.event.fix(e)
var t,n,i,o,r,a=[],s=Y.call(arguments),l=(ve.get(this,"events")||{})[e.type]||[],c=K.event.special[e.type]||{}
if(s[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(a=K.event.handlers.call(this,e,l),t=0;(o=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(r.namespace))&&(e.handleObj=r,e.data=r.data,i=((K.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,s),void 0!==i&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()))
return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,o,r,a=[],s=t.delegateCount,l=e.target
if(s&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!==this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==e.type){for(i=[],n=0;s>n;n++)r=t[n],o=r.selector+" ",void 0===i[o]&&(i[o]=r.needsContext?K(o,this).index(l)>=0:K.find(o,this,null,[l]).length),i[o]&&i.push(r)
i.length&&a.push({elem:l,handlers:i})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,o,r=t.button
return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||X,i=n.documentElement,o=n.body,e.pageX=t.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),e.which||void 0===r||(e.which=1&r?1:2&r?3:4&r?2:0),e}},fix:function(e){if(e[K.expando])return e
var t,n,i,o=e.type,r=e,a=this.fixHooks[o]
for(a||(this.fixHooks[o]=a=ke.test(o)?this.mouseHooks:De.test(o)?this.keyHooks:{}),i=a.props?this.props.concat(a.props):this.props,e=new K.Event(r),t=i.length;t--;)n=i[t],e[n]=r[n]
return e.target||(e.target=X),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,r):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==d()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===d()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&K.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return K.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,i){var o=K.extend(new K.Event,n,{type:e,isSimulated:!0,originalEvent:{}})
i?K.event.trigger(o,null,t):K.event.dispatch.call(t,o),o.isDefaultPrevented()&&n.preventDefault()}},K.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},K.Event=function(e,t){return this instanceof K.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?c:u):this.type=e,t&&K.extend(this,t),this.timeStamp=e&&e.timeStamp||K.now(),void(this[K.expando]=!0)):new K.Event(e,t)},K.Event.prototype={isDefaultPrevented:u,isPropagationStopped:u,isImmediatePropagationStopped:u,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=c,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=c,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=c,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},K.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){K.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,o=e.relatedTarget,r=e.handleObj
return(!o||o!==i&&!K.contains(i,o))&&(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}}),J.focusinBubbles||K.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){K.event.simulate(t,e.target,K.event.fix(e),!0)}
K.event.special[t]={setup:function(){var i=this.ownerDocument||this,o=ve.access(i,t)
o||i.addEventListener(e,n,!0),ve.access(i,t,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=ve.access(i,t)-1
o?ve.access(i,t,o):(i.removeEventListener(e,n,!0),ve.remove(i,t))}}}),K.fn.extend({on:function(e,t,n,i,o){var r,a
if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0)
for(a in e)this.on(a,t,n,e[a],o)
return this}if(null==n&&null==i?(i=t,n=t=void 0):null==i&&("string"==typeof t?(i=n,n=void 0):(i=n,n=t,t=void 0)),i===!1)i=u
else if(!i)return this
return 1===o&&(r=i,i=function(e){return K().off(e),r.apply(this,arguments)},i.guid=r.guid||(r.guid=K.guid++)),this.each(function(){K.event.add(this,e,i,n,t)})},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(e,t,n){var i,o
if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,K(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this
if("object"==typeof e){for(o in e)this.off(o,t,e[o])
return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=u),this.each(function(){K.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){K.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0]
return n?K.event.trigger(e,t,n,!0):void 0}})
var Ae=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Fe=/<([\w:]+)/,Me=/<|&#?\w+;/,Pe=/<(?:script|style|link)/i,Oe=/checked\s*(?:[^=]|=\s*.checked.)/i,Le=/^$|\/(?:java|ecma)script/i,Ne=/^true\/(.*)/,$e=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,je={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
je.optgroup=je.option,je.tbody=je.tfoot=je.colgroup=je.caption=je.thead,je.th=je.td,K.extend({clone:function(e,t,n){var i,o,r,a,s=e.cloneNode(!0),l=K.contains(e.ownerDocument,e)
if(!(J.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||K.isXMLDoc(e)))for(a=v(s),r=v(e),i=0,o=r.length;o>i;i++)y(r[i],a[i])
if(t)if(n)for(r=r||v(e),a=a||v(s),i=0,o=r.length;o>i;i++)g(r[i],a[i])
else g(e,s)
return a=v(s,"script"),a.length>0&&m(a,!l&&v(e,"script")),s},buildFragment:function(e,t,n,i){for(var o,r,a,s,l,c,u=t.createDocumentFragment(),d=[],p=0,f=e.length;f>p;p++)if(o=e[p],o||0===o)if("object"===K.type(o))K.merge(d,o.nodeType?[o]:o)
else if(Me.test(o)){for(r=r||u.appendChild(t.createElement("div")),a=(Fe.exec(o)||["",""])[1].toLowerCase(),s=je[a]||je._default,r.innerHTML=s[1]+o.replace(Ae,"<$1></$2>")+s[2],c=s[0];c--;)r=r.lastChild
K.merge(d,r.childNodes),r=u.firstChild,r.textContent=""}else d.push(t.createTextNode(o))
for(u.textContent="",p=0;o=d[p++];)if((!i||-1===K.inArray(o,i))&&(l=K.contains(o.ownerDocument,o),r=v(u.appendChild(o),"script"),l&&m(r),n))for(c=0;o=r[c++];)Le.test(o.type||"")&&n.push(o)
return u},cleanData:function(e){for(var t,n,i,o,r=K.event.special,a=0;void 0!==(n=e[a]);a++){if(K.acceptData(n)&&(o=n[ve.expando],o&&(t=ve.cache[o]))){if(t.events)for(i in t.events)r[i]?K.event.remove(n,i):K.removeEvent(n,i,t.handle)
ve.cache[o]&&delete ve.cache[o]}delete ye.cache[n[ye.expando]]}}}),K.fn.extend({text:function(e){return ge(this,function(e){return void 0===e?K.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e)
t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e)
t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,i=e?K.filter(e,this):this,o=0;null!=(n=i[o]);o++)t||1!==n.nodeType||K.cleanData(v(n)),n.parentNode&&(t&&K.contains(n.ownerDocument,n)&&m(v(n,"script")),n.parentNode.removeChild(n))
return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(K.cleanData(v(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return K.clone(this,e,t)})},html:function(e){return ge(this,function(e){var t=this[0]||{},n=0,i=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!Pe.test(e)&&!je[(Fe.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Ae,"<$1></$2>")
try{for(;i>n;n++)t=this[n]||{},1===t.nodeType&&(K.cleanData(v(t,!1)),t.innerHTML=e)
t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0]
return this.domManip(arguments,function(t){e=this.parentNode,K.cleanData(v(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=q.apply([],e)
var n,i,o,r,a,s,l=0,c=this.length,u=this,d=c-1,p=e[0],m=K.isFunction(p)
if(m||c>1&&"string"==typeof p&&!J.checkClone&&Oe.test(p))return this.each(function(n){var i=u.eq(n)
m&&(e[0]=p.call(this,n,i.html())),i.domManip(e,t)})
if(c&&(n=K.buildFragment(e,this[0].ownerDocument,!1,this),i=n.firstChild,1===n.childNodes.length&&(n=i),i)){for(o=K.map(v(n,"script"),f),r=o.length;c>l;l++)a=n,l!==d&&(a=K.clone(a,!0,!0),r&&K.merge(o,v(a,"script"))),t.call(this[l],a,l)
if(r)for(s=o[o.length-1].ownerDocument,K.map(o,h),l=0;r>l;l++)a=o[l],Le.test(a.type||"")&&!ve.access(a,"globalEval")&&K.contains(s,a)&&(a.src?K._evalUrl&&K._evalUrl(a.src):K.globalEval(a.textContent.replace($e,"")))}return this}}),K.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){K.fn[e]=function(e){for(var n,i=[],o=K(e),r=o.length-1,a=0;r>=a;a++)n=a===r?this:this.clone(!0),K(o[a])[t](n),U.apply(i,n.get())
return this.pushStack(i)}})
var Re,He={},We=/^margin/,ze=new RegExp("^("+xe+")(?!px)[a-z%]+$","i"),Ye=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)}
!function(){function t(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",a.innerHTML="",o.appendChild(r)
var t=e.getComputedStyle(a,null)
n="1%"!==t.top,i="4px"===t.width,o.removeChild(r)}var n,i,o=X.documentElement,r=X.createElement("div"),a=X.createElement("div")
a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",J.clearCloneStyle="content-box"===a.style.backgroundClip,r.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",r.appendChild(a),e.getComputedStyle&&K.extend(J,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==i&&t(),i},reliableMarginRight:function(){var t,n=a.appendChild(X.createElement("div"))
return n.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",a.style.width="1px",o.appendChild(r),t=!parseFloat(e.getComputedStyle(n,null).marginRight),o.removeChild(r),a.removeChild(n),t}}))}(),K.swap=function(e,t,n,i){var o,r,a={}
for(r in t)a[r]=e.style[r],e.style[r]=t[r]
o=n.apply(e,i||[])
for(r in t)e.style[r]=a[r]
return o}
var qe=/^(none|table(?!-c[ea]).+)/,Ue=new RegExp("^("+xe+")(.*)$","i"),Be=new RegExp("^([+-])=("+xe+")","i"),Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"},Qe=["Webkit","O","Moz","ms"]
K.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=x(e,"opacity")
return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,r,a,s=K.camelCase(t),l=e.style
return t=K.cssProps[s]||(K.cssProps[s]=C(l,s)),a=K.cssHooks[t]||K.cssHooks[s],void 0===n?a&&"get"in a&&void 0!==(o=a.get(e,!1,i))?o:l[t]:(r=typeof n,"string"===r&&(o=Be.exec(n))&&(n=(o[1]+1)*o[2]+parseFloat(K.css(e,t)),r="number"),void(null!=n&&n===n&&("number"!==r||K.cssNumber[s]||(n+="px"),J.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,i))||(l[t]=n))))}},css:function(e,t,n,i){var o,r,a,s=K.camelCase(t)
return t=K.cssProps[s]||(K.cssProps[s]=C(e.style,s)),a=K.cssHooks[t]||K.cssHooks[s],a&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=x(e,t,i)),"normal"===o&&t in Ge&&(o=Ge[t]),""===n||n?(r=parseFloat(o),n===!0||K.isNumeric(r)?r||0:o):o}}),K.each(["height","width"],function(e,t){K.cssHooks[t]={get:function(e,n,i){return n?qe.test(K.css(e,"display"))&&0===e.offsetWidth?K.swap(e,Ve,function(){return D(e,t,i)}):D(e,t,i):void 0},set:function(e,n,i){var o=i&&Ye(e)
return S(e,n,i?T(e,t,i,"border-box"===K.css(e,"boxSizing",!1,o),o):0)}}}),K.cssHooks.marginRight=_(J.reliableMarginRight,function(e,t){return t?K.swap(e,{display:"inline-block"},x,[e,"marginRight"]):void 0}),K.each({margin:"",padding:"",border:"Width"},function(e,t){K.cssHooks[e+t]={expand:function(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];4>i;i++)o[e+_e[i]+t]=r[i]||r[i-2]||r[0]
return o}},We.test(e)||(K.cssHooks[e+t].set=S)}),K.fn.extend({css:function(e,t){return ge(this,function(e,t,n){var i,o,r={},a=0
if(K.isArray(t)){for(i=Ye(e),o=t.length;o>a;a++)r[t[a]]=K.css(e,t[a],!1,i)
return r}return void 0!==n?K.style(e,t,n):K.css(e,t)},e,t,arguments.length>1)},show:function(){return k(this,!0)},hide:function(){return k(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Ce(this)?K(this).show():K(this).hide()})}}),K.Tween=E,E.prototype={constructor:E,init:function(e,t,n,i,o,r){this.elem=e,this.prop=n,this.easing=o||"swing",this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=r||(K.cssNumber[n]?"":"px")},cur:function(){var e=E.propHooks[this.prop]
return e&&e.get?e.get(this):E.propHooks._default.get(this)},run:function(e){var t,n=E.propHooks[this.prop]
return this.options.duration?this.pos=t=K.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):E.propHooks._default.set(this),this}},E.prototype.init.prototype=E.prototype,E.propHooks={_default:{get:function(e){var t
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=K.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){K.fx.step[e.prop]?K.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[K.cssProps[e.prop]]||K.cssHooks[e.prop])?K.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},E.propHooks.scrollTop=E.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},K.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},K.fx=E.prototype.init,K.fx.step={}
var Je,Xe,Ze=/^(?:toggle|show|hide)$/,Ke=new RegExp("^(?:([+-])=|)("+xe+")([a-z%]*)$","i"),et=/queueHooks$/,tt=[M],nt={"*":[function(e,t){var n=this.createTween(e,t),i=n.cur(),o=Ke.exec(t),r=o&&o[3]||(K.cssNumber[e]?"":"px"),a=(K.cssNumber[e]||"px"!==r&&+i)&&Ke.exec(K.css(n.elem,e)),s=1,l=20
if(a&&a[3]!==r){r=r||a[3],o=o||[],a=+i||1
do s=s||".5",a/=s,K.style(n.elem,e,a+r)
while(s!==(s=n.cur()/i)&&1!==s&&--l)}return o&&(a=n.start=+a||+i||0,n.unit=r,n.end=o[1]?a+(o[1]+1)*o[2]:+o[2]),n}]}
K.Animation=K.extend(O,{tweener:function(e,t){K.isFunction(e)?(t=e,e=["*"]):e=e.split(" ")
for(var n,i=0,o=e.length;o>i;i++)n=e[i],nt[n]=nt[n]||[],nt[n].unshift(t)},prefilter:function(e,t){t?tt.unshift(e):tt.push(e)}}),K.speed=function(e,t,n){var i=e&&"object"==typeof e?K.extend({},e):{complete:n||!n&&t||K.isFunction(e)&&e,duration:e,easing:n&&t||t&&!K.isFunction(t)&&t}
return i.duration=K.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in K.fx.speeds?K.fx.speeds[i.duration]:K.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){K.isFunction(i.old)&&i.old.call(this),i.queue&&K.dequeue(this,i.queue)},i},K.fn.extend({fadeTo:function(e,t,n,i){return this.filter(Ce).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var o=K.isEmptyObject(e),r=K.speed(t,n,i),a=function(){var t=O(this,K.extend({},e),r);(o||ve.get(this,"finish"))&&t.stop(!0)}
return a.finish=a,o||r.queue===!1?this.each(a):this.queue(r.queue,a)},stop:function(e,t,n){var i=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",r=K.timers,a=ve.get(this)
if(o)a[o]&&a[o].stop&&i(a[o])
else for(o in a)a[o]&&a[o].stop&&et.test(o)&&i(a[o])
for(o=r.length;o--;)r[o].elem!==this||null!=e&&r[o].queue!==e||(r[o].anim.stop(n),t=!1,r.splice(o,1));(t||!n)&&K.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=ve.get(this),i=n[e+"queue"],o=n[e+"queueHooks"],r=K.timers,a=i?i.length:0
for(n.finish=!0,K.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=r.length;t--;)r[t].elem===this&&r[t].queue===e&&(r[t].anim.stop(!0),r.splice(t,1))
for(t=0;a>t;t++)i[t]&&i[t].finish&&i[t].finish.call(this)
delete n.finish})}}),K.each(["toggle","show","hide"],function(e,t){var n=K.fn[t]
K.fn[t]=function(e,i,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(A(t,!0),e,i,o)}}),K.each({slideDown:A("show"),slideUp:A("hide"),slideToggle:A("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){K.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),K.timers=[],K.fx.tick=function(){var e,t=0,n=K.timers
for(Je=K.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1)
n.length||K.fx.stop(),Je=void 0},K.fx.timer=function(e){K.timers.push(e),e()?K.fx.start():K.timers.pop()},K.fx.interval=13,K.fx.start=function(){Xe||(Xe=setInterval(K.fx.tick,K.fx.interval))},K.fx.stop=function(){clearInterval(Xe),Xe=null},K.fx.speeds={slow:600,fast:200,_default:400},K.fn.delay=function(e,t){return e=K.fx?K.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var i=setTimeout(t,e)
n.stop=function(){clearTimeout(i)}})},function(){var e=X.createElement("input"),t=X.createElement("select"),n=t.appendChild(X.createElement("option"))
e.type="checkbox",J.checkOn=""!==e.value,J.optSelected=n.selected,t.disabled=!0,J.optDisabled=!n.disabled,e=X.createElement("input"),e.value="t",e.type="radio",J.radioValue="t"===e.value}()
var it,ot,rt=K.expr.attrHandle
K.fn.extend({attr:function(e,t){return ge(this,K.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){K.removeAttr(this,e)})}}),K.extend({attr:function(e,t,n){var i,o,r=e.nodeType
if(e&&3!==r&&8!==r&&2!==r)return typeof e.getAttribute===Te?K.prop(e,t,n):(1===r&&K.isXMLDoc(e)||(t=t.toLowerCase(),i=K.attrHooks[t]||(K.expr.match.bool.test(t)?ot:it)),void 0===n?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=K.find.attr(e,t),null==o?void 0:o):null!==n?i&&"set"in i&&void 0!==(o=i.set(e,n,t))?o:(e.setAttribute(t,n+""),n):void K.removeAttr(e,t))},removeAttr:function(e,t){var n,i,o=0,r=t&&t.match(fe)
if(r&&1===e.nodeType)for(;n=r[o++];)i=K.propFix[n]||n,K.expr.match.bool.test(n)&&(e[i]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!J.radioValue&&"radio"===t&&K.nodeName(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),ot={set:function(e,t,n){return t===!1?K.removeAttr(e,n):e.setAttribute(n,n),n}},K.each(K.expr.match.bool.source.match(/\w+/g),function(e,t){var n=rt[t]||K.find.attr
rt[t]=function(e,t,i){var o,r
return i||(r=rt[t],rt[t]=o,o=null!=n(e,t,i)?t.toLowerCase():null,rt[t]=r),o}})
var at=/^(?:input|select|textarea|button)$/i
K.fn.extend({prop:function(e,t){return ge(this,K.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[K.propFix[e]||e]})}}),K.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,n){var i,o,r,a=e.nodeType
if(e&&3!==a&&8!==a&&2!==a)return r=1!==a||!K.isXMLDoc(e),r&&(t=K.propFix[t]||t,o=K.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:e[t]=n:o&&"get"in o&&null!==(i=o.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||at.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),J.optSelected||(K.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),K.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){K.propFix[this.toLowerCase()]=this})
var st=/[\t\r\n\f]/g
K.fn.extend({addClass:function(e){var t,n,i,o,r,a,s="string"==typeof e&&e,l=0,c=this.length
if(K.isFunction(e))return this.each(function(t){K(this).addClass(e.call(this,t,this.className))})
if(s)for(t=(e||"").match(fe)||[];c>l;l++)if(n=this[l],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(st," "):" ")){for(r=0;o=t[r++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ")
a=K.trim(i),n.className!==a&&(n.className=a)}return this},removeClass:function(e){var t,n,i,o,r,a,s=0===arguments.length||"string"==typeof e&&e,l=0,c=this.length
if(K.isFunction(e))return this.each(function(t){K(this).removeClass(e.call(this,t,this.className))})
if(s)for(t=(e||"").match(fe)||[];c>l;l++)if(n=this[l],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(st," "):"")){for(r=0;o=t[r++];)for(;i.indexOf(" "+o+" ")>=0;)i=i.replace(" "+o+" "," ")
a=e?K.trim(i):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(e,t){var n=typeof e
return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(K.isFunction(e)?function(n){K(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,i=0,o=K(this),r=e.match(fe)||[];t=r[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t)
else(n===Te||"boolean"===n)&&(this.className&&ve.set(this,"__className__",this.className),this.className=this.className||e===!1?"":ve.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,i=this.length;i>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(st," ").indexOf(t)>=0)return!0
return!1}})
var lt=/\r/g
K.fn.extend({val:function(e){var t,n,i,o=this[0]
return arguments.length?(i=K.isFunction(e),this.each(function(n){var o
1===this.nodeType&&(o=i?e.call(this,n,K(this).val()):e,null==o?o="":"number"==typeof o?o+="":K.isArray(o)&&(o=K.map(o,function(e){return null==e?"":e+""})),t=K.valHooks[this.type]||K.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))})):o?(t=K.valHooks[o.type]||K.valHooks[o.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(o,"value"))?n:(n=o.value,"string"==typeof n?n.replace(lt,""):null==n?"":n)):void 0}}),K.extend({valHooks:{option:{get:function(e){var t=K.find.attr(e,"value")
return null!=t?t:K.trim(K.text(e))}},select:{get:function(e){for(var t,n,i=e.options,o=e.selectedIndex,r="select-one"===e.type||0>o,a=r?null:[],s=r?o+1:i.length,l=0>o?s:r?o:0;s>l;l++)if(n=i[l],!(!n.selected&&l!==o||(J.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&K.nodeName(n.parentNode,"optgroup"))){if(t=K(n).val(),r)return t
a.push(t)}return a},set:function(e,t){for(var n,i,o=e.options,r=K.makeArray(t),a=o.length;a--;)i=o[a],(i.selected=K.inArray(i.value,r)>=0)&&(n=!0)
return n||(e.selectedIndex=-1),r}}}}),K.each(["radio","checkbox"],function(){K.valHooks[this]={set:function(e,t){return K.isArray(t)?e.checked=K.inArray(K(e).val(),t)>=0:void 0}},J.checkOn||(K.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){K.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),K.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}})
var ct=K.now(),ut=/\?/
K.parseJSON=function(e){return JSON.parse(e+"")},K.parseXML=function(e){var t,n
if(!e||"string"!=typeof e)return null
try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(e){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&K.error("Invalid XML: "+e),t}
var dt=/#.*$/,pt=/([?&])_=[^&]*/,ft=/^(.*?):[ \t]*([^\r\n]*)$/gm,ht=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,mt=/^(?:GET|HEAD)$/,gt=/^\/\//,vt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,yt={},bt={},wt="*/".concat("*"),xt=e.location.href,_t=vt.exec(xt.toLowerCase())||[]
K.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:xt,type:"GET",isLocal:ht.test(_t[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":wt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":K.parseJSON,"text xml":K.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$($(e,K.ajaxSettings),t):$(K.ajaxSettings,e)},ajaxPrefilter:L(yt),ajaxTransport:L(bt),ajax:function(e,t){function n(e,t,n,a){var l,u,v,y,w,_=t
2!==b&&(b=2,s&&clearTimeout(s),i=void 0,r=a||"",x.readyState=e>0?4:0,l=e>=200&&300>e||304===e,n&&(y=j(d,x,n)),y=R(d,y,x,l),l?(d.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(K.lastModified[o]=w),w=x.getResponseHeader("etag"),w&&(K.etag[o]=w)),204===e||"HEAD"===d.type?_="nocontent":304===e?_="notmodified":(_=y.state,u=y.data,v=y.error,l=!v)):(v=_,(e||!_)&&(_="error",0>e&&(e=0))),x.status=e,x.statusText=(t||_)+"",l?h.resolveWith(p,[u,_,x]):h.rejectWith(p,[x,_,v]),x.statusCode(g),g=void 0,c&&f.trigger(l?"ajaxSuccess":"ajaxError",[x,d,l?u:v]),m.fireWith(p,[x,_]),c&&(f.trigger("ajaxComplete",[x,d]),--K.active||K.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{}
var i,o,r,a,s,l,c,u,d=K.ajaxSetup({},t),p=d.context||d,f=d.context&&(p.nodeType||p.jquery)?K(p):K.event,h=K.Deferred(),m=K.Callbacks("once memory"),g=d.statusCode||{},v={},y={},b=0,w="canceled",x={readyState:0,getResponseHeader:function(e){var t
if(2===b){if(!a)for(a={};t=ft.exec(r);)a[t[1].toLowerCase()]=t[2]
t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?r:null},setRequestHeader:function(e,t){var n=e.toLowerCase()
return b||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(d.mimeType=e),this},statusCode:function(e){var t
if(e)if(2>b)for(t in e)g[t]=[g[t],e[t]]
else x.always(e[x.status])
return this},abort:function(e){var t=e||w
return i&&i.abort(t),n(0,t),this}}
if(h.promise(x).complete=m.add,x.success=x.done,x.error=x.fail,d.url=((e||d.url||xt)+"").replace(dt,"").replace(gt,_t[1]+"//"),d.type=t.method||t.type||d.method||d.type,d.dataTypes=K.trim(d.dataType||"*").toLowerCase().match(fe)||[""],null==d.crossDomain&&(l=vt.exec(d.url.toLowerCase()),d.crossDomain=!(!l||l[1]===_t[1]&&l[2]===_t[2]&&(l[3]||("http:"===l[1]?"80":"443"))===(_t[3]||("http:"===_t[1]?"80":"443")))),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=K.param(d.data,d.traditional)),N(yt,d,t,x),2===b)return x
c=K.event&&d.global,c&&0===K.active++&&K.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!mt.test(d.type),o=d.url,d.hasContent||(d.data&&(o=d.url+=(ut.test(o)?"&":"?")+d.data,delete d.data),d.cache===!1&&(d.url=pt.test(o)?o.replace(pt,"$1_="+ct++):o+(ut.test(o)?"&":"?")+"_="+ct++)),d.ifModified&&(K.lastModified[o]&&x.setRequestHeader("If-Modified-Since",K.lastModified[o]),K.etag[o]&&x.setRequestHeader("If-None-Match",K.etag[o])),(d.data&&d.hasContent&&d.contentType!==!1||t.contentType)&&x.setRequestHeader("Content-Type",d.contentType),x.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+wt+"; q=0.01":""):d.accepts["*"])
for(u in d.headers)x.setRequestHeader(u,d.headers[u])
if(d.beforeSend&&(d.beforeSend.call(p,x,d)===!1||2===b))return x.abort()
w="abort"
for(u in{success:1,error:1,complete:1})x[u](d[u])
if(i=N(bt,d,t,x)){x.readyState=1,c&&f.trigger("ajaxSend",[x,d]),d.async&&d.timeout>0&&(s=setTimeout(function(){x.abort("timeout")},d.timeout))
try{b=1,i.send(v,n)}catch(e){if(!(2>b))throw e
n(-1,e)}}else n(-1,"No Transport")
return x},getJSON:function(e,t,n){return K.get(e,t,n,"json")},getScript:function(e,t){return K.get(e,void 0,t,"script")}}),K.each(["get","post"],function(e,t){K[t]=function(e,n,i,o){return K.isFunction(n)&&(o=o||i,i=n,n=void 0),K.ajax({url:e,type:t,dataType:o,data:n,success:i})}}),K._evalUrl=function(e){return K.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},K.fn.extend({wrapAll:function(e){var t
return K.isFunction(e)?this.each(function(t){K(this).wrapAll(e.call(this,t))}):(this[0]&&(t=K(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e}).append(this)),this)},wrapInner:function(e){return this.each(K.isFunction(e)?function(t){K(this).wrapInner(e.call(this,t))}:function(){var t=K(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=K.isFunction(e)
return this.each(function(n){K(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){K.nodeName(this,"body")||K(this).replaceWith(this.childNodes)}).end()}}),K.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},K.expr.filters.visible=function(e){return!K.expr.filters.hidden(e)}
var Ct=/%20/g,St=/\[\]$/,Tt=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i
K.param=function(e,t){var n,i=[],o=function(e,t){t=K.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}
if(void 0===t&&(t=K.ajaxSettings&&K.ajaxSettings.traditional),K.isArray(e)||e.jquery&&!K.isPlainObject(e))K.each(e,function(){o(this.name,this.value)})
else for(n in e)H(n,e[n],t,o)
return i.join("&").replace(Ct,"+")},K.fn.extend({serialize:function(){return K.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=K.prop(this,"elements")
return e?K.makeArray(e):this}).filter(function(){var e=this.type
return this.name&&!K(this).is(":disabled")&&kt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!Se.test(e))}).map(function(e,t){var n=K(this).val()
return null==n?null:K.isArray(n)?K.map(n,function(e){return{name:t.name,value:e.replace(Tt,"\r\n")}}):{name:t.name,value:n.replace(Tt,"\r\n")}}).get()}}),K.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}}
var Et=0,It={},At={0:200,1223:204},Ft=K.ajaxSettings.xhr()
e.attachEvent&&e.attachEvent("onunload",function(){for(var e in It)It[e]()}),J.cors=!!Ft&&"withCredentials"in Ft,J.ajax=Ft=!!Ft,K.ajaxTransport(function(e){var t
return J.cors||Ft&&!e.crossDomain?{send:function(n,i){var o,r=e.xhr(),a=++Et
if(r.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(o in e.xhrFields)r[o]=e.xhrFields[o]
e.mimeType&&r.overrideMimeType&&r.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest")
for(o in n)r.setRequestHeader(o,n[o])
t=function(e){return function(){t&&(delete It[a],t=r.onload=r.onerror=null,"abort"===e?r.abort():"error"===e?i(r.status,r.statusText):i(At[r.status]||r.status,r.statusText,"string"==typeof r.responseText?{text:r.responseText}:void 0,r.getAllResponseHeaders()))}},r.onload=t(),r.onerror=t("error"),t=It[a]=t("abort")
try{r.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}:void 0}),K.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return K.globalEval(e),e}}}),K.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),K.ajaxTransport("script",function(e){if(e.crossDomain){var t,n
return{send:function(i,o){t=K("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),X.head.appendChild(t[0])},abort:function(){n&&n()}}}})
var Mt=[],Pt=/(=)\?(?=&|$)|\?\?/
K.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mt.pop()||K.expando+"_"+ct++
return this[e]=!0,e}}),K.ajaxPrefilter("json jsonp",function(t,n,i){var o,r,a,s=t.jsonp!==!1&&(Pt.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Pt.test(t.data)&&"data")
return s||"jsonp"===t.dataTypes[0]?(o=t.jsonpCallback=K.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Pt,"$1"+o):t.jsonp!==!1&&(t.url+=(ut.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return a||K.error(o+" was not called"),a[0]},t.dataTypes[0]="json",r=e[o],e[o]=function(){a=arguments},i.always(function(){e[o]=r,t[o]&&(t.jsonpCallback=n.jsonpCallback,Mt.push(o)),a&&K.isFunction(r)&&r(a[0]),a=r=void 0}),"script"):void 0}),K.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null
"boolean"==typeof t&&(n=t,t=!1),t=t||X
var i=ae.exec(e),o=!n&&[]
return i?[t.createElement(i[1])]:(i=K.buildFragment([e],t,o),o&&o.length&&K(o).remove(),K.merge([],i.childNodes))}
var Ot=K.fn.load
K.fn.load=function(e,t,n){if("string"!=typeof e&&Ot)return Ot.apply(this,arguments)
var i,o,r,a=this,s=e.indexOf(" ")
return s>=0&&(i=K.trim(e.slice(s)),e=e.slice(0,s)),K.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),a.length>0&&K.ajax({url:e,type:o,dataType:"html",data:t}).done(function(e){r=arguments,a.html(i?K("<div>").append(K.parseHTML(e)).find(i):e)}).complete(n&&function(e,t){a.each(n,r||[e.responseText,t,e])}),this},K.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){K.fn[t]=function(e){return this.on(t,e)}}),K.expr.filters.animated=function(e){return K.grep(K.timers,function(t){return e===t.elem}).length}
var Lt=e.document.documentElement
K.offset={setOffset:function(e,t,n){var i,o,r,a,s,l,c,u=K.css(e,"position"),d=K(e),p={}
"static"===u&&(e.style.position="relative"),s=d.offset(),r=K.css(e,"top"),l=K.css(e,"left"),c=("absolute"===u||"fixed"===u)&&(r+l).indexOf("auto")>-1,c?(i=d.position(),a=i.top,o=i.left):(a=parseFloat(r)||0,o=parseFloat(l)||0),K.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+o),"using"in t?t.using.call(e,p):d.css(p)}},K.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){K.offset.setOffset(this,e,t)})
var t,n,i=this[0],o={top:0,left:0},r=i&&i.ownerDocument
return r?(t=r.documentElement,K.contains(t,i)?(typeof i.getBoundingClientRect!==Te&&(o=i.getBoundingClientRect()),n=W(r),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o):void 0},position:function(){if(this[0]){var e,t,n=this[0],i={top:0,left:0}
return"fixed"===K.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),K.nodeName(e[0],"html")||(i=e.offset()),i.top+=K.css(e[0],"borderTopWidth",!0),i.left+=K.css(e[0],"borderLeftWidth",!0)),{top:t.top-i.top-K.css(n,"marginTop",!0),left:t.left-i.left-K.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Lt;e&&!K.nodeName(e,"html")&&"static"===K.css(e,"position");)e=e.offsetParent
return e||Lt})}}),K.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var i="pageYOffset"===n
K.fn[t]=function(o){return ge(this,function(t,o,r){var a=W(t)
return void 0===r?a?a[n]:t[o]:void(a?a.scrollTo(i?e.pageXOffset:r,i?r:e.pageYOffset):t[o]=r)},t,o,arguments.length,null)}}),K.each(["top","left"],function(e,t){K.cssHooks[t]=_(J.pixelPosition,function(e,n){return n?(n=x(e,t),ze.test(n)?K(e).position()[t]+"px":n):void 0})}),K.each({Height:"height",Width:"width"},function(e,t){K.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){K.fn[i]=function(i,o){var r=arguments.length&&(n||"boolean"!=typeof i),a=n||(i===!0||o===!0?"margin":"border")
return ge(this,function(t,n,i){var o
return K.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?K.css(t,n,a):K.style(t,n,i,a)},t,r?i:void 0,r,null)}})}),K.fn.size=function(){return this.length},K.fn.andSelf=K.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return K})
var Nt=e.jQuery,$t=e.$
return K.noConflict=function(t){return e.$===K&&(e.$=$t),t&&e.jQuery===K&&(e.jQuery=Nt),K},typeof t===Te&&(e.jQuery=e.$=K),K}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict"
function e(){return mi.apply(null,arguments)}function t(e){mi=e}function n(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function i(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function o(e){var t
for(t in e)return!1
return!0}function r(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function a(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function s(e,t){var n,i=[]
for(n=0;n<e.length;++n)i.push(t(e[n],n))
return i}function l(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function c(e,t){for(var n in t)l(t,n)&&(e[n]=t[n])
return l(t,"toString")&&(e.toString=t.toString),l(t,"valueOf")&&(e.valueOf=t.valueOf),e}function u(e,t,n,i){return vt(e,t,n,i,!0).utc()}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function p(e){return null==e._pf&&(e._pf=d()),e._pf}function f(e){if(null==e._isValid){var t=p(e),n=vi.call(t.parsedDateParts,function(e){return null!=e}),i=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n)
if(e._strict&&(i=i&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return i
e._isValid=i}return e._isValid}function h(e){var t=u(NaN)
return null!=e?c(p(t),e):p(t).userInvalidated=!0,t}function m(e){return void 0===e}function g(e,t){var n,i,o
if(m(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),m(t._i)||(e._i=t._i),m(t._f)||(e._f=t._f),m(t._l)||(e._l=t._l),m(t._strict)||(e._strict=t._strict),m(t._tzm)||(e._tzm=t._tzm),m(t._isUTC)||(e._isUTC=t._isUTC),m(t._offset)||(e._offset=t._offset),m(t._pf)||(e._pf=p(t)),m(t._locale)||(e._locale=t._locale),yi.length>0)for(n in yi)i=yi[n],o=t[i],m(o)||(e[i]=o)
return e}function v(t){g(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),bi===!1&&(bi=!0,e.updateOffset(this),bi=!1)}function y(e){return e instanceof v||null!=e&&null!=e._isAMomentObject}function b(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function w(e){var t=+e,n=0
return 0!==t&&isFinite(t)&&(n=b(t)),n}function x(e,t,n){var i,o=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0
for(i=0;i<o;i++)(n&&e[i]!==t[i]||!n&&w(e[i])!==w(t[i]))&&a++
return a+r}function _(t){e.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function C(t,n){var i=!0
return c(function(){if(null!=e.deprecationHandler&&e.deprecationHandler(null,t),i){for(var o,r=[],a=0;a<arguments.length;a++){if(o="","object"==typeof arguments[a]){o+="\n["+a+"] "
for(var s in arguments[0])o+=s+": "+arguments[0][s]+", "
o=o.slice(0,-2)}else o=arguments[a]
r.push(o)}_(t+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),i=!1}return n.apply(this,arguments)},n)}function S(t,n){null!=e.deprecationHandler&&e.deprecationHandler(t,n),wi[t]||(_(n),wi[t]=!0)}function T(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function D(e){var t,n
for(n in e)t=e[n],T(t)?this[n]=t:this["_"+n]=t
this._config=e,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function k(e,t){var n,o=c({},e)
for(n in t)l(t,n)&&(i(e[n])&&i(t[n])?(o[n]={},c(o[n],e[n]),c(o[n],t[n])):null!=t[n]?o[n]=t[n]:delete o[n])
for(n in e)l(e,n)&&!l(t,n)&&i(e[n])&&(o[n]=c({},o[n]))
return o}function E(e){null!=e&&this.set(e)}function I(e,t,n){var i=this._calendar[e]||this._calendar.sameElse
return T(i)?i.call(t,n):i}function A(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()]
return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])}function F(){return this._invalidDate}function M(e){return this._ordinal.replace("%d",e)}function P(e,t,n,i){var o=this._relativeTime[n]
return T(o)?o(e,t,n,i):o.replace(/%d/i,e)}function O(e,t){var n=this._relativeTime[e>0?"future":"past"]
return T(n)?n(t):n.replace(/%s/i,t)}function L(e,t){var n=e.toLowerCase()
Ai[n]=Ai[n+"s"]=Ai[t]=e}function N(e){return"string"==typeof e?Ai[e]||Ai[e.toLowerCase()]:void 0}function $(e){var t,n,i={}
for(n in e)l(e,n)&&(t=N(n),t&&(i[t]=e[n]))
return i}function j(e,t){Fi[e]=t}function R(e){var t=[]
for(var n in e)t.push({unit:n,priority:Fi[n]})
return t.sort(function(e,t){return e.priority-t.priority}),t}function H(t,n){return function(i){return null!=i?(z(this,t,i),e.updateOffset(this,n),this):W(this,t)}}function W(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function z(e,t,n){e.isValid()&&e._d["set"+(e._isUTC?"UTC":"")+t](n)}function Y(e){return e=N(e),T(this[e])?this[e]():this}function q(e,t){if("object"==typeof e){e=$(e)
for(var n=R(e),i=0;i<n.length;i++)this[n[i].unit](e[n[i].unit])}else if(e=N(e),T(this[e]))return this[e](t)
return this}function U(e,t,n){var i=""+Math.abs(e),o=t-i.length,r=e>=0
return(r?n?"+":"":"-")+Math.pow(10,Math.max(0,o)).toString().substr(1)+i}function B(e,t,n,i){var o=i
"string"==typeof i&&(o=function(){return this[i]()}),e&&(Li[e]=o),t&&(Li[t[0]]=function(){return U(o.apply(this,arguments),t[1],t[2])}),n&&(Li[n]=function(){return this.localeData().ordinal(o.apply(this,arguments),e)})}function V(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function G(e){var t,n,i=e.match(Mi)
for(t=0,n=i.length;t<n;t++)Li[i[t]]?i[t]=Li[i[t]]:i[t]=V(i[t])
return function(t){var o,r=""
for(o=0;o<n;o++)r+=i[o]instanceof Function?i[o].call(t,e):i[o]
return r}}function Q(e,t){return e.isValid()?(t=J(t,e.localeData()),Oi[t]=Oi[t]||G(t),Oi[t](e)):e.localeData().invalidDate()}function J(e,t){function n(e){return t.longDateFormat(e)||e}var i=5
for(Pi.lastIndex=0;i>=0&&Pi.test(e);)e=e.replace(Pi,n),Pi.lastIndex=0,i-=1
return e}function X(e,t,n){Ki[e]=T(t)?t:function(e,i){return e&&n?n:t}}function Z(e,t){return l(Ki,e)?Ki[e](t._strict,t._locale):new RegExp(K(e))}function K(e){return ee(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,i,o){return t||n||i||o}))}function ee(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function te(e,t){var n,i=t
for("string"==typeof e&&(e=[e]),r(t)&&(i=function(e,n){n[t]=w(e)}),n=0;n<e.length;n++)eo[e[n]]=i}function ne(e,t){te(e,function(e,n,i,o){i._w=i._w||{},t(e,i._w,i,o)})}function ie(e,t,n){null!=t&&l(eo,e)&&eo[e](t,n._a,n,e)}function oe(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function re(e,t){return e?n(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||po).test(t)?"format":"standalone"][e.month()]:this._months}function ae(e,t){return e?n(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[po.test(t)?"format":"standalone"][e.month()]:this._monthsShort}function se(e,t,n){var i,o,r,a=e.toLocaleLowerCase()
if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)r=u([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(r,"").toLocaleLowerCase()
return n?"MMM"===t?(o=uo.call(this._shortMonthsParse,a),o!==-1?o:null):(o=uo.call(this._longMonthsParse,a),o!==-1?o:null):"MMM"===t?(o=uo.call(this._shortMonthsParse,a),o!==-1?o:(o=uo.call(this._longMonthsParse,a),o!==-1?o:null)):(o=uo.call(this._longMonthsParse,a),o!==-1?o:(o=uo.call(this._shortMonthsParse,a),o!==-1?o:null))}function le(e,t,n){var i,o,r
if(this._monthsParseExact)return se.call(this,e,t,n)
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(o=u([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(o,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(o,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(r="^"+this.months(o,"")+"|^"+this.monthsShort(o,""),this._monthsParse[i]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[i].test(e))return i
if(n&&"MMM"===t&&this._shortMonthsParse[i].test(e))return i
if(!n&&this._monthsParse[i].test(e))return i}}function ce(e,t){var n
if(!e.isValid())return e
if("string"==typeof t)if(/^\d+$/.test(t))t=w(t)
else if(t=e.localeData().monthsParse(t),!r(t))return e
return n=Math.min(e.date(),oe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function ue(t){return null!=t?(ce(this,t),e.updateOffset(this,!0),this):W(this,"Month")}function de(){return oe(this.year(),this.month())}function pe(e){return this._monthsParseExact?(l(this,"_monthsRegex")||he.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(l(this,"_monthsShortRegex")||(this._monthsShortRegex=mo),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function fe(e){return this._monthsParseExact?(l(this,"_monthsRegex")||he.call(this),e?this._monthsStrictRegex:this._monthsRegex):(l(this,"_monthsRegex")||(this._monthsRegex=go),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function he(){function e(e,t){return t.length-e.length}var t,n,i=[],o=[],r=[]
for(t=0;t<12;t++)n=u([2e3,t]),i.push(this.monthsShort(n,"")),o.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""))
for(i.sort(e),o.sort(e),r.sort(e),t=0;t<12;t++)i[t]=ee(i[t]),o[t]=ee(o[t])
for(t=0;t<24;t++)r[t]=ee(r[t])
this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function me(e){return ge(e)?366:365}function ge(e){return e%4===0&&e%100!==0||e%400===0}function ve(){return ge(this.year())}function ye(e,t,n,i,o,r,a){var s=new Date(e,t,n,i,o,r,a)
return e<100&&e>=0&&isFinite(s.getFullYear())&&s.setFullYear(e),s}function be(e){var t=new Date(Date.UTC.apply(null,arguments))
return e<100&&e>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function we(e,t,n){var i=7+t-n,o=(7+be(e,0,i).getUTCDay()-t)%7
return-o+i-1}function xe(e,t,n,i,o){var r,a,s=(7+n-i)%7,l=we(e,i,o),c=1+7*(t-1)+s+l
return c<=0?(r=e-1,a=me(r)+c):c>me(e)?(r=e+1,a=c-me(e)):(r=e,a=c),{year:r,dayOfYear:a}}function _e(e,t,n){var i,o,r=we(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1
return a<1?(o=e.year()-1,i=a+Ce(o,t,n)):a>Ce(e.year(),t,n)?(i=a-Ce(e.year(),t,n),o=e.year()+1):(o=e.year(),i=a),{week:i,year:o}}function Ce(e,t,n){var i=we(e,t,n),o=we(e+1,t,n)
return(me(e)-i+o)/7}function Se(e){return _e(e,this._week.dow,this._week.doy).week}function Te(){return this._week.dow}function De(){return this._week.doy}function ke(e){var t=this.localeData().week(this)
return null==e?t:this.add(7*(e-t),"d")}function Ee(e){var t=_e(this,1,4).week
return null==e?t:this.add(7*(e-t),"d")}function Ie(e,t){return"string"!=typeof e?e:isNaN(e)?(e=t.weekdaysParse(e),"number"==typeof e?e:null):parseInt(e,10)}function Ae(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Fe(e,t){return e?n(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:this._weekdays}function Me(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Pe(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Oe(e,t,n){var i,o,r,a=e.toLocaleLowerCase()
if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)r=u([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(r,"").toLocaleLowerCase()
return n?"dddd"===t?(o=uo.call(this._weekdaysParse,a),o!==-1?o:null):"ddd"===t?(o=uo.call(this._shortWeekdaysParse,a),o!==-1?o:null):(o=uo.call(this._minWeekdaysParse,a),o!==-1?o:null):"dddd"===t?(o=uo.call(this._weekdaysParse,a),o!==-1?o:(o=uo.call(this._shortWeekdaysParse,a),o!==-1?o:(o=uo.call(this._minWeekdaysParse,a),o!==-1?o:null))):"ddd"===t?(o=uo.call(this._shortWeekdaysParse,a),o!==-1?o:(o=uo.call(this._weekdaysParse,a),o!==-1?o:(o=uo.call(this._minWeekdaysParse,a),o!==-1?o:null))):(o=uo.call(this._minWeekdaysParse,a),o!==-1?o:(o=uo.call(this._weekdaysParse,a),o!==-1?o:(o=uo.call(this._shortWeekdaysParse,a),o!==-1?o:null)))}function Le(e,t,n){var i,o,r
if(this._weekdaysParseExact)return Oe.call(this,e,t,n)
for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(o=u([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(o,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(o,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(o,"").replace(".",".?")+"$","i")),this._weekdaysParse[i]||(r="^"+this.weekdays(o,"")+"|^"+this.weekdaysShort(o,"")+"|^"+this.weekdaysMin(o,""),this._weekdaysParse[i]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[i].test(e))return i
if(n&&"ddd"===t&&this._shortWeekdaysParse[i].test(e))return i
if(n&&"dd"===t&&this._minWeekdaysParse[i].test(e))return i
if(!n&&this._weekdaysParse[i].test(e))return i}}function Ne(e){if(!this.isValid())return null!=e?this:NaN
var t=this._isUTC?this._d.getUTCDay():this._d.getDay()
return null!=e?(e=Ie(e,this.localeData()),this.add(e-t,"d")):t}function $e(e){if(!this.isValid())return null!=e?this:NaN
var t=(this.day()+7-this.localeData()._week.dow)%7
return null==e?t:this.add(e-t,"d")}function je(e){if(!this.isValid())return null!=e?this:NaN
if(null!=e){var t=Ae(e,this.localeData())
return this.day(this.day()%7?t:t-7)}return this.day()||7}function Re(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||ze.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(l(this,"_weekdaysRegex")||(this._weekdaysRegex=_o),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function He(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||ze.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(l(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Co),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function We(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||ze.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(l(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=So),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function ze(){function e(e,t){return t.length-e.length}var t,n,i,o,r,a=[],s=[],l=[],c=[]
for(t=0;t<7;t++)n=u([2e3,1]).day(t),i=this.weekdaysMin(n,""),o=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(i),s.push(o),l.push(r),c.push(i),c.push(o),c.push(r)
for(a.sort(e),s.sort(e),l.sort(e),c.sort(e),t=0;t<7;t++)s[t]=ee(s[t]),l[t]=ee(l[t]),c[t]=ee(c[t])
this._weekdaysRegex=new RegExp("^("+c.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Ye(){return this.hours()%12||12}function qe(){return this.hours()||24}function Ue(e,t){B(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function Be(e,t){return t._meridiemParse}function Ve(e){return"p"===(e+"").toLowerCase().charAt(0)}function Ge(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}function Qe(e){return e?e.toLowerCase().replace("_","-"):e}function Je(e){for(var t,n,i,o,r=0;r<e.length;){for(o=Qe(e[r]).split("-"),t=o.length,n=Qe(e[r+1]),n=n?n.split("-"):null;t>0;){if(i=Xe(o.slice(0,t).join("-")))return i
if(n&&n.length>=t&&x(o,n,!0)>=t-1)break
t--}r++}return null}function Xe(e){var t=null
if(!Io[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=To._abbr,require("./locale/"+e),Ze(t)}catch(e){}return Io[e]}function Ze(e,t){var n
return e&&(n=m(t)?tt(e):Ke(e,t),n&&(To=n)),To._abbr}function Ke(e,t){if(null!==t){var n=Eo
if(t.abbr=e,null!=Io[e])S("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=Io[e]._config
else if(null!=t.parentLocale){if(null==Io[t.parentLocale])return Ao[t.parentLocale]||(Ao[t.parentLocale]=[]),Ao[t.parentLocale].push({name:e,config:t}),null
n=Io[t.parentLocale]._config}return Io[e]=new E(k(n,t)),Ao[e]&&Ao[e].forEach(function(e){Ke(e.name,e.config)}),Ze(e),Io[e]}return delete Io[e],null}function et(e,t){if(null!=t){var n,i=Eo
null!=Io[e]&&(i=Io[e]._config),t=k(i,t),n=new E(t),n.parentLocale=Io[e],Io[e]=n,Ze(e)}else null!=Io[e]&&(null!=Io[e].parentLocale?Io[e]=Io[e].parentLocale:null!=Io[e]&&delete Io[e])
return Io[e]}function tt(e){var t
if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return To
if(!n(e)){if(t=Xe(e))return t
e=[e]}return Je(e)}function nt(){return Ci(Io)}function it(e){var t,n=e._a
return n&&p(e).overflow===-2&&(t=n[no]<0||n[no]>11?no:n[io]<1||n[io]>oe(n[to],n[no])?io:n[oo]<0||n[oo]>24||24===n[oo]&&(0!==n[ro]||0!==n[ao]||0!==n[so])?oo:n[ro]<0||n[ro]>59?ro:n[ao]<0||n[ao]>59?ao:n[so]<0||n[so]>999?so:-1,p(e)._overflowDayOfYear&&(t<to||t>io)&&(t=io),p(e)._overflowWeeks&&t===-1&&(t=lo),p(e)._overflowWeekday&&t===-1&&(t=co),p(e).overflow=t),e}function ot(e){var t,n,i,o,r,a,s=e._i,l=Fo.exec(s)||Mo.exec(s)
if(l){for(p(e).iso=!0,t=0,n=Oo.length;t<n;t++)if(Oo[t][1].exec(l[1])){o=Oo[t][0],i=Oo[t][2]!==!1
break}if(null==o)return void(e._isValid=!1)
if(l[3]){for(t=0,n=Lo.length;t<n;t++)if(Lo[t][1].exec(l[3])){r=(l[2]||" ")+Lo[t][0]
break}if(null==r)return void(e._isValid=!1)}if(!i&&null!=r)return void(e._isValid=!1)
if(l[4]){if(!Po.exec(l[4]))return void(e._isValid=!1)
a="Z"}e._f=o+(r||"")+(a||""),ut(e)}else e._isValid=!1}function rt(t){var n=No.exec(t._i)
return null!==n?void(t._d=new Date(+n[1])):(ot(t),void(t._isValid===!1&&(delete t._isValid,e.createFromInputFallback(t))))}function at(e,t,n){return null!=e?e:null!=t?t:n}function st(t){var n=new Date(e.now())
return t._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function lt(e){var t,n,i,o,r=[]
if(!e._d){for(i=st(e),e._w&&null==e._a[io]&&null==e._a[no]&&ct(e),e._dayOfYear&&(o=at(e._a[to],i[to]),e._dayOfYear>me(o)&&(p(e)._overflowDayOfYear=!0),n=be(o,0,e._dayOfYear),e._a[no]=n.getUTCMonth(),e._a[io]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=r[t]=i[t]
for(;t<7;t++)e._a[t]=r[t]=null==e._a[t]?2===t?1:0:e._a[t]
24===e._a[oo]&&0===e._a[ro]&&0===e._a[ao]&&0===e._a[so]&&(e._nextDay=!0,e._a[oo]=0),e._d=(e._useUTC?be:ye).apply(null,r),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[oo]=24)}}function ct(e){var t,n,i,o,r,a,s,l
if(t=e._w,null!=t.GG||null!=t.W||null!=t.E)r=1,a=4,n=at(t.GG,e._a[to],_e(yt(),1,4).year),i=at(t.W,1),o=at(t.E,1),(o<1||o>7)&&(l=!0)
else{r=e._locale._week.dow,a=e._locale._week.doy
var c=_e(yt(),r,a)
n=at(t.gg,e._a[to],c.year),i=at(t.w,c.week),null!=t.d?(o=t.d,(o<0||o>6)&&(l=!0)):null!=t.e?(o=t.e+r,(t.e<0||t.e>6)&&(l=!0)):o=r}i<1||i>Ce(n,r,a)?p(e)._overflowWeeks=!0:null!=l?p(e)._overflowWeekday=!0:(s=xe(n,i,o,r,a),e._a[to]=s.year,e._dayOfYear=s.dayOfYear)}function ut(t){if(t._f===e.ISO_8601)return void ot(t)
t._a=[],p(t).empty=!0
var n,i,o,r,a,s=""+t._i,l=s.length,c=0
for(o=J(t._f,t._locale).match(Mi)||[],n=0;n<o.length;n++)r=o[n],i=(s.match(Z(r,t))||[])[0],i&&(a=s.substr(0,s.indexOf(i)),a.length>0&&p(t).unusedInput.push(a),s=s.slice(s.indexOf(i)+i.length),c+=i.length),Li[r]?(i?p(t).empty=!1:p(t).unusedTokens.push(r),ie(r,i,t)):t._strict&&!i&&p(t).unusedTokens.push(r)
p(t).charsLeftOver=l-c,s.length>0&&p(t).unusedInput.push(s),t._a[oo]<=12&&p(t).bigHour===!0&&t._a[oo]>0&&(p(t).bigHour=void 0),p(t).parsedDateParts=t._a.slice(0),p(t).meridiem=t._meridiem,t._a[oo]=dt(t._locale,t._a[oo],t._meridiem),lt(t),it(t)}function dt(e,t,n){var i
return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?(i=e.isPM(n),i&&t<12&&(t+=12),i||12!==t||(t=0),t):t}function pt(e){var t,n,i,o,r
if(0===e._f.length)return p(e).invalidFormat=!0,void(e._d=new Date(NaN))
for(o=0;o<e._f.length;o++)r=0,t=g({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[o],ut(t),f(t)&&(r+=p(t).charsLeftOver,r+=10*p(t).unusedTokens.length,p(t).score=r,(null==i||r<i)&&(i=r,n=t))
c(e,n||t)}function ft(e){if(!e._d){var t=$(e._i)
e._a=s([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),lt(e)}}function ht(e){var t=new v(it(mt(e)))
return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function mt(e){var t=e._i,i=e._f
return e._locale=e._locale||tt(e._l),null===t||void 0===i&&""===t?h({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),y(t)?new v(it(t)):(a(t)?e._d=t:n(i)?pt(e):i?ut(e):gt(e),f(e)||(e._d=null),e))}function gt(t){var i=t._i
void 0===i?t._d=new Date(e.now()):a(i)?t._d=new Date(i.valueOf()):"string"==typeof i?rt(t):n(i)?(t._a=s(i.slice(0),function(e){return parseInt(e,10)}),lt(t)):"object"==typeof i?ft(t):r(i)?t._d=new Date(i):e.createFromInputFallback(t)}function vt(e,t,r,a,s){var l={}
return r!==!0&&r!==!1||(a=r,r=void 0),(i(e)&&o(e)||n(e)&&0===e.length)&&(e=void 0),l._isAMomentObject=!0,l._useUTC=l._isUTC=s,l._l=r,l._i=e,l._f=t,l._strict=a,ht(l)}function yt(e,t,n,i){return vt(e,t,n,i,!1)}function bt(e,t){var i,o
if(1===t.length&&n(t[0])&&(t=t[0]),!t.length)return yt()
for(i=t[0],o=1;o<t.length;++o)t[o].isValid()&&!t[o][e](i)||(i=t[o])
return i}function wt(){var e=[].slice.call(arguments,0)
return bt("isBefore",e)}function xt(){var e=[].slice.call(arguments,0)
return bt("isAfter",e)}function _t(e){var t=$(e),n=t.year||0,i=t.quarter||0,o=t.month||0,r=t.week||0,a=t.day||0,s=t.hour||0,l=t.minute||0,c=t.second||0,u=t.millisecond||0
this._milliseconds=+u+1e3*c+6e4*l+1e3*s*60*60,this._days=+a+7*r,this._months=+o+3*i+12*n,this._data={},this._locale=tt(),this._bubble()}function Ct(e){return e instanceof _t}function St(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Tt(e,t){B(e,0,0,function(){var e=this.utcOffset(),n="+"
return e<0&&(e=-e,n="-"),n+U(~~(e/60),2)+t+U(~~e%60,2)})}function Dt(e,t){var n=(t||"").match(e)
if(null===n)return null
var i=n[n.length-1]||[],o=(i+"").match(Ho)||["-",0,0],r=+(60*o[1])+w(o[2])
return 0===r?0:"+"===o[0]?r:-r}function kt(t,n){var i,o
return n._isUTC?(i=n.clone(),o=(y(t)||a(t)?t.valueOf():yt(t).valueOf())-i.valueOf(),i._d.setTime(i._d.valueOf()+o),e.updateOffset(i,!1),i):yt(t).local()}function Et(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function It(t,n){var i,o=this._offset||0
if(!this.isValid())return null!=t?this:NaN
if(null!=t){if("string"==typeof t){if(t=Dt(Ji,t),null===t)return this}else Math.abs(t)<16&&(t*=60)
return!this._isUTC&&n&&(i=Et(this)),this._offset=t,this._isUTC=!0,null!=i&&this.add(i,"m"),o!==t&&(!n||this._changeInProgress?Ut(this,Ht(t-o,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?o:Et(this)}function At(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Ft(e){return this.utcOffset(0,e)}function Mt(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Et(this),"m")),this}function Pt(){if(null!=this._tzm)this.utcOffset(this._tzm)
else if("string"==typeof this._i){var e=Dt(Qi,this._i)
null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Ot(e){return!!this.isValid()&&(e=e?yt(e).utcOffset():0,(this.utcOffset()-e)%60===0)}function Lt(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Nt(){if(!m(this._isDSTShifted))return this._isDSTShifted
var e={}
if(g(e,this),e=mt(e),e._a){var t=e._isUTC?u(e._a):yt(e._a)
this._isDSTShifted=this.isValid()&&x(e._a,t.toArray())>0}else this._isDSTShifted=!1
return this._isDSTShifted}function $t(){return!!this.isValid()&&!this._isUTC}function jt(){return!!this.isValid()&&this._isUTC}function Rt(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Ht(e,t){var n,i,o,a=e,s=null
return Ct(e)?a={ms:e._milliseconds,d:e._days,M:e._months}:r(e)?(a={},t?a[t]=e:a.milliseconds=e):(s=Wo.exec(e))?(n="-"===s[1]?-1:1,a={y:0,d:w(s[io])*n,h:w(s[oo])*n,m:w(s[ro])*n,s:w(s[ao])*n,ms:w(St(1e3*s[so]))*n}):(s=zo.exec(e))?(n="-"===s[1]?-1:1,a={y:Wt(s[2],n),M:Wt(s[3],n),w:Wt(s[4],n),d:Wt(s[5],n),h:Wt(s[6],n),m:Wt(s[7],n),s:Wt(s[8],n)}):null==a?a={}:"object"==typeof a&&("from"in a||"to"in a)&&(o=Yt(yt(a.from),yt(a.to)),a={},a.ms=o.milliseconds,a.M=o.months),i=new _t(a),Ct(e)&&l(e,"_locale")&&(i._locale=e._locale),i}function Wt(e,t){var n=e&&parseFloat(e.replace(",","."))
return(isNaN(n)?0:n)*t}function zt(e,t){var n={milliseconds:0,months:0}
return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Yt(e,t){var n
return e.isValid()&&t.isValid()?(t=kt(t,e),e.isBefore(t)?n=zt(e,t):(n=zt(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function qt(e,t){return function(n,i){var o,r
return null===i||isNaN(+i)||(S(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),r=n,n=i,i=r),n="string"==typeof n?+n:n,o=Ht(n,i),Ut(this,o,e),this}}function Ut(t,n,i,o){var r=n._milliseconds,a=St(n._days),s=St(n._months)
t.isValid()&&(o=null==o||o,r&&t._d.setTime(t._d.valueOf()+r*i),a&&z(t,"Date",W(t,"Date")+a*i),s&&ce(t,W(t,"Month")+s*i),o&&e.updateOffset(t,a||s))}function Bt(e,t){var n=e.diff(t,"days",!0)
return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Vt(t,n){var i=t||yt(),o=kt(i,this).startOf("day"),r=e.calendarFormat(this,o)||"sameElse",a=n&&(T(n[r])?n[r].call(this,i):n[r])
return this.format(a||this.localeData().calendar(r,this,yt(i)))}function Gt(){return new v(this)}function Qt(e,t){var n=y(e)?e:yt(e)
return!(!this.isValid()||!n.isValid())&&(t=N(m(t)?"millisecond":t),"millisecond"===t?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())}function Jt(e,t){var n=y(e)?e:yt(e)
return!(!this.isValid()||!n.isValid())&&(t=N(m(t)?"millisecond":t),"millisecond"===t?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())}function Xt(e,t,n,i){return i=i||"()",("("===i[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===i[1]?this.isBefore(t,n):!this.isAfter(t,n))}function Zt(e,t){var n,i=y(e)?e:yt(e)
return!(!this.isValid()||!i.isValid())&&(t=N(t||"millisecond"),"millisecond"===t?this.valueOf()===i.valueOf():(n=i.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))}function Kt(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function en(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function tn(e,t,n){var i,o,r,a
return this.isValid()?(i=kt(e,this),i.isValid()?(o=6e4*(i.utcOffset()-this.utcOffset()),t=N(t),"year"===t||"month"===t||"quarter"===t?(a=nn(this,i),"quarter"===t?a/=3:"year"===t&&(a/=12)):(r=this-i,a="second"===t?r/1e3:"minute"===t?r/6e4:"hour"===t?r/36e5:"day"===t?(r-o)/864e5:"week"===t?(r-o)/6048e5:r),n?a:b(a)):NaN):NaN}function nn(e,t){var n,i,o=12*(t.year()-e.year())+(t.month()-e.month()),r=e.clone().add(o,"months")
return t-r<0?(n=e.clone().add(o-1,"months"),i=(t-r)/(r-n)):(n=e.clone().add(o+1,"months"),i=(t-r)/(n-r)),-(o+i)||0}function on(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function rn(){var e=this.clone().utc()
return 0<e.year()&&e.year()<=9999?T(Date.prototype.toISOString)?this.toDate().toISOString():Q(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):Q(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function an(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)"
var e="moment",t=""
this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z")
var n="["+e+'("]',i=0<this.year()&&this.year()<=9999?"YYYY":"YYYYYY",o="-MM-DD[T]HH:mm:ss.SSS",r=t+'[")]'
return this.format(n+i+o+r)}function sn(t){t||(t=this.isUtc()?e.defaultFormatUtc:e.defaultFormat)
var n=Q(this,t)
return this.localeData().postformat(n)}function ln(e,t){return this.isValid()&&(y(e)&&e.isValid()||yt(e).isValid())?Ht({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function cn(e){return this.from(yt(),e)}function un(e,t){return this.isValid()&&(y(e)&&e.isValid()||yt(e).isValid())?Ht({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function dn(e){return this.to(yt(),e)}function pn(e){var t
return void 0===e?this._locale._abbr:(t=tt(e),null!=t&&(this._locale=t),this)}function fn(){return this._locale}function hn(e){switch(e=N(e)){case"year":this.month(0)
case"quarter":case"month":this.date(1)
case"week":case"isoWeek":case"day":case"date":this.hours(0)
case"hour":this.minutes(0)
case"minute":this.seconds(0)
case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this}function mn(e){return e=N(e),void 0===e||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))}function gn(){return this._d.valueOf()-6e4*(this._offset||0)}function vn(){return Math.floor(this.valueOf()/1e3)}function yn(){return new Date(this.valueOf())}function bn(){var e=this
return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function wn(){var e=this
return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function xn(){return this.isValid()?this.toISOString():null}function _n(){return f(this)}function Cn(){return c({},p(this))}function Sn(){return p(this).overflow}function Tn(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Dn(e,t){B(0,[e,e.length],0,t)}function kn(e){return Fn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function En(e){return Fn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function In(){return Ce(this.year(),1,4)}function An(){var e=this.localeData()._week
return Ce(this.year(),e.dow,e.doy)}function Fn(e,t,n,i,o){var r
return null==e?_e(this,i,o).year:(r=Ce(e,i,o),t>r&&(t=r),Mn.call(this,e,t,n,i,o))}function Mn(e,t,n,i,o){var r=xe(e,t,n,i,o),a=be(r.year,0,r.dayOfYear)
return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}function Pn(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}function On(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1
return null==e?t:this.add(e-t,"d")}function Ln(e,t){t[so]=w(1e3*("0."+e))}function Nn(){return this._isUTC?"UTC":""}function $n(){return this._isUTC?"Coordinated Universal Time":""}function jn(e){return yt(1e3*e)}function Rn(){return yt.apply(null,arguments).parseZone()}function Hn(e){return e}function Wn(e,t,n,i){var o=tt(),r=u().set(i,t)
return o[n](r,e)}function zn(e,t,n){if(r(e)&&(t=e,e=void 0),e=e||"",null!=t)return Wn(e,t,n,"month")
var i,o=[]
for(i=0;i<12;i++)o[i]=Wn(e,i,n,"month")
return o}function Yn(e,t,n,i){"boolean"==typeof e?(r(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,r(t)&&(n=t,t=void 0),t=t||"")
var o=tt(),a=e?o._week.dow:0
if(null!=n)return Wn(t,(n+a)%7,i,"day")
var s,l=[]
for(s=0;s<7;s++)l[s]=Wn(t,(s+a)%7,i,"day")
return l}function qn(e,t){return zn(e,t,"months")}function Un(e,t){return zn(e,t,"monthsShort")}function Bn(e,t,n){return Yn(e,t,n,"weekdays")}function Vn(e,t,n){return Yn(e,t,n,"weekdaysShort")}function Gn(e,t,n){return Yn(e,t,n,"weekdaysMin")}function Qn(){var e=this._data
return this._milliseconds=Ko(this._milliseconds),this._days=Ko(this._days),this._months=Ko(this._months),e.milliseconds=Ko(e.milliseconds),e.seconds=Ko(e.seconds),e.minutes=Ko(e.minutes),e.hours=Ko(e.hours),e.months=Ko(e.months),e.years=Ko(e.years),this}function Jn(e,t,n,i){var o=Ht(t,n)
return e._milliseconds+=i*o._milliseconds,e._days+=i*o._days,e._months+=i*o._months,e._bubble()}function Xn(e,t){return Jn(this,e,t,1)}function Zn(e,t){return Jn(this,e,t,-1)}function Kn(e){return e<0?Math.floor(e):Math.ceil(e)}function ei(){var e,t,n,i,o,r=this._milliseconds,a=this._days,s=this._months,l=this._data
return r>=0&&a>=0&&s>=0||r<=0&&a<=0&&s<=0||(r+=864e5*Kn(ni(s)+a),a=0,s=0),l.milliseconds=r%1e3,e=b(r/1e3),l.seconds=e%60,t=b(e/60),l.minutes=t%60,n=b(t/60),l.hours=n%24,a+=b(n/24),o=b(ti(a)),s+=o,a-=Kn(ni(o)),i=b(s/12),s%=12,l.days=a,l.months=s,l.years=i,this}function ti(e){return 4800*e/146097}function ni(e){return 146097*e/4800}function ii(e){var t,n,i=this._milliseconds
if(e=N(e),"month"===e||"year"===e)return t=this._days+i/864e5,n=this._months+ti(t),"month"===e?n:n/12
switch(t=this._days+Math.round(ni(this._months)),e){case"week":return t/7+i/6048e5
case"day":return t+i/864e5
case"hour":return 24*t+i/36e5
case"minute":return 1440*t+i/6e4
case"second":return 86400*t+i/1e3
case"millisecond":return Math.floor(864e5*t)+i
default:throw new Error("Unknown unit "+e)}}function oi(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*w(this._months/12)}function ri(e){return function(){return this.as(e)}}function ai(e){return e=N(e),this[e+"s"]()}function si(e){return function(){return this._data[e]}}function li(){return b(this.days()/7)}function ci(e,t,n,i,o){return o.relativeTime(t||1,!!n,e,i)}function ui(e,t,n){var i=Ht(e).abs(),o=mr(i.as("s")),r=mr(i.as("m")),a=mr(i.as("h")),s=mr(i.as("d")),l=mr(i.as("M")),c=mr(i.as("y")),u=o<gr.s&&["s",o]||r<=1&&["m"]||r<gr.m&&["mm",r]||a<=1&&["h"]||a<gr.h&&["hh",a]||s<=1&&["d"]||s<gr.d&&["dd",s]||l<=1&&["M"]||l<gr.M&&["MM",l]||c<=1&&["y"]||["yy",c]
return u[2]=t,u[3]=+e>0,u[4]=n,ci.apply(null,u)}function di(e){return void 0===e?mr:"function"==typeof e&&(mr=e,!0)}function pi(e,t){return void 0!==gr[e]&&(void 0===t?gr[e]:(gr[e]=t,!0))}function fi(e){var t=this.localeData(),n=ui(this,!e,t)
return e&&(n=t.pastFuture(+this,n)),t.postformat(n)}function hi(){var e,t,n,i=vr(this._milliseconds)/1e3,o=vr(this._days),r=vr(this._months)
e=b(i/60),t=b(e/60),i%=60,e%=60,n=b(r/12),r%=12
var a=n,s=r,l=o,c=t,u=e,d=i,p=this.asSeconds()
return p?(p<0?"-":"")+"P"+(a?a+"Y":"")+(s?s+"M":"")+(l?l+"D":"")+(c||u||d?"T":"")+(c?c+"H":"")+(u?u+"M":"")+(d?d+"S":""):"P0D"}var mi,gi
gi=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,i=0;i<n;i++)if(i in t&&e.call(this,t[i],i,t))return!0
return!1}
var vi=gi,yi=e.momentProperties=[],bi=!1,wi={}
e.suppressDeprecationWarnings=!1,e.deprecationHandler=null
var xi
xi=Object.keys?Object.keys:function(e){var t,n=[]
for(t in e)l(e,t)&&n.push(t)
return n}
var _i,Ci=xi,Si={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Ti={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Di="Invalid date",ki="%d",Ei=/\d{1,2}/,Ii={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Ai={},Fi={},Mi=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Pi=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Oi={},Li={},Ni=/\d/,$i=/\d\d/,ji=/\d{3}/,Ri=/\d{4}/,Hi=/[+-]?\d{6}/,Wi=/\d\d?/,zi=/\d\d\d\d?/,Yi=/\d\d\d\d\d\d?/,qi=/\d{1,3}/,Ui=/\d{1,4}/,Bi=/[+-]?\d{1,6}/,Vi=/\d+/,Gi=/[+-]?\d+/,Qi=/Z|[+-]\d\d:?\d\d/gi,Ji=/Z|[+-]\d\d(?::?\d\d)?/gi,Xi=/[+-]?\d+(\.\d{1,3})?/,Zi=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Ki={},eo={},to=0,no=1,io=2,oo=3,ro=4,ao=5,so=6,lo=7,co=8
_i=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t
for(t=0;t<this.length;++t)if(this[t]===e)return t
return-1}
var uo=_i
B("M",["MM",2],"Mo",function(){return this.month()+1}),B("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),B("MMMM",0,0,function(e){return this.localeData().months(this,e)}),L("month","M"),j("month",8),X("M",Wi),X("MM",Wi,$i),X("MMM",function(e,t){return t.monthsShortRegex(e)}),X("MMMM",function(e,t){return t.monthsRegex(e)}),te(["M","MM"],function(e,t){t[no]=w(e)-1}),te(["MMM","MMMM"],function(e,t,n,i){var o=n._locale.monthsParse(e,i,n._strict)
null!=o?t[no]=o:p(n).invalidMonth=e})
var po=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,fo="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ho="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),mo=Zi,go=Zi
B("Y",0,0,function(){var e=this.year()
return e<=9999?""+e:"+"+e}),B(0,["YY",2],0,function(){return this.year()%100}),B(0,["YYYY",4],0,"year"),B(0,["YYYYY",5],0,"year"),B(0,["YYYYYY",6,!0],0,"year"),L("year","y"),j("year",1),X("Y",Gi),X("YY",Wi,$i),X("YYYY",Ui,Ri),X("YYYYY",Bi,Hi),X("YYYYYY",Bi,Hi),te(["YYYYY","YYYYYY"],to),te("YYYY",function(t,n){n[to]=2===t.length?e.parseTwoDigitYear(t):w(t)}),te("YY",function(t,n){n[to]=e.parseTwoDigitYear(t)}),te("Y",function(e,t){t[to]=parseInt(e,10)}),e.parseTwoDigitYear=function(e){return w(e)+(w(e)>68?1900:2e3)}
var vo=H("FullYear",!0)
B("w",["ww",2],"wo","week"),B("W",["WW",2],"Wo","isoWeek"),L("week","w"),L("isoWeek","W"),j("week",5),j("isoWeek",5),X("w",Wi),X("ww",Wi,$i),X("W",Wi),X("WW",Wi,$i),ne(["w","ww","W","WW"],function(e,t,n,i){t[i.substr(0,1)]=w(e)})
var yo={dow:0,doy:6}
B("d",0,"do","day"),B("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),B("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),B("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),B("e",0,0,"weekday"),B("E",0,0,"isoWeekday"),L("day","d"),L("weekday","e"),L("isoWeekday","E"),j("day",11),j("weekday",11),j("isoWeekday",11),X("d",Wi),X("e",Wi),X("E",Wi),X("dd",function(e,t){return t.weekdaysMinRegex(e)}),X("ddd",function(e,t){return t.weekdaysShortRegex(e)}),X("dddd",function(e,t){return t.weekdaysRegex(e)}),ne(["dd","ddd","dddd"],function(e,t,n,i){var o=n._locale.weekdaysParse(e,i,n._strict)
null!=o?t.d=o:p(n).invalidWeekday=e}),ne(["d","e","E"],function(e,t,n,i){t[i]=w(e)})
var bo="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),wo="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),xo="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),_o=Zi,Co=Zi,So=Zi
B("H",["HH",2],0,"hour"),B("h",["hh",2],0,Ye),B("k",["kk",2],0,qe),B("hmm",0,0,function(){return""+Ye.apply(this)+U(this.minutes(),2)}),B("hmmss",0,0,function(){return""+Ye.apply(this)+U(this.minutes(),2)+U(this.seconds(),2)}),B("Hmm",0,0,function(){return""+this.hours()+U(this.minutes(),2)}),B("Hmmss",0,0,function(){return""+this.hours()+U(this.minutes(),2)+U(this.seconds(),2)}),Ue("a",!0),Ue("A",!1),L("hour","h"),j("hour",13),X("a",Be),X("A",Be),X("H",Wi),X("h",Wi),X("HH",Wi,$i),X("hh",Wi,$i),X("hmm",zi),X("hmmss",Yi),X("Hmm",zi),X("Hmmss",Yi),te(["H","HH"],oo),te(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),te(["h","hh"],function(e,t,n){t[oo]=w(e),p(n).bigHour=!0}),te("hmm",function(e,t,n){var i=e.length-2
t[oo]=w(e.substr(0,i)),t[ro]=w(e.substr(i)),p(n).bigHour=!0}),te("hmmss",function(e,t,n){var i=e.length-4,o=e.length-2
t[oo]=w(e.substr(0,i)),t[ro]=w(e.substr(i,2)),t[ao]=w(e.substr(o)),p(n).bigHour=!0}),te("Hmm",function(e,t,n){var i=e.length-2
t[oo]=w(e.substr(0,i)),t[ro]=w(e.substr(i))}),te("Hmmss",function(e,t,n){var i=e.length-4,o=e.length-2
t[oo]=w(e.substr(0,i)),t[ro]=w(e.substr(i,2)),t[ao]=w(e.substr(o))})
var To,Do=/[ap]\.?m?\.?/i,ko=H("Hours",!0),Eo={calendar:Si,longDateFormat:Ti,invalidDate:Di,ordinal:ki,ordinalParse:Ei,relativeTime:Ii,months:fo,monthsShort:ho,week:yo,weekdays:bo,weekdaysMin:xo,weekdaysShort:wo,meridiemParse:Do},Io={},Ao={},Fo=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Mo=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Po=/Z|[+-]\d\d(?::?\d\d)?/,Oo=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Lo=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],No=/^\/?Date\((\-?\d+)/i
e.createFromInputFallback=C("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),e.ISO_8601=function(){}
var $o=C("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=yt.apply(null,arguments)
return this.isValid()&&e.isValid()?e<this?this:e:h()}),jo=C("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=yt.apply(null,arguments)
return this.isValid()&&e.isValid()?e>this?this:e:h()}),Ro=function(){return Date.now?Date.now():+new Date}
Tt("Z",":"),Tt("ZZ",""),X("Z",Ji),X("ZZ",Ji),te(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Dt(Ji,e)})
var Ho=/([\+\-]|\d\d)/gi
e.updateOffset=function(){}
var Wo=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,zo=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/
Ht.fn=_t.prototype
var Yo=qt(1,"add"),qo=qt(-1,"subtract")
e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",e.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]"
var Uo=C("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)})
B(0,["gg",2],0,function(){return this.weekYear()%100}),B(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Dn("gggg","weekYear"),Dn("ggggg","weekYear"),Dn("GGGG","isoWeekYear"),Dn("GGGGG","isoWeekYear"),L("weekYear","gg"),L("isoWeekYear","GG"),j("weekYear",1),j("isoWeekYear",1),X("G",Gi),X("g",Gi),X("GG",Wi,$i),X("gg",Wi,$i),X("GGGG",Ui,Ri),X("gggg",Ui,Ri),X("GGGGG",Bi,Hi),X("ggggg",Bi,Hi),ne(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,i){t[i.substr(0,2)]=w(e)}),ne(["gg","GG"],function(t,n,i,o){n[o]=e.parseTwoDigitYear(t)}),B("Q",0,"Qo","quarter"),L("quarter","Q"),j("quarter",7),X("Q",Ni),te("Q",function(e,t){t[no]=3*(w(e)-1)}),B("D",["DD",2],"Do","date"),L("date","D"),j("date",9),X("D",Wi),X("DD",Wi,$i),X("Do",function(e,t){return e?t._ordinalParse:t._ordinalParseLenient}),te(["D","DD"],io),te("Do",function(e,t){t[io]=w(e.match(Wi)[0],10)})
var Bo=H("Date",!0)
B("DDD",["DDDD",3],"DDDo","dayOfYear"),L("dayOfYear","DDD"),j("dayOfYear",4),X("DDD",qi),X("DDDD",ji),te(["DDD","DDDD"],function(e,t,n){n._dayOfYear=w(e)}),B("m",["mm",2],0,"minute"),L("minute","m"),j("minute",14),X("m",Wi),X("mm",Wi,$i),te(["m","mm"],ro)
var Vo=H("Minutes",!1)
B("s",["ss",2],0,"second"),L("second","s"),j("second",15),X("s",Wi),X("ss",Wi,$i),te(["s","ss"],ao)
var Go=H("Seconds",!1)
B("S",0,0,function(){return~~(this.millisecond()/100)}),B(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),B(0,["SSS",3],0,"millisecond"),B(0,["SSSS",4],0,function(){return 10*this.millisecond()}),B(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),B(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),B(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),B(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),B(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),L("millisecond","ms"),j("millisecond",16),X("S",qi,Ni),X("SS",qi,$i),X("SSS",qi,ji)
var Qo
for(Qo="SSSS";Qo.length<=9;Qo+="S")X(Qo,Vi)
for(Qo="S";Qo.length<=9;Qo+="S")te(Qo,Ln)
var Jo=H("Milliseconds",!1)
B("z",0,0,"zoneAbbr"),B("zz",0,0,"zoneName")
var Xo=v.prototype
Xo.add=Yo,Xo.calendar=Vt,Xo.clone=Gt,Xo.diff=tn,Xo.endOf=mn,Xo.format=sn,Xo.from=ln,Xo.fromNow=cn,Xo.to=un,Xo.toNow=dn,Xo.get=Y,Xo.invalidAt=Sn,Xo.isAfter=Qt,Xo.isBefore=Jt,Xo.isBetween=Xt,Xo.isSame=Zt,Xo.isSameOrAfter=Kt,Xo.isSameOrBefore=en,Xo.isValid=_n,Xo.lang=Uo,Xo.locale=pn,Xo.localeData=fn,Xo.max=jo,Xo.min=$o,Xo.parsingFlags=Cn,Xo.set=q,Xo.startOf=hn,Xo.subtract=qo,Xo.toArray=bn,Xo.toObject=wn,Xo.toDate=yn,Xo.toISOString=rn,Xo.inspect=an,Xo.toJSON=xn,Xo.toString=on,Xo.unix=vn,Xo.valueOf=gn,Xo.creationData=Tn,Xo.year=vo,Xo.isLeapYear=ve,Xo.weekYear=kn,Xo.isoWeekYear=En,Xo.quarter=Xo.quarters=Pn,Xo.month=ue,Xo.daysInMonth=de,Xo.week=Xo.weeks=ke,Xo.isoWeek=Xo.isoWeeks=Ee,Xo.weeksInYear=An,Xo.isoWeeksInYear=In,Xo.date=Bo,Xo.day=Xo.days=Ne,Xo.weekday=$e,Xo.isoWeekday=je,Xo.dayOfYear=On,Xo.hour=Xo.hours=ko,Xo.minute=Xo.minutes=Vo,Xo.second=Xo.seconds=Go,Xo.millisecond=Xo.milliseconds=Jo,Xo.utcOffset=It,Xo.utc=Ft,Xo.local=Mt,Xo.parseZone=Pt,Xo.hasAlignedHourOffset=Ot,Xo.isDST=Lt,Xo.isLocal=$t,Xo.isUtcOffset=jt,Xo.isUtc=Rt,Xo.isUTC=Rt,Xo.zoneAbbr=Nn,Xo.zoneName=$n,Xo.dates=C("dates accessor is deprecated. Use date instead.",Bo),Xo.months=C("months accessor is deprecated. Use month instead",ue),Xo.years=C("years accessor is deprecated. Use year instead",vo),Xo.zone=C("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",At),Xo.isDSTShifted=C("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Nt)
var Zo=E.prototype
Zo.calendar=I,Zo.longDateFormat=A,Zo.invalidDate=F,Zo.ordinal=M,Zo.preparse=Hn,Zo.postformat=Hn,Zo.relativeTime=P,Zo.pastFuture=O,Zo.set=D,Zo.months=re,Zo.monthsShort=ae,Zo.monthsParse=le,Zo.monthsRegex=fe,Zo.monthsShortRegex=pe,Zo.week=Se,Zo.firstDayOfYear=De,Zo.firstDayOfWeek=Te,Zo.weekdays=Fe,Zo.weekdaysMin=Pe,Zo.weekdaysShort=Me,Zo.weekdaysParse=Le,Zo.weekdaysRegex=Re,Zo.weekdaysShortRegex=He,Zo.weekdaysMinRegex=We,Zo.isPM=Ve,Zo.meridiem=Ge,Ze("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=1===w(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"
return e+n}}),e.lang=C("moment.lang is deprecated. Use moment.locale instead.",Ze),e.langData=C("moment.langData is deprecated. Use moment.localeData instead.",tt)
var Ko=Math.abs,er=ri("ms"),tr=ri("s"),nr=ri("m"),ir=ri("h"),or=ri("d"),rr=ri("w"),ar=ri("M"),sr=ri("y"),lr=si("milliseconds"),cr=si("seconds"),ur=si("minutes"),dr=si("hours"),pr=si("days"),fr=si("months"),hr=si("years"),mr=Math.round,gr={s:45,m:45,h:22,d:26,M:11},vr=Math.abs,yr=_t.prototype
return yr.abs=Qn,yr.add=Xn,yr.subtract=Zn,yr.as=ii,yr.asMilliseconds=er,yr.asSeconds=tr,yr.asMinutes=nr,yr.asHours=ir,yr.asDays=or,yr.asWeeks=rr,yr.asMonths=ar,yr.asYears=sr,yr.valueOf=oi,yr._bubble=ei,yr.get=ai,yr.milliseconds=lr,yr.seconds=cr,yr.minutes=ur,yr.hours=dr,yr.days=pr,yr.weeks=li,yr.months=fr,yr.years=hr,yr.humanize=fi,yr.toISOString=hi,yr.toString=hi,yr.toJSON=hi,yr.locale=pn,yr.localeData=fn,yr.toIsoString=C("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",hi),yr.lang=Uo,B("X",0,0,"unix"),B("x",0,0,"valueOf"),X("x",Gi),X("X",Xi),te("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),te("x",function(e,t,n){n._d=new Date(w(e))}),e.version="2.17.1",t(yt),e.fn=Xo,e.min=wt,e.max=xt,e.now=Ro,e.utc=u,e.unix=jn,e.months=qn,e.isDate=a,e.locale=Ze,e.invalid=h,e.duration=Ht,e.isMoment=y,e.weekdays=Bn,e.parseZone=Rn,e.localeData=tt,e.isDuration=Ct,e.monthsShort=Un,e.weekdaysMin=Gn,e.defineLocale=Ke,e.updateLocale=et,e.locales=nt,e.weekdaysShort=Vn,e.normalizeUnits=N,e.relativeTimeRounding=di,e.relativeTimeThreshold=pi,e.calendarFormat=Bt,e.prototype=Xo,e}),window.Modernizr=function(e,t,n){function i(e){h.cssText=e}function o(e,t){return typeof e===t}var r,a,s,l="2.6.2",c={},u=!0,d=t.documentElement,p="modernizr",f=t.createElement(p),h=f.style,m=({}.toString,{}),g=[],v=g.slice,y={}.hasOwnProperty
s=o(y,"undefined")||o(y.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return y.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this
if("function"!=typeof t)throw new TypeError
var n=v.call(arguments,1),i=function(){if(this instanceof i){var o=function(){}
o.prototype=t.prototype
var r=new o,a=t.apply(r,n.concat(v.call(arguments)))
return Object(a)===a?a:r}return t.apply(e,n.concat(v.call(arguments)))}
return i}),m.history=function(){return!!e.history&&!!history.pushState}
for(var b in m)s(m,b)&&(a=b.toLowerCase(),c[a]=m[b](),g.push((c[a]?"":"no-")+a))
return c.addTest=function(e,t){if("object"==typeof e)for(var i in e)s(e,i)&&c.addTest(i,e[i])
else{if(e=e.toLowerCase(),c[e]!==n)return c
t="function"==typeof t?t():t,"undefined"!=typeof u&&u&&(d.className+=" "+(t?"":"no-")+e),c[e]=t}return c},i(""),f=r=null,function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement
return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=v.elements
return"string"==typeof e?e.split(" "):e}function o(e){var t=g[e[h]]
return t||(t={},m++,e[h]=m,g[m]=t),t}function r(e,n,i){if(n||(n=t),u)return n.createElement(e)
i||(i=o(n))
var r
return r=i.cache[e]?i.cache[e].cloneNode():f.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),r.canHaveChildren&&!p.test(e)?i.frag.appendChild(r):r}function a(e,n){if(e||(e=t),u)return e.createDocumentFragment()
n=n||o(e)
for(var r=n.frag.cloneNode(),a=0,s=i(),l=s.length;a<l;a++)r.createElement(s[a])
return r}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?r(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function l(e){e||(e=t)
var i=o(e)
return v.shivCSS&&!c&&!i.hasCSS&&(i.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),u||s(e,i),e}var c,u,d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",m=0,g={}
!function(){try{var e=t.createElement("a")
e.innerHTML="<xyz></xyz>",c="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a")
var e=t.createDocumentFragment()
return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(e){c=!0,u=!0}}()
var v={elements:d.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:d.shivCSS!==!1,supportsUnknownElements:u,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:l,createElement:r,createDocumentFragment:a}
e.html5=v,l(t)}(this,t),c._version=l,d.className=d.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(u?" js "+g.join(" "):""),c}(this,this.document),function(e,t,n){function i(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function r(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=v.shift()
y=1,e?e.t?h(function(){("c"==e.t?p.injectCss:p.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):y=0}function l(e,n,i,o,r,l,c){function u(t){if(!f&&a(d.readyState)&&(b.r=f=1,!y&&s(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&h(function(){x.removeChild(d)},50)
for(var i in D[n])D[n].hasOwnProperty(i)&&D[n][i].onload()}}var c=c||p.errorTimeout,d=t.createElement(e),f=0,g=0,b={t:i,s:n,e:r,a:l,x:c}
1===D[n]&&(g=1,D[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},v.splice(o,0,b),"img"!=e&&(g||2===D[n]?(x.insertBefore(d,w?null:m),h(u,c)):D[n].push(d))}function c(e,t,n,i,r){return y=0,t=t||"j",o(e)?l("c"==t?C:_,e,t,this.i++,n,i,r):(v.splice(this.i++,0,e),1==v.length&&s()),this}function u(){var e=p
return e.loader={load:c,i:0},e}var d,p,f=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in f.style,w=b&&!!t.createRange().compareNode,x=w?f:m.parentNode,f=e.opera&&"[object Opera]"==g.call(e.opera),f=!!t.attachEvent&&!f,_=b?"object":f?"script":"img",C=f?"script":_,S=Array.isArray||function(e){return"[object Array]"==g.call(e)},T=[],D={},k={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}}
p=function(e){function t(e){var t,n,i,e=e.split("!"),o=T.length,r=e.pop(),a=e.length,r={url:r,origUrl:r,prefixes:e}
for(n=0;n<a;n++)i=e[n].split("="),(t=k[i.shift()])&&(r=t(r,i))
for(n=0;n<o;n++)r=T[n](r)
return r}function a(e,o,r,a,s){var l=t(e),c=l.autoCallback
l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=i(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,o,r,a,s):(D[l.url]?l.noexec=!0:D[l.url]=1,r.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(i(o)||i(c))&&r.load(function(){u(),o&&o(l.origUrl,s,a),c&&c(l.origUrl,s,a),D[l.url]=2})))}function s(e,t){function n(e,n){if(e){if(o(e))n||(d=function(){var e=[].slice.call(arguments)
p.apply(this,e),f()}),a(e,d,t,0,c)
else if(Object(e)===e)for(l in s=function(){var t,n=0
for(t in e)e.hasOwnProperty(t)&&n++
return n}(),e)e.hasOwnProperty(l)&&(!n&&!--s&&(i(d)?d=function(){var e=[].slice.call(arguments)
p.apply(this,e),f()}:d[l]=function(e){return function(){var t=[].slice.call(arguments)
e&&e.apply(this,t),f()}}(p[l])),a(e[l],d,t,l,c))}else!n&&f()}var s,l,c=!!e.test,u=e.load||e.both,d=e.callback||r,p=d,f=e.complete||r
n(c?e.yep:e.nope,!!u),u&&n(u)}var l,c,d=this.yepnope.loader
if(o(e))a(e,0,d,0)
else if(S(e))for(l=0;l<e.length;l++)c=e[l],o(c)?a(c,0,d,0):S(c)?p(c):Object(c)===c&&s(c,d)
else Object(e)===e&&s(e,d)},p.addPrefix=function(e,t){k[e]=t},p.addFilter=function(e){T.push(e)},p.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,i,o,l,c){var u,d,f=t.createElement("script"),o=o||p.errorTimeout
f.src=e
for(d in i)f.setAttribute(d,i[d])
n=c?s:n||r,f.onreadystatechange=f.onload=function(){!u&&a(f.readyState)&&(u=1,n(),f.onload=f.onreadystatechange=null)},h(function(){u||(u=1,n(1))},o),l?f.onload():m.parentNode.insertBefore(f,m)},e.yepnope.injectCss=function(e,n,i,o,a,l){var c,o=t.createElement("link"),n=l?s:n||r
o.href=e,o.rel="stylesheet",o.type="text/css"
for(c in i)o.setAttribute(c,i[c])
a||(m.parentNode.insertBefore(o,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(){var e,t,n,i,o,r,a,s,l=[].slice,c={}.hasOwnProperty,u=function(e,t){function n(){this.constructor=e}for(var i in t)c.call(t,i)&&(e[i]=t[i])
return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e}
a=function(){},t=function(){function e(){}return e.prototype.addEventListener=e.prototype.on,e.prototype.on=function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this},e.prototype.emit=function(){var e,t,n,i,o,r
if(i=arguments[0],e=2<=arguments.length?l.call(arguments,1):[],this._callbacks=this._callbacks||{},n=this._callbacks[i])for(o=0,r=n.length;o<r;o++)t=n[o],t.apply(this,e)
return this},e.prototype.removeListener=e.prototype.off,e.prototype.removeAllListeners=e.prototype.off,e.prototype.removeEventListener=e.prototype.off,e.prototype.off=function(e,t){var n,i,o,r,a
if(!this._callbacks||0===arguments.length)return this._callbacks={},this
if(i=this._callbacks[e],!i)return this
if(1===arguments.length)return delete this._callbacks[e],this
for(o=r=0,a=i.length;r<a;o=++r)if(n=i[o],n===t){i.splice(o,1)
break}return this},e}(),e=function(e){function n(e,t){var o,r,a
if(this.element=e,this.version=n.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.")
if(this.element.dropzone)throw new Error("Dropzone already attached.")
if(n.instances.push(this),this.element.dropzone=this,o=null!=(a=n.optionsForElement(this.element))?a:{},this.options=i({},this.defaultOptions,o,null!=t?t:{}),this.options.forceFallback||!n.isBrowserSupported())return this.options.fallback.call(this)
if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.")
if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.")
this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.method=this.options.method.toUpperCase(),(r=this.getExistingFallback())&&r.parentNode&&r.parentNode.removeChild(r),this.options.previewsContainer!==!1&&(this.options.previewsContainer?this.previewsContainer=n.getElement(this.options.previewsContainer,"previewsContainer"):this.previewsContainer=this.element),this.options.clickable&&(this.options.clickable===!0?this.clickableElements=[this.element]:this.clickableElements=n.getElements(this.options.clickable,"clickable")),this.init()}var i,o
return u(n,e),n.prototype.Emitter=t,n.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],n.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,filesizeBase:1e3,maxFiles:null,filesizeBase:1e3,params:{},clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,capture:null,dictDefaultMessage:msg_dropzone,dictFallbackMessage:"Su navegador no soporta arrastrar y soltar la carga de archivos.",dictFallbackText:"Por favor, utilice el formulario de reserva de abajo para subir tus archivos, como en los viejos tiempos.",dictFileTooBig:"El archivo es demasiado grande ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"No puedes subir archivos de este tipo.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancelar carga",dictCancelUploadConfirmation:"¿Seguro que desea cancelar esta subida?",dictRemoveFile:"Remover archivo",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"No puedes subir más archivos.",accept:function(e,t){return t()},init:function(){return a},forceFallback:!1,fallback:function(){var e,t,i,o,r,a
for(this.element.className=""+this.element.className+" dz-browser-not-supported",a=this.element.getElementsByTagName("div"),o=0,r=a.length;o<r;o++)e=a[o],/(^| )dz-message($| )/.test(e.className)&&(t=e,e.className="dz-message")
return t||(t=n.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(t)),i=t.getElementsByTagName("span")[0],i&&(i.textContent=this.options.dictFallbackMessage),this.element.appendChild(this.getFallbackForm())},resize:function(e){var t,n,i
return t={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},n=e.width/e.height,t.optWidth=this.options.thumbnailWidth,t.optHeight=this.options.thumbnailHeight,null==t.optWidth&&null==t.optHeight?(t.optWidth=t.srcWidth,t.optHeight=t.srcHeight):null==t.optWidth?t.optWidth=n*t.optHeight:null==t.optHeight&&(t.optHeight=1/n*t.optWidth),i=t.optWidth/t.optHeight,e.height<t.optHeight||e.width<t.optWidth?(t.trgHeight=t.srcHeight,t.trgWidth=t.srcWidth):n>i?(t.srcHeight=e.height,t.srcWidth=t.srcHeight*i):(t.srcWidth=e.width,t.srcHeight=t.srcWidth/i),t.srcX=(e.width-t.srcWidth)/2,t.srcY=(e.height-t.srcHeight)/2,t},drop:function(e){return this.element.classList.remove("dz-drag-hover")},dragstart:a,dragend:function(e){return this.element.classList.remove("dz-drag-hover")},dragenter:function(e){return this.element.classList.add("dz-drag-hover")},dragover:function(e){return this.element.classList.add("dz-drag-hover")},dragleave:function(e){return this.element.classList.remove("dz-drag-hover")},paste:a,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){var t,i,o,r,a,s,l,c,u,d,p,f,h
if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(e.previewElement=n.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement),d=e.previewElement.querySelectorAll("[data-dz-name]"),r=0,l=d.length;r<l;r++)t=d[r],t.textContent=e.name
for(p=e.previewElement.querySelectorAll("[data-dz-size]"),a=0,c=p.length;a<c;a++)t=p[a],t.innerHTML=this.filesize(e.size)
for(this.options.addRemoveLinks&&(e._removeLink=n.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),e.previewElement.appendChild(e._removeLink)),i=function(t){return function(i){return i.preventDefault(),i.stopPropagation(),e.status===n.UPLOADING?n.confirm(t.options.dictCancelUploadConfirmation,function(){return t.removeFile(e)}):t.options.dictRemoveFileConfirmation?n.confirm(t.options.dictRemoveFileConfirmation,function(){return t.removeFile(e)}):t.removeFile(e)}}(this),f=e.previewElement.querySelectorAll("[data-dz-remove]"),h=[],s=0,u=f.length;s<u;s++)o=f[s],h.push(o.addEventListener("click",i))
return h}},removedfile:function(e){var t
return e.previewElement&&null!=(t=e.previewElement)&&t.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){var n,i,o,r
if(e.previewElement){for(e.previewElement.classList.remove("dz-file-preview"),r=e.previewElement.querySelectorAll("[data-dz-thumbnail]"),i=0,o=r.length;i<o;i++)n=r[i],n.alt=e.name,n.src=t
return setTimeout(function(t){return function(){return e.previewElement.classList.add("dz-image-preview")}}(this),1)}},error:function(e,t){var n,i,o,r,a
if(e.previewElement){for(e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error),r=e.previewElement.querySelectorAll("[data-dz-errormessage]"),a=[],i=0,o=r.length;i<o;i++)n=r[i],a.push(n.textContent=t)
return a}},errormultiple:a,processing:function(e){if(e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink))return e._removeLink.textContent=this.options.dictCancelUpload},processingmultiple:a,uploadprogress:function(e,t,n){var i,o,r,a,s
if(e.previewElement){for(a=e.previewElement.querySelectorAll("[data-dz-uploadprogress]"),s=[],o=0,r=a.length;o<r;o++)i=a[o],"PROGRESS"===i.nodeName?s.push(i.value=t):s.push(i.style.width=""+t+"%")
return s}},totaluploadprogress:a,sending:a,sendingmultiple:a,success:function(e){if(e.previewElement)return e.previewElement.classList.add("dz-success")},successmultiple:a,canceled:function(e){return this.emit("error",e,"Upload canceled.")},canceledmultiple:a,complete:function(e){if(e._removeLink&&(e._removeLink.textContent=this.options.dictRemoveFile),e.previewElement)return e.previewElement.classList.add("dz-complete")},completemultiple:a,maxfilesexceeded:a,maxfilesreached:a,queuecomplete:a,previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'},i=function(){var e,t,n,i,o,r,a
for(i=arguments[0],n=2<=arguments.length?l.call(arguments,1):[],r=0,a=n.length;r<a;r++){t=n[r]
for(e in t)o=t[e],i[e]=o}return i},n.prototype.getAcceptedFiles=function(){var e,t,n,i,o
for(i=this.files,o=[],t=0,n=i.length;t<n;t++)e=i[t],e.accepted&&o.push(e)
return o},n.prototype.getRejectedFiles=function(){var e,t,n,i,o
for(i=this.files,o=[],t=0,n=i.length;t<n;t++)e=i[t],e.accepted||o.push(e)
return o},n.prototype.getFilesWithStatus=function(e){var t,n,i,o,r
for(o=this.files,r=[],n=0,i=o.length;n<i;n++)t=o[n],t.status===e&&r.push(t)
return r},n.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(n.QUEUED)},n.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(n.UPLOADING)},n.prototype.getActiveFiles=function(){var e,t,i,o,r
for(o=this.files,r=[],t=0,i=o.length;t<i;t++)e=o[t],e.status!==n.UPLOADING&&e.status!==n.QUEUED||r.push(e)
return r},n.prototype.init=function(){var e,t,i,o,r,a,s
for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(n.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(i=function(e){return function(){return e.hiddenFileInput&&document.body.removeChild(e.hiddenFileInput),e.hiddenFileInput=document.createElement("input"),e.hiddenFileInput.setAttribute("type","file"),(null==e.options.maxFiles||e.options.maxFiles>1)&&e.hiddenFileInput.setAttribute("multiple","multiple"),e.hiddenFileInput.className="dz-hidden-input",null!=e.options.acceptedFiles&&e.hiddenFileInput.setAttribute("accept",e.options.acceptedFiles),null!=e.options.capture&&e.hiddenFileInput.setAttribute("capture",e.options.capture),e.hiddenFileInput.style.visibility="hidden",e.hiddenFileInput.style.position="absolute",e.hiddenFileInput.style.top="0",e.hiddenFileInput.style.left="0",e.hiddenFileInput.style.height="0",e.hiddenFileInput.style.width="0",document.body.appendChild(e.hiddenFileInput),e.hiddenFileInput.addEventListener("change",function(){var t,n,o,r
if(n=e.hiddenFileInput.files,n.length)for(o=0,r=n.length;o<r;o++)t=n[o],e.addFile(t)
return i()})}}(this))(),this.URL=null!=(a=window.URL)?a:window.webkitURL,s=this.events,o=0,r=s.length;o<r;o++)e=s[o],this.on(e,this.options[e])
return this.on("uploadprogress",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("removedfile",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("canceled",function(e){return function(t){return e.emit("complete",t)}}(this)),this.on("complete",function(e){return function(t){if(0===e.getUploadingFiles().length&&0===e.getQueuedFiles().length)return setTimeout(function(){return e.emit("queuecomplete")},0)}}(this)),t=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:function(e){return function(t){return e.emit("dragstart",t)}}(this),dragenter:function(e){return function(n){return t(n),e.emit("dragenter",n)}}(this),dragover:function(e){return function(n){var i
try{i=n.dataTransfer.effectAllowed}catch(e){}return n.dataTransfer.dropEffect="move"===i||"linkMove"===i?"move":"copy",t(n),e.emit("dragover",n)}}(this),dragleave:function(e){return function(t){return e.emit("dragleave",t)}}(this),drop:function(e){return function(n){return t(n),e.drop(n)}}(this),dragend:function(e){return function(t){return e.emit("dragend",t)}}(this)}}],this.clickableElements.forEach(function(e){return function(t){return e.listeners.push({element:t,events:{click:function(i){if(t!==e.element||i.target===e.element||n.elementInside(i.target,e.element.querySelector(".dz-message")))return e.hiddenFileInput.click()}}})}}(this)),this.enable(),this.options.init.call(this)},n.prototype.destroy=function(){var e
return this.disable(),this.removeAllFiles(!0),(null!=(e=this.hiddenFileInput)?e.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,n.instances.splice(n.instances.indexOf(this),1)},n.prototype.updateTotalUploadProgress=function(){var e,t,n,i,o,r,a,s
if(i=0,n=0,e=this.getActiveFiles(),e.length){for(s=this.getActiveFiles(),r=0,a=s.length;r<a;r++)t=s[r],i+=t.upload.bytesSent,n+=t.upload.total
o=100*i/n}else o=100
return this.emit("totaluploadprogress",o,n,i)},n.prototype._getParamName=function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):""+this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")},n.prototype.getFallbackForm=function(){var e,t,i,o
return(e=this.getExistingFallback())?e:(i='<div class="dz-fallback">',this.options.dictFallbackText&&(i+="<p>"+this.options.dictFallbackText+"</p>"),i+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',t=n.createElement(i),"FORM"!==this.element.tagName?(o=n.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>'),o.appendChild(t)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=o?o:t)},n.prototype.getExistingFallback=function(){var e,t,n,i,o,r
for(t=function(e){var t,n,i
for(n=0,i=e.length;n<i;n++)if(t=e[n],/(^| )fallback($| )/.test(t.className))return t},r=["div","form"],i=0,o=r.length;i<o;i++)if(n=r[i],e=t(this.element.getElementsByTagName(n)))return e},n.prototype.setupEventListeners=function(){var e,t,n,i,o,r,a
for(r=this.listeners,a=[],i=0,o=r.length;i<o;i++)e=r[i],a.push(function(){var i,o
i=e.events,o=[]
for(t in i)n=i[t],o.push(e.element.addEventListener(t,n,!1))
return o}())
return a},n.prototype.removeEventListeners=function(){var e,t,n,i,o,r,a
for(r=this.listeners,a=[],i=0,o=r.length;i<o;i++)e=r[i],a.push(function(){var i,o
i=e.events,o=[]
for(t in i)n=i[t],o.push(e.element.removeEventListener(t,n,!1))
return o}())
return a},n.prototype.disable=function(){var e,t,n,i,o
for(this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),i=this.files,o=[],t=0,n=i.length;t<n;t++)e=i[t],o.push(this.cancelUpload(e))
return o},n.prototype.enable=function(){return this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()},n.prototype.filesize=function(e){var t,n,i,o,r,a,s,l
for(a=["TB","GB","MB","KB","b"],i=o=null,n=s=0,l=a.length;s<l;n=++s)if(r=a[n],t=Math.pow(this.options.filesizeBase,4-n)/10,e>=t){i=e/Math.pow(this.options.filesizeBase,4-n),o=r
break}return i=Math.round(10*i)/10,"<strong>"+i+"</strong> "+o},n.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},n.prototype.drop=function(e){var t,n
e.dataTransfer&&(this.emit("drop",e),t=e.dataTransfer.files,t.length&&(n=e.dataTransfer.items,n&&n.length&&null!=n[0].webkitGetAsEntry?this._addFilesFromItems(n):this.handleFiles(t)))},n.prototype.paste=function(e){var t,n
if(null!=(null!=e&&null!=(n=e.clipboardData)?n.items:void 0))return this.emit("paste",e),t=e.clipboardData.items,t.length?this._addFilesFromItems(t):void 0},n.prototype.handleFiles=function(e){var t,n,i,o
for(o=[],n=0,i=e.length;n<i;n++)t=e[n],o.push(this.addFile(t))
return o},n.prototype._addFilesFromItems=function(e){var t,n,i,o,r
for(r=[],i=0,o=e.length;i<o;i++)n=e[i],null!=n.webkitGetAsEntry&&(t=n.webkitGetAsEntry())?t.isFile?r.push(this.addFile(n.getAsFile())):t.isDirectory?r.push(this._addFilesFromDirectory(t,t.name)):r.push(void 0):null!=n.getAsFile&&(null==n.kind||"file"===n.kind)?r.push(this.addFile(n.getAsFile())):r.push(void 0)
return r},n.prototype._addFilesFromDirectory=function(e,t){var n,i
return n=e.createReader(),i=function(e){return function(n){var i,o,r
for(o=0,r=n.length;o<r;o++)i=n[o],i.isFile?i.file(function(n){if(!e.options.ignoreHiddenFiles||"."!==n.name.substring(0,1))return n.fullPath=""+t+"/"+n.name,e.addFile(n)}):i.isDirectory&&e._addFilesFromDirectory(i,""+t+"/"+i.name)}}(this),n.readEntries(i,function(e){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log(e):void 0})},n.prototype.accept=function(e,t){return e.size>1024*this.options.maxFilesize*1024?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):n.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)},n.prototype.addFile=function(e){return e.upload={progress:0,total:e.size,bytesSent:0},this.files.push(e),e.status=n.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,function(t){return function(n){return n?(e.accepted=!1,t._errorProcessing([e],n)):(e.accepted=!0,t.options.autoQueue&&t.enqueueFile(e)),t._updateMaxFilesReachedClass()}}(this))},n.prototype.enqueueFiles=function(e){var t,n,i
for(n=0,i=e.length;n<i;n++)t=e[n],this.enqueueFile(t)
return null},n.prototype.enqueueFile=function(e){if(e.status!==n.ADDED||e.accepted!==!0)throw new Error("This file can't be queued because it has already been processed or was rejected.")
if(e.status=n.QUEUED,this.options.autoProcessQueue)return setTimeout(function(e){return function(){return e.processQueue()}}(this),0)},n.prototype._thumbnailQueue=[],n.prototype._processingThumbnail=!1,n.prototype._enqueueThumbnail=function(e){if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024)return this._thumbnailQueue.push(e),setTimeout(function(e){return function(){return e._processThumbnailQueue()}}(this),0)},n.prototype._processThumbnailQueue=function(){if(!this._processingThumbnail&&0!==this._thumbnailQueue.length)return this._processingThumbnail=!0,this.createThumbnail(this._thumbnailQueue.shift(),function(e){return function(){return e._processingThumbnail=!1,e._processThumbnailQueue()}}(this))},n.prototype.removeFile=function(e){if(e.status===n.UPLOADING&&this.cancelUpload(e),this.files=s(this.files,e),this.emit("removedfile",e),0===this.files.length)return this.emit("reset")},n.prototype.removeAllFiles=function(e){var t,i,o,r
for(null==e&&(e=!1),r=this.files.slice(),i=0,o=r.length;i<o;i++)t=r[i],(t.status!==n.UPLOADING||e)&&this.removeFile(t)
return null},n.prototype.createThumbnail=function(e,t){var n
return n=new FileReader,n.onload=function(i){return function(){return"image/svg+xml"===e.type?(i.emit("thumbnail",e,n.result),void(null!=t&&t())):i.createThumbnailFromUrl(e,n.result,t)}}(this),n.readAsDataURL(e)},n.prototype.createThumbnailFromUrl=function(e,t,n){var i
return i=document.createElement("img"),i.onload=function(t){return function(){var o,a,s,l,c,u,d,p
if(e.width=i.width,e.height=i.height,s=t.options.resize.call(t,e),null==s.trgWidth&&(s.trgWidth=s.optWidth),null==s.trgHeight&&(s.trgHeight=s.optHeight),o=document.createElement("canvas"),a=o.getContext("2d"),o.width=s.trgWidth,o.height=s.trgHeight,r(a,i,null!=(c=s.srcX)?c:0,null!=(u=s.srcY)?u:0,s.srcWidth,s.srcHeight,null!=(d=s.trgX)?d:0,null!=(p=s.trgY)?p:0,s.trgWidth,s.trgHeight),l=o.toDataURL("image/png"),t.emit("thumbnail",e,l),null!=n)return n()}}(this),null!=n&&(i.onerror=n),i.src=t},n.prototype.processQueue=function(){var e,t,n,i
if(t=this.options.parallelUploads,n=this.getUploadingFiles().length,e=n,!(n>=t)&&(i=this.getQueuedFiles(),i.length>0)){if(this.options.uploadMultiple)return this.processFiles(i.slice(0,t-n))
for(;e<t;){if(!i.length)return
this.processFile(i.shift()),e++}}},n.prototype.processFile=function(e){return this.processFiles([e])},n.prototype.processFiles=function(e){var t,i,o
for(i=0,o=e.length;i<o;i++)t=e[i],t.processing=!0,t.status=n.UPLOADING,this.emit("processing",t)
return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)},n.prototype._getFilesWithXhr=function(e){var t,n
return n=function(){var n,i,o,r
for(o=this.files,r=[],n=0,i=o.length;n<i;n++)t=o[n],t.xhr===e&&r.push(t)
return r}.call(this)},n.prototype.cancelUpload=function(e){var t,i,o,r,a,s,l
if(e.status===n.UPLOADING){for(i=this._getFilesWithXhr(e.xhr),o=0,a=i.length;o<a;o++)t=i[o],t.status=n.CANCELED
for(e.xhr.abort(),r=0,s=i.length;r<s;r++)t=i[r],this.emit("canceled",t)
this.options.uploadMultiple&&this.emit("canceledmultiple",i)}else(l=e.status)!==n.ADDED&&l!==n.QUEUED||(e.status=n.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]))
if(this.options.autoProcessQueue)return this.processQueue()},o=function(){var e,t
return t=arguments[0],e=2<=arguments.length?l.call(arguments,1):[],"function"==typeof t?t.apply(this,e):t},n.prototype.uploadFile=function(e){return this.uploadFiles([e])},n.prototype.uploadFiles=function(e){var t,r,a,s,l,c,u,d,p,f,h,m,g,v,y,b,w,x,_,C,S,T,D,k,E,I,A,F,M,P,O,L,N,$
for(_=new XMLHttpRequest,C=0,k=e.length;C<k;C++)t=e[C],t.xhr=_
m=o(this.options.method,e),w=o(this.options.url,e),_.open(m,w,!0),_.withCredentials=!!this.options.withCredentials,y=null,a=function(n){return function(){var i,o,r
for(r=[],i=0,o=e.length;i<o;i++)t=e[i],r.push(n._errorProcessing(e,y||n.options.dictResponseError.replace("{{statusCode}}",_.status),_))
return r}}(this),b=function(n){return function(i){var o,r,a,s,l,c,u,d,p
if(null!=i)for(r=100*i.loaded/i.total,a=0,c=e.length;a<c;a++)t=e[a],t.upload={progress:r,total:i.total,bytesSent:i.loaded}
else{for(o=!0,r=100,s=0,u=e.length;s<u;s++)t=e[s],100===t.upload.progress&&t.upload.bytesSent===t.upload.total||(o=!1),t.upload.progress=r,t.upload.bytesSent=t.upload.total
if(o)return}for(p=[],l=0,d=e.length;l<d;l++)t=e[l],p.push(n.emit("uploadprogress",t,r,t.upload.bytesSent))
return p}}(this),_.onload=function(t){return function(i){var o
if(e[0].status!==n.CANCELED&&4===_.readyState){if(y=_.responseText,_.getResponseHeader("content-type")&&~_.getResponseHeader("content-type").indexOf("application/json"))try{y=JSON.parse(y)}catch(e){i=e,y="Invalid JSON response from server."}return b(),200<=(o=_.status)&&o<300?t._finished(e,y,i):a()}}}(this),_.onerror=function(t){return function(){if(e[0].status!==n.CANCELED)return a()}}(this),v=null!=(M=_.upload)?M:_,v.onprogress=b,c={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&i(c,this.options.headers)
for(s in c)l=c[s],_.setRequestHeader(s,l)
if(r=new FormData,this.options.params){P=this.options.params
for(h in P)x=P[h],r.append(h,x)}for(S=0,E=e.length;S<E;S++)t=e[S],this.emit("sending",t,_,r)
if(this.options.uploadMultiple&&this.emit("sendingmultiple",e,_,r),"FORM"===this.element.tagName)for(O=this.element.querySelectorAll("input, textarea, select, button"),T=0,I=O.length;T<I;T++)if(d=O[T],p=d.getAttribute("name"),f=d.getAttribute("type"),"SELECT"===d.tagName&&d.hasAttribute("multiple"))for(L=d.options,D=0,A=L.length;D<A;D++)g=L[D],g.selected&&r.append(p,g.value)
else(!f||"checkbox"!==(N=f.toLowerCase())&&"radio"!==N||d.checked)&&r.append(p,d.value)
for(u=F=0,$=e.length-1;0<=$?F<=$:F>=$;u=0<=$?++F:--F)r.append(this._getParamName(u),e[u],e[u].name)
return _.send(r)},n.prototype._finished=function(e,t,i){var o,r,a
for(r=0,a=e.length;r<a;r++)o=e[r],o.status=n.SUCCESS,this.emit("success",o,t,i),this.emit("complete",o)
if(this.options.uploadMultiple&&(this.emit("successmultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()},n.prototype._errorProcessing=function(e,t,i){var o,r,a
for(r=0,a=e.length;r<a;r++)o=e[r],o.status=n.ERROR,this.emit("error",o,t,i),this.emit("complete",o)
if(this.options.uploadMultiple&&(this.emit("errormultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()},n}(t),e.version="4.0.1",e.options={},e.optionsForElement=function(t){return t.getAttribute("id")?e.options[n(t.getAttribute("id"))]:void 0},e.instances=[],e.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.")
return e.dropzone},e.autoDiscover=!0,e.discover=function(){var t,n,i,o,r,a
for(document.querySelectorAll?i=document.querySelectorAll(".dropzone"):(i=[],t=function(e){var t,n,o,r
for(r=[],n=0,o=e.length;n<o;n++)t=e[n],/(^| )dropzone($| )/.test(t.className)?r.push(i.push(t)):r.push(void 0)
return r},t(document.getElementsByTagName("div")),t(document.getElementsByTagName("form"))),a=[],o=0,r=i.length;o<r;o++)n=i[o],e.optionsForElement(n)!==!1?a.push(new e(n)):a.push(void 0)
return a},e.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],e.isBrowserSupported=function(){var t,n,i,o,r
if(t=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(r=e.blacklistedBrowsers,i=0,o=r.length;i<o;i++)n=r[i],n.test(navigator.userAgent)&&(t=!1)
else t=!1
else t=!1
return t},s=function(e,t){var n,i,o,r
for(r=[],i=0,o=e.length;i<o;i++)n=e[i],n!==t&&r.push(n)
return r},n=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})},e.createElement=function(e){var t
return t=document.createElement("div"),t.innerHTML=e,t.childNodes[0]},e.elementInside=function(e,t){if(e===t)return!0
for(;e=e.parentNode;)if(e===t)return!0
return!1},e.getElement=function(e,t){var n
if("string"==typeof e?n=document.querySelector(e):null!=e.nodeType&&(n=e),null==n)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.")
return n},e.getElements=function(e,t){var n,i,o,r,a,s,l,c
if(e instanceof Array){o=[]
try{for(r=0,s=e.length;r<s;r++)i=e[r],o.push(this.getElement(i,t))}catch(e){n=e,o=null}}else if("string"==typeof e)for(o=[],c=document.querySelectorAll(e),a=0,l=c.length;a<l;a++)i=c[a],o.push(i)
else null!=e.nodeType&&(o=[e])
if(null==o||!o.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.")
return o},e.confirm=function(e,t,n){return window.confirm(e)?t():null!=n?n():void 0},e.isValidFile=function(e,t){var n,i,o,r,a
if(!t)return!0
for(t=t.split(","),i=e.type,n=i.replace(/\/.*$/,""),r=0,a=t.length;r<a;r++)if(o=t[r],o=o.trim(),"."===o.charAt(0)){if(e.name.toLowerCase().indexOf(o.toLowerCase(),e.name.length-o.length)!==-1)return!0}else if(/\/\*$/.test(o)){if(n===o.replace(/\/.*$/,""))return!0}else if(i===o)return!0
return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(t){return this.each(function(){return new e(this,t)})}),"undefined"!=typeof module&&null!==module?module.exports=e:window.Dropzone=e,e.ADDED="added",e.QUEUED="queued",e.ACCEPTED=e.QUEUED,e.UPLOADING="uploading",e.PROCESSING=e.UPLOADING,e.CANCELED="canceled",e.ERROR="error",e.SUCCESS="success",o=function(e){var t,n,i,o,r,a,s,l,c,u
for(s=e.naturalWidth,a=e.naturalHeight,n=document.createElement("canvas"),n.width=1,n.height=a,i=n.getContext("2d"),i.drawImage(e,0,0),o=i.getImageData(0,0,1,a).data,u=0,r=a,l=a;l>u;)t=o[4*(l-1)+3],0===t?r=l:u=l,l=r+u>>1
return c=l/a,0===c?1:c},r=function(e,t,n,i,r,a,s,l,c,u){var d
return d=o(t),e.drawImage(t,n,i,r,a,s,l,c,u/d)},i=function(e,t){var n,i,o,r,a,s,l,c,u
if(o=!1,u=!0,i=e.document,c=i.documentElement,n=i.addEventListener?"addEventListener":"attachEvent",l=i.addEventListener?"removeEventListener":"detachEvent",s=i.addEventListener?"":"on",r=function(n){if("readystatechange"!==n.type||"complete"===i.readyState)return("load"===n.type?e:i)[l](s+n.type,r,!1),!o&&(o=!0)?t.call(e,n.type||n):void 0},a=function(){var e
try{c.doScroll("left")}catch(t){return e=t,void setTimeout(a,50)}return r("poll")},"complete"!==i.readyState){if(i.createEventObject&&c.doScroll){try{u=!e.frameElement}catch(e){}u&&a()}return i[n](s+"DOMContentLoaded",r,!1),i[n](s+"readystatechange",r,!1),e[n](s+"load",r,!1)}},e._autoDiscoverFunction=function(){if(e.autoDiscover)return e.discover()},i(window,e._autoDiscoverFunction)}.call(this),function(e,t,n){var i=function(i){function o(e){var t,n,r={}
i.each(e,function(i){(t=i.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(t[1]+" ")&&(n=i.replace(t[0],t[2].toLowerCase()),r[n]=i,"o"===t[1]&&o(e[i]))}),e._hungarianMap=r}function r(e,t,a){e._hungarianMap||o(e)
var s
i.each(t,function(o){s=e._hungarianMap[o],s===n||!a&&t[s]!==n||("o"===s.charAt(0)?(t[s]||(t[s]={}),i.extend(!0,t[s],t[o]),r(e[s],t[s],a)):t[s]=t[o])})}function a(e){var t=qe.defaults.oLanguage,n=e.sZeroRecords
!e.sEmptyTable&&n&&"No data available in table"===t.sEmptyTable&&Pe(e,e,"sZeroRecords","sEmptyTable"),!e.sLoadingRecords&&n&&"Loading..."===t.sLoadingRecords&&Pe(e,e,"sZeroRecords","sLoadingRecords"),e.sInfoThousands&&(e.sThousands=e.sInfoThousands),(e=e.sDecimal)&&ze(e)}function s(e){if(pt(e,"ordering","bSort"),pt(e,"orderMulti","bSortMulti"),pt(e,"orderClasses","bSortClasses"),pt(e,"orderCellsTop","bSortCellsTop"),pt(e,"order","aaSorting"),pt(e,"orderFixed","aaSortingFixed"),pt(e,"paging","bPaginate"),pt(e,"pagingType","sPaginationType"),pt(e,"pageLength","iDisplayLength"),pt(e,"searching","bFilter"),"boolean"==typeof e.sScrollX&&(e.sScrollX=e.sScrollX?"100%":""),e=e.aoSearchCols)for(var t=0,n=e.length;t<n;t++)e[t]&&r(qe.models.oSearch,e[t])}function l(e){pt(e,"orderable","bSortable"),pt(e,"orderData","aDataSort"),pt(e,"orderSequence","asSorting"),pt(e,"orderDataType","sortDataType")
var t=e.aDataSort
t&&!i.isArray(t)&&(e.aDataSort=[t])}function c(e){if(!qe.__browser){var t={}
qe.__browser=t
var n=i("<div/>").css({position:"fixed",top:0,left:0,height:1,width:1,overflow:"hidden"}).append(i("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(i("<div/>").css({width:"100%",height:10}))).appendTo("body"),o=n.children(),r=o.children()
t.barWidth=o[0].offsetWidth-o[0].clientWidth,t.bScrollOversize=100===r[0].offsetWidth&&100!==o[0].clientWidth,t.bScrollbarLeft=1!==Math.round(r.offset().left),t.bBounding=!!n[0].getBoundingClientRect().width,n.remove()}i.extend(e.oBrowser,qe.__browser),e.oScroll.iBarWidth=qe.__browser.barWidth}function u(e,t,i,o,r,a){var s,l=!1
for(i!==n&&(s=i,l=!0);o!==r;)e.hasOwnProperty(o)&&(s=l?t(s,e[o],o,e):e[o],l=!0,o+=a)
return s}function d(e,n){var o=qe.defaults.column,r=e.aoColumns.length,o=i.extend({},qe.models.oColumn,o,{nTh:n?n:t.createElement("th"),sTitle:o.sTitle?o.sTitle:n?n.innerHTML:"",aDataSort:o.aDataSort?o.aDataSort:[r],mData:o.mData?o.mData:r,idx:r})
e.aoColumns.push(o),o=e.aoPreSearchCols,o[r]=i.extend({},qe.models.oSearch,o[r]),p(e,r,i(n).data())}function p(e,t,o){var t=e.aoColumns[t],a=e.oClasses,s=i(t.nTh)
if(!t.sWidthOrig){t.sWidthOrig=s.attr("width")||null
var c=(s.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/)
c&&(t.sWidthOrig=c[1])}o!==n&&null!==o&&(l(o),r(qe.defaults.column,o),o.mDataProp!==n&&!o.mData&&(o.mData=o.mDataProp),o.sType&&(t._sManualType=o.sType),o.className&&!o.sClass&&(o.sClass=o.className),i.extend(t,o),Pe(t,o,"sWidth","sWidthOrig"),o.iDataSort!==n&&(t.aDataSort=[o.iDataSort]),Pe(t,o,"aDataSort"))
var u=t.mData,d=T(u),p=t.mRender?T(t.mRender):null,o=function(e){return"string"==typeof e&&-1!==e.indexOf("@")}
t._bAttrSrc=i.isPlainObject(u)&&(o(u.sort)||o(u.type)||o(u.filter)),t.fnGetData=function(e,t,i){var o=d(e,t,n,i)
return p&&t?p(o,t,e,i):o},t.fnSetData=function(e,t,n){return D(u)(e,t,n)},"number"!=typeof u&&(e._rowReadObject=!0),e.oFeatures.bSort||(t.bSortable=!1,s.addClass(a.sSortableNone)),e=-1!==i.inArray("asc",t.asSorting),o=-1!==i.inArray("desc",t.asSorting),t.bSortable&&(e||o)?e&&!o?(t.sSortingClass=a.sSortableAsc,t.sSortingClassJUI=a.sSortJUIAscAllowed):!e&&o?(t.sSortingClass=a.sSortableDesc,t.sSortingClassJUI=a.sSortJUIDescAllowed):(t.sSortingClass=a.sSortable,t.sSortingClassJUI=a.sSortJUI):(t.sSortingClass=a.sSortableNone,t.sSortingClassJUI="")}function f(e){if(!1!==e.oFeatures.bAutoWidth){var t=e.aoColumns
ge(e)
for(var n=0,i=t.length;n<i;n++)t[n].nTh.style.width=t[n].sWidth}t=e.oScroll,(""!==t.sY||""!==t.sX)&&he(e),$e(e,null,"column-sizing",[e])}function h(e,t){var n=v(e,"bVisible")
return"number"==typeof n[t]?n[t]:null}function m(e,t){var n=v(e,"bVisible"),n=i.inArray(t,n)
return-1!==n?n:null}function g(e){return v(e,"bVisible").length}function v(e,t){var n=[]
return i.map(e.aoColumns,function(e,i){e[t]&&n.push(i)}),n}function y(e){var t,i,o,r,a,s,l,c,u,d=e.aoColumns,p=e.aoData,f=qe.ext.type.detect
for(t=0,i=d.length;t<i;t++)if(l=d[t],u=[],!l.sType&&l._sManualType)l.sType=l._sManualType
else if(!l.sType){for(o=0,r=f.length;o<r;o++){for(a=0,s=p.length;a<s&&(u[a]===n&&(u[a]=_(e,a,t,"type")),c=f[o](u[a],e),c||o===f.length-1)&&"html"!==c;a++);if(c){l.sType=c
break}}l.sType||(l.sType="string")}}function b(e,t,o,r){var a,s,l,c,u,p,f=e.aoColumns
if(t)for(a=t.length-1;0<=a;a--){p=t[a]
var h=p.targets!==n?p.targets:p.aTargets
for(i.isArray(h)||(h=[h]),s=0,l=h.length;s<l;s++)if("number"==typeof h[s]&&0<=h[s]){for(;f.length<=h[s];)d(e)
r(h[s],p)}else if("number"==typeof h[s]&&0>h[s])r(f.length+h[s],p)
else if("string"==typeof h[s])for(c=0,u=f.length;c<u;c++)("_all"==h[s]||i(f[c].nTh).hasClass(h[s]))&&r(c,p)}if(o)for(a=0,e=o.length;a<e;a++)r(a,o[a])}function w(e,t,o,r){var a=e.aoData.length,s=i.extend(!0,{},qe.models.oRow,{src:o?"dom":"data",idx:a})
s._aData=t,e.aoData.push(s)
for(var l=e.aoColumns,c=0,u=l.length;c<u;c++)l[c].sType=null
return e.aiDisplayMaster.push(a),t=e.rowIdFn(t),t!==n&&(e.aIds[t]=s),(o||!e.oFeatures.bDeferRender)&&M(e,a,o,r),a}function x(e,t){var n
return t instanceof i||(t=i(t)),t.map(function(t,i){return n=F(e,i),w(e,n.data,i,n.cells)})}function _(e,t,i,o){var r=e.iDraw,a=e.aoColumns[i],s=e.aoData[t]._aData,l=a.sDefaultContent,i=a.fnGetData(s,o,{settings:e,row:t,col:i})
if(i===n)return e.iDrawError!=r&&null===l&&(Me(e,0,"Requested unknown parameter "+("function"==typeof a.mData?"{function}":"'"+a.mData+"'")+" for row "+t,4),e.iDrawError=r),l
if(i!==s&&null!==i||null===l){if("function"==typeof i)return i.call(s)}else i=l
return null===i&&"display"==o?"":i}function C(e,t,n,i){e.aoColumns[n].fnSetData(e.aoData[t]._aData,i,{settings:e,row:t,col:n})}function S(e){return i.map(e.match(/(\\.|[^\.])+/g)||[""],function(e){return e.replace(/\\./g,".")})}function T(e){if(i.isPlainObject(e)){var t={}
return i.each(e,function(e,n){n&&(t[e]=T(n))}),function(e,i,o,r){var a=t[i]||t._
return a!==n?a(e,i,o,r):e}}if(null===e)return function(e){return e}
if("function"==typeof e)return function(t,n,i,o){return e(t,n,i,o)}
if("string"==typeof e&&(-1!==e.indexOf(".")||-1!==e.indexOf("[")||-1!==e.indexOf("("))){var o=function(e,t,r){var a,s
if(""!==r){s=S(r)
for(var l=0,c=s.length;l<c;l++){if(r=s[l].match(ft),a=s[l].match(ht),r){if(s[l]=s[l].replace(ft,""),""!==s[l]&&(e=e[s[l]]),a=[],s.splice(0,l+1),s=s.join("."),i.isArray(e))for(l=0,c=e.length;l<c;l++)a.push(o(e[l],t,s))
e=r[0].substring(1,r[0].length-1),e=""===e?a:a.join(e)
break}if(a)s[l]=s[l].replace(ht,""),e=e[s[l]]()
else{if(null===e||e[s[l]]===n)return n
e=e[s[l]]}}}return e}
return function(t,n){return o(t,n,e)}}return function(t){return t[e]}}function D(e){if(i.isPlainObject(e))return D(e._)
if(null===e)return function(){}
if("function"==typeof e)return function(t,n,i){e(t,"set",n,i)}
if("string"==typeof e&&(-1!==e.indexOf(".")||-1!==e.indexOf("[")||-1!==e.indexOf("("))){var t=function(e,o,r){var a,r=S(r)
a=r[r.length-1]
for(var s,l,c=0,u=r.length-1;c<u;c++){if(s=r[c].match(ft),l=r[c].match(ht),s){if(r[c]=r[c].replace(ft,""),e[r[c]]=[],a=r.slice(),a.splice(0,c+1),s=a.join("."),i.isArray(o))for(l=0,u=o.length;l<u;l++)a={},t(a,o[l],s),e[r[c]].push(a)
else e[r[c]]=o
return}l&&(r[c]=r[c].replace(ht,""),e=e[r[c]](o)),null!==e[r[c]]&&e[r[c]]!==n||(e[r[c]]={}),e=e[r[c]]}a.match(ht)?e[a.replace(ht,"")](o):e[a.replace(ft,"")]=o}
return function(n,i){return t(n,i,e)}}return function(t,n){t[e]=n}}function k(e){return st(e.aoData,"_aData")}function E(e){e.aoData.length=0,e.aiDisplayMaster.length=0,e.aiDisplay.length=0,e.aIds={}}function I(e,t,i){for(var o=-1,r=0,a=e.length;r<a;r++)e[r]==t?o=r:e[r]>t&&e[r]--;-1!=o&&i===n&&e.splice(o,1)}function A(e,t,i,o){var r,a=e.aoData[t],s=function(n,i){for(;n.childNodes.length;)n.removeChild(n.firstChild)
n.innerHTML=_(e,t,i,"display")}
if("dom"!==i&&(i&&"auto"!==i||"dom"!==a.src)){var l=a.anCells
if(l)if(o!==n)s(l[o],o)
else for(i=0,r=l.length;i<r;i++)s(l[i],i)}else a._aData=F(e,a,o,o===n?n:a._aData).data
if(a._aSortData=null,a._aFilterData=null,s=e.aoColumns,o!==n)s[o].sType=null
else{for(i=0,r=s.length;i<r;i++)s[i].sType=null
P(e,a)}}function F(e,t,o,r){var a,s,l,c=[],u=t.firstChild,d=0,p=e.aoColumns,f=e._rowReadObject,r=r!==n?r:f?{}:[],h=function(e,t){if("string"==typeof e){var n=e.indexOf("@");-1!==n&&(n=e.substring(n+1),D(e)(r,t.getAttribute(n)))}},m=function(e){o!==n&&o!==d||(s=p[d],l=i.trim(e.innerHTML),s&&s._bAttrSrc?(D(s.mData._)(r,l),h(s.mData.sort,e),h(s.mData.type,e),h(s.mData.filter,e)):f?(s._setter||(s._setter=D(s.mData)),s._setter(r,l)):r[d]=l),d++}
if(u)for(;u;)a=u.nodeName.toUpperCase(),"TD"!=a&&"TH"!=a||(m(u),c.push(u)),u=u.nextSibling
else{c=t.anCells,a=0
for(var g=c.length;a<g;a++)m(c[a])}return(t=u?t:t.nTr)&&(t=t.getAttribute("id"))&&D(e.rowId)(r,t),{data:r,cells:c}}function M(e,n,i,o){var r,a,s,l,c,u=e.aoData[n],d=u._aData,p=[]
if(null===u.nTr){for(r=i||t.createElement("tr"),u.nTr=r,u.anCells=p,r._DT_RowIndex=n,P(e,u),l=0,c=e.aoColumns.length;l<c;l++)s=e.aoColumns[l],a=i?o[l]:t.createElement(s.sCellType),p.push(a),i&&!s.mRender&&s.mData===l||(a.innerHTML=_(e,n,l,"display")),s.sClass&&(a.className+=" "+s.sClass),s.bVisible&&!i?r.appendChild(a):!s.bVisible&&i&&a.parentNode.removeChild(a),s.fnCreatedCell&&s.fnCreatedCell.call(e.oInstance,a,_(e,n,l),d,n,l)
$e(e,"aoRowCreatedCallback",null,[r,d,n])}u.nTr.setAttribute("role","row")}function P(e,t){var n=t.nTr,o=t._aData
if(n){var r=e.rowIdFn(o)
r&&(n.id=r),o.DT_RowClass&&(r=o.DT_RowClass.split(" "),t.__rowc=t.__rowc?dt(t.__rowc.concat(r)):r,i(n).removeClass(t.__rowc.join(" ")).addClass(o.DT_RowClass)),o.DT_RowAttr&&i(n).attr(o.DT_RowAttr),o.DT_RowData&&i(n).data(o.DT_RowData)}}function O(e){var t,n,o,r,a,s=e.nTHead,l=e.nTFoot,c=0===i("th, td",s).length,u=e.oClasses,d=e.aoColumns
for(c&&(r=i("<tr/>").appendTo(s)),t=0,n=d.length;t<n;t++)a=d[t],o=i(a.nTh).addClass(a.sClass),c&&o.appendTo(r),e.oFeatures.bSort&&(o.addClass(a.sSortingClass),!1!==a.bSortable&&(o.attr("tabindex",e.iTabIndex).attr("aria-controls",e.sTableId),De(e,a.nTh,t))),a.sTitle!=o[0].innerHTML&&o.html(a.sTitle),Re(e,"header")(e,o,a,u)
if(c&&R(e.aoHeader,s),i(s).find(">tr").attr("role","row"),i(s).find(">tr>th, >tr>td").addClass(u.sHeaderTH),i(l).find(">tr>th, >tr>td").addClass(u.sFooterTH),null!==l)for(e=e.aoFooter[0],t=0,n=e.length;t<n;t++)a=d[t],a.nTf=e[t].cell,a.sClass&&i(a.nTf).addClass(a.sClass)}function L(e,t,o){var r,a,s,l,c=[],u=[],d=e.aoColumns.length
if(t){for(o===n&&(o=!1),r=0,a=t.length;r<a;r++){for(c[r]=t[r].slice(),c[r].nTr=t[r].nTr,s=d-1;0<=s;s--)!e.aoColumns[s].bVisible&&!o&&c[r].splice(s,1)
u.push([])}for(r=0,a=c.length;r<a;r++){if(e=c[r].nTr)for(;s=e.firstChild;)e.removeChild(s)
for(s=0,t=c[r].length;s<t;s++)if(l=d=1,u[r][s]===n){for(e.appendChild(c[r][s].cell),u[r][s]=1;c[r+d]!==n&&c[r][s].cell==c[r+d][s].cell;)u[r+d][s]=1,d++
for(;c[r][s+l]!==n&&c[r][s].cell==c[r][s+l].cell;){for(o=0;o<d;o++)u[r+o][s+l]=1
l++}i(c[r][s].cell).attr("rowspan",d).attr("colspan",l)}}}}function N(e){var t=$e(e,"aoPreDrawCallback","preDraw",[e])
if(-1!==i.inArray(!1,t))pe(e,!1)
else{var t=[],o=0,r=e.asStripeClasses,a=r.length,s=e.oLanguage,l=e.iInitDisplayStart,c="ssp"==He(e),u=e.aiDisplay
e.bDrawing=!0,l!==n&&-1!==l&&(e._iDisplayStart=c?l:l>=e.fnRecordsDisplay()?0:l,e.iInitDisplayStart=-1)
var l=e._iDisplayStart,d=e.fnDisplayEnd()
if(e.bDeferLoading)e.bDeferLoading=!1,e.iDraw++,pe(e,!1)
else if(c){if(!e.bDestroying&&!z(e))return}else e.iDraw++
if(0!==u.length)for(s=c?e.aoData.length:d,c=c?0:l;c<s;c++){var p=u[c],f=e.aoData[p]
if(null===f.nTr&&M(e,p),p=f.nTr,0!==a){var h=r[o%a]
f._sRowStripe!=h&&(i(p).removeClass(f._sRowStripe).addClass(h),f._sRowStripe=h)}$e(e,"aoRowCallback",null,[p,f._aData,o,c]),t.push(p),o++}else o=s.sZeroRecords,1==e.iDraw&&"ajax"==He(e)?o=s.sLoadingRecords:s.sEmptyTable&&0===e.fnRecordsTotal()&&(o=s.sEmptyTable),t[0]=i("<tr/>",{class:a?r[0]:""}).append(i("<td />",{valign:"top",colSpan:g(e),class:e.oClasses.sRowEmpty}).html(o))[0]
$e(e,"aoHeaderCallback","header",[i(e.nTHead).children("tr")[0],k(e),l,d,u]),$e(e,"aoFooterCallback","footer",[i(e.nTFoot).children("tr")[0],k(e),l,d,u]),r=i(e.nTBody),r.children().detach(),r.append(i(t)),$e(e,"aoDrawCallback","draw",[e]),e.bSorted=!1,e.bFiltered=!1,e.bDrawing=!1}}function $(e,t){var n=e.oFeatures,i=n.bFilter
n.bSort&&Ce(e),i?V(e,e.oPreviousSearch):e.aiDisplay=e.aiDisplayMaster.slice(),!0!==t&&(e._iDisplayStart=0),e._drawHold=t,N(e),e._drawHold=!1}function j(e){var t=e.oClasses,n=i(e.nTable),n=i("<div/>").insertBefore(n),o=e.oFeatures,r=i("<div/>",{id:e.sTableId+"_wrapper",class:t.sWrapper+(e.nTFoot?"":" "+t.sNoFooter)})
e.nHolding=n[0],e.nTableWrapper=r[0],e.nTableReinsertBefore=e.nTable.nextSibling
for(var a,s,l,c,u,d,p=e.sDom.split(""),f=0;f<p.length;f++){if(a=null,s=p[f],"<"==s){if(l=i("<div/>")[0],c=p[f+1],"'"==c||'"'==c){for(u="",d=2;p[f+d]!=c;)u+=p[f+d],d++
"H"==u?u=t.sJUIHeader:"F"==u&&(u=t.sJUIFooter),-1!=u.indexOf(".")?(c=u.split("."),l.id=c[0].substr(1,c[0].length-1),l.className=c[1]):"#"==u.charAt(0)?l.id=u.substr(1,u.length-1):l.className=u,f+=d}r.append(l),r=i(l)}else if(">"==s)r=r.parent()
else if("l"==s&&o.bPaginate&&o.bLengthChange)a=le(e)
else if("f"==s&&o.bFilter)a=B(e)
else if("r"==s&&o.bProcessing)a=de(e)
else if("t"==s)a=fe(e)
else if("i"==s&&o.bInfo)a=ne(e)
else if("p"==s&&o.bPaginate)a=ce(e)
else if(0!==qe.ext.feature.length)for(l=qe.ext.feature,d=0,c=l.length;d<c;d++)if(s==l[d].cFeature){a=l[d].fnInit(e)
break}a&&(l=e.aanFeatures,l[s]||(l[s]=[]),l[s].push(a),r.append(a))}n.replaceWith(r),e.nHolding=null}function R(e,t){var n,o,r,a,s,l,c,u,d,p,f=i(t).children("tr")
for(e.splice(0,e.length),r=0,l=f.length;r<l;r++)e.push([])
for(r=0,l=f.length;r<l;r++)for(n=f[r],o=n.firstChild;o;){if("TD"==o.nodeName.toUpperCase()||"TH"==o.nodeName.toUpperCase()){for(u=1*o.getAttribute("colspan"),d=1*o.getAttribute("rowspan"),u=u&&0!==u&&1!==u?u:1,d=d&&0!==d&&1!==d?d:1,a=0,s=e[r];s[a];)a++
for(c=a,p=1===u,s=0;s<u;s++)for(a=0;a<d;a++)e[r+a][c+s]={cell:o,unique:p},e[r+a].nTr=n}o=o.nextSibling}}function H(e,t,n){var i=[]
n||(n=e.aoHeader,t&&(n=[],R(n,t)))
for(var t=0,o=n.length;t<o;t++)for(var r=0,a=n[t].length;r<a;r++)!n[t][r].unique||i[r]&&e.bSortCellsTop||(i[r]=n[t][r].cell)
return i}function W(e,t,n){if($e(e,"aoServerParams","serverParams",[t]),t&&i.isArray(t)){var o={},r=/(.*?)\[\]$/
i.each(t,function(e,t){var n=t.name.match(r)
n?(n=n[0],o[n]||(o[n]=[]),o[n].push(t.value)):o[t.name]=t.value}),t=o}var a,s=e.ajax,l=e.oInstance,c=function(t){$e(e,null,"xhr",[e,t,e.jqXHR]),n(t)}
if(i.isPlainObject(s)&&s.data){a=s.data
var u=i.isFunction(a)?a(t,e):a,t=i.isFunction(a)&&u?u:i.extend(!0,t,u)
delete s.data}u={data:t,success:function(t){var n=t.error||t.sError
n&&Me(e,0,n),e.json=t,c(t)},dataType:"json",cache:!1,type:e.sServerMethod,error:function(t,n){var o=$e(e,null,"xhr",[e,null,e.jqXHR]);-1===i.inArray(!0,o)&&("parsererror"==n?Me(e,0,"Invalid JSON response",1):4===t.readyState&&Me(e,0,"Ajax error",7)),pe(e,!1)}},e.oAjaxData=t,$e(e,null,"preXhr",[e,t]),e.fnServerData?e.fnServerData.call(l,e.sAjaxSource,i.map(t,function(e,t){return{name:t,value:e}}),c,e):e.sAjaxSource||"string"==typeof s?e.jqXHR=i.ajax(i.extend(u,{url:s||e.sAjaxSource})):i.isFunction(s)?e.jqXHR=s.call(l,t,c,e):(e.jqXHR=i.ajax(i.extend(u,s)),s.data=a)}function z(e){return!e.bAjaxDataGet||(e.iDraw++,pe(e,!0),W(e,Y(e),function(t){q(e,t)}),!1)}function Y(e){var t,n,o,r,a=e.aoColumns,s=a.length,l=e.oFeatures,c=e.oPreviousSearch,u=e.aoPreSearchCols,d=[],p=_e(e)
t=e._iDisplayStart,n=!1!==l.bPaginate?e._iDisplayLength:-1
var f=function(e,t){d.push({name:e,value:t})}
f("sEcho",e.iDraw),f("iColumns",s),f("sColumns",st(a,"sName").join(",")),f("iDisplayStart",t),f("iDisplayLength",n)
var h={draw:e.iDraw,columns:[],order:[],start:t,length:n,search:{value:c.sSearch,regex:c.bRegex}}
for(t=0;t<s;t++)o=a[t],r=u[t],n="function"==typeof o.mData?"function":o.mData,h.columns.push({data:n,name:o.sName,searchable:o.bSearchable,orderable:o.bSortable,search:{value:r.sSearch,regex:r.bRegex}}),f("mDataProp_"+t,n),l.bFilter&&(f("sSearch_"+t,r.sSearch),f("bRegex_"+t,r.bRegex),f("bSearchable_"+t,o.bSearchable)),l.bSort&&f("bSortable_"+t,o.bSortable)
return l.bFilter&&(f("sSearch",c.sSearch),f("bRegex",c.bRegex)),l.bSort&&(i.each(p,function(e,t){h.order.push({column:t.col,dir:t.dir}),f("iSortCol_"+e,t.col),f("sSortDir_"+e,t.dir)}),f("iSortingCols",p.length)),a=qe.ext.legacy.ajax,null===a?e.sAjaxSource?d:h:a?d:h}function q(e,t){var i=U(e,t),o=t.sEcho!==n?t.sEcho:t.draw,r=t.iTotalRecords!==n?t.iTotalRecords:t.recordsTotal,a=t.iTotalDisplayRecords!==n?t.iTotalDisplayRecords:t.recordsFiltered
if(o){if(1*o<e.iDraw)return
e.iDraw=1*o}for(E(e),e._iRecordsTotal=parseInt(r,10),e._iRecordsDisplay=parseInt(a,10),o=0,r=i.length;o<r;o++)w(e,i[o])
e.aiDisplay=e.aiDisplayMaster.slice(),e.bAjaxDataGet=!1,N(e),e._bInitComplete||ae(e,t),e.bAjaxDataGet=!0,pe(e,!1)}function U(e,t){var o=i.isPlainObject(e.ajax)&&e.ajax.dataSrc!==n?e.ajax.dataSrc:e.sAjaxDataProp
return"data"===o?t.aaData||t[o]:""!==o?T(o)(t):t}function B(e){var n=e.oClasses,o=e.sTableId,r=e.oLanguage,a=e.oPreviousSearch,s=e.aanFeatures,l='<input type="search" class="'+n.sFilterInput+'"/>',c=r.sSearch,c=c.match(/_INPUT_/)?c.replace("_INPUT_",l):c+l,n=i("<div/>",{id:s.f?null:o+"_filter",class:n.sFilter}).append(i("<label/>").append(c)),s=function(){var t=this.value?this.value:""
t!=a.sSearch&&(V(e,{sSearch:t,bRegex:a.bRegex,bSmart:a.bSmart,bCaseInsensitive:a.bCaseInsensitive}),e._iDisplayStart=0,N(e))},l=null!==e.searchDelay?e.searchDelay:"ssp"===He(e)?400:0,u=i("input",n).val(a.sSearch).attr("placeholder",r.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT",l?ve(s,l):s).bind("keypress.DT",function(e){if(13==e.keyCode)return!1}).attr("aria-controls",o)
return i(e.nTable).on("search.dt.DT",function(n,i){if(e===i)try{u[0]!==t.activeElement&&u.val(a.sSearch)}catch(e){}}),n[0]}function V(e,t,i){var o=e.oPreviousSearch,r=e.aoPreSearchCols,a=function(e){o.sSearch=e.sSearch,o.bRegex=e.bRegex,o.bSmart=e.bSmart,o.bCaseInsensitive=e.bCaseInsensitive}
if(y(e),"ssp"!=He(e)){for(J(e,t.sSearch,i,t.bEscapeRegex!==n?!t.bEscapeRegex:t.bRegex,t.bSmart,t.bCaseInsensitive),a(t),t=0;t<r.length;t++)Q(e,r[t].sSearch,t,r[t].bEscapeRegex!==n?!r[t].bEscapeRegex:r[t].bRegex,r[t].bSmart,r[t].bCaseInsensitive)
G(e)}else a(t)
e.bFiltered=!0,$e(e,null,"search",[e])}function G(e){for(var t,n,o=qe.ext.search,r=e.aiDisplay,a=0,s=o.length;a<s;a++){for(var l=[],c=0,u=r.length;c<u;c++)n=r[c],t=e.aoData[n],o[a](e,t._aFilterData,n,t._aData,c)&&l.push(n)
r.length=0,i.merge(r,l)}}function Q(e,t,n,i,o,r){if(""!==t)for(var a=e.aiDisplay,i=X(t,i,o,r),o=a.length-1;0<=o;o--)t=e.aoData[a[o]]._aFilterData[n],i.test(t)||a.splice(o,1)}function J(e,t,n,i,o,r){var a,i=X(t,i,o,r),o=e.oPreviousSearch.sSearch,r=e.aiDisplayMaster
if(0!==qe.ext.search.length&&(n=!0),a=K(e),0>=t.length)e.aiDisplay=r.slice()
else for((a||n||o.length>t.length||0!==t.indexOf(o)||e.bSorted)&&(e.aiDisplay=r.slice()),t=e.aiDisplay,n=t.length-1;0<=n;n--)i.test(e.aoData[t[n]]._sFilterRow)||t.splice(n,1)}function X(e,t,n,o){return e=t?e:Z(e),n&&(e="^(?=.*?"+i.map(e.match(/"[^"]+"|[^ ]+/g)||[""],function(e){if('"'===e.charAt(0))var t=e.match(/^"(.*)"$/),e=t?t[1]:e
return e.replace('"',"")}).join(")(?=.*?")+").*$"),RegExp(e,o?"i":"")}function Z(e){return e.replace(et,"\\$1")}function K(e){var t,n,i,o,r,a,s,l,c=e.aoColumns,u=qe.ext.type.search
for(t=!1,n=0,o=e.aoData.length;n<o;n++)if(l=e.aoData[n],!l._aFilterData){for(a=[],i=0,r=c.length;i<r;i++)t=c[i],t.bSearchable?(s=_(e,n,i,"filter"),u[t.sType]&&(s=u[t.sType](s)),null===s&&(s=""),"string"!=typeof s&&s.toString&&(s=s.toString())):s="",s.indexOf&&-1!==s.indexOf("&")&&(mt.innerHTML=s,s=gt?mt.textContent:mt.innerText),s.replace&&(s=s.replace(/[\r\n]/g,"")),a.push(s)
l._aFilterData=a,l._sFilterRow=a.join("  "),t=!0}return t}function ee(e){return{search:e.sSearch,smart:e.bSmart,regex:e.bRegex,caseInsensitive:e.bCaseInsensitive}}function te(e){return{sSearch:e.search,bSmart:e.smart,bRegex:e.regex,bCaseInsensitive:e.caseInsensitive}}function ne(e){var t=e.sTableId,n=e.aanFeatures.i,o=i("<div/>",{class:e.oClasses.sInfo,id:n?null:t+"_info"})
return n||(e.aoDrawCallback.push({fn:ie,sName:"information"}),o.attr("role","status").attr("aria-live","polite"),i(e.nTable).attr("aria-describedby",t+"_info")),o[0]}function ie(e){var t=e.aanFeatures.i
if(0!==t.length){var n=e.oLanguage,o=e._iDisplayStart+1,r=e.fnDisplayEnd(),a=e.fnRecordsTotal(),s=e.fnRecordsDisplay(),l=s?n.sInfo:n.sInfoEmpty
s!==a&&(l+=" "+n.sInfoFiltered),l+=n.sInfoPostFix,l=oe(e,l),n=n.fnInfoCallback,null!==n&&(l=n.call(e.oInstance,e,o,r,a,s,l)),i(t).html(l)}}function oe(e,t){var n=e.fnFormatNumber,i=e._iDisplayStart+1,o=e._iDisplayLength,r=e.fnRecordsDisplay(),a=-1===o
return t.replace(/_START_/g,n.call(e,i)).replace(/_END_/g,n.call(e,e.fnDisplayEnd())).replace(/_MAX_/g,n.call(e,e.fnRecordsTotal())).replace(/_TOTAL_/g,n.call(e,r)).replace(/_PAGE_/g,n.call(e,a?1:Math.ceil(i/o))).replace(/_PAGES_/g,n.call(e,a?1:Math.ceil(r/o)))}function re(e){var t,n,i,o=e.iInitDisplayStart,r=e.aoColumns
n=e.oFeatures
var a=e.bDeferLoading
if(e.bInitialised){for(j(e),O(e),L(e,e.aoHeader),L(e,e.aoFooter),pe(e,!0),n.bAutoWidth&&ge(e),t=0,n=r.length;t<n;t++)i=r[t],i.sWidth&&(i.nTh.style.width=xe(i.sWidth))
$e(e,null,"preInit",[e]),$(e),r=He(e),("ssp"!=r||a)&&("ajax"==r?W(e,[],function(n){var i=U(e,n)
for(t=0;t<i.length;t++)w(e,i[t])
e.iInitDisplayStart=o,$(e),pe(e,!1),ae(e,n)},e):(pe(e,!1),ae(e)))}else setTimeout(function(){re(e)},200)}function ae(e,t){e._bInitComplete=!0,(t||e.oInit.aaData)&&f(e),$e(e,"aoInitComplete","init",[e,t])}function se(e,t){var n=parseInt(t,10)
e._iDisplayLength=n,je(e),$e(e,null,"length",[e,n])}function le(e){for(var t=e.oClasses,n=e.sTableId,o=e.aLengthMenu,r=i.isArray(o[0]),a=r?o[0]:o,o=r?o[1]:o,r=i("<select/>",{name:n+"_length","aria-controls":n,class:t.sLengthSelect}),s=0,l=a.length;s<l;s++)r[0][s]=new Option(o[s],a[s])
var c=i("<div><label/></div>").addClass(t.sLength)
return e.aanFeatures.l||(c[0].id=n+"_length"),c.children().append(e.oLanguage.sLengthMenu.replace("_MENU_",r[0].outerHTML)),i("select",c).val(e._iDisplayLength).bind("change.DT",function(){se(e,i(this).val()),N(e)}),i(e.nTable).bind("length.dt.DT",function(t,n,o){e===n&&i("select",c).val(o)}),c[0]}function ce(e){var t=e.sPaginationType,n=qe.ext.pager[t],o="function"==typeof n,r=function(e){N(e)},t=i("<div/>").addClass(e.oClasses.sPaging+t)[0],a=e.aanFeatures
return o||n.fnInit(e,t,r),a.p||(t.id=e.sTableId+"_paginate",e.aoDrawCallback.push({fn:function(e){if(o){var t,i=e._iDisplayStart,s=e._iDisplayLength,l=e.fnRecordsDisplay(),c=-1===s,i=c?0:Math.ceil(i/s),s=c?1:Math.ceil(l/s),l=n(i,s),c=0
for(t=a.p.length;c<t;c++)Re(e,"pageButton")(e,a.p[c],c,l,i,s)}else n.fnUpdate(e,r)},sName:"pagination"})),t}function ue(e,t,n){var i=e._iDisplayStart,o=e._iDisplayLength,r=e.fnRecordsDisplay()
return 0===r||-1===o?i=0:"number"==typeof t?(i=t*o,i>r&&(i=0)):"first"==t?i=0:"previous"==t?(i=0<=o?i-o:0,0>i&&(i=0)):"next"==t?i+o<r&&(i+=o):"last"==t?i=Math.floor((r-1)/o)*o:Me(e,0,"Unknown paging action: "+t,5),t=e._iDisplayStart!==i,e._iDisplayStart=i,t&&($e(e,null,"page",[e]),n&&N(e)),t}function de(e){return i("<div/>",{id:e.aanFeatures.r?null:e.sTableId+"_processing",class:e.oClasses.sProcessing}).html(e.oLanguage.sProcessing).insertBefore(e.nTable)[0]}function pe(e,t){e.oFeatures.bProcessing&&i(e.aanFeatures.r).css("display",t?"block":"none"),$e(e,null,"processing",[e,t])}function fe(e){var t=i(e.nTable)
t.attr("role","grid")
var n=e.oScroll
if(""===n.sX&&""===n.sY)return e.nTable
var o=n.sX,r=n.sY,a=e.oClasses,s=t.children("caption"),l=s.length?s[0]._captionSide:null,c=i(t[0].cloneNode(!1)),u=i(t[0].cloneNode(!1)),d=t.children("tfoot")
n.sX&&"100%"===t.attr("width")&&t.removeAttr("width"),d.length||(d=null),c=i("<div/>",{class:a.sScrollWrapper}).append(i("<div/>",{class:a.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:o?o?xe(o):null:"100%"}).append(i("<div/>",{class:a.sScrollHeadInner}).css({"box-sizing":"content-box",width:n.sXInner||"100%"}).append(c.removeAttr("id").css("margin-left",0).append("top"===l?s:null).append(t.children("thead"))))).append(i("<div/>",{class:a.sScrollBody}).css({position:"relative",overflow:"auto",width:o?xe(o):null}).append(t)),d&&c.append(i("<div/>",{class:a.sScrollFoot}).css({overflow:"hidden",border:0,width:o?o?xe(o):null:"100%"}).append(i("<div/>",{class:a.sScrollFootInner}).append(u.removeAttr("id").css("margin-left",0).append("bottom"===l?s:null).append(t.children("tfoot")))))
var t=c.children(),p=t[0],a=t[1],f=d?t[2]:null
return o&&i(a).on("scroll.DT",function(){var e=this.scrollLeft
p.scrollLeft=e,d&&(f.scrollLeft=e)}),i(a).css(r&&n.bCollapse?"max-height":"height",r),e.nScrollHead=p,e.nScrollBody=a,e.nScrollFoot=f,e.aoDrawCallback.push({fn:he,sName:"scrolling"}),c[0]}function he(e){var t,n,o,r,a,s=e.oScroll,l=s.sX,c=s.sXInner,u=s.sY,s=s.iBarWidth,d=i(e.nScrollHead),p=d[0].style,f=d.children("div"),m=f[0].style,g=f.children("table"),f=e.nScrollBody,v=i(f),y=f.style,b=i(e.nScrollFoot).children("div"),w=b.children("table"),x=i(e.nTHead),_=i(e.nTable),C=_[0],S=C.style,T=e.nTFoot?i(e.nTFoot):null,D=e.oBrowser,k=D.bScrollOversize,E=[],I=[],A=[],F=function(e){e=e.style,e.paddingTop="0",e.paddingBottom="0",e.borderTopWidth="0",e.borderBottomWidth="0",e.height=0}
_.children("thead, tfoot").remove(),r=x.clone().prependTo(_),x=x.find("tr"),n=r.find("tr"),r.find("th, td").removeAttr("tabindex"),T&&(o=T.clone().prependTo(_),t=T.find("tr"),o=o.find("tr")),l||(y.width="100%",d[0].style.width="100%"),i.each(H(e,r),function(t,n){a=h(e,t),n.style.width=e.aoColumns[a].sWidth}),T&&me(function(e){e.style.width=""},o),d=_.outerWidth(),""===l?(S.width="100%",k&&(_.find("tbody").height()>f.offsetHeight||"scroll"==v.css("overflow-y"))&&(S.width=xe(_.outerWidth()-s)),d=_.outerWidth()):""!==c&&(S.width=xe(c),d=_.outerWidth()),me(F,n),me(function(e){A.push(e.innerHTML),E.push(xe(i(e).css("width")))},n),me(function(e,t){e.style.width=E[t]},x),i(n).height(0),T&&(me(F,o),me(function(e){I.push(xe(i(e).css("width")))},o),me(function(e,t){e.style.width=I[t]},t),i(o).height(0)),me(function(e,t){e.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+A[t]+"</div>",e.style.width=E[t]},n),T&&me(function(e,t){e.innerHTML="",e.style.width=I[t]},o),_.outerWidth()<d?(t=f.scrollHeight>f.offsetHeight||"scroll"==v.css("overflow-y")?d+s:d,k&&(f.scrollHeight>f.offsetHeight||"scroll"==v.css("overflow-y"))&&(S.width=xe(t-s)),(""===l||""!==c)&&Me(e,1,"Possible column misalignment",6)):t="100%",y.width=xe(t),p.width=xe(t),T&&(e.nScrollFoot.style.width=xe(t)),!u&&k&&(y.height=xe(C.offsetHeight+s)),l=_.outerWidth(),g[0].style.width=xe(l),m.width=xe(l),c=_.height()>f.clientHeight||"scroll"==v.css("overflow-y"),u="padding"+(D.bScrollbarLeft?"Left":"Right"),m[u]=c?s+"px":"0px",T&&(w[0].style.width=xe(l),b[0].style.width=xe(l),b[0].style[u]=c?s+"px":"0px"),v.scroll(),!e.bSorted&&!e.bFiltered||e._drawHold||(f.scrollTop=0)}function me(e,t,n){for(var i,o,r=0,a=0,s=t.length;a<s;){for(i=t[a].firstChild,o=n?n[a].firstChild:null;i;)1===i.nodeType&&(n?e(i,o,r):e(i,r),r++),i=i.nextSibling,o=n?o.nextSibling:null
a++}}function ge(t){var n,o,r,a=t.nTable,s=t.aoColumns,l=t.oScroll,c=l.sY,u=l.sX,d=l.sXInner,p=s.length,m=v(t,"bVisible"),y=i("th",t.nTHead),b=a.getAttribute("width"),w=a.parentNode,x=!1
for(r=t.oBrowser,l=r.bScrollOversize,(n=a.style.width)&&-1!==n.indexOf("%")&&(b=n),n=0;n<m.length;n++)o=s[m[n]],null!==o.sWidth&&(o.sWidth=ye(o.sWidthOrig,w),x=!0)
if(l||!x&&!u&&!c&&p==g(t)&&p==y.length)for(n=0;n<p;n++)(m=h(t,n))&&(s[m].sWidth=xe(y.eq(n).width()))
else{p=i(a).clone().css("visibility","hidden").removeAttr("id"),p.find("tbody tr").remove()
var _=i("<tr/>").appendTo(p.find("tbody"))
for(p.find("thead, tfoot").remove(),p.append(i(t.nTHead).clone()).append(i(t.nTFoot).clone()),p.find("tfoot th, tfoot td").css("width",""),y=H(t,p.find("thead")[0]),n=0;n<m.length;n++)o=s[m[n]],y[n].style.width=null!==o.sWidthOrig&&""!==o.sWidthOrig?xe(o.sWidthOrig):""
if(t.aoData.length)for(n=0;n<m.length;n++)x=m[n],o=s[x],i(be(t,x)).clone(!1).append(o.sContentPadding).appendTo(_)
if(x=i("<div/>").css(u||c?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(p).appendTo(w),u&&d?p.width(d):u?(p.css("width","auto"),p.width()<w.clientWidth&&p.width(w.clientWidth)):c?p.width(w.clientWidth):b&&p.width(b),u){for(n=d=0;n<m.length;n++)o=s[m[n]],c=r.bBounding?y[n].getBoundingClientRect().width:i(y[n]).outerWidth(),d+=null===o.sWidthOrig?c:parseInt(o.sWidth,10)+c-i(y[n]).width()
p.width(xe(d)),a.style.width=xe(d)}for(n=0;n<m.length;n++)o=s[m[n]],(r=i(y[n]).width())&&(o.sWidth=xe(r))
a.style.width=xe(p.css("width")),x.remove()}b&&(a.style.width=xe(b)),!b&&!u||t._reszEvt||(a=function(){i(e).bind("resize.DT-"+t.sInstance,ve(function(){f(t)}))},l?setTimeout(a,1e3):a(),t._reszEvt=!0)}function ve(e,t){var i,o,r=t!==n?t:200
return function(){var t=this,a=+new Date,s=arguments
i&&a<i+r?(clearTimeout(o),o=setTimeout(function(){i=n,e.apply(t,s)},r)):(i=a,e.apply(t,s))}}function ye(e,n){if(!e)return 0
var o=i("<div/>").css("width",xe(e)).appendTo(n||t.body),r=o[0].offsetWidth
return o.remove(),r}function be(e,t){var n=we(e,t)
if(0>n)return null
var o=e.aoData[n]
return o.nTr?o.anCells[t]:i("<td/>").html(_(e,n,t,"display"))[0]}function we(e,t){for(var n,i=-1,o=-1,r=0,a=e.aoData.length;r<a;r++)n=_(e,r,t,"display")+"",n=n.replace(vt,""),n.length>i&&(i=n.length,o=r)
return o}function xe(e){return null===e?"0px":"number"==typeof e?0>e?"0px":e+"px":e.match(/\d$/)?e+"px":e}function _e(e){var t,o,r,a,s,l,c=[],u=e.aoColumns
t=e.aaSortingFixed,o=i.isPlainObject(t)
var d=[]
for(r=function(e){e.length&&!i.isArray(e[0])?d.push(e):i.merge(d,e)},i.isArray(t)&&r(t),o&&t.pre&&r(t.pre),r(e.aaSorting),o&&t.post&&r(t.post),e=0;e<d.length;e++)for(l=d[e][0],r=u[l].aDataSort,t=0,o=r.length;t<o;t++)a=r[t],s=u[a].sType||"string",d[e]._idx===n&&(d[e]._idx=i.inArray(d[e][1],u[a].asSorting)),c.push({src:l,col:a,dir:d[e][1],index:d[e]._idx,type:s,formatter:qe.ext.type.order[s+"-pre"]})
return c}function Ce(e){var t,n,i,o,r=[],a=qe.ext.type.order,s=e.aoData,l=0,c=e.aiDisplayMaster
for(y(e),o=_e(e),t=0,n=o.length;t<n;t++)i=o[t],i.formatter&&l++,Ee(e,i.col)
if("ssp"!=He(e)&&0!==o.length){for(t=0,n=c.length;t<n;t++)r[c[t]]=t
l===o.length?c.sort(function(e,t){var n,i,a,l,c=o.length,u=s[e]._aSortData,d=s[t]._aSortData
for(a=0;a<c;a++)if(l=o[a],n=u[l.col],i=d[l.col],n=n<i?-1:n>i?1:0,0!==n)return"asc"===l.dir?n:-n
return n=r[e],i=r[t],n<i?-1:n>i?1:0}):c.sort(function(e,t){var n,i,l,c,u=o.length,d=s[e]._aSortData,p=s[t]._aSortData
for(l=0;l<u;l++)if(c=o[l],n=d[c.col],i=p[c.col],c=a[c.type+"-"+c.dir]||a["string-"+c.dir],n=c(n,i),0!==n)return n
return n=r[e],i=r[t],n<i?-1:n>i?1:0})}e.bSorted=!0}function Se(e){for(var t,n,i=e.aoColumns,o=_e(e),e=e.oLanguage.oAria,r=0,a=i.length;r<a;r++){n=i[r]
var s=n.asSorting
t=n.sTitle.replace(/<.*?>/g,"")
var l=n.nTh
l.removeAttribute("aria-sort"),n.bSortable&&(0<o.length&&o[0].col==r?(l.setAttribute("aria-sort","asc"==o[0].dir?"ascending":"descending"),n=s[o[0].index+1]||s[0]):n=s[0],t+="asc"===n?e.sSortAscending:e.sSortDescending),l.setAttribute("aria-label",t)}}function Te(e,t,o,r){var a=e.aaSorting,s=e.aoColumns[t].asSorting,l=function(e,t){var o=e._idx
return o===n&&(o=i.inArray(e[1],s)),o+1<s.length?o+1:t?null:0}
"number"==typeof a[0]&&(a=e.aaSorting=[a]),o&&e.oFeatures.bSortMulti?(o=i.inArray(t,st(a,"0")),-1!==o?(t=l(a[o],!0),null===t&&1===a.length&&(t=0),null===t?a.splice(o,1):(a[o][1]=s[t],a[o]._idx=t)):(a.push([t,s[0],0]),a[a.length-1]._idx=0)):a.length&&a[0][0]==t?(t=l(a[0]),a.length=1,a[0][1]=s[t],a[0]._idx=t):(a.length=0,a.push([t,s[0]]),a[0]._idx=0),$(e),"function"==typeof r&&r(e)}function De(e,t,n,i){var o=e.aoColumns[n]
Le(t,{},function(t){!1!==o.bSortable&&(e.oFeatures.bProcessing?(pe(e,!0),setTimeout(function(){Te(e,n,t.shiftKey,i),"ssp"!==He(e)&&pe(e,!1)},0)):Te(e,n,t.shiftKey,i))})}function ke(e){var t,n,o=e.aLastSort,r=e.oClasses.sSortColumn,a=_e(e),s=e.oFeatures
if(s.bSort&&s.bSortClasses){for(s=0,t=o.length;s<t;s++)n=o[s].src,i(st(e.aoData,"anCells",n)).removeClass(r+(2>s?s+1:3))
for(s=0,t=a.length;s<t;s++)n=a[s].src,i(st(e.aoData,"anCells",n)).addClass(r+(2>s?s+1:3))}e.aLastSort=a}function Ee(e,t){var n,i=e.aoColumns[t],o=qe.ext.order[i.sSortDataType]
o&&(n=o.call(e.oInstance,e,t,m(e,t)))
for(var r,a=qe.ext.type.order[i.sType+"-pre"],s=0,l=e.aoData.length;s<l;s++)i=e.aoData[s],i._aSortData||(i._aSortData=[]),(!i._aSortData[t]||o)&&(r=o?n[s]:_(e,s,t,"sort"),i._aSortData[t]=a?a(r):r)}function Ie(e){if(e.oFeatures.bStateSave&&!e.bDestroying){var t={time:+new Date,start:e._iDisplayStart,length:e._iDisplayLength,order:i.extend(!0,[],e.aaSorting),search:ee(e.oPreviousSearch),columns:i.map(e.aoColumns,function(t,n){return{visible:t.bVisible,search:ee(e.aoPreSearchCols[n])}})}
$e(e,"aoStateSaveParams","stateSaveParams",[e,t]),e.oSavedState=t,e.fnStateSaveCallback.call(e.oInstance,e,t)}}function Ae(e){var t,o,r=e.aoColumns
if(e.oFeatures.bStateSave){var a=e.fnStateLoadCallback.call(e.oInstance,e)
if(a&&a.time&&(t=$e(e,"aoStateLoadParams","stateLoadParams",[e,a]),-1===i.inArray(!1,t)&&(t=e.iStateDuration,!(0<t&&a.time<+new Date-1e3*t)&&r.length===a.columns.length))){for(e.oLoadedState=i.extend(!0,{},a),a.start!==n&&(e._iDisplayStart=a.start,e.iInitDisplayStart=a.start),a.length!==n&&(e._iDisplayLength=a.length),a.order!==n&&(e.aaSorting=[],i.each(a.order,function(t,n){e.aaSorting.push(n[0]>=r.length?[0,n[1]]:n)})),a.search!==n&&i.extend(e.oPreviousSearch,te(a.search)),t=0,o=a.columns.length;t<o;t++){var s=a.columns[t]
s.visible!==n&&(r[t].bVisible=s.visible),s.search!==n&&i.extend(e.aoPreSearchCols[t],te(s.search))}$e(e,"aoStateLoaded","stateLoaded",[e,a])}}}function Fe(e){var t=qe.settings,e=i.inArray(e,st(t,"nTable"))
return-1!==e?t[e]:null}function Me(t,n,i,o){if(i="DataTables warning: "+(t?"table id="+t.sTableId+" - ":"")+i,o&&(i+=". For more information about this error, please see http://datatables.net/tn/"+o),n)e.console&&console.log&&console.log(i)
else if(n=qe.ext,n=n.sErrMode||n.errMode,t&&$e(t,null,"error",[t,o,i]),"alert"==n)alert(i)
else{if("throw"==n)throw Error(i)
"function"==typeof n&&n(t,o,i)}}function Pe(e,t,o,r){i.isArray(o)?i.each(o,function(n,o){i.isArray(o)?Pe(e,t,o[0],o[1]):Pe(e,t,o)}):(r===n&&(r=o),t[o]!==n&&(e[r]=t[o]))}function Oe(e,t,n){var o,r
for(r in t)t.hasOwnProperty(r)&&(o=t[r],i.isPlainObject(o)?(i.isPlainObject(e[r])||(e[r]={}),i.extend(!0,e[r],o)):e[r]=n&&"data"!==r&&"aaData"!==r&&i.isArray(o)?o.slice():o)
return e}function Le(e,t,n){i(e).bind("click.DT",t,function(t){e.blur(),n(t)}).bind("keypress.DT",t,function(e){13===e.which&&(e.preventDefault(),n(e))}).bind("selectstart.DT",function(){return!1})}function Ne(e,t,n,i){n&&e[t].push({fn:n,sName:i})}function $e(e,t,n,o){var r=[]
return t&&(r=i.map(e[t].slice().reverse(),function(t){return t.fn.apply(e.oInstance,o)})),null!==n&&(t=i.Event(n+".dt"),i(e.nTable).trigger(t,o),r.push(t.result)),r}function je(e){var t=e._iDisplayStart,n=e.fnDisplayEnd(),i=e._iDisplayLength
t>=n&&(t=n-i),t-=t%i,(-1===i||0>t)&&(t=0),e._iDisplayStart=t}function Re(e,t){var n=e.renderer,o=qe.ext.renderer[t]
return i.isPlainObject(n)&&n[t]?o[n[t]]||o._:"string"==typeof n?o[n]||o._:o._}function He(e){return e.oFeatures.bServerSide?"ssp":e.ajax||e.sAjaxSource?"ajax":"dom"}function We(e,t){var n=[],n=Ot.numbers_length,i=Math.floor(n/2)
return t<=n?n=ct(0,t):e<=i?(n=ct(0,n-2),n.push("ellipsis"),n.push(t-1)):(e>=t-1-i?n=ct(t-(n-2),t):(n=ct(e-i+2,e+i-1),n.push("ellipsis"),n.push(t-1)),n.splice(0,0,"ellipsis"),n.splice(0,0,0)),n.DT_el="span",n}function ze(e){i.each({num:function(t){return Lt(t,e)},"num-fmt":function(t){return Lt(t,e,tt)},"html-num":function(t){return Lt(t,e,Xe)},"html-num-fmt":function(t){return Lt(t,e,Xe,tt)}},function(t,n){Ue.type.order[t+e+"-pre"]=n,t.match(/^html\-/)&&(Ue.type.search[t+e]=Ue.type.search.html)})}function Ye(e){return function(){var t=[Fe(this[qe.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments))
return qe.ext.internal[e].apply(this,t)}}var qe,Ue,Be,Ve,Ge,Qe={},Je=/[\r\n]/g,Xe=/<.*?>/g,Ze=/^[\w\+\-]/,Ke=/[\w\+\-]$/,et=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),tt=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,nt=function(e){return!e||!0===e||"-"===e},it=function(e){var t=parseInt(e,10)
return!isNaN(t)&&isFinite(e)?t:null},ot=function(e,t){return Qe[t]||(Qe[t]=RegExp(Z(t),"g")),"string"==typeof e&&"."!==t?e.replace(/\./g,"").replace(Qe[t],"."):e},rt=function(e,t,n){var i="string"==typeof e
return!!nt(e)||(t&&i&&(e=ot(e,t)),n&&i&&(e=e.replace(tt,"")),!isNaN(parseFloat(e))&&isFinite(e))},at=function(e,t,n){return!!nt(e)||(nt(e)||"string"==typeof e?!!rt(e.replace(Xe,""),t,n)||null:null)},st=function(e,t,i){var o=[],r=0,a=e.length
if(i!==n)for(;r<a;r++)e[r]&&e[r][t]&&o.push(e[r][t][i])
else for(;r<a;r++)e[r]&&o.push(e[r][t])
return o},lt=function(e,t,i,o){var r=[],a=0,s=t.length
if(o!==n)for(;a<s;a++)e[t[a]][i]&&r.push(e[t[a]][i][o])
else for(;a<s;a++)r.push(e[t[a]][i])
return r},ct=function(e,t){var i,o=[]
t===n?(t=0,i=e):(i=t,t=e)
for(var r=t;r<i;r++)o.push(r)
return o},ut=function(e){for(var t=[],n=0,i=e.length;n<i;n++)e[n]&&t.push(e[n])
return t},dt=function(e){var t,n,i,o=[],r=e.length,a=0
n=0
e:for(;n<r;n++){for(t=e[n],i=0;i<a;i++)if(o[i]===t)continue e
o.push(t),a++}return o},pt=function(e,t,i){e[t]!==n&&(e[i]=e[t])},ft=/\[.*?\]$/,ht=/\(\)$/,mt=i("<div>")[0],gt=mt.textContent!==n,vt=/<.*?>/g
qe=function(e){this.$=function(e,t){return this.api(!0).$(e,t)},this._=function(e,t){return this.api(!0).rows(e,t).data()},this.api=function(e){return new Be(e?Fe(this[Ue.iApiIndex]):this)},this.fnAddData=function(e,t){var o=this.api(!0),r=i.isArray(e)&&(i.isArray(e[0])||i.isPlainObject(e[0]))?o.rows.add(e):o.row.add(e)
return(t===n||t)&&o.draw(),r.flatten().toArray()},this.fnAdjustColumnSizing=function(e){var t=this.api(!0).columns.adjust(),i=t.settings()[0],o=i.oScroll
e===n||e?t.draw(!1):(""!==o.sX||""!==o.sY)&&he(i)},this.fnClearTable=function(e){var t=this.api(!0).clear();(e===n||e)&&t.draw()},this.fnClose=function(e){this.api(!0).row(e).child.hide()},this.fnDeleteRow=function(e,t,i){var o=this.api(!0),e=o.rows(e),r=e.settings()[0],a=r.aoData[e[0][0]]
return e.remove(),t&&t.call(this,r,a),(i===n||i)&&o.draw(),a},this.fnDestroy=function(e){this.api(!0).destroy(e)},this.fnDraw=function(e){this.api(!0).draw(e)},this.fnFilter=function(e,t,i,o,r,a){r=this.api(!0),null===t||t===n?r.search(e,i,o,a):r.column(t).search(e,i,o,a),r.draw()},this.fnGetData=function(e,t){var i=this.api(!0)
if(e!==n){var o=e.nodeName?e.nodeName.toLowerCase():""
return t!==n||"td"==o||"th"==o?i.cell(e,t).data():i.row(e).data()||null}return i.data().toArray()},this.fnGetNodes=function(e){var t=this.api(!0)
return e!==n?t.row(e).node():t.rows().nodes().flatten().toArray()},this.fnGetPosition=function(e){var t=this.api(!0),n=e.nodeName.toUpperCase()
return"TR"==n?t.row(e).index():"TD"==n||"TH"==n?(e=t.cell(e).index(),[e.row,e.columnVisible,e.column]):null},this.fnIsOpen=function(e){return this.api(!0).row(e).child.isShown()},this.fnOpen=function(e,t,n){return this.api(!0).row(e).child(t,n).show().child()[0]},this.fnPageChange=function(e,t){var i=this.api(!0).page(e);(t===n||t)&&i.draw(!1)},this.fnSetColumnVis=function(e,t,i){e=this.api(!0).column(e).visible(t),(i===n||i)&&e.columns.adjust().draw()},this.fnSettings=function(){return Fe(this[Ue.iApiIndex])},this.fnSort=function(e){this.api(!0).order(e).draw()},this.fnSortListener=function(e,t,n){this.api(!0).order.listener(e,t,n)},this.fnUpdate=function(e,t,i,o,r){var a=this.api(!0)
return i===n||null===i?a.row(t).data(e):a.cell(t,i).data(e),(r===n||r)&&a.columns.adjust(),(o===n||o)&&a.draw(),0},this.fnVersionCheck=Ue.fnVersionCheck
var t=this,o=e===n,u=this.length
o&&(e={}),this.oApi=this.internal=Ue.internal
for(var f in qe.ext.internal)f&&(this[f]=Ye(f))
return this.each(function(){var f,h={},h=1<u?Oe(h,e,!0):e,m=0,g=this.getAttribute("id"),v=!1,y=qe.defaults,_=i(this)
if("table"!=this.nodeName.toLowerCase())Me(null,0,"Non-table node initialisation ("+this.nodeName+")",2)
else{s(y),l(y.column),r(y,y,!0),r(y.column,y.column,!0),r(y,i.extend(h,_.data()))
var C=qe.settings,m=0
for(f=C.length;m<f;m++){var S=C[m]
if(S.nTable==this||S.nTHead.parentNode==this||S.nTFoot&&S.nTFoot.parentNode==this){if(m=h.bRetrieve!==n?h.bRetrieve:y.bRetrieve,o||m)return S.oInstance
if(h.bDestroy!==n?h.bDestroy:y.bDestroy){S.oInstance.fnDestroy()
break}return void Me(S,0,"Cannot reinitialise DataTable",3)}if(S.sTableId==this.id){C.splice(m,1)
break}}null!==g&&""!==g||(this.id=g="DataTables_Table_"+qe.ext._unique++)
var D=i.extend(!0,{},qe.models.oSettings,{sDestroyWidth:_[0].style.width,sInstance:g,sTableId:g})
D.nTable=this,D.oApi=t.internal,D.oInit=h,C.push(D),D.oInstance=1===t.length?t:_.dataTable(),s(h),h.oLanguage&&a(h.oLanguage),h.aLengthMenu&&!h.iDisplayLength&&(h.iDisplayLength=i.isArray(h.aLengthMenu[0])?h.aLengthMenu[0][0]:h.aLengthMenu[0]),h=Oe(i.extend(!0,{},y),h),Pe(D.oFeatures,h,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" ")),Pe(D,h,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]),Pe(D.oScroll,h,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]),Pe(D.oLanguage,h,"fnInfoCallback"),Ne(D,"aoDrawCallback",h.fnDrawCallback,"user"),Ne(D,"aoServerParams",h.fnServerParams,"user"),Ne(D,"aoStateSaveParams",h.fnStateSaveParams,"user"),Ne(D,"aoStateLoadParams",h.fnStateLoadParams,"user"),Ne(D,"aoStateLoaded",h.fnStateLoaded,"user"),Ne(D,"aoRowCallback",h.fnRowCallback,"user"),Ne(D,"aoRowCreatedCallback",h.fnCreatedRow,"user"),Ne(D,"aoHeaderCallback",h.fnHeaderCallback,"user"),Ne(D,"aoFooterCallback",h.fnFooterCallback,"user"),Ne(D,"aoInitComplete",h.fnInitComplete,"user"),Ne(D,"aoPreDrawCallback",h.fnPreDrawCallback,"user"),D.rowIdFn=T(h.rowId),c(D),g=D.oClasses,h.bJQueryUI?(i.extend(g,qe.ext.oJUIClasses,h.oClasses),h.sDom===y.sDom&&"lfrtip"===y.sDom&&(D.sDom='<"H"lfr>t<"F"ip>'),D.renderer?i.isPlainObject(D.renderer)&&!D.renderer.header&&(D.renderer.header="jqueryui"):D.renderer="jqueryui"):i.extend(g,qe.ext.classes,h.oClasses),_.addClass(g.sTable),D.iInitDisplayStart===n&&(D.iInitDisplayStart=h.iDisplayStart,D._iDisplayStart=h.iDisplayStart),null!==h.iDeferLoading&&(D.bDeferLoading=!0,m=i.isArray(h.iDeferLoading),D._iRecordsDisplay=m?h.iDeferLoading[0]:h.iDeferLoading,D._iRecordsTotal=m?h.iDeferLoading[1]:h.iDeferLoading)
var k=D.oLanguage
i.extend(!0,k,h.oLanguage),""!==k.sUrl&&(i.ajax({dataType:"json",url:k.sUrl,success:function(e){a(e),r(y.oLanguage,e),i.extend(!0,k,e),re(D)},error:function(){re(D)}}),v=!0),null===h.asStripeClasses&&(D.asStripeClasses=[g.sStripeOdd,g.sStripeEven])
var m=D.asStripeClasses,E=_.children("tbody").find("tr").eq(0)
if(-1!==i.inArray(!0,i.map(m,function(e){return E.hasClass(e)}))&&(i("tbody tr",this).removeClass(m.join(" ")),D.asDestroyStripes=m.slice()),C=[],m=this.getElementsByTagName("thead"),0!==m.length&&(R(D.aoHeader,m[0]),C=H(D)),null===h.aoColumns)for(S=[],m=0,f=C.length;m<f;m++)S.push(null)
else S=h.aoColumns
for(m=0,f=S.length;m<f;m++)d(D,C?C[m]:null)
if(b(D,h.aoColumnDefs,S,function(e,t){p(D,e,t)}),E.length){var I=function(e,t){return null!==e.getAttribute("data-"+t)?t:null}
i(E[0]).children("th, td").each(function(e,t){var i=D.aoColumns[e]
if(i.mData===e){var o=I(t,"sort")||I(t,"order"),r=I(t,"filter")||I(t,"search")
null===o&&null===r||(i.mData={_:e+".display",sort:null!==o?e+".@data-"+o:n,type:null!==o?e+".@data-"+o:n,filter:null!==r?e+".@data-"+r:n},p(D,e))}})}var A=D.oFeatures
if(h.bStateSave&&(A.bStateSave=!0,Ae(D,h),Ne(D,"aoDrawCallback",Ie,"state_save")),h.aaSorting===n)for(C=D.aaSorting,m=0,f=C.length;m<f;m++)C[m][1]=D.aoColumns[m].asSorting[0]
if(ke(D),A.bSort&&Ne(D,"aoDrawCallback",function(){if(D.bSorted){var e=_e(D),t={}
i.each(e,function(e,n){t[n.src]=n.dir}),$e(D,null,"order",[D,e,t]),Se(D)}}),Ne(D,"aoDrawCallback",function(){(D.bSorted||"ssp"===He(D)||A.bDeferRender)&&ke(D)},"sc"),m=_.children("caption").each(function(){this._captionSide=_.css("caption-side")}),f=_.children("thead"),0===f.length&&(f=i("<thead/>").appendTo(this)),D.nTHead=f[0],f=_.children("tbody"),0===f.length&&(f=i("<tbody/>").appendTo(this)),D.nTBody=f[0],f=_.children("tfoot"),0===f.length&&0<m.length&&(""!==D.oScroll.sX||""!==D.oScroll.sY)&&(f=i("<tfoot/>").appendTo(this)),0===f.length||0===f.children().length?_.addClass(g.sNoFooter):0<f.length&&(D.nTFoot=f[0],R(D.aoFooter,D.nTFoot)),h.aaData)for(m=0;m<h.aaData.length;m++)w(D,h.aaData[m])
else(D.bDeferLoading||"dom"==He(D))&&x(D,i(D.nTBody).children("tr"))
D.aiDisplay=D.aiDisplayMaster.slice(),D.bInitialised=!0,!1===v&&re(D)}}),t=null,this}
var yt=[],bt=Array.prototype,wt=function(e){var t,n,o=qe.settings,r=i.map(o,function(e){return e.nTable})
return e?e.nTable&&e.oApi?[e]:e.nodeName&&"table"===e.nodeName.toLowerCase()?(t=i.inArray(e,r),-1!==t?[o[t]]:null):e&&"function"==typeof e.settings?e.settings().toArray():("string"==typeof e?n=i(e):e instanceof i&&(n=e),n?n.map(function(){return t=i.inArray(this,r),-1!==t?o[t]:null}).toArray():void 0):[]}
Be=function(e,t){if(!(this instanceof Be))return new Be(e,t)
var n=[],o=function(e){(e=wt(e))&&(n=n.concat(e))}
if(i.isArray(e))for(var r=0,a=e.length;r<a;r++)o(e[r])
else o(e)
this.context=dt(n),t&&i.merge(this,t),this.selector={rows:null,cols:null,opts:null},Be.extend(this,this,yt)},qe.Api=Be,i.extend(Be.prototype,{any:function(){return 0!==this.count()},concat:bt.concat,context:[],count:function(){return this.flatten().length},each:function(e){for(var t=0,n=this.length;t<n;t++)e.call(this,this[t],t,this)
return this},eq:function(e){var t=this.context
return t.length>e?new Be(t[e],this[e]):null},filter:function(e){var t=[]
if(bt.filter)t=bt.filter.call(this,e,this)
else for(var n=0,i=this.length;n<i;n++)e.call(this,this[n],n,this)&&t.push(this[n])
return new Be(this.context,t)},flatten:function(){var e=[]
return new Be(this.context,e.concat.apply(e,this.toArray()))},join:bt.join,indexOf:bt.indexOf||function(e,t){for(var n=t||0,i=this.length;n<i;n++)if(this[n]===e)return n
return-1},iterator:function(e,t,i,o){var r,a,s,l,c,u,d,p=[],f=this.context,h=this.selector
for("string"==typeof e&&(o=i,i=t,t=e,e=!1),a=0,s=f.length;a<s;a++){var m=new Be(f[a])
if("table"===t)r=i.call(m,f[a],a),r!==n&&p.push(r)
else if("columns"===t||"rows"===t)r=i.call(m,f[a],this[a],a),r!==n&&p.push(r)
else if("column"===t||"column-rows"===t||"row"===t||"cell"===t)for(d=this[a],"column-rows"===t&&(u=Tt(f[a],h.opts)),l=0,c=d.length;l<c;l++)r=d[l],r="cell"===t?i.call(m,f[a],r.row,r.column,a,l):i.call(m,f[a],r,a,l,u),r!==n&&p.push(r)}return p.length||o?(e=new Be(f,e?p.concat.apply([],p):p),t=e.selector,t.rows=h.rows,t.cols=h.cols,t.opts=h.opts,e):this},lastIndexOf:bt.lastIndexOf||function(e,t){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(e){var t=[]
if(bt.map)t=bt.map.call(this,e,this)
else for(var n=0,i=this.length;n<i;n++)t.push(e.call(this,this[n],n))
return new Be(this.context,t)},pluck:function(e){return this.map(function(t){return t[e]})},pop:bt.pop,push:bt.push,reduce:bt.reduce||function(e,t){return u(this,e,t,0,this.length,1)},reduceRight:bt.reduceRight||function(e,t){return u(this,e,t,this.length-1,-1,-1)},reverse:bt.reverse,selector:null,shift:bt.shift,sort:bt.sort,splice:bt.splice,toArray:function(){return bt.slice.call(this)},to$:function(){return i(this)},toJQuery:function(){return i(this)},unique:function(){return new Be(this.context,dt(this))},unshift:bt.unshift}),Be.extend=function(e,t,n){if(n.length&&t&&(t instanceof Be||t.__dt_wrapper)){var o,r,a,s=function(e,t,n){return function(){var i=t.apply(e,arguments)
return Be.extend(i,i,n.methodExt),i}}
for(o=0,r=n.length;o<r;o++)a=n[o],t[a.name]="function"==typeof a.val?s(e,a.val,a):i.isPlainObject(a.val)?{}:a.val,t[a.name].__dt_wrapper=!0,Be.extend(e,t[a.name],a.propExt)}},Be.register=Ve=function(e,t){if(i.isArray(e))for(var n=0,o=e.length;n<o;n++)Be.register(e[n],t)
else for(var r,a,s=e.split("."),l=yt,n=0,o=s.length;n<o;n++){r=(a=-1!==s[n].indexOf("()"))?s[n].replace("()",""):s[n]
var c
e:{c=0
for(var u=l.length;c<u;c++)if(l[c].name===r){c=l[c]
break e}c=null}c||(c={name:r,val:{},methodExt:[],propExt:[]},l.push(c)),n===o-1?c.val=t:l=a?c.methodExt:c.propExt}},Be.registerPlural=Ge=function(e,t,o){Be.register(e,o),Be.register(t,function(){var e=o.apply(this,arguments)
return e===this?this:e instanceof Be?e.length?i.isArray(e[0])?new Be(e.context,e[0]):e[0]:n:e})},Ve("tables()",function(e){var t
if(e){t=Be
var n=this.context
if("number"==typeof e)e=[n[e]]
else var o=i.map(n,function(e){return e.nTable}),e=i(o).filter(e).map(function(){var e=i.inArray(this,o)
return n[e]}).toArray()
t=new t(e)}else t=this
return t}),Ve("table()",function(e){var e=this.tables(e),t=e.context
return t.length?new Be(t[0]):e}),Ge("tables().nodes()","table().node()",function(){return this.iterator("table",function(e){return e.nTable},1)}),Ge("tables().body()","table().body()",function(){return this.iterator("table",function(e){return e.nTBody},1)}),Ge("tables().header()","table().header()",function(){return this.iterator("table",function(e){return e.nTHead},1)}),Ge("tables().footer()","table().footer()",function(){return this.iterator("table",function(e){return e.nTFoot},1)}),Ge("tables().containers()","table().container()",function(){return this.iterator("table",function(e){return e.nTableWrapper},1)}),Ve("draw()",function(e){return this.iterator("table",function(t){"page"===e?N(t):("string"==typeof e&&(e="full-hold"!==e),$(t,!1===e))})}),Ve("page()",function(e){return e===n?this.page.info().page:this.iterator("table",function(t){ue(t,e)})}),Ve("page.info()",function(){if(0===this.context.length)return n
var e=this.context[0],t=e._iDisplayStart,i=e._iDisplayLength,o=e.fnRecordsDisplay(),r=-1===i
return{page:r?0:Math.floor(t/i),pages:r?1:Math.ceil(o/i),start:t,end:e.fnDisplayEnd(),length:i,recordsTotal:e.fnRecordsTotal(),recordsDisplay:o,serverSide:"ssp"===He(e)}}),Ve("page.len()",function(e){return e===n?0!==this.context.length?this.context[0]._iDisplayLength:n:this.iterator("table",function(t){se(t,e)})})
var xt=function(e,t,n){if(n){var i=new Be(e)
i.one("draw",function(){n(i.ajax.json())})}if("ssp"==He(e))$(e,t)
else{pe(e,!0)
var o=e.jqXHR
o&&4!==o.readyState&&o.abort(),W(e,[],function(n){E(e)
for(var n=U(e,n),i=0,o=n.length;i<o;i++)w(e,n[i])
$(e,t),pe(e,!1)})}}
Ve("ajax.json()",function(){var e=this.context
if(0<e.length)return e[0].json}),Ve("ajax.params()",function(){var e=this.context
if(0<e.length)return e[0].oAjaxData}),Ve("ajax.reload()",function(e,t){return this.iterator("table",function(n){xt(n,!1===t,e)})}),Ve("ajax.url()",function(e){var t=this.context
return e===n?0===t.length?n:(t=t[0],t.ajax?i.isPlainObject(t.ajax)?t.ajax.url:t.ajax:t.sAjaxSource):this.iterator("table",function(t){i.isPlainObject(t.ajax)?t.ajax.url=e:t.ajax=e})}),Ve("ajax.url().load()",function(e,t){return this.iterator("table",function(n){xt(n,!1===t,e)})})
var _t=function(e,t,o,r,a){var s,l,c,u,d,p,f=[]
for(c=typeof t,t&&"string"!==c&&"function"!==c&&t.length!==n||(t=[t]),c=0,u=t.length;c<u;c++)for(l=t[c]&&t[c].split?t[c].split(","):[t[c]],d=0,p=l.length;d<p;d++)(s=o("string"==typeof l[d]?i.trim(l[d]):l[d]))&&s.length&&(f=f.concat(s))
if(e=Ue.selector[e],e.length)for(c=0,u=e.length;c<u;c++)f=e[c](r,a,f)
return dt(f)},Ct=function(e){return e||(e={}),e.filter&&e.search===n&&(e.search=e.filter),i.extend({search:"none",order:"current",page:"all"},e)},St=function(e){for(var t=0,n=e.length;t<n;t++)if(0<e[t].length)return e[0]=e[t],e[0].length=1,e.length=1,e.context=[e.context[t]],e
return e.length=0,e},Tt=function(e,t){var n,o,r,a=[],s=e.aiDisplay
n=e.aiDisplayMaster
var l=t.search
if(o=t.order,r=t.page,"ssp"==He(e))return"removed"===l?[]:ct(0,n.length)
if("current"==r)for(n=e._iDisplayStart,o=e.fnDisplayEnd();n<o;n++)a.push(s[n])
else if("current"==o||"applied"==o)a="none"==l?n.slice():"applied"==l?s.slice():i.map(n,function(e){return-1===i.inArray(e,s)?e:null})
else if("index"==o||"original"==o)for(n=0,o=e.aoData.length;n<o;n++)"none"==l?a.push(n):(r=i.inArray(n,s),(-1===r&&"removed"==l||0<=r&&"applied"==l)&&a.push(n))
return a}
Ve("rows()",function(e,t){e===n?e="":i.isPlainObject(e)&&(t=e,e="")
var t=Ct(t),o=this.iterator("table",function(o){var r=t
return _t("row",e,function(e){var t=it(e)
if(null!==t&&!r)return[t]
var a=Tt(o,r)
return null!==t&&i.inArray(t,a)!==-1?[t]:e?"function"==typeof e?i.map(a,function(t){var n=o.aoData[t]
return e(t,n._aData,n.nTr)?t:null}):(t=ut(lt(o.aoData,a,"nTr")),e.nodeName&&i.inArray(e,t)!==-1?[e._DT_RowIndex]:"string"==typeof e&&"#"===e.charAt(0)&&(a=o.aIds[e.replace(/^#/,"")],a!==n)?[a.idx]:i(t).filter(e).map(function(){return this._DT_RowIndex}).toArray()):a},o,r)},1)
return o.selector.rows=e,o.selector.opts=t,o}),Ve("rows().nodes()",function(){return this.iterator("row",function(e,t){return e.aoData[t].nTr||n},1)}),Ve("rows().data()",function(){return this.iterator(!0,"rows",function(e,t){return lt(e.aoData,t,"_aData")},1)}),Ge("rows().cache()","row().cache()",function(e){return this.iterator("row",function(t,n){var i=t.aoData[n]
return"search"===e?i._aFilterData:i._aSortData},1)}),Ge("rows().invalidate()","row().invalidate()",function(e){return this.iterator("row",function(t,n){A(t,n,e)})}),Ge("rows().indexes()","row().index()",function(){return this.iterator("row",function(e,t){return t},1)}),Ge("rows().ids()","row().id()",function(e){for(var t=[],n=this.context,i=0,o=n.length;i<o;i++)for(var r=0,a=this[i].length;r<a;r++){var s=n[i].rowIdFn(n[i].aoData[this[i][r]]._aData)
t.push((!0===e?"#":"")+s)}return new Be(n,t)}),Ge("rows().remove()","row().remove()",function(){var e=this
return this.iterator("row",function(t,i,o){var r=t.aoData,a=r[i]
r.splice(i,1)
for(var s=0,l=r.length;s<l;s++)null!==r[s].nTr&&(r[s].nTr._DT_RowIndex=s)
I(t.aiDisplayMaster,i),I(t.aiDisplay,i),I(e[o],i,!1),je(t),i=t.rowIdFn(a._aData),i!==n&&delete t.aIds[i]}),this.iterator("table",function(e){for(var t=0,n=e.aoData.length;t<n;t++)e.aoData[t].idx=t}),this}),Ve("rows.add()",function(e){var t=this.iterator("table",function(t){var n,i,o,r=[]
for(i=0,o=e.length;i<o;i++)n=e[i],n.nodeName&&"TR"===n.nodeName.toUpperCase()?r.push(x(t,n)[0]):r.push(w(t,n))
return r},1),n=this.rows(-1)
return n.pop(),i.merge(n,t),n}),Ve("row()",function(e,t){return St(this.rows(e,t))}),Ve("row().data()",function(e){var t=this.context
return e===n?t.length&&this.length?t[0].aoData[this[0]]._aData:n:(t[0].aoData[this[0]]._aData=e,A(t[0],this[0],"data"),this)}),Ve("row().node()",function(){var e=this.context
return e.length&&this.length?e[0].aoData[this[0]].nTr||null:null}),Ve("row.add()",function(e){e instanceof i&&e.length&&(e=e[0])
var t=this.iterator("table",function(t){return e.nodeName&&"TR"===e.nodeName.toUpperCase()?x(t,e)[0]:w(t,e)})
return this.row(t[0])})
var Dt=function(e,t){var i=e.context
i.length&&(i=i[0].aoData[t!==n?t:e[0]])&&i._details&&(i._details.remove(),i._detailsShow=n,i._details=n)},kt=function(e,t){var n=e.context
if(n.length&&e.length){var i=n[0].aoData[e[0]]
if(i._details){(i._detailsShow=t)?i._details.insertAfter(i.nTr):i._details.detach()
var o=n[0],r=new Be(o),a=o.aoData
r.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"),0<st(a,"_details").length&&(r.on("draw.dt.DT_details",function(e,t){o===t&&r.rows({page:"current"}).eq(0).each(function(e){e=a[e],e._detailsShow&&e._details.insertAfter(e.nTr)})}),r.on("column-visibility.dt.DT_details",function(e,t){if(o===t)for(var n,i=g(t),r=0,s=a.length;r<s;r++)n=a[r],n._details&&n._details.children("td[colspan]").attr("colspan",i)}),r.on("destroy.dt.DT_details",function(e,t){if(o===t)for(var n=0,i=a.length;n<i;n++)a[n]._details&&Dt(r,n)}))}}}
Ve("row().child()",function(e,t){var o=this.context
if(e===n)return o.length&&this.length?o[0].aoData[this[0]]._details:n
if(!0===e)this.child.show()
else if(!1===e)Dt(this)
else if(o.length&&this.length){var r=o[0],o=o[0].aoData[this[0]],a=[],s=function(e,t){if(i.isArray(e)||e instanceof i)for(var n=0,o=e.length;n<o;n++)s(e[n],t)
else e.nodeName&&"tr"===e.nodeName.toLowerCase()?a.push(e):(n=i("<tr><td/></tr>").addClass(t),i("td",n).addClass(t).html(e)[0].colSpan=g(r),a.push(n[0]))}
s(e,t),o._details&&o._details.remove(),o._details=i(a),o._detailsShow&&o._details.insertAfter(o.nTr)}return this}),Ve(["row().child.show()","row().child().show()"],function(){return kt(this,!0),this}),Ve(["row().child.hide()","row().child().hide()"],function(){return kt(this,!1),this}),Ve(["row().child.remove()","row().child().remove()"],function(){return Dt(this),this}),Ve("row().child.isShown()",function(){var e=this.context
return!(!e.length||!this.length)&&(e[0].aoData[this[0]]._detailsShow||!1)})
var Et=/^(.+):(name|visIdx|visible)$/,It=function(e,t,n,i,o){for(var n=[],i=0,r=o.length;i<r;i++)n.push(_(e,o[i],t))
return n}
Ve("columns()",function(e,t){e===n?e="":i.isPlainObject(e)&&(t=e,e="")
var t=Ct(t),o=this.iterator("table",function(n){var o=e,r=t,a=n.aoColumns,s=st(a,"sName"),l=st(a,"nTh")
return _t("column",o,function(e){var t=it(e)
if(""===e)return ct(a.length)
if(null!==t)return[t>=0?t:a.length+t]
if("function"==typeof e){var o=Tt(n,r)
return i.map(a,function(t,i){return e(i,It(n,i,0,0,o),l[i])?i:null})}var c="string"==typeof e?e.match(Et):""
if(!c)return i(l).filter(e).map(function(){return i.inArray(this,l)}).toArray()
switch(c[2]){case"visIdx":case"visible":if(t=parseInt(c[1],10),t<0){var u=i.map(a,function(e,t){return e.bVisible?t:null})
return[u[u.length+t]]}return[h(n,t)]
case"name":return i.map(s,function(e,t){return e===c[1]?t:null})}},n,r)},1)
return o.selector.cols=e,o.selector.opts=t,o}),Ge("columns().header()","column().header()",function(){return this.iterator("column",function(e,t){return e.aoColumns[t].nTh},1)}),Ge("columns().footer()","column().footer()",function(){return this.iterator("column",function(e,t){return e.aoColumns[t].nTf},1)}),Ge("columns().data()","column().data()",function(){return this.iterator("column-rows",It,1)}),Ge("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(e,t){return e.aoColumns[t].mData},1)}),Ge("columns().cache()","column().cache()",function(e){return this.iterator("column-rows",function(t,n,i,o,r){return lt(t.aoData,r,"search"===e?"_aFilterData":"_aSortData",n)},1)}),Ge("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(e,t,n,i,o){return lt(e.aoData,o,"anCells",t)},1)}),Ge("columns().visible()","column().visible()",function(e,t){return this.iterator("column",function(o,r){if(e===n)return o.aoColumns[r].bVisible
var a,s,l,c=o.aoColumns,u=c[r],d=o.aoData
if(e!==n&&u.bVisible!==e){if(e){var p=i.inArray(!0,st(c,"bVisible"),r+1)
for(a=0,s=d.length;a<s;a++)l=d[a].nTr,c=d[a].anCells,l&&l.insertBefore(c[r],c[p]||null)}else i(st(o.aoData,"anCells",r)).detach()
u.bVisible=e,L(o,o.aoHeader),L(o,o.aoFooter),(t===n||t)&&(f(o),(o.oScroll.sX||o.oScroll.sY)&&he(o)),$e(o,null,"column-visibility",[o,r,e]),Ie(o)}})}),Ge("columns().indexes()","column().index()",function(e){return this.iterator("column",function(t,n){return"visible"===e?m(t,n):n},1)}),Ve("columns.adjust()",function(){return this.iterator("table",function(e){f(e)},1)}),Ve("column.index()",function(e,t){if(0!==this.context.length){var n=this.context[0]
if("fromVisible"===e||"toData"===e)return h(n,t)
if("fromData"===e||"toVisible"===e)return m(n,t)}}),Ve("column()",function(e,t){return St(this.columns(e,t))}),Ve("cells()",function(e,t,o){if(i.isPlainObject(e)&&(e.row===n?(o=e,e=null):(o=t,t=null)),i.isPlainObject(t)&&(o=t,t=null),null===t||t===n)return this.iterator("table",function(t){var r,a,s,l,c,u,d,p=e,f=Ct(o),h=t.aoData,m=Tt(t,f),g=ut(lt(h,m,"anCells")),v=i([].concat.apply([],g)),y=t.aoColumns.length
return _t("cell",p,function(e){var o="function"==typeof e
if(null===e||e===n||o){for(a=[],s=0,l=m.length;s<l;s++)for(r=m[s],c=0;c<y;c++)u={row:r,column:c},o?(d=h[r],e(u,_(t,r,c),d.anCells?d.anCells[c]:null)&&a.push(u)):a.push(u)
return a}return i.isPlainObject(e)?[e]:v.filter(e).map(function(e,t){if(t.parentNode)r=t.parentNode._DT_RowIndex
else for(e=0,l=h.length;e<l;e++)if(i.inArray(t,h[e].anCells)!==-1){r=e
break}return{row:r,column:i.inArray(t,h[r].anCells)}}).toArray()},t,f)})
var r,a,s,l,c,u=this.columns(t,o),d=this.rows(e,o),p=this.iterator("table",function(e,t){for(r=[],a=0,s=d[t].length;a<s;a++)for(l=0,c=u[t].length;l<c;l++)r.push({row:d[t][a],column:u[t][l]})
return r},1)
return i.extend(p.selector,{cols:t,rows:e,opts:o}),p}),Ge("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(e,t,i){return(e=e.aoData[t].anCells)?e[i]:n},1)}),Ve("cells().data()",function(){return this.iterator("cell",function(e,t,n){return _(e,t,n)},1)}),Ge("cells().cache()","cell().cache()",function(e){return e="search"===e?"_aFilterData":"_aSortData",this.iterator("cell",function(t,n,i){return t.aoData[n][e][i]},1)}),Ge("cells().render()","cell().render()",function(e){return this.iterator("cell",function(t,n,i){return _(t,n,i,e)},1)}),Ge("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(e,t,n){return{row:t,column:n,columnVisible:m(e,n)}},1)}),Ge("cells().invalidate()","cell().invalidate()",function(e){return this.iterator("cell",function(t,n,i){A(t,n,e,i)})}),Ve("cell()",function(e,t,n){return St(this.cells(e,t,n))}),Ve("cell().data()",function(e){var t=this.context,i=this[0]
return e===n?t.length&&i.length?_(t[0],i[0].row,i[0].column):n:(C(t[0],i[0].row,i[0].column,e),A(t[0],i[0].row,"data",i[0].column),this)}),Ve("order()",function(e,t){var o=this.context
return e===n?0!==o.length?o[0].aaSorting:n:("number"==typeof e?e=[[e,t]]:i.isArray(e[0])||(e=Array.prototype.slice.call(arguments)),this.iterator("table",function(t){t.aaSorting=e.slice()}))}),Ve("order.listener()",function(e,t,n){return this.iterator("table",function(i){De(i,e,t,n)})}),Ve(["columns().order()","column().order()"],function(e){var t=this
return this.iterator("table",function(n,o){var r=[]
i.each(t[o],function(t,n){r.push([n,e])}),n.aaSorting=r})}),Ve("search()",function(e,t,o,r){var a=this.context
return e===n?0!==a.length?a[0].oPreviousSearch.sSearch:n:this.iterator("table",function(n){n.oFeatures.bFilter&&V(n,i.extend({},n.oPreviousSearch,{sSearch:e+"",bRegex:null!==t&&t,bSmart:null===o||o,bCaseInsensitive:null===r||r}),1)})}),Ge("columns().search()","column().search()",function(e,t,o,r){return this.iterator("column",function(a,s){var l=a.aoPreSearchCols
return e===n?l[s].sSearch:void(a.oFeatures.bFilter&&(i.extend(l[s],{sSearch:e+"",bRegex:null!==t&&t,bSmart:null===o||o,bCaseInsensitive:null===r||r}),V(a,a.oPreviousSearch,1)))})}),Ve("state()",function(){return this.context.length?this.context[0].oSavedState:null}),Ve("state.clear()",function(){return this.iterator("table",function(e){e.fnStateSaveCallback.call(e.oInstance,e,{})})}),Ve("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null}),Ve("state.save()",function(){return this.iterator("table",function(e){Ie(e)})}),qe.versionCheck=qe.fnVersionCheck=function(e){for(var t,n,i=qe.version.split("."),e=e.split("."),o=0,r=e.length;o<r;o++)if(t=parseInt(i[o],10)||0,n=parseInt(e[o],10)||0,t!==n)return t>n
return!0},qe.isDataTable=qe.fnIsDataTable=function(e){var t=i(e).get(0),n=!1
return i.each(qe.settings,function(e,o){var r=o.nScrollHead?i("table",o.nScrollHead)[0]:null,a=o.nScrollFoot?i("table",o.nScrollFoot)[0]:null
o.nTable!==t&&r!==t&&a!==t||(n=!0)}),n},qe.tables=qe.fnTables=function(e){var t=!1
i.isPlainObject(e)&&(t=e.api,e=e.visible)
var n=i.map(qe.settings,function(t){if(!e||e&&i(t.nTable).is(":visible"))return t.nTable})
return t?new Be(n):n},qe.util={throttle:ve,escapeRegex:Z},qe.camelToHungarian=r,Ve("$()",function(e,t){var n=this.rows(t).nodes(),n=i(n)
return i([].concat(n.filter(e).toArray(),n.find(e).toArray()))}),i.each(["on","one","off"],function(e,t){Ve(t+"()",function(){var e=Array.prototype.slice.call(arguments)
e[0].match(/\.dt\b/)||(e[0]+=".dt")
var n=i(this.tables().nodes())
return n[t].apply(n,e),this})}),Ve("clear()",function(){return this.iterator("table",function(e){E(e)})}),Ve("settings()",function(){return new Be(this.context,this.context)}),Ve("init()",function(){var e=this.context
return e.length?e[0].oInit:null}),Ve("data()",function(){return this.iterator("table",function(e){return st(e.aoData,"_aData")}).flatten()}),Ve("destroy()",function(t){return t=t||!1,this.iterator("table",function(n){var o,r=n.nTableWrapper.parentNode,a=n.oClasses,s=n.nTable,l=n.nTBody,c=n.nTHead,u=n.nTFoot,d=i(s),l=i(l),p=i(n.nTableWrapper),f=i.map(n.aoData,function(e){return e.nTr})
n.bDestroying=!0,$e(n,"aoDestroyCallback","destroy",[n]),t||new Be(n).columns().visible(!0),p.unbind(".DT").find(":not(tbody *)").unbind(".DT"),i(e).unbind(".DT-"+n.sInstance),s!=c.parentNode&&(d.children("thead").detach(),d.append(c)),u&&s!=u.parentNode&&(d.children("tfoot").detach(),d.append(u)),n.aaSorting=[],n.aaSortingFixed=[],ke(n),i(f).removeClass(n.asStripeClasses.join(" ")),i("th, td",c).removeClass(a.sSortable+" "+a.sSortableAsc+" "+a.sSortableDesc+" "+a.sSortableNone),n.bJUI&&(i("th span."+a.sSortIcon+", td span."+a.sSortIcon,c).detach(),i("th, td",c).each(function(){var e=i("div."+a.sSortJUIWrapper,this)
i(this).append(e.contents()),e.detach()})),l.children().detach(),l.append(f),c=t?"remove":"detach",d[c](),p[c](),!t&&r&&(r.insertBefore(s,n.nTableReinsertBefore),d.css("width",n.sDestroyWidth).removeClass(a.sTable),(o=n.asDestroyStripes.length)&&l.children().each(function(e){i(this).addClass(n.asDestroyStripes[e%o])})),r=i.inArray(n,qe.settings),-1!==r&&qe.settings.splice(r,1)})}),i.each(["column","row","cell"],function(e,t){Ve(t+"s().every()",function(e){return this.iterator(t,function(i,o,r,a,s){e.call(new Be(i)[t](o,"cell"===t?r:n),o,r,a,s)})})}),Ve("i18n()",function(e,t,o){var r=this.context[0],e=T(e)(r.oLanguage)
return e===n&&(e=t),o!==n&&i.isPlainObject(e)&&(e=e[o]!==n?e[o]:e._),e.replace("%d",o)}),qe.version="1.10.9",qe.settings=[],qe.models={},qe.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0},qe.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1},qe.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null},qe.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(e){try{return JSON.parse((-1===e.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+e.sInstance+"_"+location.pathname))}catch(e){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(e,t){try{(-1===e.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+e.sInstance+"_"+location.pathname,JSON.stringify(t))}catch(e){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:i.extend({},qe.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"},o(qe.defaults),qe.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null},o(qe.defaults.column),qe.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:n,oAjaxData:n,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==He(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==He(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var e=this._iDisplayLength,t=this._iDisplayStart,n=t+e,i=this.aiDisplay.length,o=this.oFeatures,r=o.bPaginate
return o.bServerSide?!1===r||-1===e?t+i:Math.min(t+e,this._iRecordsDisplay):!r||n>i||-1===e?i:n},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null},qe.ext=Ue={buttons:{},classes:{},errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:qe.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:qe.version},i.extend(Ue,{afnFiltering:Ue.search,aTypes:Ue.type.detect,ofnSearch:Ue.type.search,oSort:Ue.type.order,afnSortData:Ue.order,aoFeatures:Ue.feature,oApi:Ue.internal,oStdClasses:Ue.classes,oPagination:Ue.pager}),i.extend(qe.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""})
var At="",At="",Ft=At+"ui-state-default",Mt=At+"css_right ui-icon ui-icon-",Pt=At+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix"
i.extend(qe.ext.oJUIClasses,qe.ext.classes,{sPageButton:"fg-button ui-button "+Ft,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:Ft+" sorting_asc",sSortDesc:Ft+" sorting_desc",sSortable:Ft+" sorting",sSortableAsc:Ft+" sorting_asc_disabled",sSortableDesc:Ft+" sorting_desc_disabled",sSortableNone:Ft+" sorting_disabled",sSortJUIAsc:Mt+"triangle-1-n",sSortJUIDesc:Mt+"triangle-1-s",sSortJUI:Mt+"carat-2-n-s",sSortJUIAscAllowed:Mt+"carat-1-n",sSortJUIDescAllowed:Mt+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+Ft,sScrollFoot:"dataTables_scrollFoot "+Ft,sHeaderTH:Ft,sFooterTH:Ft,sJUIHeader:Pt+" ui-corner-tl ui-corner-tr",sJUIFooter:Pt+" ui-corner-bl ui-corner-br"})
var Ot=qe.ext.pager
i.extend(Ot,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(e,t){return[We(e,t)]},simple_numbers:function(e,t){return["previous",We(e,t),"next"]},full_numbers:function(e,t){return["first","previous",We(e,t),"next","last"]},_numbers:We,numbers_length:7}),i.extend(!0,qe.ext.renderer,{pageButton:{_:function(e,n,o,r,a,s){var l,c,u,d=e.oClasses,p=e.oLanguage.oPaginate,f=0,h=function(t,n){var r,u,m,g,v=function(t){ue(e,t.data.action,!0)}
for(r=0,u=n.length;r<u;r++)if(g=n[r],i.isArray(g))m=i("<"+(g.DT_el||"div")+"/>").appendTo(t),h(m,g)
else{switch(l=null,c="",g){case"ellipsis":t.append('<span class="ellipsis">&#x2026;</span>')
break
case"first":l=p.sFirst,c=g+(a>0?"":" "+d.sPageButtonDisabled)
break
case"previous":l=p.sPrevious,c=g+(a>0?"":" "+d.sPageButtonDisabled)
break
case"next":l=p.sNext,c=g+(a<s-1?"":" "+d.sPageButtonDisabled)
break
case"last":l=p.sLast,c=g+(a<s-1?"":" "+d.sPageButtonDisabled)
break
default:l=g+1,c=a===g?d.sPageButtonActive:""}null!==l&&(m=i("<a>",{class:d.sPageButton+" "+c,"aria-controls":e.sTableId,"data-dt-idx":f,tabindex:e.iTabIndex,id:0===o&&"string"==typeof g?e.sTableId+"_"+g:null}).html(l).appendTo(t),Le(m,{action:g},v),f++)}}
try{u=i(n).find(t.activeElement).data("dt-idx")}catch(e){}h(i(n).empty(),r),u&&i(n).find("[data-dt-idx="+u+"]").focus()}}}),i.extend(qe.ext.type.detect,[function(e,t){var n=t.oLanguage.sDecimal
return rt(e,n)?"num"+n:null},function(e){if(e&&!(e instanceof Date)&&(!Ze.test(e)||!Ke.test(e)))return null
var t=Date.parse(e)
return null!==t&&!isNaN(t)||nt(e)?"date":null},function(e,t){var n=t.oLanguage.sDecimal
return rt(e,n,!0)?"num-fmt"+n:null},function(e,t){var n=t.oLanguage.sDecimal
return at(e,n)?"html-num"+n:null},function(e,t){var n=t.oLanguage.sDecimal
return at(e,n,!0)?"html-num-fmt"+n:null},function(e){return nt(e)||"string"==typeof e&&-1!==e.indexOf("<")?"html":null}]),i.extend(qe.ext.type.search,{html:function(e){return nt(e)?e:"string"==typeof e?e.replace(Je," ").replace(Xe,""):""},string:function(e){return nt(e)?e:"string"==typeof e?e.replace(Je," "):e}})
var Lt=function(e,t,n,i){return 0===e||e&&"-"!==e?(t&&(e=ot(e,t)),e.replace&&(n&&(e=e.replace(n,"")),i&&(e=e.replace(i,""))),1*e):-(1/0)}
return i.extend(Ue.type.order,{"date-pre":function(e){return Date.parse(e)||0},"html-pre":function(e){return nt(e)?"":e.replace?e.replace(/<.*?>/g,"").toLowerCase():e+""},"string-pre":function(e){return nt(e)?"":"string"==typeof e?e.toLowerCase():e.toString?e.toString():""},"string-asc":function(e,t){return e<t?-1:e>t?1:0},"string-desc":function(e,t){return e<t?1:e>t?-1:0}}),ze(""),i.extend(!0,qe.ext.renderer,{header:{_:function(e,t,n,o){i(e.nTable).on("order.dt.DT",function(i,r,a,s){e===r&&(i=n.idx,t.removeClass(n.sSortingClass+" "+o.sSortAsc+" "+o.sSortDesc).addClass("asc"==s[i]?o.sSortAsc:"desc"==s[i]?o.sSortDesc:n.sSortingClass))})},jqueryui:function(e,t,n,o){i("<div/>").addClass(o.sSortJUIWrapper).append(t.contents()).append(i("<span/>").addClass(o.sSortIcon+" "+n.sSortingClassJUI)).appendTo(t),i(e.nTable).on("order.dt.DT",function(i,r,a,s){e===r&&(i=n.idx,t.removeClass(o.sSortAsc+" "+o.sSortDesc).addClass("asc"==s[i]?o.sSortAsc:"desc"==s[i]?o.sSortDesc:n.sSortingClass),t.find("span."+o.sSortIcon).removeClass(o.sSortJUIAsc+" "+o.sSortJUIDesc+" "+o.sSortJUI+" "+o.sSortJUIAscAllowed+" "+o.sSortJUIDescAllowed).addClass("asc"==s[i]?o.sSortJUIAsc:"desc"==s[i]?o.sSortJUIDesc:n.sSortingClassJUI))})}}}),qe.render={number:function(e,t,n,i,o){return{display:function(r){if("number"!=typeof r&&"string"!=typeof r)return r
var a=0>r?"-":"",r=Math.abs(parseFloat(r)),s=parseInt(r,10),r=n?t+(r-s).toFixed(n).substring(2):""
return a+(i||"")+s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,e)+r+(o||"")}}}},i.extend(qe.ext.internal,{_fnExternApiFunc:Ye,_fnBuildAjax:W,_fnAjaxUpdate:z,_fnAjaxParameters:Y,_fnAjaxUpdateDraw:q,_fnAjaxDataSrc:U,_fnAddColumn:d,_fnColumnOptions:p,_fnAdjustColumnSizing:f,_fnVisibleToColumnIndex:h,_fnColumnIndexToVisible:m,_fnVisbleColumns:g,_fnGetColumns:v,_fnColumnTypes:y,_fnApplyColumnDefs:b,_fnHungarianMap:o,_fnCamelToHungarian:r,_fnLanguageCompat:a,_fnBrowserDetect:c,_fnAddData:w,_fnAddTr:x,_fnNodeToDataIndex:function(e,t){return t._DT_RowIndex!==n?t._DT_RowIndex:null},_fnNodeToColumnIndex:function(e,t,n){return i.inArray(n,e.aoData[t].anCells)},_fnGetCellData:_,_fnSetCellData:C,_fnSplitObjNotation:S,_fnGetObjectDataFn:T,_fnSetObjectDataFn:D,_fnGetDataMaster:k,_fnClearTable:E,_fnDeleteIndex:I,_fnInvalidate:A,_fnGetRowElements:F,_fnCreateTr:M,_fnBuildHead:O,_fnDrawHead:L,_fnDraw:N,_fnReDraw:$,_fnAddOptionsHtml:j,_fnDetectHeader:R,_fnGetUniqueThs:H,_fnFeatureHtmlFilter:B,_fnFilterComplete:V,_fnFilterCustom:G,_fnFilterColumn:Q,_fnFilter:J,_fnFilterCreateSearch:X,_fnEscapeRegex:Z,_fnFilterData:K,_fnFeatureHtmlInfo:ne,_fnUpdateInfo:ie,_fnInfoMacros:oe,_fnInitialise:re,_fnInitComplete:ae,_fnLengthChange:se,_fnFeatureHtmlLength:le,_fnFeatureHtmlPaginate:ce,_fnPageChange:ue,_fnFeatureHtmlProcessing:de,_fnProcessingDisplay:pe,_fnFeatureHtmlTable:fe,_fnScrollDraw:he,_fnApplyToChildren:me,_fnCalculateColumnWidths:ge,_fnThrottle:ve,_fnConvertToWidth:ye,_fnGetWidestNode:be,_fnGetMaxLenString:we,_fnStringToCss:xe,_fnSortFlatten:_e,_fnSort:Ce,_fnSortAria:Se,_fnSortListener:Te,_fnSortAttachListener:De,_fnSortingClasses:ke,_fnSortData:Ee,_fnSaveState:Ie,_fnLoadState:Ae,_fnSettingsFromNode:Fe,_fnLog:Me,_fnMap:Pe,_fnBindAction:Le,_fnCallbackReg:Ne,_fnCallbackFire:$e,_fnLengthOverflow:je,_fnRenderer:Re,_fnDataSource:He,_fnRowAttributes:P,_fnCalculateEnd:function(){}}),i.fn.dataTable=qe,i.fn.dataTableSettings=qe.settings,i.fn.dataTableExt=qe.ext,i.fn.DataTable=function(e){return i(this).dataTable(e).api()},i.each(qe,function(e,t){i.fn.DataTable[e]=t}),i.fn.dataTable}
"function"==typeof define&&define.amd?define("datatables",["jquery"],i):"object"==typeof exports?module.exports=i(require("jquery")):jQuery&&!jQuery.fn.dataTable&&i(jQuery)}(window,document),function(e,t,n,i){function o(t,n){this.element=t,this.$wrapper=null,this.options=e.extend({},a,n),this._defaults=a,this._name=r,this.init()}var r="loadingIndicator",a={useImage:!0,showOnInit:!0,loadingImage:asset_url+"bundles/corezero/img/gears.svg",loadingClass:"loader",wrapperClass:"loading-indicator-wrapper"}
o.prototype={init:function(){this.addLoader(),this.options.showOnInit?this.show():this.hide()},addLoader:function(){var t=this.createDOM()
this.$wrapper=t,e(this.element).append(t)},createDOM:function(){var t=e('<div class="'+this.options.wrapperClass+'"></div>'),n=e('<span class="loading-indicator-helper"></span>'),i=e(this.options.useImage?'<img src="'+this.options.loadingImage+'" />':'<div class="'+this.options.loadingClass+'"></div>')
return t.append(n),t.append(i),t},show:function(){e(this.$wrapper).removeClass("loader-hidden").addClass("loader-visible")},hide:function(){e(this.$wrapper).removeClass("loader-visible").addClass("loader-hidden")}},e.fn[r]=function(t){return this.each(function(){e.data(this,r)||e.data(this,r,new o(this,t))})}}(jQuery,window,document),"undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery")
if(+function(e){"use strict"
var t=e.fn.jquery.split(" ")[0].split(".")
if(t[0]<2&&t[1]<9||1==t[0]&&9==t[1]&&t[2]<1||t[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(e){"use strict"
function t(t){return this.each(function(){var n=e(this),o=n.data("bs.alert")
o||n.data("bs.alert",o=new i(this)),"string"==typeof t&&o[t].call(n)})}var n='[data-dismiss="alert"]',i=function(t){e(t).on("click",n,this.close)}
i.VERSION="3.3.6",i.TRANSITION_DURATION=150,i.prototype.close=function(t){function n(){a.detach().trigger("closed.bs.alert").remove()}var o=e(this),r=o.attr("data-target")
r||(r=o.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""))
var a=e(r)
t&&t.preventDefault(),a.length||(a=o.closest(".alert")),a.trigger(t=e.Event("close.bs.alert")),t.isDefaultPrevented()||(a.removeClass("in"),e.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n())}
var o=e.fn.alert
e.fn.alert=t,e.fn.alert.Constructor=i,e.fn.alert.noConflict=function(){return e.fn.alert=o,this},e(document).on("click.bs.alert.data-api",n,i.prototype.close)}(jQuery),+function(e){"use strict"
function t(t){return this.each(function(){var i=e(this),o=i.data("bs.button"),r="object"==typeof t&&t
o||i.data("bs.button",o=new n(this,r)),"toggle"==t?o.toggle():t&&o.setState(t)})}var n=function(t,i){this.$element=e(t),this.options=e.extend({},n.DEFAULTS,i),this.isLoading=!1}
n.VERSION="3.3.6",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var n="disabled",i=this.$element,o=i.is("input")?"val":"html",r=i.data()
t+="Text",null==r.resetText&&i.data("resetText",i[o]()),setTimeout(e.proxy(function(){i[o](null==r[t]?this.options[t]:r[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(n).attr(n,n)):this.isLoading&&(this.isLoading=!1,i.removeClass(n).removeAttr(n))},this),0)},n.prototype.toggle=function(){var e=!0,t=this.$element.closest('[data-toggle="buttons"]')
if(t.length){var n=this.$element.find("input")
"radio"==n.prop("type")?(n.prop("checked")&&(e=!1),t.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==n.prop("type")&&(n.prop("checked")!==this.$element.hasClass("active")&&(e=!1),this.$element.toggleClass("active")),n.prop("checked",this.$element.hasClass("active")),e&&n.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")}
var i=e.fn.button
e.fn.button=t,e.fn.button.Constructor=n,e.fn.button.noConflict=function(){return e.fn.button=i,this},e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(n){var i=e(n.target)
i.hasClass("btn")||(i=i.closest(".btn")),t.call(i,"toggle"),e(n.target).is('input[type="radio"]')||e(n.target).is('input[type="checkbox"]')||n.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){e(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),+function(e){"use strict"
function t(t){return this.each(function(){var i=e(this),o=i.data("bs.carousel"),r=e.extend({},n.DEFAULTS,i.data(),"object"==typeof t&&t),a="string"==typeof t?t:r.slide
o||i.data("bs.carousel",o=new n(this,r)),"number"==typeof t?o.to(t):a?o[a]():r.interval&&o.pause().cycle()})}var n=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",e.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",e.proxy(this.pause,this)).on("mouseleave.bs.carousel",e.proxy(this.cycle,this))}
n.VERSION="3.3.6",n.TRANSITION_DURATION=600,n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},n.prototype.keydown=function(e){if(!/input|textarea/i.test(e.target.tagName)){switch(e.which){case 37:this.prev()
break
case 39:this.next()
break
default:return}e.preventDefault()}},n.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(e){return this.$items=e.parent().children(".item"),this.$items.index(e||this.$active)},n.prototype.getItemForDirection=function(e,t){var n=this.getItemIndex(t),i="prev"==e&&0===n||"next"==e&&n==this.$items.length-1
if(i&&!this.options.wrap)return t
var o="prev"==e?-1:1,r=(n+o)%this.$items.length
return this.$items.eq(r)},n.prototype.to=function(e){var t=this,n=this.getItemIndex(this.$active=this.$element.find(".item.active"))
return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){t.to(e)}):n==e?this.pause().cycle():this.slide(e>n?"next":"prev",this.$items.eq(e))},n.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){return this.sliding?void 0:this.slide("next")},n.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},n.prototype.slide=function(t,i){var o=this.$element.find(".item.active"),r=i||this.getItemForDirection(t,o),a=this.interval,s="next"==t?"left":"right",l=this
if(r.hasClass("active"))return this.sliding=!1
var c=r[0],u=e.Event("slide.bs.carousel",{relatedTarget:c,direction:s})
if(this.$element.trigger(u),!u.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active")
var d=e(this.$indicators.children()[this.getItemIndex(r)])
d&&d.addClass("active")}var p=e.Event("slid.bs.carousel",{relatedTarget:c,direction:s})
return e.support.transition&&this.$element.hasClass("slide")?(r.addClass(t),r[0].offsetWidth,o.addClass(s),r.addClass(s),o.one("bsTransitionEnd",function(){r.removeClass([t,s].join(" ")).addClass("active"),o.removeClass(["active",s].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(p)},0)}).emulateTransitionEnd(n.TRANSITION_DURATION)):(o.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger(p)),a&&this.cycle(),this}}
var i=e.fn.carousel
e.fn.carousel=t,e.fn.carousel.Constructor=n,e.fn.carousel.noConflict=function(){return e.fn.carousel=i,this}
var o=function(n){var i,o=e(this),r=e(o.attr("data-target")||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""))
if(r.hasClass("carousel")){var a=e.extend({},r.data(),o.data()),s=o.attr("data-slide-to")
s&&(a.interval=!1),t.call(r,a),s&&r.data("bs.carousel").to(s),n.preventDefault()}}
e(document).on("click.bs.carousel.data-api","[data-slide]",o).on("click.bs.carousel.data-api","[data-slide-to]",o),e(window).on("load",function(){e('[data-ride="carousel"]').each(function(){var n=e(this)
t.call(n,n.data())})})}(jQuery),+function(e){"use strict"
function t(t){var n=t.attr("data-target")
n||(n=t.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""))
var i=n&&e(n)
return i&&i.length?i:t.parent()}function n(n){n&&3===n.which||(e(o).remove(),e(r).each(function(){var i=e(this),o=t(i),r={relatedTarget:this}
o.hasClass("open")&&(n&&"click"==n.type&&/input|textarea/i.test(n.target.tagName)&&e.contains(o[0],n.target)||(o.trigger(n=e.Event("hide.bs.dropdown",r)),n.isDefaultPrevented()||(i.attr("aria-expanded","false"),o.removeClass("open").trigger(e.Event("hidden.bs.dropdown",r)))))}))}function i(t){return this.each(function(){var n=e(this),i=n.data("bs.dropdown")
i||n.data("bs.dropdown",i=new a(this)),"string"==typeof t&&i[t].call(n)})}var o=".dropdown-backdrop",r='[data-toggle="dropdown"]',a=function(t){e(t).on("click.bs.dropdown",this.toggle)}
a.VERSION="3.3.6",a.prototype.toggle=function(i){var o=e(this)
if(!o.is(".disabled, :disabled")){var r=t(o),a=r.hasClass("open")
if(n(),!a){"ontouchstart"in document.documentElement&&!r.closest(".navbar-nav").length&&e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click",n)
var s={relatedTarget:this}
if(r.trigger(i=e.Event("show.bs.dropdown",s)),i.isDefaultPrevented())return
o.trigger("focus").attr("aria-expanded","true"),r.toggleClass("open").trigger(e.Event("shown.bs.dropdown",s))}return!1}},a.prototype.keydown=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)){var i=e(this)
if(n.preventDefault(),n.stopPropagation(),!i.is(".disabled, :disabled")){var o=t(i),a=o.hasClass("open")
if(!a&&27!=n.which||a&&27==n.which)return 27==n.which&&o.find(r).trigger("focus"),i.trigger("click")
var s=" li:not(.disabled):visible a",l=o.find(".dropdown-menu"+s)
if(l.length){var c=l.index(n.target)
38==n.which&&c>0&&c--,40==n.which&&c<l.length-1&&c++,~c||(c=0),l.eq(c).trigger("focus")}}}}
var s=e.fn.dropdown
e.fn.dropdown=i,e.fn.dropdown.Constructor=a,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",r,a.prototype.toggle).on("keydown.bs.dropdown.data-api",r,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),+function(e){"use strict"
function t(t,i){return this.each(function(){var o=e(this),r=o.data("bs.modal"),a=e.extend({},n.DEFAULTS,o.data(),"object"==typeof t&&t)
r||o.data("bs.modal",r=new n(this,a)),"string"==typeof t?r[t](i):a.show&&r.show(i)})}var n=function(t,n){this.options=n,this.$body=e(document.body),this.$element=e(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,e.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}
n.VERSION="3.3.6",n.TRANSITION_DURATION=300,n.BACKDROP_TRANSITION_DURATION=150,n.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},n.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)},n.prototype.show=function(t){var i=this,o=e.Event("show.bs.modal",{relatedTarget:t})
this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',e.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(t){e(t.target).is(i.$element)&&(i.ignoreBackdropClick=!0)})}),this.backdrop(function(){var o=e.support.transition&&i.$element.hasClass("fade")
i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),o&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus()
var r=e.Event("shown.bs.modal",{relatedTarget:t})
o?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(r)}).emulateTransitionEnd(n.TRANSITION_DURATION):i.$element.trigger("focus").trigger(r)}))},n.prototype.hide=function(t){t&&t.preventDefault(),t=e.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),e(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),e.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",e.proxy(this.hideModal,this)).emulateTransitionEnd(n.TRANSITION_DURATION):this.hideModal())},n.prototype.enforceFocus=function(){e(document).off("focusin.bs.modal").on("focusin.bs.modal",e.proxy(function(e){this.$element[0]===e.target||this.$element.has(e.target).length||this.$element.trigger("focus")},this))},n.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",e.proxy(function(e){27==e.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},n.prototype.resize=function(){this.isShown?e(window).on("resize.bs.modal",e.proxy(this.handleUpdate,this)):e(window).off("resize.bs.modal")},n.prototype.hideModal=function(){var e=this
this.$element.hide(),this.backdrop(function(){e.$body.removeClass("modal-open"),e.resetAdjustments(),e.resetScrollbar(),e.$element.trigger("hidden.bs.modal")})},n.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},n.prototype.backdrop=function(t){var i=this,o=this.$element.hasClass("fade")?"fade":""
if(this.isShown&&this.options.backdrop){var r=e.support.transition&&o
if(this.$backdrop=e(document.createElement("div")).addClass("modal-backdrop "+o).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",e.proxy(function(e){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(e.target===e.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),r&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return
r?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in")
var a=function(){i.removeBackdrop(),t&&t()}
e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):a()}else t&&t()},n.prototype.handleUpdate=function(){this.adjustDialog()},n.prototype.adjustDialog=function(){var e=this.$element[0].scrollHeight>document.documentElement.clientHeight
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&e?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!e?this.scrollbarWidth:""})},n.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},n.prototype.checkScrollbar=function(){var e=window.innerWidth
if(!e){var t=document.documentElement.getBoundingClientRect()
e=t.right-Math.abs(t.left)}this.bodyIsOverflowing=document.body.clientWidth<e,this.scrollbarWidth=this.measureScrollbar()},n.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10)
this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",e+this.scrollbarWidth)},n.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},n.prototype.measureScrollbar=function(){var e=document.createElement("div")
e.className="modal-scrollbar-measure",this.$body.append(e)
var t=e.offsetWidth-e.clientWidth
return this.$body[0].removeChild(e),t}
var i=e.fn.modal
e.fn.modal=t,e.fn.modal.Constructor=n,e.fn.modal.noConflict=function(){return e.fn.modal=i,this},e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(n){var i=e(this),o=i.attr("href"),r=e(i.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),a=r.data("bs.modal")?"toggle":e.extend({remote:!/#/.test(o)&&o},r.data(),i.data())
i.is("a")&&n.preventDefault(),r.one("show.bs.modal",function(e){e.isDefaultPrevented()||r.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),t.call(r,a,this)})}(jQuery),+function(e){"use strict"
function t(t){return this.each(function(){var i=e(this),o=i.data("bs.tooltip"),r="object"==typeof t&&t;(o||!/destroy|hide/.test(t))&&(o||i.data("bs.tooltip",o=new n(this,r)),"string"==typeof t&&o[t]())})}var n=function(e,t){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",e,t)}
n.VERSION="3.3.6",n.TRANSITION_DURATION=150,n.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},n.prototype.init=function(t,n,i){if(this.enabled=!0,this.type=t,this.$element=e(n),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&e(e.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!")
for(var o=this.options.trigger.split(" "),r=o.length;r--;){var a=o[r]
if("click"==a)this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this))
else if("manual"!=a){var s="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout"
this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,e.proxy(this.leave,this))}}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.getOptions=function(t){return t=e.extend({},this.getDefaults(),this.$element.data(),t),t.delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},n.prototype.getDelegateOptions=function(){var t={},n=this.getDefaults()
return this._options&&e.each(this._options,function(e,i){n[e]!=i&&(t[e]=i)}),t},n.prototype.enter=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type)
return n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n)),t instanceof e.Event&&(n.inState["focusin"==t.type?"focus":"hover"]=!0),n.tip().hasClass("in")||"in"==n.hoverState?void(n.hoverState="in"):(clearTimeout(n.timeout),n.hoverState="in",n.options.delay&&n.options.delay.show?void(n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show)):n.show())},n.prototype.isInStateTrue=function(){for(var e in this.inState)if(this.inState[e])return!0
return!1},n.prototype.leave=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type)
return n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n)),t instanceof e.Event&&(n.inState["focusout"==t.type?"focus":"hover"]=!1),n.isInStateTrue()?void 0:(clearTimeout(n.timeout),n.hoverState="out",n.options.delay&&n.options.delay.hide?void(n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)):n.hide())},n.prototype.show=function(){var t=e.Event("show.bs."+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(t)
var i=e.contains(this.$element[0].ownerDocument.documentElement,this.$element[0])
if(t.isDefaultPrevented()||!i)return
var o=this,r=this.tip(),a=this.getUID(this.type)
this.setContent(),r.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&r.addClass("fade")
var s="function"==typeof this.options.placement?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,c=l.test(s)
c&&(s=s.replace(l,"")||"top"),r.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type)
var u=this.getPosition(),d=r[0].offsetWidth,p=r[0].offsetHeight
if(c){var f=s,h=this.getPosition(this.$viewport)
s="bottom"==s&&u.bottom+p>h.bottom?"top":"top"==s&&u.top-p<h.top?"bottom":"right"==s&&u.right+d>h.width?"left":"left"==s&&u.left-d<h.left?"right":s,r.removeClass(f).addClass(s)}var m=this.getCalculatedOffset(s,u,d,p)
this.applyPlacement(m,s)
var g=function(){var e=o.hoverState
o.$element.trigger("shown.bs."+o.type),o.hoverState=null,"out"==e&&o.leave(o)}
e.support.transition&&this.$tip.hasClass("fade")?r.one("bsTransitionEnd",g).emulateTransitionEnd(n.TRANSITION_DURATION):g()}},n.prototype.applyPlacement=function(t,n){var i=this.tip(),o=i[0].offsetWidth,r=i[0].offsetHeight,a=parseInt(i.css("margin-top"),10),s=parseInt(i.css("margin-left"),10)
isNaN(a)&&(a=0),isNaN(s)&&(s=0),t.top+=a,t.left+=s,e.offset.setOffset(i[0],e.extend({using:function(e){i.css({top:Math.round(e.top),left:Math.round(e.left)})}},t),0),i.addClass("in")
var l=i[0].offsetWidth,c=i[0].offsetHeight
"top"==n&&c!=r&&(t.top=t.top+r-c)
var u=this.getViewportAdjustedDelta(n,t,l,c)
u.left?t.left+=u.left:t.top+=u.top
var d=/top|bottom/.test(n),p=d?2*u.left-o+l:2*u.top-r+c,f=d?"offsetWidth":"offsetHeight"
i.offset(t),this.replaceArrow(p,i[0][f],d)},n.prototype.replaceArrow=function(e,t,n){this.arrow().css(n?"left":"top",50*(1-e/t)+"%").css(n?"top":"left","")},n.prototype.setContent=function(){var e=this.tip(),t=this.getTitle()
e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},n.prototype.hide=function(t){function i(){"in"!=o.hoverState&&r.detach(),o.$element.removeAttr("aria-describedby").trigger("hidden.bs."+o.type),t&&t()}var o=this,r=e(this.$tip),a=e.Event("hide.bs."+this.type)
return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(r.removeClass("in"),e.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",i).emulateTransitionEnd(n.TRANSITION_DURATION):i(),this.hoverState=null,this)},n.prototype.fixTitle=function(){var e=this.$element;(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},n.prototype.hasContent=function(){return this.getTitle()},n.prototype.getPosition=function(t){t=t||this.$element
var n=t[0],i="BODY"==n.tagName,o=n.getBoundingClientRect()
null==o.width&&(o=e.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}))
var r=i?{top:0,left:0}:t.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},s=i?{width:e(window).width(),height:e(window).height()}:null
return e.extend({},o,a,s,r)},n.prototype.getCalculatedOffset=function(e,t,n,i){return"bottom"==e?{top:t.top+t.height,left:t.left+t.width/2-n/2}:"top"==e?{top:t.top-i,left:t.left+t.width/2-n/2}:"left"==e?{top:t.top+t.height/2-i/2,left:t.left-n}:{top:t.top+t.height/2-i/2,left:t.left+t.width}},n.prototype.getViewportAdjustedDelta=function(e,t,n,i){var o={top:0,left:0}
if(!this.$viewport)return o
var r=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport)
if(/right|left/.test(e)){var s=t.top-r-a.scroll,l=t.top+r-a.scroll+i
s<a.top?o.top=a.top-s:l>a.top+a.height&&(o.top=a.top+a.height-l)}else{var c=t.left-r,u=t.left+r+n
c<a.left?o.left=a.left-c:u>a.right&&(o.left=a.left+a.width-u)}return o},n.prototype.getTitle=function(){var e,t=this.$element,n=this.options
return e=t.attr("data-original-title")||("function"==typeof n.title?n.title.call(t[0]):n.title)},n.prototype.getUID=function(e){do e+=~~(1e6*Math.random())
while(document.getElementById(e))
return e},n.prototype.tip=function(){if(!this.$tip&&(this.$tip=e(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!")
return this.$tip},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},n.prototype.enable=function(){this.enabled=!0},n.prototype.disable=function(){this.enabled=!1},n.prototype.toggleEnabled=function(){this.enabled=!this.enabled},n.prototype.toggle=function(t){var n=this
t&&(n=e(t.currentTarget).data("bs."+this.type),n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n))),t?(n.inState.click=!n.inState.click,n.isInStateTrue()?n.enter(n):n.leave(n)):n.tip().hasClass("in")?n.leave(n):n.enter(n)},n.prototype.destroy=function(){var e=this
clearTimeout(this.timeout),this.hide(function(){e.$element.off("."+e.type).removeData("bs."+e.type),e.$tip&&e.$tip.detach(),e.$tip=null,e.$arrow=null,e.$viewport=null})}
var i=e.fn.tooltip
e.fn.tooltip=t,e.fn.tooltip.Constructor=n,e.fn.tooltip.noConflict=function(){return e.fn.tooltip=i,this}}(jQuery),+function(e){"use strict"
function t(t){return this.each(function(){var i=e(this),o=i.data("bs.popover"),r="object"==typeof t&&t;(o||!/destroy|hide/.test(t))&&(o||i.data("bs.popover",o=new n(this,r)),"string"==typeof t&&o[t]())})}var n=function(e,t){this.init("popover",e,t)}
if(!e.fn.tooltip)throw new Error("Popover requires tooltip.js")
n.VERSION="3.3.6",n.DEFAULTS=e.extend({},e.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),n.prototype=e.extend({},e.fn.tooltip.Constructor.prototype),n.prototype.constructor=n,n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.setContent=function(){var e=this.tip(),t=this.getTitle(),n=this.getContent()
e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof n?"html":"append":"text"](n),e.removeClass("fade top bottom left right in"),e.find(".popover-title").html()||e.find(".popover-title").hide()},n.prototype.hasContent=function(){return this.getTitle()||this.getContent()},n.prototype.getContent=function(){var e=this.$element,t=this.options
return e.attr("data-content")||("function"==typeof t.content?t.content.call(e[0]):t.content)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")}
var i=e.fn.popover
e.fn.popover=t,e.fn.popover.Constructor=n,e.fn.popover.noConflict=function(){return e.fn.popover=i,this}}(jQuery),+function(e){"use strict"
function t(t){return this.each(function(){var i=e(this),o=i.data("bs.tab")
o||i.data("bs.tab",o=new n(this)),"string"==typeof t&&o[t]()})}var n=function(t){this.element=e(t)}
n.VERSION="3.3.6",n.TRANSITION_DURATION=150,n.prototype.show=function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),i=t.data("target")
if(i||(i=t.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=n.find(".active:last a"),r=e.Event("hide.bs.tab",{relatedTarget:t[0]}),a=e.Event("show.bs.tab",{relatedTarget:o[0]})
if(o.trigger(r),t.trigger(a),!a.isDefaultPrevented()&&!r.isDefaultPrevented()){var s=e(i)
this.activate(t.closest("li"),n),this.activate(s,s.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},n.prototype.activate=function(t,i,o){function r(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),o&&o()}var a=i.find("> .active"),s=o&&e.support.transition&&(a.length&&a.hasClass("fade")||!!i.find("> .fade").length)
a.length&&s?a.one("bsTransitionEnd",r).emulateTransitionEnd(n.TRANSITION_DURATION):r(),a.removeClass("in")}
var i=e.fn.tab
e.fn.tab=t,e.fn.tab.Constructor=n,e.fn.tab.noConflict=function(){return e.fn.tab=i,this}
var o=function(n){n.preventDefault(),t.call(e(this),"show")}
e(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o)}(jQuery),+function(e){"use strict"
function t(t){return this.each(function(){var i=e(this),o=i.data("bs.affix"),r="object"==typeof t&&t
o||i.data("bs.affix",o=new n(this,r)),"string"==typeof t&&o[t]()})}var n=function(t,i){this.options=e.extend({},n.DEFAULTS,i),this.$target=e(this.options.target).on("scroll.bs.affix.data-api",e.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",e.proxy(this.checkPositionWithEventLoop,this)),this.$element=e(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()}
n.VERSION="3.3.6",n.RESET="affix affix-top affix-bottom",n.DEFAULTS={offset:0,target:window},n.prototype.getState=function(e,t,n,i){var o=this.$target.scrollTop(),r=this.$element.offset(),a=this.$target.height()
if(null!=n&&"top"==this.affixed)return n>o&&"top"
if("bottom"==this.affixed)return null!=n?!(o+this.unpin<=r.top)&&"bottom":!(e-i>=o+a)&&"bottom"
var s=null==this.affixed,l=s?o:r.top,c=s?a:t
return null!=n&&n>=o?"top":null!=i&&l+c>=e-i&&"bottom"},n.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(n.RESET).addClass("affix")
var e=this.$target.scrollTop(),t=this.$element.offset()
return this.pinnedOffset=t.top-e},n.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),i=this.options.offset,o=i.top,r=i.bottom,a=Math.max(e(document).height(),e(document.body).height())
"object"!=typeof i&&(r=o=i),"function"==typeof o&&(o=i.top(this.$element)),"function"==typeof r&&(r=i.bottom(this.$element))
var s=this.getState(a,t,o,r)
if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","")
var l="affix"+(s?"-"+s:""),c=e.Event(l+".bs.affix")
if(this.$element.trigger(c),c.isDefaultPrevented())return
this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:a-t-r})}}
var i=e.fn.affix
e.fn.affix=t,e.fn.affix.Constructor=n,e.fn.affix.noConflict=function(){return e.fn.affix=i,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var n=e(this),i=n.data()
i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),t.call(n,i)})})}(jQuery),+function(e){"use strict"
function t(t){var n,i=t.attr("data-target")||(n=t.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")
return e(i)}function n(t){return this.each(function(){var n=e(this),o=n.data("bs.collapse"),r=e.extend({},i.DEFAULTS,n.data(),"object"==typeof t&&t)
!o&&r.toggle&&/show|hide/.test(t)&&(r.toggle=!1),o||n.data("bs.collapse",o=new i(this,r)),"string"==typeof t&&o[t]()})}var i=function(t,n){this.$element=e(t),this.options=e.extend({},i.DEFAULTS,n),this.$trigger=e('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()}
i.VERSION="3.3.6",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){var e=this.$element.hasClass("width")
return e?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,o=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing")
if(!(o&&o.length&&(t=o.data("bs.collapse"),t&&t.transitioning))){var r=e.Event("show.bs.collapse")
if(this.$element.trigger(r),!r.isDefaultPrevented()){o&&o.length&&(n.call(o,"hide"),t||o.data("bs.collapse",null))
var a=this.dimension()
this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1
var s=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")}
if(!e.support.transition)return s.call(this)
var l=e.camelCase(["scroll",a].join("-"))
this.$element.one("bsTransitionEnd",e.proxy(s,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=e.Event("hide.bs.collapse")
if(this.$element.trigger(t),!t.isDefaultPrevented()){var n=this.dimension()
this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1
var o=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")}
return e.support.transition?void this.$element[n](0).one("bsTransitionEnd",e.proxy(o,this)).emulateTransitionEnd(i.TRANSITION_DURATION):o.call(this)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return e(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(e.proxy(function(n,i){var o=e(i)
this.addAriaAndCollapsedClass(t(o),o)},this)).end()},i.prototype.addAriaAndCollapsedClass=function(e,t){var n=e.hasClass("in")
e.attr("aria-expanded",n),t.toggleClass("collapsed",!n).attr("aria-expanded",n)}
var o=e.fn.collapse
e.fn.collapse=n,e.fn.collapse.Constructor=i,e.fn.collapse.noConflict=function(){return e.fn.collapse=o,this},e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var o=e(this)
o.attr("data-target")||i.preventDefault()
var r=t(o),a=r.data("bs.collapse"),s=a?"toggle":o.data()
n.call(r,s)})}(jQuery),+function(e){"use strict"
function t(n,i){this.$body=e(document.body),this.$scrollElement=e(e(n).is(document.body)?window:n),this.options=e.extend({},t.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e.proxy(this.process,this)),this.refresh(),this.process()}function n(n){return this.each(function(){var i=e(this),o=i.data("bs.scrollspy"),r="object"==typeof n&&n
o||i.data("bs.scrollspy",o=new t(this,r)),"string"==typeof n&&o[n]()})}t.VERSION="3.3.6",t.DEFAULTS={offset:10},t.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},t.prototype.refresh=function(){var t=this,n="offset",i=0
this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),e.isWindow(this.$scrollElement[0])||(n="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=e(this),o=t.data("target")||t.attr("href"),r=/^#./.test(o)&&e(o)
return r&&r.length&&r.is(":visible")&&[[r[n]().top+i,o]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},t.prototype.process=function(){var e,t=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),i=this.options.offset+n-this.$scrollElement.height(),o=this.offsets,r=this.targets,a=this.activeTarget
if(this.scrollHeight!=n&&this.refresh(),t>=i)return a!=(e=r[r.length-1])&&this.activate(e)
if(a&&t<o[0])return this.activeTarget=null,this.clear()
for(e=o.length;e--;)a!=r[e]&&t>=o[e]&&(void 0===o[e+1]||t<o[e+1])&&this.activate(r[e])},t.prototype.activate=function(t){this.activeTarget=t,this.clear()
var n=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=e(n).parents("li").addClass("active")
i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},t.prototype.clear=function(){e(this.selector).parentsUntil(this.options.target,".active").removeClass("active")}
var i=e.fn.scrollspy
e.fn.scrollspy=n,e.fn.scrollspy.Constructor=t,e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=i,this},e(window).on("load.bs.scrollspy.data-api",function(){e('[data-spy="scroll"]').each(function(){var t=e(this)
n.call(t,t.data())})})}(jQuery),+function(e){"use strict"
function t(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"}
for(var n in t)if(void 0!==e.style[n])return{end:t[n]}
return!1}e.fn.emulateTransitionEnd=function(t){var n=!1,i=this
e(this).one("bsTransitionEnd",function(){n=!0})
var o=function(){n||e(i).trigger(e.support.transition.end)}
return setTimeout(o,t),this},e(function(){e.support.transition=t(),e.support.transition&&(e.event.special.bsTransitionEnd={bindType:e.support.transition.end,delegateType:e.support.transition.end,handle:function(t){return e(t.target).is(this)?t.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),function(e,t){var n=function(e,n){e.extend(!0,n.defaults,{dom:"<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",renderer:"bootstrap"}),e.extend(n.ext.classes,{sWrapper:"dataTables_wrapper form-inline dt-bootstrap",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm"}),n.ext.renderer.pageButton.bootstrap=function(i,o,r,a,s,l){var c,u,d,p=new n.Api(i),f=i.oClasses,h=i.oLanguage.oPaginate,m=0,g=function(t,n){var o,a,d,v,y=function(t){t.preventDefault(),e(t.currentTarget).hasClass("disabled")||p.page(t.data.action).draw("page")}
for(o=0,a=n.length;o<a;o++)if(v=n[o],e.isArray(v))g(t,v)
else{switch(u=c="",v){case"ellipsis":c="&hellip;",u="disabled"
break
case"first":c=h.sFirst,u=v+(0<s?"":" disabled")
break
case"previous":c=h.sPrevious,u=v+(0<s?"":" disabled")
break
case"next":c=h.sNext,u=v+(s<l-1?"":" disabled")
break
case"last":c=h.sLast,u=v+(s<l-1?"":" disabled")
break
default:c=v+1,u=s===v?"active":""}c&&(d=e("<li>",{class:f.sPageButton+" "+u,id:0===r&&"string"==typeof v?i.sTableId+"_"+v:null}).append(e("<a>",{href:"#","aria-controls":i.sTableId,"data-dt-idx":m,tabindex:i.iTabIndex}).html(c)).appendTo(t),i.oApi._fnBindAction(d,{action:v},y),m++)}}
try{d=e(o).find(t.activeElement).data("dt-idx")}catch(e){}g(e(o).empty().html('<ul class="pagination"/>').children("ul"),a),d&&e(o).find("[data-dt-idx="+d+"]").focus()},n.TableTools&&(e.extend(!0,n.TableTools.classes,{container:"DTTT btn-group",buttons:{normal:"btn btn-default",disabled:"disabled"},collection:{container:"DTTT_dropdown dropdown-menu",buttons:{normal:"",disabled:"disabled"}},print:{info:"DTTT_print_info"},select:{row:"active"}}),e.extend(!0,n.TableTools.DEFAULTS.oTags,{collection:{container:"ul",button:"li",liner:"a"}}))}
"function"==typeof define&&define.amd?define(["jquery","datatables"],n):"object"==typeof exports?n(require("jquery"),require("datatables")):jQuery&&n(jQuery,jQuery.fn.dataTable)}(window,document),!function(e){"use strict"
if("function"==typeof define&&define.amd)define(["jquery","moment"],e)
else if("object"==typeof exports)module.exports=e(require("jquery"),require("moment"))
else{if("undefined"==typeof jQuery)throw"bootstrap-datetimepicker requires jQuery to be loaded first"
if("undefined"==typeof moment)throw"bootstrap-datetimepicker requires Moment.js to be loaded first"
e(jQuery,moment)}}(function(e,t){"use strict"
if(!t)throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first")
var n=function(n,i){var o,r,a,s,l,c,u,d={},p=!0,f=!1,h=!1,m=0,g=[{clsName:"days",navFnc:"M",navStep:1},{clsName:"months",navFnc:"y",navStep:1},{clsName:"years",navFnc:"y",navStep:10},{clsName:"decades",navFnc:"y",navStep:100}],v=["days","months","years","decades"],y=["top","bottom","auto"],b=["left","right","auto"],w=["default","top","bottom"],x={up:38,38:"up",down:40,40:"down",left:37,37:"left",right:39,39:"right",tab:9,9:"tab",escape:27,27:"escape",enter:13,13:"enter",pageUp:33,33:"pageUp",pageDown:34,34:"pageDown",shift:16,16:"shift",control:17,17:"control",space:32,32:"space",t:84,84:"t",delete:46,46:"delete"},_={},C=function(){return void 0!==t.tz&&void 0!==i.timeZone&&null!==i.timeZone&&""!==i.timeZone},S=function(e){var n
return n=void 0===e||null===e?t():t.isDate(e)||t.isMoment(e)?t(e):C()?t.tz(e,c,i.useStrict,i.timeZone):t(e,c,i.useStrict),C()&&n.tz(i.timeZone),n},T=function(e){if("string"!=typeof e||e.length>1)throw new TypeError("isEnabled expects a single character string parameter")
switch(e){case"y":return l.indexOf("Y")!==-1
case"M":return l.indexOf("M")!==-1
case"d":return l.toLowerCase().indexOf("d")!==-1
case"h":case"H":return l.toLowerCase().indexOf("h")!==-1
case"m":return l.indexOf("m")!==-1
case"s":return l.indexOf("s")!==-1
default:return!1}},D=function(){return T("h")||T("m")||T("s")},k=function(){return T("y")||T("M")||T("d")},E=function(){var t=e("<thead>").append(e("<tr>").append(e("<th>").addClass("prev").attr("data-action","previous").append(e("<span>").addClass(i.icons.previous))).append(e("<th>").addClass("picker-switch").attr("data-action","pickerSwitch").attr("colspan",i.calendarWeeks?"6":"5")).append(e("<th>").addClass("next").attr("data-action","next").append(e("<span>").addClass(i.icons.next)))),n=e("<tbody>").append(e("<tr>").append(e("<td>").attr("colspan",i.calendarWeeks?"8":"7")))
return[e("<div>").addClass("datepicker-days").append(e("<table>").addClass("table-condensed").append(t).append(e("<tbody>"))),e("<div>").addClass("datepicker-months").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone())),e("<div>").addClass("datepicker-years").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone())),e("<div>").addClass("datepicker-decades").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone()))]},I=function(){var t=e("<tr>"),n=e("<tr>"),o=e("<tr>")
return T("h")&&(t.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1",title:i.tooltips.incrementHour}).addClass("btn").attr("data-action","incrementHours").append(e("<span>").addClass(i.icons.up)))),n.append(e("<td>").append(e("<span>").addClass("timepicker-hour").attr({"data-time-component":"hours",title:i.tooltips.pickHour}).attr("data-action","showHours"))),o.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1",title:i.tooltips.decrementHour}).addClass("btn").attr("data-action","decrementHours").append(e("<span>").addClass(i.icons.down))))),T("m")&&(T("h")&&(t.append(e("<td>").addClass("separator")),n.append(e("<td>").addClass("separator").html(":")),o.append(e("<td>").addClass("separator"))),t.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1",title:i.tooltips.incrementMinute}).addClass("btn").attr("data-action","incrementMinutes").append(e("<span>").addClass(i.icons.up)))),n.append(e("<td>").append(e("<span>").addClass("timepicker-minute").attr({"data-time-component":"minutes",title:i.tooltips.pickMinute}).attr("data-action","showMinutes"))),o.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1",title:i.tooltips.decrementMinute}).addClass("btn").attr("data-action","decrementMinutes").append(e("<span>").addClass(i.icons.down))))),T("s")&&(T("m")&&(t.append(e("<td>").addClass("separator")),n.append(e("<td>").addClass("separator").html(":")),o.append(e("<td>").addClass("separator"))),t.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1",title:i.tooltips.incrementSecond}).addClass("btn").attr("data-action","incrementSeconds").append(e("<span>").addClass(i.icons.up)))),n.append(e("<td>").append(e("<span>").addClass("timepicker-second").attr({"data-time-component":"seconds",title:i.tooltips.pickSecond}).attr("data-action","showSeconds"))),o.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1",title:i.tooltips.decrementSecond}).addClass("btn").attr("data-action","decrementSeconds").append(e("<span>").addClass(i.icons.down))))),s||(t.append(e("<td>").addClass("separator")),n.append(e("<td>").append(e("<button>").addClass("btn btn-primary").attr({"data-action":"togglePeriod",tabindex:"-1",title:i.tooltips.togglePeriod}))),o.append(e("<td>").addClass("separator"))),e("<div>").addClass("timepicker-picker").append(e("<table>").addClass("table-condensed").append([t,n,o]))},A=function(){var t=e("<div>").addClass("timepicker-hours").append(e("<table>").addClass("table-condensed")),n=e("<div>").addClass("timepicker-minutes").append(e("<table>").addClass("table-condensed")),i=e("<div>").addClass("timepicker-seconds").append(e("<table>").addClass("table-condensed")),o=[I()]
return T("h")&&o.push(t),T("m")&&o.push(n),T("s")&&o.push(i),o},F=function(){var t=[]
return i.showTodayButton&&t.push(e("<td>").append(e("<a>").attr({"data-action":"today",title:i.tooltips.today}).append(e("<span>").addClass(i.icons.today)))),!i.sideBySide&&k()&&D()&&t.push(e("<td>").append(e("<a>").attr({"data-action":"togglePicker",title:i.tooltips.selectTime}).append(e("<span>").addClass(i.icons.time)))),i.showClear&&t.push(e("<td>").append(e("<a>").attr({"data-action":"clear",title:i.tooltips.clear}).append(e("<span>").addClass(i.icons.clear)))),i.showClose&&t.push(e("<td>").append(e("<a>").attr({"data-action":"close",title:i.tooltips.close}).append(e("<span>").addClass(i.icons.close)))),e("<table>").addClass("table-condensed").append(e("<tbody>").append(e("<tr>").append(t)))},M=function(){var t=e("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),n=e("<div>").addClass("datepicker").append(E()),o=e("<div>").addClass("timepicker").append(A()),r=e("<ul>").addClass("list-unstyled"),a=e("<li>").addClass("picker-switch"+(i.collapse?" accordion-toggle":"")).append(F())
return i.inline&&t.removeClass("dropdown-menu"),s&&t.addClass("usetwentyfour"),T("s")&&!s&&t.addClass("wider"),i.sideBySide&&k()&&D()?(t.addClass("timepicker-sbs"),"top"===i.toolbarPlacement&&t.append(a),t.append(e("<div>").addClass("row").append(n.addClass("col-md-6")).append(o.addClass("col-md-6"))),"bottom"===i.toolbarPlacement&&t.append(a),t):("top"===i.toolbarPlacement&&r.append(a),k()&&r.append(e("<li>").addClass(i.collapse&&D()?"collapse in":"").append(n)),"default"===i.toolbarPlacement&&r.append(a),D()&&r.append(e("<li>").addClass(i.collapse&&k()?"collapse":"").append(o)),"bottom"===i.toolbarPlacement&&r.append(a),t.append(r))},P=function(){var t,o={}
return t=n.is("input")||i.inline?n.data():n.find("input").data(),t.dateOptions&&t.dateOptions instanceof Object&&(o=e.extend(!0,o,t.dateOptions)),e.each(i,function(e){var n="date"+e.charAt(0).toUpperCase()+e.slice(1)
void 0!==t[n]&&(o[e]=t[n])}),o},O=function(){var t,o=(f||n).position(),r=(f||n).offset(),a=i.widgetPositioning.vertical,s=i.widgetPositioning.horizontal
if(i.widgetParent)t=i.widgetParent.append(h)
else if(n.is("input"))t=n.after(h).parent()
else{if(i.inline)return void(t=n.append(h))
t=n,n.children().first().after(h)}if("auto"===a&&(a=r.top+1.5*h.height()>=e(window).height()+e(window).scrollTop()&&h.height()+n.outerHeight()<r.top?"top":"bottom"),"auto"===s&&(s=t.width()<r.left+h.outerWidth()/2&&r.left+h.outerWidth()>e(window).width()?"right":"left"),"top"===a?h.addClass("top").removeClass("bottom"):h.addClass("bottom").removeClass("top"),"right"===s?h.addClass("pull-right"):h.removeClass("pull-right"),"static"===t.css("position")&&(t=t.parents().filter(function(){return"static"!==e(this).css("position")}).first()),0===t.length)throw new Error("datetimepicker component should be placed within a non-static positioned container")
h.css({top:"top"===a?"auto":o.top+n.outerHeight(),bottom:"top"===a?t.outerHeight()-(t===n?0:o.top):"auto",left:"left"===s?t===n?0:o.left:"auto",right:"left"===s?"auto":t.outerWidth()-n.outerWidth()-(t===n?0:o.left)})},L=function(e){"dp.change"===e.type&&(e.date&&e.date.isSame(e.oldDate)||!e.date&&!e.oldDate)||n.trigger(e)},N=function(e){"y"===e&&(e="YYYY"),L({type:"dp.update",change:e,viewDate:r.clone()})},$=function(e){h&&(e&&(u=Math.max(m,Math.min(3,u+e))),h.find(".datepicker > div").hide().filter(".datepicker-"+g[u].clsName).show())},j=function(){var t=e("<tr>"),n=r.clone().startOf("w").startOf("d")
for(i.calendarWeeks===!0&&t.append(e("<th>").addClass("cw").text("#"));n.isBefore(r.clone().endOf("w"));)t.append(e("<th>").addClass("dow").text(n.format("dd"))),n.add(1,"d")
h.find(".datepicker-days thead").append(t)},R=function(e){return i.disabledDates[e.format("YYYY-MM-DD")]===!0},H=function(e){return i.enabledDates[e.format("YYYY-MM-DD")]===!0},W=function(e){return i.disabledHours[e.format("H")]===!0},z=function(e){return i.enabledHours[e.format("H")]===!0},Y=function(t,n){if(!t.isValid())return!1
if(i.disabledDates&&"d"===n&&R(t))return!1
if(i.enabledDates&&"d"===n&&!H(t))return!1
if(i.minDate&&t.isBefore(i.minDate,n))return!1
if(i.maxDate&&t.isAfter(i.maxDate,n))return!1
if(i.daysOfWeekDisabled&&"d"===n&&i.daysOfWeekDisabled.indexOf(t.day())!==-1)return!1
if(i.disabledHours&&("h"===n||"m"===n||"s"===n)&&W(t))return!1
if(i.enabledHours&&("h"===n||"m"===n||"s"===n)&&!z(t))return!1
if(i.disabledTimeIntervals&&("h"===n||"m"===n||"s"===n)){var o=!1
if(e.each(i.disabledTimeIntervals,function(){if(t.isBetween(this[0],this[1]))return o=!0,!1}),o)return!1}return!0},q=function(){for(var t=[],n=r.clone().startOf("y").startOf("d");n.isSame(r,"y");)t.push(e("<span>").attr("data-action","selectMonth").addClass("month").text(n.format("MMM"))),n.add(1,"M")
h.find(".datepicker-months td").empty().append(t)},U=function(){var t=h.find(".datepicker-months"),n=t.find("th"),a=t.find("tbody").find("span")
n.eq(0).find("span").attr("title",i.tooltips.prevYear),n.eq(1).attr("title",i.tooltips.selectYear),n.eq(2).find("span").attr("title",i.tooltips.nextYear),t.find(".disabled").removeClass("disabled"),Y(r.clone().subtract(1,"y"),"y")||n.eq(0).addClass("disabled"),n.eq(1).text(r.year()),Y(r.clone().add(1,"y"),"y")||n.eq(2).addClass("disabled"),a.removeClass("active"),o.isSame(r,"y")&&!p&&a.eq(o.month()).addClass("active"),a.each(function(t){Y(r.clone().month(t),"M")||e(this).addClass("disabled")})},B=function(){var e=h.find(".datepicker-years"),t=e.find("th"),n=r.clone().subtract(5,"y"),a=r.clone().add(6,"y"),s=""
for(t.eq(0).find("span").attr("title",i.tooltips.prevDecade),t.eq(1).attr("title",i.tooltips.selectDecade),t.eq(2).find("span").attr("title",i.tooltips.nextDecade),e.find(".disabled").removeClass("disabled"),i.minDate&&i.minDate.isAfter(n,"y")&&t.eq(0).addClass("disabled"),t.eq(1).text(n.year()+"-"+a.year()),i.maxDate&&i.maxDate.isBefore(a,"y")&&t.eq(2).addClass("disabled");!n.isAfter(a,"y");)s+='<span data-action="selectYear" class="year'+(n.isSame(o,"y")&&!p?" active":"")+(Y(n,"y")?"":" disabled")+'">'+n.year()+"</span>",n.add(1,"y")
e.find("td").html(s)},V=function(){var e,n=h.find(".datepicker-decades"),a=n.find("th"),s=t({y:r.year()-r.year()%100-1}),l=s.clone().add(100,"y"),c=s.clone(),u=!1,d=!1,p=""
for(a.eq(0).find("span").attr("title",i.tooltips.prevCentury),a.eq(2).find("span").attr("title",i.tooltips.nextCentury),n.find(".disabled").removeClass("disabled"),(s.isSame(t({y:1900}))||i.minDate&&i.minDate.isAfter(s,"y"))&&a.eq(0).addClass("disabled"),a.eq(1).text(s.year()+"-"+l.year()),(s.isSame(t({y:2e3}))||i.maxDate&&i.maxDate.isBefore(l,"y"))&&a.eq(2).addClass("disabled");!s.isAfter(l,"y");)e=s.year()+12,u=i.minDate&&i.minDate.isAfter(s,"y")&&i.minDate.year()<=e,d=i.maxDate&&i.maxDate.isAfter(s,"y")&&i.maxDate.year()<=e,p+='<span data-action="selectDecade" class="decade'+(o.isAfter(s)&&o.year()<=e?" active":"")+(Y(s,"y")||u||d?"":" disabled")+'" data-selection="'+(s.year()+6)+'">'+(s.year()+1)+" - "+(s.year()+12)+"</span>",s.add(12,"y")
p+="<span></span><span></span><span></span>",n.find("td").html(p),a.eq(1).text(c.year()+1+"-"+s.year())},G=function(){var t,n,a,s=h.find(".datepicker-days"),l=s.find("th"),c=[],u=[]
if(k()){for(l.eq(0).find("span").attr("title",i.tooltips.prevMonth),l.eq(1).attr("title",i.tooltips.selectMonth),l.eq(2).find("span").attr("title",i.tooltips.nextMonth),s.find(".disabled").removeClass("disabled"),l.eq(1).text(r.format(i.dayViewHeaderFormat)),Y(r.clone().subtract(1,"M"),"M")||l.eq(0).addClass("disabled"),Y(r.clone().add(1,"M"),"M")||l.eq(2).addClass("disabled"),t=r.clone().startOf("M").startOf("w").startOf("d"),a=0;a<42;a++)0===t.weekday()&&(n=e("<tr>"),i.calendarWeeks&&n.append('<td class="cw">'+t.week()+"</td>"),c.push(n)),u=["day"],t.isBefore(r,"M")&&u.push("old"),t.isAfter(r,"M")&&u.push("new"),t.isSame(o,"d")&&!p&&u.push("active"),Y(t,"d")||u.push("disabled"),t.isSame(S(),"d")&&u.push("today"),0!==t.day()&&6!==t.day()||u.push("weekend"),L({type:"dp.classify",date:t,classNames:u}),n.append('<td data-action="selectDay" data-day="'+t.format("L")+'" class="'+u.join(" ")+'">'+t.date()+"</td>"),t.add(1,"d")
s.find("tbody").empty().append(c),U(),B(),V()}},Q=function(){var t=h.find(".timepicker-hours table"),n=r.clone().startOf("d"),i=[],o=e("<tr>")
for(r.hour()>11&&!s&&n.hour(12);n.isSame(r,"d")&&(s||r.hour()<12&&n.hour()<12||r.hour()>11);)n.hour()%4===0&&(o=e("<tr>"),i.push(o)),o.append('<td data-action="selectHour" class="hour'+(Y(n,"h")?"":" disabled")+'">'+n.format(s?"HH":"hh")+"</td>"),n.add(1,"h")
t.empty().append(i)},J=function(){for(var t=h.find(".timepicker-minutes table"),n=r.clone().startOf("h"),o=[],a=e("<tr>"),s=1===i.stepping?5:i.stepping;r.isSame(n,"h");)n.minute()%(4*s)===0&&(a=e("<tr>"),o.push(a)),a.append('<td data-action="selectMinute" class="minute'+(Y(n,"m")?"":" disabled")+'">'+n.format("mm")+"</td>"),n.add(s,"m")
t.empty().append(o)},X=function(){for(var t=h.find(".timepicker-seconds table"),n=r.clone().startOf("m"),i=[],o=e("<tr>");r.isSame(n,"m");)n.second()%20===0&&(o=e("<tr>"),i.push(o)),o.append('<td data-action="selectSecond" class="second'+(Y(n,"s")?"":" disabled")+'">'+n.format("ss")+"</td>"),n.add(5,"s")
t.empty().append(i)},Z=function(){var e,t,n=h.find(".timepicker span[data-time-component]")
s||(e=h.find(".timepicker [data-action=togglePeriod]"),t=o.clone().add(o.hours()>=12?-12:12,"h"),e.text(o.format("A")),Y(t,"h")?e.removeClass("disabled"):e.addClass("disabled")),n.filter("[data-time-component=hours]").text(o.format(s?"HH":"hh")),n.filter("[data-time-component=minutes]").text(o.format("mm")),n.filter("[data-time-component=seconds]").text(o.format("ss")),Q(),J(),X()},K=function(){h&&(G(),Z())},ee=function(e){var t=p?null:o
if(!e)return p=!0,a.val(""),n.data("date",""),L({type:"dp.change",date:!1,oldDate:t}),void K()
if(e=e.clone().locale(i.locale),C()&&e.tz(i.timeZone),1!==i.stepping)for(e.minutes(Math.round(e.minutes()/i.stepping)*i.stepping).seconds(0);i.minDate&&e.isBefore(i.minDate);)e.add(i.stepping,"minutes")
Y(e)?(o=e,r=o.clone(),a.val(o.format(l)),n.data("date",o.format(l)),p=!1,K(),L({type:"dp.change",date:o.clone(),oldDate:t})):(i.keepInvalid?L({type:"dp.change",date:e,oldDate:t}):a.val(p?"":o.format(l)),L({type:"dp.error",date:e,oldDate:t}))},te=function(){var t=!1
return h?(h.find(".collapse").each(function(){var n=e(this).data("collapse")
return!n||!n.transitioning||(t=!0,!1)}),t?d:(f&&f.hasClass("btn")&&f.toggleClass("active"),h.hide(),e(window).off("resize",O),h.off("click","[data-action]"),h.off("mousedown",!1),h.remove(),h=!1,L({type:"dp.hide",date:o.clone()}),a.blur(),r=o.clone(),d)):d},ne=function(){ee(null)},ie=function(e){return void 0===i.parseInputDate?(!t.isMoment(e)||e instanceof Date)&&(e=S(e)):e=i.parseInputDate(e),e},oe={next:function(){var e=g[u].navFnc
r.add(g[u].navStep,e),G(),N(e)},previous:function(){var e=g[u].navFnc
r.subtract(g[u].navStep,e),G(),N(e)},pickerSwitch:function(){$(1)},selectMonth:function(t){var n=e(t.target).closest("tbody").find("span").index(e(t.target))
r.month(n),u===m?(ee(o.clone().year(r.year()).month(r.month())),i.inline||te()):($(-1),G()),N("M")},selectYear:function(t){var n=parseInt(e(t.target).text(),10)||0
r.year(n),u===m?(ee(o.clone().year(r.year())),i.inline||te()):($(-1),G()),N("YYYY")},selectDecade:function(t){var n=parseInt(e(t.target).data("selection"),10)||0
r.year(n),u===m?(ee(o.clone().year(r.year())),i.inline||te()):($(-1),G()),N("YYYY")},selectDay:function(t){var n=r.clone()
e(t.target).is(".old")&&n.subtract(1,"M"),e(t.target).is(".new")&&n.add(1,"M"),ee(n.date(parseInt(e(t.target).text(),10))),D()||i.keepOpen||i.inline||te()},incrementHours:function(){var e=o.clone().add(1,"h")
Y(e,"h")&&ee(e)},incrementMinutes:function(){var e=o.clone().add(i.stepping,"m")
Y(e,"m")&&ee(e)},incrementSeconds:function(){var e=o.clone().add(1,"s")
Y(e,"s")&&ee(e)},decrementHours:function(){var e=o.clone().subtract(1,"h")
Y(e,"h")&&ee(e)},decrementMinutes:function(){var e=o.clone().subtract(i.stepping,"m")
Y(e,"m")&&ee(e)},decrementSeconds:function(){var e=o.clone().subtract(1,"s")
Y(e,"s")&&ee(e)},togglePeriod:function(){ee(o.clone().add(o.hours()>=12?-12:12,"h"))},togglePicker:function(t){var n,o=e(t.target),r=o.closest("ul"),a=r.find(".in"),s=r.find(".collapse:not(.in)")
if(a&&a.length){if(n=a.data("collapse"),n&&n.transitioning)return
a.collapse?(a.collapse("hide"),s.collapse("show")):(a.removeClass("in"),s.addClass("in")),o.is("span")?o.toggleClass(i.icons.time+" "+i.icons.date):o.find("span").toggleClass(i.icons.time+" "+i.icons.date)}},showPicker:function(){h.find(".timepicker > div:not(.timepicker-picker)").hide(),h.find(".timepicker .timepicker-picker").show()},showHours:function(){h.find(".timepicker .timepicker-picker").hide(),h.find(".timepicker .timepicker-hours").show()},showMinutes:function(){h.find(".timepicker .timepicker-picker").hide(),h.find(".timepicker .timepicker-minutes").show()},showSeconds:function(){h.find(".timepicker .timepicker-picker").hide(),h.find(".timepicker .timepicker-seconds").show()},selectHour:function(t){var n=parseInt(e(t.target).text(),10)
s||(o.hours()>=12?12!==n&&(n+=12):12===n&&(n=0)),ee(o.clone().hours(n)),oe.showPicker.call(d)},selectMinute:function(t){ee(o.clone().minutes(parseInt(e(t.target).text(),10))),oe.showPicker.call(d)},selectSecond:function(t){ee(o.clone().seconds(parseInt(e(t.target).text(),10))),oe.showPicker.call(d)},clear:ne,today:function(){var e=S()
Y(e,"d")&&ee(e)},close:te},re=function(t){return!e(t.currentTarget).is(".disabled")&&(oe[e(t.currentTarget).data("action")].apply(d,arguments),!1)},ae=function(){var t,n={year:function(e){return e.month(0).date(1).hours(0).seconds(0).minutes(0)},month:function(e){return e.date(1).hours(0).seconds(0).minutes(0)},day:function(e){return e.hours(0).seconds(0).minutes(0)},hour:function(e){return e.seconds(0).minutes(0)},minute:function(e){return e.seconds(0)}}
return a.prop("disabled")||!i.ignoreReadonly&&a.prop("readonly")||h?d:(void 0!==a.val()&&0!==a.val().trim().length?ee(ie(a.val().trim())):p&&i.useCurrent&&(i.inline||a.is("input")&&0===a.val().trim().length)&&(t=S(),"string"==typeof i.useCurrent&&(t=n[i.useCurrent](t)),ee(t)),h=M(),j(),q(),h.find(".timepicker-hours").hide(),h.find(".timepicker-minutes").hide(),h.find(".timepicker-seconds").hide(),K(),$(),e(window).on("resize",O),h.on("click","[data-action]",re),h.on("mousedown",!1),f&&f.hasClass("btn")&&f.toggleClass("active"),O(),h.show(),i.focusOnShow&&!a.is(":focus")&&a.focus(),L({type:"dp.show"}),d)},se=function(){return h?te():ae()},le=function(e){var t,n,o,r,a=null,s=[],l={},c=e.which,u="p"
_[c]=u
for(t in _)_.hasOwnProperty(t)&&_[t]===u&&(s.push(t),parseInt(t,10)!==c&&(l[t]=!0))
for(t in i.keyBinds)if(i.keyBinds.hasOwnProperty(t)&&"function"==typeof i.keyBinds[t]&&(o=t.split(" "),o.length===s.length&&x[c]===o[o.length-1])){for(r=!0,n=o.length-2;n>=0;n--)if(!(x[o[n]]in l)){r=!1
break}if(r){a=i.keyBinds[t]
break}}a&&(a.call(d,h),e.stopPropagation(),e.preventDefault())},ce=function(e){_[e.which]="r",e.stopPropagation(),e.preventDefault()},ue=function(t){var n=e(t.target).val().trim(),i=n?ie(n):null
return ee(i),t.stopImmediatePropagation(),!1},de=function(){a.on({change:ue,blur:i.debug?"":te,keydown:le,keyup:ce,focus:i.allowInputToggle?ae:""}),n.is("input")?a.on({focus:ae}):f&&(f.on("click",se),f.on("mousedown",!1))},pe=function(){a.off({change:ue,blur:blur,keydown:le,keyup:ce,focus:i.allowInputToggle?te:""}),n.is("input")?a.off({focus:ae}):f&&(f.off("click",se),f.off("mousedown",!1))},fe=function(t){var n={}
return e.each(t,function(){var e=ie(this)
e.isValid()&&(n[e.format("YYYY-MM-DD")]=!0)}),!!Object.keys(n).length&&n},he=function(t){var n={}
return e.each(t,function(){n[this]=!0}),!!Object.keys(n).length&&n},me=function(){var e=i.format||"L LT"
l=e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(e){var t=o.localeData().longDateFormat(e)||e
return t.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(e){return o.localeData().longDateFormat(e)||e})}),c=i.extraFormats?i.extraFormats.slice():[],c.indexOf(e)<0&&c.indexOf(l)<0&&c.push(l),s=l.toLowerCase().indexOf("a")<1&&l.replace(/\[.*?\]/g,"").indexOf("h")<1,T("y")&&(m=2),T("M")&&(m=1),T("d")&&(m=0),u=Math.max(m,u),p||ee(o)}
if(d.destroy=function(){te(),pe(),n.removeData("DateTimePicker"),n.removeData("date")},d.toggle=se,d.show=ae,d.hide=te,d.disable=function(){return te(),f&&f.hasClass("btn")&&f.addClass("disabled"),a.prop("disabled",!0),d},d.enable=function(){return f&&f.hasClass("btn")&&f.removeClass("disabled"),a.prop("disabled",!1),d},d.ignoreReadonly=function(e){if(0===arguments.length)return i.ignoreReadonly
if("boolean"!=typeof e)throw new TypeError("ignoreReadonly () expects a boolean parameter")
return i.ignoreReadonly=e,d},d.options=function(t){if(0===arguments.length)return e.extend(!0,{},i)
if(!(t instanceof Object))throw new TypeError("options() options parameter should be an object")
return e.extend(!0,i,t),e.each(i,function(e,t){if(void 0===d[e])throw new TypeError("option "+e+" is not recognized!")
d[e](t)}),d},d.date=function(e){if(0===arguments.length)return p?null:o.clone()
if(!(null===e||"string"==typeof e||t.isMoment(e)||e instanceof Date))throw new TypeError("date() parameter must be one of [null, string, moment or Date]")
return ee(null===e?null:ie(e)),d},d.format=function(e){if(0===arguments.length)return i.format
if("string"!=typeof e&&("boolean"!=typeof e||e!==!1))throw new TypeError("format() expects a string or boolean:false parameter "+e)
return i.format=e,l&&me(),d},d.timeZone=function(e){if(0===arguments.length)return i.timeZone
if("string"!=typeof e)throw new TypeError("newZone() expects a string parameter")
return i.timeZone=e,d},d.dayViewHeaderFormat=function(e){if(0===arguments.length)return i.dayViewHeaderFormat
if("string"!=typeof e)throw new TypeError("dayViewHeaderFormat() expects a string parameter")
return i.dayViewHeaderFormat=e,d},d.extraFormats=function(e){if(0===arguments.length)return i.extraFormats
if(e!==!1&&!(e instanceof Array))throw new TypeError("extraFormats() expects an array or false parameter")
return i.extraFormats=e,c&&me(),d},d.disabledDates=function(t){if(0===arguments.length)return i.disabledDates?e.extend({},i.disabledDates):i.disabledDates
if(!t)return i.disabledDates=!1,K(),d
if(!(t instanceof Array))throw new TypeError("disabledDates() expects an array parameter")
return i.disabledDates=fe(t),i.enabledDates=!1,K(),d},d.enabledDates=function(t){if(0===arguments.length)return i.enabledDates?e.extend({},i.enabledDates):i.enabledDates
if(!t)return i.enabledDates=!1,K(),d
if(!(t instanceof Array))throw new TypeError("enabledDates() expects an array parameter")
return i.enabledDates=fe(t),i.disabledDates=!1,K(),d},d.daysOfWeekDisabled=function(e){if(0===arguments.length)return i.daysOfWeekDisabled.splice(0)
if("boolean"==typeof e&&!e)return i.daysOfWeekDisabled=!1,K(),d
if(!(e instanceof Array))throw new TypeError("daysOfWeekDisabled() expects an array parameter")
if(i.daysOfWeekDisabled=e.reduce(function(e,t){return t=parseInt(t,10),t>6||t<0||isNaN(t)?e:(e.indexOf(t)===-1&&e.push(t),e)},[]).sort(),i.useCurrent&&!i.keepInvalid){for(var t=0;!Y(o,"d");){if(o.add(1,"d"),31===t)throw"Tried 31 times to find a valid date"
t++}ee(o)}return K(),d},d.maxDate=function(e){if(0===arguments.length)return i.maxDate?i.maxDate.clone():i.maxDate
if("boolean"==typeof e&&e===!1)return i.maxDate=!1,K(),d
"string"==typeof e&&("now"!==e&&"moment"!==e||(e=S()))
var t=ie(e)
if(!t.isValid())throw new TypeError("maxDate() Could not parse date parameter: "+e)
if(i.minDate&&t.isBefore(i.minDate))throw new TypeError("maxDate() date parameter is before options.minDate: "+t.format(l))
return i.maxDate=t,i.useCurrent&&!i.keepInvalid&&o.isAfter(e)&&ee(i.maxDate),r.isAfter(t)&&(r=t.clone().subtract(i.stepping,"m")),K(),d},d.minDate=function(e){if(0===arguments.length)return i.minDate?i.minDate.clone():i.minDate
if("boolean"==typeof e&&e===!1)return i.minDate=!1,K(),d
"string"==typeof e&&("now"!==e&&"moment"!==e||(e=S()))
var t=ie(e)
if(!t.isValid())throw new TypeError("minDate() Could not parse date parameter: "+e)
if(i.maxDate&&t.isAfter(i.maxDate))throw new TypeError("minDate() date parameter is after options.maxDate: "+t.format(l))
return i.minDate=t,i.useCurrent&&!i.keepInvalid&&o.isBefore(e)&&ee(i.minDate),r.isBefore(t)&&(r=t.clone().add(i.stepping,"m")),K(),d},d.defaultDate=function(e){if(0===arguments.length)return i.defaultDate?i.defaultDate.clone():i.defaultDate
if(!e)return i.defaultDate=!1,d
"string"==typeof e&&(e="now"===e||"moment"===e?S():S(e))
var t=ie(e)
if(!t.isValid())throw new TypeError("defaultDate() Could not parse date parameter: "+e)
if(!Y(t))throw new TypeError("defaultDate() date passed is invalid according to component setup validations")
return i.defaultDate=t,(i.defaultDate&&i.inline||""===a.val().trim())&&ee(i.defaultDate),d},d.locale=function(e){if(0===arguments.length)return i.locale
if(!t.localeData(e))throw new TypeError("locale() locale "+e+" is not loaded from moment locales!")
return i.locale=e,o.locale(i.locale),r.locale(i.locale),l&&me(),h&&(te(),ae()),d},d.stepping=function(e){return 0===arguments.length?i.stepping:(e=parseInt(e,10),(isNaN(e)||e<1)&&(e=1),i.stepping=e,d)},d.useCurrent=function(e){var t=["year","month","day","hour","minute"]
if(0===arguments.length)return i.useCurrent
if("boolean"!=typeof e&&"string"!=typeof e)throw new TypeError("useCurrent() expects a boolean or string parameter")
if("string"==typeof e&&t.indexOf(e.toLowerCase())===-1)throw new TypeError("useCurrent() expects a string parameter of "+t.join(", "))
return i.useCurrent=e,d},d.collapse=function(e){if(0===arguments.length)return i.collapse
if("boolean"!=typeof e)throw new TypeError("collapse() expects a boolean parameter")
return i.collapse===e?d:(i.collapse=e,h&&(te(),ae()),d)},d.icons=function(t){if(0===arguments.length)return e.extend({},i.icons)
if(!(t instanceof Object))throw new TypeError("icons() expects parameter to be an Object")
return e.extend(i.icons,t),h&&(te(),ae()),d},d.tooltips=function(t){if(0===arguments.length)return e.extend({},i.tooltips)
if(!(t instanceof Object))throw new TypeError("tooltips() expects parameter to be an Object")
return e.extend(i.tooltips,t),h&&(te(),ae()),d},d.useStrict=function(e){if(0===arguments.length)return i.useStrict
if("boolean"!=typeof e)throw new TypeError("useStrict() expects a boolean parameter")
return i.useStrict=e,d},d.sideBySide=function(e){if(0===arguments.length)return i.sideBySide
if("boolean"!=typeof e)throw new TypeError("sideBySide() expects a boolean parameter")
return i.sideBySide=e,h&&(te(),ae()),d},d.viewMode=function(e){if(0===arguments.length)return i.viewMode
if("string"!=typeof e)throw new TypeError("viewMode() expects a string parameter")
if(v.indexOf(e)===-1)throw new TypeError("viewMode() parameter must be one of ("+v.join(", ")+") value")
return i.viewMode=e,u=Math.max(v.indexOf(e),m),$(),d},d.toolbarPlacement=function(e){if(0===arguments.length)return i.toolbarPlacement
if("string"!=typeof e)throw new TypeError("toolbarPlacement() expects a string parameter")
if(w.indexOf(e)===-1)throw new TypeError("toolbarPlacement() parameter must be one of ("+w.join(", ")+") value")
return i.toolbarPlacement=e,h&&(te(),ae()),d},d.widgetPositioning=function(t){if(0===arguments.length)return e.extend({},i.widgetPositioning)
if("[object Object]"!=={}.toString.call(t))throw new TypeError("widgetPositioning() expects an object variable")
if(t.horizontal){if("string"!=typeof t.horizontal)throw new TypeError("widgetPositioning() horizontal variable must be a string")
if(t.horizontal=t.horizontal.toLowerCase(),b.indexOf(t.horizontal)===-1)throw new TypeError("widgetPositioning() expects horizontal parameter to be one of ("+b.join(", ")+")")
i.widgetPositioning.horizontal=t.horizontal}if(t.vertical){if("string"!=typeof t.vertical)throw new TypeError("widgetPositioning() vertical variable must be a string")
if(t.vertical=t.vertical.toLowerCase(),y.indexOf(t.vertical)===-1)throw new TypeError("widgetPositioning() expects vertical parameter to be one of ("+y.join(", ")+")")
i.widgetPositioning.vertical=t.vertical}return K(),d},d.calendarWeeks=function(e){if(0===arguments.length)return i.calendarWeeks
if("boolean"!=typeof e)throw new TypeError("calendarWeeks() expects parameter to be a boolean value")
return i.calendarWeeks=e,K(),d},d.showTodayButton=function(e){if(0===arguments.length)return i.showTodayButton
if("boolean"!=typeof e)throw new TypeError("showTodayButton() expects a boolean parameter")
return i.showTodayButton=e,h&&(te(),ae()),d},d.showClear=function(e){if(0===arguments.length)return i.showClear
if("boolean"!=typeof e)throw new TypeError("showClear() expects a boolean parameter")
return i.showClear=e,h&&(te(),ae()),d},d.widgetParent=function(t){if(0===arguments.length)return i.widgetParent
if("string"==typeof t&&(t=e(t)),null!==t&&"string"!=typeof t&&!(t instanceof e))throw new TypeError("widgetParent() expects a string or a jQuery object parameter")
return i.widgetParent=t,h&&(te(),ae()),d},d.keepOpen=function(e){if(0===arguments.length)return i.keepOpen
if("boolean"!=typeof e)throw new TypeError("keepOpen() expects a boolean parameter")
return i.keepOpen=e,d},d.focusOnShow=function(e){if(0===arguments.length)return i.focusOnShow
if("boolean"!=typeof e)throw new TypeError("focusOnShow() expects a boolean parameter")
return i.focusOnShow=e,d},d.inline=function(e){if(0===arguments.length)return i.inline
if("boolean"!=typeof e)throw new TypeError("inline() expects a boolean parameter")
return i.inline=e,d},d.clear=function(){return ne(),d},d.keyBinds=function(e){return 0===arguments.length?i.keyBinds:(i.keyBinds=e,d)},d.getMoment=function(e){return S(e)},d.debug=function(e){if("boolean"!=typeof e)throw new TypeError("debug() expects a boolean parameter")
return i.debug=e,d},d.allowInputToggle=function(e){if(0===arguments.length)return i.allowInputToggle
if("boolean"!=typeof e)throw new TypeError("allowInputToggle() expects a boolean parameter")
return i.allowInputToggle=e,d},d.showClose=function(e){if(0===arguments.length)return i.showClose
if("boolean"!=typeof e)throw new TypeError("showClose() expects a boolean parameter")
return i.showClose=e,d},d.keepInvalid=function(e){if(0===arguments.length)return i.keepInvalid
if("boolean"!=typeof e)throw new TypeError("keepInvalid() expects a boolean parameter")
return i.keepInvalid=e,d},d.datepickerInput=function(e){if(0===arguments.length)return i.datepickerInput
if("string"!=typeof e)throw new TypeError("datepickerInput() expects a string parameter")
return i.datepickerInput=e,d},d.parseInputDate=function(e){if(0===arguments.length)return i.parseInputDate
if("function"!=typeof e)throw new TypeError("parseInputDate() sholud be as function")
return i.parseInputDate=e,d},d.disabledTimeIntervals=function(t){if(0===arguments.length)return i.disabledTimeIntervals?e.extend({},i.disabledTimeIntervals):i.disabledTimeIntervals
if(!t)return i.disabledTimeIntervals=!1,K(),d
if(!(t instanceof Array))throw new TypeError("disabledTimeIntervals() expects an array parameter")
return i.disabledTimeIntervals=t,K(),d},d.disabledHours=function(t){if(0===arguments.length)return i.disabledHours?e.extend({},i.disabledHours):i.disabledHours
if(!t)return i.disabledHours=!1,K(),d
if(!(t instanceof Array))throw new TypeError("disabledHours() expects an array parameter")
if(i.disabledHours=he(t),i.enabledHours=!1,i.useCurrent&&!i.keepInvalid){for(var n=0;!Y(o,"h");){if(o.add(1,"h"),24===n)throw"Tried 24 times to find a valid date"
n++}ee(o)}return K(),d},d.enabledHours=function(t){if(0===arguments.length)return i.enabledHours?e.extend({},i.enabledHours):i.enabledHours
if(!t)return i.enabledHours=!1,K(),d
if(!(t instanceof Array))throw new TypeError("enabledHours() expects an array parameter")
if(i.enabledHours=he(t),i.disabledHours=!1,i.useCurrent&&!i.keepInvalid){for(var n=0;!Y(o,"h");){if(o.add(1,"h"),24===n)throw"Tried 24 times to find a valid date"
n++}ee(o)}return K(),d},d.viewDate=function(e){if(0===arguments.length)return r.clone()
if(!e)return r=o.clone(),d
if(!("string"==typeof e||t.isMoment(e)||e instanceof Date))throw new TypeError("viewDate() parameter must be one of [string, moment or Date]")
return r=ie(e),N(),d},n.is("input"))a=n
else if(a=n.find(i.datepickerInput),0===a.length)a=n.find("input")
else if(!a.is("input"))throw new Error('CSS class "'+i.datepickerInput+'" cannot be applied to non input element')
if(n.hasClass("input-group")&&(f=0===n.find(".datepickerbutton").length?n.find(".input-group-addon"):n.find(".datepickerbutton")),!i.inline&&!a.is("input"))throw new Error("Could not initialize DateTimePicker without an input element")
return o=S(),r=o.clone(),e.extend(!0,i,P()),d.options(i),me(),de(),a.prop("disabled")&&d.disable(),a.is("input")&&0!==a.val().trim().length?ee(ie(a.val().trim())):i.defaultDate&&void 0===a.attr("placeholder")&&ee(i.defaultDate),i.inline&&ae(),d}
return e.fn.datetimepicker=function(t){t=t||{}
var i,o=Array.prototype.slice.call(arguments,1),r=!0,a=["destroy","hide","show","toggle"]
if("object"==typeof t)return this.each(function(){var i,o=e(this)
o.data("DateTimePicker")||(i=e.extend(!0,{},e.fn.datetimepicker.defaults,t),o.data("DateTimePicker",n(o,i)))})
if("string"==typeof t)return this.each(function(){var n=e(this),a=n.data("DateTimePicker")
if(!a)throw new Error('bootstrap-datetimepicker("'+t+'") method was called on an element that is not using DateTimePicker')
i=a[t].apply(a,o),r=i===a}),r||e.inArray(t,a)>-1?this:i
throw new TypeError("Invalid arguments for DateTimePicker: "+t)},e.fn.datetimepicker.defaults={timeZone:"",format:!1,dayViewHeaderFormat:"MMMM YYYY",extraFormats:!1,stepping:1,minDate:!1,maxDate:!1,useCurrent:!0,collapse:!0,locale:t.locale(),defaultDate:!1,disabledDates:!1,enabledDates:!1,icons:{time:"glyphicon glyphicon-time",date:"glyphicon glyphicon-calendar",up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down",previous:"glyphicon glyphicon-chevron-left",next:"glyphicon glyphicon-chevron-right",today:"glyphicon glyphicon-screenshot",clear:"glyphicon glyphicon-trash",close:"glyphicon glyphicon-remove"},tooltips:{today:"Go to today",clear:"Clear selection",close:"Close the picker",selectMonth:"Select Month",prevMonth:"Previous Month",nextMonth:"Next Month",selectYear:"Select Year",prevYear:"Previous Year",nextYear:"Next Year",selectDecade:"Select Decade",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevCentury:"Previous Century",nextCentury:"Next Century",pickHour:"Pick Hour",incrementHour:"Increment Hour",decrementHour:"Decrement Hour",pickMinute:"Pick Minute",incrementMinute:"Increment Minute",decrementMinute:"Decrement Minute",pickSecond:"Pick Second",incrementSecond:"Increment Second",decrementSecond:"Decrement Second",togglePeriod:"Toggle Period",selectTime:"Select Time"},useStrict:!1,sideBySide:!1,daysOfWeekDisabled:!1,calendarWeeks:!1,viewMode:"days",toolbarPlacement:"default",showTodayButton:!1,showClear:!1,showClose:!1,widgetPositioning:{horizontal:"auto",vertical:"auto"},widgetParent:null,ignoreReadonly:!1,keepOpen:!1,focusOnShow:!0,inline:!1,keepInvalid:!1,datepickerInput:".datepickerinput",keyBinds:{up:function(e){if(e){var t=this.date()||this.getMoment()
e.find(".datepicker").is(":visible")?this.date(t.clone().subtract(7,"d")):this.date(t.clone().add(this.stepping(),"m"))}},down:function(e){if(!e)return void this.show()
var t=this.date()||this.getMoment()
e.find(".datepicker").is(":visible")?this.date(t.clone().add(7,"d")):this.date(t.clone().subtract(this.stepping(),"m"))},"control up":function(e){if(e){var t=this.date()||this.getMoment()
e.find(".datepicker").is(":visible")?this.date(t.clone().subtract(1,"y")):this.date(t.clone().add(1,"h"))}},"control down":function(e){if(e){var t=this.date()||this.getMoment()
e.find(".datepicker").is(":visible")?this.date(t.clone().add(1,"y")):this.date(t.clone().subtract(1,"h"))}},left:function(e){if(e){var t=this.date()||this.getMoment()
e.find(".datepicker").is(":visible")&&this.date(t.clone().subtract(1,"d"))}},right:function(e){if(e){var t=this.date()||this.getMoment()
e.find(".datepicker").is(":visible")&&this.date(t.clone().add(1,"d"))}},pageUp:function(e){if(e){var t=this.date()||this.getMoment()
e.find(".datepicker").is(":visible")&&this.date(t.clone().subtract(1,"M"))}},pageDown:function(e){if(e){var t=this.date()||this.getMoment()
e.find(".datepicker").is(":visible")&&this.date(t.clone().add(1,"M"))}},enter:function(){this.hide()},escape:function(){this.hide()},"control space":function(e){e&&e.find(".timepicker").is(":visible")&&e.find('.btn[data-action="togglePeriod"]').click()},t:function(){this.date(this.getMoment())},delete:function(){this.clear()}},debug:!1,allowInputToggle:!1,disabledTimeIntervals:!1,disabledHours:!1,enabledHours:!1,viewDate:!1},e.fn.datetimepicker}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(e){var t,n,i,o,r,a,s="Close",l="BeforeClose",c="AfterClose",u="BeforeAppend",d="MarkupParse",p="Open",f="Change",h="mfp",m="."+h,g="mfp-ready",v="mfp-removing",y="mfp-prevent-close",b=function(){},w=!!window.jQuery,x=e(window),_=function(e,n){t.ev.on(h+e+m,n)},C=function(t,n,i,o){var r=document.createElement("div")
return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},S=function(n,i){t.ev.triggerHandler(h+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},T=function(n){return n===a&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),a=n),t.currTemplate.closeBtn},D=function(){e.magnificPopup.instance||(t=new b,t.init(),e.magnificPopup.instance=t)},k=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"]
if(void 0!==e.transition)return!0
for(;t.length;)if(t.pop()+"Transition"in e)return!0
return!1}
b.prototype={constructor:b,init:function(){var n=navigator.appVersion
t.isLowIE=t.isIE8=document.all&&!document.addEventListener,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=k(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),i=e(document),t.popupsCache={}},open:function(n){var o
if(n.isObj===!1){t.items=n.items.toArray(),t.index=0
var a,s=n.items
for(o=0;o<s.length;o++)if(a=s[o],a.parsed&&(a=a.el[0]),a===n.el[0]){t.index=o
break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0
if(t.isOpen)return void t.updateItemHTML()
t.types=[],r="",n.mainEl&&n.mainEl.length?t.ev=n.mainEl.eq(0):t.ev=i,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=C("bg").on("click"+m,function(){t.close()}),t.wrap=C("wrap").attr("tabindex",-1).on("click"+m,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=C("container",t.wrap)),t.contentContainer=C("content"),t.st.preloader&&(t.preloader=C("preloader",t.container,t.st.tLoading))
var l=e.magnificPopup.modules
for(o=0;o<l.length;o++){var c=l[o]
c=c.charAt(0).toUpperCase()+c.slice(1),t["init"+c].call(t)}S("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(_(d,function(e,t,n,i){n.close_replaceWith=T(i.type)}),r+=" mfp-close-btn-in"):t.wrap.append(T())),t.st.alignTop&&(r+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:x.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:i.height(),position:"absolute"}),t.st.enableEscapeKey&&i.on("keyup"+m,function(e){27===e.keyCode&&t.close()}),x.on("resize"+m,function(){t.updateSize()}),t.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&t.wrap.addClass(r)
var u=t.wH=x.height(),f={}
if(t.fixedContentPos&&t._hasScrollBar(u)){var h=t._getScrollbarSize()
h&&(f.marginRight=h)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):f.overflow="hidden")
var v=t.st.mainClass
return t.isIE7&&(v+=" mfp-ie7"),v&&t._addClassToMFP(v),t.updateItemHTML(),S("BuildControls"),e("html").css(f),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(g),t._setFocus()):t.bgOverlay.addClass(g),i.on("focusin"+m,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),S(p),n},close:function(){t.isOpen&&(S(l),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(v),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){S(s)
var n=v+" "+g+" "
if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var o={marginRight:""}
t.isIE7?e("body, html").css("overflow",""):o.overflow="",e("html").css(o)}i.off("keyup"+m+" focusin"+m),t.ev.off(m),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t.st.autoFocusLast&&t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,S(c)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n
t.wrap.css("height",i),t.wH=i}else t.wH=e||x.height()
t.fixedContentPos||t.wrap.css("height",t.wH),S("Resize")},updateItemHTML:function(){var n=t.items[t.index]
t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index))
var i=n.type
if(S("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var r=!!t.st[i]&&t.st[i].markup
S("FirstMarkupParse",r),r?t.currTemplate[i]=e(r):t.currTemplate[i]=!0}o&&o!==n.type&&t.container.removeClass("mfp-"+o+"-holder")
var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i])
t.appendContent(a,i),n.preloaded=!0,S(f,n),o=n.type,t.container.prepend(t.contentContainer),S("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(T()):t.content=e:t.content="",S(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n]
if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;a<r.length;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a]
break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,S("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)}
n||(n={})
var o="click.magnificPopup"
n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick
if(r||!(2===n.which||n.ctrlKey||n.metaKey||n.altKey||n.shiftKey)){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn
if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(x.width()<a)return!0
n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading)
var o={status:e,text:i}
S("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick
if(i&&o)return!0
if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0
if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0
return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?i.height():document.body.scrollHeight)>(e||x.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){if(n.target!==t.wrap[0]&&!e.contains(t.wrap[0],n.target))return t._setFocus(),!1},_parseMarkup:function(t,n,i){var o
i.data&&(n=e.extend(i.data,n)),S(d,[t,n,i]),e.each(n,function(n,i){if(void 0===i||i===!1)return!0
if(o=n.split("_"),o.length>1){var r=t.find(m+"-"+o[0])
if(r.length>0){var a=o[1]
"replaceWith"===a?r[0]!==i[0]&&r.replaceWith(i):"img"===a?r.is("img")?r.attr("src",i):r.replaceWith(e("<img>").attr("src",i).attr("class",r.attr("class"))):r.attr(o[1],i)}}else t.find(m+"-"+n).html(i)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div")
e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:b.prototype,modules:[],open:function(t,n){return D(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},e.fn.magnificPopup=function(n){D()
var i=e(this)
if("string"==typeof n)if("open"===n){var o,r=w?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0
r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1))
else n=e.extend(!0,{},n),w?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n)
return i}
var E,I,A,F="inline",M=function(){A&&(I.after(A.addClass(E)).detach(),A=null)}
e.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(F),_(s+"."+F,function(){M()})},getInline:function(n,i){if(M(),n.src){var o=t.st.inline,r=e(n.src)
if(r.length){var a=r[0].parentNode
a&&a.tagName&&(I||(E=o.hiddenClass,I=C(E),E="mfp-"+E),A=r.after(I).detach().removeClass(E)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>")
return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}})
var P,O="ajax",L=function(){P&&e(document.body).removeClass(P)},N=function(){L(),t.req&&t.req.abort()}
e.magnificPopup.registerModule(O,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(O),P=t.st.ajax.cursor,_(s+"."+O,N),_("BeforeChange."+O,N)},getAjax:function(n){P&&e(document.body).addClass(P),t.updateStatus("loading")
var i=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r}
S("ParseAjax",a),t.appendContent(e(a.data),O),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(g)},16),t.updateStatus("ready"),S("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings)
return t.req=e.ajax(i),""}}})
var $,j=function(n){if(n.data&&void 0!==n.data.title)return n.data.title
var i=t.st.image.titleSrc
if(i){if(e.isFunction(i))return i.call(t,n)
if(n.el)return n.el.attr(i)||""}return""}
e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var n=t.st.image,i=".image"
t.types.push("image"),_(p+i,function(){"image"===t.currItem.type&&n.cursor&&e(document.body).addClass(n.cursor)}),_(s+i,function(){n.cursor&&e(document.body).removeClass(n.cursor),x.off("resize"+m)}),_("Resize"+i,t.resizeImage),t.isLowIE&&_("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem
if(e&&e.img&&t.st.image.verticalFit){var n=0
t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,$&&clearInterval($),e.isCheckingImgSize=!1,S("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){$&&clearInterval($),$=setInterval(function(){return i.naturalWidth>0?void t._onImageHasSize(e):(n>200&&clearInterval($),n++,void(3===n?o(10):40===n?o(50):100===n&&o(500)))},r)}
o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,S("ImageLoadComplete")):(o++,o<200?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img")
if(l.length){var c=document.createElement("img")
c.className="mfp-img",n.el&&n.el.find("img").length&&(c.alt=n.el.find("img").attr("alt")),n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:j(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?($&&clearInterval($),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}})
var R,H=function(){return void 0===R&&(R=void 0!==document.createElement("p").style.MozTransform),R}
e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom"
if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,c=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition"
return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},u=function(){t.content.css("visibility","visible")}
_("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return void u()
r=c(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){u(),setTimeout(function(){r.remove(),e=r=null,S("ZoomAnimationEnded")},16)},a)},16)}}),_(l+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return
r=c(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),_(s+i,function(){t._allowZoom()&&(u(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(n){var i
i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem)
var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10)
o.top-=e(window).scrollTop()-r
var s={width:i.width(),height:(w?i.innerHeight():i[0].offsetHeight)-a-r}
return H()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}})
var W="iframe",z="//about:blank",Y=function(e){if(t.currTemplate[W]){var n=t.currTemplate[W].find("iframe")
n.length&&(e||(n[0].src=z),t.isIE8&&n.css("display",e?"block":"none"))}}
e.magnificPopup.registerModule(W,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(W),_("BeforeChange",function(e,t,n){t!==n&&(t===W?Y():n===W&&Y(!0))}),_(s+"."+W,function(){Y()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe
e.each(r.patterns,function(){if(o.indexOf(this.index)>-1)return this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1})
var a={}
return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}})
var q=function(e){var n=t.items.length
return e>n-1?e-n:e<0?n+e:e},U=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)}
e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,o=".mfp-gallery"
return t.direction=!0,!(!n||!n.enabled)&&(r+=" mfp-gallery",_(p+o,function(){n.navigateByImgClick&&t.wrap.on("click"+o,".mfp-img",function(){if(t.items.length>1)return t.next(),!1}),i.on("keydown"+o,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),_("UpdateStatus"+o,function(e,n){n.text&&(n.text=U(n.text,t.currItem.index,t.items.length))}),_(d+o,function(e,i,o,r){var a=t.items.length
o.counter=a>1?U(n.tCounter,r.index,a):""}),_("BuildControls"+o,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),r=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y)
o.click(function(){t.prev()}),r.click(function(){t.next()}),t.container.append(o.add(r))}}),_(f+o,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),void _(s+o,function(){i.off(o),t.wrap.off("click"+o),t.arrowRight=t.arrowLeft=null}))},next:function(){t.direction=!0,t.index=q(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=q(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length)
for(e=1;e<=(t.direction?o:i);e++)t._preloadItem(t.index+e)
for(e=1;e<=(t.direction?i:o);e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=q(n),!t.items[n].preloaded){var i=t.items[n]
i.parsed||(i=t.parseEl(n)),S("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,S("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}})
var B="retina"
e.magnificPopup.registerModule(B,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio
n=isNaN(n)?n():n,n>1&&(_("ImageHasSize."+B,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),_("ElementParse."+B,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),D()}),function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define("pnotify",["jquery"],e):e(jQuery)}(function(e){var t,n,i={dir1:"down",dir2:"left",push:"bottom",spacing1:25,spacing2:25,context:e("body")},o=e(window),r=function(){n=e("body"),PNotify.prototype.options.stack.context=n,o=e(window),o.bind("resize",function(){t&&clearTimeout(t),t=setTimeout(function(){PNotify.positionAll(!0)},10)})}
return PNotify=function(e){this.parseOptions(e),this.init()},e.extend(PNotify.prototype,{version:"2.1.0",options:{title:!1,title_escape:!1,text:!1,text_escape:!1,styling:"brighttheme",addclass:"",cornerclass:"",auto_display:!0,width:"300px",min_height:"16px",type:"notice",icon:!0,opacity:1,animation:"fade",animate_speed:"slow",position_animate_speed:500,shadow:!0,hide:!0,delay:8e3,mouse_reset:!0,remove:!0,insert_brs:!0,destroy:!0,stack:i},modules:{},runModules:function(e,t){var n,i
for(i in this.modules)n="object"==typeof t&&i in t?t[i]:t,"function"==typeof this.modules[i][e]&&this.modules[i][e](this,"object"==typeof this.options[i]?this.options[i]:{},n)},state:"initializing",timer:null,styles:null,elem:null,container:null,title_container:null,text_container:null,animating:!1,timerHide:!1,init:function(){var t=this
return this.modules={},e.extend(!0,this.modules,PNotify.prototype.modules),this.styles="object"==typeof this.options.styling?this.options.styling:PNotify.styling[this.options.styling],this.elem=e("<div />",{class:"ui-pnotify "+this.options.addclass,css:{display:"none"},"aria-live":"assertive",mouseenter:function(e){if(t.options.mouse_reset&&"out"===t.animating){if(!t.timerHide)return
t.cancelRemove()}t.options.hide&&t.options.mouse_reset&&t.cancelRemove()},mouseleave:function(e){t.options.hide&&t.options.mouse_reset&&"out"!==t.animating&&t.queueRemove(),PNotify.positionAll()}}),this.container=e("<div />",{class:this.styles.container+" ui-pnotify-container "+("error"===this.options.type?this.styles.error:"info"===this.options.type?this.styles.info:"success"===this.options.type?this.styles.success:this.styles.notice),role:"alert"}).appendTo(this.elem),""!==this.options.cornerclass&&this.container.removeClass("ui-corner-all").addClass(this.options.cornerclass),this.options.shadow&&this.container.addClass("ui-pnotify-shadow"),!1!==this.options.icon&&e("<div />",{class:"ui-pnotify-icon"}).append(e("<span />",{class:!0===this.options.icon?"error"===this.options.type?this.styles.error_icon:"info"===this.options.type?this.styles.info_icon:"success"===this.options.type?this.styles.success_icon:this.styles.notice_icon:this.options.icon})).prependTo(this.container),this.title_container=e("<h4 />",{class:"ui-pnotify-title"}).appendTo(this.container),!1===this.options.title?this.title_container.hide():this.options.title_escape?this.title_container.text(this.options.title):this.title_container.html(this.options.title),this.text_container=e("<div />",{class:"ui-pnotify-text"}).appendTo(this.container),!1===this.options.text?this.text_container.hide():this.options.text_escape?this.text_container.text(this.options.text):this.text_container.html(this.options.insert_brs?String(this.options.text).replace(/\n/g,"<br />"):this.options.text),"string"==typeof this.options.width&&this.elem.css("width",this.options.width),"string"==typeof this.options.min_height&&this.container.css("min-height",this.options.min_height),PNotify.notices="top"===this.options.stack.push?e.merge([this],PNotify.notices):e.merge(PNotify.notices,[this]),"top"===this.options.stack.push&&this.queuePosition(!1,1),this.options.stack.animation=!1,this.runModules("init"),this.options.auto_display&&this.open(),this},update:function(t){var n=this.options
return this.parseOptions(n,t),this.options.cornerclass!==n.cornerclass&&this.container.removeClass("ui-corner-all "+n.cornerclass).addClass(this.options.cornerclass),this.options.shadow!==n.shadow&&(this.options.shadow?this.container.addClass("ui-pnotify-shadow"):this.container.removeClass("ui-pnotify-shadow")),!1===this.options.addclass?this.elem.removeClass(n.addclass):this.options.addclass!==n.addclass&&this.elem.removeClass(n.addclass).addClass(this.options.addclass),!1===this.options.title?this.title_container.slideUp("fast"):this.options.title!==n.title&&(this.options.title_escape?this.title_container.text(this.options.title):this.title_container.html(this.options.title),!1===n.title&&this.title_container.slideDown(200)),!1===this.options.text?this.text_container.slideUp("fast"):this.options.text!==n.text&&(this.options.text_escape?this.text_container.text(this.options.text):this.text_container.html(this.options.insert_brs?String(this.options.text).replace(/\n/g,"<br />"):this.options.text),!1===n.text&&this.text_container.slideDown(200)),this.options.type!==n.type&&this.container.removeClass(this.styles.error+" "+this.styles.notice+" "+this.styles.success+" "+this.styles.info).addClass("error"===this.options.type?this.styles.error:"info"===this.options.type?this.styles.info:"success"===this.options.type?this.styles.success:this.styles.notice),(this.options.icon!==n.icon||!0===this.options.icon&&this.options.type!==n.type)&&(this.container.find("div.ui-pnotify-icon").remove(),!1!==this.options.icon&&e("<div />",{class:"ui-pnotify-icon"}).append(e("<span />",{class:!0===this.options.icon?"error"===this.options.type?this.styles.error_icon:"info"===this.options.type?this.styles.info_icon:"success"===this.options.type?this.styles.success_icon:this.styles.notice_icon:this.options.icon})).prependTo(this.container)),this.options.width!==n.width&&this.elem.animate({width:this.options.width}),this.options.min_height!==n.min_height&&this.container.animate({minHeight:this.options.min_height}),this.options.opacity!==n.opacity&&this.elem.fadeTo(this.options.animate_speed,this.options.opacity),this.options.hide?n.hide||this.queueRemove():this.cancelRemove(),this.queuePosition(!0),this.runModules("update",n),this},open:function(){this.state="opening",this.runModules("beforeOpen")
var e=this
return this.elem.parent().length||this.elem.appendTo(this.options.stack.context?this.options.stack.context:n),"top"!==this.options.stack.push&&this.position(!0),"fade"===this.options.animation||"fade"===this.options.animation.effect_in?this.elem.show().fadeTo(0,0).hide():1!==this.options.opacity&&this.elem.show().fadeTo(0,this.options.opacity).hide(),this.animateIn(function(){e.queuePosition(!0),e.options.hide&&e.queueRemove(),e.state="open",e.runModules("afterOpen")}),this},remove:function(t){this.state="closing",this.timerHide=!!t,this.runModules("beforeClose")
var n=this
return this.timer&&(window.clearTimeout(this.timer),this.timer=null),this.animateOut(function(){if(n.state="closed",n.runModules("afterClose"),n.queuePosition(!0),n.options.remove&&n.elem.detach(),n.runModules("beforeDestroy"),n.options.destroy&&null!==PNotify.notices){var t=e.inArray(n,PNotify.notices);-1!==t&&PNotify.notices.splice(t,1)}n.runModules("afterDestroy")}),this},get:function(){return this.elem},parseOptions:function(t,n){this.options=e.extend(!0,{},PNotify.prototype.options),this.options.stack=PNotify.prototype.options.stack
for(var i,o=[t,n],r=0;r<o.length&&(i=o[r],"undefined"!=typeof i);r++)if("object"!=typeof i)this.options.text=i
else for(var a in i)this.modules[a]?e.extend(!0,this.options[a],i[a]):this.options[a]=i[a]},animateIn:function(e){this.animating="in"
var t
t="undefined"!=typeof this.options.animation.effect_in?this.options.animation.effect_in:this.options.animation,"none"===t?(this.elem.show(),e()):"show"===t?this.elem.show(this.options.animate_speed,e):"fade"===t?this.elem.show().fadeTo(this.options.animate_speed,this.options.opacity,e):"slide"===t?this.elem.slideDown(this.options.animate_speed,e):"function"==typeof t?t("in",e,this.elem):this.elem.show(t,"object"==typeof this.options.animation.options_in?this.options.animation.options_in:{},this.options.animate_speed,e),this.elem.parent().hasClass("ui-effects-wrapper")&&this.elem.parent().css({position:"fixed",overflow:"visible"}),"slide"!==t&&this.elem.css("overflow","visible"),this.container.css("overflow","hidden")},animateOut:function(e){this.animating="out"
var t
t="undefined"!=typeof this.options.animation.effect_out?this.options.animation.effect_out:this.options.animation,"none"===t?(this.elem.hide(),e()):"show"===t?this.elem.hide(this.options.animate_speed,e):"fade"===t?this.elem.fadeOut(this.options.animate_speed,e):"slide"===t?this.elem.slideUp(this.options.animate_speed,e):"function"==typeof t?t("out",e,this.elem):this.elem.hide(t,"object"==typeof this.options.animation.options_out?this.options.animation.options_out:{},this.options.animate_speed,e),this.elem.parent().hasClass("ui-effects-wrapper")&&this.elem.parent().css({position:"fixed",overflow:"visible"}),"slide"!==t&&this.elem.css("overflow","visible"),this.container.css("overflow","hidden")},position:function(e){var t=this.options.stack,i=this.elem
if(i.parent().hasClass("ui-effects-wrapper")&&(i=this.elem.css({left:"0",top:"0",right:"0",bottom:"0"}).parent()),"undefined"==typeof t.context&&(t.context=n),t){"number"!=typeof t.nextpos1&&(t.nextpos1=t.firstpos1),"number"!=typeof t.nextpos2&&(t.nextpos2=t.firstpos2),"number"!=typeof t.addpos2&&(t.addpos2=0)
var r="none"===i.css("display")
if(!r||e){var a,s,l={}
switch(t.dir1){case"down":s="top"
break
case"up":s="bottom"
break
case"left":s="right"
break
case"right":s="left"}e=parseInt(i.css(s).replace(/(?:\..*|[^0-9.])/g,"")),isNaN(e)&&(e=0),"undefined"!=typeof t.firstpos1||r||(t.firstpos1=e,t.nextpos1=t.firstpos1)
var c
switch(t.dir2){case"down":c="top"
break
case"up":c="bottom"
break
case"left":c="right"
break
case"right":c="left"}if(a=parseInt(i.css(c).replace(/(?:\..*|[^0-9.])/g,"")),isNaN(a)&&(a=0),"undefined"!=typeof t.firstpos2||r||(t.firstpos2=a,t.nextpos2=t.firstpos2),("down"===t.dir1&&t.nextpos1+i.height()>(t.context.is(n)?o.height():t.context.prop("scrollHeight"))||"up"===t.dir1&&t.nextpos1+i.height()>(t.context.is(n)?o.height():t.context.prop("scrollHeight"))||"left"===t.dir1&&t.nextpos1+i.width()>(t.context.is(n)?o.width():t.context.prop("scrollWidth"))||"right"===t.dir1&&t.nextpos1+i.width()>(t.context.is(n)?o.width():t.context.prop("scrollWidth")))&&(t.nextpos1=t.firstpos1,t.nextpos2+=t.addpos2+("undefined"==typeof t.spacing2?25:t.spacing2),t.addpos2=0),t.animation&&t.nextpos2<a)switch(t.dir2){case"down":l.top=t.nextpos2+"px"
break
case"up":l.bottom=t.nextpos2+"px"
break
case"left":l.right=t.nextpos2+"px"
break
case"right":l.left=t.nextpos2+"px"}else"number"==typeof t.nextpos2&&i.css(c,t.nextpos2+"px")
switch(t.dir2){case"down":case"up":i.outerHeight(!0)>t.addpos2&&(t.addpos2=i.height())
break
case"left":case"right":i.outerWidth(!0)>t.addpos2&&(t.addpos2=i.width())}if("number"==typeof t.nextpos1)if(t.animation&&(e>t.nextpos1||l.top||l.bottom||l.right||l.left))switch(t.dir1){case"down":l.top=t.nextpos1+"px"
break
case"up":l.bottom=t.nextpos1+"px"
break
case"left":l.right=t.nextpos1+"px"
break
case"right":l.left=t.nextpos1+"px"}else i.css(s,t.nextpos1+"px")
switch((l.top||l.bottom||l.right||l.left)&&i.animate(l,{duration:this.options.position_animate_speed,queue:!1}),t.dir1){case"down":case"up":t.nextpos1+=i.height()+("undefined"==typeof t.spacing1?25:t.spacing1)
break
case"left":case"right":t.nextpos1+=i.width()+("undefined"==typeof t.spacing1?25:t.spacing1)}}return this}},queuePosition:function(e,n){return t&&clearTimeout(t),n||(n=10),t=setTimeout(function(){PNotify.positionAll(e)},n),this},cancelRemove:function(){return this.timer&&window.clearTimeout(this.timer),"closing"===this.state&&(this.elem.stop(!0),this.state="open",this.animating="in",this.elem.css("height","auto").animate({width:this.options.width,opacity:this.options.opacity},"fast")),this},queueRemove:function(){var e=this
return this.cancelRemove(),this.timer=window.setTimeout(function(){e.remove(!0)},isNaN(this.options.delay)?0:this.options.delay),this}}),e.extend(PNotify,{notices:[],removeAll:function(){e.each(PNotify.notices,function(){this.remove&&this.remove(!1)})},positionAll:function(n){if(t&&clearTimeout(t),t=null,PNotify.notices&&PNotify.notices.length)e.each(PNotify.notices,function(){var e=this.options.stack
e&&(e.nextpos1=e.firstpos1,e.nextpos2=e.firstpos2,e.addpos2=0,e.animation=n)}),e.each(PNotify.notices,function(){this.position()})
else{var i=PNotify.prototype.options.stack
i&&(delete i.nextpos1,delete i.nextpos2)}},styling:{brighttheme:{container:"brighttheme",notice:"brighttheme-notice",notice_icon:"brighttheme-icon-notice",info:"brighttheme-info",info_icon:"brighttheme-icon-info",success:"brighttheme-success",success_icon:"brighttheme-icon-success",error:"brighttheme-error",error_icon:"brighttheme-icon-error"},jqueryui:{container:"ui-widget ui-widget-content ui-corner-all",notice:"ui-state-highlight",notice_icon:"ui-icon ui-icon-info",info:"",info_icon:"ui-icon ui-icon-info",success:"ui-state-default",success_icon:"ui-icon ui-icon-circle-check",error:"ui-state-error",error_icon:"ui-icon ui-icon-alert"},bootstrap2:{container:"alert",notice:"",notice_icon:"icon-exclamation-sign",info:"alert-info",info_icon:"icon-info-sign",success:"alert-success",success_icon:"icon-ok-sign",error:"alert-error",error_icon:"icon-warning-sign"},bootstrap3:{container:"alert",notice:"alert-warning",notice_icon:"glyphicon glyphicon-exclamation-sign",info:"alert-info",info_icon:"glyphicon glyphicon-info-sign",success:"alert-success",success_icon:"glyphicon glyphicon-ok-sign",error:"alert-danger",error_icon:"glyphicon glyphicon-warning-sign"}}}),PNotify.styling.fontawesome=e.extend({},PNotify.styling.bootstrap3),e.extend(PNotify.styling.fontawesome,{notice_icon:"fa fa-exclamation-circle",info_icon:"fa fa-info",success_icon:"fa fa-check",error_icon:"fa fa-warning"}),document.body?r():e(r),PNotify}),function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery"),require("pnotify")):"function"==typeof define&&define.amd?define("pnotify.buttons",["jquery","pnotify"],e):e(jQuery,PNotify)}(function(e,t){t.prototype.options.buttons={closer:!0,closer_hover:!0,sticker:!0,sticker_hover:!0,show_on_nonblock:!1,labels:{close:"Close",stick:"Stick"}},t.prototype.modules.buttons={myOptions:null,closer:null,sticker:null,init:function(t,n){var i=this
this.myOptions=n,t.elem.on({mouseenter:function(e){!i.myOptions.sticker||t.options.nonblock&&t.options.nonblock.nonblock&&!i.myOptions.show_on_nonblock||i.sticker.trigger("pnotify_icon").css("visibility","visible"),!i.myOptions.closer||t.options.nonblock&&t.options.nonblock.nonblock&&!i.myOptions.show_on_nonblock||i.closer.css("visibility","visible")},mouseleave:function(e){i.myOptions.sticker_hover&&i.sticker.css("visibility","hidden"),i.myOptions.closer_hover&&i.closer.css("visibility","hidden")}}),this.sticker=e("<div />",{class:"ui-pnotify-sticker",css:{cursor:"pointer",visibility:n.sticker_hover?"hidden":"visible"},click:function(){t.options.hide=!t.options.hide,t.options.hide?t.queueRemove():t.cancelRemove(),e(this).trigger("pnotify_icon")}}).bind("pnotify_icon",function(){e(this).children().removeClass(t.styles.pin_up+" "+t.styles.pin_down).addClass(t.options.hide?t.styles.pin_up:t.styles.pin_down)}).append(e("<span />",{class:t.styles.pin_up,title:n.labels.stick})).prependTo(t.container),(!n.sticker||t.options.nonblock&&t.options.nonblock.nonblock&&!n.show_on_nonblock)&&this.sticker.css("display","none"),this.closer=e("<div />",{class:"ui-pnotify-closer",css:{cursor:"pointer",visibility:n.closer_hover?"hidden":"visible"},click:function(){t.remove(!1),i.sticker.css("visibility","hidden"),i.closer.css("visibility","hidden")}}).append(e("<span />",{class:t.styles.closer,title:n.labels.close})).prependTo(t.container),(!n.closer||t.options.nonblock&&t.options.nonblock.nonblock&&!n.show_on_nonblock)&&this.closer.css("display","none")},update:function(e,t){this.myOptions=t,!t.closer||e.options.nonblock&&e.options.nonblock.nonblock&&!t.show_on_nonblock?this.closer.css("display","none"):t.closer&&this.closer.css("display","block"),!t.sticker||e.options.nonblock&&e.options.nonblock.nonblock&&!t.show_on_nonblock?this.sticker.css("display","none"):t.sticker&&this.sticker.css("display","block"),this.sticker.trigger("pnotify_icon"),t.sticker_hover?this.sticker.css("visibility","hidden"):e.options.nonblock&&e.options.nonblock.nonblock&&!t.show_on_nonblock||this.sticker.css("visibility","visible"),t.closer_hover?this.closer.css("visibility","hidden"):e.options.nonblock&&e.options.nonblock.nonblock&&!t.show_on_nonblock||this.closer.css("visibility","visible")}},e.extend(t.styling.brighttheme,{closer:"brighttheme-icon-closer",pin_up:"brighttheme-icon-sticker",pin_down:"brighttheme-icon-sticker brighttheme-icon-stuck"}),e.extend(t.styling.jqueryui,{closer:"ui-icon ui-icon-close",pin_up:"ui-icon ui-icon-pin-w",pin_down:"ui-icon ui-icon-pin-s"}),e.extend(t.styling.bootstrap2,{closer:"icon-remove",pin_up:"icon-pause",pin_down:"icon-play"}),e.extend(t.styling.bootstrap3,{closer:"glyphicon glyphicon-remove",pin_up:"glyphicon glyphicon-pause",pin_down:"glyphicon glyphicon-play"}),e.extend(t.styling.fontawesome,{closer:"fa fa-times",pin_up:"fa fa-pause",pin_down:"fa fa-play"})}),function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery"),require("pnotify")):"function"==typeof define&&define.amd?define("pnotify.desktop",["jquery","pnotify"],e):e(jQuery,PNotify)}(function(e,t){var n,i=function(e,t){return(i="Notification"in window?function(e,t){return new Notification(e,t)}:"mozNotification"in navigator?function(e,t){return navigator.mozNotification.createNotification(e,t.body,t.icon).show()}:"webkitNotifications"in window?function(e,t){return window.webkitNotifications.createNotification(t.icon,e,t.body)}:function(e,t){return null})(e,t)}
t.prototype.options.desktop={desktop:!1,fallback:!0,icon:null,tag:null},t.prototype.modules.desktop={tag:null,icon:null,genNotice:function(e,t){this.icon=null===t.icon?"http://sciactive.com/pnotify/includes/desktop/"+e.options.type+".png":!1===t.icon?null:t.icon,null!==this.tag&&null===t.tag||(this.tag=null===t.tag?"PNotify-"+Math.round(1e6*Math.random()):t.tag),e.desktop=i(e.options.title,{icon:this.icon,body:e.options.text,tag:this.tag}),!("close"in e.desktop)&&"cancel"in e.desktop&&(e.desktop.close=function(){e.desktop.cancel()}),e.desktop.onclick=function(){e.elem.trigger("click")},e.desktop.onclose=function(){"closing"!==e.state&&"closed"!==e.state&&e.remove()}},init:function(e,i){i.desktop&&(n=t.desktop.checkPermission(),0!==n?i.fallback||(e.options.auto_display=!1):this.genNotice(e,i))},update:function(e,t,i){0!==n&&t.fallback||!t.desktop||this.genNotice(e,t)},beforeOpen:function(e,t){0!==n&&t.fallback||!t.desktop||e.elem.css({left:"-10000px",display:"none"})},afterOpen:function(e,t){0!==n&&t.fallback||!t.desktop||(e.elem.css({left:"-10000px",display:"none"}),"show"in e.desktop&&e.desktop.show())},beforeClose:function(e,t){0!==n&&t.fallback||!t.desktop||e.elem.css({left:"-10000px",display:"none"})},afterClose:function(e,t){0!==n&&t.fallback||!t.desktop||(e.elem.css({left:"-10000px",display:"none"}),"close"in e.desktop&&e.desktop.close())}},t.desktop={permission:function(){"undefined"!=typeof Notification&&"requestPermission"in Notification?Notification.requestPermission():"webkitNotifications"in window&&window.webkitNotifications.requestPermission()},checkPermission:function(){return"undefined"!=typeof Notification&&"permission"in Notification?"granted"===Notification.permission?0:1:"webkitNotifications"in window&&0==window.webkitNotifications.checkPermission()?0:1}},n=t.desktop.checkPermission()}),function(e){e.fn.collection=function(t){var n={container:"body",allow_up:!0,up:'<a href="#">&#x25B2;</a>',before_up:function(e,t){return!0},after_up:function(e,t){return!0},allow_down:!0,down:'<a href="#">&#x25BC;</a>',before_down:function(e,t){return!0},after_down:function(e,t){return!0},allow_add:!0,add:'<a href="#">[ + ]</a>',before_add:function(e,t){return!0},after_add:function(e,t){return!0},allow_remove:!0,remove:'<a href="#">[ - ]</a>',before_remove:function(e,t){return!0},after_remove:function(e,t){return!0},allow_duplicate:!1,duplicate:'<a href="#">[ # ]</a>',before_duplicate:function(e,t){return!0},after_duplicate:function(e,t){return!0},before_init:function(e){},after_init:function(e){},min:0,max:100,add_at_the_end:!1,prefix:"collection",prototype_name:"__name__",name_prefix:null,elements_selector:"> div",children:null,init_with_n_elements:0,hide_useless_buttons:!0,drag_drop:!0,drag_drop_options:{placeholder:"ui-state-highlight"},drag_drop_start:function(e,t){return!0},drag_drop_update:function(e,t){return!0},custom_add_location:!1},i=function(){var e=""+1e3*Math.random()*(new Date).getTime()
return e.replace(".","").split("").sort(function(){return.5-Math.random()}).join("")},o=function(t,n){if(!n.attr("id")){var o
do o=t+"_"+i()
while(e("#"+o).length>0)
n.attr("id",o)}return n.attr("id")},r=function(t){try{var n=e(t)}catch(e){return null}return 0===n.length?null:n.is('input[type="checkbox"]')?n.prop("checked")===!0:n.is('input[type="radio"]')&&void 0!==n.attr("name")?e('input[name="'+n.attr("name")+'"]:checked').val():void 0!==n.prop("value")?n.val():n.html()},a=function(t,n,i){try{var o=e(t)}catch(e){return}0!==o.length&&(o.is('input[type="checkbox"]')?n?o.attr("checked",!0):o.removeAttr("checked"):void 0!==o.prop("value")?i?o.attr("value",n):o.val(n):o.html(n))},s=function(e){return void 0===e||e},l=function(e){return(e+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")},c=function(t,n,i,o){var r=function(t){var n=e(t)
e.each(t.attributes,function(t,r){"string"===e.type(r.value)&&n.attr(r.name.replace(i,o),r.value.replace(i,o))}),e.each(n.data(),function(t,r){"string"===e.type(r)&&n.data(t.replace(i,o),r.replace(i,o))})},a=t.eq(n)
r(a[0]),a.find("*").each(function(){r(this)})},u=function(e,t,n,i,o,r){var a=new RegExp(l(n.name_prefix+"["+o+"]"),"g"),s=n.name_prefix+"["+r+"]"
c(t,i,a,s),a=new RegExp(l(e.attr("id")+"_"+o),"g"),s=e.attr("id")+"_"+r,c(t,i,a,s)},d=function(e,t,n,i,o){var r=new RegExp(l(t.name_prefix+"["+i+"]"),"g"),a=t.name_prefix+"["+o+"]"
return n=n.replace(r,a),r=new RegExp(l(e.attr("id")+"_"+i),"g"),a=e.attr("id")+"_"+o,n=n.replace(r,a)},p=function(t){e(t).find(":input").each(function(e,t){a(t,r(t),!0)})},f=function(e,t,n,i){var o=e.data("collection-settings")
return u(e,t,o,n,n,"__swap__"),u(e,t,o,i,i,n),u(e,t,o,n,"__swap__",i),t.eq(n).insertBefore(t.eq(i)),i>n?t.eq(i).insertBefore(t.eq(n)):t.eq(i).insertAfter(t.eq(n)),e.find(o.elements_selector)},h=function(e,t,n,i,o){for(var r=i+1;r<=o;r++)t=f(e,t,r,r-1)
return e.find(n.elements_selector)},m=function(e,t,n,i,o){for(var r=i-1;r>=o;r--)t=f(e,t,r,r+1)
return e.find(n.elements_selector)},g=function(e,t,n,i){for(var o=i+1;o<t.length;o++)t=f(e,t,o-1,o)
return e.find(n.elements_selector)},v=function(e,t,n,i){for(var o=t.length-2;o>i;o--)t=f(e,t,o+1,o)
return e.find(n.elements_selector)},y=function(t,n,i){var r=0===t.find("."+n.prefix+"-tmp").length,a=t.find(n.elements_selector)
if(n.allow_add&&r&&(t.append('<span class="'+n.prefix+'-tmp"></span>'),n.add&&t.append(e(n.add).addClass(n.prefix+"-action "+n.prefix+"-rescue-add").data("collection",t.attr("id")))),i)for(var s=e(n.container),l=t.find("."+n.prefix+"-add, ."+n.prefix+"-rescue-add, ."+n.prefix+"-duplicate").first();a.length<n.init_with_n_elements;){var c=a.length>0?a.last():void 0,u=a.length+1
a=w(s,l,t,n,a,c,u,!1)}if(a.each(function(i){var r=e(this),s=r.find("."+n.prefix+"-actions").addBack().filter("."+n.prefix+"-actions")
0===s.length&&(s=e('<div class="'+n.prefix+'-actions"></div>'),r.append(s))
var l=[{enabled:n.allow_remove,selector:n.prefix+"-remove",html:n.remove,condition:a.length>n.min},{enabled:n.allow_up,selector:n.prefix+"-up",html:n.up,condition:0!==a.index(r)},{enabled:n.allow_down,selector:n.prefix+"-down",html:n.down,condition:a.index(r)!==a.length-1},{enabled:n.allow_add&&!n.add_at_the_end&&!n.custom_add_location,selector:n.prefix+"-add",html:n.add,condition:a.length<n.max},{enabled:n.allow_duplicate,selector:n.prefix+"-duplicate",html:n.duplicate,condition:a.length<n.max}]
e.each(l,function(a,l){if(l.enabled){var c=r.find("."+l.selector)
0===c.length&&l.html&&(c=e(l.html).appendTo(s).addClass(l.selector)),l.condition?(c.removeClass(n.prefix+"-action-disabled"),n.hide_useless_buttons&&c.css("display","")):(c.addClass(n.prefix+"-action-disabled"),n.hide_useless_buttons&&c.css("display","none")),c.addClass(n.prefix+"-action").data("collection",t.attr("id")).data(n.prefix+"-element",o(t.attr("id")+"_"+i,r))}else r.find("."+l.selector).css("display","none")})}),n.allow_add){var d=t.find("."+n.prefix+"-rescue-add").css("display",""),p=t.find("."+n.prefix+"-add");(!n.add_at_the_end&&p.length>0||n.custom_add_location)&&d.css("display","none"),a.length>=n.max&&n.hide_useless_buttons&&t.find("."+n.prefix+"-add, ."+n.prefix+"-rescue-add, ."+n.prefix+"-duplicate").css("display","none")}},b=function(t,n,i){i.children&&e.each(i.children,function(e,i){return i.selector?void(null!==n?n.find(i.selector).collection(i):t.find(i.selector).collection(i)):(console.log("jquery.collection.js: given collection "+t.attr("id")+" has children collections, but children's root selector is undefined."),!0)})},w=function(t,n,i,o,r,a,c,u){if(r.length<o.max&&(u&&s(o.before_duplicate(i,a))||s(o.before_add(i,a)))){var f=i.data("prototype"),h=r.length,m=new RegExp(l(o.prototype_name),"g"),y=e(f.replace(m,h)),w=i.find("> ."+o.prefix+"-tmp")
e(y).find("[id]").first().attr("id")
if(u){p(r.eq(c))
var x=e("<div/>").append(r.eq(c).clone()).html(),_=d(i,o,x,c,h)
y=e("<div/>").html(_).contents(),w.before(y).find(o.prefix+"-actions").remove()}else w.before(y)
r=i.find(o.elements_selector)
var C=y.find("."+o.prefix+"-add, ."+o.prefix+"-duplicate")
if(C.length>0&&C.addClass(o.prefix+"-action").data("collection",i.attr("id")),void 0!==n.data(o.prefix+"-element")){var c=r.index(e("#"+n.data(o.prefix+"-element")))
c!==-1&&(r=v(i,r,o,c))}b(i,y,o),(u&&!s(o.after_duplicate(i,y))||!s(o.after_add(i,y)))&&(c!==-1&&(r=g(i,r,o,c+1)),y.remove())}return r},x=function(e,t,n,i,o){if(n.length>t.min&&s(t.before_remove(e,i))){n=g(e,n,t,o)
var r=n.last(),a=r.clone({withDataAndEvents:!0})
r.remove(),s(t.after_remove(e,a))||(e.find("> ."+t.prefix+"-tmp").before(a),n=e.find(t.elements_selector),n=v(e,n,t,o-1))}return n},_=function(e,t,n,i,o){return 0!==o&&s(t.before_up(e,i))&&(n=f(e,n,o,o-1),s(t.after_up(e,i))||(n=f(e,n,o-1,o))),n},C=function(e,t,n,i,o){return o!==n.length-1&&s(t.before_down(e,i))&&(n=f(e,n,o,o+1),s(t.after_down(e,n))||(n=f(e,n,o+1,o))),n},S=e(this)
return 0===S.length?(console.log("jquery.collection.js: given collection selector does not exist."),!1):(S.each(function(){var i=e.extend(!0,{},n,t)
if(0===e(i.container).length)return console.log("jquery.collection.js: a container should exist to handle events (basically, a <body> tag)."),!1
var o=e(this)
if(void 0!==o.data("collection")){var r=e("#"+o.data("collection"))
if(0===r.length)return console.log("jquery.collection.js: given collection id does not exist."),!0}else r=o
if(i.before_init(r),null===r.data("prototype"))return console.log("jquery.collection.js: given collection field has no prototype, check that your field has the prototype option set to true."),!0
if(void 0!==r.data("prototype-name")&&(i.prototype_name=r.data("prototype-name")),void 0!==r.data("allow-add")&&(i.allow_add=r.data("allow-add"),i.allow_duplicate=!!r.data("allow-add")&&i.allow_duplicate),void 0!==r.data("allow-remove")&&(i.allow_remove=r.data("allow-remove")),void 0!==r.data("name-prefix")&&(i.name_prefix=r.data("name-prefix")),!i.name_prefix)return console.log("jquery.collection.js: the prefix used in descendant field names is mandatory, you can set it using 2 ways:"),console.log("jquery.collection.js: - use the form theme given with this plugin source"),console.log("jquery.collection.js: - set name_prefix option to  '{{ formView.myCollectionField.vars.full_name }}'"),!0
if(i.init_with_n_elements<i.min&&(i.init_with_n_elements=i.min),i.drag_drop&&i.allow_up&&i.allow_down){var a,l
"undefined"==typeof jQuery.ui||"undefined"==typeof jQuery.ui.sortable?i.drag_drop=!1:r.sortable(e.extend(!0,{},{start:function(t,n){var o=r.find(i.elements_selector),l=n.item,c=e(this)
return s(i.drag_drop_start(t,n,o,l))?(n.placeholder.height(n.item.height()),n.placeholder.width(n.item.width()),void(a=o.index(l))):void c.sortable("cancel")},update:function(t,n){var o=r.find(i.elements_selector),c=n.item,u=e(this)
u.sortable("cancel"),!1!==i.drag_drop_update(t,n,o,c)&&s(l-a>0?i.before_up(r,c):i.before_down(r,c))&&(l=o.index(c),o=r.find(i.elements_selector),1===Math.abs(l-a)?(o=f(r,o,a,l),s(l-a>0?i.after_up(r,c):i.after_down(r,c))||(o=f(r,o,l,a))):a<l?(o=h(r,o,i,a,l),s(l-a>0?i.after_up(r,c):i.after_down(r,c))||(o=m(r,o,i,l,a))):(o=m(r,o,i,a,l),s(l-a>0?i.after_up(r,c):i.after_down(r,c))||(o=h(r,o,i,l,a))),y(r,i,!1))}},i.drag_drop_options))}r.data("collection-settings",i)
var c=e(i.container)
c.off("click","."+i.prefix+"-action").on("click","."+i.prefix+"-action",function(t){var n=e(this),i=e("#"+n.data("collection")),o=i.data("collection-settings")
if(void 0===o){var i=e("#"+n.data("collection")).find("."+n.data("collection")+"-collection"),o=i.data("collection-settings")
if(void 0===o)throw"Can't find collection: "+n.data("collection")}var r=i.find(o.elements_selector),a=n.data(o.prefix+"-element")?e("#"+n.data(o.prefix+"-element")):void 0,s=a&&a.length?r.index(a):-1,l=n.is("."+o.prefix+"-duplicate");(n.is("."+o.prefix+"-add")||n.is("."+o.prefix+"-rescue-add")||l)&&o.allow_add&&(r=w(c,n,i,o,r,a,s,l)),n.is("."+o.prefix+"-remove")&&o.allow_remove&&(r=x(i,o,r,a,s)),n.is("."+o.prefix+"-up")&&o.allow_up&&(r=_(i,o,r,a,s)),n.is("."+o.prefix+"-down")&&o.allow_down&&(r=C(i,o,r,a,s)),y(i,o,!1),t.preventDefault()}),y(r,i,!0),b(r,null,i),i.after_init(r)}),!0)}}(jQuery),"undefined"==typeof jQuery)throw new Error("AdminLTE requires jQuery")
$.AdminLTE={},$.AdminLTE.options={navbarMenuSlimscroll:!0,navbarMenuSlimscrollWidth:"3px",navbarMenuHeight:"200px",animationSpeed:500,sidebarToggleSelector:"[data-toggle='offcanvas']",sidebarPushMenu:!0,sidebarSlimScroll:!0,sidebarExpandOnHover:!1,enableBoxRefresh:!0,enableBSToppltip:!0,BSTooltipSelector:"[data-toggle='tooltip']",enableFastclick:!0,enableControlSidebar:!0,controlSidebarOptions:{toggleBtnSelector:"[data-toggle='control-sidebar']",selector:".control-sidebar",slide:!0},enableBoxWidget:!0,boxWidgetOptions:{boxWidgetIcons:{collapse:"fa-minus",open:"fa-plus",remove:"fa-times"},boxWidgetSelectors:{remove:'[data-widget="remove"]',collapse:'[data-widget="collapse"]'}},directChat:{enable:!0,contactToggleSelector:'[data-widget="chat-pane-toggle"]'},colors:{lightBlue:"#3c8dbc",red:"#f56954",green:"#00a65a",aqua:"#00c0ef",yellow:"#f39c12",blue:"#0073b7",navy:"#001F3F",teal:"#39CCCC",olive:"#3D9970",lime:"#01FF70",orange:"#FF851B",fuchsia:"#F012BE",purple:"#8E24AA",maroon:"#D81B60",black:"#222222",gray:"#d2d6de"},screenSizes:{xs:480,sm:768,md:992,lg:1200}},$(function(){"use strict"
$("body").removeClass("hold-transition"),"undefined"!=typeof AdminLTEOptions&&$.extend(!0,$.AdminLTE.options,AdminLTEOptions)
var e=$.AdminLTE.options
_init(),$.AdminLTE.layout.activate(),$.AdminLTE.tree(".sidebar"),e.enableControlSidebar&&$.AdminLTE.controlSidebar.activate(),e.navbarMenuSlimscroll&&"undefined"!=typeof $.fn.slimscroll&&$(".navbar .menu").slimscroll({height:e.navbarMenuHeight,alwaysVisible:!1,size:e.navbarMenuSlimscrollWidth}).css("width","100%"),e.sidebarPushMenu&&$.AdminLTE.pushMenu.activate(e.sidebarToggleSelector),e.enableBSToppltip&&$("body").tooltip({selector:e.BSTooltipSelector}),e.enableBoxWidget&&$.AdminLTE.boxWidget.activate(),e.enableFastclick&&"undefined"!=typeof FastClick&&FastClick.attach(document.body),e.directChat.enable&&$(document).on("click",e.directChat.contactToggleSelector,function(){var e=$(this).parents(".direct-chat").first()
e.toggleClass("direct-chat-contacts-open")}),$('.btn-group[data-toggle="btn-toggle"]').each(function(){var e=$(this)
$(this).find(".btn").on("click",function(t){e.find(".btn.active").removeClass("active"),$(this).addClass("active"),t.preventDefault()})})}),function(e){"use strict"
e.fn.boxRefresh=function(t){function n(e){e.append(r),o.onLoadStart.call(e)}function i(e){e.find(r).remove(),o.onLoadDone.call(e)}var o=e.extend({trigger:".refresh-btn",source:"",onLoadStart:function(e){return e},onLoadDone:function(e){return e}},t),r=e('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>')
return this.each(function(){if(""===o.source)return void(window.console&&window.console.log("Please specify a source first - boxRefresh()"))
var t=e(this),r=t.find(o.trigger).first()
r.on("click",function(e){e.preventDefault(),n(t),t.find(".box-body").load(o.source,function(){i(t)})})})}}(jQuery),function(e){"use strict"
e.fn.activateBox=function(){e.AdminLTE.boxWidget.activate(this)}}(jQuery),function(e){"use strict"
e.fn.todolist=function(t){var n=e.extend({onCheck:function(e){return e},onUncheck:function(e){return e}},t)
return this.each(function(){"undefined"!=typeof e.fn.iCheck?(e("input",this).on("ifChecked",function(){var t=e(this).parents("li").first()
t.toggleClass("done"),n.onCheck.call(t)}),e("input",this).on("ifUnchecked",function(){var t=e(this).parents("li").first()
t.toggleClass("done"),n.onUncheck.call(t)})):e("input",this).on("change",function(){var t=e(this).parents("li").first()
t.toggleClass("done"),e("input",t).is(":checked")?n.onCheck.call(t):n.onUncheck.call(t)})})}}(jQuery),$("div#new form").submit(function(e){return $("div#new").modal("hide"),$.ajax({url:pathCreateFolderFilemanager,data:{data:$("div#new input#new-path").attr("data-base")+$("div#new input#new-path").val()},cache:!1,dataType:"json",type:"POST",success:function(e){add_msg(e.msg,"PHP",e.status?"success":"error"),browse(PATH)},error:function(e,t){add_msg(t,"AJAX","error")}}),!1}),$("div#remove a.submit").click(function(e){$.ajax({url:pathDeleteFilemanager,data:{data:$("div#remove input#remove-path").val()},cache:!1,dataType:"json",type:"POST",success:function(e){add_msg(e.msg,"PHP",e.status?"success":"error"),browse(PATH)},error:function(e,t){add_msg(t,"AJAX","error")}})}),$("div#upload").on("hidden.bs.modal",function(e){myDropzone.removeAllFiles(),browse(PATH),$("body").hasClass("modal-open")||$("body").addClass("modal-open")}),$("div#tools a#upload-button").click(function(e){e.preventDefault(),$("div#upload input#upload-path").val(""==PATH?"":PATH+"/"),$("div#upload").modal("show")}),$("div#tools a#new-folder-button").click(function(e){e.preventDefault(),$("div#new input#new-type").val("folder"),$("div#new input#new-path").attr("data-base",""==PATH?"":PATH+"/"),$("div#new").modal("show")}),$("div#new").on("shown.bs.modal",function(e){$("#new-path").focus()}),$("div#new").on("hidden.bs.modal",function(e){$("div#new input#new-path").val(""),$("div#new input#new-path").attr("data-base","")}),$("div#tools a#refresh-button").click(function(e){browse(PATH)}),PNotify.prototype.options.styling="bootstrap3",PNotify.prototype.options.styling="fontawesome",$win=$(window)
var wpos,space
$footer=$("#form-bloque-botones"),$("body").on("click",".help-block a",function(e){e.preventDefault()
var t=$(this).attr("href")
window.open(t,"_blank")}),$("body").loadingIndicator()
var loader=$("body").data("loadingIndicator")
$.ajaxSetup({beforeSend:function(){loader.show()},complete:function(){loader.hide(),load_zoom_img()}}),Dropzone.autoDiscover=!1
var myDropzone=new Dropzone("form#my-awesome-dropzone",{url:url_upload})
CKEDITOR.env.ie&&CKEDITOR.env.version<9&&CKEDITOR.tools.enableHtml5Elements(document),CKEDITOR.config.toolbar=[{name:"document",items:["Source","-","NewPage","Preview","-","Templates"]},["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"],"/",{name:"basicstyles",items:["Bold","Italic","-","Subscript","Superscript","-","RemoveFormat"]},{name:"paragraph",groups:["list","indent","blocks","align","bidi"],items:["NumberedList","BulletedList","-","Outdent","Indent","-","JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock"]},{name:"links",items:["Link","Unlink"]},{name:"insert",items:["Table","Youtube"]}],$(document).on("click",".media-right .eliminar",function(){$(this).parent().parent().remove(),formHasChanged=!0}),$(document).on("change",".box .form-group input, .box .form-group select, .box .form-group textarea",function(e){unsaved=!0}),$(document).on("click","#main-content .media .trash",function(){var e=$(this).attr("data-id")
$("#"+e).attr("value",""),$("#t_"+e).find(".fancybox, .trash, .nombre-img").addClass("hide"),formHasChanged=!0}),window.addEventListener("popstate",function(){loadContent("")}),$(document).ready(function(){loader.hide(),load_zoom_img(),$(document).on("submit","#form-zero",function(){return!1}),$(document).on("submit",".modalnoajax form",function(){return!1}),$(document).on("click",'#FORM_DELETE button[type="submit"]',function(e){if(unsaved=!1,Modernizr.history){var t=$("#FORM_DELETE form").serializeArray()
t.push({name:$(this).attr("name")}),loadContent($("#FORM_DELETE form").attr("action"),t)}$("#FORM_DELETE").modal("hide")}),$(document).on("click",'#form-bloque-botones button[type="submit"]',function(){if(CKupdate(),unsaved=!1,Modernizr.history){var e=$("#form-zero").serializeArray()
e.push({name:$(this).attr("name")}),loadContent($("#form-zero").attr("action"),e)}}),window.onbeforeunload=function(e){if(unsaved){var t=msg_warning_form_no_saved.replace("<br>","\n"),e=e||window.event
return e&&(e.returnValue=t),t}},$(document).on("click",".open-filebrowser",function(e){e.preventDefault()
var t=$(this).attr("data-return")
$("table#filemanager").attr("data-retornar",t)
var n=$("#"+t).val().replace("uploads","").split("/")
n.splice(-1,1),n=n.join("/"),browse(n)})
var e=$("#FOSChangePasswordButton"),t=e.attr("href"),n=$("#FOSChangePassword")
e.click(function(e){e.preventDefault(),n.find(".modal-content").load(t,function(){n.modal("show")})}),n.on("submit","form",function(e){e.preventDefault()
var i=n.find("form").serializeArray()
return n.find(".modal-content").load(t,i,function(e,t,i){"correcto"==e&&(n.modal("hide"),new PNotify({text:"Contraseña actualizada",type:"success",icon:!1}))}),!1}),Modernizr.history&&$(document).on("click",".control-ajax a",function(){var e=$(this).attr("href")
return!!$(this).hasClass("no-ajax")||("#"==e||(unsaved?getConfirm(msg_warning_form_no_saved,function(t){t&&(history.pushState(null,null,e),loadContent(e,!1),unsaved=!1)}):(history.pushState(null,null,e),loadContent(e,!1)),!1))})})
