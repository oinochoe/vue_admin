(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e55be"],{"93c1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("core-toolbar"),a("core-drawer"),a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{md12:""}},[a("material-card",{attrs:{color:"#00bcd4",flat:"","full-width":"",title:"쿠폰 등록 리스트",text:"Moca 쿠폰 등록 리스트 입니다."}},[a("v-data-table",{attrs:{headers:t.headers,items:t.items,"items-per-page":5},scopedSlots:t._u([{key:"headerCell",fn:function(e){var n=e.header;return[a("span",{staticClass:"subheading font-weight-light text--darken-3",domProps:{textContent:t._s(n.text)}})]}},{key:"items",fn:function(e){var n=e.item;return[a("td",[t._v(t._s(n.num))]),a("td",[t._v(t._s(n.telephone))]),a("td",[t._v(t._s(n.date))]),a("td",{staticClass:"text-xs-right"},[a("span",{staticClass:"v-tooltip v-tooltip--top"},[a("span",[a("v-btn",{staticClass:"v-btn--simple v-btn v-btn--icon theme--light danger",on:{click:function(e){return t.removeItem(n.num)}}},[a("div",{staticClass:"v-btn__content"},[a("i",{staticClass:"v-icon mdi mdi-close theme--light error--text",attrs:{"aria-hidden":"true"}})])])],1)])])]}}])})],1)],1)],1)],1)],1)},s=[],i=(a("4de4"),{data:function(){return{headers:[{sortable:!1,text:"인덱스",value:"num"},{sortable:!1,text:"전화번호",value:"telephone"},{sortable:!0,text:"등록일",value:"date"},{sortable:!1,text:"삭제",value:"",align:"right"}],items:[]}},created:function(){var t=this;this.$http.get("/getList").then((function(e){t.items=e.data}))},methods:{removeItem:function(t){var e=this;confirm("정말로 삭제하시겠습니까?")&&this.$http.delete("/deleteItem/".concat(t)).then((function(a){a&&(e.items=e.items.filter((function(e){return e.num!=t})))}))}}}),r=i,l=a("2877"),o=Object(l["a"])(r,n,s,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0e55be.82ed4667.js.map