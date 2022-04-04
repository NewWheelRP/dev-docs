"use strict";(self.webpackChunknew_wheel_docs=self.webpackChunknew_wheel_docs||[]).push([[9531],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||c;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,s=new Array(c);s[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<c;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2791:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),s=["components"],a={},i=void 0,u={unversionedId:"NewWheel/Server/Functions/GetLicense",id:"NewWheel/Server/Functions/GetLicense",title:"GetLicense",description:"GetLicense gets the source's rockstar license",source:"@site/docs/NewWheel/Server/Functions/GetLicense.md",sourceDirName:"NewWheel/Server/Functions",slug:"/NewWheel/Server/Functions/GetLicense",permalink:"/dev-docs/docs/NewWheel/Server/Functions/GetLicense",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/NewWheel/Server/Functions/GetLicense.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Player Types",permalink:"/dev-docs/docs/NewWheel/Server/Classes/Player/types"},next:{title:"GetPlayerFromSource",permalink:"/dev-docs/docs/NewWheel/Server/Functions/GetPlayerFromSource"}},l={},p=[{value:"With exports",id:"with-exports",level:2},{value:"Lua",id:"lua",level:3},{value:"JS/TS",id:"jsts",level:3}],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"GetLicense gets the source's rockstar license"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"// source: number\n// returns the source's rockstar license\nNW.Functions.GetLicense(source);\n")),(0,c.kt)("h2",{id:"with-exports"},"With exports"),(0,c.kt)("h3",{id:"lua"},"Lua"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-lua"},"exports.NewWheel:GetLicense(...args)\n")),(0,c.kt)("h3",{id:"jsts"},"JS/TS"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"global.exports.NewWheel.GetLicense(...args);\n")))}d.isMDXComponent=!0}}]);