(this.webpackJsonpshva=this.webpackJsonpshva||[]).push([[0],{110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(0),s=c.n(a),i=c(10),r=c.n(i),j=c(41),o=c(15),l=(c(99),c(164)),b=c(163),x=c(55),O=c.n(x),d=c(72),h=c.n(d),u=c(73),m=c.n(u),p=c(74),v=c.n(p),f=c(75),g=c.n(f),y=c(76),N=c.n(y),k=c(77),T=c.n(k),F=c(78),_=c.n(F),w=c(156),S=c(161),C=c(162),L=c(56),R=c(159),I=c(69),B=c.n(I),A=c(68),D=c.n(A);const E=Object(w.a)((e=>({btn:{marginRight:e.spacing(2)}})));var G=function(e){const t=E(),c=null!=e.back?Object(n.jsx)(j.b,{to:e.back,children:Object(n.jsx)(R.a,{edge:"start",className:t.btn,color:"inherit",children:Object(n.jsx)(B.a,{})})}):null,a=null!=e.back?"title":"title-only";return Object(n.jsx)(S.a,{position:"sticky",className:D.a.topBar,children:Object(n.jsxs)(C.a,{children:[c,Object(n.jsx)(L.a,{variant:"h6",className:a,children:e.title})]})})},U=c(118),q=c(64),H=c(70),P=c.n(H);const W=Object(w.a)((e=>({papper:{padding:e.spacing(2)}})));var z=function(e){const t=W();return Object(n.jsx)(b.a,{item:!0,xs:6,className:P.a.itemBtn,children:Object(n.jsx)(j.b,{to:e.to,children:Object(n.jsx)(q.a,{focusRipple:!0,children:Object(n.jsxs)(U.a,{className:"layout-box "+t.papper,children:[e.children,Object(n.jsx)(L.a,{component:"span",variant:"subtitle1",className:"title",children:e.title})]})})})})},Y=c(71),J=c.n(Y);var M=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(G,{title:"\u4eba\u58f0\u5206\u6790"}),Object(n.jsx)("div",{className:J.a.home,children:Object(n.jsx)(l.a,{maxWidth:"sm",children:Object(n.jsxs)(b.a,{container:!0,spacing:4,justify:"center",children:[Object(n.jsx)(z,{title:"\u542c\u89c9\u6d4b\u8bd5",to:"/sound",children:Object(n.jsx)(O.a,{})}),Object(n.jsx)(z,{title:"\u952e\u76d8\u6d4b\u8bd5",to:"/keyboard",children:Object(n.jsx)(h.a,{})}),Object(n.jsx)(z,{title:"\u6253\u5f00\u6587\u4ef6",to:"/open",children:Object(n.jsx)(m.a,{})}),Object(n.jsx)(z,{title:"\u5f55\u5236\u58f0\u97f3",to:"/record",children:Object(n.jsx)(v.a,{})}),Object(n.jsx)(z,{title:"\u622a\u53d6\u7247\u6bb5",to:"/cut",children:Object(n.jsx)(g.a,{})}),Object(n.jsx)(z,{title:"\u9891\u7387\u5206\u6790",to:"/freq",children:Object(n.jsx)(N.a,{})}),Object(n.jsx)(z,{title:"\u8bbe\u7f6e",to:"/config",children:Object(n.jsx)(T.a,{})}),Object(n.jsx)(z,{title:"\u5173\u4e8e",to:"/about",children:Object(n.jsx)(_.a,{})})]})})})]})},K=c(165),Q=c(119),V=c(167),X=c(168),Z=c(166),$=c(175),ee=c(178),te=c(173),ce=c(171),ne=c(172),ae=c(177);const se=440,ie=500,re=1,je="sine",oe=[{id:"sine",text:"\u6b63\u5f26\u6ce2 (sine)"},{id:"square",text:"\u65b9\u6ce2 (square)"},{id:"triangle",text:"\u4e09\u89d2\u6ce2 (triangle)"},{id:"sawtooth",text:"\u952f\u9f7f\u6ce2 (sawtooth)"}];var le=c(174);var be=function(e){return Object(n.jsx)(le.a,{elevation:6,variant:"filled",...e})},xe=c(79),Oe=c.n(xe);function de(e,t){const c=Number.parseInt(e);!Number.isNaN(c)&&Number.isFinite(c)&&c>0&&t(c)}var he=function(){const[e,t]=Object(a.useState)(se),[c,s]=Object(a.useState)(ie),[i,r]=Object(a.useState)(re),[j,o]=Object(a.useState)(je),[b,x]=Object(a.useState)(!1),[d,h]=Object(a.useState)(""),u=()=>{x(!1)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(G,{back:"/",title:"\u542c\u89c9\u6d4b\u8bd5"}),Object(n.jsx)("div",{className:Oe.a.sound,children:Object(n.jsx)(l.a,{maxWidth:"md",children:Object(n.jsxs)("div",{className:"layout-box",children:[Object(n.jsx)(L.a,{color:"textSecondary",children:"\u901a\u8fc7\u53d1\u51fa\u7279\u5b9a\u9891\u7387\u7684\u58f0\u97f3, \u6765\u6d4b\u8bd5\u542c\u89c9.  \u968f\u7740\u5e74\u9f84\u7684\u589e\u52a0, \u80fd\u591f\u542c\u5230\u7684\u6700\u9ad8\u9891\u7387\u9010\u6e10\u4e0b\u964d."}),Object(n.jsxs)(K.a,{className:"config-box",children:[Object(n.jsx)(Z.a,{}),Object(n.jsxs)(Q.a,{children:[Object(n.jsx)(V.a,{primary:"\u9891\u7387",secondary:"20 Hz ~ 20_000 Hz"}),Object(n.jsx)(X.a,{children:Object(n.jsx)($.a,{variant:"outlined",type:"number",value:e,onChange:e=>{de(e.target.value,t)}})})]}),Object(n.jsx)(Z.a,{}),Object(n.jsxs)(Q.a,{children:[Object(n.jsx)(V.a,{primary:"\u65f6\u957f",secondary:"ms"}),Object(n.jsx)(X.a,{children:Object(n.jsx)($.a,{variant:"outlined",type:"number",value:c,onChange:e=>{de(e.target.value,s)}})})]}),Object(n.jsx)(Z.a,{}),Object(n.jsxs)(Q.a,{children:[Object(n.jsx)(V.a,{primary:"\u97f3\u91cf",secondary:(100*i).toFixed(0)+" %"}),Object(n.jsx)(X.a,{className:"slide-box",children:Object(n.jsx)(ee.a,{value:i,onChange:(e,t)=>r(t),min:0,max:2,step:.01})})]}),Object(n.jsx)(Z.a,{}),Object(n.jsxs)(Q.a,{children:[Object(n.jsx)(V.a,{primary:"\u6ce2\u5f62",secondary:"(\u4e0d\u540c\u6ce2\u5f62\u7684\u97f3\u8272\u4e0d\u540c, \u6b63\u5f26\u6ce2\u662f\u6700\u7eaf\u7cb9\u7684\u6ce2\u5f62)"}),Object(n.jsx)(X.a,{children:Object(n.jsx)(te.a,{value:j,onChange:e=>o(e.target.value),variant:"outlined",children:oe.map((e=>Object(n.jsx)(ce.a,{value:e.id,children:e.text},e.id)))})})]}),Object(n.jsx)(Z.a,{})]}),Object(n.jsx)(ne.a,{variant:"contained",color:"primary",size:"large",className:"play",startIcon:Object(n.jsx)(O.a,{}),onClick:()=>{const t=function(e,t,c=1,n="sine"){const a=new AudioContext,s={sampleRate:a.sampleRate,baseLatency:a.baseLatency,outputLatency:a.outputLatency},i=a.createOscillator();i.type=n,i.frequency.value=e;const r=a.createGain();return r.gain.value=c,i.connect(r),r.connect(a.destination),i.start(a.currentTime),i.stop(a.currentTime+t/1e3),s}(e,c,i,j);console.log(t),h(JSON.stringify(t)),x(!0)},children:"\u64ad\u653e"}),Object(n.jsx)("div",{className:"debug-info",children:Object(n.jsx)("pre",{children:d})})]})})}),Object(n.jsx)(ae.a,{open:b,autoHideDuration:c,onClose:u,children:Object(n.jsxs)(be,{onClose:u,severity:"success",children:["\u6b63\u5728\u64ad\u653e:  ",e," Hz,  ",c," ms,  ",(100*i).toFixed(0)," %,  ",j]})})]})},ue=c(80),me=c.n(ue);var pe=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(G,{back:"/",title:"\u952e\u76d8\u6d4b\u8bd5"}),Object(n.jsx)("div",{className:me.a.keyboard,children:Object(n.jsx)(l.a,{maxWidth:"md",children:Object(n.jsx)("div",{className:"layout-box",children:"TODO"})})})]})};c(110);var ve=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(G,{back:"/",title:"\u6253\u5f00\u6587\u4ef6"}),"TODO"]})};c(111);var fe=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(G,{back:"/",title:"\u5f55\u5236\u58f0\u97f3"}),"TODO"]})};c(112);var ge=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(G,{back:"/",title:"\u622a\u53d6\u7247\u6bb5"}),"TODO"]})};c(113);var ye=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(G,{back:"/",title:"\u9891\u7387\u5206\u6790"}),"TODO"]})};c(114);var Ne=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(G,{back:"/",title:"\u5b9e\u65f6\u5206\u6790"}),"TODO"]})};c(115);var ke=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(G,{back:"/",title:"\u53d8\u58f0\u5668"}),"TODO"]})};c(116);var Te=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(G,{back:"/",title:"\u8bbe\u7f6e"}),"TODO"]})};var Fe=c(81),_e=c.n(Fe);var we=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(G,{back:"/",title:"\u5173\u4e8e"}),Object(n.jsx)("div",{className:_e.a.about,children:Object(n.jsx)(l.a,{maxWidth:"md",children:Object(n.jsxs)("div",{className:"layout-box",children:[Object(n.jsx)(L.a,{variant:"h1",children:"shva \u4eba\u58f0\u5206\u6790"}),Object(n.jsx)("a",{className:"main-link",target:"_blank",href:"https://github.com/sceext2/shva",children:"https://github.com/sceext2/shva"}),Object(n.jsx)("p",{className:"version",children:Object(n.jsx)("code",{children:"shva version 0.1.0-2 test20201220 0013"})}),Object(n.jsx)(L.a,{variant:"h2",children:"LICENSE"}),Object(n.jsx)("pre",{className:"license",children:"shva : sceext human voice analyzer\nCopyright (C) 2020  sceext\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\n\nYou should have received a copy of the GNU General Public License\nalong with this program.  If not, see <https://www.gnu.org/licenses/>.\n"})]})})})]})};var Se=function(){return Object(n.jsx)("div",{className:"app-root",children:Object(n.jsx)(j.a,{children:Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{path:"/",exact:!0,children:Object(n.jsx)(M,{})}),Object(n.jsx)(o.a,{path:"/sound",children:Object(n.jsx)(he,{})}),Object(n.jsx)(o.a,{path:"/keyboard",children:Object(n.jsx)(pe,{})}),Object(n.jsx)(o.a,{path:"/open",children:Object(n.jsx)(ve,{})}),Object(n.jsx)(o.a,{path:"/record",children:Object(n.jsx)(fe,{})}),Object(n.jsx)(o.a,{path:"/cut",children:Object(n.jsx)(ge,{})}),Object(n.jsx)(o.a,{path:"/freq",children:Object(n.jsx)(ye,{})}),Object(n.jsx)(o.a,{path:"/realtime",children:Object(n.jsx)(Ne,{})}),Object(n.jsx)(o.a,{path:"/change",children:Object(n.jsx)(ke,{})}),Object(n.jsx)(o.a,{path:"/config",children:Object(n.jsx)(Te,{})}),Object(n.jsx)(o.a,{path:"/about",children:Object(n.jsx)(we,{})})]})})})};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(Se,{})}),document.getElementById("root"))},68:function(e,t,c){e.exports={topBar:"TopBar_topBar__2FrR4"}},70:function(e,t,c){e.exports={itemBtn:"ItemBtn_itemBtn__3yx4Q"}},71:function(e,t,c){e.exports={home:"home_home__2UaYw"}},79:function(e,t,c){e.exports={sound:"sound_sound__13q-9"}},80:function(e,t,c){},81:function(e,t,c){e.exports={about:"about_about__2EvLK"}},99:function(e,t,c){}},[[117,1,2]]]);
//# sourceMappingURL=main.8c37a1e2.chunk.js.map