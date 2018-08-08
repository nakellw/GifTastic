$(document).ready(function () {

    function gifDisplay() {
        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q="  + gif + "&api_key=FKIYGHCl5MrA23QTDRB52agaoGe2AI7c";

 https://api.giphy.com/v1/gifs/search?api_key=FKIYGHCl5MrA23QTDRB52agaoGe2AI7c&q=&limit=25&offset=0&rating=G&lang=en

                // Pulling the images from Giphy
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;
                    // Rating of theimages
            for (var i = 0; i < results.length; i++) {
                var $gDiv = $("<div class ='gif'>")
                var rate = results[i].rating; 
                var $p = $("<p>").text("Rating: " + rate.toUpperCase());
                $p.addClass("textRate");
                $p.addClass("gif-rating");

                var $gifImage = $("<img>");
                $gifImage.addClass("gif-image");
                $gifImage.attr("src", results[i].images.fixed_height_still.url);
                    // Posting to the Div
                $gDiv.append($p);
                $gDiv.append($gifImage);

                $("#gifDisplay").prepend($gDiv);

            };
        });
    };



    // Display Buttons
var terms = ["basketball", "football", "soccer"];

function gifButtons() {
    $("#Buttons").empty();

    for (var i = 0; i < terms.length; i++) {
        var b = $("<button>");
        b.addClass("gif-button");
        b.addClass("btn")
        b.attr("data-name", terms[i]);
        b.text(terms[i]);
        $("#Buttons").append(b);
    }
};

        // Add search term to buttons
$("#form-submit").on("click", function (event) {

    event.preventDefault();
    var input = $("#form-input").val().trim();
    terms.push(input);
    gifButtons();
});

 // Play/Pause Feature
 $('body').on('click', '.gif-image', function () {

    var src = $(this).attr("src");
    if ($(this).hasClass('playing')) {
        $(this).attr('src', src.replace(/\.gif/i, "_s.gif"));
    } else {
        $(this).addClass('playing');
        $(this).attr('src', src.replace(/\_s.gif/i, ".gif"));
    }
});

$(document).on("click", ".gif-button", gifDisplay);

gifButtons();
});
