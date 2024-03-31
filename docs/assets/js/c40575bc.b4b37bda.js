"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[55119],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={id:"composed_matchers",title:"Composed Matchers",slug:"composed-matchers.html",sidebar_label:"Composed Matchers"},s=void 0,c={unversionedId:"assertions/composed_matchers",id:"version-5.3/assertions/composed_matchers",title:"Composed Matchers",description:"Composed matchers can be created for any class or interface by composing one or more other matchers along with the property to extract to",source:"@site/versioned_docs/version-5.3/assertions/data_class_matchers.md",sourceDirName:"assertions",slug:"/assertions/composed-matchers.html",permalink:"/docs/5.3/assertions/composed-matchers.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/assertions/data_class_matchers.md",tags:[],version:"5.3",frontMatter:{id:"composed_matchers",title:"Composed Matchers",slug:"composed-matchers.html",sidebar_label:"Composed Matchers"},sidebar:"assertions",previous:{title:"Custom Matchers",permalink:"/docs/5.3/assertions/custom-matchers.html"},next:{title:"Exceptions",permalink:"/docs/5.3/assertions/exceptions.html"}},l={},i=[],p={toc:i};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Composed matchers can be created for any ",(0,a.kt)("inlineCode",{parentName:"p"},"class")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"interface")," by composing one or more other matchers along with the property to extract to\ntest against. This allows us to build up complicated matchers from simpler ones."),(0,a.kt)("p",null,"For example, say we had the following structures:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class Person(\n  val name: String,\n  val age: Int,\n  val address: Address,\n)\n\ndata class Address(\n  val city: String,\n  val street: String,\n  val buildingNumber: String,\n)\n")),(0,a.kt)("p",null,"And our goal is to have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," matcher that checks for people in Warsaw. We can define matchers for each of those\ncomponents like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun nameMatcher(name: String) = Matcher<String> {\n  MatcherResult(\n    value == name,\n    { "Name $value should be $name" },\n    { "Name $value should not be $name" }\n  )\n}\n\nfun ageMatcher(age: Int) = Matcher<Int> {\n  MatcherResult(\n    value == age,\n    { "Age $value should be $age" },\n    { "Age $value should not be $age" }\n  )\n}\n\nval addressMatcher = Matcher<Address> {\n  MatcherResult(\n    value == Address("Warsaw", "Test", "1/1"),\n    { "Address $value should be Test 1/1 Warsaw" },\n    { "Address $value should not be Test 1/1 Warsaw" }\n  )\n}\n')),(0,a.kt)("p",null,"Now we can simply combine these together to make a John in Warsaw matcher. Notice that we specify the property to\nextract to pass to each matcher in turn."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun personMatcher(name: String, age: Int) = Matcher.compose(\n  nameMatcher(name) to Person::name,\n  ageMatcher(age) to Person::age,\n  addressMatcher to Person::address\n)\n")),(0,a.kt)("p",null,"And we could add the extension variant too:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun Person.shouldBePerson(name: String, age: Int) = this shouldBe personMatcher(name, age)\n")),(0,a.kt)("p",null,"Then we invoke like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'Person("John", 21, Address("Warsaw", "Test", "1/1")).shouldBePerson("John", 21)\nPerson("Sam", 22, Address("Chicago", "Test", "1/1")).shouldBePerson("John", 21) // would fail\n')))}m.isMDXComponent=!0}}]);