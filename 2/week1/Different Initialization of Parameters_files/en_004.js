(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"/W3X":function(module,e,t){"use strict";t.r(e),t.d(e,"ProgrammingLabLearner",function(){return g});var n=t("lSNA"),r=t.n(n),a=t("VbXa"),o=t.n(a),i=t("DXTi"),s=t.n(i),c=t("MnCE"),l=t("sQ/U"),u=t("q3BH"),p=t("rerG"),d=t("8cuT"),f=t.n(d),m=t("1Yy9"),h=t("yIOc"),v=t("6vGN");function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var g=function(e){function ProgrammingLabLearner(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={launchUrl:void 0,isErrorModalShowing:!1,devTargetHost:void 0,workspaceId:""},t.handleCloseErrorModal=function(){t.setState({isErrorModalShowing:!1})},t.setDevTargetHost=function(e){t.setState({devTargetHost:e})},t.refreshLaunchUrl=function(e,n,r,a){var o=t.props,i=o.courseId,s=o.params.itemId,c=o.location;t.setState({launchUrl:""}),e&&t.setState({devTargetHost:e});var l=e||t.state.devTargetHost;return l?p.f(i,s).then(function(e){var o=e.launchUrl,i=e.workspaceId;return p.i(i).then(function(e){var s=Object(v.a)(o,_objectSpread(_objectSpread(_objectSpread({},c.query),n),{},{token:e},r),l,i);a?window.location.href=s:t.setState({launchUrl:s,workspaceId:i})}).catch(function(){t.setState({isErrorModalShowing:!0})}),e}).catch(function(){t.setState({isErrorModalShowing:!0})}):p.f(i,s).then(function(e){var o=e.launchUrl,i=e.workspaceId,s=Object(v.a)(o,_objectSpread(_objectSpread(_objectSpread({},c.query),n),r));return a?window.location.href=s:t.setState({launchUrl:s,workspaceId:i}),e}).catch(function(){t.setState({isErrorModalShowing:!0})})},t}var t;return o()(ProgrammingLabLearner,e),ProgrammingLabLearner.prototype.render=function render(){var e=this.state,t=e.launchUrl,n=e.isErrorModalShowing,r=e.workspaceId,a=this.props,o=a.params.itemId,i=a.courseId;return s.a.createElement("div",null,s.a.createElement(m.a,{launchUrl:t,launchRole:"learner",itemId:o,courseId:i,refreshLaunchUrl:this.refreshLaunchUrl,workspaceId:r}),n&&s.a.createElement(h.a,{handleClose:this.handleCloseErrorModal}))},ProgrammingLabLearner}(s.a.Component);e.default=Object(c.compose)(f()(["CourseStore"],function(e){var t;return{courseId:e.CourseStore.getCourseId()}}),u.a.createTrackedContainer(function(e){return{namespace:{app:"labs_iframe",page:"learner_lab"},userId:l.a.get().id,courseId:e.courseId,itemId:e.params.itemId,userAgent:navigator.userAgent}}))(g)},"/hAQ":function(module,e,t){"use strict";t.d(e,"b",function(){return m}),t.d(e,"a",function(){return w});var n=t("wiyT"),r=t.n(n),a=t("DnuM"),o=t("BDKN"),i=t.n(o),s=t("7t8k"),c=t("6vGN"),l=Object(a.a)("/api/authoringWorkspaceTemplates.v1/",{type:"rest"}),u=Object(a.a)("/api/authoringInstructorWorkspaces.v1/",{type:"rest"}),p=Object(a.a)("/api/workspacePublishStates.v1/",{type:"rest"}),d="id,name,description,courseId,volumes",f=function createWorkspace(e){var t=new i.a,n={name:e.name,description:e.description,mountPaths:Object(s.a)(e.mountPoints),courseId:e.courseId,imageName:e.imageName};return r()(l.post(t.toString(),{data:n})).then(function(e){return e.elements[0]},function(e){throw e&&e.responseJSON})},m=function extendSession(e){var t=(new i.a).addQueryParam("action","extend").addQueryParam("id",e);return r()(u.post(t.toString()))},h=function updateWorkspace(e,t){var n=new i.a(e),a={name:t.name,description:t.description,mountPaths:Object(s.a)(t.mountPoints)};return r()(l.patch(n.toString(),{data:a})).then(function(e){return e.elements[0]},function(e){throw e&&e.responseJSON})},v=function saveWorkspace(e){return e.id?h(e.id,e):f(e)},g=function getWorkspaceById(e){var t=new i.a(e).addQueryParam("fields",d);return r()(l.get(t.toString())).then(function(e){return e.elements[0]},function(e){throw e&&e.responseJSON})},b=function getWorkspaceLauncher(e){var t=(new i.a).addQueryParam("action","launch").addQueryParam("id",e);return r()(u.post(t.toString())).then(function(e){return e})},S=function getWorkspaceLaunchUrl(e){return b(e).then(function(e){return Object(c.a)(e.launchUrl,{isIframe:!1})})},E=function publishWorkspace(e){var t=(new i.a).addQueryParam("action","publish").addQueryParam("id",e);return r()(l.post(t.toString()))},y=function startAsyncPublishWorkspace(e){var t=(new i.a).addQueryParam("action","asyncPublish").addQueryParam("id",e);return r()(l.post(t.toString()))},w=function checkStatus(e){var t=new i.a(e);return r()(p.get(t.toString()))},C=function deleteWorkspace(e){var t=new i.a(e);return r()(l.delete(t.toString()))},x=function removeWorkspaceFromCourse(e,t){var n=(new i.a).addQueryParam("action","removeFromCourse").addQueryParam("id",e).addQueryParam("courseId",t);return r()(l.post(n.toString()))}},"/roK":function(module,exports,e){var t=e("cLK8"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},"1YBB":function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pt":true,"ru":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},"1Yy9":function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a=t("DXTi"),o=t.n(a),i=t("8WNh"),s=t("XbdE"),c=t("rerG"),l=t("/hAQ"),u=t("SYi4"),p=t.n(u),d=t("RLX4"),f=t("56d0"),m=t("O0S5"),h=t("SHyo"),v=t("uhOI"),g=t("wiyT"),b=t.n(g),S=6e4,E=36e5,y=3e5,w=6e3,C=6e5,x=function(e){function ProgrammingLab(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={activeNotification:"none",activeModal:"none",expiresAt:(new Date).getTime()+6*E,reopenApiStatus:v.a,extendApiStatus:v.a,hasExtendModalBeenDismissed:!1,isSessionExpired:!1,devTargetHost:void 0,isPollingEnabled:!1},t.setDevTargetHost=function(e){t.setState({devTargetHost:e})},t.updateExpiresAt=function(){var e=t.props,n=e.courseId,r=e.itemId,a=e.launchRole,o=e.workspaceId;if("learner"===a&&n&&r)return c.b(n,r).then(function(e){if(e.elements&&e.elements[0]){var n=e.elements[0].expiresAt;t.setState({expiresAt:n})}});if("instructor"===a&&o)return Object(g.Promise)(function(e,t){t({message:"Instructor cannot retrieve expiresAt time. This time will be updated upon extending the session."})});return Object(g.Promise)(function(e,t){t({message:"Unsupported launch role"})})},t.checkForTimeout=function(){var e=(new Date).getTime(),n=t.state.expiresAt-e;n<=0?t.setState({activeModal:"sessionEnd",isSessionExpired:!0}):n<y&&!t.state.hasExtendModalBeenDismissed&&t.setState({activeModal:"extend"})},t.extendSession=function(){var e=t.props,n=e.courseId,r=e.itemId,a=e.launchRole,o=e.workspaceId;t.setState({extendApiStatus:v.c}),r&&n?c.a(n,r).then(function(e){t.setState({expiresAt:e,extendApiStatus:v.a,activeNotification:"sessionExtended",hasExtendModalBeenDismissed:!1,activeModal:"none"}),setTimeout(function(){return t.setState({activeNotification:"none"})},4e3)}).catch(function(){t.setState({extendApiStatus:v.a})}):"instructor"===a&&o&&l.b(o).then(function(e){t.setState({expiresAt:e,extendApiStatus:v.a,activeNotification:"sessionExtended",hasExtendModalBeenDismissed:!1,activeModal:"none"}),setTimeout(function(){return t.setState({activeNotification:"none"})},4e3)}).catch(function(){t.setState({extendApiStatus:v.a})})},t.forceRefresh=function(){return t.props.refreshLaunchUrl(void 0,{forceRefresh:!0}).then(function(e){e&&(t.setState({expiresAt:e.expiresAt,activeNotification:"labUpdated"}),setTimeout(function(){return t.setState({activeNotification:"none"})},4e3)),t.closeModals()})},t.restartContainer=function(){return t.props.refreshLaunchUrl(void 0,{isRestart:!0}).then(function(e){e&&(t.setState({expiresAt:e.expiresAt,activeNotification:"serverRebooted"}),setTimeout(function(){return t.setState({activeNotification:"none"})},4e3)),t.closeModals()})},t.reopen=function(){t.setState({reopenApiStatus:v.c}),t.props.refreshLaunchUrl(void 0,{forceRefresh:!1}).then(function(e){e&&t.setState({expiresAt:e.expiresAt}),t.setState({reopenApiStatus:v.a,hasExtendModalBeenDismissed:!1,isSessionExpired:!1}),t.closeModals()}).catch(function(){t.setState({reopenApiStatus:v.a})})},t.closeExtendModal=function(){t.setState({hasExtendModalBeenDismissed:!0}),t.closeModals()},t.closeModals=function(){t.setState({activeModal:"none"})},t.openHelpModal=function(){t.setState({activeModal:"help"})},t}r()(ProgrammingLab,e);var t=ProgrammingLab.prototype;return t.componentDidMount=function componentDidMount(){var e=this;this.props.refreshLaunchUrl().then(function(t){t&&e.setState({expiresAt:t.expiresAt})}),setTimeout(function(){return e.setState({isPollingEnabled:!0})},6e4)},t.render=function render(){var e=this.state,t=e.activeModal,n=e.reopenApiStatus,r=e.extendApiStatus,a=e.activeNotification,c=e.expiresAt,l=e.isSessionExpired,u=e.devTargetHost,p=e.isPollingEnabled,v=this.props,g=v.launchRole,b=v.launchUrl,S=v.workspaceId,E=v.refreshLaunchUrl;return o.a.createElement("div",{className:"rc-ProgrammingLab"},o.a.createElement(s.b,{interval:6e3,onInterval:this.checkForTimeout,isEnabled:!l}),o.a.createElement(s.b,{interval:6e5,onInterval:this.updateExpiresAt,isEnabled:!l&&p}),o.a.createElement(f.a,{activeNotification:a,openHelpModal:this.openHelpModal}),b?o.a.createElement("iframe",{className:"c-iframe",title:"lab",src:b}):o.a.createElement(i.a,null),"extend"===t&&o.a.createElement(d.a,{extendSession:this.extendSession,closeModalHandler:this.closeExtendModal,apiStatus:r}),"help"===t&&o.a.createElement(m.a,{closeModalHandler:this.closeModals,getNewVersion:this.forceRefresh,restartContainer:this.restartContainer,workspaceId:S,launchUrl:b,refreshLaunchUrl:E,devTargetHost:u,setDevTargetHost:this.setDevTargetHost,updateExpiresAt:this.updateExpiresAt,expiresAt:c,launchRole:g}),"sessionEnd"===t&&o.a.createElement(h.a,{reopen:this.reopen,reopenStatus:n}))},ProgrammingLab}(o.a.Component);e.a=x},"2eUB":function(module,exports,e){var t=e("aqz2"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},"56d0":function(module,e,t){"use strict";t.d(e,"a",function(){return v});var n=t("VbXa"),r=t.n(n),a=t("DXTi"),o=t.n(a),i=t("vUL0"),s=t("CsdX"),c=t("IqPN"),l=t("BxDD"),u=t("pNJH"),p=t("BFIc"),d=t.n(p),f=t("6gca"),m=t.n(f),h=function getTranslation(e){var t;return{sessionExtended:m()("Your session has extended"),labUpdated:m()("Retrieved latest files. Any existing files are not updated."),serverRebooted:m()("Your server has been rebooted successfully")}[e]||""},v=function(e){function ProgrammingHeader(){return e.apply(this,arguments)||this}var t;return r()(ProgrammingHeader,e),ProgrammingHeader.prototype.render=function render(){var e=this.props,t=e.activeNotification,n=e.openHelpModal;return o.a.createElement("div",null,o.a.createElement("div",{className:"rc-ProgrammingHeader jupyter-container"},o.a.createElement(i.a,{className:"c-CourseraLogo",hexColorCode:s.b.primary}),"none"!==t&&o.a.createElement(c.a,{message:h(t),type:"success",style:{minHeight:"35px",height:"35px",width:"fit-content",margin:"auto 0"}}),o.a.createElement(l.a,{label:"Lab Help",isChildrenOnRight:!0,type:"icon",onClick:n,style:{padding:0}})),o.a.createElement(u.a,null))},ProgrammingHeader}(o.a.Component),g=v},"5LIc":function(module,exports,e){},"6gca":function(module,exports,e){var t=e("x/Cz"),n=t.default?t.default:{},r,a=(0,e("HdzH").default)(n);a.getLocale=function(){return"en"},module.exports=a},"6vGN":function(module,e,t){"use strict";t.d(e,"a",function(){return a});var n=function handleLaunchUrlParamOverride(e,t){return void 0!==t?t:"true"===e||"false"!==e&&void 0},r=function constructLaunchUrlParams(e,t){var r=new URLSearchParams(e&&new URL(e).search);for(var a in t){var o=n(r.get(a),null==t?void 0:t[a]);void 0===o?r.delete(a):r.set(a,String(o))}return r},a=function constructLaunchUrl(e,t,n,a){var o=r(e,t);if(n&&a)return"https://"+n+"/connect/"+a+"?"+o.toString();var i=e.split("?")[0],s=o.toString();return s?i.concat("?",s):i}},"7LoW":function(module,exports,e){},"7t8k":function(module,e,t){"use strict";t.d(e,"a",function(){return c});var n=t("YVeV"),r=t.n(n),a=function mountPathValidationError(e,t,n){if(""===e||"/"===e||!/\/[^\0]+/.test(e))return r()("Must begin with /, and not equal /");if("/"===e.slice(-1))return r()("Please exclude terminating /");if(t&&n){if(n.filter(function(e){return e.id!==t}).map(function(e){return e.path}).includes(e))return r()("Mount path already in use");var a=n.find(function(n){return n.id!==t&&(null==n?void 0:n.oldPath)===e});if(a)return r()("Mount path already in use by: ")+a.path}return""},o=function showTerminatingSlash(e){if(!e)return"";return"/"===e[e.length-1]?e:e+"/"},i=function mountPointsValid(e){return void 0===e.find(function(t){return""!==a(t.path,t.id,e)})},s=function volumesToMountpoints(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).map(function(e){return{id:Math.floor(1e8*Math.random())+"",path:e}})},c=function mountPointsToMountPaths(e){var t={};return e.forEach(function(e){e.delete?t[e.oldPath||e.path]={typeName:"deleteMountPath",definition:{}}:e.isNew||!e.oldPath||e.oldPath===e.path||a(e.path)?a(e.path)||(t[e.path]={typeName:"addFilesToMountPath",definition:e.file?{files:{assetId:e.file}}:{}}):t[e.oldPath]={typeName:"renameMountPath",definition:{newName:e.path}}}),t}},BFIc:function(module,exports,e){var t=e("YF/K"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},O0S5:function(module,e,t){"use strict";t.d(e,"a",function(){return x});var n=t("VbXa"),r=t.n(n),a=t("DXTi"),o=t.n(a),i=t("+2ZD"),s=t("pNJH"),c=t("m10x"),l=t("AWZ4"),u=t("XBa+"),p=t("2eUB"),d=t.n(p),f=t("6gca"),m=t.n(f),h=t("9A5E"),v=t("kvW3"),g=t("WLgL"),b=t("uZaC"),S=t("uhOI"),E=t("R04S"),y=t("6vGN"),w=t("TNBA"),C=t("gRVs"),x=function(e){function HelpModal(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={devTargetHost:"",getNewVersionApiStatus:S.a,isGetNewVersionConfirmationShowing:!1,isRebootServerConfirmationShowing:!1,rebootServerApiStatus:S.a,updateExpiresAtApiStatus:S.a},t.handleContentPathKeyDown=function(e){var n=e.currentTarget.value,r=t.state.devTargetHost;"Enter"===e.key&&t.props.refreshLaunchUrl(t.parseHostname(r),{},n?{path:n}:{})},t.handleTargetHostChange=function(e){var n=e.currentTarget.value,r=t.parseHostname(n);t.setState({devTargetHost:n}),t.props.setDevTargetHost(r)},t.handleTargetHostKeyDown=function(e){var n=e.currentTarget.value,r=t.parseHostname(n);"Enter"===e.key&&t.props.refreshLaunchUrl(r)},t.getNewVersion=function(){t.setState({getNewVersionApiStatus:S.c}),t.props.getNewVersion()},t.updateExpiresAt=function(){t.setState({updateExpiresAtApiStatus:S.c}),t.props.updateExpiresAt().then(function(){t.setState({updateExpiresAtApiStatus:S.a})}).catch(function(){t.setState({updateExpiresAtApiStatus:S.b}),setTimeout(function(){t.setState({updateExpiresAtApiStatus:S.a})},5e3)})},t.rebootServer=function(){t.setState({rebootServerApiStatus:S.c}),t.props.restartContainer()},t.showConfirmGetNewVersion=function(){t.setState({isGetNewVersionConfirmationShowing:!0,isRebootServerConfirmationShowing:!1})},t.hideConfirmRebootServer=function(){t.setState({isRebootServerConfirmationShowing:!1})},t.hideConfirmGetNewVersion=function(){t.setState({isGetNewVersionConfirmationShowing:!1})},t.showConfirmRebootServer=function(){t.setState({isRebootServerConfirmationShowing:!0,isGetNewVersionConfirmationShowing:!1})},t.switchToOldExperience=function(e){var n=t.props.refreshLaunchUrl,r=t.state.devTargetHost;e.preventDefault(),n(t.parseHostname(r),{isIframe:!1},{},!0)},t}r()(HelpModal,e);var t=HelpModal.prototype;return t.parseHostname=function parseHostname(e){return e.startsWith("dev")?"hub.".concat(e,".dev-coursera-apps.org"):e},t.render=function render(){var e=this.props,t=e.closeModalHandler,n=e.devTargetHost,r=e.expiresAt,a=e.launchRole,p=e.launchUrl,d=e.workspaceId,f=this.state,x=f.getNewVersionApiStatus,P=f.isGetNewVersionConfirmationShowing,I=f.isRebootServerConfirmationShowing,N=f.updateExpiresAtApiStatus,T=f.rebootServerApiStatus;return o.a.createElement(i.a,{modalName:"helpModal",className:"rc-HelpModal",handleClose:t,type:"side"},o.a.createElement("div",null,o.a.createElement("h2",null,m()("Lab Help")),o.a.createElement(s.a,null),o.a.createElement("div",{className:"c-HelpModalContent"},o.a.createElement(c.g,null,m()("Update lab with latest version")),o.a.createElement("p",null,m()("This can be used to pull a new version or to start over. It will not override your existing files. Before updating, save your files, then move them into a new folder or rename them."))),P?o.a.createElement("div",{className:"c-HelpConfirmationStatus "+(x===S.c?"c-HelpConfirmationStatusInProgress":"c-HelpConfirmationStatusBeforeSend")},o.a.createElement("div",{className:"c-HelpModalContent"},o.a.createElement("p",null,m()("Are you sure? Any unsaved progress will be lost.")),o.a.createElement(l.b,{label:m()("Cancel"),type:"secondary",onClick:this.hideConfirmGetNewVersion,disabled:x===S.c,size:"sm"}),o.a.createElement(u.a,{apiStatusAttributesConfig:{label:{API_BEFORE_SEND:m()("Update lab"),API_IN_PROGRESS:m()("Updating...")}},apiStatus:x,onClick:this.getNewVersion,size:"sm",type:"primary"}))):o.a.createElement("div",{className:"c-HelpModalContent"},o.a.createElement(l.b,{label:m()("Get latest version"),type:"primary",onClick:this.showConfirmGetNewVersion,size:"sm"}),o.a.createElement(s.a,null)),o.a.createElement("div",{className:"c-HelpModalContent"},o.a.createElement(c.g,null,m()("Reboot Server")," "),o.a.createElement("p",null,m()("Please save your progress before rebooting the server."))),I?o.a.createElement("div",{className:"c-HelpConfirmationStatus "+(T===S.c?"c-HelpConfirmationStatusInProgress":"c-HelpConfirmationStatusBeforeSend")},o.a.createElement("div",{className:"c-HelpModalContent"},o.a.createElement("p",null,m()("Are you sure? Any unsaved progress will be lost.")),o.a.createElement(l.b,{label:m()("Cancel"),type:"secondary",onClick:this.hideConfirmRebootServer,disabled:T===S.c}),o.a.createElement(u.a,{apiStatusAttributesConfig:{label:{API_BEFORE_SEND:m()("Reboot"),API_IN_PROGRESS:m()("Rebooting...")}},apiStatus:T,onClick:this.rebootServer,size:"sm",type:"primary"}))):o.a.createElement("div",{className:"c-HelpModalContent"},o.a.createElement(l.b,{label:m()("Reboot"),type:"primary",size:"sm",onClick:this.showConfirmRebootServer}),o.a.createElement(s.a,null)),o.a.createElement("div",{className:"c-HelpModalContent"},o.a.createElement(c.g,null,m()("Having more issues?")),o.a.createElement("p",null,o.a.createElement(v.b,{message:m()("You can find more troubleshooting steps in {learnerHelpCenter}, or {switchBack}."),learnerHelpCenter:o.a.createElement(b.a,{linkText:m()("Learner Help Center"),articleId:"360042817371"}),switchBack:o.a.createElement(h.a,{trackingName:"switch_back",data:{labId:d},onClick:this.switchToOldExperience,href:Object(y.a)(p||"https://hub.coursera-apps.org/connect/".concat(d),{isIframe:!1},this.parseHostname(this.state.devTargetHost))},m()("switch back to the old lab experience"))})),o.a.createElement(c.g,null,m()("Lab ID")),o.a.createElement(C.a,{item:d})),Object(E.a)()&&o.a.createElement("div",{className:"c-HelpModalContent"},o.a.createElement(s.a,null),o.a.createElement("div",null,o.a.createElement(c.g,null,"Target Host")," (internal only)"),o.a.createElement("input",{className:"target-host",placeholder:"dev2",defaultValue:n,onChange:this.handleTargetHostChange,onKeyDown:this.handleTargetHostKeyDown}),o.a.createElement("div",null,o.a.createElement(c.g,null,"Go To Content Path")," (beta)"),o.a.createElement("input",{className:"content-path",placeholder:"/",onKeyDown:this.handleContentPathKeyDown}),o.a.createElement(c.g,null,"Session Expires At (internal only)"),o.a.createElement("div",null,Object(g.r)(r)),a!==w.a.INSTRUCTOR&&o.a.createElement(u.a,{type:"primary",size:"zero",apiStatus:N,onClick:this.updateExpiresAt,label:"Refresh Expires At"}))))},HelpModal}(o.a.Component),P=x},R04S:function(module,e,t){"use strict";t.d(e,"b",function(){return f}),t.d(e,"a",function(){return m});var n=t("o0o1"),r=t.n(n),a=t("yXPU"),o=t.n(a),i=t("KMW/"),s=t("rerG"),c=function isOnInternetExplorer(){var e;if(-1!==navigator.userAgent.toLowerCase().indexOf("msie "))return!0;return!1},l=function(){var e=o()(r.a.mark(function _callee(e,t){var n,a,o,i;return r.a.wrap(function _callee$(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(s.f)(e,t);case 3:if(!(n=r.sent).launchUrl){r.next=7;break}return r.next=7,fetch(n.launchUrl,{credentials:"include"});case 7:if(!n.workspaceId){r.next=12;break}return r.next=10,Object(s.c)(n.workspaceId);case 10:return i=r.sent,r.abrupt("return","boolean"==typeof(null===(a=i.elements)||void 0===a?void 0:null===(o=a[0])||void 0===o?void 0:o.isHealthy));case 12:return r.abrupt("return",!1);case 15:return r.prev=15,r.t0=r.catch(0),r.abrupt("return",!1);case 18:case"end":return r.stop()}},_callee,null,[[0,15]])}));return function isThirdPartyCookiesEnabled(t,n){return e.apply(this,arguments)}}(),u=function isIframeLabsEnabledForUser(){return i.a.get("Workspaces","isIframeLabsEnabledForUser")},p=function isIframeLabsDisabledForCourse(e){var t;return(i.a.get("Workspaces","iframeLabsDisabledCourseIds")||[]).includes(e)},d=function isIframeLabsEnabledForCourse(e){var t;return(i.a.get("Workspaces","iframeLabsEnabledCourseIds")||[]).includes(e)},f=function(){var e=o()(r.a.mark(function _callee2(e,t){return r.a.wrap(function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=c()||e&&p(e),n.t0){n.next=8;break}if(n.t1=e&&t,!n.t1){n.next=7;break}return n.next=6,l(e,t);case 6:n.t1=!n.sent;case 7:n.t0=n.t1;case 8:if(!n.t0){n.next=12;break}return n.abrupt("return",!1);case 12:if(!e||!d(e)){n.next=16;break}return n.abrupt("return",!0);case 16:return n.abrupt("return",u());case 17:case"end":return n.stop()}},_callee2)}));return function isIframeLabsEnabled(t,n){return e.apply(this,arguments)}}(),m=function isDevTargetHostEnabled(){return i.a.get("Workspaces","isDevTargetHostEnabled")}},RLX4:function(module,e,t){"use strict";t.d(e,"a",function(){return u});var n=t("DXTi"),r=t.n(n),a=t("+2ZD"),o=t("XBa+"),i=t("RvuL"),s=t.n(i),c=t("6gca"),l=t.n(c),u=function ExtendModal(e){var t=e.extendSession,n=e.closeModalHandler,i=e.apiStatus;return r.a.createElement("div",null,r.a.createElement(a.a,{modalName:"extendModal",className:"rc-ExtendModal",handleClose:n},r.a.createElement("div",null,r.a.createElement("h2",null,l()("Need more time to finish your lab?")),r.a.createElement("p",null,l()("If you need more time with your lab, extend your session. Any changes made after timeout will not be saved.")),r.a.createElement(o.a,{type:"primary",label:l()("Extend"),apiStatus:i,onClick:t,style:{float:"right"}}))))}},RvuL:function(module,exports,e){var t=e("7LoW"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},SHyo:function(module,e,t){"use strict";t.d(e,"a",function(){return u});var n=t("DXTi"),r=t.n(n),a=t("+2ZD"),o=t("XBa+"),i=t("/roK"),s=t.n(i),c=t("6gca"),l=t.n(c),u=function SessionEndModal(e){var t=e.reopen,n=e.reopenStatus;return r.a.createElement("div",null,r.a.createElement(a.a,{modalName:"sessionEndModal",className:"rc-SessionEndModal",allowClose:!1},r.a.createElement("div",null,r.a.createElement("h2",null,l()("Your lab session has timed out")),r.a.createElement("p",null,l()("If you’d like to continue working, reopen the lab.")),r.a.createElement(o.a,{type:"primary",label:l()("Reopen"),apiStatus:n,onClick:t,style:{float:"right"}}))))}},SYi4:function(module,exports,e){var t=e("e92w"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},TNBA:function(module,e,t){"use strict";t.d(e,"a",function(){return n});var n={LEARNER:"learner",INSTRUCTOR:"instructor"}},XbdE:function(module,e,t){"use strict";t.d(e,"a",function(){return c});var n=t("VbXa"),r=t.n(n),a=t("DXTi"),o=t.n(a),i=t("plNT"),s=0,c=function(e){function Poller(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={isRunning:!1},t.onInterval=function(){var e=t.props.onInterval;return e?Promise.resolve(e()):Promise.resolve()},t.start=function(){t.setState({isRunning:!0},t.run)},t.stop=function(){t.clearTimeout(),t.setState({isRunning:!1})},t.run=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=t.props,r=n.interval,a=n.isEnabled,o=t.state.isRunning,i=e||a&&o;if(t.clearTimeout(),!i||!t.mounted)return;var s=function runNext(){a&&o&&t.mounted&&(t.clearTimeout(),t.timeoutId=window.setTimeout(t.run,r))};t.onInterval().then(s,s)},t.mounted=!1,t.pollerRef={},t.timeoutId=s,t}r()(Poller,e);var t=Poller.prototype;return t.componentDidMount=function componentDidMount(){var e=this.props,t=e.autoStart,n=e.pollerRef;this.mounted=!0,this.pollerRef.current={start:this.start,stop:this.stop,run:this.run},n&&(n.current=this.pollerRef.current),t&&this.start()},t.componentDidUpdate=function componentDidUpdate(e){var t=this.props,n=t.pollerRef,r=t.isEnabled,a=this.state.isRunning;n&&n!==e.pollerRef&&(n.current=this.pollerRef.current),e.isEnabled!==r&&(r?a&&this.run():this.clearTimeout())},t.componentWillUnmount=function componentWillUnmount(){this.mounted=!1,this.stop()},t.clearTimeout=function(e){function clearTimeout(){return e.apply(this,arguments)}return clearTimeout.toString=function(){return e.toString()},clearTimeout}(function(){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=s)}),t.render=function render(){var e=this.props,t=e.uid,n=e.name,r=e.showDebugger,a=e.isEnabled,s=this.state.isRunning;return r?o.a.createElement(i.a,{uid:t,name:n,pollerRef:this.pollerRef,isEnabled:a,isRunning:s}):null},Poller}(o.a.Component);c.defaultProps={autoStart:!0,isEnabled:!0,showDebugger:!1},e.b=c},"YF/K":function(module,exports,e){},YVeV:function(module,exports,e){var t=e("1YBB"),n=t.default?t.default:{},r,a=(0,e("HdzH").default)(n);a.getLocale=function(){return"en"},module.exports=a},YjNM:function(module,exports,e){var t=e("fWbl"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},aqz2:function(module,exports,e){},bAeU:function(module,exports,e){var t=e("zX36"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},cLK8:function(module,exports,e){},dduQ:function(module,exports,e){var t=e("5LIc"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},e92w:function(module,exports,e){},fWbl:function(module,exports,e){},gRVs:function(module,e,t){"use strict";t.d(e,"a",function(){return f});var n=t("pVnL"),r=t.n(n),a=t("VbXa"),o=t.n(a),i=t("DXTi"),s=t.n(i),c=t("UZuA"),l=t("YjNM"),u=t.n(l),p=t("Yy0d"),d=t.n(p),f=function(e){function CopyItem(t){var n;return(n=e.call(this,t)||this).textInput=null,n.handleClick=function(){var e=n.props.onItemClick;n.textInput&&(n.textInput.select(),document.execCommand("copy"),n.toggleCopiedMessage(!0),setTimeout(function(){return n.toggleCopiedMessage(!1)},2500),e&&e())},n.toggleCopiedMessage=function(e){n.setState(function(){return{showCopiedMessage:e}})},n.state={showCopiedMessage:!1},n}var t;return o()(CopyItem,e),CopyItem.prototype.render=function render(){var e=this,t=this.props,n=t.item,a=t.trackingName,o=t.e2eDataName,i=this.state.showCopiedMessage;return s.a.createElement(c.a,{className:"rc-CopyItem",trackingName:"".concat(a,"_container")},s.a.createElement(c.a,{trackingName:"".concat(a,"_input")},s.a.createElement("input",r()({ref:function ref(t){e.textInput=t},className:"rc-CopyItem__input",type:"text",value:n},o&&{"data-e2e":o},{readOnly:!0}))),s.a.createElement(c.a,{className:"rc-CopyItem__button",trackingName:"".concat(a,"_button"),"aria-label":"copy",onClick:this.handleClick},i?s.a.createElement("span",{role:"alert"}," ",d()("COPIED!")," "):s.a.createElement("span",null," ",d()("COPY"))))},CopyItem}(s.a.Component);f.defaultProps={trackingName:"copy_item"}},plNT:function(module,e,t){"use strict";t.d(e,"a",function(){return g});var n=t("lSNA"),r=t.n(n),a=t("VbXa"),o=t.n(a),i=t("DXTi"),s=t.n(i),c=t("TOZ3"),l=t("CsdX"),u=t("qAUi"),p=t("wwtN"),d=t("6gRZ"),f=t.n(d),m=t("sQ/U"),h=t("bAeU"),v=t.n(h);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var g=function(e){function PollerDebugger(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={config:{shouldDisplay:!1,shouldRun:!0}},t.loadConfig=function(){var e=t.getStorageKey(),n=t.state.config;try{var r=JSON.parse(localStorage.getItem(e)||"");return Promise.resolve(_objectSpread(_objectSpread({},n),r))}catch(e){return Promise.resolve(n)}},t.saveConfig=function(){var e=t.getStorageKey(),n=t.state.config,r=JSON.stringify(n);return localStorage.setItem(e,r),Promise.resolve()},t.start=function(){var e=t.props.pollerRef.current;if(!e)return;t.setState(function(e){var t;return{config:_objectSpread(_objectSpread({},e.config),{},{shouldRun:!0})}},function(){t.saveConfig().then(function(){e.start()})})},t.stop=function(){var e=t.props.pollerRef.current;if(!e)return;t.setState(function(e){var t;return{config:_objectSpread(_objectSpread({},e.config),{},{shouldRun:!1})}},function(){t.saveConfig().then(function(){e.stop()})})},t.toggle=function(){var e;t.props.isRunning?t.stop():t.start()},t.forceRun=function(){var e=t.props.pollerRef.current;null==e||e.run(!0)},t}o()(PollerDebugger,e);var t=PollerDebugger.prototype;return t.componentDidMount=function componentDidMount(){var e=this,t=this.props,n=t.uid,r=t.pollerRef;n&&this.loadConfig().then(function(t){e.setState({config:t},function(){if(!r.current)return;t.shouldRun?r.current.start():r.current.stop()})})},t.getStorageKey=function getStorageKey(){var e=this.props.uid;return"poller:".concat(e||"unknown")},t.render=function render(){var e=this.props,t=e.name,n=e.pollerRef.current,r=e.isEnabled,a=e.isRunning,o,i=this.state.config.shouldDisplay&&m.a.isSuperuser();if(!n||!i)return null;return s.a.createElement(c.b,{rootClassName:"rc-PollerDebugger",alignItems:"center"},r?s.a.createElement(u.a,{size:18,color:l.b.success}):s.a.createElement(p.a,{size:18,color:l.b.danger}),s.a.createElement("span",null,r&&a?"Polling":"Not polling"," ",t),s.a.createElement(d.ButtonGroup,null,s.a.createElement(d.Button,{size:"xs",onClick:this.toggle},a?"Stop":"Start"),s.a.createElement(d.Button,{size:"xs",onClick:this.forceRun},"Force Run")))},PollerDebugger}(i.Component)},"x/Cz":function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pt":true,"ru":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},yIOc:function(module,e,t){"use strict";t.d(e,"a",function(){return p});var n=t("DXTi"),r=t.n(n),a=t("+2ZD"),o=t("AWZ4"),i=t("dduQ"),s=t.n(i),c=t("6gca"),l=t.n(c),u=function reload(){window.location.reload()},p=function ErrorModal(e){var t=e.handleClose;return r.a.createElement("div",null,r.a.createElement(a.a,{modalName:"errorModal",className:"rc-errorModal",allowClose:!0,handleClose:t},r.a.createElement("div",null,r.a.createElement("h2",null,l()("Error")),r.a.createElement("p",null,l()("Something went wrong")),r.a.createElement(o.b,{type:"primary",label:l()("Reload"),onClick:u,style:{float:"right"}}))))}},zX36:function(module,exports,e){}}]);
//# sourceMappingURL=en.63.7e6938725658cf64db50.js.map