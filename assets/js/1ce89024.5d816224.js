"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[741],{3519:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>r});var t=i(4848),a=i(8453),s=i(1871);const o={sidebar_position:2},l="Hierarchy Cookbook",c={id:"cookbooks/hierarchy",title:"Hierarchy Cookbook",description:"How do I instantiate multiple instances with the same module parameterization?",source:"@site/docs/cookbooks/hierarchy.md",sourceDirName:"cookbooks",slug:"/cookbooks/hierarchy",permalink:"/docs/cookbooks/hierarchy",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/cookbooks/hierarchy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"chiselSidebar",previous:{title:"Naming Cookbook",permalink:"/docs/cookbooks/naming"},next:{title:"DataView Cookbook",permalink:"/docs/cookbooks/dataview"}},d={},r=[{value:"How do I instantiate multiple instances with the same module parameterization?",id:"how-do-i-instantiate-multiple-instances-with-the-same-module-parameterization",level:2},{value:"Using Definition and Instance",id:"using-definition-and-instance",level:3},{value:"Using Instantiate",id:"using-instantiate",level:3},{value:"How do I access internal fields of an instance?",id:"how-do-i-access-internal-fields-of-an-instance",level:2},{value:"How do I make my fields accessible from an instance?",id:"how-do-i-make-my-fields-accessible-from-an-instance",level:2},{value:"How do I make case classes containing Data or Modules accessible from an instance?",id:"how-do-i-make-case-classes-containing-data-or-modules-accessible-from-an-instance",level:2},{value:"How do I make type parameterized case classes accessible from an instance?",id:"how-do-i-make-type-parameterized-case-classes-accessible-from-an-instance",level:2},{value:"How do I make case classes with lots of fields accessible from an instance?",id:"how-do-i-make-case-classes-with-lots-of-fields-accessible-from-an-instance",level:2},{value:"How do I look up fields from a Definition, if I don&#39;t want to instantiate it?",id:"how-do-i-look-up-fields-from-a-definition-if-i-dont-want-to-instantiate-it",level:2},{value:"How do I parameterize a module by its children instances?",id:"how-do-i-parameterize-a-module-by-its-children-instances",level:2},{value:"How do I use the new hierarchy-specific Select functions?",id:"how-do-i-use-the-new-hierarchy-specific-select-functions",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"hierarchy-cookbook",children:"Hierarchy Cookbook"})}),"\n","\n",(0,t.jsx)(s.A,{toc:r}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-instantiate-multiple-instances-with-the-same-module-parameterization",children:"How do I instantiate multiple instances with the same module parameterization?"}),"\n",(0,t.jsx)(n.p,{children:'Prior to this package, Chisel users relied on deduplication in a FIRRTL compiler to combine\nstructurally equivalent modules into one module (aka "deduplication").\nThis package introduces the following new APIs to enable multiply-instantiated modules directly in Chisel.'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Definition(...)"})," enables elaborating a module, but does not actually instantiate that module.\nInstead, it returns a ",(0,t.jsx)(n.code,{children:"Definition"})," class which represents that module's definition."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Instance(...)"})," takes a ",(0,t.jsx)(n.code,{children:"Definition"})," and instantiates it, returning an ",(0,t.jsx)(n.code,{children:"Instance"})," object."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Instantiate(...)"})," provides an API similar to ",(0,t.jsx)(n.code,{children:"Module(...)"}),", except it uses\n",(0,t.jsx)(n.code,{children:"Definition"})," and ",(0,t.jsx)(n.code,{children:"Instance"})," to only elaborate modules once for a given set of\nparameters. It returns an ",(0,t.jsx)(n.code,{children:"Instance"})," object."]}),"\n",(0,t.jsxs)(n.p,{children:["Modules (classes or traits) which will be used with the ",(0,t.jsx)(n.code,{children:"Definition"}),"/",(0,t.jsx)(n.code,{children:"Instance"})," api should be marked\nwith the ",(0,t.jsx)(n.code,{children:"@instantiable"})," annotation at the class/trait definition."]}),"\n",(0,t.jsxs)(n.p,{children:["To make a Module's members variables accessible from an ",(0,t.jsx)(n.code,{children:"Instance"})," object, they must be annotated\nwith the ",(0,t.jsx)(n.code,{children:"@public"})," annotation. Note that this is only accessible from a Scala sense\u2014this is not\nin and of itself a mechanism for cross-module references."]}),"\n",(0,t.jsx)(n.h3,{id:"using-definition-and-instance",children:"Using Definition and Instance"}),"\n",(0,t.jsxs)(n.p,{children:["In the following example, use ",(0,t.jsx)(n.code,{children:"Definition"}),", ",(0,t.jsx)(n.code,{children:"Instance"}),", ",(0,t.jsx)(n.code,{children:"@instantiable"})," and ",(0,t.jsx)(n.code,{children:"@public"})," to create\nmultiple instances of one specific parameterization of a module, ",(0,t.jsx)(n.code,{children:"AddOne"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"import chisel3._\nimport chisel3.experimental.hierarchy.{Definition, Instance, instantiable, public}\n\n@instantiable\nclass AddOne(width: Int) extends Module {\n  @public val in  = IO(Input(UInt(width.W)))\n  @public val out = IO(Output(UInt(width.W)))\n  out := in + 1.U\n}\n\nclass AddTwo(width: Int) extends Module {\n  val in  = IO(Input(UInt(width.W)))\n  val out = IO(Output(UInt(width.W)))\n  val addOneDef = Definition(new AddOne(width))\n  val i0 = Instance(addOneDef)\n  val i1 = Instance(addOneDef)\n  i0.in := in\n  i1.in := i0.out\n  out   := i1.out\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-verilog",children:"// Generated by CIRCT firtool-1.99.2\nmodule AddOne(\n  input  [9:0] in,\n  output [9:0] out\n);\n\n  assign out = in + 10'h1;\nendmodule\n\nmodule AddTwo(\n  input        clock,\n               reset,\n  input  [9:0] in,\n  output [9:0] out\n);\n\n  wire [9:0] _i0_out;\n  AddOne i0 (\n    .in  (in),\n    .out (_i0_out)\n  );\n  AddOne i1 (\n    .in  (_i0_out),\n    .out (out)\n  );\nendmodule\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-instantiate",children:"Using Instantiate"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to the above, the following example uses ",(0,t.jsx)(n.code,{children:"Instantiate"})," to create\nmultiple instances of ",(0,t.jsx)(n.code,{children:"AddOne"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"import chisel3.experimental.hierarchy.Instantiate\n\nclass AddTwoInstantiate(width: Int) extends Module {\n  val in  = IO(Input(UInt(width.W)))\n  val out = IO(Output(UInt(width.W)))\n  val i0 = Instantiate(new AddOne(width))\n  val i1 = Instantiate(new AddOne(width))\n  i0.in := in\n  i1.in := i0.out\n  out   := i1.out\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-verilog",children:"// Generated by CIRCT firtool-1.99.2\nmodule AddOne(\n  input  [15:0] in,\n  output [15:0] out\n);\n\n  assign out = in + 16'h1;\nendmodule\n\nmodule AddTwoInstantiate(\n  input         clock,\n                reset,\n  input  [15:0] in,\n  output [15:0] out\n);\n\n  wire [15:0] _i0_out;\n  AddOne i0 (\n    .in  (in),\n    .out (_i0_out)\n  );\n  AddOne i1 (\n    .in  (_i0_out),\n    .out (out)\n  );\nendmodule\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-access-internal-fields-of-an-instance",children:"How do I access internal fields of an instance?"}),"\n",(0,t.jsxs)(n.p,{children:["You can mark internal members of a Module class or trait marked with ",(0,t.jsx)(n.code,{children:"@instantiable"})," with the ",(0,t.jsx)(n.code,{children:"@public"})," annotation.\nThe requirements are that the field is publicly accessible, is a ",(0,t.jsx)(n.code,{children:"val"})," or ",(0,t.jsx)(n.code,{children:"lazy val"}),", and must have an implementation of ",(0,t.jsx)(n.code,{children:"Lookupable"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Types that are supported by default are:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Data"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"BaseModule"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"MemBase"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"IsLookupable"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Iterable"}),"/",(0,t.jsx)(n.code,{children:"Option"}),"/",(0,t.jsx)(n.code,{children:"Either"})," containing a type that meets these requirements"]}),"\n",(0,t.jsxs)(n.li,{children:["Basic type like ",(0,t.jsx)(n.code,{children:"String"}),", ",(0,t.jsx)(n.code,{children:"Int"}),", ",(0,t.jsx)(n.code,{children:"BigInt"}),", ",(0,t.jsx)(n.code,{children:"Unit"}),", etc."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To mark a superclass's member as ",(0,t.jsx)(n.code,{children:"@public"}),", use the following pattern (shown with ",(0,t.jsx)(n.code,{children:"val clock"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"import chisel3._\nimport chisel3.experimental.hierarchy.{instantiable, public}\n\n@instantiable\nclass MyModule extends Module {\n  @public val clock = clock\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You'll get the following error message for improperly marking something as ",(0,t.jsx)(n.code,{children:"@public"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:'import chisel3._\nimport chisel3.experimental.hierarchy.{instantiable, public}\n\nobject NotValidType\n\n@instantiable\nclass MyModule extends Module {\n  @public val x = NotValidType\n}\n// error: @public is only legal within a class or trait marked @instantiable, and only on vals of types that have a Lookupable implementation. Chisel types like Data, BaseModule, and MemBase are supported, as are common Scala types like String, Int, Boolean, Iterable, Option, Either, and Tuples. Please implement Lookupable for MdocApp1.this.NotValidType.type.\n//   @public val x = ParameterizedUserDefinedType("foo", wire)\n//               ^\n'})}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-make-my-fields-accessible-from-an-instance",children:"How do I make my fields accessible from an instance?"}),"\n",(0,t.jsxs)(n.p,{children:["If an instance's fields are simple (e.g. ",(0,t.jsx)(n.code,{children:"Int"}),", ",(0,t.jsx)(n.code,{children:"String"})," etc.) they can be marked directly with ",(0,t.jsx)(n.code,{children:"@public"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Often, fields are more complicated (e.g. a user-defined case class).\nIf a case class is only made up of simple types (i.e. it does ",(0,t.jsx)(n.em,{children:"not"})," contain any ",(0,t.jsx)(n.code,{children:"Data"}),", ",(0,t.jsx)(n.code,{children:"BaseModules"}),", memories, or ",(0,t.jsx)(n.code,{children:"Instances"}),"),\nit can extend the ",(0,t.jsx)(n.code,{children:"IsLookupable"})," trait.\nThis indicates to Chisel that instances of the ",(0,t.jsx)(n.code,{children:"IsLookupable"})," class may be accessed from within instances.\n(If the class ",(0,t.jsx)(n.em,{children:"does"})," contain things like ",(0,t.jsx)(n.code,{children:"Data"})," or modules, ",(0,t.jsx)(n.a,{href:"#how-do-i-make-case-classes-containing-data-or-modules-accessible-from-an-instance",children:"the section below"}),".)"]}),"\n",(0,t.jsxs)(n.p,{children:["However, ensure that these parameters are true for ",(0,t.jsx)(n.strong,{children:"all"})," instances of a definition.\nFor example, if our parameters contained an id field which was instance-specific but defaulted to zero,\nthen the definition's id would be returned for all instances.\nThis change in behavior could lead to bugs if other code presumed the id field was correct."]}),"\n",(0,t.jsxs)(n.p,{children:["Thus, it is important that when converting normal modules to use this package,\nyou are careful about what you mark as ",(0,t.jsx)(n.code,{children:"IsLookupable"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In the following example, we added the trait ",(0,t.jsx)(n.code,{children:"IsLookupable"})," to allow the member to be marked ",(0,t.jsx)(n.code,{children:"@public"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:'import chisel3._\nimport chisel3.experimental.hierarchy.{Definition, Instance, instantiable, IsLookupable, public}\n\ncase class MyCaseClass(width: Int) extends IsLookupable\n\n@instantiable\nclass MyModule extends Module {\n  @public val x = MyCaseClass(10)\n}\n\nclass Top extends Module {\n  val inst = Instance(Definition(new MyModule))\n  println(s"Width is ${inst.x.width}")\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Width is 10\nCircuit(Top,List(DefModule(repl.MdocSession$MdocApp5$MyModule@2220e307,MyModule,false,List(),List(Port(MyModule.clock: IO[Clock],Input,SourceLine(hierarchy.md,105,2)), Port(MyModule.reset: IO[Reset],Input,SourceLine(hierarchy.md,105,2))),chisel3.internal.firrtl.ir$Block@40cab78c), DefModule(repl.MdocSession$MdocApp5$Top@51cbcaea,Top,true,List(),List(Port(Top.clock: IO[Clock],Input,SourceLine(hierarchy.md,111,7)), Port(Top.reset: IO[Bool],Input,SourceLine(hierarchy.md,111,7))),chisel3.internal.firrtl.ir$Block@671a8940)),List(),firrtl.renamemap.package$MutableRenameMap@4287667f,List(),List(),List(Layer(UnlocatableSourceInfo,Verification,Extract(Some(verification)),List(Layer(UnlocatableSourceInfo,Assert,Extract(Some(verification/assert)),List(),chisel3.layers.Verification$Assert$@2d058baf), Layer(UnlocatableSourceInfo,Assume,Extract(Some(verification/assume)),List(),chisel3.layers.Verification$Assume$@638c5550), Layer(UnlocatableSourceInfo,Cover,Extract(Some(verification/cover)),List(),chisel3.layers.Verification$Cover$@297afb0f)),chisel3.layers.Verification$@1ec14e3e)),List())\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-make-case-classes-containing-data-or-modules-accessible-from-an-instance",children:"How do I make case classes containing Data or Modules accessible from an instance?"}),"\n",(0,t.jsxs)(n.p,{children:["For case classes containing ",(0,t.jsx)(n.code,{children:"Data"}),", ",(0,t.jsx)(n.code,{children:"BaseModule"}),", ",(0,t.jsx)(n.code,{children:"MemBase"})," or ",(0,t.jsx)(n.code,{children:"Instance"})," types, you can provide an implementation of the ",(0,t.jsx)(n.code,{children:"Lookupable"})," typeclass."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["Note that Lookupable for Modules is deprecated, please cast to Instance instead (with ",(0,t.jsx)(n.code,{children:".toInstance"}),")."]})}),"\n",(0,t.jsx)(n.p,{children:"Consider the following case class:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"import chisel3._\nimport chisel3.experimental.hierarchy.{Definition, Instance, instantiable, public}\n\n@instantiable\nclass MyModule extends Module {\n  @public val wire = Wire(UInt(8.W))\n}\ncase class UserDefinedType(name: String, data: UInt, inst: Instance[MyModule])\n"})}),"\n",(0,t.jsxs)(n.p,{children:["By default, instances of ",(0,t.jsx)(n.code,{children:"UserDefinedType"})," will not be accessible from instances:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:'@instantiable\nclass HasUserDefinedType extends Module {\n  val inst = Module(new MyModule)\n  val wire = Wire(UInt(8.W))\n  @public val x = UserDefinedType("foo", wire, inst.toInstance)\n}\n// error: @public is only legal within a class or trait marked @instantiable, and only on vals of types that have a Lookupable implementation. Chisel types like Data, BaseModule, and MemBase are supported, as are common Scala types like String, Int, Boolean, Iterable, Option, Either, and Tuples. Please implement Lookupable for MdocApp3.this.UserDefinedType.\n//   @public val x = UserDefinedType("foo", wire, inst.toInstance)\n//               ^\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We can implement the ",(0,t.jsx)(n.code,{children:"Lookupable"})," type class for ",(0,t.jsx)(n.code,{children:"UserDefinedType"})," in order to make it accessible.\nThis involves defining an implicit val in the companion object for ",(0,t.jsx)(n.code,{children:"UserDefinedType"}),".\nBecause ",(0,t.jsx)(n.code,{children:"UserDefinedType"})," has three fields, we use the ",(0,t.jsx)(n.code,{children:"Lookupable.product3"})," factory.\nIt takes 4 type parameters: the type of the case class, and the types of each of its fields."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["If any fields are ",(0,t.jsx)(n.code,{children:"BaseModules"}),", you must change them to be ",(0,t.jsx)(n.code,{children:"Instance[_]"})," in order to define the ",(0,t.jsx)(n.code,{children:"Lookupable"})," typeclass."]})}),"\n",(0,t.jsxs)(n.p,{children:["For more information about typeclasses, see the ",(0,t.jsx)(n.a,{href:"https://www.chisel-lang.org/chisel3/docs/explanations/dataview#type-classes",children:"DataView section on Type Classes"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"import chisel3.experimental.hierarchy.Lookupable\nobject UserDefinedType {\n  // Use Lookupable.Simple type alias as return type.\n  implicit val lookupable: Lookupable.Simple[UserDefinedType] =\n    Lookupable.product3[UserDefinedType, String, UInt, Instance[MyModule]](\n      // Provide the recipe for converting the UserDefinedType to a Tuple.\n      x => (x.name, x.data, x.inst),\n      // Provide the recipe for converting a Tuple to a user defined type.\n      // For case classes, you can use the built-in factory method.\n      UserDefinedType.apply\n    )\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, we can access instances of ",(0,t.jsx)(n.code,{children:"UserDefinedType"})," from instances:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:'@instantiable\nclass HasUserDefinedType extends Module {\n  val inst = Module(new MyModule)\n  val wire = Wire(UInt(8.W))\n  @public val x = UserDefinedType("foo", wire, inst.toInstance)\n}\nclass Top extends Module {\n  val inst = Instance(Definition(new HasUserDefinedType))\n  println(s"Name is: ${inst.x.name}")\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-make-type-parameterized-case-classes-accessible-from-an-instance",children:"How do I make type parameterized case classes accessible from an instance?"}),"\n",(0,t.jsx)(n.p,{children:"Consider the following type-parameterized case class:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"import chisel3._\nimport chisel3.experimental.hierarchy.{Definition, Instance, instantiable, public}\n\ncase class ParameterizedUserDefinedType[A, T <: Data](value: A, data: T)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Similarly to ",(0,t.jsx)(n.code,{children:"HasUserDefinedType"})," we need to define an implicit to provide the ",(0,t.jsx)(n.code,{children:"Lookupable"})," typeclass.\nUnlike the simpler example above, however, we use an ",(0,t.jsx)(n.code,{children:"implicit def"})," to handle the type parameters:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"import chisel3.experimental.hierarchy.Lookupable\nobject ParameterizedUserDefinedType {\n  // Type class materialization is recursive, so both A and T must have Lookupable instances.\n  // We required this for A via the context bound `: Lookupable`.\n  // Data is a Chisel built-in so is known to have a Lookupable instance.\n  implicit def lookupable[A : Lookupable, T <: Data]: Lookupable.Simple[ParameterizedUserDefinedType[A, T]] =\n    Lookupable.product2[ParameterizedUserDefinedType[A, T], A, T](\n      x => (x.value, x.data),\n      ParameterizedUserDefinedType.apply\n    )\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, we can access instances of ",(0,t.jsx)(n.code,{children:"ParameterizedUserDefinedType"})," from instances:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:'class ChildModule extends Module {\n  @public val wire = Wire(UInt(8.W))\n}\n@instantiable\nclass HasUserDefinedType extends Module {\n  val wire = Wire(UInt(8.W))\n  @public val x = ParameterizedUserDefinedType("foo", wire)\n  @public val y = ParameterizedUserDefinedType(List(1, 2, 3), wire)\n}\nclass Top extends Module {\n  val inst = Instance(Definition(new HasUserDefinedType))\n  println(s"x.value is: ${inst.x.value}")\n  println(s"y.value.head is: ${inst.y.value.head}")\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-make-case-classes-with-lots-of-fields-accessible-from-an-instance",children:"How do I make case classes with lots of fields accessible from an instance?"}),"\n",(0,t.jsxs)(n.p,{children:["Lookupable provides factories for ",(0,t.jsx)(n.code,{children:"product1"})," to ",(0,t.jsx)(n.code,{children:"product5"}),'.\nIf your class has more than 5 fields, you can use nested tuples as "pseduo-fields" in the mapping.']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"case class LotsOfFields(a: Data, b: Data, c: Data, d: Data, e: Data, f: Data)\nobject LotsOfFields {\n  implicit val lookupable: Lookupable.Simple[LotsOfFields] =\n    Lookupable.product5[LotsOfFields, Data, Data, Data, Data, (Data, Data)](\n      x => (x.a, x.b, x.c, x.d, (x.e, x.f)),\n      // Cannot use factory method directly this time since we have to unpack the tuple.\n      { case (a, b, c, d, (e, f)) => LotsOfFields(a, b, c, d, e, f) },\n    )\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-look-up-fields-from-a-definition-if-i-dont-want-to-instantiate-it",children:"How do I look up fields from a Definition, if I don't want to instantiate it?"}),"\n",(0,t.jsxs)(n.p,{children:["Just like ",(0,t.jsx)(n.code,{children:"Instance"}),"s, ",(0,t.jsx)(n.code,{children:"Definition"}),"'s also contain accessors for ",(0,t.jsx)(n.code,{children:"@public"})," members.\nAs such, you can directly access them:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:'import chisel3._\nimport chisel3.experimental.hierarchy.{Definition, instantiable, public}\n\n@instantiable\nclass AddOne(val width: Int) extends RawModule {\n  @public val width = width\n  @public val in  = IO(Input(UInt(width.W)))\n  @public val out = IO(Output(UInt(width.W)))\n  out := in + 1.U\n}\n\nclass Top extends Module {\n  val definition = Definition(new AddOne(10))\n  println(s"Width is: ${definition.width}")\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-verilog",children:"// Generated by CIRCT firtool-1.99.2\nmodule Top(\n  input clock,\n        reset\n);\n\nendmodule\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-parameterize-a-module-by-its-children-instances",children:"How do I parameterize a module by its children instances?"}),"\n",(0,t.jsx)(n.p,{children:"Prior to the introduction of this package, a parent module would have to pass all necessary parameters\nwhen instantiating a child module.\nThis had the unfortunate consequence of requiring a parent's parameters to always contain the child's\nparameters, which was an unnecessary coupling which lead to some anti-patterns."}),"\n",(0,t.jsxs)(n.p,{children:["Now, a parent can take a child ",(0,t.jsx)(n.code,{children:"Definition"})," as an argument, and instantiate it directly.\nIn addition, it can analyze the parameters used in the definition to parameterize itself.\nIn a sense, now the child can actually parameterize the parent."]}),"\n",(0,t.jsxs)(n.p,{children:["In the following example, we create a definition of ",(0,t.jsx)(n.code,{children:"AddOne"}),", and pass the definition to ",(0,t.jsx)(n.code,{children:"AddTwo"}),".\nThe width of the ",(0,t.jsx)(n.code,{children:"AddTwo"})," ports are now derived from the parameterization of the ",(0,t.jsx)(n.code,{children:"AddOne"})," instance."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"import chisel3._\nimport chisel3.experimental.hierarchy.{Definition, Instance, instantiable, public}\n\n@instantiable\nclass AddOne(val width: Int) extends Module {\n  @public val width = width\n  @public val in  = IO(Input(UInt(width.W)))\n  @public val out = IO(Output(UInt(width.W)))\n  out := in + 1.U\n}\n\nclass AddTwo(addOneDef: Definition[AddOne]) extends Module {\n  val i0 = Instance(addOneDef)\n  val i1 = Instance(addOneDef)\n  val in  = IO(Input(UInt(addOneDef.width.W)))\n  val out = IO(Output(UInt(addOneDef.width.W)))\n  i0.in := in\n  i1.in := i0.out\n  out   := i1.out\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-verilog",children:"// Generated by CIRCT firtool-1.99.2\nmodule AddOne(\n  input  [9:0] in,\n  output [9:0] out\n);\n\n  assign out = in + 10'h1;\nendmodule\n\nmodule AddTwo(\n  input        clock,\n               reset,\n  input  [9:0] in,\n  output [9:0] out\n);\n\n  wire [9:0] _i0_out;\n  AddOne i0 (\n    .in  (in),\n    .out (_i0_out)\n  );\n  AddOne i1 (\n    .in  (_i0_out),\n    .out (out)\n  );\nendmodule\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-use-the-new-hierarchy-specific-select-functions",children:"How do I use the new hierarchy-specific Select functions?"}),"\n",(0,t.jsx)(n.p,{children:"Select functions can be applied after a module has been elaborated, either in a Chisel Aspect or in a parent module applied to a child module."}),"\n",(0,t.jsxs)(n.p,{children:["There are seven hierarchy-specific functions, which (with the exception of ",(0,t.jsx)(n.code,{children:"ios"}),") either return ",(0,t.jsx)(n.code,{children:"Instance"}),"'s or ",(0,t.jsx)(n.code,{children:"Definition"}),"'s:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"instancesIn(parent)"}),": Return all instances directly instantiated locally within ",(0,t.jsx)(n.code,{children:"parent"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"instancesOf[type](parent)"}),": Return all instances of provided ",(0,t.jsx)(n.code,{children:"type"})," directly instantiated locally within ",(0,t.jsx)(n.code,{children:"parent"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"allInstancesOf[type](root)"}),": Return all instances of provided ",(0,t.jsx)(n.code,{children:"type"})," directly and indirectly instantiated, locally and deeply, starting from ",(0,t.jsx)(n.code,{children:"root"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"definitionsIn"}),": Return definitions of all instances directly instantiated locally within ",(0,t.jsx)(n.code,{children:"parent"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"definitionsOf[type]"}),": Return definitions of all instances of provided ",(0,t.jsx)(n.code,{children:"type"})," directly instantiated locally within ",(0,t.jsx)(n.code,{children:"parent"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"allDefinitionsOf[type]"}),": Return all definitions of instances of provided ",(0,t.jsx)(n.code,{children:"type"})," directly and indirectly instantiated, locally and deeply, starting from ",(0,t.jsx)(n.code,{children:"root"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ios"}),": Returns all the I/Os of the provided definition or instance."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To demonstrate this, consider the following. We mock up an example where we are using the ",(0,t.jsx)(n.code,{children:"Select.allInstancesOf"})," and ",(0,t.jsx)(n.code,{children:"Select.allDefinitionsOf"})," to annotate instances and the definition of ",(0,t.jsx)(n.code,{children:"EmptyModule"}),". When converting the ",(0,t.jsx)(n.code,{children:"ChiselAnnotation"})," to firrtl's ",(0,t.jsx)(n.code,{children:"Annotation"}),", we print out the resulting ",(0,t.jsx)(n.code,{children:"Target"}),". As shown, despite ",(0,t.jsx)(n.code,{children:"EmptyModule"})," actually only being elaborated once, we still provide different targets depending on how the instance or definition is selected."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:'import chisel3._\nimport chisel3.experimental.hierarchy.{Definition, Instance, Hierarchy, instantiable, public}\nimport firrtl.annotations.{IsModule, NoTargetAnnotation}\ncase object EmptyAnnotation extends NoTargetAnnotation\ncase class MyChiselAnnotation(m: Hierarchy[RawModule], tag: String) extends experimental.ChiselAnnotation {\n  def toFirrtl = {\n    println(tag + ": " + m.toTarget)\n    EmptyAnnotation\n  }\n}\n\n@instantiable\nclass EmptyModule extends Module {\n  println("Elaborating EmptyModule!")\n}\n\n@instantiable\nclass TwoEmptyModules extends Module {\n  val definition = Definition(new EmptyModule)\n  val i0         = Instance(definition)\n  val i1         = Instance(definition)\n}\n\nclass Top extends Module {\n  val definition = Definition(new TwoEmptyModules)\n  val instance   = Instance(definition)\n  aop.Select.allInstancesOf[EmptyModule](instance).foreach { i =>\n    experimental.annotate(MyChiselAnnotation(i, "instance"))\n  }\n  aop.Select.allDefinitionsOf[EmptyModule](instance).foreach { d =>\n    experimental.annotate(MyChiselAnnotation(d, "definition"))\n  }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Elaborating EmptyModule!\ninstance: ~Top|Top/instance:TwoEmptyModules/i0:EmptyModule\ninstance: ~Top|Top/instance:TwoEmptyModules/i1:EmptyModule\ndefinition: ~Top|EmptyModule\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also use ",(0,t.jsx)(n.code,{children:"Select.ios"})," on either a ",(0,t.jsx)(n.code,{children:"Definition"})," or an ",(0,t.jsx)(n.code,{children:"Instance"})," to annotate the I/Os appropriately:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:'case class MyIOAnnotation(m: Data, tag: String) extends experimental.ChiselAnnotation {\n  def toFirrtl = {\n    println(tag + ": " + m.toTarget)\n    EmptyAnnotation\n  }\n}\n\n@instantiable\nclass InOutModule extends Module {\n  @public val in = IO(Input(Bool()))\n  @public val out = IO(Output(Bool()))\n  out := in\n}\n\n@instantiable\nclass TwoInOutModules extends Module {\n  val in = IO(Input(Bool()))\n  val out = IO(Output(Bool()))\n  val definition = Definition(new InOutModule)\n  val i0         = Instance(definition)\n  val i1         = Instance(definition)\n  i0.in := in\n  i1.in := i0.out\n  out := i1.out\n}\n\nclass InOutTop extends Module {\n  val definition = Definition(new TwoInOutModules)\n  val instance   = Instance(definition)\n  aop.Select.allInstancesOf[InOutModule](instance).foreach { i =>\n    aop.Select.ios(i).foreach { io =>\n      experimental.annotate(MyIOAnnotation(io, "instance io"))\n  }}\n  aop.Select.allDefinitionsOf[InOutModule](instance).foreach { d =>\n    aop.Select.ios(d).foreach {io =>\n      experimental.annotate(MyIOAnnotation(io, "definition io"))\n  }}\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"instance io: ~InOutTop|InOutTop/instance:TwoInOutModules/i0:InOutModule>clock\ninstance io: ~InOutTop|InOutTop/instance:TwoInOutModules/i0:InOutModule>reset\ninstance io: ~InOutTop|InOutTop/instance:TwoInOutModules/i0:InOutModule>in\ninstance io: ~InOutTop|InOutTop/instance:TwoInOutModules/i0:InOutModule>out\ninstance io: ~InOutTop|InOutTop/instance:TwoInOutModules/i1:InOutModule>clock\ninstance io: ~InOutTop|InOutTop/instance:TwoInOutModules/i1:InOutModule>reset\ninstance io: ~InOutTop|InOutTop/instance:TwoInOutModules/i1:InOutModule>in\ninstance io: ~InOutTop|InOutTop/instance:TwoInOutModules/i1:InOutModule>out\ndefinition io: ~InOutTop|InOutModule>clock\ndefinition io: ~InOutTop|InOutModule>reset\ndefinition io: ~InOutTop|InOutModule>in\ndefinition io: ~InOutTop|InOutModule>out\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1871:(e,n,i)=>{i.d(n,{A:()=>o});i(6540);var t=i(5195);const a={tableOfContentsInline:"tableOfContentsInline_prmo"};var s=i(4848);function o(e){let{toc:n,minHeadingLevel:i,maxHeadingLevel:o}=e;return(0,s.jsx)("div",{className:a.tableOfContentsInline,children:(0,s.jsx)(t.A,{toc:n,minHeadingLevel:i,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null})})}},5195:(e,n,i)=>{i.d(n,{A:()=>f});var t=i(6540),a=i(6342);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),i=Array(7).fill(-1);n.forEach(((e,n)=>{const t=i.slice(2,e.level);e.parentIndex=Math.max(...t),i[e.level]=n}));const t=[];return n.forEach((e=>{const{parentIndex:i,...a}=e;i>=0?n[i].children.push(a):t.push(a)})),t}function o(e){let{toc:n,minHeadingLevel:i,maxHeadingLevel:t}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:i,maxHeadingLevel:t});return function(e){return e.level>=i&&e.level<=t}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function c(e,n){let{anchorTopOffset:i}=n;const t=e.find((e=>l(e).top>=i));if(t){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(t))?t:e[e.indexOf(t)-1]??null}return e[e.length-1]??null}function d(){const e=(0,t.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.p)();return(0,t.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function r(e){const n=(0,t.useRef)(void 0),i=d();(0,t.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:t,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(t),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:i}=e;const t=[];for(let a=n;a<=i;a+=1)t.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:s,maxHeadingLevel:o}),d=c(l,{anchorTopOffset:i.current}),r=e.find((e=>d&&d.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,i){i?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===r)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,i])}var h=i(8774),u=i(4848);function p(e){let{toc:n,className:i,linkClassName:t,isChild:a}=e;return n.length?(0,u.jsx)("ul",{className:a?void 0:i,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(h.A,{to:`#${e.id}`,className:t??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(p,{isChild:!0,toc:e.children,className:i,linkClassName:t})]},e.id)))}):null}const m=t.memo(p);function f(e){let{toc:n,className:i="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:h,...p}=e;const f=(0,a.p)(),x=d??f.tableOfContents.minHeadingLevel,j=h??f.tableOfContents.maxHeadingLevel,y=function(e){let{toc:n,minHeadingLevel:i,maxHeadingLevel:a}=e;return(0,t.useMemo)((()=>o({toc:s(n),minHeadingLevel:i,maxHeadingLevel:a})),[n,i,a])}({toc:n,minHeadingLevel:x,maxHeadingLevel:j});return r((0,t.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:x,maxHeadingLevel:j}}),[l,c,x,j])),(0,u.jsx)(m,{toc:y,className:i,linkClassName:l,...p})}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(6540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);