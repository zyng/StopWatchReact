(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(37)},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(1),r=a.n(s),c=a(6),i=a(7),m=a(14),l=a(8),p=a(15),u=(a(23),a(25),a(27),function(e){var t=e.time,a=e.number;return o.a.createElement("li",{className:"animated fadeIn"},o.a.createElement("i",{className:"flaticon-stopwatch"}),o.a.createElement("span",{className:"stopwatch__saved-time--text"},"Pomiar ",a,":"),o.a.createElement("span",null," ",t))}),d=a(9);function f(){var e=Object(d.a)(["\n&:before {\n    color: "," !important;  \n}\n"]);return f=function(){return e},e}var h=a(10).a.i(f(),function(e){return e.color}),T=function(e){var t=e.isStopped,a=e.resetClick,n=e.stoperClick,s=e.saveClick,r=e.isRun,c=e.color,i=t?"flaticon-play-button":"flaticon-round-pause-button";return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"stopwatch__menu"},o.a.createElement("button",{className:"stopwatch__button",onClick:a,disabled:!r||!t},o.a.createElement(h,{color:c,className:"flaticon-refresh"})),o.a.createElement("button",{className:"stopwatch__button",onClick:n},o.a.createElement(h,{color:c,className:i})),o.a.createElement("button",{className:"stopwatch__button",onClick:s,disabled:t},o.a.createElement(h,{color:c,className:"flaticon-stopwatch"})," ")))},S=function(e){return o.a.createElement("div",{className:"stopwatch__actual-time-container"},o.a.createElement("div",{className:"stopwatch__actual-time"},e.text))},v=a(13),w=a.n(v),E=(a(35),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={startTime:0,stopTime:0,stoperTimeMiliSeconds:0,stoperTimeSeconds:0,stoperTimeMinutes:0,timeDifference:0,timeDifferenceResumeAndStop:0,resumeTime:0,stopped:!0,textTime:a.props.stopWatchStartText,textSavedTimes:[]},a.colorRGB="rgba(62, 152, 199,1)",a.measureTime="",a.handleStoper=function(){var e,t=!a.state.stopped;if(a.setState({stopped:t}),a.state.startTime?e=a.state.startTime:(e=(new Date).getTime(),a.setState({startTime:e})),t)a.handleStopStoper(a.measureTime);else{var n=(new Date).getTime(),o=e===n?0:n-a.state.stopTime;a.setState(function(e){return{resumeTime:n,timeDifferenceResumeAndStop:o,timeDifference:e.timeDifference+o}}),a.measureTime=setInterval(a.handleStartStoper,10)}},a.handleStartStoper=function(){var e=(new Date).getTime()-a.state.timeDifference,t=Math.floor((e-a.state.startTime)%1e3/10);t=t<10?"0".concat(t):t;var n=Math.floor((e-a.state.startTime)/1e3%60);n=n<10?"0".concat(n):n;var o=Math.floor((e-a.state.startTime)/6e4%60);o=o<10?"0".concat(o):o;var s=parseInt(a.state.stoperTimeMinutes);if(parseInt(o)!==s){var r=Math.floor(256*Math.random()),c=Math.floor(256*Math.random()),i=Math.floor(256*Math.random());a.colorRGB="rgba(".concat(r,",").concat(c,",").concat(i,",1)")}a.setState({stoperTimeMiliSeconds:t,stoperTimeSeconds:n,stoperTimeMinutes:o,textTime:"".concat(o,":").concat(n,":").concat(t)})},a.handleStopStoper=function(e){clearInterval(e),a.setState({stopTime:(new Date).getTime()})},a.handleSaveTime=function(){var e=a.state.textTime,t=a.state.textSavedTimes.slice();t.push(e),a.setState({textSavedTimes:t}),a.goDownWithList()},a.goDownWithList=function(){var e=document.getElementById("times"),t=e.scrollHeight;e.scrollTop=t},a.handleReset=function(){a.handleStopStoper(a.measureTime),a.setState({startTime:0,stopTime:0,stoperTimeMiliSeconds:0,stoperTimeSeconds:0,stoperTimeMinutes:0,timeDifference:0,timeDifferenceResumeAndStop:0,resumeTime:0,stopped:!0,textTime:a.props.stopWatchStartText,textSavedTimes:[]}),a.measureTime="",a.colorRGB="rgba(62, 152, 199,1)"},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.textSavedTimes,a=e.stoperTimeSeconds,n=e.startTime,s=e.textTime,r=e.stopped,c=t.map(function(e,t){return o.a.createElement(u,{key:t,number:t+1,time:e})}),i=1.67*a;return console.log(this.colorRGB),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"stopwatch"},o.a.createElement("div",{className:"stopwatch__circle-progress"},o.a.createElement(w.a,{percentage:i,styles:{path:{stroke:this.colorRGB}}}),o.a.createElement(S,{text:s})),o.a.createElement("ul",{className:"stopwatch__saved-time",id:"times"},c),o.a.createElement(T,{stoperClick:this.handleStoper,resetClick:this.handleReset,saveClick:this.handleSaveTime,isStopped:r,isRun:n,color:this.colorRGB})))}}]),t}(n.Component));E.defaultProps={stopWatchStartText:"00:00:00"};var b=E;r.a.render(o.a.createElement(b,null),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.72bd9531.chunk.js.map