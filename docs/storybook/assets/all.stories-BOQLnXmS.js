import{j as e,r as S}from"./iframe-BWQHN1aN.js";import"./index-YCjsXjyU.js";import"./preload-helper-C1FmrZbK.js";function Xt(r){var t,a,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var o=r.length;for(t=0;t<o;t++)r[t]&&(a=Xt(r[t]))&&(n&&(n+=" "),n+=a)}else for(a in r)r[a]&&(n&&(n+=" "),n+=a);return n}function xa(){for(var r,t,a=0,n="",o=arguments.length;a<o;a++)(r=arguments[a])&&(t=Xt(r))&&(n&&(n+=" "),n+=t);return n}const Ze="-",ba=r=>{const t=va(r),{conflictingClassGroups:a,conflictingClassGroupModifiers:n}=r;return{getClassGroupId:l=>{const i=l.split(Ze);return i[0]===""&&i.length!==1&&i.shift(),Zt(i,t)||ga(l)},getConflictingClassGroupIds:(l,i)=>{const c=a[l]||[];return i&&n[l]?[...c,...n[l]]:c}}},Zt=(r,t)=>{var l;if(r.length===0)return t.classGroupId;const a=r[0],n=t.nextPart.get(a),o=n?Zt(r.slice(1),n):void 0;if(o)return o;if(t.validators.length===0)return;const s=r.join(Ze);return(l=t.validators.find(({validator:i})=>i(s)))==null?void 0:l.classGroupId},nr=/^\[(.+)\]$/,ga=r=>{if(nr.test(r)){const t=nr.exec(r)[1],a=t==null?void 0:t.substring(0,t.indexOf(":"));if(a)return"arbitrary.."+a}},va=r=>{const{theme:t,prefix:a}=r,n={nextPart:new Map,validators:[]};return ha(Object.entries(r.classGroups),a).forEach(([s,l])=>{Oe(l,n,s,t)}),n},Oe=(r,t,a,n)=>{r.forEach(o=>{if(typeof o=="string"){const s=o===""?t:sr(t,o);s.classGroupId=a;return}if(typeof o=="function"){if(fa(o)){Oe(o(n),t,a,n);return}t.validators.push({validator:o,classGroupId:a});return}Object.entries(o).forEach(([s,l])=>{Oe(l,sr(t,s),a,n)})})},sr=(r,t)=>{let a=r;return t.split(Ze).forEach(n=>{a.nextPart.has(n)||a.nextPart.set(n,{nextPart:new Map,validators:[]}),a=a.nextPart.get(n)}),a},fa=r=>r.isThemeGetter,ha=(r,t)=>t?r.map(([a,n])=>{const o=n.map(s=>typeof s=="string"?t+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([l,i])=>[t+l,i])):s);return[a,o]}):r,ya=r=>{if(r<1)return{get:()=>{},set:()=>{}};let t=0,a=new Map,n=new Map;const o=(s,l)=>{a.set(s,l),t++,t>r&&(t=0,n=a,a=new Map)};return{get(s){let l=a.get(s);if(l!==void 0)return l;if((l=n.get(s))!==void 0)return o(s,l),l},set(s,l){a.has(s)?a.set(s,l):o(s,l)}}},Qt="!",wa=r=>{const{separator:t,experimentalParseClassName:a}=r,n=t.length===1,o=t[0],s=t.length,l=i=>{const c=[];let u=0,p=0,g;for(let y=0;y<i.length;y++){let N=i[y];if(u===0){if(N===o&&(n||i.slice(y,y+s)===t)){c.push(i.slice(p,y)),p=y+s;continue}if(N==="/"){g=y;continue}}N==="["?u++:N==="]"&&u--}const x=c.length===0?i:i.substring(p),w=x.startsWith(Qt),j=w?x.substring(1):x,f=g&&g>p?g-p:void 0;return{modifiers:c,hasImportantModifier:w,baseClassName:j,maybePostfixModifierPosition:f}};return a?i=>a({className:i,parseClassName:l}):l},ja=r=>{if(r.length<=1)return r;const t=[];let a=[];return r.forEach(n=>{n[0]==="["?(t.push(...a.sort(),n),a=[]):a.push(n)}),t.push(...a.sort()),t},Sa=r=>({cache:ya(r.cacheSize),parseClassName:wa(r),...ba(r)}),Na=/\s+/,Ta=(r,t)=>{const{parseClassName:a,getClassGroupId:n,getConflictingClassGroupIds:o}=t,s=[],l=r.trim().split(Na);let i="";for(let c=l.length-1;c>=0;c-=1){const u=l[c],{modifiers:p,hasImportantModifier:g,baseClassName:x,maybePostfixModifierPosition:w}=a(u);let j=!!w,f=n(j?x.substring(0,w):x);if(!f){if(!j){i=u+(i.length>0?" "+i:i);continue}if(f=n(x),!f){i=u+(i.length>0?" "+i:i);continue}j=!1}const y=ja(p).join(":"),N=g?y+Qt:y,k=N+f;if(s.includes(k))continue;s.push(k);const O=o(f,j);for(let M=0;M<O.length;++M){const Z=O[M];s.push(N+Z)}i=u+(i.length>0?" "+i:i)}return i};function ka(){let r=0,t,a,n="";for(;r<arguments.length;)(t=arguments[r++])&&(a=Yt(t))&&(n&&(n+=" "),n+=a);return n}const Yt=r=>{if(typeof r=="string")return r;let t,a="";for(let n=0;n<r.length;n++)r[n]&&(t=Yt(r[n]))&&(a&&(a+=" "),a+=t);return a};function Ca(r,...t){let a,n,o,s=l;function l(c){const u=t.reduce((p,g)=>g(p),r());return a=Sa(u),n=a.cache.get,o=a.cache.set,s=i,i(c)}function i(c){const u=n(c);if(u)return u;const p=Ta(c,a);return o(c,p),p}return function(){return s(ka.apply(null,arguments))}}const v=r=>{const t=a=>a[r]||[];return t.isThemeGetter=!0,t},Jt=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ra=/^\d+\/\d+$/,qa=new Set(["px","full","screen"]),Ba=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,za=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ma=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Aa=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Fa=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,q=r=>V(r)||qa.has(r)||Ra.test(r),B=r=>D(r,"length",Wa),V=r=>!!r&&!Number.isNaN(Number(r)),De=r=>D(r,"number",V),L=r=>!!r&&Number.isInteger(Number(r)),_a=r=>r.endsWith("%")&&V(r.slice(0,-1)),m=r=>Jt.test(r),z=r=>Ba.test(r),Pa=new Set(["length","size","percentage"]),Ia=r=>D(r,Pa,ea),Va=r=>D(r,"position",ea),Ea=new Set(["image","url"]),Da=r=>D(r,Ea,Ga),Oa=r=>D(r,"",La),G=()=>!0,D=(r,t,a)=>{const n=Jt.exec(r);return n?n[1]?typeof t=="string"?n[1]===t:t.has(n[1]):a(n[2]):!1},Wa=r=>za.test(r)&&!Ma.test(r),ea=()=>!1,La=r=>Aa.test(r),Ga=r=>Fa.test(r),Ha=()=>{const r=v("colors"),t=v("spacing"),a=v("blur"),n=v("brightness"),o=v("borderColor"),s=v("borderRadius"),l=v("borderSpacing"),i=v("borderWidth"),c=v("contrast"),u=v("grayscale"),p=v("hueRotate"),g=v("invert"),x=v("gap"),w=v("gradientColorStops"),j=v("gradientColorStopPositions"),f=v("inset"),y=v("margin"),N=v("opacity"),k=v("padding"),O=v("saturate"),M=v("scale"),Z=v("sepia"),Qe=v("skew"),Ye=v("space"),Je=v("translate"),Pe=()=>["auto","contain","none"],Ie=()=>["auto","hidden","clip","visible","scroll"],Ve=()=>["auto",m,t],h=()=>[m,t],er=()=>["",q,B],Q=()=>["auto",V,m],rr=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Y=()=>["solid","dashed","dotted","double","none"],tr=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Ee=()=>["start","end","center","between","around","evenly","stretch"],W=()=>["","0",m],ar=()=>["auto","avoid","all","avoid-page","page","left","right","column"],R=()=>[V,m];return{cacheSize:500,separator:":",theme:{colors:[G],spacing:[q,B],blur:["none","",z,m],brightness:R(),borderColor:[r],borderRadius:["none","","full",z,m],borderSpacing:h(),borderWidth:er(),contrast:R(),grayscale:W(),hueRotate:R(),invert:W(),gap:h(),gradientColorStops:[r],gradientColorStopPositions:[_a,B],inset:Ve(),margin:Ve(),opacity:R(),padding:h(),saturate:R(),scale:R(),sepia:W(),skew:R(),space:h(),translate:h()},classGroups:{aspect:[{aspect:["auto","square","video",m]}],container:["container"],columns:[{columns:[z]}],"break-after":[{"break-after":ar()}],"break-before":[{"break-before":ar()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...rr(),m]}],overflow:[{overflow:Ie()}],"overflow-x":[{"overflow-x":Ie()}],"overflow-y":[{"overflow-y":Ie()}],overscroll:[{overscroll:Pe()}],"overscroll-x":[{"overscroll-x":Pe()}],"overscroll-y":[{"overscroll-y":Pe()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[f]}],"inset-x":[{"inset-x":[f]}],"inset-y":[{"inset-y":[f]}],start:[{start:[f]}],end:[{end:[f]}],top:[{top:[f]}],right:[{right:[f]}],bottom:[{bottom:[f]}],left:[{left:[f]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",L,m]}],basis:[{basis:Ve()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",m]}],grow:[{grow:W()}],shrink:[{shrink:W()}],order:[{order:["first","last","none",L,m]}],"grid-cols":[{"grid-cols":[G]}],"col-start-end":[{col:["auto",{span:["full",L,m]},m]}],"col-start":[{"col-start":Q()}],"col-end":[{"col-end":Q()}],"grid-rows":[{"grid-rows":[G]}],"row-start-end":[{row:["auto",{span:[L,m]},m]}],"row-start":[{"row-start":Q()}],"row-end":[{"row-end":Q()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",m]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",m]}],gap:[{gap:[x]}],"gap-x":[{"gap-x":[x]}],"gap-y":[{"gap-y":[x]}],"justify-content":[{justify:["normal",...Ee()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Ee(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Ee(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[k]}],px:[{px:[k]}],py:[{py:[k]}],ps:[{ps:[k]}],pe:[{pe:[k]}],pt:[{pt:[k]}],pr:[{pr:[k]}],pb:[{pb:[k]}],pl:[{pl:[k]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[Ye]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[Ye]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",m,t]}],"min-w":[{"min-w":[m,t,"min","max","fit"]}],"max-w":[{"max-w":[m,t,"none","full","min","max","fit","prose",{screen:[z]},z]}],h:[{h:[m,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[m,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[m,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[m,t,"auto","min","max","fit"]}],"font-size":[{text:["base",z,B]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",De]}],"font-family":[{font:[G]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",m]}],"line-clamp":[{"line-clamp":["none",V,De]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",q,m]}],"list-image":[{"list-image":["none",m]}],"list-style-type":[{list:["none","disc","decimal",m]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[N]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[N]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Y(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",q,B]}],"underline-offset":[{"underline-offset":["auto",q,m]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:h()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",m]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",m]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[N]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...rr(),Va]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ia]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Da]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[j]}],"gradient-via-pos":[{via:[j]}],"gradient-to-pos":[{to:[j]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[N]}],"border-style":[{border:[...Y(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[N]}],"divide-style":[{divide:Y()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-s":[{"border-s":[o]}],"border-color-e":[{"border-e":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...Y()]}],"outline-offset":[{"outline-offset":[q,m]}],"outline-w":[{outline:[q,B]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:er()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[N]}],"ring-offset-w":[{"ring-offset":[q,B]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",z,Oa]}],"shadow-color":[{shadow:[G]}],opacity:[{opacity:[N]}],"mix-blend":[{"mix-blend":[...tr(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":tr()}],filter:[{filter:["","none"]}],blur:[{blur:[a]}],brightness:[{brightness:[n]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",z,m]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[g]}],saturate:[{saturate:[O]}],sepia:[{sepia:[Z]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[a]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[N]}],"backdrop-saturate":[{"backdrop-saturate":[O]}],"backdrop-sepia":[{"backdrop-sepia":[Z]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",m]}],duration:[{duration:R()}],ease:[{ease:["linear","in","out","in-out",m]}],delay:[{delay:R()}],animate:[{animate:["none","spin","ping","pulse","bounce",m]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[M]}],"scale-x":[{"scale-x":[M]}],"scale-y":[{"scale-y":[M]}],rotate:[{rotate:[L,m]}],"translate-x":[{"translate-x":[Je]}],"translate-y":[{"translate-y":[Je]}],"skew-x":[{"skew-x":[Qe]}],"skew-y":[{"skew-y":[Qe]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",m]}],accent:[{accent:["auto",r]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",m]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":h()}],"scroll-mx":[{"scroll-mx":h()}],"scroll-my":[{"scroll-my":h()}],"scroll-ms":[{"scroll-ms":h()}],"scroll-me":[{"scroll-me":h()}],"scroll-mt":[{"scroll-mt":h()}],"scroll-mr":[{"scroll-mr":h()}],"scroll-mb":[{"scroll-mb":h()}],"scroll-ml":[{"scroll-ml":h()}],"scroll-p":[{"scroll-p":h()}],"scroll-px":[{"scroll-px":h()}],"scroll-py":[{"scroll-py":h()}],"scroll-ps":[{"scroll-ps":h()}],"scroll-pe":[{"scroll-pe":h()}],"scroll-pt":[{"scroll-pt":h()}],"scroll-pr":[{"scroll-pr":h()}],"scroll-pb":[{"scroll-pb":h()}],"scroll-pl":[{"scroll-pl":h()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",m]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[q,B,De]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},$a=Ca(Ha);function d(...r){return $a(xa(r))}function T({className:r,variant:t="default",size:a="default",...n}){return e.jsx("button",{className:d("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--btn-radius)] text-[13px] font-medium transition-all duration-200 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",t==="default"&&"bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]",t==="secondary"&&"bg-transparent text-[var(--text-primary)] border border-[var(--border-main)] hover:border-[var(--accent)]",t==="ghost"&&"bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]",t==="danger"&&"bg-[var(--error)] text-white hover:opacity-90",a==="default"&&"h-9 px-[18px] py-2",a==="sm"&&"h-8 px-3 text-[12px]",a==="lg"&&"h-10 px-6 text-[14px]",a==="icon"&&"h-8 w-8",r),...n})}T.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'secondary' | 'ghost' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'default' | 'sm' | 'lg' | 'icon'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'icon'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};function We({className:r,...t}){return e.jsx("div",{className:d("rounded-[var(--card-radius)] border-[var(--card-border)] bg-[var(--bg-card)] shadow-[var(--card-shadow)] p-5 hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent)] transition-all duration-300",r),...t})}function Le({className:r,...t}){return e.jsx("div",{className:d("flex flex-col gap-2 p-5 pb-3",r),...t})}function Ge({className:r,...t}){return e.jsx("h3",{className:d("text-[16px] font-semibold text-[var(--text-primary)]",r),...t})}function He({className:r,...t}){return e.jsx("div",{className:d("p-5 pt-0",r),...t})}We.__docgenInfo={description:"",methods:[],displayName:"Card"};Le.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};Ge.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};He.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const or={up:"bg-[var(--up-bg)] text-[var(--up)]",down:"bg-[var(--down-bg)] text-[var(--down)]",flat:"bg-[var(--bg-card-hover)] text-[var(--flat)]",success:"bg-[var(--bg-card-hover)] text-[var(--success)]",warning:"bg-[var(--bg-card-hover)] text-[var(--warning)]",error:"bg-[var(--bg-card-hover)] text-[var(--error)]",default:"bg-[var(--bg-card-hover)] text-[var(--text-secondary)]"};function C({variant:r="default",className:t,children:a}){return e.jsx("span",{className:d("inline-flex items-center rounded-[4px] px-2 py-[2px] text-[11px] font-medium leading-[1.3]",or[r]||or.default,t),children:a})}C.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'up' | 'down' | 'flat' | 'success' | 'warning' | 'error' | 'default'",elements:[{name:"literal",value:"'up'"},{name:"literal",value:"'down'"},{name:"literal",value:"'flat'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function H({className:r,hasError:t,prefix:a,suffix:n,...o}){const s=e.jsx("input",{className:d("flex h-9 w-full rounded-[6px] border bg-[var(--bg-input)] px-3 py-2 text-[13px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] transition-colors duration-200 file:border-0 file:bg-transparent file:text-[13px] file:font-medium focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",t?"border-[var(--error)] focus-visible:border-[var(--error)]":"border-[var(--border-input)] focus-visible:border-[var(--accent)]",a&&"pl-8",n&&"pr-8",r),...o});return!a&&!n?s:e.jsxs("div",{className:"relative",children:[a&&e.jsx("div",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] pointer-events-none",children:a}),s,n&&e.jsx("div",{className:"absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] pointer-events-none",children:n})]})}H.__docgenInfo={description:"",methods:[],displayName:"Input",props:{hasError:{required:!1,tsType:{name:"boolean"},description:""},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},suffix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function ra({className:r,...t}){return e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{className:d("w-full caption-bottom text-[13px] text-[var(--text-primary)]",r),...t})})}function ta({className:r,...t}){return e.jsx("thead",{className:d("[&_tr]:border-b [&_tr]:border-[var(--border-sub)]",r),...t})}function ze({className:r,...t}){return e.jsx("th",{className:d("h-10 px-5 text-left align-middle text-[11px] font-medium text-[var(--text-secondary)] tracking-[0.03em]",r),...t})}function Me({className:r,...t}){return e.jsx("tr",{className:d("border-b border-[var(--border-sub)] transition-colors hover:bg-[var(--bg-card-hover)]",r),...t})}function A({className:r,...t}){return e.jsx("td",{className:d("p-3 px-5 align-middle",r),...t})}ra.__docgenInfo={description:"",methods:[],displayName:"Table"};ta.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};ze.__docgenInfo={description:"",methods:[],displayName:"TableHead"};Me.__docgenInfo={description:"",methods:[],displayName:"TableRow"};A.__docgenInfo={description:"",methods:[],displayName:"TableCell"};function Ua(r){return r==null?"flat":r>0?"up":r<0?"down":"flat"}const Ka={up:"text-[var(--up)]",down:"text-[var(--down)]",flat:"text-[var(--flat)]"},Xa={up:"▲",down:"▼",flat:"◆"};function F({value:r,change:t,changePercent:a,showArrow:n=!0,showSign:o=!0,precision:s=2,mono:l=!0,className:i}){const c=Ua(t);return e.jsxs("span",{className:d("inline-flex items-baseline gap-1.5 font-variant-numeric-tabular",l&&"font-[var(--font-mono)]",Ka[c],i),style:{fontVariantNumeric:"tabular-nums"},children:[n&&e.jsx("span",{className:"text-[0.7em] leading-none",children:Xa[c]}),e.jsx("span",{className:"text-[inherit] font-medium tracking-[-0.02em]",children:r.toFixed(s)}),(t!=null||a!=null)&&e.jsxs("span",{className:"text-[0.85em] opacity-90",children:[o&&t!=null&&t>0&&"+",t!=null&&t.toFixed(s),a!=null&&` (${a>0?"+":""}${a.toFixed(2)}%)`]})]})}F.__docgenInfo={description:"",methods:[],displayName:"PriceDisplay",props:{value:{required:!0,tsType:{name:"number"},description:""},change:{required:!1,tsType:{name:"number"},description:""},changePercent:{required:!1,tsType:{name:"number"},description:""},showArrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showSign:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},precision:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},mono:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};function Za(r){return r>0?"up":r<0?"down":"flat"}const Qa={up:"bg-[var(--up-bg)] text-[var(--up)]",down:"bg-[var(--down-bg)] text-[var(--down)]",flat:"bg-[var(--bg-card-hover)] text-[var(--flat)]"};function I({value:r,showPercent:t=!0,showSign:a=!0,size:n="md",className:o}){const s=Za(r),l=Math.abs(r);return e.jsxs("span",{className:d("inline-flex items-center rounded-[4px] font-[var(--font-mono)] font-medium leading-none",Qa[s],n==="sm"?"px-1.5 py-[3px] text-[11px]":"px-2.5 py-[5px] text-[13px]",o),style:{fontVariantNumeric:"tabular-nums"},children:[a&&r!==0&&(r>0?"+":"−"),l.toFixed(2),t&&"%"]})}I.__docgenInfo={description:"",methods:[],displayName:"ChangeBadge",props:{value:{required:!0,tsType:{name:"number"},description:""},showPercent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showSign:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};function aa({className:r,options:t,placeholder:a,hasError:n,...o}){return e.jsxs("select",{className:d("flex h-9 w-full rounded-[6px] border bg-[var(--bg-input)] px-3 py-2 text-[13px] text-[var(--text-primary)] transition-colors duration-200 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 appearance-none bg-[length:16px] bg-[right_12px_center] bg-no-repeat",n?"border-[var(--error)] focus-visible:border-[var(--error)]":"border-[var(--border-input)] focus-visible:border-[var(--accent)]",r),style:{backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2363636a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`},...o,children:[a&&e.jsx("option",{value:"",disabled:!0,children:a}),t.map(s=>e.jsx("option",{value:s.value,disabled:s.disabled,children:s.label},s.value))]})}aa.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};function na({tabs:r,value:t,onChange:a,className:n}){return e.jsx("div",{className:d("inline-flex items-center gap-1 rounded-[8px] bg-[var(--bg-input)] p-1",n),role:"tablist",children:r.map(o=>e.jsx("button",{role:"tab","aria-selected":t===o.value,disabled:o.disabled,onClick:()=>a(o.value),className:d("rounded-[6px] px-3.5 py-1.5 text-[12px] font-medium transition-all duration-200",t===o.value?"bg-[var(--bg-card)] text-[var(--text-primary)] shadow-xs":"text-[var(--text-secondary)] hover:text-[var(--text-primary)]",o.disabled&&"opacity-40 cursor-not-allowed"),children:o.label},o.value))})}na.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"Tab"}],raw:"Tab[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Ya={up:"bg-[var(--up-bg)] text-[var(--up)] border-[var(--up)]/20",down:"bg-[var(--down-bg)] text-[var(--down)] border-[var(--down)]/20",accent:"bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/20",default:"bg-[var(--bg-card-hover)] text-[var(--text-secondary)] border-[var(--border-sub)]"};function $({variant:r="default",size:t="md",className:a,children:n,onRemove:o}){return e.jsxs("span",{className:d("inline-flex items-center gap-1 rounded-[4px] border font-medium leading-none",Ya[r],t==="sm"?"px-1.5 py-[2px] text-[10px]":"px-2 py-[3px] text-[11px]",a),children:[n,o&&e.jsx("button",{type:"button",onClick:o,className:"ml-0.5 opacity-50 hover:opacity-100 transition-opacity","aria-label":"Remove",children:"×"})]})}$.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{variant:{required:!1,tsType:{name:"union",raw:"'up' | 'down' | 'accent' | 'default'",elements:[{name:"literal",value:"'up'"},{name:"literal",value:"'down'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function Ae({code:r,name:t,price:a,change:n,changePercent:o,volume:s,className:l,onClick:i}){const u=(n>=0?"up":"down")==="up"?"var(--up)":"var(--down)";return e.jsxs("div",{className:d("rounded-[var(--card-radius)] border bg-[var(--bg-card)] p-4 transition-all duration-200","hover:bg-[var(--bg-card-hover)]",i&&"cursor-pointer",l),style:n!==0?{borderLeft:`3px solid ${u}`}:void 0,onClick:i,role:i?"button":void 0,tabIndex:i?0:void 0,onKeyDown:i?p=>{(p.key==="Enter"||p.key===" ")&&i()}:void 0,children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-[15px] font-semibold text-[var(--text-primary)] tracking-[-0.02em]",children:t}),e.jsx("div",{className:"text-[11px] text-[var(--text-tertiary)] font-[var(--font-mono)] mt-0.5",children:r})]})}),e.jsx(F,{value:a,change:n,changePercent:o,showArrow:!1,showSign:!0,precision:2}),s&&e.jsx("div",{className:"text-[11px] text-[var(--text-tertiary)] mt-2",children:s})]})}Ae.__docgenInfo={description:"",methods:[],displayName:"StockCard",props:{code:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},change:{required:!0,tsType:{name:"number"},description:""},changePercent:{required:!0,tsType:{name:"number"},description:""},volume:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ja={sm:"max-w-sm",md:"max-w-lg",lg:"max-w-2xl"};function sa({open:r,onClose:t,title:a,children:n,className:o,size:s="md"}){const l=S.useCallback(i=>{i.key==="Escape"&&t()},[t]);return S.useEffect(()=>(r&&(document.addEventListener("keydown",l),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",l),document.body.style.overflow=""}),[r,l]),r?e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",role:"dialog","aria-modal":"true",children:[e.jsx("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:t}),e.jsxs("div",{className:d("relative w-full rounded-[var(--card-radius)] border border-[var(--border-main)] bg-[var(--bg-card)] shadow-lg p-6 mx-4",Ja[s],o),children:[a&&e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-[16px] font-semibold text-[var(--text-primary)]",children:a}),e.jsx("button",{onClick:t,className:"text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors text-[20px] leading-none","aria-label":"Close",children:"×"})]}),n]})]}):null}sa.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const en={top:"bottom-full left-1/2 -translate-x-1/2 mb-2",bottom:"top-full left-1/2 -translate-x-1/2 mt-2",left:"right-full top-1/2 -translate-y-1/2 mr-2",right:"left-full top-1/2 -translate-y-1/2 ml-2"},rn={top:"top-full left-1/2 -translate-x-1/2 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[var(--bg-card-hover)]",bottom:"bottom-full left-1/2 -translate-x-1/2 border-l-[5px] border-r-[5px] border-b-[5px] border-l-transparent border-r-transparent border-b-[var(--bg-card-hover)]",left:"left-full top-1/2 -translate-y-1/2 border-t-[5px] border-b-[5px] border-l-[5px] border-t-transparent border-b-transparent border-l-[var(--bg-card-hover)]",right:"right-full top-1/2 -translate-y-1/2 border-t-[5px] border-b-[5px] border-r-[5px] border-t-transparent border-b-transparent border-r-[var(--bg-card-hover)]"};function $e({content:r,children:t,position:a="top",className:n}){const[o,s]=S.useState(!1);return e.jsxs("div",{className:d("relative inline-flex",n),onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onFocus:()=>s(!0),onBlur:()=>s(!1),children:[t,o&&e.jsx("div",{className:d("absolute z-50 pointer-events-none",en[a]),children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"rounded-[6px] bg-[var(--bg-card-hover)] border border-[var(--border-sub)] px-2.5 py-1.5 text-[12px] text-[var(--text-primary)] whitespace-nowrap shadow-md",children:r}),e.jsx("div",{className:d("absolute",rn[a])})]})})]})}$e.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};function oa({checked:r,onChange:t,disabled:a,className:n,id:o}){return e.jsx("button",{id:o,type:"button",role:"switch","aria-checked":r,disabled:a,onClick:()=>t(!r),className:d("inline-flex h-[22px] w-[38px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",r?"bg-[var(--accent)]":"bg-[var(--border-main)]",n),children:e.jsx("span",{className:d("pointer-events-none block h-[16px] w-[16px] rounded-full bg-white shadow-sm ring-0 transition-transform duration-200",r?"translate-x-[18px]":"translate-x-[1px]")})})}oa.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};function la({data:r,columns:t,className:a,onRowClick:n}){const[o,s]=S.useState(null),[l,i]=S.useState("desc"),c=p=>{o===p?i(g=>g==="asc"?"desc":"asc"):(s(p),i("desc"))},u=[...r].sort((p,g)=>{if(!o)return 0;const x=p[o],w=g[o];if(typeof x=="number"&&typeof w=="number")return l==="asc"?x-w:w-x;const j=String(x??""),f=String(w??"");return l==="asc"?j.localeCompare(f):f.localeCompare(j)});return e.jsx("div",{className:d("relative w-full overflow-auto rounded-[var(--card-radius)] border border-[var(--border-main)] bg-[var(--bg-card)]",a),children:e.jsxs("table",{className:"w-full caption-bottom text-[13px] text-[var(--text-primary)]",children:[e.jsx("thead",{children:e.jsx("tr",{className:"border-b border-[var(--border-sub)]",children:t.map(p=>e.jsxs("th",{className:d("h-10 px-5 text-[11px] font-medium text-[var(--text-secondary)] tracking-[0.03em]",p.align==="right"?"text-right":"text-left",p.sortable&&"cursor-pointer select-none hover:text-[var(--text-primary)] transition-colors"),onClick:()=>p.sortable&&c(p.key),children:[p.label,p.sortable&&o===p.key&&e.jsx("span",{className:"ml-1 text-[10px]",children:l==="asc"?"▲":"▼"})]},p.key))})}),e.jsx("tbody",{children:u.map((p,g)=>e.jsx("tr",{className:d("border-b border-[var(--border-sub)] transition-colors hover:bg-[var(--bg-card-hover)]",n&&"cursor-pointer"),onClick:()=>n==null?void 0:n(p),children:t.map(x=>e.jsx("td",{className:d("p-3 px-5",x.align==="right"?"text-right font-[var(--font-mono)] font-variant-numeric-tabular-nums":"text-left"),style:x.align==="right"?{fontVariantNumeric:"tabular-nums"}:void 0,children:x.render?x.render(p):String(p[x.key]??"")},x.key))},g))})]})})}la.__docgenInfo={description:"",methods:[],displayName:"MarketTable",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"MarketColumn",elements:[{name:"T"}],raw:"MarketColumn<T>"}],raw:"MarketColumn<T>[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T) => void",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"void"}}},description:""}}};function Fe({className:r,hasError:t,showCount:a,maxLength:n,onChange:o,value:s,defaultValue:l,...i}){const[c,u]=S.useState((l==null?void 0:l.toString())??""),p=s!==void 0,g=p?s.toString():c;return e.jsxs("div",{className:"relative",children:[e.jsx("textarea",{className:d("flex min-h-[80px] w-full rounded-[6px] border bg-[var(--bg-input)] px-3 py-2 text-[13px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] transition-colors duration-200 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 resize-y",t?"border-[var(--error)] focus-visible:border-[var(--error)]":"border-[var(--border-input)] focus-visible:border-[var(--accent)]",r),value:p?s:void 0,defaultValue:p?void 0:l,onChange:x=>{p||u(x.target.value),o==null||o(x)},maxLength:n,...i}),a&&n&&e.jsxs("div",{className:"absolute bottom-2 right-3 text-[10px] text-[var(--text-tertiary)] font-[var(--font-mono)] pointer-events-none",children:[g.length,"/",n]})]})}Fe.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{hasError:{required:!1,tsType:{name:"boolean"},description:""},showCount:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""}}};function ia({options:r,value:t=[],onChange:a,direction:n="column",className:o}){const s=r.every(u=>t.includes(u.value)),l=r.some(u=>t.includes(u.value)),i=()=>{a==null||a(s?[]:r.map(u=>u.value))},c=u=>{a==null||a(t.includes(u)?t.filter(p=>p!==u):[...t,u])};return e.jsxs("div",{className:d("flex gap-2",n==="column"?"flex-col":"flex-row flex-wrap items-center",o),children:[r.length>1&&e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer group",children:[e.jsx("input",{type:"checkbox",checked:s,ref:u=>{u&&(u.indeterminate=l&&!s)},onChange:i,className:"sr-only"}),e.jsx("span",{className:d("flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border transition-colors duration-150",s?"border-[var(--accent)] bg-[var(--accent)]":l?"border-[var(--accent)] bg-[var(--accent)]/30":"border-[var(--border-input)] group-hover:border-[var(--accent)]"),children:(s||l)&&e.jsx("svg",{viewBox:"0 0 12 12",className:"h-2.5 w-2.5 text-white",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s?e.jsx("polyline",{points:"2 6 5 9 10 2"}):e.jsx("line",{x1:"2",y1:"6",x2:"10",y2:"6"})})}),e.jsx("span",{className:"text-[12px] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors",children:"Select All"})]}),r.map(u=>{const p=t.includes(u.value);return e.jsxs("label",{className:d("flex items-center gap-2 cursor-pointer group",u.disabled&&"opacity-40 cursor-not-allowed"),children:[e.jsx("input",{type:"checkbox",checked:p,disabled:u.disabled,onChange:()=>c(u.value),className:"sr-only"}),e.jsx("span",{className:d("flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border transition-colors duration-150",p?"border-[var(--accent)] bg-[var(--accent)]":"border-[var(--border-input)] group-hover:border-[var(--accent)]"),children:p&&e.jsx("svg",{viewBox:"0 0 12 12",className:"h-2.5 w-2.5 text-white",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"2 6 5 9 10 2"})})}),e.jsx("span",{className:"text-[13px] text-[var(--text-primary)]",children:u.label})]},u.value)})]})}ia.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"CheckboxOption"}],raw:"CheckboxOption[]"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"",defaultValue:{value:"'column'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};function Ue({options:r,value:t,onChange:a,direction:n="column",variant:o="default",className:s}){return o==="button"?e.jsx("div",{className:d("inline-flex rounded-[6px] bg-[var(--bg-input)] p-1",s),role:"radiogroup",children:r.map(l=>e.jsx("button",{role:"radio","aria-checked":t===l.value,disabled:l.disabled,onClick:()=>a==null?void 0:a(l.value),className:d("rounded-[4px] px-3.5 py-1.5 text-[12px] font-medium transition-all duration-200",t===l.value?"bg-[var(--bg-card)] text-[var(--text-primary)] shadow-xs":"text-[var(--text-secondary)] hover:text-[var(--text-primary)]",l.disabled&&"opacity-40 cursor-not-allowed"),children:l.label},l.value))}):e.jsx("div",{className:d("flex gap-2",n==="column"?"flex-col":"flex-row flex-wrap items-center",s),role:"radiogroup",children:r.map(l=>e.jsxs("label",{className:d("flex items-center gap-2 cursor-pointer group",l.disabled&&"opacity-40 cursor-not-allowed"),children:[e.jsx("input",{type:"radio",checked:t===l.value,disabled:l.disabled,onChange:()=>a==null?void 0:a(l.value),className:"sr-only"}),e.jsx("span",{className:d("flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors duration-150",t===l.value?"border-[var(--accent)]":"border-[var(--border-input)] group-hover:border-[var(--accent)]"),children:t===l.value&&e.jsx("span",{className:"h-2 w-2 rounded-full bg-[var(--accent)]"})}),e.jsx("span",{className:"text-[13px] text-[var(--text-primary)]",children:l.label})]},l.value))})}Ue.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioOption"}],raw:"RadioOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"",defaultValue:{value:"'column'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'button'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'button'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};function da({value:r,defaultValue:t=50,min:a=0,max:n=100,step:o=1,onChange:s,disabled:l,className:i}){const c=r!==void 0,u=S.useRef(null),p=((c?r:t)-a)/(n-a)*100,g=S.useCallback(x=>{if(!u.current||l)return;const w=u.current.getBoundingClientRect(),j=(x-w.left)/w.width,f=Math.max(0,Math.min(1,j)),y=Math.round((a+f*(n-a))/o)*o;s==null||s(Math.max(a,Math.min(n,y)))},[a,n,o,s,l]);return e.jsx("div",{className:d("relative flex h-5 w-full touch-none items-center select-none",l&&"opacity-50 cursor-not-allowed",i),role:"slider","aria-valuemin":a,"aria-valuemax":n,"aria-valuenow":c?r:t,tabIndex:l?-1:0,onKeyDown:x=>{const w=c?r:t,j=x.key==="ArrowRight"||x.key==="ArrowUp"?1:x.key==="ArrowLeft"||x.key==="ArrowDown"?-1:0;j&&(s==null||s(Math.max(a,Math.min(n,w+j*o))))},children:e.jsxs("div",{ref:u,className:"relative h-1.5 w-full rounded-full bg-[var(--border-main)]",onClick:x=>g(x.clientX),onMouseMove:x=>x.buttons===1&&g(x.clientX),children:[e.jsx("div",{className:"absolute top-0 left-0 h-full rounded-full bg-[var(--accent)]",style:{width:`${p}%`}}),e.jsx("div",{className:d("absolute top-1/2 h-4 w-4 -translate-y-1/2 -translate-x-1/2 rounded-full border-2 border-[var(--accent)] bg-white shadow-xs transition-transform duration-150",!l&&"hover:scale-125 active:scale-110"),style:{left:`${p}%`},onMouseDown:x=>{x.preventDefault();const w=f=>g(f.clientX),j=()=>{document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",j)};document.addEventListener("mousemove",w),document.addEventListener("mouseup",j)}})]})})}da.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const tn={info:{container:"border-[var(--accent)]/20 bg-[var(--accent)]/8",icon:"text-[var(--accent)]"},success:{container:"border-[var(--success)]/20 bg-[var(--success)]/8",icon:"text-[var(--success)]"},warning:{container:"border-[var(--warning)]/20 bg-[var(--warning)]/8",icon:"text-[var(--warning)]"},error:{container:"border-[var(--error)]/20 bg-[var(--error)]/8",icon:"text-[var(--error)]"}},an={info:"ℹ️",success:"✅",warning:"⚠️",error:"❌"};function _({variant:r="info",title:t,children:a,onClose:n,className:o}){const s=tn[r];return e.jsxs("div",{className:d("relative flex gap-3 rounded-[8px] border p-4",s.container,o),role:"alert",children:[e.jsx("span",{className:d("text-[16px] leading-none mt-0.5",s.icon),children:an[r]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[t&&e.jsx("div",{className:"text-[13px] font-semibold text-[var(--text-primary)] mb-1",children:t}),e.jsx("div",{className:"text-[12px] text-[var(--text-secondary)] leading-relaxed",children:a})]}),n&&e.jsx("button",{onClick:n,className:"text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors text-[16px] leading-none self-start","aria-label":"Close",children:"×"})]})}_.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function P({value:r,max:t=100,variant:a="line",size:n="md",showLabel:o=!1,className:s}){const l=Math.max(0,Math.min(100,r/t*100)),i={sm:4,md:6,lg:10};if(a==="circle"){const u=2*Math.PI*36,p=u-l/100*u,g=i[n];return e.jsxs("div",{className:d("inline-flex items-center justify-center",s),children:[e.jsxs("svg",{width:90,height:90,className:"-rotate-90",children:[e.jsx("circle",{cx:45,cy:45,r:36,fill:"none",stroke:"var(--border-main)",strokeWidth:g}),e.jsx("circle",{cx:45,cy:45,r:36,fill:"none",stroke:"var(--accent)",strokeWidth:g,strokeLinecap:"round",strokeDasharray:u,strokeDashoffset:p,style:{transition:"stroke-dashoffset 0.4s ease"}})]}),o&&e.jsxs("span",{className:"absolute text-[13px] font-semibold text-[var(--text-primary)] font-[var(--font-mono)]",style:{fontVariantNumeric:"tabular-nums"},children:[Math.round(l),"%"]})]})}return e.jsxs("div",{className:d("flex items-center gap-3",s),children:[e.jsx("div",{className:"flex-1 rounded-full bg-[var(--border-main)]",style:{height:i[n]},children:e.jsx("div",{className:"h-full rounded-full bg-[var(--accent)] transition-all duration-400 ease-out",style:{width:`${l}%`}})}),o&&e.jsxs("span",{className:"text-[12px] text-[var(--text-secondary)] font-[var(--font-mono)] min-w-[36px] text-right",style:{fontVariantNumeric:"tabular-nums"},children:[Math.round(l),"%"]})]})}P.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!0,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'line' | 'circle'",elements:[{name:"literal",value:"'line'"},{name:"literal",value:"'circle'"}]},description:"",defaultValue:{value:"'line'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};function E({className:r,text:t,circle:a,width:n,height:o}){return e.jsx("div",{className:d("animate-pulse rounded-[4px] bg-[var(--border-main)]",t&&"h-4 w-full",a&&"rounded-full",r),style:{width:n,height:o??(t?void 0:o)},"aria-hidden":"true"})}function ca({lines:r=3,className:t}){return e.jsxs("div",{className:d("rounded-[var(--card-radius)] border border-[var(--border-sub)] bg-[var(--bg-card)] p-5 space-y-3",t),children:[e.jsx(E,{className:"h-5 w-2/3"}),Array.from({length:r}).map((a,n)=>e.jsx(E,{className:"h-3",style:{width:`${70-n*15}%`}},n))]})}E.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{className:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"boolean"},description:"适合用作文字占位"},circle:{required:!1,tsType:{name:"boolean"},description:"圆形骨架（头像等）"},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""}}};ca.__docgenInfo={description:"",methods:[],displayName:"SkeletonCard",props:{lines:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};function Ke({items:r,separator:t="/",className:a}){return e.jsx("nav",{className:d("flex items-center gap-1.5 text-[12px] text-[var(--text-tertiary)]",a),"aria-label":"Breadcrumb",children:r.map((n,o)=>e.jsxs("span",{className:"flex items-center gap-1.5",children:[o>0&&e.jsx("span",{className:"text-[var(--text-tertiary)] select-none",children:t}),n.href?e.jsx("a",{href:n.href,className:"hover:text-[var(--accent)] transition-colors",children:n.label}):e.jsx("span",{className:d(o===r.length-1?"text-[var(--text-primary)]":""),children:n.label})]},o))})}Ke.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'/'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};function ua({current:r,total:t,pageSize:a=20,onChange:n,className:o}){const s=Math.ceil(t/a);if(s<=1)return null;const l=[];for(let c=1;c<=s;c++)c===1||c===s||c>=r-1&&c<=r+1?l.push(c):l[l.length-1]!=="ellipsis"&&l.push("ellipsis");const i=(c,u)=>e.jsx("button",{onClick:()=>n(c),disabled:c===r,className:d("min-w-[30px] h-[30px] rounded-[6px] text-[12px] font-medium transition-all duration-150",c===r?"bg-[var(--accent)] text-white cursor-default":"text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]"),children:c},c);return e.jsxs("nav",{className:d("flex items-center gap-1",o),"aria-label":"Pagination",children:[e.jsx("button",{onClick:()=>n(r-1),disabled:r<=1,className:"min-w-[30px] h-[30px] rounded-[6px] text-[12px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed","aria-label":"Previous",children:"‹"}),l.map((c,u)=>c==="ellipsis"?e.jsx("span",{className:"px-1 text-[var(--text-tertiary)] select-none",children:"…"},`e${u}`):i(c)),e.jsx("button",{onClick:()=>n(r+1),disabled:r>=s,className:"min-w-[30px] h-[30px] rounded-[6px] text-[12px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed","aria-label":"Next",children:"›"})]})}ua.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{current:{required:!0,tsType:{name:"number"},description:""},total:{required:!0,tsType:{name:"number"},description:""},pageSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function pa({trigger:r,items:t,align:a="start",className:n}){const[o,s]=S.useState(!1),l=S.useRef(null);return S.useEffect(()=>{if(!o)return;const i=c=>{l.current&&!l.current.contains(c.target)&&s(!1)};return document.addEventListener("mousedown",i),()=>document.removeEventListener("mousedown",i)},[o]),e.jsxs("div",{ref:l,className:d("relative inline-block",n),children:[e.jsx("div",{onClick:()=>s(!o),children:r}),o&&e.jsx("div",{className:d("absolute z-50 mt-1 min-w-[160px] rounded-[8px] border border-[var(--border-sub)] bg-[var(--bg-card)] py-1 shadow-lg",a==="end"?"right-0":"left-0"),role:"menu",children:t.map((i,c)=>i.separator?e.jsx("div",{className:"my-1 border-t border-[var(--border-sub)]"},c):e.jsx("button",{role:"menuitem",disabled:i.disabled,onClick:()=>{var u;(u=i.onClick)==null||u.call(i),s(!1)},className:d("w-full px-3 py-1.5 text-left text-[12px] text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors",i.disabled&&"opacity-40 cursor-not-allowed"),children:i.label},c))})]})}pa.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{trigger:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownItem"}],raw:"DropdownItem[]"},description:""},align:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};function ma({items:r,multiple:t=!1,className:a}){const[n,o]=S.useState([]),s=l=>{o(i=>t?i.includes(l)?i.filter(c=>c!==l):[...i,l]:i.includes(l)?[]:[l])};return e.jsx("div",{className:d("divide-y divide-[var(--border-sub)]",a),children:r.map(l=>{const i=n.includes(l.value);return e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>s(l.value),className:"flex w-full items-center justify-between py-3 text-[13px] font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors text-left",children:[l.title,e.jsx("span",{className:d("text-[10px] text-[var(--text-tertiary)] transition-transform duration-200",i&&"rotate-180"),children:"▼"})]}),e.jsx("div",{className:d("overflow-hidden transition-all duration-200",i?"pb-3 max-h-[500px] opacity-100":"max-h-0 opacity-0"),children:e.jsx("div",{className:"text-[12px] text-[var(--text-secondary)] leading-relaxed",children:l.content})})]},l.value)})})}ma.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};function U({orientation:r="horizontal",label:t,className:a}){return r==="vertical"?e.jsx("div",{className:d("inline-block w-px self-stretch bg-[var(--border-sub)]",a),role:"separator","aria-orientation":"vertical"}):t?e.jsxs("div",{className:d("flex items-center gap-3",a),role:"separator","aria-orientation":"horizontal",children:[e.jsx("div",{className:"flex-1 h-px bg-[var(--border-sub)]"}),e.jsx("span",{className:"text-[11px] text-[var(--text-tertiary)] whitespace-nowrap",children:t}),e.jsx("div",{className:"flex-1 h-px bg-[var(--border-sub)]"})]}):e.jsx("div",{className:d("h-px w-full bg-[var(--border-sub)]",a),role:"separator","aria-orientation":"horizontal"})}U.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const nn={sm:6,md:12,lg:20};function X({direction:r="horizontal",size:t="md",wrap:a,className:n,children:o}){const s=typeof t=="number"?t:nn[t];return e.jsx("div",{className:d("flex",r==="vertical"?"flex-col":"flex-row",a&&"flex-wrap",n),style:{gap:s},children:o})}X.__docgenInfo={description:"",methods:[],displayName:"Space",props:{direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | number",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"number"}]},description:"",defaultValue:{value:"'md'",computed:!1}},wrap:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const sn={sm:6,md:12,lg:20},on={start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch",baseline:"items-baseline"},ln={start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between",around:"justify-around",evenly:"justify-evenly"};function b({direction:r="row",align:t,justify:a,gap:n,wrap:o,className:s,children:l}){return e.jsx("div",{className:d("flex",r==="column"?"flex-col":r==="row-reverse"?"flex-row-reverse":r==="column-reverse"?"flex-col-reverse":"flex-row",t&&on[t],a&&ln[a],o&&"flex-wrap",s),style:n!==void 0?{gap:typeof n=="number"?n:sn[n]}:void 0,children:l})}b.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column' | 'row-reverse' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column-reverse'"}]},description:"",defaultValue:{value:"'row'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch' | 'baseline'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'baseline'"}]},description:""},justify:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'between'"},{name:"literal",value:"'around'"},{name:"literal",value:"'evenly'"}]},description:""},gap:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | number",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"number"}]},description:""},wrap:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const dn={sm:"w-6 h-6 text-[10px]",md:"w-8 h-8 text-[12px]",lg:"w-10 h-10 text-[14px]"};function K({src:r,alt:t,fallback:a,size:n="md",className:o}){return e.jsx("div",{className:d("relative inline-flex items-center justify-center rounded-full bg-[var(--bg-card-hover)] text-[var(--text-secondary)] font-medium overflow-hidden shrink-0",dn[n],o),children:r?e.jsx("img",{src:r,alt:t??"",className:"h-full w-full object-cover"}):e.jsx("span",{children:a??(t==null?void 0:t[0])??"?"})})}K.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},fallback:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};function Xe({icon:r,title:t,description:a,action:n,className:o}){return e.jsxs("div",{className:d("flex flex-col items-center justify-center py-12 px-4",o),children:[e.jsx("div",{className:"text-[32px] mb-4 opacity-40",children:r??e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",className:"text-[var(--text-tertiary)]",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e.jsx("line",{x1:"9",y1:"21",x2:"9",y2:"9"})]})}),t&&e.jsx("div",{className:"text-[14px] font-medium text-[var(--text-primary)] mb-1",children:t}),a&&e.jsx("div",{className:"text-[12px] text-[var(--text-tertiary)] max-w-[240px] text-center mb-4",children:a}),n&&e.jsx("div",{children:n})]})}Xe.__docgenInfo={description:"",methods:[],displayName:"Empty",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function _e({title:r,value:t,precision:a,prefix:n,suffix:o,trend:s,className:l}){const i=typeof t=="number"&&a!==void 0?t.toFixed(a):String(t);return e.jsxs("div",{className:d("flex flex-col",l),children:[r&&e.jsx("div",{className:"text-[12px] text-[var(--text-tertiary)] mb-1",children:r}),e.jsxs("div",{className:d("inline-flex items-baseline gap-1.5 font-[var(--font-mono)] text-[24px] font-semibold tracking-[-0.03em]",s==="up"&&"text-[var(--up)]",s==="down"&&"text-[var(--down)]"),style:{fontVariantNumeric:"tabular-nums"},children:[n&&e.jsx("span",{className:"text-[0.7em] font-normal",children:n}),i,o&&e.jsx("span",{className:"text-[0.6em] font-normal text-[var(--text-secondary)]",children:o})]})]})}_e.__docgenInfo={description:"",methods:[],displayName:"Statistic",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},value:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},precision:{required:!1,tsType:{name:"number"},description:""},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},suffix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trend:{required:!1,tsType:{name:"union",raw:"'up' | 'down'",elements:[{name:"literal",value:"'up'"},{name:"literal",value:"'down'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const J={name:"Button",render:()=>e.jsxs(X,{children:[e.jsx(T,{variant:"default",children:"Primary"}),e.jsx(T,{variant:"secondary",children:"Secondary"}),e.jsx(T,{variant:"ghost",children:"Ghost"}),e.jsx(T,{variant:"danger",children:"Danger"}),e.jsx(T,{size:"sm",children:"Small"}),e.jsx(T,{disabled:!0,children:"Disabled"})]})},ee={name:"Card",render:()=>e.jsxs(X,{children:[e.jsxs(We,{style:{width:260},children:[e.jsx(Le,{children:e.jsx(Ge,{children:"SSE Index"})}),e.jsx(He,{children:e.jsx(F,{value:3382.45,change:41.23,changePercent:1.23})})]}),e.jsxs(We,{style:{width:260},children:[e.jsx(Le,{children:e.jsx(Ge,{children:"SZSE Index"})}),e.jsx(He,{children:e.jsx(F,{value:10876.32,change:-48.9,changePercent:-.45})})]})]})},re={name:"Badge",render:()=>e.jsxs(b,{gap:"md",wrap:!0,children:[e.jsx(C,{variant:"up",children:"+2.13%"}),e.jsx(C,{variant:"down",children:"-1.34%"}),e.jsx(C,{variant:"flat",children:"0.00%"}),e.jsx(C,{variant:"success",children:"Online"}),e.jsx(C,{variant:"warning",children:"Delayed"}),e.jsx(C,{variant:"error",children:"Offline"})]})},te={name:"Tag",render:()=>e.jsxs(b,{gap:"md",wrap:!0,children:[e.jsx($,{variant:"up",children:"Bullish"}),e.jsx($,{variant:"down",children:"Bearish"}),e.jsx($,{variant:"accent",children:"Signal"}),e.jsx($,{onRemove:()=>{},children:"Dismiss"})]})},ae={name:"Input",render:()=>e.jsxs(b,{direction:"column",gap:"md",style:{maxWidth:300},children:[e.jsx(H,{placeholder:"Search stocks..."}),e.jsx(H,{placeholder:"With error",hasError:!0}),e.jsx(H,{prefix:"$",placeholder:"Amount"}),e.jsx(H,{disabled:!0,value:"Disabled"})]})},ne={name:"Textarea",render:()=>e.jsxs(b,{direction:"column",gap:"md",style:{maxWidth:400},children:[e.jsx(Fe,{placeholder:"Write notes..."}),e.jsx(Fe,{hasError:!0,placeholder:"Error state"}),e.jsx(Fe,{showCount:!0,maxLength:200,defaultValue:"Hello"})]})},se={name:"Checkbox",render:()=>{const[r,t]=S.useState(["a"]);return e.jsxs(b,{direction:"column",gap:"md",children:[e.jsx(ia,{options:[{value:"a",label:"Apple"},{value:"b",label:"Banana"},{value:"c",label:"Cherry"}],value:r,onChange:t}),e.jsxs("div",{style:{fontSize:11,color:"var(--text-tertiary)"},children:["Selected: ",r.join(", ")||"(none)"]})]})}},oe={name:"RadioGroup",render:()=>{const[r,t]=S.useState("1m");return e.jsxs(b,{direction:"column",gap:"lg",children:[e.jsx(Ue,{options:[{value:"1m",label:"1 Month"},{value:"3m",label:"3 Months"},{value:"1y",label:"1 Year"}],value:r,onChange:t}),e.jsx(Ue,{options:[{value:"1m",label:"1M"},{value:"5m",label:"5M"},{value:"15m",label:"15M"}],value:r,onChange:t,variant:"button"})]})}},le={name:"Slider",render:()=>{const[r,t]=S.useState(60);return e.jsxs(b,{direction:"column",gap:"md",style:{maxWidth:300},children:[e.jsx(da,{min:0,max:100,value:r,onChange:t}),e.jsxs("div",{style:{fontSize:12,color:"var(--text-tertiary)"},children:["Value: ",r]})]})}},ie={name:"Switch",render:()=>{const[r,t]=S.useState(!0);return e.jsxs(b,{align:"center",gap:"md",children:[e.jsx(oa,{checked:r,onChange:t}),e.jsx("span",{style:{fontSize:13,color:"var(--text-secondary)"},children:r?"On":"Off"})]})}},de={name:"Select",render:()=>e.jsx(aa,{options:[{value:"1d",label:"1 Day"},{value:"1w",label:"1 Week"},{value:"1m",label:"1 Month"}],placeholder:"Select period...",style:{width:200}})},ce={name:"PriceDisplay",render:()=>e.jsxs(b,{direction:"column",gap:"lg",children:[e.jsx(F,{value:3382.45,change:41.23,changePercent:1.23}),e.jsx(F,{value:10876.32,change:-48.9,changePercent:-.45}),e.jsx(F,{value:5e3,change:0,showArrow:!1,precision:0})]})},ue={name:"ChangeBadge",render:()=>e.jsxs(b,{gap:"md",wrap:!0,align:"center",children:[e.jsx(I,{value:2.13}),e.jsx(I,{value:-1.34}),e.jsx(I,{value:0}),e.jsx(I,{value:5.67,size:"sm"})]})},pe={name:"StockCard",render:()=>e.jsxs(b,{gap:"md",wrap:!0,children:[e.jsx(Ae,{code:"sh600519",name:"Moutai",price:1689.5,change:35.2,changePercent:2.13,volume:"17.23B"}),e.jsx(Ae,{code:"sz000858",name:"Wuliangye",price:142.8,change:-1.94,changePercent:-1.34,volume:"4.10B"}),e.jsx(Ae,{code:"sh601398",name:"ICBC",price:5.89,change:.03,changePercent:.51,volume:"7.33B"})]})},me={name:"Statistic",render:()=>e.jsxs(b,{gap:"xl",wrap:!0,children:[e.jsx(_e,{title:"Total Volume",value:338245e4,precision:0,prefix:"¥"}),e.jsx(_e,{title:"Change",value:2.13,precision:2,suffix:"%",trend:"up"}),e.jsx(_e,{title:"Decline",value:-1.34,precision:2,suffix:"%",trend:"down"})]})},xe={name:"MarketTable",render:()=>{const r=[{code:"sh600519",name:"Moutai",price:1689.5,change:35.2,changePercent:2.13,volume:"17.23B"},{code:"sz000858",name:"Wuliangye",price:142.8,change:-1.94,changePercent:-1.34,volume:"4.10B"},{code:"sh601398",name:"ICBC",price:5.89,change:.03,changePercent:.51,volume:"7.33B"},{code:"sz300750",name:"CATL",price:196.35,change:-5.8,changePercent:-2.87,volume:"10.25B"}],t=[{key:"code",label:"Code",sortable:!0},{key:"name",label:"Name",sortable:!0},{key:"price",label:"Price",align:"right",sortable:!0,render:a=>e.jsx("span",{style:{fontVariantNumeric:"tabular-nums"},children:a.price.toFixed(2)})},{key:"change",label:"Chg",align:"right",sortable:!0,render:a=>e.jsxs("span",{style:{color:a.change>=0?"var(--up)":"var(--down)",fontVariantNumeric:"tabular-nums"},children:[a.change>0?"+":"",a.change.toFixed(2)]})},{key:"changePercent",label:"%",align:"right",sortable:!0,render:a=>e.jsx(I,{value:a.changePercent,size:"sm"})}];return e.jsx(la,{data:r,columns:t})}},be={name:"Breadcrumb",render:()=>e.jsxs(b,{direction:"column",gap:"md",children:[e.jsx(Ke,{items:[{label:"Home",href:"/"},{label:"Stocks"},{label:"AAPL"}]}),e.jsx(Ke,{items:[{label:"Dashboard"},{label:"Reports"},{label:"Q1 2026"}],separator:">"})]})},ge={name:"Pagination",render:()=>{const[r,t]=S.useState(3);return e.jsx(ua,{current:r,total:200,pageSize:20,onChange:t})}},ve={name:"DropdownMenu",render:()=>e.jsx(b,{gap:"xl",children:e.jsx(pa,{trigger:e.jsx(T,{variant:"secondary",children:"Actions"}),items:[{label:"View Detail",onClick:()=>{}},{label:"Edit",onClick:()=>{}},{separator:!0},{label:"Delete",onClick:()=>{}}]})})},fe={name:"Tabs",render:()=>{const[r,t]=S.useState("1m"),a=[{value:"1m",label:"1M"},{value:"5m",label:"5M"},{value:"15m",label:"15M"},{value:"1h",label:"1H"},{value:"1d",label:"1D",disabled:!0}];return e.jsx(na,{tabs:a,value:r,onChange:t})}},he={name:"Accordion",render:()=>e.jsx(ma,{items:[{value:"1",title:"Company Overview",content:"Founded in 2001. Market cap: ¥2.1T. P/E ratio: 28.5."},{value:"2",title:"Financial Metrics",content:"Revenue: ¥150B. Net income: ¥45B. EPS: ¥12.80."},{value:"3",title:"Risk Factors",content:"Market volatility. Regulatory changes. FX exposure."}]})},ye={name:"Alert",render:()=>e.jsxs(b,{direction:"column",gap:"md",style:{maxWidth:500},children:[e.jsx(_,{variant:"info",title:"Info",children:"Market data updates every 15 minutes."}),e.jsx(_,{variant:"success",title:"Success",children:"Order executed at ¥1,689.50."}),e.jsx(_,{variant:"warning",title:"Warning",children:"Trading will close in 30 minutes."}),e.jsx(_,{variant:"error",title:"Error",children:"Failed to fetch market data."}),e.jsx(_,{onClose:()=>{},children:"Dismissable alert message."})]})},we={name:"Modal",render:()=>{const[r,t]=S.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(T,{onClick:()=>t(!0),children:"Open Modal"}),e.jsxs(sa,{open:r,onClose:()=>t(!1),title:"Trade Confirmation",size:"sm",children:[e.jsx("p",{style:{fontSize:13,color:"var(--text-secondary)",marginBottom:20},children:"Buy 100 shares at ¥1,689.50?"}),e.jsxs(b,{justify:"end",gap:"md",children:[e.jsx(T,{variant:"secondary",onClick:()=>t(!1),children:"Cancel"}),e.jsx(T,{onClick:()=>t(!1),children:"Confirm"})]})]})]})}},je={name:"Tooltip",render:()=>e.jsxs(b,{gap:"xl",align:"center",children:[e.jsx($e,{content:"Top tooltip",children:e.jsx("span",{style:{borderBottom:"1px dashed var(--border-main)",cursor:"help",fontSize:13},children:"Hover top"})}),e.jsx($e,{content:"Bottom tooltip",position:"bottom",children:e.jsx("span",{style:{borderBottom:"1px dashed var(--border-main)",cursor:"help",fontSize:13},children:"Hover bottom"})})]})},Se={name:"Progress",render:()=>e.jsxs(b,{direction:"column",gap:"lg",style:{maxWidth:400},children:[e.jsx(P,{value:65,showLabel:!0}),e.jsx(P,{value:42,size:"sm"}),e.jsx(P,{value:90,size:"lg"}),e.jsxs(b,{gap:"lg",align:"center",children:[e.jsx(P,{value:75,variant:"circle",showLabel:!0}),e.jsx(P,{value:45,variant:"circle",size:"sm"})]})]})},Ne={name:"Skeleton",render:()=>e.jsxs(b,{gap:"lg",children:[e.jsxs(b,{direction:"column",gap:"md",style:{width:200},children:[e.jsx(E,{circle:!0,width:40,height:40}),e.jsx(E,{className:"h-4 w-3/4"}),e.jsx(E,{className:"h-3 w-1/2"})]}),e.jsx(ca,{lines:4})]})},Te={name:"Table",render:()=>e.jsxs(ra,{children:[e.jsx(ta,{children:e.jsxs(Me,{children:[e.jsx(ze,{children:"Code"}),e.jsx(ze,{children:"Name"}),e.jsx(ze,{style:{textAlign:"right"},children:"Price"})]})}),e.jsxs("tbody",{children:[e.jsxs(Me,{children:[e.jsx(A,{style:{fontFamily:"var(--font-mono)"},children:"sh600519"}),e.jsx(A,{children:"Moutai"}),e.jsx(A,{style:{textAlign:"right",fontFamily:"var(--font-mono)",fontVariantNumeric:"tabular-nums"},children:"1,689.50"})]}),e.jsxs(Me,{children:[e.jsx(A,{style:{fontFamily:"var(--font-mono)"},children:"sz000858"}),e.jsx(A,{children:"Wuliangye"}),e.jsx(A,{style:{textAlign:"right",fontFamily:"var(--font-mono)",fontVariantNumeric:"tabular-nums"},children:"142.80"})]})]})]})},ke={name:"Divider",render:()=>e.jsxs(b,{direction:"column",gap:"md",children:[e.jsx("p",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Above divider"}),e.jsx(U,{}),e.jsx("p",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Below divider"}),e.jsx(U,{label:"OR"}),e.jsxs(b,{gap:"md",style:{height:60},align:"center",children:[e.jsx("span",{style:{fontSize:12},children:"Left"}),e.jsx(U,{orientation:"vertical"}),e.jsx("span",{style:{fontSize:12},children:"Center"}),e.jsx(U,{orientation:"vertical"}),e.jsx("span",{style:{fontSize:12},children:"Right"})]})]})},Ce={name:"Space",render:()=>e.jsxs(b,{direction:"column",gap:"lg",children:[e.jsxs(X,{size:"sm",children:[e.jsx(T,{size:"sm",children:"A"}),e.jsx(T,{size:"sm",children:"B"}),e.jsx(T,{size:"sm",children:"C"})]}),e.jsxs(X,{size:"lg",wrap:!0,children:[e.jsx(C,{variant:"up",children:"Up"}),e.jsx(C,{variant:"down",children:"Down"}),e.jsx(C,{variant:"flat",children:"Flat"}),e.jsx(C,{variant:"success",children:"OK"})]})]})},Re={name:"Flex",render:()=>e.jsxs(b,{direction:"column",gap:"lg",children:[e.jsxs(b,{justify:"between",children:[e.jsx("div",{style:{width:60,height:30,background:"var(--bg-card-hover)",borderRadius:6}}),e.jsx("div",{style:{width:60,height:30,background:"var(--bg-card-hover)",borderRadius:6}}),e.jsx("div",{style:{width:60,height:30,background:"var(--bg-card-hover)",borderRadius:6}})]}),e.jsxs(b,{justify:"center",gap:"md",children:[e.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"var(--accent)"}}),e.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"var(--accent)"}})]})]})},qe={name:"Avatar",render:()=>e.jsxs(b,{gap:"md",align:"center",children:[e.jsx(K,{fallback:"U"}),e.jsx(K,{fallback:"A",size:"sm"}),e.jsx(K,{fallback:"B",size:"lg"}),e.jsx(K,{src:"https://i.pravatar.cc/40?img=1",alt:"User"})]})},Be={name:"Empty",render:()=>e.jsxs(b,{gap:"xl",wrap:!0,children:[e.jsx(Xe,{title:"No Results",description:"No stocks match your filter criteria."}),e.jsx(Xe,{title:"No Data",action:e.jsx(T,{size:"sm",children:"Refresh"})})]})},mn={title:"Overview/Components",component:()=>null};var lr,ir,dr;J.parameters={...J.parameters,docs:{...(lr=J.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  name: 'Button',
  render: () => <Space>\r
      <Button variant="default">Primary</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="ghost">Ghost</Button>\r
      <Button variant="danger">Danger</Button>\r
      <Button size="sm">Small</Button>\r
      <Button disabled>Disabled</Button>\r
    </Space>
}`,...(dr=(ir=J.parameters)==null?void 0:ir.docs)==null?void 0:dr.source}}};var cr,ur,pr;ee.parameters={...ee.parameters,docs:{...(cr=ee.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  name: 'Card',
  render: () => <Space>\r
      <Card style={{
      width: 260
    }}>\r
        <CardHeader><CardTitle>SSE Index</CardTitle></CardHeader>\r
        <CardContent>\r
          <PriceDisplay value={3382.45} change={41.23} changePercent={1.23} />\r
        </CardContent>\r
      </Card>\r
      <Card style={{
      width: 260
    }}>\r
        <CardHeader><CardTitle>SZSE Index</CardTitle></CardHeader>\r
        <CardContent>\r
          <PriceDisplay value={10876.32} change={-48.90} changePercent={-0.45} />\r
        </CardContent>\r
      </Card>\r
    </Space>
}`,...(pr=(ur=ee.parameters)==null?void 0:ur.docs)==null?void 0:pr.source}}};var mr,xr,br;re.parameters={...re.parameters,docs:{...(mr=re.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  name: 'Badge',
  render: () => <Flex gap="md" wrap>\r
      <Badge variant="up">+2.13%</Badge>\r
      <Badge variant="down">-1.34%</Badge>\r
      <Badge variant="flat">0.00%</Badge>\r
      <Badge variant="success">Online</Badge>\r
      <Badge variant="warning">Delayed</Badge>\r
      <Badge variant="error">Offline</Badge>\r
    </Flex>
}`,...(br=(xr=re.parameters)==null?void 0:xr.docs)==null?void 0:br.source}}};var gr,vr,fr;te.parameters={...te.parameters,docs:{...(gr=te.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  name: 'Tag',
  render: () => <Flex gap="md" wrap>\r
      <Tag variant="up">Bullish</Tag>\r
      <Tag variant="down">Bearish</Tag>\r
      <Tag variant="accent">Signal</Tag>\r
      <Tag onRemove={() => {}}>Dismiss</Tag>\r
    </Flex>
}`,...(fr=(vr=te.parameters)==null?void 0:vr.docs)==null?void 0:fr.source}}};var hr,yr,wr;ae.parameters={...ae.parameters,docs:{...(hr=ae.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  name: 'Input',
  render: () => <Flex direction="column" gap="md" style={{
    maxWidth: 300
  }}>\r
      <Input placeholder="Search stocks..." />\r
      <Input placeholder="With error" hasError />\r
      <Input prefix="$" placeholder="Amount" />\r
      <Input disabled value="Disabled" />\r
    </Flex>
}`,...(wr=(yr=ae.parameters)==null?void 0:yr.docs)==null?void 0:wr.source}}};var jr,Sr,Nr;ne.parameters={...ne.parameters,docs:{...(jr=ne.parameters)==null?void 0:jr.docs,source:{originalSource:`{
  name: 'Textarea',
  render: () => <Flex direction="column" gap="md" style={{
    maxWidth: 400
  }}>\r
      <Textarea placeholder="Write notes..." />\r
      <Textarea hasError placeholder="Error state" />\r
      <Textarea showCount maxLength={200} defaultValue="Hello" />\r
    </Flex>
}`,...(Nr=(Sr=ne.parameters)==null?void 0:Sr.docs)==null?void 0:Nr.source}}};var Tr,kr,Cr;se.parameters={...se.parameters,docs:{...(Tr=se.parameters)==null?void 0:Tr.docs,source:{originalSource:`{
  name: 'Checkbox',
  render: () => {
    const [val, setVal] = useState<string[]>(['a']);
    return <Flex direction="column" gap="md">\r
        <Checkbox options={[{
        value: 'a',
        label: 'Apple'
      }, {
        value: 'b',
        label: 'Banana'
      }, {
        value: 'c',
        label: 'Cherry'
      }]} value={val} onChange={setVal} />\r
        <div style={{
        fontSize: 11,
        color: 'var(--text-tertiary)'
      }}>Selected: {val.join(', ') || '(none)'}</div>\r
      </Flex>;
  }
}`,...(Cr=(kr=se.parameters)==null?void 0:kr.docs)==null?void 0:Cr.source}}};var Rr,qr,Br;oe.parameters={...oe.parameters,docs:{...(Rr=oe.parameters)==null?void 0:Rr.docs,source:{originalSource:`{
  name: 'RadioGroup',
  render: () => {
    const [val, setVal] = useState('1m');
    return <Flex direction="column" gap="lg">\r
        <RadioGroup options={[{
        value: '1m',
        label: '1 Month'
      }, {
        value: '3m',
        label: '3 Months'
      }, {
        value: '1y',
        label: '1 Year'
      }]} value={val} onChange={setVal} />\r
        <RadioGroup options={[{
        value: '1m',
        label: '1M'
      }, {
        value: '5m',
        label: '5M'
      }, {
        value: '15m',
        label: '15M'
      }]} value={val} onChange={setVal} variant="button" />\r
      </Flex>;
  }
}`,...(Br=(qr=oe.parameters)==null?void 0:qr.docs)==null?void 0:Br.source}}};var zr,Mr,Ar;le.parameters={...le.parameters,docs:{...(zr=le.parameters)==null?void 0:zr.docs,source:{originalSource:`{
  name: 'Slider',
  render: () => {
    const [val, setVal] = useState(60);
    return <Flex direction="column" gap="md" style={{
      maxWidth: 300
    }}>\r
        <Slider min={0} max={100} value={val} onChange={setVal} />\r
        <div style={{
        fontSize: 12,
        color: 'var(--text-tertiary)'
      }}>Value: {val}</div>\r
      </Flex>;
  }
}`,...(Ar=(Mr=le.parameters)==null?void 0:Mr.docs)==null?void 0:Ar.source}}};var Fr,_r,Pr;ie.parameters={...ie.parameters,docs:{...(Fr=ie.parameters)==null?void 0:Fr.docs,source:{originalSource:`{
  name: 'Switch',
  render: () => {
    const [on, setOn] = useState(true);
    return <Flex align="center" gap="md">\r
        <Switch checked={on} onChange={setOn} />\r
        <span style={{
        fontSize: 13,
        color: 'var(--text-secondary)'
      }}>{on ? 'On' : 'Off'}</span>\r
      </Flex>;
  }
}`,...(Pr=(_r=ie.parameters)==null?void 0:_r.docs)==null?void 0:Pr.source}}};var Ir,Vr,Er;de.parameters={...de.parameters,docs:{...(Ir=de.parameters)==null?void 0:Ir.docs,source:{originalSource:`{
  name: 'Select',
  render: () => <Select options={[{
    value: '1d',
    label: '1 Day'
  }, {
    value: '1w',
    label: '1 Week'
  }, {
    value: '1m',
    label: '1 Month'
  }]} placeholder="Select period..." style={{
    width: 200
  }} />
}`,...(Er=(Vr=de.parameters)==null?void 0:Vr.docs)==null?void 0:Er.source}}};var Dr,Or,Wr;ce.parameters={...ce.parameters,docs:{...(Dr=ce.parameters)==null?void 0:Dr.docs,source:{originalSource:`{
  name: 'PriceDisplay',
  render: () => <Flex direction="column" gap="lg">\r
      <PriceDisplay value={3382.45} change={41.23} changePercent={1.23} />\r
      <PriceDisplay value={10876.32} change={-48.90} changePercent={-0.45} />\r
      <PriceDisplay value={5000.00} change={0} showArrow={false} precision={0} />\r
    </Flex>
}`,...(Wr=(Or=ce.parameters)==null?void 0:Or.docs)==null?void 0:Wr.source}}};var Lr,Gr,Hr;ue.parameters={...ue.parameters,docs:{...(Lr=ue.parameters)==null?void 0:Lr.docs,source:{originalSource:`{
  name: 'ChangeBadge',
  render: () => <Flex gap="md" wrap align="center">\r
      <ChangeBadge value={2.13} />\r
      <ChangeBadge value={-1.34} />\r
      <ChangeBadge value={0} />\r
      <ChangeBadge value={5.67} size="sm" />\r
    </Flex>
}`,...(Hr=(Gr=ue.parameters)==null?void 0:Gr.docs)==null?void 0:Hr.source}}};var $r,Ur,Kr;pe.parameters={...pe.parameters,docs:{...($r=pe.parameters)==null?void 0:$r.docs,source:{originalSource:`{
  name: 'StockCard',
  render: () => <Flex gap="md" wrap>\r
      <StockCard code="sh600519" name="Moutai" price={1689.50} change={35.20} changePercent={2.13} volume="17.23B" />\r
      <StockCard code="sz000858" name="Wuliangye" price={142.80} change={-1.94} changePercent={-1.34} volume="4.10B" />\r
      <StockCard code="sh601398" name="ICBC" price={5.89} change={0.03} changePercent={0.51} volume="7.33B" />\r
    </Flex>
}`,...(Kr=(Ur=pe.parameters)==null?void 0:Ur.docs)==null?void 0:Kr.source}}};var Xr,Zr,Qr;me.parameters={...me.parameters,docs:{...(Xr=me.parameters)==null?void 0:Xr.docs,source:{originalSource:`{
  name: 'Statistic',
  render: () => <Flex gap="xl" wrap>\r
      <Statistic title="Total Volume" value={3382450000} precision={0} prefix="¥" />\r
      <Statistic title="Change" value={2.13} precision={2} suffix="%" trend="up" />\r
      <Statistic title="Decline" value={-1.34} precision={2} suffix="%" trend="down" />\r
    </Flex>
}`,...(Qr=(Zr=me.parameters)==null?void 0:Zr.docs)==null?void 0:Qr.source}}};var Yr,Jr,et;xe.parameters={...xe.parameters,docs:{...(Yr=xe.parameters)==null?void 0:Yr.docs,source:{originalSource:`{
  name: 'MarketTable',
  render: () => {
    const data: MarketRow[] = [{
      code: 'sh600519',
      name: 'Moutai',
      price: 1689.50,
      change: 35.20,
      changePercent: 2.13,
      volume: '17.23B'
    }, {
      code: 'sz000858',
      name: 'Wuliangye',
      price: 142.80,
      change: -1.94,
      changePercent: -1.34,
      volume: '4.10B'
    }, {
      code: 'sh601398',
      name: 'ICBC',
      price: 5.89,
      change: 0.03,
      changePercent: 0.51,
      volume: '7.33B'
    }, {
      code: 'sz300750',
      name: 'CATL',
      price: 196.35,
      change: -5.80,
      changePercent: -2.87,
      volume: '10.25B'
    }];
    const columns: MarketColumn<MarketRow>[] = [{
      key: 'code',
      label: 'Code',
      sortable: true
    }, {
      key: 'name',
      label: 'Name',
      sortable: true
    }, {
      key: 'price',
      label: 'Price',
      align: 'right',
      sortable: true,
      render: r => <span style={{
        fontVariantNumeric: 'tabular-nums'
      }}>{r.price.toFixed(2)}</span>
    }, {
      key: 'change',
      label: 'Chg',
      align: 'right',
      sortable: true,
      render: r => <span style={{
        color: r.change >= 0 ? 'var(--up)' : 'var(--down)',
        fontVariantNumeric: 'tabular-nums'
      }}>{r.change > 0 ? '+' : ''}{r.change.toFixed(2)}</span>
    }, {
      key: 'changePercent',
      label: '%',
      align: 'right',
      sortable: true,
      render: r => <ChangeBadge value={r.changePercent} size="sm" />
    }];
    return <MarketTable data={data} columns={columns} />;
  }
}`,...(et=(Jr=xe.parameters)==null?void 0:Jr.docs)==null?void 0:et.source}}};var rt,tt,at;be.parameters={...be.parameters,docs:{...(rt=be.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  name: 'Breadcrumb',
  render: () => <Flex direction="column" gap="md">\r
      <Breadcrumb items={[{
      label: 'Home',
      href: '/'
    }, {
      label: 'Stocks'
    }, {
      label: 'AAPL'
    }]} />\r
      <Breadcrumb items={[{
      label: 'Dashboard'
    }, {
      label: 'Reports'
    }, {
      label: 'Q1 2026'
    }]} separator=">" />\r
    </Flex>
}`,...(at=(tt=be.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,st,ot;ge.parameters={...ge.parameters,docs:{...(nt=ge.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  name: 'Pagination',
  render: () => {
    const [page, setPage] = useState(3);
    return <Pagination current={page} total={200} pageSize={20} onChange={setPage} />;
  }
}`,...(ot=(st=ge.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};var lt,it,dt;ve.parameters={...ve.parameters,docs:{...(lt=ve.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  name: 'DropdownMenu',
  render: () => <Flex gap="xl">\r
      <DropdownMenu trigger={<Button variant="secondary">Actions</Button>} items={[{
      label: 'View Detail',
      onClick: () => {}
    }, {
      label: 'Edit',
      onClick: () => {}
    }, {
      separator: true
    }, {
      label: 'Delete',
      onClick: () => {}
    }]} />\r
    </Flex>
}`,...(dt=(it=ve.parameters)==null?void 0:it.docs)==null?void 0:dt.source}}};var ct,ut,pt;fe.parameters={...fe.parameters,docs:{...(ct=fe.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  name: 'Tabs',
  render: () => {
    const [tab, setTab] = useState('1m');
    const tabs: Tab[] = [{
      value: '1m',
      label: '1M'
    }, {
      value: '5m',
      label: '5M'
    }, {
      value: '15m',
      label: '15M'
    }, {
      value: '1h',
      label: '1H'
    }, {
      value: '1d',
      label: '1D',
      disabled: true
    }];
    return <Tabs tabs={tabs} value={tab} onChange={setTab} />;
  }
}`,...(pt=(ut=fe.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var mt,xt,bt;he.parameters={...he.parameters,docs:{...(mt=he.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  name: 'Accordion',
  render: () => <Accordion items={[{
    value: '1',
    title: 'Company Overview',
    content: 'Founded in 2001. Market cap: ¥2.1T. P/E ratio: 28.5.'
  }, {
    value: '2',
    title: 'Financial Metrics',
    content: 'Revenue: ¥150B. Net income: ¥45B. EPS: ¥12.80.'
  }, {
    value: '3',
    title: 'Risk Factors',
    content: 'Market volatility. Regulatory changes. FX exposure.'
  }]} />
}`,...(bt=(xt=he.parameters)==null?void 0:xt.docs)==null?void 0:bt.source}}};var gt,vt,ft;ye.parameters={...ye.parameters,docs:{...(gt=ye.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  name: 'Alert',
  render: () => <Flex direction="column" gap="md" style={{
    maxWidth: 500
  }}>\r
      <Alert variant="info" title="Info">Market data updates every 15 minutes.</Alert>\r
      <Alert variant="success" title="Success">Order executed at ¥1,689.50.</Alert>\r
      <Alert variant="warning" title="Warning">Trading will close in 30 minutes.</Alert>\r
      <Alert variant="error" title="Error">Failed to fetch market data.</Alert>\r
      <Alert onClose={() => {}}>Dismissable alert message.</Alert>\r
    </Flex>
}`,...(ft=(vt=ye.parameters)==null?void 0:vt.docs)==null?void 0:ft.source}}};var ht,yt,wt;we.parameters={...we.parameters,docs:{...(ht=we.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  name: 'Modal',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Modal</Button>\r
        <Modal open={open} onClose={() => setOpen(false)} title="Trade Confirmation" size="sm">\r
          <p style={{
          fontSize: 13,
          color: 'var(--text-secondary)',
          marginBottom: 20
        }}>Buy 100 shares at ¥1,689.50?</p>\r
          <Flex justify="end" gap="md">\r
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>\r
            <Button onClick={() => setOpen(false)}>Confirm</Button>\r
          </Flex>\r
        </Modal>\r
      </>;
  }
}`,...(wt=(yt=we.parameters)==null?void 0:yt.docs)==null?void 0:wt.source}}};var jt,St,Nt;je.parameters={...je.parameters,docs:{...(jt=je.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  name: 'Tooltip',
  render: () => <Flex gap="xl" align="center">\r
      <Tooltip content="Top tooltip"><span style={{
        borderBottom: '1px dashed var(--border-main)',
        cursor: 'help',
        fontSize: 13
      }}>Hover top</span></Tooltip>\r
      <Tooltip content="Bottom tooltip" position="bottom"><span style={{
        borderBottom: '1px dashed var(--border-main)',
        cursor: 'help',
        fontSize: 13
      }}>Hover bottom</span></Tooltip>\r
    </Flex>
}`,...(Nt=(St=je.parameters)==null?void 0:St.docs)==null?void 0:Nt.source}}};var Tt,kt,Ct;Se.parameters={...Se.parameters,docs:{...(Tt=Se.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  name: 'Progress',
  render: () => <Flex direction="column" gap="lg" style={{
    maxWidth: 400
  }}>\r
      <Progress value={65} showLabel />\r
      <Progress value={42} size="sm" />\r
      <Progress value={90} size="lg" />\r
      <Flex gap="lg" align="center">\r
        <Progress value={75} variant="circle" showLabel />\r
        <Progress value={45} variant="circle" size="sm" />\r
      </Flex>\r
    </Flex>
}`,...(Ct=(kt=Se.parameters)==null?void 0:kt.docs)==null?void 0:Ct.source}}};var Rt,qt,Bt;Ne.parameters={...Ne.parameters,docs:{...(Rt=Ne.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  name: 'Skeleton',
  render: () => <Flex gap="lg">\r
      <Flex direction="column" gap="md" style={{
      width: 200
    }}>\r
        <Skeleton circle width={40} height={40} />\r
        <Skeleton className="h-4 w-3/4" />\r
        <Skeleton className="h-3 w-1/2" />\r
      </Flex>\r
      <SkeletonCard lines={4} />\r
    </Flex>
}`,...(Bt=(qt=Ne.parameters)==null?void 0:qt.docs)==null?void 0:Bt.source}}};var zt,Mt,At;Te.parameters={...Te.parameters,docs:{...(zt=Te.parameters)==null?void 0:zt.docs,source:{originalSource:`{
  name: 'Table',
  render: () => <Table>\r
      <TableHeader>\r
        <TableRow>\r
          <TableHead>Code</TableHead>\r
          <TableHead>Name</TableHead>\r
          <TableHead style={{
          textAlign: 'right'
        }}>Price</TableHead>\r
        </TableRow>\r
      </TableHeader>\r
      <tbody>\r
        <TableRow><TableCell style={{
          fontFamily: 'var(--font-mono)'
        }}>sh600519</TableCell><TableCell>Moutai</TableCell><TableCell style={{
          textAlign: 'right',
          fontFamily: 'var(--font-mono)',
          fontVariantNumeric: 'tabular-nums'
        }}>1,689.50</TableCell></TableRow>\r
        <TableRow><TableCell style={{
          fontFamily: 'var(--font-mono)'
        }}>sz000858</TableCell><TableCell>Wuliangye</TableCell><TableCell style={{
          textAlign: 'right',
          fontFamily: 'var(--font-mono)',
          fontVariantNumeric: 'tabular-nums'
        }}>142.80</TableCell></TableRow>\r
      </tbody>\r
    </Table>
}`,...(At=(Mt=Te.parameters)==null?void 0:Mt.docs)==null?void 0:At.source}}};var Ft,_t,Pt;ke.parameters={...ke.parameters,docs:{...(Ft=ke.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
  name: 'Divider',
  render: () => <Flex direction="column" gap="md">\r
      <p style={{
      fontSize: 12,
      color: 'var(--text-secondary)'
    }}>Above divider</p>\r
      <Divider />\r
      <p style={{
      fontSize: 12,
      color: 'var(--text-secondary)'
    }}>Below divider</p>\r
      <Divider label="OR" />\r
      <Flex gap="md" style={{
      height: 60
    }} align="center">\r
        <span style={{
        fontSize: 12
      }}>Left</span>\r
        <Divider orientation="vertical" />\r
        <span style={{
        fontSize: 12
      }}>Center</span>\r
        <Divider orientation="vertical" />\r
        <span style={{
        fontSize: 12
      }}>Right</span>\r
      </Flex>\r
    </Flex>
}`,...(Pt=(_t=ke.parameters)==null?void 0:_t.docs)==null?void 0:Pt.source}}};var It,Vt,Et;Ce.parameters={...Ce.parameters,docs:{...(It=Ce.parameters)==null?void 0:It.docs,source:{originalSource:`{
  name: 'Space',
  render: () => <Flex direction="column" gap="lg">\r
      <Space size="sm">\r
        <Button size="sm">A</Button>\r
        <Button size="sm">B</Button>\r
        <Button size="sm">C</Button>\r
      </Space>\r
      <Space size="lg" wrap>\r
        <Badge variant="up">Up</Badge>\r
        <Badge variant="down">Down</Badge>\r
        <Badge variant="flat">Flat</Badge>\r
        <Badge variant="success">OK</Badge>\r
      </Space>\r
    </Flex>
}`,...(Et=(Vt=Ce.parameters)==null?void 0:Vt.docs)==null?void 0:Et.source}}};var Dt,Ot,Wt;Re.parameters={...Re.parameters,docs:{...(Dt=Re.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  name: 'Flex',
  render: () => <Flex direction="column" gap="lg">\r
      <Flex justify="between">\r
        <div style={{
        width: 60,
        height: 30,
        background: 'var(--bg-card-hover)',
        borderRadius: 6
      }} />\r
        <div style={{
        width: 60,
        height: 30,
        background: 'var(--bg-card-hover)',
        borderRadius: 6
      }} />\r
        <div style={{
        width: 60,
        height: 30,
        background: 'var(--bg-card-hover)',
        borderRadius: 6
      }} />\r
      </Flex>\r
      <Flex justify="center" gap="md">\r
        <div style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--accent)'
      }} />\r
        <div style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--accent)'
      }} />\r
      </Flex>\r
    </Flex>
}`,...(Wt=(Ot=Re.parameters)==null?void 0:Ot.docs)==null?void 0:Wt.source}}};var Lt,Gt,Ht;qe.parameters={...qe.parameters,docs:{...(Lt=qe.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
  name: 'Avatar',
  render: () => <Flex gap="md" align="center">\r
      <Avatar fallback="U" />\r
      <Avatar fallback="A" size="sm" />\r
      <Avatar fallback="B" size="lg" />\r
      <Avatar src="https://i.pravatar.cc/40?img=1" alt="User" />\r
    </Flex>
}`,...(Ht=(Gt=qe.parameters)==null?void 0:Gt.docs)==null?void 0:Ht.source}}};var $t,Ut,Kt;Be.parameters={...Be.parameters,docs:{...($t=Be.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  name: 'Empty',
  render: () => <Flex gap="xl" wrap>\r
      <Empty title="No Results" description="No stocks match your filter criteria." />\r
      <Empty title="No Data" action={<Button size="sm">Refresh</Button>} />\r
    </Flex>
}`,...(Kt=(Ut=Be.parameters)==null?void 0:Ut.docs)==null?void 0:Kt.source}}};const xn=["ButtonStory","CardStory","BadgeStory","TagStory","InputStory","TextareaStory","CheckboxStory","RadioStory","SliderStory","SwitchStory","SelectStory","PriceDisplayStory","ChangeBadgeStory","StockCardStory","StatisticStory","MarketTableStory","BreadcrumbStory","PaginationStory","DropdownMenuStory","TabsStory","AccordionStory","AlertStory","ModalStory","TooltipStory","ProgressStory","SkeletonStory","TableStory","DividerStory","SpaceStory","FlexStory","AvatarStory","EmptyStory"];export{he as AccordionStory,ye as AlertStory,qe as AvatarStory,re as BadgeStory,be as BreadcrumbStory,J as ButtonStory,ee as CardStory,ue as ChangeBadgeStory,se as CheckboxStory,ke as DividerStory,ve as DropdownMenuStory,Be as EmptyStory,Re as FlexStory,ae as InputStory,xe as MarketTableStory,we as ModalStory,ge as PaginationStory,ce as PriceDisplayStory,Se as ProgressStory,oe as RadioStory,de as SelectStory,Ne as SkeletonStory,le as SliderStory,Ce as SpaceStory,me as StatisticStory,pe as StockCardStory,ie as SwitchStory,Te as TableStory,fe as TabsStory,te as TagStory,ne as TextareaStory,je as TooltipStory,xn as __namedExportsOrder,mn as default};
