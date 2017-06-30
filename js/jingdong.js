var chengshi=document.getElementById('chengshi');
var diming_box=document.getElementsByClassName('diming_box')[0];
var city=diming_box.getElementsByTagName('a');
var diming=document.getElementsByClassName('diming')[0];
var guanggao=document.getElementsByClassName('guanggao')[0];
var guanbi=document.getElementById('guanbi');
//置顶广告
guanbi.onclick=function(){
	guanggao.style.display='none';
}
//结束
//城市选择
diming.onmouseover=function(){
	diming_box.style.display='block';
	for (var i = 0; i < city.length; i++) {
		city[i].onclick=function(){
			for (var i = 0; i < city.length; i++) {
				if (city[i]==this) {
					for (var a = 0; a < city.length; a++) {
						city[a].style.color='#999';
						city[a].style.background='#fff';
					};
					city[i].style.color='#fff';
					city[i].style.background='#f10215';
					chengshi.innerHTML=city[i].innerHTML;
					diming_box.style.display='none';
				};
			};
		}
		city[i].onmouseover=function(){
			for (var i = 0; i < city.length; i++) {
				if (city[i]==this) {
					if (chengshi.innerHTML==city[i].innerHTML) {
						continue;
					}else{
						city[i].style.color='red';
						city[i].style.background='#f6f6f6';
					}
				};
			};
		}
		city[i].onmouseout=function(){
			for (var i = 0; i < city.length; i++) {
				if (city[i]==this) {
					if (chengshi.innerHTML==city[i].innerHTML) {
						continue;
					}else{
						city[i].style.color='#999'
						city[i].style.background='#fff';
					}
				};
			};
		}	
	};
}
diming.onmouseout=function(){
	diming_box.style.display='none';
}
//结束
//轮播图
var img=document.getElementsByClassName('slider_item');
var btn=document.getElementsByClassName('slider_indicator_btn');
var left=document.getElementsByClassName('icon-zuo')[0];
var right=document.getElementsByClassName('icon-iconfonticonfont10shanchu')[0];
var main=document.getElementById('slider_main');
var leftbtn=document.getElementById('leftbtn');
var rightbtn=document.getElementById('rightbtn');
var bian=document.getElementsByClassName('slider_list')[0];
var time=null;
var time2=null,time3=null;
var num=0;
function a(num){
	var c=0;
	var b=1;
	for (var i = 0; i < btn.length; i++) {
		if ((num-1)<0) {
			img[7].style.opacity=b;
		}else if((num-1)==i){
			img[num-1].style.opacity=b;
		}else{
			img[i].style.opacity=0;
		}
	}
	clearInterval(time);
	clearTimeout(time3);
	time=setInterval(function(){
		b-=1/25;
		if (b<=0) {
			b=0;
			clearInterval(time);
		}
		if (num-1<0) {
			img[7].style.opacity=b;
			btn[7].style.backgroundColor='#fff';
		}else{
			img[num-1].style.opacity=b;
			btn[num-1].style.backgroundColor='#fff';
		}
		c+=1/25;
		if (c>=1) {
			c=1;
			clearInterval(time);
		}
		img[num].style.opacity=c;
		btn[num].style.backgroundColor='#db192a';
	},20)
}
time2=setInterval(function (){
	num++;
	if (num>7) {
		num=0;
	};
	a(num);
},2000);
for (var i = 0; i < btn.length; i++) {
	btn[i].onmouseover=function(){
		clearInterval(time);
		clearInterval(time2);
		clearTimeout(time3);
		for (var i = 0; i < btn.length; i++) {
			if (btn[i]==this) {
				var c=0;
				var b=1;
				var ss=i;
				var vv=num;
				for (var i = 0; i < btn.length; i++) {
					if (i==vv) {
						img[vv].style.opacity=b;
					}else{
						img[i].style.opacity=0;
					}
				}
				time3=setTimeout(function (){
					time=setInterval(function (){
						b-=1/25;
						if (b<=0) {
							b=0;
							clearInterval(time);
						}
						img[vv].style.opacity=b;
						btn[vv].style.backgroundColor='#fff';
						c+=1/25;
						if (c>=1) {
							c=1;
							clearInterval(time);
						}
						num=ss;
						img[ss].style.opacity=c;
						btn[ss].style.backgroundColor='#db192a';
					},10)
				},500)		
			}
		}
	}
	btn[i].onmouseout=function (){
		clearInterval(time);
		clearInterval(time2);
		clearTimeout(time3);
		for (var i = 0; i < btn.length; i++) {
			if(btn[i]==this){
				time2=setInterval(function (){
					num++;
					if (num>=8) {
						num=0;
					};
					a(num);
				},2000);
			}
		}
	}
}
left.onclick=function(){
	clearInterval(time);
	clearInterval(time2);
	clearTimeout(time3);

	num--;
	if (num<0) {
		num=7;
	}
	var c=0;
	var b=1;
	
	for (var i = 0; i < btn.length; i++) {
		if (num==7) {
			img[0].style.opacity=b;
		}else if((num+1)==i){
			img[num+1].style.opacity=b;
		}else{
			img[i].style.opacity=0;
		}
	}

	time=setInterval(function (){
		b-=1/25;
		if (b<=0) {
			b=0;
			clearInterval(time);
		}
		if (num==7) {
			// num=7;
			img[0].style.opacity=b;
			btn[0].style.backgroundColor='#fff';
			
		}else{
			img[num+1].style.opacity=b;
			btn[num+1].style.backgroundColor='#fff';
		}
		
		
		c+=1/25;
		if (c>=1) {
			c=1;
			clearInterval(time);
		}
		// num=ss;
		img[num].style.opacity=c;
		btn[num].style.backgroundColor='#db192a';
	},10)
	time2=setInterval(function (){
		num++;
		if (num>=8) {
			num=0;
		};
		a(num);
	},2000);
}
right.onclick=function (){
	clearInterval(time);
	clearInterval(time2);
	clearTimeout(time3);
	num++;
	if (num>7) {
		num=0;
	}
	var c=0;
	var b=1;
	for (var i = 0; i < btn.length; i++) {
		if ((num-1)<0) {
			img[7].style.opacity=b;
		}else if((num-1)==i){
			img[num-1].style.opacity=b;
		}else{
			img[i].style.opacity=0;
		}
	}
	time=setInterval(function (){
		b-=1/25;
		if (b<=0) {
			b=0;
			clearInterval(time);
		}
		if ((num-1)<0) {
			img[7].style.opacity=b;
			btn[7].style.backgroundColor='#fff';
			
		}else{
			img[num-1].style.opacity=b;
			btn[num-1].style.backgroundColor='#fff';
		}
		c+=1/25;
		if (c>=1) {
			c=1;
			clearInterval(time);
		}
		img[num].style.opacity=c;
		btn[num].style.backgroundColor='#db192a';
	},10)
	time2=setInterval(function (){
		num++;
		if (num>=8) {
			num=0;
		};
		a(num);
	},2000);
}
bian.onmouseover=function (){
	clearInterval(time);
	clearInterval(time2);
	clearTimeout(time3);
	leftbtn.style.opacity='1';
	rightbtn.style.opacity='1';
	leftbtn.style.backgroundColor='rgba(0,0,0,0.1)';
	rightbtn.style.backgroundColor='rgba(0,0,0,0.1)';
	for (var j = 0; j < btn.length; j++) {
		if (j==num) {
			img[j].style.opacity=1;
		}else{
			img[j].style.opacity=0;
		}
	}
	leftbtn.onmouseover=function(){
		leftbtn.style.opacity='1';
		rightbtn.style.opacity='1';
		leftbtn.style.backgroundColor='rgba(0,0,0,0.5)';
	}
	rightbtn.onmouseover=function(){
		leftbtn.style.opacity='1';
		rightbtn.style.opacity='1';
		rightbtn.style.backgroundColor='rgba(0,0,0,0.5)';
	}
}
leftbtn.onmouseout=function(){
	leftbtn.style.backgroundColor='rgba(0,0,0,0.1)';
	leftbtn.style.opacity='0';
	rightbtn.style.opacity='0';
}
rightbtn.onmouseout=function(){
	rightbtn.style.backgroundColor='rgba(0,0,0,0.1)';
	leftbtn.style.opacity='0';
	rightbtn.style.opacity='0';
}
bian.onmouseout=function (){
	leftbtn.style.opacity='0';
	rightbtn.style.opacity='0';
	time2=setInterval(function (){
		num++;
		if (num>=8) {
			num=0;
		};
		a(num);
	},2000);
}
//结束
var news_first=document.getElementsByClassName('news_first')[0];
var news_last=document.getElementsByClassName('news_last')[0];
var mod_tab_content_item=document.getElementsByClassName('mod_tab_content_item');
var news_tab_active=document.getElementsByClassName('news_tab_active')[0];
news_first.onmouseover=function(){
	mod_tab_content_item[0].style.display='block';
	mod_tab_content_item[1].style.display='none';
	news_tab_active.style.transform='translateX(0px)';
}
news_last.onmouseover=function(){
	mod_tab_content_item[0].style.display='none';
	mod_tab_content_item[1].style.display='block';
	news_tab_active.style.transform='translateX(52px)'
}
var hour=document.getElementsByClassName('hour')[0];
var hours=hour.getElementsByTagName('span')[0];
var minute=document.getElementsByClassName('minute')[0];
var minutes=minute.getElementsByTagName('span')[0];
var second=document.getElementsByClassName('second')[0];
var seconds=second.getElementsByTagName('span')[0];
setInterval(function(){
	var now=new Date();
	var weilai=new Date('2016/12/31,0:0:0');
	var start=now.getTime();
	var end=weilai.getTime();
	var cha=end-start;
	var a=cha%(1000*60*60*24);
	var hourss=parseInt(a/(1000*60*60));
	var b=a%(1000*60*60);
	var minutess=parseInt(b/(1000*60));
	var c=b%(1000*60);
	var secondss=parseInt(c/1000);
	hours.innerHTML=hourss;
	minutes.innerHTML=minutess;
	seconds.innerHTML=secondss;
},100)


