"use strict";(self.webpackChunknew_wheel_docs=self.webpackChunknew_wheel_docs||[]).push([[9948],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(t),f=a,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(h,c(c({ref:r},u),{},{components:t})):n.createElement(h,c({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6021:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],s={},l=void 0,i={unversionedId:"NewWheel/Server/Classes/Player/Methods/getCharacter",id:"NewWheel/Server/Classes/Player/Methods/getCharacter",title:"getCharacter",description:"Gets a character from the player",source:"@site/docs/NewWheel/Server/Classes/Player/Methods/getCharacter.md",sourceDirName:"NewWheel/Server/Classes/Player/Methods",slug:"/NewWheel/Server/Classes/Player/Methods/getCharacter",permalink:"/dev-docs/docs/NewWheel/Server/Classes/Player/Methods/getCharacter",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/NewWheel/Server/Classes/Player/Methods/getCharacter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"deleteCharacter",permalink:"/dev-docs/docs/NewWheel/Server/Classes/Player/Methods/deleteCharacter"},next:{title:"getCurrentCharacter",permalink:"/dev-docs/docs/NewWheel/Server/Classes/Player/Methods/getCurrentCharacter"}},u={},p=[],d={toc:p};function f(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Gets a character from the player"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// citizenId: string\n// returns Character\nplayer.getCharacter(citizenId);\n")))}f.isMDXComponent=!0}}]);