$(function() {
    $(".ref-link").on("mousedown", refOnClick);
    $("main").on("mousedown", closeRef);
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            closeRef();
        }
    });

    function closeRef() {
        var $selected = $(".selected");
        if ($selected.length) {
            $selected.slideToggle().removeClass("selected");
        }
    }

    function refOnClick(e) {
        var id = "#" + $(this).data("id");
        closeRef();
        $(id).slideToggle().addClass("selected");
        e.stopPropagation();
    }

});
