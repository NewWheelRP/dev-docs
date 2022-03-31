"use strict";(self.webpackChunknew_wheel_docs=self.webpackChunknew_wheel_docs||[]).push([[320],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,h=p["".concat(i,".").concat(f)]||p[f]||d[f]||c;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7255:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(7462),a=r(3366),c=(r(7294),r(3905)),o=["components"],s={title:"Static Methods"},i=void 0,l={unversionedId:"NewWheel/Server/Classes/Character/static",id:"NewWheel/Server/Classes/Character/static",title:"Static Methods",description:"Load",source:"@site/docs/NewWheel/Server/Classes/Character/static.md",sourceDirName:"NewWheel/Server/Classes/Character",slug:"/NewWheel/Server/Classes/Character/static",permalink:"/dev-docs/docs/NewWheel/Server/Classes/Character/static",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/NewWheel/Server/Classes/Character/static.md",tags:[],version:"current",frontMatter:{title:"Static Methods"},sidebar:"tutorialSidebar",previous:{title:"setSex",permalink:"/dev-docs/docs/NewWheel/Server/Classes/Character/Methods/setSex"},next:{title:"Character Types",permalink:"/dev-docs/docs/NewWheel/Server/Classes/Character/types"}},u={},d=[{value:"Load",id:"load",level:3},{value:"New",id:"new",level:3}],p={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h3",{id:"load"},"Load"),(0,c.kt)("p",null,"The load method is used to convert a data object retrieved from the database to a new Character instance"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"// source: number\n// license: string\n// data: CharacterDBObject\n// returns: Character\nCharacter.Load(source, license, data);\n")),(0,c.kt)("h3",{id:"new"},"New"),(0,c.kt)("p",null,"the new method is used to create a new Character instance, one that didn't exist in a database before."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"// source: number\n// license: string\n// data: CharacterNewObject\n// returns: Character\nCharacter.New(source, license, data);\n")))}f.isMDXComponent=!0}}]);