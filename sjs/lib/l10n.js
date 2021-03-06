"use strict";(function(){var o="undefined",a="string",m=String,j=Object.prototype.hasOwnProperty,v={},w={},r=!1,q=/^\s*application\/(?:vnd\.oftn\.|x-)?l10n\+json\s*(?:$|;)/i,n,p="toLocaleString",e="toLowerCase",t=Array.prototype.indexOf||function(z){var x=this.length,y=0;for(;y<x;y++){if(y in this&&this[y]===z){return y}}return -1},b=function(x){var i=new n();i.open("GET",x,r);i.send(null);if(i.status!==200){setTimeout(function(){var y=new Error("Unable to load localization data: "+x);y.name="Localization Error";throw y},0);return{}}else{return JSON.parse(i.responseText)}},l=m[p]=function(y){if(arguments.length>0&&typeof y!=="number"){if(typeof y===a){l(b(y))}else{if(y===r){w={}}else{for(var i in y){if(j.call(y,i)){var z=y[i];i=i[e]();if(!(i in w)||z===r){w[i]={}}if(z===r){continue}if(typeof z===a){if(m.locale[e]().indexOf(i)===0){z=b(z)}else{if(!(i in v)){v[i]=[]}v[i].push(z);continue}}for(var x in z){if(j.call(z,x)){w[i][x]=z[x]}}}}}}}return Function.prototype[p].apply(m,arguments)},h=function(z){var y=v[z],A=0,x=y.length;for(;A<x;A++){var B={};B[z]=b(y[A]);l(B)}delete v[z]};if(typeof XMLHttpRequest===o&&typeof ActiveXObject!==o){var f=ActiveXObject;n=function(){try{return new f("Msxml2.XMLHTTP.6.0")}catch(x){}try{return new f("Msxml2.XMLHTTP.3.0")}catch(i){}try{return new f("Msxml2.XMLHTTP")}catch(y){}throw new Error("XMLHttpRequest not supported by this browser.")}}else{n=XMLHttpRequest}if(!m.locale){if(typeof navigator!==o){var k=navigator;m.locale=k.language||k.userLanguage||""}else{m.locale=""}}if(typeof document!==o){var u=document.getElementsByTagName("link"),s=u.length;while(s--){var d=u[s],c=(d.getAttribute("rel")||"")[e]().split(/\s+/);if(q.test(d.type)){if(t.call(c,"localizations")!==-1){l(d.getAttribute("href"))}else{if(t.call(c,"localization")!==-1){var g={};g[(d.getAttribute("hreflang")||"")[e]()]=d.getAttribute("href");l(g)}}}}}m.prototype[p]=function(){var A=m.locale[e]().split("-"),z=A.length,y=this.valueOf();do{var x=A.slice(0,z).join("-");if(x in v){h(x)}if(x in w&&y in w[x]){return w[x][y]}}while(z--);return y}}());

function localizePage ( lang ) {
	if (typeof lang != 'undefined' ) String.locale = lang;
	var localizeElements = $('*[data-localize]');
	localizeElements.each ( localizeElement );
}

function localizeElement ( index ) {
	var localizeString = '%' + $(this).attr('data-localize');
	var localized = localizeString.toLocaleString();
	if (localized != localizeString ) $(this).html( localized );
}
