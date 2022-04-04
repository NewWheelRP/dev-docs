"use strict";(self.webpackChunknew_wheel_docs=self.webpackChunknew_wheel_docs||[]).push([[2408],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=i(t),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||c;return t?n.createElement(d,a(a({ref:r},s),{},{components:t})):n.createElement(d,a({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=m;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var i=2;i<c;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6598:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return p}});var n=t(7462),o=t(3366),c=(t(7294),t(3905)),a=["components"],u={},l=void 0,i={unversionedId:"NewWheel/Server/Functions/GetPlayerFromSource",id:"NewWheel/Server/Functions/GetPlayerFromSource",title:"GetPlayerFromSource",description:"GetPlayerFromSource retrieves the Player object from the source",source:"@site/docs/NewWheel/Server/Functions/GetPlayerFromSource.md",sourceDirName:"NewWheel/Server/Functions",slug:"/NewWheel/Server/Functions/GetPlayerFromSource",permalink:"/dev-docs/docs/NewWheel/Server/Functions/GetPlayerFromSource",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/NewWheel/Server/Functions/GetPlayerFromSource.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetLicense",permalink:"/dev-docs/docs/NewWheel/Server/Functions/GetLicense"},next:{title:"OnFirstJoin",permalink:"/dev-docs/docs/NewWheel/Server/Functions/OnFirstJoin"}},s={},p=[{value:"With exports",id:"with-exports",level:2},{value:"Lua",id:"lua",level:3},{value:"JS/TS",id:"jsts",level:3}],m={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"GetPlayerFromSource retrieves the Player object from the source"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"// source: number\n// returns Player\nNW.Functions.GetPlayerFromSource(source);\n")),(0,c.kt)("h2",{id:"with-exports"},"With exports"),(0,c.kt)("h3",{id:"lua"},"Lua"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-lua"},"exports.NewWheel:GetPlayerFromSource(...args)\n")),(0,c.kt)("h3",{id:"jsts"},"JS/TS"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"global.exports.NewWheel.GetPlayerFromSource(...args);\n")))}f.isMDXComponent=!0}}]);