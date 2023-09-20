window.addEventListener('load', ()=>{
    const startButton = document.querySelector('#start')
    const restartButton = document.querySelector('#restart')

    const game = new Game()

    startButton.addEventListener('click', ()=>{
        game.start()
    })

    document.addEventListener('keydown', (e)=>{
        if(e.key === 'ArrowRight'){
            game.player.directionX =+ 5
        }else if(e.key === 'ArrowLeft'){
            game.player.directionX =- 5
        }
        if(e.key === 'ArrowUp'){
            game.player.directionY =- 5
        }else if(e.key === 'ArrowDown'){
            game.player.directionY =+ 5
        }
    }) 

    document.addEventListener('keyup', (e)=>{
        if(e.key === 'ArrowRight'){
            game.player.directionX =+ 0
        }else if(e.key === 'ArrowLeft'){
            game.player.directionX =- 0
        }
        if(e.key === 'ArrowUp'){
            game.player.directionY =- 0
        }else if(e.key === 'ArrowDown'){
            game.player.directionY =+ 0
        }
    }) 

    document.addEventListener('keypress', (e)=>{
        if(e.code === 'Space'){
            game.shoot()
        }
    })
    
})