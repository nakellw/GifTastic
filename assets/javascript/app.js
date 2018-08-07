$(document).ready(function () {
    function gifDisplay() {
        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=FKIYGHCl5MrA23QTDRB52agaoGe2AI7c";


        $ajax({
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




});
