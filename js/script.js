$(document).ready(function(){

    //#region requires

    //#endregion requires

    //#region DOM

    navbarHeader = $("#navbarHeader");
    headerNavbarToggler = $("#headerNavbarToggler");

    
    //#endregion DOM  
    
    //#region variables
    
    //#endregion variables
    
    //#region functions
    
    //#endregion functions
    
    //#region MAIN
    
    
    
    headerNavbarToggler.click(function(){
        if(navbarHeader.hasClass("show")){
            navbarHeader.toggleClass("show");
        }
        else{
            navbarHeader.toggleClass("collapse");
            navbarHeader.toggleClass("collapsing");

            navbarHeader.animate({height: "245px"},400,function(){
                navbarHeader.toggleClass("collapsing");
                navbarHeader.toggleClass("collapse");
                navbarHeader.toggleClass("show");
                navbarHeader.css("height", "");
            });
        }     
    })

    
    
    //#endregion MAIN

})
