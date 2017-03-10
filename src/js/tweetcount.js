$(function() {
    $.ajax({
        url: "tweetcount", 
        success: addCountToDom,
        dataType: "text",
        error: onError,
        cache: false
    });
    
    function addCountToDom(data) {
        var count = Number(data.split("|")[0]).toLocaleString();
        if (count) {
            $("#count").html(count);
        } else {
            onError();
        }
    }

    function onError() {
        //Hide the count element, replace with something else?
        $(".tweetcount").hide();
    }
});