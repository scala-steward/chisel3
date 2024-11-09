"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[1921],{2659:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var o=i(4848),l=i(8453);const s={layout:"docs",title:"Modules",section:"chisel3"},t="Modules",d={id:"explanations/modules",title:"Modules",description:"Chisel modules are very similar to Verilog modules in",source:"@site/docs/explanations/modules.md",sourceDirName:"explanations",slug:"/explanations/modules",permalink:"/docs/explanations/modules",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/explanations/modules.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Modules",section:"chisel3"},sidebar:"chiselSidebar",previous:{title:"Module Prefixing",permalink:"/docs/explanations/moduleprefix"},next:{title:"Motivation",permalink:"/docs/explanations/motivation"}},c={},a=[{value:"Module Hierarchy",id:"module-hierarchy",level:3},{value:"<code>RawModule</code>",id:"rawmodule",level:3}];function r(e){const n={code:"code",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"modules",children:"Modules"})}),"\n",(0,o.jsxs)(n.p,{children:["Chisel ",(0,o.jsx)(n.em,{children:"modules"})," are very similar to Verilog ",(0,o.jsx)(n.em,{children:"modules"})," in\ndefining a hierarchical structure in the generated circuit."]}),"\n",(0,o.jsxs)(n.p,{children:["The hierarchical module namespace is accessible in downstream tools\nto aid in debugging and physical layout.  A user-defined module is\ndefined as a ",(0,o.jsx)(n.em,{children:"class"})," which:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["inherits from ",(0,o.jsx)(n.code,{children:"Module"}),","]}),"\n",(0,o.jsxs)(n.li,{children:["contains at least one interface wrapped in a Module's ",(0,o.jsx)(n.code,{children:"IO()"})," method (traditionally stored in a port field named ",(0,o.jsx)(n.code,{children:"io"}),"), and"]}),"\n",(0,o.jsx)(n.li,{children:"wires together subcircuits in its constructor."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"As an example, consider defining your own two-input multiplexer as a\nmodule:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"import chisel3._\nclass Mux2IO extends Bundle {\n  val sel = Input(UInt(1.W))\n  val in0 = Input(UInt(1.W))\n  val in1 = Input(UInt(1.W))\n  val out = Output(UInt(1.W))\n}\n\nclass Mux2 extends Module {\n  val io = IO(new Mux2IO)\n  io.out := (io.sel & io.in1) | (~io.sel & io.in0)\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The wiring interface to a module is a collection of ports in the\nform of a ",(0,o.jsx)(n.code,{children:"Bundle"}),".  The interface to the module is defined\nthrough a field named ",(0,o.jsx)(n.code,{children:"io"}),".  For ",(0,o.jsx)(n.code,{children:"Mux2"}),", ",(0,o.jsx)(n.code,{children:"io"})," is\ndefined as a bundle with four fields, one for each multiplexer port."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:":="})," assignment operator, used here in the body of the\ndefinition, is a special operator in Chisel that wires the input of\nleft-hand side to the output of the right-hand side."]}),"\n",(0,o.jsx)(n.h3,{id:"module-hierarchy",children:"Module Hierarchy"}),"\n",(0,o.jsxs)(n.p,{children:["We can now construct circuit hierarchies, where we build larger modules out\nof smaller sub-modules.  For example, we can build a 4-input\nmultiplexer module in terms of the ",(0,o.jsx)(n.code,{children:"Mux2"})," module by wiring\ntogether three 2-input multiplexers:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"class Mux4IO extends Bundle {\n  val in0 = Input(UInt(1.W))\n  val in1 = Input(UInt(1.W))\n  val in2 = Input(UInt(1.W))\n  val in3 = Input(UInt(1.W))\n  val sel = Input(UInt(2.W))\n  val out = Output(UInt(1.W))\n}\nclass Mux4 extends Module {\n  val io = IO(new Mux4IO)\n\n  val m0 = Module(new Mux2)\n  m0.io.sel := io.sel(0)\n  m0.io.in0 := io.in0\n  m0.io.in1 := io.in1\n\n  val m1 = Module(new Mux2)\n  m1.io.sel := io.sel(0)\n  m1.io.in0 := io.in2\n  m1.io.in1 := io.in3\n\n  val m3 = Module(new Mux2)\n  m3.io.sel := io.sel(1)\n  m3.io.in0 := m0.io.out\n  m3.io.in1 := m1.io.out\n\n  io.out := m3.io.out\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We again define the module interface as ",(0,o.jsx)(n.code,{children:"io"})," and wire up the\ninputs and outputs.  In this case, we create three ",(0,o.jsx)(n.code,{children:"Mux2"}),"\nchildren modules, using the ",(0,o.jsx)(n.code,{children:"Module"})," constructor function and\nthe Scala ",(0,o.jsx)(n.code,{children:"new"})," keyword to create a\nnew object.  We then wire them up to one another and to the ports of\nthe ",(0,o.jsx)(n.code,{children:"Mux4"})," interface."]}),"\n",(0,o.jsxs)(n.p,{children:["Note: Chisel ",(0,o.jsx)(n.code,{children:"Module"}),"s have an implicit clock (called ",(0,o.jsx)(n.code,{children:"clock"}),") and\nan implicit reset (called ",(0,o.jsx)(n.code,{children:"reset"}),"). To create modules without implicit\nclock and reset, Chisel provides ",(0,o.jsx)(n.code,{children:"RawModule"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"rawmodule",children:(0,o.jsx)(n.code,{children:"RawModule"})}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"RawModule"})," is a module that ",(0,o.jsx)(n.strong,{children:"does not provide an implicit clock and reset."}),"\nThis can be useful when interfacing a Chisel module with a design that expects\na specific naming convention for clock or reset."]}),"\n",(0,o.jsxs)(n.p,{children:["Then we can use it in place of ",(0,o.jsx)(n.em,{children:"Module"})," usage :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"import chisel3.{RawModule, withClockAndReset}\n\nclass Foo extends Module {\n  val io = IO(new Bundle{\n    val a = Input(Bool())\n    val b = Output(Bool())\n  })\n  io.b := !io.a\n}\n\nclass FooWrapper extends RawModule {\n  val a_i  = IO(Input(Bool()))\n  val b_o  = IO(Output(Bool()))\n  val clk  = IO(Input(Clock()))\n  val rstn = IO(Input(Bool()))\n\n  val foo = withClockAndReset(clk, !rstn){ Module(new Foo) }\n\n  foo.io.a := a_i\n  b_o := foo.io.b\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In the example above, the ",(0,o.jsx)(n.code,{children:"RawModule"})," is used to change the reset polarity\nof module ",(0,o.jsx)(n.code,{children:"SlaveSpi"}),". Indeed, the reset is active high by default in Chisel\nmodules, then using ",(0,o.jsx)(n.code,{children:"withClockAndReset(clock, !rstn)"})," we can use an active low\nreset in the entire design."]}),"\n",(0,o.jsxs)(n.p,{children:["The clock is just wired as is, but if needed, ",(0,o.jsx)(n.code,{children:"RawModule"})," can be used in\nconjunction with ",(0,o.jsx)(n.code,{children:"BlackBox"})," to connect a differential clock input for example."]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>d});var o=i(6540);const l={},s=o.createContext(l);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);