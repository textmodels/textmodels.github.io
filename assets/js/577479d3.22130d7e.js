"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4858],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||g[m]||i;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9351:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1},s="Processes for quality: let the models work for you",o={unversionedId:"tutorial-process/process",id:"tutorial-process/process",title:"Processes for quality: let the models work for you",description:"Having learnt the basics of Text Models, we can automate a large part of the manual work in a custom business process. In this example we'll create a simple Risk Management Process based on a few templates. The configuration is simple and fully costumizable, and will when finished guide the user through decision making, and automatically generate a Risk Management Log according to the user's preferences.",source:"@site/docs/tutorial-process/process.md",sourceDirName:"tutorial-process",slug:"/tutorial-process/process",permalink:"/docs/tutorial-process/process",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Processes",permalink:"/docs/category/tutorial---processes"},next:{title:"Tutorial - Versioning",permalink:"/docs/category/tutorial---versioning"}},l={},p=[{value:"Create a process file",id:"create-a-process-file",level:2},{value:"Select states",id:"select-states",level:3},{value:"Add transitions",id:"add-transitions",level:3},{value:"Select start state",id:"select-start-state",level:3},{value:"Configure state transitions",id:"configure-state-transitions",level:3},{value:"Add list as process log",id:"add-list-as-process-log",level:3},{value:"Configure the list",id:"configure-the-list",level:3},{value:"Using the process",id:"using-the-process",level:3}],c={toc:p};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"processes-for-quality-let-the-models-work-for-you"},"Processes for quality: let the models work for you"),(0,r.kt)("p",null,"Having learnt the basics of Text Models, we can automate a large part of the manual work in a custom business process. In this example we'll create a simple Risk Management Process based on a few templates. The configuration is simple and fully costumizable, and will when finished guide the user through decision making, and automatically generate a Risk Management Log according to the user's preferences. "),(0,r.kt)("p",null,"In Text Models a process is configured using a ",(0,r.kt)("strong",{parentName:"p"},"Process")," file. The process file contains the following paragraphs:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"States"),": A paragraph that lists the templates for all the different states in the process.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Transitions"),": A paragraph that lists the different triggers that allow a transition to go from one state to another, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Go To"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Continue With")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Reject And Go To")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept And Go To"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Start State"),": A paragraph that simply states the starting state of the process.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Configurations"),": This paragraph lists all the possible transitions from state to state. Each transition is listed in the form ",(0,r.kt)("inlineCode",{parentName:"p"},"[BEGINNING STATE] -> TRANSITION -> [TARGET STATE]"),"."))),(0,r.kt)("h2",{id:"create-a-process-file"},"Create a process file"),(0,r.kt)("p",null,"Right-click the project tree in the ",(0,r.kt)("strong",{parentName:"p"},"Contents")," pane and select ",(0,r.kt)("strong",{parentName:"p"},"New > Process"),". Name the file ",(0,r.kt)("inlineCode",{parentName:"p"},"Risk Management Process"),". Double-click the file to open the file in a new pane."),(0,r.kt)("img",{src:"/img/add-process.png",width:"100%",alt:"Paragraphs",style:{margin:"30px 0"}}),(0,r.kt)("p",null," The ",(0,r.kt)("inlineCode",{parentName:"p"},"Risk Management Process")," file shows the paragraphs that will form the process definition. "),(0,r.kt)("img",{src:"/img/risk-management-process.png",width:"100%",alt:"Paragraphs",style:{margin:"30px 0"}}),(0,r.kt)("h3",{id:"select-states"},"Select states"),(0,r.kt)("p",null,"Select the ",(0,r.kt)("strong",{parentName:"p"},"Add Template")," button in the ",(0,r.kt)("inlineCode",{parentName:"p"},"States")," paragraph to open the dialog for selecting process state templates."),(0,r.kt)("img",{src:"/img/risk-management-add-templates.png",width:"100%",alt:"Paragraphs",style:{margin:"30px 0"}}),(0,r.kt)("p",null,"For this example, four templates have been prepared; ",(0,r.kt)("inlineCode",{parentName:"p"},"Risk Assesment"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Risk Identifaction"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Risk Mitigation")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Risk Monitoring and Review"),". Add the templates one by one (if your project doesn't include templates, close the dialog and create them as described in the instructions for creating templates). "),(0,r.kt)("img",{src:"/img/select-risk-management-templates.png",width:"450",alt:"Paragraphs",style:{margin:"30px 0"}}),(0,r.kt)("h3",{id:"add-transitions"},"Add transitions"),(0,r.kt)("p",null,"To create a transition select the ",(0,r.kt)("strong",{parentName:"p"},"Add Transition")," button and enter ",(0,r.kt)("inlineCode",{parentName:"p"},"Continue With")," in the text box. If a process has choices, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Reject"),", those choices are added here."),(0,r.kt)("img",{src:"/img/risk-management-add-transitions.png",width:"100%",alt:"Paragraphs",style:{margin:"30px 0"}}),(0,r.kt)("h3",{id:"select-start-state"},"Select start state"),(0,r.kt)("p",null,"The start state is the first state to run in the process. Select the drop-down box in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Start State")," paragraph."),(0,r.kt)("img",{src:"/img/risk-management-add-start-state.png",width:"100%",alt:"Calculation paragraph",style:{margin:"30px 0"}}),(0,r.kt)("p",null,"The drop-down list is populated with the available states in the process. For the ",(0,r.kt)("inlineCode",{parentName:"p"},"Risk Management Process")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"Risk Identification")," state is selected as start state."),(0,r.kt)("img",{src:"/img/risk-management-add-start-state-2.png",width:"100%",alt:"Calculation paragraph",style:{margin:"30px 0"}}),(0,r.kt)("h3",{id:"configure-state-transitions"},"Configure state transitions"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Configurations")," paragraph all possible transitions between states are listed. Select the ",(0,r.kt)("strong",{parentName:"p"},"Add Configuration")," button to open the ",(0,r.kt)("strong",{parentName:"p"},"Configure Process")," dialog."),(0,r.kt)("img",{src:"/img/configure-process-1.png",width:"350",alt:"Paragraphs",style:{margin:"30px 0"}}),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},"Beginning State"),", ",(0,r.kt)("strong",{parentName:"p"},"Transition")," and ",(0,r.kt)("strong",{parentName:"p"},"Target State")," in the dialog for each state transition in the process."),(0,r.kt)("img",{src:"/img/configure-process-2.png",width:"350",alt:"Paragraphs",style:{margin:"30px 0"}}),(0,r.kt)("p",null," For the ",(0,r.kt)("inlineCode",{parentName:"p"},"Risk Management Process")," the transitions cycles between the states as shown in the figure, including a configuration looping from the last state to the start state such that the process can be repeated."),(0,r.kt)("img",{src:"/img/risk-management-add-configuration-2.png",width:"100%",alt:"Reference paragraph",style:{margin:"30px 0"}}),(0,r.kt)("h3",{id:"add-list-as-process-log"},"Add list as process log"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Process")," file defines how the process shall execute. A ",(0,r.kt)("strong",{parentName:"p"},"List")," shall be created to log the records generated when using the process. Each row in the list will be referring to a file which is the record for a process step. Create a list in the project file tree and name it ",(0,r.kt)("inlineCode",{parentName:"p"},"Risk Management Log"),"."),(0,r.kt)("img",{src:"/img/add-risk-management-log.png",width:"100%",alt:"Paragraphs",style:{margin:"30px 0"}}),(0,r.kt)("p",null,"As the process progresses a file will be created as record for the steps taken. Create a folder in the ",(0,r.kt)("strong",{parentName:"p"},"Contents")," pane to hold the records and name the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"Risk Management Minutes"),".  "),(0,r.kt)("h3",{id:"configure-the-list"},"Configure the list"),(0,r.kt)("p",null,"Double-click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Risk Management Log")," file in the Contents pane. This will open the list in a new pane. Select the ",(0,r.kt)("strong",{parentName:"p"},"Configure List")," button in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Risk Management Log")," pane. "),(0,r.kt)("img",{src:"/img/risk-management-configure-list.png",width:"400",alt:"Paragraphs",style:{margin:"30px 0"}}),(0,r.kt)("p",null,"As ",(0,r.kt)("strong",{parentName:"p"},"Text Model Folder")," select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Risk Management Minutes")," folder previously created. As template definition select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Risk Management Process")," file.  "),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},"Next")," to continue."),(0,r.kt)("img",{src:"/img/configure-list-dialog-process.png",width:"450",alt:"Configure list",style:{margin:"30px 0"}}),(0,r.kt)("p",null,"Add a column with ",(0,r.kt)("inlineCode",{parentName:"p"},"Title")," as column header. In the ",(0,r.kt)("strong",{parentName:"p"},"Cell Value")," ComboBox add ",(0,r.kt)("inlineCode",{parentName:"p"},"{Title} [{FileName}]"),". This will include the unique file name to the title attribute. Also add a column with header ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," and cell value ",(0,r.kt)("inlineCode",{parentName:"p"},"{Date}"),". Select ",(0,r.kt)("strong",{parentName:"p"},"OK")," to close the dialog."),(0,r.kt)("img",{src:"/img/configure-list-dialog-process-2.png",width:"500",alt:"Paragraphs",style:{margin:"30px 0"}}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Risk Management Process")," list is now ready to create and log all records in the risk management process."),(0,r.kt)("h3",{id:"using-the-process"},"Using the process"),(0,r.kt)("p",null,"To create the first record in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Risk Management Process")," select the ",(0,r.kt)("strong",{parentName:"p"},"Next Process State")," button. "),(0,r.kt)("img",{src:"/img/next-process-state.png",width:"500",alt:"Paragraphs",style:{margin:"30px 0"}}),(0,r.kt)("p",null,"When selected, a list of available transitions appear. The first possible transition is ",(0,r.kt)("inlineCode",{parentName:"p"},"Start Risk Identification"),"."),(0,r.kt)("img",{src:"/img/next-process-state.png",width:"500",alt:"Paragraphs",style:{margin:"30px 0"}}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Next Process State")," button will show a list of possible transitions according to the current state of the process."),(0,r.kt)("img",{src:"/img/risk-management-log-next-step.png",width:"100%",alt:"Paragraphs",style:{margin:"30px 0"}}))}g.isMDXComponent=!0}}]);