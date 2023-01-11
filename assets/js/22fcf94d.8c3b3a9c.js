"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9611],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=c(r),m=n,f=y["".concat(s,".").concat(m)]||y[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},903:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1},i="Using a central repository",l={unversionedId:"tutorial-extras/create-a-central-repository",id:"tutorial-extras/create-a-central-repository",title:"Using a central repository",description:"An important feature of Text Models is built-in support for Git. Using a central Git repository gives you the following benefits:",source:"@site/docs/tutorial-extras/create-a-central-repository.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/create-a-central-repository",permalink:"/docs/tutorial-extras/create-a-central-repository",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Extras",permalink:"/docs/category/tutorial---extras"},next:{title:"Configure repository settings",permalink:"/docs/tutorial-extras/setting-repository-settings"}},s={},c=[{value:"Create a central repository",id:"create-a-central-repository",level:2},{value:"Clone a repository",id:"clone-a-repository",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-a-central-repository"},"Using a central repository"),(0,n.kt)("p",null,"An important feature of Text Models is built-in support for Git. Using a central Git repository gives you the following benefits:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Collaboration: A central repository makes it easy for multiple developers to work on the same project and collaborate with each other.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Version control: A central repository allows you to track changes to your documentation over time and roll back if necessary.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Backup: A central repository serves as a backup for your documentation, so you don't have to worry about losing your work if something goes wrong with your local machine.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Access control: A central repository can be configured to allow only certain users to access the documentation, which can be useful in a team setting where you want to control who has the ability to make changes.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ease of use: It is generally easier to use a central repository because it eliminates the need for team members to constantly synchronize their local repositories with each other."))),(0,n.kt)("p",null,"Here we'll show you how to create and use a central repository in Text Models."),(0,n.kt)("h2",{id:"create-a-central-repository"},"Create a central repository"),(0,n.kt)("p",null,"Select the menu ",(0,n.kt)("strong",{parentName:"p"},"Repository > New Central Repository"),". The dialog has options to name your project and select a disk location, and more. Select ",(0,n.kt)("strong",{parentName:"p"},"OK")," to create the reposity.  "),(0,n.kt)("img",{src:"/img/new-central-repository.png",width:"45%",alt:"New Repository"}),(0,n.kt)("h2",{id:"clone-a-repository"},"Clone a repository"),(0,n.kt)("p",null,"If a remote repository has been created team members can clone it to a local folder.\nFrom the ",(0,n.kt)("strong",{parentName:"p"},"File > New Project")," menu open the dialog and select ",(0,n.kt)("strong",{parentName:"p"},"Clone a repository"),"."),(0,n.kt)("img",{src:"/img/clone-a-repository.png",width:"55%",alt:"Clone a repository"}),(0,n.kt)("p",null,"In the ",(0,n.kt)("strong",{parentName:"p"},"Clone a repository")," dialog the repository location and the destination folder can be specified. The repository location can both be a URL to an online location (e.g. Github or Azure Repos) or a folder path (e.g. to a shared folder on the local enterprise network). Select ",(0,n.kt)("strong",{parentName:"p"},"Clone")," to create a local copy of the remote repository in the specified folder."))}u.isMDXComponent=!0}}]);