//图片位移Y

var item_pic_lk=document.getElementsByClassName('item_pic_lk');
var item_img=document.getElementsByClassName('item_img');
for (var i = 0; i < item_pic_lk.length; i++) {
	item_pic_lk[i].onmouseover=function(){
		for (var i = 0; i < item_pic_lk.length; i++) {
			if (item_pic_lk[i]==this) {
				item_img[i].style.transform='translateY(-5px)';
			}
		}
	}
	item_pic_lk[i].onmouseout=function(){
		for (var i = 0; i < item_pic_lk.length; i++) {
			if (item_pic_lk[i]==this) {
				item_img[i].style.transform='translateY(0)';
			}	
		}
	}
}
//结束
var con2_item_lk=document.getElementsByClassName('con2_item_lk');
var con2_img=document.getElementsByClassName('con2_img');
for (var i = 0; i < con2_img.length; i++) {
	con2_item_lk[i].onmouseover=function(){
		for (var i = 0; i < con2_img.length; i++) {
			if (con2_item_lk[i]==this) {
				con2_img[i].style.transform='translateX(15px)';
			};
		};
	}
	con2_item_lk[i].onmouseout=function(){
		for (var i = 0; i < con2_img.length; i++) {
			if (con2_item_lk[i]==this) {
				con2_img[i].style.transform='translateX(0)';
			};
		};
	}
};



