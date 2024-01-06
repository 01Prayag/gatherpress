(()=>{"use strict";var e,t={3484:(e,t,n)=>{const r=window.wp.blocks,a=window.React,o=window.moment;var s=n.n(o);const i=window.wp.i18n,l=window.wp.blockEditor,c=window.wp.components,m=window.wp.element,d=(e,t="")=>{for(const[n,r]of Object.entries(e)){let e=n;t&&(e+="_"+String(t));const a=new CustomEvent(e,{detail:r});dispatchEvent(a)}},p=window.wp.data,u=window.wp.apiFetch;var f=n.n(u);function v(){(0,p.dispatch)("core/editor")?.editPost({meta:{_non_existing_meta:!0}})}function _(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}function E(e,t){if("object"!=typeof GatherPress)return;const n=e.split("."),r=n.pop();n.reduce(((e,t)=>{var n;return null!==(n=e[t])&&void 0!==n?n:e[t]={}}),GatherPress)[r]=t}function g(){const e=s().tz(_("event_datetime.datetime_end"),b());return s().tz(b()).valueOf()>e.valueOf()}function h(){const e="gp_event_past",t=(0,p.dispatch)("core/notices");t.removeNotice(e),g()&&t.createNotice("warning",(0,i.__)("This event has already past.","gatherpress"),{id:e,isDismissible:!1})}const T="YYYY-MM-DDTHH:mm:ss",w="YYYY-MM-DD HH:mm:ss",z="MMMM D, YYYY h:mm a",b=(e=_("event_datetime.timezone"))=>s().tz.zone(e)?e:(0,i.__)("GMT","gatherpress"),S=(e="")=>{const t=/^([+-])(\d{2}):(00|15|30|45)$/,n=e.replace(t,"$1");return n!==e?"UTC"+n+parseInt(e.replace(t,"$2")).toString()+e.replace(t,"$3").replace("00","").replace("15",".25").replace("30",".5").replace("45",".75"):e},D=s().tz(b()).add(1,"day").set("hour",18).set("minute",0).set("second",0).format(T),y=s().tz(D,b()).add(2,"hours").format(T),O=(e,t=null)=>{!function(e){const t=s().tz(_("event_datetime.datetime_end"),b()).valueOf(),n=s().tz(e,b()).valueOf();if(n>=t){const e=s().tz(n,b()).add(2,"hours").format(T);k(e)}}(e),E("event_datetime.datetime_start",e),"function"==typeof t&&t(e),v()},k=(e,t=null)=>{!function(e){const t=s().tz(_("event_datetime.datetime_start"),b()).valueOf(),n=s().tz(e,b()).valueOf();if(n<=t){const e=s().tz(n,b()).subtract(2,"hours").format(T);O(e)}}(e),E("event_datetime.datetime_end",e),null!==t&&t(e),v()};function x(){const e=(0,p.select)("core/editor").isSavingPost(),t=(0,p.select)("core/editor").isAutosavingPost();"gp_event"===(0,p.select)("core/editor").getCurrentPostType()&&e&&!t&&f()({path:"/gatherpress/v1/event/datetime/",method:"POST",data:{post_id:_("post_id"),datetime_start:s().tz(_("event_datetime.datetime_start"),b()).format(w),datetime_end:s().tz(_("event_datetime.datetime_end"),b()).format(w),timezone:_("event_datetime.timezone"),_wpnonce:_("nonce")}}).then((()=>{!function(){const e="gp_event_communcation",t=(0,p.dispatch)("core/notices");t.removeNotice(e),"publish"!==(0,p.select)("core/editor").getEditedPostAttribute("status")||g()||t.createNotice("success",(0,i.__)("Send an event update to members via email?","gatherpress"),{id:e,isDismissible:!0,actions:[{onClick:()=>{d({setOpen:!0})},label:(0,i.__)("Compose Message","gatherpress")}]})}()}))}const P=e=>{const{isSelected:t}=e,n=t?"none":"block";return(0,a.createElement)("div",{style:{position:"relative"}},e.children,(0,a.createElement)("div",{style:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:n}}))},C=window.wp.date,M=e=>{const{dateTimeStart:t}=e;return s().tz(t,b()).format(z)},Y=e=>{const{dateTimeEnd:t}=e;return s().tz(t,b()).format(z)},j=e=>{const{dateTimeStart:t,setDateTimeStart:n}=e,r=(0,C.getSettings)(),o=/a(?!\\)/i.test(r.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,a.createElement)(c.DateTimePicker,{currentDate:t,onChange:e=>O(e,n),is12Hour:o})},$=e=>{const{dateTimeEnd:t,setDateTimeEnd:n}=e,r=(0,C.getSettings)(),o=/a(?!\\)/i.test(r.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,a.createElement)(c.DateTimePicker,{currentDate:t,onChange:e=>k(e,n),is12Hour:o})},F=e=>{const{dateTimeStart:t,setDateTimeStart:n}=e;return(0,m.useEffect)((()=>{n(s().tz((()=>{let e=_("event_datetime.datetime_start");return e=""!==e?s().tz(e,b()).format(T):D,E("event_datetime.datetime_start",e),e})(),b()).format(T)),d({setDateTimeStart:t}),h()})),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.Flex,null,(0,a.createElement)(c.FlexItem,null,(0,i.__)("Start","gatherpress")),(0,a.createElement)(c.FlexItem,null,(0,a.createElement)(c.Dropdown,{popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:e,onToggle:n})=>(0,a.createElement)(c.Button,{onClick:n,"aria-expanded":e,isLink:!0},(0,a.createElement)(M,{dateTimeStart:t})),renderContent:()=>(0,a.createElement)(j,{dateTimeStart:t,setDateTimeStart:n})}))))},I=e=>{const{dateTimeEnd:t,setDateTimeEnd:n}=e;return(0,m.useEffect)((()=>{n(s().tz((()=>{let e=_("event_datetime.datetime_end");return e=""!==e?s().tz(e,b()).format(T):y,E("event_datetime.datetime_end",e),e})(),b()).format(T)),d({setDateTimeEnd:t}),h()})),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.Flex,null,(0,a.createElement)(c.FlexItem,null,(0,i.__)("End","gatherpress")),(0,a.createElement)(c.FlexItem,null,(0,a.createElement)(c.Dropdown,{popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:e,onToggle:n})=>(0,a.createElement)(c.Button,{onClick:n,"aria-expanded":e,isLink:!0},(0,a.createElement)(Y,{dateTimeEnd:t})),renderContent:()=>(0,a.createElement)($,{dateTimeEnd:t,setDateTimeEnd:n})}))))},G=e=>{const{timezone:t,setTimezone:n}=e,r=_("timezone_choices");return(0,m.useEffect)((()=>{n(_("event_datetime.timezone"))}),[n]),(0,m.useEffect)((()=>{d({setTimezone:_("event_datetime.timezone")})})),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.SelectControl,{label:(0,i.__)("Time Zone","gatherpress"),value:S(t),onChange:e=>{e=((e="")=>{const t=/^UTC([+-])(\d+)(.\d+)?$/,n=e.replace(t,"$1");if(n!==e){const r=e.replace(t,"$2").padStart(2,"0");let a=e.replace(t,"$3");return""===a&&(a=":00"),a=a.replace(".25",":15").replace(".5",":30").replace(".75",":45"),n+r+a}return e})(e),n(e),E("event_datetime.timezone",e),v()}},Object.keys(r).map((e=>(0,a.createElement)("optgroup",{key:e,label:e},Object.keys(r[e]).map((t=>(0,a.createElement)("option",{key:t,value:t},r[e][t]))))))))},H=()=>{const[e,t]=(0,m.useState)(),[n,r]=(0,m.useState)(),[o,s]=(0,m.useState)();return(0,p.subscribe)(x),(0,a.createElement)(a.Fragment,null,(0,a.createElement)("section",null,(0,a.createElement)("h3",null,(0,i.__)("Date & time","gatherpress")),(0,a.createElement)(F,{dateTimeStart:e,setDateTimeStart:t}),(0,a.createElement)(I,{dateTimeEnd:n,setDateTimeEnd:r})),(0,a.createElement)("section",null,(0,a.createElement)(G,{timezone:o,setTimezone:s})))},N=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/event-date","version":"1.0.0","title":"Event Date","category":"gatherpress","icon":"clock","example":{},"description":"Display and edit event dates.","attributes":{"eventEnd":{"type":"string"},"eventStart":{"type":"string"}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","render":"file:./render.php"}');(0,r.registerBlockType)(N,{edit:()=>{const e=(0,l.useBlockProps)(),[t,n]=(0,m.useState)(D),[r,o]=(0,m.useState)(y),[d,p]=(0,m.useState)(b());return((e,t="")=>{for(const[n,r]of Object.entries(e)){let e=n;t&&(e+="_"+String(t)),addEventListener(e,(e=>{r(e.detail)}),!1)}})({setDateTimeEnd:o,setDateTimeStart:n,setTimezone:p}),(0,a.createElement)("div",{...e},(0,a.createElement)(P,null,(0,a.createElement)(c.Flex,{justify:"normal",align:"flex-start",gap:"4"},(0,a.createElement)(c.FlexItem,{display:"flex",className:"gp-event-date__icon"},(0,a.createElement)(c.Icon,{icon:"clock"})),(0,a.createElement)(c.FlexItem,null,((e,t,n)=>{const r="dddd, MMMM D, YYYY",a="h:mm A",o=r+" "+a,l=b(n);let c=r+" "+a+" z";return s().tz(e,l).format(r)===s().tz(t,l).format(r)&&(c=a+" z"),(0,i.sprintf)(/* translators: %1$s: datetime start, %2$s: datetime end, %3$s timezone. */
(0,i.__)("%1$s to %2$s %3$s"),s().tz(e,l).format(o),s().tz(t,l).format(c),(e=>(e=b(e),(0,i.__)("GMT","gatherpress")!==e?"":((e="")=>e.replace(":",""))(_("event_datetime.timezone"))))(l))})(t,r,d)),(0,a.createElement)(l.InspectorControls,null,(0,a.createElement)(c.PanelBody,null,(0,a.createElement)(H,null))))))},save:()=>null})}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var s=1/0;for(m=0;m<e.length;m++){for(var[n,a,o]=e[m],i=!0,l=0;l<n.length;l++)(!1&o||s>=o)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(m--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[n,a,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={591:0,42:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[s,i,l]=n,c=0;if(s.some((t=>0!==e[t]))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(l)var m=l(r)}for(t&&t(n);c<s.length;c++)o=s[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(m)},n=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[42],(()=>r(3484)));a=r.O(a)})();