webpackJsonp([13],{13:function(t,e){t.exports=libs_7c26364e},199:function(t,e,r){!function(e,r){t.exports=function(){return function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){r(6),r(7),t.exports=r(8)},function(t,e,r){(function(e){!function(r){function n(t,e){return function(){t.apply(e,arguments)}}function a(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],h(t,n(o,this),n(s,this))}function i(t){var e=this;return null===this._state?void this._deferreds.push(t):void l(function(){var r=e._state?t.onFulfilled:t.onRejected;if(null===r)return void(e._state?t.resolve:t.reject)(e._value);var n;try{n=r(e._value)}catch(e){return void t.reject(e)}t.resolve(n)})}function o(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var e=t.then;if("function"==typeof e)return void h(n(e,t),n(o,this),n(s,this))}this._state=!0,this._value=t,c.call(this)}catch(t){s.call(this,t)}}function s(t){this._state=!1,this._value=t,c.call(this)}function c(){for(var t=0,e=this._deferreds.length;e>t;t++)i.call(this,this._deferreds[t]);this._deferreds=null}function u(t,e,r,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.resolve=r,this.reject=n}function h(t,e,r){var n=!1;try{t(function(t){n||(n=!0,e(t))},function(t){n||(n=!0,r(t))})}catch(t){if(n)return;n=!0,r(t)}}var l="function"==typeof e&&e||function(t){setTimeout(t,1)},f=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};a.prototype.catch=function(t){return this.then(null,t)},a.prototype.then=function(t,e){var r=this;return new a(function(n,a){i.call(r,new u(t,e,n,a))})},a.all=function(){var t=Array.prototype.slice.call(1===arguments.length&&f(arguments[0])?arguments[0]:arguments);return new a(function(e,r){function n(i,o){try{if(o&&("object"==typeof o||"function"==typeof o)){var s=o.then;if("function"==typeof s)return void s.call(o,function(t){n(i,t)},r)}t[i]=o,0==--a&&e(t)}catch(t){r(t)}}if(0===t.length)return e([]);for(var a=t.length,i=0;i<t.length;i++)n(i,t[i])})},a.resolve=function(t){return t&&"object"==typeof t&&t.constructor===a?t:new a(function(e){e(t)})},a.reject=function(t){return new a(function(e,r){r(t)})},a.race=function(t){return new a(function(e,r){for(var n=0,a=t.length;a>n;n++)t[n].then(e,r)})},a._setImmediateFn=function(t){l=t},a.prototype.always=function(t){var e=this.constructor;return this.then(function(r){return e.resolve(t()).then(function(){return r})},function(r){return e.resolve(t()).then(function(){throw r})})},void 0!==t&&t.exports?t.exports=a:r.Promise||(r.Promise=a)}(this)}).call(e,r(2).setImmediate)},function(t,e,r){(function(t,n){function a(t,e){this._id=t,this._clearFn=e}var i=r(3).nextTick,o=Function.prototype.apply,s=Array.prototype.slice,c={},u=0;e.setTimeout=function(){return new a(o.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new a(o.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},e.setImmediate="function"==typeof t?t:function(t){var r=u++,n=!(arguments.length<2)&&s.call(arguments,1);return c[r]=!0,i(function(){c[r]&&(n?t.apply(null,n):t.call(null),e.clearImmediate(r))}),r},e.clearImmediate="function"==typeof n?n:function(t){delete c[t]}}).call(e,r(2).setImmediate,r(2).clearImmediate)},function(t,e){function r(){u=!1,o.length?c=o.concat(c):h=-1,c.length&&n()}function n(){if(!u){var t=setTimeout(r);u=!0;for(var e=c.length;e;){for(o=c,c=[];++h<e;)o&&o[h].run();h=-1,e=c.length}o=null,u=!1,clearTimeout(t)}}function a(t,e){this.fun=t,this.array=e}function i(){}var o,s=t.exports={},c=[],u=!1,h=-1;s.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new a(t,e)),1!==c.length||u||setTimeout(n,0)},a.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=i,s.addListener=i,s.once=i,s.off=i,s.removeListener=i,s.removeAllListeners=i,s.emit=i,s.binding=function(t){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(t){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},function(t,e){var r=function(){try{return new Blob,!0}catch(t){return!1}}()?window.Blob:function(t,e){var r=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.MozBlobBuilder);return t.forEach(function(t){r.append(t)}),r.getBlob(e?e.type:void 0)},n=function(){function t(){var t=this,n=[],a=Array(21).join("-")+(+new Date*(1e16*Math.random())).toString(36),i=XMLHttpRequest.prototype.send;this.getParts=function(){return n.toString()},this.append=function(t,e,r){n.push("--"+a+'\r\nContent-Disposition: form-data; name="'+t+'"'),e instanceof Blob?(n.push('; filename="'+(r||"blob")+'"\r\nContent-Type: '+e.type+"\r\n\r\n"),n.push(e)):n.push("\r\n\r\n"+e),n.push("\r\n")},e++,XMLHttpRequest.prototype.send=function(o){var s,c,u=this;o===t?(n.push("--"+a+"--\r\n"),c=new r(n),s=new FileReader,s.onload=function(){i.call(u,s.result)},s.onerror=function(t){throw t},s.readAsArrayBuffer(c),this.setRequestHeader("Content-Type","multipart/form-data; boundary="+a),0==--e&&(XMLHttpRequest.prototype.send=i)):i.call(this,o)}}var e=0;return t.prototype=Object.create(FormData.prototype),t}();t.exports={Blob:r,FormData:function(){return~navigator.userAgent.indexOf("Android")&&~navigator.vendor.indexOf("Google")&&!~navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop()<=534||/MQQBrowser/g.test(navigator.userAgent)}()?n:FormData}},function(t,e,r){var n,a;(function(){function r(t){return!!t.exifdata}function i(t,e){e=e||t.match(/^data\:([^\;]+)\;base64,/im)[1]||"",t=t.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var r=atob(t),n=r.length,a=new ArrayBuffer(n),i=new Uint8Array(a),o=0;n>o;o++)i[o]=r.charCodeAt(o);return a}function o(t,e){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="blob",r.onload=function(t){(200==this.status||0===this.status)&&e(this.response)},r.send()}function s(t,e){function r(r){var n=c(r),a=u(r);t.exifdata=n||{},t.iptcdata=a||{},e&&e.call(t)}if(t.src)if(/^data\:/i.test(t.src)){var n=i(t.src);r(n)}else if(/^blob\:/i.test(t.src)){var a=new FileReader;a.onload=function(t){r(t.target.result)},o(t.src,function(t){a.readAsArrayBuffer(t)})}else{var s=new XMLHttpRequest;s.onload=function(){200==this.status||0===this.status?r(s.response):e(new Error("Could not load image")),s=null},s.open("GET",t.src,!0),s.responseType="arraybuffer",s.send(null)}else if(window.FileReader&&(t instanceof window.Blob||t instanceof window.File)){var a=new FileReader;a.onload=function(t){p&&t.target.result.byteLength,r(t.target.result)},a.readAsArrayBuffer(t)}}function c(t){var e=new DataView(t);if(p&&t.byteLength,255!=e.getUint8(0)||216!=e.getUint8(1))return!1;for(var r=2,n=t.byteLength;n>r;){if(255!=e.getUint8(r))return p&&e.getUint8(r),!1;if(225==e.getUint8(r+1))return g(e,r+4,e.getUint16(r+2));r+=2+e.getUint16(r+2)}}function u(t){var e=new DataView(t);if(p&&t.byteLength,255!=e.getUint8(0)||216!=e.getUint8(1))return!1;for(var r=2,n=t.byteLength;n>r;){if(function(t,e){return 56===t.getUint8(e)&&66===t.getUint8(e+1)&&73===t.getUint8(e+2)&&77===t.getUint8(e+3)&&4===t.getUint8(e+4)&&4===t.getUint8(e+5)}(e,r)){var a=e.getUint8(r+7);return a%2!=0&&(a+=1),0===a&&(a=4),h(t,r+8+a,e.getUint16(r+6+a))}r++}}function h(t,e,r){for(var n,a,i,o,s=new DataView(t),c={},u=e;e+r>u;)28===s.getUint8(u)&&2===s.getUint8(u+1)&&(o=s.getUint8(u+2))in S&&(i=s.getInt16(u+3),a=S[o],n=d(s,u+5,i),c.hasOwnProperty(a)?c[a]instanceof Array?c[a].push(n):c[a]=[c[a],n]:c[a]=n),u++;return c}function l(t,e,r,n,a){var i,o,s,c=t.getUint16(r,!a),u={};for(s=0;c>s;s++)i=r+12*s+2,o=n[t.getUint16(i,!a)],!o&&p&&t.getUint16(i,!a),u[o]=f(t,i,e,r,a);return u}function f(t,e,r,n,a){var i,o,s,c,u,h,l=t.getUint16(e+2,!a),f=t.getUint32(e+4,!a),g=t.getUint32(e+8,!a)+r;switch(l){case 1:case 7:if(1==f)return t.getUint8(e+8,!a);for(i=f>4?g:e+8,o=[],c=0;f>c;c++)o[c]=t.getUint8(i+c);return o;case 2:return i=f>4?g:e+8,d(t,i,f-1);case 3:if(1==f)return t.getUint16(e+8,!a);for(i=f>2?g:e+8,o=[],c=0;f>c;c++)o[c]=t.getUint16(i+2*c,!a);return o;case 4:if(1==f)return t.getUint32(e+8,!a);for(o=[],c=0;f>c;c++)o[c]=t.getUint32(g+4*c,!a);return o;case 5:if(1==f)return u=t.getUint32(g,!a),h=t.getUint32(g+4,!a),s=new Number(u/h),s.numerator=u,s.denominator=h,s;for(o=[],c=0;f>c;c++)u=t.getUint32(g+8*c,!a),h=t.getUint32(g+4+8*c,!a),o[c]=new Number(u/h),o[c].numerator=u,o[c].denominator=h;return o;case 9:if(1==f)return t.getInt32(e+8,!a);for(o=[],c=0;f>c;c++)o[c]=t.getInt32(g+4*c,!a);return o;case 10:if(1==f)return t.getInt32(g,!a)/t.getInt32(g+4,!a);for(o=[],c=0;f>c;c++)o[c]=t.getInt32(g+8*c,!a)/t.getInt32(g+4+8*c,!a);return o}}function d(t,e,r){var n,a="";for(n=e;e+r>n;n++)a+=String.fromCharCode(t.getUint8(n));return a}function g(t,e){if("Exif"!=d(t,e,4))return p&&d(t,e,4),!1;var r,n,a,i,o,s=e+6;if(18761==t.getUint16(s))r=!1;else{if(19789!=t.getUint16(s))return!1;r=!0}if(42!=t.getUint16(s+2,!r))return!1;var c=t.getUint32(s+4,!r);if(8>c)return p&&t.getUint32(s+4,!r),!1;if(n=l(t,s,s+c,v,r),n.ExifIFDPointer){i=l(t,s,s+n.ExifIFDPointer,w,r);for(a in i){switch(a){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":i[a]=b[a][i[a]];break;case"ExifVersion":case"FlashpixVersion":i[a]=String.fromCharCode(i[a][0],i[a][1],i[a][2],i[a][3]);break;case"ComponentsConfiguration":i[a]=b.Components[i[a][0]]+b.Components[i[a][1]]+b.Components[i[a][2]]+b.Components[i[a][3]]}n[a]=i[a]}}if(n.GPSInfoIFDPointer){o=l(t,s,s+n.GPSInfoIFDPointer,y,r);for(a in o){switch(a){case"GPSVersionID":o[a]=o[a][0]+"."+o[a][1]+"."+o[a][2]+"."+o[a][3]}n[a]=o[a]}}return n}var p=!1,m=function(t){return t instanceof m?t:this instanceof m?void(this.EXIFwrapped=t):new m(t)};void 0!==t&&t.exports&&(e=t.exports=m),e.EXIF=m;var w=m.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},v=m.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},y=m.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},b=m.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}},S={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};m.getData=function(t,e){return!((t instanceof Image||t instanceof HTMLImageElement)&&!t.complete||(r(t)?e&&e.call(t):s(t,e),0))},m.getTag=function(t,e){return r(t)?t.exifdata[e]:void 0},m.getAllTags=function(t){if(!r(t))return{};var e,n=t.exifdata,a={};for(e in n)n.hasOwnProperty(e)&&(a[e]=n[e]);return a},m.pretty=function(t){if(!r(t))return"";var e,n=t.exifdata,a="";for(e in n)n.hasOwnProperty(e)&&(a+="object"==typeof n[e]?n[e]instanceof Number?e+" : "+n[e]+" ["+n[e].numerator+"/"+n[e].denominator+"]\r\n":e+" : ["+n[e].length+" values]\r\n":e+" : "+n[e]+"\r\n");return a},m.readFromBinaryFile=function(t){return c(t)},n=[],void 0!==(a=function(){return m}.apply(e,n))&&(t.exports=a)}).call(this)},function(t,e,r){var n,a;!function(){function r(t){var e=t.naturalWidth;if(e*t.naturalHeight>1048576){var r=document.createElement("canvas");r.width=r.height=1;var n=r.getContext("2d");return n.drawImage(t,1-e,0),0===n.getImageData(0,0,1,1).data[3]}return!1}function i(t,e,r){var n=document.createElement("canvas");n.width=1,n.height=r;var a=n.getContext("2d");a.drawImage(t,0,0);for(var i=a.getImageData(0,0,1,r).data,o=0,s=r,c=r;c>o;)0===i[4*(c-1)+3]?s=c:o=c,c=s+o>>1;var u=c/r;return 0===u?1:u}function o(t,e,r){var n=document.createElement("canvas");return s(t,n,e,r),n.toDataURL("image/jpeg",e.quality||.8)}function s(t,e,n,a){var o=t.naturalWidth,s=t.naturalHeight,u=n.width,h=n.height,l=e.getContext("2d");l.save(),c(e,l,u,h,n.orientation),r(t)&&(o/=2,s/=2);var f=1024,d=document.createElement("canvas");d.width=d.height=f;for(var g=d.getContext("2d"),p=a?i(t,o,s):1,m=Math.ceil(f*u/o),w=Math.ceil(f*h/s/p),v=0,y=0;s>v;){for(var b=0,S=0;o>b;)g.clearRect(0,0,f,f),g.drawImage(t,-b,-v),l.drawImage(d,0,0,f,f,S,y,m,w),b+=f,S+=m;v+=f,y+=w}l.restore(),d=g=null}function c(t,e,r,n,a){switch(a){case 5:case 6:case 7:case 8:t.width=n,t.height=r;break;default:t.width=r,t.height=n}switch(a){case 2:e.translate(r,0),e.scale(-1,1);break;case 3:e.translate(r,n),e.rotate(Math.PI);break;case 4:e.translate(0,n),e.scale(1,-1);break;case 5:e.rotate(.5*Math.PI),e.scale(1,-1);break;case 6:e.rotate(.5*Math.PI),e.translate(0,-n);break;case 7:e.rotate(.5*Math.PI),e.translate(r,-n),e.scale(-1,1);break;case 8:e.rotate(-.5*Math.PI),e.translate(-r,0)}}function u(t){if(window.Blob&&t instanceof Blob){var e=new Image,r=window.URL&&window.URL.createObjectURL?window.URL:window.webkitURL&&window.webkitURL.createObjectURL?window.webkitURL:null;if(!r)throw Error("No createObjectURL function found to create blob url");e.src=r.createObjectURL(t),this.blob=t,t=e}if(!t.naturalWidth&&!t.naturalHeight){var n=this;t.onload=function(){var t=n.imageLoadListeners;if(t){n.imageLoadListeners=null;for(var e=0,r=t.length;r>e;e++)t[e]()}},this.imageLoadListeners=[]}this.srcImage=t}u.prototype.render=function(t,e,r){if(this.imageLoadListeners){var n=this;return void this.imageLoadListeners.push(function(){n.render(t,e,r)})}e=e||{};var a=this.srcImage,i=a.src,c=i.length,u=a.naturalWidth,h=a.naturalHeight,l=e.width,f=e.height,d=e.maxWidth,g=e.maxHeight,p=this.blob&&"image/jpeg"===this.blob.type||0===i.indexOf("data:image/jpeg")||i.indexOf(".jpg")===c-4||i.indexOf(".jpeg")===c-5;l&&!f?f=h*l/u<<0:f&&!l?l=u*f/h<<0:(l=u,f=h),d&&l>d&&(l=d,f=h*l/u<<0),g&&f>g&&(f=g,l=u*f/h<<0);var m={width:l,height:f};for(var w in e)m[w]=e[w];var v=t.tagName.toLowerCase();"img"===v?t.src=o(this.srcImage,m,p):"canvas"===v&&s(this.srcImage,t,m,p),"function"==typeof this.onrender&&this.onrender(t),r&&r()},n=[],void 0!==(a=function(){return u}.apply(e,n))&&(t.exports=a)}()},function(t,e){function r(t){function e(t){for(var e=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],r=0;64>r;r++){var n=I((e[r]*t+50)/100);1>n?n=1:n>255&&(n=255),P[G[r]]=n}for(var a=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],i=0;64>i;i++){var o=I((a[i]*t+50)/100);1>o?o=1:o>255&&(o=255),F[G[i]]=o}for(var s=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],c=0,u=0;8>u;u++)for(var h=0;8>h;h++)A[c]=1/(P[G[c]]*s[u]*s[h]*8),C[c]=1/(F[G[c]]*s[u]*s[h]*8),c++}function r(t,e){for(var r=0,n=0,a=new Array,i=1;16>=i;i++){for(var o=1;o<=t[i];o++)a[e[n]]=[],a[e[n]][0]=r,a[e[n]][1]=i,n++,r++;r*=2}return a}function n(){v=r(N,z),y=r(q,V),b=r(H,W),S=r(X,$)}function a(){for(var t=1,e=2,r=1;15>=r;r++){for(var n=t;e>n;n++)U[32767+n]=r,x[32767+n]=[],x[32767+n][1]=r,x[32767+n][0]=n;for(var a=-(e-1);-t>=a;a++)U[32767+a]=r,x[32767+a]=[],x[32767+a][1]=r,x[32767+a][0]=e-1+a;t<<=1,e<<=1}}function i(){for(var t=0;256>t;t++)B[t]=19595*t,B[t+256>>0]=38470*t,B[t+512>>0]=7471*t+32768,B[t+768>>0]=-11059*t,B[t+1024>>0]=-21709*t,B[t+1280>>0]=32768*t+8421375,B[t+1536>>0]=-27439*t,B[t+1792>>0]=-5329*t}function o(t){for(var e=t[0],r=t[1]-1;r>=0;)e&1<<r&&(L|=1<<_),r--,0>--_&&(255==L?(s(255),s(0)):s(L),_=7,L=0)}function s(t){T.push(j[t])}function c(t){s(t>>8&255),s(255&t)}function u(t,e){var r,n,a,i,o,s,c,u,h,l=0;for(h=0;8>h;++h){r=t[l],n=t[l+1],a=t[l+2],i=t[l+3],o=t[l+4],s=t[l+5],c=t[l+6],u=t[l+7];var f=r+u,d=r-u,g=n+c,p=n-c,m=a+s,w=a-s,v=i+o,y=i-o,b=f+v,S=f-v,D=g+m,I=g-m;t[l]=b+D,t[l+4]=b-D;var P=.707106781*(I+S);t[l+2]=S+P,t[l+6]=S-P,b=y+w,D=w+p,I=p+d;var F=.382683433*(b-I),A=.5411961*b+F,C=1.306562965*I+F,x=.707106781*D,U=d+x,M=d-x;t[l+5]=M+A,t[l+3]=M-A,t[l+1]=U+C,t[l+7]=U-C,l+=8}for(l=0,h=0;8>h;++h){r=t[l],n=t[l+8],a=t[l+16],i=t[l+24],o=t[l+32],s=t[l+40],c=t[l+48],u=t[l+56];var T=r+u,L=r-u,_=n+c,k=n-c,E=a+s,O=a-s,j=i+o,B=i-o,G=T+j,N=T-j,z=_+E,H=_-E;t[l]=G+z,t[l+32]=G-z;var W=.707106781*(H+N);t[l+16]=N+W,t[l+48]=N-W,G=B+O,z=O+k,H=k+L;var q=.382683433*(G-H),V=.5411961*G+q,X=1.306562965*H+q,$=.707106781*z,K=L+$,Q=L-$;t[l+40]=Q+V,t[l+24]=Q-V,t[l+8]=K+X,t[l+56]=K-X,l++}var Y;for(h=0;64>h;++h)Y=t[h]*e[h],R[h]=Y>0?Y+.5|0:Y-.5|0;return R}function h(){c(65504),c(16),s(74),s(70),s(73),s(70),s(0),s(1),s(1),s(0),c(1),c(1),s(0),s(0)}function l(t,e){c(65472),c(17),s(8),c(e),c(t),s(3),s(1),s(17),s(0),s(2),s(17),s(1),s(3),s(17),s(1)}function f(){c(65499),c(132),s(0);for(var t=0;64>t;t++)s(P[t]);s(1);for(var e=0;64>e;e++)s(F[e])}function d(){c(65476),c(418),s(0);for(var t=0;16>t;t++)s(N[t+1]);for(var e=0;11>=e;e++)s(z[e]);s(16);for(var r=0;16>r;r++)s(H[r+1]);for(var n=0;161>=n;n++)s(W[n]);s(1);for(var a=0;16>a;a++)s(q[a+1]);for(var i=0;11>=i;i++)s(V[i]);s(17);for(var o=0;16>o;o++)s(X[o+1]);for(var u=0;161>=u;u++)s($[u])}function g(){c(65498),c(12),s(3),s(1),s(0),s(2),s(17),s(3),s(17),s(0),s(63),s(0)}function p(t,e,r,n,a){for(var i,s=a[0],c=a[240],h=u(t,e),l=0;64>l;++l)M[G[l]]=h[l];var f=M[0]-r;r=M[0],0==f?o(n[0]):(i=32767+f,o(n[U[i]]),o(x[i]));for(var d=63;d>0&&0==M[d];d--);if(0==d)return o(s),r;for(var g,p=1;d>=p;){for(var m=p;0==M[p]&&d>=p;++p);var w=p-m;if(w>=16){g=w>>4;for(var v=1;g>=v;++v)o(c);w&=15}i=32767+M[p],o(a[(w<<4)+U[i]]),o(x[i]),p++}return 63!=d&&o(s),r}function m(){for(var t=String.fromCharCode,e=0;256>e;e++)j[e]=t(e)}function w(t){if(0>=t&&(t=1),t>100&&(t=100),D!=t){var r=0;r=50>t?Math.floor(5e3/t):Math.floor(200-2*t),e(r),D=t}}var v,y,b,S,D,I=(Math.round,Math.floor),P=new Array(64),F=new Array(64),A=new Array(64),C=new Array(64),x=new Array(65535),U=new Array(65535),R=new Array(64),M=new Array(64),T=[],L=0,_=7,k=new Array(64),E=new Array(64),O=new Array(64),j=new Array(256),B=new Array(2048),G=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],N=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],z=[0,1,2,3,4,5,6,7,8,9,10,11],H=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],W=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],q=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],V=[0,1,2,3,4,5,6,7,8,9,10,11],X=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],$=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];this.encode=function(t,e,r){(new Date).getTime(),e&&w(e),T=new Array,L=0,_=7,c(65496),h(),f(),l(t.width,t.height),d(),g();var n=0,a=0,i=0;L=0,_=7,this.encode.displayName="_encode_";for(var s,u,m,D,I,P,F,x,U,R=t.data,M=t.width,j=t.height,G=4*M,N=0;j>N;){for(s=0;G>s;){for(I=G*N+s,P=I,F=-1,x=0,U=0;64>U;U++)x=U>>3,F=4*(7&U),P=I+x*G+F,N+x>=j&&(P-=G*(N+1+x-j)),s+F>=G&&(P-=s+F-G+4),u=R[P++],m=R[P++],D=R[P++],k[U]=(B[u]+B[m+256>>0]+B[D+512>>0]>>16)-128,E[U]=(B[u+768>>0]+B[m+1024>>0]+B[D+1280>>0]>>16)-128,O[U]=(B[u+1280>>0]+B[m+1536>>0]+B[D+1792>>0]>>16)-128;n=p(k,A,n,v,b),a=p(E,C,a,y,S),i=p(O,C,i,y,S),s+=32}N+=8}if(_>=0){var z=[];z[1]=_+1,z[0]=(1<<_+1)-1,o(z)}if(c(65497),r){for(var H=T.length,W=new Uint8Array(H),q=0;H>q;q++)W[q]=T[q].charCodeAt();return T=[],(new Date).getTime(),W}var V="data:image/jpeg;base64,"+btoa(T.join(""));return T=[],(new Date).getTime(),V},function(){(new Date).getTime(),t||(t=50),m(),n(),a(),i(),w(t),(new Date).getTime()}()}t.exports=r},function(t,e,r){function n(t,e){var r=this;if(!t)throw new Error("没有收到图片，可能的解决方案：https://github.com/think2011/localResizeIMG/issues/7");e=e||{},r.defaults={width:null,height:null,fieldName:"file",quality:.7},r.file=t;for(var n in e)e.hasOwnProperty(n)&&(r.defaults[n]=e[n]);return this.init()}function a(t){var e;e=t.split(",")[0].indexOf("base64")>=0?atob(t.split(",")[1]):unescape(t.split(",")[1]);for(var r=t.split(",")[0].split(":")[1].split(";")[0],n=new Uint8Array(e.length),a=0;a<e.length;a++)n[a]=e.charCodeAt(a);return new o.Blob([n.buffer],{type:r})}r.p=function(t){var e=null;return e=[].filter.call(document.scripts,function(t){return-1!==t.src.indexOf("lrz")})[0],e?e.src.substr(0,e.src.lastIndexOf("/")):null}()+"/",window.URL=window.URL||window.webkitURL;var i=r(1),o=r(4),s=r(5),c=function(t){var e=/OS (\d)_.* like Mac OS X/g.exec(t),r=/Android (\d.*?);/g.exec(t)||/Android\/(\d.*?) /g.exec(t);return{oldIOS:!!e&&+e.pop()<8,oldAndroid:!!r&&+r.pop().substr(0,3)<4.5,iOS:/\(i[^;]+;( U;)? CPU.+Mac OS X/.test(t),android:/Android/g.test(t),mQQBrowser:/MQQBrowser/g.test(t)}}(navigator.userAgent);n.prototype.init=function(){var t=this,e=t.file,r="string"==typeof e,n=/^data:/.test(e),s=new Image,c=document.createElement("canvas"),u=r?e:URL.createObjectURL(e);if(t.img=s,t.blob=u,t.canvas=c,t.fileName=r?n?"base64.jpg":e.split("/").pop():e.name,!document.createElement("canvas").getContext)throw new Error("浏览器不支持canvas");return new i(function(r,i){s.onerror=function(){var t=new Error("加载图片文件失败");throw i(t),t},s.onload=function(){t._getBase64().then(function(t){if(t.length<10){var e=new Error("生成base64失败");throw i(e),e}return t}).then(function(n){var i=null;"object"==typeof t.file&&n.length>t.file.size?(i=new FormData,e=t.file):(i=new o.FormData,e=a(n)),i.append(t.defaults.fieldName,e,t.fileName.replace(/\..+/g,".jpg")),r({formData:i,fileLen:+e.size,base64:n,base64Len:n.length,origin:t.file,file:e});for(var s in t)t.hasOwnProperty(s)&&(t[s]=null);URL.revokeObjectURL(t.blob)})},!n&&(s.crossOrigin="*"),s.src=u})},n.prototype._getBase64=function(){var t=this,e=t.img,r=t.file,n=t.canvas;return new i(function(a){try{s.getData("object"==typeof r?r:e,function(){t.orientation=s.getTag(this,"Orientation"),t.resize=t._getResize(),t.ctx=n.getContext("2d"),n.width=t.resize.width,n.height=t.resize.height,t.ctx.fillStyle="#fff",t.ctx.fillRect(0,0,n.width,n.height),c.oldIOS?t._createBase64ForOldIOS().then(a):t._createBase64().then(a)})}catch(t){throw new Error(t)}})},n.prototype._createBase64ForOldIOS=function(){var t=this,e=t.img,n=t.canvas,a=t.defaults,o=t.orientation;return new i(function(t){!function(){var i=[r(6)];(function(r){var i=new r(e);"5678".indexOf(o)>-1?i.render(n,{width:n.height,height:n.width,orientation:o}):i.render(n,{width:n.width,height:n.height,orientation:o}),t(n.toDataURL("image/jpeg",a.quality))}).apply(null,i)}()})},n.prototype._createBase64=function(){var t=this,e=t.resize,n=t.img,a=t.canvas,o=t.ctx,s=t.defaults;switch(t.orientation){case 3:o.rotate(180*Math.PI/180),o.drawImage(n,-e.width,-e.height,e.width,e.height);break;case 6:o.rotate(90*Math.PI/180),o.drawImage(n,0,-e.width,e.height,e.width);break;case 8:o.rotate(270*Math.PI/180),o.drawImage(n,-e.height,0,e.height,e.width);break;case 2:o.translate(e.width,0),o.scale(-1,1),o.drawImage(n,0,0,e.width,e.height);break;case 4:o.translate(e.width,0),o.scale(-1,1),o.rotate(180*Math.PI/180),o.drawImage(n,-e.width,-e.height,e.width,e.height);break;case 5:o.translate(e.width,0),o.scale(-1,1),o.rotate(90*Math.PI/180),o.drawImage(n,0,-e.width,e.height,e.width);break;case 7:o.translate(e.width,0),o.scale(-1,1),o.rotate(270*Math.PI/180),o.drawImage(n,-e.height,0,e.height,e.width);break;default:o.drawImage(n,0,0,e.width,e.height)}return new i(function(t){c.oldAndroid||c.mQQBrowser||!navigator.userAgent?function(){var e=[r(7)];(function(e){var r=new e,n=o.getImageData(0,0,a.width,a.height);t(r.encode(n,100*s.quality))}).apply(null,e)}():t(a.toDataURL("image/jpeg",s.quality))})},n.prototype._getResize=function(){var t=this,e=t.img,r=t.defaults,n=r.width,a=r.height,i=t.orientation,o={width:e.width,height:e.height};if("5678".indexOf(i)>-1&&(o.width=e.height,o.height=e.width),o.width<n||o.height<a)return o;var s=o.width/o.height;for(n&&a?s>=n/a?o.width>n&&(o.width=n,o.height=Math.ceil(n/s)):o.height>a&&(o.height=a,o.width=Math.ceil(a*s)):n?n<o.width&&(o.width=n,o.height=Math.ceil(n/s)):a&&a<o.height&&(o.width=Math.ceil(a*s),o.height=a);o.width>=3264||o.height>=2448;)o.width*=.8,o.height*=.8;return o},window.lrz=function(t,e){return new n(t,e)},window.lrz.version="4.9.40",t.exports=window.lrz}])}()}()},767:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r(768)},768:function(t,e,r){"use strict";var n=r(135),a=r.n(n),i=r(205),o=r.n(i),s=r(206),c=r.n(s),u=r(207),h=r.n(u),l=r(93),f=r.n(l),d=r(35),g=(r.n(d),r(38)),p=(r.n(g),r(53)),m=(r.n(p),r(769)),w=(r.n(m),r(17)),v=r(28),y=r(26),b=r(52),S=(r(68),r(199)),D=r.n(S),I=r(75),P=r.n(I);w.a.use(v.a);var F=Object(b.a)()||{BTN_SURE:"確定",SUBMIT_SUCC:"實名認證資料提交成功，審核時間為1~3個工作日。",PIC_FRONT:"正面照片未選擇",PIC_BACK:"背面照片未選擇",PIC_HAND:"手持照片未選擇",FILE_READER_NO:"抱歉，你的浏覽器不支持 FileReader,請使用谷歌(chrome)或火狐(firefox)浏覽器操作！",PIC_SIZE_MAX:"照片大小不能超過2M，請重新上傳！",PIC_FORMAT_ERROR:"證件圖片支持jpg/jpeg/png格式,暫時還不支持其他格式。",PICK_PIC:"選擇圖片",PIC_FULL:"證件照片需要上傳完整"};new w.a({data:function(){return{status:null,nowStatus:!1,errMesAlert:"",imgs:{baseyi:"/imgs/cert_front.png",baseer:"/imgs/cert_back.png",basesan:"/imgs/cert_handkeey1.png"},postData:{name:"",cardtype:"1",idcard:"",baseyi:"",baseer:"",basesan:""},postDataErr:{name:0,cardtype:0,idcard:0},postDataMsg:{name:"",idcard:"",imgs:""},submitNow:!0,alertype:"",frontFaceStatus:1,backFaceStatus:1,handkeepStatus:1,oldData:{},content:"",createTime:"",failAgain:!1}},created:function(){this.getInfo()},mounted:function(){Object(y.b)(),this.creatTimes()},methods:{getInfo:function(){var t=this;this.$http.post("/Ajax_User/userstatus",{}).then(function(e){var r=e.data,n=e.status,a=e.msg;if(1==n&&""==r)t.status="";else if(1==n&&""!=r){var i=r.status;if(t.status=i,1==i||2==i||3==i){var o=r.name,s=r.idcard,c=r.cardtype,u=r.frontFace,h=r.backFace,l=r.handkeep,d=r.idcardyi;if(t.postData.name=o,t.postData.cardtype=c,t.postData.idcard=s,2==i&&(t.postData.idcard=d,t.createTime=r.created),t.imgs.baseyi=u.replace("./","/"),t.imgs.baseer=h.replace("./","/"),t.imgs.basesan=l.replace("./","/"),t.frontFaceStatus=2,t.backFaceStatus=2,t.handkeepStatus=2,f()(t.oldData,r),3==i){var g=r.content;t.content=g}}}else t.nowStatus=!0,t.errMesAlert=a})},lrzImg:function(t){return new h.a(function(e){D()(t,{width:800,quality:.6}).then(function(t){e(t)}).catch(function(t){})})},uploadFile:function(t){var e=this,r=t.target.files[0],n=t.target.name;r.size,this.lrzImg(r).then(function(t){if(t.base64Len>2097152)return e.nowStatus=!0,e.errMesAlert=F.PIC_SIZE_MAX,!1;var r=t.file.type;if(!r)return e.nowStatus=!0,e.errMesAlert=F.PIC_FORMAT_ERROR,!1;switch(r){case"image/jpg":case"image/jpeg":case"image/png":break;default:return e.nowStatus=!0,e.errMesAlert=F.PIC_FORMAT_ERROR,!1}"frontFace"===n?(e.imgs.baseyi=t.base64,e.frontFaceStatus=2):"backFace"===n?(e.imgs.baseer=t.base64,e.backFaceStatus=2):(e.imgs.basesan=t.base64,e.handkeepStatus=2)})},focusInput:function(t){switch(t){case"name":this.postDataErr.name=1;break;case"idcard":this.postDataErr.idcard=1}},verify:function(t,e){var r=/(^[\u4e00-\u9fa5]{1}[\u4e00-\u9fa5·]{0,98}[\u4e00-\u9fa5]{1}$)|(^[a-zA-Z]{1}[a-zA-Z\s]{0,98}[a-zA-Z]{1}$)/,n=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,a=/^[a-zA-Z\d\-\.]{1,20}$/,i=/^[a-zA-Z\d]{1,30}$/;switch(t){case"name":return this.postData.name&&r.test(this.postData.name)?(this.postDataErr.name=0,!0):this.postData.name&&!r.test(this.postData.name)?(this.postDataErr.name=2,!1):this.postData.name||"blur"!==e?(this.postDataErr.name=5,!1):(this.postDataErr.name=0,!1);case"idcard":if(this.postData.idcard){var o=this.postData.cardtype;return 1==o&&n.test(this.postData.idcard)?(this.postDataErr.idcard=0,!0):2==o&&a.test(this.postData.idcard)?(this.postDataErr.idcard=0,!0):3==o&&i.test(this.postData.idcard)?(this.postDataErr.idcard=0,!0):(this.postDataErr.idcard=2,!1)}this.postData.idcard||"blur"!==e&&"select"!==e?this.postDataErr.idcard=5:this.postDataErr.idcard=0;break;case"baseyi":return!(1==this.frontFaceStatus&&!this.nowStatus&&(this.nowStatus=!0,this.errMesAlert=F.PIC_FULL,1));case"baseer":return!(1==this.backFaceStatus&&!this.nowStatus&&(this.nowStatus=!0,this.errMesAlert=F.PIC_FULL,1));case"basesan":return!(1==this.handkeepStatus&&!this.nowStatus&&(this.nowStatus=!0,this.errMesAlert=F.PIC_FULL,1))}},changesInput:function(t){switch(t){case"name":return this.postData.name!=this.oldData.name;case"cardtype":return this.postData.cardtype!=this.oldData.cardtype;case"idcard":return this.postData.idcard!=this.oldData.idcard}},changesImg:function(t){var e=this.oldData.frontFace.replace("./","/"),r=this.oldData.backFace.replace("./","/"),n=this.oldData.handkeep.replace("./","/");switch(t){case"baseyi":return this.imgs.baseyi!=e;case"baseer":return this.imgs.baseer!=r;case"basesan":return this.imgs.basesan!=n}},picClose:function(t){switch(t){case"frontFace":this.imgs.baseyi="/imgs/cert_front.png",this.frontFaceStatus=1;break;case"backFace":this.imgs.baseer="/imgs/cert_back.png",this.backFaceStatus=1;break;case"handkeep":this.imgs.basesan="/imgs/cert_handkeey1.png",this.handkeepStatus=1}document.getElementsByName(""+t)[0].value=""},submitVerify:function(t){var e=this;return new h.a(function(r){if(f()(e.postData,e.imgs),!t&&e.submitNow)for(var n in e.postData)!1===e.verify(n)&&(e.submitNow=!1);else e.submitNow=!1;r()})},submitChoose:function(t){var e=this;return new h.a(function(r){if(e.submitNow)if(e.submitNow=!1,""!=e.status||e.failAgain)if(1==e.status){t="/Ajax_Auth/mobilephone";var n=!1,a="";for(var i in e.postData)!0===e.changesImg(i)||!0===e.changesInput(i)?n=!0:!1===e.changesImg(i)&&(e.postData[""+i]=""),a+=i+":"+e.postData[i]+",";r({result:n,url:t,str:a})}else""==e.status&&e.failAgain&&(t="/Ajax_Auth/mobilephone",e.ajaxPost(t));else t="/Ajax_Auth/phone",e.ajaxPost(t)}).then(function(t){var r=t.result,n=t.url;t.str,r?e.ajaxPost(n):e.submitNow=!0})},submit:function(t){var e=this;return c()(o.a.mark(function r(){var n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=5;break}return e.status=1,e.failAgain=!0,r.abrupt("return",!1);case 5:return n="",r.next=8,e.submitVerify(t);case 8:return r.next=10,e.submitChoose(n);case 10:case"end":return r.stop()}},r,e)}))()},ajaxPost:function(t){var e=this;this.$http({method:"POST",url:t,data:this.postData,rsa:!1}).then(function(t){var r=(t.data,t.status),n=t.msg;e.submitNow=!0,1==r&&(e.alertype="realinfoSucc"),e.nowStatus=!0,e.errMesAlert=n}).catch(function(r){e.submitNow=!0;var n="";e.postData&&(n=a()(e.postData));var i={};i.reqUrl=t,i.response=r,i.param=n,e.writeDown(i)})},writeDown:function(t){var e=t?this.$jsencrypt(t):"",r={};r["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8",this.$http.post("/ajax_common/reqFailedLog",P.a.stringify(e,{arrayFormat:"brackets"}),{headers:r})},creatTimes:function(t){var e=new Date(1e3*parseInt(t));return e.getFullYear()+"-"+(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+(e.getMinutes()<10?"0"+e.getMinutes()+":":e.getMinutes()+":")+(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds())},alertFn:function(){this.alertype}}}).$mount("#realinfo")},769:function(t,e){}},[767]);
//# sourceMappingURL=user.realinfo.80ab38c25352f6e8.js.map