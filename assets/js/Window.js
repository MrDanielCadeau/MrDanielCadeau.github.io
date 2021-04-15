let zindex = 0;

class Window{
    constructor(element, width, height, position){
        this.element = element;

        this.width = parseInt(width)
        this.height = parseInt(height)
        position = position.split('/')

        this.positionX = parseInt(position[0])
        if (this.positionX + this.width > window.innerWidth)
            this.positionX = window.innerWidth - 50 - this.width

        this.positionY = parseInt(position[1])
        if (this.positionY + this.height > window.innerHeight)
            this.positionY = window.innerHeight - 50 - this.height

        this.isGrabbed = false
    }

    sizeWindow(){
        this.element.style.minWidth = this.width + 'px'
        this.element.style.minHeight = this.height + 'px'
    }

    disposeWindow(){
        this.element.style.transform = `translate3d(${this.positionX}px, ${this.positionY}px, 0)`

        zindex++;
        this.element.style.zIndex = zindex;
    }

    grabbingStart(){
        this.isGrabbed = true
    }
    grabbingStop(){
        this.isGrabbed = false
    }

    zindexIncrement(){
        zindex++;
        this.element.style.zIndex = zindex;
    }

    changePosition(x, elX, y, elY){
        if(this.isGrabbed){
            this.element.style.transform = `translate3d(${x - elX}px, ${y - elY}px, 0)`
        } 
    }
}