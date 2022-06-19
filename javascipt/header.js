const header = document.querySelector('.header__right')
const buttonClose = document.querySelector('.header__control')

buttonClose.onclick=function(){
    if(header.classList.contains('active')){
        header.classList.remove('active')
        buttonClose.style.top = '20px'

    }else{
        header.classList.add('active')
        buttonClose.style.top = '5px'
    }
}