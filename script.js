let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#btn");
let ngb = document.querySelector("#nbtn");
let msgc = document.querySelector(".mc");
let msg = document.querySelector("#msg");

let turno = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enabledboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgc.classList.remove("mc");
    disabledboxes();
};

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return;
            }
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const rg = () => {
    turno = true;
    enabledboxes();
    msgc.classList.add("mc");
};

ngb.addEventListener("click", rg);
resetbtn.addEventListener("click", rg);
