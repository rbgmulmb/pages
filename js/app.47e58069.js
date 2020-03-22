(function(e){function t(t){for(var a,s,r=t[0],l=t[1],c=t[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2ed8":function(e,t,n){},"451b":function(e,t,n){"use strict";var a=n("6881"),i=n.n(a);i.a},"47d7":function(e,t,n){"use strict";var a=n("aa61"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"vue-herd2"}},[n("vh-header"),n("vh-sidebar"),n("vh-create-dlg"),n("v-content",{staticStyle:{"max-height":"100vh"}},[n("vhGraphPreview"),n("graph")],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"net-wrap"},[n("v-toolbar",{attrs:{dense:"",bottom:"",absolute:"",flat:""}},[n("v-toolbar-items",[n("v-btn",{on:{click:e.reset}},[n("v-icon",[e._v("mdi-fit-to-page")])],1),n("v-btn",{attrs:{disabled:!e.canUndo},on:{click:e.undo}},[n("v-icon",[e._v("mdi-undo")])],1),n("v-btn",{attrs:{disabled:!e.canRedo},on:{click:e.redo}},[n("v-icon",[e._v("mdi-redo")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"400px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[e.selection.nodes[e.editingNodeId]?n("v-text-field",{ref:"nodeNameInput",attrs:{label:"name"},on:{focus:function(e){return e.target.select()},keypress:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.dialog=!1}},model:{value:e.selection.nodes[e.editingNodeId].name,callback:function(t){e.$set(e.selection.nodes[e.editingNodeId],"name",t)},expression:"selection.nodes[editingNodeId].name"}}):e._e()],1)],1)],1),e.hidden?e._e():n("div",{staticClass:"net-wrap",attrs:{tabindex:"0"},on:{click:e.onClick,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.onDeletePress(t)},keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.edit(t)}}},[n("d3-network",{ref:"net",attrs:{"net-nodes":e.nodes,"net-links":e.links,options:e.options,selection:e.selection},on:{"node-click":e.onNodeClick,"link-click":e.onLinkClick}})],1)],1)},r=[],l=n("a5b7"),c=n.n(l),d=n("2f62");class u{constructor(){this.nextNodeId=0}generateNextNodeId(){return++this.nextNodeId}}const p=new u;var h=p,v={name:"graph",components:{D3Network:c.a},data:()=>({options:{force:3e3,nodeSize:20,nodeLabels:!0,linkLabels:!0,linkWidth:1},dialog:!1,editingNodeId:"0",emulationEnabled:!0,hidden:!1}),computed:{...Object(d["e"])("currentGraph",["nodes","links","selection","canUndo","canRedo"]),...Object(d["c"])("currentGraph",["getNode"]),...Object(d["c"])("graphs",["selected"])},watch:{selected(e){e&&this.reset()},dialog(e){e&&this.$nextTick(()=>{this.$nextTick(()=>{this.$refs.nodeNameInput.focus()})})}},methods:{...Object(d["d"])("currentGraph",["resetSelection","selectNode","selectLink","addNode","addLink","removeSelected","pinNode","unpinNode","pinAllNodes","unpinAllNodes"]),...Object(d["d"])("graphs",["setScreenShotFunc"]),...Object(d["b"])("currentGraph",["undo","redo","clear"]),onNodeClick(e,t){e.shiftKey?this.selectNode(t.id):e.ctrlKey||e.metaKey?(Object.keys(this.selection.nodes).forEach(e=>this.addLink({sid:e,tid:t.id})),this.resetSelection()):(this.resetSelection(),this.selectNode(t.id))},onLinkClick(e,t){e.shiftKey?this.selectLink(t):(this.resetSelection(),this.selectLink(t))},onClick(e){if("svg"===e.target.tagName){if(e.ctrlKey||e.metaKey){const t=h.generateNextNodeId();return this.addNode({x:e.x,y:e.y,id:t}),Object.keys(this.selection.nodes).forEach(e=>this.addLink({sid:e,tid:t})),this.selectNode(t),this.editingNodeId=t,void(this.dialog=!0)}this.resetSelection()}},edit(){const e=Object.keys(this.selection.nodes);1===e.length&&(this.editingNodeId=e[0],this.dialog=!0)},onDeletePress(){this.removeSelected({}),this.resetSelection()},reset(){this.hidden=!0,this.$nextTick(()=>this.hidden=!1)}},mounted(){this.setScreenShotFunc(e=>this.$refs.net.$refs.svg.svgScreenShot(e))}},g=v,m=(n("d26e"),n("2877")),f=n("6544"),b=n.n(f),k=n("8336"),y=n("b0af"),S=n("99d9"),w=n("169a"),N=n("132d"),I=n("8654"),_=n("71d9"),x=n("2a7f"),O=Object(m["a"])(g,s,r,!1,null,null,null),C=O.exports;b()(O,{VBtn:k["a"],VCard:y["a"],VCardTitle:S["c"],VDialog:w["a"],VIcon:N["a"],VTextField:I["a"],VToolbar:_["a"],VToolbarItems:x["a"]});var j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:e.sidebar,callback:function(t){e.sidebar=t},expression:"sidebar"}},[n("v-list",{attrs:{flat:""}},e._l(e.list,(function(t){return n("v-list-item",{key:t.id,class:e.selectedId===t.id?"active":null,attrs:{"active-class":"active","exact-active-class":"active"},on:{mouseover:function(n){return e.setPreview(t.id)},mouseleave:function(t){return e.setPreview(null)},click:function(n){return e.selectGraph(t)}}},[n("v-list-item-title",[e._v(e._s(t.name))])],1)})),1)],1)},D=[],V={name:"vh-sidebar",data:()=>({editing:{},showPreviewFor:null}),computed:{...Object(d["e"])("graphs",["selectedId"]),...Object(d["c"])("graphs",["list","selected"]),sidebar:{get(){return this.$store.state.app.sidebar},set(e){this.toggleSidebar(e)}}},methods:{...Object(d["d"])("app",["toggleSidebar"]),...Object(d["b"])("graphs",["selectGraph"]),...Object(d["d"])("graphs",["setPreview"])}},L=V,P=(n("451b"),n("8860")),E=n("da13"),G=n("5d23"),T=n("f774"),$=Object(m["a"])(L,j,D,!1,null,null,null),A=$.exports;b()($,{VList:P["a"],VListItem:E["a"],VListItemTitle:G["a"],VNavigationDrawer:T["a"]});var U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"","clipped-left":""}},[e.authenticated?n("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.toggleSidebar(t)}}}):e._e(),e.editing?e._e():n("v-toolbar-title",{on:{click:function(t){e.authenticated&&e.edit()}}},[e._v("\n        "+e._s(e.selectedName)+"\n    ")]),e.authenticated&&e.editing?n("v-text-field",{attrs:{dense:"",solo:"","hide-details":"",label:"name","append-icon":"mdi-check"},on:{keyup:function(t){return t.stopPropagation(),e.onKeyUp(t)},click:function(e){return e.stopPropagation(),e.preventDefault()},"click:append":function(t){return t.stopPropagation(),t.preventDefault(),e.save(t)}},model:{value:e.editing.name,callback:function(t){e.$set(e.editing,"name",t)},expression:"editing.name"}}):e._e(),n("v-spacer"),e.authenticated?n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({staticClass:"ma-2",attrs:{outlined:"",color:"blue",small:""},on:{click:function(t){return t.stopPropagation(),e.toggleCreateDlg(t)}}},a),[n("v-icon",{attrs:{color:"blue lighten-1"}},[e._v("mdi-plus")])],1)]}}],null,!1,3884338123)},[n("span",[e._v("New")])]):e._e(),e.authenticated?n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({staticClass:"ma-2",attrs:{disabled:e.loading,outlined:"",color:"primary",small:""},on:{click:function(t){return t.stopPropagation(),e.saveCurrent(t)}}},a),[n("v-icon",[e._v("mdi-content-save")])],1)]}}],null,!1,1555918609)},[n("span",[e._v("Save current")])]):e._e(),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({staticClass:"ma-2",attrs:{outlined:"",small:"",color:"accent"},on:{click:function(t){return t.stopPropagation(),e.downloadCurrent(t)}}},a),[n("v-icon",{attrs:{color:"blue"}},[e._v("mdi-download")])],1)]}}])},[n("span",[e._v("Download file")])]),[e.authenticated?n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({staticClass:"ma-2",attrs:{outlined:"",small:"",color:"accent"},on:{click:function(t){return t.stopPropagation(),e.signOut(t)}}},a),[n("v-icon",{attrs:{color:"blue"}},[e._v("mdi-logout-variant")])],1)]}}],null,!1,4260773324)},[n("span",[e._v("Sign out")])]):n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({staticClass:"ma-2",attrs:{outlined:"",small:"",color:"accent"},on:{click:function(t){return t.stopPropagation(),e.signIn(t)}}},a),[n("v-icon",{attrs:{color:"blue"}},[e._v("mdi-login-variant")])],1)]}}])},[n("span",[e._v("Sign in")])])]],2)},F=[],K=n("59ca");const B={apiKey:"AIzaSyCE1vbS81EhdysHupkcn-URaia98YmSeB0",authDomain:"vue-herd2.firebaseapp.com",databaseURL:"https://vue-herd2.firebaseio.com",projectId:"vue-herd2",storageBucket:"vue-herd2.appspot.com",messagingSenderId:"977245362258",appId:"1:977245362258:web:bd1d49184b575c5603a78b"};n("e71f"),n("ea7b"),K["initializeApp"](B);const R=K["firestore"](),J=K["auth"](),M=K,z=e=>new Promise((t,n)=>{const a=new FileReader;a.addEventListener("loadend",e=>t(JSON.parse(e.target.result))),a.onerror=a.onabort=n,a.readAsText(e)}),q=e=>e[e.length-1],H=(e,t)=>t.split(e),W=({name:e})=>"json"===q(H(".",e)),Y=()=>({nodes:[],links:[]}),Q=e=>JSON.parse(JSON.stringify(e)),X=(e,t)=>{const n="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),a=document.createElement("a");a.setAttribute("href",n),a.setAttribute("download",t+".json"),document.body.appendChild(a),a.click(),a.remove()};var Z={name:"vh-header",data:()=>({editing:null}),computed:{...Object(d["c"])("graphs",["selectedName"]),...Object(d["c"])("auth",["authenticated"]),...Object(d["e"])("app",["loading"])},methods:{...Object(d["d"])("app",["toggleSidebar","toggleCreateDlg"]),...Object(d["b"])("graphs",["saveCurrent","updateCurrentGraphName"]),downloadCurrent(){const{nodes:e,links:t}=this.$store.state.currentGraph,{name:n,id:a}=this.$store.state.graphs.items[this.$store.state.graphs.selectedId];X({nodes:e,links:t,name:n,id:a},n)},signIn(){J.signInWithPopup(new M.auth.GoogleAuthProvider)},signOut(){J.signOut()},edit(){this.editing={name:this.selectedName},setTimeout(()=>addEventListener("click",this.close))},close(){this.editing=null,removeEventListener("click",this.close)},async save(){await this.updateCurrentGraphName(this.editing.name),this.close()},onKeyUp(e){"Escape"===e.key&&this.close(),"Enter"===e.key&&this.save()}},mounted(){this.close=this.close.bind(this)}},ee=Z,te=n("40dc"),ne=n("5bc1"),ae=n("2fa4"),ie=n("3a2f"),oe=Object(m["a"])(ee,U,F,!1,null,null,null),se=oe.exports;b()(oe,{VAppBar:te["a"],VAppBarNavIcon:ne["a"],VBtn:k["a"],VIcon:N["a"],VSpacer:ae["a"],VTextField:I["a"],VToolbarTitle:x["b"],VTooltip:ie["a"]});var re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{scrollable:"","max-width":"400px"},model:{value:e.createDlg,callback:function(t){e.createDlg=t},expression:"createDlg"}},[n("v-card",{on:{drop:function(t){return t.preventDefault(),t.stopPropagation(),e.drop(t)},dragover:function(e){return e.preventDefault()}}},[n("v-card-title",[e._v("New")]),n("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-card-text",{staticStyle:{height:"300px"}},[n("v-text-field",{attrs:{label:"Name",rules:e.rules},model:{value:e.graph.name,callback:function(t){e.$set(e.graph,"name",t)},expression:"graph.name"}}),n("v-file-input",{attrs:{label:"Select file",accept:"application/json"},on:{change:e.onChange},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1)],1),n("v-divider"),n("v-card-actions",[n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!e.valid},on:{click:e.save}},[e._v("Save")])],1)],1)],1)},le=[],ce={name:"vh-create-dlg",data:()=>({valid:!1,graph:Y(),file:null,rules:[e=>!!e||"Required."]}),computed:{createDlg:{get(){return this.$store.state.app.createDlg},set(e){this.toggleCreateDlg(e)}}},methods:{...Object(d["b"])("graphs",["create"]),...Object(d["d"])("app",["toggleCreateDlg"]),save(){this.create(this.graph),this.close()},close(){this.graph={},this.createDlg=!1},async onChange(e){if(!e)return;let t;try{t=await z(e)}catch(o){return void console.error(o)}const{name:n,nodes:a=[],links:i=[]}=t;this.graph={name:n,nodes:a,links:i}},drop(e){e.preventDefault(),e.stopPropagation();const[t]=e.dataTransfer.files;W(t)&&(this.file=t,this.onChange(t))}}},de=ce,ue=n("ce7e"),pe=n("23a7"),he=n("4bd4"),ve=Object(m["a"])(de,re,le,!1,null,null,null),ge=ve.exports;b()(ve,{VBtn:k["a"],VCard:y["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VDialog:w["a"],VDivider:ue["a"],VFileInput:pe["a"],VForm:he["a"],VTextField:I["a"]});var me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.previewImage?n("v-card",{staticClass:"preview-card",attrs:{raised:""}},[n("div",{staticClass:"preview",style:"background-image: url("+e.previewImage+")"})]):e._e()},fe=[],be={name:"vh-graph-preview",computed:{...Object(d["c"])("graphs",["previewImage"])}},ke=be,ye=(n("47d7"),Object(m["a"])(ke,me,fe,!1,null,null,null)),Se=ye.exports;b()(ye,{VCard:y["a"]});var we={name:"vue-herd2",components:{Graph:C,vhSidebar:A,vhHeader:se,vhCreateDlg:ge,vhGraphPreview:Se},methods:{...Object(d["b"])("app",["start"])},mounted(){this.start()}},Ne=we,Ie=n("7496"),_e=n("a75b"),xe=Object(m["a"])(Ne,i,o,!1,null,null,null),Oe=xe.exports;b()(xe,{VApp:Ie["a"],VContent:_e["a"]});var Ce=n("53f4");const je=e=>{e.pinned=!0,e.fx=e.x,e.fy=e.y},De=e=>{e.pinned=!1,e.fx=null,e.fy=null},Ve={nodes:[],links:[],selection:{links:{},nodes:{}},initNodes:[],initLinks:[]},Le={emptyState:e=>{e.nodes=[...e.initNodes],e.links=[...e.initLinks]},addNode(e,t){e.nodes.push(t)},updateNode(e,{node:t,id:n}){e.nodes[n]=t},removeSelected(e,t){Object.keys(e.selection.nodes).forEach(t=>{e.nodes=e.nodes.filter(e=>e.id.toString()!==t.toString()),e.links=e.links.filter(e=>{return e.sid.toString()!==t.toString()&&e.tid.toString()!==t.toString()})}),Object.keys(e.selection.links).forEach(t=>{e.links=e.links.filter(e=>e.id.toString()!==t.toString())})},selectNode(e,t){const n=e.nodes.find(e=>e.id===t);n&&(e.selection.nodes={[n.id]:n})},addLink:(e,t)=>{e.links.push(t)},updateLink(e,{link:t,id:n}){e.links[n]=t},selectLink(e,t){e.selection.links[t.id]?delete e.selection.links[t.id]:e.selection.links={...e.selection.links,[t.id]:t}},resetSelection(e){e.selection.nodes={},e.selection.links={}},setData(e,{nodes:t=[],links:n=[]}){h.nextNodeId=t.reduce((e,{id:t})=>t>e?t:e,0),e.links=Q(n),e.nodes=Q(t),e.initLinks=Q(n),e.initNodes=Q(t)},pinNode(e,t){const n=e.nodes[t];n&&je(n)},unpinNode(e,t){const n=e.nodes[t];n&&De(n)},pinAllNodes(e){e.nodes.forEach(e=>{je(e)})},unpinAllNodes(e){e.nodes.forEach(e=>{De(e)})}},Pe={getNode:({nodes:e})=>t=>e[t]},Ee={setGraph({commit:e,dispatch:t},n){t("clear",{}),e("setData",n)}};var Ge=Object(Ce["b"])({state:Ve,actions:Ee,mutations:Le,getters:Pe,namespaced:!0,debug:!0});const Te=()=>M.firestore.Timestamp.now();class $e{constructor(){this.collection=R.collection("graphs")}get(){const{currentUser:e}=J;if(!e)throw Error("Current user is not defined!");return this.collection.where("author","==",e.uid).get().then(({docs:e})=>e.map(e=>({id:e.id,...e.data()})))}updateItem({id:e,...t}){if(!e)throw Error("ID is required!");return this.collection.doc(e).update({...t,updated:Te()})}updateItemName({id:e,name:t}){return this.updateItem({id:e,name:t})}createItem(e){const{currentUser:t}=J;if(!t)throw Error("Current user is not defined!");const n=Te();return this.collection.add({...e,author:t.uid,created:n,updated:n}).then(t=>({id:t.id,...e}))}}const Ae=new $e;var Ue=Ae;const Fe={items:{},selectedId:null,preview:null},Ke={list:({items:e})=>Object.values(e),selected:({items:e,selectedId:t})=>e[t],selectedName:({items:e,selectedId:t})=>t&&e[t].name||"Unnamed",lastUpdated:({items:e})=>Object.values(e).reduce((e,t)=>t.updated>e.updated?t:e),previewImage:({items:e,preview:t})=>t&&e[t]&&e[t].image},Be={setItems:(e,t)=>e.items=t.reduce((e,t)=>{return e[t.id]=t,e},{}),setItem:({items:e},t)=>e[t.id]=t,select:(e,t)=>e.selectedId=t,updateSelected:({selectedId:e,items:t},n)=>t[e]={...t[e],...n},setScreenShotFunc:(e,t)=>e.screenShot=()=>{return new Promise((e,n)=>t((t,a)=>{t?n(t):e(a)}))},setPreview:(e,t)=>e.preview=t},Re={async loadItems({commit:e,dispatch:t}){e("setItems",await Ue.get()),t("selectLastUpdated")},selectLastUpdated({dispatch:e,getters:t}){e("selectGraph",t.lastUpdated)},selectGraph({commit:e,dispatch:t},n){e("select",n.id),t("currentGraph/setGraph",n,{root:!0})},async saveCurrent({commit:e,state:t,rootState:{currentGraph:{nodes:n,links:a}}}){e("app/toggleLoading",!0,{root:!0});const i=await t.screenShot();await Ue.updateItem({nodes:n,links:a,image:i,id:t.selectedId}),e("updateSelected",{nodes:n,links:a,image:i}),e("app/toggleLoading",!1,{root:!0})},async updateCurrentGraphName({commit:e,state:t},n){e("app/toggleLoading",!0,{root:!0});const a={id:t.selectedId,name:n};try{await Ue.updateItemName(a)}catch(i){console.error(i)}finally{e("app/toggleLoading",!0,{root:!0})}e("updateSelected",a)},async create({commit:e},t){e("setItem",await Ue.createItem(t))},clearItems({commit:e,dispatch:t}){e("setItems",[]),t("selectGraph",{})}};var Je={namespaced:!0,state:Fe,getters:Ke,mutations:Be,actions:Re};const Me=e=>(t,n)=>t[e]="boolean"===typeof n?n:!t[e],ze={namespaced:!0,state:{sidebar:!1,createDlg:!1,loading:!1},mutations:{toggleSidebar:Me("sidebar"),toggleCreateDlg:Me("createDlg"),toggleLoading:Me("loading")},actions:{start({dispatch:e,commit:t}){J.onAuthStateChanged(n=>{t("auth/setData",n,{root:!0}),e(n?"graphs/loadItems":"graphs/clearItems",null,{root:!0})})}}};var qe=ze;const He={namespaced:!0,state:{data:null},getters:{authenticated:({data:e})=>!!e,displayName:({data:e})=>e&&e.user.displayName},mutations:{setData:(e,t)=>e.data=t}};var We=He;a["a"].use(d["a"]);var Ye=new d["a"].Store({plugins:[Object(Ce["a"])({paths:[{namespace:"currentGraph",ignoreMutations:["emptyState","selectNode","selectLink","resetSelection","setData"]}]})],modules:{graphs:Je,currentGraph:Ge,app:qe,auth:We}}),Qe=n("f309");a["a"].use(Qe["a"]);var Xe=new Qe["a"]({icons:{iconfont:"mdi"}});a["a"].config.productionTip=!1,new a["a"]({store:Ye,vuetify:Xe,render:e=>e(Oe)}).$mount("#app")},6881:function(e,t,n){},aa61:function(e,t,n){},d26e:function(e,t,n){"use strict";var a=n("2ed8"),i=n.n(a);i.a}});
//# sourceMappingURL=app.47e58069.js.map