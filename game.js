function display() {
    let game = document.getElementById("game")
    let table = document.createElement("table")
    table.style.border = '1px solid black'
    game.appendChild(table)

    for (let i = 0; i < 10; i += 1) {
        let line = document.createElement("tr")
        line.style.width = 400
        line.style.height = 40
        table.appendChild(line)
        for (let j = 0; j < 10; j += 1) {
            let element = document.createElement("td")
            element.style.width = 40
            element.style.height = 40
            element.style.backgroundColor = '#0099FF'
            element.style.border = '1px solid black'

            element.onclick = function fire() {
                console.log(i)
                console.log(j)
                var cl = game.getElementsByTagName("td");
                cl[i * 10 + j].style.backgroundColor = "red";
            }

            line.appendChild(element)
        }
    }

    displayShips()
}

function displayShips() {
    let boardGame= [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,1,0,0,0,0,0,0,0],
        [0,0,1,0,0,0,0,0,0,0],
        [0,0,1,0,0,1,0,0,0,0],
        [0,0,1,0,0,1,0,0,0,0],
        [1,0,0,0,0,1,0,1,1,1],
        [1,0,0,0,0,0,0,0,0,0],
        [1,0,0,1,0,0,0,0,0,0],
        [1,0,0,1,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0,0,0]
        ]

    for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
            if (boardGame[i][j]) {
                let cl = document.getElementById("game").getElementsByTagName("td");
                cl[i * 10 + j].style.backgroundColor = "black";
            }
        }
    }
}