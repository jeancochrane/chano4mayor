$(function() {
    $.ajax({
        url: "tweetcount", 
        success: addCountToDom,
        dataType: "text",
        error: onError,
        cache: false
    });
    
    function addCountToDom(data) {
        var parsed = data.split("|");
        var count = parsed[0];
        var date = parsed[1];
        
    }

    function onError() {
        //Hide the count element, replace with something else?
    }
});