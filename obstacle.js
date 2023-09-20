class Obstacle {
    constructor(gameScreen){
        this.gameScreen = gameScreen
        this.width = 60
        this.height = 100
        this.left = Math.random() * (240 - 50) + 50
        this.top = -100
        this.element = document.createElement('img')
        this.element.src = './images/redCar.png'
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.position = 'absolute'
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
        this.gameScreen.appendChild(this.element)
    }

    drawMove(){
        this.update()
        this.element.style.top = `${this.top}px`
        this.element.style.left = `${this.left}px`
    }

    update(){
        this.top += 3
    }
}