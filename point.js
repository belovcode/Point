$(document).ready(function () {
	


function sliders () {
	$('.slidImg1').fadeIn(1000, function () {
		setTimeout(function () {
			$('.slidersText1').fadeIn(500);
		},200);
		function shouImg2 () {
			$('.slidImg1, .slidersText1').fadeOut(500,function(){

				$('.slidImg2').fadeIn(1000,function () {
					setTimeout(function () {
						$('.slidersText2').fadeIn(500);
					},200);
					function shouImg3 () {
						$('.slidImg2, .slidersText2').fadeOut(500, function () {

							$('.slidImg3').fadeIn(1000, function () {
								setTimeout(function () {
									$('.slidersText3').fadeIn(500);
								},200);
								function restart () {
									$('.slidImg3, .slidersText3').fadeOut(500,function  () {
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