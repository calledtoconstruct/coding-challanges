(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{EjUH:function(e,t,n){},z5MK:function(e,t,n){"use strict";n("a1Th"),n("h7Nl"),n("I5cv"),n("bWfx");var a=n("lwsE"),r=n.n(a),i=n("W8MJ"),o=n.n(i),l=n("PJYZ"),s=n.n(l),c=n("7W2i"),u=n.n(c),b=n("a1gu"),d=n.n(b),p=n("Nsbk"),h=n.n(p),m=n("QILm"),v=n.n(m),f=n("pVnL"),y=n.n(f),T=n("lSNA"),C=n.n(T),w=n("cDcd"),N=n.n(w),x=n("TSYQ"),k=n.n(x),A=n("eHHv"),E=n("LD1s"),I=n("2Ica"),g=n("hF3m"),P=n("eOGF");n("EjUH");function L(e){return function(){var t,n=h()(e);if(D()){var a=h()(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return d()(this,t)}}function D(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var W=Object(w.createContext)(),J=W.Provider,R=W.Consumer,j=Object(A.b)(R,(function(e){if(!e)throw new Error("Tab.Content and Tab.List can be only used inside Tab scope.");return{tabContext:e}})),H=function(e){u()(n,e);var t=L(n);function n(){var e;r()(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),C()(s()(e),"renderTabItem",(function(t){var n=e.props,a=n.renderItem,r=n.activeTab,i=n.onTabClick,o=n.tabContext.enableA11y,l=t.idx,s=t.tab,c=l===r,u={};return o&&(u={role:"tab","aria-selected":c}),N.a.createElement("li",y()({key:l,id:s.title,className:k()("tab-item",{active:c}),onClick:function(){return i(l,s)}},u),a(s,l))})),e}return o()(n,[{key:"getTabsWithIndex",value:function(){return this.props.tabList.map((function(e,t){return{idx:t,tab:e}}))}},{key:"getTabA11yAttr",value:function(){return this.props.tabContext.enableA11y?{role:"tablist"}:{}}},{key:"renderTabs",value:function(){var e=this.props,t=e.visibleTabCount,n=e.activeTab,a=e.tabContext.layout,r=this.getTabsWithIndex();if("vertical"===a)return r.map(this.renderTabItem);var i=r.slice(0,t);return n>=t&&(i[i.length-1]=r[n]),i.map(this.renderTabItem)}},{key:"renderTabDropdown",value:function(){var e=this.props,t=e.dropdownTitle,n=e.tabList,a=e.visibleTabCount;if(!(n.length<=a)){var r=this.getTabsWithIndex();return N.a.createElement(E.a,{className:"dropdown dropdown-auth tab-item"},N.a.createElement(I.a,{className:"dropdown-title"},t,N.a.createElement("i",{className:"ui-icon-chevron-down"})),N.a.createElement(g.a,{className:"drop-list pull-right"},N.a.createElement("ul",y()({className:"dropdown-ul"},this.getTabA11yAttr()),r.map(this.renderTabItem))))}}},{key:"render",value:function(){var e=this.props,t=e.visibleTabCount,n=e.className,a=e.tabContext,r=(e.tabList,e.renderItem,e.activeTab,e.tabProps,e.onTabClick,e.dropdownTitle,v()(e,["visibleTabCount","className","tabContext","tabList","renderItem","activeTab","tabProps","onTabClick","dropdownTitle"])),i="horizontal"===a.layout&&t;return N.a.createElement("div",y()({className:k()("render-list clearfix",n)},r),N.a.createElement("ul",y()({className:"tab-header"},this.getTabA11yAttr()),this.renderTabs()),i&&this.renderTabDropdown())}}]),n}(w.PureComponent);C()(H,"defaultProps",{activeTab:0,dropdownTitle:"More",onTabClick:P.J,renderItem:function(e){return e}});var z=function(e){u()(n,e);var t=L(n);function n(){return r()(this,n),t.apply(this,arguments)}return o()(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.tabContext,r=v()(e,["children","className","tabContext"]),i=a.enableA11y;return N.a.createElement("div",y()({className:k()("tab-list-content",n),role:i?"tabpanel":void 0},r),t)}}]),n}(w.PureComponent),M=function(e){u()(n,e);var t=L(n);function n(){return r()(this,n),t.apply(this,arguments)}return o()(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.layout,r=e.enableA11y,i=v()(e,["children","className","layout","enableA11y"]);return N.a.createElement(J,{value:{layout:a,enableA11y:r}},N.a.createElement("div",y()({className:k()("ui-tabs-wrap",n,{"vertical-layout":"vertical"===a})},i),t))}}]),n}(w.PureComponent);C()(M,"List",j(H)),C()(M,"Content",j(z)),C()(M,"defaultProps",{layout:"horizontal",enableA11y:!1}),t.a=M}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/vendors~hackerrank_r_community~hackerrank_r_packet~hackerrank_r_roles~hackerrank_r_sourcing_company~~7311ee30-09d7bdf82e.js.map