$(window).ready(function () {
    $('.boton1').wrapInner('<div class=botontext1></div>')

    $('.botontext1').clone().appendTo($('.boton1'))

    $('.boton1').append(
        '<span class="twist1"></span><span class="twist1"></span><span class="twist1"></span><span class="twist1"></span>'
    )

    $('.twist1').css('width', '25%').css('width', '+=3px')
})
$(window).ready(function () {
    $('.boton2').wrapInner('<div class=botontext2></div>')

    $('.botontext2').clone().appendTo($('.boton2'))

    $('.boton2').append(
        '<span class="twist2"></span><span class="twist2"></span><span class="twist2"></span><span class="twist2"></span>'
    )

    $('.twist2').css('width', '25%').css('width', '+=3px')
})
$(window).ready(function () {
    $('.boton3').wrapInner('<div class=botontext3></div>')

    $('.botontext3').clone().appendTo($('.boton3'))

    $('.boton3').append(
        '<span class="twist3"></span><span class="twist3"></span><span class="twist3"></span><span class="twist3"></span>'
    )

    $('.twist3').css('width', '25%').css('width', '+=3px')
})

let counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 7) {
        counter = 1;
    }
}, 4000);


