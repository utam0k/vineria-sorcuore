(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return DescriptionItem}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67),_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(326),_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(723),_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(724),_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(327),_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(109),next_link__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(139),next_link__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);const DescriptionItem=({label:label,title:title,link:link,children:children})=>{const theme=Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__.b)();return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__.a,{as:"article",position:"relative",backgroundColor:"rgba(255, 255, 255, 0.7)",width:theme.sizes.md,minHeight:theme.sizes.xs,margin:theme.space[2],padding:theme.space[4],textAlign:"center",rounded:4},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{fontSize:"xs",marginTop:theme.space[3]},label),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,{as:"h1",fontWeight:"normal",fontStyle:"italic"},title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{fontSize:"sm",fontWeight:"300",whiteSpace:"pre-wrap",overflowWrap:"break-word",marginTop:theme.space[5],marginBottom:"32px",lineHeight:"1.8em"},children),link.external?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,{href:link.url,_hover:{textDecoration:"none"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{variantColor:"teal"},link.label,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{name:"external-link",mx:"2px"}))):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a,{href:link.url},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{variantColor:"teal"},link.label)))}},328:function(module,exports,__webpack_require__){__webpack_require__(329),__webpack_require__(475),__webpack_require__(721),module.exports=__webpack_require__(665)},393:function(module,exports){},665:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(136);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(667)],module)}.call(this,__webpack_require__(666)(module))},667:function(module,exports,__webpack_require__){var map={"./organisms/Description/DescriptionItem.stories.tsx":668,"./pages/index.stories.tsx":717};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=667},668:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"descriptionItem",(function(){return descriptionItem}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_DescriptionItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(108);__webpack_exports__.default={title:"DescriptionItem"};const descriptionItem=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DescriptionItem__WEBPACK_IMPORTED_MODULE_1__.a,{label:"ヴィネリアソルクオーレ",title:"Vineria Sorcuor",link:{label:"メニューを見る",url:"https://example.com"}},"イタリア語で SORRISO (笑顔) CUORE (心)\nかけ合わせて作った造語それがソルクオーレです。\n心を込めて笑顔になれる楽しい本格イタリアンをお客様にお届けします。\nぜひ、素敵な時間をお過ごしください。")},717:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"TopPage",(function(){return TopPage}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),ThemeProvider=__webpack_require__(67),Flex=__webpack_require__(322),Link=__webpack_require__(724),Button=__webpack_require__(327),Tabs=__webpack_require__(730),Heading=__webpack_require__(723),Text=__webpack_require__(326),Box=__webpack_require__(7),head=__webpack_require__(317),head_default=__webpack_require__.n(head),index_es=__webpack_require__(318),free_solid_svg_icons_index_es=__webpack_require__(323),Drawer=__webpack_require__(729),Modal=__webpack_require__(65),next_link=__webpack_require__(139),link_default=__webpack_require__.n(next_link);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const LinkItem=({href:href,children:children,...props})=>{const theme=Object(ThemeProvider.b)();return react_default.a.createElement(link_default.a,{href:href},react_default.a.createElement(Link.a,_extends({},props,{d:"block",px:theme.space[4],py:theme.space[2]}),children))},SideMenu=({isOpen:isOpen,onClose:onClose})=>react_default.a.createElement(Drawer.a,{isOpen:isOpen,onClose:onClose},react_default.a.createElement(Drawer.d,null),react_default.a.createElement(Drawer.c,null,react_default.a.createElement(Drawer.b,{"aria-label":"メニューを閉じる"}),react_default.a.createElement(Modal.e,null),react_default.a.createElement(Modal.b,null,react_default.a.createElement(LinkItem,{href:"/"},"ホーム"),react_default.a.createElement(LinkItem,{href:"/menu"},"メニュー"),react_default.a.createElement(LinkItem,{href:"/reservation"},"ご予約")))),Header=({position:position="sticky",needGradation:needGradation=!1})=>{const theme=Object(ThemeProvider.b)(),[isSideMenuShow,setSideMenuShow]=Object(react.useState)(!1),[backgroundColor,setBackgroundColor]=Object(react.useState)("rgba(0, 0, 0, 0)"),onClick=Object(react.useCallback)(()=>{setSideMenuShow(show=>!show)},[]),onClose=Object(react.useCallback)(()=>{setSideMenuShow(!1)},[]),onScroll=Object(react.useCallback)(()=>{const alpha=Math.min(window.pageYOffset/window.outerHeight,.8);setBackgroundColor(`rgba(0, 0, 0, ${alpha})`)},[]);return Object(react.useEffect)(()=>{if(needGradation)return document.addEventListener("scroll",onScroll),()=>document.removeEventListener("scroll",onScroll);setBackgroundColor("rgba(0, 0, 0, 0.8)")},[needGradation,onScroll]),react_default.a.createElement(Flex.a,{position:position,as:"nav",background:backgroundColor,width:"100vw",px:theme.space[10],py:[theme.space[2],theme.space[2],theme.space[5],theme.space[5]],alignItems:"center",justifyContent:"center",zIndex:theme.zIndices.sticky,top:0},react_default.a.createElement(Heading.a,{as:"h1",size:"lg",margin:"0",flexGrow:1,fontFamily:"'Libre Baskerville', serif",fontWeight:"bold",color:"green.500"},"Vineria Sorcuor"),react_default.a.createElement(Flex.a,{display:["none","none","flex","flex"]},react_default.a.createElement(LinkItem,{href:"/",fontWeight:"bold",border:"2px solid",borderColor:"green.500",borderRadius:"24px",color:"green.500",_hover:{color:"white",backgroundColor:"green.500"}},"ホーム"),react_default.a.createElement(LinkItem,{href:"/menu",marginLeft:"8px",fontWeight:"bold",border:"2px solid",borderColor:"green.500",borderRadius:"24px",color:"green.500",_hover:{color:"white",backgroundColor:"green.500"}},"メニュー"),react_default.a.createElement(LinkItem,{href:"/reservation",marginLeft:"8px",fontWeight:"bold",border:"2px solid",borderColor:"green.500",borderRadius:"24px",color:"green.500",_hover:{color:"white",backgroundColor:"green.500"}},"ご予約")),react_default.a.createElement(Button.a,{display:["block","block","none","none"],p:0,"aria-label":"",background:"transparent",onClick:onClick},react_default.a.createElement(index_es.a,{icon:free_solid_svg_icons_index_es.a,color:theme.colors.green[500]})),react_default.a.createElement(SideMenu,{isOpen:isSideMenuShow,onClose:onClose}))},Layout=({children:children,...props})=>react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(head_default.a,null,react_default.a.createElement("title",null,"Vineria Sorcuor"),react_default.a.createElement("meta",{name:"description",content:"イタリア語で SORRISO (笑顔) CUORE (心)。かけ合わせて作った造語それがソルクオーレです。\\n心を込めて笑顔になれる楽しい本格イタリアンをお客様にお届けします。ぜひ、素敵な時間をお過ごしください。"})),react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Header,props),children)),BackgroundImage=({imageUrl:imageUrl,overlayColor:overlayColor="#000000",blur:blur=0})=>react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Box.a,{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",zIndex:-2,style:blur?{filter:`blur(${blur}px)`}:{},margin:blur?`-${blur}px`:"none",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:`url(${imageUrl})`,pointerEvents:"none"}),react_default.a.createElement(Box.a,{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",zIndex:-1,backgroundColor:overlayColor,opacity:.24,pointerEvents:"none"}));var DescriptionItem=__webpack_require__(108);const isClient="object"==typeof window,getSize=()=>({width:isClient?window.innerWidth:void 0,height:isClient?window.innerHeight:void 0}),useWindowSize=()=>{const[windowSize,setWindowSize]=Object(react.useState)(getSize());return Object(react.useEffect)(()=>{if(!isClient)return;const handleResize=()=>{setWindowSize(getSize())};return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)},[]),windowSize},Description=()=>{const theme=Object(ThemeProvider.b)(),windowSize=useWindowSize(),ref=Object(react.useRef)(null),[height,setHeight]=Object(react.useState)(-1);return Object(react.useEffect)(()=>{if(!ref.current||!windowSize.height||!windowSize.width)return;if(windowSize.width>windowSize.height)return void setHeight(-1);const clientHeight=ref.current.scrollHeight;clientHeight>windowSize.height?setHeight(clientHeight):setHeight(windowSize.height)},[windowSize,ref]),react_default.a.createElement(Flex.a,{as:"section",position:"relative",align:"center",justify:"center",direction:"column",height:height,minHeight:"100vh",overflow:"hidden",ref:ref},react_default.a.createElement(BackgroundImage,{imageUrl:"http://u0u0.net/Yep3",overlayColor:"#54140d"}),react_default.a.createElement(Heading.a,{as:"h1",size:"2xl",textAlign:"center",marginTop:theme.space[24],marginX:theme.space[1],color:theme.colors.white},"笑顔になれる楽しい本格イタリアン"),react_default.a.createElement(Flex.a,{flexWrap:"wrap",justify:"center",align:"center",width:"100%",marginTop:theme.space[8],marginBottom:theme.space[12]},react_default.a.createElement(DescriptionItem.a,{label:"ヴィネリアソルクオーレ",title:"Vineria Sorcuor",link:{label:"メニューを見る",url:"/menu"}},"イタリア語で SORRISO (笑顔) CUORE (心)\nかけ合わせて作った造語それがソルクオーレです。\n心を込めて笑顔になれる楽しい本格イタリアンをお客様にお届けします。ぜひ、素敵な時間をお過ごしください。"),react_default.a.createElement(DescriptionItem.a,{label:"こだわり",title:"Commitment",link:{label:"テイクアウト",url:"https://docs.google.com/forms/d/e/1FAIpQLSfJuTZyj2bUAjQgzpw8p86qmgYIjn4HnJA_JumEscltATE8qg/viewform",external:!0}},"イタリア滞在経験のあるシェフ神谷がお料理をご提供します。\nシェフ自ら、契約農家に足を運び厳選した食材でイタリアの郷土料理の味を再現し、冬にはジビエやトリュフ、春には野菜を使ったりと季節によってワインのマリアージュを考えています。")))};var es=__webpack_require__(324);const Instagrams=()=>react_default.a.createElement(Box.a,{as:"section",position:"relative",width:"100%",height:"100vh"},react_default.a.createElement(BackgroundImage,{imageUrl:"http://u0u0.net/V499",overlayColor:"#5048A1"}),react_default.a.createElement(Flex.a,{justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",height:"100%"},["B7pieB3Hd2F","B6hi5WyHo8h","B8VR5gsHp80"].map(id=>{const url="https://www.instagram.com/p/"+id;return react_default.a.createElement(es.a,{url:url,maxWidth:362,key:id,hideCaption:!0,injectScript:!0})})));var Image=__webpack_require__(726);const Section=({children:children,image:image,title:title,text:text,reverse:reverse=!1,backgroundColor:backgroundColor,color:color})=>{const theme=Object(ThemeProvider.b)(),bc=Object(react.useMemo)(()=>reverse?backgroundColor||theme.colors.green[500]:backgroundColor,[backgroundColor]),textColor=Object(react.useMemo)(()=>reverse&&!backgroundColor?color||theme.colors.white:color,[color]);return react_default.a.createElement(Flex.a,{as:"section",flexWrap:[reverse?"wrap-reverse":"wrap",reverse?"wrap-reverse":"wrap","nowrap","nowrap"],align:"center",justify:"center",width:"100vw",minHeight:"50vh",paddingX:theme.space[8],paddingY:theme.space[24],backgroundColor:bc},reverse?react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Box.a,{width:theme.sizes.lg,marginRight:[0,0,theme.space[16],theme.space[16]]},react_default.a.createElement(Heading.a,{textAlign:"center",fontSize:[theme.fontSizes["3xl"],theme.fontSizes["3xl"],theme.fontSizes["5xl"],theme.fontSizes["5xl"]],color:textColor,fontWeight:"normal",marginBottom:theme.space[4]},title),react_default.a.createElement(Text.a,{color:textColor,whiteSpace:"pre-wrap",overflowWrap:"break-word",wordBreak:"break-all"},text),children),react_default.a.createElement(Flex.a,{width:theme.sizes.lg,marginBottom:theme.space[8],justify:"center",align:"center"},react_default.a.createElement(Image.a,{alt:image.alt,width:"100%",height:[theme.sizes[40],"100%","100%","100%"],objectFit:"cover",src:image.url}))):react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Flex.a,{width:theme.sizes.lg,marginBottom:theme.space[8],justify:"center",align:"center"},react_default.a.createElement(Image.a,{alt:image.alt,width:"100%",height:[theme.sizes[40],"100%","100%","100%"],objectFit:"cover",src:image.url})),react_default.a.createElement(Box.a,{width:theme.sizes.lg,marginLeft:[0,0,theme.space[16],theme.space[16]]},react_default.a.createElement(Heading.a,{textAlign:"center",fontSize:[theme.fontSizes["3xl"],theme.fontSizes["3xl"],theme.fontSizes["5xl"],theme.fontSizes["5xl"]],color:"#4c4c4c",fontWeight:"normal",marginBottom:theme.space[4]},title),react_default.a.createElement(Text.a,{color:"#555555",whiteSpace:"pre-wrap",overflowWrap:"break-word",wordBreak:"break-all"},text),children)))},Home=()=>{const theme=Object(ThemeProvider.b)(),{width:width}=useWindowSize(),[orientation,setOrientation]=Object(react.useState)("horizontal");return Object(react.useEffect)(()=>{setOrientation(width&&width<624?"vertical":"horizontal")},[width]),react_default.a.createElement(Layout,{position:"fixed",needGradation:!0},react_default.a.createElement(Description,null),react_default.a.createElement(Section,{title:"About",text:"初めは千葉県松戸市の「オステリア タナロ」から始まりました。\nイタリア滞在経験がありイタリアをこよなく愛するオーナー兼ソムリエの成嶋とシェフの神谷の熱い思いによって皆様に愛されるお店になり、そして２号店となる「ヴィネリア ソルクオーレ」を両国にオープンする事が出来ました。\n当店ではイタリア滞在経験のあるシェフ神谷がお料理をご提供します。",image:{url:"https://jimdo-storage.freetls.fastly.net/image/58541700/a859a20a-51e0-411d-a2f0-68d07866595a.jpg?format=pjpg&quality=80&auto=webp&disable=upscale",alt:"about"}},react_default.a.createElement(Flex.a,{marginTop:theme.space[8],align:"center",justify:"center"},react_default.a.createElement(Link.a,{href:"/menu",_hover:{textDecoration:"none"}},react_default.a.createElement(Button.a,{variantColor:"teal"},"メニューを見る")))),react_default.a.createElement(Section,{reverse:!0,title:"Concept",text:"両国駅から徒歩８分と少し離れた隠れ家的イタリアンです。\nカウンターを中心とした広々としたお席で､皆様にゆっくりとお食事を楽しんで頂ける空間となっております。\n夜９時以降はふらっと、軽くつまんでワインを飲みたいお客様の為にもワインバーとして立ち飲みスペースも設けております。\nお酒が飲み足りない方や帰り道の方もぜひ、お気軽にお立ち寄りください！",image:{url:"https://jimdo-storage.freetls.fastly.net/image/58541700/a859a20a-51e0-411d-a2f0-68d07866595a.jpg?format=pjpg&quality=80&auto=webp&disable=upscale",alt:"about"}},react_default.a.createElement(Flex.a,{marginTop:theme.space[8],align:"center",justify:"center"},react_default.a.createElement(Link.a,{href:"/access",_hover:{textDecoration:"none"}},react_default.a.createElement(Button.a,{variantColor:"orange",variant:"solid"},"アクセス")))),react_default.a.createElement(Section,{title:"Wine",text:"イタリア、フランスワインを常時40種類程取り揃えております。ほんの一部をご紹介します。",image:{url:"http://u0u0.net/V499",alt:"about"}},react_default.a.createElement(Tabs.f,{defaultIndex:0,marginTop:theme.space[8],variant:"solid-rounded",variantColor:"green",orientation:orientation},react_default.a.createElement(Tabs.c,null,react_default.a.createElement(Tabs.a,{_focus:{outline:"none"}},"スパークリングワイン"),react_default.a.createElement(Tabs.a,{_focus:{outline:"none"}},"白ワイン"),react_default.a.createElement(Tabs.a,{_focus:{outline:"none"}},"赤ワイン")),react_default.a.createElement(Tabs.e,{minHeight:theme.sizes[40]},react_default.a.createElement(Tabs.d,null,react_default.a.createElement(Flex.a,{justify:"space-between",marginTop:theme.space[3]},react_default.a.createElement(Heading.a,{as:"i",fontSize:"md",fontWeight:"md"},"ドラピエ カルトドール (フランス・シャンパーニュ)"),react_default.a.createElement(Text.a,{fontSize:"sm"},"￥8800"))),react_default.a.createElement(Tabs.d,null,react_default.a.createElement(Flex.a,{justify:"space-between",marginTop:theme.space[3]},react_default.a.createElement(Heading.a,{as:"i",fontSize:"md",fontWeight:"md"},"ソ アヴェ (イタリア・ヴェネト)"),react_default.a.createElement(Text.a,{fontSize:"sm"},"￥4800"))),react_default.a.createElement(Tabs.d,null,react_default.a.createElement(Flex.a,{justify:"space-between",marginTop:theme.space[3]},react_default.a.createElement(Heading.a,{as:"i",fontSize:"md",fontWeight:"md"},"キャンティ リゼルヴァ (イタリア・トスカーナ)"),react_default.a.createElement(Text.a,{fontSize:"sm"},"￥4800")))))),react_default.a.createElement(Section,{title:"Lunch",reverse:!0,text:"イタリアで修行を重ねたシェフによる、イタリアンビュッフェ。（お持ち帰り弁当も可）イタリアの塩、エクストラヴァージンオイルで調理したオードブルとパスタが１０種類以上！！\nテイクアウト弁当もご用意しておりますのでお仕事の休憩中にもオススメです。（セルフサービス）イートインも設けております。",image:{url:"https://jimdo-storage.freetls.fastly.net/image/75731262/55fee928-e220-4128-90c1-f7b19544ce20.jpg?format=pjpg&quality=80&auto=webp&disable=upscale",alt:"lunch"}},react_default.a.createElement(Box.a,{marginTop:theme.space[8]},[{name:"ブッフェ45分",price:"1,100"},{name:"ブッフェ75分",price:"1,650"},{name:"詰め放題・お持ち帰り弁当",price:"1,100"},{name:"飲み放題ワイン45分",price:"1,000"}].map(item=>react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Flex.a,{justify:"space-between",marginTop:theme.space[1]},react_default.a.createElement(Heading.a,{fontSize:"md",fontWeight:"md",color:theme.colors.white},item.name)," ",react_default.a.createElement(Text.a,{fontSize:"md",color:theme.colors.white},item.price,"円")))))),react_default.a.createElement(Instagrams,null))};__webpack_exports__.default={title:"Home"};const TopPage=()=>react_default.a.createElement(Home,null)},721:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),client=__webpack_require__(136),CSSReset=__webpack_require__(728),ThemeProvider=__webpack_require__(67),core_browser_esm=__webpack_require__(1),theme=__webpack_require__(727);const customTheme={...theme.a,fonts:{...theme.a.fonts,body:"'Libre Baskerville', 'M PLUS 1p', sans-serif",heading:"'Libre Baskerville', 'M PLUS 1p', sans-serif"}};var _ref={name:"1m1805i",styles:"*{box-sizing:border-box;}body{font-family:'Libre Baskerville','Kosugi Maru',sans-serif;overflow-x:hidden;}"},_ref2=react_default.a.createElement(CSSReset.a,null),_ref3=react_default.a.createElement(core_browser_esm.a,{styles:_ref});Object(client.addDecorator)((function(storyFn){return react_default.a.createElement(ThemeProvider.a,{theme:customTheme},_ref2,_ref3,storyFn())}))}},[[328,1,2]]]);
//# sourceMappingURL=main.66b17cee66dbe249cf1e.bundle.js.map