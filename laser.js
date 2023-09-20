class Laser{
    constructor(gameScreen, player){
        this.gameScreen = gameScreen
        this.player = player
        this.laserHeight = 25
        this.laserWidth = 7
        this.left = (this.player.left + this.player.width/2 - this.laserWidth/2)
        this.top = (this.player.top - this.laserHeight)
        this.laserX = 0
        this.element = document.createElement('div')
        this.element.style.backgroundColor = 'purple'
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
        this.element.style.width = `${this.laserWidth}px`
        this.element.style.height = `${this.laserHeight}px`
        this.element.style.position = 'absolute'
        this.gameScreen.appendChild(this.element)
    }

    drawMove(){
        this.update()
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }

    update(){
        this.laserX -= 0.1
        this.top += this.laserX
    }

    didCrash(obstacle){
        const laserRect = this.element.getBoundingClientRect()
        const obstacleRect = obstacle.element.getBoundingClientRect()

        if (
            laserRect.left < obstacleRect.right &&
            laserRect.right > obstacleRect.left &&
            laserRect.top < obstacleRect.bottom &&
            laserRect.bottom > obstacleRect.top
          ){
            return true
          }else return false
    }
}