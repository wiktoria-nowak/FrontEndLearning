const btn = document.querySelector('.btn')

const btnAnimation = e => {
    const top = e.clientY
    const left = e.clientX
    // pozycja, w którą klikamy

    const btnTopPosition = e.target.offsetTop
    const btnLeftPosition = e.target.offsetLeft
    // pozycja przycisku

    const insideBtnTop = top - btnTopPosition
    const insideBtnLeft = left - btnLeftPosition

    const circle = document.createElement('span')
    circle.classList.add('circle')

    circle.style.top = insideBtnTop + "px"
    circle.style.left = insideBtnLeft + "px"

    e.target.appendChild(circle)

    setTimeout(() => {
        circle.remove()
    }, 500)
}

btn.addEventListener("click", btnAnimation)