var con3_box_item_lk=document.getElementsByClassName('con3_box_item_lk');
var con3_box_item_img=document.getElementsByClassName('con3_box_item_img');
for (var i = 0; i < con3_box_item_img.length; i++) {
	con3_box_item_lk[i].onmouseover=function(){
		for (var i = 0; i < con3_box_item_lk.length; i++) {
			if (con3_box_item_lk[i]==this) {
				con3_box_item_img[i].style.transform='translateX(-5px)';
			};
		};
	}
	con3_box_item_lk[i].onmouseout=function(){
		for (var i = 0; i < con3_box_item_lk.length; i++) {
			if (con3_box_item_lk[i]==this) {
				con3_box_item_img[i].style.transform='translateX(0)';
			};
		};
	}
};



var con3_box_rec_lk_warp=document.getElementsByClassName('con3_box_rec_lk_warp');
var rec_img=document.getElementsByClassName('rec_img');
for (var i = 0; i < con3_box_rec_lk_warp.length; i++) {
	con3_box_rec_lk_warp[i].onmouseover=function(){
		for (var i = 0; i < con3_box_rec_lk_warp.length; i++) {
			if (con3_box_rec_lk_warp[i]==this) {
				rec_img[i].style.transform='translateX(-5px)';
			};
		};
	}
	con3_box_rec_lk_warp[i].onmouseout=function(){
		for (var i = 0; i < con3_box_rec_lk_warp.length; i++) {
			if (con3_box_rec_lk_warp[i]==this) {
				rec_img[i].style.transform='translateX(0)';
			};
		};
	}
};



var tab_head_item=document.getElementsByClassName('tab_head_item');
var tab_active=document.getElementsByClassName('tab_active')[0];
var tab_con_item=document.getElementsByClassName('tab_con_item');

tab_head_item[0].onmouseover=function(){
	tab_active.style.transform='translateX(0)';
	tab_con_item[0].style.display='block';
	tab_con_item[1].style.display='none';
	tab_con_item[2].style.display='none';
	tab_con_item[3].style.display='none';
	tab_con_item[4].style.display='none';
}
tab_head_item[1].onmouseover=function(){
	tab_active.style.transform='translateX(78px)';
	tab_con_item[0].style.display='none';
	tab_con_item[1].style.display='block';
	tab_con_item[2].style.display='none';
	tab_con_item[3].style.display='none';
	tab_con_item[4].style.display='none';
}
tab_head_item[2].onmouseover=function(){
	tab_active.style.transform='translateX(156px)';
	tab_con_item[0].style.display='none';
	tab_con_item[1].style.display='none';
	tab_con_item[2].style.display='block';
	tab_con_item[3].style.display='none';
	tab_con_item[4].style.display='none';
}
tab_head_item[3].onmouseover=function(){
	tab_active.style.transform='translateX(234px)';
	tab_con_item[0].style.display='none';
	tab_con_item[1].style.display='none';
	tab_con_item[2].style.display='none';
	tab_con_item[3].style.display='block';
	tab_con_item[4].style.display='none';
}
tab_head_item[4].onmouseover=function(){
	tab_active.style.transform='translateX(312px)';
	tab_con_item[0].style.display='none';
	tab_con_item[1].style.display='none';
	tab_con_item[2].style.display='none';
	tab_con_item[3].style.display='none';
	tab_con_item[4].style.display='block';
}

