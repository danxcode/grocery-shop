$(function () {
    $('#menu-btn').click(function () {
        $('#primary-menu').toggleClass('open');
    });

    $('#primary-menu a').click(function () {
        $('#primary-menu').removeClass('open');
    });

    $('#button-wrapper button').click(function () {
        $('#button-wrapper button').removeClass('orange-btn');
        var imageName = $(this).attr('value');
        $('#product').attr('src', 'images/' + imageName + '.png');
        $(this).addClass('orange-btn');
    });
});
