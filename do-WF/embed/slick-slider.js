//<script>
// #slick slider

var Webflow = Webflow || [];
Webflow.push(function () {
  
  var slider = "#slider-1"

  $(".slider-container",slider).slick({

    infinite: false,
    slidesToShow: 3.5,
    dots: false,
    arrows: true,
    nextArrow: ".next",
    prevArrow: ".prev",
    centerMode: false,

    responsive: 
    [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5
        }
      }
    ]
  });


  
  $('[aria-hidden]',slider).click(function(event) {
  
  	
  	if($(this).attr('aria-hidden') == 'true'){
   		event.preventDefault();
      console.log(parseInt($(this).attr('data-slick-index')));
      if(parseInt($(this).attr('data-slick-index')) >= 1){
      	$('.slider-container', slider).slick('slickNext');
      }else{
      	$('.slider-container', slider).slick('slickPrev');
      }
      //$('#slider-container').slick('slickGoTo', parseInt($(this).attr('data-slick-index')));
    }
  });
  
});

//</script>