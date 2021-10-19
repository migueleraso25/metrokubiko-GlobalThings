var es=function(e){"use strict";const o={},c=e=>o[e],a=(e,t)=>{o[e]=t},l={},s=({id_event:e,callback:t})=>{if(!isFunction(t))return!1;const n=l[e],o=GlobalThings.get_UID(10);return n.listeners[o]={callback:t,remove:()=>{delete n.listeners[o]}},n.listeners[o].remove},r=({id_event:e,args:t})=>{const n=l[e];for(const o in n.listeners)try{n.listeners[o].callback(t)}catch(e){}},i=e=>{delete l[e]};var m={destroy:e=>{var t=c(e);if(!t)throw"This component does not exists";try{const n=t["element"];n.parentNode.removeChild(n)}catch(e){}e=e,delete o[e]},render:e=>{if(!c(e))throw"This component does not exists";const{data:t,template:n,element:o}=c(e);let l=n;for(const s in t)l=l.replaceAll(`{${s}}`,t[s]);o.innerHTML=l},setData:(e,t,n)=>{const o=c(e);if(!o)throw"This component does not exists";t=t||{},!1!==(n=n||{}).merge&&(t={...o.data,...t}),o.onChangeDataEvent&&o.onChangeDataEvent.dispatch({...t}),o.data=t},setTemplate:(e,t)=>{const n=c(e);if(!n)throw"This component does not exists";n.template=t||""},onChangeData:(e,t)=>{const n=c(e);if(!n)throw"This component does not exists";return n.onChangeDataEvent||(n.onChangeDataEvent=(t=>{if(l[t])throw"An event with this id already exists";return l[t]={listeners:{},remove:()=>i(t),dispatch:e=>r({id_event:t,args:e}),addListener:e=>s({id_event:t,callback:e})},l[t]})(e+"_onChangeDataEvent")),n.onChangeDataEvent.addListener(t)}};const p=e=>{return document.createElement(e)},_=function(e,t){e=e||"div";var{data:n,template:t}=t=t||{};const o=GlobalThings.get_UID(150),l=p(e);a(o,{uid:o,element:l,tag_name:e,data:{},template:""}),m.setTemplate(o,t),m.setData(o,n);const s=()=>{m.render(o)};return{element:l,appendTo:e=>{e.appendChild(l),s()},setData:e=>{m.setData(o,e),s()},setTemplate:e=>{m.setTemplate(o,e),s()},render:s,onChangeData:e=>{m.onChangeData(o,e)},destroy:()=>{m.destroy(o)}}},y={};const v=e=>{const t=document.querySelector("html");t.style.overflow="",y[e]._destroy()},h=e=>{const t=document.querySelector("html");t.style.overflow="",y[e].element.style.display="none","function"==typeof y[e].onclose&&y[e].onclose()},f=e=>{const t=document.querySelector("html");t.style.overflow="hidden",y[e].element.style.display=""},g="medium",C={small:"components_modal--content__small",small_600:"components_modal--content__small_600",medium:"components_modal--content__medium",medium_1200:"components_modal--content__medium_1200",medium_1300:"components_modal--content__medium_1300",large:"components_modal--content__large",complete:"components_modal--content__complete"},b="center",x={left:"components_modal--content__left",center:"components_modal--content__center",right:"components_modal--content__right"},T=`
			<div class="components_modal--header"> </div>
			<div class="components_modal--body"> </div>
			<div class="components_modal--footer"> </div>
		`,d=e=>{var{data:t,content:n,accept:o,cancel:e}=e=e||{},e=u({content:n,accept:o,cancel:e});const{appendTo:l,element:s,destroy:c}=_("div",{data:t,template:e});return s.className="components_alert",l(document.body),{acceptButton:s.querySelector('[btn-id="accept"]'),cancelButton:s.querySelector('[btn-id="cancel"]'),element:s,destroy:c}};const u=({content:e,cancel:t,accept:n})=>{return`
		<div class="components_alert--overlay"> </div>

		<div class="components_alert--content">
			<div class="components_alert--content--text">
				${e}
			</div>
			<div class="components_alert--content--controllers">
				${t?`
		<span class="components_alert--content--controllers--btn components_alert--content--controllers--btn__cancel" btn-id="cancel">${t}</span>
	`:""}
				<span class="components_alert--content--controllers--btn components_alert--content--controllers--btn__accept" btn-id="accept">${n=n||"Accept"}</span>
			</div>
		</div>
	`};var t=function(e){const{id:t,data:n,title:o,inputs:l,accept:s,cancel:c,onAccept:a}=e;e=(({title:e,inputs:t})=>{if(!t?.length)t=[{}];const n=t.reduce((e,t)=>{const{label:n,type:o}=t;const l=n?`<label>${n}</label>`:"";return e+`
			<div class="components_prompt--item">
				${l}
				<input class="components_prompt--input" type="${o||"text"}"/>
			</div>
		`},"");return`
		<div class="components_prompt--title">
			${e}
		</div>
		${n}

	`})({title:o,inputs:l});const{acceptButton:r,cancelButton:i,destroy:m,element:p}=d({data:n,content:e,accept:s,cancel:c||"Cancel"});return p.className+=" components_prompt",p.id=t||"",new Promise(n=>{const t=e=>{var t=p.querySelectorAll("input"),t=Array.from(t).map(e=>e.value);m(),e||n(null),n(t)};r.onclick=()=>{if("function"!=typeof a)return t(!0);var e=p.querySelectorAll("input");a(Array.from(e))&&t(!0)},i.onclick=()=>t(!1)})};t.getSettingsExample=()=>({title:"Example",accept:"Change",cancel:"Cancel",inputs:[{label:"Name:"}],onAccept:e=>!(100<e[0].value)});const E={},w={duration:4e3,position:"bottom-left"},n={"top-left":"components_toast--container__top_left","top-right":"components_toast--container__top_right","bottom-left":"components_toast--container__bottom_left","bottom-right":"components_toast--container__bottom_right"},k={info:"components_toast--item__info",error:"components_toast--item__error",warning:"components_toast--item__warning",success:"components_toast--item__success"};const B=({text:e,type:t})=>{A();t=k[t]||k.success;const n=document.createElement("div");n.innerHTML=e||"",n.className=t+" components_toast--item",-1===w.position.indexOf("top")?E[w.position].appendChild(n):E[w.position].insertBefore(n,E[w.position].firstChild),n.onclick=()=>D(n),setTimeout(()=>D(n),w.duration)},D=e=>{e.classList.add("components_toast--item__clossing"),setTimeout(function(){e.parentNode.removeChild(e)},1e3)};const A=()=>{if(!E[w.position]){const e=document.createElement("div");e.className=n[w.position]+" components_toast--container",document.body.appendChild(e),E[w.position]=e}};function N(e){var{data:t,content:n,accept:e}=e;const{acceptButton:o,destroy:l}=d({data:t,content:n,accept:e});return new Promise(e=>{o.onclick=()=>{e(!0),l()}})}function $(e){var{data:t,content:n,accept:o,cancel:e}=e;const{acceptButton:l,cancelButton:s,destroy:c}=d({data:t,content:n,accept:o,cancel:e||"Cancel"});return new Promise(t=>{const e=e=>{t(e),c()};l.onclick=()=>e(!0),s.onclick=()=>e(!1)})}function L(e){const{items:t,onActive:n,darkMode:o}=e=e||{},s=_("div")["element"];s.setAttribute("tabindex","-1"),s.className="components_contextmenu",s.style.display="none",o&&s.classList.add("components_contextmenu__dark-mode"),document.body.appendChild(s),(t||[]).forEach(e=>{const t=_("a").element;t.className="components_contextmenu--item",t.innerHTML=`
			${e.text||""}
		`,s.appendChild(t),t.onclick=()=>{s.blur(),"function"==typeof n&&n(e)}}),s.addEventListener("focusout",()=>{s.style.display="none"});const c={appendTo:e=>{var l;c.element=e,[{parentElement:e,element:l}]=[{parentElement:e,element:s}],e.oncontextmenu=e=>{e.preventDefault(),l.style.display="",l.focus();var{pageY:t,pageX:n}=e,{offsetHeight:o,offsetWidth:e}=l;t+o>document.documentElement.clientHeight?(l.style.top="",l.style.bottom="0px"):(l.style.bottom="",l.style.top=t+"px"),n+e>document.documentElement.clientWidth?(l.style.left="",l.style.right="0px"):(l.style.right="",l.style.left=n+"px")}},destroy:()=>{c.element&&(c.element.oncontextmenu=null,s.parentNode.removeChild(s))}};return c}function S(e){let s="initial";const c=(e||{})["element"];c.classList.add("components_button");const a=(e=getComputedStyle(c)).backgroundColor,r=e.color;return{setState:e=>{const t=c.querySelector(".components_button--state");return t&&t.parentNode.removeChild(t),"initial"===(s=e)?([{element:n,elementColor:o,elementBgColor:l}]=[{element:c,elementColor:r,elementBgColor:a}],n.style.color=o,"initial"):("loading"===e?({element:e,elementColor:t,elementBgColor:n})=>{const o=document.createElement("span");return o.className="components_button--state components_button--state__loading fas fa-spinner",o.style.color=t,e.style.color=n,e.appendChild(o),"loading"}:({element:e,elementColor:t,elementBgColor:n})=>{const o=document.createElement("span");return o.className="components_button--state",o.style.color=t,e.style.color=n,e.appendChild(o),o})({element:c,elementColor:r,elementBgColor:a});var n,o,l},getState:()=>s}}function M({element:s,items:c}){if(Array.isArray(c)||(c=[]),!(s instanceof HTMLElement)&&"INPUT"!==s?.tagName)throw"element key must be an input.";const e=_("ul"),a=e.element;return e.appendTo(document.body),a.style.display="none",a.className="components_autocomplete",c=c.map(e=>{const t=document.createElement("li");return a.appendChild(t),t.innerHTML=e,t.style.display="none",t.onclick=()=>{s.value=e},{text:e,liElement:t}}),s.addEventListener("input",e=>{var{top:t,height:n,left:o,width:l}=s.getBoundingClientRect();a.style.top=`${t+n}px`,a.style.left=`${o}px`,a.style.width=`${l}px`,c.filter(e=>{var t=-1<e.text.toLowerCase().indexOf(s.value.toLowerCase());return e.liElement.style.display=t?"":"none",t}).length?a.style.display="":a.style.display="none"}),s.addEventListener("focusout",e=>{setTimeout(function(){a.style.display="none"},200)}),{destroy:e.destroy}}var q={create:function(e){var{data:t,template:n,id:o,type:l,position:s,all_height:c,top:a,close_on_overlay_click:r,onclose:e}=e=e||{};const i=_("div",{data:t,template:(({template:e,type:t,position:n,top:o,all_height:l})=>{e=e||"";const s=x[n]||x[b],c=C[t]||C[g],a=l?"components_modal--content__all_height":"";return`
				<div class="components_modal--overlay"></div>
				<div class="components_modal--display">
					<div class="components_modal--content ${c} ${s} ${a}" style="--top: ${o||"40px"};">
						${e||T}
					</div>
				</div>
			`})({template:n,type:l,position:s,all_height:c,top:a})}),m=i.appendTo,p=o||(()=>{var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=t.length;let o="";for(let e=0;e<=100;e++)o+=t.charAt(Math.floor(Math.random()*n));return o})();if(i._destroy=i.destroy,y[p]={onclose:e,id:p,...i,open:()=>f(p),close:()=>h(p),destroy:()=>v(p)},y[p].element.className="components_modal",delete i.appendTo,y[p].element.style.display="none",y[p].element.id=o,m(document.body),!1!==r){const d=y[p].element.querySelector(".components_modal--display"),u=y[p].element.querySelector(".components_modal--content");u.onclick=e=>e.stopPropagation(),d.onclick=e=>h(p)}return y[p]},destroyByID:v,closeByID:h,openByID:f},P=t,H={success:e=>{B({text:e,type:"success"})},warning:e=>{B({text:e,type:"warning"})},error:e=>{B({text:e,type:"error"})},info:e=>{B({text:e,type:"info"})},set:({position:e,duration:t})=>{e&&(w.position=n[e]?e:w.position),Number(t)&&0<t&&(w.duration=t)}},t={Modal:q,Alert:N,Confirm:$,Prompt:P,Toast:H,Button:S,ContextMenu:L,AutoComplete:M};return e.Alert=N,e.AutoComplete=M,e.Button=S,e.Confirm=$,e.ContextMenu=L,e.Modal=q,e.Prompt=P,e.Toast=H,e.default=t,Object.defineProperty(e,"__esModule",{value:!0}),e}({});
