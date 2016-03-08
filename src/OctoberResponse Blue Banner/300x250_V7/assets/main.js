var screen1 = $('.screen1'),
screen2 = $('.screen2'),
screen3 = $('.screen3'),
screen4 = $('.screen4'),
screen5 = $('.screen5'),
loaderWrapper = $('.loader_wrapper'),
logo1 = $('.logo1'),
loader = $('#loader'),
clock1 = $('.clock1'),
clock2 = $('.clock2'),
clock3 = $('.clock3'),
clock4 = $('.clock4'),
clock5 = $('.clock5'),
clock6 = $('.clock6'),
screen2_txt1 = $('.screen2_txt1'),
screen2_txt2 = $('.screen2_txt2'),
pin1 = $('.pin1'),
pin2 = $('.pin2'),
pin3 = $('.pin3'),
pin4 = $('.pin4'),
pin5 = $('.pin5'),
pin6 = $('.pin6'),
pin7 = $('.pin7'),
pin8 = $('.pin8'),
pin9 = $('.pin9'),
pin10 = $('.pin10'),
screen3_txt1 = $('.screen3_txt1'),
screen3_txt2 = $('.screen3_txt2'),
screen4_txt1 = $('.screen4_txt1'),
screen4_txt2 = $('.screen4_txt2'),
box = $('.box'),
footer = $('.footer'),
logo = $('.logo'),
screen5_txt1 = $('.screen5_txt1'),
txtbtn = $('.txtbtn'),
framebtn = $('.framebtn'),
txtbtn2 = $('.txtbtn2'),
txtbtnhover = $('.txtbtnhover'),
scrollBlock = $('.scrollBlock'),
smallText = $('.smallText'),
screen4Bg = $('.screen4Bg'),
frame4_footer_text = $('.frame4_footer_text'),
frame1imgdrop1 = $('.frame1-img-drop1'),
frame1imgdrop2 = $('.frame1-img-drop2'),
frame1imgdrop3 = $('.frame1-img-drop3'),
frame1imgdrop4 = $('.frame1-img-drop4'),
framebtn = $('.framebtn'),
shine = $('.shine'),
consider = $('.consider'),
durationSlide = 4000;

