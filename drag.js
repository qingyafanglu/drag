/**
 * Created by Steven on 2017/3/1.
 */
window.onload=function(){
 //1 设置通用函数
    function g(id){
        return document.getElementById(id);
    }
 //2 自动处置居中    自动铺满屏幕

   var drag=g('drag');
   function aotuCenter(el){
       var bodyW=document.documentElement.clientWidth;
       var bodyH=document.documentElement.clientHeight;
       var left=(bodyW-g(el).clientWidth)/2+'px';
       var top=(bodyH-g(el).clientHeight)/2+'px';
       g(el).style.left=left;
       g(el).style.top=top;

   }
   function fullBody(el){
       var bodyW=document.documentElement.clientWidth;
       var bodyH=document.documentElement.clientHeight;
       g(el).style.width=bodyW+'px';
       g(el).style.height=bodyH+'px';

   }
// 3 点击登录  显示浮层  点击关闭  隐藏浮层
 function showDialog(){
       g('drag').style.display='block';
       g('mask').style.display='block';
        aotuCenter('drag');
        fullBody('mask');

    }

g('login').onclick=function(){
    showDialog();
};
g('close-btn').onclick=function(){
    g('drag').style.display='none';
    g('mask').style.display='none';
}

    window.onresize = showDialog;
//4 鼠标拖拽效果
 var isDrag=false;
 var mouseOffsetX=0;
 var mouseOffsetY=0;
 g('title').addEventListener('mousedown',function(e){
     var e=e||window.event;
     mouseOffsetX= e.pageX-g('drag').offsetLeft;
     mouseOffsetY= e.pageY-g('drag').offsetTop;
     isDrag=true;
     console.log( mouseOffsetX );
     console.log( mouseOffsetY);
 })
document.onmousemove=function(e){
    var e=e||window.event;
    var moveX=e.pageX-mouseOffsetX;
    var moveY=e.pageY-mouseOffsetY;
    var maxW=document.documentElement.clientWidth-g('drag').offsetWidth;
    var maxH=document.documentElement.clientHeight-g('drag').offsetHeight;
    var x=Math.min(maxW,Math.max(0,moveX));
    var y=Math.min(maxH,Math.max(0,moveY));
    if(isDrag===true){
        g('drag').style.left= x+'px';
        g('drag').style.top= y+'px';
    }
}


document.onmouseup=function(){
    isDrag=false;
}

}



