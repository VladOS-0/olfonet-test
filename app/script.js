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
            // Да, 400 - это костыль, увы
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

/*
 *
 * АВТОМАТИЧЕСКОЕ ПРОЛИСТЫВАНИЕ СЛАЙДЕРА
 *
*/
let counter = 1;
setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 7) {
        counter = 1;
    }
}, 6000);

