// ALL JS WRITTEN BY KADEN ROSE

"use script";

$("#imgBoxCampaign").on("click", function(){
    let $img = $("#imgBoxCampaign img");
    if ($img.attr("src") === "assets/camp_desktop.jpg") {
            $img.attr("src", "assets/camp_mobile.jpg");
            $img.attr("alt", "Screenshot of Project One showing homepage layout and navigation on Mobile Device");
        } else {
            $img.attr("src", "assets/camp_desktop.jpg");
            $img.attr("alt", "Screenshot of Project One showing homepage layout and navigation on Desktop Computer");
        }
});

$("#imgBoxRodney").on("click", function(){
    let $img = $("#imgBoxRodney img");
    if ($img.attr("src") === "assets/Rodney_desktop.jpg") {
            $img.attr("src", "assets/Rodney_mobile.jpg");
            $img.attr("alt", "Screenshot of Project One showing homepage layout and navigation on Mobile Device")
        } else {
            $img.attr("src", "assets/Rodney_desktop.jpg");
            $img.attr("alt", "Screenshot of Project One showing homepage layout and navigation on Desktop Computer")
        }
    
});

$(window).on("load", function() {
    // Wait for all images to load
    $("#loadingOverlay").fadeOut(3000);
});


