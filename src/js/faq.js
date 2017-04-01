$(function() {
    $('.toggle-issue').click(function (e) {
        var destinationId = $(e.target).attr('data-issue');

        var targetEl = $(e.target)

        if (targetEl.hasClass('issue_closed')) {
          $(e.target).removeClass('issue_closed');
          $(e.target).addClass('issue_open');
          $('#' + destinationId).addClass('toggled_open');
        } else {
          $(e.target).removeClass('issue_open');
          $(e.target).addClass('issue_closed');
          $('#' + destinationId).removeClass('toggled_open');
        }
    });
});
