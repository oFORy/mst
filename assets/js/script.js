function readMore() {
	var dots = document.getElementById("dots");
	var more = document.getElementById("more");
	var btn = document.getElementById("bnt");

	if(dots.style.display === "none") {
		dots.style.display="inline";
		btn.innerHTML="...";
		more.style.display="none";
	} else {
		dots.style.display="none";
		btn.innerHTML="...";
		more.style.display="inline";
	}
}/*Блок с описанием*/

/*Слайд

$(document).ready(function(){
	$('.menu__btn0').on('click', function(){
		$('.slaid1').toggle();
	});
});

$(document).ready(function(){
	$('.menu__btn1').on('click', function(){
		$('.slaid2').toggle();
	});
});

$(document).ready(function(){
	$('.menu__btn2').on('click', function(){
		$('.slaid3').toggle();
	});
});

$(document).ready(function(){
	$('.menu__btn3').on('click', function(){
		$('.slaid4').toggle();
	});
});

$(document).ready(function(){
	$('.menu__btn4').on('click', function(){
		$('.slaid5').toggle();
	});
});

$(document).ready(function(){
	$('.menu__btn5').on('click', function(){
		$('.slaid6').toggle();
	});
});

*/