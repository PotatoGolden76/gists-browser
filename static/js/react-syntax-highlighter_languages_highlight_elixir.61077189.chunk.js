(self.webpackChunkgists_browser=self.webpackChunkgists_browser||[]).push([[92],{718:function(e){e.exports=function(e){var n="[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?",i={$pattern:n,keyword:"and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote require import with|0"},s={className:"subst",begin:/#\{/,end:/\}/,keywords:i},a={className:"number",begin:"(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[1-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)",relevance:0},b="[/|([{<\"']",d={className:"string",begin:"~[a-z](?="+b+")",contains:[{endsParent:!0,contains:[{contains:[e.BACKSLASH_ESCAPE,s],variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/\//,end:/\//},{begin:/\|/,end:/\|/},{begin:/\(/,end:/\)/},{begin:/\[/,end:/\]/},{begin:/\{/,end:/\}/},{begin:/</,end:/>/}]}]}]},r={className:"string",begin:"~[A-Z](?="+b+")",contains:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/\//,end:/\//},{begin:/\|/,end:/\|/},{begin:/\(/,end:/\)/},{begin:/\[/,end:/\]/},{begin:/\{/,end:/\}/},{begin:/</,end:/>/}]},g={className:"string",contains:[e.BACKSLASH_ESCAPE,s],variants:[{begin:/"""/,end:/"""/},{begin:/'''/,end:/'''/},{begin:/~S"""/,end:/"""/,contains:[]},{begin:/~S"/,end:/"/,contains:[]},{begin:/~S'''/,end:/'''/,contains:[]},{begin:/~S'/,end:/'/,contains:[]},{begin:/'/,end:/'/},{begin:/"/,end:/"/}]},t={className:"function",beginKeywords:"def defp defmacro",end:/\B\b/,contains:[e.inherit(e.TITLE_MODE,{begin:n,endsParent:!0})]},o=e.inherit(t,{className:"class",beginKeywords:"defimpl defmodule defprotocol defrecord",end:/\bdo\b|$|;/}),c=[g,r,d,e.HASH_COMMENT_MODE,o,t,{begin:"::"},{className:"symbol",begin:":(?![\\s:])",contains:[g,{begin:"[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"}],relevance:0},{className:"symbol",begin:n+":(?!:)",relevance:0},a,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))"},{begin:"->"},{begin:"("+e.RE_STARTERS_RE+")\\s*",contains:[e.HASH_COMMENT_MODE,{begin:/\/: (?=\d+\s*[,\]])/,relevance:0,contains:[a]},{className:"regexp",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE,s],variants:[{begin:"/",end:"/[a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}],relevance:0}];return s.contains=c,{name:"Elixir",keywords:i,contains:c}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_elixir.61077189.chunk.js.map