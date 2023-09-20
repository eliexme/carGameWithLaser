class Game {
    constructor(){
        this.introScreen = document.querySelector('#introScreen')
        this.gameDiv = document.querySelector('#gameDiv')
        this.gameScreen = document.querySelector('#gameScreen')
        this.gameOverScreen = document.querySelector('#gameOverScreen')
        this.width = 350
        this.height = 600
        this.gameScreen.style.position = 'relative'
        this.player = new Player(this.gameScreen, 60, 100, this.width/2-30, this.height - 150)
        this.obstacles = []
        this.laserArr = []
        this.lives = 3
        this.score = 0
    }

    start(){
        this.gameScreen.style.width = `${this.width}px`
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.backgroundColor = 'grey'
        this.introScreen.style.display = 'none'
        this.gameDiv.style.display = 'flex'
        this.gameLoop()
    }

    gameLoop(){
        this.update()
        const animatedId = requestAnimationFrame(()=>this.gameLoop())
        if(animatedId % 100 === 0){
            this.obstacles.push(new Obstacle(this.gameScreen))
            //console.log(this.obstacles)
        }
    }

    update(){
        this.player.drawMove()
        
        if(this.laserArr.length > 0){
            this.laserArr.forEach((eachLaser)=>{
                eachLaser.drawMove()
            })
        }

        this.obstacles.forEach((obstacle, i)=>{
            obstacle.drawMove()
            if(this.player.didCollide(obstacle)){
                this.lives --
                obstacle.element.remove()
                this.obstacles.splice(i, 1)
                console.log(this.lives)
                if(this.lives < 1){
                    alert('game over!!!')
                }
            }else if(obstacle.top > this.height){
                obstacle.element.remove()
                this.obstacles.splice(i, 1)
                this.score ++
                console.log('score', this.score)
            }
        })

        this.checkLaserObstacleCollison()
    }

    shoot(){
        this.laserArr.push(new Laser(this.gameScreen, this.player))
    }

    checkLaserObstacleCollison(){
        let collisionDetected = false

        this.laserArr.forEach((eachLaser, i)=>{
            if(collisionDetected) return

            this.obstacles.forEach((eachObstacle, j)=>{
                if(eachLaser.didCrash(eachObstacle)){
                    this.laserArr.splice(i, 1)
                    eachLaser.element.remove()
                    this.obstacles.splice(j, 1)
                    eachObstacle.element.remove()
                    this.score ++
                    console.log('score', this.score)
                    collisionDetected = true
                }
            })
        })
        return collisionDetected
    }

    
}