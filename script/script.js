$(function () {
    $('#button-wrapper button').click(function () {
        $('#button-wrapper button').removeClass('orange-btn')
        let value = $(this).attr('value');
        $('#product').attr('src' , 'images/' + value + '.png');
        $(this).addClass('orange-btn');
        console.log(value);
    })
})