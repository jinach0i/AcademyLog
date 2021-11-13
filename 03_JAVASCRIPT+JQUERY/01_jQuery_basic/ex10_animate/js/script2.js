// $('.list .box1 a').hover(function(){
//     $('.list .box1 a img').stop().animate({top:'103px'},500);
// },function(){
//     $('.list .box1 a img').stop().animate({top:'200px'},500);
// });
// $('.list .box2 a').hover(function(){
//     $('.list .box2 a img').stop().animate({top:'103px'},500);
// },function(){
//     $('.list .box2 a img').stop().animate({top:'200px'},500);
// });
// $('.list .box3 a').hover(function(){
//     $('.list .box3 a img').stop().animate({top:'103px'},500);
// },function(){
//     $('.list .box3 a img').stop().animate({top:'200px'},500);
// });
// $('.list .box4 a').hover(function(){
//     $('.list .box4 a img').stop().animate({top:'103px'},500);
// },function(){
//     $('.list .box4 a img').stop().animate({top:'200px'},500);
// });

$('.list>div').hover(function(){
    $(this).find('img').stop().animate({top:'103px'},500);
},function(){
    $(this).find('img').stop().animate({top:'200px'},500);
});
