function randomColor() {
    var randInt = Math.floor((Math.random() *4) +1);

    if (randInt == 4) {
      return "blue";
    } else if (randInt == 3) {
      return "yellow";
    } else if (randInt == 2) {
      return "green";
    } else if (randInt == 1){
      return "red";
    } else {
      return "color Error";
    }
}
