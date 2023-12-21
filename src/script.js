$(document).ready(function(){
    let selectedOption = 0;

    for(let i=0; i<5; i++){
        $(`#option-${i+1}`).on("click", function(){
            selectedOption = i+1;
            $(".rating-options a").removeClass("rating-option-active");
            $(`#option-${selectedOption}`).addClass("rating-option-active");
        });
    }

    $("#submit-button").on("click", function(){
        $(".rating-state").toggle();
        $(".thanks-container").toggle();
        $(".rating-result p").text(`You selected ${selectedOption} out of 5`);
    });
});