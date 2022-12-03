function newElement(tagName, className, idName) {
    const element = document.createElement(tagName)
    element.className = className
    element.id = idName
    return element
}

const gameArea = document.querySelector('[wm-RiverRaid]')
const statsArea = document.querySelector('[wm-Stats]')
const stats = new Stats()
let playing = false

function Barries() {

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
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    ];

    this.zigzag = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    ];

    this.midle = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    ];

    this.toright = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    ];

    this.toleft = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    ];

}

function DrawBarries(barrie) { // recebe a matriz da barreira específica (cenário)

    this.gameContext = newElement("div", "barrieStyle")
    this.gameContext.style.position = `absolute`
    this.gameContext.style.display = `grid`
    this.gameContext.style.gridTemplateColumns = `repeat(20, 1fr)`;
    this.gameContext.style.gridTemplateRows = `repeat(20, 1fr)`;
    this.gameContext.style.width = "100%";
    this.gameContext.style.height = "100%";
    this.gameContext.style.top = "-685px";

    this.barrie = barrie

    // console.log(this.barrie)
    

    this.addElementBonus = () => {

        let positions = SortPosition(this.barrie)

        while (this.barrie[positions[0]][positions[1]] != 0) {
            positions = SortPosition(this.barrie)
        }
        this.barrie[positions[0]][positions[1]] = 2
    }

    this.addElementFuel = () => {

        let positions = SortPosition(this.barrie)

        while (this.barrie[positions[0]][positions[1]] != 0) {
            positions = SortPosition(this.barrie)
        }
        this.barrie[positions[0]][positions[1]] = 3
    }

    this.addElementBonus()
    this.addElementFuel()


    for (let row in this.barrie) {
        for (let column in this.barrie[row]) {

            let tile = this.barrie[row][column] //bloquinho

            if (tile === 1) {
                let elementTile = newElement("div", "barrie")
                elementTile.style.backgroundColor = "green"
                this.gameContext.appendChild(elementTile)

            } else if (tile === 0) {
                let elementTile = newElement("div", "air")
                elementTile.style.backgroundColor = "deepskyblue"
                this.gameContext.appendChild(elementTile)

            } else if (tile === 2) {
                let elementTile = newElement("div", "bonus")
                let imgBonus = newElement('img', 'imgBonus')
                imgBonus.src = 'imgs/lunático.png'
                elementTile.style.backgroundColor = "deepskyblue"
                elementTile.appendChild(imgBonus)
                this.gameContext.appendChild(elementTile)

            } else if (tile === 3) {
                let elementTile = newElement("div", "fuel")
                let imgFuel = newElement('img', 'imgFuel')
                imgFuel.src = 'imgs/miniverso.png'
                elementTile.style.backgroundColor = "deepskyblue"
                elementTile.appendChild(imgFuel)
                this.gameContext.appendChild(elementTile)

            }


        }
    }


    gameArea.insertAdjacentElement('afterbegin', this.gameContext);

    this.getY = () => parseInt(this.gameContext.style.top.split('px')[0]);
    this.setY = (y) => this.gameContext.style.top = `${y}px`;

    this.animate = () => {

        const motion = 5 //acrescimo de pixels por movimento
        let newYposition = this.getY();

        newYposition = this.getY() + motion;

        this.setY(newYposition)

        // if(this.getY() > 1000)
        //     this.gameContext

    }

    this.delete = () => {
        this.gameContext.parentNode.removeChild(this.gameContext)
    }

}

function SortPosition(barrie) {

    let rowPosition = Math.floor(Math.random() * barrie.length)
    let columnPosition = Math.floor(Math.random() * barrie[rowPosition].length)

    return [rowPosition, columnPosition]
}

function SortBarries(barries) { // recebe o objeto que contem todas as barreiras (cenários)

    let arrBarries = [
        barries.bifurcation,
        barries.zigzag,
        barries.midle,
        barries.toright,
        barries.toleft
    ]
    let i = Math.floor(Math.random() * arrBarries.length)
    return arrBarries[i] // retorna uma barreira aleatória
}

function Cenary() {
    
    this.newCenary = () => {
        const barries = new Barries()
        return new DrawBarries(SortBarries(barries))
    }

    let newCenary = this.newCenary()
    let oldCenary


    this.animate = () => {
        newCenary.animate()

        if (typeof oldCenary === 'object' && oldCenary !== null) {
            oldCenary.animate()
            if (oldCenary.getY() > 680){
                stats.updatePoints()
                oldCenary.delete()
            } 
        }

        if (newCenary.getY() == 0) {
            oldCenary = newCenary
            newCenary = this.newCenary()
        }

    }

}

function Ship() {

    this.goingRight = false
    this.goingLeft = false

    this.element = newElement('img', 'ship', 'myShip')
    this.element.src = 'imgs/nave.png'
    this.element.style.right = "500%"

    this.getX = () => parseInt(this.element.style.right.split('px')[0])
    this.setX = (x) => this.element.style.right = `${x}px`

    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowLeft":
                this.goingLeft = true
                break

            case "ArrowRight":
                this.goingRight = true
                break
        }
    });

    document.addEventListener("keyup", (event) => {
        switch (event.key) {
            case "ArrowLeft":
                this.goingLeft = false
                break

            case "ArrowRight":
                this.goingRight = false
                break
        }
    });


    this.animate = () => {

        const motion = 15 //acrescimo de pixels por movimento
        let newXposition = this.getX()

        if (this.goingRight) {
            newXposition = this.getX() - motion;
        } else if (this.goingLeft) {
            newXposition = this.getX() + motion;
        }
        this.setX(newXposition)
    }

}

