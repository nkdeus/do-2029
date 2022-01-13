//<script>
// #automatique change of color var for the navigation
// #automatique set main color by custom attributes on WF


var Webflow = Webflow || [];
Webflow.push(function () {

var nav = $('#nav');
var body = $('body');
var setNavColor = function(color){
	 console.log("color ",color);
   if(color ==  "#000" || color ==  "#000000"){
   		body.removeClass('dark');
   }else{
   		body.addClass('dark');
   }
	 nav.css("--main-color",color);
}
 
  $("[data-set-main]").each(function( index ) {


      var color = $( this ).attr('data-set-main');
      var colorContraste = $( this ).attr('data-set-contraste');
      
      $( this ).css("--main-color",color);
      $( this ).css("--contraste-color",colorContraste);
      


  });
  
  $("[data-section]").each(function( index ) {
  
  		  ScrollTrigger.create({
            trigger: $( this ),
            start: "top top+=100px",
            end: "bottom top+=100px",      
       			onEnter: self => {          
            	setNavColor($(self.trigger).attr("data-section"));          
            },
            onEnterBack: self => {         
               setNavColor($(self.trigger).attr("data-section"));         
            },
        }); 
  
  });
  
  


});


//</script>