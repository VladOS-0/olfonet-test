/*
 *
 * АНИМАЦИЯ ПРИ СКРОЛЛИНГЕ
 *
*/

const animatedItems = document.querySelectorAll('._animated')

if (animatedItems.length > 0) {
    window.addEventListener('scroll', animateOnScroll)
    function animateOnScroll () {
        for (let i = 0; i < animatedItems.length; i++) {
            const item = animatedItems[i]
            const itemHeight = item.offsetHeight;
            const itemOffset = calculateOffset(item).top
            // Эмпирический коэффициент
            const animStart = 4
        
            let itemAnimPoint = window.innerHeight - itemHeight / animStart
            if (itemHeight > window.innerHeight) {
                itemAnimPoint = window.innerHeight - window.innerHeight / animStart
            }
            if((scrollY > itemOffset - itemAnimPoint - 400) && scrollY < (itemOffset + itemHeight)) {
                item.classList.add('_active')
            }
        }
    }

    function calculateOffset(element) {
        const rect = element.getBoundingClientRect()
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animateOnScroll()
    }, 300)
}

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

