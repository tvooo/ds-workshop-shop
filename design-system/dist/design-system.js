!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("design-system",[],t):"object"==typeof exports?exports["design-system"]=t():e["design-system"]=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"./src/index.js":function(e,t,n){"use strict";n.r(t),n.d(t,"GlobalStyle",(function(){return h})),n.d(t,"Avatar",(function(){return m})),n.d(t,"Button",(function(){return S})),n.d(t,"Card",(function(){return ee})),n.d(t,"DataTable",(function(){return ae})),n.d(t,"Icon",(function(){return G})),n.d(t,"Navigation",(function(){return ge})),n.d(t,"Title",(function(){return ue}));n("core-js/modules/es.array.slice.js"),n("core-js/modules/es.object.freeze.js");var o,r=n("styled-components"),i=n.n(r),a=n("tokens");var l,p,c=a.typography.paragraph3FontFamily,s=Object(r.css)(["overflow-y:auto;overflow-x:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-overflow-scrolling:touch;font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";*{box-sizing:border-box;}h1,h2,h3,h4,h5,h6,p{margin:0;padding:0;}p{font-family:",";font-size:",";line-height:",";font-weight:",";font-style:",";letter-spacing:",";}h1{font-family:",";font-size:",";line-height:",";font-weight:",";font-style:",";letter-spacing:",";}h2{font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";}h3{font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";}h4{font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";}h5{font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";}h6{font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";}"],c,a.typography.paragraph3FontSize,a.typography.paragraph3FontWeight,a.typography.paragraph3FontStyle,a.typography.paragraph3LineHeight,a.typography.paragraph3FontFamily,a.typography.paragraph3FontSize,a.typography.paragraph3LineHeight,a.typography.paragraph3FontWeight,a.typography.paragraph3FontStyle,a.typography.paragraph3LetterSpacing,a.typography.headline1FontFamily,a.typography.headline1FontSize,a.typography.headline1LineHeight,a.typography.headline1FontWeight,a.typography.headline1FontStyle,a.typography.headline1LetterSpacing,a.typography.headline2FontFamily,a.typography.headline2FontSize,a.typography.headline2FontWeight,a.typography.headline2FontStyle,a.typography.headline2LineHeight,a.typography.headline2LetterSpacing,a.typography.headline3FontFamily,a.typography.headline3FontSize,a.typography.headline3FontWeight,a.typography.headline3FontStyle,a.typography.headline3LineHeight,a.typography.headline3LetterSpacing,a.typography.headline4FontFamily,a.typography.headline4FontSize,a.typography.headline4FontWeight,a.typography.headline4FontStyle,a.typography.headline4LineHeight,a.typography.headline4LetterSpacing,a.typography.headline5FontFamily,a.typography.headline5FontSize,a.typography.headline5FontWeight,a.typography.headline5FontStyle,a.typography.headline5LineHeight,a.typography.headline5LetterSpacing,a.typography.headline6FontFamily,a.typography.headline6FontSize,a.typography.headline6FontWeight,a.typography.headline6FontStyle,a.typography.headline6LineHeight,a.typography.headline6LetterSpacing),h=Object(r.createGlobalStyle)(o||(l=["\n  body {\n    ","\n  }\n  // prevent mouse-clicks from focusing elements\n  :focus:not(:focus-visible) {\n    outline: none;\n  }\n"],p||(p=l.slice(0)),o=Object.freeze(Object.defineProperties(l,{raw:{value:Object.freeze(p)}}))),s),y=n("react"),g=n.n(y),d=n("prop-types"),f=function(e){return g.a.createElement(u,e)};f.propTypes={src:d.string};var u=i.a.img.withConfig({displayName:"Avatar__StyledAvatar",componentId:"ayyuxz-0"})(["width:48px;height:48px;"]),m=f;n("core-js/modules/es.object.keys.js"),n("core-js/modules/es.symbol.js");function v(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var w=i.a.button.withConfig({displayName:"Button__StyledButton",componentId:"kt0lv5-0"})(["display:inline-flex;align-items:center;justify-content:center;cursor:pointer;outline:none;border:1px solid;border-color:",";box-sizing:border-box;line-height:24px;position:relative;user-select:none;text-decoration:none;border-radius:1rem;padding:",";background-color:",";opacity:",";color:",";font-size:14px;font-weight:700;width:",";"],(function(e){return e.isOutline?a.colors.secondaryBlack20:"transparent"}),(function(e){return e.label?"16px":"12px"}),(function(e){return e.isOutline?"transparent":e.color}),(function(e){return e.disabled?.6:1}),(function(e){return e.isOutline?a.colors.secondaryBlack100:a.colors.secondaryWhite100}),(function(e){return e.isStretched?"100%":null})),b=function(e){var t=e.label,n=e.children,o=v(e,["label","children"]);return console.log("🚀 ~ file: index.js ~ line 37 ~ Button ~ props",o),g.a.createElement(w,o,t||n)};b.propTypes={label:d.string,disabled:d.bool,isStretched:d.bool,isOutline:d.bool,color:d.string},b.defaultProps={color:a.colors.primaryOrange100};var x,j,S=b;n("core-js/modules/es.function.name.js"),n("core-js/modules/es.array.concat.js"),n("core-js/modules/es.object.assign.js");function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var z;n.p;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var E;n.p;function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var C;n.p;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var I;n.p;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var k;n.p;function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var T;n.p;function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var H;n.p;function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.p;function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var R={settings:function(e){return y.createElement("svg",F({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),x||(x=y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.23 12.37c-.194-.3-.47-.6-.828-.79-.286-.14-.47-.37-.633-.64-.521-.86-.215-1.99.654-2.5a2.027 2.027 0 00.756-2.83l-.685-1.18a2.112 2.112 0 00-2.871-.76c-.9.48-2.054.16-2.576-.69-.163-.28-.255-.58-.235-.88.03-.39-.092-.76-.276-1.06A2.152 2.152 0 0010.717 0h-1.44c-.747.02-1.431.42-1.81 1.04-.194.3-.306.67-.286 1.06.02.3-.071.6-.235.88-.521.85-1.676 1.17-2.565.69a2.124 2.124 0 00-2.882.76L.814 5.61c-.582.99-.255 2.26.757 2.83.868.51 1.175 1.64.664 2.5-.174.27-.358.5-.644.64-.347.19-.654.49-.817.79-.379.62-.358 1.4.02 2.05l.705 1.2a2.134 2.134 0 001.82 1.04c.347 0 .755-.1 1.083-.3.255-.17.562-.23.899-.23 1.012 0 1.86.83 1.88 1.82 0 1.15.94 2.05 2.126 2.05h1.39c1.175 0 2.115-.9 2.115-2.05.03-.99.88-1.82 1.89-1.82.328 0 .634.06.9.23.327.2.726.3 1.084.3.725 0 1.43-.4 1.808-1.04l.716-1.2c.368-.67.398-1.43.02-2.05z",fill:"inherit",fillOpacity:.2})),j||(j=y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.012 12.83c-1.604 0-2.902-1.25-2.902-2.82 0-1.57 1.298-2.83 2.902-2.83s2.872 1.26 2.872 2.83-1.268 2.82-2.872 2.82z",fill:"inherit"})))},heart:function(e){return y.createElement("svg",O({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),z||(z=y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.776 21.837a36.258 36.258 0 01-6.328-4.957 12.668 12.668 0 01-3.03-4.805C1.28 8.535 2.603 4.49 6.3 3.288A6.282 6.282 0 0112.007 4.3a6.291 6.291 0 015.706-1.012c3.697 1.201 5.03 5.247 3.893 8.787a12.669 12.669 0 01-3.013 4.805 36.583 36.583 0 01-6.328 4.957l-.249.163-.24-.163z",fill:"inherit",fillOpacity:.2})))},menu:function(e){return y.createElement("svg",_({fill:"none",height:24,viewBox:"0 0 24 24",width:24,xmlns:"http://www.w3.org/2000/svg"},e),E||(E=y.createElement("g",{fill:"inherit"},y.createElement("path",{clipRule:"evenodd",d:"M7 6a1 1 0 000 2h10a1 1 0 100-2zm0 10a1 1 0 100 2h10a1 1 0 100-2z",fillOpacity:.2,fillRule:"evenodd"}),y.createElement("rect",{height:2,rx:1,width:18,x:3,y:11}))))},arrowBack:function(e){return y.createElement("svg",L({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),C||(C=y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.76 18.581c.32.324.32.85.002 1.175a.81.81 0 01-1.066.082l-.091-.08-6.6-6.67a.84.84 0 01-.08-1.082l.08-.094 6.6-6.67a.81.81 0 011.157.002.84.84 0 01.077 1.082l-.08.093L9.742 12.5l6.017 6.08z",fill:"inherit"})))},chevronDown:function(e){return y.createElement("svg",N({width:11,height:6,viewBox:"0 0 11 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),I||(I=y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.388.336a.56.56 0 01.783-.001.54.54 0 01.055.71l-.054.061-4.446 4.4a.56.56 0 01-.722.053l-.062-.053-4.447-4.4A.54.54 0 01.496.335a.56.56 0 01.721-.051l.062.052 4.055 4.012L9.388.336z",fill:"#040415"})))},filter:function(e){return y.createElement("svg",q({width:20,height:18,viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),H||(H=y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.878 3.379c0 1.866-1.54 3.38-3.44 3.38C1.54 6.758 0 5.244 0 3.378 0 1.513 1.54 0 3.439 0c1.9 0 3.439 1.513 3.439 3.379zm11.615-1.48c.832 0 1.507.663 1.507 1.48s-.675 1.48-1.507 1.48h-6.575c-.832 0-1.508-.663-1.508-1.48s.676-1.48 1.508-1.48h6.575zM1.508 12.957h6.575c.833 0 1.508.664 1.508 1.481 0 .817-.675 1.482-1.508 1.482H1.508C.676 15.92 0 15.256 0 14.439s.676-1.481 1.508-1.481zm15.053 4.82c1.9 0 3.439-1.513 3.439-3.379s-1.539-3.38-3.439-3.38c-1.899 0-3.439 1.514-3.439 3.38 0 1.866 1.54 3.379 3.44 3.379z",fill:"inherit",fillOpacity:.2})))},viewGrid:function(e){return y.createElement("svg",P({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),k||(k=y.createElement("path",{clipRule:"evenodd",d:"M11 0a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V2a2 2 0 00-2-2h-3zM2 9a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2H2zm7 2a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3zM2 0a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V2a2 2 0 00-2-2H2z"})))},viewItem:function(e){return y.createElement("svg",B({viewBox:"0 0 16 16",width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),T||(T=y.createElement("rect",{width:16,height:16,rx:4,fill:"inherit",fillOpacity:.2})))}},A=i()("span").withConfig({displayName:"Icon___StyledSpan",componentId:"k1qdra-0"})({display:"inline-flex"}),D=function(e){var t=e.name,n=e.width,o=void 0===n?24:n,r=e.height,i=void 0===r?24:r,a=e.color,l=W(e,["name","width","height","color"]),p=R[t];return g.a.createElement(A,M({className:"icon"},l),g.a.createElement(p,{fill:a,width:o,height:i}))};D.propTypes={name:d.string,color:d.string,height:d.number,width:d.number};var G=D;var V=function(e){var t=e.size,n=void 0===t?"medium":t,o=e.image,r=e.name,i=e.subtitle,a=e.price;return g.a.createElement(J,{size:n},"big"===n&&g.a.createElement(Q,{isOutline:!0},g.a.createElement(G,{name:"heart"})),g.a.createElement(K,{src:o,alt:r,size:n}),g.a.createElement(U,{size:n},"medium"!==n&&g.a.createElement(X,{size:n},i),g.a.createElement(Y,{size:n},g.a.createElement(Z,{size:n},r),g.a.createElement($,{size:n},"€",a))))};V.propTypes={image:d.string,name:d.string,price:d.string,size:Object(d.oneOf)(["small","medium","big"]),subtitle:d.string};var J=i.a.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-14dxrny-0"})(["display:flex;flex-direction:column;position:relative;",""],(function(e){return"small"===e.size&&"height: 100px; \n    flex-direction: row;"})),K=i.a.img.withConfig({displayName:"Card__StyledCardImage",componentId:"sc-14dxrny-1"})(["max-width:100%;max-height:100%;margin-bottom:",";display:block;border-radius:32px;"],(function(e){var t=e.size;return"big"===t?"24px":"small"===t?"0px":"16px"})),Q=i()(S).withConfig({displayName:"Card__StyledButton",componentId:"sc-14dxrny-2"})(["position:absolute;top:0;left:0;z-index:1;margin:24px;"]),U=i.a.div.withConfig({displayName:"Card__StyledCardInfo",componentId:"sc-14dxrny-3"})(["display:flex;flex-direction:column;",""],(function(e){return"small"==e.size&&"\n     flex-grow: 1;\n     margin-left: 16px;\n     align-content: flex-start;\n     max-width: 60%;"})),X=i.a.p.withConfig({displayName:"Card__StyledCardSubtitle",componentId:"sc-14dxrny-4"})(["margin-bottom:8px;opacity:0.6;",""],(function(e){return"small"===e.size&&"order: 5;"})),Y=i.a.div.withConfig({displayName:"Card__StyledMainInfoWrapper",componentId:"sc-14dxrny-5"})(["",""],(function(e){return"small"===e.size&&"display: inline-flex; \n    flex-wrap: nowrap; \n    flex-direction: row;"})),Z=i.a.h2.withConfig({displayName:"Card__StyledCardName",componentId:"sc-14dxrny-6"})(["",""],(function(e){var t=e.size;return"big"===t?"\n        font-family: ".concat(a.typography.headline1FontFamily,";\n        font-size: ").concat(a.typography.headline1FontSize,";\n        line-height: ").concat(a.typography.headline1LineHeight,";\n        font-weight: ").concat(a.typography.headline1FontWeight,";\n        font-style: ").concat(a.typography.headline1FontStyle,";\n        letter-spacing: ").concat(a.typography.headline1LetterSpacing,";"):"medium"===t?"\n        font-family: ".concat(a.typography.headline4FontFamily,";\n        font-size: ").concat(a.typography.headline4FontSize,";\n        line-height: ").concat(a.typography.headline4LineHeight,";\n        font-weight: ").concat(a.typography.headline4FontWeight,";\n        font-style: ").concat(a.typography.headline4FontStyle,";\n        letter-spacing: ").concat(a.typography.headline4LetterSpacing,";\n        margin-bottom: 8px;\n    "):"\n        font-family: ".concat(a.typography.headline6FontFamily,";\n        font-size: ").concat(a.typography.headline6FontSize,";\n        line-height: ").concat(a.typography.headline6LineHeight,";\n        font-weight: ").concat(a.typography.headline6FontWeight,";\n        font-style: ").concat(a.typography.headline6FontStyle,";\n        letter-spacing: ").concat(a.typography.headline6LetterSpacing,";\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n        padding-right: 16px;\n    ")})),$=i.a.p.withConfig({displayName:"Card__StyledCardPrice",componentId:"sc-14dxrny-7"})(["color:",";margin-top:8px;font-weight:500;",""],a.colors.primaryOrange100,(function(e){var t=e.size;return"big"===t?"\n        font-family: ".concat(a.typography.headline2FontFamily,";\n        font-size: ").concat(a.typography.headline2FontSize,";\n        line-height: ").concat(a.typography.headline2LineHeight,";\n        font-weight: ").concat(a.typography.headline2FontWeight,";\n        font-style: ").concat(a.typography.headline2FontStyle,";\n        letter-spacing: ").concat(a.typography.headline1LetterSpacing,";\n        color: ").concat(a.colors.primaryOrange100,";\n        margin-top: 16px;"):"small"===t?"\n        color: ".concat(a.colors.secondaryBlack100,"; \n        margin-top: 0; \n        margin-left: auto; \n        font-weight: bold;"):void 0})),ee=V,te=(n("core-js/modules/es.array.map.js"),i.a.div.withConfig({displayName:"DataTable__StyledGrid",componentId:"l1o914-0"})(["display:grid;grid-template-columns:1fr auto;row-gap:16px;margin-bottom:32px;"])),ne=i.a.div.withConfig({displayName:"DataTable__StyledBorder",componentId:"l1o914-1"})(["width:100%;height:1px;background-color:rgba(0,0,0,0.1);margin:32px 0;"]),oe=i.a.p.withConfig({displayName:"DataTable__StyledHeading",componentId:"l1o914-2"})(["font-size:18px;line-height:28px;"]),re=i.a.div.withConfig({displayName:"DataTable__StyledPrice",componentId:"l1o914-3"})(["font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";text-align:right;"],a.typography.headline6FontFamily,a.typography.headline6FontSize,a.typography.headline6FontWeight,a.typography.headline6FontStyle,a.typography.headline6LineHeight,a.typography.headline6LetterSpacing),ie=i.a.div.withConfig({displayName:"DataTable__StyledTotal",componentId:"l1o914-4"})(["font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";text-align:right;"],a.typography.headline4FontFamily,a.typography.headline4FontSize,a.typography.headline4FontWeight,a.typography.headline4FontStyle,a.typography.headline4LineHeight,a.typography.headline4LetterSpacing),ae=function(e){var t=e.items,n=e.total;return t&&t.length>0&&g.a.createElement(g.a.Fragment,null,g.a.createElement(te,null,t.map((function(e){return g.a.createElement(g.a.Fragment,{key:e.name},g.a.createElement("p",null,e.name),g.a.createElement(re,null,e.price))}))),n&&g.a.createElement(g.a.Fragment,null,g.a.createElement(ne,null),g.a.createElement(te,null,g.a.createElement(oe,null,"Total"),g.a.createElement(ie,null,n))))};var le,pe,ce,se=function(e){var t=e.firstAction,n=void 0===t?null:t,o=e.title,r=e.lastAction,i=void 0===r?null:r;return g.a.createElement(he,null,n,o&&g.a.createElement(ye,null,g.a.createElement("h4",null,o)),i)};se.propTypes=(le={title:d.node,lastAction:d.node},pe="title",ce=d.node,pe in le?Object.defineProperty(le,pe,{value:ce,enumerable:!0,configurable:!0,writable:!0}):le[pe]=ce,le);var he=i.a.div.withConfig({displayName:"Navigation__StyledNavigation",componentId:"sc-1tqq5ey-0"})(["display:flex;justify-content:space-between;margin-bottom:40px;"]),ye=i.a.div.withConfig({displayName:"Navigation__StyledTitle",componentId:"sc-1tqq5ey-1"})(["flex-grow:2;display:flex;align-items:center;margin-left:24px;"]),ge=se,de=function(e){return g.a.createElement(fe,e)};de.propTypes={children:d.string};var fe=i.a.h1.withConfig({displayName:"Title__StyledTitle",componentId:"sc-16i88bl-0"})(["margin-bottom:40px;letter-spacing:-1.6px;"]),ue=de},0:function(e,t,n){e.exports=n("./src/index.js")},"core-js/modules/es.array.concat.js":function(e,t){e.exports=require("core-js/modules/es.array.concat.js")},"core-js/modules/es.array.map.js":function(e,t){e.exports=require("core-js/modules/es.array.map.js")},"core-js/modules/es.array.slice.js":function(e,t){e.exports=require("core-js/modules/es.array.slice.js")},"core-js/modules/es.function.name.js":function(e,t){e.exports=require("core-js/modules/es.function.name.js")},"core-js/modules/es.object.assign.js":function(e,t){e.exports=require("core-js/modules/es.object.assign.js")},"core-js/modules/es.object.freeze.js":function(e,t){e.exports=require("core-js/modules/es.object.freeze.js")},"core-js/modules/es.object.keys.js":function(e,t){e.exports=require("core-js/modules/es.object.keys.js")},"core-js/modules/es.symbol.js":function(e,t){e.exports=require("core-js/modules/es.symbol.js")},"prop-types":function(e,t){e.exports=require("prop-types")},react:function(e,t){e.exports=require("react")},"styled-components":function(e,t){e.exports=require("styled-components")},tokens:function(e,t){e.exports=require("tokens")}})}));
//# sourceMappingURL=design-system.js.map