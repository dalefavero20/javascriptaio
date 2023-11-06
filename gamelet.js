const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;

//Code for left and right
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 50;
  }
  if (e.code === "ArrowRight") {
    position = position + 50;
  }
  if (position < 0) {
    position = 0;
  }
  refresh();
}
function refresh() {
  ball.style.left = position + "px";
}
//Code for up and down
//It doesnt work.  It no longer registers left and right above
function handleKeyPress(e) {
  if (e.code === "ArrowUp") {
    position = position - 50;
  }
  if (e.code === "ArrowDown") {
    position = position + 50;
  }
  if (position < 0) {
    position = 0;
  }
  refresh();
}
function refresh() {
  ball.style.top = position + "px";
}
