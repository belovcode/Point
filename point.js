$(document).ready(function () {
	

var img1 = $('.slidImg1').clone();
var img2 = $('.slidImg2').clone();
var img3 = $('.slidImg3').clone();

var text1 = $('.slidersText1').clone();
var text2 =	$('.slidersText2').clone();
var text3 =	$('.slidersText3').clone();

function sliders () {
	img1.appendTo($('.sliders')).fadeIn(1000, function () {
		setTimeout(function () {
			text1.appendTo($('.sliders')).fadeIn(500);
		},200);
		function shouImg2 () {
			img1.fadeOut(500);
			text1.fadeOut(500,function(){
				img1.remove();
				img2.appendTo($('.sliders')).fadeIn(1000,function () {
					setTimeout(function () {
						text2.appendTo($('.sliders')).fadeIn(500);
					},200);
					function shouImg3 () {
						img2.fadeOut(500);
						text2.fadeOut(500, function () {
							img2.remove();
							img3.appendTo($('.sliders')).fadeIn(1000, function () {
								setTimeout(function () {
									text3.appendTo($('.sliders')).fadeIn(500);
								},200);
								function restart () {
									img3.fadeOut(500);
									text3.fadeOut(500,function  () {
										img3.remove();
										sliders();
									});
								};
								setTimeout(restart,4000);
							});
						});
					};
					setTimeout(shouImg3,4000);
				});
			});
		};
		setTimeout(shouImg2, 4000);
	});
};

sliders();








})