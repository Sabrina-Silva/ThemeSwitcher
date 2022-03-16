

function buttonSwitch(){
    const element = document.querySelector('body')
    element.classList.toggle('theme')

    const elementText = document.querySelector('div')

    elementText.getAttribute("class", "text")
    elementText.classList.toggle('text')


}

