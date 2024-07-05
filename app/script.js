

$(window).ready(function(){
    $(".boton1").wrapInner('<div class=botontext1></div>');
        
        $(".botontext1").clone().appendTo( $(".boton1") );
        
        $(".boton1").append('<span class="twist1"></span><span class="twist1"></span><span class="twist1"></span><span class="twist1"></span>');
        
        $(".twist1").css("width", "25%").css("width", "+=3px");
    });
$(window).ready(function(){
        $(".boton2").wrapInner('<div class=botontext2></div>');
            
            $(".botontext2").clone().appendTo( $(".boton2") );
            
            $(".boton2").append('<span class="twist2"></span><span class="twist2"></span><span class="twist2"></span><span class="twist2"></span>');
            
            $(".twist2").css("width", "25%").css("width", "+=3px");
        });
 $(window).ready(function(){
            $(".boton3").wrapInner('<div class=botontext3></div>');
                
                $(".botontext3").clone().appendTo( $(".boton3") );
                
                $(".boton3").append('<span class="twist3"></span><span class="twist3"></span><span class="twist3"></span><span class="twist3"></span>');
                
                $(".twist3").css("width", "25%").css("width", "+=3px");
            });

const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}

