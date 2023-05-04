//let x = Math.random() * 100;
//document.getElementById("demo").innerHTML = x;
//$("span").hide(5);
//let x = $("#img").math.random()*10;

/*let point=0;
$(document).ready(function(){
    $("p").click(function(){
      $("#im").hide();
    });
    $("#show").click(function(){
      $("span").show();
    });
  });*/
//$(p).click(function(){ // Waits until the page is ready
// Write your JS code here
//let $x = [];

//for( let i = 0; i < 9; i++ ) {
  $(document).ready(function () {
    let $indexAleatoire;
    let point = 0;
    let score = $("#count");
    //$(".dott").show();
    $(".taupe").hide();
   
    //$( this ).toggleClass( ".taup" );
   // point++;
    //e.stopPropagation();
    setInterval(function () {

        let $tabDiv = $(".taupe");
       
        //point++;
        $($indexAleatoire).hide();
        $indexAleatoire = $tabDiv[Math.floor((Math.random() * $tabDiv.length))];
      
       // e.stopPropagation();
        //$(".taupe").show();
        //$($indexAleatoire).hide(200);
        // je compare si mon index de mon tableau tabdiv soit different ou non par rapport à ma variable aleatoire 
        // if (!$indexAleatoire.children(".taupe").length) {
     
       // $($indexAleatoire).addClass(".taupe");
        
       $($indexAleatoire).show();
       //$($indexAleatoire).hide();
          $( ".taupe" ).click(function() {
            if (!$indexAleatoire.children(".taupe").length) {
              
     
          //$( "div" ).find(".dott").eq(".taupe").toggleClass( ".taupe" );
            point++;
            //$( this ).toggleClass( ".taupe" );
            //
            //}
            //e.stopPropagation();
            //console.log(point);
            $(score).text(point);
       

            
            //$($indexAleatoire).removeClass("taupe");
            }
            $($indexAleatoire).remove();
            //$($indexAleatoire).show(200);
            // Waits until the page is ready
            //console.log(point);
            //$(count).text(point);
        })
        setTimeout(function () {
            //$($indexAleatoire).removeClass("taupe");
        }, 1000);

        // }

        //$($indexAleatoire).show();
        //$($indexAleatoire).hide();
    }, 1100)

    $($indexAleatoire).hide();
})
    // Write your JS code here
    //$(".dot").css('backgroundImage', 'url("../images/11.png")');
    //.innerHTML= x;
    //$(this).hide(5);
    //i++;
    //point=i;
    //$(".dot").show(10);
    //console.
    //console.log("Score: " + i);
    //console.log("Score: " + i);
    /*
        $( ".dott" ).click(function() {
            $( "span:last-child" ).hide( "fast", function() {
              // Use arguments.callee so we don't need a named function
              $( this ).hide( "slow", arguments.callee );
            });
          });*/
    //});