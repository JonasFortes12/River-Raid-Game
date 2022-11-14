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

    this.getX = () => parseInt(this.element.style.left.split('px')[0])
    this.setX = (x) => this.element.style.left = `${x}px`

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
        
        let newXposition

        if(this.goingRight){
            newXposition = this.getX + 8;
        }else if(this.goingLeft){
            newXposition = this.getX - 8;
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