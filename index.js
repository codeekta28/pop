console.log("This is index.js file");
let poppped = 0;
let ballonArray = [];
let ballons = document.querySelectorAll(".balloon");
ballons.forEach((ballon) => {
    // console.log(ballon);
    ballonArray.push(ballon);
    ballon.addEventListener("mouseover", ballonClicked);
})
// console.log(ballonArray);
let newBallonArray = [...ballonArray];
console.log(ballonArray);

function ballonClicked(e) {

    e.target.style.backgroundColor = "#ededed";
    // e.target.style.margin = "10px";
    e.target.textContent = "pop!";
    poppped++;
    removeEvent(e);
    // console.log(poppped);
    if (poppped == 24) {
        showMsg();
        deletePop();
    }
}
function removeEvent(e) {
    e.target.removeEventListener('mouseover', () => {
    })
}
function showMsg() {
    document.querySelector("#yay-no-balloons").style.display = "block";
}
function deletePop() {
    document.querySelectorAll(".balloon").forEach((ballon) => {
        ballon.remove();
    })
}
document.querySelector(".startOver").addEventListener("click", startOver);

function startOver() {
    document.querySelector("#yay-no-balloons").style.display = "none";
    newBallonArray.forEach((e) => {
        window.location.reload();
    })

}
