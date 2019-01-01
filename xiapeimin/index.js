/*
* @Author: ÏÄÅåÃô
* @Date:   2018-12-14 13:31:13
* @Last Modified by:   夏佩敏
* @Last Modified time: 2018-12-19 21:56:47
*/


//右侧悬浮固定  划入伸出效果
var fix1 = document.getElementById("fix1");
var fix2 = document.getElementById("fix2");
var fix3 = document.getElementById("fix3");
var fix4 = document.getElementById("fix4");
var small = document.getElementById("small");
var dama = document.getElementById("dama");

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj){ 
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;
		var now = parseInt(getStyle(obj,'margin-left'));
		var speed = (100 - now)/3;
		speed = Math.ceil(speed);
		obj.style.marginLeft = now-speed+'px';
		if(parseInt(getStyle(obj,'margin-left')) < 1){
			obj.style.marginLeft = 0 + 'px';
		}
	}, 30)
}
function move(obj){   
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;
		var now = parseInt(getStyle(obj,'margin-left'));	
		var speed = (90 - now)/2;
		speed = Math.ceil(speed);
		obj.style.marginLeft = now+speed+'px';
		if(parseInt(getStyle(obj,'margin-left')) > 83){
			obj.style.marginLeft = 85 + 'px';
		}
	}, 30)
}
fix1.onmouseover = function(){
	animate(fix1);
}
fix2.onmouseover = function(){
	animate(fix2);
}
fix3.onmouseover = function(){	
	small.style.display = "none";
	dama.style.display = "block";
	animate(fix3);
}
fix4.onmouseover = function(){
	animate(fix4);
}
fix1.onmouseout = function(){
	move(fix1);
}
fix2.onmouseout = function(){
	move(fix2);
}
fix3.onmouseout = function(){
	move(fix3);
	dama.style.display = "none";
	small.style.display = "block";
}
fix4.onmouseout = function(){
	move(fix4);
}

//下拉框 充值
var cz = document.getElementById("cz");
cz.onclick = function(){
	var rmbp = document.getElementById("rmbp");    
    rmbp.innerHTML = cz.value;
}

//轮播图
var bann2 = document.getElementById("bann2");
var bann3 = document.getElementById("bann3");
var mzhong1 = document.getElementById("mzhong1");
var bann = document.getElementById("bann");
var oNavlist = document.getElementById('nav').children;
var index = 1;
var timer;
var isMoving = false;

mzhong1.onmouseover = function(){
	bann2.style.display = "block";
	bann3.style.display = "block";
	clearInterval(timer);
}
mzhong1.onmouseout = function(){
	bann2.style.display = "none";
	bann3.style.display = "none";
	timer = setInterval(next, 1000);
}

function animate2(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

bann3.onclick = next;
bann2.onclick = prev;

for( var i=0; i<oNavlist.length; i++ ){
	oNavlist[i].index = i;
	oNavlist[i].onclick = function(){
		index = this.index+1;
	    navmove();
	    animate2(bann,{marginLeft:-800*index});
	}
}	
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate2(bann,{marginLeft:-800*index},function(){
		if(index==7){
			bann.style.marginLeft = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate2(bann,{marginLeft:-800*index},function(){
		if(index==0){
			bann.style.marginLeft = '-4800px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >6 ){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 1000);

//公告轮播
var myou2 = document.getElementById("myou2");
var ulgg = document.getElementById("ulgg");
var index2 = 0;
var timer2;
var isMoving2 = false;

myou2.onmouseover = function(){
	clearInterval(timer2);
}
myou2.onmouseout = function(){
	timer2 = setInterval(notice, 5);
}

function notice(){
	if(isMoving2){
		return;
	}
	isMoving2 = true;
	index2++;
	animate2(ulgg,{marginTop:-29*index2},function(){
		if(index2 == 13){
			ulgg.style.marginTop = '0px';
			index2 = 0;
		}
		isMoving2 = false;
	});

}
timer2 = setInterval(notice, 5);



