/*
* @Author: ÏÄÅåÃô
* @Date:   2018-12-15 13:44:20
* @Last Modified by:   夏佩敏
* @Last Modified time: 2019-01-01 14:45:57
*/

//加入购物车  
var ycgw = document.getElementById("ycgw");
var yc1 = document.getElementById("yc1");
var s11 = document.getElementById("s11");
function blockbox(){
	ycgw.style.display = "block";
	yc1.style.display = "block";
}

var close = document.getElementById("close");
close.onmouseover = function(){
	close.style.background = "red";
}
close.onmouseout = function(){
	close.style.background = "none";
}

//选择化妆品净含量
var s6d1 = document.getElementById("s6d1");
var s6d2 = document.getElementById("s6d2");
var ml = document.getElementById("ml");
s6d1.onclick = function(){
	s6d1.style.border = "1px solid #fe0d4a";
	s6d1.style.background = "url('../img/bjt.png') no-repeat right bottom";
	s6d2.style.border = "none";
	s6d2.style.background = "none";
	ml.innerHTML = '"150ml"';
}
s6d2.onclick = function(){
	s6d2.style.border = "1px solid #fe0d4a";
	s6d2.style.background = "url('../img/bjt.png') no-repeat right bottom";
	s6d1.style.border = "none";
	s6d1.style.background = "none";
	ml.innerHTML = '"200ml"';
}

//购物数量增减
var s72 = document.getElementById("s72");//-
var s73 = document.getElementById("s73");//复选框
var s74 = document.getElementById("s74");//+
s72.onmouseover = function(){
	var x = s73.value;
	x = parseInt(x);
	if(x == 1){
		s72.style.cursor = "not-allowed";
	}else{
		s72.style.cursor = "pointer";
	}
}
s74.onmouseover = function(){
	var x = s73.value;
	x = parseInt(x);
	if(x == 5){
		s74.style.cursor = "not-allowed";
	}else{
		s74.style.cursor = "pointer";
	}
}
s72.onclick = function(){
	var x = s73.value;
	x = parseInt(x);
	console.log(typeof(x));
	if(x == 1){
		s72.style.cursor = "not-allowed";
	}else{
		x--;
		s73.value = x;
	}
}
s74.onclick = function(){
	var x = s73.value;
	x = parseInt(x);	
	if(x == 5){
		s74.style.cursor = "not-allowed";
	}else{
		x++;
		s73.value = x;
	}
}

//商品详图选择
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var spbox = document.getElementById("spbox");
var spbox2 = document.getElementById("spbox2");
c1.onclick = function(){
	c2.style.border = "1px solid #ff9003";
	c3.style.border = "none";
	spbox.style.display = "block";
	spbox2.style.display = "none";
}
c2.onclick = function(){
	c2.style.border = "1px solid #ff9003";
	c3.style.border = "none";
	spbox.style.display = "block";
	spbox2.style.display = "none";
}
c3.onclick = function(){
	c3.style.border = "1px solid #ff9003";
	c2.style.border = "none";
	spbox2.style.display = "block";
	spbox.style.display = "none";
}
c4.onclick = function(){
	c3.style.border = "1px solid #ff9003";
	c2.style.border = "none";
	spbox2.style.display = "block";
	spbox.style.display = "none";
}

//放大镜效果
var spbox = document.getElementById("spbox");//pp0图片
var spbox2 = document.getElementById("spbox2");//pp1图片
var ycfd = document.getElementById("ycfd");//放大镜的盒子
var pp0 = document.getElementById("pp0");
var pp1 = document.getElementById("pp1");
var slider = document.getElementById("slider");
var slider2 = document.getElementById("slider2");
var box = document.getElementById("box");
spbox.onmouseover = function(){
	box.style.width = "824px";
	ycfd.style.display = "block";
	pp0.style.display = "block";
	pp1.style.display = "none";
	slider.style.display = "block";
}
spbox2.onmouseover = function(){
	box.style.width = "824px";
	ycfd.style.display = "block";
	pp1.style.display = "block";
	pp0.style.display = "none";
	slider2.style.display = "block";
}
spbox.onmouseout = function(){
	box.style.width = "410px";
	ycfd.style.display = "none";
	slider.style.display = "none";
}
spbox2.onmouseout = function(){
	box.style.width = "410px";
	ycfd.style.display = "none";
	slider2.style.display = "none";
}
spbox.onmousemove=function(ev){
	var slide = document.documentElement.scrollTop || document.body.scrollTop;

	var ev=ev||event;
	var oL=ev.clientX-box.offsetLeft-slider.offsetWidth/2;
	var oT=ev.clientY-box.offsetTop-slider.offsetHeight/2;
	var oMaxw=spbox.offsetWidth-slider.offsetWidth;
	var oMaxh=spbox.offsetHeight-slider.offsetHeight;		  
	oL=oL>oMaxw?oMaxw:oL<0?0:oL;
	oT=oT>oMaxh?oMaxh:oT<0?0:oT;		
	var l = slider.style.left = oL+'px';
	var t = slider.style.top = oT+'px' ;

	if(slide > 0){
		slider.style.marginLeft = parseInt(l) + "px";
	    slider.style.marginTop = parseInt(t) - 410 + slide + "px";
	    console.log(slider.style.top);
	}else{
		slider.style.marginLeft = parseInt(l) + "px";
	    slider.style.marginTop = parseInt(t) - 410 + "px";
	}

			
	var oBmaxw = ycfd.offsetWidth - pp0.offsetWidth; 
	var oBmaxh = ycfd.offsetHeight - pp0.offsetHeight; 
	pp0.style.marginLeft = ( oL/oMaxw ) * oBmaxw + 'px';
	pp0.style.marginTop = ( oT/oMaxh ) * oBmaxh + 'px';
}
spbox2.onmousemove=function(ev){
	var slide = document.documentElement.scrollTop || document.body.scrollTop;

	var ev=ev||event;
	var oL=ev.clientX-box.offsetLeft-slider2.offsetWidth/2;
	var oT=ev.clientY-box.offsetTop-slider2.offsetHeight/2;
	var oMaxw=spbox2.offsetWidth-slider2.offsetWidth;
	var oMaxh=spbox2.offsetHeight-slider2.offsetHeight;		  
	oL=oL>oMaxw?oMaxw:oL<0?0:oL;
	oT=oT>oMaxh?oMaxh:oT<0?0:oT;		
	var l = slider2.style.left = oL+'px';
	var t = slider2.style.top = oT+'px' ;

	if(slide > 0){
		slider2.style.marginLeft = parseInt(l) + "px";
	    slider2.style.marginTop = parseInt(t) - 410 + slide +"px";	
	    console.log(slider.style.top);
	}else{
		slider2.style.marginLeft = parseInt(l) + "px";
	    slider2.style.marginTop = parseInt(t) - 410 +"px";	
	}

		
	var oBmaxw = ycfd.offsetWidth - pp1.offsetWidth; 
	var oBmaxh = ycfd.offsetHeight - pp1.offsetHeight; 
	pp1.style.marginLeft = ( oL/oMaxw ) * oBmaxw + 'px';
	pp1.style.marginTop = ( oT/oMaxh ) * oBmaxh + 'px';
}


