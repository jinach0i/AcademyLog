let $window=window,
    $mainHeader=document.getElementById('main-header'),
    $logo=document.getElementById('logo'),
    $defaultLogo='img/b.png',
    $smallLogo='img/bb.png',
    $rHeader=$mainHeader.offsetHeight;
    //console.log( $rHeader);
$window.addEventListener('scroll', function(){
    if(this.pageYOffset > $rHeader){
        if(!$mainHeader.classList.contains('addHeader')){
            $mainHeader.classList.add('addHeader');
            switchImg($smallLogo)
        }
    }else{
        if($mainHeader.classList.contains('addHeader')){
            $mainHeader.classList.remove('addHeader')
            switchImg($defaultLogo)
        }
    }
});

function switchImg(newImg) {
    $logo.classList.add('hide');
    setTimeout(function(){
        $logo.setAttribute('src',newImg);
        $logo.classList.remove('hide');
    },300);
}