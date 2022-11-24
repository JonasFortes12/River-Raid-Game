function newElement(tagName, className) {
    const element = document.createElement(tagName)
    element.className = className
    return element
}

const gameArea = document.querySelector('[wm-RiverRaid]')
 
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

    gameArea.appendChild(ship.element)

    this.start = () => {

        const timer = setInterval(() =>{

            ship.animate()
            
        }, 20)

    }
}


new RiverRaid().start()