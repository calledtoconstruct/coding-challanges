(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"5T8g":function(t,e,n){"use strict";n.r(e);n("a1Th"),n("h7Nl"),n("I5cv"),n("bWfx");var r=n("lwsE"),a=n.n(r),c=n("W8MJ"),l=n.n(c),i=n("7W2i"),s=n.n(i),u=n("a1gu"),o=n.n(u),f=n("Nsbk"),p=n.n(f),h=n("lSNA"),m=n.n(h),g=(n("f3/d"),n("cDcd")),d=n.n(g),b=n("17x9"),v=n.n(b),k=n("/MKj"),j=n("MGin"),y=n("eOGF"),O=n("5J+W"),C=n("3ESS");n("nq5B");function E(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function N(t){var e=t.tutorial,n=t.assetPath;return d.a.createElement("div",{className:"col-md-6"},d.a.createElement(j.Link,{to:"/domains/tutorials/".concat(e.slug),className:"tutorial-tile"},d.a.createElement("img",{src:n("dashboard/".concat(e.slug,".svg")),alt:"Track Image",className:"tutorial-img"}),d.a.createElement("span",{className:"tutorial-name bold"},e.name)))}Object(y.O)("dashboard/.*.svg");var S=function(t){s()(r,t);var e,n=(e=r,function(){var t,n=p()(e);if(E()){var r=p()(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return o()(this,t)});function r(){return a()(this,r),n.apply(this,arguments)}return l()(r,[{key:"render",value:function(){var t=this.props,e=t.track,n=t.chapters,r=t.appUtil.assetPath;return d.a.createElement("div",{className:"b4 tutorials-list-page"},d.a.createElement("div",{className:"container"},d.a.createElement(C.a,{track:e}),d.a.createElement("div",{className:"tutorials-list row"},n.map((function(t){return d.a.createElement(N,{key:t.slug,tutorial:t,assetPath:r})})))))}}]),r}(g.PureComponent);m()(S,"propTypes",{chapters:v.a.arrayOf(v.a.object),track:v.a.object,appUtil:v.a.object}),S=Object(k.b)((function(t){var e=t.community.domains.dict.tutorials;return{chapters:e.chapters,track:{id:e.id,slug:e.slug,name:e.name}}}))(S),S=Object(O.a)(S),e.default=S},Vdmo:function(t,e,n){"use strict";n.r(e),n.d(e,"makeTrackChallengesProps",(function(){return k})),n.d(e,"mapDispatchToProps",(function(){return j})),n.d(e,"mergeProps",(function(){return y}));var r=n("MVZn"),a=n.n(r),c=(n("0l/t"),n("bWfx"),n("/MKj")),l=n("fvjX"),i=n("peh1"),s=n("iGQG"),u=n("5J+W"),o=n("cK/l"),f=n("LNHK"),p=n("rw7i"),h=n("Z/B0"),m=function(t){return t.community.profile},g=function(t,e){return e.appUtil.params},d=Object(i.createSelector)([function(t,e){return e.appUtil.location},g],(function(t,e){var n=e.trackSlug,r=e.chapterSlug;return Object(o.i)(t,n,r)})),b=function(t){return t.community.challenges.challengeList},v=function(t){return t.community.domains.dict},k=function(){return Object(i.createSelector)([m,o.g,b,d,g,v],(function(t,e,n,r,a,c){var l=a.trackSlug,i=a.chapterSlug,s=n.challengePages,u=n.current_track,f=s[Object(o.j)(l,r)]||{list:[],firstUnsolvedChallenge:null,total:0},p=f.list,m=f.firstUnsolvedChallenge,g=f.total,d=p.length,b=p.map((function(t){return e[Object(o.k)(t,"master")]}));m&&(b=b.filter((function(t){return t.slug!==m.slug})));var v=c[u.slug],k=v.chapterDict;return{challenges:b,currentChallengesCount:d,totalChallenges:g||0,chapters:v.chapters,chapter:k[i],profile:t,filters:r,track:u,firstUnsolvedChallenge:m,listType:h.b.TRACK}}))},j=function(t){return{challengeActions:Object(l.b)(f.a,t)}},y=function(t,e,n){var r=t.track,c=void 0===r?{}:r,l=t.filters,i=t.currentChallengesCount,s=t.chapter,u=void 0===s?{}:s;return a()({},t,e,n,{loadChallenges:function(){return e.challengeActions.getTrackChallengeList({trackSlug:c.slug,filters:l,offset:i,limit:Object(o.h)(u.slug)})}})},O=Object(l.d)(u.a,s.b,Object(c.b)(k(),j,y))(p.a);e.default=O},nq5B:function(t,e,n){}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/hackerrank_r_challenge_list-5192f94df0.js.map