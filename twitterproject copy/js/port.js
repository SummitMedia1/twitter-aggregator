 $(document).ready(function(){
$('.slider').slider();

$('.parallax').parallax();

 $('#content').pushpin({
      top: 0,
      bottom: 1000,
      offset: 0
    });
 $(".fadein").hide();

var options = [
      {selector: '.showNav', offset: 0, callback: function(el) {
      	 $(".fadein").fadeIn(500);
      
      }}, {selector: '.advancedrow', offset: 200, callback: function(el) {
         Materialize.showStaggeredList($(el));
      
      }}  
    ];
    Materialize.scrollFire(options);


$("select").material_select();
          $(".startDate, .endDate").pickadate({
              selectMonths: true, // Creates a dropdown to control month
              selectYears: 15, // Creates a dropdown of 15 years to control year,
              today: "Today",
              clear: "Clear",
              close: "Ok",
              closeOnSelect: false // Close upon selecting a date,
           });


          
        });


  




