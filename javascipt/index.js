const sliders = document.querySelectorAll('.slider__thumb')

Array.from(sliders).forEach(slider=>{
    return slider.style.height = window.innerHeight +'px'
})

