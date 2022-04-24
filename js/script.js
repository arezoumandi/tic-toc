let gameActive = true;
let currentPalyer = "X";
let gemeCellStatus = ["", "", "", "", "", "", "", "", "",];
let lastCellClicked = 10;
let winer = "";
const truePath = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let scores=[
    {
        "player": "X",
        "score":0
    },
    {
        "player": "Y",
        "score":0
    }
]

let Xscore=0;
let Oscore=0;
for (let i = 0; i < 9; i++) {
    document.getElementById(i).addEventListener('click', cellClickHandler.bind({}, i));
}


function cellClickHandler(cellClicked) {
    if (gameActive) {
        if (gemeCellStatus[cellClicked] == "") {
            gemeCellStatus[cellClicked] = currentPalyer;
            document.getElementById(cellClicked).innerHTML = currentPalyer;
            checkResult();

            playerChange();
        }
        else {
            alert("This cell is Full")
        }
        lastCellClicked = cellClicked;
    }

}


function playerChange() {
    if (currentPalyer == "X") {
        currentPalyer = "O"
    }
    else if (currentPalyer == "O") {
        currentPalyer = "X"
    }
}

function checkGameConditions(a, b, c) {
    if (gemeCellStatus[a] == gemeCellStatus[b] && gemeCellStatus[b] == gemeCellStatus[c]) {
        if (gemeCellStatus[c] != "") {
            winer = currentPalyer;
            alert("palyer " + winer + " is win");
            gameActive = false;
            if (winer=="X")
            {
                x=localStorage.getItem('Xscore');
                Xscore+=x;
                localStorage.setItem('Xscore',Xscore);               
                alert("x sxore="+Xscore);
            }
            else{
                Oscore++;
            }
            // alert("X score="+Xscore);
            y=localStorage.getItem('Xscore');
            // alert("x sxore="+y)


        }
    }
}

function checkResult() {
    for(i=0;i<truePath.length;i++){
        row=truePath[i];
        a=row[0];
        b=row[1];
        c=row[2];
        checkGameConditions(a,b,c);
    }
   

    if (!gemeCellStatus.includes("")) {
        alert("Game ended in a draw");
        alert(gemeCellStatus[0] + gemeCellStatus[0] + gemeCellStatus[0]);

    }

}


