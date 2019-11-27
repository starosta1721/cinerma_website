

// пролистивыние страницы
$(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
	$("nav a").click(function () {
		elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 1800);
	});
});

// слайдер
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    var slides_tours = [], slides_news = [];

    for (var j = 0; j < slides.length; j++) {
      if (slides[j].parentElement.id === 'tours') {
        slides_tours.push(slides[j]);
      } else {
        slides_news.push(slides[j]);
      }
    };
    
    if (n > slides_tours.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides_tours.length
    }
    for (i = 0; i < slides_tours.length; i++) {
      slides_tours[i].style.display = "none";
    }
    
    if (n > slides_news.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides_news.length
    }
    for (i = 0; i < slides_news.length; i++) {
      slides_news[i].style.display = "none";
    }
    

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides_tours[slideIndex - 1].style.display = "block";
    slides_news[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// сообщение при заполнении формы

$(document).ready(function(){
  //Скрыть PopUp при загрузке страницы    
  PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
  $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide(){
  $("#popup1").hide();
}