var box_cover_lk=document.getElementsByClassName('box_cover_lk');
var box_cover_img=document.getElementsByClassName('box_cover_img');
for (var i = 0; i < box_cover_lk.length; i++) {
	box_cover_lk[i].onmouseover=function(){
		for (var i = 0; i < box_cover_lk.length; i++) {
			if (box_cover_lk[i]==this) {
				box_cover_img[i].style.transform='translateX(-10px)';
			};
		};
	}
	box_cover_lk[i].onmouseout=function(){
		for (var i = 0; i < box_cover_lk.length; i++) {
			if (box_cover_lk[i]==this) {
				box_cover_img[i].style.transform='translateX(0)';
			};
		};
	}
};
var box_bi_item=document.getElementsByClassName('box_bi_item');
var box_bi_img=document.getElementsByClassName('box_bi_img');
for (var i = 0; i < box_bi_item.length; i++) {
	box_bi_item[i].onmouseover=function(){
		for (var i = 0; i < box_bi_item.length; i++) {
			if (box_bi_item[i]==this) {
				box_bi_img[i].style.transform='translateX(-5px)';
			};
		};
	}
	box_bi_item[i].onmouseout=function(){
		for (var i = 0; i < box_bi_item.length; i++) {
			if (box_bi_item[i]==this) {
				box_bi_img[i].style.transform='translateX(0)';
			};
		};
	}
};









var box_more_item=document.getElementsByClassName('box_more_item');
var box_more_img=document.getElementsByClassName('box_more_img');
for (var i = 0; i < box_more_item.length; i++) {
	box_more_item[i].onmouseover=function(){
		for (var i = 0; i < box_more_item.length; i++) {
			if (box_more_item[i]==this) {
				box_more_img[i].style.transform='translateX(-10px)';
			};
		};
	}
	box_more_item[i].onmouseout=function(){
		for (var i = 0; i < box_more_item.length; i++) {
			if (box_more_item[i]==this) {
				box_more_img[i].style.transform='translateX(0)';
			};
		};
	}
};
var box_logo_pre=document.getElementsByClassName('box_logo_pre');
var box_logo_next=document.getElementsByClassName('box_logo_next');
var box_logo_list=document.getElementsByClassName('box_logo_list');
for (var i = 0; i < box_logo_pre.length; i++) {
	box_logo_pre[i].onclick=function(){
		for (var i = 0; i < box_logo_pre.length; i++) {
			if (box_logo_pre[i]==this) {
				box_logo_list[i].style.transform='translateX(-570px)';
			}
		}
	}
	box_logo_next[i].onclick=function(){
		for (var i = 0; i < box_logo_next.length; i++) {
			if (box_logo_next[i]==this) {
				box_logo_list[i].style.transform='translateX(0px)';
			}
		}
	}
}


// 楼层跳跃
function offsetTL(obj){
	var l=0,t=0;
	while(obj) {
		l=l+obj.offsetLeft;//
		t=t+obj.offsetTop;//
		obj=obj.offsetParent;
	}
	return {left:l,top:t};
}
var wh=document.documentElement.clientHeight/2;
var ss=0;
window.onload=window.onscroll=function(){
	var scrt=document.body.scrollTop;
	if (offsetTL($('.con_floor')[0]).top<=(scrt+wh)) {
		$('#floor_nav').fadeIn();
	}else{
		$('#floor_nav').fadeOut();
	}
	for (var i = 0; i < 10; i++) {
		var hgt=offsetTL($('.con_floor')[i]).top;
		if (hgt<=(scrt+wh)) {
			ss=i;
			for (var j = 0; j < 10; j++) {
				$('.floor_item').eq(j).removeClass('floor_item_on');
			};
			$('.floor_item').eq(ss).addClass('floor_item_on');
		};
	};

	$('.floor_item').click(function (){
		var y=$(this).index();
		var h=offsetTL($('.con_floor')[y]).top;
		$('body').stop().animate({
			'scrollTop':h
		})
	})
}






