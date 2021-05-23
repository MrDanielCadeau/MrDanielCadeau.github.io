const Height = 'data-height'
const Width = 'data-width'
const Position = 'data-position'

let windows = document.querySelectorAll('.window')

windows.forEach(element => {
    let windowHeight = element.getAttribute(Height)
    let windowWidth = element.getAttribute(Width)
    let windowPosition = element.getAttribute(Position)

    if(windowPosition !== '0/25'){
        let window = new Window(element, windowWidth, windowHeight, windowPosition)
        window.sizeWindow()
        window.disposeWindow()

        element.addEventListener('mousedown', function (ev){
            if(element.className !== 'window')
                return
            window.grabbingStart()
            document.documentElement.style.setProperty('--cursor', 'grabbing')

            let elX = ev.offsetX
            let elY = ev.offsetY

            window.zindexIncrement();

            document.addEventListener('mousemove', function (ev){
                window.changePosition(ev.pageX, elX, ev.pageY, elY)
            })
        })

        document.addEventListener('mouseup', function (){
            window.grabbingStop()
            document.documentElement.style.setProperty('--cursor', 'grab')
        })
    }
})



// MENU PART

let menu = document.getElementsByClassName('menu')[0];
let menuWindow = document.getElementsByClassName('menuWindow')[0]

let count = 0;

function clickMenu(){
	if( count === 0){
		menu.className = 'menu active'
        menuWindow.className = 'window menuWindow show'
		count = 1;
	}else if( count === 1){
		menu.className = 'menu close'
        menuWindow.className = 'window menuWindow hide'
		count = 0
	}
	
	
}