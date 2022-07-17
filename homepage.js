// 輪播圖
let i = 1;

let carouselMain = $('.carouselMain');
let sliderNum = $('.carousel-img').length;

let clone_first = $('.carousel-img:first-child').clone();
let clone_last = $('.carousel-img:last-child').clone();

carouselMain.append(clone_first);
carouselMain.prepend(clone_last);

carouselMain.css('width',(sliderNum + 2) * 100 + 'vw');

function sliderRight(){
  i++;
  
  carouselMain.animate({left : i * -100 + 'vw'},500 ,function(){
    if(i >= (sliderNum + 1)){
      i = 1;
      
      carouselMain.css('left' , i * -100 + 'vw');
    }
    // console.log('現在是第'+i+'張')
  });
}

setInterval(sliderRight,3000);

// 手機版導覽列轉換
$('#navbarOpen').click(function(){
  $('#navMb').addClass('open');
  $('.carousel').css('opacity','0');
  $('.hotpd-btn').css('opacity','0');
  $('.hotpd-view').css('opacity','0');
})

$('#navbarClose').click(function(){
  $('#navMb').removeClass('open');
  $('.carousel').css('opacity','1');
  $('.hotpd-btn').css('opacity','1');
  $('.hotpd-view').css('opacity','1');
})

// 二級選單
let subMenu = $(".footer-item-block.sub");

$(".footer-item-block.sub").click(function(){ 
  // console.log($(this));
  subMenu.not($(this)).removeClass("open");
  $(this).toggleClass("open");
});