let input;
let oldInput;

const getInput = () => input.value().replace(/\s+/g, " ").replace(/\s+$/, "");

function setup() {
  createCanvas(500, 500);
  input = select("#input-code");
}

function draw() {
  background(20);
  const text = getInput();
  if (text !== oldInput) {
    console.log(runLogo(text));
    oldInput = text;
  }
}
