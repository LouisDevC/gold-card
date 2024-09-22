const dinamicLink = document.querySelector('#dinamic-btn')
const typeLink = document.querySelector('#type')

dinamicLink.addEventListener('click', () =>{
    const link = typeLink.value
    if(link === '1 tela'){
        window.open('https://ev.braip.com/ref?pl=plago4jm&ck=che6p8xg&af=afie0y18ey')
    }
    if(link === '3 telas'){
        window.open('https://ev.braip.com/ref?pl=plazd6zm&ck=che6p8xg&af=afie0y18ey')
    }
    if(link === '5 telas'){
        window.open('https://ev.braip.com/ref?pl=plazvdzj&ck=che6p8xg&af=afie0y18ey')
    }
})