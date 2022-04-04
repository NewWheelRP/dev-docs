"use strict";(self.webpackChunknew_wheel_docs=self.webpackChunknew_wheel_docs||[]).push([[4982],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return v}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(t),v=a,d=f["".concat(i,".").concat(v)]||f[v]||p[v]||o;return t?n.createElement(d,l(l({ref:r},s),{},{components:t})):n.createElement(d,l({ref:r},s))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5051:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return i},default:function(){return v},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],c={},i=void 0,u={unversionedId:"NewWheel/Server/Functions/SavePlayer",id:"NewWheel/Server/Functions/SavePlayer",title:"SavePlayer",description:"Saves a specific player",source:"@site/docs/NewWheel/Server/Functions/SavePlayer.md",sourceDirName:"NewWheel/Server/Functions",slug:"/NewWheel/Server/Functions/SavePlayer",permalink:"/dev-docs/docs/NewWheel/Server/Functions/SavePlayer",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/NewWheel/Server/Functions/SavePlayer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OnFirstJoin",permalink:"/dev-docs/docs/NewWheel/Server/Functions/OnFirstJoin"},next:{title:"SavePlayers",permalink:"/dev-docs/docs/NewWheel/Server/Functions/SavePlayers"}},s={},p=[{value:"With exports",id:"with-exports",level:2},{value:"Lua",id:"lua",level:3},{value:"JS/TS",id:"jsts",level:3}],f={toc:p};function v(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Saves a specific player"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// player: Player | source\n// playerLeft?: boolean - optional\nNW.Functions.SavePlayer(player, playerLeft?);\n")),(0,o.kt)("h2",{id:"with-exports"},"With exports"),(0,o.kt)("h3",{id:"lua"},"Lua"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.NewWheel:SavePlayer(...args)\n")),(0,o.kt)("h3",{id:"jsts"},"JS/TS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"global.exports.NewWheel.SavePlayer(...args);\n")))}v.isMDXComponent=!0}}]);