(function(e){function t(t){for(var r,o,l=t[0],u=t[1],i=t[2],p=0,f=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(f.length)f.shift()();return s.push.apply(s,i||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,l=1;l<a.length;l++){var u=a[l];0!==n[u]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},s=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var c=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("h1",[e._v(" Create Database & User Guide ")]),a("div",[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",[e._v("USER NAME")]),a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:""}},[a("b-input",{attrs:{placeholder:"Please fill Project Name"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1)],1),a("div",{staticClass:"form-group"},[a("label",[e._v("PASSWORD")]),a("b-form-input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Please fill your Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("div",{staticClass:"form-group"},[a("label",[e._v("DATABASE NAME")]),a("b-form-input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Please fill your Database name"},model:{value:e.databaseName,callback:function(t){e.databaseName=t},expression:"databaseName"}})],1)])])]),a("b-card",{staticClass:"mt-3",attrs:{header:"Data Result"}},[a("pre",{staticClass:"m-0"},[e._v("            CREATE USER '"+e._s(e.userName)+"'@'%' IDENTIFIED BY '"+e._s(e.password)+"';\n            -- Create Database\n            CREATE DATABASE "+e._s(e.databaseName)+" CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\n            -- Add Permission\n            GRANT ALL PRIVILEGES ON "+e._s(e.databaseName)+".* TO '"+e._s(e.userName)+"'@'%';\n            -- Reset Privileges\n            FLUSH PRIVILEGES;\n        ")])])],1)},s=[],o={data:function(){return{userName:"",password:"",databaseName:""}}},l=o,u=(a("034f"),a("2877")),i=Object(u["a"])(l,n,s,!1,null,null,null),c=i.exports,p=(a("f9e3"),a("2dd8"),a("5f5b"));r["default"].use(p["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.0d86fd0e.js.map