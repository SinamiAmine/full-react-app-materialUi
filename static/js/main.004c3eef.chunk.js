(this.webpackJsonpcrashcourcematerialui=this.webpackJsonpcrashcourcematerialui||[]).push([[0],{168:function(e,t,n){},169:function(e,t,n){},197:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(15),i=n.n(r),c=(n(168),n(169),n(5)),o=n(4),l=Object(c.a)({sideMenu:{display:"flex",flexDirection:"column",position:"absolute",left:"0px",width:"320px",height:"100%",backgroundColor:"#253053"}})((function(e){var t=e.classes;return Object(o.jsx)("div",{className:t.sideMenu})})),s=n(144),u=n(241),j=n(261),d=n(262),b=n(242),m=n(243),O=n(244),p=n(149),g=n(198),h=n(245),f=n(118),x=n.n(f),v=n(119),y=n.n(v),C=n(120),S=n.n(C),I=n(117),N=n.n(I),k=Object(u.a)((function(e){return{root:{backgroundColor:"#fff"},searchInput:{opacity:"0.6",padding:"0px ".concat(e.spacing(1),"px"),fontSize:"0.8rem","&:hover":{backgroundColor:"#f2f2f2"},"& .MuiSvgIcon-root":{marginRight:e.spacing(1)}}}}));function w(){var e=k();return Object(o.jsx)(b.a,{position:"static",className:e.root,children:Object(o.jsx)(m.a,{children:Object(o.jsxs)(O.a,{container:!0,alignItems:"center",children:[Object(o.jsx)(O.a,{item:!0,children:Object(o.jsx)(p.a,{placeholder:"Search topics",className:e.searchInput,startAdornment:Object(o.jsx)(N.a,{fontSize:"small"})})}),Object(o.jsx)(O.a,{item:!0,sm:!0}),Object(o.jsxs)(O.a,{item:!0,children:[Object(o.jsx)(g.a,{children:Object(o.jsx)(h.a,{badgeContent:4,color:"secondary",children:Object(o.jsx)(x.a,{fontSize:"small"})})}),Object(o.jsx)(g.a,{children:Object(o.jsx)(h.a,{badgeContent:3,color:"primary",children:Object(o.jsx)(y.a,{fontSize:"small"})})}),Object(o.jsx)(g.a,{children:Object(o.jsx)(S.a,{fontSize:"small"})})]})]})})})}var T=n(97),P=n(246),A=n(98),M=Object(u.a)((function(e){return{root:{backgroundColor:"#fdfdff"},pageHeader:{padding:e.spacing(4),display:"flex",marginBottom:e.spacing(2)},pageIcon:{display:"inline-block",padding:e.spacing(2),color:"#3c44b1"},pageTitle:{paddingLeft:e.spacing(4),"& .MuiTypography-subtitle2":{opacity:"0.6"}}}}));function D(e){var t=M(),n=e.title,a=e.subTitle,r=e.icon;return Object(o.jsx)(T.a,{elevation:0,square:!0,className:t.root,children:Object(o.jsxs)("div",{className:t.pageHeader,children:[Object(o.jsx)(P.a,{className:t.pageIcon,children:r}),Object(o.jsxs)("div",{className:t.pageTitle,children:[Object(o.jsx)(A.a,{variant:"h6",component:"div",children:n}),Object(o.jsx)(A.a,{variant:"subtitle2",component:"div",children:a})]})]})})}var B=n(13),E=n(23),z=n(54),F=n(247);var R=n(201),H=n(203),W=n(270),J=n(249),q=n(265);var G=n(202),L=n(207),V=n(271),Y=n(205);var $=n(266);var Z=n(22),K=n(263),Q=n(121);var U=n(252),X=Object(u.a)((function(e){return{root:{margin:e.spacing(.5)},label:{textTransform:"none"}}}));var _=Object(u.a)((function(e){return{root:{minWidth:0,margin:e.spacing(.5)},secondary:{backgroundColor:e.palette.secondary.light,"& .MuiButton-label":{color:e.palette.secondary.main}},primary:{backgroundColor:e.palette.primary.light,"& .MuiButton-label":{color:e.palette.primary.main}}}}));var ee={Input:function(e){var t=e.name,n=e.label,a=e.value,r=e.error,i=void 0===r?null:r,c=e.onChange,l=Object(z.a)(e,["name","label","value","error","onChange"]);return Object(o.jsx)(F.a,Object(B.a)(Object(B.a)({variant:"outlined",label:n,name:t,value:a,onChange:c},l),i&&{error:!0,helperText:i}))},RadioGroup:function(e){var t=e.name,n=e.label,a=e.value,r=e.onChange,i=e.items;return Object(o.jsxs)(R.a,{children:[Object(o.jsx)(H.a,{children:n}),Object(o.jsx)(W.a,{row:!0,name:t,value:a,onChange:r,children:i.map((function(e){return Object(o.jsx)(J.a,{value:e.id,control:Object(o.jsx)(q.a,{}),label:e.title},e.id)}))})]})},Select:function(e){var t=e.name,n=e.label,a=e.value,r=e.error,i=void 0===r?null:r,c=e.onChange,l=e.options;return Object(o.jsxs)(R.a,Object(B.a)(Object(B.a)({variant:"outlined"},i&&{error:!0}),{},{children:[Object(o.jsx)(G.a,{children:n}),Object(o.jsxs)(L.a,{label:n,name:t,value:a,onChange:c,children:[Object(o.jsx)(V.a,{value:"",children:"None"}),l.map((function(e){return Object(o.jsx)(V.a,{value:e.id,children:e.title},e.id)}))]}),i&&Object(o.jsx)(Y.a,{children:i})]}))},Checkbox:function(e){var t=e.name,n=e.label,a=e.value,r=e.onChange;return Object(o.jsx)(R.a,{children:Object(o.jsx)(J.a,{control:Object(o.jsx)($.a,{name:t,color:"primary",checked:a,onChange:function(e){return r(function(e,t){return{target:{name:e,value:t}}}(t,e.target.checked))}}),label:n})})},DatePicker:function(e){var t=e.name,n=e.label,a=e.value,r=e.onChange;return Object(o.jsx)(Z.a,{utils:Q.a,children:Object(o.jsx)(K.a,{disableToolbar:!0,variant:"inline",inputVariant:"outlined",label:n,format:"MMM/dd/yyyy",name:t,value:a,onChange:function(e){return r(function(e,t){return{target:{name:e,value:t}}}(t,e))}})})},Button:function(e){var t=e.text,n=e.size,a=e.color,r=e.variant,i=e.onClick,c=Object(z.a)(e,["text","size","color","variant","onClick"]),l=X();return Object(o.jsx)(U.a,Object(B.a)(Object(B.a)({variant:r||"contained",size:n||"large",color:a||"primary",onClick:i},c),{},{classes:{root:l.root,label:l.label},children:t}))},ActionButton:function(e){var t=e.color,n=e.children,a=e.onClick,r=_();return Object(o.jsx)(U.a,{className:"".concat(r.root," ").concat(r[t]),onClick:a,children:n})}},te=n(61);var ne=Object(u.a)((function(e){return{root:{"& .MuiFormControl-root":{width:"80%",margin:e.spacing(1)}}}}));function ae(e){var t=ne(),n=(e.children,Object(z.a)(e,["children"]));return Object(o.jsx)("form",Object(B.a)(Object(B.a)({className:t.root,autoComplete:"off"},n),{},{children:e.children}))}var re="employees",ie="employeeId";function ce(e){var t=oe();e.id=function(){null==localStorage.getItem(ie)&&localStorage.setItem(ie,"0");var e=parseInt(localStorage.getItem(ie));return localStorage.setItem(ie,(++e).toString()),e}(),t.push(e),localStorage.setItem(re,JSON.stringify(t))}function oe(){null==localStorage.getItem(re)&&localStorage.setItem(re,JSON.stringify([]));var e=JSON.parse(localStorage.getItem(re)),t=[{id:"1",title:"Development"},{id:"2",title:"Marketing"},{id:"3",title:"Accounting"},{id:"4",title:"HR"}];return e.map((function(e){return Object(B.a)(Object(B.a)({},e),{},{department:t[e.departmentId-1].title})}))}var le=[{id:"male",title:"Male"},{id:"female",title:"Female"},{id:"other",title:"Other"}],se={id:0,fullName:"",email:"",mobile:"",city:"",gender:"male",departmentId:"",hireDate:new Date,isPermanent:!1};function ue(e){var t=e.addOrEdit,n=e.recordForEdit,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=Object(B.a)({},s);if("fullName"in e&&(t.fullName=e.fullName?"":"This field is required."),"email"in e&&(t.email=/$^|.+@.+..+/.test(e.email)?"":"Email is not valid."),"mobile"in e&&(t.mobile=e.mobile.length>9?"":"Minimum 10 numbers required."),"departmentId"in e&&(t.departmentId=0!=e.departmentId.length?"":"This field is required."),u(Object(B.a)({},t)),e==c)return Object.values(t).every((function(e){return""==e}))},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0,r=Object(a.useState)(e),i=Object(E.a)(r,2),c=i[0],o=i[1],l=Object(a.useState)({}),s=Object(E.a)(l,2),u=s[0],j=s[1],d=function(e){var a=e.target,r=a.name,i=a.value;o(Object(B.a)(Object(B.a)({},c),{},Object(te.a)({},r,i))),t&&n(Object(te.a)({},r,i))},b=function(){o(e),j({})};return{values:c,setValues:o,errors:u,setErrors:j,handleInputChange:d,resetForm:b}}(se,!0,r),c=i.values,l=i.setValues,s=i.errors,u=i.setErrors,j=i.handleInputChange,d=i.resetForm;return Object(a.useEffect)((function(){null!=n&&l(Object(B.a)({},n))}),[n]),Object(o.jsx)(ae,{onSubmit:function(e){e.preventDefault(),r()&&t(c,d)},children:Object(o.jsxs)(O.a,{container:!0,children:[Object(o.jsxs)(O.a,{item:!0,xs:6,children:[Object(o.jsx)(ee.Input,{name:"fullName",label:"Full Name",value:c.fullName,onChange:j,error:s.fullName}),Object(o.jsx)(ee.Input,{label:"Email",name:"email",value:c.email,onChange:j,error:s.email}),Object(o.jsx)(ee.Input,{label:"Mobile",name:"mobile",value:c.mobile,onChange:j,error:s.mobile}),Object(o.jsx)(ee.Input,{label:"City",name:"city",value:c.city,onChange:j})]}),Object(o.jsxs)(O.a,{item:!0,xs:6,children:[Object(o.jsx)(ee.RadioGroup,{name:"gender",label:"Gender",value:c.gender,onChange:j,items:le}),Object(o.jsx)(ee.Select,{name:"departmentId",label:"Department",value:c.departmentId,onChange:j,options:[{id:"1",title:"Development"},{id:"2",title:"Marketing"},{id:"3",title:"Accounting"},{id:"4",title:"HR"}],error:s.departmentId}),Object(o.jsx)(ee.DatePicker,{name:"hireDate",label:"Hire Date",value:c.hireDate,onChange:j}),Object(o.jsx)(ee.Checkbox,{name:"isPermanent",label:"Permanent Employee",value:c.isPermanent,onChange:j}),Object(o.jsxs)("div",{children:[Object(o.jsx)(ee.Button,{type:"submit",text:"Submit"}),Object(o.jsx)(ee.Button,{text:"Reset",color:"default",onClick:d})]})]})]})})}var je=n(141),de=n.n(je),be=n(253),me=n(260),Oe=n(256),pe=n(257),ge=n(254),he=n(255),fe=n(272),xe=n(267),ve=Object(u.a)((function(e){return{table:{marginTop:e.spacing(3),"& thead th":{fontWeight:"600",color:e.palette.primary.main,backgroundColor:e.palette.primary.light},"& tbody td":{fontWeight:"300"},"& tbody tr:hover":{backgroundColor:"#fffbf2",cursor:"pointer"}}}}));function ye(e,t,n){var r=ve(),i=[5,10,25],c=Object(a.useState)(0),l=Object(E.a)(c,2),s=l[0],u=l[1],j=Object(a.useState)(i[s]),d=Object(E.a)(j,2),b=d[0],m=d[1],O=Object(a.useState)(),p=Object(E.a)(O,2),g=p[0],h=p[1],f=Object(a.useState)(),x=Object(E.a)(f,2),v=x[0],y=x[1],C=function(e,t){u(t)},S=function(e){m(parseInt(e.target.value,10)),u(0)};function I(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}return{TblContainer:function(e){return Object(o.jsx)(ge.a,{className:r.table,children:e.children})},TblHead:function(e){return Object(o.jsx)(he.a,{children:Object(o.jsx)(Oe.a,{children:t.map((function(e){return Object(o.jsx)(pe.a,{sortDirection:v===e.id&&g,children:e.disableSorting?e.label:Object(o.jsx)(fe.a,{active:v===e.id,direction:v===e.id?g:"asc",onClick:function(){var t;t=e.id,h(v===t&&"asc"===g?"desc":"asc"),y(t)},children:e.label})},e.id)}))})})},TblPagination:function(){return Object(o.jsx)(xe.a,{component:"div",page:s,rowsPerPageOptions:i,rowsPerPage:b,count:e.length,onChangePage:C,onChangeRowsPerPage:S})},recordsAfterPagingAndSorting:function(){return function(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}(n.fn(e),function(e,t){return"desc"===e?function(e,n){return I(e,n,t)}:function(e,n){return-I(e,n,t)}}(g,v)).slice(s*b,(s+1)*b)}}}var Ce=n(259),Se=n(142),Ie=n.n(Se),Ne=n(268),ke=n(258),we=n(250),Te=n(78),Pe=n.n(Te),Ae=Object(u.a)((function(e){return{dialogWrapper:{padding:e.spacing(2),position:"absolute",top:e.spacing(5)},dialogTitle:{paddingRight:"0px"}}}));function Me(e){var t=e.title,n=e.children,a=e.openPopup,r=e.setOpenPopup,i=Ae();return Object(o.jsxs)(Ne.a,{open:a,maxWidth:"md",classes:{paper:i.dialogWrapper},children:[Object(o.jsx)(ke.a,{className:i.dialogTitle,children:Object(o.jsxs)("div",{style:{display:"flex"},children:[Object(o.jsx)(A.a,{variant:"h6",component:"div",style:{flexGrow:1},children:t}),Object(o.jsx)(ee.ActionButton,{color:"secondary",onClick:function(){r(!1)},children:Object(o.jsx)(Pe.a,{})})]})}),Object(o.jsx)(we.a,{dividers:!0,children:n})]})}var De=n(143),Be=n.n(De),Ee=n(269),ze=n(264),Fe=Object(u.a)((function(e){return{root:{top:e.spacing(9)}}}));function Re(e){var t=e.notify,n=e.setNotify,a=Fe(),r=function(e,a){"clickaway"!==a&&n(Object(B.a)(Object(B.a)({},t),{},{isOpen:!1}))};return Object(o.jsx)(Ee.a,{className:a.root,open:t.isOpen,autoHideDuration:3e3,anchorOrigin:{vertical:"top",horizontal:"right"},onClose:r,children:Object(o.jsx)(ze.a,{severity:t.type,onClose:r,children:t.message})})}var He=n(251),We=n(140),Je=n.n(We),qe=Object(u.a)((function(e){return{dialog:{padding:e.spacing(2),position:"absolute",top:e.spacing(5)},dialogTitle:{textAlign:"center"},dialogContent:{textAlign:"center"},dialogAction:{justifyContent:"center"},titleIcon:{backgroundColor:e.palette.secondary.light,color:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.light,cursor:"default"},"& .MuiSvgIcon-root":{fontSize:"8rem"}}}}));function Ge(e){var t=e.confirmDialog,n=e.setConfirmDialog,a=qe();return Object(o.jsxs)(Ne.a,{open:t.isOpen,classes:{paper:a.dialog},children:[Object(o.jsx)(ke.a,{className:a.dialogTitle,children:Object(o.jsx)(g.a,{disableRipple:!0,className:a.titleIcon,children:Object(o.jsx)(Je.a,{})})}),Object(o.jsxs)(we.a,{className:a.dialogContent,children:[Object(o.jsx)(A.a,{variant:"h6",children:t.title}),Object(o.jsx)(A.a,{variant:"subtitle2",children:t.subTitle})]}),Object(o.jsxs)(He.a,{className:a.dialogAction,children:[Object(o.jsx)(ee.Button,{text:"No",color:"default",onClick:function(){return n(Object(B.a)(Object(B.a)({},t),{},{isOpen:!1}))}}),Object(o.jsx)(ee.Button,{text:"Yes",color:"secondary",onClick:t.onConfirm})]})]})}var Le=Object(u.a)((function(e){return{pageContent:{margin:e.spacing(5),padding:e.spacing(3)},searchInput:{width:"75%"},newButton:{position:"absolute",right:"10px"}}})),Ve=[{id:"fullName",label:"Employee Name"},{id:"email",label:"Email Address (Personal)"},{id:"mobile",label:"Mobile Number"},{id:"department",label:"Department"},{id:"actions",label:"Actions",disableSorting:!0}];function Ye(){var e=Le(),t=Object(a.useState)(null),n=Object(E.a)(t,2),r=n[0],i=n[1],c=Object(a.useState)(oe()),l=Object(E.a)(c,2),s=l[0],u=l[1],j=Object(a.useState)({fn:function(e){return e}}),d=Object(E.a)(j,2),b=d[0],O=d[1],p=Object(a.useState)(!1),g=Object(E.a)(p,2),h=g[0],f=g[1],x=Object(a.useState)({isOpen:!1,message:"",type:""}),v=Object(E.a)(x,2),y=v[0],C=v[1],S=Object(a.useState)({isOpen:!1,title:"",subTitle:""}),I=Object(E.a)(S,2),N=I[0],k=I[1],w=ye(s,Ve,b),P=w.TblContainer,A=w.TblHead,M=w.TblPagination,z=w.recordsAfterPagingAndSorting,F=function(e){k(Object(B.a)(Object(B.a)({},N),{},{isOpen:!1})),function(e){var t=oe();t=t.filter((function(t){return t.id!=e})),localStorage.setItem(re,JSON.stringify(t))}(e),u(oe()),C({isOpen:!0,message:"Deleted Successfully",type:"error"})};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(D,{title:"New Employee",subTitle:"Form design with validation",icon:Object(o.jsx)(de.a,{fontSize:"large"})}),Object(o.jsxs)(T.a,{className:e.pageContent,children:[Object(o.jsxs)(m.a,{children:[Object(o.jsx)(ee.Input,{label:"Search Employees",className:e.searchInput,InputProps:{startAdornment:Object(o.jsx)(be.a,{position:"start",children:Object(o.jsx)(Ce.a,{})})},onChange:function(e){var t=e.target;O({fn:function(e){return""==t.value?e:e.filter((function(e){return e.fullName.toLowerCase().includes(t.value)}))}})}}),Object(o.jsx)(ee.Button,{text:"Add New",variant:"outlined",startIcon:Object(o.jsx)(Ie.a,{}),className:e.newButton,onClick:function(){f(!0),i(null)}})]}),Object(o.jsxs)(P,{children:[Object(o.jsx)(A,{}),Object(o.jsx)(me.a,{children:z().map((function(e){return Object(o.jsxs)(Oe.a,{children:[Object(o.jsx)(pe.a,{children:e.fullName}),Object(o.jsx)(pe.a,{children:e.email}),Object(o.jsx)(pe.a,{children:e.mobile}),Object(o.jsx)(pe.a,{children:e.department}),Object(o.jsxs)(pe.a,{children:[Object(o.jsx)(ee.ActionButton,{color:"primary",onClick:function(){!function(e){i(e),f(!0)}(e)},children:Object(o.jsx)(Be.a,{fontSize:"small"})}),Object(o.jsx)(ee.ActionButton,{color:"secondary",onClick:function(){k({isOpen:!0,title:"Are you sure to delete this record?",subTitle:"You can't undo this operation",onConfirm:function(){F(e.id)}})},children:Object(o.jsx)(Pe.a,{fontSize:"small"})})]})]},e.id)}))})]}),Object(o.jsx)(M,{})]}),Object(o.jsx)(Me,{title:"Employee Form",openPopup:h,setOpenPopup:f,children:Object(o.jsx)(ue,{recordForEdit:r,addOrEdit:function(e,t){0==e.id?ce(e):function(e){var t=oe(),n=t.findIndex((function(t){return t.id==e.id}));t[n]=Object(B.a)({},e),localStorage.setItem(re,JSON.stringify(t))}(e),t(),i(null),f(!1),u(oe()),C({isOpen:!0,message:"Submitted Successfully",type:"success"})}})}),Object(o.jsx)(Re,{notify:y,setNotify:C}),Object(o.jsx)(Ge,{confirmDialog:N,setConfirmDialog:k})]})}var $e=Object(s.a)({palette:{primary:{main:"#333996",light:"#3c44b126"},secondary:{main:"#f83245",light:"#f8324526"},background:{default:"#f4f5fd"}},overrides:{MuiAppBar:{root:{transform:"translateZ(0)"}}},props:{MuiIconButton:{disableRipple:!0}}}),Ze=Object(u.a)({appMain:{paddingLeft:"320px",width:"100%"}});var Ke=function(){var e=Ze();return Object(o.jsxs)(j.a,{theme:$e,children:[Object(o.jsx)(l,{}),Object(o.jsxs)("div",{className:e.appMain,children:[Object(o.jsx)(w,{}),Object(o.jsx)(Ye,{})]}),Object(o.jsx)(d.a,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(o.jsx)(Ke,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[197,1,2]]]);
//# sourceMappingURL=main.004c3eef.chunk.js.map