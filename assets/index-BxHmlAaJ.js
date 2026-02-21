(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var hh={exports:{}},Oo={};var G_;function WS(){if(G_)return Oo;G_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Oo.Fragment=t,Oo.jsx=i,Oo.jsxs=i,Oo}var V_;function YS(){return V_||(V_=1,hh.exports=WS()),hh.exports}var jc=YS(),dh={exports:{}},se={};var X_;function qS(){if(X_)return se;X_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function S(P,q,_t){this.props=P,this.context=q,this.refs=y,this.updater=_t||b}S.prototype.isReactComponent={},S.prototype.setState=function(P,q){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,q,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function D(){}D.prototype=S.prototype;function N(P,q,_t){this.props=P,this.context=q,this.refs=y,this.updater=_t||b}var U=N.prototype=new D;U.constructor=N,C(U,S.prototype),U.isPureReactComponent=!0;var G=Array.isArray;function B(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function w(P,q,_t){var At=_t.ref;return{$$typeof:o,type:P,key:q,ref:At!==void 0?At:null,props:_t}}function ht(P,q){return w(P.type,q,P.props)}function H(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function $(P){var q={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(_t){return q[_t]})}var at=/\/+/g;function lt(P,q){return typeof P=="object"&&P!==null&&P.key!=null?$(""+P.key):q.toString(36)}function tt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(B,B):(P.status="pending",P.then(function(q){P.status==="pending"&&(P.status="fulfilled",P.value=q)},function(q){P.status==="pending"&&(P.status="rejected",P.reason=q)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function O(P,q,_t,At,It){var nt=typeof P;(nt==="undefined"||nt==="boolean")&&(P=null);var vt=!1;if(P===null)vt=!0;else switch(nt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(P.$$typeof){case o:case t:vt=!0;break;case v:return vt=P._init,O(vt(P._payload),q,_t,At,It)}}if(vt)return It=It(P),vt=At===""?"."+lt(P,0):At,G(It)?(_t="",vt!=null&&(_t=vt.replace(at,"$&/")+"/"),O(It,q,_t,"",function(Zt){return Zt})):It!=null&&(H(It)&&(It=ht(It,_t+(It.key==null||P&&P.key===It.key?"":(""+It.key).replace(at,"$&/")+"/")+vt)),q.push(It)),1;vt=0;var bt=At===""?".":At+":";if(G(P))for(var Vt=0;Vt<P.length;Vt++)At=P[Vt],nt=bt+lt(At,Vt),vt+=O(At,q,_t,nt,It);else if(Vt=M(P),typeof Vt=="function")for(P=Vt.call(P),Vt=0;!(At=P.next()).done;)At=At.value,nt=bt+lt(At,Vt++),vt+=O(At,q,_t,nt,It);else if(nt==="object"){if(typeof P.then=="function")return O(tt(P),q,_t,At,It);throw q=String(P),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return vt}function I(P,q,_t){if(P==null)return P;var At=[],It=0;return O(P,At,"","",function(nt){return q.call(_t,nt,It++)}),At}function ot(P){if(P._status===-1){var q=P._result;q=q(),q.then(function(_t){(P._status===0||P._status===-1)&&(P._status=1,P._result=_t)},function(_t){(P._status===0||P._status===-1)&&(P._status=2,P._result=_t)}),P._status===-1&&(P._status=0,P._result=q)}if(P._status===1)return P._result.default;throw P._result}var dt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Et={map:I,forEach:function(P,q,_t){I(P,function(){q.apply(this,arguments)},_t)},count:function(P){var q=0;return I(P,function(){q++}),q},toArray:function(P){return I(P,function(q){return q})||[]},only:function(P){if(!H(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return se.Activity=x,se.Children=Et,se.Component=S,se.Fragment=i,se.Profiler=l,se.PureComponent=N,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,se.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},se.cache=function(P){return function(){return P.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(P,q,_t){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var At=C({},P.props),It=P.key;if(q!=null)for(nt in q.key!==void 0&&(It=""+q.key),q)!T.call(q,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&q.ref===void 0||(At[nt]=q[nt]);var nt=arguments.length-2;if(nt===1)At.children=_t;else if(1<nt){for(var vt=Array(nt),bt=0;bt<nt;bt++)vt[bt]=arguments[bt+2];At.children=vt}return w(P.type,It,At)},se.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},se.createElement=function(P,q,_t){var At,It={},nt=null;if(q!=null)for(At in q.key!==void 0&&(nt=""+q.key),q)T.call(q,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(It[At]=q[At]);var vt=arguments.length-2;if(vt===1)It.children=_t;else if(1<vt){for(var bt=Array(vt),Vt=0;Vt<vt;Vt++)bt[Vt]=arguments[Vt+2];It.children=bt}if(P&&P.defaultProps)for(At in vt=P.defaultProps,vt)It[At]===void 0&&(It[At]=vt[At]);return w(P,nt,It)},se.createRef=function(){return{current:null}},se.forwardRef=function(P){return{$$typeof:p,render:P}},se.isValidElement=H,se.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:ot}},se.memo=function(P,q){return{$$typeof:d,type:P,compare:q===void 0?null:q}},se.startTransition=function(P){var q=F.T,_t={};F.T=_t;try{var At=P(),It=F.S;It!==null&&It(_t,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(B,dt)}catch(nt){dt(nt)}finally{q!==null&&_t.types!==null&&(q.types=_t.types),F.T=q}},se.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},se.use=function(P){return F.H.use(P)},se.useActionState=function(P,q,_t){return F.H.useActionState(P,q,_t)},se.useCallback=function(P,q){return F.H.useCallback(P,q)},se.useContext=function(P){return F.H.useContext(P)},se.useDebugValue=function(){},se.useDeferredValue=function(P,q){return F.H.useDeferredValue(P,q)},se.useEffect=function(P,q){return F.H.useEffect(P,q)},se.useEffectEvent=function(P){return F.H.useEffectEvent(P)},se.useId=function(){return F.H.useId()},se.useImperativeHandle=function(P,q,_t){return F.H.useImperativeHandle(P,q,_t)},se.useInsertionEffect=function(P,q){return F.H.useInsertionEffect(P,q)},se.useLayoutEffect=function(P,q){return F.H.useLayoutEffect(P,q)},se.useMemo=function(P,q){return F.H.useMemo(P,q)},se.useOptimistic=function(P,q){return F.H.useOptimistic(P,q)},se.useReducer=function(P,q,_t){return F.H.useReducer(P,q,_t)},se.useRef=function(P){return F.H.useRef(P)},se.useState=function(P){return F.H.useState(P)},se.useSyncExternalStore=function(P,q,_t){return F.H.useSyncExternalStore(P,q,_t)},se.useTransition=function(){return F.H.useTransition()},se.version="19.2.4",se}var k_;function jd(){return k_||(k_=1,dh.exports=qS()),dh.exports}var kn=jd(),ph={exports:{}},Po={},mh={exports:{}},gh={};var W_;function jS(){return W_||(W_=1,(function(o){function t(O,I){var ot=O.length;O.push(I);t:for(;0<ot;){var dt=ot-1>>>1,Et=O[dt];if(0<l(Et,I))O[dt]=I,O[ot]=Et,ot=dt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var I=O[0],ot=O.pop();if(ot!==I){O[0]=ot;t:for(var dt=0,Et=O.length,P=Et>>>1;dt<P;){var q=2*(dt+1)-1,_t=O[q],At=q+1,It=O[At];if(0>l(_t,ot))At<Et&&0>l(It,_t)?(O[dt]=It,O[At]=ot,dt=At):(O[dt]=_t,O[q]=ot,dt=q);else if(At<Et&&0>l(It,ot))O[dt]=It,O[At]=ot,dt=At;else break t}}return I}function l(O,I){var ot=O.sortIndex-I.sortIndex;return ot!==0?ot:O.id-I.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var m=[],d=[],v=1,x=null,g=3,M=!1,b=!1,C=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var I=i(d);I!==null;){if(I.callback===null)s(d);else if(I.startTime<=O)s(d),I.sortIndex=I.expirationTime,t(m,I);else break;I=i(d)}}function G(O){if(C=!1,U(O),!b)if(i(m)!==null)b=!0,B||(B=!0,$());else{var I=i(d);I!==null&&tt(G,I.startTime-O)}}var B=!1,F=-1,T=5,w=-1;function ht(){return y?!0:!(o.unstable_now()-w<T)}function H(){if(y=!1,B){var O=o.unstable_now();w=O;var I=!0;try{t:{b=!1,C&&(C=!1,D(F),F=-1),M=!0;var ot=g;try{e:{for(U(O),x=i(m);x!==null&&!(x.expirationTime>O&&ht());){var dt=x.callback;if(typeof dt=="function"){x.callback=null,g=x.priorityLevel;var Et=dt(x.expirationTime<=O);if(O=o.unstable_now(),typeof Et=="function"){x.callback=Et,U(O),I=!0;break e}x===i(m)&&s(m),U(O)}else s(m);x=i(m)}if(x!==null)I=!0;else{var P=i(d);P!==null&&tt(G,P.startTime-O),I=!1}}break t}finally{x=null,g=ot,M=!1}I=void 0}}finally{I?$():B=!1}}}var $;if(typeof N=="function")$=function(){N(H)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,lt=at.port2;at.port1.onmessage=H,$=function(){lt.postMessage(null)}}else $=function(){S(H,0)};function tt(O,I){F=S(function(){O(o.unstable_now())},I)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(O){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var ot=g;g=I;try{return O()}finally{g=ot}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ot=g;g=O;try{return I()}finally{g=ot}},o.unstable_scheduleCallback=function(O,I,ot){var dt=o.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?dt+ot:dt):ot=dt,O){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=ot+Et,O={id:v++,callback:I,priorityLevel:O,startTime:ot,expirationTime:Et,sortIndex:-1},ot>dt?(O.sortIndex=ot,t(d,O),i(m)===null&&O===i(d)&&(C?(D(F),F=-1):C=!0,tt(G,ot-dt))):(O.sortIndex=Et,t(m,O),b||M||(b=!0,B||(B=!0,$()))),O},o.unstable_shouldYield=ht,o.unstable_wrapCallback=function(O){var I=g;return function(){var ot=g;g=I;try{return O.apply(this,arguments)}finally{g=ot}}}})(gh)),gh}var Y_;function ZS(){return Y_||(Y_=1,mh.exports=jS()),mh.exports}var _h={exports:{}},Tn={};var q_;function KS(){if(q_)return Tn;q_=1;var o=jd();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Tn.createPortal=function(m,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,v)},Tn.flushSync=function(m){var d=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=v,s.d.f()}},Tn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Tn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Tn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var v=d.as,x=p(v,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,M=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:M,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Tn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Tn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,x=p(v,d.crossOrigin);s.d.L(m,v,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Tn.preloadModule=function(m,d){if(typeof m=="string")if(d){var v=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Tn.requestFormReset=function(m){s.d.r(m)},Tn.unstable_batchedUpdates=function(m,d){return m(d)},Tn.useFormState=function(m,d,v){return h.H.useFormState(m,d,v)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.2.4",Tn}var j_;function QS(){if(j_)return _h.exports;j_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),_h.exports=KS(),_h.exports}var Z_;function JS(){if(Z_)return Po;Z_=1;var o=ZS(),t=jd(),i=QS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,A=u.child;A;){if(A===a){_=!0,a=u,r=f;break}if(A===r){_=!0,r=u,a=f;break}A=A.sibling}if(!_){for(A=f.child;A;){if(A===a){_=!0,a=f,r=u;break}if(A===r){_=!0,r=f,a=u;break}A=A.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),ht=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case G:return"Suspense";case B:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case N:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var tt=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},dt=[],Et=-1;function P(e){return{current:e}}function q(e){0>Et||(e.current=dt[Et],dt[Et]=null,Et--)}function _t(e,n){Et++,dt[Et]=e.current,e.current=n}var At=P(null),It=P(null),nt=P(null),vt=P(null);function bt(e,n){switch(_t(nt,n),_t(It,e),_t(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?u_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=u_(n),e=f_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(At),_t(At,e)}function Vt(){q(At),q(It),q(nt)}function Zt(e){e.memoizedState!==null&&_t(vt,e);var n=At.current,a=f_(n,e.type);n!==a&&(_t(It,e),_t(At,a))}function Jt(e){It.current===e&&(q(At),q(It)),vt.current===e&&(q(vt),wo._currentValue=ot)}var Qe,ve;function me(e){if(Qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qe=n&&n[1]||"",ve=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+e+ve}var De=!1;function re(e,n){if(!e||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(rt){var it=rt}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(rt){it=rt}e.call(gt.prototype)}}else{try{throw Error()}catch(rt){it=rt}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(rt){if(rt&&it&&typeof rt.stack=="string")return[rt.stack,it.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],A=f[1];if(_&&A){var z=_.split(`
`),J=A.split(`
`);for(u=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(r===z.length||u===J.length)for(r=z.length-1,u=J.length-1;1<=r&&0<=u&&z[r]!==J[u];)u--;for(;1<=r&&0<=u;r--,u--)if(z[r]!==J[u]){if(r!==1||u!==1)do if(r--,u--,0>u||z[r]!==J[u]){var ft=`
`+z[r].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=r&&0<=u);break}}}finally{De=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?me(a):""}function Ze(e,n){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return re(e.type,!1);case 11:return re(e.type.render,!1);case 1:return re(e.type,!0);case 31:return me("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=Ze(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var We=Object.prototype.hasOwnProperty,ye=o.unstable_scheduleCallback,Ue=o.unstable_cancelCallback,Wt=o.unstable_shouldYield,L=o.unstable_requestPaint,E=o.unstable_now,Y=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,Xt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,jt=o.log,$t=o.unstable_setDisableYieldValue,yt=null,St=null;function Nt(e){if(typeof jt=="function"&&$t(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(yt,e)}catch{}}var Lt=Math.clz32?Math.clz32:W,Ot=Math.log,ce=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ot(e)/ce|0)|0}var Rt=256,Tt=262144,Pt=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ct(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?u=Mt(r):(_&=A,_!==0?u=Mt(_):a||(a=A&~e,a!==0&&(u=Mt(a))))):(A=r&~f,A!==0?u=Mt(A):_!==0?u=Mt(_):a||(a=r&~e,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function zt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ne(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Ee(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function wn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vi(e,n,a,r,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,z=e.expirationTimes,J=e.hiddenUpdates;for(a=_&~a;0<a;){var ft=31-Lt(a),gt=1<<ft;A[ft]=0,z[ft]=-1;var it=J[ft];if(it!==null)for(J[ft]=null,ft=0;ft<it.length;ft++){var rt=it[ft];rt!==null&&(rt.lane&=-536870913)}a&=~gt}r!==0&&kr(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function kr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Lt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function zs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Lt(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function el(e,n){var a=n&-n;return a=(a&42)!==0?1:Bs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Bs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ui(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:O_(e.type))}function Gs(e,n){var a=I.p;try{return I.p=e,n()}finally{I.p=a}}var xi=Math.random().toString(36).slice(2),an="__reactFiber$"+xi,hn="__reactProps$"+xi,Yi="__reactContainer$"+xi,Ta="__reactEvents$"+xi,nl="__reactListeners$"+xi,il="__reactHandles$"+xi,al="__reactResources$"+xi,ls="__reactMarker$"+xi;function Wr(e){delete e[an],delete e[hn],delete e[Ta],delete e[nl],delete e[il]}function Aa(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Yi]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=v_(e);e!==null;){if(a=e[an])return a;e=v_(e)}return n}e=a,a=e.parentNode}return null}function Ra(e){if(e=e[an]||e[Yi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function cs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function R(e){var n=e[al];return n||(n=e[al]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(e){e[ls]=!0}var st=new Set,et={};function K(e,n){Dt(e,n),Dt(e+"Capture",n)}function Dt(e,n){for(et[e]=n,e=0;e<n.length;e++)st.add(n[e])}var Ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wt={},kt={};function qt(e){return We.call(kt,e)?!0:We.call(wt,e)?!1:Ft.test(e)?kt[e]=!0:(wt[e]=!0,!1)}function te(e,n,a){if(qt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ae(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Bt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function ue(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qe(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ae(e){if(!e._valueTracker){var n=Ye(e)?"checked":"value";e._valueTracker=qe(e,n,""+e[n])}}function dn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Ye(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Gt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Un=/[\n"\\]/g;function ie(e){return e.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ln(e,n,a,r,u,f,_,A){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ue(n)):e.value!==""+ue(n)&&(e.value=""+ue(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?Si(e,_,ue(n)):a!=null?Si(e,_,ue(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ue(A):e.removeAttribute("name")}function qn(e,n,a,r,u,f,_,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ae(e);return}a=a!=null?""+ue(a):"",n=n!=null?""+ue(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Ae(e)}function Si(e,n,a){n==="number"&&Gt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function jn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ue(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Le(e,n,a){if(n!=null&&(n=""+ue(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ue(a):""}function sn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(tt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ue(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Ae(e)}function Nn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var rn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mi(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||rn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function qi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Mi(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Mi(e,f,n[f])}function Vs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(e){return Vv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var lu=null;function cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xs=null,ks=null;function cp(e){var n=Ra(e);if(n&&(e=n.stateNode)){var a=e[hn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ln(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[hn]||null;if(!u)throw Error(s(90));Ln(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&dn(r)}break t;case"textarea":Le(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&jn(e,!!a.multiple,n,!1)}}}var uu=!1;function up(e,n,a){if(uu)return e(n,a);uu=!0;try{var r=e(n);return r}finally{if(uu=!1,(Xs!==null||ks!==null)&&(Yl(),Xs&&(n=Xs,e=ks,ks=Xs=null,cp(n),e)))for(n=0;n<e.length;n++)cp(e[n])}}function Yr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[hn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=!1;if(Zi)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){fu=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{fu=!1}var Ca=null,hu=null,rl=null;function fp(){if(rl)return rl;var e,n=hu,a=n.length,r,u="value"in Ca?Ca.value:Ca.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return rl=u.slice(e,1<r?1-r:void 0)}function ol(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function hp(){return!1}function In(e){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ll:hp,this.isPropagationStopped=hp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=In(us),jr=x({},us,{view:0,detail:0}),Xv=In(jr),du,pu,Zr,ul=x({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?(du=e.screenX-Zr.screenX,pu=e.screenY-Zr.screenY):pu=du=0,Zr=e),du)},movementY:function(e){return"movementY"in e?e.movementY:pu}}),dp=In(ul),kv=x({},ul,{dataTransfer:0}),Wv=In(kv),Yv=x({},jr,{relatedTarget:0}),mu=In(Yv),qv=x({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=In(qv),Zv=x({},us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kv=In(Zv),Qv=x({},us,{data:0}),pp=In(Qv),Jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ex(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=tx[e])?!!n[e]:!1}function gu(){return ex}var nx=x({},jr,{key:function(e){if(e.key){var n=Jv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$v[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ix=In(nx),ax=x({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=In(ax),sx=x({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),rx=In(sx),ox=x({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=In(ox),cx=x({},ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=In(cx),fx=x({},us,{newState:0,oldState:0}),hx=In(fx),dx=[9,13,27,32],_u=Zi&&"CompositionEvent"in window,Kr=null;Zi&&"documentMode"in document&&(Kr=document.documentMode);var px=Zi&&"TextEvent"in window&&!Kr,gp=Zi&&(!_u||Kr&&8<Kr&&11>=Kr),_p=" ",vp=!1;function xp(e,n){switch(e){case"keyup":return dx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ws=!1;function mx(e,n){switch(e){case"compositionend":return Sp(n);case"keypress":return n.which!==32?null:(vp=!0,_p);case"textInput":return e=n.data,e===_p&&vp?null:e;default:return null}}function gx(e,n){if(Ws)return e==="compositionend"||!_u&&xp(e,n)?(e=fp(),rl=hu=Ca=null,Ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gp&&n.locale!=="ko"?null:n.data;default:return null}}var _x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!_x[e.type]:n==="textarea"}function yp(e,n,a,r){Xs?ks?ks.push(r):ks=[r]:Xs=r,n=$l(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Qr=null,Jr=null;function vx(e){a_(e,0)}function fl(e){var n=cs(e);if(dn(n))return e}function Ep(e,n){if(e==="change")return n}var bp=!1;if(Zi){var vu;if(Zi){var xu="oninput"in document;if(!xu){var Tp=document.createElement("div");Tp.setAttribute("oninput","return;"),xu=typeof Tp.oninput=="function"}vu=xu}else vu=!1;bp=vu&&(!document.documentMode||9<document.documentMode)}function Ap(){Qr&&(Qr.detachEvent("onpropertychange",Rp),Jr=Qr=null)}function Rp(e){if(e.propertyName==="value"&&fl(Jr)){var n=[];yp(n,Jr,e,cu(e)),up(vx,n)}}function xx(e,n,a){e==="focusin"?(Ap(),Qr=n,Jr=a,Qr.attachEvent("onpropertychange",Rp)):e==="focusout"&&Ap()}function Sx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(Jr)}function Mx(e,n){if(e==="click")return fl(n)}function yx(e,n){if(e==="input"||e==="change")return fl(n)}function Ex(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:Ex;function $r(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!We.call(n,u)||!Zn(e[u],n[u]))return!1}return!0}function Cp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dp(e,n){var a=Cp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Cp(a)}}function wp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?wp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Up(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Gt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Gt(e.document)}return n}function Su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var bx=Zi&&"documentMode"in document&&11>=document.documentMode,Ys=null,Mu=null,to=null,yu=!1;function Lp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yu||Ys==null||Ys!==Gt(r)||(r=Ys,"selectionStart"in r&&Su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),to&&$r(to,r)||(to=r,r=$l(Mu,"onSelect"),0<r.length&&(n=new cl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ys)))}function fs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var qs={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},Eu={},Np={};Zi&&(Np=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function hs(e){if(Eu[e])return Eu[e];if(!qs[e])return e;var n=qs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Np)return Eu[e]=n[a];return e}var Op=hs("animationend"),Pp=hs("animationiteration"),Ip=hs("animationstart"),Tx=hs("transitionrun"),Ax=hs("transitionstart"),Rx=hs("transitioncancel"),Fp=hs("transitionend"),zp=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function yi(e,n){zp.set(e,n),K(n,[e])}var hl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},si=[],js=0,Tu=0;function dl(){for(var e=js,n=Tu=js=0;n<e;){var a=si[n];si[n++]=null;var r=si[n];si[n++]=null;var u=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&Bp(a,u,f)}}function pl(e,n,a,r){si[js++]=e,si[js++]=n,si[js++]=a,si[js++]=r,Tu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Au(e,n,a,r){return pl(e,n,a,r),ml(e)}function ds(e,n){return pl(e,null,null,n),ml(e)}function Bp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Lt(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function ml(e){if(50<Eo)throw Eo=0,If=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Zs={};function Cx(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,r){return new Cx(e,n,a,r)}function Ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function gl(e,n,a,r,u,f){var _=0;if(r=e,typeof e=="function")Ru(e)&&(_=1);else if(typeof e=="string")_=NS(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Kn(31,a,n,u),e.elementType=w,e.lanes=f,e;case C:return ps(a.children,u,f,n);case y:_=8,u|=24;break;case S:return e=Kn(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case G:return e=Kn(13,a,n,u),e.elementType=G,e.lanes=f,e;case B:return e=Kn(19,a,n,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:_=10;break t;case D:_=9;break t;case U:_=11;break t;case F:_=14;break t;case T:_=16,r=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Kn(_,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function ps(e,n,a,r){return e=Kn(7,e,r,n),e.lanes=a,e}function Cu(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function Gp(e){var n=Kn(18,null,null,0);return n.stateNode=e,n}function Du(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Vp=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=Vp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},Vp.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var Ks=[],Qs=0,_l=null,eo=0,oi=[],li=0,Da=null,Li=1,Ni="";function Qi(e,n){Ks[Qs++]=eo,Ks[Qs++]=_l,_l=e,eo=n}function Xp(e,n,a){oi[li++]=Li,oi[li++]=Ni,oi[li++]=Da,Da=e;var r=Li;e=Ni;var u=32-Lt(r)-1;r&=~(1<<u),a+=1;var f=32-Lt(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,Li=1<<32-Lt(n)+u|a<<u|r,Ni=f+e}else Li=1<<f|a<<u|r,Ni=e}function wu(e){e.return!==null&&(Qi(e,1),Xp(e,1,0))}function Uu(e){for(;e===_l;)_l=Ks[--Qs],Ks[Qs]=null,eo=Ks[--Qs],Ks[Qs]=null;for(;e===Da;)Da=oi[--li],oi[li]=null,Ni=oi[--li],oi[li]=null,Li=oi[--li],oi[li]=null}function kp(e,n){oi[li++]=Li,oi[li++]=Ni,oi[li++]=Da,Li=n.id,Ni=n.overflow,Da=e}var Sn=null,Xe=null,Me=!1,wa=null,ci=!1,Lu=Error(s(519));function Ua(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw no(ri(n,e)),Lu}function Wp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[an]=e,n[hn]=r,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)_e(To[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),qn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),sn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||l_(n.textContent,a)?(r.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),r.onScroll!=null&&_e("scroll",n),r.onScrollEnd!=null&&_e("scrollend",n),r.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Ua(e,!0)}function Yp(e){for(Sn=e.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:Sn=Sn.return}}function Js(e){if(e!==Sn)return!1;if(!Me)return Yp(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qf(e.type,e.memoizedProps)),a=!a),a&&Xe&&Ua(e),Yp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Xe=__(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Xe=__(e)}else n===27?(n=Xe,Wa(e.type)?(e=nh,nh=null,Xe=e):Xe=n):Xe=Sn?fi(e.stateNode.nextSibling):null;return!0}function ms(){Xe=Sn=null,Me=!1}function Nu(){var e=wa;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),wa=null),e}function no(e){wa===null?wa=[e]:wa.push(e)}var Ou=P(null),gs=null,Ji=null;function La(e,n,a){_t(Ou,n._currentValue),n._currentValue=a}function $i(e){e._currentValue=Ou.current,q(Ou)}function Pu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Iu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var z=0;z<n.length;z++)if(A.context===n[z]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Pu(f.return,a,e),r||(_=null);break t}f=A.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Pu(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function $s(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var A=u.type;Zn(u.pendingProps.value,_.value)||(e!==null?e.push(A):e=[A])}}else if(u===vt.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}u=u.return}e!==null&&Iu(n,e,a,r),n.flags|=262144}function vl(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _s(e){gs=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return qp(gs,e)}function xl(e,n){return gs===null&&_s(e),qp(e,n)}function qp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(e===null)throw Error(s(308));Ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ji=Ji.next=n;return a}var Dx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},wx=o.unstable_scheduleCallback,Ux=o.unstable_NormalPriority,on={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fu(){return{controller:new Dx,data:new Map,refCount:0}}function io(e){e.refCount--,e.refCount===0&&wx(Ux,function(){e.controller.abort()})}var ao=null,zu=0,tr=0,er=null;function Lx(e,n){if(ao===null){var a=ao=[];zu=0,tr=Vf(),er={status:"pending",value:void 0,then:function(r){a.push(r)}}}return zu++,n.then(jp,jp),n}function jp(){if(--zu===0&&ao!==null){er!==null&&(er.status="fulfilled");var e=ao;ao=null,tr=0,er=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Nx(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Zp=O.S;O.S=function(e,n){Lg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Lx(e,n),Zp!==null&&Zp(e,n)};var vs=P(null);function Bu(){var e=vs.current;return e!==null?e:Ve.pooledCache}function Sl(e,n){n===null?_t(vs,vs.current):_t(vs,n.pool)}function Kp(){var e=Bu();return e===null?null:{parent:on._currentValue,pool:e}}var nr=Error(s(460)),Hu=Error(s(474)),Ml=Error(s(542)),yl={then:function(){}};function Qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,tm(e),e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,tm(e),e}throw Ss=n,nr}}function xs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ss=a,nr):a}}var Ss=null;function $p(){if(Ss===null)throw Error(s(459));var e=Ss;return Ss=null,e}function tm(e){if(e===nr||e===Ml)throw Error(s(483))}var ir=null,so=0;function El(e){var n=so;return so+=1,ir===null&&(ir=[]),Jp(ir,e,n)}function ro(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function bl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function em(e){function n(j,X){if(e){var Q=j.deletions;Q===null?(j.deletions=[X],j.flags|=16):Q.push(X)}}function a(j,X){if(!e)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function r(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function u(j,X){return j=Ki(j,X),j.index=0,j.sibling=null,j}function f(j,X,Q){return j.index=Q,e?(Q=j.alternate,Q!==null?(Q=Q.index,Q<X?(j.flags|=67108866,X):Q):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function _(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,X,Q,mt){return X===null||X.tag!==6?(X=Cu(Q,j.mode,mt),X.return=j,X):(X=u(X,Q),X.return=j,X)}function z(j,X,Q,mt){var Kt=Q.type;return Kt===C?ft(j,X,Q.props.children,mt,Q.key):X!==null&&(X.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===T&&xs(Kt)===X.type)?(X=u(X,Q.props),ro(X,Q),X.return=j,X):(X=gl(Q.type,Q.key,Q.props,null,j.mode,mt),ro(X,Q),X.return=j,X)}function J(j,X,Q,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=Du(Q,j.mode,mt),X.return=j,X):(X=u(X,Q.children||[]),X.return=j,X)}function ft(j,X,Q,mt,Kt){return X===null||X.tag!==7?(X=ps(Q,j.mode,mt,Kt),X.return=j,X):(X=u(X,Q),X.return=j,X)}function gt(j,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Cu(""+X,j.mode,Q),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return Q=gl(X.type,X.key,X.props,null,j.mode,Q),ro(Q,X),Q.return=j,Q;case b:return X=Du(X,j.mode,Q),X.return=j,X;case T:return X=xs(X),gt(j,X,Q)}if(tt(X)||$(X))return X=ps(X,j.mode,Q,null),X.return=j,X;if(typeof X.then=="function")return gt(j,El(X),Q);if(X.$$typeof===N)return gt(j,xl(j,X),Q);bl(j,X)}return null}function it(j,X,Q,mt){var Kt=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Kt!==null?null:A(j,X,""+Q,mt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===Kt?z(j,X,Q,mt):null;case b:return Q.key===Kt?J(j,X,Q,mt):null;case T:return Q=xs(Q),it(j,X,Q,mt)}if(tt(Q)||$(Q))return Kt!==null?null:ft(j,X,Q,mt,null);if(typeof Q.then=="function")return it(j,X,El(Q),mt);if(Q.$$typeof===N)return it(j,X,xl(j,Q),mt);bl(j,Q)}return null}function rt(j,X,Q,mt,Kt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(Q)||null,A(X,j,""+mt,Kt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return j=j.get(mt.key===null?Q:mt.key)||null,z(X,j,mt,Kt);case b:return j=j.get(mt.key===null?Q:mt.key)||null,J(X,j,mt,Kt);case T:return mt=xs(mt),rt(j,X,Q,mt,Kt)}if(tt(mt)||$(mt))return j=j.get(Q)||null,ft(X,j,mt,Kt,null);if(typeof mt.then=="function")return rt(j,X,Q,El(mt),Kt);if(mt.$$typeof===N)return rt(j,X,Q,xl(X,mt),Kt);bl(X,mt)}return null}function Ht(j,X,Q,mt){for(var Kt=null,Re=null,Yt=X,fe=X=0,Se=null;Yt!==null&&fe<Q.length;fe++){Yt.index>fe?(Se=Yt,Yt=null):Se=Yt.sibling;var Ce=it(j,Yt,Q[fe],mt);if(Ce===null){Yt===null&&(Yt=Se);break}e&&Yt&&Ce.alternate===null&&n(j,Yt),X=f(Ce,X,fe),Re===null?Kt=Ce:Re.sibling=Ce,Re=Ce,Yt=Se}if(fe===Q.length)return a(j,Yt),Me&&Qi(j,fe),Kt;if(Yt===null){for(;fe<Q.length;fe++)Yt=gt(j,Q[fe],mt),Yt!==null&&(X=f(Yt,X,fe),Re===null?Kt=Yt:Re.sibling=Yt,Re=Yt);return Me&&Qi(j,fe),Kt}for(Yt=r(Yt);fe<Q.length;fe++)Se=rt(Yt,j,fe,Q[fe],mt),Se!==null&&(e&&Se.alternate!==null&&Yt.delete(Se.key===null?fe:Se.key),X=f(Se,X,fe),Re===null?Kt=Se:Re.sibling=Se,Re=Se);return e&&Yt.forEach(function(Ka){return n(j,Ka)}),Me&&Qi(j,fe),Kt}function Qt(j,X,Q,mt){if(Q==null)throw Error(s(151));for(var Kt=null,Re=null,Yt=X,fe=X=0,Se=null,Ce=Q.next();Yt!==null&&!Ce.done;fe++,Ce=Q.next()){Yt.index>fe?(Se=Yt,Yt=null):Se=Yt.sibling;var Ka=it(j,Yt,Ce.value,mt);if(Ka===null){Yt===null&&(Yt=Se);break}e&&Yt&&Ka.alternate===null&&n(j,Yt),X=f(Ka,X,fe),Re===null?Kt=Ka:Re.sibling=Ka,Re=Ka,Yt=Se}if(Ce.done)return a(j,Yt),Me&&Qi(j,fe),Kt;if(Yt===null){for(;!Ce.done;fe++,Ce=Q.next())Ce=gt(j,Ce.value,mt),Ce!==null&&(X=f(Ce,X,fe),Re===null?Kt=Ce:Re.sibling=Ce,Re=Ce);return Me&&Qi(j,fe),Kt}for(Yt=r(Yt);!Ce.done;fe++,Ce=Q.next())Ce=rt(Yt,j,fe,Ce.value,mt),Ce!==null&&(e&&Ce.alternate!==null&&Yt.delete(Ce.key===null?fe:Ce.key),X=f(Ce,X,fe),Re===null?Kt=Ce:Re.sibling=Ce,Re=Ce);return e&&Yt.forEach(function(kS){return n(j,kS)}),Me&&Qi(j,fe),Kt}function He(j,X,Q,mt){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:t:{for(var Kt=Q.key;X!==null;){if(X.key===Kt){if(Kt=Q.type,Kt===C){if(X.tag===7){a(j,X.sibling),mt=u(X,Q.props.children),mt.return=j,j=mt;break t}}else if(X.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===T&&xs(Kt)===X.type){a(j,X.sibling),mt=u(X,Q.props),ro(mt,Q),mt.return=j,j=mt;break t}a(j,X);break}else n(j,X);X=X.sibling}Q.type===C?(mt=ps(Q.props.children,j.mode,mt,Q.key),mt.return=j,j=mt):(mt=gl(Q.type,Q.key,Q.props,null,j.mode,mt),ro(mt,Q),mt.return=j,j=mt)}return _(j);case b:t:{for(Kt=Q.key;X!==null;){if(X.key===Kt)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){a(j,X.sibling),mt=u(X,Q.children||[]),mt.return=j,j=mt;break t}else{a(j,X);break}else n(j,X);X=X.sibling}mt=Du(Q,j.mode,mt),mt.return=j,j=mt}return _(j);case T:return Q=xs(Q),He(j,X,Q,mt)}if(tt(Q))return Ht(j,X,Q,mt);if($(Q)){if(Kt=$(Q),typeof Kt!="function")throw Error(s(150));return Q=Kt.call(Q),Qt(j,X,Q,mt)}if(typeof Q.then=="function")return He(j,X,El(Q),mt);if(Q.$$typeof===N)return He(j,X,xl(j,Q),mt);bl(j,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(a(j,X.sibling),mt=u(X,Q),mt.return=j,j=mt):(a(j,X),mt=Cu(Q,j.mode,mt),mt.return=j,j=mt),_(j)):a(j,X)}return function(j,X,Q,mt){try{so=0;var Kt=He(j,X,Q,mt);return ir=null,Kt}catch(Yt){if(Yt===nr||Yt===Ml)throw Yt;var Re=Kn(29,Yt,null,j.mode);return Re.lanes=mt,Re.return=j,Re}}}var Ms=em(!0),nm=em(!1),Na=!1;function Gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(we&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=ml(e),Bp(e,null,a),n}return pl(e,r,n,a),ml(e)}function oo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,zs(e,a)}}function Xu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ku=!1;function lo(){if(ku){var e=er;if(e!==null)throw e}}function co(e,n,a,r){ku=!1;var u=e.updateQueue;Na=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var z=A,J=z.next;z.next=null,_===null?f=J:_.next=J,_=z;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==_&&(A===null?ft.firstBaseUpdate=J:A.next=J,ft.lastBaseUpdate=z))}if(f!==null){var gt=u.baseState;_=0,ft=J=z=null,A=f;do{var it=A.lane&-536870913,rt=it!==A.lane;if(rt?(xe&it)===it:(r&it)===it){it!==0&&it===tr&&(ku=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ht=e,Qt=A;it=n;var He=a;switch(Qt.tag){case 1:if(Ht=Qt.payload,typeof Ht=="function"){gt=Ht.call(He,gt,it);break t}gt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=Qt.payload,it=typeof Ht=="function"?Ht.call(He,gt,it):Ht,it==null)break t;gt=x({},gt,it);break t;case 2:Na=!0}}it=A.callback,it!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[it]:rt.push(it))}else rt={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(J=ft=rt,z=gt):ft=ft.next=rt,_|=it;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;rt=A,A=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ft===null&&(z=gt),u.baseState=z,u.firstBaseUpdate=J,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),Ha|=_,e.lanes=_,e.memoizedState=gt}}function im(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function am(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)im(a[e],n)}var ar=P(null),Tl=P(0);function sm(e,n){e=la,_t(Tl,e),_t(ar,n),la=e|n.baseLanes}function Wu(){_t(Tl,la),_t(ar,ar.current)}function Yu(){la=Tl.current,q(ar),q(Tl)}var Qn=P(null),ui=null;function Ia(e){var n=e.alternate;_t(tn,tn.current&1),_t(Qn,e),ui===null&&(n===null||ar.current!==null||n.memoizedState!==null)&&(ui=e)}function qu(e){_t(tn,tn.current),_t(Qn,e),ui===null&&(ui=e)}function rm(e){e.tag===22?(_t(tn,tn.current),_t(Qn,e),ui===null&&(ui=e)):Fa()}function Fa(){_t(tn,tn.current),_t(Qn,Qn.current)}function Jn(e){q(Qn),ui===e&&(ui=null),q(tn)}var tn=P(0);function Al(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||th(a)||eh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,le=null,ze=null,ln=null,Rl=!1,sr=!1,ys=!1,Cl=0,uo=0,rr=null,Ox=0;function Je(){throw Error(s(321))}function ju(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function Zu(e,n,a,r,u,f){return ta=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Xm:ff,ys=!1,f=a(r,u),ys=!1,sr&&(f=lm(n,a,r,u)),om(e),f}function om(e){O.H=po;var n=ze!==null&&ze.next!==null;if(ta=0,ln=ze=le=null,Rl=!1,uo=0,rr=null,n)throw Error(s(300));e===null||cn||(e=e.dependencies,e!==null&&vl(e)&&(cn=!0))}function lm(e,n,a,r){le=e;var u=0;do{if(sr&&(rr=null),uo=0,sr=!1,25<=u)throw Error(s(301));if(u+=1,ln=ze=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=km,f=n(a,r)}while(sr);return f}function Px(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?fo(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(le.flags|=1024),n}function Ku(){var e=Cl!==0;return Cl=0,e}function Qu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ju(e){if(Rl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Rl=!1}ta=0,ln=ze=le=null,sr=!1,uo=Cl=0,rr=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?le.memoizedState=ln=e:ln=ln.next=e,ln}function en(){if(ze===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=ln===null?le.memoizedState:ln.next;if(n!==null)ln=n,ze=e;else{if(e===null)throw le.alternate===null?Error(s(467)):Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},ln===null?le.memoizedState=ln=e:ln=ln.next=e}return ln}function Dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(e){var n=uo;return uo+=1,rr===null&&(rr=[]),e=Jp(rr,e,n),n=le,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Xm:ff),e}function wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fo(e);if(e.$$typeof===N)return Mn(e)}throw Error(s(438,String(e)))}function $u(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=le.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Dl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=ht;return n.index++,a}function ea(e,n){return typeof n=="function"?n(e):n}function Ul(e){var n=en();return tf(n,ze,e)}function tf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=_=null,z=null,J=n,ft=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(xe&gt)===gt:(ta&gt)===gt){var it=J.revertLane;if(it===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===tr&&(ft=!0);else if((ta&it)===it){J=J.next,it===tr&&(ft=!0);continue}else gt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(A=z=gt,_=f):z=z.next=gt,le.lanes|=it,Ha|=it;gt=J.action,ys&&a(f,gt),f=J.hasEagerState?J.eagerState:a(f,gt)}else it={lane:gt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(A=z=it,_=f):z=z.next=it,le.lanes|=gt,Ha|=gt;J=J.next}while(J!==null&&J!==n);if(z===null?_=f:z.next=A,!Zn(f,e.memoizedState)&&(cn=!0,ft&&(a=er,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=z,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ef(e){var n=en(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);Zn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function cm(e,n,a){var r=le,u=en(),f=Me;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Zn((ze||u).memoizedState,a);if(_&&(u.memoizedState=a,cn=!0),u=u.queue,sf(hm.bind(null,r,u,e),[e]),u.getSnapshot!==n||_||ln!==null&&ln.memoizedState.tag&1){if(r.flags|=2048,or(9,{destroy:void 0},fm.bind(null,r,u,a,n),null),Ve===null)throw Error(s(349));f||(ta&127)!==0||um(r,n,a)}return a}function um(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Dl(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function fm(e,n,a,r){n.value=a,n.getSnapshot=r,dm(n)&&pm(e)}function hm(e,n,a){return a(function(){dm(n)&&pm(e)})}function dm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function pm(e){var n=ds(e,2);n!==null&&Gn(n,e,2)}function nf(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),ys){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},n}function mm(e,n,a,r){return e.baseState=a,tf(e,ze,typeof r=="function"?r:ea)}function Ix(e,n,a,r,u){if(Ol(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,gm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function gm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=O.T,_={};O.T=_;try{var A=a(u,r),z=O.S;z!==null&&z(_,A),_m(e,n,A)}catch(J){af(e,n,J)}finally{f!==null&&_.types!==null&&(f.types=_.types),O.T=f}}else try{f=a(u,r),_m(e,n,f)}catch(J){af(e,n,J)}}function _m(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){vm(e,n,r)},function(r){return af(e,n,r)}):vm(e,n,a)}function vm(e,n,a){n.status="fulfilled",n.value=a,xm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,gm(e,a)))}function af(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,xm(n),n=n.next;while(n!==r)}e.action=null}function xm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Sm(e,n){return n}function Mm(e,n){if(Me){var a=Ve.formState;if(a!==null){t:{var r=le;if(Me){if(Xe){e:{for(var u=Xe,f=ci;u.nodeType!==8;){if(!f){u=null;break e}if(u=fi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Xe=fi(u.nextSibling),r=u.data==="F!";break t}}Ua(r)}r=!1}r&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sm,lastRenderedState:n},a.queue=r,a=Hm.bind(null,le,r),r.dispatch=a,r=nf(!1),f=uf.bind(null,le,!1,r.queue),r=On(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=Ix.bind(null,le,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function ym(e){var n=en();return Em(n,ze,e)}function Em(e,n,a){if(n=tf(e,n,Sm)[0],e=Ul(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=fo(n)}catch(_){throw _===nr?Ml:_}else r=n;n=en();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,or(9,{destroy:void 0},Fx.bind(null,u,a),null)),[r,f,e]}function Fx(e,n){e.action=n}function bm(e){var n=en(),a=ze;if(a!==null)return Em(n,a,e);en(),n=n.memoizedState,a=en();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function or(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=le.updateQueue,n===null&&(n=Dl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Tm(){return en().memoizedState}function Ll(e,n,a,r){var u=On();le.flags|=e,u.memoizedState=or(1|n,{destroy:void 0},a,r===void 0?null:r)}function Nl(e,n,a,r){var u=en();r=r===void 0?null:r;var f=u.memoizedState.inst;ze!==null&&r!==null&&ju(r,ze.memoizedState.deps)?u.memoizedState=or(n,f,a,r):(le.flags|=e,u.memoizedState=or(1|n,f,a,r))}function Am(e,n){Ll(8390656,8,e,n)}function sf(e,n){Nl(2048,8,e,n)}function zx(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=Dl(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Rm(e){var n=en().memoizedState;return zx({ref:n,nextImpl:e}),function(){if((we&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Cm(e,n){return Nl(4,2,e,n)}function Dm(e,n){return Nl(4,4,e,n)}function wm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Um(e,n,a){a=a!=null?a.concat([e]):null,Nl(4,4,wm.bind(null,n,e),a)}function rf(){}function Lm(e,n){var a=en();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&ju(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Nm(e,n){var a=en();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&ju(n,r[1]))return r[0];if(r=e(),ys){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[r,n],r}function of(e,n,a){return a===void 0||(ta&1073741824)!==0&&(xe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Og(),le.lanes|=e,Ha|=e,a)}function Om(e,n,a,r){return Zn(a,n)?a:ar.current!==null?(e=of(e,a,r),Zn(e,n)||(cn=!0),e):(ta&42)===0||(ta&1073741824)!==0&&(xe&261930)===0?(cn=!0,e.memoizedState=a):(e=Og(),le.lanes|=e,Ha|=e,n)}function Pm(e,n,a,r,u){var f=I.p;I.p=f!==0&&8>f?f:8;var _=O.T,A={};O.T=A,uf(e,!1,n,a);try{var z=u(),J=O.S;if(J!==null&&J(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ft=Nx(z,r);ho(e,n,ft,ei(e))}else ho(e,n,r,ei(e))}catch(gt){ho(e,n,{then:function(){},status:"rejected",reason:gt},ei())}finally{I.p=f,_!==null&&A.types!==null&&(_.types=A.types),O.T=_}}function Bx(){}function lf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Im(e).queue;Pm(e,u,n,ot,a===null?Bx:function(){return Fm(e),a(r)})}function Im(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Fm(e){var n=Im(e);n.next===null&&(n=e.alternate.memoizedState),ho(e,n.next.queue,{},ei())}function cf(){return Mn(wo)}function zm(){return en().memoizedState}function Bm(){return en().memoizedState}function Hx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();e=Oa(a);var r=Pa(n,e,a);r!==null&&(Gn(r,n,a),oo(r,n,a)),n={cache:Fu()},e.payload=n;return}n=n.return}}function Gx(e,n,a){var r=ei();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ol(e)?Gm(n,a):(a=Au(e,n,a,r),a!==null&&(Gn(a,e,r),Vm(a,n,r)))}function Hm(e,n,a){var r=ei();ho(e,n,a,r)}function ho(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ol(e))Gm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,A=f(_,a);if(u.hasEagerState=!0,u.eagerState=A,Zn(A,_))return pl(e,n,u,0),Ve===null&&dl(),!1}catch{}if(a=Au(e,n,u,r),a!==null)return Gn(a,e,r),Vm(a,n,r),!0}return!1}function uf(e,n,a,r){if(r={lane:2,revertLane:Vf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ol(e)){if(n)throw Error(s(479))}else n=Au(e,a,r,2),n!==null&&Gn(n,e,2)}function Ol(e){var n=e.alternate;return e===le||n!==null&&n===le}function Gm(e,n){sr=Rl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Vm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,zs(e,a)}}var po={readContext:Mn,use:wl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};po.useEffectEvent=Je;var Xm={readContext:Mn,use:wl,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:Am,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ll(4194308,4,wm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ll(4194308,4,e,n)},useInsertionEffect:function(e,n){Ll(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var r=e();if(ys){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=On();if(a!==void 0){var u=a(n);if(ys){Nt(!0);try{a(n)}finally{Nt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=Gx.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=nf(e);var n=e.queue,a=Hm.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:rf,useDeferredValue:function(e,n){var a=On();return of(a,e,n)},useTransition:function(){var e=nf(!1);return e=Pm.bind(null,le,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=le,u=On();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(xe&127)!==0||um(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Am(hm.bind(null,r,f,e),[e]),r.flags|=2048,or(9,{destroy:void 0},fm.bind(null,r,f,a,n),null),a},useId:function(){var e=On(),n=Ve.identifierPrefix;if(Me){var a=Ni,r=Li;a=(r&~(1<<32-Lt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Cl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ox++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:cf,useFormState:Mm,useActionState:Mm,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=uf.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:$u,useCacheRefresh:function(){return On().memoizedState=Hx.bind(null,le)},useEffectEvent:function(e){var n=On(),a={impl:e};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ff={readContext:Mn,use:wl,useCallback:Lm,useContext:Mn,useEffect:sf,useImperativeHandle:Um,useInsertionEffect:Cm,useLayoutEffect:Dm,useMemo:Nm,useReducer:Ul,useRef:Tm,useState:function(){return Ul(ea)},useDebugValue:rf,useDeferredValue:function(e,n){var a=en();return Om(a,ze.memoizedState,e,n)},useTransition:function(){var e=Ul(ea)[0],n=en().memoizedState;return[typeof e=="boolean"?e:fo(e),n]},useSyncExternalStore:cm,useId:zm,useHostTransitionStatus:cf,useFormState:ym,useActionState:ym,useOptimistic:function(e,n){var a=en();return mm(a,ze,e,n)},useMemoCache:$u,useCacheRefresh:Bm};ff.useEffectEvent=Rm;var km={readContext:Mn,use:wl,useCallback:Lm,useContext:Mn,useEffect:sf,useImperativeHandle:Um,useInsertionEffect:Cm,useLayoutEffect:Dm,useMemo:Nm,useReducer:ef,useRef:Tm,useState:function(){return ef(ea)},useDebugValue:rf,useDeferredValue:function(e,n){var a=en();return ze===null?of(a,e,n):Om(a,ze.memoizedState,e,n)},useTransition:function(){var e=ef(ea)[0],n=en().memoizedState;return[typeof e=="boolean"?e:fo(e),n]},useSyncExternalStore:cm,useId:zm,useHostTransitionStatus:cf,useFormState:bm,useActionState:bm,useOptimistic:function(e,n){var a=en();return ze!==null?mm(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:$u,useCacheRefresh:Bm};km.useEffectEvent=Rm;function hf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var df={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ei(),u=Oa(r);u.payload=n,a!=null&&(u.callback=a),n=Pa(e,u,r),n!==null&&(Gn(n,e,r),oo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ei(),u=Oa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Pa(e,u,r),n!==null&&(Gn(n,e,r),oo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ei(),r=Oa(a);r.tag=2,n!=null&&(r.callback=n),n=Pa(e,r,a),n!==null&&(Gn(n,e,a),oo(n,e,a))}};function Wm(e,n,a,r,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!$r(a,r)||!$r(u,f):!0}function Ym(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&df.enqueueReplaceState(n,n.state,null)}function Es(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function qm(e){hl(e)}function jm(e){console.error(e)}function Zm(e){hl(e)}function Pl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Km(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function pf(e,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(e,n)},a}function Qm(e){return e=Oa(e),e.tag=3,e}function Jm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Km(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Km(n,a,r),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function Vx(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&$s(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?ql():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Bf(e,r,u)),!1;case 22:return a.flags|=65536,r===yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Bf(e,r,u)),!1}throw Error(s(435,a.tag))}return Bf(e,r,u),ql(),!1}if(Me)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Lu&&(e=Error(s(422),{cause:r}),no(ri(e,a)))):(r!==Lu&&(n=Error(s(423),{cause:r}),no(ri(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=ri(r,a),u=pf(e.stateNode,r,u),Xu(e,u),$e!==4&&($e=2)),!1;var f=Error(s(520),{cause:r});if(f=ri(f,a),yo===null?yo=[f]:yo.push(f),$e!==4&&($e=2),n===null)return!0;r=ri(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=pf(a.stateNode,r,e),Xu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ga===null||!Ga.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Qm(u),Jm(u,e,a,r),Xu(a,u),!1}a=a.return}while(a!==null);return!1}var mf=Error(s(461)),cn=!1;function yn(e,n,a,r){n.child=e===null?nm(n,null,a,r):Ms(n,e.child,a,r)}function $m(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var A in r)A!=="ref"&&(_[A]=r[A])}else _=r;return _s(n),r=Zu(e,n,a,_,f,u),A=Ku(),e!==null&&!cn?(Qu(e,n,u),na(e,n,u)):(Me&&A&&wu(n),n.flags|=1,yn(e,n,r,u),n.child)}function tg(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!Ru(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,eg(e,n,f,r,u)):(e=gl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ef(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:$r,a(_,r)&&e.ref===n.ref)return na(e,n,u)}return n.flags|=1,e=Ki(f,r),e.ref=n.ref,e.return=n,n.child=e}function eg(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if($r(f,r)&&e.ref===n.ref)if(cn=!1,n.pendingProps=r=f,Ef(e,u))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,na(e,n,u)}return gf(e,n,a,r,u)}function ng(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return ig(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sl(n,f!==null?f.cachePool:null),f!==null?sm(n,f):Wu(),rm(n);else return r=n.lanes=536870912,ig(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(Sl(n,f.cachePool),sm(n,f),Fa(),n.memoizedState=null):(e!==null&&Sl(n,null),Wu(),Fa());return yn(e,n,u,a),n.child}function mo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ig(e,n,a,r,u){var f=Bu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Sl(n,null),Wu(),rm(n),e!==null&&$s(e,n,r,!0),n.childLanes=u,null}function Il(e,n){return n=zl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function ag(e,n,a){return Ms(n,e.child,null,a),e=Il(n,n.pendingProps),e.flags|=2,Jn(n),n.memoizedState=null,e}function Xx(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(r.mode==="hidden")return e=Il(n,r),n.lanes=536870912,mo(null,e);if(qu(n),(e=Xe)?(e=g_(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,Sn=n,Xe=null)):e=null,e===null)throw Ua(n);return n.lanes=536870912,null}return Il(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(qu(n),u)if(n.flags&256)n.flags&=-257,n=ag(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||$s(e,n,a,!1),u=(a&e.childLanes)!==0,cn||u){if(r=Ve,r!==null&&(_=el(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,ds(e,_),Gn(r,e,_),mf;ql(),n=ag(e,n,a)}else e=f.treeContext,Xe=fi(_.nextSibling),Sn=n,Me=!0,wa=null,ci=!1,e!==null&&kp(n,e),n=Il(n,r),n.flags|=4096;return n}return e=Ki(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Fl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function gf(e,n,a,r,u){return _s(n),a=Zu(e,n,a,r,void 0,u),r=Ku(),e!==null&&!cn?(Qu(e,n,u),na(e,n,u)):(Me&&r&&wu(n),n.flags|=1,yn(e,n,a,u),n.child)}function sg(e,n,a,r,u,f){return _s(n),n.updateQueue=null,a=lm(n,r,a,u),om(e),r=Ku(),e!==null&&!cn?(Qu(e,n,f),na(e,n,f)):(Me&&r&&wu(n),n.flags|=1,yn(e,n,a,f),n.child)}function rg(e,n,a,r,u){if(_s(n),n.stateNode===null){var f=Zs,_=a.contextType;typeof _=="object"&&_!==null&&(f=Mn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=df,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Gu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Mn(_):Zs,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(hf(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&df.enqueueReplaceState(f,f.state,null),co(n,r,f,u),lo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,z=Es(a,A);f.props=z;var J=f.context,ft=a.contextType;_=Zs,typeof ft=="object"&&ft!==null&&(_=Mn(ft));var gt=a.getDerivedStateFromProps;ft=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||J!==_)&&Ym(n,f,r,_),Na=!1;var it=n.memoizedState;f.state=it,co(n,r,f,u),lo(),J=n.memoizedState,A||it!==J||Na?(typeof gt=="function"&&(hf(n,a,gt,r),J=n.memoizedState),(z=Na||Wm(n,a,z,r,it,J,_))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=_,r=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Vu(e,n),_=n.memoizedProps,ft=Es(a,_),f.props=ft,gt=n.pendingProps,it=f.context,J=a.contextType,z=Zs,typeof J=="object"&&J!==null&&(z=Mn(J)),A=a.getDerivedStateFromProps,(J=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==gt||it!==z)&&Ym(n,f,r,z),Na=!1,it=n.memoizedState,f.state=it,co(n,r,f,u),lo();var rt=n.memoizedState;_!==gt||it!==rt||Na||e!==null&&e.dependencies!==null&&vl(e.dependencies)?(typeof A=="function"&&(hf(n,a,A,r),rt=n.memoizedState),(ft=Na||Wm(n,a,ft,r,it,rt,z)||e!==null&&e.dependencies!==null&&vl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,rt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,rt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=rt),f.props=r,f.state=rt,f.context=z,r=ft):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Fl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Ms(n,e.child,null,u),n.child=Ms(n,null,a,u)):yn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=na(e,n,u),e}function og(e,n,a,r){return ms(),n.flags|=256,yn(e,n,a,r),n.child}var _f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vf(e){return{baseLanes:e,cachePool:Kp()}}function xf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ti),e}function lg(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(u?Ia(n):Fa(),(e=Xe)?(e=g_(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,Sn=n,Xe=null)):e=null,e===null)throw Ua(n);return eh(e)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,u?(Fa(),u=n.mode,A=zl({mode:"hidden",children:A},u),r=ps(r,u,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=vf(a),r.childLanes=xf(e,_,a),n.memoizedState=_f,mo(null,r)):(Ia(n),Sf(n,A))}var z=e.memoizedState;if(z!==null&&(A=z.dehydrated,A!==null)){if(f)n.flags&256?(Ia(n),n.flags&=-257,n=Mf(e,n,a)):n.memoizedState!==null?(Fa(),n.child=e.child,n.flags|=128,n=null):(Fa(),A=r.fallback,u=n.mode,r=zl({mode:"visible",children:r.children},u),A=ps(A,u,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,Ms(n,e.child,null,a),r=n.child,r.memoizedState=vf(a),r.childLanes=xf(e,_,a),n.memoizedState=_f,n=mo(null,r));else if(Ia(n),eh(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var J=_.dgst;_=J,r=Error(s(419)),r.stack="",r.digest=_,no({value:r,source:null,stack:null}),n=Mf(e,n,a)}else if(cn||$s(e,n,a,!1),_=(a&e.childLanes)!==0,cn||_){if(_=Ve,_!==null&&(r=el(_,a),r!==0&&r!==z.retryLane))throw z.retryLane=r,ds(e,r),Gn(_,e,r),mf;th(A)||ql(),n=Mf(e,n,a)}else th(A)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Xe=fi(A.nextSibling),Sn=n,Me=!0,wa=null,ci=!1,e!==null&&kp(n,e),n=Sf(n,r.children),n.flags|=4096);return n}return u?(Fa(),A=r.fallback,u=n.mode,z=e.child,J=z.sibling,r=Ki(z,{mode:"hidden",children:r.children}),r.subtreeFlags=z.subtreeFlags&65011712,J!==null?A=Ki(J,A):(A=ps(A,u,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,mo(null,r),r=n.child,A=e.child.memoizedState,A===null?A=vf(a):(u=A.cachePool,u!==null?(z=on._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=Kp(),A={baseLanes:A.baseLanes|a,cachePool:u}),r.memoizedState=A,r.childLanes=xf(e,_,a),n.memoizedState=_f,mo(e.child,r)):(Ia(n),a=e.child,e=a.sibling,a=Ki(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function Sf(e,n){return n=zl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function zl(e,n){return e=Kn(22,e,null,n),e.lanes=0,e}function Mf(e,n,a){return Ms(n,e.child,null,a),e=Sf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function cg(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Pu(e.return,n,a)}function yf(e,n,a,r,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function ug(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=tn.current,A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,_t(tn,_),yn(e,n,r,a),r=Me?eo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cg(e,a,n);else if(e.tag===19)cg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Al(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),yf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Al(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}yf(n,!0,a,null,f,r);break;case"together":yf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function na(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(e!==null){if($s(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ef(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&vl(e)))}function kx(e,n,a){switch(n.tag){case 3:bt(n,n.stateNode.containerInfo),La(n,on,e.memoizedState.cache),ms();break;case 27:case 5:Zt(n);break;case 4:bt(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,qu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?lg(e,n,a):(Ia(n),e=na(e,n,a),e!==null?e.sibling:null);Ia(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||($s(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return ug(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_t(tn,tn.current),r)break;return null;case 22:return n.lanes=0,ng(e,n,a,n.pendingProps);case 24:La(n,on,e.memoizedState.cache)}return na(e,n,a)}function fg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!Ef(e,a)&&(n.flags&128)===0)return cn=!1,kx(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,Me&&(n.flags&1048576)!==0&&Xp(n,eo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=xs(n.elementType),n.type=e,typeof e=="function")Ru(e)?(r=Es(e,r),n.tag=1,n=rg(null,n,e,r,a)):(n.tag=0,n=gf(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=$m(null,n,e,r,a);break t}else if(u===F){n.tag=14,n=tg(null,n,e,r,a);break t}}throw n=lt(e)||e,Error(s(306,n,""))}}return n;case 0:return gf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Es(r,n.pendingProps),rg(e,n,r,u,a);case 3:t:{if(bt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Vu(e,n),co(n,r,null,a);var _=n.memoizedState;if(r=_.cache,La(n,on,r),r!==f.cache&&Iu(n,[on],a,!0),lo(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=og(e,n,r,a);break t}else if(r!==u){u=ri(Error(s(424)),n),no(u),n=og(e,n,r,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Xe=fi(e.firstChild),Sn=n,Me=!0,wa=null,ci=!0,a=nm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ms(),r===u){n=na(e,n,a);break t}yn(e,n,r,a)}n=n.child}return n;case 26:return Fl(e,n),e===null?(a=y_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,r=tc(nt.current).createElement(a),r[an]=n,r[hn]=e,En(r,a,e),k(r),n.stateNode=r):n.memoizedState=y_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Zt(n),e===null&&Me&&(r=n.stateNode=x_(n.type,n.pendingProps,nt.current),Sn=n,ci=!0,u=Xe,Wa(n.type)?(nh=u,Xe=fi(r.firstChild)):Xe=u),yn(e,n,n.pendingProps.children,a),Fl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((u=r=Xe)&&(r=SS(r,n.type,n.pendingProps,ci),r!==null?(n.stateNode=r,Sn=n,Xe=fi(r.firstChild),ci=!1,u=!0):u=!1),u||Ua(n)),Zt(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,Qf(u,f)?r=null:_!==null&&Qf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Zu(e,n,Px,null,null,a),wo._currentValue=u),Fl(e,n),yn(e,n,r,a),n.child;case 6:return e===null&&Me&&((e=a=Xe)&&(a=MS(a,n.pendingProps,ci),a!==null?(n.stateNode=a,Sn=n,Xe=null,e=!0):e=!1),e||Ua(n)),null;case 13:return lg(e,n,a);case 4:return bt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ms(n,null,r,a):yn(e,n,r,a),n.child;case 11:return $m(e,n,n.type,n.pendingProps,a);case 7:return yn(e,n,n.pendingProps,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,La(n,n.type,r.value),yn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,_s(n),u=Mn(u),r=r(u),n.flags|=1,yn(e,n,r,a),n.child;case 14:return tg(e,n,n.type,n.pendingProps,a);case 15:return eg(e,n,n.type,n.pendingProps,a);case 19:return ug(e,n,a);case 31:return Xx(e,n,a);case 22:return ng(e,n,a,n.pendingProps);case 24:return _s(n),r=Mn(on),e===null?(u=Bu(),u===null&&(u=Ve,f=Fu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Gu(n),La(n,on,u)):((e.lanes&a)!==0&&(Vu(e,n),co(n,null,null,a),lo()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,on,r)):(r=f.cache,La(n,on,r),r!==u.cache&&Iu(n,[on],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ia(e){e.flags|=4}function bf(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(zg())e.flags|=8192;else throw Ss=yl,Hu}else e.flags&=-16777217}function hg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!R_(n))if(zg())e.flags|=8192;else throw Ss=yl,Hu}function Bl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ne():536870912,e.lanes|=n,fr|=n)}function go(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Wx(e,n,a){var r=n.pendingProps;switch(Uu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return ke(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),$i(on),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Js(n)?ia(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Nu())),ke(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ia(n),f!==null?(ke(n),hg(n,f)):(ke(n),bf(n,u,null,r,a))):f?f!==e.memoizedState?(ia(n),ke(n),hg(n,f)):(ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&ia(n),ke(n),bf(n,u,e,r,a)),null;case 27:if(Jt(n),a=nt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return ke(n),null}e=At.current,Js(n)?Wp(n):(e=x_(u,r,a),n.stateNode=e,ia(n))}return ke(n),null;case 5:if(Jt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return ke(n),null}if(f=At.current,Js(n))Wp(n);else{var _=tc(nt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[an]=n,f[hn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(En(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ia(n)}}return ke(n),bf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ia(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=nt.current,Js(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Sn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||l_(e.nodeValue,a)),e||Ua(n,!0)}else e=tc(e).createTextNode(r),e[an]=n,n.stateNode=e}return ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Js(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[an]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),e=!1}else a=Nu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return ke(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Js(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[an]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),u=!1}else u=Nu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Bl(n,n.updateQueue),ke(n),null);case 4:return Vt(),e===null&&Yf(n.stateNode.containerInfo),ke(n),null;case 10:return $i(n.type),ke(n),null;case 19:if(q(tn),r=n.memoizedState,r===null)return ke(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)go(r,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Al(e),f!==null){for(n.flags|=128,go(r,!1),e=f.updateQueue,n.updateQueue=e,Bl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Hp(a,e),a=a.sibling;return _t(tn,tn.current&1|2),Me&&Qi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&E()>kl&&(n.flags|=128,u=!0,go(r,!1),n.lanes=4194304)}else{if(!u)if(e=Al(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Bl(n,e),go(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Me)return ke(n),null}else 2*E()-r.renderingStartTime>kl&&a!==536870912&&(n.flags|=128,u=!0,go(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=E(),e.sibling=null,a=tn.current,_t(tn,u?a&1|2:a&1),Me&&Qi(n,r.treeForkCount),e):(ke(n),null);case 22:case 23:return Jn(n),Yu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),a=n.updateQueue,a!==null&&Bl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&q(vs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(on),ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Yx(e,n){switch(Uu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return $i(on),Vt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Jt(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));ms()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ms()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(tn),null;case 4:return Vt(),null;case 10:return $i(n.type),null;case 22:case 23:return Jn(n),Yu(),e!==null&&q(vs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return $i(on),null;case 25:return null;default:return null}}function dg(e,n){switch(Uu(n),n.tag){case 3:$i(on),Vt();break;case 26:case 27:case 5:Jt(n);break;case 4:Vt();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:q(tn);break;case 10:$i(n.type);break;case 22:case 23:Jn(n),Yu(),e!==null&&q(vs);break;case 24:$i(on)}}function _o(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(A){Pe(n,n.return,A)}}function za(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var _=r.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,u=n;var z=a,J=A;try{J()}catch(ft){Pe(u,z,ft)}}}r=r.next}while(r!==f)}}catch(ft){Pe(n,n.return,ft)}}function pg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{am(n,a)}catch(r){Pe(e,e.return,r)}}}function mg(e,n,a){a.props=Es(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Pe(e,n,r)}}function vo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Pe(e,n,u)}}function Oi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Pe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Pe(e,n,u)}else a.current=null}function gg(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Pe(e,e.return,u)}}function Tf(e,n,a){try{var r=e.stateNode;pS(r,e.type,a,n),r[hn]=n}catch(u){Pe(e,e.return,u)}}function _g(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function Af(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||_g(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(r!==4&&(r===27&&Wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Rf(e,n,a),e=e.sibling;e!==null;)Rf(e,n,a),e=e.sibling}function Hl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Hl(e,n,a),e=e.sibling;e!==null;)Hl(e,n,a),e=e.sibling}function vg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,r,a),n[an]=e,n[hn]=a}catch(f){Pe(e,e.return,f)}}var aa=!1,un=!1,Cf=!1,xg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function qx(e,n){if(e=e.containerInfo,Zf=oc,e=Up(e),Su(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,A=-1,z=-1,J=0,ft=0,gt=e,it=null;e:for(;;){for(var rt;gt!==a||u!==0&&gt.nodeType!==3||(A=_+u),gt!==f||r!==0&&gt.nodeType!==3||(z=_+r),gt.nodeType===3&&(_+=gt.nodeValue.length),(rt=gt.firstChild)!==null;)it=gt,gt=rt;for(;;){if(gt===e)break e;if(it===a&&++J===u&&(A=_),it===f&&++ft===r&&(z=_),(rt=gt.nextSibling)!==null)break;gt=it,it=gt.parentNode}gt=rt}a=A===-1||z===-1?null:{start:A,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kf={focusedElem:e,selectionRange:a},oc=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ht=Es(a.type,u);e=r.getSnapshotBeforeUpdate(Ht,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(Qt){Pe(a,a.return,Qt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)$f(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$f(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function Sg(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ra(e,a),r&4&&_o(5,a);break;case 1:if(ra(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Pe(a,a.return,_)}else{var u=Es(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Pe(a,a.return,_)}}r&64&&pg(a),r&512&&vo(a,a.return);break;case 3:if(ra(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{am(e,n)}catch(_){Pe(a,a.return,_)}}break;case 27:n===null&&r&4&&vg(a);case 26:case 5:ra(e,a),n===null&&r&4&&gg(a),r&512&&vo(a,a.return);break;case 12:ra(e,a);break;case 31:ra(e,a),r&4&&Eg(e,a);break;case 13:ra(e,a),r&4&&bg(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=nS.bind(null,a),yS(e,a))));break;case 22:if(r=a.memoizedState!==null||aa,!r){n=n!==null&&n.memoizedState!==null||un,u=aa;var f=un;aa=r,(un=n)&&!f?oa(e,a,(a.subtreeFlags&8772)!==0):ra(e,a),aa=u,un=f}break;case 30:break;default:ra(e,a)}}function Mg(e){var n=e.alternate;n!==null&&(e.alternate=null,Mg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Wr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,Fn=!1;function sa(e,n,a){for(a=a.child;a!==null;)yg(e,n,a),a=a.sibling}function yg(e,n,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:un||Oi(a,n),sa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Oi(a,n);var r=je,u=Fn;Wa(a.type)&&(je=a.stateNode,Fn=!1),sa(e,n,a),Ro(a.stateNode),je=r,Fn=u;break;case 5:un||Oi(a,n);case 6:if(r=je,u=Fn,je=null,sa(e,n,a),je=r,Fn=u,je!==null)if(Fn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){Pe(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){Pe(a,n,f)}break;case 18:je!==null&&(Fn?(e=je,p_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),xr(e)):p_(je,a.stateNode));break;case 4:r=je,u=Fn,je=a.stateNode.containerInfo,Fn=!0,sa(e,n,a),je=r,Fn=u;break;case 0:case 11:case 14:case 15:za(2,a,n),un||za(4,a,n),sa(e,n,a);break;case 1:un||(Oi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&mg(a,n,r)),sa(e,n,a);break;case 21:sa(e,n,a);break;case 22:un=(r=un)||a.memoizedState!==null,sa(e,n,a),un=r;break;default:sa(e,n,a)}}function Eg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{xr(e)}catch(a){Pe(n,n.return,a)}}}function bg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xr(e)}catch(a){Pe(n,n.return,a)}}function jx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new xg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new xg),n;default:throw Error(s(435,e.tag))}}function Gl(e,n){var a=jx(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=iS.bind(null,e,r);r.then(u,u)}})}function zn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,_=n,A=_;t:for(;A!==null;){switch(A.tag){case 27:if(Wa(A.type)){je=A.stateNode,Fn=!1;break t}break;case 5:je=A.stateNode,Fn=!1;break t;case 3:case 4:je=A.stateNode.containerInfo,Fn=!0;break t}A=A.return}if(je===null)throw Error(s(160));yg(f,_,u),je=null,Fn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Tg(n,e),n=n.sibling}var Ei=null;function Tg(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zn(n,e),Bn(e),r&4&&(za(3,e,e.return),_o(3,e),za(5,e,e.return));break;case 1:zn(n,e),Bn(e),r&512&&(un||a===null||Oi(a,a.return)),r&64&&aa&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Ei;if(zn(n,e),Bn(e),r&512&&(un||a===null||Oi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ls]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),En(f,r,a),f[an]=e,k(f),r=f;break t;case"link":var _=T_("link","href",u).get(r+(a.href||""));if(_){for(var A=0;A<_.length;A++)if(f=_[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(A,1);break e}}f=u.createElement(r),En(f,r,a),u.head.appendChild(f);break;case"meta":if(_=T_("meta","content",u).get(r+(a.content||""))){for(A=0;A<_.length;A++)if(f=_[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(A,1);break e}}f=u.createElement(r),En(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[an]=e,k(f),r=f}e.stateNode=r}else A_(u,e.type,e.stateNode);else e.stateNode=b_(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?A_(u,e.type,e.stateNode):b_(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Tf(e,e.memoizedProps,a.memoizedProps)}break;case 27:zn(n,e),Bn(e),r&512&&(un||a===null||Oi(a,a.return)),a!==null&&r&4&&Tf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,e),Bn(e),r&512&&(un||a===null||Oi(a,a.return)),e.flags&32){u=e.stateNode;try{Nn(u,"")}catch(Ht){Pe(e,e.return,Ht)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,Tf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(Cf=!0);break;case 6:if(zn(n,e),Bn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Ht){Pe(e,e.return,Ht)}}break;case 3:if(ic=null,u=Ei,Ei=ec(n.containerInfo),zn(n,e),Ei=u,Bn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{xr(n.containerInfo)}catch(Ht){Pe(e,e.return,Ht)}Cf&&(Cf=!1,Ag(e));break;case 4:r=Ei,Ei=ec(e.stateNode.containerInfo),zn(n,e),Bn(e),Ei=r;break;case 12:zn(n,e),Bn(e);break;case 31:zn(n,e),Bn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Gl(e,r)));break;case 13:zn(n,e),Bn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xl=E()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Gl(e,r)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,J=aa,ft=un;if(aa=J||u,un=ft||z,zn(n,e),un=ft,aa=J,Bn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||aa||un||bs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=z.stateNode;var gt=z.memoizedProps.style,it=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Ht){Pe(z,z.return,Ht)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(Ht){Pe(z,z.return,Ht)}}}else if(n.tag===18){if(a===null){z=n;try{var rt=z.stateNode;u?m_(rt,!0):m_(z.stateNode,!1)}catch(Ht){Pe(z,z.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Gl(e,a))));break;case 19:zn(n,e),Bn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Gl(e,r)));break;case 30:break;case 21:break;default:zn(n,e),Bn(e)}}function Bn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(_g(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Af(e);Hl(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Nn(_,""),a.flags&=-33);var A=Af(e);Hl(e,A,_);break;case 3:case 4:var z=a.stateNode.containerInfo,J=Af(e);Rf(e,J,z);break;default:throw Error(s(161))}}catch(ft){Pe(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ag(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ag(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ra(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Sg(e,n.alternate,n),n=n.sibling}function bs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),bs(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&mg(n,n.return,a),bs(n);break;case 27:Ro(n.stateNode);case 26:case 5:Oi(n,n.return),bs(n);break;case 22:n.memoizedState===null&&bs(n);break;case 30:bs(n);break;default:bs(n)}e=e.sibling}}function oa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:oa(u,f,a),_o(4,f);break;case 1:if(oa(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Pe(r,r.return,J)}if(r=f,u=r.updateQueue,u!==null){var A=r.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)im(z[u],A)}catch(J){Pe(r,r.return,J)}}a&&_&64&&pg(f),vo(f,f.return);break;case 27:vg(f);case 26:case 5:oa(u,f,a),a&&r===null&&_&4&&gg(f),vo(f,f.return);break;case 12:oa(u,f,a);break;case 31:oa(u,f,a),a&&_&4&&Eg(u,f);break;case 13:oa(u,f,a),a&&_&4&&bg(u,f);break;case 22:f.memoizedState===null&&oa(u,f,a),vo(f,f.return);break;case 30:break;default:oa(u,f,a)}n=n.sibling}}function Df(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&io(a))}function wf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&io(e))}function bi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Rg(e,n,a,r),n=n.sibling}function Rg(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,r),u&2048&&_o(9,n);break;case 1:bi(e,n,a,r);break;case 3:bi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&io(e)));break;case 12:if(u&2048){bi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,A=f.onPostCommit;typeof A=="function"&&A(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Pe(n,n.return,z)}}else bi(e,n,a,r);break;case 31:bi(e,n,a,r);break;case 13:bi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?bi(e,n,a,r):xo(e,n):f._visibility&2?bi(e,n,a,r):(f._visibility|=2,lr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Df(_,n);break;case 24:bi(e,n,a,r),u&2048&&wf(n.alternate,n);break;default:bi(e,n,a,r)}}function lr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,A=a,z=r,J=_.flags;switch(_.tag){case 0:case 11:case 15:lr(f,_,A,z,u),_o(8,_);break;case 23:break;case 22:var ft=_.stateNode;_.memoizedState!==null?ft._visibility&2?lr(f,_,A,z,u):xo(f,_):(ft._visibility|=2,lr(f,_,A,z,u)),u&&J&2048&&Df(_.alternate,_);break;case 24:lr(f,_,A,z,u),u&&J&2048&&wf(_.alternate,_);break;default:lr(f,_,A,z,u)}n=n.sibling}}function xo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:xo(a,r),u&2048&&Df(r.alternate,r);break;case 24:xo(a,r),u&2048&&wf(r.alternate,r);break;default:xo(a,r)}n=n.sibling}}var So=8192;function cr(e,n,a){if(e.subtreeFlags&So)for(e=e.child;e!==null;)Cg(e,n,a),e=e.sibling}function Cg(e,n,a){switch(e.tag){case 26:cr(e,n,a),e.flags&So&&e.memoizedState!==null&&OS(a,Ei,e.memoizedState,e.memoizedProps);break;case 5:cr(e,n,a);break;case 3:case 4:var r=Ei;Ei=ec(e.stateNode.containerInfo),cr(e,n,a),Ei=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=So,So=16777216,cr(e,n,a),So=r):cr(e,n,a));break;default:cr(e,n,a)}}function Dg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,Ug(r,e)}Dg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wg(e),e=e.sibling}function wg(e){switch(e.tag){case 0:case 11:case 15:Mo(e),e.flags&2048&&za(9,e,e.return);break;case 3:Mo(e);break;case 12:Mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Vl(e)):Mo(e);break;default:Mo(e)}}function Vl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,Ug(r,e)}Dg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:za(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}e=e.sibling}}function Ug(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:io(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,vn=r;else t:for(a=e;vn!==null;){r=vn;var u=r.sibling,f=r.return;if(Mg(r),r===a){vn=null;break t}if(u!==null){u.return=f,vn=u;break t}vn=f}}}var Zx={getCacheForType:function(e){var n=Mn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(on).controller.signal}},Kx=typeof WeakMap=="function"?WeakMap:Map,we=0,Ve=null,ge=null,xe=0,Oe=0,$n=null,Ba=!1,ur=!1,Uf=!1,la=0,$e=0,Ha=0,Ts=0,Lf=0,ti=0,fr=0,yo=null,Hn=null,Nf=!1,Xl=0,Lg=0,kl=1/0,Wl=null,Ga=null,pn=0,Va=null,hr=null,ca=0,Of=0,Pf=null,Ng=null,Eo=0,If=null;function ei(){return(we&2)!==0&&xe!==0?xe&-xe:O.T!==null?Vf():Ui()}function Og(){if(ti===0)if((xe&536870912)===0||Me){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ti=e}else ti=536870912;return e=Qn.current,e!==null&&(e.flags|=32),ti}function Gn(e,n,a){(e===Ve&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(dr(e,0),Xa(e,xe,ti,!1)),wn(e,a),((we&2)===0||e!==Ve)&&(e===Ve&&((we&2)===0&&(Ts|=a),$e===4&&Xa(e,xe,ti,!1)),Pi(e))}function Pg(e,n,a){if((we&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||zt(e,n),u=r?$x(e,n):zf(e,n,!0),f=r;do{if(u===0){ur&&!r&&Xa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Qx(a)){u=zf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=e;u=yo;var z=A.current.memoizedState.isDehydrated;if(z&&(dr(A,_).flags|=256),_=zf(A,_,!1),_!==2){if(Uf&&!z){A.errorRecoveryDisabledLanes|=f,Ts|=f,u=4;break t}f=Hn,Hn=u,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){dr(e,0),Xa(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(r,n,ti,!Ba);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Xl+300-E(),10<u)){if(Xa(r,n,ti,!Ba),ct(r,0,!0)!==0)break t;ca=n,r.timeoutHandle=h_(Ig.bind(null,r,a,Hn,Wl,Nf,n,ti,Ts,fr,Ba,f,"Throttled",-0,0),u);break t}Ig(r,a,Hn,Wl,Nf,n,ti,Ts,fr,Ba,f,null,-0,0)}}break}while(!0);Pi(e)}function Ig(e,n,a,r,u,f,_,A,z,J,ft,gt,it,rt){if(e.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Cg(n,f,gt);var Ht=(f&62914560)===f?Xl-E():(f&4194048)===f?Lg-E():0;if(Ht=PS(gt,Ht),Ht!==null){ca=f,e.cancelPendingCommit=Ht(kg.bind(null,e,n,f,a,r,u,_,A,z,ft,gt,null,it,rt)),Xa(e,f,_,!J);return}}kg(e,n,f,a,r,u,_,A,z)}function Qx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(e,n,a,r){n&=~Lf,n&=~Ts,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Lt(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&kr(e,a,n)}function Yl(){return(we&6)===0?(bo(0),!1):!0}function Ff(){if(ge!==null){if(Oe===0)var e=ge.return;else e=ge,Ji=gs=null,Ju(e),ir=null,so=0,e=ge;for(;e!==null;)dg(e.alternate,e),e=e.return;ge=null}}function dr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,_S(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ca=0,Ff(),Ve=e,ge=a=Ki(e.current,null),xe=n,Oe=0,$n=null,Ba=!1,ur=zt(e,n),Uf=!1,fr=ti=Lf=Ts=Ha=$e=0,Hn=yo=null,Nf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Lt(r),f=1<<u;n|=e[u],r&=~f}return la=n,dl(),a}function Fg(e,n){le=null,O.H=po,n===nr||n===Ml?(n=$p(),Oe=3):n===Hu?(n=$p(),Oe=4):Oe=n===mf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,ge===null&&($e=1,Pl(e,ri(n,e.current)))}function zg(){var e=Qn.current;return e===null?!0:(xe&4194048)===xe?ui===null:(xe&62914560)===xe||(xe&536870912)!==0?e===ui:!1}function Bg(){var e=O.H;return O.H=po,e===null?po:e}function Hg(){var e=O.A;return O.A=Zx,e}function ql(){$e=4,Ba||(xe&4194048)!==xe&&Qn.current!==null||(ur=!0),(Ha&134217727)===0&&(Ts&134217727)===0||Ve===null||Xa(Ve,xe,ti,!1)}function zf(e,n,a){var r=we;we|=2;var u=Bg(),f=Hg();(Ve!==e||xe!==n)&&(Wl=null,dr(e,n)),n=!1;var _=$e;t:do try{if(Oe!==0&&ge!==null){var A=ge,z=$n;switch(Oe){case 8:Ff(),_=6;break t;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var J=Oe;if(Oe=0,$n=null,pr(e,A,z,J),a&&ur){_=0;break t}break;default:J=Oe,Oe=0,$n=null,pr(e,A,z,J)}}Jx(),_=$e;break}catch(ft){Fg(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Ji=gs=null,we=r,O.H=u,O.A=f,ge===null&&(Ve=null,xe=0,dl()),_}function Jx(){for(;ge!==null;)Gg(ge)}function $x(e,n){var a=we;we|=2;var r=Bg(),u=Hg();Ve!==e||xe!==n?(Wl=null,kl=E()+500,dr(e,n)):ur=zt(e,n);t:do try{if(Oe!==0&&ge!==null){n=ge;var f=$n;e:switch(Oe){case 1:Oe=0,$n=null,pr(e,n,f,1);break;case 2:case 9:if(Qp(f)){Oe=0,$n=null,Vg(n);break}n=function(){Oe!==2&&Oe!==9||Ve!==e||(Oe=7),Pi(e)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:Qp(f)?(Oe=0,$n=null,Vg(n)):(Oe=0,$n=null,pr(e,n,f,7));break;case 5:var _=null;switch(ge.tag){case 26:_=ge.memoizedState;case 5:case 27:var A=ge;if(_?R_(_):A.stateNode.complete){Oe=0,$n=null;var z=A.sibling;if(z!==null)ge=z;else{var J=A.return;J!==null?(ge=J,jl(J)):ge=null}break e}}Oe=0,$n=null,pr(e,n,f,5);break;case 6:Oe=0,$n=null,pr(e,n,f,6);break;case 8:Ff(),$e=6;break t;default:throw Error(s(462))}}tS();break}catch(ft){Fg(e,ft)}while(!0);return Ji=gs=null,O.H=r,O.A=u,we=a,ge!==null?0:(Ve=null,xe=0,dl(),$e)}function tS(){for(;ge!==null&&!Wt();)Gg(ge)}function Gg(e){var n=fg(e.alternate,e,la);e.memoizedProps=e.pendingProps,n===null?jl(e):ge=n}function Vg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=sg(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=sg(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Ju(n);default:dg(a,n),n=ge=Hp(n,la),n=fg(a,n,la)}e.memoizedProps=e.pendingProps,n===null?jl(e):ge=n}function pr(e,n,a,r){Ji=gs=null,Ju(n),ir=null,so=0;var u=n.return;try{if(Vx(e,u,n,a,xe)){$e=1,Pl(e,ri(a,e.current)),ge=null;return}}catch(f){if(u!==null)throw ge=u,f;$e=1,Pl(e,ri(a,e.current)),ge=null;return}n.flags&32768?(Me||r===1?e=!0:ur||(xe&536870912)!==0?e=!1:(Ba=e=!0,(r===2||r===9||r===3||r===6)&&(r=Qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Xg(n,e)):jl(n)}function jl(e){var n=e;do{if((n.flags&32768)!==0){Xg(n,Ba);return}e=n.return;var a=Wx(n.alternate,n,la);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);$e===0&&($e=5)}function Xg(e,n){do{var a=Yx(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);$e=6,ge=null}function kg(e,n,a,r,u,f,_,A,z){e.cancelPendingCommit=null;do Zl();while(pn!==0);if((we&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Tu,vi(e,a,f,_,A,z),e===Ve&&(ge=Ve=null,xe=0),hr=n,Va=e,ca=a,Of=f,Pf=u,Ng=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,aS(ut,function(){return Zg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,u=I.p,I.p=2,_=we,we|=4;try{qx(e,n,a)}finally{we=_,I.p=u,O.T=r}}pn=1,Wg(),Yg(),qg()}}function Wg(){if(pn===1){pn=0;var e=Va,n=hr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=I.p;I.p=2;var u=we;we|=4;try{Tg(n,e);var f=Kf,_=Up(e.containerInfo),A=f.focusedElem,z=f.selectionRange;if(_!==A&&A&&A.ownerDocument&&wp(A.ownerDocument.documentElement,A)){if(z!==null&&Su(A)){var J=z.start,ft=z.end;if(ft===void 0&&(ft=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(ft,A.value.length);else{var gt=A.ownerDocument||document,it=gt&&gt.defaultView||window;if(it.getSelection){var rt=it.getSelection(),Ht=A.textContent.length,Qt=Math.min(z.start,Ht),He=z.end===void 0?Qt:Math.min(z.end,Ht);!rt.extend&&Qt>He&&(_=He,He=Qt,Qt=_);var j=Dp(A,Qt),X=Dp(A,He);if(j&&X&&(rt.rangeCount!==1||rt.anchorNode!==j.node||rt.anchorOffset!==j.offset||rt.focusNode!==X.node||rt.focusOffset!==X.offset)){var Q=gt.createRange();Q.setStart(j.node,j.offset),rt.removeAllRanges(),Qt>He?(rt.addRange(Q),rt.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),rt.addRange(Q))}}}}for(gt=[],rt=A;rt=rt.parentNode;)rt.nodeType===1&&gt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var mt=gt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}oc=!!Zf,Kf=Zf=null}finally{we=u,I.p=r,O.T=a}}e.current=n,pn=2}}function Yg(){if(pn===2){pn=0;var e=Va,n=hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=I.p;I.p=2;var u=we;we|=4;try{Sg(e,n.alternate,n)}finally{we=u,I.p=r,O.T=a}}pn=3}}function qg(){if(pn===4||pn===3){pn=0,L();var e=Va,n=hr,a=ca,r=Ng;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,hr=Va=null,jg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ga=null),Hs(a),n=n.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,u=I.p,I.p=2,O.T=null;try{for(var f=e.onRecoverableError,_=0;_<r.length;_++){var A=r[_];f(A.value,{componentStack:A.stack})}}finally{O.T=n,I.p=u}}(ca&3)!==0&&Zl(),Pi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===If?Eo++:(Eo=0,If=e):Eo=0,bo(0)}}function jg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,io(n)))}function Zl(){return Wg(),Yg(),qg(),Zg()}function Zg(){if(pn!==5)return!1;var e=Va,n=Of;Of=0;var a=Hs(ca),r=O.T,u=I.p;try{I.p=32>a?32:a,O.T=null,a=Pf,Pf=null;var f=Va,_=ca;if(pn=0,hr=Va=null,ca=0,(we&6)!==0)throw Error(s(331));var A=we;if(we|=4,wg(f.current),Rg(f,f.current,_,a),we=A,bo(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{I.p=u,O.T=r,jg(e,n)}}function Kg(e,n,a){n=ri(a,n),n=pf(e.stateNode,n,2),e=Pa(e,n,2),e!==null&&(wn(e,2),Pi(e))}function Pe(e,n,a){if(e.tag===3)Kg(e,e,a);else for(;n!==null;){if(n.tag===3){Kg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ga===null||!Ga.has(r))){e=ri(a,e),a=Qm(2),r=Pa(n,a,2),r!==null&&(Jm(a,r,n,e),wn(r,2),Pi(r));break}}n=n.return}}function Bf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Kx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Uf=!0,u.add(a),e=eS.bind(null,e,n,a),n.then(e,e))}function eS(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(xe&a)===a&&($e===4||$e===3&&(xe&62914560)===xe&&300>E()-Xl?(we&2)===0&&dr(e,0):Lf|=a,fr===xe&&(fr=0)),Pi(e)}function Qg(e,n){n===0&&(n=Ne()),e=ds(e,n),e!==null&&(wn(e,n),Pi(e))}function nS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Qg(e,a)}function iS(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Qg(e,a)}function aS(e,n){return ye(e,n)}var Kl=null,mr=null,Hf=!1,Ql=!1,Gf=!1,ka=0;function Pi(e){e!==mr&&e.next===null&&(mr===null?Kl=mr=e:mr=mr.next=e),Ql=!0,Hf||(Hf=!0,rS())}function bo(e,n){if(!Gf&&Ql){Gf=!0;do for(var a=!1,r=Kl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-Lt(42|e)+1)-1,f&=u&~(_&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,e_(r,f))}else f=xe,f=ct(r,r===Ve?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||zt(r,f)||(a=!0,e_(r,f));r=r.next}while(a);Gf=!1}}function sS(){Jg()}function Jg(){Ql=Hf=!1;var e=0;ka!==0&&gS()&&(e=ka);for(var n=E(),a=null,r=Kl;r!==null;){var u=r.next,f=$g(r,n);f===0?(r.next=null,a===null?Kl=u:a.next=u,u===null&&(mr=a)):(a=r,(e!==0||(f&3)!==0)&&(Ql=!0)),r=u}pn!==0&&pn!==5||bo(e),ka!==0&&(ka=0)}function $g(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Lt(f),A=1<<_,z=u[_];z===-1?((A&a)===0||(A&r)!==0)&&(u[_]=ne(A,n)):z<=n&&(e.expiredLanes|=A),f&=~A}if(n=Ve,a=xe,a=ct(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ue(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ue(r),Hs(a)){case 2:case 8:a=xt;break;case 32:a=ut;break;case 268435456:a=Ct;break;default:a=ut}return r=t_.bind(null,e),a=ye(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ue(r),e.callbackPriority=2,e.callbackNode=null,2}function t_(e,n){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zl()&&e.callbackNode!==a)return null;var r=xe;return r=ct(e,e===Ve?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Pg(e,r,n),$g(e,E()),e.callbackNode!=null&&e.callbackNode===a?t_.bind(null,e):null)}function e_(e,n){if(Zl())return null;Pg(e,n,!0)}function rS(){vS(function(){(we&6)!==0?ye(pt,sS):Jg()})}function Vf(){if(ka===0){var e=tr;e===0&&(e=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),ka=e}return ka}function n_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sl(""+e)}function i_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function oS(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=n_((u[hn]||null).action),_=r.submitter;_&&(n=(n=_[hn]||null)?n_(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var A=new cl("action","action",null,r,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ka!==0){var z=_?i_(u,_):new FormData(u);lf(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(A.preventDefault(),z=_?i_(u,_):new FormData(u),lf(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var Xf=0;Xf<bu.length;Xf++){var kf=bu[Xf],lS=kf.toLowerCase(),cS=kf[0].toUpperCase()+kf.slice(1);yi(lS,"on"+cS)}yi(Op,"onAnimationEnd"),yi(Pp,"onAnimationIteration"),yi(Ip,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(Tx,"onTransitionRun"),yi(Ax,"onTransitionStart"),yi(Rx,"onTransitionCancel"),yi(Fp,"onTransitionEnd"),Dt("onMouseEnter",["mouseout","mouseover"]),Dt("onMouseLeave",["mouseout","mouseover"]),Dt("onPointerEnter",["pointerout","pointerover"]),Dt("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function a_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var A=r[_],z=A.instance,J=A.currentTarget;if(A=A.listener,z!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=J;try{f(u)}catch(ft){hl(ft)}u.currentTarget=null,f=z}else for(_=0;_<r.length;_++){if(A=r[_],z=A.instance,J=A.currentTarget,A=A.listener,z!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=J;try{f(u)}catch(ft){hl(ft)}u.currentTarget=null,f=z}}}}function _e(e,n){var a=n[Ta];a===void 0&&(a=n[Ta]=new Set);var r=e+"__bubble";a.has(r)||(s_(n,e,2,!1),a.add(r))}function Wf(e,n,a){var r=0;n&&(r|=4),s_(a,e,r,n)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function Yf(e){if(!e[Jl]){e[Jl]=!0,st.forEach(function(a){a!=="selectionchange"&&(uS.has(a)||Wf(a,!1,e),Wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jl]||(n[Jl]=!0,Wf("selectionchange",!1,n))}}function s_(e,n,a,r){switch(O_(n)){case 2:var u=zS;break;case 8:u=BS;break;default:u=oh}a=u.bind(null,n,a,e),u=void 0,!fu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function qf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var A=r.stateNode.containerInfo;if(A===u)break;if(_===4)for(_=r.return;_!==null;){var z=_.tag;if((z===3||z===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;A!==null;){if(_=Aa(A),_===null)return;if(z=_.tag,z===5||z===6||z===26||z===27){r=f=_;continue t}A=A.parentNode}}r=r.return}up(function(){var J=f,ft=cu(a),gt=[];t:{var it=zp.get(e);if(it!==void 0){var rt=cl,Ht=e;switch(e){case"keypress":if(ol(a)===0)break t;case"keydown":case"keyup":rt=ix;break;case"focusin":Ht="focus",rt=mu;break;case"focusout":Ht="blur",rt=mu;break;case"beforeblur":case"afterblur":rt=mu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=rx;break;case Op:case Pp:case Ip:rt=jv;break;case Fp:rt=lx;break;case"scroll":case"scrollend":rt=Xv;break;case"wheel":rt=ux;break;case"copy":case"cut":case"paste":rt=Kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=mp;break;case"toggle":case"beforetoggle":rt=hx}var Qt=(n&4)!==0,He=!Qt&&(e==="scroll"||e==="scrollend"),j=Qt?it!==null?it+"Capture":null:it;Qt=[];for(var X=J,Q;X!==null;){var mt=X;if(Q=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||Q===null||j===null||(mt=Yr(X,j),mt!=null&&Qt.push(Ao(X,mt,Q))),He)break;X=X.return}0<Qt.length&&(it=new rt(it,Ht,null,a,ft),gt.push({event:it,listeners:Qt}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",it&&a!==lu&&(Ht=a.relatedTarget||a.fromElement)&&(Aa(Ht)||Ht[Yi]))break t;if((rt||it)&&(it=ft.window===ft?ft:(it=ft.ownerDocument)?it.defaultView||it.parentWindow:window,rt?(Ht=a.relatedTarget||a.toElement,rt=J,Ht=Ht?Aa(Ht):null,Ht!==null&&(He=c(Ht),Qt=Ht.tag,Ht!==He||Qt!==5&&Qt!==27&&Qt!==6)&&(Ht=null)):(rt=null,Ht=J),rt!==Ht)){if(Qt=dp,mt="onMouseLeave",j="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(Qt=mp,mt="onPointerLeave",j="onPointerEnter",X="pointer"),He=rt==null?it:cs(rt),Q=Ht==null?it:cs(Ht),it=new Qt(mt,X+"leave",rt,a,ft),it.target=He,it.relatedTarget=Q,mt=null,Aa(ft)===J&&(Qt=new Qt(j,X+"enter",Ht,a,ft),Qt.target=Q,Qt.relatedTarget=He,mt=Qt),He=mt,rt&&Ht)e:{for(Qt=fS,j=rt,X=Ht,Q=0,mt=j;mt;mt=Qt(mt))Q++;mt=0;for(var Kt=X;Kt;Kt=Qt(Kt))mt++;for(;0<Q-mt;)j=Qt(j),Q--;for(;0<mt-Q;)X=Qt(X),mt--;for(;Q--;){if(j===X||X!==null&&j===X.alternate){Qt=j;break e}j=Qt(j),X=Qt(X)}Qt=null}else Qt=null;rt!==null&&r_(gt,it,rt,Qt,!1),Ht!==null&&He!==null&&r_(gt,He,Ht,Qt,!0)}}t:{if(it=J?cs(J):window,rt=it.nodeName&&it.nodeName.toLowerCase(),rt==="select"||rt==="input"&&it.type==="file")var Re=Ep;else if(Mp(it))if(bp)Re=yx;else{Re=Sx;var Yt=xx}else rt=it.nodeName,!rt||rt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?J&&Vs(J.elementType)&&(Re=Ep):Re=Mx;if(Re&&(Re=Re(e,J))){yp(gt,Re,a,ft);break t}Yt&&Yt(e,it,J),e==="focusout"&&J&&it.type==="number"&&J.memoizedProps.value!=null&&Si(it,"number",it.value)}switch(Yt=J?cs(J):window,e){case"focusin":(Mp(Yt)||Yt.contentEditable==="true")&&(Ys=Yt,Mu=J,to=null);break;case"focusout":to=Mu=Ys=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Lp(gt,a,ft);break;case"selectionchange":if(bx)break;case"keydown":case"keyup":Lp(gt,a,ft)}var fe;if(_u)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Ws?xp(e,a)&&(Se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(gp&&a.locale!=="ko"&&(Ws||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Ws&&(fe=fp()):(Ca=ft,hu="value"in Ca?Ca.value:Ca.textContent,Ws=!0)),Yt=$l(J,Se),0<Yt.length&&(Se=new pp(Se,e,null,a,ft),gt.push({event:Se,listeners:Yt}),fe?Se.data=fe:(fe=Sp(a),fe!==null&&(Se.data=fe)))),(fe=px?mx(e,a):gx(e,a))&&(Se=$l(J,"onBeforeInput"),0<Se.length&&(Yt=new pp("onBeforeInput","beforeinput",null,a,ft),gt.push({event:Yt,listeners:Se}),Yt.data=fe)),oS(gt,e,J,a,ft)}a_(gt,n)})}function Ao(e,n,a){return{instance:e,listener:n,currentTarget:a}}function $l(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Yr(e,a),u!=null&&r.unshift(Ao(e,u,f)),u=Yr(e,n),u!=null&&r.push(Ao(e,u,f))),e.tag===3)return r;e=e.return}return[]}function fS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function r_(e,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var A=a,z=A.alternate,J=A.stateNode;if(A=A.tag,z!==null&&z===r)break;A!==5&&A!==26&&A!==27||J===null||(z=J,u?(J=Yr(a,f),J!=null&&_.unshift(Ao(a,J,z))):u||(J=Yr(a,f),J!=null&&_.push(Ao(a,J,z)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var hS=/\r\n?/g,dS=/\u0000|\uFFFD/g;function o_(e){return(typeof e=="string"?e:""+e).replace(hS,`
`).replace(dS,"")}function l_(e,n){return n=o_(n),o_(e)===n}function Be(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Nn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Nn(e,""+r);break;case"className":ae(e,"class",r);break;case"tabIndex":ae(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ae(e,a,r);break;case"style":qi(e,r,f);break;case"data":if(n!=="object"){ae(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=sl(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(e,n,"name",u.name,u,null),Be(e,n,"formEncType",u.formEncType,u,null),Be(e,n,"formMethod",u.formMethod,u,null),Be(e,n,"formTarget",u.formTarget,u,null)):(Be(e,n,"encType",u.encType,u,null),Be(e,n,"method",u.method,u,null),Be(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=sl(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=ji);break;case"onScroll":r!=null&&_e("scroll",e);break;case"onScrollEnd":r!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=sl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":_e("beforetoggle",e),_e("toggle",e),te(e,"popover",r);break;case"xlinkActuate":Bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Bt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Bt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Bt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Bt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":te(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gv.get(a)||a,te(e,a,r))}}function jf(e,n,a,r,u,f){switch(a){case"style":qi(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Nn(e,r):(typeof r=="number"||typeof r=="bigint")&&Nn(e,""+r);break;case"onScroll":r!=null&&_e("scroll",e);break;case"onScrollEnd":r!=null&&_e("scrollend",e);break;case"onClick":r!=null&&(e.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!et.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):te(e,a,r)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(e,n,f,_,a,null)}}u&&Be(e,n,"srcSet",a.srcSet,a,null),r&&Be(e,n,"src",a.src,a,null);return;case"input":_e("invalid",e);var A=f=_=u=null,z=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":u=ft;break;case"type":_=ft;break;case"checked":z=ft;break;case"defaultChecked":J=ft;break;case"value":f=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Be(e,n,r,ft,a,null)}}qn(e,f,A,z,J,_,u,!1);return;case"select":_e("invalid",e),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":_=A;break;case"multiple":r=A;default:Be(e,n,u,A,a,null)}n=f,a=_,e.multiple=!!r,n!=null?jn(e,!!r,n,!1):a!=null&&jn(e,!!r,a,!0);return;case"textarea":_e("invalid",e),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":r=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Be(e,n,_,A,a,null)}sn(e,r,u,f);return;case"option":for(z in a)a.hasOwnProperty(z)&&(r=a[z],r!=null)&&(z==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Be(e,n,z,r,a,null));return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(r=0;r<To.length;r++)_e(To[r],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(e,n,J,r,a,null)}return;default:if(Vs(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&jf(e,n,ft,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Be(e,n,A,r,a,null))}function pS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,A=null,z=null,J=null,ft=null;for(rt in a){var gt=a[rt];if(a.hasOwnProperty(rt)&&gt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":z=gt;default:r.hasOwnProperty(rt)||Be(e,n,rt,null,r,gt)}}for(var it in r){var rt=r[it];if(gt=a[it],r.hasOwnProperty(it)&&(rt!=null||gt!=null))switch(it){case"type":f=rt;break;case"name":u=rt;break;case"checked":J=rt;break;case"defaultChecked":ft=rt;break;case"value":_=rt;break;case"defaultValue":A=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==gt&&Be(e,n,it,rt,r,gt)}}Ln(e,_,A,z,J,ft,f,u);return;case"select":rt=_=A=it=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":rt=z;default:r.hasOwnProperty(f)||Be(e,n,f,null,r,z)}for(u in r)if(f=r[u],z=a[u],r.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":it=f;break;case"defaultValue":A=f;break;case"multiple":_=f;default:f!==z&&Be(e,n,u,f,r,z)}n=A,a=_,r=rt,it!=null?jn(e,!!a,it,!1):!!r!=!!a&&(n!=null?jn(e,!!a,n,!0):jn(e,!!a,a?[]:"",!1));return;case"textarea":rt=it=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Be(e,n,A,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":it=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Be(e,n,_,u,r,f)}Le(e,it,rt);return;case"option":for(var Ht in a)it=a[Ht],a.hasOwnProperty(Ht)&&it!=null&&!r.hasOwnProperty(Ht)&&(Ht==="selected"?e.selected=!1:Be(e,n,Ht,null,r,it));for(z in r)it=r[z],rt=a[z],r.hasOwnProperty(z)&&it!==rt&&(it!=null||rt!=null)&&(z==="selected"?e.selected=it&&typeof it!="function"&&typeof it!="symbol":Be(e,n,z,it,r,rt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)it=a[Qt],a.hasOwnProperty(Qt)&&it!=null&&!r.hasOwnProperty(Qt)&&Be(e,n,Qt,null,r,it);for(J in r)if(it=r[J],rt=a[J],r.hasOwnProperty(J)&&it!==rt&&(it!=null||rt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Be(e,n,J,it,r,rt)}return;default:if(Vs(n)){for(var He in a)it=a[He],a.hasOwnProperty(He)&&it!==void 0&&!r.hasOwnProperty(He)&&jf(e,n,He,void 0,r,it);for(ft in r)it=r[ft],rt=a[ft],!r.hasOwnProperty(ft)||it===rt||it===void 0&&rt===void 0||jf(e,n,ft,it,r,rt);return}}for(var j in a)it=a[j],a.hasOwnProperty(j)&&it!=null&&!r.hasOwnProperty(j)&&Be(e,n,j,null,r,it);for(gt in r)it=r[gt],rt=a[gt],!r.hasOwnProperty(gt)||it===rt||it==null&&rt==null||Be(e,n,gt,it,r,rt)}function c_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,A=u.duration;if(f&&A&&c_(_)){for(_=0,A=u.responseEnd,r+=1;r<a.length;r++){var z=a[r],J=z.startTime;if(J>A)break;var ft=z.transferSize,gt=z.initiatorType;ft&&c_(gt)&&(z=z.responseEnd,_+=ft*(z<A?1:(A-J)/(z-J)))}if(--r,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Zf=null,Kf=null;function tc(e){return e.nodeType===9?e:e.ownerDocument}function u_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Qf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jf=null;function gS(){var e=window.event;return e&&e.type==="popstate"?e===Jf?!1:(Jf=e,!0):(Jf=null,!1)}var h_=typeof setTimeout=="function"?setTimeout:void 0,_S=typeof clearTimeout=="function"?clearTimeout:void 0,d_=typeof Promise=="function"?Promise:void 0,vS=typeof queueMicrotask=="function"?queueMicrotask:typeof d_<"u"?function(e){return d_.resolve(null).then(e).catch(xS)}:h_;function xS(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function p_(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),xr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Ro(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ro(a);for(var f=a.firstChild;f;){var _=f.nextSibling,A=f.nodeName;f[ls]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Ro(e.ownerDocument.body);a=u}while(a);xr(n)}function m_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function $f(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$f(a),Wr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function SS(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ls])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function MS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function g_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fi(e.nextSibling),e===null))return null;return e}function th(e){return e.data==="$?"||e.data==="$~"}function eh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function yS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var nh=null;function __(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return fi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function v_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function x_(e,n,a){switch(n=tc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ro(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Wr(e)}var hi=new Map,S_=new Set;function ec(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=I.d;I.d={f:ES,r:bS,D:TS,C:AS,L:RS,m:CS,X:wS,S:DS,M:US};function ES(){var e=ua.f(),n=Yl();return e||n}function bS(e){var n=Ra(e);n!==null&&n.tag===5&&n.type==="form"?Fm(n):ua.r(e)}var gr=typeof document>"u"?null:document;function M_(e,n,a){var r=gr;if(r&&typeof n=="string"&&n){var u=ie(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),S_.has(u)||(S_.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),En(n,"link",e),k(n),r.head.appendChild(n)))}}function TS(e){ua.D(e),M_("dns-prefetch",e,null)}function AS(e,n){ua.C(e,n),M_("preconnect",e,n)}function RS(e,n,a){ua.L(e,n,a);var r=gr;if(r&&e&&n){var u='link[rel="preload"][as="'+ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ie(a.imageSizes)+'"]')):u+='[href="'+ie(e)+'"]';var f=u;switch(n){case"style":f=_r(e);break;case"script":f=vr(e)}hi.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),hi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Co(f))||n==="script"&&r.querySelector(Do(f))||(n=r.createElement("link"),En(n,"link",e),k(n),r.head.appendChild(n)))}}function CS(e,n){ua.m(e,n);var a=gr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ie(r)+'"][href="'+ie(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=vr(e)}if(!hi.has(f)&&(e=x({rel:"modulepreload",href:e},n),hi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(f)))return}r=a.createElement("link"),En(r,"link",e),k(r),a.head.appendChild(r)}}}function DS(e,n,a){ua.S(e,n,a);var r=gr;if(r&&e){var u=R(r).hoistableStyles,f=_r(e);n=n||"default";var _=u.get(f);if(!_){var A={loading:0,preload:null};if(_=r.querySelector(Co(f)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=hi.get(f))&&ih(e,a);var z=_=r.createElement("link");k(z),En(z,"link",e),z._p=new Promise(function(J,ft){z.onload=J,z.onerror=ft}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,nc(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:A},u.set(f,_)}}}function wS(e,n){ua.X(e,n);var a=gr;if(a&&e){var r=R(a).hoistableScripts,u=vr(e),f=r.get(u);f||(f=a.querySelector(Do(u)),f||(e=x({src:e,async:!0},n),(n=hi.get(u))&&ah(e,n),f=a.createElement("script"),k(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function US(e,n){ua.M(e,n);var a=gr;if(a&&e){var r=R(a).hoistableScripts,u=vr(e),f=r.get(u);f||(f=a.querySelector(Do(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=hi.get(u))&&ah(e,n),f=a.createElement("script"),k(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function y_(e,n,a,r){var u=(u=nt.current)?ec(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_r(a.href),a=R(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_r(a.href);var f=R(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(Co(e)))&&!f._p&&(_.instance=f,_.state.loading=5),hi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(e,a),f||LS(u,e,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vr(a),a=R(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function _r(e){return'href="'+ie(e)+'"'}function Co(e){return'link[rel="stylesheet"]['+e+"]"}function E_(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function LS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),En(n,"link",a),k(n),e.head.appendChild(n))}function vr(e){return'[src="'+ie(e)+'"]'}function Do(e){return"script[async]"+e}function b_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+ie(a.href)+'"]');if(r)return n.instance=r,k(r),r;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),k(r),En(r,"style",u),nc(r,a.precedence,e),n.instance=r;case"stylesheet":u=_r(a.href);var f=e.querySelector(Co(u));if(f)return n.state.loading|=4,n.instance=f,k(f),f;r=E_(a),(u=hi.get(u))&&ih(r,u),f=(e.ownerDocument||e).createElement("link"),k(f);var _=f;return _._p=new Promise(function(A,z){_.onload=A,_.onerror=z}),En(f,"link",r),n.state.loading|=4,nc(f,a.precedence,e),n.instance=f;case"script":return f=vr(a.src),(u=e.querySelector(Do(f)))?(n.instance=u,k(u),u):(r=a,(u=hi.get(f))&&(r=x({},a),ah(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),k(u),En(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,nc(r,a.precedence,e));return n.instance}function nc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var A=r[_];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ih(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ah(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ic=null;function T_(e,n,a){if(ic===null){var r=new Map,u=ic=new Map;u.set(a,r)}else u=ic,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ls]||f[an]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var A=r.get(_);A?A.push(f):r.set(_,[f])}}return r}function A_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function NS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function R_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function OS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_r(r.href),f=n.querySelector(Co(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ac.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,k(f);return}f=n.ownerDocument||n,r=E_(r),(u=hi.get(u))&&ih(r,u),f=f.createElement("link"),k(f);var _=f;_._p=new Promise(function(A,z){_.onload=A,_.onerror=z}),En(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ac.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var sh=0;function PS(e,n){return e.stylesheets&&e.count===0&&rc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&sh===0&&(sh=62500*mS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>sh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var sc=null;function rc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sc=new Map,n.forEach(IS,e),sc=null,ac.call(e))}function IS(e,n){if(!(n.state.loading&4)){var a=sc.get(e);if(a)var r=a.get(null);else{a=new Map,sc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=ac.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var wo={$$typeof:N,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function FS(e,n,a,r,u,f,_,A,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function C_(e,n,a,r,u,f,_,A,z,J,ft,gt){return e=new FS(e,n,a,_,z,J,ft,gt,A),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),e.current=f,f.stateNode=e,n=Fu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Gu(f),e}function D_(e){return e?(e=Zs,e):Zs}function w_(e,n,a,r,u,f){u=D_(u),r.context===null?r.context=u:r.pendingContext=u,r=Oa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Pa(e,r,n),a!==null&&(Gn(a,e,n),oo(a,e,n))}function U_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function rh(e,n){U_(e,n),(e=e.alternate)&&U_(e,n)}function L_(e){if(e.tag===13||e.tag===31){var n=ds(e,67108864);n!==null&&Gn(n,e,67108864),rh(e,67108864)}}function N_(e){if(e.tag===13||e.tag===31){var n=ei();n=Bs(n);var a=ds(e,n);a!==null&&Gn(a,e,n),rh(e,n)}}var oc=!0;function zS(e,n,a,r){var u=O.T;O.T=null;var f=I.p;try{I.p=2,oh(e,n,a,r)}finally{I.p=f,O.T=u}}function BS(e,n,a,r){var u=O.T;O.T=null;var f=I.p;try{I.p=8,oh(e,n,a,r)}finally{I.p=f,O.T=u}}function oh(e,n,a,r){if(oc){var u=lh(r);if(u===null)qf(e,n,r,lc,a),P_(e,r);else if(GS(u,e,n,a,r))r.stopPropagation();else if(P_(e,r),n&4&&-1<HS.indexOf(e)){for(;u!==null;){var f=Ra(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Mt(f.pendingLanes);if(_!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var z=1<<31-Lt(_);A.entanglements[1]|=z,_&=~z}Pi(f),(we&6)===0&&(kl=E()+500,bo(0))}}break;case 31:case 13:A=ds(f,2),A!==null&&Gn(A,f,2),Yl(),rh(f,2)}if(f=lh(r),f===null&&qf(e,n,r,lc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else qf(e,n,r,null,a)}}function lh(e){return e=cu(e),ch(e)}var lc=null;function ch(e){if(lc=null,e=Aa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return lc=e,null}function O_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case pt:return 2;case xt:return 8;case ut:case Xt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var uh=!1,Ya=null,qa=null,ja=null,Uo=new Map,Lo=new Map,Za=[],HS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function P_(e,n){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function No(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ra(n),n!==null&&L_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function GS(e,n,a,r,u){switch(n){case"focusin":return Ya=No(Ya,e,n,a,r,u),!0;case"dragenter":return qa=No(qa,e,n,a,r,u),!0;case"mouseover":return ja=No(ja,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Uo.set(f,No(Uo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Lo.set(f,No(Lo.get(f)||null,e,n,a,r,u)),!0}return!1}function I_(e){var n=Aa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Gs(e.priority,function(){N_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Gs(e.priority,function(){N_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=lh(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);lu=r,a.target.dispatchEvent(r),lu=null}else return n=Ra(a),n!==null&&L_(n),e.blockedOn=a,!1;n.shift()}return!0}function F_(e,n,a){cc(e)&&a.delete(n)}function VS(){uh=!1,Ya!==null&&cc(Ya)&&(Ya=null),qa!==null&&cc(qa)&&(qa=null),ja!==null&&cc(ja)&&(ja=null),Uo.forEach(F_),Lo.forEach(F_)}function uc(e,n){e.blockedOn===n&&(e.blockedOn=null,uh||(uh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,VS)))}var fc=null;function z_(e){fc!==e&&(fc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){fc===e&&(fc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(ch(r||a)===null)continue;break}var f=Ra(a);f!==null&&(e.splice(n,3),n-=3,lf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function xr(e){function n(z){return uc(z,e)}Ya!==null&&uc(Ya,e),qa!==null&&uc(qa,e),ja!==null&&uc(ja,e),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<Za.length;a++){var r=Za[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)I_(a),a.blockedOn===null&&Za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[hn]||null;if(typeof f=="function")_||z_(a);else if(_){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[hn]||null)A=_.formAction;else if(ch(u)!==null)continue}else A=_.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),z_(a)}}}function B_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function fh(e){this._internalRoot=e}hc.prototype.render=fh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ei();w_(a,r,e,n,null,null)},hc.prototype.unmount=fh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;w_(e.current,2,null,e,null,null),Yl(),n[Yi]=null}};function hc(e){this._internalRoot=e}hc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ui();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,e),a===0&&I_(e)}};var H_=t.version;if(H_!=="19.2.4")throw Error(s(527,H_,"19.2.4"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var XS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{yt=dc.inject(XS),St=dc}catch{}}return Po.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=qm,f=jm,_=Zm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=C_(e,1,!1,null,null,a,r,null,u,f,_,B_),e[Yi]=n.current,Yf(e),new fh(n)},Po.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=qm,_=jm,A=Zm,z=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=C_(e,1,!0,n,a??null,r,u,z,f,_,A,B_),n.context=D_(null),a=n.current,r=ei(),r=Bs(r),u=Oa(r),u.callback=null,Pa(a,u,r),a=r,n.current.lanes=a,wn(n,a),Pi(n),e[Yi]=n.current,Yf(e),new hc(n)},Po.version="19.2.4",Po}var K_;function $S(){if(K_)return ph.exports;K_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ph.exports=JS(),ph.exports}var tM=$S();const Zd="183",xa={ROTATE:0,DOLLY:1,PAN:2},as={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eM=0,Q_=1,nM=2,Gc=1,iM=2,ko=3,rs=0,Wn=1,_a=2,Sa=0,Ir=1,J_=2,$_=3,t0=4,aM=5,Ls=100,sM=101,rM=102,oM=103,lM=104,cM=200,uM=201,fM=202,hM=203,ed=204,nd=205,dM=206,pM=207,mM=208,gM=209,_M=210,vM=211,xM=212,SM=213,MM=214,id=0,ad=1,sd=2,zr=3,rd=4,od=5,ld=6,cd=7,iv=0,yM=1,EM=2,Gi=0,av=1,sv=2,rv=3,ov=4,lv=5,cv=6,uv=7,fv=300,Is=301,Br=302,vh=303,xh=304,tu=306,ud=1e3,va=1001,fd=1002,bn=1003,bM=1004,pc=1005,Cn=1006,Sh=1007,Os=1008,gi=1009,hv=1010,dv=1011,qo=1012,Kd=1013,ki=1014,Bi=1015,ya=1016,Qd=1017,Jd=1018,jo=1020,pv=35902,mv=35899,gv=1021,_v=1022,Di=1023,Ea=1026,Ps=1027,vv=1028,$d=1029,Hr=1030,tp=1031,ep=1033,Vc=33776,Xc=33777,kc=33778,Wc=33779,hd=35840,dd=35841,pd=35842,md=35843,gd=36196,_d=37492,vd=37496,xd=37488,Sd=37489,Md=37490,yd=37491,Ed=37808,bd=37809,Td=37810,Ad=37811,Rd=37812,Cd=37813,Dd=37814,wd=37815,Ud=37816,Ld=37817,Nd=37818,Od=37819,Pd=37820,Id=37821,Fd=36492,zd=36494,Bd=36495,Hd=36283,Gd=36284,Vd=36285,Xd=36286,TM=3200,AM=0,RM=1,is="",pi="srgb",Gr="srgb-linear",Zc="linear",Ie="srgb",Sr=7680,e0=519,CM=512,DM=513,wM=514,np=515,UM=516,LM=517,ip=518,NM=519,n0=35044,i0="300 es",Hi=2e3,Kc=2001;function OM(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Zo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function PM(){const o=Zo("canvas");return o.style.display="block",o}const a0={};function s0(...o){const t="THREE."+o.shift();console.log(t,...o)}function xv(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ee(...o){o=xv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function be(...o){o=xv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function Qc(...o){const t=o.join(" ");t in a0||(a0[t]=!0,ee(...o))}function IM(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const FM={[id]:ad,[sd]:ld,[rd]:cd,[zr]:od,[ad]:id,[ld]:sd,[cd]:rd,[od]:zr};class Fs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=Math.PI/180,kd=180/Math.PI;function Qo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]).toLowerCase()}function pe(o,t,i){return Math.max(t,Math.min(i,o))}function zM(o,t){return(o%t+t)%t}function Mh(o,t,i){return(1-i)*o+i*t}function Io(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const BM={DEG2RAD:Yc};class oe{constructor(t=0,i=0){oe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(pe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class os{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],v=s[l+2],x=s[l+3],g=c[h+0],M=c[h+1],b=c[h+2],C=c[h+3];if(x!==C||m!==g||d!==M||v!==b){let y=m*g+d*M+v*b+x*C;y<0&&(g=-g,M=-M,b=-b,C=-C,y=-y);let S=1-p;if(y<.9995){const D=Math.acos(y),N=Math.sin(D);S=Math.sin(S*D)/N,p=Math.sin(p*D)/N,m=m*S+g*p,d=d*S+M*p,v=v*S+b*p,x=x*S+C*p}else{m=m*S+g*p,d=d*S+M*p,v=v*S+b*p,x=x*S+C*p;const D=1/Math.sqrt(m*m+d*d+v*v+x*x);m*=D,d*=D,v*=D,x*=D}}t[i]=m,t[i+1]=d,t[i+2]=v,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],v=s[l+3],x=c[h],g=c[h+1],M=c[h+2],b=c[h+3];return t[i]=p*b+v*x+m*M-d*g,t[i+1]=m*b+v*g+d*x-p*M,t[i+2]=d*b+v*M+p*g-m*x,t[i+3]=v*b-p*x-m*g-d*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,p=Math.cos,m=Math.sin,d=p(s/2),v=p(l/2),x=p(c/2),g=m(s/2),M=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=g*v*x+d*M*b,this._y=d*M*x-g*v*b,this._z=d*v*b+g*M*x,this._w=d*v*x-g*M*b;break;case"YXZ":this._x=g*v*x+d*M*b,this._y=d*M*x-g*v*b,this._z=d*v*b-g*M*x,this._w=d*v*x+g*M*b;break;case"ZXY":this._x=g*v*x-d*M*b,this._y=d*M*x+g*v*b,this._z=d*v*b+g*M*x,this._w=d*v*x-g*M*b;break;case"ZYX":this._x=g*v*x-d*M*b,this._y=d*M*x+g*v*b,this._z=d*v*b-g*M*x,this._w=d*v*x+g*M*b;break;case"YZX":this._x=g*v*x+d*M*b,this._y=d*M*x+g*v*b,this._z=d*v*b-g*M*x,this._w=d*v*x-g*M*b;break;case"XZY":this._x=g*v*x-d*M*b,this._y=d*M*x-g*v*b,this._z=d*v*b+g*M*x,this._w=d*v*x+g*M*b;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],v=i[6],x=i[10],g=s+p+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-d)*M,this._z=(h-l)*M}else if(s>p&&s>x){const M=2*Math.sqrt(1+s-p-x);this._w=(v-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+d)/M}else if(p>x){const M=2*Math.sqrt(1+p-s-x);this._w=(c-d)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+x-s-p);this._w=(h-l)/M,this._x=(c+d)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,p=i._x,m=i._y,d=i._z,v=i._w;return this._x=s*v+h*p+l*d-c*m,this._y=l*v+h*m+c*p-s*d,this._z=c*v+h*d+s*m-l*p,this._w=h*v-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),v=Math.sin(d);m=Math.sin(m*d)/v,i=Math.sin(i*d)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,s=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(r0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(r0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,p=t.z,m=t.w,d=2*(h*l-p*s),v=2*(p*i-c*l),x=2*(c*s-h*i);return this.x=i+m*d+h*x-p*v,this.y=s+m*v+p*d-c*x,this.z=l+m*x+c*v-h*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return yh.copy(this).projectOnVector(t),this.sub(yh)}reflect(t){return this.sub(yh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(pe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yh=new Z,r0=new os;class he{constructor(t,i,s,l,c,h,p,m,d){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d)}set(t,i,s,l,c,h,p,m,d){const v=this.elements;return v[0]=t,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],v=s[4],x=s[7],g=s[2],M=s[5],b=s[8],C=l[0],y=l[3],S=l[6],D=l[1],N=l[4],U=l[7],G=l[2],B=l[5],F=l[8];return c[0]=h*C+p*D+m*G,c[3]=h*y+p*N+m*B,c[6]=h*S+p*U+m*F,c[1]=d*C+v*D+x*G,c[4]=d*y+v*N+x*B,c[7]=d*S+v*U+x*F,c[2]=g*C+M*D+b*G,c[5]=g*y+M*N+b*B,c[8]=g*S+M*U+b*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],v=t[8];return i*h*v-i*p*d-s*c*v+s*p*m+l*c*d-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],v=t[8],x=v*h-p*d,g=p*m-v*c,M=d*c-h*m,b=i*x+s*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=x*C,t[1]=(l*d-v*s)*C,t[2]=(p*s-l*h)*C,t[3]=g*C,t[4]=(v*i-l*m)*C,t[5]=(l*c-p*i)*C,t[6]=M*C,t[7]=(s*m-d*i)*C,t[8]=(h*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+t,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Eh.makeScale(t,i)),this}rotate(t){return this.premultiply(Eh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Eh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Eh=new he,o0=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),l0=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HM(){const o={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ie&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=Fr(l.r),l.g=Fr(l.g),l.b=Fr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===is?Zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Qc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Qc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Gr]:{primaries:t,whitePoint:s,transfer:Zc,toXYZ:o0,fromXYZ:l0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:s,transfer:Ie,toXYZ:o0,fromXYZ:l0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),o}const Te=HM();function Ma(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Fr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Mr;class GM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Mr===void 0&&(Mr=Zo("canvas")),Mr.width=t.width,Mr.height=t.height;const l=Mr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Mr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Zo("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ma(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ma(i[s]/255)*255):i[s]=Ma(i[s]);return{data:i,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let VM=0;class ap{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Qo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(bh(l[h].image)):c.push(bh(l[h]))}else c=bh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function bh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?GM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}let XM=0;const Th=new Z;class Dn extends Fs{constructor(t=Dn.DEFAULT_IMAGE,i=Dn.DEFAULT_MAPPING,s=va,l=va,c=Cn,h=Os,p=Di,m=gi,d=Dn.DEFAULT_ANISOTROPY,v=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Qo(),this.name="",this.source=new ap(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ee(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ud:t.x=t.x-Math.floor(t.x);break;case va:t.x=t.x<0?0:1;break;case fd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ud:t.y=t.y-Math.floor(t.y);break;case va:t.y=t.y<0?0:1;break;case fd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=fv;Dn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,s=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],v=m[4],x=m[8],g=m[1],M=m[5],b=m[9],C=m[2],y=m[6],S=m[10];if(Math.abs(v-g)<.01&&Math.abs(x-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+C)<.1&&Math.abs(b+y)<.1&&Math.abs(d+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(d+1)/2,U=(M+1)/2,G=(S+1)/2,B=(v+g)/4,F=(x+C)/4,T=(b+y)/4;return N>U&&N>G?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=B/s,c=F/s):U>G?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=B/l,c=T/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=F/c,l=T/c),this.set(s,l,c,i),this}let D=Math.sqrt((y-b)*(y-b)+(x-C)*(x-C)+(g-v)*(g-v));return Math.abs(D)<.001&&(D=1),this.x=(y-b)/D,this.y=(x-C)/D,this.z=(g-v)/D,this.w=Math.acos((d+M+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this.w=pe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this.w=pe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kM extends Fs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Dn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new ap(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends kM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Sv extends Dn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=bn,this.minFilter=bn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class WM extends Dn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=bn,this.minFilter=bn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ke{constructor(t,i,s,l,c,h,p,m,d,v,x,g,M,b,C,y){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d,v,x,g,M,b,C,y)}set(t,i,s,l,c,h,p,m,d,v,x,g,M,b,C,y){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=p,S[13]=m,S[2]=d,S[6]=v,S[10]=x,S[14]=g,S[3]=M,S[7]=b,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/yr.setFromMatrixColumn(t,0).length(),c=1/yr.setFromMatrixColumn(t,1).length(),h=1/yr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),v=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=h*v,M=h*x,b=p*v,C=p*x;i[0]=m*v,i[4]=-m*x,i[8]=d,i[1]=M+b*d,i[5]=g-C*d,i[9]=-p*m,i[2]=C-g*d,i[6]=b+M*d,i[10]=h*m}else if(t.order==="YXZ"){const g=m*v,M=m*x,b=d*v,C=d*x;i[0]=g+C*p,i[4]=b*p-M,i[8]=h*d,i[1]=h*x,i[5]=h*v,i[9]=-p,i[2]=M*p-b,i[6]=C+g*p,i[10]=h*m}else if(t.order==="ZXY"){const g=m*v,M=m*x,b=d*v,C=d*x;i[0]=g-C*p,i[4]=-h*x,i[8]=b+M*p,i[1]=M+b*p,i[5]=h*v,i[9]=C-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(t.order==="ZYX"){const g=h*v,M=h*x,b=p*v,C=p*x;i[0]=m*v,i[4]=b*d-M,i[8]=g*d+C,i[1]=m*x,i[5]=C*d+g,i[9]=M*d-b,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,M=h*d,b=p*m,C=p*d;i[0]=m*v,i[4]=C-g*x,i[8]=b*x+M,i[1]=x,i[5]=h*v,i[9]=-p*v,i[2]=-d*v,i[6]=M*x+b,i[10]=g-C*x}else if(t.order==="XZY"){const g=h*m,M=h*d,b=p*m,C=p*d;i[0]=m*v,i[4]=-x,i[8]=d*v,i[1]=g*x+C,i[5]=h*v,i[9]=M*x-b,i[2]=b*x-M,i[6]=p*v,i[10]=C*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(YM,t,qM)}lookAt(t,i,s){const l=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Qa.crossVectors(s,ni),Qa.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Qa.crossVectors(s,ni)),Qa.normalize(),mc.crossVectors(ni,Qa),l[0]=Qa.x,l[4]=mc.x,l[8]=ni.x,l[1]=Qa.y,l[5]=mc.y,l[9]=ni.y,l[2]=Qa.z,l[6]=mc.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],v=s[1],x=s[5],g=s[9],M=s[13],b=s[2],C=s[6],y=s[10],S=s[14],D=s[3],N=s[7],U=s[11],G=s[15],B=l[0],F=l[4],T=l[8],w=l[12],ht=l[1],H=l[5],$=l[9],at=l[13],lt=l[2],tt=l[6],O=l[10],I=l[14],ot=l[3],dt=l[7],Et=l[11],P=l[15];return c[0]=h*B+p*ht+m*lt+d*ot,c[4]=h*F+p*H+m*tt+d*dt,c[8]=h*T+p*$+m*O+d*Et,c[12]=h*w+p*at+m*I+d*P,c[1]=v*B+x*ht+g*lt+M*ot,c[5]=v*F+x*H+g*tt+M*dt,c[9]=v*T+x*$+g*O+M*Et,c[13]=v*w+x*at+g*I+M*P,c[2]=b*B+C*ht+y*lt+S*ot,c[6]=b*F+C*H+y*tt+S*dt,c[10]=b*T+C*$+y*O+S*Et,c[14]=b*w+C*at+y*I+S*P,c[3]=D*B+N*ht+U*lt+G*ot,c[7]=D*F+N*H+U*tt+G*dt,c[11]=D*T+N*$+U*O+G*Et,c[15]=D*w+N*at+U*I+G*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],p=t[5],m=t[9],d=t[13],v=t[2],x=t[6],g=t[10],M=t[14],b=t[3],C=t[7],y=t[11],S=t[15],D=m*M-d*g,N=p*M-d*x,U=p*g-m*x,G=h*M-d*v,B=h*g-m*v,F=h*x-p*v;return i*(C*D-y*N+S*U)-s*(b*D-y*G+S*B)+l*(b*N-C*G+S*F)-c*(b*U-C*B+y*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],v=t[8],x=t[9],g=t[10],M=t[11],b=t[12],C=t[13],y=t[14],S=t[15],D=i*p-s*h,N=i*m-l*h,U=i*d-c*h,G=s*m-l*p,B=s*d-c*p,F=l*d-c*m,T=v*C-x*b,w=v*y-g*b,ht=v*S-M*b,H=x*y-g*C,$=x*S-M*C,at=g*S-M*y,lt=D*at-N*$+U*H+G*ht-B*w+F*T;if(lt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const tt=1/lt;return t[0]=(p*at-m*$+d*H)*tt,t[1]=(l*$-s*at-c*H)*tt,t[2]=(C*F-y*B+S*G)*tt,t[3]=(g*B-x*F-M*G)*tt,t[4]=(m*ht-h*at-d*w)*tt,t[5]=(i*at-l*ht+c*w)*tt,t[6]=(y*U-b*F-S*N)*tt,t[7]=(v*F-g*U+M*N)*tt,t[8]=(h*$-p*ht+d*T)*tt,t[9]=(s*ht-i*$-c*T)*tt,t[10]=(b*B-C*U+S*D)*tt,t[11]=(x*U-v*B-M*D)*tt,t[12]=(p*w-h*H-m*T)*tt,t[13]=(i*H-s*w+l*T)*tt,t[14]=(C*N-b*G-y*D)*tt,t[15]=(v*G-x*N+g*D)*tt,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,p=t.y,m=t.z,d=c*h,v=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,v*p+s,v*m-l*h,0,d*m-l*p,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,v=h+h,x=p+p,g=c*d,M=c*v,b=c*x,C=h*v,y=h*x,S=p*x,D=m*d,N=m*v,U=m*x,G=s.x,B=s.y,F=s.z;return l[0]=(1-(C+S))*G,l[1]=(M+U)*G,l[2]=(b-N)*G,l[3]=0,l[4]=(M-U)*B,l[5]=(1-(g+S))*B,l[6]=(y+D)*B,l[7]=0,l[8]=(b+N)*F,l[9]=(y-D)*F,l[10]=(1-(g+C))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=yr.set(l[0],l[1],l[2]).length();const p=yr.set(l[4],l[5],l[6]).length(),m=yr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Ti.copy(this);const d=1/h,v=1/p,x=1/m;return Ti.elements[0]*=d,Ti.elements[1]*=d,Ti.elements[2]*=d,Ti.elements[4]*=v,Ti.elements[5]*=v,Ti.elements[6]*=v,Ti.elements[8]*=x,Ti.elements[9]*=x,Ti.elements[10]*=x,i.setFromRotationMatrix(Ti),s.x=h,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,h,p=Hi,m=!1){const d=this.elements,v=2*c/(i-t),x=2*c/(s-l),g=(i+t)/(i-t),M=(s+l)/(s-l);let b,C;if(m)b=c/(h-c),C=h*c/(h-c);else if(p===Hi)b=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(p===Kc)b=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,h,p=Hi,m=!1){const d=this.elements,v=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,C;if(m)b=1/(h-c),C=h/(h-c);else if(p===Hi)b=-2/(h-c),C=-(h+c)/(h-c);else if(p===Kc)b=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=b,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const yr=new Z,Ti=new Ke,YM=new Z(0,0,0),qM=new Z(1,1,1),Qa=new Z,mc=new Z,ni=new Z,c0=new Ke,u0=new os;class ba{constructor(t=0,i=0,s=0,l=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],v=l[9],x=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(pe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(pe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-pe(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(pe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return c0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(c0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return u0.setFromEuler(this),this.setFromQuaternion(u0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class sp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jM=0;const f0=new Z,Er=new os,fa=new Ke,gc=new Z,Fo=new Z,ZM=new Z,KM=new os,h0=new Z(1,0,0),d0=new Z(0,1,0),p0=new Z(0,0,1),m0={type:"added"},QM={type:"removed"},br={type:"childadded",child:null},Ah={type:"childremoved",child:null};class Yn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const t=new Z,i=new ba,s=new os,l=new Z(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new he}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Er.setFromAxisAngle(t,i),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,i){return Er.setFromAxisAngle(t,i),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(h0,t)}rotateY(t){return this.rotateOnAxis(d0,t)}rotateZ(t){return this.rotateOnAxis(p0,t)}translateOnAxis(t,i){return f0.copy(t).applyQuaternion(this.quaternion),this.position.add(f0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(h0,t)}translateY(t){return this.translateOnAxis(d0,t)}translateZ(t){return this.translateOnAxis(p0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?gc.copy(t):gc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Fo,gc,this.up):fa.lookAt(gc,Fo,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),Er.setFromRotationMatrix(fa),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(m0),br.child=t,this.dispatchEvent(br),br.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(QM),Ah.child=t,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fa.multiply(t.parent.matrixWorld)),t.applyMatrix4(fa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(m0),br.child=t,this.dispatchEvent(br),br.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,ZM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,KM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,v=m.length;d<v;d++){const x=m[d];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=h(t.geometries),m=h(t.materials),d=h(t.textures),v=h(t.images),x=h(t.shapes),g=h(t.skeletons),M=h(t.animations),b=h(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(p){const m=[];for(const d in p){const v=p[d];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Yn.DEFAULT_UP=new Z(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _c extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JM={type:"move"};class Rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _c,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _c,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _c,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,s),S=this._getHandJoint(d,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=v.position.distanceTo(x.position),M=.02,b=.005;d.inputState.pinching&&g>M+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=M-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(JM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new _c;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Ch(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Fe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=s,Te.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Te.workingColorSpace){if(t=zM(t,1),i=pe(i,0,1),s=pe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Ch(h,c,t+1/3),this.g=Ch(h,c,t),this.b=Ch(h,c,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,i=pi){function s(c){c!==void 0&&parseFloat(c)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ee("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=pi){const s=Mv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return Te.workingToColorSpace(Rn.copy(this),t),Math.round(pe(Rn.r*255,0,255))*65536+Math.round(pe(Rn.g*255,0,255))*256+Math.round(pe(Rn.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.workingToColorSpace(Rn.copy(this),i);const s=Rn.r,l=Rn.g,c=Rn.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const v=(p+h)/2;if(p===h)m=0,d=0;else{const x=h-p;switch(d=v<=.5?x/(h+p):x/(2-h-p),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=d,t.l=v,t}getRGB(t,i=Te.workingColorSpace){return Te.workingToColorSpace(Rn.copy(this),i),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=pi){Te.workingToColorSpace(Rn.copy(this),t);const i=Rn.r,s=Rn.g,l=Rn.b;return t!==pi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ja),this.setHSL(Ja.h+t,Ja.s+i,Ja.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ja),t.getHSL(vc);const s=Mh(Ja.h,vc.h,i),l=Mh(Ja.s,vc.s,i),c=Mh(Ja.l,vc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Fe;Fe.NAMES=Mv;class $M extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ai=new Z,ha=new Z,Dh=new Z,da=new Z,Tr=new Z,Ar=new Z,g0=new Z,wh=new Z,Uh=new Z,Lh=new Z,Nh=new nn,Oh=new nn,Ph=new nn;class Ci{constructor(t=new Z,i=new Z,s=new Z){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ai.subVectors(t,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ai.subVectors(l,i),ha.subVectors(s,i),Dh.subVectors(t,i);const h=Ai.dot(Ai),p=Ai.dot(ha),m=Ai.dot(Dh),d=ha.dot(ha),v=ha.dot(Dh),x=h*d-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,M=(d*m-p*v)*g,b=(h*v-p*m)*g;return c.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(t,i,s,l,c,h,p,m){return this.getBarycoord(t,i,s,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,da.x),m.addScaledVector(h,da.y),m.addScaledVector(p,da.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Nh.setScalar(0),Oh.setScalar(0),Ph.setScalar(0),Nh.fromBufferAttribute(t,i),Oh.fromBufferAttribute(t,s),Ph.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Nh,c.x),h.addScaledVector(Oh,c.y),h.addScaledVector(Ph,c.z),h}static isFrontFacing(t,i,s,l){return Ai.subVectors(s,i),ha.subVectors(t,i),Ai.cross(ha).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ai.cross(ha).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ci.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ci.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,p;Tr.subVectors(l,s),Ar.subVectors(c,s),wh.subVectors(t,s);const m=Tr.dot(wh),d=Ar.dot(wh);if(m<=0&&d<=0)return i.copy(s);Uh.subVectors(t,l);const v=Tr.dot(Uh),x=Ar.dot(Uh);if(v>=0&&x<=v)return i.copy(l);const g=m*x-v*d;if(g<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Tr,h);Lh.subVectors(t,c);const M=Tr.dot(Lh),b=Ar.dot(Lh);if(b>=0&&M<=b)return i.copy(c);const C=M*d-m*b;if(C<=0&&d>=0&&b<=0)return p=d/(d-b),i.copy(s).addScaledVector(Ar,p);const y=v*b-M*x;if(y<=0&&x-v>=0&&M-b>=0)return g0.subVectors(c,l),p=(x-v)/(x-v+(M-b)),i.copy(l).addScaledVector(g0,p);const S=1/(y+C+g);return h=C*S,p=g*S,i.copy(s).addScaledVector(Tr,h).addScaledVector(Ar,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Jo{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ri.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ri.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ri.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,Ri):Ri.fromBufferAttribute(c,h),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),xc.copy(s.boundingBox)),xc.applyMatrix4(t.matrixWorld),this.union(xc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),Sc.subVectors(this.max,zo),Rr.subVectors(t.a,zo),Cr.subVectors(t.b,zo),Dr.subVectors(t.c,zo),$a.subVectors(Cr,Rr),ts.subVectors(Dr,Cr),As.subVectors(Rr,Dr);let i=[0,-$a.z,$a.y,0,-ts.z,ts.y,0,-As.z,As.y,$a.z,0,-$a.x,ts.z,0,-ts.x,As.z,0,-As.x,-$a.y,$a.x,0,-ts.y,ts.x,0,-As.y,As.x,0];return!Ih(i,Rr,Cr,Dr,Sc)||(i=[1,0,0,0,1,0,0,0,1],!Ih(i,Rr,Cr,Dr,Sc))?!1:(Mc.crossVectors($a,ts),i=[Mc.x,Mc.y,Mc.z],Ih(i,Rr,Cr,Dr,Sc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pa=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ri=new Z,xc=new Jo,Rr=new Z,Cr=new Z,Dr=new Z,$a=new Z,ts=new Z,As=new Z,zo=new Z,Sc=new Z,Mc=new Z,Rs=new Z;function Ih(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Rs.fromArray(o,c);const p=l.x*Math.abs(Rs.x)+l.y*Math.abs(Rs.y)+l.z*Math.abs(Rs.z),m=t.dot(Rs),d=i.dot(Rs),v=s.dot(Rs);if(Math.max(-Math.max(m,d,v),Math.min(m,d,v))>p)return!1}return!0}const fn=new Z,yc=new oe;let ty=0;class Xi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ty++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=n0,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(t),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Io(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Io(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Io(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Io(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Io(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==n0&&(t.usage=this.usage),t}}class yv extends Xi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Ev extends Xi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ai extends Xi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const ey=new Jo,Bo=new Z,Fh=new Z;class eu{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):ey.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Bo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(Fh)),this.expandByPoint(Bo.copy(t.center).sub(Fh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ny=0;const di=new Ke,zh=new Yn,wr=new Z,ii=new Jo,Ho=new Jo,xn=new Z;class _i extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(OM(t)?Ev:yv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new he().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,s){return di.makeTranslation(t,i,s),this.applyMatrix4(di),this}scale(t,i,s){return di.makeScale(t,i,s),this.applyMatrix4(di),this}lookAt(t){return zh.lookAt(t),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ai(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];Ho.setFromBufferAttribute(p),this.morphTargetsRelative?(xn.addVectors(ii.min,Ho.min),ii.expandByPoint(xn),xn.addVectors(ii.max,Ho.max),ii.expandByPoint(xn)):(ii.expandByPoint(Ho.min),ii.expandByPoint(Ho.max))}ii.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,v=p.count;d<v;d++)xn.fromBufferAttribute(p,d),m&&(wr.fromBufferAttribute(t,d),xn.add(wr)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new Z,m[T]=new Z;const d=new Z,v=new Z,x=new Z,g=new oe,M=new oe,b=new oe,C=new Z,y=new Z;function S(T,w,ht){d.fromBufferAttribute(s,T),v.fromBufferAttribute(s,w),x.fromBufferAttribute(s,ht),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,w),b.fromBufferAttribute(c,ht),v.sub(d),x.sub(d),M.sub(g),b.sub(g);const H=1/(M.x*b.y-b.x*M.y);isFinite(H)&&(C.copy(v).multiplyScalar(b.y).addScaledVector(x,-M.y).multiplyScalar(H),y.copy(x).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(H),p[T].add(C),p[w].add(C),p[ht].add(C),m[T].add(y),m[w].add(y),m[ht].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let T=0,w=D.length;T<w;++T){const ht=D[T],H=ht.start,$=ht.count;for(let at=H,lt=H+$;at<lt;at+=3)S(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const N=new Z,U=new Z,G=new Z,B=new Z;function F(T){G.fromBufferAttribute(l,T),B.copy(G);const w=p[T];N.copy(w),N.sub(G.multiplyScalar(G.dot(w))).normalize(),U.crossVectors(B,w);const H=U.dot(m[T])<0?-1:1;h.setXYZW(T,N.x,N.y,N.z,H)}for(let T=0,w=D.length;T<w;++T){const ht=D[T],H=ht.start,$=ht.count;for(let at=H,lt=H+$;at<lt;at+=3)F(t.getX(at+0)),F(t.getX(at+1)),F(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Xi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new Z,c=new Z,h=new Z,p=new Z,m=new Z,d=new Z,v=new Z,x=new Z;if(t)for(let g=0,M=t.count;g<M;g+=3){const b=t.getX(g+0),C=t.getX(g+1),y=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),d.fromBufferAttribute(s,y),p.add(v),m.add(v),d.add(v),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(p,m){const d=p.array,v=p.itemSize,x=p.normalized,g=new d.constructor(m.length*v);let M=0,b=0;for(let C=0,y=m.length;C<y;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*v;for(let S=0;S<v;S++)g[b++]=d[M++]}return new Xi(g,v,x)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new _i,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let v=0,x=d.length;v<x;v++){const g=d[v],M=t(g,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],v=[];for(let x=0,g=d.length;x<g;x++){const M=d[x];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const v=l[d];this.setAttribute(d,v.clone(i))}const c=t.morphAttributes;for(const d in c){const v=[],x=c[d];for(let g=0,M=x.length;g<M;g++)v.push(x[g].clone(i));this.morphAttributes[d]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,v=h.length;d<v;d++){const x=h[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let iy=0;class $o extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=Ir,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=nd,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ee(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(s.blending=this.blending),this.side!==rs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ed&&(s.blendSrc=this.blendSrc),this.blendDst!==nd&&(s.blendDst=this.blendDst),this.blendEquation!==Ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==e0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ma=new Z,Bh=new Z,Ec=new Z,es=new Z,Hh=new Z,bc=new Z,Gh=new Z;class nu{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Bh.copy(t).add(i).multiplyScalar(.5),Ec.copy(i).sub(t).normalize(),es.copy(this.origin).sub(Bh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Ec),p=es.dot(this.direction),m=-es.dot(Ec),d=es.lengthSq(),v=Math.abs(1-h*h);let x,g,M,b;if(v>0)if(x=h*m-p,g=h*p-m,b=c*v,x>=0)if(g>=-b)if(g<=b){const C=1/v;x*=C,g*=C,M=x*(x+h*g+2*p)+g*(h*x+g+2*m)+d}else g=c,x=Math.max(0,-(h*g+p)),M=-x*x+g*(g+2*m)+d;else g=-c,x=Math.max(0,-(h*g+p)),M=-x*x+g*(g+2*m)+d;else g<=-b?(x=Math.max(0,-(-h*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+d):g<=b?(x=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+d):(x=Math.max(0,-(h*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+d);else g=h>0?-c:c,x=Math.max(0,-(h*g+p)),M=-x*x+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Bh).addScaledVector(Ec,g),M}intersectSphere(t,i){ma.subVectors(t.center,this.origin);const s=ma.dot(this.direction),l=ma.dot(ma)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,p,m;const d=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(s=(t.min.x-g.x)*d,l=(t.max.x-g.x)*d):(s=(t.max.x-g.x)*d,l=(t.min.x-g.x)*d),v>=0?(c=(t.min.y-g.y)*v,h=(t.max.y-g.y)*v):(c=(t.max.y-g.y)*v,h=(t.min.y-g.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(p=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(p=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ma)!==null}intersectTriangle(t,i,s,l,c){Hh.subVectors(i,t),bc.subVectors(s,t),Gh.crossVectors(Hh,bc);let h=this.direction.dot(Gh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;es.subVectors(this.origin,t);const m=p*this.direction.dot(bc.crossVectors(es,bc));if(m<0)return null;const d=p*this.direction.dot(Hh.cross(es));if(d<0||m+d>h)return null;const v=-p*es.dot(Gh);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class iu extends $o{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _0=new Ke,Cs=new nu,Tc=new eu,v0=new Z,Ac=new Z,Rc=new Z,Cc=new Z,Vh=new Z,Dc=new Z,x0=new Z,wc=new Z;class wi extends Yn{constructor(t=new _i,i=new iu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Dc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const v=p[m],x=c[m];v!==0&&(Vh.fromBufferAttribute(x,t),h?Dc.addScaledVector(Vh,v):Dc.addScaledVector(Vh.sub(i),v))}i.add(Dc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(c),Cs.copy(t.ray).recast(t.near),!(Tc.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Tc,v0)===null||Cs.origin.distanceToSquared(v0)>(t.far-t.near)**2))&&(_0.copy(c).invert(),Cs.copy(t.ray).applyMatrix4(_0),!(s.boundingBox!==null&&Cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Cs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(h))for(let b=0,C=g.length;b<C;b++){const y=g[b],S=h[y.materialIndex],D=Math.max(y.start,M.start),N=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let U=D,G=N;U<G;U+=3){const B=p.getX(U),F=p.getX(U+1),T=p.getX(U+2);l=Uc(this,S,t,s,d,v,x,B,F,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let y=b,S=C;y<S;y+=3){const D=p.getX(y),N=p.getX(y+1),U=p.getX(y+2);l=Uc(this,h,t,s,d,v,x,D,N,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=g.length;b<C;b++){const y=g[b],S=h[y.materialIndex],D=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=D,G=N;U<G;U+=3){const B=U,F=U+1,T=U+2;l=Uc(this,S,t,s,d,v,x,B,F,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=b,S=C;y<S;y+=3){const D=y,N=y+1,U=y+2;l=Uc(this,h,t,s,d,v,x,D,N,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ay(o,t,i,s,l,c,h,p){let m;if(t.side===Wn?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,t.side===rs,p),m===null)return null;wc.copy(p),wc.applyMatrix4(o.matrixWorld);const d=i.ray.origin.distanceTo(wc);return d<i.near||d>i.far?null:{distance:d,point:wc.clone(),object:o}}function Uc(o,t,i,s,l,c,h,p,m,d){o.getVertexPosition(p,Ac),o.getVertexPosition(m,Rc),o.getVertexPosition(d,Cc);const v=ay(o,t,i,s,Ac,Rc,Cc,x0);if(v){const x=new Z;Ci.getBarycoord(x0,Ac,Rc,Cc,x),l&&(v.uv=Ci.getInterpolatedAttribute(l,p,m,d,x,new oe)),c&&(v.uv1=Ci.getInterpolatedAttribute(c,p,m,d,x,new oe)),h&&(v.normal=Ci.getInterpolatedAttribute(h,p,m,d,x,new Z),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new Z,materialIndex:0};Ci.getNormal(Ac,Rc,Cc,g.normal),v.face=g,v.barycoord=x}return v}class sy extends Dn{constructor(t=null,i=1,s=1,l,c,h,p,m,d=bn,v=bn,x,g){super(null,h,p,m,d,v,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xh=new Z,ry=new Z,oy=new he;class ga{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Xh.subVectors(s,i).cross(ry.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Xh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||oy.getNormalMatrix(t),l=this.coplanarPoint(Xh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new eu,ly=new oe(.5,.5),Lc=new Z;class bv{constructor(t=new ga,i=new ga,s=new ga,l=new ga,c=new ga,h=new ga){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Hi,s=!1){const l=this.planes,c=t.elements,h=c[0],p=c[1],m=c[2],d=c[3],v=c[4],x=c[5],g=c[6],M=c[7],b=c[8],C=c[9],y=c[10],S=c[11],D=c[12],N=c[13],U=c[14],G=c[15];if(l[0].setComponents(d-h,M-v,S-b,G-D).normalize(),l[1].setComponents(d+h,M+v,S+b,G+D).normalize(),l[2].setComponents(d+p,M+x,S+C,G+N).normalize(),l[3].setComponents(d-p,M-x,S-C,G-N).normalize(),s)l[4].setComponents(m,g,y,U).normalize(),l[5].setComponents(d-m,M-g,S-y,G-U).normalize();else if(l[4].setComponents(d-m,M-g,S-y,G-U).normalize(),i===Hi)l[5].setComponents(d+m,M+g,S+y,G+U).normalize();else if(i===Kc)l[5].setComponents(m,g,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);const i=ly.distanceTo(t.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Lc.x=l.normal.x>0?t.max.x:t.min.x,Lc.y=l.normal.y>0?t.max.y:t.min.y,Lc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tv extends $o{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Jc=new Z,$c=new Z,S0=new Ke,Go=new nu,Nc=new eu,kh=new Z,M0=new Z;class cy extends Yn{constructor(t=new _i,i=new Tv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Jc.fromBufferAttribute(i,l-1),$c.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Jc.distanceTo($c);t.setAttribute("lineDistance",new ai(s,1))}else ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Nc.copy(s.boundingSphere),Nc.applyMatrix4(l),Nc.radius+=c,t.ray.intersectsSphere(Nc)===!1)return;S0.copy(l).invert(),Go.copy(t.ray).applyMatrix4(S0);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const M=Math.max(0,h.start),b=Math.min(v.count,h.start+h.count);for(let C=M,y=b-1;C<y;C+=d){const S=v.getX(C),D=v.getX(C+1),N=Oc(this,t,Go,m,S,D,C);N&&i.push(N)}if(this.isLineLoop){const C=v.getX(b-1),y=v.getX(M),S=Oc(this,t,Go,m,C,y,b-1);S&&i.push(S)}}else{const M=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let C=M,y=b-1;C<y;C+=d){const S=Oc(this,t,Go,m,C,C+1,C);S&&i.push(S)}if(this.isLineLoop){const C=Oc(this,t,Go,m,b-1,M,b-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Oc(o,t,i,s,l,c,h){const p=o.geometry.attributes.position;if(Jc.fromBufferAttribute(p,l),$c.fromBufferAttribute(p,c),i.distanceSqToSegment(Jc,$c,kh,M0)>s)return;kh.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(kh);if(!(d<t.near||d>t.far))return{distance:d,point:M0.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class Av extends Dn{constructor(t=[],i=Is,s,l,c,h,p,m,d,v){super(t,i,s,l,c,h,p,m,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ko extends Dn{constructor(t,i,s=ki,l,c,h,p=bn,m=bn,d,v=Ea,x=1){if(v!==Ea&&v!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,h,p,m,v,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ap(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class uy extends Ko{constructor(t,i=ki,s=Is,l,c,h=bn,p=bn,m,d=Ea){const v={width:t,height:t,depth:1},x=[v,v,v,v,v,v];super(t,t,i,s,l,c,h,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Rv extends Dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class tl extends _i{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],v=[],x=[];let g=0,M=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ai(d,3)),this.setAttribute("normal",new ai(v,3)),this.setAttribute("uv",new ai(x,2));function b(C,y,S,D,N,U,G,B,F,T,w){const ht=U/F,H=G/T,$=U/2,at=G/2,lt=B/2,tt=F+1,O=T+1;let I=0,ot=0;const dt=new Z;for(let Et=0;Et<O;Et++){const P=Et*H-at;for(let q=0;q<tt;q++){const _t=q*ht-$;dt[C]=_t*D,dt[y]=P*N,dt[S]=lt,d.push(dt.x,dt.y,dt.z),dt[C]=0,dt[y]=0,dt[S]=B>0?1:-1,v.push(dt.x,dt.y,dt.z),x.push(q/F),x.push(1-Et/T),I+=1}}for(let Et=0;Et<T;Et++)for(let P=0;P<F;P++){const q=g+P+tt*Et,_t=g+P+tt*(Et+1),At=g+(P+1)+tt*(Et+1),It=g+(P+1)+tt*Et;m.push(q,_t,It),m.push(_t,At,It),ot+=6}p.addGroup(M,ot,w),M+=ot,g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class fy{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ee("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=t*s[c-1];let p=0,m=c-1,d;for(;p<=m;)if(l=Math.floor(p+(m-p)/2),d=s[l]-h,d<0)p=l+1;else if(d>0)m=l-1;else{m=l;break}if(l=m,s[l]===h)return l/(c-1);const v=s[l],g=s[l+1]-v,M=(h-v)/g;return(l+M)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),p=this.getPoint(c),m=i||(h.isVector2?new oe:new Z);return m.copy(p).sub(h).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new Z,l=[],c=[],h=[],p=new Z,m=new Ke;for(let M=0;M<=t;M++){const b=M/t;l[M]=this.getTangentAt(b,new Z)}c[0]=new Z,h[0]=new Z;let d=Number.MAX_VALUE;const v=Math.abs(l[0].x),x=Math.abs(l[0].y),g=Math.abs(l[0].z);v<=d&&(d=v,s.set(1,0,0)),x<=d&&(d=x,s.set(0,1,0)),g<=d&&s.set(0,0,1),p.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],p),h[0].crossVectors(l[0],c[0]);for(let M=1;M<=t;M++){if(c[M]=c[M-1].clone(),h[M]=h[M-1].clone(),p.crossVectors(l[M-1],l[M]),p.length()>Number.EPSILON){p.normalize();const b=Math.acos(pe(l[M-1].dot(l[M]),-1,1));c[M].applyMatrix4(m.makeRotationAxis(p,b))}h[M].crossVectors(l[M],c[M])}if(i===!0){let M=Math.acos(pe(c[0].dot(c[t]),-1,1));M/=t,l[0].dot(p.crossVectors(c[0],c[t]))>0&&(M=-M);for(let b=1;b<=t;b++)c[b].applyMatrix4(m.makeRotationAxis(l[b],M*b)),h[b].crossVectors(l[b],c[b])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hy extends fy{constructor(t=0,i=0,s=1,l=1,c=0,h=Math.PI*2,p=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=p,this.aRotation=m}getPoint(t,i=new oe){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const p=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(p),d=this.aY+this.yRadius*Math.sin(p);if(this.aRotation!==0){const v=Math.cos(this.aRotation),x=Math.sin(this.aRotation),g=m-this.aX,M=d-this.aY;m=g*v-M*x+this.aX,d=g*x+M*v+this.aY}return s.set(m,d)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class au extends _i{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,v=m+1,x=t/p,g=i/m,M=[],b=[],C=[],y=[];for(let S=0;S<v;S++){const D=S*g-h;for(let N=0;N<d;N++){const U=N*x-c;b.push(U,-D,0),C.push(0,0,1),y.push(N/p),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let D=0;D<p;D++){const N=D+d*S,U=D+d*(S+1),G=D+1+d*(S+1),B=D+1+d*S;M.push(N,U,B),M.push(U,G,B)}this.setIndex(M),this.setAttribute("position",new ai(b,3)),this.setAttribute("normal",new ai(C,3)),this.setAttribute("uv",new ai(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new au(t.width,t.height,t.widthSegments,t.heightSegments)}}class su extends _i{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+p,Math.PI);let d=0;const v=[],x=new Z,g=new Z,M=[],b=[],C=[],y=[];for(let S=0;S<=s;S++){const D=[],N=S/s;let U=0;S===0&&h===0?U=.5/i:S===s&&m===Math.PI&&(U=-.5/i);for(let G=0;G<=i;G++){const B=G/i;x.x=-t*Math.cos(l+B*c)*Math.sin(h+N*p),x.y=t*Math.cos(h+N*p),x.z=t*Math.sin(l+B*c)*Math.sin(h+N*p),b.push(x.x,x.y,x.z),g.copy(x).normalize(),C.push(g.x,g.y,g.z),y.push(B+U,1-N),D.push(d++)}v.push(D)}for(let S=0;S<s;S++)for(let D=0;D<i;D++){const N=v[S][D+1],U=v[S][D],G=v[S+1][D],B=v[S+1][D+1];(S!==0||h>0)&&M.push(N,U,B),(S!==s-1||m<Math.PI)&&M.push(U,G,B)}this.setIndex(M),this.setAttribute("position",new ai(b,3)),this.setAttribute("normal",new ai(C,3)),this.setAttribute("uv",new ai(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new su(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Vr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Pn(o){const t={};for(let i=0;i<o.length;i++){const s=Vr(o[i]);for(const l in s)t[l]=s[l]}return t}function dy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Cv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const py={clone:Vr,merge:Pn};var my=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends $o{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=my,this.fragmentShader=gy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=dy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class _y extends Wi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vy extends $o{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xy extends $o{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wh={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(y0(o)||(this.files[o]=t))},get:function(o){if(this.enabled!==!1&&!y0(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function y0(o){try{const t=o.slice(o.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Sy{constructor(t,i,s){const l=this;let c=!1,h=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(v){p++,c===!1&&l.onStart!==void 0&&l.onStart(v,h,p),c=!0},this.itemEnd=function(v){h++,l.onProgress!==void 0&&l.onProgress(v,h,p),h===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,x){return d.push(v,x),this},this.removeHandler=function(v){const x=d.indexOf(v);return x!==-1&&d.splice(x,2),this},this.getHandler=function(v){for(let x=0,g=d.length;x<g;x+=2){const M=d[x],b=d[x+1];if(M.global&&(M.lastIndex=0),M.test(v))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const My=new Sy;class rp{constructor(t){this.manager=t!==void 0?t:My,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}rp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ur=new WeakMap;class yy extends rp{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,h=Wh.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(h),c.manager.itemEnd(t)},0);else{let x=Ur.get(h);x===void 0&&(x=[],Ur.set(h,x)),x.push({onLoad:i,onError:l})}return h}const p=Zo("img");function m(){v(),i&&i(this);const x=Ur.get(this)||[];for(let g=0;g<x.length;g++){const M=x[g];M.onLoad&&M.onLoad(this)}Ur.delete(this),c.manager.itemEnd(t)}function d(x){v(),l&&l(x),Wh.remove(`image:${t}`);const g=Ur.get(this)||[];for(let M=0;M<g.length;M++){const b=g[M];b.onError&&b.onError(x)}Ur.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function v(){p.removeEventListener("load",m,!1),p.removeEventListener("error",d,!1)}return p.addEventListener("load",m,!1),p.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),Wh.add(`image:${t}`,p),c.manager.itemStart(t),p.src=t,p}}class Ey extends rp{constructor(t){super(t)}load(t,i,s,l){const c=new Dn,h=new yy(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(p){c.image=p,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}const Pc=new Z,Ic=new os,Ii=new Z;class Dv extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pc,Ic,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,Ic,Ii.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Pc,Ic,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,Ic,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new Z,E0=new oe,b0=new oe;class mi extends Dv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=kd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kd*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,i){return this.getViewBounds(t,E0,b0),i.subVectors(b0,E0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Yc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class wv extends Dv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Lr=-90,Nr=1;class by extends Yn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(Lr,Nr,t,i);l.layers=this.layers,this.add(l);const c=new mi(Lr,Nr,t,i);c.layers=this.layers,this.add(c);const h=new mi(Lr,Nr,t,i);h.layers=this.layers,this.add(h);const p=new mi(Lr,Nr,t,i);p.layers=this.layers,this.add(p);const m=new mi(Lr,Nr,t,i);m.layers=this.layers,this.add(m);const d=new mi(Lr,Nr,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(t===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Kc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,v]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(x,g,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Ty extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const T0=new Ke;class Uv{constructor(t,i,s=0,l=1/0){this.ray=new nu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new sp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):be("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return T0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(T0),this}intersectObject(t,i=!0,s=[]){return Wd(t,this,s,i),s.sort(A0),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Wd(t[l],this,s,i);return s.sort(A0),s}}function A0(o,t){return o.distance-t.distance}function Wd(o,t,i,s){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=o.children;for(let h=0,p=c.length;h<p;h++)Wd(c[h],t,i,!0)}}class R0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=pe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(pe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ay extends Fs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ee("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function C0(o,t,i,s){const l=Ry(s);switch(i){case gv:return o*t;case vv:return o*t/l.components*l.byteLength;case $d:return o*t/l.components*l.byteLength;case Hr:return o*t*2/l.components*l.byteLength;case tp:return o*t*2/l.components*l.byteLength;case _v:return o*t*3/l.components*l.byteLength;case Di:return o*t*4/l.components*l.byteLength;case ep:return o*t*4/l.components*l.byteLength;case Vc:case Xc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case kc:case Wc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case dd:case md:return Math.max(o,16)*Math.max(t,8)/4;case hd:case pd:return Math.max(o,8)*Math.max(t,8)/2;case gd:case _d:case xd:case Sd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case vd:case Md:case yd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ed:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case bd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Td:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Cd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case wd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Ud:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Od:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Pd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Id:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Fd:case zd:case Bd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Hd:case Gd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Vd:case Xd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ry(o){switch(o){case gi:case hv:return{byteLength:1,components:1};case qo:case dv:case ya:return{byteLength:2,components:1};case Qd:case Jd:return{byteLength:2,components:4};case ki:case Kd:case Bi:return{byteLength:4,components:1};case pv:case mv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zd}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zd);function Lv(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Cy(o){const t=new WeakMap;function i(p,m){const d=p.array,v=p.usage,x=d.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,d,v),p.onUploadCallback();let M;if(d instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=o.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=o.SHORT;else if(d instanceof Uint32Array)M=o.UNSIGNED_INT;else if(d instanceof Int32Array)M=o.INT;else if(d instanceof Int8Array)M=o.BYTE;else if(d instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,d){const v=m.array,x=m.updateRanges;if(o.bindBuffer(d,p),x.length===0)o.bufferSubData(d,0,v);else{x.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<x.length;M++){const b=x[g],C=x[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++g,x[g]=C)}x.length=g+1;for(let M=0,b=x.length;M<b;M++){const C=x[M];o.bufferSubData(d,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(o.deleteBuffer(m.buffer),t.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=t.get(p);(!v||v.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var Dy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ny=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Py=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,By=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$y=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sE="gl_FragColor = linearToOutputTexel( gl_FragColor );",rE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ME=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,JE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ib=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ab=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ob=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ub=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,db=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_b=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Eb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Db=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ub=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ib=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$b=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:Dy,alphahash_pars_fragment:wy,alphamap_fragment:Uy,alphamap_pars_fragment:Ly,alphatest_fragment:Ny,alphatest_pars_fragment:Oy,aomap_fragment:Py,aomap_pars_fragment:Iy,batching_pars_vertex:Fy,batching_vertex:zy,begin_vertex:By,beginnormal_vertex:Hy,bsdfs:Gy,iridescence_fragment:Vy,bumpmap_pars_fragment:Xy,clipping_planes_fragment:ky,clipping_planes_pars_fragment:Wy,clipping_planes_pars_vertex:Yy,clipping_planes_vertex:qy,color_fragment:jy,color_pars_fragment:Zy,color_pars_vertex:Ky,color_vertex:Qy,common:Jy,cube_uv_reflection_fragment:$y,defaultnormal_vertex:tE,displacementmap_pars_vertex:eE,displacementmap_vertex:nE,emissivemap_fragment:iE,emissivemap_pars_fragment:aE,colorspace_fragment:sE,colorspace_pars_fragment:rE,envmap_fragment:oE,envmap_common_pars_fragment:lE,envmap_pars_fragment:cE,envmap_pars_vertex:uE,envmap_physical_pars_fragment:ME,envmap_vertex:fE,fog_vertex:hE,fog_pars_vertex:dE,fog_fragment:pE,fog_pars_fragment:mE,gradientmap_pars_fragment:gE,lightmap_pars_fragment:_E,lights_lambert_fragment:vE,lights_lambert_pars_fragment:xE,lights_pars_begin:SE,lights_toon_fragment:yE,lights_toon_pars_fragment:EE,lights_phong_fragment:bE,lights_phong_pars_fragment:TE,lights_physical_fragment:AE,lights_physical_pars_fragment:RE,lights_fragment_begin:CE,lights_fragment_maps:DE,lights_fragment_end:wE,logdepthbuf_fragment:UE,logdepthbuf_pars_fragment:LE,logdepthbuf_pars_vertex:NE,logdepthbuf_vertex:OE,map_fragment:PE,map_pars_fragment:IE,map_particle_fragment:FE,map_particle_pars_fragment:zE,metalnessmap_fragment:BE,metalnessmap_pars_fragment:HE,morphinstance_vertex:GE,morphcolor_vertex:VE,morphnormal_vertex:XE,morphtarget_pars_vertex:kE,morphtarget_vertex:WE,normal_fragment_begin:YE,normal_fragment_maps:qE,normal_pars_fragment:jE,normal_pars_vertex:ZE,normal_vertex:KE,normalmap_pars_fragment:QE,clearcoat_normal_fragment_begin:JE,clearcoat_normal_fragment_maps:$E,clearcoat_pars_fragment:tb,iridescence_pars_fragment:eb,opaque_fragment:nb,packing:ib,premultiplied_alpha_fragment:ab,project_vertex:sb,dithering_fragment:rb,dithering_pars_fragment:ob,roughnessmap_fragment:lb,roughnessmap_pars_fragment:cb,shadowmap_pars_fragment:ub,shadowmap_pars_vertex:fb,shadowmap_vertex:hb,shadowmask_pars_fragment:db,skinbase_vertex:pb,skinning_pars_vertex:mb,skinning_vertex:gb,skinnormal_vertex:_b,specularmap_fragment:vb,specularmap_pars_fragment:xb,tonemapping_fragment:Sb,tonemapping_pars_fragment:Mb,transmission_fragment:yb,transmission_pars_fragment:Eb,uv_pars_fragment:bb,uv_pars_vertex:Tb,uv_vertex:Ab,worldpos_vertex:Rb,background_vert:Cb,background_frag:Db,backgroundCube_vert:wb,backgroundCube_frag:Ub,cube_vert:Lb,cube_frag:Nb,depth_vert:Ob,depth_frag:Pb,distance_vert:Ib,distance_frag:Fb,equirect_vert:zb,equirect_frag:Bb,linedashed_vert:Hb,linedashed_frag:Gb,meshbasic_vert:Vb,meshbasic_frag:Xb,meshlambert_vert:kb,meshlambert_frag:Wb,meshmatcap_vert:Yb,meshmatcap_frag:qb,meshnormal_vert:jb,meshnormal_frag:Zb,meshphong_vert:Kb,meshphong_frag:Qb,meshphysical_vert:Jb,meshphysical_frag:$b,meshtoon_vert:tT,meshtoon_frag:eT,points_vert:nT,points_frag:iT,shadow_vert:aT,shadow_frag:sT,sprite_vert:rT,sprite_frag:oT},Ut={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},zi={basic:{uniforms:Pn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Pn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Pn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Pn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Pn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Fe(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Pn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Pn([Ut.points,Ut.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Pn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Pn([Ut.common,Ut.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Pn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Pn([Ut.sprite,Ut.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Pn([Ut.common,Ut.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Pn([Ut.lights,Ut.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};zi.physical={uniforms:Pn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Fc={r:0,b:0,g:0},ws=new ba,lT=new Ke;function cT(o,t,i,s,l,c){const h=new Fe(0);let p=l===!0?0:1,m,d,v=null,x=0,g=null;function M(D){let N=D.isScene===!0?D.background:null;if(N&&N.isTexture){const U=D.backgroundBlurriness>0;N=t.get(N,U)}return N}function b(D){let N=!1;const U=M(D);U===null?y(h,p):U&&U.isColor&&(y(U,1),N=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,c):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function C(D,N){const U=M(N);U&&(U.isCubeTexture||U.mapping===tu)?(d===void 0&&(d=new wi(new tl(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Vr(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(G,B,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),ws.copy(N.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),d.material.uniforms.envMap.value=U,d.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(lT.makeRotationFromEuler(ws)),d.material.toneMapped=Te.getTransfer(U.colorSpace)!==Ie,(v!==U||x!==U.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,v=U,x=U.version,g=o.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new wi(new au(2,2),new Wi({name:"BackgroundMaterial",uniforms:Vr(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Te.getTransfer(U.colorSpace)!==Ie,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(v!==U||x!==U.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,v=U,x=U.version,g=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function y(D,N){D.getRGB(Fc,Cv(o)),i.buffers.color.setClear(Fc.r,Fc.g,Fc.b,N,c)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,N=1){h.set(D),p=N,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,y(h,p)},render:b,addToRenderList:C,dispose:S}}function uT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(H,$,at,lt,tt){let O=!1;const I=x(H,lt,at,$);c!==I&&(c=I,d(c.object)),O=M(H,lt,at,tt),O&&b(H,lt,at,tt),tt!==null&&t.update(tt,o.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,U(H,$,at,lt),tt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function m(){return o.createVertexArray()}function d(H){return o.bindVertexArray(H)}function v(H){return o.deleteVertexArray(H)}function x(H,$,at,lt){const tt=lt.wireframe===!0;let O=s[$.id];O===void 0&&(O={},s[$.id]=O);const I=H.isInstancedMesh===!0?H.id:0;let ot=O[I];ot===void 0&&(ot={},O[I]=ot);let dt=ot[at.id];dt===void 0&&(dt={},ot[at.id]=dt);let Et=dt[tt];return Et===void 0&&(Et=g(m()),dt[tt]=Et),Et}function g(H){const $=[],at=[],lt=[];for(let tt=0;tt<i;tt++)$[tt]=0,at[tt]=0,lt[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:at,attributeDivisors:lt,object:H,attributes:{},index:null}}function M(H,$,at,lt){const tt=c.attributes,O=$.attributes;let I=0;const ot=at.getAttributes();for(const dt in ot)if(ot[dt].location>=0){const P=tt[dt];let q=O[dt];if(q===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(q=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(q=H.instanceColor)),P===void 0||P.attribute!==q||q&&P.data!==q.data)return!0;I++}return c.attributesNum!==I||c.index!==lt}function b(H,$,at,lt){const tt={},O=$.attributes;let I=0;const ot=at.getAttributes();for(const dt in ot)if(ot[dt].location>=0){let P=O[dt];P===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(P=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(P=H.instanceColor));const q={};q.attribute=P,P&&P.data&&(q.data=P.data),tt[dt]=q,I++}c.attributes=tt,c.attributesNum=I,c.index=lt}function C(){const H=c.newAttributes;for(let $=0,at=H.length;$<at;$++)H[$]=0}function y(H){S(H,0)}function S(H,$){const at=c.newAttributes,lt=c.enabledAttributes,tt=c.attributeDivisors;at[H]=1,lt[H]===0&&(o.enableVertexAttribArray(H),lt[H]=1),tt[H]!==$&&(o.vertexAttribDivisor(H,$),tt[H]=$)}function D(){const H=c.newAttributes,$=c.enabledAttributes;for(let at=0,lt=$.length;at<lt;at++)$[at]!==H[at]&&(o.disableVertexAttribArray(at),$[at]=0)}function N(H,$,at,lt,tt,O,I){I===!0?o.vertexAttribIPointer(H,$,at,tt,O):o.vertexAttribPointer(H,$,at,lt,tt,O)}function U(H,$,at,lt){C();const tt=lt.attributes,O=at.getAttributes(),I=$.defaultAttributeValues;for(const ot in O){const dt=O[ot];if(dt.location>=0){let Et=tt[ot];if(Et===void 0&&(ot==="instanceMatrix"&&H.instanceMatrix&&(Et=H.instanceMatrix),ot==="instanceColor"&&H.instanceColor&&(Et=H.instanceColor)),Et!==void 0){const P=Et.normalized,q=Et.itemSize,_t=t.get(Et);if(_t===void 0)continue;const At=_t.buffer,It=_t.type,nt=_t.bytesPerElement,vt=It===o.INT||It===o.UNSIGNED_INT||Et.gpuType===Kd;if(Et.isInterleavedBufferAttribute){const bt=Et.data,Vt=bt.stride,Zt=Et.offset;if(bt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<dt.locationSize;Jt++)S(dt.location+Jt,bt.meshPerAttribute);H.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Jt=0;Jt<dt.locationSize;Jt++)y(dt.location+Jt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Jt=0;Jt<dt.locationSize;Jt++)N(dt.location+Jt,q/dt.locationSize,It,P,Vt*nt,(Zt+q/dt.locationSize*Jt)*nt,vt)}else{if(Et.isInstancedBufferAttribute){for(let bt=0;bt<dt.locationSize;bt++)S(dt.location+bt,Et.meshPerAttribute);H.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let bt=0;bt<dt.locationSize;bt++)y(dt.location+bt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let bt=0;bt<dt.locationSize;bt++)N(dt.location+bt,q/dt.locationSize,It,P,q*nt,q/dt.locationSize*bt*nt,vt)}}else if(I!==void 0){const P=I[ot];if(P!==void 0)switch(P.length){case 2:o.vertexAttrib2fv(dt.location,P);break;case 3:o.vertexAttrib3fv(dt.location,P);break;case 4:o.vertexAttrib4fv(dt.location,P);break;default:o.vertexAttrib1fv(dt.location,P)}}}}D()}function G(){w();for(const H in s){const $=s[H];for(const at in $){const lt=$[at];for(const tt in lt){const O=lt[tt];for(const I in O)v(O[I].object),delete O[I];delete lt[tt]}}delete s[H]}}function B(H){if(s[H.id]===void 0)return;const $=s[H.id];for(const at in $){const lt=$[at];for(const tt in lt){const O=lt[tt];for(const I in O)v(O[I].object),delete O[I];delete lt[tt]}}delete s[H.id]}function F(H){for(const $ in s){const at=s[$];for(const lt in at){const tt=at[lt];if(tt[H.id]===void 0)continue;const O=tt[H.id];for(const I in O)v(O[I].object),delete O[I];delete tt[H.id]}}}function T(H){for(const $ in s){const at=s[$],lt=H.isInstancedMesh===!0?H.id:0,tt=at[lt];if(tt!==void 0){for(const O in tt){const I=tt[O];for(const ot in I)v(I[ot].object),delete I[ot];delete tt[O]}delete at[lt],Object.keys(at).length===0&&delete s[$]}}}function w(){ht(),h=!0,c!==l&&(c=l,d(c.object))}function ht(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:w,resetDefaultState:ht,dispose:G,releaseStatesOfGeometry:B,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:y,disableUnusedAttributes:D}}function fT(o,t,i){let s;function l(d){s=d}function c(d,v){o.drawArrays(s,d,v),i.update(v,s,1)}function h(d,v,x){x!==0&&(o.drawArraysInstanced(s,d,v,x),i.update(v,s,x))}function p(d,v,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,v,0,x);let M=0;for(let b=0;b<x;b++)M+=v[b];i.update(M,s,1)}function m(d,v,x,g){if(x===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<d.length;b++)h(d[b],v[b],g[b]);else{M.multiDrawArraysInstancedWEBGL(s,d,0,v,0,g,0,x);let b=0;for(let C=0;C<x;C++)b+=v[C]*g[C];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function hT(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==Di&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(F){const T=F===ya&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==gi&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Bi&&!T)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const v=m(d);v!==d&&(ee("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:U,maxSamples:G,samples:B}}function dT(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new ga,p=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||s!==0||l;return l=g,s=x.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=v(x,g,0)},this.setState=function(x,g,M){const b=x.clippingPlanes,C=x.clipIntersection,y=x.clipShadows,S=o.get(x);if(!l||b===null||b.length===0||c&&!y)c?v(null):d();else{const D=c?0:s,N=D*4;let U=S.clippingState||null;m.value=U,U=v(b,g,N,M);for(let G=0;G!==N;++G)U[G]=i[G];S.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(x,g,M,b){const C=x!==null?x.length:0;let y=null;if(C!==0){if(y=m.value,b!==!0||y===null){const S=M+C*4,D=g.matrixWorldInverse;p.getNormalMatrix(D),(y===null||y.length<S)&&(y=new Float32Array(S));for(let N=0,U=M;N!==C;++N,U+=4)h.copy(x[N]).applyMatrix4(D,p),h.normal.toArray(y,U),y[U+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}const ss=4,D0=[.125,.215,.35,.446,.526,.582],Ns=20,pT=256,Vo=new wv,w0=new Fe;let Yh=null,qh=0,jh=0,Zh=!1;const mT=new Z;class U0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=mT}=c;Yh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yh,qh,jh),this._renderer.xr.enabled=Zh,t.scissorTest=!1,Or(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Is||t.mapping===Br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:ya,format:Di,colorSpace:Gr,depthBuffer:!1},l=L0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=L0(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gT(c)),this._blurMaterial=vT(c,t,i),this._ggxMaterial=_T(c,t,i)}return l}_compileMaterial(t){const i=new wi(new _i,t);this._renderer.compile(i,Vo)}_sceneToCubeUV(t,i,s,l,c){const m=new mi(90,1,i,s),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(w0),x.toneMapping=Gi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wi(new tl,new iu({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let S=!1;const D=t.background;D?D.isColor&&(y.color.copy(D),t.background=null,S=!0):(y.color.copy(w0),S=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,d[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[N],c.y,c.z)):U===1?(m.up.set(0,0,d[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[N],c.z)):(m.up.set(0,d[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[N]));const G=this._cubeSize;Or(l,U*G,N>2?G:0,G,G),x.setRenderTarget(l),S&&x.render(C,m),x.render(t,m)}x.toneMapping=M,x.autoClear=g,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Is||t.mapping===Br;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=O0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Or(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Vo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-v*v),g=0+d*1.25,M=x*g,{_lodMax:b}=this,C=this._sizeLods[s],y=3*C*(s>b-ss?s-b+ss:0),S=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,Or(c,y,S,3*C,2*C),l.setRenderTarget(c),l.render(p,Vo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Or(t,y,S,3*C,2*C),l.setRenderTarget(t),l.render(p,Vo)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&be("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=d;const g=d.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ns-1),C=c/b,y=isFinite(c)?1+Math.floor(v*C):Ns;y>Ns&&ee(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ns}`);const S=[];let D=0;for(let F=0;F<Ns;++F){const T=F/C,w=Math.exp(-T*T/2);S.push(w),F===0?D+=w:F<y&&(D+=2*w)}for(let F=0;F<S.length;F++)S[F]=S[F]/D;g.envMap.value=t.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:N}=this;g.dTheta.value=b,g.mipInt.value=N-s;const U=this._sizeLods[l],G=3*U*(l>N-ss?l-N+ss:0),B=4*(this._cubeSize-U);Or(i,G,B,3*U,2*U),m.setRenderTarget(i),m.render(x,Vo)}}function gT(o){const t=[],i=[],s=[];let l=o;const c=o-ss+1+D0.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);t.push(p);let m=1/p;h>o-ss?m=D0[h-o+ss-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),v=-d,x=1+d,g=[v,v,x,v,x,x,v,v,x,x,v,x],M=6,b=6,C=3,y=2,S=1,D=new Float32Array(C*b*M),N=new Float32Array(y*b*M),U=new Float32Array(S*b*M);for(let B=0;B<M;B++){const F=B%3*2/3-1,T=B>2?0:-1,w=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];D.set(w,C*b*B),N.set(g,y*b*B);const ht=[B,B,B,B,B,B];U.set(ht,S*b*B)}const G=new _i;G.setAttribute("position",new Xi(D,C)),G.setAttribute("uv",new Xi(N,y)),G.setAttribute("faceIndex",new Xi(U,S)),s.push(new wi(G,null)),l>ss&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function L0(o,t,i){const s=new Vi(o,t,i);return s.texture.mapping=tu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Or(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function _T(o,t,i){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ru(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function vT(o,t,i){const s=new Float32Array(Ns),l=new Z(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function N0(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function O0(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Nv extends Vi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Av(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new tl(5,5,5),c=new Wi({name:"CubemapFromEquirect",uniforms:Vr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:Sa});c.uniforms.tEquirect.value=i;const h=new wi(l,c),p=i.minFilter;return i.minFilter===Os&&(i.minFilter=Cn),new by(1,10,this).update(t,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function xT(o){let t=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?h(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===vh||M===xh)if(t.has(g)){const b=t.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const C=new Nv(b.height);return C.fromEquirectangularTexture(o,g),t.set(g,C),g.addEventListener("dispose",d),p(C.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const M=g.mapping,b=M===vh||M===xh,C=M===Is||M===Br;if(b||C){let y=i.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new U0(o)),y=b?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const D=g.image;return b&&D&&D.height>0||C&&D&&m(D)?(s===null&&(s=new U0(o)),y=b?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function p(g,M){return M===vh?g.mapping=Is:M===xh&&(g.mapping=Br),g}function m(g){let M=0;const b=6;for(let C=0;C<b;C++)g[C]!==void 0&&M++;return M===b}function d(g){const M=g.target;M.removeEventListener("dispose",d);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function ST(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Qc("WebGLRenderer: "+s+" extension not supported."),l}}}function MT(o,t,i,s){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",h),delete l[g.id];const M=c.get(g);M&&(t.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const M in g)t.update(g[M],o.ARRAY_BUFFER)}function d(x){const g=[],M=x.index,b=x.attributes.position;let C=0;if(b===void 0)return;if(M!==null){const D=M.array;C=M.version;for(let N=0,U=D.length;N<U;N+=3){const G=D[N+0],B=D[N+1],F=D[N+2];g.push(G,B,B,F,F,G)}}else{const D=b.array;C=b.version;for(let N=0,U=D.length/3-1;N<U;N+=3){const G=N+0,B=N+1,F=N+2;g.push(G,B,B,F,F,G)}}const y=new(b.count>=65535?Ev:yv)(g,1);y.version=C;const S=c.get(x);S&&t.remove(S),c.set(x,y)}function v(x){const g=c.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:v}}function yT(o,t,i){let s;function l(g){s=g}let c,h;function p(g){c=g.type,h=g.bytesPerElement}function m(g,M){o.drawElements(s,M,c,g*h),i.update(M,s,1)}function d(g,M,b){b!==0&&(o.drawElementsInstanced(s,M,c,g*h,b),i.update(M,s,b))}function v(g,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,g,0,b);let y=0;for(let S=0;S<b;S++)y+=M[S];i.update(y,s,1)}function x(g,M,b,C){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<g.length;S++)d(g[S]/h,M[S],C[S]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,g,0,C,0,b);let S=0;for(let D=0;D<b;D++)S+=M[D]*C[D];i.update(S,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function ET(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:be("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function bT(o,t,i){const s=new WeakMap,l=new nn;function c(h,p,m){const d=h.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=v!==void 0?v.length:0;let g=s.get(p);if(g===void 0||g.count!==x){let ht=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",ht)};var M=ht;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let U=0;b===!0&&(U=1),C===!0&&(U=2),y===!0&&(U=3);let G=p.attributes.position.count*U,B=1;G>t.maxTextureSize&&(B=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const F=new Float32Array(G*B*4*x),T=new Sv(F,G,B,x);T.type=Bi,T.needsUpdate=!0;const w=U*4;for(let H=0;H<x;H++){const $=S[H],at=D[H],lt=N[H],tt=G*B*4*H;for(let O=0;O<$.count;O++){const I=O*w;b===!0&&(l.fromBufferAttribute($,O),F[tt+I+0]=l.x,F[tt+I+1]=l.y,F[tt+I+2]=l.z,F[tt+I+3]=0),C===!0&&(l.fromBufferAttribute(at,O),F[tt+I+4]=l.x,F[tt+I+5]=l.y,F[tt+I+6]=l.z,F[tt+I+7]=0),y===!0&&(l.fromBufferAttribute(lt,O),F[tt+I+8]=l.x,F[tt+I+9]=l.y,F[tt+I+10]=l.z,F[tt+I+11]=lt.itemSize===4?l.w:1)}}g={count:x,texture:T,size:new oe(G,B)},s.set(p,g),p.addEventListener("dispose",ht)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<d.length;y++)b+=d[y];const C=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",d)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function TT(o,t,i,s,l){let c=new WeakMap;function h(d){const v=l.render.frame,x=d.geometry,g=t.get(d,x);if(c.get(g)!==v&&(t.update(g),c.set(g,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==v&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),c.set(d,v))),d.isSkinnedMesh){const M=d.skeleton;c.get(M)!==v&&(M.update(),c.set(M,v))}return g}function p(){c=new WeakMap}function m(d){const v=d.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:p}}const AT={[av]:"LINEAR_TONE_MAPPING",[sv]:"REINHARD_TONE_MAPPING",[rv]:"CINEON_TONE_MAPPING",[ov]:"ACES_FILMIC_TONE_MAPPING",[cv]:"AGX_TONE_MAPPING",[uv]:"NEUTRAL_TONE_MAPPING",[lv]:"CUSTOM_TONE_MAPPING"};function RT(o,t,i,s,l){const c=new Vi(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Vi(t,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),p=new _i;p.setAttribute("position",new ai([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ai([0,2,0,0,2,0],2));const m=new _y({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new wi(p,m),v=new wv(-1,1,1,-1,0,1);let x=null,g=null,M=!1,b,C=null,y=[],S=!1;this.setSize=function(D,N){c.setSize(D,N),h.setSize(D,N);for(let U=0;U<y.length;U++){const G=y[U];G.setSize&&G.setSize(D,N)}},this.setEffects=function(D){y=D,S=y.length>0&&y[0].isRenderPass===!0;const N=c.width,U=c.height;for(let G=0;G<y.length;G++){const B=y[G];B.setSize&&B.setSize(N,U)}},this.begin=function(D,N){if(M||D.toneMapping===Gi&&y.length===0)return!1;if(C=N,N!==null){const U=N.width,G=N.height;(c.width!==U||c.height!==G)&&this.setSize(U,G)}return S===!1&&D.setRenderTarget(c),b=D.toneMapping,D.toneMapping=Gi,!0},this.hasRenderPass=function(){return S},this.end=function(D,N){D.toneMapping=b,M=!0;let U=c,G=h;for(let B=0;B<y.length;B++){const F=y[B];if(F.enabled!==!1&&(F.render(D,G,U,N),F.needsSwap!==!1)){const T=U;U=G,G=T}}if(x!==D.outputColorSpace||g!==D.toneMapping){x=D.outputColorSpace,g=D.toneMapping,m.defines={},Te.getTransfer(x)===Ie&&(m.defines.SRGB_TRANSFER="");const B=AT[g];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,D.setRenderTarget(C),D.render(d,v),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),h.dispose(),p.dispose(),m.dispose()}}const Ov=new Dn,Yd=new Ko(1,1),Pv=new Sv,Iv=new WM,Fv=new Av,P0=[],I0=[],F0=new Float32Array(16),z0=new Float32Array(9),B0=new Float32Array(4);function Xr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=P0[l];if(c===void 0&&(c=new Float32Array(l),P0[l]=c),t!==0){s.toArray(c,0);for(let h=1,p=0;h!==t;++h)p+=i,o[h].toArray(c,p)}return c}function gn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function _n(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function ou(o,t){let i=I0[t];i===void 0&&(i=new Int32Array(t),I0[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function CT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function DT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2fv(this.addr,t),_n(i,t)}}function wT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;o.uniform3fv(this.addr,t),_n(i,t)}}function UT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4fv(this.addr,t),_n(i,t)}}function LT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;B0.set(s),o.uniformMatrix2fv(this.addr,!1,B0),_n(i,s)}}function NT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;z0.set(s),o.uniformMatrix3fv(this.addr,!1,z0),_n(i,s)}}function OT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;F0.set(s),o.uniformMatrix4fv(this.addr,!1,F0),_n(i,s)}}function PT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function IT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2iv(this.addr,t),_n(i,t)}}function FT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3iv(this.addr,t),_n(i,t)}}function zT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4iv(this.addr,t),_n(i,t)}}function BT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function HT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2uiv(this.addr,t),_n(i,t)}}function GT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3uiv(this.addr,t),_n(i,t)}}function VT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4uiv(this.addr,t),_n(i,t)}}function XT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Yd.compareFunction=i.isReversedDepthBuffer()?ip:np,c=Yd):c=Ov,i.setTexture2D(t||c,l)}function kT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Iv,l)}function WT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Fv,l)}function YT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Pv,l)}function qT(o){switch(o){case 5126:return CT;case 35664:return DT;case 35665:return wT;case 35666:return UT;case 35674:return LT;case 35675:return NT;case 35676:return OT;case 5124:case 35670:return PT;case 35667:case 35671:return IT;case 35668:case 35672:return FT;case 35669:case 35673:return zT;case 5125:return BT;case 36294:return HT;case 36295:return GT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return YT}}function jT(o,t){o.uniform1fv(this.addr,t)}function ZT(o,t){const i=Xr(t,this.size,2);o.uniform2fv(this.addr,i)}function KT(o,t){const i=Xr(t,this.size,3);o.uniform3fv(this.addr,i)}function QT(o,t){const i=Xr(t,this.size,4);o.uniform4fv(this.addr,i)}function JT(o,t){const i=Xr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function $T(o,t){const i=Xr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function tA(o,t){const i=Xr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function eA(o,t){o.uniform1iv(this.addr,t)}function nA(o,t){o.uniform2iv(this.addr,t)}function iA(o,t){o.uniform3iv(this.addr,t)}function aA(o,t){o.uniform4iv(this.addr,t)}function sA(o,t){o.uniform1uiv(this.addr,t)}function rA(o,t){o.uniform2uiv(this.addr,t)}function oA(o,t){o.uniform3uiv(this.addr,t)}function lA(o,t){o.uniform4uiv(this.addr,t)}function cA(o,t,i){const s=this.cache,l=t.length,c=ou(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Yd:h=Ov;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||h,c[p])}function uA(o,t,i){const s=this.cache,l=t.length,c=ou(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Iv,c[h])}function fA(o,t,i){const s=this.cache,l=t.length,c=ou(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Fv,c[h])}function hA(o,t,i){const s=this.cache,l=t.length,c=ou(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Pv,c[h])}function dA(o){switch(o){case 5126:return jT;case 35664:return ZT;case 35665:return KT;case 35666:return QT;case 35674:return JT;case 35675:return $T;case 35676:return tA;case 5124:case 35670:return eA;case 35667:case 35671:return nA;case 35668:case 35672:return iA;case 35669:case 35673:return aA;case 5125:return sA;case 36294:return rA;case 36295:return oA;case 36296:return lA;case 35678:case 36198:case 36298:case 36306:case 35682:return cA;case 35679:case 36299:case 36307:return uA;case 35680:case 36300:case 36308:case 36293:return fA;case 36289:case 36303:case 36311:case 36292:return hA}}class pA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=qT(i.type)}}class mA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=dA(i.type)}}class gA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const Kh=/(\w+)(\])?(\[|\.)?/g;function H0(o,t){o.seq.push(t),o.map[t.id]=t}function _A(o,t,i){const s=o.name,l=s.length;for(Kh.lastIndex=0;;){const c=Kh.exec(s),h=Kh.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){H0(i,d===void 0?new pA(p,o,t):new mA(p,o,t));break}else{let x=i.map[p];x===void 0&&(x=new gA(p),H0(i,x)),i=x}}}class qc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=t.getActiveUniform(i,h),m=t.getUniformLocation(i,p.name);_A(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function G0(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const vA=37297;let xA=0;function SA(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===t?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const V0=new he;function MA(o){Te._getMatrix(V0,Te.workingColorSpace,o);const t=`mat3( ${V0.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case Zc:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function X0(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+SA(o.getShaderSource(t),p)}else return c}function yA(o,t){const i=MA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const EA={[av]:"Linear",[sv]:"Reinhard",[rv]:"Cineon",[ov]:"ACESFilmic",[cv]:"AgX",[uv]:"Neutral",[lv]:"Custom"};function bA(o,t){const i=EA[t];return i===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zc=new Z;function TA(){Te.getLuminanceCoefficients(zc);const o=zc.x.toFixed(4),t=zc.y.toFixed(4),i=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function RA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function CA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:p}}return i}function Wo(o){return o!==""}function k0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function W0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const DA=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(o){return o.replace(DA,UA)}const wA=new Map;function UA(o,t){let i=de[t];if(i===void 0){const s=wA.get(t);if(s!==void 0)i=de[s],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return qd(i)}const LA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Y0(o){return o.replace(LA,NA)}function NA(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function q0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const OA={[Gc]:"SHADOWMAP_TYPE_PCF",[ko]:"SHADOWMAP_TYPE_VSM"};function PA(o){return OA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const IA={[Is]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE",[tu]:"ENVMAP_TYPE_CUBE_UV"};function FA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":IA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const zA={[Br]:"ENVMAP_MODE_REFRACTION"};function BA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":zA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const HA={[iv]:"ENVMAP_BLENDING_MULTIPLY",[yM]:"ENVMAP_BLENDING_MIX",[EM]:"ENVMAP_BLENDING_ADD"};function GA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":HA[o.combine]||"ENVMAP_BLENDING_NONE"}function VA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function XA(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=PA(i),d=FA(i),v=BA(i),x=GA(i),g=VA(i),M=AA(i),b=RA(c),C=l.createProgram();let y,S,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Wo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Wo).join(`
`),S.length>0&&(S+=`
`)):(y=[q0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),S=[q0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?de.tonemapping_pars_fragment:"",i.toneMapping!==Gi?bA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,yA("linearToOutputTexel",i.outputColorSpace),TA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),h=qd(h),h=k0(h,i),h=W0(h,i),p=qd(p),p=k0(p,i),p=W0(p,i),h=Y0(h),p=Y0(p),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===i0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===i0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=D+y+h,U=D+S+p,G=G0(l,l.VERTEX_SHADER,N),B=G0(l,l.FRAGMENT_SHADER,U);l.attachShader(C,G),l.attachShader(C,B),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(H){if(o.debug.checkShaderErrors){const $=l.getProgramInfoLog(C)||"",at=l.getShaderInfoLog(G)||"",lt=l.getShaderInfoLog(B)||"",tt=$.trim(),O=at.trim(),I=lt.trim();let ot=!0,dt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ot=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,G,B);else{const Et=X0(l,G,"vertex"),P=X0(l,B,"fragment");be("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+tt+`
`+Et+`
`+P)}else tt!==""?ee("WebGLProgram: Program Info Log:",tt):(O===""||I==="")&&(dt=!1);dt&&(H.diagnostics={runnable:ot,programLog:tt,vertexShader:{log:O,prefix:y},fragmentShader:{log:I,prefix:S}})}l.deleteShader(G),l.deleteShader(B),T=new qc(l,C),w=CA(l,C)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let ht=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ht===!1&&(ht=l.getProgramParameter(C,vA)),ht},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=xA++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=B,this}let kA=0;class WA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new YA(t),i.set(t,s)),s}}class YA{constructor(t){this.id=kA++,this.code=t,this.usedTimes=0}}function qA(o,t,i,s,l,c){const h=new sp,p=new WA,m=new Set,d=[],v=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,w,ht,H,$){const at=H.fog,lt=$.geometry,tt=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,I=t.get(T.envMap||tt,O),ot=I&&I.mapping===tu?I.image.height:null,dt=M[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ee("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const Et=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,P=Et!==void 0?Et.length:0;let q=0;lt.morphAttributes.position!==void 0&&(q=1),lt.morphAttributes.normal!==void 0&&(q=2),lt.morphAttributes.color!==void 0&&(q=3);let _t,At,It,nt;if(dt){const Ee=zi[dt];_t=Ee.vertexShader,At=Ee.fragmentShader}else _t=T.vertexShader,At=T.fragmentShader,p.update(T),It=p.getVertexShaderID(T),nt=p.getFragmentShaderID(T);const vt=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),Vt=$.isInstancedMesh===!0,Zt=$.isBatchedMesh===!0,Jt=!!T.map,Qe=!!T.matcap,ve=!!I,me=!!T.aoMap,De=!!T.lightMap,re=!!T.bumpMap,Ze=!!T.normalMap,V=!!T.displacementMap,We=!!T.emissiveMap,ye=!!T.metalnessMap,Ue=!!T.roughnessMap,Wt=T.anisotropy>0,L=T.clearcoat>0,E=T.dispersion>0,Y=T.iridescence>0,pt=T.sheen>0,xt=T.transmission>0,ut=Wt&&!!T.anisotropyMap,Xt=L&&!!T.clearcoatMap,Ct=L&&!!T.clearcoatNormalMap,jt=L&&!!T.clearcoatRoughnessMap,$t=Y&&!!T.iridescenceMap,yt=Y&&!!T.iridescenceThicknessMap,St=pt&&!!T.sheenColorMap,Nt=pt&&!!T.sheenRoughnessMap,Lt=!!T.specularMap,Ot=!!T.specularColorMap,ce=!!T.specularIntensityMap,W=xt&&!!T.transmissionMap,Rt=xt&&!!T.thicknessMap,Tt=!!T.gradientMap,Pt=!!T.alphaMap,Mt=T.alphaTest>0,ct=!!T.alphaHash,zt=!!T.extensions;let ne=Gi;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Ne={shaderID:dt,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:At,defines:T.defines,customVertexShaderID:It,customFragmentShaderID:nt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Zt,batchingColor:Zt&&$._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&$.instanceColor!==null,instancingMorph:Vt&&$.morphTexture!==null,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Gr,alphaToCoverage:!!T.alphaToCoverage,map:Jt,matcap:Qe,envMap:ve,envMapMode:ve&&I.mapping,envMapCubeUVHeight:ot,aoMap:me,lightMap:De,bumpMap:re,normalMap:Ze,displacementMap:V,emissiveMap:We,normalMapObjectSpace:Ze&&T.normalMapType===RM,normalMapTangentSpace:Ze&&T.normalMapType===AM,metalnessMap:ye,roughnessMap:Ue,anisotropy:Wt,anisotropyMap:ut,clearcoat:L,clearcoatMap:Xt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:jt,dispersion:E,iridescence:Y,iridescenceMap:$t,iridescenceThicknessMap:yt,sheen:pt,sheenColorMap:St,sheenRoughnessMap:Nt,specularMap:Lt,specularColorMap:Ot,specularIntensityMap:ce,transmission:xt,transmissionMap:W,thicknessMap:Rt,gradientMap:Tt,opaque:T.transparent===!1&&T.blending===Ir&&T.alphaToCoverage===!1,alphaMap:Pt,alphaTest:Mt,alphaHash:ct,combine:T.combine,mapUv:Jt&&b(T.map.channel),aoMapUv:me&&b(T.aoMap.channel),lightMapUv:De&&b(T.lightMap.channel),bumpMapUv:re&&b(T.bumpMap.channel),normalMapUv:Ze&&b(T.normalMap.channel),displacementMapUv:V&&b(T.displacementMap.channel),emissiveMapUv:We&&b(T.emissiveMap.channel),metalnessMapUv:ye&&b(T.metalnessMap.channel),roughnessMapUv:Ue&&b(T.roughnessMap.channel),anisotropyMapUv:ut&&b(T.anisotropyMap.channel),clearcoatMapUv:Xt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:St&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&b(T.sheenRoughnessMap.channel),specularMapUv:Lt&&b(T.specularMap.channel),specularColorMapUv:Ot&&b(T.specularColorMap.channel),specularIntensityMapUv:ce&&b(T.specularIntensityMap.channel),transmissionMapUv:W&&b(T.transmissionMap.channel),thicknessMapUv:Rt&&b(T.thicknessMap.channel),alphaMapUv:Pt&&b(T.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Ze||Wt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!lt.attributes.uv&&(Jt||Pt),fog:!!at,useFog:T.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||lt.attributes.normal===void 0&&Ze===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:bt,skinning:$.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&ht.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:Jt&&T.map.isVideoTexture===!0&&Te.getTransfer(T.map.colorSpace)===Ie,decodeVideoTextureEmissive:We&&T.emissiveMap.isVideoTexture===!0&&Te.getTransfer(T.emissiveMap.colorSpace)===Ie,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_a,flipSided:T.side===Wn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:zt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&T.extensions.multiDraw===!0||Zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ne.vertexUv1s=m.has(1),Ne.vertexUv2s=m.has(2),Ne.vertexUv3s=m.has(3),m.clear(),Ne}function y(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ht in T.defines)w.push(ht),w.push(T.defines[ht]);return T.isRawShaderMaterial===!1&&(S(w,T),D(w,T),w.push(o.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function S(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function D(T,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),T.push(h.mask)}function N(T){const w=M[T.type];let ht;if(w){const H=zi[w];ht=py.clone(H.uniforms)}else ht=T.uniforms;return ht}function U(T,w){let ht=v.get(w);return ht!==void 0?++ht.usedTimes:(ht=new XA(o,w,T,l),d.push(ht),v.set(w,ht)),ht}function G(T){if(--T.usedTimes===0){const w=d.indexOf(T);d[w]=d[d.length-1],d.pop(),v.delete(T.cacheKey),T.destroy()}}function B(T){p.remove(T)}function F(){p.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:N,acquireProgram:U,releaseProgram:G,releaseShaderCache:B,programs:d,dispose:F}}function jA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let p=o.get(h);return p===void 0&&(p={},o.set(h,p)),p}function s(h){o.delete(h)}function l(h,p,m){o.get(h)[p]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function ZA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function j0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Z0(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,b,C,y,S){let D=o[t];return D===void 0?(D={id:g.id,object:g,geometry:M,material:b,materialVariant:h(g),groupOrder:C,renderOrder:g.renderOrder,z:y,group:S},o[t]=D):(D.id=g.id,D.object=g,D.geometry=M,D.material=b,D.materialVariant=h(g),D.groupOrder=C,D.renderOrder=g.renderOrder,D.z=y,D.group=S),t++,D}function m(g,M,b,C,y,S){const D=p(g,M,b,C,y,S);b.transmission>0?s.push(D):b.transparent===!0?l.push(D):i.push(D)}function d(g,M,b,C,y,S){const D=p(g,M,b,C,y,S);b.transmission>0?s.unshift(D):b.transparent===!0?l.unshift(D):i.unshift(D)}function v(g,M){i.length>1&&i.sort(g||ZA),s.length>1&&s.sort(M||j0),l.length>1&&l.sort(M||j0)}function x(){for(let g=t,M=o.length;g<M;g++){const b=o[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:x,sort:v}}function KA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new Z0,o.set(s,[h])):l>=c.length?(h=new Z0,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function QA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new Fe};break;case"SpotLight":i={position:new Z,direction:new Z,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":i={color:new Fe,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return o[t.id]=i,i}}}function JA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let $A=0;function t1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function e1(o){const t=new QA,i=JA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new Z);const l=new Z,c=new Ke,h=new Ke;function p(d){let v=0,x=0,g=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,b=0,C=0,y=0,S=0,D=0,N=0,U=0,G=0,B=0,F=0;d.sort(t1);for(let w=0,ht=d.length;w<ht;w++){const H=d[w],$=H.color,at=H.intensity,lt=H.distance;let tt=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Hr?tt=H.shadow.map.texture:tt=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=$.r*at,x+=$.g*at,g+=$.b*at;else if(H.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(H.sh.coefficients[O],at);F++}else if(H.isDirectionalLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const I=H.shadow,ot=i.get(H);ot.shadowIntensity=I.intensity,ot.shadowBias=I.bias,ot.shadowNormalBias=I.normalBias,ot.shadowRadius=I.radius,ot.shadowMapSize=I.mapSize,s.directionalShadow[M]=ot,s.directionalShadowMap[M]=tt,s.directionalShadowMatrix[M]=H.shadow.matrix,D++}s.directional[M]=O,M++}else if(H.isSpotLight){const O=t.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy($).multiplyScalar(at),O.distance=lt,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,s.spot[C]=O;const I=H.shadow;if(H.map&&(s.spotLightMap[G]=H.map,G++,I.updateMatrices(H),H.castShadow&&B++),s.spotLightMatrix[C]=I.matrix,H.castShadow){const ot=i.get(H);ot.shadowIntensity=I.intensity,ot.shadowBias=I.bias,ot.shadowNormalBias=I.normalBias,ot.shadowRadius=I.radius,ot.shadowMapSize=I.mapSize,s.spotShadow[C]=ot,s.spotShadowMap[C]=tt,U++}C++}else if(H.isRectAreaLight){const O=t.get(H);O.color.copy($).multiplyScalar(at),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=O,y++}else if(H.isPointLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const I=H.shadow,ot=i.get(H);ot.shadowIntensity=I.intensity,ot.shadowBias=I.bias,ot.shadowNormalBias=I.normalBias,ot.shadowRadius=I.radius,ot.shadowMapSize=I.mapSize,ot.shadowCameraNear=I.camera.near,ot.shadowCameraFar=I.camera.far,s.pointShadow[b]=ot,s.pointShadowMap[b]=tt,s.pointShadowMatrix[b]=H.shadow.matrix,N++}s.point[b]=O,b++}else if(H.isHemisphereLight){const O=t.get(H);O.skyColor.copy(H.color).multiplyScalar(at),O.groundColor.copy(H.groundColor).multiplyScalar(at),s.hemi[S]=O,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ut.LTC_FLOAT_1,s.rectAreaLTC2=Ut.LTC_FLOAT_2):(s.rectAreaLTC1=Ut.LTC_HALF_1,s.rectAreaLTC2=Ut.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==C||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==D||T.numPointShadows!==N||T.numSpotShadows!==U||T.numSpotMaps!==G||T.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=U+G-B,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=F,T.directionalLength=M,T.pointLength=b,T.spotLength=C,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=D,T.numPointShadows=N,T.numSpotShadows=U,T.numSpotMaps=G,T.numLightProbes=F,s.version=$A++)}function m(d,v){let x=0,g=0,M=0,b=0,C=0;const y=v.matrixWorldInverse;for(let S=0,D=d.length;S<D;S++){const N=d[S];if(N.isDirectionalLight){const U=s.directional[x];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),x++}else if(N.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),h.identity(),c.copy(N.matrixWorld),c.premultiply(y),h.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const U=s.point[g];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),g++}else if(N.isHemisphereLight){const U=s.hemi[C];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(y),C++}}}return{setup:p,setupView:m,state:s}}function K0(o){const t=new e1(o),i=[],s=[];function l(v){d.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function h(v){s.push(v)}function p(){t.setup(i)}function m(v){t.setupView(i,v)}const d={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:h}}function n1(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let p;return h===void 0?(p=new K0(o),t.set(l,[p])):c>=h.length?(p=new K0(o),h.push(p)):p=h[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const i1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,s1=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],r1=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Q0=new Ke,Xo=new Z,Qh=new Z;function o1(o,t,i){let s=new bv;const l=new oe,c=new oe,h=new nn,p=new vy,m=new xy,d={},v=i.maxTextureSize,x={[rs]:Wn,[Wn]:rs,[_a]:_a},g=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:i1,fragmentShader:a1}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new _i;b.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new wi(b,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let S=this.type;this.render=function(B,F,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;this.type===iM&&(ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Gc);const w=o.getRenderTarget(),ht=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),$=o.state;$.setBlending(Sa),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const at=S!==this.type;at&&F.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach(tt=>tt.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,tt=B.length;lt<tt;lt++){const O=B[lt],I=O.shadow;if(I===void 0){ee("WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const ot=I.getFrameExtents();l.multiply(ot),c.copy(I.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ot.x),l.x=c.x*ot.x,I.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ot.y),l.y=c.y*ot.y,I.mapSize.y=c.y));const dt=o.state.buffers.depth.getReversed();if(I.camera._reversedDepth=dt,I.map===null||at===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===ko){if(O.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Vi(l.x,l.y,{format:Hr,type:ya,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),I.map.texture.name=O.name+".shadowMap",I.map.depthTexture=new Ko(l.x,l.y,Bi),I.map.depthTexture.name=O.name+".shadowMapDepth",I.map.depthTexture.format=Ea,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=bn,I.map.depthTexture.magFilter=bn}else O.isPointLight?(I.map=new Nv(l.x),I.map.depthTexture=new uy(l.x,ki)):(I.map=new Vi(l.x,l.y),I.map.depthTexture=new Ko(l.x,l.y,ki)),I.map.depthTexture.name=O.name+".shadowMap",I.map.depthTexture.format=Ea,this.type===Gc?(I.map.depthTexture.compareFunction=dt?ip:np,I.map.depthTexture.minFilter=Cn,I.map.depthTexture.magFilter=Cn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=bn,I.map.depthTexture.magFilter=bn);I.camera.updateProjectionMatrix()}const Et=I.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Et;P++){if(I.map.isWebGLCubeRenderTarget)o.setRenderTarget(I.map,P),o.clear();else{P===0&&(o.setRenderTarget(I.map),o.clear());const q=I.getViewport(P);h.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),$.viewport(h)}if(O.isPointLight){const q=I.camera,_t=I.matrix,At=O.distance||q.far;At!==q.far&&(q.far=At,q.updateProjectionMatrix()),Xo.setFromMatrixPosition(O.matrixWorld),q.position.copy(Xo),Qh.copy(q.position),Qh.add(s1[P]),q.up.copy(r1[P]),q.lookAt(Qh),q.updateMatrixWorld(),_t.makeTranslation(-Xo.x,-Xo.y,-Xo.z),Q0.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Q0,q.coordinateSystem,q.reversedDepth)}else I.updateMatrices(O);s=I.getFrustum(),U(F,T,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===ko&&D(I,T),I.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(w,ht,H)};function D(B,F){const T=t.update(C);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Vi(l.x,l.y,{format:Hr,type:ya})),g.uniforms.shadow_pass.value=B.map.depthTexture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(F,null,T,g,C,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(F,null,T,M,C,null)}function N(B,F,T,w){let ht=null;const H=T.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)ht=H;else if(ht=T.isPointLight===!0?m:p,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const $=ht.uuid,at=F.uuid;let lt=d[$];lt===void 0&&(lt={},d[$]=lt);let tt=lt[at];tt===void 0&&(tt=ht.clone(),lt[at]=tt,F.addEventListener("dispose",G)),ht=tt}if(ht.visible=F.visible,ht.wireframe=F.wireframe,w===ko?ht.side=F.shadowSide!==null?F.shadowSide:F.side:ht.side=F.shadowSide!==null?F.shadowSide:x[F.side],ht.alphaMap=F.alphaMap,ht.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,ht.map=F.map,ht.clipShadows=F.clipShadows,ht.clippingPlanes=F.clippingPlanes,ht.clipIntersection=F.clipIntersection,ht.displacementMap=F.displacementMap,ht.displacementScale=F.displacementScale,ht.displacementBias=F.displacementBias,ht.wireframeLinewidth=F.wireframeLinewidth,ht.linewidth=F.linewidth,T.isPointLight===!0&&ht.isMeshDistanceMaterial===!0){const $=o.properties.get(ht);$.light=T}return ht}function U(B,F,T,w,ht){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&ht===ko)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,B.matrixWorld);const at=t.update(B),lt=B.material;if(Array.isArray(lt)){const tt=at.groups;for(let O=0,I=tt.length;O<I;O++){const ot=tt[O],dt=lt[ot.materialIndex];if(dt&&dt.visible){const Et=N(B,dt,w,ht);B.onBeforeShadow(o,B,F,T,at,Et,ot),o.renderBufferDirect(T,null,at,Et,B,ot),B.onAfterShadow(o,B,F,T,at,Et,ot)}}}else if(lt.visible){const tt=N(B,lt,w,ht);B.onBeforeShadow(o,B,F,T,at,tt,null),o.renderBufferDirect(T,null,at,tt,B,null),B.onAfterShadow(o,B,F,T,at,tt,null)}}const $=B.children;for(let at=0,lt=$.length;at<lt;at++)U($[at],F,T,w,ht)}function G(B){B.target.removeEventListener("dispose",G);for(const T in d){const w=d[T],ht=B.target.uuid;ht in w&&(w[ht].dispose(),delete w[ht])}}}function l1(o,t){function i(){let W=!1;const Rt=new nn;let Tt=null;const Pt=new nn(0,0,0,0);return{setMask:function(Mt){Tt!==Mt&&!W&&(o.colorMask(Mt,Mt,Mt,Mt),Tt=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,ct,zt,ne,Ne){Ne===!0&&(Mt*=ne,ct*=ne,zt*=ne),Rt.set(Mt,ct,zt,ne),Pt.equals(Rt)===!1&&(o.clearColor(Mt,ct,zt,ne),Pt.copy(Rt))},reset:function(){W=!1,Tt=null,Pt.set(-1,0,0,0)}}}function s(){let W=!1,Rt=!1,Tt=null,Pt=null,Mt=null;return{setReversed:function(ct){if(Rt!==ct){const zt=t.get("EXT_clip_control");ct?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Rt=ct;const ne=Mt;Mt=null,this.setClear(ne)}},getReversed:function(){return Rt},setTest:function(ct){ct?vt(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(ct){Tt!==ct&&!W&&(o.depthMask(ct),Tt=ct)},setFunc:function(ct){if(Rt&&(ct=FM[ct]),Pt!==ct){switch(ct){case id:o.depthFunc(o.NEVER);break;case ad:o.depthFunc(o.ALWAYS);break;case sd:o.depthFunc(o.LESS);break;case zr:o.depthFunc(o.LEQUAL);break;case rd:o.depthFunc(o.EQUAL);break;case od:o.depthFunc(o.GEQUAL);break;case ld:o.depthFunc(o.GREATER);break;case cd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=ct}},setLocked:function(ct){W=ct},setClear:function(ct){Mt!==ct&&(Mt=ct,Rt&&(ct=1-ct),o.clearDepth(ct))},reset:function(){W=!1,Tt=null,Pt=null,Mt=null,Rt=!1}}}function l(){let W=!1,Rt=null,Tt=null,Pt=null,Mt=null,ct=null,zt=null,ne=null,Ne=null;return{setTest:function(Ee){W||(Ee?vt(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(Ee){Rt!==Ee&&!W&&(o.stencilMask(Ee),Rt=Ee)},setFunc:function(Ee,wn,vi){(Tt!==Ee||Pt!==wn||Mt!==vi)&&(o.stencilFunc(Ee,wn,vi),Tt=Ee,Pt=wn,Mt=vi)},setOp:function(Ee,wn,vi){(ct!==Ee||zt!==wn||ne!==vi)&&(o.stencilOp(Ee,wn,vi),ct=Ee,zt=wn,ne=vi)},setLocked:function(Ee){W=Ee},setClear:function(Ee){Ne!==Ee&&(o.clearStencil(Ee),Ne=Ee)},reset:function(){W=!1,Rt=null,Tt=null,Pt=null,Mt=null,ct=null,zt=null,ne=null,Ne=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let v={},x={},g=new WeakMap,M=[],b=null,C=!1,y=null,S=null,D=null,N=null,U=null,G=null,B=null,F=new Fe(0,0,0),T=0,w=!1,ht=null,H=null,$=null,at=null,lt=null;const tt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,I=0;const ot=o.getParameter(o.VERSION);ot.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(ot)[1]),O=I>=1):ot.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),O=I>=2);let dt=null,Et={};const P=o.getParameter(o.SCISSOR_BOX),q=o.getParameter(o.VIEWPORT),_t=new nn().fromArray(P),At=new nn().fromArray(q);function It(W,Rt,Tt,Pt){const Mt=new Uint8Array(4),ct=o.createTexture();o.bindTexture(W,ct),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let zt=0;zt<Tt;zt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Rt+zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return ct}const nt={};nt[o.TEXTURE_2D]=It(o.TEXTURE_2D,o.TEXTURE_2D,1),nt[o.TEXTURE_CUBE_MAP]=It(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[o.TEXTURE_2D_ARRAY]=It(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),nt[o.TEXTURE_3D]=It(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),vt(o.DEPTH_TEST),h.setFunc(zr),re(!1),Ze(Q_),vt(o.CULL_FACE),me(Sa);function vt(W){v[W]!==!0&&(o.enable(W),v[W]=!0)}function bt(W){v[W]!==!1&&(o.disable(W),v[W]=!1)}function Vt(W,Rt){return x[W]!==Rt?(o.bindFramebuffer(W,Rt),x[W]=Rt,W===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Rt),W===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Zt(W,Rt){let Tt=M,Pt=!1;if(W){Tt=g.get(Rt),Tt===void 0&&(Tt=[],g.set(Rt,Tt));const Mt=W.textures;if(Tt.length!==Mt.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let ct=0,zt=Mt.length;ct<zt;ct++)Tt[ct]=o.COLOR_ATTACHMENT0+ct;Tt.length=Mt.length,Pt=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(Tt)}function Jt(W){return b!==W?(o.useProgram(W),b=W,!0):!1}const Qe={[Ls]:o.FUNC_ADD,[sM]:o.FUNC_SUBTRACT,[rM]:o.FUNC_REVERSE_SUBTRACT};Qe[oM]=o.MIN,Qe[lM]=o.MAX;const ve={[cM]:o.ZERO,[uM]:o.ONE,[fM]:o.SRC_COLOR,[ed]:o.SRC_ALPHA,[_M]:o.SRC_ALPHA_SATURATE,[mM]:o.DST_COLOR,[dM]:o.DST_ALPHA,[hM]:o.ONE_MINUS_SRC_COLOR,[nd]:o.ONE_MINUS_SRC_ALPHA,[gM]:o.ONE_MINUS_DST_COLOR,[pM]:o.ONE_MINUS_DST_ALPHA,[vM]:o.CONSTANT_COLOR,[xM]:o.ONE_MINUS_CONSTANT_COLOR,[SM]:o.CONSTANT_ALPHA,[MM]:o.ONE_MINUS_CONSTANT_ALPHA};function me(W,Rt,Tt,Pt,Mt,ct,zt,ne,Ne,Ee){if(W===Sa){C===!0&&(bt(o.BLEND),C=!1);return}if(C===!1&&(vt(o.BLEND),C=!0),W!==aM){if(W!==y||Ee!==w){if((S!==Ls||U!==Ls)&&(o.blendEquation(o.FUNC_ADD),S=Ls,U=Ls),Ee)switch(W){case Ir:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case J_:o.blendFunc(o.ONE,o.ONE);break;case $_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case t0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:be("WebGLState: Invalid blending: ",W);break}else switch(W){case Ir:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case J_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case $_:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case t0:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",W);break}D=null,N=null,G=null,B=null,F.set(0,0,0),T=0,y=W,w=Ee}return}Mt=Mt||Rt,ct=ct||Tt,zt=zt||Pt,(Rt!==S||Mt!==U)&&(o.blendEquationSeparate(Qe[Rt],Qe[Mt]),S=Rt,U=Mt),(Tt!==D||Pt!==N||ct!==G||zt!==B)&&(o.blendFuncSeparate(ve[Tt],ve[Pt],ve[ct],ve[zt]),D=Tt,N=Pt,G=ct,B=zt),(ne.equals(F)===!1||Ne!==T)&&(o.blendColor(ne.r,ne.g,ne.b,Ne),F.copy(ne),T=Ne),y=W,w=!1}function De(W,Rt){W.side===_a?bt(o.CULL_FACE):vt(o.CULL_FACE);let Tt=W.side===Wn;Rt&&(Tt=!Tt),re(Tt),W.blending===Ir&&W.transparent===!1?me(Sa):me(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Pt=W.stencilWrite;p.setTest(Pt),Pt&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),We(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function re(W){ht!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),ht=W)}function Ze(W){W!==eM?(vt(o.CULL_FACE),W!==H&&(W===Q_?o.cullFace(o.BACK):W===nM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),H=W}function V(W){W!==$&&(O&&o.lineWidth(W),$=W)}function We(W,Rt,Tt){W?(vt(o.POLYGON_OFFSET_FILL),(at!==Rt||lt!==Tt)&&(at=Rt,lt=Tt,h.getReversed()&&(Rt=-Rt),o.polygonOffset(Rt,Tt))):bt(o.POLYGON_OFFSET_FILL)}function ye(W){W?vt(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function Ue(W){W===void 0&&(W=o.TEXTURE0+tt-1),dt!==W&&(o.activeTexture(W),dt=W)}function Wt(W,Rt,Tt){Tt===void 0&&(dt===null?Tt=o.TEXTURE0+tt-1:Tt=dt);let Pt=Et[Tt];Pt===void 0&&(Pt={type:void 0,texture:void 0},Et[Tt]=Pt),(Pt.type!==W||Pt.texture!==Rt)&&(dt!==Tt&&(o.activeTexture(Tt),dt=Tt),o.bindTexture(W,Rt||nt[W]),Pt.type=W,Pt.texture=Rt)}function L(){const W=Et[dt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){be("WebGLState:",W)}}function Y(){try{o.compressedTexImage3D(...arguments)}catch(W){be("WebGLState:",W)}}function pt(){try{o.texSubImage2D(...arguments)}catch(W){be("WebGLState:",W)}}function xt(){try{o.texSubImage3D(...arguments)}catch(W){be("WebGLState:",W)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(W){be("WebGLState:",W)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){be("WebGLState:",W)}}function Ct(){try{o.texStorage2D(...arguments)}catch(W){be("WebGLState:",W)}}function jt(){try{o.texStorage3D(...arguments)}catch(W){be("WebGLState:",W)}}function $t(){try{o.texImage2D(...arguments)}catch(W){be("WebGLState:",W)}}function yt(){try{o.texImage3D(...arguments)}catch(W){be("WebGLState:",W)}}function St(W){_t.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),_t.copy(W))}function Nt(W){At.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Lt(W,Rt){let Tt=d.get(Rt);Tt===void 0&&(Tt=new WeakMap,d.set(Rt,Tt));let Pt=Tt.get(W);Pt===void 0&&(Pt=o.getUniformBlockIndex(Rt,W.name),Tt.set(W,Pt))}function Ot(W,Rt){const Pt=d.get(Rt).get(W);m.get(Rt)!==Pt&&(o.uniformBlockBinding(Rt,Pt,W.__bindingPointIndex),m.set(Rt,Pt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},dt=null,Et={},x={},g=new WeakMap,M=[],b=null,C=!1,y=null,S=null,D=null,N=null,U=null,G=null,B=null,F=new Fe(0,0,0),T=0,w=!1,ht=null,H=null,$=null,at=null,lt=null,_t.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:vt,disable:bt,bindFramebuffer:Vt,drawBuffers:Zt,useProgram:Jt,setBlending:me,setMaterial:De,setFlipSided:re,setCullFace:Ze,setLineWidth:V,setPolygonOffset:We,setScissorTest:ye,activeTexture:Ue,bindTexture:Wt,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:$t,texImage3D:yt,updateUBOMapping:Lt,uniformBlockBinding:Ot,texStorage2D:Ct,texStorage3D:jt,texSubImage2D:pt,texSubImage3D:xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Xt,scissor:St,viewport:Nt,reset:ce}}function c1(o,t,i,s,l,c,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new oe,v=new WeakMap;let x;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):Zo("canvas")}function C(L,E,Y){let pt=1;const xt=Wt(L);if((xt.width>Y||xt.height>Y)&&(pt=Y/Math.max(xt.width,xt.height)),pt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ut=Math.floor(pt*xt.width),Xt=Math.floor(pt*xt.height);x===void 0&&(x=b(ut,Xt));const Ct=E?b(ut,Xt):x;return Ct.width=ut,Ct.height=Xt,Ct.getContext("2d").drawImage(L,0,0,ut,Xt),ee("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ut+"x"+Xt+")."),Ct}else return"data"in L&&ee("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),L;return L}function y(L){return L.generateMipmaps}function S(L){o.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,E,Y,pt,xt=!1){if(L!==null){if(o[L]!==void 0)return o[L];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ut=E;if(E===o.RED&&(Y===o.FLOAT&&(ut=o.R32F),Y===o.HALF_FLOAT&&(ut=o.R16F),Y===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ut=o.R8UI),Y===o.UNSIGNED_SHORT&&(ut=o.R16UI),Y===o.UNSIGNED_INT&&(ut=o.R32UI),Y===o.BYTE&&(ut=o.R8I),Y===o.SHORT&&(ut=o.R16I),Y===o.INT&&(ut=o.R32I)),E===o.RG&&(Y===o.FLOAT&&(ut=o.RG32F),Y===o.HALF_FLOAT&&(ut=o.RG16F),Y===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RG_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ut=o.RG8UI),Y===o.UNSIGNED_SHORT&&(ut=o.RG16UI),Y===o.UNSIGNED_INT&&(ut=o.RG32UI),Y===o.BYTE&&(ut=o.RG8I),Y===o.SHORT&&(ut=o.RG16I),Y===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),Y===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),Y===o.UNSIGNED_INT&&(ut=o.RGB32UI),Y===o.BYTE&&(ut=o.RGB8I),Y===o.SHORT&&(ut=o.RGB16I),Y===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),Y===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),Y===o.UNSIGNED_INT&&(ut=o.RGBA32UI),Y===o.BYTE&&(ut=o.RGBA8I),Y===o.SHORT&&(ut=o.RGBA16I),Y===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&(Y===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),Y===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),E===o.RGBA){const Xt=xt?Zc:Te.getTransfer(pt);Y===o.FLOAT&&(ut=o.RGBA32F),Y===o.HALF_FLOAT&&(ut=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(ut=Xt===Ie?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function U(L,E){let Y;return L?E===null||E===ki||E===jo?Y=o.DEPTH24_STENCIL8:E===Bi?Y=o.DEPTH32F_STENCIL8:E===qo&&(Y=o.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ki||E===jo?Y=o.DEPTH_COMPONENT24:E===Bi?Y=o.DEPTH_COMPONENT32F:E===qo&&(Y=o.DEPTH_COMPONENT16),Y}function G(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==bn&&L.minFilter!==Cn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function B(L){const E=L.target;E.removeEventListener("dispose",B),T(E),E.isVideoTexture&&v.delete(E)}function F(L){const E=L.target;E.removeEventListener("dispose",F),ht(E)}function T(L){const E=s.get(L);if(E.__webglInit===void 0)return;const Y=L.source,pt=g.get(Y);if(pt){const xt=pt[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&w(L),Object.keys(pt).length===0&&g.delete(Y)}s.remove(L)}function w(L){const E=s.get(L);o.deleteTexture(E.__webglTexture);const Y=L.source,pt=g.get(Y);delete pt[E.__cacheKey],h.memory.textures--}function ht(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(E.__webglFramebuffer[pt]))for(let xt=0;xt<E.__webglFramebuffer[pt].length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[pt][xt]);else o.deleteFramebuffer(E.__webglFramebuffer[pt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[pt])}else{if(Array.isArray(E.__webglFramebuffer))for(let pt=0;pt<E.__webglFramebuffer.length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[pt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pt=0;pt<E.__webglColorRenderbuffer.length;pt++)E.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[pt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=L.textures;for(let pt=0,xt=Y.length;pt<xt;pt++){const ut=s.get(Y[pt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove(Y[pt])}s.remove(L)}let H=0;function $(){H=0}function at(){const L=H;return L>=l.maxTextures&&ee("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function lt(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function tt(L,E){const Y=s.get(L);if(L.isVideoTexture&&ye(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){const pt=L.image;if(pt===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(Y,L,E);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+E)}function O(L,E){const Y=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){nt(Y,L,E);return}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+E)}function I(L,E){const Y=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){nt(Y,L,E);return}i.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+E)}function ot(L,E){const Y=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&Y.__version!==L.version){vt(Y,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+E)}const dt={[ud]:o.REPEAT,[va]:o.CLAMP_TO_EDGE,[fd]:o.MIRRORED_REPEAT},Et={[bn]:o.NEAREST,[bM]:o.NEAREST_MIPMAP_NEAREST,[pc]:o.NEAREST_MIPMAP_LINEAR,[Cn]:o.LINEAR,[Sh]:o.LINEAR_MIPMAP_NEAREST,[Os]:o.LINEAR_MIPMAP_LINEAR},P={[CM]:o.NEVER,[NM]:o.ALWAYS,[DM]:o.LESS,[np]:o.LEQUAL,[wM]:o.EQUAL,[ip]:o.GEQUAL,[UM]:o.GREATER,[LM]:o.NOTEQUAL};function q(L,E){if(E.type===Bi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Cn||E.magFilter===Sh||E.magFilter===pc||E.magFilter===Os||E.minFilter===Cn||E.minFilter===Sh||E.minFilter===pc||E.minFilter===Os)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,dt[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,dt[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,dt[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,Et[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,Et[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===bn||E.minFilter!==pc&&E.minFilter!==Os||E.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function _t(L,E){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",B));const pt=E.source;let xt=g.get(pt);xt===void 0&&(xt={},g.set(pt,xt));const ut=lt(E);if(ut!==L.__cacheKey){xt[ut]===void 0&&(xt[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,Y=!0),xt[ut].usedTimes++;const Xt=xt[L.__cacheKey];Xt!==void 0&&(xt[L.__cacheKey].usedTimes--,Xt.usedTimes===0&&w(E)),L.__cacheKey=ut,L.__webglTexture=xt[ut].texture}return Y}function At(L,E,Y){return Math.floor(Math.floor(L/Y)/E)}function It(L,E,Y,pt){const ut=L.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Y,pt,E.data);else{ut.sort((yt,St)=>yt.start-St.start);let Xt=0;for(let yt=1;yt<ut.length;yt++){const St=ut[Xt],Nt=ut[yt],Lt=St.start+St.count,Ot=At(Nt.start,E.width,4),ce=At(St.start,E.width,4);Nt.start<=Lt+1&&Ot===ce&&At(Nt.start+Nt.count-1,E.width,4)===Ot?St.count=Math.max(St.count,Nt.start+Nt.count-St.start):(++Xt,ut[Xt]=Nt)}ut.length=Xt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),jt=o.getParameter(o.UNPACK_SKIP_PIXELS),$t=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let yt=0,St=ut.length;yt<St;yt++){const Nt=ut[yt],Lt=Math.floor(Nt.start/4),Ot=Math.ceil(Nt.count/4),ce=Lt%E.width,W=Math.floor(Lt/E.width),Rt=Ot,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,ce,W,Rt,Tt,Y,pt,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,$t)}}function nt(L,E,Y){let pt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=o.TEXTURE_3D);const xt=_t(L,E),ut=E.source;i.bindTexture(pt,L.__webglTexture,o.TEXTURE0+Y);const Xt=s.get(ut);if(ut.version!==Xt.__version||xt===!0){i.activeTexture(o.TEXTURE0+Y);const Ct=Te.getPrimaries(Te.workingColorSpace),jt=E.colorSpace===is?null:Te.getPrimaries(E.colorSpace),$t=E.colorSpace===is||Ct===jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let yt=C(E.image,!1,l.maxTextureSize);yt=Ue(E,yt);const St=c.convert(E.format,E.colorSpace),Nt=c.convert(E.type);let Lt=N(E.internalFormat,St,Nt,E.colorSpace,E.isVideoTexture);q(pt,E);let Ot;const ce=E.mipmaps,W=E.isVideoTexture!==!0,Rt=Xt.__version===void 0||xt===!0,Tt=ut.dataReady,Pt=G(E,yt);if(E.isDepthTexture)Lt=U(E.format===Ps,E.type),Rt&&(W?i.texStorage2D(o.TEXTURE_2D,1,Lt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Lt,yt.width,yt.height,0,St,Nt,null));else if(E.isDataTexture)if(ce.length>0){W&&Rt&&i.texStorage2D(o.TEXTURE_2D,Pt,Lt,ce[0].width,ce[0].height);for(let Mt=0,ct=ce.length;Mt<ct;Mt++)Ot=ce[Mt],W?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Nt,Ot.data):i.texImage2D(o.TEXTURE_2D,Mt,Lt,Ot.width,Ot.height,0,St,Nt,Ot.data);E.generateMipmaps=!1}else W?(Rt&&i.texStorage2D(o.TEXTURE_2D,Pt,Lt,yt.width,yt.height),Tt&&It(E,yt,St,Nt)):i.texImage2D(o.TEXTURE_2D,0,Lt,yt.width,yt.height,0,St,Nt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Lt,ce[0].width,ce[0].height,yt.depth);for(let Mt=0,ct=ce.length;Mt<ct;Mt++)if(Ot=ce[Mt],E.format!==Di)if(St!==null)if(W){if(Tt)if(E.layerUpdates.size>0){const zt=C0(Ot.width,Ot.height,E.format,E.type);for(const ne of E.layerUpdates){const Ne=Ot.data.subarray(ne*zt/Ot.data.BYTES_PER_ELEMENT,(ne+1)*zt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ne,Ot.width,Ot.height,1,St,Ne)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,yt.depth,St,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Lt,Ot.width,Ot.height,yt.depth,0,Ot.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,yt.depth,St,Nt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Lt,Ot.width,Ot.height,yt.depth,0,St,Nt,Ot.data)}else{W&&Rt&&i.texStorage2D(o.TEXTURE_2D,Pt,Lt,ce[0].width,ce[0].height);for(let Mt=0,ct=ce.length;Mt<ct;Mt++)Ot=ce[Mt],E.format!==Di?St!==null?W?Tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Lt,Ot.width,Ot.height,0,Ot.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Nt,Ot.data):i.texImage2D(o.TEXTURE_2D,Mt,Lt,Ot.width,Ot.height,0,St,Nt,Ot.data)}else if(E.isDataArrayTexture)if(W){if(Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Lt,yt.width,yt.height,yt.depth),Tt)if(E.layerUpdates.size>0){const Mt=C0(yt.width,yt.height,E.format,E.type);for(const ct of E.layerUpdates){const zt=yt.data.subarray(ct*Mt/yt.data.BYTES_PER_ELEMENT,(ct+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ct,yt.width,yt.height,1,St,Nt,zt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,St,Nt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Lt,yt.width,yt.height,yt.depth,0,St,Nt,yt.data);else if(E.isData3DTexture)W?(Rt&&i.texStorage3D(o.TEXTURE_3D,Pt,Lt,yt.width,yt.height,yt.depth),Tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,St,Nt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Lt,yt.width,yt.height,yt.depth,0,St,Nt,yt.data);else if(E.isFramebufferTexture){if(Rt)if(W)i.texStorage2D(o.TEXTURE_2D,Pt,Lt,yt.width,yt.height);else{let Mt=yt.width,ct=yt.height;for(let zt=0;zt<Pt;zt++)i.texImage2D(o.TEXTURE_2D,zt,Lt,Mt,ct,0,St,Nt,null),Mt>>=1,ct>>=1}}else if(ce.length>0){if(W&&Rt){const Mt=Wt(ce[0]);i.texStorage2D(o.TEXTURE_2D,Pt,Lt,Mt.width,Mt.height)}for(let Mt=0,ct=ce.length;Mt<ct;Mt++)Ot=ce[Mt],W?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,St,Nt,Ot):i.texImage2D(o.TEXTURE_2D,Mt,Lt,St,Nt,Ot);E.generateMipmaps=!1}else if(W){if(Rt){const Mt=Wt(yt);i.texStorage2D(o.TEXTURE_2D,Pt,Lt,Mt.width,Mt.height)}Tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,St,Nt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Lt,St,Nt,yt);y(E)&&S(pt),Xt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function vt(L,E,Y){if(E.image.length!==6)return;const pt=_t(L,E),xt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+Y);const ut=s.get(xt);if(xt.version!==ut.__version||pt===!0){i.activeTexture(o.TEXTURE0+Y);const Xt=Te.getPrimaries(Te.workingColorSpace),Ct=E.colorSpace===is?null:Te.getPrimaries(E.colorSpace),jt=E.colorSpace===is||Xt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const $t=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,St=[];for(let ct=0;ct<6;ct++)!$t&&!yt?St[ct]=C(E.image[ct],!0,l.maxCubemapSize):St[ct]=yt?E.image[ct].image:E.image[ct],St[ct]=Ue(E,St[ct]);const Nt=St[0],Lt=c.convert(E.format,E.colorSpace),Ot=c.convert(E.type),ce=N(E.internalFormat,Lt,Ot,E.colorSpace),W=E.isVideoTexture!==!0,Rt=ut.__version===void 0||pt===!0,Tt=xt.dataReady;let Pt=G(E,Nt);q(o.TEXTURE_CUBE_MAP,E);let Mt;if($t){W&&Rt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,ce,Nt.width,Nt.height);for(let ct=0;ct<6;ct++){Mt=St[ct].mipmaps;for(let zt=0;zt<Mt.length;zt++){const ne=Mt[zt];E.format!==Di?Lt!==null?W?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,0,0,ne.width,ne.height,Lt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,ce,ne.width,ne.height,0,ne.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,0,0,ne.width,ne.height,Lt,Ot,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,ce,ne.width,ne.height,0,Lt,Ot,ne.data)}}}else{if(Mt=E.mipmaps,W&&Rt){Mt.length>0&&Pt++;const ct=Wt(St[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,ce,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(yt){W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,St[ct].width,St[ct].height,Lt,Ot,St[ct].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ce,St[ct].width,St[ct].height,0,Lt,Ot,St[ct].data);for(let zt=0;zt<Mt.length;zt++){const Ne=Mt[zt].image[ct].image;W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,0,0,Ne.width,Ne.height,Lt,Ot,Ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,ce,Ne.width,Ne.height,0,Lt,Ot,Ne.data)}}else{W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Lt,Ot,St[ct]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ce,Lt,Ot,St[ct]);for(let zt=0;zt<Mt.length;zt++){const ne=Mt[zt];W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,0,0,Lt,Ot,ne.image[ct]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,ce,Lt,Ot,ne.image[ct])}}}y(E)&&S(o.TEXTURE_CUBE_MAP),ut.__version=xt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function bt(L,E,Y,pt,xt,ut){const Xt=c.convert(Y.format,Y.colorSpace),Ct=c.convert(Y.type),jt=N(Y.internalFormat,Xt,Ct,Y.colorSpace),$t=s.get(E),yt=s.get(Y);if(yt.__renderTarget=E,!$t.__hasExternalTextures){const St=Math.max(1,E.width>>ut),Nt=Math.max(1,E.height>>ut);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,ut,jt,St,Nt,E.depth,0,Xt,Ct,null):i.texImage2D(xt,ut,jt,St,Nt,0,Xt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),We(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,xt,yt.__webglTexture,0,V(E)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,xt,yt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(L,E,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const pt=E.depthTexture,xt=pt&&pt.isDepthTexture?pt.type:null,ut=U(E.stencilBuffer,xt),Xt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;We(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),ut,E.width,E.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,L)}else{const pt=E.textures;for(let xt=0;xt<pt.length;xt++){const ut=pt[xt],Xt=c.convert(ut.format,ut.colorSpace),Ct=c.convert(ut.type),jt=N(ut.internalFormat,Xt,Ct,ut.colorSpace);We(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),jt,E.width,E.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),jt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,jt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Zt(L,E,Y){const pt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(E.depthTexture);if(xt.__renderTarget=E,(!xt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),xt.__webglTexture===void 0){xt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),q(o.TEXTURE_CUBE_MAP,E.depthTexture);const $t=c.convert(E.depthTexture.format),yt=c.convert(E.depthTexture.type);let St;E.depthTexture.format===Ea?St=o.DEPTH_COMPONENT24:E.depthTexture.format===Ps&&(St=o.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,St,E.width,E.height,0,$t,yt,null)}}else tt(E.depthTexture,0);const ut=xt.__webglTexture,Xt=V(E),Ct=pt?o.TEXTURE_CUBE_MAP_POSITIVE_X+Y:o.TEXTURE_2D,jt=E.depthTexture.format===Ps?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ea)We(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,jt,Ct,ut,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,jt,Ct,ut,0);else if(E.depthTexture.format===Ps)We(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,jt,Ct,ut,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,jt,Ct,ut,0);else throw new Error("Unknown depthTexture format")}function Jt(L){const E=s.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const pt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pt){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pt.removeEventListener("dispose",xt)};pt.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=pt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let pt=0;pt<6;pt++)Zt(E.__webglFramebuffer[pt],L,pt);else{const pt=L.texture.mipmaps;pt&&pt.length>0?Zt(E.__webglFramebuffer[0],L,0):Zt(E.__webglFramebuffer,L,0)}else if(Y){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]===void 0)E.__webglDepthbuffer[pt]=o.createRenderbuffer(),Vt(E.__webglDepthbuffer[pt],L,!1);else{const xt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}else{const pt=L.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Vt(E.__webglDepthbuffer,L,!1);else{const xt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Qe(L,E,Y){const pt=s.get(L);E!==void 0&&bt(pt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&Jt(L)}function ve(L){const E=L.texture,Y=s.get(L),pt=s.get(E);L.addEventListener("dispose",F);const xt=L.textures,ut=L.isWebGLCubeRenderTarget===!0,Xt=xt.length>1;if(Xt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=E.version,h.memory.textures++),ut){Y.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Ct]=[];for(let jt=0;jt<E.mipmaps.length;jt++)Y.__webglFramebuffer[Ct][jt]=o.createFramebuffer()}else Y.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)Y.__webglFramebuffer[Ct]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Ct=0,jt=xt.length;Ct<jt;Ct++){const $t=s.get(xt[Ct]);$t.__webglTexture===void 0&&($t.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&We(L)===!1){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const jt=xt[Ct];Y.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[Ct]);const $t=c.convert(jt.format,jt.colorSpace),yt=c.convert(jt.type),St=N(jt.internalFormat,$t,yt,jt.colorSpace,L.isXRRenderTarget===!0),Nt=V(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,St,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,Y.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),Vt(Y.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),q(o.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let jt=0;jt<E.mipmaps.length;jt++)bt(Y.__webglFramebuffer[Ct][jt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,jt);else bt(Y.__webglFramebuffer[Ct],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(E)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let Ct=0,jt=xt.length;Ct<jt;Ct++){const $t=xt[Ct],yt=s.get($t);let St=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(St=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(St,yt.__webglTexture),q(St,$t),bt(Y.__webglFramebuffer,L,$t,o.COLOR_ATTACHMENT0+Ct,St,0),y($t)&&S(St)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,pt.__webglTexture),q(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let jt=0;jt<E.mipmaps.length;jt++)bt(Y.__webglFramebuffer[jt],L,E,o.COLOR_ATTACHMENT0,Ct,jt);else bt(Y.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Ct,0);y(E)&&S(Ct),i.unbindTexture()}L.depthBuffer&&Jt(L)}function me(L){const E=L.textures;for(let Y=0,pt=E.length;Y<pt;Y++){const xt=E[Y];if(y(xt)){const ut=D(L),Xt=s.get(xt).__webglTexture;i.bindTexture(ut,Xt),S(ut),i.unbindTexture()}}}const De=[],re=[];function Ze(L){if(L.samples>0){if(We(L)===!1){const E=L.textures,Y=L.width,pt=L.height;let xt=o.COLOR_BUFFER_BIT;const ut=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=s.get(L),Ct=E.length>1;if(Ct)for(let $t=0;$t<E.length;$t++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const jt=L.texture.mipmaps;jt&&jt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let $t=0;$t<E.length;$t++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[$t]);const yt=s.get(E[$t]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,Y,pt,0,0,Y,pt,xt,o.NEAREST),m===!0&&(De.length=0,re.length=0,De.push(o.COLOR_ATTACHMENT0+$t),L.depthBuffer&&L.resolveDepthBuffer===!1&&(De.push(ut),re.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,re)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,De))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let $t=0;$t<E.length;$t++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[$t]);const yt=s.get(E[$t]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function V(L){return Math.min(l.maxSamples,L.samples)}function We(L){const E=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ye(L){const E=h.render.frame;v.get(L)!==E&&(v.set(L,E),L.update())}function Ue(L,E){const Y=L.colorSpace,pt=L.format,xt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==Gr&&Y!==is&&(Te.getTransfer(Y)===Ie?(pt!==Di||xt!==gi)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",Y)),E}function Wt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=at,this.resetTextureUnits=$,this.setTexture2D=tt,this.setTexture2DArray=O,this.setTexture3D=I,this.setTextureCube=ot,this.rebindTextures=Qe,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function u1(o,t){function i(s,l=is){let c;const h=Te.getTransfer(l);if(s===gi)return o.UNSIGNED_BYTE;if(s===Qd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Jd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===pv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===mv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===hv)return o.BYTE;if(s===dv)return o.SHORT;if(s===qo)return o.UNSIGNED_SHORT;if(s===Kd)return o.INT;if(s===ki)return o.UNSIGNED_INT;if(s===Bi)return o.FLOAT;if(s===ya)return o.HALF_FLOAT;if(s===gv)return o.ALPHA;if(s===_v)return o.RGB;if(s===Di)return o.RGBA;if(s===Ea)return o.DEPTH_COMPONENT;if(s===Ps)return o.DEPTH_STENCIL;if(s===vv)return o.RED;if(s===$d)return o.RED_INTEGER;if(s===Hr)return o.RG;if(s===tp)return o.RG_INTEGER;if(s===ep)return o.RGBA_INTEGER;if(s===Vc||s===Xc||s===kc||s===Wc)if(h===Ie)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hd||s===dd||s===pd||s===md)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===hd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===pd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===md)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===gd||s===_d||s===vd||s===xd||s===Sd||s===Md||s===yd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===gd||s===_d)return h===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===vd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===xd)return c.COMPRESSED_R11_EAC;if(s===Sd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Md)return c.COMPRESSED_RG11_EAC;if(s===yd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===Dd||s===wd||s===Ud||s===Ld||s===Nd||s===Od||s===Pd||s===Id)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ed)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===bd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Td)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ad)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Cd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Dd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ud)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ld)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Od)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Id)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fd||s===zd||s===Bd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Fd)return h===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Bd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Hd||s===Gd||s===Vd||s===Xd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Hd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Gd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const f1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class d1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Rv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Wi({vertexShader:f1,fragmentShader:h1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wi(new au(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p1 extends Fs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,v=null,x=null,g=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",y=new d1,S={},D=i.getContextAttributes();let N=null,U=null;const G=[],B=[],F=new oe;let T=null;const w=new mi;w.viewport=new nn;const ht=new mi;ht.viewport=new nn;const H=[w,ht],$=new Ty;let at=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let vt=G[nt];return vt===void 0&&(vt=new Rh,G[nt]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(nt){let vt=G[nt];return vt===void 0&&(vt=new Rh,G[nt]=vt),vt.getGripSpace()},this.getHand=function(nt){let vt=G[nt];return vt===void 0&&(vt=new Rh,G[nt]=vt),vt.getHandSpace()};function tt(nt){const vt=B.indexOf(nt.inputSource);if(vt===-1)return;const bt=G[vt];bt!==void 0&&(bt.update(nt.inputSource,nt.frame,d||h),bt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function O(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",I);for(let nt=0;nt<G.length;nt++){const vt=B[nt];vt!==null&&(B[nt]=null,G[nt].disconnect(vt))}at=null,lt=null,y.reset();for(const nt in S)delete S[nt];t.setRenderTarget(N),M=null,g=null,x=null,l=null,U=null,It.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){p=nt,s.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(nt){d=nt},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",O),l.addEventListener("inputsourceschange",I),D.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Vt=null,Zt=null;D.depth&&(Zt=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=D.stencil?Ps:Ea,Vt=D.stencil?jo:ki);const Jt={colorFormat:i.RGBA8,depthFormat:Zt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(Jt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),U=new Vi(g.textureWidth,g.textureHeight,{format:Di,type:gi,depthTexture:new Ko(g.textureWidth,g.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const bt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Vi(M.framebufferWidth,M.framebufferHeight,{format:Di,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),It.setContext(l),It.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function I(nt){for(let vt=0;vt<nt.removed.length;vt++){const bt=nt.removed[vt],Vt=B.indexOf(bt);Vt>=0&&(B[Vt]=null,G[Vt].disconnect(bt))}for(let vt=0;vt<nt.added.length;vt++){const bt=nt.added[vt];let Vt=B.indexOf(bt);if(Vt===-1){for(let Jt=0;Jt<G.length;Jt++)if(Jt>=B.length){B.push(bt),Vt=Jt;break}else if(B[Jt]===null){B[Jt]=bt,Vt=Jt;break}if(Vt===-1)break}const Zt=G[Vt];Zt&&Zt.connect(bt)}}const ot=new Z,dt=new Z;function Et(nt,vt,bt){ot.setFromMatrixPosition(vt.matrixWorld),dt.setFromMatrixPosition(bt.matrixWorld);const Vt=ot.distanceTo(dt),Zt=vt.projectionMatrix.elements,Jt=bt.projectionMatrix.elements,Qe=Zt[14]/(Zt[10]-1),ve=Zt[14]/(Zt[10]+1),me=(Zt[9]+1)/Zt[5],De=(Zt[9]-1)/Zt[5],re=(Zt[8]-1)/Zt[0],Ze=(Jt[8]+1)/Jt[0],V=Qe*re,We=Qe*Ze,ye=Vt/(-re+Ze),Ue=ye*-re;if(vt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Ue),nt.translateZ(ye),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Zt[10]===-1)nt.projectionMatrix.copy(vt.projectionMatrix),nt.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Wt=Qe+ye,L=ve+ye,E=V-Ue,Y=We+(Vt-Ue),pt=me*ve/L*Wt,xt=De*ve/L*Wt;nt.projectionMatrix.makePerspective(E,Y,pt,xt,Wt,L),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function P(nt,vt){vt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(vt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let vt=nt.near,bt=nt.far;y.texture!==null&&(y.depthNear>0&&(vt=y.depthNear),y.depthFar>0&&(bt=y.depthFar)),$.near=ht.near=w.near=vt,$.far=ht.far=w.far=bt,(at!==$.near||lt!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),at=$.near,lt=$.far),$.layers.mask=nt.layers.mask|6,w.layers.mask=$.layers.mask&-5,ht.layers.mask=$.layers.mask&-3;const Vt=nt.parent,Zt=$.cameras;P($,Vt);for(let Jt=0;Jt<Zt.length;Jt++)P(Zt[Jt],Vt);Zt.length===2?Et($,w,ht):$.projectionMatrix.copy(w.projectionMatrix),q(nt,$,Vt)};function q(nt,vt,bt){bt===null?nt.matrix.copy(vt.matrixWorld):(nt.matrix.copy(bt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(vt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(vt.projectionMatrix),nt.projectionMatrixInverse.copy(vt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=kd*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(nt){m=nt,g!==null&&(g.fixedFoveation=nt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=nt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh($)},this.getCameraTexture=function(nt){return S[nt]};let _t=null;function At(nt,vt){if(v=vt.getViewerPose(d||h),b=vt,v!==null){const bt=v.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let Vt=!1;bt.length!==$.cameras.length&&($.cameras.length=0,Vt=!0);for(let ve=0;ve<bt.length;ve++){const me=bt[ve];let De=null;if(M!==null)De=M.getViewport(me);else{const Ze=x.getViewSubImage(g,me);De=Ze.viewport,ve===0&&(t.setRenderTargetTextures(U,Ze.colorTexture,Ze.depthStencilTexture),t.setRenderTarget(U))}let re=H[ve];re===void 0&&(re=new mi,re.layers.enable(ve),re.viewport=new nn,H[ve]=re),re.matrix.fromArray(me.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(me.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(De.x,De.y,De.width,De.height),ve===0&&($.matrix.copy(re.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Vt===!0&&$.cameras.push(re)}const Zt=l.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=s.getBinding();const ve=x.getDepthInformation(bt[0]);ve&&ve.isValid&&ve.texture&&y.init(ve,l.renderState)}if(Zt&&Zt.includes("camera-access")&&C){t.state.unbindTexture(),x=s.getBinding();for(let ve=0;ve<bt.length;ve++){const me=bt[ve].camera;if(me){let De=S[me];De||(De=new Rv,S[me]=De);const re=x.getCameraImage(me);De.sourceTexture=re}}}}for(let bt=0;bt<G.length;bt++){const Vt=B[bt],Zt=G[bt];Vt!==null&&Zt!==void 0&&Zt.update(Vt,vt,d||h)}_t&&_t(nt,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),b=null}const It=new Lv;It.setAnimationLoop(At),this.setAnimationLoop=function(nt){_t=nt},this.dispose=function(){}}}const Us=new ba,m1=new Ke;function g1(o,t){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,Cv(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,D,N,U){S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),x(y,S)):S.isMeshPhongMaterial?(c(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),g(y,S),S.isMeshPhysicalMaterial&&M(y,S,U)):S.isMeshMatcapMaterial?(c(y,S),b(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),C(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(h(y,S),S.isLineDashedMaterial&&p(y,S)):S.isPointsMaterial?m(y,S,D,N):S.isSpriteMaterial?d(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Wn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Wn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const D=t.get(S),N=D.envMap,U=D.envMapRotation;N&&(y.envMap.value=N,Us.copy(U),Us.x*=-1,Us.y*=-1,Us.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),y.envMapRotation.value.setFromMatrix4(m1.makeRotationFromEuler(Us)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function p(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,D,N){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*D,y.scale.value=N*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,D){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Wn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const D=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function _1(o,t,i,s){let l={},c={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,N){const U=N.program;s.uniformBlockBinding(D,U)}function d(D,N){let U=l[D.id];U===void 0&&(b(D),U=v(D),l[D.id]=U,D.addEventListener("dispose",y));const G=N.program;s.updateUBOMapping(D,G);const B=t.render.frame;c[D.id]!==B&&(g(D),c[D.id]=B)}function v(D){const N=x();D.__bindingPointIndex=N;const U=o.createBuffer(),G=D.__size,B=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,G,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,U),U}function x(){for(let D=0;D<p;D++)if(h.indexOf(D)===-1)return h.push(D),D;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const N=l[D.id],U=D.uniforms,G=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let B=0,F=U.length;B<F;B++){const T=Array.isArray(U[B])?U[B]:[U[B]];for(let w=0,ht=T.length;w<ht;w++){const H=T[w];if(M(H,B,w,G)===!0){const $=H.__offset,at=Array.isArray(H.value)?H.value:[H.value];let lt=0;for(let tt=0;tt<at.length;tt++){const O=at[tt],I=C(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,$+lt,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,lt),lt+=I.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,$,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(D,N,U,G){const B=D.value,F=N+"_"+U;if(G[F]===void 0)return typeof B=="number"||typeof B=="boolean"?G[F]=B:G[F]=B.clone(),!0;{const T=G[F];if(typeof B=="number"||typeof B=="boolean"){if(T!==B)return G[F]=B,!0}else if(T.equals(B)===!1)return T.copy(B),!0}return!1}function b(D){const N=D.uniforms;let U=0;const G=16;for(let F=0,T=N.length;F<T;F++){const w=Array.isArray(N[F])?N[F]:[N[F]];for(let ht=0,H=w.length;ht<H;ht++){const $=w[ht],at=Array.isArray($.value)?$.value:[$.value];for(let lt=0,tt=at.length;lt<tt;lt++){const O=at[lt],I=C(O),ot=U%G,dt=ot%I.boundary,Et=ot+dt;U+=dt,Et!==0&&G-Et<I.storage&&(U+=G-Et),$.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=U,U+=I.storage}}}const B=U%G;return B>0&&(U+=G-B),D.__size=U,D.__cache={},this}function C(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ee("WebGLRenderer: Unsupported uniform value type.",D),N}function y(D){const N=D.target;N.removeEventListener("dispose",y);const U=h.indexOf(N.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function S(){for(const D in l)o.deleteBuffer(l[D]);h=[],l={},c={}}return{bind:m,update:d,dispose:S}}const v1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function x1(){return Fi===null&&(Fi=new sy(v1,16,16,Hr,ya),Fi.name="DFG_LUT",Fi.minFilter=Cn,Fi.magFilter=Cn,Fi.wrapS=va,Fi.wrapT=va,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class S1{constructor(t={}){const{canvas:i=PM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=gi}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const C=M,y=new Set([ep,tp,$d]),S=new Set([gi,ki,qo,jo,Qd,Jd]),D=new Uint32Array(4),N=new Int32Array(4);let U=null,G=null;const B=[],F=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let ht=!1;this._outputColorSpace=pi;let H=0,$=0,at=null,lt=-1,tt=null;const O=new nn,I=new nn;let ot=null;const dt=new Fe(0);let Et=0,P=i.width,q=i.height,_t=1,At=null,It=null;const nt=new nn(0,0,P,q),vt=new nn(0,0,P,q);let bt=!1;const Vt=new bv;let Zt=!1,Jt=!1;const Qe=new Ke,ve=new Z,me=new nn,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Ze(){return at===null?_t:1}let V=s;function We(R,k){return i.getContext(R,k)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Zd}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",ne,!1),i.addEventListener("webglcontextcreationerror",Ne,!1),V===null){const k="webgl2";if(V=We(k,R),V===null)throw We(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw be("WebGLRenderer: "+R.message),R}let ye,Ue,Wt,L,E,Y,pt,xt,ut,Xt,Ct,jt,$t,yt,St,Nt,Lt,Ot,ce,W,Rt,Tt,Pt;function Mt(){ye=new ST(V),ye.init(),Rt=new u1(V,ye),Ue=new hT(V,ye,t,Rt),Wt=new l1(V,ye),Ue.reversedDepthBuffer&&g&&Wt.buffers.depth.setReversed(!0),L=new ET(V),E=new jA,Y=new c1(V,ye,Wt,E,Ue,Rt,L),pt=new xT(w),xt=new Cy(V),Tt=new uT(V,xt),ut=new MT(V,xt,L,Tt),Xt=new TT(V,ut,xt,Tt,L),Ot=new bT(V,Ue,Y),St=new dT(E),Ct=new qA(w,pt,ye,Ue,Tt,St),jt=new g1(w,E),$t=new KA,yt=new n1(ye),Lt=new cT(w,pt,Wt,Xt,b,m),Nt=new o1(w,Xt,Ue),Pt=new _1(V,L,Ue,Wt),ce=new fT(V,ye,L),W=new yT(V,ye,L),L.programs=Ct.programs,w.capabilities=Ue,w.extensions=ye,w.properties=E,w.renderLists=$t,w.shadowMap=Nt,w.state=Wt,w.info=L}Mt(),C!==gi&&(T=new RT(C,i.width,i.height,l,c));const ct=new p1(w,V);this.xr=ct,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=ye.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ye.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(R){R!==void 0&&(_t=R,this.setSize(P,q,!1))},this.getSize=function(R){return R.set(P,q)},this.setSize=function(R,k,st=!0){if(ct.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,q=k,i.width=Math.floor(R*_t),i.height=Math.floor(k*_t),st===!0&&(i.style.width=R+"px",i.style.height=k+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(P*_t,q*_t).floor()},this.setDrawingBufferSize=function(R,k,st){P=R,q=k,_t=st,i.width=Math.floor(R*st),i.height=Math.floor(k*st),this.setViewport(0,0,R,k)},this.setEffects=function(R){if(C===gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let k=0;k<R.length;k++)if(R[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,k,st,et){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,k,st,et),Wt.viewport(O.copy(nt).multiplyScalar(_t).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,k,st,et){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,k,st,et),Wt.scissor(I.copy(vt).multiplyScalar(_t).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(R){Wt.setScissorTest(bt=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){It=R},this.getClearColor=function(R){return R.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,st=!0){let et=0;if(R){let K=!1;if(at!==null){const Dt=at.texture.format;K=y.has(Dt)}if(K){const Dt=at.texture.type,Ft=S.has(Dt),wt=Lt.getClearColor(),kt=Lt.getClearAlpha(),qt=wt.r,te=wt.g,ae=wt.b;Ft?(D[0]=qt,D[1]=te,D[2]=ae,D[3]=kt,V.clearBufferuiv(V.COLOR,0,D)):(N[0]=qt,N[1]=te,N[2]=ae,N[3]=kt,V.clearBufferiv(V.COLOR,0,N))}else et|=V.COLOR_BUFFER_BIT}k&&(et|=V.DEPTH_BUFFER_BIT),st&&(et|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&V.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",ne,!1),i.removeEventListener("webglcontextcreationerror",Ne,!1),Lt.dispose(),$t.dispose(),yt.dispose(),E.dispose(),pt.dispose(),Xt.dispose(),Tt.dispose(),Pt.dispose(),Ct.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Bs),ct.removeEventListener("sessionend",Hs),Ui.stop()};function zt(R){R.preventDefault(),s0("WebGLRenderer: Context Lost."),ht=!0}function ne(){s0("WebGLRenderer: Context Restored."),ht=!1;const R=L.autoReset,k=Nt.enabled,st=Nt.autoUpdate,et=Nt.needsUpdate,K=Nt.type;Mt(),L.autoReset=R,Nt.enabled=k,Nt.autoUpdate=st,Nt.needsUpdate=et,Nt.type=K}function Ne(R){be("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ee(R){const k=R.target;k.removeEventListener("dispose",Ee),wn(k)}function wn(R){vi(R),E.remove(R)}function vi(R){const k=E.get(R).programs;k!==void 0&&(k.forEach(function(st){Ct.releaseProgram(st)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,st,et,K,Dt){k===null&&(k=De);const Ft=K.isMesh&&K.matrixWorld.determinant()<0,wt=al(R,k,st,et,K);Wt.setMaterial(et,Ft);let kt=st.index,qt=1;if(et.wireframe===!0){if(kt=ut.getWireframeAttribute(st),kt===void 0)return;qt=2}const te=st.drawRange,ae=st.attributes.position;let Bt=te.start*qt,ue=(te.start+te.count)*qt;Dt!==null&&(Bt=Math.max(Bt,Dt.start*qt),ue=Math.min(ue,(Dt.start+Dt.count)*qt)),kt!==null?(Bt=Math.max(Bt,0),ue=Math.min(ue,kt.count)):ae!=null&&(Bt=Math.max(Bt,0),ue=Math.min(ue,ae.count));const Ye=ue-Bt;if(Ye<0||Ye===1/0)return;Tt.setup(K,et,wt,st,kt);let qe,Ae=ce;if(kt!==null&&(qe=xt.get(kt),Ae=W,Ae.setIndex(qe)),K.isMesh)et.wireframe===!0?(Wt.setLineWidth(et.wireframeLinewidth*Ze()),Ae.setMode(V.LINES)):Ae.setMode(V.TRIANGLES);else if(K.isLine){let dn=et.linewidth;dn===void 0&&(dn=1),Wt.setLineWidth(dn*Ze()),K.isLineSegments?Ae.setMode(V.LINES):K.isLineLoop?Ae.setMode(V.LINE_LOOP):Ae.setMode(V.LINE_STRIP)}else K.isPoints?Ae.setMode(V.POINTS):K.isSprite&&Ae.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Qc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Ae.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const dn=K._multiDrawStarts,Gt=K._multiDrawCounts,Un=K._multiDrawCount,ie=kt?xt.get(kt).bytesPerElement:1,Ln=E.get(et).currentProgram.getUniforms();for(let qn=0;qn<Un;qn++)Ln.setValue(V,"_gl_DrawID",qn),Ae.render(dn[qn]/ie,Gt[qn])}else if(K.isInstancedMesh)Ae.renderInstances(Bt,Ye,K.count);else if(st.isInstancedBufferGeometry){const dn=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Gt=Math.min(st.instanceCount,dn);Ae.renderInstances(Bt,Ye,Gt)}else Ae.render(Bt,Ye)};function kr(R,k,st){R.transparent===!0&&R.side===_a&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,Ta(R,k,st),R.side=rs,R.needsUpdate=!0,Ta(R,k,st),R.side=_a):Ta(R,k,st)}this.compile=function(R,k,st=null){st===null&&(st=R),G=yt.get(st),G.init(k),F.push(G),st.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(G.pushLight(K),K.castShadow&&G.pushShadow(K))}),R!==st&&R.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(G.pushLight(K),K.castShadow&&G.pushShadow(K))}),G.setupLights();const et=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Dt=K.material;if(Dt)if(Array.isArray(Dt))for(let Ft=0;Ft<Dt.length;Ft++){const wt=Dt[Ft];kr(wt,st,K),et.add(wt)}else kr(Dt,st,K),et.add(Dt)}),G=F.pop(),et},this.compileAsync=function(R,k,st=null){const et=this.compile(R,k,st);return new Promise(K=>{function Dt(){if(et.forEach(function(Ft){E.get(Ft).currentProgram.isReady()&&et.delete(Ft)}),et.size===0){K(R);return}setTimeout(Dt,10)}ye.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let zs=null;function el(R){zs&&zs(R)}function Bs(){Ui.stop()}function Hs(){Ui.start()}const Ui=new Lv;Ui.setAnimationLoop(el),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(R){zs=R,ct.setAnimationLoop(R),R===null?Ui.stop():Ui.start()},ct.addEventListener("sessionstart",Bs),ct.addEventListener("sessionend",Hs),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ht===!0)return;const st=ct.enabled===!0&&ct.isPresenting===!0,et=T!==null&&(at===null||st)&&T.begin(w,at);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(k),k=ct.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,k,at),G=yt.get(R,F.length),G.init(k),F.push(G),Qe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Vt.setFromProjectionMatrix(Qe,Hi,k.reversedDepth),Jt=this.localClippingEnabled,Zt=St.init(this.clippingPlanes,Jt),U=$t.get(R,B.length),U.init(),B.push(U),ct.enabled===!0&&ct.isPresenting===!0){const Ft=w.xr.getDepthSensingMesh();Ft!==null&&Gs(Ft,k,-1/0,w.sortObjects)}Gs(R,k,0,w.sortObjects),U.finish(),w.sortObjects===!0&&U.sort(At,It),re=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,re&&Lt.addToRenderList(U,R),this.info.render.frame++,Zt===!0&&St.beginShadows();const K=G.state.shadowsArray;if(Nt.render(K,R,k),Zt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&T.hasRenderPass())===!1){const Ft=U.opaque,wt=U.transmissive;if(G.setupLights(),k.isArrayCamera){const kt=k.cameras;if(wt.length>0)for(let qt=0,te=kt.length;qt<te;qt++){const ae=kt[qt];an(Ft,wt,R,ae)}re&&Lt.render(R);for(let qt=0,te=kt.length;qt<te;qt++){const ae=kt[qt];xi(U,R,ae,ae.viewport)}}else wt.length>0&&an(Ft,wt,R,k),re&&Lt.render(R),xi(U,R,k)}at!==null&&$===0&&(Y.updateMultisampleRenderTarget(at),Y.updateRenderTargetMipmap(at)),et&&T.end(w),R.isScene===!0&&R.onAfterRender(w,R,k),Tt.resetDefaultState(),lt=-1,tt=null,F.pop(),F.length>0?(G=F[F.length-1],Zt===!0&&St.setGlobalState(w.clippingPlanes,G.state.camera)):G=null,B.pop(),B.length>0?U=B[B.length-1]:U=null};function Gs(R,k,st,et){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)G.pushLight(R),R.castShadow&&G.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){et&&me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Qe);const Ft=Xt.update(R),wt=R.material;wt.visible&&U.push(R,Ft,wt,st,me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const Ft=Xt.update(R),wt=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),me.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),me.copy(Ft.boundingSphere.center)),me.applyMatrix4(R.matrixWorld).applyMatrix4(Qe)),Array.isArray(wt)){const kt=Ft.groups;for(let qt=0,te=kt.length;qt<te;qt++){const ae=kt[qt],Bt=wt[ae.materialIndex];Bt&&Bt.visible&&U.push(R,Ft,Bt,st,me.z,ae)}}else wt.visible&&U.push(R,Ft,wt,st,me.z,null)}}const Dt=R.children;for(let Ft=0,wt=Dt.length;Ft<wt;Ft++)Gs(Dt[Ft],k,st,et)}function xi(R,k,st,et){const{opaque:K,transmissive:Dt,transparent:Ft}=R;G.setupLightsView(st),Zt===!0&&St.setGlobalState(w.clippingPlanes,st),et&&Wt.viewport(O.copy(et)),K.length>0&&hn(K,k,st),Dt.length>0&&hn(Dt,k,st),Ft.length>0&&hn(Ft,k,st),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function an(R,k,st,et){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(G.state.transmissionRenderTarget[et.id]===void 0){const Bt=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");G.state.transmissionRenderTarget[et.id]=new Vi(1,1,{generateMipmaps:!0,type:Bt?ya:gi,minFilter:Os,samples:Ue.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Dt=G.state.transmissionRenderTarget[et.id],Ft=et.viewport||O;Dt.setSize(Ft.z*w.transmissionResolutionScale,Ft.w*w.transmissionResolutionScale);const wt=w.getRenderTarget(),kt=w.getActiveCubeFace(),qt=w.getActiveMipmapLevel();w.setRenderTarget(Dt),w.getClearColor(dt),Et=w.getClearAlpha(),Et<1&&w.setClearColor(16777215,.5),w.clear(),re&&Lt.render(st);const te=w.toneMapping;w.toneMapping=Gi;const ae=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),G.setupLightsView(et),Zt===!0&&St.setGlobalState(w.clippingPlanes,et),hn(R,st,et),Y.updateMultisampleRenderTarget(Dt),Y.updateRenderTargetMipmap(Dt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let ue=0,Ye=k.length;ue<Ye;ue++){const qe=k[ue],{object:Ae,geometry:dn,material:Gt,group:Un}=qe;if(Gt.side===_a&&Ae.layers.test(et.layers)){const ie=Gt.side;Gt.side=Wn,Gt.needsUpdate=!0,Yi(Ae,st,et,dn,Gt,Un),Gt.side=ie,Gt.needsUpdate=!0,Bt=!0}}Bt===!0&&(Y.updateMultisampleRenderTarget(Dt),Y.updateRenderTargetMipmap(Dt))}w.setRenderTarget(wt,kt,qt),w.setClearColor(dt,Et),ae!==void 0&&(et.viewport=ae),w.toneMapping=te}function hn(R,k,st){const et=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Dt=R.length;K<Dt;K++){const Ft=R[K],{object:wt,geometry:kt,group:qt}=Ft;let te=Ft.material;te.allowOverride===!0&&et!==null&&(te=et),wt.layers.test(st.layers)&&Yi(wt,k,st,kt,te,qt)}}function Yi(R,k,st,et,K,Dt){R.onBeforeRender(w,k,st,et,K,Dt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(w,k,st,et,R,Dt),K.transparent===!0&&K.side===_a&&K.forceSinglePass===!1?(K.side=Wn,K.needsUpdate=!0,w.renderBufferDirect(st,k,et,K,R,Dt),K.side=rs,K.needsUpdate=!0,w.renderBufferDirect(st,k,et,K,R,Dt),K.side=_a):w.renderBufferDirect(st,k,et,K,R,Dt),R.onAfterRender(w,k,st,et,K,Dt)}function Ta(R,k,st){k.isScene!==!0&&(k=De);const et=E.get(R),K=G.state.lights,Dt=G.state.shadowsArray,Ft=K.state.version,wt=Ct.getParameters(R,K.state,Dt,k,st),kt=Ct.getProgramCacheKey(wt);let qt=et.programs;et.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?k.environment:null,et.fog=k.fog;const te=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;et.envMap=pt.get(R.envMap||et.environment,te),et.envMapRotation=et.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,qt===void 0&&(R.addEventListener("dispose",Ee),qt=new Map,et.programs=qt);let ae=qt.get(kt);if(ae!==void 0){if(et.currentProgram===ae&&et.lightsStateVersion===Ft)return il(R,wt),ae}else wt.uniforms=Ct.getUniforms(R),R.onBeforeCompile(wt,w),ae=Ct.acquireProgram(wt,kt),qt.set(kt,ae),et.uniforms=wt.uniforms;const Bt=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Bt.clippingPlanes=St.uniform),il(R,wt),et.needsLights=Wr(R),et.lightsStateVersion=Ft,et.needsLights&&(Bt.ambientLightColor.value=K.state.ambient,Bt.lightProbe.value=K.state.probe,Bt.directionalLights.value=K.state.directional,Bt.directionalLightShadows.value=K.state.directionalShadow,Bt.spotLights.value=K.state.spot,Bt.spotLightShadows.value=K.state.spotShadow,Bt.rectAreaLights.value=K.state.rectArea,Bt.ltc_1.value=K.state.rectAreaLTC1,Bt.ltc_2.value=K.state.rectAreaLTC2,Bt.pointLights.value=K.state.point,Bt.pointLightShadows.value=K.state.pointShadow,Bt.hemisphereLights.value=K.state.hemi,Bt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Bt.spotLightMatrix.value=K.state.spotLightMatrix,Bt.spotLightMap.value=K.state.spotLightMap,Bt.pointShadowMatrix.value=K.state.pointShadowMatrix),et.currentProgram=ae,et.uniformsList=null,ae}function nl(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=qc.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function il(R,k){const st=E.get(R);st.outputColorSpace=k.outputColorSpace,st.batching=k.batching,st.batchingColor=k.batchingColor,st.instancing=k.instancing,st.instancingColor=k.instancingColor,st.instancingMorph=k.instancingMorph,st.skinning=k.skinning,st.morphTargets=k.morphTargets,st.morphNormals=k.morphNormals,st.morphColors=k.morphColors,st.morphTargetsCount=k.morphTargetsCount,st.numClippingPlanes=k.numClippingPlanes,st.numIntersection=k.numClipIntersection,st.vertexAlphas=k.vertexAlphas,st.vertexTangents=k.vertexTangents,st.toneMapping=k.toneMapping}function al(R,k,st,et,K){k.isScene!==!0&&(k=De),Y.resetTextureUnits();const Dt=k.fog,Ft=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?k.environment:null,wt=at===null?w.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Gr,kt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,qt=pt.get(et.envMap||Ft,kt),te=et.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ae=!!st.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Bt=!!st.morphAttributes.position,ue=!!st.morphAttributes.normal,Ye=!!st.morphAttributes.color;let qe=Gi;et.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(qe=w.toneMapping);const Ae=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,dn=Ae!==void 0?Ae.length:0,Gt=E.get(et),Un=G.state.lights;if(Zt===!0&&(Jt===!0||R!==tt)){const rn=R===tt&&et.id===lt;St.setState(et,R,rn)}let ie=!1;et.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Un.state.version||Gt.outputColorSpace!==wt||K.isBatchedMesh&&Gt.batching===!1||!K.isBatchedMesh&&Gt.batching===!0||K.isBatchedMesh&&Gt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Gt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Gt.instancing===!1||!K.isInstancedMesh&&Gt.instancing===!0||K.isSkinnedMesh&&Gt.skinning===!1||!K.isSkinnedMesh&&Gt.skinning===!0||K.isInstancedMesh&&Gt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Gt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Gt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Gt.instancingMorph===!1&&K.morphTexture!==null||Gt.envMap!==qt||et.fog===!0&&Gt.fog!==Dt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==St.numPlanes||Gt.numIntersection!==St.numIntersection)||Gt.vertexAlphas!==te||Gt.vertexTangents!==ae||Gt.morphTargets!==Bt||Gt.morphNormals!==ue||Gt.morphColors!==Ye||Gt.toneMapping!==qe||Gt.morphTargetsCount!==dn)&&(ie=!0):(ie=!0,Gt.__version=et.version);let Ln=Gt.currentProgram;ie===!0&&(Ln=Ta(et,k,K));let qn=!1,Si=!1,jn=!1;const Le=Ln.getUniforms(),sn=Gt.uniforms;if(Wt.useProgram(Ln.program)&&(qn=!0,Si=!0,jn=!0),et.id!==lt&&(lt=et.id,Si=!0),qn||tt!==R){Wt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Le.setValue(V,"projectionMatrix",R.projectionMatrix),Le.setValue(V,"viewMatrix",R.matrixWorldInverse);const Mi=Le.map.cameraPosition;Mi!==void 0&&Mi.setValue(V,ve.setFromMatrixPosition(R.matrixWorld)),Ue.logarithmicDepthBuffer&&Le.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Le.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),tt!==R&&(tt=R,Si=!0,jn=!0)}if(Gt.needsLights&&(Un.state.directionalShadowMap.length>0&&Le.setValue(V,"directionalShadowMap",Un.state.directionalShadowMap,Y),Un.state.spotShadowMap.length>0&&Le.setValue(V,"spotShadowMap",Un.state.spotShadowMap,Y),Un.state.pointShadowMap.length>0&&Le.setValue(V,"pointShadowMap",Un.state.pointShadowMap,Y)),K.isSkinnedMesh){Le.setOptional(V,K,"bindMatrix"),Le.setOptional(V,K,"bindMatrixInverse");const rn=K.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Le.setValue(V,"boneTexture",rn.boneTexture,Y))}K.isBatchedMesh&&(Le.setOptional(V,K,"batchingTexture"),Le.setValue(V,"batchingTexture",K._matricesTexture,Y),Le.setOptional(V,K,"batchingIdTexture"),Le.setValue(V,"batchingIdTexture",K._indirectTexture,Y),Le.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Le.setValue(V,"batchingColorTexture",K._colorsTexture,Y));const Nn=st.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&Ot.update(K,st,Ln),(Si||Gt.receiveShadow!==K.receiveShadow)&&(Gt.receiveShadow=K.receiveShadow,Le.setValue(V,"receiveShadow",K.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&k.environment!==null&&(sn.envMapIntensity.value=k.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=x1()),Si&&(Le.setValue(V,"toneMappingExposure",w.toneMappingExposure),Gt.needsLights&&ls(sn,jn),Dt&&et.fog===!0&&jt.refreshFogUniforms(sn,Dt),jt.refreshMaterialUniforms(sn,et,_t,q,G.state.transmissionRenderTarget[R.id]),qc.upload(V,nl(Gt),sn,Y)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(qc.upload(V,nl(Gt),sn,Y),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Le.setValue(V,"center",K.center),Le.setValue(V,"modelViewMatrix",K.modelViewMatrix),Le.setValue(V,"normalMatrix",K.normalMatrix),Le.setValue(V,"modelMatrix",K.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const rn=et.uniformsGroups;for(let Mi=0,qi=rn.length;Mi<qi;Mi++){const Vs=rn[Mi];Pt.update(Vs,Ln),Pt.bind(Vs,Ln)}}return Ln}function ls(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Wr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(R,k,st){const et=E.get(R);et.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=k,E.get(R.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:st,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){const st=E.get(R);st.__webglFramebuffer=k,st.__useDefaultFramebuffer=k===void 0};const Aa=V.createFramebuffer();this.setRenderTarget=function(R,k=0,st=0){at=R,H=k,$=st;let et=null,K=!1,Dt=!1;if(R){const wt=E.get(R);if(wt.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(V.FRAMEBUFFER,wt.__webglFramebuffer),O.copy(R.viewport),I.copy(R.scissor),ot=R.scissorTest,Wt.viewport(O),Wt.scissor(I),Wt.setScissorTest(ot),lt=-1;return}else if(wt.__webglFramebuffer===void 0)Y.setupRenderTarget(R);else if(wt.__hasExternalTextures)Y.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const te=R.depthTexture;if(wt.__boundDepthTexture!==te){if(te!==null&&E.has(te)&&(R.width!==te.image.width||R.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(R)}}const kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Dt=!0);const qt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qt[k])?et=qt[k][st]:et=qt[k],K=!0):R.samples>0&&Y.useMultisampledRTT(R)===!1?et=E.get(R).__webglMultisampledFramebuffer:Array.isArray(qt)?et=qt[st]:et=qt,O.copy(R.viewport),I.copy(R.scissor),ot=R.scissorTest}else O.copy(nt).multiplyScalar(_t).floor(),I.copy(vt).multiplyScalar(_t).floor(),ot=bt;if(st!==0&&(et=Aa),Wt.bindFramebuffer(V.FRAMEBUFFER,et)&&Wt.drawBuffers(R,et),Wt.viewport(O),Wt.scissor(I),Wt.setScissorTest(ot),K){const wt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,wt.__webglTexture,st)}else if(Dt){const wt=k;for(let kt=0;kt<R.textures.length;kt++){const qt=E.get(R.textures[kt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+kt,qt.__webglTexture,st,wt)}}else if(R!==null&&st!==0){const wt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,wt.__webglTexture,st)}lt=-1},this.readRenderTargetPixels=function(R,k,st,et,K,Dt,Ft,wt=0){if(!(R&&R.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(kt=kt[Ft]),kt){Wt.bindFramebuffer(V.FRAMEBUFFER,kt);try{const qt=R.textures[wt],te=qt.format,ae=qt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+wt),!Ue.textureFormatReadable(te)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(ae)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-et&&st>=0&&st<=R.height-K&&V.readPixels(k,st,et,K,Rt.convert(te),Rt.convert(ae),Dt)}finally{const qt=at!==null?E.get(at).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(R,k,st,et,K,Dt,Ft,wt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(kt=kt[Ft]),kt)if(k>=0&&k<=R.width-et&&st>=0&&st<=R.height-K){Wt.bindFramebuffer(V.FRAMEBUFFER,kt);const qt=R.textures[wt],te=qt.format,ae=qt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+wt),!Ue.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Bt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Bt),V.bufferData(V.PIXEL_PACK_BUFFER,Dt.byteLength,V.STREAM_READ),V.readPixels(k,st,et,K,Rt.convert(te),Rt.convert(ae),0);const ue=at!==null?E.get(at).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,ue);const Ye=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await IM(V,Ye,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Bt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Dt),V.deleteBuffer(Bt),V.deleteSync(Ye),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,st=0){const et=Math.pow(2,-st),K=Math.floor(R.image.width*et),Dt=Math.floor(R.image.height*et),Ft=k!==null?k.x:0,wt=k!==null?k.y:0;Y.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,st,0,0,Ft,wt,K,Dt),Wt.unbindTexture()};const Ra=V.createFramebuffer(),cs=V.createFramebuffer();this.copyTextureToTexture=function(R,k,st=null,et=null,K=0,Dt=0){let Ft,wt,kt,qt,te,ae,Bt,ue,Ye;const qe=R.isCompressedTexture?R.mipmaps[Dt]:R.image;if(st!==null)Ft=st.max.x-st.min.x,wt=st.max.y-st.min.y,kt=st.isBox3?st.max.z-st.min.z:1,qt=st.min.x,te=st.min.y,ae=st.isBox3?st.min.z:0;else{const sn=Math.pow(2,-K);Ft=Math.floor(qe.width*sn),wt=Math.floor(qe.height*sn),R.isDataArrayTexture?kt=qe.depth:R.isData3DTexture?kt=Math.floor(qe.depth*sn):kt=1,qt=0,te=0,ae=0}et!==null?(Bt=et.x,ue=et.y,Ye=et.z):(Bt=0,ue=0,Ye=0);const Ae=Rt.convert(k.format),dn=Rt.convert(k.type);let Gt;k.isData3DTexture?(Y.setTexture3D(k,0),Gt=V.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Y.setTexture2DArray(k,0),Gt=V.TEXTURE_2D_ARRAY):(Y.setTexture2D(k,0),Gt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,k.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,k.unpackAlignment);const Un=V.getParameter(V.UNPACK_ROW_LENGTH),ie=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ln=V.getParameter(V.UNPACK_SKIP_PIXELS),qn=V.getParameter(V.UNPACK_SKIP_ROWS),Si=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,qe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,qe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,qt),V.pixelStorei(V.UNPACK_SKIP_ROWS,te),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ae);const jn=R.isDataArrayTexture||R.isData3DTexture,Le=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){const sn=E.get(R),Nn=E.get(k),rn=E.get(sn.__renderTarget),Mi=E.get(Nn.__renderTarget);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,rn.__webglFramebuffer),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let qi=0;qi<kt;qi++)jn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,K,ae+qi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(k).__webglTexture,Dt,Ye+qi)),V.blitFramebuffer(qt,te,Ft,wt,Bt,ue,Ft,wt,V.DEPTH_BUFFER_BIT,V.NEAREST);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||E.has(R)){const sn=E.get(R),Nn=E.get(k);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,Ra),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,cs);for(let rn=0;rn<kt;rn++)jn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,sn.__webglTexture,K,ae+rn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,sn.__webglTexture,K),Le?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Nn.__webglTexture,Dt,Ye+rn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nn.__webglTexture,Dt),K!==0?V.blitFramebuffer(qt,te,Ft,wt,Bt,ue,Ft,wt,V.COLOR_BUFFER_BIT,V.NEAREST):Le?V.copyTexSubImage3D(Gt,Dt,Bt,ue,Ye+rn,qt,te,Ft,wt):V.copyTexSubImage2D(Gt,Dt,Bt,ue,qt,te,Ft,wt);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Le?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Gt,Dt,Bt,ue,Ye,Ft,wt,kt,Ae,dn,qe.data):k.isCompressedArrayTexture?V.compressedTexSubImage3D(Gt,Dt,Bt,ue,Ye,Ft,wt,kt,Ae,qe.data):V.texSubImage3D(Gt,Dt,Bt,ue,Ye,Ft,wt,kt,Ae,dn,qe):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Dt,Bt,ue,Ft,wt,Ae,dn,qe.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Dt,Bt,ue,qe.width,qe.height,Ae,qe.data):V.texSubImage2D(V.TEXTURE_2D,Dt,Bt,ue,Ft,wt,Ae,dn,qe);V.pixelStorei(V.UNPACK_ROW_LENGTH,Un),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ie),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ln),V.pixelStorei(V.UNPACK_SKIP_ROWS,qn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Si),Dt===0&&k.generateMipmaps&&V.generateMipmap(Gt),Wt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&Y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Y.setTextureCube(R,0):R.isData3DTexture?Y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Y.setTexture2DArray(R,0):Y.setTexture2D(R,0),Wt.unbindTexture()},this.resetState=function(){H=0,$=0,at=null,Wt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}const J0={type:"change"},op={type:"start"},zv={type:"end"},Bc=new nu,$0=new ga,M1=Math.cos(70*BM.DEG2RAD),mn=new Z,Xn=2*Math.PI,Ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jh=1e-6;class y1 extends Ay{constructor(t,i=null){super(t,i),this.state=Ge.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xa.ROTATE,MIDDLE:xa.DOLLY,RIGHT:xa.PAN},this.touches={ONE:as.ROTATE,TWO:as.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new os,this._lastTargetPosition=new Z,this._quat=new os().setFromUnitVectors(t.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new R0,this._sphericalDelta=new R0,this._scale=1,this._panOffset=new Z,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new Z,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=b1.bind(this),this._onPointerDown=E1.bind(this),this._onPointerUp=T1.bind(this),this._onContextMenu=L1.bind(this),this._onMouseWheel=C1.bind(this),this._onKeyDown=D1.bind(this),this._onTouchStart=w1.bind(this),this._onTouchMove=U1.bind(this),this._onMouseDown=A1.bind(this),this._onMouseMove=R1.bind(this),this._interceptControlDown=N1.bind(this),this._interceptControlUp=O1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(J0),this.update(),this.state=Ge.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;mn.copy(i).sub(this.target),mn.applyQuaternion(this._quat),this._spherical.setFromVector3(mn),this.autoRotate&&this.state===Ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Xn:s>Math.PI&&(s-=Xn),l<-Math.PI?l+=Xn:l>Math.PI&&(l-=Xn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(mn.setFromSpherical(this._spherical),mn.applyQuaternion(this._quatInverse),i.copy(this.target).add(mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const p=mn.length();h=this._clampDistance(p*this._scale);const m=p-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new Z(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),h=mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Bc.origin.copy(this.object.position),Bc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bc.direction))<M1?this.object.lookAt(this.target):($0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bc.intersectPlane($0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Jh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jh||this._lastTargetPosition.distanceToSquared(this.target)>Jh?(this.dispatchEvent(J0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xn/60*this.autoRotateSpeed*t:Xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){mn.setFromMatrixColumn(i,0),mn.multiplyScalar(-t),this._panOffset.add(mn)}_panUp(t,i){this.screenSpacePanning===!0?mn.setFromMatrixColumn(i,1):(mn.setFromMatrixColumn(i,0),mn.crossVectors(this.object.up,mn)),mn.multiplyScalar(t),this._panOffset.add(mn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;mn.copy(l).sub(this.target);let c=mn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,p=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,p=(t.pageY+i.y)*.5;this._updateZoomParameters(h,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new oe,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function E1(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function b1(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function T1(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zv),this.state=Ge.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function A1(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case xa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ge.DOLLY;break;case xa.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ge.ROTATE}break;case xa.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ge.PAN}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(op)}function R1(o){switch(this.state){case Ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function C1(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ge.NONE||(o.preventDefault(),this.dispatchEvent(op),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(zv))}function D1(o){this.enabled!==!1&&this._handleKeyDown(o)}function w1(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case as.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ge.TOUCH_ROTATE;break;case as.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ge.TOUCH_PAN;break;default:this.state=Ge.NONE}break;case 2:switch(this.touches.TWO){case as.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ge.TOUCH_DOLLY_PAN;break;case as.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ge.TOUCH_DOLLY_ROTATE;break;default:this.state=Ge.NONE}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(op)}function U1(o){switch(this._trackPointer(o),this.state){case Ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ge.NONE}}function L1(o){this.enabled!==!1&&o.preventDefault()}function N1(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function O1(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const $h=new ga,Hc=new Uv,Pr=new oe,td=new Z;class P1 extends y1{constructor(t,i){super(t,i),this.screenSpacePanning=!1,this.mouseButtons={LEFT:xa.PAN,MIDDLE:xa.DOLLY,RIGHT:xa.ROTATE},this.touches={ONE:as.PAN,TWO:as.DOLLY_ROTATE},this._panWorldStart=new Z}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;$h.setFromNormalAndCoplanarPoint(this.object.up,this.target);const s=this.domElement.getBoundingClientRect();Pr.x=(t.clientX-s.left)/s.width*2-1,Pr.y=-((t.clientY-s.top)/s.height)*2+1,Hc.setFromCamera(Pr,this.object),Hc.ray.intersectPlane($h,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const s=this.domElement.getBoundingClientRect();Pr.x=(t.clientX-s.left)/s.width*2-1,Pr.y=-((t.clientY-s.top)/s.height)*2+1,Hc.setFromCamera(Pr,this.object),Hc.ray.intersectPlane($h,td)&&(td.sub(this._panWorldStart),this._panOffset.copy(td).negate(),this.update())}}const I1=[{focalDistance:1190783577e-2,axis:{semiMajor:57909050,semiMinor:56671523},orbitColor:"#ffffff"},{focalDistance:733047.99,axis:{semiMajor:108208926,semiMinor:108206443},orbitColor:"#f77e4a"},{focalDistance:2499813496e-3,axis:{semiMajor:1495978875e-1,semiMinor:149576999826e-3},orbitColor:"#809fff"}],F1=[{name:"Mercury",radius:2439.7,intersectionSphereScale:4,maxDistanceFromSun:69816900,textureFileName:"assets/textures/mercury.jpeg"},{name:"Venus",radius:6051.8,maxDistanceFromSun:1082e5,textureFileName:"assets/textures/venus.jpeg"},{name:"Earth",radius:6371,maxDistanceFromSun:1521e5,textureFileName:"assets/textures/earth.jpeg"}],tv=696340,lp=1e5,z1=30,B1=20,Bv=o=>o/lp,Hv=o=>o*(B1/lp),Yo=o=>o/(lp*z1),ev=(o,t,i,s=!0)=>{const l=s?Hv(t):Bv(t),c=new su(l),h=new Ey().load(i),p=new iu({map:h}),m=new wi(c,p);return m.name=o,m},nv=(o,t,i=2,s=!0)=>{const l=s?Hv(t):Bv(t),c=new su(l*i),h=new iu({color:"#ffffff",opacity:0,transparent:!0,depthWrite:!1,depthTest:!1}),p=new wi(c,h);return p.name=o,p},H1=(o,t,i,s=0)=>{const l=Yo(o),c=Yo(t.semiMinor),h=Yo(t.semiMajor),m=new hy(0,l,c,h,0,2*Math.PI,!1,0).getPoints(h*100),d=new _i().setFromPoints(m),v=new Tv({color:i,opacity:.4,transparent:!0}),x=new cy(d,v);return x.rotateX(Math.PI/2+s),x},G1=()=>{const o=kn.useRef(new $M),t=kn.useRef(new mi(75,window.innerWidth/window.innerHeight,.1,1e3));t.current.position.x=-80,t.current.position.y=20;const i=kn.useRef(new S1({antialias:!0})),s=kn.useRef(new P1(t.current,i.current.domElement)),l=kn.useRef([]),c=kn.useRef([]),h=kn.useRef(void 0),p=kn.useRef(new Uv),m=kn.useRef(new oe),d=kn.useRef(void 0),v=kn.useRef(void 0),x=kn.useRef(!1),g=()=>{i.current.setSize(window.innerWidth,window.innerHeight),document.getElementById("canvas").appendChild(i.current.domElement),s.current.enableDamping=!0,s.current.rotateSpeed=.3,s.current.target.set(0,0,0),d.current=ev("Sun",tv,"assets/textures/8k_sun.jpeg",!1),o.current.add(d.current),v.current=nv("Sun",tv,1.5,!1),o.current.add(v.current),F1.forEach(({name:N,radius:U,maxDistanceFromSun:G,intersectionSphereScale:B,textureFileName:F},T)=>{l.current[T]=ev(N,U,F),l.current[T].position.z=Yo(G),o.current.add(l.current[T]),c.current[T]=nv(N,U,B),c.current[T].position.z=Yo(G),o.current.add(c.current[T]);const{focalDistance:w,axis:ht,orbitColor:H}=I1[T],$=H1(w,ht,H);o.current.add($)})},M=()=>{const N=[v.current,...c.current];p.current.setFromCamera(m.current,t.current);const U=p.current.intersectObjects(N,!1);if(U.length>0?h.current=U[0].object:h.current=void 0,v.current!==void 0){const G=v.current.material;G.opacity=h.current&&h.current.name===v.current.name?.2:0}c.current.forEach((G,B)=>{const F=c.current[B].material;h&&G.name===h.current?.name?F.opacity=.2:F.opacity=0})},b=()=>{M()},C=()=>{i.current.render(o.current,t.current)},y=()=>{b(),d.current&&(d.current.rotation.y-=.001),C(),requestAnimationFrame(y)},S=N=>{m.current.x=N.clientX/window.innerWidth*2-1,m.current.y=-(N.clientY/window.innerHeight)*2+1},D=()=>{const N=window.innerWidth/window.innerHeight;t.current.aspect=N,t.current.updateProjectionMatrix(),s.current.update(),i.current.setSize(window.innerWidth,window.innerHeight)};return kn.useEffect(()=>(x.current||(g(),x.current=!0),y(),window.addEventListener("mousemove",S,!1),window.addEventListener("resize",D),()=>{window.removeEventListener("mousemove",S),window.removeEventListener("resize",D)}),[]),jc.jsx("div",{id:"canvas"})};function V1(){return jc.jsx(G1,{})}tM.createRoot(document.getElementById("root")).render(jc.jsx(kn.StrictMode,{children:jc.jsx(V1,{})}));