function animations(){
	$.when(
		//loader.animate({opacity: 0, easing: 'easeInQuad'}, 1000).promise()
		loaderWrapper.animate({opacity: 1, easing: 'easeInQuad'}, 1000).promise()
	 ).done(function(){
		 	/*txtbtn_hover.hide(),*/
			screen1.animate({opacity: 0.95, easing: 'easeInQuad'}, 1000).delay(3000).promise()
			.done(function(){
				/*screen2.css({'display' : 'block'});*/
				screen2.animate({opacity: 1, easing: 'easeInQuad'}, 200).promise(),
				clock1.animate({opacity: 0.35, easing: 'easeOutQuad'}, 350).promise(),
				clock4.delay(300).animate({opacity: 0.4, easing: 'easeOutQuad'}, 350).promise(),
				/*screen2_txt1.delay(700).animate({opacity: 0.95, easing: 'easeInQuad'}, 2500).promise(),*/
				clock6.delay(700).animate({opacity: 0.9, easing: 'easeOutQuad'}, 350).promise(),
				screen1.delay(700).animate({top: 77, easing: 'easeInQuad'}, 500).promise(),
				screen2_txt2.delay(900).animate({opacity: 0.95, easing: 'easeInQuad'}, 2500).promise(),
				clock2.delay(900).animate({opacity: 0.9, easing: 'easeOutQuad'}, 350).promise(),
				clock3.delay(1200).animate({opacity: 0.65, easing: 'easeOutQuad'}, 350).promise(),
				clock5.delay(1300).animate({opacity: 0.65, easing: 'easeOutQuad'}, 350).promise()
				.done(function(){
					screen2.delay(5000).animate({opacity:0, easing: 'easeInQuad'}, 600).promise()
					/*screen2.css({'display' : 'none'})*/
				.done(function(){
					screen3.css({'display' : 'block'});
					screen3.animate({opacity: 1, easing: 'easeInQuad'}, 200).promise(),
					pin1.animate({top:'-45px',opacity:0.4,easing: 'easeOutBounce'},800).promise(),
					pin2.delay(300).animate({bottom:2,opacity:0.6, easing: 'easeOutBounce'}, 800).promise(),
					pin4.delay(600).animate({top:21,opacity:0.6, easing: 'easeOutBounce'}, 800).promise(),
					/*screen3_txt1.delay(700).animate({opacity: 0.95, easing: 'easeInQuad'}, 2500).promise(),*/
					pin3.delay(900).animate({top:5,opacity:0.4, easing: 'easeOutBounce'}, 800).promise(),
					pin5.delay(1200).animate({top:52,opacity:0.6, easing: 'easeOutBounce'}, 800).promise(),
					screen3_txt2.delay(1200).animate({opacity: 0.95, easing: 'easeInQuad'}, 2500).promise(),
					pin6.delay(1500).animate({bottom:23,opacity:0.6, easing: 'easeOutBounce'}, 800).promise(),
					pin7.delay(1800).animate({bottom:-34,opacity:0.4, easing: 'easeOutBounce'}, 800).promise(),
					pin8.delay(2100).animate({top:-19,opacity:0.8, easing: 'easeOutBounce'}, 800).promise(),
					pin9.delay(2400).animate({top:130,opacity:0.8, easing: 'easeOutBounce'}, 800).promise(),
					pin10.delay(2700).animate({bottom:13,opacity:0.8, easing: 'easeOutBounce'}, 800).promise()
					.done(function(){
					screen3.delay(6000).animate({opacity:0, easing: 'easeInQuad'}, 600).promise(),
					screen1.delay(6000).animate({opacity:0, easing: 'easeInQuad'}, 700).promise()
					.done(function(){
						screen4.css({'display' : 'block'})
						screen4.animate({opacity: 1, easing: 'easeInQuad'}, 200).promise(),
						screen4_txt1.delay(800).animate({opacity: 0.95, easing: 'easeInQuad'}, 2500).promise(),
						screen4_txt2.delay(800).animate({opacity: 0.95, easing: 'easeInQuad'}, 2500).promise(),
						scrollBlock.delay(800).css({'display' : 'block'});
						scrollBlock.delay(800).animate({opacity: 1, easing: 'easeInQuad'}, 500).promise(),
						footer.delay(800).css({'display' : 'block'});
						footer.delay(800).animate({opacity: 1, easing: 'easeInQuad'}, 500).promise(),
						ISIscroll();
						box.delay(1000).animate({right: 10,opacity: 1, easing: 'easeInQuad'}, 500).promise()
						.done(function(){
						screen4_txt1.delay(2100).animate({opacity: 0, easing: 'easeInQuad'}, 300).promise(),
						screen4_txt2.delay(2100).animate({opacity: 0, easing: 'easeInQuad'}, 300).promise(),
						screen5.delay(4000).css({'display' : 'block'});
						screen5.animate({opacity: 1, easing: 'easeInQuad'}, 200).promise(),
						box.delay(4500).animate({width:102,height:90,top:15,opacity: 1, easing: 'easeInQuad'}, 500).promise(),
						txtbtn.delay(4600).animate({right:4,opacity: 1, easing: 'easeInQuad'}, 400).promise(),
						logo.delay(4900).animate({opacity: 1, easing: 'easeInQuad'}, 600).promise(),	
						screen5_txt1.delay(5200).animate({opacity: 1, easing: 'easeInQuad',duration: 600}).promise()
						.done(function(){
						shine.css('display','block');
						shine.animate({opacity: 1,left: '211px', easing: 'easeOutExpo'}, 700).promise(),
						shine.animate({opacity: 0,left: '211px', easing: 'easeOutExpo'}, 50).promise(),
						txtbtn2.delay(750).animate({opacity: 1, easing: 'easeOutExpo'}, 50).promise()
						
							});
						});
						});	
					});
				});
			});
		});
	});	
}

/*function imgChange()
{
	$(".txtbtn").load(function(e){
    e.preventDefault();
    
    $(".txtbtn").addClass("example");
    
    setTimeout( function(){
        $(".txtbtn").removeClass("example");
    }, 3000);	// Timeout must be the same length as the CSS3 transition or longer (or you'll mess up the transition)
});

}*/

	function ISIscroll(){

        var content = $(".scrollInner"),autoScrollTimer=85000,autoScrollTimerAdjust,autoScroll;

        content.mCustomScrollbar({
            scrollButtons:{enable:true,scrollAmount: 1},
			mouseWheel:{ scrollAmount: 12 },
			// callbacks:{
            //     whileScrolling:function(){
            //         autoScrollTimerAdjust=autoScrollTimer*this.mcs.topPct/100;
            //         $('.scrollInner').on('mouseenter', function(){
            //             AutoScrollOff();
            //         });
            //         $('.scrollInner').on('mouseleave', function(){
            //             AutoScrollOff();
            //             AutoScrollOn("bottom"); 
            //         });                   
            //     }
            //}
		 });

        content.addClass("auto-scrolling-on auto-scrolling-to-bottom");
        // setTimeout(function(){AutoScrollOn("bottom"); }, 4000);       

        function AutoScrollOn(to,timer){
            if(!timer){timer=autoScrollTimer;}
            content.addClass("auto-scrolling-on").mCustomScrollbar("scrollTo",to,{scrollInertia:timer,scrollEasing:"linear"});
            autoScroll=setTimeout(function(){
                if(content.hasClass("auto-scrolling-to-top")){                    
                    AutoScrollOn("bottom",autoScrollTimer-autoScrollTimerAdjust);
                    content.removeClass("auto-scrolling-to-top").addClass("auto-scrolling-to-bottom");
                }else{
                    AutoScrollOff();
                    content.mCustomScrollbar("scrollTo",0);                   
                }
            },timer);
        }
        function AutoScrollOff(){
            clearTimeout(autoScroll);
            content.removeClass("auto-scrolling-on").mCustomScrollbar("stop");
        }
	}


$(".screen1").ready(function(){
	animations(); 
});