$(function() {
    $.ajax({
        url: ".netlify/functions/tweetcount",
        success: addCountToDom,
        dataType: "text",
        error: onError,
        cache: false
    });

    function addCountToDom(rawData) {
        var data = JSON.parse(rawData);
        if (data.statuses == null) {
            onError('Response data did not contain a "statuses" attribute: ' + rawData)
        }

        var count = data.statuses.length.toLocaleString();
        if (count && count > 0) {
            $("#count").html(count);
        } else {
            onError('Improper count variable "', count, '" for data:', rawData);
        }
    }

    function onError(msg) {
        //Hide the count element, replace with something else?
        $(".tweetcount").hide();
        console.log(msg);
    }
});
