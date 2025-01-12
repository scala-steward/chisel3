"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[340],{6156:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var o=l(4848),t=l(8453);const c={layout:"docs",title:"Multiple Clock Domains",section:"chisel3"},i="Multiple Clock Domains",s={id:"explanations/multi-clock",title:"Multiple Clock Domains",description:"Chisel 3 supports multiple clock domains as follows.",source:"@site/docs/explanations/multi-clock.md",sourceDirName:"explanations",slug:"/explanations/multi-clock",permalink:"/docs/explanations/multi-clock",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/explanations/multi-clock.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Multiple Clock Domains",section:"chisel3"},sidebar:"chiselSidebar",previous:{title:"Motivation",permalink:"/docs/explanations/motivation"},next:{title:"Muxes and Input Selection",permalink:"/docs/explanations/muxes-and-input-selection"}},a={},u=[];function r(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"multiple-clock-domains",children:"Multiple Clock Domains"})}),"\n",(0,o.jsx)(n.p,{children:"Chisel 3 supports multiple clock domains as follows."}),"\n",(0,o.jsxs)(n.p,{children:["Note that in order to cross clock domains safely, you will need appropriate synchronization logic (such as an asynchronous FIFO). You can use the ",(0,o.jsx)(n.a,{href:"https://github.com/ucb-bar/asyncqueue",children:"AsyncQueue library"})," to do this easily."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"import chisel3._\n\nclass MultiClockModule extends Module {\n  val io = IO(new Bundle {\n    val clockB = Input(Clock())\n    val resetB = Input(Bool())\n    val stuff = Input(Bool())\n  })\n\n  // This register is clocked against the module clock.\n  val regClock = RegNext(io.stuff)\n\n  withClockAndReset (io.clockB, io.resetB) {\n    // In this withClock scope, all synchronous elements are clocked against io.clockB.\n    // Reset for flops in this domain is using the explicitly provided reset io.resetB.\n\n    // This register is clocked against io.clockB.\n    val regClockB = RegNext(io.stuff)\n  }\n\n  // This register is also clocked against the module clock.\n  val regClock2 = RegNext(io.stuff)\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can also instantiate modules in another clock domain:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"import chisel3._\n\nclass ChildModule extends Module {\n  val io = IO(new Bundle{\n    val in = Input(Bool())\n  })\n}\nclass MultiClockModule extends Module {\n  val io = IO(new Bundle {\n    val clockB = Input(Clock())\n    val resetB = Input(Bool())\n    val stuff = Input(Bool())\n  })\n  val clockB_child = withClockAndReset(io.clockB, io.resetB) { Module(new ChildModule) }\n  clockB_child.io.in := io.stuff\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you only want to connect your clock to a new clock domain and use the regular implicit reset signal, you can use ",(0,o.jsx)(n.code,{children:"withClock(clock)"})," instead of ",(0,o.jsx)(n.code,{children:"withClockAndReset"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"import chisel3._\n\nclass MultiClockModule extends Module {\n  val io = IO(new Bundle {\n    val clockB = Input(Clock())\n    val stuff = Input(Bool())\n  })\n\n  // This register is clocked against the module clock.\n  val regClock = RegNext(io.stuff)\n\n  withClock (io.clockB) {\n    // In this withClock scope, all synchronous elements are clocked against io.clockB.\n\n    // This register is clocked against io.clockB, but uses implict reset from the parent context.\n    val regClockB = RegNext(io.stuff)\n  }\n\n  // This register is also clocked against the module clock.\n  val regClock2 = RegNext(io.stuff)\n}\n\n// Instantiate module in another clock domain with implicit reset.\nclass MultiClockModule2 extends Module {\n  val io = IO(new Bundle {\n    val clockB = Input(Clock())\n    val stuff = Input(Bool())\n  })\n  val clockB_child = withClock(io.clockB) { Module(new ChildModule) }\n  clockB_child.io.in := io.stuff\n}\n\nclass ChildModule extends Module {\n  val io = IO(new Bundle{\n    val in = Input(Bool())\n  })\n}\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>s});var o=l(6540);const t={},c=o.createContext(t);function i(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);