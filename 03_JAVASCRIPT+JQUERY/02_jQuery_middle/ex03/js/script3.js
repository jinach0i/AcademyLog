var current=0;
var banner1=$('#wrapper1 li');

setInterval(function(){
    var prev=banner1.eq(current);
    move(prev,0,'-100%');
    current++;
    if(current==banner1.size()){current=0}
    var next=banner1.eq(current);
    move(next,'100%',0);
},1000);


function move(tg,start,end){
    tg.css('top',start).stop().animate({top: end},500);
}

var current2=0;
var banner2=$('#wrapper2 li');
setInterval(function(){
    var prev=banner2.eq(current2);
    move(prev,0,'100%');
    current2++;
    if(current2==banner2.size()){current2=0}
    var next=banner2.eq(current2);
    move(next,'-100%',0);
},1000);


function moveLeft(tg,start,end){
    tg.css('left',start).stop().animate({left: end},500);
}

var current3=0;
var banner3=$('#wrapper3 li');

setInterval(function(){
    var prev=banner3.eq(current3);
    current3++;
    moveLeft(prev,0,'100%');
    if(current3==banner3.size()){current3=0}
    var next=banner3.eq(current3);
    moveLeft(next,'-100%',0);

},1000);