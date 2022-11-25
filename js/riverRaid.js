function newElement(tagName, className) {
    const element = document.createElement(tagName)
    element.className = className
    return element
}

const gameArea = document.querySelector('[wm-RiverRaid]')


function Barries(){

    this.bifurcation = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      ];

}

function DrawBarries(barries){ // recebe uma matrix do cenário
    // this.barries = new Barries()

    for(let i in barries){
        for(let j in barries[i]){

            let tile = barries[i][j] //bloquinho

            if(tile === 1){
                let positionX = j*5
                let positionY = i*5
                
                elementTile = newElement('div', 'tile')
                elementTile.style.left = `${positionX}%`
                elementTile.style.top = `${positionY}%`
                elementTile.style.width = "5%"
                elementTile.style.height = "5%"
                elementTile.style.position = "absolute"

                elementTile.style.backgroundColor = "green"

                gameArea.appendChild(elementTile)
                
            }
        }
    }
}


function Ship(){

    this.goingRight = false
    this.goingLeft = false
    
    this.element = newElement('img', 'ship')
    this.element.src = 'imgs/nave.png'
    this.element.style.right = "500%"

    // this.getX = () => parseInt(this.element.style.right.split('px')[0])
    // this.getX = () => this.element.style
    this.getX = () => parseInt(this.element.style.right.split('px')[0])
    this.setX = (x) => this.element.style.right = `${x}px`

    document.addEventListener("keydown", (event) =>{
        switch(event.key){
            case "ArrowLeft":
                this.goingLeft = true
                break
            
            case "ArrowRight":
                this.goingRight = true
                break
        }   
    });
    
    document.addEventListener("keyup", (event) =>{
        switch(event.key){
            case "ArrowLeft":
                this.goingLeft = false
                break
            
            case "ArrowRight":
                this.goingRight = false
                break
        }   
    });


    this.animate = () => {
        
        const motion = 10 //acrescimo de pixels por movimento
        let newXposition = this.getX()

        if(this.goingRight){
            newXposition = this.getX() - motion;
        }else if(this.goingLeft){
            newXposition = this.getX() + motion;
        }
        this.setX(newXposition)
    }

}

function RiverRaid(){

    const ship = new Ship()
    const barries = new Barries()
    DrawBarries(barries.bifurcation)
    

    gameArea.appendChild(ship.element)

    this.start = () => {

        const timer = setInterval(() =>{
            
            ship.animate()
            
        }, 20)

    }
}


new RiverRaid().start()