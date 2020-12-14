/*движение вкладок на главной странице*/
$('.triangle-text-greeting').on('click',function () {
    if(!$('.bookmark-contacts')[0].classList.contains('active-contacts')){
        $('.bookmark-contacts')[0].classList.toggle('active-contacts');
        $('.window-content-contacts')[0].classList.toggle('active-window-contacts');
        $('.pos-con')[0].classList.toggle('active-pos-con');
    }
    if(!$('.bookmark-project')[0].classList.contains('active-project')){
        $('.bookmark-project')[0].classList.toggle('active-project');
        $('.window-content-project')[0].classList.toggle('active-window-project');
        $('.pos-pj')[0].classList.toggle('active-pos-pj');
    }
});
$('.triangle-text-project').on('click',function () {
    if(!$('.bookmark-contacts')[0].classList.contains('active-contacts')){
        $('.bookmark-contacts')[0].classList.toggle('active-contacts');
        $('.window-content-contacts')[0].classList.toggle('active-window-contacts');
        $('.pos-con')[0].classList.toggle('active-pos-con');
    }
    if($('.bookmark-project')[0].classList.contains('active-project')){
        $('.bookmark-project')[0].classList.toggle('active-project');
        $('.window-content-project')[0].classList.toggle('active-window-project');
        $('.pos-pj')[0].classList.toggle('active-pos-pj');
    }
});
$('.triangle-text-contacts').on('click',function () {
    if($('.bookmark-project')[0].classList.contains('active-project')){
        $('.bookmark-project')[0].classList.toggle('active-project');
        $('.window-content-project')[0].classList.toggle('active-window-project');
        $('.pos-pj')[0].classList.toggle('active-pos-pj');
    }
    if($('.bookmark-contacts')[0].classList.contains('active-contacts')){
        $('.bookmark-contacts')[0].classList.toggle('active-contacts');
        $('.window-content-contacts')[0].classList.toggle('active-window-contacts');
        $('.pos-con')[0].classList.toggle('active-pos-con');
    }
});


/*анимация 2х верхних картинок*/
$('.text-button-prog').on('mouseover', function () {
    $('.jump-button-prog')[0].classList.toggle('pass-button-prog');
    $('.jump-button-prog')[0].classList.toggle('active-button-prog');
});
$('.text-button-prog').on('mouseout', function () {
    $('.jump-button-prog')[0].classList.toggle('pass-button-prog');
    $('.jump-button-prog')[0].classList.toggle('active-button-prog');
});


$('.text-button-artist').on('mouseover', function () {
    $('.jump-button-artist')[0].classList.toggle('pass-button-art-z');
    $('.jump-button-artist')[0].classList.toggle('active-button-art-z');
});
$('.text-button-artist').on('mouseover', function (){setTimeout(function () {
    $('.jump-button-artist')[0].classList.toggle('pass-button-art');
    $('.jump-button-artist')[0].classList.toggle('active-button-art');
},250)});
$('.text-button-artist').on('mouseout', function () {
    $('.jump-button-artist')[0].classList.toggle('pass-button-art');
    $('.jump-button-artist')[0].classList.toggle('active-button-art');
});
$('.text-button-artist').on('mouseout', function (){setTimeout(function () {
    $('.jump-button-artist')[0].classList.toggle('pass-button-art-z');
    $('.jump-button-artist')[0].classList.toggle('active-button-art-z');
},250)});

/*анимация кнопки контакты в левом нижнем углу экрана (Лаб6)*/
$('.button-con-lab6').on('click',function () {
    console.log("AAA");
    $('.lab6').toggleClass('button-con-active-lab6');
})

/*смена изображений при нажатии (Лаб6)*/
$('.foto-for-2p').on('click',function () {
    let classList = $('.foto-for-2p')[0].classList;
    let nameFoto=String(classList[1]).slice(0,11);
    if((Number(String(classList[1]).slice(-1))+1)<=3){
        nameFoto=nameFoto+String(Number(classList[1].slice(11))+1);
    }else{
        console.log(String(classList[1]).slice(-1));
        nameFoto=nameFoto+"1";
    }
    $('.foto-for-2p').toggleClass(classList[1]);
    $('.foto-for-2p').toggleClass(nameFoto);
})