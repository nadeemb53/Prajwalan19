$(document).ready(function() {
	$(".hoveMenu a").click(function(){
		$(".hoveMenu a").removeClass("activeli");
		$(this).addClass("activeli");
	});	
	var documentEl = $(document);
	documentEl.on("scroll", function () {
		if (documentEl.scrollTop() >= $("#home").offset().top && documentEl.scrollTop() < $("#songs").offset().top*0.5){
			$('.hoveMenu a').removeClass('activeli');
			$('.home').addClass('activeli');
		}else if(documentEl.scrollTop()>= $("#songs").offset().top*0.5 && documentEl.scrollTop() < $("#lyrics").offset().top*0.8){
			$('.hoveMenu a').removeClass('activeli');
			$('.songs').addClass('activeli ');
		}else if (documentEl.scrollTop()>= $("#lyrics").offset().top*0.8 && documentEl.scrollTop() < $("#artists").offset().top*0.9){
			$('.hoveMenu a').removeClass('activeli');
			$('.lyrics').addClass('activeli');
		}else{
			$('.hoveMenu a').removeClass('activeli');
			$('.artists').addClass('activeli');
		};
	});
});