function Collid() {

    this.isColliding = () => {

        let shipElement = document.getElementById("myShip")
        let barriesLenght = document.getElementsByClassName("barrie").length

        for (let i = 0; i < barriesLenght; i++) {
            let barrieElement = document.getElementsByClassName("barrie")[i]
            const a = shipElement.getBoundingClientRect()
            const b = barrieElement.getBoundingClientRect()
            const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
            const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

            if (horizontal && vertical)
                return true
        }
        return false

    }

    this.isGetElementFuel = () => {

        let shipElement = document.getElementById("myShip")
        let fuelsLenght = document.getElementsByClassName("fuel").length

        for (let i = 0; i < fuelsLenght; i++) {
            let fuelElement = document.getElementsByClassName("fuel")[i]
            const a = shipElement.getBoundingClientRect()
            const b = fuelElement.getBoundingClientRect()
            const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
            const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

            if (horizontal && vertical){
                fuelElement.removeChild(fuelElement.firstChild)
                return true
            }
        }
        return false

    }

    this.isGetElementBonus = () => {

        let shipElement = document.getElementById("myShip")
        let bonusLenght = document.getElementsByClassName("bonus").length

        for (let i = 0; i < bonusLenght; i++) {
            let bonusElement = document.getElementsByClassName("bonus")[i]
            const a = shipElement.getBoundingClientRect()
            const b = bonusElement.getBoundingClientRect()
            const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
            const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

            if (horizontal && vertical){
                bonusElement.removeChild(bonusElement.firstChild)
                return true
            }
        }
        return false

    }

    this.verifyCollid = () => {

        if (this.isColliding()){
            playing = false
            stats.gameOver()
        }
            

    }

    this.verifyGetElementFuel = () => {

        if (this.isGetElementFuel()){
            stats.addLevelFuel()
        }
            

    }

    this.verifyGetElementBonus = () => {

        if (this.isGetElementBonus()){
            stats.addPoints()
        }

    }

}

function Stats() {
    
    let playerPoints = 0
    
    // -------------- Título ---------------
    this.title = newElement("div", "title")
    this.title.append("River Raid")

    // -------------- Pontuação ---------------
    this.points = newElement("div", "points")
    this.points.appendChild(document.createTextNode(`Pontuação: ${playerPoints}`))

    // -------------- Botão ---------------
    this.btPlay = newElement("button", "btPlay")
    this.btPlay.appendChild(document.createTextNode("JOGAR"))
    this.btPlay.onclick = () => {
        playing = true
        document.querySelector('.btPlay').style.display = 'none'
    }

    // -------------- Barra de Combustível ----------------
    this.titleFuel = newElement("div", "titleFuel")
    this.titleFuel.appendChild(document.createTextNode(`Combustível`))
    this.progressBarFuel = newElement("div", "progressBarFuel")
    

    // ---------------------Config da Página---------------
    statsArea.style.display = 'flex'
    statsArea.style.flexDirection = 'column'
    statsArea.style.justifyContent = 'flex-start'
    statsArea.style.alignItems = 'center'
    statsArea.appendChild(this.title)
    statsArea.appendChild(this.points)
    statsArea.appendChild(this.titleFuel)
    statsArea.appendChild(this.progressBarFuel)
    statsArea.appendChild(this.btPlay)

    // --------------------Métodos-------------------------------

    this.getLevelFuel = () => {
        return parseFloat(getComputedStyle(document.querySelector('.progressBarFuel')).getPropertyValue('--levelFuel'))
    }

    this.setLevelFuel = (fuel) => {
        this.progressBarFuel.style.setProperty('--levelFuel', `${fuel}`)
    }

    this.spendLevelFuel = () => {
        this.setLevelFuel(this.getLevelFuel() - 0.2)
    }

    this.addLevelFuel = () => {
        this.setLevelFuel(this.getLevelFuel() + 20)
    }

    this.verifyLevelFuel = () => {
        let level = this.getLevelFuel()
        if(level < 0){
            window.location.reload(true)
        }
    }

    this.getPoints = () => {
        return playerPoints
    }

    this.updatePoints = () => {
        playerPoints += 10
        this.points.removeChild(this.points.firstChild);
        this.points.appendChild(document.createTextNode(`Pontuação: ${playerPoints}`))
    }

    this.addPoints = () => {
        playerPoints += 100
        this.points.removeChild(this.points.firstChild);
        this.points.appendChild(document.createTextNode(`Pontuação: ${playerPoints}`))
    }

    this.gameOver = () => {
        
        this.imgGameOver = newElement("img", "imgGameOver")
        this.imgGameOver.src = 'imgs/gameover.jpg'
        statsArea.appendChild(this.imgGameOver)

        this.btRestart = newElement("button", "btRestart")
        this.btRestart.appendChild(document.createTextNode("Tentar Novamente"))
        this.btRestart.onclick = () => {
            window.location.reload(true)
        }
        statsArea.appendChild(this.btRestart)
        
    }


}


function RiverRaid() {

    const cenary = new Cenary()
    const ship = new Ship()
    

    gameArea.appendChild(ship.element)

    const collid = new Collid()

    this.play = () => {

        const timer = setInterval(() => {
            if (playing) {
                ship.animate()
                cenary.animate()
                collid.verifyCollid()
                collid.verifyGetElementFuel()
                collid.verifyGetElementBonus()
                stats.spendLevelFuel()
                stats.verifyLevelFuel()
            }
        }, 20)
    }

}


new RiverRaid().play()