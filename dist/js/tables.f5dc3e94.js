(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tables"],{"8840d":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section"},[a("title-bar",[t._v(" Tables "),a("router-link",{staticClass:"button is-primary",attrs:{slot:"button",to:"/"},slot:"button"},[t._v(" Dashboard ")])],1),a("notification",{staticClass:"is-primary"},[a("div",[a("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),a("b",[t._v("Sorted and paginated table.")]),t._v(" Based on Buefy's table. ")],1)]),a("card-component",{staticClass:"has-table",attrs:{title:"Clients",icon:"account-multiple"}},[a("clients-table-sample",{attrs:{"data-url":"/data-sources/clients.json",checkable:!0}})],1),a("hr"),a("notification",{staticClass:"is-primary"},[a("div",[a("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),a("b",[t._v("Tightly wrapped")]),t._v(" — table header becomes a card header ")],1)]),a("card-component",{staticClass:"has-table has-mobile-sort-spaced"},[a("clients-table-sample",{attrs:{"data-url":"/data-sources/clients.json",checkable:!0}})],1),a("hr"),a("notification",{staticClass:"is-primary"},[a("div",[a("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),a("b",[t._v("Empty table.")]),t._v(" When there's nothing to show ")],1)]),a("card-component",{staticClass:"has-table"},[a("clients-table-sample")],1)],1)},i=[],l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.isDismissed?t._e():a("div",{staticClass:"notification"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[t._t("default")],2)]),a("div",{staticClass:"level-right"},[a("button",{staticClass:"button is-small is-white",attrs:{type:"button"},on:{click:t.dismiss}},[t._v("Dismiss")])])])])},n=[],c={name:"Notification",data:function(){return{isDismissed:!1}},methods:{dismiss:function(){this.isDismissed=!0,this.$buefy.snackbar.open({message:"Dismissed",queue:!1})}}},o=c,r=a("2877"),d=Object(r["a"])(o,l,n,!1,null,null,null),u=d.exports,b=a("7080"),m=a("6df7"),f=a("1e1d"),p={name:"Tables",components:{TitleBar:f["a"],CardComponent:m["a"],ClientsTableSample:b["a"],Notification:u}},h=p,v=Object(r["a"])(h,e,i,!1,null,"23e5b9d7",null);s["default"]=v.exports}}]);
//# sourceMappingURL=tables.f5dc3e94.js.map