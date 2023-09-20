class Player {
    constructor(gameScreen, width, height, left, top){
        this.gameScreen = gameScreen
        this.width = width
        this.height = height
        this.left = left
        this.top = top
        this.directionX = 0
        this.directionY = 0
        this.image = document.createElement('img')
        this.image.src = './images/car.png'
        this.image.style.width = `${this.width}px`
        this.image.style.height = `${this.height}px`
        this.image.style.left = `${this.left}px`
        this.image.style.top = `${this.top}px`
        this.image.style.position = 'relative'
        this.gameScreen.appendChild(this.image)
    }

    drawMove(){
        this.updatePosition()
        this.image.style.left = `${this.left}px`
        this.image.style.top = `${this.top}px`
    }

    updatePosition(){
        if(this.left < 50){
            this.left = 50
        }else if(this.left > this.gameScreen.clientWidth - this.width - 50){
            this.left = this.gameScreen.clientWidth - this.width - 50
        }else{
            this.left += this.directionX
        }

        if(this.top < 10){
            this.top = 10
        }else if(this.top > this.gameScreen.clientHeight - this.height -10){
            this.top = this.gameScreen.clientHeight - this.height -10
        }else{
            this.top += this.directionY
        }
    }

    didCollide(obstacle){
        const playerRect = this.image.getBoundingClientRect()
        const obstacleRect = obstacle.element.getBoundingClientRect()

        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
          ){
            return true
          }else return false
    }
}