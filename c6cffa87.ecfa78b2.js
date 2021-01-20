(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(88)),a={id:"guiding-principles",title:"Guiding Principles",slug:"/guiding-principles"},c={unversionedId:"getting-started/guiding-principles",id:"getting-started/guiding-principles",isDocsHomePage:!1,title:"Guiding Principles",description:"Build, Traverse, Manipulate",source:"@site/docs\\getting-started\\guiding-principles.md",slug:"/guiding-principles",permalink:"/dflex/docs/guiding-principles",editUrl:"https://github.com/jalal246/dflex/edit/master/docs/docs/getting-started/guiding-principles.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/dflex/docs/"},next:{title:"Introduction",permalink:"/dflex/docs/dom-gen/introduction"}},l=[],u={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Build, Traverse, Manipulate")),Object(o.b)("p",null,"All packages included backed by DOM Store. Your app knows all registered DOM\npositions and can reach each node without asking the browser to do so."),Object(o.b)("p",null,"When you develop a new element, you register it with the required properties you\nmight need later. The element can be reached in a JSON object."),Object(o.b)("p",null,"No element is being duplicated or cloned. No recursive search for parents.\nEvery element is identified by an ",Object(o.b)("inlineCode",{parentName:"p"},"id")," as a unique key stored in the DOM store."),Object(o.b)("p",null,"All packages work as layers that connect your application API with DOM. Bridge\nto the browser to avoid repaint and re-render for heavy usage."),Object(o.b)("p",null,"Most features can be added during development. If you want to drag horizontally,\nyou don't need to special function to do it. Give you more flexibility and less\nbuggy API."),Object(o.b)("p",null,"Test and documentation are fundamental in this project. Test and documentation\nare fundamental in this project. A native-like API should be sustainable."))}p.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,f=d["".concat(a,".").concat(b)]||d[b]||s[b]||o;return n?i.a.createElement(f,c(c({ref:t},u),{},{components:n})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);