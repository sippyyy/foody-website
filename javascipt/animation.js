const service = document.querySelector('.services')
const restaurant = document.querySelector('.restaurant')
const special = document.querySelector('.special')
const menu = document.querySelector('.menu')
const blog =document.querySelector('.blog')

console.log(blog)

window.addEventListener("scroll",function(){
    console.log(this.window.scrollY)
    if(this.window.scrollY >= 400){
    service.classList.add('open')
    }

    if(this.window.scrollY >= 800 && restaurant.classList.contains('home')){
        restaurant.classList.add('open')
    }

    if(this.window.scrollY >= 1800 && special.classList.contains('home')){
        special.classList.add('open')
    }

    if(this.window.scrollY >= 2700 && menu.classList.contains('home')){
        menu.classList.add('open')
    }

    if(this.window.scrollY > 4700 && blog.classList.contains('home')){
        blog.classList.add('open')
    }

})
