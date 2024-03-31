"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),g=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=g(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=g(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var g=2;g<i;g++)a[g]=n[g];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var o=n(87462),r=(n(67294),n(3905));const i={id:"logging",title:"Logging while Testing",sidebar_label:"Logging",slug:"logging.html"},a=void 0,l={unversionedId:"framework/logging",id:"version-5.6/framework/logging",title:"Logging while Testing",description:"Sometimes we need to write logging statements to give a little more context when things go wrong.",source:"@site/versioned_docs/version-5.6/framework/logging.md",sourceDirName:"framework",slug:"/framework/logging.html",permalink:"/docs/5.6/framework/logging.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.6/framework/logging.md",tags:[],version:"5.6",frontMatter:{id:"logging",title:"Logging while Testing",sidebar_label:"Logging",slug:"logging.html"}},s={},g=[{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2}],p={toc:g};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sometimes we need to write logging statements to give a little more context when things go wrong.\nIn Kotest we provide the standard logging functions in the scope of each test that one would expect: ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"warn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"debug"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"trace"),".\nEach function accepts an expression that is only executed when the configured logging level or greater is set by config, e.g.: ",(0,r.kt)("inlineCode",{parentName:"p"},'warn { "foo" }')," would be executed if ",(0,r.kt)("inlineCode",{parentName:"p"},"kotest.framework.loglevel=info"),"."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"In order to get logging working you'll need two things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"at least one implementation of ",(0,r.kt)("inlineCode",{parentName:"li"},"LogExtension")," added to extensions in your ",(0,r.kt)("inlineCode",{parentName:"li"},"AbstractProjectConfig")),(0,r.kt)("li",{parentName:"ol"},"a configured value for logLevel added to your ",(0,r.kt)("inlineCode",{parentName:"li"},"AbstractProjectConfig"),", or set using the sysprop or environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"kotest.framework.loglevel"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," the sysprop and environment variable will override the setting in your ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractProjectConfig")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'object ProjectConfig : AbstractProjectConfig() {\n    override val logLevel = LogLevel.Error\n    override fun extensions() = listOf(\n        object : LogExtension {\n            override suspend fun handleLogs(testCase: TestCase, logs: List<LogEntry>) {\n                logs.forEach { println(it.level.name + " - " + it.message) }\n            }\n        }\n    )\n}\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Now you can just log using the aforementioned extension methods on the Kotest ",(0,r.kt)("inlineCode",{parentName:"p"},"TestScope")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'test("test something") {\n  warn { "something weird happened" }\n}\n')),(0,r.kt)("p",null,"Additionally, we provide a logger object to pass around your tests, in the case that you write a test function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'test("test something else") {\n  logger.assertSomething("something else")\n}\n\nfun TestLogger.assertSomething(actual: String) {\n   info { "asserting something about $actual" }\n}\n')))}c.isMDXComponent=!0}}]);