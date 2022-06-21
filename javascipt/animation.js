const service = document.querySelector('.services')
const restaurant = document.querySelector('.restaurant')
const special = document.querySelector('.special')
const menu = document.querySelector('.menu')
const blog =document.querySelector('.blog')
const chef = document.querySelector('.chef')


window.addEventListener("scroll",function(){
    console.log(this.window.scrollY)
    if(this.window.scrollY >= 400 && service){
    service.classList.add('open')
    }

    if(this.window.scrollY >=400 && menu && menu.classList.contains('recipes')){
        menu.classList.add('open')
    }

    if(this.window.scrollY >= 400 && restaurant && restaurant.classList.contains('about')){
        restaurant.classList.add('open')
    }

    if(this.window.scrollY > 400 && blog && blog.classList.contains('news')){
        blog.classList.add('open')
    }

    if(this.window.scrollY >= 950 && menu && menu.classList.contains('service')){
        menu.classList.add('open')
    }

    if(this.window.scrollY >= 800 && restaurant && restaurant.classList.contains('home')){
        restaurant.classList.add('open')
    }

    if(this.window.scrollY >=1600 && chef){
        chef.classList.add('open')
    }

    if(this.window.scrollY >= 1800 && special && special.classList.contains('home')){
        special.classList.add('open')
    }

    if(this.window.scrollY >= 2700 && menu.classList.contains('home')){
        menu.classList.add('open')
    }

    if(this.window.scrollY > 4700 && blog.classList.contains('home')){
        blog.classList.add('open')
    }

})
