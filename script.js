// ALL JS WRITTEN BY KADEN ROSE

"use script";

$("#imgBoxCampaign").on("click", function(){
    let $img = $("#imgBoxCampaign img");
    if ($img.attr("src") === "assets/camp_desktop.jpg") {
            $img.attr("src", "assets/camp_mobile.jpg");
            $img.attr("alt", "Mockup of website on Mobile Device.");
        } else {
            $img.attr("src", "assets/camp_desktop.jpg");
            $img.attr("alt", "Mockup of website on Desktop Computer.");
        }
});

$("#imgBoxRodney").on("click", function(){
    let $img = $("#imgBoxRodney img");
    if ($img.attr("src") === "assets/Rodney_desktop.jpg") {
            $img.attr("src", "assets/Rodney_mobile.jpg");
            $img.attr("alt", "Mockup of website on Mobile Device.")
        } else {
            $img.attr("src", "assets/Rodney_desktop.jpg");
            $img.attr("alt", "Mockup of website on desktop screen.")
        }
    
});


