(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"events":[{"title":"Would I Lie To You?","ticketsURL":"https://www.eventbrite.co.uk/e/would-i-lie-to-you-students-vs-teachers-tickets-133890123965?aff=isitweeka","ticketsSale":{"start":"01/01/2020"},"headerURL":"/Logo_Export_Trans_but_not_on_HRT.png","backgroundColor":"#2C1F39","eventType":"charity"}],"generatedAt":"0"}')},24:function(e,t,n){},26:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),s=n.n(i),r=n(8),c=n.n(r),o=(n(24),n(7)),l=n.n(o),u=n(9),d=n(3),h=n(4),b=n(6),j=n(5),p="ga-disable-G-X4VMSWGN74";function f(e){document.cookie=p+"=".concat(e?"true":"false","; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/"),window[p]=e}n(26);var v=n(15),k=n.n(v),g=n(11);function O(){window.scrollTo({top:window.innerHeight,behavior:"smooth"})}function w(){window.scrollTo({top:0,behavior:"smooth"})}var m=n(10),x=function(e){return Object(a.jsx)("button",Object(m.a)(Object(m.a)({},e),{},{className:"forward",children:Object(a.jsx)("span",{children:e.children})}))};x.displayName="Button.Forward";var y,D=x,S={backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",display:"flex",flex:1,margin:"auto",width:"90%",maxHeight:"80%"},C=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"events-row",style:{backgroundColor:this.props.background},children:[Object(a.jsx)("div",{children:Object(a.jsx)("div",{style:Object(m.a)({backgroundImage:"url(".concat(this.props.imageURL,")")},S)})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:this.props.title}),new Date(this.props.saleDate).valueOf()<Date.now()?Object(a.jsx)("a",{href:this.props.ticketsURL,children:Object(a.jsx)(D,{children:"Buy Tickets"})}):null,Object(a.jsxs)("h4",{children:["Tickets on sale ",this.props.saleDate]})]})]})}}]),n}(s.a.PureComponent);!function(e){e.HOUSE="house",e.CHARITY="charity"}(y||(y={}));(new Date).toISOString();var R=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"isitweeka events",children:[Object(a.jsxs)("h2",{children:[Object(a.jsx)("button",{onClick:w,className:"back"})," Upcoming Events"]}),Object(a.jsx)("div",{className:"events-list",children:this.props.eventData.events.map((function(e,t){var n=e.title,i=e.headerURL,s=e.backgroundColor,r=e.ticketsSale,c=e.ticketsURL;return Object(a.jsx)(C,{imageURL:i,title:n,saleDate:r.start,ticketsURL:c,background:s},t)}))})]})}}]),n}(i.Component),T="AIzaSyBJtspfBiYYXzpF3Nc32owjtjnJbRToxK4",N="SchoolPreference",I=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={gapiReady:!1,isNotWeekAB:!1,week:"unknown",apiHasRan:!1,isWeekend:!1,eventData:{events:[],generatedAt:""}},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.loadGoogleAPI(),this.fetchEvents()}},{key:"fetchEvents",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({eventData:g});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadGoogleAPI",value:function(){var e=this,t=document.createElement("script");t.src="https://apis.google.com/js/client.js",t.async=!0,t.defer=!0,t.onload=function(){window.gapi.load("client",(function(){window.gapi.client.setApiKey(T),window.gapi.client.load("calendar","v3",(function(){e.setState({gapiReady:!0});try{e.getCalendar()}catch(t){console.error("Error: "+(null===t||void 0===t?void 0:t.message))}}))}))},document.body.appendChild(t)}},{key:"getMonday",value:function(e){var t=new Date(e),n=t.getDay(),a=t.getDate()-n+(6===n?8:1);return new Date(t.setDate(a))}},{key:"forwardOrRewindToDay",value:function(e,t,n){var a=new Date(e),i=a.getDay(),s=a.getDate()-i+t+(n.includes(i)?7:0);return new Date(a.setDate(s))}},{key:"getCalendar",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,i,s,r,c,o,u,d,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,(n=this.forwardOrRewindToDay(t,this.props.weekMarkerDate,[0,6])).setUTCHours(0,0,0,0),(a=new Date(n)).setDate(a.getDate()+1),a.setUTCHours(0,0,0,0),6!==(i=t.getDay())&&0!==i||this.setState({isWeekend:!0}),s=n.toISOString(),r=a.toISOString(),c=this.props.calendarURL,o="Europe/London",e.next=14,window.gapi.client.init({apiKey:T,discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]});case 14:return e.next=16,gapi.client.calendar.events.list({calendarId:c,timeZone:o,singleEvents:!0,timeMin:new Date(s).toISOString(),timeMax:new Date(r).toISOString(),maxResults:20,orderBy:"startTime"});case 16:if(!(u=e.sent).result.items){e.next=33;break}if(0!==(d=u.result.items.filter((function(e){return"Week A"===e.summary||"Week B"===e.summary}))).length){e.next=23;break}this.setState({isNotWeekAB:!0,week:"unknown",apiHasRan:!0}),e.next=33;break;case 23:h=d[0],e.t0=h.summary,e.next="Week A"===e.t0?27:"Week B"===e.t0?29:31;break;case 27:return this.setState({week:"A",apiHasRan:!0}),e.abrupt("break",33);case 29:return this.setState({week:"B",apiHasRan:!0}),e.abrupt("break",33);case 31:return this.setState({isNotWeekAB:!0,apiHasRan:!0}),e.abrupt("break",33);case 33:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getStatus",value:function(){return this.state.isNotWeekAB||"unknown"===this.state.week?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"It is neither Week A nor B."}),Object(a.jsx)("h3",{children:"This means it's probably a holiday."}),Object(a.jsx)(D,{style:{marginRight:"auto"},className:"forward",onClick:O,children:Object(a.jsx)("div",{children:"events"})}),Object(a.jsxs)("h5",{children:["If you believe this is in error, please email\xa0",Object(a.jsx)("a",{href:"mailto:info@isitweeka.com",children:"info@isitweeka.com"})]})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:this.state.isWeekend?"Next week will be":"It is"})," ",Object(a.jsxs)("h1",{children:["Week ",this.state.week]}),Object(a.jsx)("h4",{children:"More coming soon..."}),Object(a.jsx)(D,{style:{marginRight:"auto"},className:"forward",onClick:O,children:"events"})]})}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"isitweeka isitweeka-jumbotron",children:this.state.apiHasRan?this.getStatus():Object(a.jsx)("h2",{children:"Loading..."})}),Object(a.jsx)(R,{eventData:this.state.eventData})]})}}]),n}(i.Component),A=n(18),B=function(e){return Object(a.jsx)("div",{className:"r-tab-row",children:e.children})},L=function(e){return Object(a.jsx)("button",{className:"r-tab".concat(e.active?" active":""),onClick:e.onClick,children:Object(a.jsx)("span",{children:e.children})})},U=function(e){var t=s.a.useState(e.initialTab||0),n=Object(A.a)(t,2),i=n[0],r=n[1];function c(t,n){"undefined"!==typeof e.onTabChange&&e.onTabChange(t,n)}return s.a.useEffect((function(){return c(e.tabs[i].tab,i)})),Object(a.jsxs)("div",{className:"r-tab-container",children:[Object(a.jsx)(B,{children:e.tabs.map((function(e,t){var n=e.tab;return Object(a.jsx)(L,{onClick:function(){r(t),c(n,t)},active:i===t,children:n},t)}))}),Object(a.jsx)("div",{children:e.tabs.map((function(e,t){var n=e.component;return t===i?Object(a.jsx)("div",{children:n},t):null}))})]})},E=n(33),H=n(12),W=n.n(H),M=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={eventData:{events:[],generatedAt:""}},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.fetchEvents()}},{key:"fetchEvents",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({eventData:g});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateCookie",value:function(e,t){"true"===W.a.get("CookieConsent")&&(W.a.set(N,{school:e,tabIndex:t},{secure:!0,sameSite:"strict"}),"undefined"!==typeof gtag&&(console.log("Setting to "+e),gtag("set","user_properties",{school:e})))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(U,{tabs:[{tab:"KECHB",component:Object(a.jsx)(I,{calendarURL:"calendar@camphillboys.bham.sch.uk",weekMarkerDate:1})},{tab:"KECHG",component:Object(a.jsx)(I,{calendarURL:"calendar@kechg.org.uk",weekMarkerDate:0})}],onTabChange:this.updateCookie,initialTab:function(){var e;return(null===(e=W.a.getJSON(N))||void 0===e?void 0:e.tabIndex)||0}()}),Object(a.jsx)(E.a,{fixed:"bottom",children:Object(a.jsxs)(k.a,{enableDeclineButton:!0,flipButtons:!0,buttonText:"I understand",declineButtonText:"No thanks",onAccept:function(){f(!1),window.location.reload()},onDecline:function(){f(!0),window.location.reload()},children:["This website uses cookies for preferences and analytics (via Google Analytics).",Object(a.jsx)("a",{href:"/privacy.html",children:" View Privacy Policy"})]})})]})}}]),n}(i.Component),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root")),F()}},[[30,1,2]]]);
//# sourceMappingURL=main.1192ca17.chunk.js.map