/*
- affichage arriere plan du terrain
- affichage des trou de la taupe
- affiché la taupe(dans un premier temps)
- faire un clique sur une div

*/
//$(".taupe").show();
$(".taupe").ready(function () {
    
    let point=0;
    
    //$('#count').text(point);
    //$(".top").find(".taupe").eq( tabTrou.length );
    $( ".taupe" ).click(function(e) {
        $( this ).toggleClass( ".taup" );
        point++;
        e.stopPropagation();
        //$( this ).toggleClass( ".taupe" );
        //
        
        //}
        //e.stopPropagation();
        //console.log(point);
        $('#count').text(point);
        //let tabTrou = [];
        //let count = $("#count");
    })
      });
    //$(".taupe").show();
    //e = jQuery.Event( "click" ).$("body").find("div").eq( tabTrou.length ).addClass(".taupe"); 
    //point++;
    //$(tabTrou.length)=1;
    //setInterval(function (e) {
        //$(".taupe").click(function(e){
            
            //let clickDiv;
            //for ( let i = 0; i < tabTrou.length; i++ ) {
            
            
            //let clickDiv = $(".taupe").length;
            //while(click===true){
            //$(clickDiv).$(".taupe").length;
            //i.innerHTML=1;
            //point=i;
            //point++;
            
           

           // console.log(point);
           // console.log(point);
           // $(".taupe").show();
            
            //count=point;
           // $(count).text(point);

         // });  

    
       /* let $tabDiv = $(".top");

        $indexAleatoire = $tabDiv[Math.floor((Math.random() * $tabDiv.length))];*/
        // je compare si mon index de mon tableau tabdiv soit different ou non par rapport à ma variable aleatoire 
        // if (!$indexAleatoire.children(".taupe").length) {

       /* $($indexAleatoire).addClass("taupe");

        $(".taupe").click(function () {
            point++;
            $($indexAleatoire).removeClass("taupe");*/

            // Waits until the page is ready
            //console.log(point);
            /*$(count).text(point);*/
        //})
        /*setTimeout(function () {
            $($indexAleatoire).removeClass("taupe");
        }, 1000);*/

        //$($elDiv).show(200);
        // }


    //}, 1100)


//});
