const Height = 'data-height'
const Width = 'data-width'
const Position = 'data-position'

let windows = document.querySelectorAll('.window')

windows.forEach(element => {
    let windowHeight = element.getAttribute(Height)
    let windowWidth = element.getAttribute(Width)
    let windowPosition = element.getAttribute(Position)

    let window = new Window(element, windowWidth, windowHeight, windowPosition)
    window.sizeWindow()
    window.disposeWindow()

    element.addEventListener('mousedown', function (ev){
        window.grabbingStart()
        document.documentElement.style.setProperty('--cursor', 'grabbing')

        let elX = ev.offsetX
        let elY = ev.offsetY

        document.addEventListener('mousemove', function (ev){
            window.changePosition(ev.pageX, elX, ev.pageY, elY)
        })
    })

    document.addEventListener('mouseup', function (){
        window.grabbingStop()
        document.documentElement.style.setProperty('--cursor', 'grab')
    })
})
