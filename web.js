$(document).ready(init());

function init() {
	initHome();
	initImg();
}

function initHome() {
	$('#main-content').load('home.html');
}

function initImg() {
	var img1 = 'dd_new.jpg';
	var img2 = 'jump.jpg';
	var img3 = 'panda1.jpg';
	var element = $('#home-img');
	element.dblclick(function(){
		var src = element.attr('src');
		switch(src) {
		  case img1:
		    element.attr('src', img2);
		    break;
		  case img2:
		    element.attr('src', img3);
		    break;
		  case img3:
		    element.attr('src', img1);
		    break;
		  default:
		    break;
		}
	});
}
