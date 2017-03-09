$(function() {
    $.ajax({
        url: "tweetcount", 
        success: addCountToDom,
        dataType: "text",
        error: onError,
        cache: false
    });
    
    function addCountToDom(data) {
        var count = data.split("|")[0];
        $("#count").html(count);
    }

    function onError() {
        //Hide the count element, replace with something else?
        $(".tweetcount").hide();
    }
});