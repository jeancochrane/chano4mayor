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
            var id = $selected.attr("id");
            $selected.slideToggle().removeClass("selected");
            return id;
        }
    }

    function refOnClick(e) {
        var id = $(this).data("id");
        if (closeRef() !== id) {
            $("#" + id).slideToggle().addClass("selected");
            e.stopPropagation();
        }
    }

});
