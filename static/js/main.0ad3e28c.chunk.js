(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,t,a){e.exports={preloader:"Preloader_preloader__1xlgK",loader:"Preloader_loader__1D_oK",spin:"Preloader_spin__2rxD8"}},12:function(e,t,a){e.exports={head:"ProfileInfo_head__141YR",avatar:"ProfileInfo_avatar__1Vxo2",conText:"ProfileInfo_conText__qm3fO",main:"ProfileInfo_main__2_0an",img:"ProfileInfo_img__1Y420",input:"ProfileInfo_input__2hiC7",addImage:"ProfileInfo_addImage__1v5rT",addImg:"ProfileInfo_addImg__3La_r",jobInfo:"ProfileInfo_jobInfo__3VmdI"}},136:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var n=a(36),r=a(4),o={dialog:[{id:1,name:"Mekhri"},{id:2,name:"Madina"},{id:3,name:"Iroda"},{id:4,name:"Alyona"},{id:5,name:"Katya"},{id:6,name:"Feruza"}],message:[{id:1,text:"Hey"},{id:2,text:"How u doin?"},{id:3,text:"Well Im doin just fine..."}]},i=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{message:[].concat(Object(n.a)(e.message),[{id:4,text:t.newMessageBody}])});default:return e}}},142:function(e,t,a){},143:function(e,t,a){e.exports=a.p+"static/media/logo.1f0524e0.png"},144:function(e,t,a){e.exports=a.p+"static/media/sun.5b98826e.png"},145:function(e,t,a){e.exports={preloader:"Render_preloader__2uQqK"}},147:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(15),o=a(17),i=a(16),c=a(0),s=a.n(c),l=a(44),u=a.n(l),m=a(97),p=a(137),f=a(51),d=a(38),h=a(60),g=a.n(h),b=Object(p.a)({form:"login"})((function(e){var t=e.handleSubmit,a=e.error,n=e.captchaUrl;return s.a.createElement("div",{className:u.a.login},s.a.createElement("h1",null,"Login"),s.a.createElement("form",{action:"",onSubmit:t,className:u.a.form},s.a.createElement("div",{className:u.a.input},s.a.createElement(m.a,{type:"text",placeholder:"Login",validate:d.b,name:"email",element:"input",component:f.a})),s.a.createElement("div",{className:u.a.input},s.a.createElement(m.a,{type:"password",placeholder:"Password",validate:d.b,name:"password",element:"input",component:f.a})),s.a.createElement("div",{className:u.a.check},s.a.createElement(m.a,{type:"checkbox",name:"rememberMe",component:"input"})," ",s.a.createElement("p",null,"remember me")),n&&s.a.createElement("img",{src:n}),n&&s.a.createElement("div",{className:u.a.check},s.a.createElement(m.a,{type:"text",placeholder:"Captcha",validate:d.b,name:"captcha",element:"input",component:f.a})),a&&s.a.createElement("div",{className:g.a.form_summary_error},a),s.a.createElement("div",null,s.a.createElement("button",null,"Login"))))})),E=a(11),v=a(31),_=a(10),w=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).onSubmitForm=function(t){e.props.login(t.email,t.password,t.rememberData,t.captcha)},e}return Object(r.a)(a,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(_.a,{to:"/profile"}):s.a.createElement(b,{onSubmit:this.onSubmitForm,captchaUrl:this.props.captchaUrl})}}]),a}(s.a.Component);t.default=Object(E.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:v.c})(w)},174:function(e,t,a){e.exports=a(304)},179:function(e,t,a){},180:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},188:function(e,t,a){e.exports=a.p+"static/media/preload.d932485d.svg"},19:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return s}));var n=a(140),r=n.create({withCredentials:!0,headers:{"API-KEY":"5583a7fb-3e8c-4d0c-924e-60b4f6780534"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),o={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollowUser:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},followUser:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))}},i={setUserProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getProfileStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateProfileStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t)}},c={authMe:function(){return r.get("auth/me")},login:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n})},logout:function(){return r.delete("auth/login")}},s={getCaptcha:function(){return r.get("security/get-captcha-url")}}},20:function(e,t,a){e.exports={navbar:"Nav_navbar__M_8_K",item:"Nav_item__2ILu5",active:"Nav_active__37XM8",img:"Nav_img__1wmAT"}},23:function(e,t,a){e.exports={users:"Users_users__22x6e",wrap:"Users_wrap__1RIiQ",img:"Users_img__1Icxs",user:"Users_user__3ZrW0",info:"Users_info__3qjAF",ns:"Users_ns__2xJXv",location:"Users_location__3GkJF",status:"Users_status__FYyR3",country:"Users_country__2V7ta",disabled:"Users_disabled__2-4If"}},304:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),o=a(72),i=a.n(o),c=(a(179),a(180),a(14)),s=a(15),l=a(17),u=a(16),m=a(11),p=a(10),f=(a(184),function(){return r.a.createElement("div",null,"Here are news!!!!!!!!!")}),d=(a(185),function(){return r.a.createElement("div",null,"Here are settings!!!!!!!!!")}),h=(a(186),function(){return r.a.createElement("div",null,"Here is music!!!!!!!!")}),g=a(23),b=a.n(g),E=a(34),v=a.n(E),_=a(74),w=a(43),O=a(63),j=a.n(O),P=a(99),y=a.n(P),N=function(e){for(var t=Math.ceil(e.totalUserCount/e.pageSize),a=[],o=1;o<=t;o++)a.push(o);var i=Math.ceil(t/e.portionSize),c=Object(n.useState)(1),s=Object(w.a)(c,2),l=s[0],u=s[1],m=(l-1)*e.portionSize+1,p=e.portionSize*l;return r.a.createElement("div",{className:j.a.wrap},r.a.createElement("div",{className:y()(j.a.pagination)},l>1&&r.a.createElement("button",{onClick:function(){return u(l-1)}},"Prev"),a.filter((function(e){return e>=m&&e<=p})).map((function(t){return r.a.createElement("span",{key:t,className:y()(Object(_.a)({},j.a.selectedPage,e.selectedPage===t),j.a.pageNum),onClick:function(a){return e.onPageChange(t)}},t)})),i>l&&r.a.createElement("button",{onClick:function(){return u(l+1)}},"Next")))},S=a(13),x=function(e){e.portionSize,e.pageSize;var t=e.users,a=(e.selectedPage,e.followingInProgress),n=e.unfollow,o=e.follow;e.onPageChange,e.totalUserCount;return r.a.createElement("div",null,r.a.createElement("div",{className:b.a.users},r.a.createElement("div",{className:b.a.user},r.a.createElement(S.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:v.a,alt:"",className:b.a.img})),t.followed?r.a.createElement("button",{disabled:a.some((function(e){return e===t.id})),onClick:function(){n(t.id)},className:b.a.btn},"Unfollow"):r.a.createElement("button",{disabled:a.some((function(e){return e===t.id})),onClick:function(){o(t.id)},className:b.a.btn},"Follow")),r.a.createElement("div",{className:b.a.info},r.a.createElement("div",{className:b.a.ns},r.a.createElement("div",{className:b.a.name},t.name),r.a.createElement("div",{className:b.a.status},t.status)),r.a.createElement("div",{className:"gap"}),r.a.createElement("div",{className:b.a.location},r.a.createElement("div",{className:b.a.city},"users.location.city",","),r.a.createElement("div",{className:b.a.country},"users.location.country")))))},k=(a(188),a(102)),I=a.n(k),C=function(e){return r.a.createElement("div",{className:I.a.preloader},r.a.createElement("div",{className:I.a.loader}))},U=function(e){var t=e.isFetching,a=e.portionSize,n=e.pageSize,o=e.users,i=e.selectedPage,c=e.followingInProgress,s=e.unfollow,l=e.follow,u=e.onPageChange,m=e.totalUserCount;return r.a.createElement("div",null,r.a.createElement(N,{portionSize:a,pageSize:n,onPageChange:u,totalUserCount:m,selectedPage:i}),t?r.a.createElement(C,null):r.a.createElement("div",null,o.map((function(e){return r.a.createElement(x,{users:e,followingInProgress:c,key:e.id,unfollow:s,follow:l})}))))},M=a(9),A=a.n(M),T=a(22),F=a(36),z=a(4),L=a(19),D="webmax-network/users/FOLLOW",H="webmax-network/users/UNFOLLOW",G="webmax-network/users/SET-USER",R="webmax-network/users/SET-PAGE",W="webmax-network/users/SET_TOTAL",J="webmax-network/users/TOGGLE_IS_FETCHING",B="webmax-network/users/FOLLOWING_PROCCESS",K={users:[],pageSize:5,totalUserCount:0,selectedPage:1,isFetching:!1,followingInProgress:[],portionSize:10},V=function(e){return{type:D,userID:e}},X=function(e){return{type:H,userID:e}},q=function(e){return{type:R,selectedPage:e}},Y=function(e){return{type:J,isFetching:e}},Q=function(e,t){return{type:B,isFetching:e,userID:t}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(z.a)(Object(z.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(z.a)(Object(z.a)({},e),{},{followed:!0}):e}))});case H:return Object(z.a)(Object(z.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(z.a)(Object(z.a)({},e),{},{followed:!1}):e}))});case G:return Object(z.a)(Object(z.a)({},e),{},{users:t.users});case R:return Object(z.a)(Object(z.a)({},e),{},{selectedPage:t.selectedPage});case W:return Object(z.a)(Object(z.a)({},e),{},{totalUserCount:t.totalUserCount});case J:return Object(z.a)(Object(z.a)({},e),{},{isFetching:t.isFetching});case B:return Object(z.a)(Object(z.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(F.a)(e.followingInProgress),[t.userID]):e.followingInProgress.filter((function(e){return e!==t.userID}))});default:return e}},$=a(81),ee=a(8),te=a(103),ae=Object(te.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ne=function(e){return e.usersPage.pageSize},re=(Object(te.a)((function(e){return e.usersPage.pageSize.filter((function(e){return!0}))})),function(e){return e.usersPage.totalUserCount}),oe=function(e){return e.usersPage.selectedPage},ie=function(e){return e.usersPage.isFetching},ce=function(e){return e.usersPage.followingInProgress},se=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChange=function(t){var a=e.props.pageSize;e.props.getUsers(t,a)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.selectedPage,a=e.pageSize;this.props.getUsers(t,a)}},{key:"render",value:function(){return r.a.createElement(U,{isFetching:this.props.isFetching,onPageChange:this.onPageChange,totalUserCount:this.props.totalUserCount,pageSize:this.props.pageSize,selectedPage:this.props.selectedPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress,portionSize:this.props.portionSize})}}]),a}(r.a.Component),le=Object(ee.d)(Object(m.b)((function(e){return{users:ae(e),pageSize:ne(e),totalUserCount:re(e),selectedPage:oe(e),isFetching:ie(e),followingInProgress:ce(e),portionSize:e.usersPage.portionSize}}),{follow:function(e){return function(){var t=Object(T.a)(A.a.mark((function t(a){var n,r;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=L.d.followUser.bind(L.d),r=V,a(Q(!0,e)),t.next=5,n(e);case 5:0===t.sent.resultCode&&a(r(e)),a(Q(!1,e));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(T.a)(A.a.mark((function t(a){var n,r;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=L.d.followUser.bind(L.d),r=X,a(Q(!0,e)),t.next=5,n(e);case 5:0===t.sent.resultCode&&a(r(e)),a(Q(!1,e));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:q,setToggleProgress:Q,getUsers:function(e,t){return function(){var a=Object(T.a)(A.a.mark((function a(n){var r;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(q(e)),n(Y(!0)),a.next=4,L.d.getUsers(e,t);case 4:r=a.sent,n(Y(!1)),n((i=r.items,{type:G,users:i})),n((o=r.totalCount,{type:W,totalUserCount:o}));case 8:case"end":return a.stop()}var o,i}),a)})));return function(e){return a.apply(this,arguments)}}()}}))(se),ue=a(12),me=a.n(ue),pe=a(38),fe=(r.a.Component,function(e){var t=Object(n.useState)(!1),a=Object(w.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(e.status),s=Object(w.a)(c,2),l=s[0],u=s[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);return r.a.createElement("div",{className:me.a.status},r.a.createElement("div",null,r.a.createElement("h1",{className:me.a.head},"Status")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"No status",className:me.a.input,onClick:function(){i(!0)},onBlur:function(){i(!1),e.updateStatus(l)},onChange:function(e){u(e.currentTarget.value)},value:l})),r.a.createElement("div",null,o&&r.a.createElement("button",{className:me.a.btn},"Save")),r.a.createElement("br",null))}),de=function(e){var t=Object(n.useState)(!1),a=Object(w.a)(t,2),o=a[0],i=a[1];return e.profile?r.a.createElement("div",null,r.a.createElement("div",{className:me.a.main},r.a.createElement("div",{onMouseEnter:function(){i(!0)},onMouseLeave:function(){i(!1)},className:me.a.avatar},r.a.createElement("img",{src:null!==e.profile.photos&&null===e.profile.photos.large||null===e.profile.photos.small?v.a:e.profile.photos.large,className:me.a.img}),o&&e.isOwner&&r.a.createElement("div",{className:me.a.addImage},r.a.createElement("input",{onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])},type:"file",className:me.a.addImg,value:""}))),r.a.createElement("div",{className:me.a.conText},r.a.createElement("h1",{className:me.a.head},e.profile.fullName),r.a.createElement("div",{className:me.a.profInfo},r.a.createElement("p",null,"Facebook: ",r.a.createElement("a",{href:e.profile.contacts.facebook},e.profile.contacts.facebook?e.profile.contacts.facebook:"-")),r.a.createElement("p",null,"WebSite: ",r.a.createElement("a",{href:null===e.profile.contacts.website?null:e.profile.contacts.website}," ",e.profile.contacts.website?e.profile.contacts.website:"-")),r.a.createElement("p",null,"GitHub: ",r.a.createElement("a",{href:e.profile.contacts.github?e.profile.contacts.github:null},e.profile.contacts.github?e.profile.contacts.github:"-")))),r.a.createElement("div",{className:me.a.jobInfo},r.a.createElement("br",null),r.a.createElement("h1",{className:me.a.head},"Job State"),r.a.createElement("p",null,"Looking For A Job: ",null===e.profile.lookingForAJobDescription?"-":e.profile.lookingForAJobDescription),r.a.createElement(fe,{status:e.status,updateStatus:e.updateStatus})))):r.a.createElement(C,null)},he="webmax-network/profile/SET_USER_PROFILE",ge="webmax-network/profile/ADD_POST",be="webmax-network/profile/SET_STATUS",Ee="webmax-network/profile/DELETE_POST",ve="webmax-network/profile/SET_PHOTO",_e={post:[{item:1,text:"Hi",likes:15},{item:2,text:"How are you?",likes:20},{item:3,text:"Well Im doin just fine",likes:14},{item:4,text:"I lied Im dying inside",likes:5}],profile:null,status:""},we=function(e){return{type:he,profile:e}},Oe=function(e){return{type:be,status:e}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object(z.a)(Object(z.a)({},e),{},{post:[].concat(Object(F.a)(e.post),[{item:5,text:t.newPostText,likes:45}])});case he:return Object(z.a)(Object(z.a)({},e),{},{profile:t.profile});case be:return Object(z.a)(Object(z.a)({},e),{},{status:t.status});case Ee:return Object(z.a)(Object(z.a)({},e),{},{post:e.post.filter((function(e){return e.id!==t.postID}))});case ve:return Object(z.a)(Object(z.a)({},e),{},{profile:Object(z.a)(Object(z.a)({},e.profile),{},{photos:t.photos})});default:return e}},Pe=a(52),ye=a.n(Pe),Ne=a(77),Se=a.n(Ne),xe=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:Se.a.item},e.profile?r.a.createElement("img",{src:null===e.profile.photos.large||null===e.profile.photos.small?v.a:e.profile.photos.large,className:Se.a.img}):r.a.createElement("img",{src:v.a,className:Se.a.img}),r.a.createElement("p",null,e.message)),r.a.createElement("span",null,"Likes: "),e.likes)},ke=a(97),Ie=a(137),Ce=a(51),Ue=r.a.memo((function(e){var t=Object(F.a)(e.post).reverse().map((function(t){return r.a.createElement(xe,{message:t.text,likes:t.likes,profile:e.profile})}));return r.a.createElement("div",{className:ye.a.form},r.a.createElement("div",{className:ye.a.newPost},r.a.createElement("h1",{className:ye.a.head},"My posts"),r.a.createElement(Me,{onSubmit:function(t){e.addPost(t.newPostBody)}})),r.a.createElement("div",{className:ye.a.post},r.a.createElement("p",null,t)))})),Me=(Object(pe.a)(10),Object(Ie.a)({form:"newPostBody"})((function(e){return r.a.createElement("form",{action:"",onSubmit:e.handleSubmit},r.a.createElement(ke.a,{component:Ce.a,name:"newPostBody",element:"textarea",placeholder:"Send news..."}),r.a.createElement("button",{class:ye.a.btn},"Publish"))}))),Ae=Ue,Te=Object(m.b)((function(e){return{post:e.profilePage.post,newPostText:e.profilePage.newPostText,profile:e.profilePage.profile}}),{addPost:function(e){return{type:ge,newPostText:e}}})(Ae),Fe=a(142),ze=a.n(Fe),Le=function(e){return r.a.createElement("div",{className:ze.a.main},r.a.createElement(de,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),r.a.createElement(Te,{profile:e.profile}))},De=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.loggedUserId),this.props.setProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(Le,Object.assign({savePhoto:this.props.savePhoto,isOwner:!this.props.match.params.userId},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(r.a.Component),He=Object(ee.d)(Object(m.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,loggedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{setProfile:function(e){return function(){var t=Object(T.a)(A.a.mark((function t(a){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=a,t.t1=we,t.next=4,L.b.setUserProfile(e);case 4:t.t2=t.sent,t.t3=(0,t.t1)(t.t2),(0,t.t0)(t.t3);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(T.a)(A.a.mark((function t(a){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.b.getProfileStatus(e);case 2:n=t.sent,a(Oe(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(T.a)(A.a.mark((function t(a){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:0===L.b.updateProfileStatus(e).resultCode&&a(Oe(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(T.a)(A.a.mark((function t(a){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.b.savePhoto(e);case 2:0===(n=t.sent).data.resultCode&&a((r=n.data.data.photos,{type:ve,photos:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()}}),p.g,$.a)(De),Ge=a(39),Re=a.n(Ge),We=a(143),Je=a.n(We),Be=function(e){return r.a.createElement("header",{className:Re.a.header},r.a.createElement("img",{src:Je.a,className:Re.a.img})," ",r.a.createElement("h2",{className:Re.a.head},"webMax"),r.a.createElement("h2",{className:Re.a.info},e.isAuth?r.a.createElement("div",{className:Re.a.logged},e.login," ",r.a.createElement("a",{onClick:e.logout,className:Re.a.logout},"Logout")):r.a.createElement(S.b,{to:"/login",className:Re.a.log},"Login")))},Ke=a(31),Ve=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(Be,this.props)}}]),a}(r.a.Component),Xe=Object(m.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setUserData:Ke.e,logout:Ke.d})(Ve),qe=a(20),Ye=a.n(qe),Qe=a(96),Ze=a.n(Qe),$e=a(144),et=a.n($e),tt=function(e){return r.a.createElement("nav",{className:Ye.a.navbar},r.a.createElement("div",{className:Ye.a.item},r.a.createElement(S.b,{to:"/profile",activeClassName:Ye.a.active},"Profile")),r.a.createElement("div",{className:Ye.a.item},r.a.createElement(S.b,{to:"/dialogs",activeClassName:Ye.a.active},"Messages")),r.a.createElement("div",{className:Ye.a.item},r.a.createElement(S.b,{to:"/news",activeClassName:Ye.a.active},"News")),r.a.createElement("div",{className:Ye.a.item},r.a.createElement(S.b,{to:"/music",activeClassName:Ye.a.active},"Music")),r.a.createElement("br",null),r.a.createElement("div",{className:Ye.a.item},r.a.createElement(S.b,{to:"/users",activeClassName:Ye.a.active},"Users")),r.a.createElement("br",null),r.a.createElement("div",{className:Ye.a.item},r.a.createElement(S.b,{to:"/settings",activeClassName:Ye.a.active},"Settings")),r.a.createElement("br",null),r.a.createElement("div",{className:Ye.a.img},r.a.createElement("img",{src:e.nightMode?Ze.a:et.a,alt:"",srcset:"",onClick:e.setMode})))},at={initialized:!1,nightMode:!1},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZE":return Object(z.a)(Object(z.a)({},e),{},{initialized:!0});case"SET_MODE":return Object(z.a)(Object(z.a)({},e),{},{nightMode:!e.nightMode});default:return e}},rt=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(tt,{setMode:this.props.setMode,nightMode:this.props.nightMode})}}]),a}(r.a.Component),ot=Object(m.b)((function(e){return{nightMode:e.app.nightMode}}),{setMode:function(){return{type:"SET_MODE"}}})(rt),it=r.a.lazy((function(){return a.e(3).then(a.bind(null,308))})),ct=r.a.lazy((function(){return Promise.resolve().then(a.bind(null,147))})),st=function(e){return r.a.createElement("div",null,r.a.createElement("canvas",{className:"body "+(!0===e.nightMode?"night":"")}),r.a.createElement("div",{className:"wrapper "+(!0===e.nightMode?"nightMode":"")},r.a.createElement(Xe,null),r.a.createElement(ot,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",render:function(){return r.a.createElement(p.a,{to:"/profile"})}}),r.a.createElement(p.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(He,null)}}),r.a.createElement(p.b,{exact:!0,path:"/dialogs",render:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(C,null)},r.a.createElement(it,null))}}),r.a.createElement(p.b,{path:"/news",render:function(){return r.a.createElement(f,null)}}),r.a.createElement(p.b,{path:"/music",render:function(){return r.a.createElement(h,null)}}),r.a.createElement(p.b,{path:"/users",render:function(){return r.a.createElement(le,null)}}),r.a.createElement(p.b,{path:"/settings",render:function(){return r.a.createElement(d,null)}}),r.a.createElement(p.b,{path:"/login",render:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(C,null)},r.a.createElement(ct,null))}})))))},lt=a(147),ut=a(145),mt=a.n(ut),pt=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(e){alert("Error"),console.error(e)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",(function(e){}))}},{key:"render",value:function(){return this.props.initialized?this.props.isAuth?r.a.createElement(st,this.props):r.a.createElement("div",null,r.a.createElement(p.a,{to:"/login"}),r.a.createElement(p.b,{path:"/login",render:function(){return r.a.createElement(lt.default,null)}})):r.a.createElement("div",{className:mt.a.preloader},r.a.createElement(C,null))}}]),a}(r.a.Component),ft=Object(p.g)(Object(m.b)((function(e){return{isAuth:e.auth.isAuth,props:e.props,initialized:e.app.initialized,nightMode:e.app.nightMode}}),{initializeApp:function(){return function(e){e(Object(Ke.a)()).then((function(){e({type:"SET_INITIALIZE"})}))}}})(pt)),dt=a(136),ht={friends:[{friend:"Mekhri"},{friend:"Madina"},{friend:"Iroda"},{friend:"Alyona"},{friend:"Katya"},{friend:"Feruza"}]},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht;return e},bt=a(146),Et=a(138),vt=Object(ee.c)({messagePage:dt.a,profilePage:je,sidebar:gt,usersPage:Z,auth:Ke.b,form:Et.a,app:nt}),_t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.d,wt=Object(ee.e)(vt,_t(Object(ee.a)(bt.a)));window.__store__=wt;var Ot=wt,jt=function(e){return r.a.createElement(S.a,null,r.a.createElement(m.a,{store:Ot},r.a.createElement(ft,null)))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(jt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t,a){"use strict";a.d(t,"e",(function(){return p})),a.d(t,"a",(function(){return d})),a.d(t,"c",(function(){return h})),a.d(t,"d",(function(){return g}));var n=a(9),r=a.n(n),o=a(22),i=a(4),c=a(19),s=a(46),l="webmax-network/auth/SET_USER_DATA",u="webmax-network/auth/SET_CAPTCHA",m={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},p=function(e,t,a,n){return{type:l,data:{id:e,email:t,login:a,isAuth:n}}},f=function(e){return{type:u,url:e}},d=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n,o,i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.authMe();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,o=n.id,i=n.email,s=n.login,t(p(o,i,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(e,t,a,n){return function(){var i=Object(o.a)(r.a.mark((function o(i){var l,u;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.login(e,t,a,n);case 2:0===(l=r.sent).data.resultCode?i(d()):(10===l.data.resultCode&&i(b()),u=l.data.messages.length>0?l.data.messages[0]:"Wrong password or email",i(Object(s.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),o)})));return function(e){return i.apply(this,arguments)}}()},g=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.logout();case 2:0===e.sent.data.resultCode&&t(p(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.c.getCaptcha();case 2:a=e.sent,n=a.data.url,t(f(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),t.data);case"webmax-network/auth/TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case u:return Object(i.a)(Object(i.a)({},e),{},{captchaUrl:t.url});default:return e}}},34:function(e,t,a){e.exports=a.p+"static/media/user.220a7062.png"},38:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){if(!e)return"Field is requiered!"},r=function(e){return function(t){if(t&&t.length>e)return"Field is more than ".concat(e,"!")}}},39:function(e,t,a){e.exports={header:"Header_header__3O6Lc",head:"Header_head__3-P5i",img:"Header_img__2uaA2",info:"Header_info__3KEVg",log:"Header_log__2xrsM",logout:"Header_logout__1HdsC",logged:"Header_logged__1V003"}},44:function(e,t,a){e.exports={login:"Login_login__3uMtN",form:"Login_form__Ftui6",input:"Login_input__1lpeN",check:"Login_check__2f8pO"}},51:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(148),r=a(0),o=a.n(r),i=a(60),c=a.n(i),s=(a(97),function(e){var t=e.input,a=e.meta,r=Object(n.a)(e,["input","meta"]),i=a.touched&&a.error;return o.a.createElement("div",{className:c.a.formControl+" "+(i?c.a.error:"")},"textarea"===r.element?o.a.createElement("textarea",Object.assign({},t,r)):o.a.createElement("input",Object.assign({},t,r)),i?o.a.createElement("span",null,a.error):null)})},52:function(e,t,a){e.exports={form:"MyPost_form__3VFh0",head:"MyPost_head__m1lGo"}},60:function(e,t,a){e.exports={formControl:"FormsControl_formControl__21wls",error:"FormsControl_error__2md9U",form_summary_error:"FormsControl_form_summary_error__sE6N8"}},63:function(e,t,a){e.exports={wrap:"Paginator_wrap__34E6O",pagination:"Paginator_pagination__34JQm",selectedPage:"Paginator_selectedPage__X2vn5"}},77:function(e,t,a){e.exports={item:"Post_item__220Ei",img:"Post_img__2EEWu"}},81:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(14),r=a(15),o=a(17),i=a(16),c=a(0),s=a.n(c),l=a(10),u=a(11),m=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(o.a)(c,t);var a=Object(i.a)(c);function c(){return Object(n.a)(this,c),a.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(l.a,{to:"/login"})}}]),c}(s.a.Component);return Object(u.b)(m)(t)}},96:function(e,t,a){e.exports=a.p+"static/media/moon.fc29bc18.png"}},[[174,1,2]]]);
//# sourceMappingURL=main.0ad3e28c.chunk.js.map