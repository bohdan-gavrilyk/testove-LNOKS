(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{19:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),r=c(14),s=c.n(r),i=(c(19),c(12)),o=c(4),u=c(29),j="c6786256472e4801a0977ddc36798a2a",l=(c(24),c(25),c(2)),b=function(e){var t=e.article,c=t.urlToImage,n=t.publishedAt,a=t.description,r=t.source;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:c,alt:"card"}),Object(l.jsxs)("div",{className:"card__subtitle",children:[Object(l.jsx)("p",{className:"card__name",children:r.name||"no name"}),Object(l.jsx)("p",{className:"card__date",children:n.slice(0,-10)})]}),Object(l.jsx)("p",{className:"card__desc",children:a||"no description"})]})},d=function(e){var t=e.articles;return Object(l.jsx)("div",{className:"wrapper",children:t.map((function(e,t){return Object(l.jsx)(b,{article:e},t)}))})},p=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),b=s[0],p=s[1],O=Object(n.useState)(1),f=Object(o.a)(O,2),h=f[0],m=f[1],x=Object(n.useState)(!0),v=Object(o.a)(x,2),g=v[0],y=v[1],S=Object(n.useState)(!1),w=Object(o.a)(S,2),_=w[0],N=w[1],k=Object(n.useState)(""),C=Object(o.a)(k,2),E=C[0],L=C[1];Object(n.useEffect)((function(){b||function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return u.a.get("https://newsapi.org/v2/top-headlines?country=ua&page=".concat(e,"&pageSize=").concat(10,"&apiKey=").concat(j)).then((function(e){if(!e)throw new Error;return e.data.articles}))}(h).then((function(e){e.length<10&&p(!0),a((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))}))})).catch((function(){N(!0),p(!0)})).finally((function(){y(!1)}))}),[h]);var I=c.filter((function(e){return e.source.name.toLowerCase().includes(E.toLowerCase())}));return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("input",{type:"text",placeholder:"Search by name",onChange:function(e){L(e.currentTarget.value)},value:E}),Object(l.jsx)(d,{articles:I}),_&&"error",!b&&!g&&Object(l.jsx)("button",{type:"button",onClick:function(){m((function(e){return e+1})),y(!0)},children:"Load more"})]})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.10ee26c0.chunk.js.map