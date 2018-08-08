$(document).ready(function () {

    function gifDisplay() {
        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q="  + gif + "&api_key=FKIYGHCl5MrA23QTDRB52agaoGe2AI7c";


        https://api.giphy.com/v1/gifs/search?api_key=FKIYGHCl5MrA23QTDRB52agaoGe2AI7c&q=&limit=25&offset=0&rating=G&lang=en

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var $gifDiv = $("<div class ='gif'>")
                var rating = results[i].rating;

                var $p = $("<p>").text("Rating: " + rating.toUpperCase());

                $p.addClass("text-center");
                $p.addClass("gif-rating");

                var $gifImage = $("<img>");
                $gifImage.addClass("gif-image");
                $gifImage.attr("src", results[i].images.fixed_height_still.url);

                $gifDiv.append($p);
                $gifDiv.append($gifImage);

                $("#gifDisplay").prepend($gifDiv);

            };
        });
    };


    $('body').on('click', '.giphy', function () {

        var src = $(this).attr("src");
        if ($(this).hasClass('playing')) {
            $(this).attr('src', src.replace(/\.gif/i, "_s.gif"));
        } else {
            $(this).addClass('playing');
            $(this).attr('src', src.replace(/\_s.gif/i, ".gif"));
        }
    });

var topics = ["cats", "dogs", "fish"];

function gifButtons() {
    $("#DynamButtons").empty();

    for (var i = 0; i < topics.length; i++) {
        var b = $("<button>");
        b.addClass("gif-button");
        b.addClass("btn")
        b.attr("data-name", topics[i]);
        b.text(topics[i]);
        $("#DynamButtons").append(b);
    }
};

$("#form-submit").on("click", function (event) {

    event.preventDefault();
    var input = $("#form-input").val().trim();
    topics.push(input);
    gifButtons();
});

$(document).on("click", ".gif-button", gifDisplay);

gifButtons();
});
