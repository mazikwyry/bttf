	$(".top-buttons").hover(function(){
		$(this).children("img").stop(true,true).transition({
		  rotate: "20deg"
		});
		$(this).children(".button-desc").stop(true,true).transition({
		  x: "3px"
		});
	},function(){
		$(this).children("img").stop(true,true).transition({
		  rotate: "0deg"
		});
		$(this).children(".button-desc").stop(true,true).transition({
		  x: "0px"
		});
	});

	$(".group a").hover(function(){
		$(this).stop(true,true).transition({
		  x: "3px"
		},200,"ease");
 	},function(){
		$(this).stop(true,true).transition({
		  x: "0px"
		},200,"ease");
	});

	$(".green_button").hover(function(){
		$(this).stop(true,true).transition({
		  scale: "1.08"
		},400,"easeInOutBack");
 	},function(){
		$(this).stop(true,true).transition({
		  scale: "1.0"
		},100,"easeInOutBack");
	});

	$(".social_icon").hover(function(){
		$(this).children("div").stop(true,true).animate({
		  height: "32px"
		},100);
 	},function(){
		$(this).children("div").stop(true,true).animate({
		  height: "2px"
		},200);
	});

	$(".login-trigger").hover(function(){
		$(".login_box").stop(true,true).fadeIn();
 	},function(){
		$(".login_box").stop(true,true).fadeOut();
	});




	/*POPULAR PITCHES
	* author: Mazik
	*/

	//Function that show/hide navigation
	function buttons(pageno){
	if(pageno==1)
		$("#prev").animate({
		  opacity:"0.3"
		},300);
	if(pageno>1)
		$("#prev").animate({
		  opacity:"1.0"
		},300);
	if(pageno==pages)
		$("#next").animate({
		  opacity:"0.3"
		},300);
	if(pageno<pages)
		$("#next").animate({
		  opacity:"1.0"
		},300);
	if(pages<1){
		$("#prev").html("");
		$("#next").html("");
	}
	}

	//Initials
	var pages = 3;
	var page = 1;

	buttons(page);

	//Events
	$("#prev").click(function(){
		if(page!=1 && pages>0){
			$("#"+page--).slideUp();
			$("#"+page).slideDown();
			buttons(page);
		}
	});

	$("#next").click(function(){
		if(page!=pages && pages>0){
			$("#"+page++).slideUp();
			$("#"+page).slideDown();
			buttons(page);
		}
	});


	var rotator_counter = 1;
	var rotator_max = 3;

	$(document).ready(function(){
		$("#rot1 .rotator_content").animate({
		  opacity:"1.0",top:'0px'
		},500);
		var oldScroll = $(window).scrollTop();
		setInterval(
			function(){
				if(rotator_counter==rotator_max){
					$("#rot"+rotator_counter).animate({
					  opacity:"0"
					},1000);
					$("#rot"+rotator_counter+" .rotator_content").animate({
					  opacity:"0",top:'-10px'
					},300);
					$("#rot1").animate({
					  opacity:"1.0"
					},500);
					$("#rot1 .rotator_content").animate({
					  opacity:"1.0",top:'0px'
					},500);
					rotator_counter = 1;
				}else{
					$("#rot"+rotator_counter).animate({
					  opacity:"0"
					},1000);
					$("#rot"+rotator_counter+" .rotator_content").animate({
					  opacity:"0",top:'-10px'
					},300);

					$("#rot"+(rotator_counter+1)).animate({
					  opacity:"1.0"
					},500);
					$("#rot"+(rotator_counter+1)+" .rotator_content").animate({
					  opacity:"1.0",top:'0px'
					},500);
					rotator_counter++;
				}
			},8000
		);

		$(".epidemia_header").fitText(0.55, {maxFontSize: '77px' });
		$(".sub_header").fitText(1.7, {maxFontSize: '22px' });
		$(".stats-numbers").fitText(1.0, {maxFontSize: '32px' });

		$(window).bind('scroll',function(e){ 
		    var scrolled = $(window).scrollTop();
		    // if(scrolled>85){
		    // 	if(oldScroll>scrolled){
		    // 		$("header").slideDown(200);
		    // 	}else{
		    // 		$("header").slideUp(200);
		    // 	}
		    // }else{
		    // 	$("header").show();
		    // }
		    oldScroll = scrolled;
		});
	});