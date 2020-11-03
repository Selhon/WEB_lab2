/*движение вкладок на главной странице*/
$('.triangle-text-greeting').on('click',function () {
    if(!$('.bookmark-contacts')[0].classList.contains('active-contacts')){
        $('.bookmark-contacts')[0].classList.toggle('active-contacts');
        $('.window-content-contacts')[0].classList.toggle('active-window-contacts');
    }
    if(!$('.bookmark-project')[0].classList.contains('active-project')){
        $('.bookmark-project')[0].classList.toggle('active-project');
        $('.window-content-project')[0].classList.toggle('active-window-project');
    }
});
$('.triangle-text-project').on('click',function () {
    if(!$('.bookmark-contacts')[0].classList.contains('active-contacts')){
        $('.bookmark-contacts')[0].classList.toggle('active-contacts');
        $('.window-content-contacts')[0].classList.toggle('active-window-contacts');
    }
    if($('.bookmark-project')[0].classList.contains('active-project')){
        $('.bookmark-project')[0].classList.toggle('active-project');
        $('.window-content-project')[0].classList.toggle('active-window-project');
    }
});
$('.triangle-text-contacts').on('click',function () {
    if($('.bookmark-project')[0].classList.contains('active-project')){
        $('.bookmark-project')[0].classList.toggle('active-project');
        $('.window-content-project')[0].classList.toggle('active-window-project');
    }
    if($('.bookmark-contacts')[0].classList.contains('active-contacts')){
        $('.bookmark-contacts')[0].classList.toggle('active-contacts');
        $('.window-content-contacts')[0].classList.toggle('active-window-contacts');
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
$('.text-button-artist').on('mouseover', function () {
    $('.jump-button-artist')[0].classList.toggle('pass-button-art');
    $('.jump-button-artist')[0].classList.toggle('active-button-art');
});

$('.text-button-artist').on('mouseout', function () {
    $('.jump-button-artist')[0].classList.toggle('pass-button-art');
    $('.jump-button-artist')[0].classList.toggle('active-button-art');
});
$('.text-button-artist').on('mouseout', function () {
    $('.jump-button-artist')[0].classList.toggle('pass-button-art-z');
    $('.jump-button-artist')[0].classList.toggle('active-button-art-z');
});
