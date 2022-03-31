"use strict";(self.webpackChunknew_wheel_docs=self.webpackChunknew_wheel_docs||[]).push([[1361],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(i,".").concat(d)]||p[d]||h[d]||o;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5287:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return h}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],c={},i=void 0,u={unversionedId:"NewWheel/Server/Classes/Character/Methods/getCash",id:"NewWheel/Server/Classes/Character/Methods/getCash",title:"getCash",description:"Returns the amount of cash the character has",source:"@site/docs/NewWheel/Server/Classes/Character/Methods/getCash.md",sourceDirName:"NewWheel/Server/Classes/Character/Methods",slug:"/NewWheel/Server/Classes/Character/Methods/getCash",permalink:"/dev-docs/docs/NewWheel/Server/Classes/Character/Methods/getCash",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/NewWheel/Server/Classes/Character/Methods/getCash.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"getBackStory",permalink:"/dev-docs/docs/NewWheel/Server/Classes/Character/Methods/getBackStory"},next:{title:"getCitizenId",permalink:"/dev-docs/docs/NewWheel/Server/Classes/Character/Methods/getCitizenId"}},l={},h=[],p={toc:h};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns the amount of cash the character has\nThis would be the amount of money items he/she has in their inventory (using ox_inventory)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// returns cash: amount\ncharacter.getCash();\n")))}d.isMDXComponent=!0}}]);