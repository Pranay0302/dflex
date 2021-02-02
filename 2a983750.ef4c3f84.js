(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),l=(n(0),n(93)),o={id:"introduction",title:"Draggable",sidebar_label:"Introduction To Draggable",description:"Draggable component written in pure JS works for Web and Mobile",keywords:["draggable","JavaScript","DOM","dflex"]},i={unversionedId:"draggable/introduction",id:"draggable/introduction",isDocsHomePage:!1,title:"Draggable",description:"Draggable component written in pure JS works for Web and Mobile",source:"@site/docs\\draggable\\intro.md",slug:"/draggable/introduction",permalink:"/dflex/docs/draggable/introduction",editUrl:"https://github.com/jalal246/dflex/edit/master/docs/docs/draggable/intro.md",version:"current",sidebar_label:"Introduction To Draggable",sidebar:"someSidebar",previous:{title:"DOM Store",permalink:"/dflex/docs/dom-store/introduction"},next:{title:"Draggable Live Examples",permalink:"/dflex/docs/draggable/examples"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Features",id:"features",children:[]},{value:"API",id:"api",children:[{value:"Registry",id:"registry",children:[]},{value:"Draggable Instance",id:"draggable-instance",children:[]},{value:"Movement",id:"movement",children:[]},{value:"End Dragging",id:"end-dragging",children:[]},{value:"Add Custom Style",id:"add-custom-style",children:[]}]}],b={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Draggable is a native utility written in pure JS works for Web and Mobile")),Object(l.b)("p",null,"DFlex draggable is the simplest solution to create JavaScript draggable\nelements. No need for a special tutorial and thinking about implementation\ncomplexity or even migration to different technologies for different frameworks.\nIt can be used with any app you have whether it is React, Vue, Angular or Svelte."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install @dflex/draggable\n")),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"https://raw.githubusercontent.com/jalal246/dflex/master/packages/draggable/img/draggable.gif",alt:"show how draggable works"})),Object(l.b)("h2",{id:"features"},"Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"You can add strictly draggable, moving only horizontal or vertical by yourself\nbecause you control dragging coordinations.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"You can control the clickable area, simply because it's a mouse event. Could\nbe on the entire element or a small button of the element. It's up to you.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"You know when the dragging is going to start and end without adding additional API functions.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"It can be nested dragging. Related to a list of elements or just one element It doesn't matter. It is always the same."))),Object(l.b)("h2",{id:"api"},"API"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { store, Draggable } from "@dflex/draggable";\n')),Object(l.b)("h3",{id:"registry"},"Registry"),Object(l.b)("p",null,"Register draggable element in draggable store:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.register({ id: string, element: Node });\n")),Object(l.b)("h3",{id:"draggable-instance"},"Draggable Instance"),Object(l.b)("p",null,"Create draggable instance with ",Object(l.b)("inlineCode",{parentName:"p"},"onmousedown"),"handler"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const draggable = new Draggable(id: string, {x: event.clientX, y: event.clientY});\n")),Object(l.b)("h3",{id:"movement"},"Movement"),Object(l.b)("p",null,"Move the element with ",Object(l.b)("inlineCode",{parentName:"p"},"onmousemove")," handler"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"draggable.dragAt(event.clientX, event.clientY);\n")),Object(l.b)("h3",{id:"end-dragging"},"End Dragging"),Object(l.b)("p",null,"You can end dragging with",Object(l.b)("inlineCode",{parentName:"p"},"onmouseup")," handler"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"draggable.endDragging();\n")),Object(l.b)("h3",{id:"add-custom-style"},"Add Custom Style"),Object(l.b)("p",null,"While you can add style, classes related to drag since you trigger ",Object(l.b)("inlineCode",{parentName:"p"},"dragAt")," and ",Object(l.b)("inlineCode",{parentName:"p"},"endDragging"),".\nYou can also control the few style properties that Draggable use when dragging."),Object(l.b)("p",null,"When create draggable Instance you can use ",Object(l.b)("inlineCode",{parentName:"p"},"draggedStyle: Array<draggedStyleObj>")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"draggedStyleObj: {\n  prop: string;\n  dragValue: string;\n  afterDragValue:? string;\n}\n")),Object(l.b)("p",null,"Default value for ",Object(l.b)("inlineCode",{parentName:"p"},"draggedStyle"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const draggedStyle = [\n  {\n    prop: "zIndex",\n    dragValue: "99",\n    afterDragValue: null,\n  },\n];\n')),Object(l.b)("p",null,"You can change it after creating dragged instance. The following example\nwill change background color ",Object(l.b)("inlineCode",{parentName:"p"},"red")," during the drag and ",Object(l.b)("inlineCode",{parentName:"p"},"purple")," after finish dragging."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'draggable.draggedStyle = [\n  {\n    prop: "zIndex",\n    dragValue: "99",\n    afterDragValue: null,\n  },\n  {\n    prop: "pointerEvents",\n    dragValue: "pointer",\n    afterDragValue: null,\n  },\n  {\n    prop: "background",\n    dragValue: "red",\n    afterDragValue: "purple",\n  },\n];\n')))}d.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),g=d(n),s=a,p=g["".concat(o,".").concat(s)]||g[s]||u[s]||l;return n?r.a.createElement(p,i(i({ref:t},b),{},{components:n})):r.a.createElement(p,i({ref:t},b))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<l;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);