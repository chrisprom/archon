if(!document.createElement('canvas').getContext){(function(){var m=Math;var y=m.round;var z=m.sin;var A=m.cos;var Z=10;var B=Z/2;function getContext(){if(this.context_){return this.context_}return this.context_=new CanvasRenderingContext2D_(this)}var C=Array.prototype.slice;function bind(f,b,c){var a=C.call(arguments,2);return function(){return f.apply(b,a.concat(C.call(arguments)))}}var D={init:function(a){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var b=a||document;b.createElement('canvas');b.attachEvent('onreadystatechange',bind(this.init_,this,b))}},init_:function(a){if(!a.namespaces['g_vml_']){a.namespaces.add('g_vml_','urn:schemas-microsoft-com:vml')}if(!a.styleSheets['ex_canvas_']){var b=a.createStyleSheet();b.owningElement.id='ex_canvas_';b.cssText='canvas{display:inline-block;overflow:hidden;'+'text-align:left;width:300px;height:150px}'+'g_vml_\\:*{behavior:url(#default#VML)}'}},i:function(a){if(!a.getContext){a.getContext=getContext;a.attachEvent('onpropertychange',onPropertyChange);a.attachEvent('onresize',onResize);var b=a.attributes;if(b.width&&b.width.specified){a.style.width=b.width.nodeValue+'px'}else{a.width=a.clientWidth}if(b.height&&b.height.specified){a.style.height=b.height.nodeValue+'px'}else{a.height=a.clientHeight}}return a}};function onPropertyChange(e){var a=e.srcElement;switch(e.propertyName){case'width':a.style.width=a.attributes.width.nodeValue+'px';a.getContext().clearRect();break;case'height':a.style.height=a.attributes.height.nodeValue+'px';a.getContext().clearRect();break}}function onResize(e){var a=e.srcElement;if(a.firstChild){a.firstChild.style.width=a.clientWidth+'px';a.firstChild.style.height=a.clientHeight+'px'}}D.init();var E=[];for(var i=0;i<16;i++){for(var j=0;j<16;j++){E[i*16+j]=i.toString(16)+j.toString(16)}}function createMatrixIdentity(){return[[1,0,0],[0,1,0],[0,0,1]]}function processStyle(a){var b,alpha=1;a=String(a);if(a.substring(0,3)=='rgb'){var c=a.indexOf('(',3);var d=a.indexOf(')',c+1);var e=a.substring(c+1,d).split(',');b='#';for(var i=0;i<3;i++){b+=E[Number(e[i])]}if(e.length==4&&a.substr(3,1)=='a'){alpha=e[3]}}else{b=a}return[b,alpha]}function processLineCap(a){switch(a){case'butt':return'flat';case'round':return'round';case'square':default:return'square'}}function CanvasRenderingContext2D_(a){this.m_=createMatrixIdentity();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.strokeStyle='#000';this.fillStyle='#000';this.lineWidth=1;this.lineJoin='miter';this.lineCap='butt';this.miterLimit=Z*1;this.globalAlpha=1;this.canvas=a;var b=a.ownerDocument.createElement('div');b.style.width=a.clientWidth+'px';b.style.height=a.clientHeight+'px';b.style.overflow='hidden';b.style.position='absolute';a.appendChild(b);this.element_=b;this.arcScaleX_=1;this.arcScaleY_=1}var F=CanvasRenderingContext2D_.prototype;F.clearRect=function(){this.element_.innerHTML='';this.currentPath_=[]};F.beginPath=function(){this.currentPath_=[]};F.moveTo=function(a,b){var p=this.getCoords_(a,b);this.currentPath_.push({type:'moveTo',x:p.x,y:p.y});this.currentX_=p.x;this.currentY_=p.y};F.lineTo=function(a,b){var p=this.getCoords_(a,b);this.currentPath_.push({type:'lineTo',x:p.x,y:p.y});this.currentX_=p.x;this.currentY_=p.y};F.bezierCurveTo=function(a,b,c,d,e,f){var p=this.getCoords_(e,f);var g=this.getCoords_(a,b);var h=this.getCoords_(c,d);this.currentPath_.push({type:'bezierCurveTo',cp1x:g.x,cp1y:g.y,cp2x:h.x,cp2y:h.y,x:p.x,y:p.y});this.currentX_=p.x;this.currentY_=p.y};F.fillRect=function(a,b,c,d){this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+d);this.lineTo(a,b+d);this.closePath();this.fill();this.currentPath_=[]};F.createLinearGradient=function(a,b,c,d){return new CanvasGradient_('gradient')};F.createRadialGradient=function(a,b,c,d,e,f){var g=new CanvasGradient_('gradientradial');g.radius1_=c;g.radius2_=f;g.focus_.x=a;g.focus_.y=b;return g};F.stroke=function(d){var e=[];var f=false;var a=processStyle(d?this.fillStyle:this.strokeStyle);var g=a[0];var h=a[1]*this.globalAlpha;var W=10;var H=10;e.push('<g_vml_:shape',' fillcolor="',g,'"',' filled="',Boolean(d),'"',' style="position:absolute;width:',W,';height:',H,';"',' coordorigin="0 0" coordsize="',Z*W,' ',Z*H,'"',' stroked="',!d,'"',' strokeweight="',this.lineWidth,'"',' strokecolor="',g,'"',' path="');var j=false;var k={x:null,y:null};var l={x:null,y:null};for(var i=0;i<this.currentPath_.length;i++){var p=this.currentPath_[i];var c;switch(p.type){case'moveTo':e.push(' m ');c=p;e.push(y(p.x),',',y(p.y));break;case'lineTo':e.push(' l ');e.push(y(p.x),',',y(p.y));break;case'close':e.push(' x ');p=null;break;case'bezierCurveTo':e.push(' c ');e.push(y(p.cp1x),',',y(p.cp1y),',',y(p.cp2x),',',y(p.cp2y),',',y(p.x),',',y(p.y));break;case'at':case'wa':e.push(' ',p.type,' ');e.push(y(p.x-this.arcScaleX_*p.radius),',',y(p.y-this.arcScaleY_*p.radius),' ',y(p.x+this.arcScaleX_*p.radius),',',y(p.y+this.arcScaleY_*p.radius),' ',y(p.xStart),',',y(p.yStart),' ',y(p.xEnd),',',y(p.yEnd));break}if(p){if(k.x==null||p.x<k.x){k.x=p.x}if(l.x==null||p.x>l.x){l.x=p.x}if(k.y==null||p.y<k.y){k.y=p.y}if(l.y==null||p.y>l.y){l.y=p.y}}}e.push(' ">');if(typeof this.fillStyle=='object'){var m={x:'50%',y:'50%'};var n=l.x-k.x;var o=l.y-k.y;var q=n>o?n:o;m.x=y(this.fillStyle.focus_.x/n*100+50)+'%';m.y=y(this.fillStyle.focus_.y/o*100+50)+'%';var r=[];if(this.fillStyle.type_=='gradientradial'){var s=this.fillStyle.radius1_/q*100;var t=this.fillStyle.radius2_/q*100-s}else{var s=0;var t=100}var u={offset:null,color:null};var v={offset:null,color:null};this.fillStyle.colors_.sort(function(a,b){return a.offset-b.offset});for(var i=0;i<this.fillStyle.colors_.length;i++){var w=this.fillStyle.colors_[i];r.push(w.offset*t+s,'% ',w.color,',');if(w.offset>u.offset||u.offset==null){u.offset=w.offset;u.color=w.color}if(w.offset<v.offset||v.offset==null){v.offset=w.offset;v.color=w.color}}r.pop();e.push('<g_vml_:fill',' color="',v.color,'"',' color2="',u.color,'"',' type="',this.fillStyle.type_,'"',' focusposition="',m.x,', ',m.y,'"',' colors="',r.join(''),'"',' opacity="',h,'" />')}else if(d){e.push('<g_vml_:fill color="',g,'" opacity="',h,'" />')}else{var x=Math.max(this.arcScaleX_,this.arcScaleY_)*this.lineWidth;e.push('<g_vml_:stroke',' opacity="',h,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',processLineCap(this.lineCap),'"',' weight="',x,'px"',' color="',g,'" />')}e.push('</g_vml_:shape>');this.element_.insertAdjacentHTML('beforeEnd',e.join(''))};F.fill=function(){this.stroke(true)};F.closePath=function(){this.currentPath_.push({type:'close'})};F.getCoords_=function(a,b){return{x:Z*(a*this.m_[0][0]+b*this.m_[1][0]+this.m_[2][0])-B,y:Z*(a*this.m_[0][1]+b*this.m_[1][1]+this.m_[2][1])-B}};function CanvasPattern_(){}G_vmlCMjrc=D})()}if(jQuery.browser.msie){try{document.execCommand("BackgroundImageCache",false,true)}catch(err){}}(function($){var N=$.browser.msie;var O=N&&!window.XMLHttpRequest;var P=$.browser.opera;var Q=typeof document.createElement('canvas').getContext=="function";var R=function(i){return parseInt(i,10)||0};var S=function(a,b,c){var x=a,y;if(x.currentStyle){y=x.currentStyle[b]}else if(window.getComputedStyle){if(typeof arguments[2]=="string")b=c;y=document.defaultView.getComputedStyle(x,null).getPropertyValue(b)}return y};var T=function(a,p){return S(a,'border'+p+'Color','border-'+p.toLowerCase()+'-color')};var U=function(a,p){if(a.currentStyle&&!P){w=a.currentStyle['border'+p+'Width'];if(w=='thin')w=2;if(w=='medium'&&!(a.currentStyle['border'+p+'Style']=='none'))w=4;if(w=='thick')w=6}else{p=p.toLowerCase();w=document.defaultView.getComputedStyle(a,null).getPropertyValue('border-'+p+'-width')}return R(w)};var V=function(a,i){return a.tagName.toLowerCase()==i};var W=function(e,a,b,c,d){if(e=='tl')return a;if(e=='tr')return b;if(e=='bl')return c;if(e=='br')return d};var X=function(a,b,c,d,e,f,g){var h,curve_to;if(d.indexOf('rgba')!=-1){var i=/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;var j=i.exec(d);if(j){var k=[R(j[1]),R(j[2]),R(j[3])];d='rgb('+k[0]+', '+k[1]+', '+k[2]+')'}}var l=a.getContext('2d');if(b==1||g=='notch'){if(e>0&&b>1){l.fillStyle=f;l.fillRect(0,0,b,b);l.fillStyle=d;h=W(c,[0-e,0-e],[e,0-e],[0-e,e],[e,e]);l.fillRect(h[0],h[1],b,b)}else{l.fillStyle=d;l.fillRect(0,0,b,b)}return a}else if(g=='bevel'){h=W(c,[0,0,0,b,b,0,0,0],[0,0,b,b,b,0,0,0],[0,0,b,b,0,b,0,0],[b,b,b,0,0,b,b,b]);l.fillStyle=d;l.beginPath();l.moveTo(h[0],h[1]);l.lineTo(h[2],h[3]);l.lineTo(h[4],h[5]);l.lineTo(h[6],h[7]);l.fill();if(e>0&&e<b){l.strokeStyle=f;l.lineWidth=e;l.beginPath();h=W(c,[0,b,b,0],[0,0,b,b],[b,b,0,0],[0,b,b,0]);l.moveTo(h[0],h[1]);l.lineTo(h[2],h[3]);l.stroke()}return a}h=W(c,[0,0,b,0,b,0,0,b,0,0],[b,0,b,b,b,0,0,0,0,0],[0,b,b,b,0,b,0,0,0,b],[b,b,b,0,b,0,0,b,b,b]);l.fillStyle=d;l.beginPath();l.moveTo(h[0],h[1]);l.lineTo(h[2],h[3]);if(c=='br')l.bezierCurveTo(h[4],h[5],b,b,h[6],h[7]);else l.bezierCurveTo(h[4],h[5],0,0,h[6],h[7]);l.lineTo(h[8],h[9]);l.fill();if(e>0&&e<b){var m=e/2;var n=b-m;h=W(c,[n,m,n,m,m,n],[n,n,n,m,m,m],[n,n,m,n,m,m,m,n],[n,m,n,m,m,n,n,n]);curve_to=W(c,[0,0],[0,0],[0,0],[b,b]);l.strokeStyle=f;l.lineWidth=e;l.beginPath();l.moveTo(h[0],h[1]);l.bezierCurveTo(h[2],h[3],curve_to[0],curve_to[1],h[4],h[5]);l.stroke()}return a};var Y=function(p,a){var b=document.createElement('canvas');b.setAttribute("height",a);b.setAttribute("width",a);b.style.display="block";b.style.position="absolute";b.className="jrCorner";Z(p,b);if(!Q&&N){if(typeof G_vmlCanvasManager=="object"){b=G_vmlCanvasManager.initElement(b)}else if(typeof G_vmlCMjrc=="object"){b=G_vmlCMjrc.i(b)}else{throw Error('Could not find excanvas');}}return b};var Z=function(p,a){if(p.is("table")){p.children("tbody").children("tr:first").children("td:first").append(a);p.css('display','block')}else if(p.is("td")){if(p.children(".JrcTdContainer").length===0){p.html('<div class="JrcTdContainer" style="padding:0px;position:relative;margin:-1px;zoom:1;">'+p.html()+'</div>');p.css('zoom','1');if(O){p.children(".JrcTdContainer").get(0).style.setExpression("height","this.parentNode.offsetHeight")}}p.children(".JrcTdContainer").append(a)}else{p.append(a)}};if(N){var ba=document.createStyleSheet();ba.media='print';ba.cssText='.jrcIECanvasDiv { display:none !important; }'}var bb=function(D){if(this.length==0||!(Q||N)){return this}if(D=="destroy"){return this.each(function(){var p,elm=$(this);if(elm.is(".jrcRounded")){if(typeof elm.data("ie6tmr.jrc")=='number')window.clearInterval(elm.data("ie6tmr.jrc"));if(elm.is("table"))p=elm.children("tbody").children("tr:first").children("td:first");else if(elm.is("td"))p=elm.children(".JrcTdContainer");else p=elm;p.children(".jrCorner").remove();elm.unbind('mouseleave.jrc').unbind('mouseenter.jrc').removeClass('jrcRounded').removeData('ie6tmr.jrc');if(elm.is("td"))elm.html(elm.children(".JrcTdContainer").html())}})}var o=(D||"").toLowerCase();var E=R((o.match(/(\d+)px/)||[])[1])||"auto";var F=((o.match(/(#[0-9a-f]+)/)||[])[1])||"auto";var G=/round|bevel|notch/;var H=((o.match(G)||['round'])[0]);var I=/hover/.test(o);var J=/oversized/.test(o);var K=o.match("hiddenparent");if(N){var G=/ie6nofix|ie6fixinit|ie6fixexpr|ie6fixonload|ie6fixwidthint|ie6fixheightint|ie6fixbothint/;var L=((o.match(G)||['ie6fixinit'])[0])}var M={tl:/top|left|tl/.test(o),tr:/top|right|tr/.test(o),bl:/bottom|left|bl/.test(o),br:/bottom|right|br/.test(o)};if(!M.tl&&!M.tr&&!M.bl&&!M.br)M={tl:1,tr:1,bl:1,br:1};this.each(function(){var d=$(this),rbg=null,bg,s,b,pr;var a=this;var e=S(this,'display');var f=S(this,'position');var g=S(this,'lineHeight','line-height');if(F=="auto"){s=d.siblings(".jrcRounded:eq(0)");if(s.length>0){b=s.data("rbg.jrc");if(typeof b=="string"){rbg=b}}}if(K||rbg===null){var h=this.parentNode,hidden_parents=new Array(),a=0;while((typeof h=='object')&&!V(h,'html')){if(K&&S(h,'display')=='none'){hidden_parents.push({originalvisibility:S(h,'visibility'),elm:h});h.style.display='block';h.style.visibility='hidden'}var j=S(h,'backgroundColor','background-color');if(rbg===null&&j!="transparent"&&j!="rgba(0, 0, 0, 0)"){rbg=j}h=h.parentNode}if(rbg===null)rbg="#ffffff"}if(F=="auto"){bg=rbg;d.data("rbg.jrc",rbg)}else{bg=F}if(e=='none'){var k=S(this,'visibility');this.style.display='block';this.style.visibility='hidden';var l=true}else{var m=false}var n=d.height();var p=d.width();if(I){var q=o.replace(/hover|ie6nofix|ie6fixinit|ie6fixexpr|ie6fixonload|ie6fixwidthint|ie6fixheightint|ie6fixbothint/g,"");if(L!='ie6nofix')q="ie6fixinit "+q;d.bind("mouseenter.jrc",function(){d.addClass('jrcHover');d.corner(q)});d.bind("mouseleave.jrc",function(){d.removeClass('jrcHover');d.corner(q)})}if(O&&L!='ie6nofix'){this.style.zoom=1;if(L!='ie6fixexpr'){if(d.width()%2!=0)d.width(d.width()+1);if(d.height()%2!=0)d.height(d.height()+1)}$(window).load(function(){if(L=='ie6fixonload'){if(d.css('height')=='auto')d.height(d.css('height'));if(d.width()%2!=0)d.width(d.width()+1);if(d.height()%2!=0)d.height(d.height()+1)}else if(L=='ie6fixwidthint'||L=='ie6fixheightint'||L=='ie6fixbothint'){var c,ie6FixFunction;if(L=='ie6fixheightint'){ie6FixFunction=function(){d.height('auto');var a=d.height();if(a%2!=0)a=a+1;d.css({height:a})}}else if(L=='ie6fixwidthint'){ie6FixFunction=function(){d.width('auto');var a=d.width();if(a%2!=0)a=a+1;d.css({width:a});d.data('lastWidth.jrc',d.get(0).offsetWidth)}}else if(L=='ie6fixbothint'){ie6FixFunction=function(){d.width('auto');d.height('auto');var a=d.width();var b=d.height();if(b%2!=0)b=b+1;if(a%2!=0)a=a+1;d.css({width:a,height:b})}}c=window.setInterval(ie6FixFunction,100);d.data("ie6tmr.jrc",c)}})}var r=n<p?this.offsetHeight:this.offsetWidth;if(E=="auto"){E=r/2;if(E>10)E=r/4}if(E>r/2&&!J){E=r/2}E=Math.floor(E);var t=U(this,'Top');var u=U(this,'Right');var v=U(this,'Bottom');var w=U(this,'Left');if(f=='static'&&!V(this,'td')){this.style.position='relative'}else if(f=='fixed'&&N&&!(document.compatMode=='CSS1Compat'&&!O)){this.style.position='absolute'}if(t+u+v+w>0){this.style.overflow='visible'}if(l)d.css({display:'none',visibility:k});if(typeof hidden_parents!="undefined"){for(var i=0;i<hidden_parents.length;i++){hidden_parents[i].elm.style.display='none';hidden_parents[i].elm.style.visibility=hidden_parents[i].originalvisibility}}var x=0-t,p_right=0-u,p_bottom=0-v,p_left=0-w;var y=(d.find("canvas").length>0);if(y){if(V(this,'table'))pr=d.children("tbody").children("tr:first").children("td:first");else if(V(this,'td'))pr=d.children(".JrcTdContainer");else pr=d}if(M.tl){bordersWidth=t<w?t:w;if(y)pr.children("canvas.jrcTL").remove();var z=X(Y(d,E),E,'tl',bg,bordersWidth,T(this,'Top'),H);$(z).css({left:p_left,top:x}).addClass('jrcTL')}if(M.tr){bordersWidth=t<u?t:u;if(y)pr.children("canvas.jrcTR").remove();var A=X(Y(d,E),E,'tr',bg,bordersWidth,T(this,'Top'),H);$(A).css({right:p_right,top:x}).addClass('jrcTR')}if(M.bl){bordersWidth=v<w?v:w;if(y)pr.children("canvas.jrcBL").remove();var B=X(Y(d,E),E,'bl',bg,bordersWidth,T(this,'Bottom'),H);$(B).css({left:p_left,bottom:p_bottom}).addClass('jrcBL')}if(M.br){bordersWidth=v<u?v:u;if(y)pr.children("canvas.jrcBR").remove();var C=X(Y(d,E),E,'br',bg,bordersWidth,T(this,'Bottom'),H);$(C).css({right:p_right,bottom:p_bottom}).addClass('jrcBR')}if(N)d.children('canvas.jrCorner').children('div').addClass('jrcIECanvasDiv');if(O&&L=='ie6fixexpr'){if(M.bl){B.style.setExpression("bottom","this.parentNode.offsetHeight % 2 == 0 || this.parentNode.offsetWidth % 2 == 0 ? 0-(parseInt(this.parentNode.currentStyle['borderBottomWidth'])) : 0-(parseInt(this.parentNode.currentStyle['borderBottomWidth'])+1)")}if(M.br){C.style.setExpression("right","this.parentNode.offsetWidth  % 2 == 0 || this.parentNode.offsetWidth % 2 == 0 ? 0-(parseInt(this.parentNode.currentStyle['borderRightWidth']))  : 0-(parseInt(this.parentNode.currentStyle['borderRightWidth'])+1)");C.style.setExpression("bottom","this.parentNode.offsetHeight % 2 == 0 || this.parentNode.offsetWidth % 2 == 0 ? 0-(parseInt(this.parentNode.currentStyle['borderBottomWidth'])) : 0-(parseInt(this.parentNode.currentStyle['borderBottomWidth'])+1)")}if(M.tr){A.style.setExpression("right","this.parentNode.offsetWidth   % 2 == 0 || this.parentNode.offsetWidth % 2 == 0 ? 0-(parseInt(this.parentNode.currentStyle['borderRightWidth']))  : 0-(parseInt(this.parentNode.currentStyle['borderRightWidth'])+1)")}}d.addClass('jrcRounded')});if(typeof arguments[1]=="function")arguments[1](this);return this};$.fn.corner=bb})(jQuery);