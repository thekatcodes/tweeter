$(document).ready(function() {

    let count = 140;
    $("textarea").on("keydown", function(e) {
        console.log($(this).val().length)
        console.log(e)
        // count--;
        // $(".counter").text(count);
        // if (count < 0) {
        //     //add error class to make number color red
        // }
        
        count -= $(this).val().length;
        $(this).next('.tweet-btn-counter').children(".counter").text(count);
        
        if (e.key === 'Backspace' && count < 140) {
            count++;
            $(this).next('.tweet-btn-counter').children(".counter").text(count);
        }

        if (count < 0) {
            $(this).next('.tweet-btn-counter').children(".counter").addClass("error");
        }

        if (count >= 0) {
            $(this).next('.tweet-btn-counter').children(".counter").removeClass("error");
        }

    })
   

});