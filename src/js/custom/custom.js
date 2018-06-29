$(function() {

	$(".slider__controls-button").click(function(e){
		e.preventDefault();
		var	$this = $(this),
			container = $this.closest('.slider'),
			list = container.find('.slider__list'),
			items = container.find('.slider__item'),
			activeSlide = items.filter('.active'),
			nextSlide = activeSlide.next(),
			prevSlide = activeSlide.prev(),
			firstSlide = items.first(),
			lastSlide = items.last(),
			sliderOffset = container.find('.slider__list_wrap').offset().left,
			reqPos = 0;

		if($(this).hasClass('slider__controls-button_next')){
			if(nextSlide.length){
				console.log(nextSlide.length);
				findReqPos(nextSlide);
				removeActiveClass(nextSlide);
			} else{
				findReqPos(firstSlide);
				removeActiveClass(firstSlide);
			}
			
			//$(list).css("left","-=300");
			
		}else{

			if(prevSlide.length){
				findReqPos(prevSlide);
				removeActiveClass(prevSlide);
			} else{
				findReqPos(lastSlide);
				removeActiveClass(lastSlide);
			}

			//$(list).css("left","+=300");
		
		} 
		list.css('left','-='+ reqPos + 'px');
		function removeActiveClass (reqSlide){
			reqSlide.addClass('active').siblings().removeClass('active');
		}
		function findReqPos(slide){
			reqPos = slide.offset().left - sliderOffset;
			console.log(reqPos);
		} 
	});



});
