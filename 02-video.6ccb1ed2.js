var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),a=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return c.Date.now()};function p(t,e,n){var o,r,i,u,f,c,a=0,p=!1,m=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,i=r;return o=r=void 0,a=e,u=t.apply(i,n)}function h(t){return a=t,f=setTimeout(T,e),p?g(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||m&&t-a>=i}function T(){var t=d();if(j(t))return w(t);f=setTimeout(T,function(t){var n=e-(t-c);return m?s(n,i-(t-a)):n}(t))}function w(t){return f=void 0,b&&o?g(t):(o=r=void 0,u)}function O(){var t=d(),n=j(t);if(o=arguments,r=this,c=t,n){if(void 0===f)return h(c);if(m)return f=setTimeout(T,e),g(c)}return void 0===f&&(f=setTimeout(T,e)),u}return e=y(e)||0,v(n)&&(p=!!n.leading,i=(m="maxWait"in n)?l(y(n.maxWait)||0,e):i,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=r=f=void 0},O.flush=function(){return void 0===f?u:w(d())},O}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==a.call(t)}(t))return NaN;if(v(t)){var u="function"==typeof t.valueOf?t.valueOf():t;t=v(u)?u+"":u}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var f=o.test(t);return f||r.test(t)?i(t.slice(2),f?2:8):n.test(t)?NaN:+t}const m=document.querySelector("iframe"),b=new Player(m);var g;b.on("timeupdate",_.throttle((function(t){localStorage.setItem("videoplayer-current-time",t.seconds)}),1e3)),g=function(){const t=localStorage.getItem("videoplayer-current-time");return parseInt(t)}(),b.setCurrentTime(g).then((function(t){})).catch((function(t){t.name}));
//# sourceMappingURL=02-video.6ccb1ed2.js.map
